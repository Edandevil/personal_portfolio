import { fetchAPI } from '@/utils/strapi';
import WorkHero from '@/components/work/WorkHero';
import WorkPortfolio from '@/components/work/WorkPortfolio';
import AboutFooter from '@/components/about/AboutFooter';

// Force dynamic rendering to always show latest projects
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

async function getProjects() {
    try {
        // DEBUG: Use wildcard populate to see everything
        const data = await fetchAPI('/projects', {
            sort: ['id:desc'],
            populate: '*'
        });

        if (!data) return { error: 'Fetch returned null (check console)' };
        if (!data.data) return { error: 'No data property in response', raw: data };
        return data.data;
    } catch (e: unknown) {
        return { error: (e as Error).message };
    }
}

export default async function Work() {
    const projectsOrError = await getProjects();
    const isError = projectsOrError && !Array.isArray(projectsOrError) && 'error' in projectsOrError;
    const projects = isError ? [] : projectsOrError;

    return (
        <>
            <div data-elementor-type="wp-page" data-elementor-id="12880" className="elementor elementor-12880">

                <WorkHero />
                <WorkPortfolio projects={projects} />
            </div>
            <AboutFooter />
        </>
    );
}

import AboutHero from '@/components/about/AboutHero';
import AboutTextSlider from '@/components/about/AboutTextSlider';
import AboutBio from '@/components/about/AboutBio';
import AboutSkills from '@/components/about/AboutSkills';
import AboutToolbox from '@/components/about/AboutToolbox';
import AboutAwards from '@/components/about/AboutAwards';
import AboutContact from '@/components/about/AboutContact';
import AboutFooter from '@/components/about/AboutFooter';

export default function About() {
    return (
        <div data-elementor-type="wp-page" data-elementor-id="10679" className="elementor elementor-10679">
            <AboutHero />
            <AboutTextSlider />
            <AboutBio />
            <AboutSkills />
            <AboutToolbox />
            <AboutAwards />
            <AboutContact />
            <AboutFooter />
        </div>
    );
}

import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ServicesSection from '@/components/home/ServicesSection';
import LatestBlog from '@/components/home/LatestBlog';
import ClientsSection from '@/components/home/ClientsSection';

import { fetchAPI } from '@/utils/strapi';

async function getHeroData() {
  try {
    const response = await fetchAPI("/home-hero", { populate: "*" });
    console.log("Full API Response:", JSON.stringify(response, null, 2));
    console.log("Extracted data:", response?.data);
    return response?.data || null;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return null;
  }
}

export default async function Home() {
  const heroData = await getHeroData();
  const aboutData = await fetchAPI("/home-about", { populate: "*" }).then(res => res?.data).catch(() => null);
  const servicesData = await getServicesData();
  const featuredProjectsData = await getFeaturedProjectsData();
  const latestBlogData = await getLatestBlogData();
  const clientsData = await getClientsData();

  return (
    <div data-elementor-type="wp-post" data-elementor-id="7487" className="elementor elementor-7487">
      <HeroSection data={heroData} />
      <AboutSection data={aboutData} />
      <FeaturedProjects data={featuredProjectsData} />
      <ServicesSection data={servicesData} />
      <LatestBlog data={latestBlogData} />
      <ClientsSection data={clientsData} />
    </div>
  );
}

async function getServicesData() {
  // using explicit key construction for deep populate without qs
  return await fetchAPI("/home-service", {
    "populate[services][populate]": "*",
    "populate[video]": "true"
  }).then(res => res?.data).catch(() => null);
}

async function getFeaturedProjectsData() {
  return await fetchAPI("/home-featured-project", {
    "populate[projects][populate]": "*"
  }).then(res => res?.data).catch(() => null);
}

async function getLatestBlogData() {
  return await fetchAPI("/home-latest-blog", {
    "populate[blogs][populate]": "*"
  }).then(res => res?.data).catch(() => null);
}

async function getClientsData() {
  return await fetchAPI("/home-client", {
    "populate[logos]": "true"
  }).then(res => res?.data).catch(() => null);
}

// Redefining export to use these helpers


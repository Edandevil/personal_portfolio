// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: any }) {
    console.log(">>>>>>>>>>>>>>> BOOTSTRAP STARTING <<<<<<<<<<<<<<<");
    try {
      // 1. Set Permissions for Public Role
      console.log("Finding public role...");
      // user-permissions find often returns array
      const roles = await strapi
        .plugin("users-permissions")
        .service("role")
        .find();

      const publicRole = Array.isArray(roles) ? roles.find((r: any) => r.type === 'public') : (roles.type === 'public' ? roles : null);

      if (publicRole) {
        console.log(`Found public role ID: ${publicRole.id}`);
        const permissions = [
          "api::home-marquee.home-marquee.find",
          "api::home-about.home-about.find",
          "api::home-service.home-service.find",
          "api::home-featured-project.home-featured-project.find",
          "api::home-latest-blog.home-latest-blog.find",
          "api::home-client.home-client.find",
          "api::project.project.find",
          "api::project.project.findOne",
          "api::article.article.find",
          "api::article.article.findOne",
          // home-hero already works, but adding for completeness
          "api::home-hero.home-hero.find",
          "api::footer.footer.find",
          "api::global.global.find",
        ];

        await Promise.all(
          permissions.map(async (action) => {
            const permissionExists = await strapi.query("plugin::users-permissions.permission").findOne({
              where: {
                role: publicRole.id,
                action: action
              }
            });
            if (!permissionExists) {
              await strapi.query("plugin::users-permissions.permission").create({
                data: {
                  action,
                  role: publicRole.id,
                },
              });
              console.log(`Enabled public permission: ${action}`);
            }
          })
        );
      }

      // 2. Seed Default Content if Missing (Fixes 404s)
      const singleTypes = [
        { uid: "api::home-marquee.home-marquee", data: { items: [{ text: "Dynamic Marquee Works!" }] } },
        { uid: "api::home-about.home-about", data: { title: "About Us", subtitle: "Who we are", description: "Default content." } },
        { uid: "api::home-service.home-service", data: { title: "Our Services" } },
        { uid: "api::home-featured-project.home-featured-project", data: { title: "Featured Projects" } },
        { uid: "api::home-latest-blog.home-latest-blog", data: { title: "Latest News" } },
        { uid: "api::home-client.home-client", data: { title: "Our Clients" } },
        {
          uid: "api::footer.footer",
          data: {
            headline: "Helping start-ups scale & grow.",
            copyright_text: "VIZON.STUDIO",
            contact_email: "agntixs@studio.com",
            contact_phone: "+(302) 555-0107",
            contact_address: "4517 Washington Ave. Manchester, \nKentucky 39495",
            social_links: [
              { platform: "facebook", url: "#" },
              { platform: "twitter", url: "#" },
              { platform: "dribbble", url: "#" },
              { platform: "instagram", url: "#" }
            ],
            quick_links: [
              { label: "About", url: "/about" },
              { label: "Who We Are", url: "/who-we-are" },
              { label: "Services", url: "/services" },
              { label: "Projects", url: "/projects" },
              { label: "Blog", url: "/blog" },
              { label: "Contact Us", url: "/contact-us" }
            ]
          }
        },
        { uid: "api::global.global", data: { siteTitle: "Edandevil Portfolio", siteDescription: "Portfolio" } },
      ];

      for (const type of singleTypes) {
        const entry = await strapi.entityService.findMany(type.uid);

        // Fix: findMany returns array for Single Types in some contexts or empty array if no content
        // Must check if it's an array and empty, or null/undefined
        const isEmpty = !entry || (Array.isArray(entry) && entry.length === 0);

        if (isEmpty) {
          try {
            await strapi.entityService.create(type.uid, {
              data: {
                ...type.data,
                publishedAt: new Date(), // PUBLISH IT!
              }
            });
            console.log(`Seeded content for: ${type.uid}`);
          } catch (e) {
            // Ignore if it fails (e.g. already exists but findMany weirdness)
            console.log(`Skipping seed for ${type.uid}: ${e.message}`);
          }
        }
      }

    } catch (error) {
      console.error("Bootstrap error:", error);
    }
  },
};

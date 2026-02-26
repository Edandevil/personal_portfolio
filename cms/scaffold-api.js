const fs = require('fs');
const path = require('path');

const apiDir = path.join(__dirname, 'src/api');
const apis = [
    'home-marquee',
    'home-about',
    'home-service',
    'home-featured-project',
    'home-latest-blog',
    'home-client',
    'project',
    'article'
];

apis.forEach(api => {
    const baseDir = path.join(apiDir, api);

    // Create directories
    ['routes', 'controllers', 'services'].forEach(type => {
        const dir = path.join(baseDir, type);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const filePath = path.join(dir, `${api}.ts`);
        let content = '';

        if (type === 'routes') {
            content = `/**
 * ${api} router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::${api}.${api}');
`;
        } else if (type === 'controllers') {
            content = `/**
 * ${api} controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::${api}.${api}');
`;
        } else if (type === 'services') {
            content = `/**
 * ${api} service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::${api}.${api}');
`;
        }

        fs.writeFileSync(filePath, content);
        console.log(`Created ${filePath}`);
    });
});

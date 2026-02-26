const axios = require('axios');

async function checkProjects() {
    try {
        const url = 'http://localhost:1337/api/projects?populate=categories';
        console.log(`Fetching ${url}...`);
        const response = await axios.get(url);

        const projects = response.data.data;
        console.log(`Found ${projects.length} projects.`);

        if (projects.length > 0) {
            console.log('--- First Project Sample ---');
            console.log(JSON.stringify(projects[0], null, 2));

            console.log('\n--- Category Analysis ---');
            projects.forEach(p => {
                const cats = p.categories;
                // Check for Strapi v5 structure or direct array
                let catData = 'Missing';
                if (cats) {
                    if (Array.isArray(cats)) catData = `Array(${cats.length})`;
                    else if (cats.data) catData = `Relation(data=${cats.data.length})`;
                    else catData = typeof cats;
                }
                console.log(`Project "${p.title}" (ID: ${p.id}): Categories = ${JSON.stringify(cats)} [Type: ${catData}]`);
            });
        }
    } catch (error) {
        console.error('Error fetching projects:', error.message);
    }

    try {
        console.log('\n--- Checking Categories Endpoint ---');
        const catUrl = 'http://localhost:1337/api/categories';
        console.log(`Fetching ${catUrl}...`);
        const catRes = await axios.get(catUrl);
        console.log(`Found ${catRes.data.data.length} categories.`);
    } catch (error) {
        console.error('Error fetching categories:', error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
            // console.error('Data:', error.response.data);
        }
    }
}

checkProjects();

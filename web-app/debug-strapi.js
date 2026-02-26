const STRAPI_URL = "http://localhost:1337/uploads/wireless_symbol_2886c8f97f.png";

async function checkFavicon() {
    try {
        console.log(`Checking access to: ${STRAPI_URL}`);

        const response = await fetch(STRAPI_URL, { method: 'HEAD' });

        console.log("Status:", response.status);
        console.log("Content-Type:", response.headers.get('content-type'));

        if (response.ok) {
            console.log("SUCCESS: Image is accessible.");
        } else {
            console.error("FAILURE: Image returned error status.");
        }

    } catch (e) {
        console.error("Fetch failed:", e);
    }
}

checkFavicon();

import { stringify } from "qs";

export const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337";

/**
 * Helper to get the full URL for a Strapi image
 * @param {string} path - The image path (e.g. /uploads/image.png)
 * @returns {string} - Full URL (e.g. http://localhost:1337/uploads/image.png)
 */
export function getStrapiMedia(path: string | null) {
    if (!path) return null;
    if (path.startsWith("http") || path.startsWith("//")) {
        return path;
    }
    return `${STRAPI_API_URL}${path}`;
}

/**
 * Fetch data from Strapi API
 * @param {string} path - API endpoint path (e.g. /home-hero)
 * @param {object} urlParamsObject - URL parameters object
 * @param {object} options - Fetch options
 * @returns {Promise<any>} - JSON response
 */
export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
    try {
        // Merge default and user options
        const mergedOptions = {
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store" as RequestCache, // Ensure fresh data on every fetch
            ...options,
        };


        // Build request URL with qs
        const queryString = stringify(urlParamsObject, {
            encodeValuesOnly: true, // prettify URL
        });

        const requestUrl = `${STRAPI_API_URL}/api${path}${queryString ? `?${queryString}` : ""}`;
        console.log(`DEBUG: fetchAPI Requesting: ${requestUrl}`);

        // Trigger API call
        const response = await fetch(requestUrl, mergedOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching API from ${path}:`, error);
        return null;
    }
}

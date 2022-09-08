import type { PageServerLoad } from './$types';

import content from "../content/about.json";

export const load : PageServerLoad = async () => {
    try {
        // Fetch from DB?
        return {
            content,
        };
    } catch {
        return {
            content: [],
        };
    }
}
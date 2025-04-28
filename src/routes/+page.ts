import type { DevExperience } from '$lib/types/sanity';
import sanityClient from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const workExperience: DevExperience[] = await sanityClient.fetch(
        '*[_type == "devExperience"] | order(startDate desc)');

    return {
        workExperience
    };
}
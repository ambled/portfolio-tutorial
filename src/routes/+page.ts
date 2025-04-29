
import sanityClient, { processProjectEntries } from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
        '*[_type == "devExperience"] | order(startDate desc)');

    const rawProjects: SanityProject[] = await sanityClient.fetch(
        '*[_type == "project"] | order(dateAccomplished desc)');


    const projects = rawProjects.map(processProjectEntries)

    console.log(projects[0])

    return {
        workExperience, projects
    };
}
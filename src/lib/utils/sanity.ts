import {createClient, type ClientConfig} from '@sanity/client';

const config: ClientConfig = {
    projectId: 'mjpx7k9o',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-10-01',
}

const sanityClient = createClient(config);
export default sanityClient;
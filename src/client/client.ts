import { createClient } from '@sanity/client';
const client = createClient({
  projectId: 't9w7ogo3',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-13',
});

export default client;

/* export default async function getPosts() {
  const posts = await client.fetch('*[_type == "game"]')
  return posts
}
 */

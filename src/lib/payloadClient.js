'use server';

import { getPayloadClient } from '../../payload';

// This is a server action to fetch data from Payload
export async function getPayload() {
  const payload = await getPayloadClient();
  return payload;
}

// Example utility function to fetch posts
export async function getPosts({ limit = 10, page = 1 }) {
  const payload = await getPayloadClient();
  
  try {
    return await payload.find({
      collection: 'posts',
      limit,
      page,
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { docs: [] };
  }
}
// src/app/api/posts/route.js
import { getPayloadClient } from '../../../lib/payloadClient';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const payload = await getPayloadClient();
    
    // Get all published posts
    const posts = await payload.find({
      collection: 'posts',
      limit: 10,
    });
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

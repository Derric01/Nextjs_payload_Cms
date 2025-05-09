import { getPayloadClient } from '../../lib/payloadClient';
import Link from 'next/link';

// This is a server component that fetches data at request time
export default async function BlogPage() {
  let posts = [];
  
  try {
    // Get the Payload client
    const payload = await getPayloadClient();
    
    // Fetch posts
    const response = await payload.find({
      collection: 'posts',
      limit: 10,
    });
    
    posts = response.docs;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`}
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-400 mb-4">
                  {new Date(post.publishedDate).toLocaleDateString()}
                </p>
                <div className="text-blue-400 hover:underline">
                  Read more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-gray-400">
            No blog posts found. Create some in the Payload CMS admin panel.
          </p>
          <p className="mt-4">
            <Link 
              href="/admin" 
              className="text-blue-400 hover:underline"
            >
              Go to Admin Panel →
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

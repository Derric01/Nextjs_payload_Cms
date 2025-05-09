import { getPayloadClient } from '../../../lib/payloadClient';
import { notFound } from 'next/navigation';

// Define the generateMetadata function for dynamic SEO
export async function generateMetadata({ params }) {
  try {
    const { slug } = params;
    const payload = await getPayloadClient();
    
    const { docs } = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
      },
    });
    
    const post = docs[0];
    
    if (!post) return {
      title: 'Post Not Found',
      description: 'The requested post could not be found',
    };
    
    return {
      title: post.title + ' | Beta to Alpha',
      description: post.title,
    };
  } catch (error) {
    return {
      title: 'Blog Post',
      description: 'Beta to Alpha Blog Post',
    };
  }
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  
  try {
    const payload = await getPayloadClient();
    
    const { docs } = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
      },
    });
    
    const post = docs[0];
    
    if (!post) {
      notFound();
    }
    
    return (
      <div className="container mx-auto py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        
        {post.publishedDate && (
          <p className="text-gray-400 mb-8">
            Published on {new Date(post.publishedDate).toLocaleDateString()}
          </p>
        )}
        
        {post.featuredImage && (
          <div className="mb-8">
            <img 
              src={`${process.env.NEXT_PUBLIC_SERVER_URL}${post.featuredImage.url}`} 
              alt={post.featuredImage.alt} 
              className="w-full rounded-lg"
            />
          </div>
        )}
        
        <div className="prose prose-invert prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ 
            __html: post.content?.replace(/<[^>]*>?/gm, '') || '' 
          }} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching post:', error);
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Error</h1>
        <p>There was an error loading this blog post.</p>
      </div>
    );
  }
}
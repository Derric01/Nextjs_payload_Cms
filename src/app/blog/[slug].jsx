import { useRouter } from 'next/router';
import { posts } from '@/lib/posts';

export default function BlogPost({ post }) {
  const { isFallback } = useRouter();

  if (isFallback) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-300">{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = posts.map(post => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find(p => p.slug === params.slug);

  return { props: { post } };
}

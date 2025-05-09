import Link from 'next/link';


export default function BlogPost({params}){
    const posts =[
        {
             slug:'first post',title:'my first Blog Post'
        },

        {
            slug:'second post',title:'my second Blog Post'
        },

    ];

    return(
        <div>
            <h1 className='text-3xl font-bold'>Blog</h1>
            <ul className='mt-4'>
                {posts.map(post=>{
                    <li key={post.slug} >
                        <Link href={`/blog/${post.slug}`} className='text-blue-500 hover:underline'>
                            {post.title}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    )
}
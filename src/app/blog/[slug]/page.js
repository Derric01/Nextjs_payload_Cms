export default function BlogPost({params}){
return(<div>
    <h1 className="text-3xl font-bold">Blog post:{params.slug}</h1>
    <p className="mt-4 text-gray-400">This is a dynamic post page for the slug above </p>
    </div>
)
}
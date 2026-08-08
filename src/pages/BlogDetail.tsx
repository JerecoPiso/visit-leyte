import { useParams, Link } from "react-router-dom";
import { MdArrowBack, MdCalendarToday, MdPerson, MdAccessTime } from "react-icons/md";
import { blogPosts } from "../data/blog";

const categoryColors: Record<string, string> = {
    History: 'bg-amber-100 text-amber-700',
    Travel: 'bg-sky-100 text-sky-700',
    Culture: 'bg-purple-100 text-purple-700',
}

const BlogDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return (
            <div className="pt-32 pb-20 text-center px-4">
                <h1 className="font-bold text-3xl text-slate-800">Article not found</h1>
                <p className="text-slate-500 mt-3">We couldn't find the story you're looking for.</p>
                <Link to="/blog" className="btn-primary inline-block mt-6">Back to Blog</Link>
            </div>
        )
    }

    const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

    return (
        <div className="pt-28 pb-20">
            <div className="md:px-16 px-4 max-w-4xl mx-auto">
                <Link to="/blog" className="link text-slate-500 mb-6 inline-flex">
                    <MdArrowBack /> Back to Blog
                </Link>
                <br />
                <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${categoryColors[post.category] || 'bg-slate-100 text-slate-700'}`}>
                    {post.category}
                </span>
                <h1 className="font-bold text-3xl md:text-4xl text-slate-800 mt-4 leading-tight">{post.title}</h1>

                <div className="flex items-center flex-wrap gap-x-5 gap-y-2 text-slate-500 text-sm mt-4">
                    <span className="flex items-center gap-1"><MdPerson /> {post.author}</span>
                    <span className="flex items-center gap-1"><MdCalendarToday /> {post.date}</span>
                    <span className="flex items-center gap-1"><MdAccessTime /> {post.readTime}</span>
                </div>

                <div className="relative rounded-2xl overflow-hidden mt-8">
                    <img src={post.photo} alt={post.title} className="h-[24em] w-full object-cover" />
                </div>

                <div className="mt-10 flex flex-col gap-5">
                    {post.content.map((paragraph, i) => (
                        <p key={i} className="text-slate-600 leading-relaxed text-base">{paragraph}</p>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-slate-100">
                    {post.tags.map((tag) => (
                        <span key={tag} className="tags">{tag}</span>
                    ))}
                </div>
            </div>

            {/* Related */}
            {otherPosts.length > 0 && (
                <div className="md:px-16 px-4 mt-16">
                    <h2 className="font-bold text-2xl text-slate-800 mb-6">More Stories</h2>
                    <div className="flex flex-wrap gap-6">
                        {otherPosts.map((p) => (
                            <Link to={`/blog/${p.id}`} key={p.id} className="group md:w-[22em] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 block">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={p.photo}
                                        alt={p.title}
                                        className="group-hover:scale-110 transition-transform duration-700 h-[12em] w-full object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${categoryColors[p.category] || 'bg-slate-100 text-slate-700'}`}>
                                        {p.category}
                                    </span>
                                    <h3 className="text-base font-bold text-slate-800 mt-3">{p.title}</h3>
                                    <p className="text-slate-500 text-sm mt-2 leading-relaxed line-clamp-2">{p.excerpt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default BlogDetail

import { Link } from "react-router-dom";
import RecentsAndPopular from "../components/RecentsAndPopular";
import blogHero from '../assets/blog.jpg'
import { blogPosts } from "../data/blog";

const categoryColors: Record<string, string> = {
  History: 'bg-amber-100 text-amber-700',
  Travel: 'bg-sky-100 text-sky-700',
  Culture: 'bg-purple-100 text-purple-700',
}

const popular = blogPosts.slice(0, 4);
const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

const Blog = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="md:px-16 px-4">

        {/* Page header */}
        <div className='mb-10'>
          <span className='text-sky-500 text-sm font-semibold tracking-widest uppercase'>Stories & Insights</span>
          <h1 className='font-bold text-4xl md:text-5xl text-slate-800 mt-2'>Leyte Blog</h1>
        </div>

        {/* Hero image */}
        <Link to={`/blog/${blogPosts[1].id}`} className='relative rounded-2xl overflow-hidden mb-10 block'>
          <img src={blogHero} alt="Blog" className="h-[28em] w-full object-cover" />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
          <div className='absolute bottom-6 left-6 max-w-lg'>
            <span className='bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full'>
              Featured Story
            </span>
            <h2 className='text-white text-3xl font-bold mt-3 leading-tight'>Discover the Hidden Gems of Leyte's Coastline</h2>
            <p className='text-slate-300 text-sm mt-2'>A journey through untouched beaches and pristine waters that await the adventurous traveler.</p>
          </div>
        </Link>

        <div className='grid grid-cols-4 gap-x-8'>
          {/* Blog posts */}
          <div className="md:col-span-3 col-span-4">
            <div className='flex items-center justify-between mb-6 pb-4 border-b border-slate-100'>
              <h2 className='font-bold text-2xl text-slate-800'>Latest Articles</h2>
              <span className='text-sky-500 text-sm font-medium cursor-pointer hover:text-sky-600'>View All →</span>
            </div>

            <div className='flex flex-col gap-8'>
              {blogPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className='grid grid-cols-2 gap-6 pb-8 border-b border-slate-100 last:border-0 group cursor-pointer'>
                  <div className='md:col-span-1 col-span-2 overflow-hidden rounded-2xl'>
                    <img
                      src={post.photo}
                      alt={post.title}
                      className="h-[14em] w-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                    />
                  </div>
                  <div className='md:col-span-1 col-span-2 flex flex-col justify-center'>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3 ${categoryColors[post.category] || 'bg-slate-100 text-slate-700'}`}>
                      {post.category}
                    </span>
                    <h3 className='font-bold text-xl text-slate-800 leading-tight group-hover:text-sky-600 transition-colors'>{post.title}</h3>
                    <p className='text-slate-500 text-sm mt-2 leading-relaxed'>{post.excerpt}</p>
                    <p className='text-slate-400 text-xs mt-3'>{post.author} · {post.date} · {post.readTime}</p>
                    <span className='btn-primary w-fit mt-4 text-xs px-5 py-2'>Read More</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className='md:col-span-1 col-span-4 mt-8 md:mt-0'>
            <div className='mb-8'>
              <h2 className='font-bold text-xl text-slate-800 mb-4 pb-3 border-b border-slate-100'>Most Popular</h2>
              <div className='flex flex-col gap-1'>
                {popular.map((post) => (
                  <RecentsAndPopular key={post.id} to={`/blog/${post.id}`} photo={post.photo} title={post.title} tags={`${post.category} · ${post.tags[0]}`} />
                ))}
              </div>
            </div>

            <div>
              <h2 className='font-bold text-xl text-slate-800 mb-4 pb-3 border-b border-slate-100'>Browse Tags</h2>
              <div className='flex flex-wrap gap-2'>
                {allTags.map(tag => (
                  <button key={tag} type='button' className='tags'>{tag}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

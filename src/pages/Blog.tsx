import mainpicture from '../assets/island3.jpg';
import RecentsAndPopular from "../components/RecentsAndPopular";
import blog from '../assets/blog.jpg'

const blogPosts = [
  {
    title: '79th Leyte Gulf Landing',
    excerpt: 'Join us as we commemorate the historic Leyte Gulf Landing, a pivotal turning point in World War II that took place on the shores of Palo, Leyte.',
    author: 'John Santos',
    date: 'May 20, 2025',
    category: 'History',
  },
  {
    title: 'Best Beaches in Leyte',
    excerpt: 'From Kalanggaman Island to Digyo Island, discover the most breathtaking beach destinations that Leyte has to offer for every type of traveler.',
    author: 'Maria Reyes',
    date: 'May 12, 2025',
    category: 'Travel',
  },
  {
    title: 'Pintados Festival 2025',
    excerpt: 'Experience the vibrant celebration of Leyte\'s tattooed warriors. The Pintados-Kasadyaan Festival is one of the most colorful events in the Visayas region.',
    author: 'Carlo Diaz',
    date: 'May 5, 2025',
    category: 'Culture',
  },
]

const categoryColors: Record<string, string> = {
  History: 'bg-amber-100 text-amber-700',
  Travel: 'bg-sky-100 text-sky-700',
  Culture: 'bg-purple-100 text-purple-700',
}

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
        <div className='relative rounded-2xl overflow-hidden mb-10'>
          <img src={blog} alt="Blog" className="h-[28em] w-full object-cover" />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
          <div className='absolute bottom-6 left-6 max-w-lg'>
            <span className='bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full'>
              Featured Story
            </span>
            <h2 className='text-white text-3xl font-bold mt-3 leading-tight'>Discover the Hidden Gems of Leyte's Coastline</h2>
            <p className='text-slate-300 text-sm mt-2'>A journey through untouched beaches and pristine waters that await the adventurous traveler.</p>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-x-8'>
          {/* Blog posts */}
          <div className="md:col-span-3 col-span-4">
            <div className='flex items-center justify-between mb-6 pb-4 border-b border-slate-100'>
              <h2 className='font-bold text-2xl text-slate-800'>Latest Articles</h2>
              <span className='text-sky-500 text-sm font-medium cursor-pointer hover:text-sky-600'>View All →</span>
            </div>

            <div className='flex flex-col gap-8'>
              {blogPosts.map((post, i) => (
                <div key={i} className='grid grid-cols-2 gap-6 pb-8 border-b border-slate-100 last:border-0 group cursor-pointer'>
                  <div className='md:col-span-1 col-span-2 overflow-hidden rounded-2xl'>
                    <img
                      src={mainpicture}
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
                    <p className='text-slate-400 text-xs mt-3'>{post.author} · {post.date}</p>
                    <button type='button' className='btn-primary w-fit mt-4 text-xs px-5 py-2'>Read More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className='md:col-span-1 col-span-4 mt-8 md:mt-0'>
            <div className='mb-8'>
              <h2 className='font-bold text-xl text-slate-800 mb-4 pb-3 border-b border-slate-100'>Most Popular</h2>
              <div className='flex flex-col gap-1'>
                <RecentsAndPopular photo={mainpicture} title={'Pintados Kasadyaan 2025'} tags={"Culture · Festival"} />
                <RecentsAndPopular photo={mainpicture} title={'Kalanggaman Island Guide'} tags={"Travel · Beach"} />
                <RecentsAndPopular photo={mainpicture} title={'Leyte War Memorial'} tags={"History · Landmark"} />
                <RecentsAndPopular photo={mainpicture} title={'Top 10 Foods in Leyte'} tags={"Food · Culture"} />
              </div>
            </div>

            <div>
              <h2 className='font-bold text-xl text-slate-800 mb-4 pb-3 border-b border-slate-100'>Browse Tags</h2>
              <div className='flex flex-wrap gap-2'>
                {['Beach', 'Island', 'Festival', 'History', 'Food', 'Culture', 'Adventure', 'Nature'].map(tag => (
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

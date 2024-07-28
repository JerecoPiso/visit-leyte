// import BlogCard from "../components/BlogCard"
import mainpicture from '../assets/island3.jpg';
import RecentsAndPopular from "../components/RecentsAndPopular";
import blog from '../assets/blog.jpg'
const Blog = () => {
    return (
        <div className="mt-28 mb-24">
            <div className="md:px-[3em] px-2 mt-10">
                <img src={blog} alt="" className="h-[25em] w-full" />
                <div className='grid grid-cols-4 gap-x-6 mt-8'>
                    <div className="md:col-span-3 col-span-4">
                        <p className='font-bold text-2xl mt-2 text-slate-700 '>LATEST</p>
                        <div className='border-t border-slate-200 mt-2'>
                            <div className='grid grid-cols-2 gap-x-4 mt-3'>
                                <div className='md:col-span-1 col-span-2'>
                                    <img src={mainpicture} alt="" className="h-[15em] w-full" />
                                </div>
                                <div className='md:col-span-1 col-span-2 flex items-center'>
                                    <div >
                                        <p className='font-bold text-2xl text-slate-800'>79TH Leyte Gulf Landing</p>
                                        <p className='text-base mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident voluptas autem dolor incidunt modi accusantium possimus ipsam nihil, ad, explicabo optio illum id mollitia sunt. Aliquid illo optio cum!</p>
                                        <p className='text-slate-500 text-[0.8em] mt-2'>John, 1 year ago</p>
                                        <button type='button' className='bg-slate-800 text-white px-4 py-2 rounded-sm mt-2 text-xs'>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-x-4 mt-3'>
                                <div className='md:col-span-1 col-span-2'>
                                    <img src={mainpicture} alt="" className="h-[15em] w-full" />
                                </div>
                                <div className='md:col-span-1 col-span-2 flex items-center'>
                                    <div >
                                        <p className='font-bold text-2xl text-slate-800'>79TH Leyte Gulf Landing</p>
                                        <p className='text-base mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident voluptas autem dolor incidunt modi accusantium possimus ipsam nihil, ad, explicabo optio illum id mollitia sunt. Aliquid illo optio cum!</p>
                                        <p className='text-slate-500 text-[0.8em] mt-2'>John, 1 year ago</p>
                                        <button type='button' className='bg-slate-800 text-white px-4 py-2 rounded-sm mt-2 text-xs'>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-x-4 mt-3'>
                                <div className='md:col-span-1 col-span-2'>
                                    <img src={mainpicture} alt="" className="h-[15em] w-full" />
                                </div>
                                <div className='md:col-span-1 col-span-2 flex items-center'>
                                    <div >
                                        <p className='font-bold text-2xl text-slate-800'>79TH Leyte Gulf Landing</p>
                                        <p className='text-base mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident voluptas autem dolor incidunt modi accusantium possimus ipsam nihil, ad, explicabo optio illum id mollitia sunt. Aliquid illo optio cum!</p>
                                        <p className='text-slate-500 text-[0.8em] mt-2'>John, 1 year ago</p>
                                        <button type='button' className='bg-slate-800 text-white px-4 py-2 rounded-sm mt-2 text-xs'>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-1 col-span-4'>
                        <p className='font-bold text-2xl mt-2 text-slate-700'>MOST POPULAR</p>
                        <div className='flex flex-col mt-2'>
                            <RecentsAndPopular photo={mainpicture} title={'Pintados Kasadyaan'} tags={"Culture, Festival"} />
                            <RecentsAndPopular photo={mainpicture} title={'Pintados Kasadyaan'} tags={"Culture, Festival"} />
                            <RecentsAndPopular photo={mainpicture} title={'Pintados Kasadyaan'} tags={"Culture, Festival"} />
                            <RecentsAndPopular photo={mainpicture} title={'Pintados Kasadyaan'} tags={"Culture, Festival"} />
                        </div>

                        <p className='font-bold text-2xl mt-2 text-slate-700'>TAGS</p>
                        <div className='flex flex-wrap mt-2 gap-y-3 gap-x-2'>
                            <button type='button' className='tags'>BEACH</button>
                            <button type='button' className='tags'>ISLAND</button>
                            <button type='button' className='tags'>FESTIVAL</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
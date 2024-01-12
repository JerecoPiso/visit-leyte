type BlogInfo = {
    title: String;
}
const BlogCard = ({ title }: BlogInfo) => {
  return (
    <div className=""><p className="text-4xl ">{title}</p></div>
  )
}

export default BlogCard
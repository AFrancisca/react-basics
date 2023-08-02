const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div
          className="blog-preview py-[10px] px-[16px] my-[20px] mx-[0px] border-[#fafafa] border-b-[1px] hover:shadow-md"
          key={blog.id}
        >
          <h2 className="font-semibold text-lg text-[#f1356d] mb-2">
            {blog.title}
          </h2>
          <p className="text-sm font-normal">written by: {blog.author}</p>
         
        </div>
      ))}
    </div>
  );
};

export default BlogList;

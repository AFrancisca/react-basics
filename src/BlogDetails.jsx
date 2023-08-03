import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:3000/blogs/" + id);
  const navigateTo = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:3000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigateTo("/");
    });
  };
  return (
    <div className="blog-details">
      {isLoading && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2 className="font-bold text-md text-[#f1356d] mb-[10px]">
            {blog.title}
          </h2>
          <p>Written by: {blog.author}</p>
          <div className="my-[20px] mx-0">{blog.body}</div>
          <button
            className=" bg-[#f1356d] text-[#fff] p-[8px] rounded-md cursor-pointer border-0"
            onClick={handleClick}
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

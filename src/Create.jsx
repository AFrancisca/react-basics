import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Yoshi");
  const [isLoading, setLoading] = useState(false);
  const navigateTo = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setLoading(true);
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setLoading(false);
      navigateTo("/");
    });
  };
  return (
    <div className="create max-w-[480px] my-0 mx-auto text-center">
      <h2 className="text-md text-[#f1356d] mb-[30px]">Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label className="text-left block">Blog Title:</label>
        <input
          className="w-full py-2 px-3 my-[10px] mx-0 border-[1px] border-[#ddd] block box-border"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className="text-left block">Blog Body</label>
        <textarea
          className="w-full py-2 px-3 my-[10px] mx-0 border-[1px] border-[#ddd] block box-border"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label className="text-left block">Blog Author</label>
        <select
          className="w-full py-2 px-3 my-[10px] mx-0 border-[1px] border-[#ddd] block box-border"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        >
          <option value="Yoshi">Yoshi</option>
          <option value="Mario">Mario</option>
          <option value="Luigi">Luigi</option>
        </select>
        {!isLoading && (
          <button className="bg-[#f1356d] text-[#fff] border-0 p-[8px] rounded-md cursor-pointer">
            Add Blog
          </button>
        )}
        {isLoading && (
          <button
            disabled
            className="bg-[#f1356d] text-[#fff] border-0 p-[8px] rounded-md cursor-pointer"
          >
            Adding Blog...
          </button>
        )}
        {/* <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
};

export default Create;

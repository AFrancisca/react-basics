import { useState, useEffect } from "react";
import BlogList from "./blogList";
import useFetch from "./UseFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/blogs");

  return (
    <div className="home text-lg font-semibold">
      {error && <div> {error}</div>}
      {isLoading && <div className="text-red">Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;

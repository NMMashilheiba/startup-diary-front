import { React, useState, useEffect } from "react";
import EmptyList from "../../components/Common/EmptyList";
import BlogList from "../../components/Home/BlogList";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import { blogList } from "../../config/data";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResult();
  };

  // Search for blogs by category
  const handleSearchResult = (e) => {
    // setSearchKey(e.target.value);
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    // console.log(searchKey);
    setBlogs(filteredBlogs);
  };

  // Clear search
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  useEffect(() => {
    handleSearchResult();
  }, [searchKey]);

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => {
          setSearchKey(e.target.value);
          // console.log(searchKey);
        }}
      />

      {/* Blog List or Empty List */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;

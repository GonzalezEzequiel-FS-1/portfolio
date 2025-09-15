import axios from "axios";
import React, { useState, useEffect, createContext, useContext } from "react";

const PostContext = createContext({
  post: "",
  loading: true,
  selectedPost: "",
});

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState("");

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const { data } = await axios.get("/api/blog");
        if (data.success) {
          setPost(data.data);
        }
      } catch (err) {
        console.error("Error fetching latest post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPost();
  }, []);

  return (
    <PostContext.Provider
      value={{ post, loading, setSelectedPost, selectedPost }}
    >
      {children}
    </PostContext.Provider>
  );
};

// Custom hook to use the post context
export const usePost = () => useContext(PostContext);

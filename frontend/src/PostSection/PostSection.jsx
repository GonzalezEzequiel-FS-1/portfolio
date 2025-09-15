import React, { useEffect, useState } from "react";
import { Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { usePost } from "../../context/PostContext";
const DBURL = "/api/blog/post/";
const PostSection = () => {
  const { setSelectedPost, selectedPost } = usePost();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleNavigateToPost = async (postID) => {
    //console.log(postID);

    const selected = await axios.get(`${DBURL}${postID}`);
    //console.log(selected.data.data);

    const postData = selected.data.data;
    setSelectedPost(postData);
    if (postData) {
      navigate(`/blogs/${postID}`);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/blog/all");
        const data = await res.json();
        if (data.success) {
          setPosts(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch posts", err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="h-screen w-screen lg:w-3/6 bg-slate-900/40 p-6 text-white rounded-2xl shadow-xl z-10 overflow-y-auto flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
        Recent Posts
      </h1>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div
            key={post._id}
            onClick={() => handleNavigateToPost(post._id)}
            className="w-full p-4 min-h-28 bg-slate-700 rounded-xl flex items-center gap-4 shadow-md hover:shadow-lg transition duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600"
          >
            {post.image && (
              <img
                src={
                  post.image.startsWith("data:")
                    ? post.image
                    : `/uploads/${post.image}`
                }
                alt={
                  post.title.length > 10 ? post.title.slice(0, 10) : post.title
                }
                className="w-20 h-20 object-cover rounded-md flex-shrink-0"
              />
            )}
            <div className="flex flex-col overflow-hidden">
              <Text className="text-lg font-semibold text-white truncate">
                {post.title}
              </Text>
              <Text className="text-sm text-gray-300 italic line-clamp-2">
                {post.subtitle}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostSection;

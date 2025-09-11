import { Divider, Text, Group, Loader, Center } from "@mantine/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import Link from "@tiptap/extension-link";
import dayjs from "dayjs";

const MainPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const { data } = await axios.get("/api/blog"); // <-- your backend route
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

  if (loading) {
    return (
      <Center className="w-screen h-screen">
        <Loader size="lg" />
      </Center>
    );
  }

  if (!post) {
    return (
      <Center className="w-screen h-screen text-white">
        <Text>No blog post found</Text>
      </Center>
    );
  }

  // Convert stored JSON (TipTap content) into HTML for rendering
  const extensions = [
    StarterKit,
    Link,
    Superscript,
    Subscript,
    Highlight,
    TextAlign,
  ];
  const bodyHTML =
    typeof post.body === "object"
      ? generateHTML(post.body, extensions)
      : post.body;

  return (
    <section className="transition-all duration-500 ease-in-out w-screen lg:h-screen px-10 lg:mx-6 bg-slate-900/40 rounded-xl p-6 text-white shadow-lg z-10 overflow-y-auto">
      {/* Blog Title */}
      <Text
        size="3rem"
        fw={900}
        variant="gradient"
        gradient={{ from: "violet", to: "blue", deg: 110 }}
        styles={{
          root: {
            padding: "0 0 1rem 0",
          },
        }}
      >
        {post.title}
      </Text>

      {/* Date + Author */}
      <Group className="mt-2 text-sm text-gray-200">
        <Text>Published:</Text>
        <Text>{dayjs(post.postedDate).format("ddd, MMM D YYYY")}</Text>
        <Text>| Author: {post.author}</Text>
      </Group>

      <Divider className="my-4" />

      {/* Featured Image */}
      {post.image && (
        <div className="w-full h-80 bg-blue-700 flex items-center justify-center mt-6 shadow-2xl rounded-lg z-10">
          <img
            src={
              post.image.startsWith("data:")
                ? post.image
                : `/uploads/${post.image}`
            }
            alt={post.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}

      <Divider className="my-6" />

      {/* Blog Body */}
      <div
        className="prose prose-invert max-w-none text-lg"
        dangerouslySetInnerHTML={{ __html: bodyHTML }}
      />
    </section>
  );
};

export default MainPost;

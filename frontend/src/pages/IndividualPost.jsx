import React from "react";
import { Divider, Group, Loader, Center, Text } from "@mantine/core";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import Link from "@tiptap/extension-link";
import dayjs from "dayjs";
import { IoIosArrowBack } from "react-icons/io";
import { usePost } from "../../context/PostContext";
import { useNavigate } from "react-router-dom";

const IndividualPost = () => {
  const { selectedPost, loading } = usePost();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Center className="w-screen h-screen">
        <Loader size="lg" />
      </Center>
    );
  }

  if (!selectedPost) {
    return (
      <Center className="w-screen h-screen text-white">
        <Text>No blog found</Text>
      </Center>
    );
  }

  const extensions = [
    StarterKit,
    Link,
    Superscript,
    Subscript,
    Highlight,
    TextAlign,
  ];
  const bodyHTML =
    typeof selectedPost.body === "object"
      ? generateHTML(selectedPost.body, extensions)
      : selectedPost.body;

  return (
    <section className="flex flex-col items-center justify-center w-screen mt-10">
      <div className="w-10/12 md:w-2/3 p-10 bg-slate-900/40 transition-all duration-500 ease-in-out rounded-xl text-white shadow-lg z-10 overflow-y-auto">
        <button onClick={() => navigate("/blogs")}>Go Back</button>
        <Text
          size="3rem"
          fw={900}
          variant="gradient"
          gradient={{ from: "violet", to: "blue", deg: 110 }}
          styles={{ root: { padding: "0 0 1rem 0" } }}
        >
          {selectedPost.title}
        </Text>

        <Group className="mt-2 text-sm text-gray-200">
          <Text>Published:</Text>
          <Text>
            {dayjs(selectedPost.selectedPostedDate).format("ddd, MMM D YYYY")}
          </Text>
          <Text>| Author: {selectedPost.author}</Text>
        </Group>

        <Divider className="my-4" />

        {selectedPost.image && (
          <div className="w-full h-80 bg-blue-700 flex items-center justify-center mt-6 shadow-2xl rounded-lg z-10">
            <img
              src={
                selectedPost.image.startsWith("data:")
                  ? selectedPost.image
                  : `/uploads/${selectedPost.image}`
              }
              alt={selectedPost.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}

        <Divider className="my-6" />

        <div
          className="prose prose-invert max-w-none text-lg overflow-scroll h-full"
          dangerouslySetInnerHTML={{ __html: bodyHTML }}
        />
      </div>
    </section>
  );
};

export default IndividualPost;

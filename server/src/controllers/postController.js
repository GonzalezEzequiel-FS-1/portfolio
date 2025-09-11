const BlogPost = require("../db/models/BlogPost");

const createPost = async (req, res) => {
  const { title, subtitle, body, postedDate, author, image } = req.body;

  if (!title || !subtitle || !body || !postedDate || !author) {
    return res.status(401).json({
      success: false,
      error: `Incomplete Data received. Title: ${
        title || "Not received"
      }, subtitle: ${subtitle || "Not received"}, body: ${
        body || "Not received"
      }, post date: ${postedDate || "Not received"}, author: ${
        author || "Not received"
      }`,
    });
  }

  try {
    const postData = {
      title,
      subtitle,
      body,
      postedDate,
      author,
      image: image || null, // store Base64 string if provided
    };

    console.log("Creating post:", postData);

    const savedPost = await BlogPost.create(postData);

    return res.status(200).json({
      success: true,
      data: savedPost,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

const getLatestPost = async (req, res) => {
  try {
    const latestPost = await BlogPost.findOne().sort({ createdAt: -1 });
    // Or use { postedDate: -1 } if you want to sort by the scheduled publish date

    if (!latestPost) {
      return res.status(404).json({
        success: false,
        message: "No blog posts found",
      });
    }

    return res.status(200).json({
      success: true,
      data: latestPost,
    });
  } catch (err) {
    console.error("Error fetching latest blog post:", err.message);
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

// Fetch ALL blog posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ postedDate: -1 }); // newest first

    if (!posts.length) {
      return res.status(404).json({
        success: false,
        message: "No blog posts found",
      });
    }

    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (err) {
    console.error("Error fetching all blog posts:", err.message);
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = { createPost, getLatestPost, getAllPosts };



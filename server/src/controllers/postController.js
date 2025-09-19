const BlogPost = require("../db/models/BlogPost");

const createPost = async (req, res) => {
  const { title, subtitle, body, postedDate, author, image, user } = req.body;
  console.log(req.body);
  if (!title || !subtitle || !body || !postedDate || !author || !user) {
    return res.status(400).json({
      success: false,
      error: `Incomplete Data received.
      Title: ${title || "Not received"},
      subtitle: ${subtitle || "Not received"},
      body: ${body || "Not received"},
      post date: ${postedDate || "Not received"},
      author: ${author || "Not received"},
      user: ${user || "Not Received"}
      `,
    });
  }

  try {
    const postData = {
      title,
      subtitle,
      body,
      postedDate,
      author,
      image: image || null,
      user,
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
      route: "Create Post",
      success: false,
      error: err.message,
    });
  }
};

const getLatestPost = async (req, res) => {
  try {
    const latestPost = await BlogPost.findOne().sort({ createdAt: -1 });
    // Or use { postedDate: -1 } if you want to sort by the scheduled publish date
    console.log("Before first if");
    if (!latestPost) {
      return res.status(404).json({
        success: false,
        message: "No blog posts found",
      });
    }

    return res.status(200).json({
      route: "Get Latest Post",
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
      route: "Get All Post",
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

const getSelectedBlog = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      success: false,
      error: "No ID sent",
    });
  }
  try {
    const requestedPost = await BlogPost.findById(id);
    if (!requestedPost) {
      return res.status(404).json({
        success: false,
        message: "Post Not Found",
      });
    }
    return res.status(200).json({
      route: "Get Selected Post",
      success: true,
      data: requestedPost,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

const editSelectedBlog = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if (!id || !data) {
    return res.status(400).json({
      success: false,
      error: `Incoming Data: ${data}, Incoming ID ${id}`,
    });
  }
  try {
    const updatedPost = await BlogPost.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedPost) {
      return res.status(404).json({
        success: false,
        message: "Post Not Found",
      });
    }
    return res.status(200).json({
      route: "Get Selected Post",
      success: true,
      data: updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
const deleteSelectedBlog = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      success: false,
      error: "No ID sent",
    });
  }
  try {
    const result = await BlogPost.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Post Not Found",
      });
    }

    return res.status(200).json({
      route: "Delete Selected Post",
      success: true,
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getLatestPost,
  getSelectedBlog,
  deleteSelectedBlog,
  editSelectedBlog,
};

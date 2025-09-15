const express = require("express");
const {
  createContact,
  getContact,
} = require("../controllers/contactController");
const {
  createPost,
  getLatestPost,
  getAllPosts,
  getSelectedBlog,
} = require("../controllers/postController");

const router = express.Router();

router.get("/test", (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: `Server works`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.route("/contact").post(createContact);

router.get("/contact", getContact);

router.route("/blog").post(createPost).get(getLatestPost);
router.get("/blog/post/:id", getSelectedBlog);

router.route("/blog/all").get(getAllPosts);

module.exports = router;

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
  editSelectedBlog,
  deleteSelectedBlog,
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

router.route("/contact").get(getContact).post(createContact);
router.route("/blog").post(createPost).get(getLatestPost);
router
  .route("/blog/post/:id")
  .get(getSelectedBlog)
  .put(editSelectedBlog)
  .delete(deleteSelectedBlog);

router.route("/blog/all").get(getAllPosts);

module.exports = router;

const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

// Base path for all showcase sites
const showcaseBasePath = path.join(__dirname, "../../../showcaseSites/");

// Middleware to validate and serve showcase site static files
router.use("/:siteName", (req, res, next) => {
  const siteName = req.params.siteName;

  // Security: prevent directory traversal
  if (siteName.includes("..") || siteName.includes("/")) {
    return res.status(400).json({
      success: false,
      message: "Invalid site name",
    });
  }

  // Try with /dist first, then without (for flexibility)
  let sitePath = path.join(showcaseBasePath, siteName, "dist");

  if (!fs.existsSync(sitePath)) {
    // Try without dist folder
    sitePath = path.join(showcaseBasePath, siteName);
    if (!fs.existsSync(sitePath)) {
      return next(); // Pass to next handler (will eventually hit 404)
    }
  }

  // Serve static files for this site
  express.static(sitePath)(req, res, next);
});

// Catch-all for React Router within each showcase site
router.get("/:siteName/*", (req, res, next) => {
  const siteName = req.params.siteName;

  // Security: prevent directory traversal
  if (siteName.includes("..") || siteName.includes("/")) {
    return res.status(404).json({
      success: false,
      message: "Site not found",
    });
  }

  // Try with /dist first, then without
  let sitePath = path.join(showcaseBasePath, siteName, "dist");
  let indexPath = path.join(sitePath, "index.html");

  if (!fs.existsSync(indexPath)) {
    // Try without dist folder
    sitePath = path.join(showcaseBasePath, siteName);
    indexPath = path.join(sitePath, "index.html");

    if (!fs.existsSync(indexPath)) {
      return res.status(404).json({
        success: false,
        message: `Showcase site "${siteName}" not found`,
        path:showcaseBasePath
      });
    }
  }

  res.sendFile(indexPath);
});

// Optional: List all available showcase sites
router.get("/", (req, res) => {
  try {
    // Read all directories in ShowcaseFiles
    const sites = fs
      .readdirSync(showcaseBasePath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .filter((dirent) => {
        // Check for dist folder or index.html directly
        const distPath = path.join(
          showcaseBasePath,
          dirent.name,
          "dist",
          "index.html"
        );
        const directPath = path.join(
          showcaseBasePath,
          dirent.name,
          "index.html"
        );
        return fs.existsSync(distPath) || fs.existsSync(directPath);
      })
      .map((dirent) => ({
        name: dirent.name,
        url: `/showcase/${dirent.name}`,
      }));

    res.json({
      success: true,
      sites,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      path: showcaseBasePath,
    });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const path = require("path");
const dotenv = require("dotenv");
// Environmental Variables configuration
dotenv.config();
const app = express();
const frontendPath = path.join(__dirname, "../../frontend/dist");
const dealerPath = path.join(__dirname, "../../ShowcaseFiles/dealer");

router.get("/", (req, res) => {});
const portfolioSite = (req, res) => {
  try {
    console.log("Portfolio Site queried");
    app.use(express.static(portfolioSite));
    res.sendFile(path.join(portfolioSite, "index.html"));
  } catch (error) {
    console.log(error.message);
  }
};

const dealerSite = (req, res) => {
  console.log("Dealer site queried");
};

module.exports = {
  portfolioSite,
  dealerSite,
};

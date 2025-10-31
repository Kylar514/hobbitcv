const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { title: "Landing Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio", { title: "Portfolio" });
});

app.get("/group-campaigns", (req, res) => {
  res.render("group-campaigns", { title: "Group Campaigns" });
});

app.get("/concept-campaigns", (req, res) => {
  res.render("concept-campaigns", { title: "Concept Campaigns" });
});

app.get("/branding-campaigns", (req, res) => {
  res.render("branding-campaigns", { title: "Branding Campaigns" });
});

app.get("/social-media", (req, res) => {
  res.render("social-media", { title: "Social Media" });
});

app.get("/email-marketing", (req, res) => {
  res.render("email-marketing", { title: "Email Marketing" });
});

app.get("/print-media", (req, res) => {
  res.render("print-media", { title: "Print Media" });
});

app.get("/landing-page-example", (req, res) => {
  res.render("landing-page-example", { title: "Landing Page Example" });
});

app.get("/publications", (req, res) => {
  res.render("publications", { title: "Publications" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

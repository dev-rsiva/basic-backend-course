const express = require("express");
const router = express.Router();
const path = require("path");

// "^/$|/index(.html)?" represents that either '/' or 'index.html' is present, it send the file 'index.html' and the url becomes 'http://localhost:3000/index.html'
// ^ - starting point(starts from)
// $ - ending point(upto this)
// (.html)? - represents inside the ()brackets are optional
router.get("^/$|/index(.html)?", (req, res) => {
  console.log("root index");
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

// path "/new-page.html" only send the file 'new-page.html and the url becomes 'http://localhost:3000/new-page.html'
router.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "new_page_folder", "new-page.html"));
});

// If in our project, we have changed the url from 'http://localhost:3000/old-page.html' to new url('http://localhost:3000/new-page.html') because of some project requirements. However, the user remembers the end of the url as 'old-page', it is more likely, user will put 'old-page' at the end as they remembers it for the long time. So, we want to redirect them to the our new-page when they put as 'old-page' at the end.
// syntax for redirect - .redirect(status code, path)
// The below code will redirect to the url 'http://localhost:3000/new-page.html', then the content will be load as per the above code - app.get("/new-page.html", (req, res) => {res.sendFile(path.join(__dirname, "new_page_folder", "new-page.html")); )
router.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "new-page.html");
});

module.exports = router;

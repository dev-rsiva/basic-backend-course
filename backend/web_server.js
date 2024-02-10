const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

//custom middleware
app.use(logger);
app.use(cors(corsOptions));

// built in middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "./public")));
app.use("/subdir", express.static(path.join(__dirname, "./public")));

// routes
app.use("/subdir", require("./routes/subdir"));
app.use("/", require("./routes/root"));
app.use("/employees", require("./routes/api/employees"));

// syntax for next - .redirect(status code, path)
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("hello.html load panna try pannom");
    next();
  },
  (req, res) => {
    res.send("Hello Hi Makkale");
  }
);

//--------------------------------//------------------------------\\
const one = (req, res, next) => {
  console.log("one");
  next();
};

const two = (req, res, next) => {
  console.log("two");
  next();
};

const three = (req, res) => {
  console.log("three");
  res.send("finished");
};

app.get("/chain(.html)?", [one, two, three]);
//--------------------------------//------------------------------\\

// if you type anything which is not any of the routes will send to 404.html
app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.use(errorHandler);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${PORT}`);
});

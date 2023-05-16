const express = require("express");

const app = express();

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  res.send(
    "You are accessing an Express web server running in a Docker container!!"
  );
});

// Start the server and listen on port 5000
app.listen(5000, () => {
  console.log("app listens at 5000");
});

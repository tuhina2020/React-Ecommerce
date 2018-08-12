let express = require("express");
let path = require("path");

let port = require("./config").port;
let app = express();
let webpack = require("webpack");
let compression = require("compression");

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(compression());
app.use(express.static(path.resolve(__dirname, 'public', 'images')));
app.use(express.static(path.resolve(__dirname, "public", "css")));
 
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("listening on port " + port);
  }
});

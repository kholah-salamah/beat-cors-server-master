const express = require("express");
const request = require("request");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/users", (req, res) => {
  request(
    {
      url:
        "http://ec2-13-212-80-70.ap-southeast-1.compute.amazonaws.com:3002/users/list",
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

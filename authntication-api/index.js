const express = require("express");
const app = express();
const register = require("./routes/register");
const login = require("./routes/login");
const cors = require("cors");

require("./startup/mongodb")();

app.use(cors());
app.use(express.json());
app.use("/api/register", register);
app.use("/api/login", login);

const port = 3000 || process.env.PORT;

app.listen(port, () => console.log(`Listing on port ${port}`));

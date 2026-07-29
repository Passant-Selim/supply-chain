require("dotenv").config();

const app = require("./app");
const dbConnection = require("./config/db");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await dbConnection();

  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  });
};

startServer();

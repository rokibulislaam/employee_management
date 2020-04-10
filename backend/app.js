const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const graphqlSchema = require("./graphql/schema/index");
const graphqlResolvers = require("./graphql/resolvers/index");

const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

mongoose
  .connect(`mongodb://localhost:27017/employee_management`, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });

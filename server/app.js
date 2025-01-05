const express = require("express");
const app = express();
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require("./schema/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,   
  })
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

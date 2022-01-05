import express from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";
import resolvers from "./resolver";
const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

app.listen(8080, () => console.log("running on port localhost:8080/graphql"));

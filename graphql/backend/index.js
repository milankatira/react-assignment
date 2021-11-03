const express = require("express")

const { ApolloServer } = require("apollo-server-express");

const mongoose = require("mongoose")

const typeDefs = require('./typeDefs')

const resolvers = require('./resolvers')

const MONGO_URL = "mongodb://localhost/graphql"

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("++++++++++++++++++",err));


const startServer = async () => {
    const app = express();
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });
    app.listen(4000, () => console.log("Server UP & RUnning 4000"));
  };
  startServer();


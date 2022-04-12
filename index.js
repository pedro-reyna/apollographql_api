//Imports
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const typeDefs = require('./typeDefs')
const resolvers =  require('./resolvers')
const mongoose = require('mongoose')
const env = require('custom-env').env()





async function startServer(){
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers
    });
    await apolloServer.start();

    apolloServer.applyMiddleware({ app : app });

    app.use((req, res, next) => {
        res.send("Hello from express apollo server")
    });

    await mongoose.connect(process.env.BD_STRING, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('Mongoose connected...')

    app.listen(4000, () => console.log("Server us running on port 4000"));
}

startServer();
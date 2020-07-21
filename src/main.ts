const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express');
const bodyParser = require('body-parser')
const fs = require('fs')
// const path = require('path')
const router = require('./control/router.ts')


const port = process.env.PORT || 9999
const app = express()

app.all('*', (req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.use('/static', express.static('static'))
app.use((req: any, res: any, next: any) => {
    // console.log(req.path)
    next()
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(router)


const { typeDefs, resolvers } = require('./schema/index.ts')
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });


app.listen(port, () => console.log(`devServer start on port:${port}`))

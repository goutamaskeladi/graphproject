const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://goutam:Mig29@graphql-swjxr.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

mongoose.connection.once('open', () => {
     console.log('connected to database')
})

app.get('/', (req, res) => {
     res.send('<h2>Welcome to GraphQL</h2>')
})

app.use('/graphql', graphqlHTTP({
     schema,
     graphiql: true
}))

app.listen(4000, () => console.log('Application listening on port 4000'))
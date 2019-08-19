const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())

mongoose.connect('', {useNewUrlParser: true});

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
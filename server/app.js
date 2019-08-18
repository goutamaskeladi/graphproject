const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

app.get('/', (req, res) => {
     res.send('<h2>Welcome to GraphQL</h2>')
})

app.use('/graphql', graphqlHTTP({
     schema,
     graphiql: true
}))

app.listen(3000, () => console.log('Application listening on port 3000'))
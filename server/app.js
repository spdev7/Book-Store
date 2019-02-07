const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 4000;
//Connection to database
mongoose.connect('mongodb://helll:saurav123@ds123675.mlab.com:23675/graphqlsp');
mongoose.connection.once('open',()=>{
    console.log('Connection to database');
});
//Middleware to interact with graphQL
app.use('/graphql',graphqlHTTP({
   schema,
   graphiql:true
}));

app.listen(PORT,()=>{
    console.log('Server up and running');
});
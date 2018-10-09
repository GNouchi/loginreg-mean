const express = require('express');
const routes = require('./server/routes');
const app = routes(express());



app.listen( 8000,(err)=>(err)?console.log("errors! : ", err) : console.log("listening on 8000") )


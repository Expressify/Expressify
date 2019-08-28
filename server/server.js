const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const WebSocket = require("ws");
const path = require('path');
const fetch = require('node-fetch');
//Websocket Connection to port 2000;
const wss = new WebSocket.Server({ port: 2000 });

//Event listener for WebSocket Connection.
wss.on("connection", function connection(ws) {

  //ON Connection parse all requests & cookies
  app.use(express.json());
  app.use(cookieParser());
  //Listen on all Requests
  app.use("*", (req, res, next) => {

    //Data we're going to send to the establish WebSocket Server for the Front-end to grab;
    //All set as null until we define the data coming in.
    const reqData = {
      header: null,
      cookies: null,
      body: null,
      type: null
    };
    
    //Defining any requests that comes in such as Methods, Headers, Cookies & Body.
    !req.method ? reqData.type = 'Method not sent' : reqData.type = req.method;
    !req.headers ? reqData.header = 'Headers not sent' : reqData.header = req.headers;
    !req.cookies ? reqData.cookies = 'There are no cookies' : reqData.cookies = req.cookies;
    !req.body ? reqData.body = 'There is no body' : reqData.body = req.body;

    //Sending data object to WebSocket Server for Front-End to grab.
    ws.send(JSON.stringify(reqData));
    //Connection Confirmation.
    //send response from http back like the req;
    next();
  });
  //[INSERT YOUR ROUTES HERE];
  app.get('/api/test', (req, res) => {
    fetch('https://pokeapi.co/api/v2/pokemon/bibarel')
      .then(data => data.json())
      .then(data => {
        const resData = {
          header: null,
          cookies: null,
          body: null,
          type: null
        };
        //Defining any response that comes in such as Methods, Headers, Cookies & Body.
        !data.method ? resData.type = 'Method not sent' : resData.type = data.method;
        !data.headers ? resData.header = 'Headers not sent' : resData.header = data.headers;
        !data.cookies ? resData.cookies = 'There are no cookies' : resData.cookies = data.cookies;
        !data.body ? resData.body = 'There is no body' : resData.body = data.body;
        console.log('RESPONSE DATA', data)
        
        res.status(200).send(data)
        ws.send(JSON.stringify(data));
      })
    })
});

//Running NPM START. Need to go to localhost:3000/prod to view page.
app.use('/build', express.static(path.join(__dirname, '../build')))

app.get('/prod', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})


app.listen(3000, () => {
  console.log("Listening on port 3000...");
});

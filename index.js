// This is our entry file for npm
const WebSocket = require("ws");
//our library:
    //exports entire fxanlity to intercept andy's app;
//andy would invoke this, pass in his app;
module.exports = (app) => {
    //create new ws instance
    const newWS = new WebSocket(app);
    app.use('*', (req, res, next) => {
        
    })
    //do app.use to caputure all incoming/outgoing http reqs from andy's app;
        //fetch our /dev-tools to spin up our gui
    // app.get(‘/lightning-comm’, (req,res)=> res.sendFile(‘path/to/gui/html’));
    //reassign the res,send fx;

}

// TODO: Refactor server.js (Line 40) to route all user requests through this middleware


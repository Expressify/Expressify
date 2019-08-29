// This is our entry file for npm
const WebSocket = require("ws");
//our library:
    //exports entire fxanlity to intercept andy's app;
//andy would invoke this, pass in his app;
module.exports = (app) => {
    //create new ws instance
    const newWS = new WebSocket(app);
    //serves our gui page;
    const closedGUI = (res) => {
        let counter = 0;
        const renderHTML = () => res.sendFile('../public/index.html');
        if (counter === 1) renderHTML();
        counter++;
    }
    const closedGUIRes = closedGUI(res)
    //how our middleware intercepts andy's http req to our gui;
    app.use('*', (req, res, next) => {
        //oncified closedGUI;
        closedGUIRes();
        fetch('/dev-tools')
            .then(data => data.json())
            .then(response => {
                //response is our req.body copy we made in server.js (/dev-tools)
                //only sending a websocket response, not a http res bc we are middleware that has no sideFX
                console.log('should have rendered response:', response)
                ws.send(response)
            })

    })
   

    // const ligntningComm = {
    //     newInstance: new WebSocket(app),
    //     spyInto: ,
    //     redefinedSend:
    // }
    //reassign the res,send fx;
}

// TODO: Refactor server.js (Line 40) to route all user requests through this middleware


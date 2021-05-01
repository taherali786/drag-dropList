const express = require('express');

const app = express();
const server=app.listen(3000, ()=>{console.log("server is listining on port 3000")});
const io=require('socket.io')(server)


// Start of Build Socket Connection with Frontend
io.on('connection',(client)=>{
    client.on('new data',(data)=>{       
        console.log(`${data.firsArr.name} is order to ${data.dropIndex+1} position 
        and ${data.secondArr.name} is order to ${data.dragIndex+1} position`);
    });
});

// End  of Build Socket Connection with Frontend


// app.get('/', (req, res)=>{

//     res.send({status:"ok", data:"this is a test api"});
// })


const express = require('express');

const router = express.Router();
const fs = require('fs');

router.get('/',(req,res) => {
    fs.readFile('message.txt',(err,data) => {
        res.send(`<div>${data != null ? data:"No Message Sent"}
                    <form  action = "/message"  method = "POST">
                        <input id = "send" type = "text" name="msg">
                        <button onclick ="document.getElementById('send').value 
                        = window.localStorage.getItem('username')+'-'+document.getElementById('send').value" type ="submit">
                        Send</button>
                    </form>
                </div>`);
    })
})
router.post('/message',(req,res) => {
    console.log(req.body);
    fs.appendFile('message.txt',req.body.msg+'\r\n',(err)=> {
        if(err) 
            throw err;
        res.redirect('/');
    })   
})
module.exports = router;
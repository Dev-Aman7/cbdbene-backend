const express = require("express"),
    router = express.Router(),
    nodemailer = require("nodemailer");

let smtpTransport = nodemailer.createTransport({
    host: 'localhost',
    port: 25, 
    secure: false,
    tls:{
        rejectUnauthorized: false
    }
});

router.get("/test", (req, res) => {
    let replyTo = "anas3rde@gmail.com"
    let from = '"CBD Bene" <admin@cbdbene.com>',
    to = "anas3rde@gmail.com"
   
    let mail = {
        from,
        to,
        replyTo,
        subject:"test",
        text:"jdklnkdln"
    }
    smtpTransport.sendMail(mail, function(err){
        if(err){
            console.log(err)
        }
        console.log("Contact us email sent");
        res.json({status: true})
    })

});



router.post("/", (req, res) => {
    const { name, email, text, subject } = req.body;
    let replyTo = email
    //let from = `${name} <${email}>`,
let from = "customer.support@cbdbene.com"    
to = "anas3rde@gmail.com"
   


    let mail = {
        from,
        to,
        replyTo,
        subject,
        text
    }

console.log(mail)
    smtpTransport.sendMail(mail, function(err){
        if(err){
            console.log(err)
        }
        console.log("Contact us email sent");
        res.json({status: true})
    })

});

module.exports = router;

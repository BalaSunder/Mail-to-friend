var nodemailer = require('nodemailer');


var transport = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'balasunder131121@gmail.com',
            pass:'Balan@12'
        }
    }
);

// send out email


var mailOptions = {
    from:'balasunder131121@gmail.com',
    to:'amalrajan8509@gmail.com',
    subject:'hello rajan',
    text:'body of mail',
};


transporter,SendMail(mailOptions,function(error,info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent' + info.response)
    }
});
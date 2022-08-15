const express=require('express')
const axios = require('axios');
const app=express()


// SEND SMS

const data = {"sender": "obiri",
             "message": "is it working??",
             "recipients": ["233594328985","233540389039"]};

const config = {
  method: 'post',
  url: 'https://sms.arkesel.com/api/v2/sms/send',
  headers: {
   'api-key': ''
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (err) { 
  console.log(err);
});




app.listen('7000',()=>{
    console.log('app running on port')
})

 

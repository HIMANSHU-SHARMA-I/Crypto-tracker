/*Himanshu Sharma B.E 6th sem 15-05-2022*/
//pakages
//dotenv File 
require('dotenv').config(); //dotenv file
const express = require('express');
const morgan =  require('morgan'); //debuging
const cors = require('cors'); //handiling cores error
//database connection
dbsConnection = require('./db/dbsConnection');
const path = require('path');
// const chalk = require('chalk');
//router pages
const userlogin = require('./controller/users');
const superUserRouting = require('./controller/superuser');
const admin =  require('./controller/admin');

const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const app =  express();
const auth = require('./auth/allAuth');
//port numner

const port = 8000 || process.env.PORT 

//middleware
app.set('view engine','pug');
app.set('views','./views/pug/');
//setting the routing pages
app.use('/users',userlogin);
app.use('/sprusr',superUserRouting);
app.use('/admin',admin);

app.use(cookieParser());
app.use(express.static(path.join(__dirname, './'))); //for the static files
app.use(morgan('dev'));//morgan
app.use(cors());//cors error
app.use(express.json())
app.use(express.urlencoded({ extended:true }));





//index page...
app.get('/',auth.spusr,auth.admin, async (req, res) => {

    res.contentType('text/html');
    
    let user = await req.isAuth;
    let admin = await req.isadmin;
    if(user)
    {

        res.status(200).render('index',
        {
           navbar : {'Home' : '/', 'Accoim': '/smsjs', 'Announace': '/smsjs','Logout':'/users/spr/logout/'},
           title : user.fname +  ' ' + user.lname ,
           profile: '/users/spr/profile/'
        })
    
    }else if(admin)
    {


        res.status(200).render('index',
        {
           navbar : {'Home' : '/', 'Accoim': '/smsjs', 'Profile': '/admin/profile/','Logout':'/users/admin/logout/'},
           title : 'Admin : '+admin.fname +  ' ' + admin.lname ,
           profile: '/admin/profile/'
        })



    }else
    {

        res.status(200).render('index',
        {
           navbar : {'Login' : '/users/login/', 'Services': '/services', 'About': '/about','Admin' : '/users/newaccount/'},
           title : false
           
        })
    
      

    }

  
   

})




//port number
app.listen(port,()=>{

    console.log('Server is running on port', port);
    

})
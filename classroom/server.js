const express =require("express");
const app = express();

const users=require("./routes/user.js")
const posts=require("./routes/post.js")
const session=require("express-session")

const flash=require("connect-flash")
const path=require("path");
// const cookieParser=require("cookie-parser");
// app.use(cookieParser("secretecode"));//strickect string


app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));

const sessionOptions={
secret: "mysupersecreteString",
    resave: false,               // don't save session if unmodified
    saveUninitialized: true,    
};

app.use(session(sessionOptions));
app.use(flash());
   
app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name=name;

    if(name=="anonymous"){
        req.flash("error"," user not registered");
    }
    else{
    req.flash("success","user registerd successfully")

    }
   res.redirect("/hello");
});
app.get("/hello",(req,res)=>{
    res.locals.successMsg=req.flash("success");
        res.locals.errorMsg=req.flash("error");

    res.render("page.ejs",{name:req.session.name});
});


// app.get("/reqcount",(req,res)=>{
//    if( req.session.count){
//      req.session.count++;
//    }
//    else{

//     req.session.count=1;
//    }
//     res.send(`You sent request ${req.session.count} times`);
// })



//  app.get("/test",(req,res)=>{
//     res.send("test successsfull!");
//  });

// app.get("/getssignedcookie",(req,res)=>{
//     res.cookie("made-in","india" ,{signed:true})
//     res.send("signed cookie sent");
// })

// app.get("/verify",(req,res)=>{
//     console.log(res.cookies);
//     console.log(req.signedCookies); //to get signed cookie
//     req.send("verified")

// })


// app.get("/getcookies",(req,res)=>{
//     res.cookie("greet","world")
// ;
// res.send("sent you cokkies")
// })

// app/get("/greeet",(req,res)=>{
//     let {name="anonymous"}=req.cookies;

//         res.send(`hii ${name}`);

// })



// app.get("/",(req,res)=>{
//     console.dir(req.cookies);
//     res.send("hi, I m root!");
// });


// app.use("/users",users);
// app.use("/posts",posts);




app.listen(3000,()=>{
    console.log("server is listening to 3000");
})
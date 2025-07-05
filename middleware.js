 
const ExpressError=require("./utils/ExpressError.js")
const {listingSchema}=require("./schema.js");
const { reviewSchema } = require("./schema.js");
const Listing=require("./models/listing");
const Review=require("./models/review");

module.exports.isLoggedIn=(req,res,next)=>{

    if (!req.isAuthenticated()) {
        req.session.redirectUrl=req.originalUrl;
        req.flash("error", "you must be logged in to create listing!");
        return res.redirect("/login"); // ⬅️ return here
    }

    next();

 };

 module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
 };



 module.exports.validateListing=(req,res,next)=>{
     let{error}=listingSchema.validate(req.body);
     if(error){
         let errMsg=error.details.map((el)=>el.message).join(",");
       throw new ExpressError(400,errMsg);
     }else{
        next(); 
     }
 };


 module.exports.validateReview = async (req, res, next) => {
   let { error } = reviewSchema.validate(req.body);
   if (error) {
     let errMsg = error.details.map((el) => el.message).join(",");
     throw new ExpressError(400, errMsg);
   } else {
     next();
   }
 };


//  module.exports.isReviewAuthor = async (req, res, next) => {
//     console.log("req.params =", req.params);

//    let {id, reviewId } = req.params;
//    let review=await Review.findById(reviewId);

//    if(! review.author.equals(res.locals.curruser._id)){
//      req.flash("error","You dont have permission to delete this review");
//      return res.redirect(`/listing/${id}`)
//    }

//      next();
   
//  };
 
 
 




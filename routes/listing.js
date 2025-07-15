const express =require("express");
const router=express.Router();
const Listing = require("../models/listing.js");

const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js")
const {listingSchema}=require("../schema.js");
const{isLoggedIn,validateListing}=require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudconfig.js");
const upload = multer({ storage});

router.route("/")
.get(wrapAsync(listingController.index))

.post(isLoggedIn,
   upload.single('listing[image]'),
   validateListing,
   wrapAsync(listingController.createListing));

//new route
router.get("/new",isLoggedIn, listingController.renderNewForm );

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,upload.single('listing[image]') ,validateListing,wrapAsync( listingController.updateListing))
.delete(isLoggedIn,wrapAsync(listingController.destroyListing));


//edit route
router.get("/:id/edit",isLoggedIn,wrapAsync( listingController.renderEditForm));


module.exports=router;

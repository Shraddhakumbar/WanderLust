const Joi = require('joi');



module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.object({
      url: Joi.string().uri().allow('', null),  // image.url is optional but must be a valid URL if present
      filename: Joi.string().allow('', null)    // optional
    }).allow(null)  // allow image to be null if needed
  }).required()
});

module.exports.reviewSchema=Joi.object({
review:Joi.object({
   rating:Joi.number().required().min(1).max(5), 
   comment:Joi.string().required(),
}).required(),
});
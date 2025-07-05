
 🌍 WanderLust

WanderLust is a full-stack, Airbnb-inspired travel accommodation platform. It enables users to browse, list, and review stays across the globe—built as a minimal MVP to showcase fundamentals like user authentication, property management, reviews, and mapping.

---

## 🚀 Key Features

* User Authentication– Sign up, log in, and log out securely using Passport.js. 
* **Property Listings** – Users can create, view, edit, and delete listings with titles, images (via Cloudinary), location data (from Mapbox geocoding), and owner info.
* **Interactive Map** – Listings are geolocated and displayed on a dynamic Mapbox map. 
* **Reviews** – Guests can leave ratings (1–5) and comments on properties.

---

## 🛠️ Tech Stack

* **Backend**: Node.js + Express
* **Frontend**: EJS templates, Bootstrap, JavaScript
* **Database**: MongoDB (Mongoose ODM)
* **Auth**: Passport.js
* **File Storage**: Cloudinary for images
* **Maps & Geocoding**: Mapbox

---


## 🔍 How It Works

* When adding a listing, location input triggers Mapbox geocoding to capture coordinates; images upload to Cloudinary.
* Listings and maps render with EJS and dynamic Bootstrap UI.
* Reviews are linked to listings and users, managed via Mongoose relational schemas. 

---

## 📸 (Optional) Screenshots

You can include visuals like:

* Homepage with listings + map
* Listing creation form
* A listing’s detail page with reviews

---

## 🚀 Future Improvements

* Add full booking workflow (dates, calendar)
* In-app chat between guests and hosts
* Secure payments (Stripe/paypal)
* Role-based dashboards (hosts vs guests)
* Better search filters (price, rating, location radius)

---

## 📬 Get in Touch

Built by **Madhusudakokari**

* GitHub: @madhusudakokari
* Email: madhusudankokari@gmail.com

---



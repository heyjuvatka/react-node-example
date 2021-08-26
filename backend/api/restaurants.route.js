import express from "express";
import RestaurantsCtrl from "../dao/restaurants.controller.js";
import ReviewsCtrl from "../dao/reviews.controller.js";

const router = express.Router();

router.route("/").get(RestaurantsCtrl.apiGetRestaurants);

router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview);

export default router;
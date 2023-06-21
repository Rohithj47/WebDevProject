import React from "react";

function RestaurantCard({restaurant}) {
    const {name, image, description} = restaurant
    // console.log("Restaurant dta", restaurant.restaurant.name)
  return (
    <>
      <div class="card m-3 col-xs-6 col-md-4" style={{ width: "18rem" }}>
        <img class="card-img-top" src={image} alt="" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default RestaurantCard;

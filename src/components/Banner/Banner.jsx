import React from "react";

import Button from "../UI/Button";
import classes from "./Banner.module.css";
import bannerImg from "../../imgs/banner.jpg";

const Banner = () => {
  return (
    <>
      <div className={classes.banner_container}>
        <div className={classes.banner_content}>
          <h1 className={classes.title}>New Collection For Fall</h1>
          <p className={classes.para}>
            Discover all the new arrivals of ready-to-wear collection.
          </p>
          <Button className={classes.btn_shop}>SHOP NOW</Button>
        </div>
        <figure className={classes.img_container}>
          <img className={classes.img} src={bannerImg} alt="banner_img" />
        </figure>
      </div>
    </>
  );
};

export default Banner;

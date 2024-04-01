import { Carousel } from "flowbite-react";
import React from "react";

export default function BannerStore() {
  return (
    <div className="my-4 h-72 w-full">
      <Carousel>
        <div className="w-full h-full bg-red-600"></div>
        <div className="w-full h-full bg-green-600"></div>
        <div className="w-full h-full bg-yellow-600"></div>
        <div className="w-full h-full bg-rose-600"></div>
      </Carousel>
    </div>
  );
}

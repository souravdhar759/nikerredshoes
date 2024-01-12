import React from "react";

function Herosection() {
  return (
    <div className="w-full flex item-center  justify-center gap-[10px] sm: " >
      <div className=" w-[500px] h-[500px] p-6">
        <h1 className="font-sans text-6xl font font-black ">YOUR FEET DESERVE THE BEST</h1>
        <p className="my-4">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button className="bg-red-500 px-1">Shop Now </button>
          <button
            className="border
          "
          >
            Category
          </button>
        </div>

        <div className="my-2">
          <p>Also Available On</p>

          <div className="flex">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/600px-Amazon_icon.svg.png?20210720180728"
              className="h-6 my-4"
              alt="amazon-logo"
            />
            <img
              src="https://cavinkare.com/wp-content/uploads/2021/12/Flipkart-Logo-removebg-preview-300x300.png"
              className="h-12"
              alt="flipkart-logo"
            />
          </div>
        </div>
      </div>
      <div >
        <img
          src="../shoes.png"
          className=" w-[400px] h-[500px] "
          alt="hero-image"
        />
      </div>
    </div>
  );
}

export default Herosection;

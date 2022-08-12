import React from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";

const ProductCard = ({ name, price, stock }) => {
  return (
    <div className="sm:m-3 m-5 bg-gray-100 z-30 sm:p-8 p-10">
      <div className="text-lg lg:text-lg xl:text-xl font-bold p-1">{name}</div>
      <div className="space-x-3 flex items-center">
        <PlusCircleIcon className="h-6"/>
        <div className="text-gray-700 font-semibold text-base lg:text-lg p-1">
          ₹ {price}
        </div>
       <MinusCircleIcon className="h-6"/>
      </div>
      <div className="text-gray-700 font-semibold text-base lg:text-lg p-1">
        Available Quantity: {stock}
      </div>
    </div>
  );
};

export default ProductCard;

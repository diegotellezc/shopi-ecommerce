import React from "react";
import {
  ChevronRightIcon,
  ShoppingCartIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { render } from "react-dom";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  let articles = totalProducts == 1 ? "article" : "articles";

  return (
    <div className="flex justify-between items-center border border-black rounded-lg mb-4 p-4 w-80 shadow-md shadow-black/30">
      <div className="flex justify-between w-full">
        <p className="flex flex-col gap-1">
          <div className="flex items-center">
            <CalendarIcon className="h-5 w-5 text-black mr-2" />
            <span className="font-light">01.02.2023</span>
          </div>
          <div className="flex items-center">
            <ShoppingCartIcon className="h-5 w-5 text-black mr-2" />
            <span className="font-light">{`${totalProducts} ${articles}`}</span>
          </div>
        </p>

        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <button>
            <ChevronRightIcon className="h-6 w-6 text-black" />
          </button>
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;

import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;

  return (
    <div className="flex justify-between items-center mb-3 bg-blue-">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl[0]}
            alt={title}
          />
        </figure>

        <p className="text-sm font-light">{title}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <button onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon
            onClick={() => handleDelete(id)}
            className="h-6 w-6 text-black"
          />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;

import React from "react";
import DuplicatedSVGs from "./Dupli.jsx";
import { products } from "./Data.jsx";
import { Link } from "react-router-dom";

const formatSold = (sold) => {
  if (sold > 5000) {
    return "5k+";
  } else if (sold > 1000) {
    return `${(sold / 1000).toFixed(1)}k`;
  } else {
    return `${sold}`;
  }
};
const formatPrice = (price) => {
  return price.toLocaleString("vi-VN"); // Use 'vi-VN' for Vietnamese format
};

const ProductList = (props) => {
  console.log("Data", props);
  return (
    <div className="grid grid-cols-4 gap-5 ml-auto max-sm:grid max-sm:grid-cols-2 max-sm:gap-3 max-sm:w-screen">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white text-black-200 w-auto rounded-lg 2xl:transition-all 2xl:duration-300 2xl:ease-in-out 2xl:hover:scale-105 2xl:hover:shadow-xl cursor-pointer"
        >
          <Link to={product.link}>
            <div className="items-center space-y-8">
              {product.img.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt=""
                  className="size-72 rounded-t-lg"
                />
              ))}
            </div>
            <div className="m-4 mt-2">
              <div className="h-20 overflow-hidden">
                <h1 className="text-pretty w-64 pb-4">{product.name}</h1>
              </div>
              <div className="flex items-center space-x-2">
                <DuplicatedSVGs filled={5} count={5} />
                <div className="h-5 w-0.5 bg-slate-300 rounded mt-0.5 mr-1"></div>
                <span className="ps-2">{`Đã bán ${formatSold(
                  product.sold
                )}`}</span>
              </div>
              <div className="flex mt-7 mb-8">
                <h1 className="text-3xl font-semibold">
                  {formatPrice(product.price)}
                </h1>
                <h1 className="pe-3">₫</h1>
                {product.discount && (
                  <span className="bg-slate-400 rounded-lg h-7 w-12 text-center">{`-${product.discount}%`}</span>
                )}
              </div>
            </div>
          </Link>
          <div className="text-center border-solid border-t-2 items-stretch h-10">
            <span className="text-lg text-slate-400 mt-1">
              {product.shipment}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

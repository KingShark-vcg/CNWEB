import React from "react";

const products = [
  {
    img: [
      "https://salt.tikicdn.com/cache/280x280/ts/product/67/2c/d9/a402eeeecb13856aa04972adf843323e.jpg",
    ],
    title: "khẩu trang",
  },
  {
    img: [
      "https://salt.tikicdn.com/cache/280x280/ts/product/8e/98/45/77fa69f2a7842e4ef4e953dbc7eb0a21.jpg",
    ],
    title: "dây nịt nam",
  },
  {
    img: [
      "https://salt.tikicdn.com/cache/280x280/ts/product/c4/c9/cf/cf8dc93c7b47a117b9d4815d5d40677e.jpg",
    ],
    title: "áo sơ mi nu tay ngắn",
  },
  {
    img: [
      "https://salt.tikicdn.com/cache/280x280/ts/product/fd/51/7f/e182bc80dd758b6689b5eb910cf4d1db.png",
    ],
    title: "máy hút sữa",
  },
  {
    img: [
      "https://salt.tikicdn.com/cache/280x280/ts/product/d8/2e/c5/ba361c4958de809abe8d5b1881abc08a.jpg",
    ],
    title: "dây búp bê nữ màu đen",
  },
  {
    img: [
      "https://salt.tikicdn.com/cache/280x280/ts/product/da/8c/b0/eda3cfbe18b20b11a801e6856591b286.png",
    ],
    title: "cá đù 1 nắng",
  },
];
const Footer_modal = () => {
  return (
    <div className="border-t-2 border-slate-400 mt-5">
      <div className="flex items-center space-x-3 mt-3">
        <img
          src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png"
          alt=""
          className="size-8"
        />
        <h1 className="text-2xl text-black font-semibold max-sm:text-sm">
          Tìm Kiếm Phổ Biến
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-3 space-y-5 mb-3 max-sm:grid max-sm:grid-cols-2">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 2xl:hover:ease-linear 2xl:hover:scale-105 2xl:transition-all 2xl:duration-300 cursor-pointer"
          >
            {product.img.map((img, img_index) => (
              <img key={img_index} src={img} alt="" className="size-12" />
            ))}
            <span className="text-xl text-black">{product.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer_modal;

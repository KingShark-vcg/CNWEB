import React from "react";

const products = [
  {
    img: [
      "https://salt.tikicdn.com/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png",
    ],
    title: "Đồ Chơi - Mẹ & Bé",
  },
  {
    img: [
      "https://salt.tikicdn.com/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png",
    ],
    title: "Điện Thoại - Máy Tính Bảng",
  },
  {
    img: [
      "https://salt.tikicdn.com/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png",
    ],
    title: "NGON",
  },
  {
    img: [
      "https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png",
    ],
    title: "Làm Đẹp - Sức Khỏe",
  },
  {
    img: [
      "https://salt.tikicdn.com/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png",
    ],
    title: "Điện Gia Dụng",
  },
  {
    img: [
      "https://salt.tikicdn.com/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png",
    ],
    title: "Thời trang nữ",
  },
  {
    img: [
      "https://salt.tikicdn.com/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png",
    ],
    title: "Thời trang nam",
  },
  {
    img: [
      "https://salt.tikicdn.com/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png",
    ],
    title: "Giày - Dép nữ",
  },
];

const Produc_modal = () => {
  return (
    <div className="mt-5 border-t-2 border-slate-400">
      <div className="mt-4">
        <h1 className="text-2xl text-black font-semibold mb-4">
          Danh mục nổi bật
        </h1>
        <div className="grid grid-cols-4 gap-5 mt-3 space-y-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="items-center space-x-4 hover:ease-in-out transition-all hover:scale-95 duration-300 cursor-pointer text-center content-center w-40 h-max"
            >
              {product.img.map((img, img_index) => (
                <img key={img_index} src={img} alt="" className="size-fit" />
              ))}
              <span className="text-xl text-black overflow-hidden">
                {product.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produc_modal;

import React from "react";
import DuplicatedSVGs from "./Dupli";
import MultiSelectMenu from "./select";
import ProductList from "./ListProduct";

const Body = () => {
  return (
    <div className="xl:container mx-auto z-0">
      <div className="items-center mt-3 mb-3 max-sm:mt-1 max-sm:mb-1">
        <p className="text-black text-xl cursor-pointer max-sm:hidden">
          <span className="hover:text-blue-600">Trang chủ</span> -> Nhà sách
          Tiki
        </p>
      </div>
      <div className="p-3 max-sm:bg-white 2xl:hidden max-sm:mb-3">
        <ul className="max-sm:flex hidden justify-between text-black text-md">
          <li className="text-blue-600">Phổ biến</li>
          <li>Bán chạy</li>
          <li>Hàng mới</li>
          <li className="flex items-center gap-2">
            Giá
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_10_10609)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.42305 1.25807C3.66713 1.01399 4.06285 1.01399 4.30693 1.25807L6.80693 3.75807C7.05101 4.00215 7.05101 4.39787 6.80693 4.64195C6.56285 4.88603 6.16713 4.88603 5.92305 4.64195L4.48999 3.20889V11.075C4.48999 11.4202 4.21017 11.7 3.86499 11.7C3.51981 11.7 3.23999 11.4202 3.23999 11.075V3.20889L1.80693 4.64195C1.56285 4.88603 1.16713 4.88603 0.923048 4.64195C0.678971 4.39787 0.678971 4.00215 0.923048 3.75807L3.42305 1.25807ZM9.48999 12.6911V4.20001C9.48999 3.85483 9.76981 3.57501 10.115 3.57501C10.4602 3.57501 10.74 3.85483 10.74 4.20001V12.6911L12.1731 11.2581C12.4171 11.014 12.8129 11.014 13.0569 11.2581C13.301 11.5021 13.301 11.8979 13.0569 12.1419L10.5569 14.6419C10.3129 14.886 9.91713 14.886 9.67305 14.6419L7.17305 12.1419C6.92897 11.8979 6.92897 11.5021 7.17305 11.2581C7.41713 11.014 7.81285 11.014 8.05693 11.2581L9.48999 12.6911Z"
                  fill="#38383D"
                />
              </g>
              <defs>
                <clipPath id="clip0_10_10609">
                  <rect
                    width="14"
                    height="14"
                    fill="white"
                    transform="translate(-0.0100098 0.950012)"
                  />
                </clipPath>
              </defs>
            </svg>
          </li>
        </ul>
        <div className="pt-3">
          <div className="flex items-center space-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.75 0.75C0.75 0.335786 1.08579 0 1.5 0H16.5C16.9142 0 17.25 0.335786 17.25 0.75V3C17.25 3.19891 17.171 3.38968 17.0303 3.53033L11.25 9.31066V15C11.25 15.2841 11.0895 15.5438 10.8354 15.6708L7.83541 17.1708C7.60292 17.2871 7.32681 17.2746 7.1057 17.138C6.88459 17.0013 6.75 16.7599 6.75 16.5V9.31066L0.96967 3.53033C0.829018 3.38968 0.75 3.19891 0.75 3V0.75ZM2.25 1.5V2.68934L8.03033 8.46967C8.17098 8.61032 8.25 8.80109 8.25 9V15.2865L9.75 14.5365V9C9.75 8.80109 9.82902 8.61032 9.96967 8.46967L15.75 2.68934V1.5H2.25Z"
                fill="#808089"
              />
            </svg>
            <span>Lọc</span>
            <div className="h-4 w-1 bg-slate-300 rounded-xl"></div>
            <img
              src="https://s3-alpha-sig.figma.com/img/9f63/2df5/52d4ff178b5e56072899664c52a61fe5?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PHNKww6FVO60Ps5Zp28e~pPa9wQiEWb9Mu7EYw4ROZZRlG~LaQUEKPDBUAUzdMKwMyVGGHGjQxLT4wjjJXp-UR~yvQRqPUgZ0GVr-kIbRCxZH05OlVtcXoV5tv4JK4auRQqgO-OZ7HfH8n1hPHB97V~HsV5aJJJfQ5mxfwDxhLkIE59kavXKZBuZ2x5AL6Os5k6uPKdbEmb1wgGB8dBU8vgnaPjBHRX3AAo~osLPQVyP2DIcZRT82X7pSMoZhJId9WRH~syPD3p-h5MooRx1ODYqythzyUw6SszP8WQPqjdfMYNuJEmrnsRR3GoDnQlYxLqjbwoF9So4UDW49Xxztw__"
              alt=""
              className="h-4 pl-1"
            />
          </div>
        </div>
      </div>
      <div className="flex max-h-full relative">
        <div className="bg-white max-w-70 rounded-md p-4 h-max sticky z-10 top-10 max-sm:hidden">
          <div className="border-solid border-b-2 ">
            <h2 className="font-semibold text-2xl">Danh mục sản phẩm</h2>
            <ul className="p-2 space-y-3">
              <li>English Books</li>
              <li>Sách tiếng việt</li>
              <li>Văn phòng phẩm</li>
              <li>Quà lưu niệm</li>
            </ul>
          </div>
          <div className="pt-2 border-solid border-b-2 pb-2">
            <h2 className="font-semibold text-2xl">Nhà cung cấp</h2>
            <MultiSelectMenu />
            <div className="text-blue-500 flex flex-wrap items-center space-x-1">
              <span>Xem thêm</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.86389 7.70957L9.84045 4.73066C10.0608 4.51035 10.417 4.51035 10.635 4.73066C10.853 4.95098 10.853 5.30723 10.635 5.52754L7.26233 8.90254C7.04905 9.11582 6.70686 9.12051 6.48655 8.91895L3.09045 5.52988C2.9803 5.41973 2.92639 5.27441 2.92639 5.13145C2.92639 4.98848 2.9803 4.84316 3.09045 4.73301C3.31077 4.5127 3.66702 4.5127 3.88499 4.73301L6.86389 7.70957Z"
                  fill="#0B74E5"
                />
              </svg>
            </div>
          </div>
          <div className="pt-2">
            <h2 className="font-semibold text-2xl">Đánh giá</h2>
            <ul className="p-2 items-center space-y-2">
              <li className="flex items-center">
                <DuplicatedSVGs filled={5} count={5} />
                <span className="ps-3">Từ 5 sao</span>
              </li>
              <li className="flex items-center">
                <DuplicatedSVGs filled={4} count={5} />
                <span className="ps-3">Từ 4 sao</span>
              </li>
              <li className="flex items-center">
                <DuplicatedSVGs filled={3} count={5} />
                <span className="ps-3">Từ 3 sao</span>
              </li>
            </ul>
          </div>
        </div>
        <ProductList />
      </div>
      <div className="mt-40 mb-20 ">
        <ul className="flex gap-6 place-content-center text-2xl">
          <button className="hover:bg-blue-500 rounded-xl w-6">1</button>
          <button className="hover:bg-blue-500 rounded-xl w-6">2</button>
          <button className="hover:bg-blue-500 rounded-xl w-6">3</button>
          <button className="hover:bg-blue-500 rounded-xl w-6">4</button>
          <button className="hover:bg-blue-500 rounded-xl w-6">5</button>
          <button className="gap-5">...</button>
          <button className="hover:bg-blue-500 rounded-xl w-8">50</button>
        </ul>
      </div>
    </div>
  );
};

export default Body;

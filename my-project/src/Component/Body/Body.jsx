import React from 'react'
import DuplicatedSVGs from './Dupli'
import MultiSelectMenu from './select'
import ProductList from './ListProduct'

const Body = () => {
  return (
    <div className="xl:container mx-auto z-0">
        <div className="items-center pt-3 pb-3">
            <p className="text-black text-xl cursor-pointer">
                <span className="hover:text-blue-600">Trang chủ</span> -> Nhà sách Tiki
            </p>
        </div>
        <div className="flex max-h-full relative">
            <div className="bg-white max-w-70 rounded-md p-4 h-max sticky z-10 top-10">
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
                        <MultiSelectMenu/>
                    <div className="text-blue-500 flex flex-wrap items-center space-x-1">
                        <span>Xem thêm</span>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.86389 7.70957L9.84045 4.73066C10.0608 4.51035 10.417 4.51035 10.635 4.73066C10.853 4.95098 10.853 5.30723 10.635 5.52754L7.26233 8.90254C7.04905 9.11582 6.70686 9.12051 6.48655 8.91895L3.09045 5.52988C2.9803 5.41973 2.92639 5.27441 2.92639 5.13145C2.92639 4.98848 2.9803 4.84316 3.09045 4.73301C3.31077 4.5127 3.66702 4.5127 3.88499 4.73301L6.86389 7.70957Z" fill="#0B74E5"/>
                        </svg>
                    </div>
                </div>
                <div className="pt-2">
                    <h2 className="font-semibold text-2xl">Đánh giá</h2>
                    <ul className="p-2 items-center space-y-2">
                        <li className="flex items-center">
                            <DuplicatedSVGs filled ={5} count={5}/>
                            <span className="ps-3">Từ 5 sao</span>
                        </li>
                        <li className="flex items-center">
                            <DuplicatedSVGs filled={4} count={5}/>
                            <span className="ps-3">Từ 4 sao</span>
                        </li>
                        <li className="flex items-center">
                            <DuplicatedSVGs filled={3} count={5}/>
                            <span className="ps-3">Từ 3 sao</span>
                        </li>
                    </ul>
                </div>
            </div>
                <ProductList/>
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
    
    )
}

export default Body
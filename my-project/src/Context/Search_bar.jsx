import React, { useState, useEffect } from "react";
import './Search.css'
import Footer_modal from "./footer_modal";
import Produc_modal from "./product_modal";

function Search_bar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isListFocused, setIsListFocused] = useState(false);
    const [showAllSuggestions, setShowAllSuggestions] = useState(false);

    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN'); 
    };
    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await fetch("https://h5ltj4-8080.csb.app/books");
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error("Lỗi lấy data:", error);
        }
    };

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        const filteredBooks = books.filter((book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(isInputFocused ? getRandomProducts(filteredBooks, 3) : filteredBooks.slice(0, 3));
        setShowAllSuggestions(false)
    };

    const handleShowMore = () => {
        setShowAllSuggestions(true); // Show all suggestions when clicking "Show More"
        setFilteredBooks(books.filter((book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    };

    const getRandomProducts = (products, num) => {
        const shuffledProducts = products.sort(() => 0.5 - Math.random());
        return shuffledProducts.slice(0, num);
    };

    return (
    <div>
        <div className="max-w-2xl">
            <input
            type="text"
            placeholder="Freeship đến 30k"
            className="block pl-8 pr-7 border-none focus:outline-none w-96"
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => {setIsInputFocused(true);
                setFilteredBooks(getRandomProducts(books, 3));}}
            onBlur={() => {setIsInputFocused(false)
                setFilteredBooks([]);
                setShowAllSuggestions(false);}}
            />
        </div>
        {(isInputFocused || isListFocused) && (        
        <div className="size-full mt-10 absolute mr-20 z-50"
        onMouseEnter={() => setIsListFocused(true)}
        onMouseLeave={() => setIsListFocused(false)}>
            <div className="modal-content relative bg-white p-8 border-2 border-slate-400 rounded-lg overflow-y-auto">
                <div className="flex mb-7 relative">
                    <h1 className="text-black font-semibold text-2xl">Hàng Nhập Khẩu</h1>
                    <img src="https://salt.tikicdn.com/cache/140x28/ts/tikimsp/25/17/c8/286164500c47bb55ae00b1d9bd90c990.png" alt="" className="absolute inset-y-0 right-0"/>
                </div>
                <ul className="text-black space-y-7">
                {filteredBooks.map((book) => (
                <li key={book.id} className="space-x-2 overflow-hidden hover:bg-slate-500 h-12 flex items-center rounded-lg cursor-pointer text-xl" >
                    <img src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" alt="" className="size-10"/>
                    {book.name} - {formatPrice(book.list_price)}₫
                </li>
            ))}
                </ul>
            <div className="mt-6 text-center items-center">
                {!showAllSuggestions && books.length > 3 && (
                <button onClick={handleShowMore} className="text-blue-600 hover:bg-blue-200 rounded-md transition-all duration-300 ease-in-out hover:scale-105">
                    Xem thêm
                </button>
                )}
            </div>
                <Footer_modal/>
                <Produc_modal/>
            </div>
        </div>
        )}
    </div>
    );
}

export default Search_bar;

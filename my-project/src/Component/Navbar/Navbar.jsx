import tiki_logo from "../Assert/Tiki-logo.png";
import smile from "../Assert/icons8-smile-24.png";
import home from "../Assert/icons8-home-48.png";
import search from "../Assert/icons8-search-48.png";
import Search_bar from "../../Context/Search_bar";
const Navbar = () => {
  return (
    <header className="bg-white z-40">
      <div className="flex space-x-10 items-center place-content-around mx-auto 2xl:container">
        <img src={tiki_logo} alt="" />
        <div className="relative flex place-items-center w-1/2 h-16 space-x-5 border-2 rounded-lg">
          <div className="absolute left-0 pl-3">
            <img src={search} alt="" className="size-8" />
          </div>
          <Search_bar />
          <div className="absolute inset-y-0 right-0 flex rounded-lg">
            <button
              type="submit"
              className="text-blue-400 hover:bg-blue-300 text-center rounded-r-lg w-24"
            >
              Tìm Kiếm
            </button>
          </div>
        </div>
        <div className="list-none text-center mr-3 w-1/3 h-max">
          <ul className="flex space-x-10 items-center">
            <li className="flex space-x-2 hover:bg-blue-300 rounded-lg items-center w-1/5 h-5/6 place-content-center transition-all duration-300 ease-in-out hover:scale-125 cursor-pointer">
              <img src={home} alt="" className="size-8 " />
              <span className="text-blue-500">Trang chủ</span>
            </li>
            <li className="flex space-x-2 hover:bg-blue-300 rounded-lg items-center w-1/5 place-content-center transition-all duration-300 ease-in-out hover:scale-125 cursor-pointer">
              <img src={smile} alt="" className="size-8" />
              <span>Tài khoản</span>
            </li>
            <li className="cursor-pointer">
              <img
                src="https://s3-alpha-sig.figma.com/img/a084/d2e6/defd412e1477724456bfb6c09607f2de?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAk7qyoUXI0Cwxip7AM3T8QUZq5-PacIZXiOuYQLlhjbvXaoNO~QR-cQi~OooLBLny9Ljzi5ValCaQJRro~VHzYWOZlbbY74GJ8nhiWufPeStBuV~n1EPIYNp~Y2KgLOg4VbPZMG8t8w-MDJzMvbJc0vqcpt1u-JlHLHk9YonqXgBk2TlrSFh3USYNz7HFxuQW9TXvh9qaOppF5Bta3WhA1D0vc5kvSLQ5tELLZReQjtJ55K1EN8XamjCwp5mR5OjhiNY-UwN76ZrgHJneYIU1RZrs2NbWWjBklROGQNIW8sKkPMEQAhgZGlDdWve0Tt7IelZvvL8a5sMhJLGnmCXQ__"
                alt=""
                className="size-8 hover:bg-blue-400 rounded-lg transition-all duration-300 ease-in-out hover:scale-125"
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

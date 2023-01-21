import React from "react";
import user from "../assets/user.png";
import search from "../assets/search.png";
import cart from "../assets/shopping-cart.png";
function Header() {
  return (
    <div className="p-3 flex bg-gray-200">
      <img src={user} alt="user" width={20} height={10} className="mr-4" />
      <input
        type="text"
        placeholder="Search"
        className="p-3 w-full rounded-l-md "
      />
      <img
        src={search}
        alt="search"
        width={25}
        height={5}
        className="bg-gray-300 p-2 w-8 rounded-r-md cursor-pointer active:bg-gray-400"
      />
      <img
        src={cart}
        alt="cart"
        width={25}
        height={10}
        className="ml-4 cursor-pointer"
      />
    </div>
  );
}

export default Header;

import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="flex mt-2 items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={35}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-300">
          <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
          <SearchIcon className="h-12 p-4"/>
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
            <div className="link">
                <p>Hello Navin Kodam</p>
                <p className="font-extrabold md:text-sm">Account & lists</p>
            </div>

            <div className="link">
                <p>Returns</p>
                <p className="font-extrabold md:text-sm">& Orders</p>
            </div>

            <div className="link relative flex items-center">
                <span className="absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 text-center font-bold text-black rounded-full">0</span>
                <ShoppingCartIcon className="h-10"/>
                <p className="hidden md:inline font-extrabold md:text-sm mt-2">Cart</p>
            </div>
        </div>
      </div>

      {/* bottom Nav */}
      <div className="flex items-center space-x-3 p-2 bg-amazon_blue-light text-white text-sm">
          <p className="link flex items-center font-semibold">
            <MenuIcon className="h-6 mr-1"/>
            All</p>
            <p className="link font-semibold">Amazon Pay</p>
            <p className="link font-semibold">Best Seller</p>
            <p className="link font-semibold">Mobiles</p>
            <p className="link font-semibold">Amazon Prime</p>
            <p className="link font-semibold">Today's Deals</p>
            <p className="link font-semibold hidden lg:inline-flex">Buy Again</p>
            <p className="link font-semibold hidden lg:inline-flex">Customer Service</p>
            <p className="link font-semibold hidden lg:inline-flex">Electronics</p>

      </div>
    </header>
  );
}

export default Header;

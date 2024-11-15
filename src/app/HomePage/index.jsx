import { Link } from "react-router-dom";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";



export default function HomePage() {
    return (
        <div>
            <div className="h-24 w-screen border flex ">
                <Link to="/" className="flex items-center ml-24">
                    <RiShoppingBag4Fill className="text-4xl inline-block text-red-600" />
                    <h1 className="inline-block text-4xl "><b>Shofy</b></h1>
                </Link>

                <div className="w-[460px] flex border-solid border-2 border-blue-800 mt-8 h-10 flex ml-24  ">
                    <input className="p-1 outline-none" type="text" name="search" placeholder="Search for Products.." size="30"></input>
                    <select className=" outline-none " name="product" id="product">
                        <option value="All Categories">All Categories</option>
                        <option value="mobiles">Mobiles</option>
                        <option value="electronic">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="car & motorbike">Car & Motorbike</option>
                    </select>
                        <div className=" flex items-center">
                            <FaSearch className="bg-blue-800  h-full  p-2 w-[55px]" />
                        </div>
                    </div>
                <div className="h-10 mt-8 ml-24 flex items-center ">
                    <FaRegUserCircle className="text-4xl  " />
                    <div className="ml-1">
                        <h5 className="">Hello, Guest</h5>
                        <h6>Login / Register</h6>
                    </div>
                    
                </div>

                <LuArrowDownUp className="mt-10 text-2xl ml-24"/>
                <IoMdHeartEmpty className="mt-10 text-2xl ml-6"/>
                <FaShoppingBag className="mt-10 text-2xl ml-6"/>
            </div>

            <div className=" border h-12 flex items-center">
                <select name="category" id="category" className="h-full w-44 border p-2 bg-blue-800 text-white font-medium ml-24">
                    <option value="all category" >All Categories</option>
                </select>
                <select name="home" id="home" className="ml-2 p-2 outline-none">
                    <option value="home" className="w-32">Home</option>
                </select>
                <select name="shop" id="shop" className="ml-2 p-2 outline-none">
                    <option value="shop">Shop</option>
                </select>
                <select name="vendor" id="vendor" className="ml-2 p-2 outline-none">
                    <option value="vendor">Vendors</option>
                </select>
                <select name="pages" id="pages" className="ml-2 p-2 outline-none">
                    <option value="pages">Pages</option>
                </select>
                <select name="blog" id="blog" className="ml-2 p-2 outline-none">
                    <option value="blog">Blog</option>
                </select>

                {/* <div className="relative flex hover:inline-block">
                    <h1 className="ml-4">All Categories</h1>
                    <h1 className="ml-4">Home </h1>
                    <h1 className="ml-4">Shop </h1>
                    <h1 className="ml-4">Vendors</h1>
                    <h1 className="ml-4">Pages</h1>
                    <h1 className="ml-4">Blog</h1>
                </div> */}
                <Link to="" className="ml-2 p-2 ">Contact</Link>
                
                <IoIosCall className="text-2xl ml-72 mr-2"/>
                <div className="justify items-center">
                <h4>Hotline</h4>
                <h5>97XXXXXXXX</h5>
                </div>

            </div>


        </div>
    )
}
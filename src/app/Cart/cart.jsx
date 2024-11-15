import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Cart() {
  return (
    <div>
      <div className="flex  gap-10 p-14 px-24 max-md:w-full max-md:h-full max-md:p-0 max-md:flex-wrap ">
        <div className="w-4/6 max-md:w-full ">
          <div className=" flex max-md:hidden p-3 bg-gray-200 ">
            <h1>Product</h1>
            <h1 className="ml-96 max-md:ml-auto">Price</h1>
            <h1 className="ml-14">Quantity</h1>
            <h1 className="ml-14">Total</h1>
          </div>
          <div className="flex max-md:hidden">
            <div className="flex max-sm:flex-wrap ">
              <img
                src="https://shofy.botble.com/storage/main/products/product-5.jpg"
                className="h-24 p-4 "
              ></img>
              <div className="font-medium p-4 max-md:w-1/4">
                <h1>Lenovo ThinkPad X1 Carbon Gen 9 Laptop</h1>

                <p className="text-green-800 text-sm mt-2">In stock</p>
                <h6 className="text-sm mt-1">Vendor: Royal store</h6>
                <h6 className="text-sm mt-1">(Color: Black, Size: XL)</h6>
              </div>
            </div>

            <div className="flex">
              <div className="p-4 font-medium mt-10 max-md:w-1/4">
                <p>$878.00</p>
              </div>
              <div className="p-4 font-medium ml-5 mt-10  max-md:w-1/4 ">
                <p>1</p>
              </div>
              <div className="p-4 font-medium ml-10 mt-10 max-md:ml-1 max-md:w-1/4">
                <p>$878.00</p>
              </div>
              <div className=" p-5  max-md:">
                <Link to="#" className="text-2xl p-10 ">
                  <RiDeleteBin5Line />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div>
              <div className="max-md:flex max-md:w-full  ">
                <div className="">
                  <img
                    src="https://shofy.botble.com/storage/main/products/product-5.jpg"
                    className="h-24 bg-black mt-10 "
                  ></img>
                </div>
                <div className="font-medium p-4 max-md:w">
                  <h1>Lenovo ThinkPad X1 Carbon Gen 9 Laptop</h1>
                  <p className="text-2xl font-medium mt-2">$878.00</p>

                  <p className="text-green-800 text-sm mt-2">In stock</p>
                  <h6 className="text-sm mt-1">Vendor: Royal store</h6>
                  <h6 className="text-sm mt-1">(Color: Black, Size: XL)</h6>
                </div>
              </div>
              <div className="flex gap-4 items-center border-2 w-28 p-2 rounded-xl   ">
                <FaPlus className="" />
                <input type="text" value={1} className="w-10 text-center focus:outline-none border-x-2"/>
                <FaMinus />
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="mt-8 max-md:px-10">
            <span>Coupon Code:</span>
            <div className="flex gap-2 ">
              <div className=" border border-black h-12 w-2/5 max-md:w-full">
                <input
                  type="text"
                  id="text"
                  name="text"
                  className="w-full h-full outline-none p-2"
                  placeholder="Enter Coupan Code"
                ></input>
              </div>
              <div>
                <div className="h-12 flex justify-center w-24 bg-black text-white ">
                  <button className="h-full w-full max-md:hover:bg-blue-700">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/6 shadow-2xl p-10 max-md:flex-wrap max-md:w-full">
          <div>
            <div className="flex justify-between font-medium text-xl ">
              <h1>Subtotal</h1>
              <p>$878.00</p>
            </div>
            <br></br>
            <hr></hr>

            <div className="flex justify-between mt-4">
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-medium text-xl mt-4 ">
              <h1>Total</h1>
              <p>$878.00</p>
            </div>
            <p className="text-sm mt-2">(Shipping fees not included)</p>
          </div>

          <Link to="#">
            <button className="bg-black text-white w-full h-12 mt-4 hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </Link>
          <Link to="#" className="flex justify-center hover:text-blue-700 mt-2">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

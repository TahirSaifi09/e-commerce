import {Link} from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { LuX } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export default function SideCart() {
  return (
    <div>
      <div className="flex justify-end">
        <div className="w-1/4 p-6 border h-screen max-md:w-3/4 max-lg:w-2/4">
          <div className="flex justify-between">
            <p className="font-bold ">Shopping Cart</p>
            <FaXmark className="text-2xl" />
          </div>
          <br />
          <hr />
          <div className="flex justify-between gap-2 mt-6 text-sm">
            <div>
              <img
                src="https://shofy.botble.com/storage/main/products/product-1-600x600.jpg"
                alt="Loding"
                className="w-32"
              ></img>
            </div>
            <div>
              <div className="flex justify-end">
                <div>
                  <p className="font-bold ">
                    BenQ EW3280U 32-Inch 4K HDR Entertainment Monitor (Digital)
                  </p>

                  <div className="flex justify-between p-2 w-20 h-8 items-center border rounded-full mt-2 ">
                    <FaMinus />
                    <input
                      type="text"
                      value="1"
                      className="w-4 ouline-none"
                    ></input>
                    <FaPlus />
                  </div>
                  <p className="text-blue-700 mt-2 ">$878.85</p>
                  <p className="font-sm mt-2">(Weight: 5KG, Boxes: 2 Boxes)</p>
                </div>
              </div>
            </div>
            <LuX className="text-4xl" />
          </div>
          
          <div className="mt-56">
          <hr className=""></hr>
          <div className="flex justify-between font-bold mt-6">
            <p>Subtotal:</p>
            <p>$878.85</p>
          </div>
          <div className="flex justify-between font-bold mt-3">
            <p>Tax:</p>
            <p>$0.00</p>
          </div>
          <div className="flex justify-between font-bold mt-3">
            <p>Total:</p>
            <p>$878.85</p>
          </div>
          <button className="h-12 w-full border bg-black text-white mt-6 hover:bg-blue-700"><Link to="#">Checkout</Link></button>
          <button className="h-12 w-full border mt-3  border-black hover:bg-blue-800 hover:text-white"><Link to="#">View Cart</Link></button>
          </div>
          </div>
        </div>
      </div>

  );
}

import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";





export default function AddSelecte(){
    return(
        <div className="flex justify-center  mt-36 ">
            <div className="h-[450px]   shadow-2xl border-black w-[450PX] p-2 rounded-npmxl	">
                <div className="flex justify-between p-2">
                    <h2 className="inline-block text-2xl text-black">LG 27UK850-W 27-Inch 4KUHD IPS Monitor</h2>
                    <RxCross2  className="inline-block text-black text-[30px]"/>
                 </div>

                 <h4 className="text-black text-[20px]">$ 363.00</h4>

                 <p className="text-black text-[16px]">Weight:</p>
                 <div className="flex mt-2">
                    <ul className="h-8  inline-blockk w-16 border border-gray-200 active:border-blue-800">
                      <li className="text-[18px] text-black ml-2 ">2KG</li>
                    </ul>
                    <ul className="h-8  inline-blockk w-16   ml-4 border border-gray-200 active:border-blue-800">
                      <li className="text-[18px] text-black ml-2">3KG</li>
                    </ul>
                    <ul className="h-8  inline-blockk w-16   ml-4 border border-gray-200 active:border-blue-800">
                        <li className="text-[18px] text-black ml-2">5KG</li>
                    </ul>
                 </div>

                 <p className="text-black mt-2 text-[16px] font-medium"> Boxes:</p>
                 <div className="flex mt-1">
                    <ul className="h-12  inline-blockk w-20 border border-gray-200 active:border-blue-800">
                        <li className="text-[18px] text-black m-2">3Boxes</li>
                    </ul>
                    <ul className="h-12  inline-blockk w-20  ml-4 border border-gray-200 active:border-blue-800">
                        <li className="text-[18px] text-black m-2">4Boxes</li>
                    </ul>
                    <ul className="h-12  inline-blockk w-20   ml-4 border border-gray-200 active:border-blue-800">
                        <li className="text-[18px] text-black m-2">5Boxes</li>
                    </ul>
                 </div>

                 <div className="text-green-600 mt-2">14 products available</div>

                <p  className="text-blacke mt-2 text-[16px] font-medium">Quantity:</p>
                <div className=" flex ">
                    <div className="flex bg-slate-300	 w-20 p-1">
                    <FaMinus className=" shadow-2xl h-8" />

                   <input type="text" value={1} className="w-12 text-center bg-slate-300 ">
                   
                   </input>
                   <FaPlus  className=" shadow-2xl h-8" />

                   </div>
                   <button className="h-10  ml-4 w-full border border-black hover:bg-black hover:text-white">Add To Cart</button>
                </div>
                <div className="mt-4 flex hover:text-blue-800">
                    <Link to="#">View full details </Link>
                    <FaArrowRight className="mt-2 " />
                </div>
            </div>
        </div>
    )
}
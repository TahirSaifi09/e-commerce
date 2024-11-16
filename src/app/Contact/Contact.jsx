import { IoLocationOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaEarthOceania } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="p-24 flex justify-center max-md:p-0 max-lg:p-0 max-xl:p-10">
      <div className="flex shadow-2xl w-5/6 h-5/6 max-md:w-full max-md:flex-wrap max-lg:w-full">
        <div className="w-3/6 h-screen bg-blue-800 max-md:flex-wrap max-md:w-screen">
          <form className="p-10 ">
            <p className="text-3xl font-bold text-white text-center">
              Send us a message
            </p>
            <div className="w-full border-b bg-blue-800 mt-14">
              <label for="name" className="text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="outline-none w-full h-full text-white bg-blue-800  mt-2"
              ></input>
            </div>
            <div className="border-b bg-blue-800 w-full mt-8 ">
              <label for="email" className="text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="outline-none bg-blue-800 text-white w-full mt-2"
              ></input>
            </div>
            <div className="border-b bg-blue-800 w-full mt-8">
              <label className="text-white">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="bg-blue-800 outline-none text-white w-full mt-2"
              ></input>
            </div>

            <div className="w-full border-b bg-blue-800 mt-8">
              <label for="message" className="text-white">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full outline-none bg-blue-800 text-white mt-2"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send message"
              className="bg- p-3 bg-pink-600 rounded-md mt-8 text-white"
            />
          </form>
        </div>
        <div className="w-3/6 h-screen p-10 px-14 text-center max-md:px-10 max-md:text-center max-md:w-full">
          <h1 className="text-3xl font-bold ">Contact us</h1>
          <p>We're open for any suggestion or just to have a chat</p>
          <div className="mt-16 flex gap-4">
            <IoLocationOutline className="text-5xl p-3 border rounded-full" />
            <p className="">
              <b>Address:</b> Saket New Delhi
            </p>
          </div>
          <div className="flex mt-10 gap-4">
            <IoMdCall className="text-5xl p-3 border rounded-full" />
            <p>
              <b>Phone:</b> +91 9720169030
            </p>
          </div>
          <div className="flex mt-10 gap-4">
            <FaTelegramPlane className="text-5xl p-3 border rounded-full" />
            <p className="font-bold">
            Email:
            </p>
            <p>tahirsaifi413@gmail.com</p>
          </div>
          <div className="flex mt-10 gap-4">
            <FaEarthOceania className="text-5xl p-3 border rounded-full" />
            <p>
              <b>Website</b> shofy.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

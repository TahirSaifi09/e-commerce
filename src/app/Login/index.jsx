import { Link } from "react-router-dom";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Login() {
  return (
    <div>
      <div className=" bg-gray-200  p-24 flex justify-center max-md:w-screen max-md:p-0">
        <div className="shadow-2xl flex justify-center w-4/5 max-md:w-screen  ">
          <div className=" bg-white w-3/5 h-99 max-md:hidden ">
            <img src="Security.jpg" alt="Description of image" className="w-full h-auto"/>
          </div>
          <div className="w-3/5 bg-gray-100 max-md:w-screen ">
            <div>
              <div className="p-14 max-md:p-3 ">
                <form>
                  <div className="flex justify-center">
                    <div className="h-24 w-32 max-md:w-screen max-md:p-0">
                      <MdLockOutline className="text-5xl p-3 bg-white " />
                    </div>
                    <div className="">
                      <h1 className="text-3xl  font-medium ">
                        Login to your account
                      </h1>
                      <p>
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account.
                      </p>
                    </div>
                  </div>

                  <br />
                  <label for="email">Email</label>
                  <div className="flex bg-white h-12 w-full border-solid border border-black">
                    <MdOutlineMail className="h-full text-4xl p-1" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      className="w-full ml-2 h-full outline-none "
                    ></input>
                  </div>
                  <br></br>

                  <label for="password">Password</label>
                  <div className="flex bg-white h-12 w-full border-solid border border-black">
                    <MdLockOutline className="h-full text-4xl p-1" />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      required
                      className="w-full ml-2 h-full outline-none "
                    ></input>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        className="h-4 w-4 "
                      ></input>
                      <label for="checkbox">Remember me</label>
                    </div>
                    <Link to="/Forgot" className=" text-blue-900">
                      Forgot password?
                    </Link>
                  </div>
                  <br></br>
                  <button
                    type="submit"
                    className="h-12 w-full bg-black text-white font-medium "
                  >
                    Login
                    <FaLongArrowAltRight className="text-white inline ml-2" />
                  </button>
                </form>
                <div className="flex justify-center mt-4">
                  <span className="">Don't have an account?</span>
                  <Link to="/register" className="ml-2 text-blue-700">
                    Register Now
                  </Link>
                </div>
                <hr className="mt-14 border-black"></hr>
                <br></br>
                <span className="flex justify-center ">
                  Login with social networks
                </span>

                <Link to="https://www.facebook.com/" className="outline-none">
                  <button className="border bg-blue-600 rounded-xl mt-12 text-white h-12 w-full flex justify-center">
                    <p className="mt-2">Sign in with facebook</p>
                  </button>
                </Link>
                <Link
                  to="https://accounts.google.com/signin/"
                  className="outline-none"
                >
                  <button className="border bg-red-500 rounded-xl mt-2 text-white h-12 w-full flex justify-center">
                    <p className="mt-2">Sign in with google</p>
                  </button>
                </Link>
                <Link to="#" className="outline-none">
                  <button className="border bg-black rounded-xl mt-2 text-white h-12 w-full flex justify-center">
                    <p className="mt-2">Sign in with GitHub</p>
                  </button>
                </Link>
                <Link
                  to="https://www.linkedin.com/login"
                  className="outline-none"
                >
                  <button className="border bg-blue-700 rounded-xl mt-2 text-white h-12 w-full flex justify-center">
                    <p className="mt-2">Sign in with Linkedin</p>
                  </button>
                </Link>
                <Link
                  to="https://www.linkedin.com/login"
                  className="outline-none"
                >
                  <button className="border bg-blue-700 rounded-xl mt-2 text-white h-12 w-full flex justify-center">
                    <p className="mt-2">Sign in with Linkedin OpenId Connect</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

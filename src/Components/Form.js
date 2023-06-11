import * as React from "react";

export default function Form() {
  return (
    <div className="text-gray-800 sm: w-80">
      <div>
        <h1 className="text-3xl font-semibold">Welcome back</h1>
      </div>
      <div className="mt-5">
        <div>
          <label className=" text-medium font-medium pl-3">Login</label>
          <div className=" py-1.5">
            <input
              className=" w-full border-2 border-gray-50 rounded-lg py-2.5 pl-3 "
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div>
          <label className=" text-medium font-medium pl-3">Password</label>
          <div className=" py-1.5">
            <input
              className=" w-full border-2 border-gray-50 rounded-lg py-2.5 pl-3"
              placeholder="Enter your password"
              type="password"
            />
          </div>
        </div>

        <div>
          <div className=" py-2 grid grid-cols-2">
            <div className="grid gird-cols-2">
              <div className="flex items-center justify-start pl-3 text-sm ">
                <input
                  className="hover:cursor-pointe h-3"
                  id="rememberMe"
                  type="checkbox"
                />
                <label className="hover:cursor-pointer ml-2" for="rememberMe">
                  Remember me
                </label>
              </div>
            </div>
            <div className="flex items-center justify-end text-sm text-blue-400">
              <button>Forgot password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

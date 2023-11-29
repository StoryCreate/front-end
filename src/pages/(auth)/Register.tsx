import React from "react";
import Logo from "@assets/images/logo-text.png";
import ReadingImage from "@assets/images/reading.png";
import BooksImage from "@assets/images/books.png";
import TextImage from "@assets/images/create-connect-read.png";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="flex justify-around items-center h-screen flex-wrap">
        <div className="left py-12">
          <div className="image-wrap flex items-center gap-x-3 mb-16">
            <img src={Logo} alt="storycreate-logo" className="h-16" />
          </div>
          <div className="text text-xl font-bold my-8 max-w-[500px]">
            Build an outstanding community around stories made by everyday
            people like yourself.
          </div>
          <div className="image-large relative mt-28">
            <img src={ReadingImage} alt="reading" className="w-[400px]" />
            <div className="sub absolute -right-16 top-0 flex flex-col animate-bounce">
              <img src={TextImage} alt="text" />
              <img src={BooksImage} alt="books" className="-mr-40 -mt-5" />
            </div>
          </div>
        </div>
        <div className="right">
          <form
            action="#"
            className="border-solid border-primary flex flex-col gap-3 py-16 w-[400px] shadow-xl px-10 border-2 rounded-3xl"
          >
            <div className="form-header">
              <div className="text-4xl font-['Montserrat'] font-semibold text-[#030003] mb-8 ml-px">
                Sign up
              </div>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="name" className="block mb-2  font-semibold ml-px">
                Your Name<span className="text-[#c60101] contents">*</span>
              </label>
              <Input
                size="large"
                id="name"
                className="py-2.5"
                placeholder="i.e. Timi James"
              />
            </div>
            <div className="form-group mb-2">
              <label className="block mb-2  font-semibold ml-px">
                Your Email<span className="text-[#c60101] contents">*</span>
              </label>
              <Input
                size="large"
                className="py-2.5"
                placeholder="i.e. joe@gmail.com"
              />
            </div>
            <div className="form-group mb-2">
              <label
                htmlFor="password"
                id="password"
                className="text-base block mb-2 ml-px font-semibold"
              >
                Your Password
                <span className="text-[#c60101] contents">*</span>
              </label>
              <Input.Password
                className="w-full p-0 pr-2 overflow-hidden"
                id="password"
                classNames={{ input: "py-2.5 pl-2.5" }}
                size="large"
                placeholder="oooooooo"
              />
            </div>
            <div className="form-group mb-2">
              <label
                htmlFor="password"
                id="confirm-password"
                className="text-base block mb-2 ml-px font-semibold"
              >
                Confirm Password
                <span className="text-[#c60101] contents">*</span>
              </label>
              <Input.Password
                id="confirm-password"
                className="w-full p-0 pr-2 overflow-hidden"
                classNames={{ input: "py-2.5 pl-2.5" }}
                size="large"
                placeholder="oooooooo"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="password"
                id="confirm-password"
                className="text-base block mb-2 ml-px font-semibold"
              >
                Identity Verification
                <span className="text-[#c60101] contents">*</span>
              </label>
              <div className="flex items-center border border-solid rounded-lg border-gray-200">
                <Input
                  size="large"
                  bordered={false}
                  className="py-2.5"
                  id="identity"
                  placeholder="Upload Id"
                />
                <Button
                  size="large"
                  type="primary"
                  onClick={() =>
                    document.getElementById("image-picker")?.click()
                  }
                >
                  Browse
                </Button>
                <input
                  type="file"
                  hidden
                  name="image"
                  id="image-picker"
                  accept="image/jpeg,image/png"
                  onChange={({ target }) => {
                    let ele = document.getElementById(
                      "identity"
                    ) as HTMLInputElement;
                    ele.value = target.files![0].name;
                  }}
                />
              </div>
            </div>
            <Button
              type="primary"
              size="large"
              onClick={() => navigate("/sign-in")}
              className="w-full h-14 rounded-xl shadow-lg mt-10"
              children="Sign In"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

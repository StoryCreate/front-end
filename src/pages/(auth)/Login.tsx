import React, { useState } from "react";
import Logo from "@assets/images/logo-text.png";
import ReadingImage from "@assets/images/reading.png";
import BooksImage from "@assets/images/books.png";
import TextImage from "@assets/images/create-connect-read.png";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@comp/lib/hooks";
import { signIn } from "@comp/lib/features/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) { toast.error('Please enter your email'); return false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { toast.error('Please enter a valid email address'); return false; }
    if (!formData.password) { toast.error('Please enter your password'); return false; }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      await dispatch(signIn(formData)).unwrap();
      toast.success('Login successful!');
      navigate('/');
    } catch (err: any) {
      toast.error(err || 'Sign in failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="flex justify-around items-center h-screen flex-wrap">
        <div className="left py-12">
          <div className="image-wrap flex items-center ml-4 lg:ml-0 gap-x-3 mb-16">
            <img src={Logo} alt="storycreate-logo" className="h-16" />
          </div>
          <div className="text-black text-left text-xl font-bold ml-4 lg:ml-0 my-8 max-w-[500px]">
            Build an outstanding community around stories made by everyday
            people like yourself.
          </div>
          <div className="image-large relative mt-28">
            <img src={ReadingImage} alt="reading" className="w-[400px] invisible lg:visible" />
            <div className="sub absolute lg:-right-16 top-0 flex flex-col animate-bounce">
              <img src={TextImage} alt="text" />
              <img src={BooksImage} alt="books" className="-mr-40 -mt-5" />
            </div>
          </div>
        </div>
        <div className="right">
          <form
            onSubmit={handleSubmit}
            className="border-solid border-primary flex flex-col gap-3 py-16 w-[350px] lg:w-[400px] shadow-xl px-10 border-2 rounded-3xl"
          >
            <div className="form-header">
              <div className="text-4xl text-left font-['Montserrat'] font-semibold text-[#030003] mb-4 ml-px">
                Sign in
              </div>
              <div className="text-sm text-left font-['Montserrat'] font-semibold text-[#030003] mb-12 ml-px">
                Don't have an account?{" "}
                <a href="/signup">
                  <div className="text-[#8b008b] contents">Sign up</div>
                </a>
              </div>
            </div>
            <div className="form-group">
              <label className="block mb-2 text-left font-semibold ml-px">
                Your Email<span className="text-[#c60101] contents">*</span>
              </label>
              <Input
                size="large"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="py-2.5"
                placeholder="joe@gmail.com"
                required
              />
            </div>
            <div className="form-group my-4">
              <label
                htmlFor="password"
                id="password"
                className="text-base text-left block mb-2 ml-px font-semibold"
              >
                Your Password
                <span className="text-[#c60101] contents">*</span>
              </label>
              <Input.Password
                className="w-full p-0 pr-2"
                name="password"
                value={formData.password}
                onChange={handleChange}
                classNames={{ input: "py-2.5 pl-2.5" }}
                size="large"
                placeholder="Password"
                required
              />
            </div>
            <div className="text-sm text-left font-['Montserrat'] font-medium text-[#8b008b] mb-10 ml-px">
              Forgot Password?
            </div>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              loading={loading}
              className="w-full h-14 rounded-xl shadow-lg"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
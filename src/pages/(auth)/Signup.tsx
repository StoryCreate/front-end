import React, { useState } from "react";
import Logo from "@assets/images/logo-text.png";
import ReadingImage from "@assets/images/reading.png";
import BooksImage from "@assets/images/books.png";
import TextImage from "@assets/images/create-connect-read.png";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@comp/lib/hooks";
import { signUp } from "@comp/lib/features/authSlice";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    identityFile: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Validate file type
      if (!file.type.match('image/jpeg|image/png')) {
        toast.error('Please upload a valid image file (JPEG or PNG)');
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size should be less than 5MB');
        return;
      }
      setFormData(prev => ({
        ...prev,
        identityFile: file
      }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('Please enter your email');
      return false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!formData.password) {
      toast.error('Please enter a password');
      return false;
    }
    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return false;
    }
    if (!formData.identityFile) {
      toast.error('Please upload an identity document');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    dispatch(signUp({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      identityFile: formData.identityFile
    }))
      .unwrap()
      .then(() => {
        toast.success('Signup successful! Please login to continue.');
        navigate('/login');
      })
      .catch((err: string) => {
        toast.error(err || 'Signup failed. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="login-container">
      <div className="flex justify-around items-center h-screen flex-wrap">
        <div className="left py-12">
          <div className="image-wrap flex items-center ml-4 lg:ml-0 gap-x-3 mb-16">
            <img src={Logo} alt="storycreate-logo" className="h-16" />
          </div>
          <div className="text text-left text-xl font-bold ml-4 lg:ml-0 my-8 max-w-[500px]">
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
            className="border-solid border-primary flex flex-col gap-3 py-10 w-[350px] lg:w-[400px] shadow-xl px-10 border-2 rounded-3xl"
          >
            <div className="form-header">
              <div className="text-4xl text-left font-['Montserrat'] font-semibold text-[#030003] mb-8 ml-px">
                Sign up
              </div>
              <div className="text-sm text-left font-['Montserrat'] font-semibold text-[#030003] mb-6 ml-px">
                Already have an account?{" "}
                <a href="/login">
                  <div className="text-[#8b008b] contents">Sign in</div>
                </a>
              </div>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="name" className="block mb-2 text-left font-semibold ml-px">
                Your Name<span className="text-[#c60101] contents">*</span>
              </label>
              <Input
                size="large"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="py-2.5"
                placeholder="Mide Paul"
                required
              />
            </div>
            <div className="form-group mb-2">
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
            <div className="form-group mb-2">
              <label
                htmlFor="password"
                id="password"
                className="text-base block mb-2 text-left ml-px font-semibold"
              >
                Your Password
                <span className="text-[#c60101] contents">*</span>
              </label>
              <Input.Password
                className="w-full p-0 pr-2 overflow-hidden"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                classNames={{ input: "py-2.5 pl-2.5" }}
                size="large"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label
                htmlFor="confirm-password"
                id="confirm-password"
                className="text-base block mb-2 text-left ml-px font-semibold"
              >
                Confirm Password
                <span className="text-[#c60101] contents">*</span>
              </label>
              <Input.Password
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-0 pr-2 overflow-hidden"
                classNames={{ input: "py-2.5 pl-2.5" }}
                size="large"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="identity"
                className="text-base block mb-2 text-left ml-px font-semibold"
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
                  value={formData.identityFile?.name || ''}
                  readOnly
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
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <Button
              htmlType="submit"
              size="large"
              type="primary"
              loading={loading}
              className="w-full h-14 rounded-xl shadow-lg mt-10"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

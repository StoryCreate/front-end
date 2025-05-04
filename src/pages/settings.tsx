import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';

export const Settings = () => {
    return (
        <div className="main-padding bg-white w-full h-full pb-36">
            <h1 className="text-black text-left text-2xl font-semibold mt-6 mb-10">Settings</h1>
            <div className="flex gap-20 items-center mb-6">
                <h3 className="text-primary text-base font-semibold pr-4">Account preferences</h3>
                <img src={arrow_right_pupple} alt="Arrow Right" className="w-5 h-5 ml-3" />
            </div>
            <div className="flex flex-col lg:flex-row gap-24">
                <div className="space-y-8">
                    <a href="/signinandsecurity" className="flex items-center justify-between w-[300px]">
                        <h3 className="text-black text-base font-medium">Sign in and security</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </a>
                    <a className="flex items-center justify-between w-[300px]">
                        <h3 className="text-black text-base font-medium">Subscriptions</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </a>
                    <a href="/notification" className="flex items-center justify-between w-[300px]">
                        <h3 className="text-black text-base font-medium">Notifications</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </a>
                    <a href="/privacyandsafety" className="flex items-center justify-between w-[300px]">
                        <h3 className="text-black text-base font-medium">Privacy and safety</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </a>
                    <a className="flex items-center justify-between w-[300px]">
                        <h3 className="text-black text-base font-medium">Additional resources</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </a>
                </div>
                <img src={settings_line} alt="Settings Line" className="absolute top-40 left-[300px] lg:left-[400px] h-[400px] invisible lg:visible" />
                <div className="space-y-6 text-left w-full -mt-12">
                    <a href="/accountinformation" className="flex items-center justify-between w-full">
                        <h3 className="text-black text-base font-semibold">Account information</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </a>
                    <p className="text-black text-sm max-w-[300px]">See your account information like your phone number and email address</p>
                    <a href="/changepassword" className="flex items-center justify-between w-full">
                        <h3 className="text-black text-base font-semibold">Change your password</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </a>
                    <p className="text-black text-sm max-w-[300px]">Change your password at anytime</p>
                    <a href="/deactivateaccount" className="flex items-center justify-between w-full">
                        <h3 className="text-black text-base font-semibold">Deactivate your account</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </a>
                    <p className="text-black text-sm max-w-[300px]">Find out how you can deactivate your account</p>
                </div>
            </div>
        </div>
    );
};

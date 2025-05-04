import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';
import { Delete } from 'lucide-react';

export const Deactivateaccount = () => {
    return (
        <div className="main-padding bg-white w-full h-full pb-14 lg:pb-36">
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
                    <div className="flex justify-between">
                        <h3 className="text-black text-base font-semibold">This will deactivate your account</h3>
                        <a href="/settings"><Delete className="text-primary rounded-md hover:bg-opacity-70" /></a>
                    </div>
                    <p className="text-left text-gray-400 text-sm">
                        You’re about to start the process of deactivating
                        your storycreate account. Your display name,
                        @username, and public profile will no longer be
                        viewable on storycreate.com, storycreate for iOS, or
                        storycreate for Android.
                    </p>

                    <h3 className="text-black text-base font-semibold"> What else you should know </h3>

                    <p className="text-left text-gray-400 text-sm"> You can restore your storycreate account if it was
                        accidentally or wrongfully deactivated for up
                        to 30 days after deactivation.
                    </p>

                    <button className="text-sm font-bold bg-transparent text-red-500">Deactivate</button>
                </div>
            </div>
        </div>
    );
};

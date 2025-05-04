import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';
import { Delete } from 'lucide-react';

export const Signinandsecurity = () => {
    return (
        <div className="main-padding bg-white w-full h-full pb-20">
            <h1 className="text-black text-left text-2xl font-semibold mt-6 mb-10">Settings</h1>
            <div className="flex gap-20 items-center mb-6">
            </div>
            <div className="flex flex-col lg:flex-row gap-24">
                <div className="space-y-8">
                    <a href="/settings" className="flex items-center justify-between w-[300px]">
                        <h3 className="text-black text-base font-medium pr-4">Account preferences</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5 ml-4" />
                    </a>
                    <a className="flex items-center justify-between w-[300px]">
                        <h3 className="text-primary text-base font-semibold">Sign in and security</h3>
                        <img src={arrow_right_pupple} alt="Arrow Right" className="w-5 h-5" />
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
                        <h3 className="text-black text-base font-semibold">Sign in and security</h3>
                        <a href="/settings"><Delete className="text-primary rounded-md hover:bg-opacity-70" /></a>
                    </div>
                    <div className="flex flex-col">
                        <a href="/emailaddress">
                            <div className="flex items-center justify-between w-full">
                                <h3 className="text-black text-base font-semibold">Email address</h3>
                                <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                            </div>
                        </a>
                        <p className="text-black text-sm max-w-[300px]">manage your email address</p>
                    </div>
                    <div className="flex flex-col">
                        <a href="/phonenumbers">
                            <div className="flex items-center justify-between w-full">
                                <h3 className="text-black text-base font-semibold">Phone numbers</h3>
                                <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                            </div>
                        </a>
                        <p className="text-black text-sm max-w-[300px]">Manage your phone numbers</p>
                    </div>
                    <div className="flex flex-col">
                        <a href="/changepassword">
                            <div className="flex items-center justify-between w-full">
                                <h3 className="text-black text-base font-semibold">Password</h3>
                                <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                            </div>
                        </a>
                        <p className="text-black text-sm max-w-[300px]">Change your password</p>
                    </div>
                    <div className="flex flex-col">
                        <a href="/activesessions">
                            <div className="flex items-center justify-between w-full">
                                <h3 className="text-black text-base font-semibold">Where you're signed in</h3>
                                <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                            </div>
                        </a>
                        <p className="text-black text-sm max-w-[300px]">Check your active sessions</p>
                    </div>
                    <div className="flex flex-col">
                        <a href="/activesessions">
                            <div className="flex items-center justify-between w-full">
                                <h3 className="text-black text-base font-semibold">Devices that remember your password</h3>
                                <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                            </div>
                        </a>
                        <p className="text-black text-sm max-w-[300px]">Check your active sessions</p>
                    </div>
                    <div className="flex flex-col">
                        <a href="/twostepverification">
                            <div className="flex items-center justify-between w-full">
                                <h3 className="text-black text-base font-semibold">Two-step verification</h3>
                                <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                            </div>
                        </a>
                        <p className="text-black text-sm max-w-[300px]">Secure your storycreate account with two-step verification</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
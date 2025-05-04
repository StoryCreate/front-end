import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';
import { Delete } from 'lucide-react';
import { Button } from "@comp/ui/button";
import toggle from './../assets/icons/toggle.png';

export const Phonenumbers = () => {
    return (
        <div className="main-padding bg-white w-full h-full pb-20">
            <h1 className="text-black text-left text-2xl font-semibold mt-6 mb-10">Settings</h1>
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
                        <h3 className="text-black text-base font-semibold">Phone numbers</h3>
                        <a href="/signinandsecurity"><Delete className="text-primary rounded-md hover:bg-opacity-70" /></a>
                    </div>
                    <div className="group-3">
                        <h3 className="text-left text-sm text-black font-medium">Phone numbers you have added</h3>
                        <h3 className="pt-4 text-left text-sm text-primary font-medium">This won't be displayed on your profile</h3>

                        <div className="mt-4 flex items-center gap-4">
                            <h3 className="text-left border border-solid p-3 w-[600px] rounded-2xl text-sm text-black font-medium">US +1 1111111111</h3>
                            <h3 className="text-left text-sm text-primary font-semibold cursor-pointer">Remove</h3>
                        </div>

                        <h3 className="pt-9 text-left text-sm text-black font-medium">Use for resetting password</h3>
                        <p className="pt-4 text-left text-sm text-primary font-medium">If selected, you will be able to use this number to reset your password</p>

                        <div className="mt-4 flex items-center gap-4">
                            <h3 className="text-left border border-solid p-3 w-[600px] rounded-2xl text-sm text-black font-medium">Make primary</h3>
                            <img src={toggle} className="cursor-pointer" />
                        </div>

                        <p className="pt-6 text-left text-sm text-black font-medium"> Your phone number helps us keep your account secure by adding an additional<br /> layer of
                            verification. It also helps others with your phone number, discover and<br /> connect with you.
                            You can always decide how you want your phone number used.</p>
                        <h3 className="pt-4 text-left text-sm text-primary font-semibold cursor-pointer"> Learn more </h3>
                    </div>

                    <Button className="rounded-xl cursor-pointer"> Add number </Button>
                </div>
            </div>
        </div>
    );
};
import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';
import { Delete } from 'lucide-react';

export const Activesessions = () => {
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
                        <h3 className="text-black text-base font-semibold">Active sessions</h3>
                        <a href="/signinandsecurity"><Delete className="text-primary rounded-md hover:bg-opacity-70" /></a>
                    </div>
                    <div>
                        <p className="text-left text-sm max-w-[700px] text-black font-medium bg-gray-300 rounded-xl p-4"> The locations listed below are an estimate of where the IP address may be located within
                            your country, region and city. The accuracy of the look-up varies by providers and the
                            location of the device. This should only be used as a rough guideline.
                        </p>
                        <h3 className="pt-6 text-left text-sm text-black font-medium"> You're signed in to 2 sessions </h3>
                        <h3 className="pt-4 text-left text-sm text-primary font-medium"> Current session </h3>

                        <h3 className="pt-6 text-left text-sm text-black font-medium"> Phoenix, Unites states </h3>
                        <h3 className="text-left text-sm text-black font-medium"> (Approximate location) </h3>

                        <h3 className="pt-6 text-left text-sm text-black font-medium"> Windows on chrome </h3>
                        <h3 className="pt-6 text-left text-sm text-black font-semibold"> IP Address: </h3>
                        <h3 className="text-left text-sm text-black font-medium"> 195.153.89.146 </h3>
                        <h3 className="text-left text-sm text-black font-semibold"> IP Address Owner </h3>
                        <h3 className="text-left text-sm text-black font-medium"> 195.153.89.146 </h3>
                        <h3 className="pt-6 text-left text-sm text-primary font-semibold cursor-pointer"> End </h3>

                        <h3 className="pt-6 text-left text-sm text-primary font-medium"> Other active sessions </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
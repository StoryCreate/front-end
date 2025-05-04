import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';
import { Delete } from 'lucide-react';
import security from './../assets/icons/security.png';
import smart_phone from './../assets/icons/smart_phone.png';
import { Button } from "@comp/ui/button";

export const Twostepverification = () => {
    return (
        <div className="main-padding bg-white w-full h-full pb-20 lg:pb-36">
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
                        <h3 className="text-black text-base font-semibold">Two step verification</h3>
                        <a href="/signinandsecurity"><Delete className="text-primary rounded-md hover:bg-opacity-70" /></a>
                    </div>
                    <div>
                        <div>
                            <h3 className="text-black text-base font-semibold"> Secure your storycreate account with two-step verification </h3>

                            <div className="flex gap-4 mt-6">
                                <img src={security} className="h-6 w-6" />
                                <p className="text-black text-sm font-medium">Two step verification gives you additional security by requiring a
                                    verification code whenever you sign in on new device. <span className="text-primary">Learn more</span>
                                </p>
                            </div>
                            <div className="flex gap-4 mt-6">
                                <img src={smart_phone} className="h-6 w-6" />
                                <p className="text-black text-sm font-medium"> Your phone number helps us keep your account secure by adding an
                                    additional layer of verification. It also helps others with your phone
                                    number, discover and connect with you. You can always decide how
                                    you want your phone number used. <span className="text-primary">Learn more</span>
                                </p>
                            </div>
                        </div>

                        <Button className="mt-6 rounded-xl cursor-pointer"> Set up </Button>

                        <p className="pt-6 text-primary text-sm font-medium"> <span className="text-black font-medium">Note:</span> Turning this feature on will sign you out anywhere you’re currently signed in and remove all
                            your remembered devices. It will also remove the access you may have provided to any partner or services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
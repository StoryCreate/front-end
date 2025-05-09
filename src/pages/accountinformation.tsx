import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@comp/lib/hooks";
import { RootState, AppDispatch } from '@comp/lib/store';
import { fetchProfile } from "@comp/lib/features/authSlice";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_purple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';
import { Delete } from 'lucide-react';

export const Accountinformation = () => {
    const dispatch: AppDispatch = useAppDispatch();

    // Fetch profile on component mount
    useEffect(() => {
        dispatch(fetchProfile() as any);
    }, [dispatch]);

    // Use useAppSelector to get user, loading, and error
    const { user } = useAppSelector((state: RootState) => state.auth);

    return (
        <div className="main-padding bg-white w-full h-full pb-20">
            <h1 className="text-black text-left text-2xl font-semibold mt-6 mb-10">Settings</h1>
            <div className="flex gap-20 items-center mb-6">
                <h3 className="text-primary text-base font-semibold pr-4">Account preferences</h3>
                <img src={arrow_right_purple} alt="Arrow Right" className="w-5 h-5 ml-3" />
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
                        <h3 className="text-black text-base font-semibold">Account information</h3>
                        <a href="/settings"><Delete className="text-primary rounded-md hover:bg-opacity-70" /></a>
                    </div>
                    {/* <h3 className="flex items-center justify-between w-full">
                        <h3 className="text-black text-base font-semibold">Phone</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </h3>
                    <p className="text-black text-sm max-w-[300px]">+23411111111</p> */}
                    <h3 className="flex items-center justify-between w-full">
                        <h3 className="text-black text-base font-semibold">Email</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </h3>
                    <p className="text-black text-sm max-w-[300px]">{user.email}</p>
                    <h3 className="flex items-center justify-between w-full">
                        <h3 className="text-black text-base font-semibold">Location</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </h3>
                    <p className="text-black text-sm max-w-[300px]">{user.creator?.location}</p>
                    <h3 className="flex items-center justify-between w-full">
                        <h3 className="text-black text-base font-semibold">Languages</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </h3>
                    <p className="text-black text-sm max-w-[300px]">English</p>
                    {/* <h3 className="flex items-center justify-between w-full">
                        <h3 className="text-black text-base font-semibold">Gender</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </h3>
                    <p className="text-black text-sm max-w-[300px]">Female</p> */}
                </div>
            </div>
        </div>
    );
};

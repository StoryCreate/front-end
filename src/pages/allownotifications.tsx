import React, { useContext } from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_purple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';
import { Delete } from 'lucide-react';
import toggle from './../assets/icons/toggle.png';
import { NotificationSettingsContext } from "../context/NotificationSettingsContext";

export const Allownotifications = () => {
    const { settings, toggleSetting } = useContext(NotificationSettingsContext);

    return (
        <div className="main-padding bg-white w-full h-full pb-20 lg:pb-36">
            <h1 className="text-black text-left text-2xl font-semibold mt-6 mb-10">Settings</h1>
            <div className="flex flex-col lg:flex-row gap-24">
                <div className="space-y-8">
                    <a href="/settings" className="flex items-center justify-between w-[300px]">
                        <h3 className="text-black text-base font-medium pr-4">Account preferences</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5 ml-4" />
                    </a>
                    <a href="/signinandsecurity" className="flex items-center justify-between w-[300px]">
                        <h3 className="text-black text-base font-medium">Sign in and security</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </a>
                    <a className="flex items-center justify-between w-[300px]">
                        <h3 className="text-black text-base font-medium">Subscriptions</h3>
                        <img src={arrow_right_dark} alt="Arrow Right" className="w-5 h-5" />
                    </a>
                    <a className="flex items-center justify-between w-[300px]">
                        <h3 className="text-primary text-base font-semibold">Notifications</h3>
                        <img src={arrow_right_purple} alt="Arrow Right" className="w-5 h-5" />
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
                        <h3 className="text-black text-base font-semibold">Notifications</h3>
                        <a href="/notification"><Delete className="text-primary rounded-md hover:bg-opacity-70" /></a>
                    </div>

                    {settings.length === 0 ? (
                        <p>Loading notification settings...</p>
                    ) : (
                        settings.map(setting => (
                            <div key={setting.id} className="pt-6 border-b border-gray-300 pb-4">
                                <h4 className="text-black font-semibold mb-2">{setting.category}</h4>
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSetting(setting.id, 'allowAll')}>
                                    <p className="text-black text-sm font-semibold">Allow all notifications</p>
                                    <img src={toggle} className={`cursor-pointer ${setting.allowAll ? 'opacity-100' : 'opacity-40'}`} />
                                </div>
                                <div className="flex justify-between items-center cursor-pointer mt-2" onClick={() => toggleSetting(setting.id, 'push')}>
                                    <p className="text-black text-sm">Push</p>
                                    <img src={toggle} className={`cursor-pointer ${setting.push ? 'opacity-100' : 'opacity-40'}`} />
                                </div>
                                <div className="flex justify-between items-center cursor-pointer mt-2" onClick={() => toggleSetting(setting.id, 'inApp')}>
                                    <p className="text-black text-sm">In-app</p>
                                    <img src={toggle} className={`cursor-pointer ${setting.inApp ? 'opacity-100' : 'opacity-40'}`} />
                                </div>
                                <div className="flex justify-between items-center cursor-pointer mt-2" onClick={() => toggleSetting(setting.id, 'email')}>
                                    <p className="text-black text-sm">Email</p>
                                    <img src={toggle} className={`cursor-pointer ${setting.email ? 'opacity-100' : 'opacity-40'}`} />
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

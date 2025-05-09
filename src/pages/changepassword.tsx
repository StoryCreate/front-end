import React, { useState } from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';
import { Delete } from 'lucide-react';
import { Button } from "@comp/ui/button";
import API from "../services/axiosInstance";
import { useSelector } from "react-redux";

export const Changepassword = () => {
    const token = useSelector((state: any) => state.auth.token);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setError(null);
        setSuccess(null);

        if (newPassword !== confirmPassword) {
            setError("New password and confirm password do not match.");
            return;
        }

        if (!token) {
            setError("User not authenticated.");
            return;
        }

        setLoading(true);
        try {
            const response = await API.patch('profile/password/change', {
                currentPassword,
                newPassword,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSuccess(response.data.message || "Password updated successfully.");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to update password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main-padding bg-white w-full h-full pb-14">
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
                        <h3 className="text-black text-base font-semibold">Change Password</h3>
                        <a href="/settings"><Delete className="text-primary rounded-md hover:bg-opacity-70" /></a>
                    </div>

                    <div className="flex flex-col gap-10">
                        <input
                            type="password"
                            className="p-4 py-4 px-5 w-80 lg:w-[700px] border-solid border border-gray-400 rounded-xl text-black text-left text-sm"
                            placeholder="Current password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        <button className="mt-2 pr-6 lg:pr-32 text-sm text-primary bg-transparent font-medium text-right">Forgot password?</button>

                        <input
                            type="password"
                            className="p-4 py-4 px-5 w-80 lg:w-[700px] border-solid border border-gray-400 rounded-xl text-black text-left text-sm"
                            placeholder="New password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />

                        <input
                            type="password"
                            className="p-4 py-4 px-5 w-80 lg:w-[700px] border-solid border border-gray-400 rounded-xl text-black text-left text-sm"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        {error && <p className="text-red-600">{error}</p>}
                        {success && <p className="text-green-600">{success}</p>}

                        <Button className="text-sm w-24 cursor-pointer" onClick={handleSubmit} disabled={loading}>
                            {loading ? 'Saving...' : 'Save'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

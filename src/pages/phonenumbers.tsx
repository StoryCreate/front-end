import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';
import toggle from './../assets/icons/toggle.png';



export const Phonenumbers = () => {
    return (
        <div className="settings">
            <div>
            <h1 className="title"> Settings </h1>
            </div>
            <div className="settings-list">
                    <a href="/settings"> <h3 className="account-preferences-2"> Account preferences </h3> <img src={arrow_right_dark} className="arrow-right" /> </a>
                     <h3 className="sign-in-2"> Sign in and security </h3> <img src={arrow_right_pupple} className="arrow-right-dark-1" />
                    <a href="/subscriptions"> <h3 className="subscriptions"> Subscriptions </h3> <img src={arrow_right_dark} className="arrow-right-dark-2" /> </a>
                    <a href="/notification"> <h3 className="notification"> Notifications </h3> <img src={arrow_right_dark} className="arrow-right-dark-3" /> </a>
                    <a href="/privacyandsafety"> <h3 className="privacy"> Privacy and safety </h3> <img src={arrow_right_dark} className="arrow-right-dark-4" /> </a>
                    <a> <h3 className="additonal"> Additonal resources </h3> <img src={arrow_right_dark} className="arrow-right-dark-5" /> </a>
            </div>
            <img src={settings_line} className="settings-line" />

            <a href="/settings"> <button className="cancel"> X </button> </a>

            <div className="group-3">
                <h3 className="text-17"> Phone numbers </h3>
                <h3 className="text-18"> Phone numbers you have added </h3>
                <h3 className="text-19"> This won't be displayed on your profile </h3>

                <h3 className="text-20"> US +1 1111111111 </h3>
                <h3 className="text-21"> Remove </h3>

                <h3 className="text-22"> Use for resetting password </h3>
                <p className="text-23"> If selected, you will be able to use this number to reset your password </p>
                <h3 className="text-24"> Make primary </h3>
                <img src={toggle} className="toggle-icon-5" />
                <p className="text-25"> Your phone number helps us keep your account secure by adding an additional layer of
                    verification. It also helps others with your phone number, discover and connect with you.
                    You can always decide how you want your phone number used.</p>
                <h3 className="text-26"> Learn more </h3>
            </div>

            <button className="add-number-button"> Add number </button>
        </div>
    );
};
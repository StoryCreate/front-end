import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';


export const Settings = () => {
    return (
        <div className="settings">
            <div>
            <h1 className="title"> Settings </h1>
            </div>
            <div className="settings-list">
                     <h3 className="account-preferences"> Account preferences </h3> <img src={arrow_right_pupple} className="arrow-right" />
                    <a href="/signinandsecurity"> <h3 className="sign-in"> Sign in and security </h3> <img src={arrow_right_dark} className="arrow-right-dark-1" /> </a>
                    <a> <h3 className="subscriptions"> Subscriptions </h3> <img src={arrow_right_dark} className="arrow-right-dark-2" /> </a>
                    <a href="/notification"> <h3 className="notification"> Notifications </h3> <img src={arrow_right_dark} className="arrow-right-dark-3" /> </a>
                    <a href="/privacyandsafety"> <h3 className="privacy"> Privacy and safety </h3> <img src={arrow_right_dark} className="arrow-right-dark-4" /> </a>
                    <a> <h3 className="additonal"> Additonal resources </h3> <img src={arrow_right_dark} className="arrow-right-dark-5" /> </a>
            </div>
            <img src={settings_line} className="settings-line" />
            <div className="group-2">
                <a href="/accountinformation"> <h3 className="account-info"> Account information</h3>
                <img src={arrow_right_dark} className="arrow-right-dark-6" /> </a>
                <p className="p-1"> See your account information like your phone number and email address </p>
            </div>

            <div className="group-3">
                <a href="/changepassword"> <h3 className="change-your-password"> Change your password </h3>
                <img src={arrow_right_dark} className="arrow-right-dark-7" /> </a>
                <p className="p-2"> Change your password at anytime </p>
            </div>

            <div className="group-4">
                <a href="/deactivateaccount"> <h3 className="deactivate-account"> Deactivate your account </h3>
                <img src={arrow_right_dark} className="arrow-right-dark-8" /> </a>
                <p className="p-3"> Find out how you can deactivate your account </p>
            </div>
        </div>
    );
};
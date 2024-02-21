import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';


export const Emailaddress = () => {
    return (
        <div className="settings">
            <div>
            <h1 className="title"> Settings </h1>
            </div>
            <div className="settings-list">
                    <a href="/settings"> <h3 className="account-preferences-2"> Account preferences </h3> <img src={arrow_right_dark} className="arrow-right" /> </a>
                     <h3 className="sign-in-2"> Sign in and security </h3> <img src={arrow_right_pupple} className="arrow-right-dark-1" />
                    <a> <h3 className="subscriptions"> Subscriptions </h3> <img src={arrow_right_dark} className="arrow-right-dark-2" /> </a>
                    <a href="/notification"> <h3 className="notification"> Notifications </h3> <img src={arrow_right_dark} className="arrow-right-dark-3" /> </a>
                    <a href="/privacyandsafety"> <h3 className="privacy"> Privacy and safety </h3> <img src={arrow_right_dark} className="arrow-right-dark-4" /> </a>
                    <a> <h3 className="additonal"> Additonal resources </h3> <img src={arrow_right_dark} className="arrow-right-dark-5" /> </a>
            </div>
            <img src={settings_line} className="settings-line" />

            <a href="/settings"> <button className="cancel"> X </button> </a>

            <div className="group-3">
                <h3 className="text-13"> Email addresses </h3>
                <h3 className="text-14"> Emails you have added </h3>
                <h3 className="text-15"> Primary email </h3>
                <h3 className="text-16"> olumidebamgboje@gmail.com </h3>
            </div>

            <button className="add-email-adress-button"> Add email address</button>
        </div>
    );
};
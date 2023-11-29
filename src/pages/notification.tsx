import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';


export const Notification = () => {
    return (
        <div className="settings">
            <div>
            <h1 className="title"> Settings </h1>
            </div>
            <div className="settings-list">
                    <a href="/settings"> <h3 className="account-preferences-2"> Account preferences </h3> <img src={arrow_right_dark} className="arrow-right" /> </a>
                    <a href="/signinandsecurity">  <h3 className="sign-in"> Sign in and security </h3> <img src={arrow_right_dark} className="arrow-right-dark-1" />  </a>
                    <a> <h3 className="subscriptions"> Subscriptions </h3> <img src={arrow_right_dark} className="arrow-right-dark-2" /> </a>
                     <h3 className="notification-2"> Notifications </h3> <img src={arrow_right_pupple} className="arrow-right-dark-3" />
                    <a href="/privacyandsafety"> <h3 className="privacy"> Privacy and safety </h3> <img src={arrow_right_dark} className="arrow-right-dark-4" /> </a>
                    <a> <h3 className="additonal"> Additonal resources </h3> <img src={arrow_right_dark} className="arrow-right-dark-5" /> </a>
            </div>
            <img src={settings_line} className="settings-line" />

            <a href="/settings"> <button className="cancel"> X </button> </a>

            <div className="group-3">
                <h3 className="text-45"> Notifications you receive </h3>

                <a href="/allownotifications"> <img src={arrow_right_dark} className="arrow-right-dark-15" />
                <p className="text-46"> Hiring someone </p> </a>

                <a href="/allownotifications"> <img src={arrow_right_dark} className="arrow-right-dark-16" />
                <p className="text-47"> Messaging </p> </a>

                <a href="/allownotifications"> <img src={arrow_right_dark} className="arrow-right-dark-17" />
                <p className="text-48"> Connecting with others </p> </a>

                <a href="/allownotifications"> <img src={arrow_right_dark} className="arrow-right-dark-18" />
                <p className="text-49"> Posting and commenting </p> </a>

                <a href="/allownotifications"> <img src={arrow_right_dark} className="arrow-right-dark-19" />
                <p className="text-50"> Pages </p> </a>

                <a href="/allownotifications"> <img src={arrow_right_dark} className="arrow-right-dark-20" />
                <p className="text-51"> News and report </p> </a>

                <a href="/allownotifications"> <img src={arrow_right_dark} className="arrow-right-dark-21" />
                <p className="text-52"> Updating your profile </p> </a>

                <a href="/allownotifications"> <img src={arrow_right_dark} className="arrow-right-dark-22" />
                <p className="text-53"> Verifications </p> </a>
            </div>

        </div>
    );
};
import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';
import toggle from './../assets/icons/toggle.png';


export const Allownotifications = () => {
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
                <h3 className="text-45"> Allow all notifications </h3>
                <img src={toggle} className="toggle-icon-1" />

                <h3 className="text-54"> Push </h3>
                <img src={toggle} className="toggle-icon-2" />

                <h3 className="text-55"> In-app </h3>
                <img src={toggle} className="toggle-icon-3" />

                <h3 className="text-56"> Email </h3>
                <img src={toggle} className="toggle-icon-4" />
            </div>

        </div>
    );
};
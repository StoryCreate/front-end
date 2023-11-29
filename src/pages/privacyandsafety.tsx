import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';


export const Privacyandsafety = () => {
    return (
        <div className="settings">
            <div>
            <h1 className="title"> Settings </h1>
            </div>
            <div className="settings-list">
                    <a href="/settings"> <h3 className="account-preferences-2"> Account preferences </h3> <img src={arrow_right_dark} className="arrow-right" /> </a>
                    <a href="/signinandsecurity">  <h3 className="sign-in"> Sign in and security </h3> <img src={arrow_right_dark} className="arrow-right-dark-1" />  </a>
                    <a> <h3 className="subscriptions"> Subscriptions </h3> <img src={arrow_right_dark} className="arrow-right-dark-2" /> </a>
                    <a href="/notification"> <h3 className="notification"> Notifications </h3> <img src={arrow_right_dark} className="arrow-right-dark-3" /> </a>
                    <h3 className="privacy-2"> Privacy and safety </h3> <img src={arrow_right_pupple} className="arrow-right-dark-4" />
                    <a> <h3 className="additonal"> Additonal resources </h3> <img src={arrow_right_dark} className="arrow-right-dark-5" /> </a>
            </div>
            <img src={settings_line} className="settings-line" />

            <a href="/settings"> <button className="cancel"> X </button> </a>

            <div className="group-3">
                <h3 className="text-45"> Manage what information you see and share on storycreate </h3>

                <img src={arrow_right_dark} className="arrow-right-dark-15" />
                <p className="text-46"> Audience </p>

                <img src={arrow_right_dark} className="arrow-right-dark-16" />
                <p className="text-47"> Your posts </p>

                <img src={arrow_right_dark} className="arrow-right-dark-17" />
                <p className="text-48"> Mute and block </p>

                <img src={arrow_right_dark} className="arrow-right-dark-18" />
                <p className="text-49"> Direct messages </p>

                <img src={arrow_right_dark} className="arrow-right-dark-19" />
                <p className="text-50"> Location information </p>
            </div>

        </div>
    );
};
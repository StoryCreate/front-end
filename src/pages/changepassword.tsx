import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';


export const Changepassword = () => {
    return (
        <div className="settings">
            <div>
            <h1 className="title"> Settings </h1>
            </div>
            <div className="settings-list">
                     <h3 className="account-preferences"> Account preferences </h3> <img src={arrow_right_pupple} className="arrow-right" />
                    <a href="/signinandsecurity"> <h3 className="sign-in"> Sign in and security </h3> <img src={arrow_right_dark} className="arrow-right-dark-1" /> </a>
                    <a href="/subscriptions"> <h3 className="subscriptions"> Subscriptions </h3> <img src={arrow_right_dark} className="arrow-right-dark-2" /> </a>
                    <a href="/notification"> <h3 className="notification"> Notifications </h3> <img src={arrow_right_dark} className="arrow-right-dark-3" /> </a>
                    <a href="/privacyandsafety"> <h3 className="privacy"> Privacy and safety </h3> <img src={arrow_right_dark} className="arrow-right-dark-4" /> </a>
                    <a> <h3 className="additonal"> Additonal resources </h3> <img src={arrow_right_dark} className="arrow-right-dark-5" /> </a>
            </div>
            <img src={settings_line} className="settings-line" />
            <div className="group-2">
                <h3 className="change-password"> Change password</h3>
            </div>

            <a href="/settings"> <button className="cancel"> X </button> </a>

            <input className="current-password" placeholder="Current password" />

            <button className="forgot-password"> Forgot password? </button>

            <input className="new-password" placeholder="New password" />

            <input className="confirm-password" placeholder="Confirm password" />

            <button className="save-button"> Save </button>
        </div>
    );
};
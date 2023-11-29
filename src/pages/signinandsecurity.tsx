import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';


export const Signinandsecurity = () => {
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
                <a href="/emailaddress"> <h3 className="text-1"> Email address </h3>
                <img src={arrow_right_dark} className="arrow-right-dark-9" /> </a>
                <p className="text-2"> manage your email address </p>
            </div>

            <div className="group-4">
                <a href="/phonenumbers"> <h3 className="text-3"> Phone numbers </h3>
                <img src={arrow_right_dark} className="arrow-right-dark-10" /> </a>
                <p className="text-4"> Manage your phone numbers </p>
            </div>
   
            
            <div className="group-5">
                <a href="/changepassword"> <h3 className="text-5"> Password </h3>
                <img src={arrow_right_dark} className="arrow-right-dark-11" /> </a>
                <p className="text-6"> Change your password </p>
            </div>

            <div className="group-6">
                <a href="/activesessions"> <h3 className="text-7"> Where you're signed in </h3>
                <img src={arrow_right_dark} className="arrow-right-dark-12" /> </a>
                <p className="text-8"> Check your active sessions </p>
            </div>

            <div className="group-7">
                <a href="/activesessions"> <h3 className="text-9"> Devices that remember your password </h3>
                <img src={arrow_right_dark} className="arrow-right-dark-13" /> </a>
                <p className="text-10"> Check your active sessions </p>
            </div>

            <div className="group-8">
            <a href="/twostepverification"> <h3 className="text-11"> Two-step verification </h3>
                <img src={arrow_right_dark} className="arrow-right-dark-14" /> </a>
                <p className="text-12"> Secure your storycreate account with two-step verification </p>
            </div>
        </div>
    );
};
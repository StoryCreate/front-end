import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';


export const Accountinformation = () => {
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
                <h3 className="account-info-2"> Account information</h3>
            </div>

            <a href="/settings"> <button className="cancel"> X </button> </a>

            <div className="group-3">
                <h3 className="phone"> Phone </h3>
                <img src={arrow_right_dark} className="arrow-right-dark-9" />
                <p className="phone-number"> +23411111111 </p>
            </div>

            <div className="group-4">
                <h3 className="email"> Email </h3>
                <img src={arrow_right_dark} className="arrow-right-dark-10" />
                <p className="email-2"> jenni@gmail.com </p>
            </div>
   
            
            <div className="group-5">
                <h3 className="country"> Country</h3>
                <img src={arrow_right_dark} className="arrow-right-dark-11" />
                <p className="country-2"> United States </p>
            </div>

            <div className="group-6">
                <h3 className="language"> Languages </h3>
                <img src={arrow_right_dark} className="arrow-right-dark-12" />
                <p className="language-2"> English </p>
            </div>

            <div className="group-7">
                <h3 className="gender"> Gender </h3>
                <img src={arrow_right_dark} className="arrow-right-dark-13" />
                <p className="gender-2"> Female </p>
            </div>
        </div>
    );
};
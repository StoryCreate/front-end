import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';


export const Activesessions = () => {
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
                <h3 className="text-27"> Active sessions </h3>
                <p className="text-28"> The locations listed below are an estimate of where the IP address may be located within
                    your <br /> country, region and city. The accuracy of the look-up varies by providers and the
                    location <br /> of the device. This should only be used as a rough guideline. </p>
                <h3 className="text-29"> You're signed in to 2 sessions </h3>
                <h3 className="text-30"> Current session </h3>

                <h3 className="text-31"> Phoenix, Unites states </h3>
                <h3 className="text-32"> (Approximate location) </h3>
                <h3 className="text-33"> Other active sessions </h3>
                
                <h3 className="text-34"> Windows on chrome </h3>
                <h3 className="text-35"> IP Address: </h3>
                <h3 className="text-36"> 195.153.89.146 </h3>
                <h3 className="text-37"> IP Address Owner </h3>
                <h3 className="text-38"> 195.153.89.146 </h3>
                
                <h3 className="text-39"> End </h3>
            </div>

        </div>
    );
};
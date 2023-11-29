import React from "react";
import settings_line from './../assets/images/settings_line.png';
import arrow_right_pupple from './../assets/icons/arrow_right_pupple.png';
import arrow_right_dark from './../assets/icons/arrow_right_dark.png';
import security from './../assets/icons/security.png';
import smart_phone from './../assets/icons/smart_phone.png';


export const Twostepverification = () => {
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
                <h3 className="text-40"> Two step verification </h3>
                <h3 className="text-41"> Secure your storycreate account with two-step verification </h3>
                
                <img src={security} className="security-icon" />
                <p className="text-42"> Two step verification gives you additional security by requiring a
                    verification code whenever <br /> you sign in on new device. <span className="span-learn-more">Learn more</span> </p>
                <img src={smart_phone} className="smart-phone-icon" />
                <p className="text-43"> Your phone number helps us keep your account secure by adding an additional layer of <br /> verification. It also helps others with your phone
                    number, discover and connect with you. <br /> You can always decide how
                    you want your phone number used. <span className="span-learn-more">Learn more</span> </p>
            </div>

            <button className="two-step-button"> Set up </button>

            <p className="text-44"> <span className="span-note">Note:</span> Turning this feature on will sign you out anywhere you’re currently signed in and remove all
                your remembered devices. It will also remove the access you may have provided to any partner or services. </p>
        </div>
    );
};
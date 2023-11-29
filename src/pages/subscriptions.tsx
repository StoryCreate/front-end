import React from "react";

export const Subscriptions = () => {
    return (
        <div className="subscriptions">
            <div>
               <div className="title"> Settings </div>
            </div>
            <div className="settings-list">
                <dl>
                    <a href="/settings" className="account-preferences"> Account preferences </a>
                    <a href="/signinandsecurity" className="sign-in"> Sign in and security </a>
                    <a className="subscriptions-settings"> Subscriptions </a>
                    <a href="/notification" className="notification"> Notifications </a>
                    <a href="/privacyandsafety" className="privacy"> Privacy and safety </a>
                    <a className="additonal"> Additonal resources </a>
                </dl>
            </div>
        </div>
    );
};
import React from "react";
import { Link } from "react-router-dom";
import arrowup from './../assets/icons/arrowup.png';
import plus from './../assets/icons/plus.png';
import chevronright from './../assets/icons/chevronright.png';

export const Coins = () => {
    return (
    <div className="wallet">
      <div className="group">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="element-illustration-wrapper">
                  <img
                    className="element-illustration"
                    alt="Element illustration"
                    src="https://c.animaapp.com/3tXRlJSe/img/3d-illustration-wallet-with-coins-credit-cards-removebg-preview-.png"
                  />
                </div>
                <div className="div">
                  <div className="div-wrapper">
                    
                  </div>
                  <div className="wallet-total-balance">
                    <img src={plus} height="30px" width="30px" className="wallet-plus" />
                    <div className="text-wrapper-2">Total Balance</div>
                    <div className="text-wrapper-3">1,000 USD
                    </div>
                    <div className="overlap-group-2">
                      <div className="text-wrapper"> </div>
                    </div>

                    <div> <button className="withdraw-button-2"> Withdraw </button></div>
                    
                  </div>
                </div>
                <div className="group-3">
                  <div className="group-4">
                    <div> <a href="/wallet" className="points"> Points </a></div>
                  </div>
                  <div className="coins-group-5">
                    <div > <a href="/creds" className="creds"> Creds </a></div>
                  </div>
                  <div className="group-6">
                    <div className="coins">Coins</div>
                    <img className="coin-line" alt="Line" src="https://c.animaapp.com/3tXRlJSe/img/line-34@2x.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group-wrapper">
              <div className="group-7">
                <div className="text-wrapper-7">1,000 coins</div>
                <img
                  className="gold-coins-falling"
                  alt="Gold coins falling"
                  src="https://c.animaapp.com/3tXRlJSe/img/gold-coins-falling-from-pile-money-man-hand-removebg-preview-1@2x.png"
                />
                <div>
                    <div> <button className="convert-creds-button"> convert to USD </button> <img src={chevronright} className="wallet-convert-arrow" height="15px" width="15px" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-10">
          <div className="text-wrapper-9">Buy more coins</div>
          <div>
            <button className="coin-buy-button"> Buy Now </button>
          </div>
          
        </div>
        <div className="my-wallet-contest"> <h2> MY WALLET </h2> <a href="/contest"> <button className="wallet-contest"> Contest </button> </a> <img src={arrowup} height="15px" width="15px" className="contest-arrow"/></div>
      </div>
    </div>
    );
};
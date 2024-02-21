import React from "react";
import { Link } from "react-router-dom";
import arrowup from './../assets/icons/arrowup.png';
import plus from './../assets/icons/plus.png';
import chevronright from './../assets/icons/chevronright.png';
import wallet_with_coins from './../assets/images/wallet_with_coins.png';
import gold_coins from './../assets/images/gold_coins.png';

export const Wallet = () => {
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
                    src={wallet_with_coins}
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
                    <div className="text-wrapper-4">Points</div>
                    <img className="line" alt="Line" src="https://c.animaapp.com/3tXRlJSe/img/line-33.svg" />
                  </div>
                  <div className="wallet-group-5">
                    <div> <a href="/creds" className="wallet-creds"> Creds </a></div>
                  </div>
                  <div className="group-6">
                    <div ><a href="/coins" className="text-wrapper-6"> Coins </a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-wrapper">
              <div className="group-7">
                <div className="text-wrapper-7">1,000 points</div>
                <img
                  className="gold-coins-falling"
                  alt="Gold coins falling"
                  src={gold_coins}
                />
                <div>
                    <div> <button className="convert-creds-button"> convert to creds </button> <img src={chevronright} className="wallet-convert-arrow" height="15px" width="15px" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-10">
          <div className="text-wrapper-9">Earn more points</div>
          <div className="group-11">
            <div className="group-12">
              <p className="p">Daily Login : +15 points</p>
              <div className="group-13">
                <div className="overlap-group-3">
                  <div> <button className="receive-button-1"> Receive </button></div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-14">
            <div className="group-12">
              <p className="p">Daily WheelSpin : +15 points</p>
              <div className="group-13">
                <div className="overlap-group-3">
                <div> <button className="receive-button-2"> Receive </button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-wallet-contest"> <h2> MY WALLET </h2> </div>
        <div> <a href="/contest"> <button className="wallet-contest"> Contest </button> </a> </div>
        <img src={arrowup} className="arrow-right" />
      </div>
    </div>
    );
};
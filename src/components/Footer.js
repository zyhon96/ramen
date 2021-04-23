import React from 'react';
import Tomatoramen from '../images/Tomato.jpg';
import Toriramen from '../images/Tori.jpg';
import Tonkotsuramen from '../images/Tonkotsu.jpg';
import Dotted from '../images/Dotted.png';

function Footer() {
    return (
        <div className="footer">
            <div className="boxes">
                <div className="box-left">
                    <img src={Tomatoramen} alt="Logo" />

                </div>
                <div className="box-right">
                    <h2>Tomato Ramen</h2>
                    <p>Hard boiled, soft boiled, raw and marinated eggs...</p>
                </div>
            </div>
            <div className="boxes1">

                <div className="box-left1">
                    <img src={Toriramen} alt="Logo" />

                </div>
                <div className="box-right1">
                    <h2>Tori Ramen</h2>
                    <p>Made of chicken and a white and creamy soup...</p>
                </div>
                <div className="dotted">
                    <img src={Dotted} alt="Logo" />

                </div>
            </div>
            <div className="boxes">
                <div className="box-left">
                    <img src={Tonkotsuramen} alt="Logo" />

                </div>
                <div className="box-right">
                    <h2>Tonkotsu Ramen</h2>
                    <p>Made of pork bones which have been boiled down...</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

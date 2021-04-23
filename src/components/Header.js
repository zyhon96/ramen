import React from 'react'
import { ReactComponent as Ramen } from '../svgs/Illustration.svg';

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <h1>A Bowl of Love From Japanese
Cusine</h1>

                <h3>Ramen (ラーメン) is a noodle soup dish that was originally <br/>imported from China and has become one of the most popular <br/> dishes in Japan in recent decades.</h3>
           
           <button> ORDER NOW</button>
            </div>
            <div className="header-right">
<Ramen/>
            </div>
        </div>
    )
}

export default Header

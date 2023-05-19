import React, { Component } from 'react';
import "./Header.css";

const Data = [
  'Features',
  'Enterprise',
  'Support',
  'Pricing'
];

class Header extends Component {
  render() {
    return (
        <header className="shadow d-flex justify-content-between p-2 align-items-center">
        <p>Company name Start</p>
        <ul className="d-flex align-items-center">
            {
              Data.map((v) => <li><a href="#">{v}</a></li>)
            }
            <li><a href="#" className="btn border border-info">Sigin up</a></li>
        </ul>
        </header>
    )
  }
}

export default Header;

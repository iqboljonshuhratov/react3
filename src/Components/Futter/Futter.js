import React, { Component } from 'react';
import "./Futter.css";

const Data1 = [
    'Cool stuff',
    'Random feature',
    'Team feature',
    'Stuff for developers',
    'Another one',
    'Last time',
];

const Data2 = [
    'Cool stuff',
    'Random feature',
    'Team feature',
    'Stuff for developers',

];

const Data3 = [
    'Cool stuff',
    'Random feature',
    'Team feature',

];


class Futter extends Component {
    render() {
      return (
        <div className="container border-top container2 mt-5 pt-5">
        <div className="row">
            <div className="col">
                <img className="bootstrap" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""/>
                <p>© 2017-2018</p>
            </div>
            <div className="col col1">
                <ul>
                    <li><p className="fs-4 fw-bold">Features</p></li>
                    
                    {
                        Data1.map((v)=>{
                            return <li><a href="#">{v}</a></li>
                        })
                    }
                </ul>
            </div>
            <div className="col col2">
                <ul>
                    <li><p className="fs-4 fw-bold">Resources</p></li>
                    {
                        Data2.map((v)=>{
                            return <li><a href="#">{v}</a></li>
                        })
                    }
                </ul>
            </div>
            <div className="col col3">
                <ul>
                    <li><p className="fs-4 fw-bold">Albout</p></li>
                    {
                        Data3.map((v)=>{
                            return <li><a href="#">{v}</a></li>
                        })
                    }
                    
                </ul>
            </div>
        </div>
    </div>
      )
    }
  }
export default Futter;
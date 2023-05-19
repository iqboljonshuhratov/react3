import './App.css';
import ProductCard from './Components/ProductCard/ProductCard';
import Header from './Components/Header';
import { Component } from 'react';
import Futter from './Components/Futter/Futter';

const Data = [
    {
        id: "1",
        sum: "$10 / mo",
        Info: "13 users included",
        btn: "Sigin up for free",
    },
    {
        id: "1",
        sum: "$20 / mo",
        Info: "10 users included",
        btn: "Sigin up for free",
    },
    {
        id: "1",
        sum: "$30 / mo",
        Info: "20 users included",
        btn: "Sigin up for free",
    },
    
]


class App extends Component{
    render(){
        return (
            <div className="App">
               <main>
                {/* eng yuqori qisim */}

                    <Header/>        
        
                    {/*sarlovha*/}
        
                <div className="container1 text-center mt-5">
                    <h1>Pricing</h1>
                    <p className="fs-4">Quickly build an effective pricing table for your potential customers with this <br/> Bootstrap example. It's built with  default Bootstrap components and utilities with <br/> little customization.</p>
                </div>
        
                {/* <!-- narhlar --> */}
        
                <div className="container p-3">
                    <div className="row justify-content-center">
                        {
                            Data.map((v, i) => {
                                console.log(v);
                            return <div key={v.id} className="col-3 me-5 p-0 shadow text-center">
                            <ProductCard {...Data[i]}/>
                            </div>
                            })
                        }
        
                       
                    </div>
                </div>
        
                    {/* <!-- bolimlar --> */}
        
                    <Futter />
        
            </main>
        
            </div>
          )
    }
}

export default App;

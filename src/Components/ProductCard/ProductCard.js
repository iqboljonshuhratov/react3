import { Component } from 'react';


class ProductCard extends Component{
    render() {
        return <div>
        <header className="text-center border p-2 bg-light fs-5">
            Free
        </header>
        <div className="info p-4 text-centor">
            <p className="fs-3 sum">{this.props.sum}</p>
            <p className="Info">{this.props.Info} <br/>
                2 GB of storage<br/>
                Email support<br/>
                Help center access</p>
                <a href="#" className="a1 w-100 fs-5 btn btn-primary ">{this.props.btn}</a>
        </div>
        </div>;

    }
}
export default ProductCard;


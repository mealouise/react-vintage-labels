import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Home.css';
import axios from 'axios';

class Home extends React.Component {
    
   state = {
            listings: []
        }
    // componentDidMount() {
    //     axios.get(`http://localhost:5000/get-listings`)
    //     .then(res => {
    //         console.log(res);
    //         this.setState({ listings: res.data });
    //     });
    // }
    // }

    getListings() {
        axios.get(`http://localhost:5000/get-listings`)
        .then((response) => {
            console.log(response);
            this.setState({
                listings: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render () {
        return (
        <div>
            <div>
                <h1 className="home__header">Rare & Vintage Advertising Epherma</h1>
                <h2 className="home__subheader">from Soda Pop, Jam, Ink and Pharmacy Labels</h2>
            </div>
            <div className="home__results">
            <button onClick={this.getListings.bind(this)}>hello</button>
            {
                this.state.listings.map((result) => {
                    return (
                        <div>
                            <img src={result.image} alt="listing"/>
                            <h2>{result.decription}</h2>
                            <h3>{result.price}</h3>
                        </div>
                    )
                })
            }

            </div>
        </div>


        )
    }
}
export default Home;


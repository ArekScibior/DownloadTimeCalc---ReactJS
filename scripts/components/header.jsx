import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render(){
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <h1>Downloading?</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <h1 className="main-text">How long does it take?</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
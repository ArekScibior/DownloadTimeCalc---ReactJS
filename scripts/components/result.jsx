import React from 'react';

class Result extends React.Component {
    render(){
        return (
            <div style={{ display: this.props.showResult ? 'block' : 'none' }}>
                <h2>Your file will be download in: {this.props.result}</h2>
            </div>
        )
    }
}

export default Result
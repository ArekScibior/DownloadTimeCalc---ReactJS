import React from 'react';

class ButtonSearch extends React.Component {
    render(){
        return (
            <button className="btn btn-sm btn-default" onClick={this.props.calc}>Check download time</button>
        )
    }
}

export default ButtonSearch
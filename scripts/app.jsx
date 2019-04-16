import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Forms from './components/forms.jsx';

document.addEventListener('DOMContentLoaded', function(){
    class App extends React.Component {
        render(){
            return (
                <div>
                    <Header />
                    <Forms />
                </div>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

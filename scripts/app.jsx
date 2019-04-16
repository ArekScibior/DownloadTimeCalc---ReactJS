import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Forms from './components/forms.jsx';
import { ToastContainer, toast } from 'react-toastify';


document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component {
        notify = () => toast("Wow so easy !");
        render(){
            return (
                <div>
                    <Header />
                    <Forms />
                    <ToastContainer />
                </div>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

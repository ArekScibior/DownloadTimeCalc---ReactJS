import React from 'react';
import Result from './result.jsx';
import ButtonSearch from './button-search.jsx';
import { ToastContainer, toast } from 'react-toastify';

class Forms extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sizeList: ["KB", "MB", "GB", "TB"],
            unitSize: "MB",
            typeList: ["Downloading Speed", "Internet Speed"],
            typeSpeed: "Internet Speed",
            speedList: ["Mbps"],
            unitSpeed: "Mbps",
            result: null,
            inputSize: "",
            inputSpeed: "",
            finallyResult: "",
            showResult: false

        }
        this.handleChangeUnits = this.handleChangeUnits.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeSpeed = this.handleChangeSpeed.bind(this);
        this.inputChangeSpeed = this.inputChangeSpeed.bind(this);
        this.inputChangeSize = this.inputChangeSize.bind(this);
        this.calculate = this.calculate.bind(this);
        this.secondsToTime = this.secondsToTime.bind(this);
        this.growlerError = this.growlerError.bind(this);

    }

    inputChangeSpeed(event) {
        this.setState({inputSpeed: parseInt(event.target.value)});
    }

    inputChangeSize(event) {
        this.setState({inputSize: parseInt(event.target.value)});
    }

    handleChangeUnits(event) {
        alert.show('Oh look, an alert!')
        this.setState({unitSize: event.target.value});  
    }

    handleChangeType(event) {
        if(event.target.value === this.state.typeList[1]) {
            let speedList = ["Mbps"];
            this.setState({speedList: speedList});
            this.setState({unitSpeed: speedList[0]});
        } else if (event.target.value === this.state.typeList[0]) {
            let speedList = ["KB/s","MB/s"];
            this.setState({speedList: speedList});
            this.setState({unitSpeed: speedList[1]})
        }
        this.setState({typeSpeed: event.target.value});
    }

    handleChangeSpeed(event) {
        this.setState({unitSpeed: event.target.value});
    }
    

    secondsToTime (secs) {
        var hours = Math.floor(secs / (60 * 60));
        if(hours < 10) {
            hours = "0" + Math.floor(secs / (60 * 60));
        }
        var divisorMin = secs % (60 * 60);
        var minutes = Math.floor(divisorMin / 60);
        if(minutes < 10) {
            minutes = "0" + Math.floor(divisorMin / 60);
        }
        var divisorSec = divisorMin % 60;
        var seconds = Math.ceil(divisorSec);
        if(seconds < 10) {
            seconds = "0" + Math.ceil(divisorSec);
        }
        return hours + ":" + minutes + ":" + seconds + " s"; 
    }
    growlerError () {
        toast.error("Ups, dane są niepoprawne!");
    }

    calculate() {
        //Internet speed
        var res = ""
        if(this.state.typeSpeed === this.state.typeList[1]) {
            //Mbps
            if(this.state.inputSpeed > 0 && this.state.inputSize > 0 && this.state.unitSize === this.state.sizeList[0] && this.state.unitSpeed === this.state.speedList[0] && typeof this.state.inputSize === "number" && this.state.inputSize !== "") {
                res = Math.round(this.state.inputSize / (this.state.inputSpeed * 122.07))
                this.setState({finallyResult: this.secondsToTime(res), showResult: true})
            } else if(this.state.inputSpeed > 0 && this.state.inputSize > 0 && this.state.unitSize === this.state.sizeList[1] && this.state.unitSpeed === this.state.speedList[0] && typeof this.state.inputSize === "number" && this.state.inputSize !== "") {
                res = Math.round((this.state.inputSize * 1024) / (this.state.inputSpeed * 122.07))
                this.setState({finallyResult: this.secondsToTime(res), showResult: true})
            } else if(this.state.inputSpeed > 0 && this.state.inputSize > 0 && this.state.unitSize === this.state.sizeList[2] && this.state.unitSpeed === this.state.speedList[0] && typeof this.state.inputSize === "number" && this.state.inputSize !== "") {
                res = Math.round(this.state.inputSize * 1048576 / (this.state.inputSpeed * 122.07))
                this.setState({finallyResult: this.secondsToTime(res), showResult: true})
            } else if(this.state.inputSpeed > 0 && this.state.inputSize > 0 && this.state.unitSize === this.state.sizeList[3] && this.state.unitSpeed === this.state.speedList[0] && typeof this.state.inputSize === "number" && this.state.inputSize !== "") {
                res = Math.round(this.state.inputSize * 1073741824 / (this.state.inputSpeed * 122.07))
                this.setState({finallyResult: this.secondsToTime(res), showResult: true})
            } else {
                console.warn("something wrong")
                this.setState({showResult: false})
                this.growlerError()
            }
        } else if (this.state.typeSpeed === this.state.typeList[0]) {
            //MB/s
            if(this.state.inputSpeed > 0 && this.state.inputSize > 0 && this.state.unitSize === this.state.sizeList[0] && this.state.unitSpeed === this.state.speedList[1] && typeof this.state.inputSize === "number" && this.state.inputSize !== "") {
                res = Math.round(this.state.inputSize / this.state.inputSpeed / 1024)
                this.setState({finallyResult: this.secondsToTime(res), showResult: true})
            } else if(this.state.inputSpeed > 0 && this.state.inputSize > 0 && this.state.unitSize === this.state.sizeList[1] && this.state.unitSpeed === this.state.speedList[1] && typeof this.state.inputSize === "number" && this.state.inputSize !== "") {
                res = Math.round((this.state.inputSize * 1024) / this.state.inputSpeed / 1024)
                this.setState({finallyResult: this.secondsToTime(res), showResult: true})
            } else if(this.state.inputSpeed > 0 && this.state.inputSize > 0 && this.state.unitSize === this.state.sizeList[2] && this.state.unitSpeed === this.state.speedList[1] && typeof this.state.inputSize === "number" && this.state.inputSize !== "") {
                res = Math.round(this.state.inputSize * 1048576 / this.state.inputSpeed / 1024)
                this.setState({finallyResult: this.secondsToTime(res), showResult: true})
            } else if(this.state.inputSpeed > 0 && this.state.inputSize > 0 && this.state.unitSize === this.state.sizeList[3] && this.state.unitSpeed === this.state.speedList[1] && typeof this.state.inputSize === "number" && this.state.inputSize !== "") {
                res = Math.round(this.state.inputSize * 1073741824 / this.state.inputSpeed / 1024)
                this.setState({finallyResult: this.secondsToTime(res), showResult: true})         
            //KB/s
            } else if(this.state.inputSpeed > 0 && this.state.inputSize > 0 && this.state.unitSize === this.state.sizeList[0] && this.state.unitSpeed === this.state.speedList[0] && typeof this.state.inputSize === "number" && this.state.inputSize !== "") {
                res = Math.round(this.state.inputSize / this.state.inputSpeed)
                this.setState({finallyResult: this.secondsToTime(res), showResult: true})
            } else if(this.state.inputSpeed > 0 && this.state.inputSize > 0 && this.state.unitSize === this.state.sizeList[1] && this.state.unitSpeed === this.state.speedList[0] && typeof this.state.inputSize === "number" && this.state.inputSize !== "") {
                res = Math.round((this.state.inputSize * 1024) / this.state.inputSpeed)
                this.setState({finallyResult: this.secondsToTime(res), showResult: true})
            } else if(this.state.inputSpeed > 0 && this.state.inputSize > 0 && this.state.unitSize === this.state.sizeList[2] && this.state.unitSpeed === this.state.speedList[0] && typeof this.state.inputSize === "number" && this.state.inputSize !== "") {
                res = Math.round(this.state.inputSize * 1048576 / this.state.inputSpeed)
                this.setState({finallyResult: this.secondsToTime(res), showResult: true})
            } else if(this.state.inputSpeed > 0 && this.state.inputSize > 0 && this.state.unitSize === this.state.sizeList[3] && this.state.unitSpeed === this.state.speedList[0] && typeof this.state.inputSize === "number" && this.state.inputSize !== "") {
                res = Math.round(this.state.inputSize * 1073741824 / this.state.inputSpeed)
                this.setState({finallyResult: this.secondsToTime(res), showResult: true})
            } else {
                console.warn("something wrong")
                this.setState({showResult: false})
                this.growlerError()

            }
        }  else {
            console.warn("something wrong")
            this.setState({showResult: false})
            this.growlerError()
        }
    }

    render(){
        return (
            <div className="choose">
                <div className="row">
                    <div className="col-xs-8 col-md-4 inputSize">
                        <input onChange={this.inputChangeSize} value={this.state.inputSize} className="form-control input-sm main-input" type="number" placeholder="enter the size of the file... example: 12.3" />
                    </div>
                    <div className="col-xs-4 col-md-2 selectSize">
                        <select value={this.state.unitSize} onChange={this.handleChangeUnits} className="form-control input-sm">
                            { this.state.sizeList.map(function(item, index) {
                                return <option key={index} value={item}>{item}</option>
                            })
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-md-2">
                        <p>Choose type of speed:</p>
                    </div>
                    <div className="col-xs-6 col-md-2 selectType">
                        <select value={this.state.typeSpeed} onChange={this.handleChangeType} className="form-control input-sm">
                            { this.state.typeList.map(function(item, index) {
                                return <option key={index} value={item}>{item}</option>
                            })
                            }
                        </select>                
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-8 col-md-4 inputSpeed">
                        <input onChange={this.inputChangeSpeed} value={this.state.inputSpeed} className="form-control input-sm main-input" type="number" placeholder="enter speed... example: 4" />
                    </div>
                    <div className="col-xs-4 col-md-2 selectSpeed">
                        <select value={this.state.unitSpeed} onChange={this.handleChangeSpeed} className="form-control input-sm">
                            { this.state.speedList.map(function(item, index) {
                                return <option key={index} value={item}>{item}</option>
                            })
                            }
                        </select>                  
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <p className="check">Check your connection speed:<a href="http://www.speedtest.net/pl" target="_blank"> SpeedTest by Ookla</a></p>
                    </div>
                </div>
                <ButtonSearch calc={this.calculate} />
                <Result result={this.state.finallyResult} showResult={this.state.showResult} />
            </div>
        )
    }
}

export default Forms
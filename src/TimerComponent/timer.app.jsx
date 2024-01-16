import React from "react";

class Timer extends React.Component{

    state={
        count:0
    }
    
    IntervalId=null;

    incrementCount=()=>{
        this.setState({count:this.state.count+1});
    }

    decrementCount=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1});
        }
    }

    startTimer=()=>{
        if(this.state.count>0  && ! this.IntervalId){
            this.IntervalId= setInterval(()=>{
               this.setState({count:this.state.count-1},()=>{
                    if(this.state.count === 0 ){
                        alert('Timer Finished');
                        clearInterval(this.IntervalId);
                        this.IntervalId=null;
                    }
                })
                
            },1000)
        }
    }

    stopTimer=()=>{
        if(this.IntervalId){
            clearInterval(this.IntervalId);
            this.IntervalId=null;
        }
    }

    resetTimer=()=>{
        this.setState({count:0});
        clearInterval(this.IntervalId);
        this.IntervalId=null;
    }

    render(){
        return (
            <div>
                <h1>Simple Timer</h1>
                <div>
                    <button onClick={this.decrementCount} >
                        -
                    </button>
                    <span>{this.state.count}</span>
                    <button onClick={this.incrementCount} >
                        +
                    </button>

                </div>
                <div>
                    <button onClick={this.startTimer} >
                        Start
                    </button>
                    <button onClick={this.stopTimer} >Stop</button>
                    <button onClick={this.resetTimer} >Reset</button>
                </div>
            </div>
        );
    }
}

export default Timer;
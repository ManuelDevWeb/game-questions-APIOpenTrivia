import React, {Component} from 'react';
// Importanto estilos
import './styles/Timer.css';

class Timer extends Component{
    constructor(props){
        super(props)

        this.state={
            count: 1
        }
    }

    render(){
        const {count}=this.state;
        console.log(count);
        return(
            <div className="contador mb-3">
                <p>{count}</p>
            </div>
        )
    }

    componentDidMount(){
        const {startCount}=this.props;
        this.setState({
            count: startCount
        })

        this.doIntervalChange();
    }

    doIntervalChange=()=>{
        this.interval=setInterval(()=>{
            this.setState(prevState=>({
                count: prevState.count -1
            }))
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
}


export default Timer;
class LightningCounter extends React.Component {
    state={
        strikes:1000,
        msg:"countdown:"
    };
 
    timerTick=()=>{
        this.setState({
            strikes: this.state.strikes-1
        });
    }

    componentDidMount() { //render뒤에 호출
        setInterval(this.timerTick, 1000);
    }
    render() {
        
        return(
            <h1>{this.state.msg} {this.state.strikes}</h1>
        )
    }
}

class LightningCounterDisplay extends React.Component{
    render() {
        
            const divStyle ={
                width:270,
                textAlign:"center",
                backgroundColor:"black",
                padding:40,
                fontFamily:"sans-serif",
                color:"#999",
                borderRadius:10
            };
            return(
            <div style={divStyle}>
                <LightningCounter/>
            </div>
        );
    }
}

ReactDOM.render(
    <LightningCounterDisplay/>,
    document.querySelector("#container")
);

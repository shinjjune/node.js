class Counter extends React.Component{
    render(){
        const textStyle={
            fontSize:72,
            fontFamily:"sans-serif",
            color:"#333",
            fontWeight:"bold"
        };
        return(
            <div style={textStyle}>
            {this.props.display}
            </div>
        );
    }
}
class CounterParent extends React.Component{
        state={
            count:0
        };
    
    increase=(e)=>{
        let currentCount=this.state.count
        if(e.shiftKey){
            currentCount += 10;
        }else{
            currentCount += 1;
        }
        
        this.setState({
            count:currentCount
        });
    }
    
    render(){
        // console.log(this.state.count);

        const backgroundStyle={
            padding : 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height:100,
            borderRadius:10,
            textAlign:"center"
        };
        // const buttonStyle={
        //     fontSize: "1em",
        //     width:30,
        //     height:30,
        //     fontFamily:"sans-serif",
        //     color:"#333",
        //     fontWeight:"bold",
        //     lineHeight:"3px"
        // };


        return(
            <div style={backgroundStyle}>
                <Counter display={this.state.count}/>
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <CounterParent />
    </div>,
    document.querySelector("#container")
);
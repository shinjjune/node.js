class Colorizer extends React.Component{
    state={
        color:"",
        bgColor:"skyblue",
    }

    colorValue=(e)=>{
        this.setState({
            color:e.target.value
        });
    }
    componentDidUpdate(currentProps,currenState){
        this.mybtn.innerText=this.state.bgColor;
    }
    setNewColor=(e)=>{
        // console.log("setNewColor");
        this.setState({
            bgColor:this.state.color
        });
        this.shinjj.focus();
        this.shinjj.value="";
        
        e.preventDefault();
    }
    render(){

        const squareStyle={
            width: 200,
            height: 200,
            backgroundColor:this.state.bgColor
        }
        return(
            <div>
                <div style={squareStyle}></div>
                <form onSubmit={this.setNewColor}>
                    <br/>
                    <input ref={ref=>this.shinjj=ref} onChange={this.colorValue}></input>
                    <button ref={ref=>this.mybtn=ref}>go</button>
                </form>
            </div>
        );
    }
}
ReactDOM.render(
    <Colorizer />,
    document.querySelector("#container")
);
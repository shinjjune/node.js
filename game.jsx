class Colorizer extends React.Component{
    state={
        color:"",
        bgColor:"red",
        positionX:0,
        positionY:0
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                positionX: Math.random()*1000,
                positionY: Math.random()*700,
            });
        },100);
    }
    game=(e)=>{
        // console.log("잡았다");
        alert("고생했다!!!^오^");
        this.setState({
            bgColor:"#"+Math.floor(Math.random()*500000)
        });
    }
    by=()=>{
        console.log("by");
    }
    colorValue=(e)=>{
        this.setState({
            color:e.target.value
        });
    }
    setNewColor=(e)=>{
        // console.log("setNewColor");
        this.setState({
            bgColor:this.state.color
        });
        e.preventDefault();
    }
    render(){
        const circleStyle={
            width: 200,
            height: 200,
            borderRadius: "50%",
            marginLeft: this.state.positionX,
            marginTop: this.state.positionY,
            backgroundColor:this.state.bgColor
        }
        return(
            <div>
                <div onClick={this.game} style={circleStyle}></div>
                <form onSubmit={this.setNewColor}>
                    <br/>
                    <textarea onMouseOver={this.by} rows="10" cols="25">여기는 빈칸입니다.</textarea>
                    <br/>
                    <input onChange={this.colorValue}></input>
                    <button>go</button>
                </form>
            </div>
        );
    }
}
ReactDOM.render(
    <Colorizer />,
    document.querySelector("#container")
);
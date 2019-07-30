class Hello extends React.Component{
    render(){
        const helloStyle={
            fontSize:40,
            color:"blue"
        };
        return(
            <div style={helloStyle}>hello 준혁</div>
        )
    }
}
class HelloBOX extends React.Component {
    render(){
        //style지정
        const helloBoxStyle={
            width:200,
            height:200,
            backgroundColor:"yellow"
        };
        return(
            <div style={helloBoxStyle}>
                <Hello />
                {this.props.children}
                {/* 이것은 주석입니다. */}
                <Hello />
                <Hello />
            </div>
        );
    }
}
function b () {
    return <HelloBOX>aaaaaa</HelloBOX>;;
}

ReactDOM.render(
    b()
    ,document.querySelector("#container")
);
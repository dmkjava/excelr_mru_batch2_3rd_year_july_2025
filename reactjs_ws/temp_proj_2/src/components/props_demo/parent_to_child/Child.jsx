

function Child(props){
    console.log("Child");
    console.log(props);
    return (
        <div style={{background: "yellow", padding: "30px"}}>
            <h3>This is Child Component</h3>
            <h3>Current Count is: {props.count}</h3>
        </div>
    )
}
export default Child;
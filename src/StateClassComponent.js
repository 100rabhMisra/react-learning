import { Component } from "react";
class StateClassComponent extends Component{
    // we have to crtea the constructer in class components
    constructor(){
        super()                    // Javascript methods when ever we use this then we have to use super methods so that parent constructer call it easilly.
    
        this.state = {
            data:"State Class component."
        }
    
    }

    updateClassComponetState(){
        this.setState({data:"updated"})
        console.log("state class componet updated")
    }

    render()
    {
        return (
            
            <div>
                <h2>{this.state.data}</h2>
                {/* inclass component we have to pass arrow function  */}
                <button type="button" onClick={()=>this.updateClassComponetState()}>Update Data by Class Component</button>
            </div>
        );
    }
    
}

export default StateClassComponent

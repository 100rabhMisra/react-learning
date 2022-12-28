import React from "react";

class PropsClassComponent  extends React.Component{

    render(){
        return(
            <div>{this.props.name}</div>
        )
    }
}

export default PropsClassComponent
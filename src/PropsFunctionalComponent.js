function PropsFunctionComponent (props){
    console.log(props)
    return(
        <div style={{ backgroundColor:'red' }}>
            Hello {props.name} <br/>
        </div>

    )
}

export default PropsFunctionComponent
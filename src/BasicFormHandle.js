import { useState } from "react";
function BasicFormHandle(){

     //define state //
     const [name, setName] = useState("");
     const [termCondiction, setTermCondiction] = useState(false); // means uncheck hai//
     const [select, setSelect] = useState("");

    function getFormData(e){
        console.log("call submit btn----------");
        e.preventDefault(); // prevent the form submit//

       

        console.log("Name",name)
        console.log("term",termCondiction)
        console.log("Name",select)


    }
    return(
        <div>
            
            <h2>Basic Form Data</h2>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter name " value = {name} onChange={(abc)=>setName(abc.target.value)}/><br></br>
                <select onChange={(e)=>setSelect(e.target.value)}> 
                    <option>Ram</option>
                    <option>Laxman</option>
                    <option>janki</option>
                    <br></br>
                    <br></br>
                    
                </select>
                <br></br>
                {/* where (e) just name parament hai kuch bhi set kar sakte hai. first wale me abc dala hai*/}
                <input type="checkbox" onChange={(e)=>setTermCondiction(e.target.checked)}/>Accept terma and condiction. <br></br>
                <button type="submit">Submit</button>
                {/* agar form data clear karna ho then we can paas like this value = {name} ex - line number 26 */}
                <button>Clear Form data</button> 
            </form>
           
        </div>
    )
}


export default BasicFormHandle;
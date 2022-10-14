import { useState } from "react";

const Interchange = () => {
    let [first,setFirst] = useState("Marco");

    let [second, setSecond] = useState("Polo");
    let changeHandler = () =>{
        if(second === "Polo"){
            setSecond("Marco");
        } else{
            setSecond("Polo");
        }

        if(first === "Marco"){
            setFirst("Polo");
        } else{
            setFirst("Marco");
        }
    }


    return (
        <div>
            <h1 id= "marco-polo">{first}</h1>
            <button onClick={changeHandler} id="marco-polo-toggler">{second}</button>
        </div>
    );
}

export default Interchange;
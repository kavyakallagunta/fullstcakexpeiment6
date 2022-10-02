import React,{useState} from "react";
    const ConditionalRendering =()=>{
        const[buttonClicked,setButtonClicked]=useState();
        return(
            <div style={{margin:"10px"}}>
                <button onClick={()=>setButtonClicked("first")}>First</button>
                <button onClick={()=>setButtonClicked("second")}>Second</button>
                {buttonClicked==="first"?(
                    <First/>
                ):buttonClicked==="second"?(
                    <Second/>
                ):(
                    <Display/>
                )}
            </div>
        );
    };
     const First=()=><div>you clicked the first button </div>
     const Second=()=><div>you clicked the second button</div>
     const Display=()=><div>colick on one of the button</div>
    
     export default ConditionalRendering;
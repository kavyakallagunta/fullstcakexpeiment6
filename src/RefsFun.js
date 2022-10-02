import React,{useRef} from 'react';

const RefsFun = () => {
    const textInput = useRef(null);
    function handleClick(){
        textInput.current.focus();
    }

    return (
        <div>
             <input type="text" ref={textInput}/>
           <button onClick={handleClick}>Click to focus on the input</button>
        </div>
            
            
            );
        };
        
        export default RefsFun;
        
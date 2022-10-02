import React from "react";
class RenderConditionalClass extends React.Component{
    constructor(props){
    super(props);
    this.state={buttonClicked:null};

}
render(){
  const handleButtonClicked=(name)=>{
      this.setState({buttonClicked:name});
  };
  return(
      <>
      <button onClick={()=>handleButtonClicked("first")}>First</button>
      <button onClick={()=>handleButtonClicked("second")}>Second</button>
      <DisplayText name={this.state.buttonClicked}/>
      </>
    
  );
}
}
 class DisplayText extends React.Component{
     render(){
         if(this.props.name==="first"){
             return<First/>;
         }
         else if(this.props.name==="second"){
             return <Second/>;
         }
         else{
             return <Display/>;
         }
     }
 }
  const First=()=><div>you clicked the first button</div>;
  const Second=()=><div>you clicked the second button</div>;
  const Display=()=><div>click on one of the button</div>;

export default RenderConditionalClass;
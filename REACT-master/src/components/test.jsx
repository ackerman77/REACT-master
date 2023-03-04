import React from "react";



const Test = (props) => {

    return (
<div>
<div className={props.pets.css}>
          <div style={{'textAlign':'center', 'min-height':'300px'}}><img src={props.pets.photos} alt="Собака" style={{'textAlign':'center', 'width':'300px', 'height':'auto'}}/></div>
          <h2 className="text-center">{props.pets.kind}</h2>
          <p style={{'margin-bottom':'50px'}}>{props.pets.description}</p>
        </div>
</div>

    );
};

export default Test;
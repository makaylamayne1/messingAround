import React from 'react';

export class MyComponent extends React.Component{
  
  

    render()   {
        
        function handleChange(event) {
            console.log(event.target.value);
        }

        var text = this.props.text;
        return <span> 
          <input type="name" name="name" className="form-control" value={text}
         onChange={event=> handleChange(event)}
             id="learnQuick" />
        </span>
    }
}

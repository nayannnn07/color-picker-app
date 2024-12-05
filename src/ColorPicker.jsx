import React, {useState} from 'react';
function ColorPicker(){
 const [color, setColor] = useState("#FFFFF");

 function handleColorChange(event){
    setColor(event.target.value);
 }
 return(
    <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>The Selected Color: <br/> {color}</p>
        </div>
        <label>Set a Color:</label>
        <input type="color" value= {color} onChange={handleColorChange}/>
    </div>
 );

}
export default ColorPicker
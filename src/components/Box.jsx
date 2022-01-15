import React, {useState} from 'react';

const Box =(props)=>{
    //creating state variables to hold form info
    let [boxColor, setBoxColor] = useState("")

    //state variable to hold boxes that were created in the form
    let [listOfBoxes, setListOfBoxes] = useState([]);

    // CREATE BOX FUNCTION
    let createBox = (e)=>{
        //preventing reloading page on form submission 
        e.preventDefault();
        // console.log("Submitted box color, please wait...")
        // console.log(boxColor)
        //  CREATING BOX OBJECT 
        let boxObject = {boxColor}
        console.log(boxObject)
        setListOfBoxes([...listOfBoxes, boxColor])
    }

    //render view 
    return (
        <form onSubmit={createBox}>
            <div className="form-group"></div>
            <label htmlFor="">Add a new box, please type desired color below:</label>
            <input type="text" name="" id="" className="form-control" onChange={(e)=>setBoxColor(e.target.value)}/>
            <p></p>
            <button className="btn btn-primary" value="Create box">Go!</button>
        </form>
    )
} 

export default Box;
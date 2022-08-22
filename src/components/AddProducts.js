import React,{ useState } from "react";



const AddProducts = ({addMyProduct})=> {

    const[name, setName] = useState("");
    const[description, setDescription] = useState("");
    const[price, setPrice] = useState(0);
    const[availability, setAvailability] = useState("");
    const[URL, setURL] = useState("");

    const addProduct = async()=>{
        const formValue = {
            "itemName" : name,
            "itemDescription" : description,
            "itemPrice" : price,
            "itemAvailability" : availability.toUpperCase,
            "itemURL":URL
        }


        let result = await fetch('http://localhost:8080/item',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue)
        });
        
    }

    return (
        <div className="form">
            <div><label>Name: </label><input type="text" onChange={(e)=>setName(e.target.value)}/></div>
            <div><label>Desc: </label><input type="text" onChange={(e)=>setDescription(e.target.value)} /></div>
            <div><label>Price: </label><input type="number" min="2" max="5" onChange={(e)=>setPrice(e.target.value)} /></div>
            <div><label>Avail: </label><input type="text" onChange={(e)=>setAvailability(e.target.value)} /></div>
            <div><label>URL: </label><input type="text" onChange={(e)=>setURL(e.target.value)} /></div>

            <button className="submitButton" onClick={addProduct}>Add Product</button>            
        </div>
    )
}

export default AddProducts;
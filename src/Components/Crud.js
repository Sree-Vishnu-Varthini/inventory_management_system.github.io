import { useEffect, useState } from 'react';
import './Crud.css';
import Axios from 'axios';

function App5() {

  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);
  const [newFoodName,setNewFoodName] = useState("");
  const [newQuantity,setNewQuantity] = useState("");
  const [foodList, setFoodlist] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/read").then((response)=>{
      setFoodlist(response.data)
    })
  },[foodList])

  const addToList = () => {
    Axios.post("http://localhost:3001/insert",{
      foodName:foodName,
      days:days
    })
  }

  const updateFood = (id) => {
    Axios.put("http://localhost:3001/update", {
      id: id,
      newFoodName: newFoodName // Use the correct state setter function here
    });
  };

  const updateQuantity = (id) => {
    Axios.put("http://localhost:3001/quant", {
      id: id,
      newQuantity: newQuantity// Use the correct state setter function here
    });
  };
  

  const deleteFood = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`,{
      id:id,
      newFoodName:newFoodName
    })
  }

  return (
    <div className='App2'>
      <h1>INVENTORY MANAGEMENT SYSTEM</h1>
      <div><label>Product Name : </label>
      <input type='text' style={{marginLeft:'120px'}} onChange={(event)=>{setFoodName(event.target.value)}}/></div>
      <div><label>Number Of Stocks Available :</label>
      <input type='number' onChange={(event)=>{setDays(event.target.value)}}/></div>
      <button onClick={addToList}>Add To List</button>

      <h1>Product List</h1>
      {foodList.map((val,key)=>{
        return(
          <div className='food' key={key}>
            <h2>{val.foodName}</h2>
            <h2>{val.daysSinceIAte}</h2>{" "}
            <input type="text" placeholder='New Product Name'
            onChange={(event)=>{setNewFoodName(event.target.value)}}/>
            <button onClick={()=>updateFood(val._id)}>Update Name</button>
            <br></br>
            <input  type="text" placeholder='New Quantity'
            onChange={(event)=>{setNewQuantity(event.target.value)}}/>
            <button onClick={()=>updateQuantity(val._id)}>Update Quantity</button>
            <br></br>
           <button onClick={()=>deleteFood(val._id)}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App5;
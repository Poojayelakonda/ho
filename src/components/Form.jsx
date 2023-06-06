import React, {useState} from'react'
export default function Form({onSubmit}){
    const [category,setCategory]= useState('a')
    const [description,setDescription]= useState('b')


const handleOnClick=()=>{
    console.log({category})
    console.log({description})
onSubmit({category,description})

}

    

    return (
        <div>
            <div>

<label htmlFor="">Category</label>
<input value ={category} onChange={(e)=>setCategory(e.target.value)} />
 


        </div>
        <div>
        <label htmlFor ="">description</label>
        <input value ={description} onChange={(e)=>setDescription(e.target.value)}/>

        </div>

        <button onClick={()=>{handleOnClick()}} > submit</button>
        </div>
    )
}
    
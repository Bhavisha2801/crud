import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Add_data = () => {

    const [inpData , setInpData] = useState({
        name : '',
        email : '',
        number : ''
    })

//     // const [name , email , number] = inpData

    const handleSubmit = (e) => {
        fetch('http://localhost:2801/contacts',{
            method : 'post',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "name":"",
                "email":"",
                "number": ""
            })
        })
        .then(res => setInpData(res))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        handleSubmit()
    },[])

    // const handleChange = (e) => {
    //     const {name , value} = e.target
    //     setInpData(prevData => ({
    //         ...prevData,
    //         [name] : value
    //     }))
    // }

  return (
    <div>
        <input type="text" name="name"  placeholder='Enter Name'   />
        <input type="email" name="email" placeholder='Enter Email'   />
        <input type="text" name="number" rplaceholder='Enter Number'   />
        <button onClick={handleSubmit}>Add Data</button>
    </div>
  )
}

export default Add_data
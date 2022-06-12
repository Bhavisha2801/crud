import React from 'react'
import { useState, useEffect } from 'react'

const DisplayData = () => {

    const [data , setData] = useState([])

  // const d = data.map(u => (
  //   <div>
  //     <p>{u.name}</p>
  //   </div>
  // ))



  useEffect(() => {
    fetch('http://localhost:2801/contacts')
    .then((res) => res.json())
    .then(res => setData(res))
    .catch(err => console.log(err))
  },[])
  console.log(data)

  return (
    <div className="App">
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {
              data.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default DisplayData
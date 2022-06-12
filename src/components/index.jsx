import React, {useState, useEffect} from "react";
import {toast} from 'react-toastify';
import {getData, createData, removeData} from './api';
import {EditOutlined , DeleteOutlined} from '@ant-design/icons';
import Form from './Form'
import Loading from './Loading'
import { Link, useNavigate } from "react-router-dom";

 const Crud = () => {
     const [name , setName] = useState('')

     const [loading , setloading] = useState(false)

     const [names , setNames] = useState([])

     const navigate = useNavigate()

     useEffect(() => {
         loadNames()
     },[])

     const loadNames = () => getData().then(name => setNames(name.data))
     console.log(names)

     const handleSubmit = (e) => {
        e.preventDefault()
        setloading(true)
        createData({name}).then(res => {
            setloading(false)
            setName("")
            toast.success(`${res.data.name} is created`)
            loadNames()
        }).catch(err => {
            setloading(false)
            if(err.response.status === 400) toast.error(err.response.data);
        })
     }

     const handleRemove = (id , name) => {
         if(window.confirm(`are you sure, you want to delete ${name} ? `)){
             setloading(true)
             removeData(id).then(res => {
                 setloading(false)
                 toast.error(`${name} is deleted`)
                 loadNames()
             }).catch(err => {
                 if(err.response.status === 400){
                    setloading(false)
                    toast.error(err.response.data)
                 }

             })
         }
     }

     return (
         <div className="container-fluid">
             <div className="row">
                 <div className="col-md-8">
                     {loading ? <Loading /> : 
                     (
                         <>
                         <h4>CRUD with JSON server</h4>
                         <Form handleSubmit={handleSubmit} name={name} setName={setName} />
                        {names && names.map(item => (
                            <div className="border row mx-2 align-items-center" key={item.id}>
   

                                <ul className="list-group">
                                    <li className="list-group-item">{item.name}</li>
                                </ul>
                                   <span onClick={() => handleRemove(item.id , item.name)} className="btn btn-sm float-right">
                                       <DeleteOutlined classID="text-danger" />
                                   </span>
                                   <span onClick={() => navigate(`/update/${item.id}`)} className="btn btn-sm float-right">
                                       <EditOutlined classID="text-warning" />
                                   </span>
                            </div>
                        ))}
                        </>
                        
                     )
                     
                     }
                     
                 </div>
             </div>
         </div>
     )

 }

 export default Crud
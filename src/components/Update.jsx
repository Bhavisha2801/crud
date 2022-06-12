import { Input } from 'antd'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {toast} from "react-toastify"
import { updateData , getName } from './api'
import Loading from './Loading'
import Form from './Form'
import { useNavigate, useParams } from 'react-router-dom'

const Update = ({history , match }) => {

    const navigate = useNavigate()

    const { id } = useParams();
    console.log(id)

    const [name , setName] = useState("")
    const [loading , setloading] = useState(false)

    useEffect(() => {
        loadName()
    },[])

    // console.log(match.params.id , name)

    const loadName = () => {
        console.log(id)
        getName(id).then(res => setName(res.data.name))
        // getName(id).then(d => setName(d.data.name))
        // getName(id).then(res => {
        //     setName(res.data.name)
        // })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setloading(true)
        updateData(id , {name}).then(res => {
            setloading(false)
            setName("")
            toast.success(`${res.data.name} is updated`)
            navigate('/')
        }).catch(err => {
            setloading(false)
            if(err.response.status === 400) toast.error(err.response.data)
        })
    }

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-8'>
                {loading ? <Loading /> : (
                    <h4>Update Name</h4>
                )}
                <Form 
                    handleSubmit={handleSubmit}
                    name={name}
                    setName={setName}
                />
            </div>
        </div>
    </div>
  )
}

export default Update
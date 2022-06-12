import axios from 'axios';

export const getData = async () => {
    return await axios.get(`${process.env.REACT_APP_API}`)
}


export const createData = async (data) => {
    return await axios.post(`${process.env.REACT_APP_API}`,data)
}

export const getName = async (id) => {
    return await axios.get(`${process.env.REACT_APP_API}/${id}`)
}

export const removeData = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_API}/${id}`)
}


export const updateData = async (id, name) => {
    return await axios.put(`${process.env.REACT_APP_API}/${id}`,name)  
}
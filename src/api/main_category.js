import axios from 'axios'
import {backend_url} from '../config'
const proxy = `${backend_url}/main_category`

export const add_main_category = async (name) => {
    await axios.post(`${proxy}`, {name})
}

export const get_main_categorys = async () => {
    return await (await axios.get(`${proxy}/`)).data
}

export const get_main_category = async (_id) => {
    return await (await axios.get(`${proxy}/${_id}`)).data
}

export const update_main_category = async (_id, name) => {
    await axios.put(`${proxy}/${_id}`, {name})
}

export const delete_main_category = async (_id) => {
    await axios.delete(`${proxy}/${_id}`)
}
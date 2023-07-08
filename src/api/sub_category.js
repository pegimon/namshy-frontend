import axios from 'axios'
import {backend_url} from '../config'
const proxy = `${backend_url}/ads_slider`

const add_sub_category = async ({name, main_category}) => {
    await axios.post(`${proxy}/`, {name, main_category})
}

const get_sub_categories = async () => {
    return await (await axios.get(`${proxy}/`)).data
}

const get_sub_category = async (_id) => {
    return await (await axios.get(`${proxy}/${_id}`)).data
}

const update_sub_category = async (_id, {name, main_category}) => {
    await axios.put(`${proxy}/${_id}`, {name, main_category})
}
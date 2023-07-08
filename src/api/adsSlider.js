import axios from 'axios'
import {backend_url} from '../config'
const proxy = `${backend_url}/ads_slider`

export const add_ads_slider = async (image) => {
    await axios.post(`${proxy}/`, {image})
}

export const all_ads_slider = async () => {
    return await (await axios.get(`${proxy}`)).data
}

export const get_ad_slider = async (_id) => {
    return await (await axios.get(`${proxy}/${_id}`))
}

export const update_ad_slider = async (_id, image) => {
    await axios.put(`${proxy}/${_id}`,{image})
}

export const delete_ad_slider = async (_id) => {
    await axios.delete(`${proxy}/${_id}`)
}
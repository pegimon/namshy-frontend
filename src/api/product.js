import axios from 'axios'
import {backend_url} from '../config'
const proxy = `${backend_url}/product`

export const add_product = async ({name, desc, SKU, category_id, quantity, price_before,price_after, sizes, subCategory, imageSrc}) => {
    await axios.post(`${proxy}`,{name, desc, SKU, category_id, quantity, price_before,price_after, sizes, subCategory, imageSrc})
}

export const all_product = async () => {
    return (await (await axios.get(`${proxy}`)).data)
}

export const get_product_by_id = async (_id) => {
    return (await (await axios.get(`${proxy}/${_id}`)).data)
}

export const delete_product = async (_id) => {
    await axios.delete(`${proxy}/${_id}`)
}

export const update_product = async (_id, {name, desc, SKU, category_id, quantity, price_before,price_after, sizes, subCategory, imageSrc}) => {
    await axios.put(`${proxy}/${_id}`, {name, desc, SKU, category_id, quantity, price_before,price_after, sizes, subCategory, imageSrc})
}

export const get_product_by_category =  async (_id) => {
    return (await (await axios.get(`${proxy}/category/${_id}`)).data)
}
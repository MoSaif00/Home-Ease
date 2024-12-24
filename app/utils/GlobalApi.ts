import { gql, request } from 'graphql-request'

const MASTER_URL = process.env.EXPO_PUBLIC_HYGRAPH_KEY 

const getSlider=async ()=>{

    const query = gql`
        query GetSlider {
        sliders {
            id
            name
            image {
            url
            }
        }
        }
    `
const  result = await request(MASTER_URL!, query)
return result
}

export default{
    getSlider
}
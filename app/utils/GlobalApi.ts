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

const getCategories=async ()=>{

    const query = gql`
        query GetCategory {
            categories {
                id
                name
                icon {
                    url
                }
            }
        }
    `
const  result = await request(MASTER_URL!, query)
return result
}

const getBusinessList=async ()=>{

    const query = gql`
        query GetBusinessList {
            businesses {
                id
                name
                email
                contactPerson
                category {
                    name
                }
                address
                about
                images {
                    url
                }
            }
        }
    `
const  result = await request(MASTER_URL!, query)
return result
}

export default{
    getSlider,
    getCategories,
    getBusinessList
}
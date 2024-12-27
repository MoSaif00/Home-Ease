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

const getBusinessListByCategory=async (categoryName: string)=>{

    const query = gql`
      query GetBusinessListByCategory {
            businesses(where: {category: {name: "`+categoryName+`"}}) {
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

const createBooking=async (
    data: {
        businessId: string,
        date: string,
        time: string,
        userEmail: string,
        userName: string,
        notes: string
    }
)=>{

    const mutationQuery = gql`
        mutation CreateBooking {
            createBooking(
                data: {bookingStatus: booked, 
                business: {connect: {id: "`+data.businessId+`"}}, 
                date: "`+data.date+`", 
                time: "`+data.time+`", 
                userEmail: "`+data.userEmail+`", 
                userName: "`+data.userName+`",
                notes: "`+data.notes+`",
                }
            ) {
                id
            }
            publishManyBookings(to: PUBLISHED) {
                count
            }
        }
    `
const  result = await request(MASTER_URL!, mutationQuery)
return result
}

const getUserBookings=async (userEmail: string)=>{

    const query = gql`
        query GetUserBookings {
        bookings(orderBy: updatedAt_DESC, where: {userEmail: "`+userEmail+`"}) {
            date
            notes
            time
            userEmail
            userName
            bookingStatus
            id
            business {
                id
                images {
                    url
                }
                name
                address
                email
                contactPerson
                about
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
    getBusinessList,
    getBusinessListByCategory,
    createBooking,
    getUserBookings
}
import * as React from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import { NextPage } from 'next';
import { Restaurant } from '../graphql/types';
import Markdown from 'react-markdown'

const API_URL = 'https://hndup-api-cms.herokuapp.com/graphql'

interface Props {
    data: any
}

const IndexPage: NextPage<Props> = ({data}) => {
    return (
        <Layout>
            <h1>
                100ndup
            </h1>
            {data && data.map((restaurant:Restaurant) => {
                return (
                    <React.Fragment>
                        <h4>{restaurant.Name}</h4>
                        <Markdown
                            escapeHtml={true}
                            source={restaurant.Description}
                        />
                    </React.Fragment>
                )
            })}
        </Layout>
    )
}
IndexPage.getInitialProps = async () => {
    const res  = await axios.post(API_URL,{
        query: `      
        {
            restaurants {
              Name
              categories{
                id
                name
              }
              picture {
                url
              }
              Description
            }
         }
    `,
    },{ headers: {
        'Content-Type': 'application/json'
    }})

    return {
        data: res.data.data.restaurants
    }
}
export default IndexPage
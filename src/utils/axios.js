import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.airtable.com/v0/appNZKWrQmPkRJDg9/Ideas',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
    'Content-Type': 'application/json'
  }
})

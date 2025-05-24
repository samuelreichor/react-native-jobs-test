import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'x-rapidapi-key': 'b562de677bmsh4b95cbc9752a5b1p13f31djsn56d5865a10c2',
      'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    },
    params: {...query},
  };
  
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.request(options);
      setData(response.data.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      alert('There is an error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return {data, isLoading, error, refetch}
}

export default useFetch;
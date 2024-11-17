import React, { useEffect } from "react"
import { useState } from "react"

export function useFetch(url,retryTimeout) {
    const [post, setPost] = useState({})
    const [loading,setLoading]=useState(false)

    async function getPost() {
        setLoading(true)
        let data = await fetch(url)
        let response= await data.json()
        setPost(response)
        setLoading(false)
    }

    useEffect(() => {
        getPost()
    }, [url])

    useEffect(() => {
    let autoPostFetch= setInterval(() => {
        getPost()
     }, retryTimeout*1000);
    
      return () => {
        clearTimeout(autoPostFetch)
      }
    }, [])
    
return {
    post,
    loading
}
}
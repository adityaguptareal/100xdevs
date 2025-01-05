import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({})
    async function fetchData() {
        setLoading(true);
        const requestURL = await fetch(url)
        const response = await requestURL.json()
        setData(response)
        setLoading(false);
    }
    useEffect(() => {
        fetchData()
    }, [url])
    return {data,loading}
}

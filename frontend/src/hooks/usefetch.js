import {useEffect,useState} from 'react'

const useFetch=(url)=>{
	const [content,setContent]=useState(null)
	const [pending,setPending]=useState(true)
	const [error,setError]=useState(null)
	const [errorTwo,setErrorTwo]=useState(null)

	useEffect(()=>{
		const fetchData=async()=>{
			const urll=process.env.backend+url
			const response= await fetch(urll)
			const json=await response.json()
			if(!response.ok){
				if(response.status===404 || response.status===304){
					setErrorTwo("No products to display")
					setPending(false)
				}else{
					setError("Couldn't load content")
					setPending(false)
				}
			}
			if(response.ok){
				setContent(json)
				setPending(false)
			}
		}
		fetchData();
	},[url])
	return {content,pending,error,errorTwo}
}
export default useFetch;
import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data,setData] = useState({})
    // useEffect(()=>{

    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=> res.json())
    //     .then((res) =>{
    //         console.log(data)
    //         setData(res)
    //     })

    // },[])
  return (
    <div className='text-cente3r m-4 text-3xl'>Github followers : {data["followers"]}
    <img src = {data.avatar_url} alt="Github pfp" width={300}></img>
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')

    const resJson = res.json()

    return resJson
}
import React,{useEffect, useState} from "react"
import { Button } from "react-bootstrap"
import{useNavigate, useParams} from 'react-router-dom'
import{moviesData} from '../../Data'

const Details=() => {
    const{id} = useParams()
    const [detail, setDetail]= useState({})
    const navigate= useNavigate()

useEffect(()=> {
    const movieDetail= moviesData.find((el) => el.id === id)
    setDetail(movieDetail)
}, [id])

return(
    <div>
     <Button variant="info" onClick={() => navigate(-1)}>back</Button>
      {detail.description}
      <iframe src={detail.trailer} frameborder="0"></iframe>
    </div>
)
}

export default Details
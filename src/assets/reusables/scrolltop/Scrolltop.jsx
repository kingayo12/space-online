import { ArrowUpward } from '@mui/icons-material';
import React,{useEffect} from 'react'

const Scrolltop = () => {
  useEffect(() =>{
    window.scrollTo({ top:0, letf:0, behavior:'smooth'});
  }, [])
  return (
    <>
   <button
   className='top'
   onClick={() =>{
    window.scrollTo({ top:0, left:0, behavior:'smooth'});
   }}
   ><ArrowUpward/></button>
    </>
  )
}

export default Scrolltop
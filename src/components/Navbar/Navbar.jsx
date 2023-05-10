import React from 'react'
import { Link } from 'react-router-dom'
import life1 from './a.jpg'
import life2 from './b.jpg'
import life3 from './c.jpg'
import d from './Navbar.module.css'

const Navbar = () => {
  const technologies = [
    {
      name: 'proga1',
      sr: life1,
      id: '1',
    },
    {
      name: 'proga2',
      sr: life2,
      id: '2',
    },
    {
      name: 'proga3',
      sr: life3,
      id: '3',
    },
]

  return (
    <div className={d.cont}>
       {
 technologies.map((el) => {
        return <Link
     className={d.link}
          to={el.name}
          key={ `${el.id}` }
        >      
       <div className={d.col}> 
        <div className={d.imgBox}><img className={d.img} src={el.sr} alt="" /><h3>lolololololo</h3></div>
       </div>  
    
          </Link>
      })
    }
    </div>
  )
}

export default Navbar
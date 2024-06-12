import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import Fav from './Fav'

const showFav = (props) => {
 
  return (<div>
    {props.orders.map(el => (
      <Fav onDelete={props.onDelete} key={el.id} item={el} />
    ))}
  </div>)
}

const showNothing = () => {
  return(<div className='empty'>
    <h2>Nothing has been added to favorites</h2>
  </div>)
}

export default function Header(props) {
let [favOpen, setFavOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>Film Discovery</span>
            <ul className='nav'>
              <li>Про нас</li>
              <li>Контакти</li>
              <li>Кабінет</li>
            </ul>
            <FaHeart onClick={() => setFavOpen(favOpen = !favOpen)} className={`fav-button ${favOpen && `active`}`}/>

              {favOpen && (
                <div className='fav-button-list'>
                  {props.orders.length > 0 ? 
                    showFav(props) : showNothing()}
                </div>
              )}
        </div>
        <div className='presenation'></div>
    </header>
  )
}

import React, { Component } from 'react'
import { FaHeart } from "react-icons/fa6";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
        <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2>{this.props.item.tittle}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.raitng}/10</b>
        <div className='add-to-fav' onClick={() => this.props.onAdd(this.props.item)}><FaHeart /></div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem

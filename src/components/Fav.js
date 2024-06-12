import React, { Component } from 'react'
import { FaTrashCan } from "react-icons/fa6";


export class Fav extends Component {
  render() {
    return (
      <div className='item'>
         <img src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.tittle}</h2>
        <b>{this.props.item.raitng}/10</b>
        <FaTrashCan className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Fav

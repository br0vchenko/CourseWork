import React, { Component } from 'react'

export class Categorie extends Component {
 constructor(props){
    super(props)
    this.state = {
        categories:[
            {
                key: 'all',
                name: 'All'
            },
            {
                key: 'action',
                name: 'Action'
            },
            {
                key: 'fantasy',
                name: 'Fantasy'
            },
            {
                key: 'drama',
                name: 'Drama'
            },
            {
                key: 'thriller',
                name: 'Thriller'
            },
            {
                key: 'crime',
                name: 'Crime'
            },
            {
                key: 'horror',
                name: 'Horror'
            },
            {
                key: 'comedy',
                name: 'Comedy'
            },
           
        ]
    }
 }
    render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.ley} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categorie

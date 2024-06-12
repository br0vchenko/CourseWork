import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categorie from "./components/Categorie"
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          tittle: 'House of the Dragon',
          img: 'hod.png',
          desc: 'An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.',
          category: 'action',
          raitng: '8.7' 
        },
        {
          id: 2,
          tittle: '3 Body Problem',
          img: '3bp.png',
          desc: 'A fateful decision made in 1960s China reverberates in the present, where a group of scientists partner with a detective to confront an existential planetary threat.',
          category: 'fantasy',
          raitng: '7.5' 
        },
        {
          id: 3,
          tittle: 'Dune: Part Two',
          img: 'dp2.png',
          desc: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
          category: 'drama',
          raitng: '8.6' 
        },
        {
          id: 4,
          tittle: 'The Acolyte',
          img: 'tha.png',
          desc: 'An investigation into a shocking crime spree pits a respected Jedi Master against a dangerous warrior from his past.',
          category: 'action',
          raitng: '8.6' 
        },
        {
          id: 5,
          tittle: 'Eric',
          img: 'eric.png',
          desc: 'Vincent, a grief-stricken father whose son goes missing, finds solace through his friendship with Eric, the monster that lives under Edgar',
          category: 'thriller',
          raitng: '7.0' 
        },
        {
          id: 6,
          tittle: 'The Boys',
          img: 'tb.png',
          desc: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
          category: 'comedy',
          raitng: '8.7' 
        },
        {
          id: 7,
          tittle: 'Breaking Bad',
          img: 'brb.png',
          desc: 'A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family future.',
          category: 'crime',
          raitng: '9.5' 
        },
        {
          id: 8,
          tittle: 'Sous la Seine',
          img: 'sls.png',
          desc: 'To save Paris from a bloodbath, a grieving scientist is forced to face her tragic past when a giant shark appears in the Seine.',
          category: 'horror',
          raitng: '8.6' 
        },
        {
          id: 9,
          tittle: 'The Crow',
          img: 'crv.png',
          desc: 'When soulmates Eric and Shelly are brutally murdered, Eric is given the chance to save his true love by sacrificing himself and sets out to seek revenge',
          category: 'action',
          raitng: '4.0' 
        },
        {
          id: 10,
          tittle: 'The Office',
          img: 'tof.png',
          desc: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, tedium and romance.',
          category: 'comedy',
          raitng: '9.0' 
        },
        {
          id: 11,
          tittle: 'Once Upon a Time',
          img: 'onc.png',
          desc: 'A young woman with a troubled past is drawn to a small town in Maine where fairy tales are to be believed.',
          category: 'romance',
          raitng: '5.0' 
        },
        {
          id: 12,
          tittle: 'Sherlock',
          img: 'srk.png',
          desc: 'The quirky spin on Conan Doyles iconic sleuth pitches him as a "high-functioning sociopath" in modern-day London.',
          category: 'crime',
          raitng: '9.1' 
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteFav = this.deleteFav.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteFav}/>
        <Categorie chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/> }
        <Footer />
      </div>
    );
  } 

onShowItem(item){
  this.setState({fullItem: item})
  this.setState({ showFullItem: !this.state.showFullItem})
}

chooseCategory(category){
  if(category === 'all'){
    this.setState({currentItems: this.state.items})
    return
  }

  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}
  
deleteFav(id){
this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

  addToOrder(item){
    let isInArray =false
this.state.orders.forEach(el => {
  if(el.id === item.id)
isInArray = true
})
if(!isInArray)
this.setState({orders: [...this.state.orders, item]}) 
  }
}
export default App;

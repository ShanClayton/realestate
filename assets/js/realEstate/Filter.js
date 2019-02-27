import React, { Component} from 'react'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'shanaun'
    
    }
    this.cities = this.cities.bind(this)
  }
  componentWillMount() {
    this.props.populateAction()
  }
  cities (){
    var {cities} = this.props.globalState.populateFormsData

    return cities.map((item)=>{
      return(
        <option value={item}>{item}</option>
      )
    })
  }
  homeTypes (){

  }
  bedrooms (){

  }
  render () {
    return (
  <section id="filter">
    <div className="inside">
        <h4>Filter</h4>
        <label htmlFor = "city">City</label>
        <select name="city" className="filters city" onChange={this.props.change}>
           <option value="All">All</option>
           {this.cities()}
        </select>
        <label htmlFor = "homeType">Home Type</label>
        <select name="homeType" className="filters HomeType"onChange={this.props.change}>
            <option value="All">All</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="Multi Home">Multi Home</option>
            <option value="Single Story">Single Story</option>
            <option value="Studio">Studio</option>
        </select>
        <label htmlFor = "bedrooms">Bedrooms</label>
        <select name="bedrooms" className="filters bedrooms"onChange={this.props.change}>
            <option value="0">0+ BR</option>
            <option value="1">1+ BR</option>
            <option value="2">2+ BR</option>
            <option value="3">3+ BR</option>
            <option value="4">4+ BR</option>
            <option value="5">5+ BR</option>
            <option value="6">6+ BR</option>
            <option value="7">7+ BR</option>
        </select>
        <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
            <input type="text" name="max_price" className="max-price" onChange={this.props.change} value ={this.props.globalState.max_price}/>
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
          <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
        </div>
        <div className="filters extras">
          <span className="title">
            Extras
          </span>
          <label htmlFor="extras">
          <span>Elevator</span>
          <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
          <span>Fireplace</span>
          <input name="fireplace" value="fireplace" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
          <span>HOA</span>
          <input name="hos" value="hoa" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
          <span>Swimming Pool</span>
          <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
          <span>Seprate Shower</span>
          <input name="separate_shower" value="separate_shower" type="checkbox" onChange={this.props.change}/>
          </label>
        </div>
      </div>
    </section>
    )
  }
}


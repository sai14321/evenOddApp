import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, evenOdd: false}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.round(Math.random() * 100),
    }))
    this.setState({evenOdd: !evenOdd ? 'even' : 'odd'})
  }

  render() {
    const {count, evenOdd} = this.state
    return (
      <div className="background">
        <div className="cardContainer">
          <h1 className="heading">Count {count}</h1>
          <p className="heading2">Count is {evenOdd}</p>
          <button type="button" className="btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

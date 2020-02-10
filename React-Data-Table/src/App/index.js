import React, { Component } from 'react'
import PropTypes from 'proptypes'
import axios from 'axios'
import './style.css'
import Table from '../Table/index'


export class App extends Component {

  PropTypes = {
    data: PropTypes.array,
    result: PropTypes.bool,
    dataLength: PropTypes.number
  }

  state = {
    data: [],
    result: false,
    dataLength: null,
  }

  toggleVisibility = () => {
    const { result } = this.state

    this.setState({
      result: !result
    })
  }

  makeRequest = () => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users',
    }).then((response) => {
      this.setState({
        data: response.data,
        dataLength: response.data.length,
        result: true
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    const { result, dataLength, data } = this.state


    return (
      <div>
        <div>
          <h1>Данные о клиентах</h1>
        </div>

        <div>
          <div className="button-place">
            <button className="button-request" onClick={this.makeRequest}>Сделать запрос</button>
            <button className="button-request" onClick={this.toggleVisibility}>Скрыть/показать результаты запроса</button>
          </div>
          {result ?
            <React.Fragment>
              <p className="text">Количество клиентов: {dataLength}</p>
              <Table data={data} />
            </React.Fragment>
            : null}
        </div>

      </div>
    )
  }
}

export default App


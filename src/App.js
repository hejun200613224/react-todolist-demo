import React, {Component} from 'react'
import {Button, Typography} from 'antd'
import ItemList from './components/ItemList'
import './App.scss'

const {Title} = Typography

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: [{
        text: 'asdasdasd',
        time: '2018-1-1',
        status: 0,
        id: 0
      }]
    }
  }

  deleteItem (id) {
    const i = this.state.data.findIndex((it) => it.id === id)
    if (~i) {
      this.state.data.splice(i, 1)
      this.setState({data: this.state.data})
    }
  }

  render () {
    return (
      <div className="App">
        <Title className="title" level={2}>待办事项列表</Title>
        <div>
          <ItemList data={this.state.data} emit_delete={this.deleteItem.bind(this)}/>
          <Button>你好</Button>
        </div>
      </div>
    )
  }
}

export default App

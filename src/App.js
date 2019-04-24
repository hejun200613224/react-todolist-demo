import React, {Component} from 'react'
import {Input, Typography, Empty, LocaleProvider} from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import ItemList from './components/ItemList'
import './App.scss'

const {Title} = Typography

class App extends Component {
  constructor () {
    super()
    this.state = {
      inputValue: '',
      keyLevel: 0,
      data: []
    }
  }

  addItem (v) {
    if (v) {
      let {keyLevel, data} = this.state
      const item = {
        text: v,
        time: new Date().getTime(),
        status: 0,
        id: keyLevel++
      }
      data.unshift(item)
      this.setState({keyLevel, data, inputValue: ''})
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
      <LocaleProvider locale={zhCN}>
        <div className="App">
          <Title className="title" level={2}>待办事项列表</Title>
          <div className="inputSearchContent">
            <Input.Search placeholder="请输入待办事项"
                          enterButton="添加"
                          type="text" size="large"
                          allowClear
                          value={this.state.inputValue}
                          onChange={(e) => this.setState({inputValue: e.target.value})}
                          onSearch={this.addItem.bind(this)}/>
          </div>
          <div className="itemListContent">{
            (() => {
              if (this.state.data.length) {
                return <ItemList data={this.state.data} emit_delete={this.deleteItem.bind(this)}/>
              } else {
                return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
              }
            })()
          }</div>
        </div>
      </LocaleProvider>
    )
  }
}

export default App

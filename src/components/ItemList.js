import React, {Component} from 'react'
import {Button} from 'antd'
import PropTypes from 'prop-types'
import './ItemList.scss'

class ItemList extends Component {
  static propTypes = {
    data: PropTypes.array,
    emit_delete: PropTypes.func
  }

  renderItemList (data) {
    return data.map((it) => (
      <div className="Item" key={it.id}>
        <div className="text">{it.text}</div>
        <div className="time">{new Date(it.time).format('yyyy-MM-dd')}</div>
        <div className="status">{
          (() => {
            switch (it.status) {
              case 0:
                return <span className="todo">未完成</span>
              case 1:
                return <span className="success">已完成</span>
              default:
                return <span>未知</span>
            }
          })()
        }</div>
        <Button type="danger" onClick={() => this.props.emit_delete(it.id)}>删除</Button>
      </div>
    ))
  }

  render () {
    return (
      <div className="ItemList">
        {this.renderItemList(this.props.data)}
      </div>
    )
  }
}

export default ItemList

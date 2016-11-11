// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const React = require('react')
const ReactDOM = require('react-dom')

const { SortableContainer, SortableElement } = require('react-sortable-hoc')

const { div } = React.DOM

let SortableItem = SortableElement(({ value }) => {
  return (
    div({
      style: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'blue',
        width: '100px',
        height: '50px',
        display: 'inline-block',
      },
    }, value)
  )
})

SortableItem = React.createFactory(SortableItem)

let SortableList = SortableContainer(({items}) => {
    return (
      div({
        style: {
          marginLeft: '100px',
          backgroundColor: 'red',
        },
      },
        items.map((value, index) =>
          SortableItem({
            key:`item-${index}`,
            value,
            index,
          })
        )
      )
    )
})

SortableList = React.createFactory(SortableList)

class App extends React.Component {
    render() {
      const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

      return (
        SortableList({
          lockToContainerEdges: true,
          lockAxis: 'x',
          axis: 'x',
          items
        })
      )
    }
}

const mountNode = document.getElementById('root')
ReactDOM.render(React.createElement(App), mountNode)

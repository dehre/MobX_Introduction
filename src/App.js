import React, { Component } from 'react'
import Counter from './components/Counter'
import appState from './mobX/store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>

        <Counter store={appState}/>,
      </div>
    )
  }
}

export default App

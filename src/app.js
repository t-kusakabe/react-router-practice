import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <HashRouter>
    <div>
      <Route exact path='/' component={Top} />
      <Route path='/foo' component={Foo} />
      <Route path='/bar' component={Bar} />

      <ul>
        <li><Link to='/rankings'>ランキング</Link></li>
        <li><Link to='/user/info'>ユーザー情報</Link></li>
      </ul>
    </div>
  </HashRouter>
)

const  Top = () => (
  <div>Welcome Top</div>
)

const Foo = () => (
  <div>Welcome Foo</div>
)

const Bar = () => (
  <div>Welcome Bar</div>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

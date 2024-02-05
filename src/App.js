import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import CoursesItemDetails from './components/CoursesItemDetails'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CoursesItemDetails} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App

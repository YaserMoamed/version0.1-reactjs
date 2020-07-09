import React from 'react';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Feed from './pages/Feed'
import MyProfile from './pages/MyProfile'
import OtherProfile from './pages/OtherProfile'
import { BrowserRouter , Switch, Route} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/feed" component={Feed} />
          <Route path="/myprofile" component={MyProfile} />
          <Route path="/otherprofile" component={OtherProfile} />

        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

import React from 'react';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Feed from './pages/Feed'
import MyProfile from './pages/MyProfile'
import OtherProfile from './pages/OtherProfile'
import Search from './pages/Search'
import EditRecipe from './pages/EditRecipe'
import PreviewRecipe from './pages/PreviewRecipe'
import CookingMode from './pages/CookingMode'
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import CookingModeExpanded from './pages/CookingModeExpanded';

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
          <Route path="/search" component={Search} />
          <Route path="/editrecipe" component={EditRecipe} />
          <Route path="/previewrecipe" component={PreviewRecipe} />
          <Route path="/cookingmode" component={CookingMode} />
          <Route path="/cookingmodeexpanded" component={CookingModeExpanded} />

        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

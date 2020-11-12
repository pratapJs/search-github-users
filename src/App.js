import {Dashboard,Login, PrivateRoute, AuthWrapper, Error} from "./pages"
import { Switch, Route} from "react-router-dom"

function App() {
  return (
 <AuthWrapper>



     <Switch>
       <PrivateRoute exact path="/" > <Dashboard></Dashboard> </PrivateRoute>
       <Route  path="/Login" component={Login}/>
       <Route path="*" component={Error}/>
     </Switch>
     </AuthWrapper>
  
  );
}

export default App;

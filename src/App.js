import React from 'react';
import './App.css';
import { Switch,Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//actions
import { setCurrentUser } from './redux/user/user.action';
//pages
import HomePage from './pages/homepage/homepage.component';
import Shop from "./pages/shop-page/shop.component";
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";
//components
import Header from "./components/header/header";
//auth
import { auth } from './firebase/firebase.util';
import { createUserProfileDocument }  from './firebase/firebase.util';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckOutPage from './pages/checkoutpage/checkOutPage';


class App extends React.Component {

  unscribeFromAuth = null;

  componentDidMount(){
   this.unscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
     const  {setCurrentUser } = this.props;
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        //check snapshot either user exist or not
        userRef.onSnapshot(snapShot=>{
           
            setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
        
        })

      }else{
          setCurrentUser(userAuth)
      }
      
    })
  }
  componentWillUnmount(){
    this.unscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Header currentUser={setCurrentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={Shop}/>
        <Route exact path='/checkout' component={CheckOutPage}/>
        <Route exact path='/signIn' render={ ()=> this.props.currentUser ? (<Redirect to='/'/>):(<SignIn/>)}/>
        <Route path='/signUp' component={SignUp}/>
      </Switch>  
    </div>
  );}
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);

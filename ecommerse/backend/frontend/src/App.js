import { Container, component } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'

import EmailScreen from './screens/EmailScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import Contact from './screens/Contact'
import condition1 from './screens/condition1'
import condition2 from './screens/condition2'
import condition3 from './screens/condition3'
import condition4 from './screens/condition4'
import privacy from './screens/privacy'



function App() {
  return (

    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} exact />
          <Route path='/register' component={RegisterScreen} exact />
          <Route path='/profile' component={ProfileScreen} exact />
          <Route path='/email' component={EmailScreen} exact />
         
          <Route path='/admin/userList' component={UserListScreen} exact />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />

          <Route path='/admin/productList' component={ProductListScreen} exact />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/point-1' component={condition1}/>
          <Route path='/point-2' component={condition2}/>
          <Route path='/point-3' component={condition3}/>
          <Route path='/point-4' component={condition4}/>
          <Route path='/privacy-policy' component={privacy}/>

          <Route path='/product/:id' component={ProductScreen} exact />
          <Route path='/cart/:id?' component={CartScreen} exact />

        </Container>

        <Route path='/contact' component={Contact} exact />
      </main>
      <Footer/>

  
    </Router>
  
  );
}

export default App;

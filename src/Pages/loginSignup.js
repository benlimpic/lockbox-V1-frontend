import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Login from '../components/loginSignup/login'
import Signup from '../components/loginSignup/signup'

const LoginSignup = (props) => {
  const { loggedIn, setLoggedIn } = props
  const [isLogin, setIsLogin] = useState(true)


  return (
    <Container>
      {isLogin ? 
      <Login  setLoggedIn={setLoggedIn}/>
      :
      <Signup  setLoggedIn={setLoggedIn}/>
      }
      <br></br>
      <Form.Text className="text-muted">
        { isLogin ? "Don't have an account? " : "Already have an account?" }
      </Form.Text>
      <br></br>
      <Button size="sm" variant="secondary" onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Signup' : 'Login'}</Button>
    </Container>
  )
}

export default LoginSignup
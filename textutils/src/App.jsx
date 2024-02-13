 
import './App.css';
import TextForm from './components/TextForm';
import {Navbar, Nav,Container} from 'react-bootstrap';



function App() {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
    <div  className="container">
    <TextForm heading = "Enter the text to analyze"/>
    </div>
    
      
    </>
  );
}

// App.propTypes = {
//   title: propsTypes.string
// }
export default App

import Contact from './components/Contact'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import styled from "styled-components"

const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior:smooth;
overflow-y:auto;
scrollbar-width:none;
&::-webkit-scrollbar{
  width: 3px;
}
&::-webkit-scrollbar-track{
  background-color:#fff;
}
&::-webkit-scrollbar-thumb{
  border-radius:50%;
  background-color:blue;
}
background: url("./img/bg.jpeg") ;
background-repeat:no-repeat;
background-size:cover;

`

function App() {
  return (
    <Container>
     <Hero/>
     <Who/>
     <Works/>
      <Contact />
    </Container>
    
  )
}

export default App

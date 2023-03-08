import styled from "styled-components";

const Section = styled.div`
display: flex;
justify-content:center;
@media only screen and (max-width:1400px) {
  width: 100%;
}
`;

const Container = styled.div`
width: 1400px;
display: flex;
justify-content:space-between;
align-items:center;
padding: 10px 0;

@media only screen and (max-width:1400px) {
  width: 90%;
}

`;
const Links = styled.div`
display: flex;
align-items:center;
gap:50px;

`;
const Logo = styled.img`
width: 50px;
`;
const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;

@media only screen and (max-width:768px) {
 display:none;
}
`;
const ListItem = styled.li`
cursor: pointer;
`;


const Icons = styled.div`
display: flex;
gap: 20px;
align-items:center;
`;
const Icon = styled.img`
width: 20px;
cursor: pointer;
`;
const Button = styled.button`
width: 100px;
padding: 10px;
background-color:#da4ea2;
color:#fff;
border-radius:10px;
border:0;
outline:none;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
cursor: pointer;
font-weight: 500;
`;

export default function Navbar() {
  return (
    <Section>
          <Container>
              <Links>
                  <Logo src="./img/logo.png" />
                  <List>
                      <ListItem>Home</ListItem>
                      <ListItem>About</ListItem>
                      <ListItem>Contact</ListItem>
                      <ListItem>Hero</ListItem>
                  </List>
              </Links>
              <Icons>
                  <Icon src="./img/search.png" />
                  <Button>Hire Now</Button>
              </Icons>
      </Container>
    </Section>
  )
}

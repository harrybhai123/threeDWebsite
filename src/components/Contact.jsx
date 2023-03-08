import styled from "styled-components";
import MapChart from "./Map";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;

`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 920px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  @media only screen and (max-width: 920px) {
    text-align:center;
  }
`;

const Form = styled.form`
  display: flex;
  width: 500px;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 920px) {
    width: 90%;
  }
`;
const Input = styled.input`
  padding: 20px;
  border: 0;
  outline: none;
  border-radius: 5px;
  background-color: #ebbdbd;
`;
const TextArea = styled.textarea`
  padding: 20px;
  border: 0;
  outline: none;
  border-radius: 5px;
  background-color: #ebbdbd;
`;
const Button = styled.button`
  color: #fff;
  border: 0;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
  border-radius: 5px;
  background-color: #da4ea2;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 920px) {
    display: none;
  }
`;

function handleClick(e) {
  e.preventDefault();

}

export default function Contact() {
  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleClick}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea placeholder="Write your message..." rows={10} />
            <Button type="Submit">Send</Button>
          </Form>
        </Left>
        <Right>
          <MapChart/>
        </Right>
      </Container>
    </Section>
  );
}

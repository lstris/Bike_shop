import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
    ), 
    url(/hitman-1-vd.jpg) center;

    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;


const Button = styled.button`
    border-radius: 3px;
    border: none;
    width: 40%;
    padding: 15px 20px;
    background-color: #ccc7dc;
    cursor: pointer;
    margin: 5px 0px;

&:hover{
    background-color: #80ddec;
}
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 13px;
    text-decoration: underline;
    cursor: pointer;
    
&:hover{
    color: #80ddec;
}
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="email/username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>FORGET YOUR PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
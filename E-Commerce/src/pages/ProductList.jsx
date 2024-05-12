import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container = styled.div`
    
`;

const Title = styled.h1`
    margin: 20px 0px;
    font-size: 50px;
    text-align: center;
    
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display: "flex", flexDirection: "column", margin: "10px 10px"})}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})}
`;
 

const Select = styled.select`
    padding: 7px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})}
`;


const Option = styled.option`
    
` ;
 const ProductList = () => {
   return (
     <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dress</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Product:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Green</Option>
                    <Option>Blue</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Type
                    </Option>
                    <Option>Kid</Option>
                    <Option>Pro</Option>
                    <Option>Women</Option>
                    <Option>Men</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Product:</FilterText>
                <Select>
                    <Option>Favorite</Option>
                    <Option> Price (Min to Max)</Option>
                    <Option>Price (Max to Min) </Option>
                    <Option>Discount %</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
     </Container>
   )
   }
 export default ProductList;
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import { styled } from 'styled-components';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';

const Container = styled.div``;

const Wrapper = styled.div`
	font-family: 'Mulish', sans-serif;
`;

const Title = styled.h1`
  margin: 20px;
  text-transform: uppercase;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
	const location = useLocation();
	const cat = location.pathname.split("/")[2];
	const [filter, setFilter] = useState({});
	const [sort, setSort] = useState("latest");

	const handleFilters = (e) => {
		const value = e.target.value;
		setFilter({
			...filter,
			[e.target.name]: value,
		});
	};

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>{cat}</Title>
				<FilterContainer>
					<Filter>
						<FilterText>
							Filter Products:
						</FilterText>
						<Select name="colour" onChange={handleFilters}>
							<Option disabled >
								Colour
							</Option>
							<Option>white</Option>
							<Option>black</Option>
							<Option>red</Option>
							<Option>blue</Option>
							<Option>yellow</Option>
							<Option>green</Option>
							<Option>beige</Option>
							<Option>pink</Option>
							<Option>violet</Option>
						</Select>
						<Select name="size" onChange={handleFilters}>
							<Option disabled>
								Size
							</Option>
							<Option>XS</Option>
							<Option>S</Option>
							<Option>M</Option>
							<Option>L</Option>
							<Option>XL</Option>
						</Select>
					</Filter>
					<Filter>
						<FilterText>
							Sort Products:
						</FilterText>
						<Select onChange={e => setSort(e.target.value)} >
							<Option value="latest">Latest</Option>
							<Option value="asc">Price: Low to High</Option>
							<Option value="desc">Price: High to Low</Option>
						</Select>
					</Filter>
				</FilterContainer>
				<Products cat={cat} filter={filter} sort={sort} />
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	)
}

export default ProductList;
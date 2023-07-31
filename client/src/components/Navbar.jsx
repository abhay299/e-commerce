import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
	height: 80px;
	${'' /* background-color: red; */}
	${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
	${'' /* padding-bottom: 10px; */}
	padding: 0px 20px 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${'' /* background-color: red; */}
	${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
	font-family: 'Hind Siliguri', sans-serif;
	flex: 1;
	display:flex;
	align-items: center;
	${'' /* background-color: blue; */}
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`;

const SearchContainer = styled.div`
	border: 1px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px
`;

const Input = styled.input`
	border: none;
`;

const Center = styled.div`
	flex: 1;
	text-align:center;
	${'' /* background-color: green; */}
`;

const Logo = styled.h1`
	font-family: 'Edu SA Beginner', cursive;
	font-weight: bold;
	color: black;
	${mobile({ fontSize: "24px" })};
`;

const Right = styled.div`
	font-family: 'Hind Siliguri', sans-serif;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${'' /* background-color: pink; */}
	${mobile({ justifyContent: "center" })};
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Navbar = () => {
	const quantity = useSelector(state => state.cart.quantity);
	// console.log(quantity);

	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder='Search' />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Link style={{ textDecoration: "none" }} to={"/"}>
						<Logo>MyFits</Logo>
					</Link>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<Link to="/cart">
						<MenuItem>
							<Badge overlap="rectangular" badgeContent={quantity} color='primary'>
								<ShoppingCartOutlined />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Container = styled.div`
	height: 60px;
	${'' /* background-color: red; */}
`;

const Wrapper = styled.div`
	${'' /* padding-bottom: 10px; */}
	padding: 0px 20px 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${'' /* background-color: red; */}
`;

const Left = styled.div`
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
	font-weight: bold;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${'' /* background-color: pink; */}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
`;

const Navbar = () => {
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
					<Logo>MyFits</Logo>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color='primary'>
							<ShoppingCartOutlined />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
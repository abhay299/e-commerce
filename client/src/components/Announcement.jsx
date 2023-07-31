import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
	font-family: 'Mulish', sans-serif;
	height: 30px;
	background-color: teal;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14pt;
	font-weight: 500;
`

const Announcement = () => {
	return (
		<Container>
			Great Deal! Free shipping on orders above ₹ 1000/-
		</Container>
	)
}

export default Announcement;
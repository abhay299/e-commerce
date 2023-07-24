import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
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
			Great Deal! Free Shipping on Orders above Rs1000/-
		</Container>
	)
}

export default Announcement;
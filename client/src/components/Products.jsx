import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
// import { popularProducts } from '../data';
import Product from './Product';
import axios from "axios";

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Products = ({ cat, filter, sort }) => {
	// console.log(cat, filter, sort);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					cat
						? `http://localhost:5000/api/products?category=${cat}`
						: "http://localhost:5000/api/products"
				);
				setProducts(res.data);
				// console.log(res);
			} catch (err) {
				console.log(err);
			}
		};
		getProducts();
	}, [cat]);

	useEffect(() => {
		cat && setFilteredProducts(
			products.filter(item =>
				// console.log("Item in filter: ", item);
				Object.entries(filter).every(([key, value]) =>
					item[key].includes(value)
				)
			)
		);
	}, [products, cat, filter]);

	useEffect(() => {
		if (sort === "latest") {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt)
			);
		} else if (sort === "asc") {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.price - b.price)
			);
		} else {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);

	return (
		<Container>
			{
				cat
					? filteredProducts.map((item) => <Product item={item} key={item.id} />)
					: products
						.slice(0, 8)
						.map((item) => <Product item={item} key={item.id} />)
			}
		</Container>
	)
};

export default Products;
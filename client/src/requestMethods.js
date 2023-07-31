import axios from "axios";

const BASE_URL = "https://e-commerce-backend-ur91.onrender.com/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmVhYTU1YmVmYjhlZmI0Mjk2YWFmNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDMwNzI3NiwiZXhwIjoxNjkwNzM5Mjc2fQ.Q2oKck6JHOcQ8w-oY5gbeWmAlLbWWz1YCxAkd1Sk3lA";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `${TOKEN}` },
});
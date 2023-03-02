import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	background-color: #fff;
	box-shadow: 0px 0px 5px #ccc;
	border-radius: 10px;
	padding: 20px;
	margin-top: 20px;
`;
export const InputContainer = styled.div`
	flex: 1;
	margin: 10px;
`;

export const Title = styled.div`
	font-weight: bold;
	margin-bottom: 5px;
`;

export const Select = styled.select`
	width: 100%;
	height: 30px;
	border-radius: 5px;
	padding: 0 5px;
	border: 1px solid lightblue;
`;

export const Input = styled.input`
	width: 100%;
	height: 30px;
	border-radius: 5px;
	padding: 0 5px;
	border: 1px solid lightblue;
`;

export const Button = styled.button`
	width: 100%;
	height: 30px;
	border-radius: 5px;
	padding: 0 5px;
	border: 1px solid lightblue;
	background-color: lightblue;
	color: #000;
	cursor: pointer;

	&:hover {
		background-color: blue;
		color: #fff;
	}
`;

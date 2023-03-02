import { useState } from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';

import { categories } from '../../data/category';

type Props = {
	onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
	const [dateField, setDateField] = useState('');
	const [categoryField, setCategoryField] = useState('');
	const [titleField, setTitleField] = useState('');
	const [valueField, setValueField] = useState(0);

	let categoryKeys: string[] = Object.keys(categories);

	const handleAddEvent = () => {
		let errors: string[] = [];

		if (isNaN(new Date(dateField).getTime())) {
			errors.push('Data inválida!');
		}
		if (!categoryKeys.includes(categoryField)) {
			errors.push('Categoria inválida!');
		}
		if (titleField === '') {
			errors.push('Título inválido!');
		}
		if (valueField <= 0) {
			errors.push('Valor inválido!');
		}
		if (errors.length > 0) {
			alert(errors.join('\n'));
		} else {
			onAdd({ date: new Date(dateField), category: categoryField, title: titleField, value: valueField });

			clearFields();
		}
	};

	const clearFields = () => {
		setDateField('');
		setCategoryField('');
		setTitleField('');
		setValueField(0);
	};

	return (
		<C.Container>
			<C.InputContainer>
				<C.Title>Data</C.Title>
				<C.Input
					type="date"
					value={dateField}
					onChange={(e) => setDateField(e.target.value)}
				/>
			</C.InputContainer>
			<C.InputContainer>
				<C.Title>Categoria</C.Title>
				<C.Select
					value={categoryField}
					onChange={(e) => setCategoryField(e.target.value)}>
					<>
						<option value=""></option>
						{categoryKeys &&
							categoryKeys.map((key, index) => (
								<option
									key={index}
									value={key}>
									{categories[key].title}
								</option>
							))}
					</>
				</C.Select>
			</C.InputContainer>
			<C.InputContainer>
				<C.Title>Título</C.Title>
				<C.Input
					type="text"
					value={titleField}
					onChange={(e) => setTitleField(e.target.value)}
				/>
			</C.InputContainer>
			<C.InputContainer>
				<C.Title>Valor</C.Title>
				<C.Input
					type="number"
					value={valueField}
					onChange={(e) => setValueField(parseFloat(e.target.value))}
				/>
			</C.InputContainer>
			<C.InputContainer>
				<C.Title>&nbsp;</C.Title>
				<C.Button onClick={handleAddEvent}>Adicionar</C.Button>
			</C.InputContainer>
		</C.Container>
	);
};

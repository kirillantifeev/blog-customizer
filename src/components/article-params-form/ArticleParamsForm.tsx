import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';

import styles from './ArticleParamsForm.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';

// type props = {
// 	setBackgroundColor
// }

export const ArticleParamsForm = ({
	setBackgroundColor,
	setfontSize,
	setfontFamily,
	setcontainerWidth,
	setfontColor,
}: any) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};

	const [selectedFont, setSelectedFont] = useState(fontFamilyOptions[0]);
	const [selectedSize, setSelectedSize] = useState(fontSizeOptions[0]);
	const [selectedColor, setSelectedColor] = useState(fontColors[0]);
	const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
		backgroundColors[0]
	);
	const [selectedWidth, setSelectedWidth] = useState(contentWidthArr[0]);

	const apply = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setBackgroundColor(selectedBackgroundColor.value);
		setfontSize(selectedSize.value);
		setfontFamily(selectedFont.value);
		setcontainerWidth(selectedWidth.value);
		setfontColor(selectedColor.value);
	};

	const clear = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setSelectedBackgroundColor(backgroundColors[0]);
		setSelectedSize(fontSizeOptions[0]);
		setSelectedFont(fontFamilyOptions[0]);
		setSelectedWidth(contentWidthArr[0]);
		setSelectedColor(fontColors[0]);

		setBackgroundColor(backgroundColors[0].value);
		setfontSize(fontSizeOptions[0].value);
		setfontFamily(fontFamilyOptions[0].value);
		setcontainerWidth(contentWidthArr[0].value);
		setfontColor(fontColors[0].value);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleToggle} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<Text as='h1' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Select
						selected={selectedFont}
						onChange={setSelectedFont}
						options={fontFamilyOptions}
						title='шрифт'
					/>

					<RadioGroup
						selected={selectedSize}
						name='radio'
						onChange={setSelectedSize}
						options={fontSizeOptions}
						title='Размер шрифта'
					/>

					<Select
						selected={selectedColor}
						onChange={setSelectedColor}
						options={fontColors}
						title='цвет шрифта'
					/>

					<Separator />

					<Select
						selected={selectedBackgroundColor}
						onChange={setSelectedBackgroundColor}
						options={backgroundColors}
						title='цвет фона'
					/>

					<Select
						selected={selectedWidth}
						onChange={setSelectedWidth}
						options={contentWidthArr}
						title='ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={clear}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={apply}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};

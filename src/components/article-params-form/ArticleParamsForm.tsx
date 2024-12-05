import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';

import styles from './ArticleParamsForm.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';

export const ArticleParamsForm = ({
	setBackgroundColor,
	setFontSize,
	setFontFamily,
	setContainerWidth,
	setFontColor,
}: any) => {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};

	const close = () => {
		setIsOpen(false);
	};

	const [selectedFont, setSelectedFont] = useState(fontFamilyOptions[0]);
	const [selectedSize, setSelectedSize] = useState(fontSizeOptions[0]);
	const [selectedColor, setSelectedColor] = useState(fontColors[0]);
	const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
		backgroundColors[0]
	);
	const [selectedWidth, setSelectedWidth] = useState(contentWidthArr[0]);

	const applyStylesBlog = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setBackgroundColor(selectedBackgroundColor.value);
		setFontSize(selectedSize.value);
		setFontFamily(selectedFont.value);
		setContainerWidth(selectedWidth.value);
		setFontColor(selectedColor.value);
	};

	const clearStylesBlog = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setSelectedBackgroundColor(defaultArticleState.backgroundColor);
		setSelectedSize(defaultArticleState.fontSizeOption);
		setSelectedFont(defaultArticleState.fontFamilyOption);
		setSelectedWidth(defaultArticleState.contentWidth);
		setSelectedColor(defaultArticleState.fontColor);

		setBackgroundColor(defaultArticleState.backgroundColor.value);
		setFontSize(defaultArticleState.fontSizeOption.value);
		setFontFamily(defaultArticleState.fontFamilyOption.value);
		setContainerWidth(defaultArticleState.contentWidth.value);
		setFontColor(defaultArticleState.fontColor.value);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			containerRef.current &&
			!containerRef.current.contains(event.target as Node)
		) {
			close();
		}
	};

	const closeEscape = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			close();
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('keydown', closeEscape);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', closeEscape);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', closeEscape);
		};
	}, [isOpen]);

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleToggle} />
			<aside
				ref={containerRef}
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
						title='Цвет шрифта'
					/>

					<Separator />

					<Select
						selected={selectedBackgroundColor}
						onChange={setSelectedBackgroundColor}
						options={backgroundColors}
						title='Цвет фона'
					/>

					<Select
						selected={selectedWidth}
						onChange={setSelectedWidth}
						options={contentWidthArr}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={clearStylesBlog}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={applyStylesBlog}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};

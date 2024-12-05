import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	//const [fontFamily, setFontFamily] = useState('Open Sans');
	const [backgroundColor, setBackgroundColor] = useState(
		defaultArticleState.fontSizeOption.value
	);
	const [fontSize, setFontSize] = useState(
		defaultArticleState.fontSizeOption.value
	);
	const [fontFamily, setFontFamily] = useState(
		defaultArticleState.fontFamilyOption.value
	);
	const [containerWidth, setContainerWidth] = useState(
		defaultArticleState.contentWidth.value
	);
	const [fontColor, setFontColor] = useState(
		defaultArticleState.fontColor.value
	);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': fontFamily,
					'--font-size': fontSize,
					'--font-color': fontColor,
					'--container-width': containerWidth,
					'--bg-color': backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm
				setBackgroundColor={setBackgroundColor}
				setFontSize={setFontSize}
				setFontFamily={setFontFamily}
				setContainerWidth={setContainerWidth}
				setFontColor={setFontColor}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

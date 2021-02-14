import React, { useState } from 'react';

const styles = require('./NovoArtigo.module.scss');

export interface Article {
	data: {
		content: string;
		title: string;
		published: boolean;
		user: User;
	};
}

export interface User {
	name: string;
	email: string;
}

interface Props {
	artigo: Article;
}

export default function NovoArtigo(props: Props) {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [published, setPublished] = useState(false);

	return <div className={styles.container}>{props.artigo.data.title}</div>;
}

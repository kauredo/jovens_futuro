import React, { useState } from 'react';
import axios from 'axios';

const styles = require('./NovoArtigo.module.scss');

export interface Article {
	id: number;
	attributes: {
		id: number;
		categoria: string;
		content: string;
		title: string;
		novo: boolean;
		published: boolean;
		published_at: Date;
		user: User;
	};
}

export interface User {
	avatar: { url: string };
	email: string;
	id: number;
	name: string;
}

export interface Colaborador {
	id: number;
	attributes: {
		avatar: { url: string };
		email: string;
		id: number;
		name: string;
	};
}

interface Props {
	artigo: Article;
}

export default function NovoArtigo(props: Props) {
	const artigo = props.artigo.attributes;
	const [title, setTitle] = useState(artigo.title || '');
	const [published, setPublished] = useState(artigo.published || false);
	const user = artigo.user;

	const handleSubmit = e => {
		e.preventDefault();

		const csrf = document
			.querySelector("meta[name='csrf-token']")
			.getAttribute('content');
		const url = `${window.location.origin}/artigos`;

		if (title) {
			axios({
				method: 'POST',
				url: url,
				data: { title, published, user },
				headers: {
					'Content-Type': 'application/json',
					'X-CSRF-Token': csrf,
				},
			}).then(response => {
				if (response.data.notice) {
					alert(response.data.notice);
					window.location.href = url;
				} else if (response.data.error) {
					alert(response.data.error);
				}
			});
		} else {
			alert('Por favor insere todos os dados.');
		}
	};

	return (
		<div className={styles.container}>
			<form id='contact-form' onSubmit={handleSubmit} method='POST'>
				<div className={styles.formGroup}>
					<input
						onChange={e => setTitle(e.target.value)}
						value={title}
						type='text'
						className={styles.formControl}
						placeholder='Título'
					/>
				</div>
				<div className={styles.formGroup}>
					<textarea
						onChange={e => setContent(e.target.value)}
						placeholder='Conteúdo do artigo'
						value={content}
						className={styles.formControl}
						rows={5}
					></textarea>
				</div>
				<div className={styles.formGroup}>
					<input
						onChange={e => setPublished(!published)}
						type='checkbox'
						value={published ? 1 : 0}
						className={styles.formControl}
					/>
					<label>Publicar?</label>
				</div>
				<button type='submit' className={styles.submitButton}>
					Submeter
				</button>
			</form>
		</div>
	);
}

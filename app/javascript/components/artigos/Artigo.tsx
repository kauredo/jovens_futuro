import React, { useState } from 'react';
import { Article } from './NovoArtigo';

const styles = require('./Artigo.module.scss');

interface Props {
	artigo: Article;
	full?: boolean;
}

export default function Artigos(props: Props) {
	const artigo = props.artigo.attributes;
	const user = artigo.user;

	return (
		<div className={styles.container}>
			{props.full ? (
				<div className={styles.artigo}>
					<h2>{artigo.title}</h2>
					<h3>{user.name}</h3>
					<p>{artigo.content}</p>
				</div>
			) : (
				<a
					className={styles.artigo}
					href={`${window.location.href}/${artigo.id}`}
				>
					<h2>{artigo.title}</h2>
					<h3>{user.name}</h3>
					<p>{artigo.content}</p>
				</a>
			)}
		</div>
	);
}

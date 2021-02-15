import React, { useState } from 'react';
import { Article } from './NovoArtigo';

const styles = require('./Artigo.module.scss');

interface Props {
	artigo: Article;
}

export default function Artigo(props: Props) {
	const artigo = props.artigo.attributes;
	const user = artigo.user;

	const truncate = input =>
		input.length > 200 ? `${input.substring(0, 200)}...` : input;

	return (
		<div className={styles.artigo}>
			<div className={styles.photo}></div>
			<div className={styles.categoria}>{artigo.categoria || 'Outros'}</div>
			<a href={`${window.location.href}/${artigo.id}`}>
				<h2 className={styles.title}>{artigo.title}</h2>
			</a>
			<h4 className={styles.name}>{user.name}</h4>
			<p className={styles.content}>
				{truncate(
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, mollitia omnis placeat velit, earum, atque eum accusamus vel saepe laboriosam dolor dignissimos eaque beatae qui? Quae saepe magnam cumque quidem.'
				)}
			</p>
		</div>
	);
}

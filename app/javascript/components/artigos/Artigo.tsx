import React, { useState } from 'react';
import { Article } from './NovoArtigo';

const styles = require('./Artigo.module.scss');

interface Props {
	artigo: Article;
	justHeader?: boolean;
}

export default function Artigo(props: Props) {
	const artigo = props.artigo.attributes;
	const user = artigo.user;
	const justHeader = props.justHeader;

	const truncate = input =>
		input.length > 200 ? `${input.substring(0, 200)}...` : input;

	const artigoClass = justHeader
		? `${styles.artigo} ${styles.main}`
		: styles.artigo;
	return (
		<div className={artigoClass}>
			{justHeader ? (
				<>
					<div className={styles.photo}></div>
					<div className={styles.categoria}>{artigo.categoria || 'Outros'}</div>
					<h2 className={styles.title}>{artigo.title}</h2>
					<p>
						<em>Publicado a {artigo.published_at}</em>
					</p>
				</>
			) : (
				<>
					<div className={styles.photo}></div>
					<div className={styles.categoria}>{artigo.categoria || 'Outros'}</div>
					<a
						className={styles.titleLink}
						href={`${window.location.origin}${window.location.pathname}/${artigo.id}`}
					>
						<h2 className={styles.title}>{artigo.title}</h2>
					</a>
					<h4 className={styles.name}>{user.name}</h4>
					<p className={styles.content}>
						{truncate(
							'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, mollitia omnis placeat velit, earum, atque eum accusamus vel saepe laboriosam dolor dignissimos eaque beatae qui? Quae saepe magnam cumque quidem.'
						)}
					</p>
					<p>
						<em>Publicado a {artigo.published_at}</em>
					</p>
				</>
			)}
		</div>
	);
}

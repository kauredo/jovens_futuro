import React, { useState } from 'react';
import { Article } from './NovoArtigo';

import styles from './Artigo.module.scss';

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
					<div
						className={styles.photo}
						style={{ backgroundImage: `url(${user.avatar.url})` }}
					></div>
					<div className={styles.categoria}>{artigo.categoria || 'Outros'}</div>
					<h2 className={styles.title}>{artigo.title}</h2>
					<p>
						<em>Publicado a {artigo.published_at}</em>
					</p>
				</>
			) : (
				<>
					<div
						className={styles.photo}
						style={{ backgroundImage: `url(${user.avatar.url})` }}
					></div>
					<div className={styles.categoria}>{artigo.categoria || 'Outros'}</div>
					<a
						className={styles.titleLink}
						href={`${window.location.origin}${window.location.pathname}/${artigo.id}`}
					>
						<h2 className={styles.title}>{artigo.title}</h2>
					</a>
					<h4 className={styles.name}>{user.name}</h4>
					<p className={styles.content}>{truncate(artigo.content)}</p>
					<p>
						<em>Publicado a {artigo.published_at}</em>
					</p>
				</>
			)}
		</div>
	);
}

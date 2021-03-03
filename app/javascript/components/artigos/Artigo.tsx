import React from 'react';
import { Article } from './NovoArtigo';

const styles = require('./Artigo.module.scss');

interface Props {
	artigo: Article;
	justHeader?: boolean;
}

export default function Artigo(props: Props) {
	const artigo = props.artigo.attributes;
	const user = artigo.colaborator;
	const novo = artigo.novo;
	const justHeader = props.justHeader;
	const artigoLink = `${window.location.origin}${window.location.pathname}/${artigo.id}`;

	const truncate = input =>
		input.length > 200 ? `${input.substring(0, 200)}...` : input;

	const artigoClass = justHeader
		? `${styles.artigo} ${styles.main}`
		: styles.artigo;
	return (
		<div className={artigoClass}>
			{justHeader ? (
				<>
					{novo && <div className={styles.novo}>Recente</div>}
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
					{novo && <div className={styles.novo}>Recente</div>}
					<a href={artigoLink}>
						<div
							className={styles.photo}
							style={{ backgroundImage: `url(${user.avatar.url})` }}
						></div>
					</a>
					<div className={styles.categoria}>{artigo.categoria || 'Outros'}</div>
					<a className={styles.titleLink} href={artigoLink}>
						<h2 className={styles.title}>{artigo.title}</h2>
					</a>
					<h4 className={styles.name}>{user.name}</h4>
					<p className={styles.content}>
						<em>{truncate(artigo.content)}</em>
					</p>
					<p>
						<em>Publicado a {artigo.published_at}</em>
					</p>
				</>
			)}
		</div>
	);
}

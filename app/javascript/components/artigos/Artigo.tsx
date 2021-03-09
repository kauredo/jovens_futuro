import React from 'react';
import { Article } from './NovoArtigo';

const styles = require('./Artigo.module.scss');

interface Props {
	artigo: Article;
	justHeader?: boolean;
}

export default function Artigo(props: Props) {
	const artigo = props.artigo.attributes;
	const users = artigo.colaborators;
	const novo = artigo.novo;
	const justHeader = props.justHeader;
	const artigoLink = `${window.location.origin}${window.location.pathname}/${artigo.id}`;

	const truncate = input =>
		input.length > 200 ? `${input.substring(0, 200)}...` : input;

	const artigoClass = justHeader
		? `${styles.artigo} ${styles.main}`
		: styles.artigo;

	const photoClass = index =>
		`${styles.photo} ${users.length === 2 && index === 0 && styles.offset}`;
	return (
		<div className={artigoClass}>
			{justHeader ? (
				<>
					<div
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{users.map((user, index) => (
							<div
								key={`${artigo.title}user${index}${artigo.published_at}`}
								className={styles.articlePhoto}
								style={{
									backgroundImage: `url(${user.avatar.url})`,
									margin: '0.125rem',
								}}
							></div>
						))}
					</div>
					<div className={styles.categoria}>{artigo.categoria || 'Outros'}</div>
					<h2 className={styles.title}>{artigo.title}</h2>
					<p>
						<em>Publicado a {artigo.published_at}</em>
					</p>
				</>
			) : (
				<>
					{novo && (
						<div
							className={`${styles.novo} ${
								users.length === 2 && styles.offset
							}`}
						>
							Recente
						</div>
					)}
					<a href={artigoLink} style={{ position: 'relative' }}>
						{users.map((user, index) => (
							<div
								key={`${artigo.title}user${index}${artigo.published_at}`}
								className={photoClass(index)}
								style={{ backgroundImage: `url(${user.avatar.url})` }}
							></div>
						))}
					</a>
					<div className={styles.categoria}>{artigo.categoria || 'Outros'}</div>
					<a className={styles.titleLink} href={artigoLink}>
						<h2 className={styles.title}>{artigo.title}</h2>
					</a>
					<h4 className={styles.name}>
						{users.map(user => user.name).join(', ')}
					</h4>
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

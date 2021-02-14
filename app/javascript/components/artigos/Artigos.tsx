import React, { useState } from 'react';
import { Article } from './NovoArtigo';
import Artigo from './Artigo';

const styles = require('./Artigos.module.scss');

interface Props {
	artigos: Article[];
}

export default function Artigos(props: Props) {
	const artigos = props.artigos;

	return (
		<div className={styles.container}>
			<ul>
				{artigos.map(artigo => (
					<Artigo key={artigo.id} artigo={artigo} />
				))}
			</ul>
		</div>
	);
}

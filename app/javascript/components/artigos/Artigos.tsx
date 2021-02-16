import React, { useState } from 'react';
import { Article } from './NovoArtigo';
import Artigo from './Artigo';
import Pagination from '../shared/Pagination';

const styles = require('./Artigos.module.scss');

interface Props {
	artigos: Article[];
	page: number;
	pages: number;
}

export default function Artigos(props: Props) {
	const artigos = props.artigos;

	return (
		<div>
			<Pagination page={props.page} lastPage={props.pages} />
			<div className={styles.artigos}>
				{artigos.map(artigo => (
					<Artigo key={artigo.id} artigo={artigo} />
				))}
			</div>
			<Pagination page={props.page} lastPage={props.pages} />
		</div>
	);
}

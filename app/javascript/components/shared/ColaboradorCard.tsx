import React, { useEffect, useState } from 'react';
import { Colaborador } from '../artigos/NovoArtigo';

const styles = require('./ColaboradorCard.module.scss');

interface Props {
	colaborador: Colaborador;
}

export default function ColaboradorCard(props: Props) {
	const colaborador = props.colaborador.attributes;
	return (
		<div className={styles.mainCard}>
			<div className={styles.header}>
				<div
					className={styles.avatar}
					style={{ backgroundImage: `url(${colaborador.avatar})` }}
				></div>
				<div className={styles.name}>{colaborador.name}</div>
			</div>
			<div className={styles.text}>
				{colaborador.description}
				{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
				officiis fugit distinctio corporis, atque nisi eius eaque reiciendis
				debitis, laudantium dolorem porro, accusantium perspiciatis culpa
				voluptatum magnam maxime unde et. */}
			</div>
		</div>
	);
}

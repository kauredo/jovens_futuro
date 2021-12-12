import React, { useEffect, useState } from 'react';
import { Colaborador } from '../artigos/NovoArtigo';

const styles = require('./ColaboradorCard.module.scss');

interface Props {
	colaborador: Colaborador;
	show: boolean;
}

export default function ColaboradorCard(props: Props) {
	const colaborador = props.colaborador.attributes;
	const show = props.show;

	return (
		<div className={`${styles.mainCard} ${show && styles.showCard}`}>
			<div className={styles.imageSide}>
				<div
					className={styles.avatar}
					style={{ backgroundImage: `url(${colaborador.avatar})` }}
				></div>
			</div>
			<div className={styles.textSide}>
				<div className={styles.name}>{colaborador.name}</div>
				<div className={styles.description}>{colaborador.description}</div>
			</div>
		</div>
	);
}

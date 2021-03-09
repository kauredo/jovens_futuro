import React from 'react';
import { Colaborador } from '../artigos/NovoArtigo';
import ImageSlide from '../shared/ImageSlide';
import Logo from '../shared/Logo';

const styles = require('./Colaboradores.module.scss');

interface Props {
	colaboradores: Colaborador[];
}

export default function Colaboradores(props: Props) {
	return (
		<div className={styles.container}>
			<Logo />
			<ImageSlide
				image={
					'https://images.unsplash.com/photo-1513377888081-794d8e958972?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
				}
			/>
			<div className={styles.container}>
				<div className={styles.topSection}>
					<h2 className={styles.leftText}>
						O desafio lançado a todos os que foram contactados estende-se a
						jovens que tenham vontade e compromisso de contribuírem
						periodicamente.
					</h2>
					<div className={styles.rigthText}>
						<p className={styles.text}>
							O repto de refletir, pensar, escrever ou desenhar, e partilhar
							publicamente no âmbito do desenvolvimento intelectual individual e
							coletivo foi aceite por todos os jovens elencados seguidamente. Um
							especial agradecimento a todos pelo seu contributo.
						</p>
						<p className={styles.text}>
							É importante ressalvar que este é um espaço tolerante à diferença
							de opiniões. De forma alguma existe uma intenção do blog se
							associar a ideologias, organizações ou movimentos, se não os da
							democracia e liberdade. A diversificação de perspetivas e opiniões
							é extremamente importante para promover a tolerância à diferença
							que a sociedade proporciona. Se por algum motivo um leitor se
							sentir emocionalmente afetado por um artigo pode sempre entrar em
							contacto e apresentar um artigo de resposta sustentado em ideais e
							visões diferentes.
						</p>
						<p className={styles.text}>
							O desafio lançado a todos os que foram contactados estende-se a
							jovens que tenham vontade e compromisso de contribuírem
							periodicamente.
						</p>
					</div>
				</div>
				<div className={styles.bottomSection}>
					<h2 className={styles.subtitle}>Colaboradores</h2>
					<ul className={styles.colaboradores}>
						{props.colaboradores.map(colaborador => {
							return (
								<li key={colaborador.id} className={styles.colaborador}>
									{colaborador.attributes.name}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

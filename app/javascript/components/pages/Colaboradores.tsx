import React from 'react';
import ImageSlide from '../shared/ImageSlide';

const styles = require('./Colaboradores.module.scss');

export default function Colaboradores() {
	return (
		<div className={styles.container}>
			<ImageSlide image={'/images/people.png'} />
			<div className={styles.topSection}>
				<h2 className={styles.leftText}>
					O desafio lançado a todos os que foram contactados estende-se a jovens
					que tenham vontade e compromisso de contribuírem periodicamente.
				</h2>
				<div className={styles.rigthText}>
					<p className={styles.text}>
						O repto de refletir, pensar, escrever ou desenhar, e partilhar
						publicamente no âmbito do desenvolvimento intelectual individual e
						coletivo foi aceite por todos os jovens elencados seguidamente. Um
						especial agradecimento a todos pelo seu contributo.
					</p>
					<p className={styles.text}>
						É importante ressalvar que este é um espaço tolerante à diferença de
						opiniões. De forma alguma existe uma intenção do blog se associar a
						ideologias, organizações ou movimentos, se não os da democracia e
						liberdade. A diversificação de perspetivas e opiniões é extremamente
						importante para promover a tolerância à diferença que a sociedade
						proporciona. Se por algum motivo um leitor se sentir emocionalmente
						afetado por um artigo pode sempre entrar em contacto e apresentar um
						artigo de resposta sustentado em ideais e visões diferentes.
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
					<li className={styles.colaborador}>Afonso Froes</li>
					<li className={styles.colaborador}>André Neves</li>
					<li className={styles.colaborador}>Bernardo Mendonça</li>
					<li className={styles.colaborador}>Carlos Pinto</li>
					<li className={styles.colaborador}>Carolina Mendes</li>
					<li className={styles.colaborador}>Carolina Tendinha</li>
					<li className={styles.colaborador}>Eduardo Fonseca</li>
					<li className={styles.colaborador}>Filipa Amaral</li>
					<li className={styles.colaborador}>Filipa Sousa</li>
					<li className={styles.colaborador}>Filipe Martins</li>
					<li className={styles.colaborador}>Francisco Catarro</li>
					<li className={styles.colaborador}>Gonçalo Catarro</li>
					<li className={styles.colaborador}>Gonçalo Macedo</li>
					<li className={styles.colaborador}>João Calafate</li>
					<li className={styles.colaborador}>João Côdea</li>
					<li className={styles.colaborador}>João Guerra</li>
					<li className={styles.colaborador}>João Lages</li>
					<li className={styles.colaborador}>João Mendes</li>
					<li className={styles.colaborador}>João Oliveira</li>
					<li className={styles.colaborador}>Leonor Rothes</li>
					<li className={styles.colaborador}>Leonor Sentieiro</li>
					<li className={styles.colaborador}>Madalena Ribeiro</li>
					<li className={styles.colaborador}>Manuel Bessa</li>
					<li className={styles.colaborador}>Manuel Pena</li>
					<li className={styles.colaborador}>Maria Roldão</li>
					<li className={styles.colaborador}>Mariana Sena</li>
					<li className={styles.colaborador}>Martim Giraldes</li>
					<li className={styles.colaborador}>Martim Vasconcelos</li>
					<li className={styles.colaborador}>Pedro Fonseca</li>
					<li className={styles.colaborador}>Pedro Mendes</li>
					<li className={styles.colaborador}>Pedro Pereira</li>
					<li className={styles.colaborador}>Rafael Vaz</li>
					<li className={styles.colaborador}>Vasco Figueiredo</li>
				</ul>
			</div>
		</div>
	);
}

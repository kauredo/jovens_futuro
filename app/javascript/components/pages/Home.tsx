import React from 'react';
import Artigo from '../artigos/Artigo';
import { Article } from '../artigos/NovoArtigo';
import ImageSlider from '../images/ImageSlider';
import ImageSlide from '../shared/ImageSlide';
import Logo from '../shared/Logo';

const styles = require('./Home.module.scss');

interface Props {
	lastArtigos: Article[];
}

export default function Home(props: Props) {
	const { lastArtigos } = props;
	return (
		<div className={styles.container}>
			<Logo />
			<ImageSlide
				image={
					'https://images.unsplash.com/photo-1542769494-0cc077eead4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
				}
			/>
			<div className={styles.container}>
				<h2 className={styles.subtitle}>Jovens &o Futuro</h2>
				<p className={styles.text}>
					Perspetivando o futuro das gerações consideradas jovens e observando o
					espaço mediático onde são feitas desde reflexões a previsões ou
					comentários sobre o que aí vem, dificilmente se encontra um
					interveniente que seja do escalão 'Sub 50'. Os mais jovens queixam-se
					de falta de oportunidades e do exercício de pensamento ser apenas
					focado no futuro a curto prazo, desconsiderando assim quem estará nos
					centros de decisões daqui a quinze ou vinte anos. Por outro lado, aos
					jovens são muitas vezes apontadas críticas de superficialidade ou de
					preguiça mental, que tem fundamentos razoáveis visto que são estes os
					que conseguem expressar um pensamento ou uma posição em dois 'tweets'
					e quatro 'emojis'.
				</p>
				<p className={styles.text}>
					A realidade estará certamente no meio destas duas perspetivas e neste
					contexto surge o Blog Jovens &o Futuro. Este é um espaço que é criado
					com dois grandes objetivos. O primeiro é oferecer uma plataforma onde
					a juventude possa expor as suas ideias, opiniões e reflexões sobre os
					demais temas de uma sociedade como a nossa. O outro objetivo é forçar
					e encorajar os jovens a raciocinar, investigar e refletir sobre os
					vários assuntos que compõem a sociedade e o nosso futuro.
					Infelizmente, os anos que se avizinham não parecem ser fáceis para
					ninguém e a torneira que escorraçou as gerações finais do século XX
					para um mundo de poucas oportunidades e baixos salários, tende a não
					fechar.
				</p>
				<div className={styles.btnSection}>
					<div className={styles.title}>
						<span>{`Já leste os artigos da última semana?`}</span>
					</div>
					<div className={styles.lastArtigos}>
						<ImageSlider
							autoPlay
							divs={lastArtigos.map(lastArtigo => {
								return (
									<div className={styles.findMore}>
										<Artigo artigo={lastArtigo} justHeader />
										<a
											href={`/artigos/${lastArtigo.attributes.slug}`}
											data-turbolinks='false'
										>
											<div className={styles.findMoreBtn}>
												<span>Lê-o aqui</span>
											</div>
										</a>
									</div>
								);
							})}
						/>
					</div>
				</div>
				<h2 className={styles.subtitle}>Jovens e Futuro?</h2>
				<p className={styles.text}>
					Será que o trilho que temos percorrido tem sido o correto? Quais os
					erros que foram cometidos para que o futuro das gerações mais jovens
					seja tão pouco próspero e limitado em termos de oportunidades? Como é
					que um economista se pode preparar para ser melhor que os seus
					predecessores? Terão os políticos as ferramentas intelectuais
					necessárias para responder aos desafios que o futuro e o presente
					trazem? Será a saúde mental uma epidemia silenciosa? Haverá a
					preservação do espaço moderado estando o mundo cada vez mais
					polarizado e intolerante? Que impacto poderá o desporto e a cultura
					ter nas gerações futuras? Por que motivo é tão difícil para um músico
					singrar em Portugal?
				</p>
				<p className={styles.text}>
					As dúvidas, interrogações e desafios que existem e por vezes
					persistem, parecem ser infinitos. As respostas decerto que não são
					fáceis ou simplistas, e, por conseguinte, é fundamental pensar,
					refletir e discutir as mesmas desde cedo.
				</p>
				<div className={styles.image}></div>
				<h2 className={styles.subtitle}>Jovens, o Futuro!</h2>
				<p className={styles.text}>
					Portugal com mais de quarenta anos de democracia, é hoje um dos países
					mais pobres da União Europeia e encaminha-se para num futuro próximo
					ser o mais pobre. Isto por si só merece uma reflexão nacional de
					todos, mas especialmente dos jovens, pois são estes que vão lidar com
					este paradigma e também liderá-lo. É uma inevitabilidade temporal que
					os que hoje nos governam em todas as áreas da sociedade, atinjam o seu
					fim nas suas funções. Os jovens são o futuro independentemente de irem
					ou não preparados para enfrentar os grandes desafios que o tempo
					trará.
				</p>
				<p className={styles.text}>
					A preparação dos intervenientes é uma das chaves para que o sucesso no
					desenvolvimento do país, se reflita num melhor quotidiano do cidadão
					português. É com alguma estupefação que apesar das gerações mais
					jovens irem academicamente mais apetrechadas, intelectualmente
					continuem muito limitadas na sua generalidade. O passado e o presente
					trazem-nos bons e maus exemplos, mas são claramente os maus que nos
					trouxeram ao paradigma atual. As reflexões críticas alicerçadas no
					passado e presente, mas pensadas para o futuro pelos que lá estarão,
					merecem ser incentivadas e ter o seu espaço. Este blog serve esse
					propósito porque os jovens são o futuro e têm de abordá-lo de uma
					melhor forma. Da política à economia, da saúde à cultura, todas as
					áreas exigem uma preparação melhorada que pode ser impulsionada
					através de reflexões escritas que este blog proporciona a todos os
					jovens.
				</p>
				<p className={styles.text}>
					O mote está dado e o espaço está criado. Já só falta a participação
					dos jovens para que tenhamos a capacidade de proporcionar um futuro
					mais próspero a todos.
				</p>
			</div>
		</div>
	);
}

import React, { useState } from 'react';
import ImageSlide from '../shared/ImageSlide';
import Logo from '../shared/Logo';
import axios from 'axios';

const styles = require('./Contacto.module.scss');

export default function Contacto() {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null,
	});

	const resetForm = () => {
		setName('');
		setPhone('');
		setEmail('');
		setMessage('');
	};

	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	const csrf = document
	// 		.querySelector("meta[name='csrf-token']")
	// 		.getAttribute('content');
	// 	if (name && phone && email && message) {
	// 		axios({
	// 			method: 'POST',
	// 			url: window.location.href,
	// 			data: { name, phone, email, message },
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				'X-CSRF-Token': csrf,
	// 			},
	// 		}).then(response => {
	// 			if (response.data.notice) {
	// 				alert(response.data.notice);
	// 				resetForm();
	// 			}
	// 		});
	// 	} else {
	// 		alert('Por favor insere todos os dados.');
	// 	}
	// };

	const handleServerResponse = (ok, msg) => {
		setServerState({
			submitting: false,
			status: { ok, msg },
		});
		if (ok) {
			resetForm();
		}
		alert(msg);
	};
	const handleOnSubmit = e => {
		e.preventDefault();
		const form = e.target;
		setServerState({ submitting: true, status: serverState.status });
		axios({
			method: 'post',
			url: 'https://formspree.io/mgerwzdg',
			data: new FormData(form),
		})
			.then(r => {
				handleServerResponse(
					true,
					'Obrigado por nos contactares! Vamos responder assim que possível!'
				);
			})
			.catch(r => {
				handleServerResponse(false, r.response.data.error);
			});
	};

	return (
		<div className={styles.container}>
			<Logo />
			<ImageSlide
				image={
					'https://images.unsplash.com/photo-1513735492246-483525079686?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
				}
			/>
			<div className={styles.container}>
				<div className={styles.topSection}>
					<h2 className={styles.leftText}>
						Queres oferecer o teu contributo para este Blog? Entra em contacto
						connosco!
					</h2>
					<form id='contact-form' onSubmit={handleOnSubmit}>
						<div className={styles.formGroup}>
							<input
								onChange={e => setName(e.target.value)}
								value={name}
								id='name'
								name='name'
								type='text'
								className={styles.formControl}
								placeholder='Nome'
							/>
						</div>
						<div className={styles.formGroup}>
							<input
								type='email'
								onChange={e => setEmail(e.target.value)}
								value={email}
								id='email'
								name='email'
								className={styles.formControl}
								aria-describedby='emailHelp'
								placeholder='Email'
							/>
						</div>
						<div className={styles.formGroup}>
							<input
								onChange={e => setPhone(e.target.value)}
								type='phone'
								id='phone'
								name='phone'
								value={phone}
								className={styles.formControl}
								placeholder='Telefone'
							/>
						</div>
						<div className={styles.formGroup}>
							<textarea
								onChange={e => setMessage(e.target.value)}
								placeholder='Mensagem'
								id='message'
								name='message'
								value={message}
								className={styles.formControl}
								rows={5}
							></textarea>
						</div>
						<button
							type='submit'
							disabled={serverState.submitting}
							className={styles.submitButton}
						>
							Submeter
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

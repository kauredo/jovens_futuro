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

	const handleSubmit = e => {
		e.preventDefault();
		const csrf = document
			.querySelector("meta[name='csrf-token']")
			.getAttribute('content');

		axios({
			method: 'POST',
			url: window.location.href,
			data: { name, phone, email, message },
			headers: {
				'Content-Type': 'application/json',
				'X-CSRF-Token': csrf,
			},
		}).then(response => {
			if (response.data.status === 'success') {
				alert('Message Sent.');
				this.resetForm();
			} else if (response.data.status === 'fail') {
				alert('Message failed to send.');
			}
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
					<form id='contact-form' onSubmit={handleSubmit} method='POST'>
						<div className={styles.formGroup}>
							<input
								onChange={e => setName(e.target.value)}
								value={name}
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
								className={styles.formControl}
								aria-describedby='emailHelp'
								placeholder='Email'
							/>
						</div>
						<div className={styles.formGroup}>
							<input
								onChange={e => setPhone(e.target.value)}
								type='phone'
								value={phone}
								className={styles.formControl}
								placeholder='Telefone'
							/>
						</div>
						<div className={styles.formGroup}>
							<textarea
								onChange={e => setMessage(e.target.value)}
								placeholder='Mensagem'
								value={message}
								className={styles.formControl}
								rows={5}
							></textarea>
						</div>
						<button type='submit' className={styles.submitButton}>
							Submeter
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

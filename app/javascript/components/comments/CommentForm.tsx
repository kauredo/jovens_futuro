import axios from 'axios';
import React, { useState } from 'react';
import { Comentario } from './Comments';

const styles = require('./CommentForm.module.scss');

interface Props {
	reply: boolean;
	commentId?: number;
	comments: any;
	setComments: any;
	setReply?: any;
	hide?: boolean;
}

export default function CommentForm(props: Props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [comment, setComment] = useState('');
	const [anon, setAnon] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const csrf = document
			.querySelector("meta[name='csrf-token']")
			.getAttribute('content');
		const url = `${window.location.href}/comment`;
		const finalName = anon ? 'Anónimo' : name;
		const finalEmail = anon ? 'anon@email.com' : email;
		const commentId = props.commentId || false;

		if (comment) {
			axios({
				method: 'POST',
				url: url,
				data: {
					reply: props.reply,
					parent_id: commentId,
					name: finalName,
					email: finalEmail,
					comment,
				},
				headers: {
					'Content-Type': 'application/json',
					'X-CSRF-Token': csrf,
				},
			}).then(response => {
				if (response.data.notice) {
					alert(response.data.notice);

					const newComment: Comentario = response.data.comment;
					props.setComments([...props.comments, newComment]);
					setName('');
					setEmail('');
					setComment('');
					props.reply && props.setReply(false);
				} else if (response.data.error) {
					alert(response.data.error);
				}
			});
		} else {
			alert('Por favor insere um comentário válido.');
		}
	};

	const formStyles = props.reply ? styles.replyForm : styles.form;

	return (
		<div
			style={{
				height: props.hide ? 0 : '295px',
				transition: 'all 0.2s ease-in-out',
			}}
		>
			<form
				style={{
					marginTop: props.hide ? '0' : '20px',
					marginBottom: props.hide ? '0' : '20px',
					opacity: props.hide ? 0 : 1,
					pointerEvents: props.hide ? 'none' : 'auto',
					transition: 'all 0.2s ease-in-out',
				}}
				className={formStyles}
				onSubmit={handleSubmit}
				method='POST'
			>
				<div
					style={{
						height: props.hide ? '0' : '37px',
						transition: 'all 0.2s ease-in-out',
					}}
					className={styles.formGroup}
				>
					<input
						disabled={anon}
						onChange={e => setName(e.target.value)}
						value={name}
						type='text'
						className={styles.formControl}
						placeholder='Nome'
					/>
				</div>
				<div
					style={{
						height: props.hide ? '0' : '37px',
						transition: 'all 0.2s ease-in-out',
					}}
					className={styles.formGroup}
				>
					<input
						disabled={anon}
						onChange={e => setEmail(e.target.value)}
						value={email}
						type='text'
						className={styles.formControl}
						placeholder='Email'
					/>
				</div>
				<div
					style={{
						height: props.hide ? '0' : '34px',
						transition: 'all 0.2s ease-in-out',
					}}
					className={styles.formGroup}
				>
					<input
						onChange={e => setAnon(!anon)}
						className={styles.checkbox}
						type='checkbox'
						value={anon ? 1 : 0}
					/>
					<label>Comentário Anónimo?</label>
				</div>
				<div
					style={{
						height: props.hide ? '0' : '97px',
						transition: 'all 0.2s ease-in-out',
					}}
					className={styles.formGroup}
				>
					<textarea
						onChange={e => setComment(e.target.value)}
						value={comment}
						className={styles.formControl}
						rows={5}
					></textarea>
				</div>
				<button type='submit' className={styles.submitButton}>
					Comentar
				</button>
			</form>
		</div>
	);
}

import React, { useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const styles = require('./Comments.module.scss');

export interface Comentario {
	id: number;
	attributes: {
		name: string;
		email: string;
		comment: string;
		created_at: Date;
		replies: Comentario[];
	};
}

interface Props {
	comments: Comentario[];
}

export default function Comments(props: Props) {
	const [comments, setComments] = useState(props.comments);
	const [newComment, setNewComment] = useState(false);

	return (
		<>
			<h2 className={styles.count}>{comments.length} Comentários</h2>
			{comments && (
				<div className={styles.comments}>
					{comments.map(comm => (
						<Comment key={comm.id} comment={comm} />
					))}
				</div>
			)}
			<div className={styles.bigForm}>
				<h3
					className={styles.fakeButton}
					onClick={() => setNewComment(!newComment)}
				>
					Adicionar Comentário
				</h3>
				<CommentForm
					hide={!newComment}
					reply={false}
					comments={comments}
					setComments={setComments}
				/>
			</div>
		</>
	);
}

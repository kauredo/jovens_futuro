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

	return (
		<div>
			<h2 className={styles.count}>{comments.length} Comentários</h2>
			<div className={styles.comments}>
				{comments.map(comm => (
					<Comment key={comm.id} comment={comm} />
				))}
			</div>
			<div>
				<CommentForm
					reply={false}
					comments={comments}
					setComments={setComments}
				/>
			</div>
		</div>
	);
}

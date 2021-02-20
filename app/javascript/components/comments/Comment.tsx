import React, { useState } from 'react';
import CommentForm from './CommentForm';
import { Comentario } from './Comments';

const styles = require('./Comment.module.scss');

interface Props {
	comment: Comentario;
}

export default function Comment(props: Props) {
	const comment = props.comment.attributes;
	const commentId = props.comment.id;
	const [replies, setReplies] = useState(comment.replies);
	const [reply, setReply] = useState(false);

	return (
		<div className={styles.commentAndReplies}>
			<div className={styles.comment}>
				<div className={styles.topBar}>
					<h3 className={styles.name}>{comment.name}</h3>
					<p className={styles.date}>{comment.created_at}</p>
				</div>
				<div className={styles.content}>{comment.comment}</div>
				<div className={styles.responder} onClick={() => setReply(!reply)}>
					Responder
				</div>
			</div>
			{reply && (
				<CommentForm
					reply={true}
					comments={replies}
					setComments={setReplies}
					commentId={commentId}
					setReply={setReply}
				/>
			)}
			{replies?.map(rep => (
				<div key={rep.id} className={styles.reply}>
					<div className={styles.topBar}>
						<h3 className={styles.name}>{rep.attributes.name}</h3>
						<p className={styles.date}>{rep.attributes.created_at}</p>
					</div>
					<div className={styles.content}>{rep.attributes.comment}</div>
				</div>
			))}
		</div>
	);
}

import React, { useState } from 'react';

const styles = require('./Pagination.module.scss');

interface Props {
	page: number;
	lastPage: number;
}

export default function Pagination(props: Props) {
	const currentPage = props.page;
	const lastPage = props.lastPage;
	let pages = [];
	for (let i = 1; i <= lastPage; i++) {
		pages.push(i);
	}

	const setCurrentPage = (event, page) => {
		event.preventDefault;
		const url = `${window.location.origin}/artigos?page=${page}`;
		window.location.href = url;
	};

	return (
		<div className={styles.pagination}>
			Paginação
			<div className={styles.paginationList}>
				<div className={currentPage === 1 ? styles.disabled : styles.item}>
					<a onClick={e => setCurrentPage(e, 1)}>Primeira</a>
				</div>
				<div className={currentPage === 1 ? styles.disabled : styles.item}>
					<a onClick={e => setCurrentPage(e, currentPage - 1)}>{'<'}</a>
				</div>

				{pages.map((page, index) => {
					return (
						<div
							key={index}
							className={
								page === currentPage
									? `${styles.active} ${styles.item}`
									: styles.item
							}
						>
							<a onClick={e => setCurrentPage(e, page)}>{page}</a>
						</div>
					);
				})}
				<div
					className={
						currentPage === props.lastPage ? styles.disabled : styles.item
					}
				>
					<a onClick={e => setCurrentPage(e, currentPage + 1)}>{'>'}</a>
				</div>
				<div
					className={
						currentPage === props.lastPage ? styles.disabled : styles.item
					}
				>
					<a onClick={e => setCurrentPage(e, props.lastPage)}>Última</a>
				</div>
			</div>
		</div>
	);
}

import React, { useState } from 'react';

const styles = require('./Pagination.module.scss');

interface Props {
	page: number;
	lastPage: number;
	perPage: number;
	total: number;
}

export default function Pagination(props: Props) {
	const currentPage = props.page;
	const lastPage = props.lastPage;
	const firstShowing = props.perPage * currentPage - props.perPage + 1;
	const lastShowing = props.perPage * currentPage;
	const showing = `${firstShowing}-${lastShowing} de ${props.total}`;

	let pages = [];
	for (let i = 1; i <= lastPage; i++) {
		pages.push(i);
	}

	const setCurrentPage = (event, page) => {
		const pageIndex = window.location.search.indexOf('page');
		const params =
			window.location.search === ''
				? `?page=${page}`
				: pageIndex === -1
				? `${window.location.search}&page=${page}`
				: `${window.location.search.substring(0, pageIndex)}page=${page}`;
		const url = `${window.location.origin}${window.location.pathname}${params}`;
		return (window.location.href = url);
	};

	return (
		lastPage > 1 &&
		currentPage <= lastPage && (
			<div className={styles.pagination}>
				Paginação ({showing})
				<div className={styles.paginationList}>
					<a onClick={e => setCurrentPage(e, 1)}>
						<div className={currentPage === 1 ? styles.disabled : styles.item}>
							Primeira
						</div>
					</a>
					<a onClick={e => setCurrentPage(e, currentPage - 1)}>
						<div className={currentPage === 1 ? styles.disabled : styles.item}>
							{'<'}
						</div>
					</a>

					{pages.map((page, index) => {
						return (
							<a key={index} onClick={e => setCurrentPage(e, page)}>
								<div
									className={
										page === currentPage
											? `${styles.active} ${styles.item}`
											: styles.item
									}
								>
									{page}
								</div>
							</a>
						);
					})}
					<a onClick={e => setCurrentPage(e, currentPage + 1)}>
						<div
							className={
								currentPage === props.lastPage ? styles.disabled : styles.item
							}
						>
							{'>'}
						</div>
					</a>
					<a onClick={e => setCurrentPage(e, props.lastPage)}>
						<div
							className={
								currentPage === props.lastPage ? styles.disabled : styles.item
							}
						>
							Última
						</div>
					</a>
				</div>
			</div>
		)
	);
}

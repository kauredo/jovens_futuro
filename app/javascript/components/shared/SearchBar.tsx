import React, { useEffect, useRef, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
	connectHits,
	InstantSearch,
	SearchBox,
	// Hits,
	Highlight,
} from 'react-instantsearch-dom';

const styles = require('./SearchBar.module.scss');

const searchClient = algoliasearch(
	process.env.ALGOLIA_ID,
	process.env.SEARCH_ALGOLIA_KEY
);

const Hits = ({ hits, showHits }) => (
	<ol className={`${styles.innerbox} ${showHits && styles.seen}`}>
		{hits.map(hit => (
			<li key={hit.objectID}>
				<a href={hit.url}>
					<h5 className={styles.title}>
						{hit.title} - {hit.categoria}
					</h5>
					<p className={styles.colaborators}>{hit.all_colaborators}</p>
					<p className={styles.contents}>{hit.content.substring(0, 200)}</p>
				</a>
			</li>
		))}
	</ol>
);

const CustomHits = connectHits(Hits);

export default function SearchBar() {
	const searchRef = useRef(null);
	const [showHits, setShowHits] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		const input = searchRef.current;
		console.log(input.children[0].children[0].children[0]);
		if (
			!input.children[0] ||
			input.children[0].children[0].children[0].value === ''
		) {
			setShowHits(false);
		} else {
			setShowHits(true);
		}
	}, [searchValue, setSearchValue]);

	return (
		<InstantSearch indexName='Artigo_development' searchClient={searchClient}>
			<div className='right-panel'>
				<div ref={searchRef} className={styles.searchbox}>
					<SearchBox
						translations={{ placeholder: 'Pesquisa' }}
						autoFocus={false}
						onChange={e => setSearchValue(e.target.value)}
						onReset={e => setSearchValue(e.target.value)}
						onFocus={() => setShowHits(true)}
						onBlur={() => setShowHits(false)}
					/>
				</div>
				<CustomHits showHits={showHits} />
			</div>
		</InstantSearch>
	);
}

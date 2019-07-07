import React from 'react';

import Header from './Header';

class SearchData extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			'user': ''
		};
	}

	onChangeHandler = (e) => {
		this.setState({
			user: e.target.value
		});
	}

	render() {
		return (
			<div className="search">
				<div className="home">
					<p>Search : </p>
					<div className="user">
						<input
							type="text"
							name="user"
							onChange={this.onChangeHandler}
						/>
					</div>
					<Header
						name={this.state.user}
					/>
				</div>
			</div>
		);
	}
}

export default SearchData;

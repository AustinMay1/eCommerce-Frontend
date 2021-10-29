import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'Hoodies',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.setSearchCategory(this.state.category);
    }

    render() {
        return (
            <React.Fragment>
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label htmlFor='category'>Choose a filter:</label>
                    <select name='category' value={this.state.category} onChange={this.handleChange}>
                        <option value='Hoodies'>Hoodies</option>
                        <option value='Pants'>Pants</option>
                        <option value='Shirts'>Shirts</option>
                    </select>
                    <button className="btn btn-outline-success" type="submit">Filter</button>
                </form>
            </div>
            </React.Fragment>
        );
    }
}

export default Filter;
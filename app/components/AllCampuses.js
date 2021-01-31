import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { fetchCampuses, deleteCampus } from '../reducers/campus.js';
import CreateCampus from './CreateCampus';

// This component displays all campuses in database, including only image and name
class AllCampuses extends Component {
    // Fetch campus data
    componentDidMount () {
        this.props.init();

        this.handleDelete = this.handleDelete.bind(this);
    }

    async handleDelete (event, id) {
        event.preventDefault()
        await this.props.delete(id)
        this.props.init();
    }

    render () {
        // Grab campus data that we initialized on mount
        const { campuses } = this.props;
        const { handleDelete } = this;

        return (
            <div>
                <CreateCampus/>
                <ul>
                    { campuses.map(campus => {
                        return (
                            <li key={ campus.id }>
                                <button type='button' onClick={ event => handleDelete(event, campus.id) }>X</button>
                                {/* Contains Link to individual campus */}
                                <Link to={'/campuses/' + campus.id}>{ campus.name }</Link>
                                <img src={ campus.imageUrl }/>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ campuses: state.campuses.campuses });

const mapDispatchToProps = (dispatch) => ({
        init: () => dispatch(fetchCampuses()),
        delete: (id) => dispatch(deleteCampus(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
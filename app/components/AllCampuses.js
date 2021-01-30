import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { fetchCampuses } from '../reducers/campus.js';

// This component displays all campuses in database, including only image and name
class AllCampuses extends Component {
    // Fetch campus data
    componentDidMount () {
        this.props.init();
    }

    render () {
        // Grab campus data that we initialized on mount
        const { campuses } = this.props;

        return (
            <div>
                <ul>
                    { campuses.map(campus => {
                        return (
                            <li key={ campus.id }>
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
        init: () => dispatch(fetchCampuses())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
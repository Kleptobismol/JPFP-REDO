import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampus } from '../reducers/campus';

// Message displayed when no students are found
const noStudentsMessage = `
    Unfortunately, this institution does not have any students. Apply today, and you could be their first!
`
// This stateful component displays a single campus
class SingleCampus extends Component {
    componentDidMount() {
        // Fetch data of selected campus
        this.props.init(this.props.match.params.id)
    }

    render () {
        // Grab campus data initialized on mount
        const { campus } = this.props

        // Render is executed first, this block allows componentDidMount to fetch the necessary data before we render
        if (!campus.name) {
            return null
        }

        return (
            <div>
                <h1>{ campus.name }</h1>
                <img src={ window.location.origin + '/' + campus.imageUrl }/>
                <h3>{ campus.address }</h3>
                <p>{ campus.description }</p>
                <h2>{ campus.students.length > 0 ? 'Students' : noStudentsMessage }</h2>
                { campus.students.length > 0 ?
                    campus.students.map(student => {
                        return (
                            <Link key={ student.id }to={'/students/' + student.id}>{ student.firstName } { student.lastName }</Link>
                        )
                }) : null
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ campus: state.campuses.selectedCampus })

const mapDispatchToProps = (dispatch) => ({
    init: (id) => dispatch(fetchCampus(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
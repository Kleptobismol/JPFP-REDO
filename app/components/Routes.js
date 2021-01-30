import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav'
import Root from './Home'
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

// This component holds our Route functionality, allowing the user to navigate to different pages from the Navbar
export default function Routes () {
    return (
        <Router>
            <div>
                <Route component={ Nav }/>
                <Switch>
                    <Route exact path="/" component={ Root } />
                    <Route exact path="/campuses" component={ AllCampuses } />
                    <Route exact path="/students" component={ AllStudents } />
                    <Route exact path='/campuses/:id' component={ SingleCampus }/>
                    <Route exact path='/students/:id' component={ SingleStudent }/>
                </Switch>
            </div>
        </Router>
    )
}




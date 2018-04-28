import React from 'react';
import { getPictures } from './../actions/pictures';
import { connect } from 'react-redux';
import _ from 'lodash';

class Home extends React.Component {

    componentDidMount() {
        this.props.getPictures();
    }

    render() {
        return (
            <div>
                Homepage :)
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        // my props attribute: state from app that will be appended to my props attribute
        pictures: state.pictures
    }
}

export default connect(mapStateToProps, {
    getPictures
})(Home);
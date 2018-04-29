import React from 'react';
import { getPictures } from './../actions/pictures';
import { connect } from 'react-redux';
import _ from 'lodash';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.page = 1;
        this.pageSize = 5;
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        this.props.getPictures(this.page, this.pageSize);
        window.addEventListener('scroll', _.throttle(this.onScroll, 300), false)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', _.throttle(this.onScroll, 300), false)
    }

    onScroll() {
        if (
          (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
          this.props.pictures.pictureIds.length
        ) {
            this.page++;
            this.props.getPictures(this.page, this.pageSize);
        }
    }

    render() {
        return (
            <div>
                <h2>Homepage :)</h2>
                <div>
                    { this.props.pictures.pictureIds.length === 0 ? 
                        'Empty':
                        this.props.pictures.pictureIds.map((id,idx) => <div key={idx}>Id: {id}</div>)
                    }
                </div>
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
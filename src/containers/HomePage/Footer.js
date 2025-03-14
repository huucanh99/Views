import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomePage.scss';
class Footer extends Component {

    render() {
        return (
            <div className='section-share section-footer'>
                <p>&copy; 2025 Make by Huu Canh Zalo: 0862050536 </p>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

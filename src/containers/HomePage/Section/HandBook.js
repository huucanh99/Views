import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HomePage.scss';
import Slider from "react-slick";
class HandBook extends Component {

    render() {

        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>HandBook</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'></div>
                                <div>HandBook1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'></div>
                                <div>HandBook2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'></div>
                                <div>HandBook3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'></div>
                                <div>HandBook4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'></div>
                                <div>HandBook5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'></div>
                                <div>HandBook6</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'></div>
                                <div>HandBook7</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);

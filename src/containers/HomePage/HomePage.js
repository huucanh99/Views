import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import HandBook from './Section/HandBook';
import MedicalFacility from './Section/MedicalFacility';
import OutstandingDoctor from './Section/OutstandingDoctor';
import AboutUs from './AboutUs';
import Footer from './Footer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: <FaChevronLeft className="custom-prev-arrow" />,  // Thay nút "prev"
            nextArrow: <FaChevronRight className="custom-next-arrow" />  // Thay nút "next"
        };
        return (
            <div>
                <HomeHeader />
                <Specialty settings={settings} />
                <HandBook settings={settings} />
                <OutstandingDoctor settings={settings} />
                <MedicalFacility settings={settings} />
                <AboutUs />
                <Footer />
                {/* <div style={{ height: '300px' }}></div> */}

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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomePage.scss';
class AboutUs extends Component {

    render() {
        return (
            <div className='section-share section-about'>
                <div className='content-left'>
                    <iframe width="100%" height="450px" src="https://www.youtube.com/embed/cFcUBX_aNW8" title="Khám sức khỏe tổng quát định kỳ tại CarePlus" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='content-right'>
                    <p>
                        Y tế là một ngành quan trọng trong xã hội, giúp duy trì sức khỏe và chất lượng cuộc sống của con người. Các dịch vụ y tế bao gồm từ khám bệnh, điều trị bệnh, chăm sóc sức khỏe định kỳ, đến phòng ngừa các bệnh lý nguy hiểm. Phòng khám là cơ sở y tế cung cấp các dịch vụ chăm sóc sức khỏe ban đầu, từ các bệnh thông thường như cảm cúm, đau bụng, đến các vấn đề sức khỏe phức tạp hơn.

                        Các bác sĩ tại phòng khám đóng vai trò quan trọng trong việc chẩn đoán và điều trị các bệnh lý, đồng thời tư vấn cho bệnh nhân về các biện pháp phòng ngừa để giữ gìn sức khỏe lâu dài. Hệ thống phòng khám hiện nay phát triển mạnh mẽ và đa dạng, không chỉ tại các bệnh viện mà còn ở các cơ sở y tế tư nhân, đáp ứng nhu cầu khám chữa bệnh của người dân mọi lúc, mọi nơi.



                    </p>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions";
import './UserRedux.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageUser from './TableManageUser';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false,
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '',
            role: '',
            position: '',
            avatar: null
        };
    }

    componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            const arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders.length > 0 ? arrGenders[0].key : ''
            });
        }

        if (prevProps.roleRedux !== this.props.roleRedux) {
            const arrRoles = this.props.roleRedux;
            this.setState({
                roleArr: arrRoles,
                role: arrRoles.length > 0 ? arrRoles[0].key : ''
            });
        }

        if (prevProps.positionRedux !== this.props.positionRedux) {
            const arrPositions = this.props.positionRedux;
            this.setState({
                positionArr: arrPositions,
                position: arrPositions.length > 0 ? arrPositions[0].key : ''
            });
        }

        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                gender: '',
                role: '',
                position: '',
                avatar: null
            })
        }
    }

    handleOnChangeImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                avatar: file
            });
        }
    };

    openPreviewImage = () => {
        if (this.state.previewImgURL) {
            this.setState({ isOpen: true });
        }
    };

    handleSaveUser = () => {
        if (!this.checkValidateInput()) return;

        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position
        });
    };

    checkValidateInput = () => {
        const requiredFields = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber'];
        for (let field of requiredFields) {
            if (!this.state[field]) {
                alert(`This input is required: ${field}`);
                return false;
            }
        }
        return true;
    };

    onChangeInput = (event, id) => {
        this.setState({ [id]: event.target.value });
    };

    render() {
        const { language } = this.props;
        const { email, password, firstName, lastName, phoneNumber, address, gender, position, role, previewImgURL } = this.state;

        const genderOptions = this.state.genderArr.map((item, index) => (
            <option key={index} value={item.key}>
                {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
            </option>
        ));

        const positionOptions = this.state.positionArr.map((item, index) => (
            <option key={index} value={item.key}>
                {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
            </option>
        ));

        const roleOptions = this.state.roleArr.map((item, index) => (
            <option key={index} value={item.key}>
                {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
            </option>
        ));

        return (
            <div className="user-redux-container">
                <div className="title">User Redux</div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <FormattedMessage id="manage-user.add" />
                            </div>

                            {/* Email */}
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.email" />
                                </label>
                                <input className="form-control" type="email" value={email} onChange={(event) => this.onChangeInput(event, 'email')} />
                            </div>

                            {/* Password */}
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.password" />
                                </label>
                                <input className="form-control" type="password" value={password} onChange={(event) => this.onChangeInput(event, 'password')} />
                            </div>

                            {/* First Name */}
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.first-name" />
                                </label>
                                <input className="form-control" type="text" value={firstName} onChange={(event) => this.onChangeInput(event, 'firstName')} />
                            </div>

                            {/* Last Name */}
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.last-name" />
                                </label>
                                <input className="form-control" type="text" value={lastName} onChange={(event) => this.onChangeInput(event, 'lastName')} />
                            </div>

                            {/* Phone Number */}
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.phone-number" />
                                </label>
                                <input className="form-control" type="text" value={phoneNumber} onChange={(event) => this.onChangeInput(event, 'phoneNumber')} />
                            </div>

                            {/* Address */}
                            <div className="col-9">
                                <label>
                                    <FormattedMessage id="manage-user.address" />
                                </label>
                                <input className="form-control" type="text" value={address} onChange={(event) => this.onChangeInput(event, 'address')} />
                            </div>

                            {/* Gender */}
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.gender" />
                                </label>
                                <select
                                    className="form-control" onChange={(event) => this.onChangeInput(event, 'gender')}
                                >
                                    {genderOptions}
                                </select>
                            </div>

                            {/* Position */}
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.position" />
                                </label>
                                <select
                                    className="form-control" onChange={(event) => this.onChangeInput(event, 'position')}
                                >
                                    {positionOptions}
                                </select>
                            </div>

                            {/* Role */}
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.role" />
                                </label>
                                <select
                                    className="form-control" onChange={(event) => this.onChangeInput(event, 'role')}
                                >
                                    {roleOptions}
                                </select>
                            </div>

                            {/* Image */}
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.image" />
                                </label>
                                <div className='preview-img-container'>
                                    <input id='previewImg' type='file' hidden onChange={(event) => this.handleOnChangeImage(event)} />
                                    <label className='label-upload' htmlFor='previewImg'>
                                        <FormattedMessage id="manage-user.uploadimg" /> <i className='fas fa-upload'></i>
                                    </label>
                                    <div className='preview-image' style={{ backgroundImage: `url(${previewImgURL})` }} onClick={this.openPreviewImage}></div>
                                </div>
                            </div>

                            {/* Save Button */}
                            <div className="col-12 my-3 button-save">
                                <button className="btn btn-primary" onClick={this.handleSaveUser}>
                                    <FormattedMessage id="manage-user.save" />
                                </button>
                            </div>
                            <div className='col-12 mb-5'>
                                <TableManageUser />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Lightbox for image preview */}
                {this.state.isOpen && (
                    <Lightbox mainSrc={previewImgURL} onCloseRequest={() => this.setState({ isOpen: false })} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

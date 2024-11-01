import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUser } from '../../services/userService';
import './UserManage.scss';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }


    async componentDidMount() {
        let respone = await getAllUser('ALL');
        console.log(`This is all users: `, respone)
        if (respone && respone.errCode === 0) {
            this.setState({
                arrUsers: respone.user
            })
        }
    }


    render() {
        let arrUsers = this.state.arrUsers
        return (
            <div className='users-container'>
                <div className="title text-center">Manage users with beodeptraiok?</div>
                <div className='users-table mt-3 mx-1'>
                    <table id='customers'>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {arrUsers && arrUsers.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className='btn-edit'><i className='fas fa-pencil-alt'></i></button>
                                        <button className='btn-delete'><i className='fas fa-trash'></i></button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

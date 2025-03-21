import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUser, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import './UserManage.scss';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }


    async componentDidMount() {
        await this.getAllUserFromReact();
    }
    getAllUserFromReact = async () => {
        let respone = await getAllUser('ALL');
        if (respone && respone.errCode === 0) {
            this.setState({
                arrUsers: respone.user
            })
        }
    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    toggleEditUserModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }
    createNewUser = async (data) => {
        try {
            let respone = await createNewUserService(data);
            if (respone && respone.errCode !== 0) {
                alert(respone.message)
            } else {
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (error) {
            console.log(error)
        }
    }
    handleDeleteUser = async (id) => {
        try {
            let res = await deleteUserService(id);
            if (res && res.errCode === 0) {
                await this.getAllUserFromReact();
            }
            else {
                alert(res.message)
            }
        } catch (error) {
            console.log(error);
        }
    }
    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
            userEdit: user
        })
    }
    doEditUser = async (user) => {
        try {
            let res = await editUserService(user);
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                })
                await this.getAllUserFromReact();
            } else {
                console.log(res.message)
            }
        } catch (error) {
            console.log(error)
        }


    }
    render() {
        let arrUsers = this.state.arrUsers
        return (
            <div className='users-container'>
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {
                    this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromParent={this.toggleEditUserModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}
                    />
                }

                <div className="title text-center">Manage users with beodeptraiok?</div>
                <div className='mx-1 btn-add-user'>
                    <button className='btn btn-primary px-3' onClick={() => this.handleAddNewUser()}><i className='fas fa-plus mr-2'></i>Add new user</button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table id='customers'>
                        <tbody>
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
                                            <button className='btn-edit' onClick={() => this.handleEditUser(item)}><i className='fas fa-pencil-alt'></i></button>
                                            <button className='btn-delete' onClick={() => this.handleDeleteUser(item.id)}><i className='fas fa-trash'></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
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

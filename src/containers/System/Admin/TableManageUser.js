import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions";
import './TableManageUser.scss';

class TableManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersRedux: []
        };
    }

    componentDidMount() {
        // Fetch all users when component mounts
        this.props.fetchUserRedux();
    }

    componentDidUpdate(prevProps) {
        // Update state if new users list is passed from Redux
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            });
        }
    }

    handleDeleteUser = (user) => {
        // Call delete action when delete button is clicked
        this.props.deleteUserRedux(user.id);
    };
    hadnleEditUser = (user) => {
        console.log('check user from table', user)
        this.props.handleEditUserFromParentKey(user)
    }

    render() {
        let arrUsers = this.state.usersRedux;

        return (
            <div className="TableManageUser-container">
                <table className="TableManageUser">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrUsers && arrUsers.length > 0 ? (
                            arrUsers.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className='btn-edit' onClick={() => this.hadnleEditUser(item)}>
                                            <i className='fas fa-pencil-alt'></i>
                                        </button>
                                        <button onClick={() => this.handleDeleteUser(item)} className='btn-delete'>
                                            <i className='fas fa-trash'></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">
                                    No users available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users // Assuming the state is structured with users under `admin`
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()), // Action to fetch users
        deleteUserRedux: (id) => dispatch(actions.deleteUser(id)) // Action to delete a user
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);

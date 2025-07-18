import React, { Component, use } from 'react'
import styles from './UserList.module.css'
import UserListItem from './UserListItem'
import dataUsers from './dataUser.json'

class UserList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
		}
		this.isSelected = false
	}

	componentDidMount() {
		this.setState({ users: dataUsers })
	}

	userSelected = (userId) => {
		const { users } = this.state
		const foundUser = users.findIndex((user) => user.id === userId)

		const newUsers = [...users]
		newUsers[foundUser] = {
			...users[foundUser],
			isSelected: !users[foundUser].isSelected,
		}
		this.setState({
			users: newUsers,
		})
	}

	userDeleted = (userId) => {
		const { users } = this.state
		const foundUser = users.findIndex((user) => user.id === userId)
		const newUsers = [...users]
		if (users[foundUser].isSelected) {
			newUsers.splice(foundUser, 1)
			this.setState({
				users: newUsers,
			})
		} else {
			alert('You must select the user before deleting it.')
		}
	}

	render() {
		return (
			<ul className={styles.UserList}>
				{this.state.users.map((user) => (
					<li
						key={user.id}
						className={styles.UserListItem}
						style={{ border: user.isSelected ? '1px solid green' : '' }}
						onClick={() => this.userSelected(user.id)}
					>
						<UserListItem user={user} userDeleted={this.userDeleted} />
					</li>
				))}
			</ul>
		)
	}
}

export default UserList

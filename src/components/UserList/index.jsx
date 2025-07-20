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
		newUsers.splice(foundUser, 1)
		this.setState({
			users: newUsers,
		})
	}

	render() {
		return (
			<ul className={styles.userList}>
				{this.state.users.map((user) => (
					<UserListItem
						user={user}
						userDeleted={this.userDeleted}
						userSelected={this.userSelected}
						isSelected={user.isSelected}
						key={user.id}
					></UserListItem>
				))}
			</ul>
		)
	}
}

export default UserList

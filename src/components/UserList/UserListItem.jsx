import React, { Component } from 'react'
import styles from './UserListItem.module.css'
import CgTrashEmpty from './CgTrashEmpty.jsx'

class UserListItem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user: props.user,
			userDeleted: props.userDeleted,
		}
	}

	fullName = () => {
		return `${this.state.user.firstName.trim()} ${this.state.user.lastName.trim()}`
	}

	render() {
		const { user } = this.state
		const { userDeleted } = this.props
		return (
			<>
				<div className={styles.UserListItemInfo}>
					<img src={user.imgSrc} className={styles.UserListItemInfoImg} />
					<div className={styles.UserListItemInfoText}>
						<h3 className={styles.UserListItemInfoTextName}>
							{this.fullName()}
						</h3>
						<p className={styles.UserListItemInfoTextAge}>
							{user.age} years old
						</p>
					</div>
				</div>
				<button
					className={styles.UserListItemDeleteBtn}
					onClick={(e) => {
						e.stopPropagation()
						userDeleted(user.id)
					}}
				>
					<CgTrashEmpty />
				</button>
			</>
		)
	}
}

export default UserListItem

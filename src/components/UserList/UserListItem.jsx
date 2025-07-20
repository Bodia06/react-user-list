import React, { Component } from 'react'
import styles from './UserListItem.module.css'
import CgTrashEmpty from './CgTrashEmpty.jsx'

class UserListItem extends Component {
	fullName = () => {
		const { firstName, lastName } = this.props.user
		return `${firstName.trim()} ${lastName.trim()}`
	}

	render() {
		const { user, userDeleted, userSelected } = this.props

		return (
			<li
				className={styles.userListItem}
				style={{ border: user.isSelected ? '1px solid green' : '' }}
				onClick={() => userSelected(user.id)}
			>
				<div className={styles.userListItemInfo}>
					<img src={user.imgSrc} className={styles.userListItemInfoImg} />
					<div className={styles.userListItemInfoText}>
						<h3 className={styles.userListItemInfoTextName}>
							{this.fullName()}
						</h3>
						<p className={styles.userListItemInfoTextAge}>
							{user.age} years old
						</p>
					</div>
				</div>
				<button
					className={styles.userListItemDeleteBtn}
					onClick={(e) => {
						e.stopPropagation()
						userDeleted(user.id)
					}}
				>
					<CgTrashEmpty />
				</button>
			</li>
		)
	}
}

export default UserListItem

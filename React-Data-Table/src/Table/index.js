import React, { Component } from 'react'
import PropTypes from 'proptypes'
import './style.css'

export class Table extends Component {

    PropTypes = {
        data: PropTypes.array,
    }

    state = {
        data: []
    }

    renderRequest = () => {
        const { data } = this.props
        return data.map((user) => {
            return <tr key={user.id + 1}className={user.address.city === "Howemouth" ? "tableRow tableRed" : "tableRow tableGray"}>
                <td key={user.id}>{user.id}</td>
                <td key={user.name}>{user.name}</td>
                <td key={user.username}>{user.username}</td>
                <td key={user.email}>{user.email}</td>
                <td key={user.address.street}>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</td>
                <td key={user.phone}>{user.phone}</td>
                <td key={user.website}>{user.website}</td>
                <td key={user.company.name}>{user.company.name}, {user.company.catchPhrase}, {user.company.bs}</td>
            </tr>
        })
    }

    render() {

        return (
            <div className="resultTable">
                <table>
                    <caption>Таблица с результатами запроса</caption>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>address</th>
                            <th>phone</th>
                            <th>website</th>
                            <th>company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRequest()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table


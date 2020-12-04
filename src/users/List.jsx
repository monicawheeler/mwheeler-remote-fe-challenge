import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/layout/page-header.css';
import '../styles/components/button.css';
import '../styles/components/table.css';

import { userService } from '@/_services';

function List({ match }) {
    const { path } = match;
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    return (
        <main className="global-container">
            <div className="page-header">
                <div className="page-header__inner">
                    <h2 className="page-header__title t-display">People</h2>
                    {/* TODO - get length of users array here */}
                    <p className="page-header__caption t-caption-small">employees</p>
                </div>
                <Link className="page-header__action button button--callout" to={`${path}/add`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" role="presentation"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
                    <span className="page-header__action-text">Add employee</span>
                </Link>
            </div>
            <div
                className="table" 
                role="table"
                aria-label="Employees"
                aria-describedby="Employees_table_desc">
                <div className="sr-only" id="Employees_table_desc">
                    List of employees which allows you to edit and review their information
                </div>

                <div className="table__thead" role="rowgroup">
                    <div className="table__grid-row" role="row">
                        <span className="table__col-heading t-column-heading" role="columnheader">Employee</span>
                        <span className="table__col-heading t-column-heading" role="columnheader">Job Title</span>
                        <span className="table__col-heading t-column-heading" role="columnheader">Country</span>
                        <span className="table__col-heading t-column-heading" role="columnheader">Salary</span>
                    </div>
                </div>

                <div className="table__tbody" role="rowgroup">
                    {users && users.map(user =>
                        <div key={user.id} className="table__data-row table__grid-row" role="row">
                            <span role="cell">
                                <h2 className="table__row-heading t-row-heading">{user.name}</h2>
                                <p className="t-caption">{user.birthdate}</p>
                            </span>
                            <span className="t-body" role="cell">{user.jobTitle}</span>
                            <span className="t-body" role="cell">{user.country}</span>
                            <span className="t-body" role="cell">
                                {user.salary} USD <span className="t-caption-small">per year</span>
                            </span>
                            <span className="t-body" role="cell">
                                <Link to={`${path}/edit/${user.id}`} className="button button--outlined">Edit</Link>
                            </span>
                        </div>
                    )}
                    {!users &&
                        <div className="table__data-row table__grid-row" role="row">
                            <span colSpan="4">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </span>
                        </div>
                    }
                    {users && !users.length &&
                        <div className="table__data-row table__grid-row" role="row">
                            <span colSpan="5">
                                <div>No Users To Display</div>
                            </span>
                        </div>
                    }
                </div>
            </div>
        </main>
    );
}

export { List };
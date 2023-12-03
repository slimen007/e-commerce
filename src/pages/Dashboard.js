import {Link} from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import Inbox from './Inbox';
import AddWork from './AddWork';
import Ordes from './Ordes';
import Files from './Files'; 
import { useState } from 'react';

export default function Dashboard(props) {
    const { logout } = props;
    const [page, setPage] = useState(<AddWork />)
    return (
        <div className='dashboard'>
            <ul className="nav justify-content-center border-bottom border-primery">
                <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page"><i className="bi bi-house-door-fill" />Home</Link>
                </li>
                <li className="nav-item">
                    <button onClick={() => setPage(<AddWork />)} className="nav-link" ><i className="bi bi-plus-circle-fill" />Add work</button>
                </li>
                <li className="nav-item">
                    <button onClick={() => setPage(<Inbox />)} className="nav-link" ><i className="bi bi-inbox" />Inbox</button>
                </li>
                <li classname="nav-item">
                    <button onClick={() => setPage(<Ordes />)} classname="nav-link" ><i classname="bi bi-bag-check-fill" />Ordes</button>
                </li>
                <li classname="nav-item">
                    <button button onClick={() => setPage(<Files/>)} classname="nav-link" ><i classname="bi bi-bag-check-fill" /> Files</button>
                </li>

                <li className="nav-item">
                    <Link to="/log in" className="nav-link"><button className="btn btn-link" onClick={logout}> <i className="bi bi-box-arrow-left" /> logout</button></Link>
                </li>
            </ul>
            <div className='container'>
                {page}
            </div>


        </div>
    )
}

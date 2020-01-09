import React from 'react';
import "./Pagination.css";
import PropTypes from 'prop-types';


function Pagination(props) {
    let getClass = (status) => {
        let classNames = "noselect";
        if(status)
            classNames += " disable";
        return classNames;
    }

    return (
        <div className="pagination">
            <a onClick={props.decrement} className={getClass(props.disableDecrement)}>❮</a>
            <a onClick={props.increment} className={getClass(props.disableIncrement)}>❯</a>
        </div>
    )
}

Pagination.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    disableIncrement: PropTypes.bool.isRequired,
    disableDecrement: PropTypes.bool.isRequired
}


export default Pagination;
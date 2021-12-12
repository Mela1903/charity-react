import React from 'react';

const Pagination = ({ organisationsPerPage, totalOrganisations, paginate, currentPage }) => {
    const pageNumbers =[];

    if (totalOrganisations / organisationsPerPage > 1 ){
        for (let i = 1; i <= Math.ceil(totalOrganisations / organisationsPerPage); i++) {
            pageNumbers.push(i);
        }
    } else {
        paginate(1);
    }

    return (
        <nav >
            <ul className='flex pagination'>
                {pageNumbers.map(number => (
                    <li key={number} >
                        <a href='#help'
                           onClick={() => paginate(number)}
                           className={currentPage === number && "active"}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
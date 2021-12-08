import React, {useEffect, useState} from 'react';
import {db} from "../firebase";
import {collection, getDocs} from 'firebase/firestore'
import Organisations from "./Organisations";
import Pagination from "./Pagination";

const Help = () => {
    const [organisations, setOrganisations] = useState([]);
    const organisationsCollectionRef = collection(db, 'organisations');
    const [currentPage, setCurrentPage] = useState(1);
    const [organisationsPerPage, setOrganisationsPerPage] = useState(3);
    const [current, setCurrent] = useState("foundations")
    const [orgList, setOrgList] = useState([]);

    useEffect(() => {
        const getOrganisations = async () => {
            const data = await getDocs(organisationsCollectionRef);
            const orgMap = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setOrganisations(orgMap);
            setOrgList(orgMap.filter(el => el.category === current));
        };
        getOrganisations();
    }, [])

    const handleCurrent = name => () => {
        setCurrent(name)
    }

    useEffect( () => {
        const currentList = organisations.filter(el => el.category === current);
        setOrgList(currentList);
    }, [current])

    const indexOfLastOrganisation = currentPage * organisationsPerPage;
    const indexOfFirstOrganisation = indexOfLastOrganisation - organisationsPerPage;
    const currentOrganisations = orgList.slice(indexOfFirstOrganisation, indexOfLastOrganisation);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='flex help' id='help'>
            <div>
                <h2 className='headers_text'>Komu pomagamy?</h2>
                <img src={require('../assets/Decoration.svg').default} alt='Decoration'/>
                <div className='help__who'>
                    <button onClick={handleCurrent("foundations")} className='btn btn__help'>Fundacjom</button>
                    <button onClick={handleCurrent("organisations")} className='btn btn__help'>Organizacjom pozarządowym</button>
                    <button onClick={handleCurrent("locals")} className='btn btn__help'>Lokalnym zbiórkom</button>
                </div>
                <div className='help__description'>
                    <p className='help__description-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed</p>
                    <p className='help__description-text'>do eiusmod tempor incididunt ut labore et dolore magna</p>
                    <p className='help__description-text'>aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.</p>
                </div>
                <Organisations organisations={currentOrganisations} />
                <Pagination
                    organisationsPerPage={organisationsPerPage}
                    totalOrganisations={orgList.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};

export default Help;
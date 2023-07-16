import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Projects.module.css';
import projects from '../../../Assets/projects.json';

export const Projects = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 1;

    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        setCurrentPage(selectedPage);
    };

    const displayedProjects = projects.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage
    );

    return (
        <div className={styles.portfolio}>
            <h1>Proyectos</h1>

            {displayedProjects.map((project) => (
                <div key={project.id} className={styles.project}>
                    <div className={styles.image_portfolio}>
                        <img src={project.image} alt="Project" className={styles.img_portfolio} />
                    </div>
                    <div className={styles.card_portfolio}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <p>{project.tech}</p>
                        <a href={project.link} target='_blank'>
                            <button className={styles.button_projects}>
                                Repositorio
                            </button>
                        </a>
                        {/* <a href={project.web} target='_blank'>Web Site</a> */}
                    </div>
                </div>
            ))}

            <ReactPaginate className={styles.paginate}
                previousLabel={'←'}
                nextLabel={'→'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(projects.length / projectsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={styles.pagination}
                activeClassName={styles.active}
            />
        </div>
    );
};

export default Projects;

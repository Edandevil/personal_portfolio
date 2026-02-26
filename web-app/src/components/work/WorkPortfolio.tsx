"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import { getStrapiMedia } from '@/utils/strapi';

interface WorkPortfolioProps {
    projects: any[];
}

export default function WorkPortfolio({ projects = [] }: WorkPortfolioProps) {

    useEffect(() => {
        // Initialize Isotope
        setTimeout(() => {
            const Isotope = require('isotope-layout');
            const imagesLoaded = require('imagesloaded');

            const grid = document.querySelector('.grid');
            if (grid) {
                imagesLoaded(grid, function () {
                    new Isotope(grid, {
                        itemSelector: '.grid-item',
                        percentPosition: true,
                        masonry: {
                            columnWidth: '.grid-item',
                        }
                    });

                    // Filter items on button click
                    const filterButtons = document.querySelectorAll('.masonary-menu button');
                    filterButtons.forEach(button => {
                        button.addEventListener('click', () => {
                            const filterValue = button.getAttribute('data-filter');
                            const iso = new Isotope(grid, {
                                filter: filterValue
                            });

                            // Update active class
                            filterButtons.forEach(btn => btn.classList.remove('active'));
                            button.classList.add('active');
                        });
                    });

                    // Initial active class for "All" button
                    const allBtn = document.querySelector('.masonary-menu button[data-filter="*"]');
                    if (allBtn) {
                        allBtn.classList.add('active');
                    }
                });
            }
        }, 500); // Increased timeout slightly to ensure DOM is ready
    }, [projects]); // Re-run if projects change

    // Helper to extract category names
    const getCategoryNames = (project: any): string[] => {
        if (!project.categories) return [];

        // Handle Strapi v5 simplified relation (Array of objects)
        if (Array.isArray(project.categories)) {
            // Check if it's an array of strings (legacy/simple) or objects
            if (project.categories.length > 0 && typeof project.categories[0] === 'string') {
                return project.categories;
            }
            // Array of objects
            return project.categories.map((cat: any) => cat.name || cat.attributes?.name || '');
        }

        // Handle Strapi v4/v5 nested data (Relation)
        if (project.categories.data && Array.isArray(project.categories.data)) {
            return project.categories.data.map((cat: any) => cat.attributes?.name || cat.name || '');
        }

        // Handle Legacy nested JSON string/object
        if (typeof project.categories === 'string') {
            return project.categories.split(',');
        }

        // Fallback for object with categories property
        if (typeof project.categories === 'object' && project.categories.categories) {
            if (Array.isArray(project.categories.categories)) {
                return project.categories.categories;
            }
        }

        return [];
    };

    // Helper to process categories into class names
    const getCategoryClasses = (project: any) => {
        const categories = getCategoryNames(project);
        return categories
            .filter(c => c && typeof c === 'string')
            .map(c => c.trim().toLowerCase().replace(/\s+/g, '-'))
            .join(' ');
    };

    // Extract unique categories from all projects
    const allCategories = projects.reduce((acc: string[], project) => {
        const cats = getCategoryNames(project);

        cats.forEach(c => {
            if (!c || typeof c !== 'string') return;
            const trimmed = c.trim();
            if (trimmed && !acc.includes(trimmed)) {
                acc.push(trimmed);
            }
        });
        return acc;
    }, []).sort();

    return (
        <>
            <div className="tp-dark-wrapper">
                <div className="vz-project-inner-5-ptb tp-el-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="vz-project-inner-5-top d-flex justify-content-between align-items-center">
                                    <div className="vz-project-inner-5-tab">
                                        <div className="masonary-menu filter-button-group">
                                            <button className="tp-el-btn active" data-filter="*">All</button>
                                            {allCategories.map((cat, idx) => (
                                                <button
                                                    key={idx}
                                                    className="tp-el-btn"
                                                    data-filter={`.${cat.toLowerCase().replace(/\s+/g, '-')}`}
                                                >
                                                    {cat}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-20 grid">
                            {projects.map((project) => {
                                const categoryClasses = getCategoryClasses(project);
                                const imageUrl = getStrapiMedia(project.thumbnail?.url || project.thumbnail?.data?.attributes?.url);

                                return (
                                    <div
                                        key={project.id}
                                        className={`col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 grid-item ${categoryClasses}`}
                                    >
                                        <div className="vz-project-item mb-20">
                                            <div className="vz-project-content d-flex align-items-center justify-content-between">
                                                <h4 className="vz-project-title tp-el-post-title">
                                                    <Link href={`/work/${project.slug}`} prefetch={false}>
                                                        {project.title}
                                                    </Link>
                                                </h4>
                                                <span className="tp-el-post-meta">
                                                    {getCategoryNames(project)[0] && (
                                                        <>{getCategoryNames(project)[0]} / </>
                                                    )}
                                                    {project.year}
                                                </span>
                                            </div>
                                            <div className="vz-project-thumb">
                                                <Link href={`/work/${project.slug}`} prefetch={false}>
                                                    <div className="ripple-image tp-el-main-img">
                                                        {imageUrl ? (
                                                            <img
                                                                src={imageUrl}
                                                                alt={project.title}
                                                            />
                                                        ) : (
                                                            <div style={{ height: '300px', background: '#333' }}></div>
                                                        )}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

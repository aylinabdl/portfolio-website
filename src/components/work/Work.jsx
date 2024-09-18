import React from 'react';
import './work.css';

function Work({ image, title, subTitle, text, codeLink, liveLink, figmaLink }) {
    return (
        <div className='work-grid'>
            <div className='work-grid-image'>
                <img src={image} alt='image' />
            </div>
            <div className='work-grid-body'>
                <h2>{title}</h2>
                <h4>{subTitle}</h4>
                <p>{text}</p>

                <div className='work-grid-body-btn'>
                    {codeLink && <a href={codeLink} target="_blank" rel="noopener noreferrer">Behance</a>}
                    {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Live App</a>}
                    {figmaLink && <a href={figmaLink} target="_blank" rel="noopener noreferrer">Figma</a>}
                </div>

            </div>
        </div>
    );
}

export default Work;

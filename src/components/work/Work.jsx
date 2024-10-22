import './work.css';
import React, { useState } from 'react';
import Modal from '../Modal/Modal.jsx';

function Work({ image, title, subTitle, text, caseStudyImage, codeLink, liveLink, figmaLink, Dribblelink }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='work-grid'>
      <div className='work-grid-image'>
        <img src={image} alt='project' />
      </div>
      <div className='work-grid-body'>
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
        <p>{text}</p>

        

        <div className='work-grid-body-btn'>
          {caseStudyImage && 
            <button href={caseStudyImage} target='_blank' rel="noopener noreferrer" onClick={handleOpenModal}>
             Details
            </button>
          }
          {codeLink && <a href={codeLink} target="_blank" rel="noopener noreferrer">Behance</a>}
          {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Live App</a>}
          {Dribblelink && <a href={Dribblelink} target="_blank" rel="noopener noreferrer">Dribble</a>}
          {figmaLink && <a href={figmaLink} target="_blank" rel="noopener noreferrer">Figma</a>}
          
        </div>
      </div>

      {/* Modal */}
      <Modal
        showModal={showModal}
        handleClose={handleCloseModal}
        content={
          <div>
            <h2>{title}</h2>
            
            {caseStudyImage && (
              <img src={caseStudyImage} alt={`${title} case study`} className="modal-image" />
            )}
          </div>
        }
      />
    </div>
  );
}

export default Work;



{/*function Work({ image, title, subTitle, text, codeLink, liveLink, figmaLink , Dribblelink}) {
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
                    {Dribblelink && <a href={Dribblelink} target="_blank" rel="noopener noreferrer">Dribble</a>}
                </div>

            </div>
        </div>
    );
}

export default Work;
*/}
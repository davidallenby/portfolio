import React, { FC } from 'react';
import './ExperienceListItem.scss';
import { ExperienceItemInterface } from '../../interfaces/ui.interfaces';
import { FaMapPin } from 'react-icons/fa6';

interface ExperienceListItemProps {
  data: ExperienceItemInterface;
}

const ExperienceListItem: FC<ExperienceListItemProps> = ({
  data
}) => (
  <div className="ExperienceListItem py-4">
    <h3 className='h4 mb-1'>{data.role}</h3>
    <p className='subtitle mb-3'>{data.employerName}</p>
    <small className='mb-3 d-flex align-items-center'>
      <FaMapPin className='me-2' />
      <span>{data.location}</span>
    </small>
    <small className='d-block'>{data.dates}</small>
  </div>
);

export default ExperienceListItem;

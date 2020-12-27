import React from 'react';
import { CircledWorld, Clock, Edit } from '../assets/icons';

const items = [
  {
    title: 'Your trips',
    icon: <Clock/>,
    to: '/trip'
  },
  {
    title: 'Future feature',
    icon: <Edit/>,
    disabled: true,
    to: '#'
  },
  {
    title: 'Future section',
    icon: <CircledWorld/>,
    disabled: true,
    to: '#'
  }
];

export default items;

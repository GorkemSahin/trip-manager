import React from 'react';
import { CircledWorld, Clock, Document } from '../assets/icons';

const items = [
  {
    title: 'Your trips',
    icon: <Clock/>,
    to: '/trip'
  },
  {
    title: 'Future feature',
    icon: <Document/>,
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

import React from 'react';
import { Clock, Edit, World } from '../assets/icons';

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
    icon: <World/>,
    disabled: true,
    to: '#'
  }
];

export default items;

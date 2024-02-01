import React from 'react';
import { createRoot } from 'react-dom/client';

import General from './general.jsx';

import './index.css';

const root = createRoot(document.getElementById('root'))

root.render(
  <General />
);
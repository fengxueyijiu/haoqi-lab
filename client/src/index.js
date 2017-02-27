import React from 'react';
import {render} from 'react-dom';
import './css/home-page.css';
import './css/public.css';
import './css/cases.css';
import './css/team.css';
import './css/contact.css';
import Routers from './routes.js';
render(<Routers />,document.getElementById('root'));

import React from 'react';

import {
  Header,
  Intro,
  Feature,
  About,
  Clients,
  Projects,
  InstallSteps,
  Comments,
  News,
  Test,
  Posts,
  Waitlist,
  Form,
  Footer,
} from './sections';

import './style_scss/main.scss';

export const App: React.FC = () => (
  <div className="app">
    <Header />
    <Intro />
    <Feature />
    <About />
    <Clients />
    <Projects />
    <InstallSteps />
    <Comments />
    <News />
    <Test />
    <Posts />
    <Waitlist />
    <Form />
    <Footer />
  </div>
);

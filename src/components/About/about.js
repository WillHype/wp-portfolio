import React from 'react';
import './about.css';
import willyData from '../../data/about.json';

const About = () => (
  <section id="about">
  <div className="about-container">
    <div className="terminal">
      <div className="terminal-header">
        <div className="header-button red" />
        <div className="header-button yellow" />
        <div className="header-button green" />
      </div>
      <div className="terminal-window" style={{ fontFamily: 'Fira Code, monospace' }}>
        <Statements statements={willyData} />
      </div>
    </div>
  </div>
  </section>
);

const Statements = ({ statements }) => (
  <div>
    {statements.map((statement, index) => (
      <Statement statement={statement} key={index} />
    ))}
    <div className="statement">
      <div className="input-statement">
        <span>&nbsp;</span>
      </div>
    </div>
  </div>
);

const Statement = ({ statement }) => (
  <div className="statement">
    <div className="input-statement" dangerouslySetInnerHTML={{ __html: statement.input }} />
    <div className="return-statement" dangerouslySetInnerHTML={{ __html: statement.return }} />
  </div>
);

export default About;

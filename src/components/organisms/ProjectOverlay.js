import R from 'ramda';
import React from 'react';

const renderMap = {
  'text' : ({ content }) => <p className="project-overlay__text">{content}</p>,
  'subtext' : ({ content }) => <p className="project-overlay__subtext">{content}</p>,
  'img' : ({ src }) => <div className="project-overlay__img"><img src={src}/></div>,
};

const renderProjectContent = ({ header, content }) =>
  <div>
    <h2>{header}</h2>
    {
      R.map( item => renderMap[item.type]( item ), content )
    }
  </div>;

class ProjectOverlay extends React.Component {
  render() {
    const content = this.props.content || [];
    const { isOpen, closeOverlay, title } = this.props;
    const classname = `project-overlay ${this.props.isOpen ? 'project-overlay--open' : ''}`;

    return (
      <div className={classname}>
        <section className="project-overlay__head">
          <h1>{title}</h1>
          <button onClick={closeOverlay}>X</button>
        </section>
        <section className="project-overlay__body">
          {
            R.map( renderProjectContent, content )
          }
        </section>
      </div>
    );
  }
}

export default ProjectOverlay;
import React from 'react';

import './AboutProject.css';

import Title from '../Title/Title';

function AboutProject(props) {
  return(
    <section className="about-project section-container">
      <Title title="О проекте" />
      <div className="about-project__description">
        <article className="project-description__column">
          <h2 className="description__title">Дипломный проект включал 5 этапов</h2>
          <p className="description__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article className="project-description__column">
        <h2 className="description__title">На выполнение диплома ушло 5 недель</h2>
          <p className="description__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <table className="about-ptoject__timeline-table">
        <tr className="timeline-table__table-row timeline-table__table-row_time">
          <td className="timeline-table__item timeline-table__item_first-time">1 неделя</td>
          <td className="timeline-table__item">4 недели</td>
        </tr>
        <tr className="timeline-table__table-row timeline-table__table-row_stek">
        <td className="timeline-table__item timeline-table__item_stek">Back-end</td>
        <td className="timeline-table__item timeline-table__item_stek">Front-end</td>
        </tr>
      </table>
    </section>
  )
}

export default AboutProject;
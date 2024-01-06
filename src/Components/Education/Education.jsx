import React from 'react'
import css from '../MainSection/MainSection.module.css'
const Education = () => {
  return (
    <section className={css.section}>
    <h2 className={css.sectionTitle}>Education</h2>
    <p className={css.chapter}></p>
    <div>
      <ul>
        <li> 2022 - 2024</li>
        <li> Vinnytsia National</li>
        <li> Agricultural University </li>
        <li> BA Degree in Industrial Engineering</li>
        <br />
        <li> 2022-2023 </li>
        <li> Front-End development </li>
        <li> IT School GoIT</li>
      </ul>
    </div>
  </section>
  )
}

export default Education
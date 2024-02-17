import React from 'react'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import css from './Experties.module.scss'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion.js'
const Experties = () => {
  return (
    <section className={css.wrapper}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings yPaddings ${css.container}`}>



            {/* left side */}
            <div className={css.leftSide}>
                {
                    projectExperience.map((exp, i)=> {
                        return
                    })
                }
            </div>


            {/* right */}
            <motion.div
            variants={textVariant(0.5)}
            className={css.leftSide}>

<span className='primaryText'>Ce este Plative? </span>
            {WhatDoIHelp.map((paragraph, i) => <span className='secondaryText' key={i}>{paragraph}</span>)}


            </motion.div>
        </motion.div>
    </section>
  )
}

export default Experties
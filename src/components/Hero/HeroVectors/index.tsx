import {
  hero_diagram_left_1,
  hero_diagram_left_2,
  hero_diagram_left_3,
  hero_diagram_right_1,
  hero_diagram_right_2,
  hero_likes,
  hero_main,
  hero_thumbs_up,
} from '@constants'
import { motion } from 'framer-motion'
import Image from 'next/future/image'
import { useEffect, useState } from 'react'
import { HeroVectorsContainer, VectorsContainer } from './styles'

export function HeroVectors() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      if (count <= 9998) {
        setCount((count) => count + 1)
      }

      // increase delay if count is greater than 9999
      if (count === 9999) {
        setInterval(() => {
          setCount(0)
        }, 3000)
      }
    }, 10)

    return () => clearTimeout(setTimeoutId)
  }, [count])

  return (
    <HeroVectorsContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <VectorsContainer>
        <Image
          src={hero_main}
          alt="Mulher olhando para alguns gráficos ao redor em azul e verde."
        />

        <motion.div
          className="hero-vector hero-diagram-left-1"
          animate={{ y: [0, -12], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2,
          }}
        >
          <Image
            src={hero_diagram_left_1}
            alt="Gráfico de barras brancas com fundo verde claro"
          />
        </motion.div>

        <motion.div
          className="hero-vector hero-diagram-left-2"
          animate={{ y: [-8, 0], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1.5,
          }}
        >
          <Image
            src={hero_diagram_left_2}
            alt="Gráfico circular com fundo verde claro"
          />
        </motion.div>

        <motion.div
          className="hero-vector hero-diagram-left-3"
          animate={{ y: [0, -8], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1,
          }}
        >
          <Image src={hero_diagram_left_3} alt="Retângulo branco" />
        </motion.div>

        <motion.div
          className="hero-vector hero-thumbs-up"
          animate={{ y: [-20, 0], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 3,
          }}
        >
          <Image src={hero_thumbs_up} alt="" />
          <span>{count}</span>
        </motion.div>

        <motion.div
          className="hero-vector hero-diagram-right-1"
          animate={{ y: [-6, 0], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 3,
          }}
        >
          <Image src={hero_diagram_right_1} alt="" />
        </motion.div>

        <motion.div
          className="hero-vector hero-diagram-right-2"
          animate={{ y: [0, -7], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1.5,
          }}
        >
          <Image
            src={hero_diagram_right_2}
            alt="Gráfico de linha branco com fundo verde claro"
          />
        </motion.div>

        <motion.div
          className="hero-vector hero-likes"
          animate={{ y: [-20, 0], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 4,
          }}
        >
          <Image src={hero_likes} alt="" />
          <span>{count}</span>
        </motion.div>
      </VectorsContainer>
    </HeroVectorsContainer>
  )
}

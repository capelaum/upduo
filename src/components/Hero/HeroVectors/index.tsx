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
import { HeroVectorsContainer, VectorsContainer } from './styles'

export function HeroVectors() {
  return (
    <HeroVectorsContainer>
      <VectorsContainer>
        <Image
          src={hero_main}
          alt="Mulher olhando para alguns gráficos ao redor em azul e verde."
        />

        <motion.div
          className="hero-vector hero-diagram-left-1"
          animate={{ x: [0, 8], y: [0, -12], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <Image
            src={hero_diagram_left_1}
            alt="Mulher olhando para alguns gráficos ao redor em azul e verde."
          />
        </motion.div>

        <motion.div
          className="hero-vector hero-diagram-left-2"
          animate={{ x: [4, 0], y: [-8, 0], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <Image
            src={hero_diagram_left_2}
            alt="Mulher olhando para alguns gráficos ao redor em azul e verde."
          />
        </motion.div>

        <motion.div
          className="hero-vector hero-diagram-left-3"
          animate={{ y: [0, -8], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <Image
            src={hero_diagram_left_3}
            alt="Mulher olhando para alguns gráficos ao redor em azul e verde."
          />
        </motion.div>

        <motion.div
          className="hero-vector hero-thumbs-up"
          animate={{ x: [12, 0], y: [-8, 0], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1.5,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <Image
            src={hero_thumbs_up}
            alt="Mulher olhando para alguns gráficos ao redor em azul e verde."
          />
        </motion.div>

        <motion.div
          className="hero-vector hero-diagram-right-1"
          animate={{ x: [8, 0], y: [-16, 0], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <Image
            src={hero_diagram_right_1}
            alt="Mulher olhando para alguns gráficos ao redor em azul e verde."
          />
        </motion.div>

        <motion.div
          className="hero-vector hero-diagram-right-2"
          animate={{ x: [0, 8], y: [0, -14], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <Image
            src={hero_diagram_right_2}
            alt="Mulher olhando para alguns gráficos ao redor em azul e verde."
          />
        </motion.div>

        <motion.div
          className="hero-vector hero-likes"
          animate={{ x: [0, 4], y: [0, -8], opacity: [1, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <Image
            src={hero_likes}
            alt="Mulher olhando para alguns gráficos ao redor em azul e verde."
          />
        </motion.div>
      </VectorsContainer>
    </HeroVectorsContainer>
  )
}

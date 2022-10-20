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
    <HeroVectorsContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <VectorsContainer>
        <motion.div
          className="hero-vector-main"
          // animate={{ y: [0, -8], opacity: [1, 1] }}
          // transition={{
          //   repeat: Infinity,
          //   repeatType: 'reverse',
          //   duration: 2,
          //   type: 'spring',
          //   stiffness: 100,
          // }}
        >
          <Image
            src={hero_main}
            alt="Mulher olhando para alguns gráficos ao redor em azul e verde."
          />
        </motion.div>

        <motion.div
          className="hero-vector hero-diagram-left-1"
          animate={{ y: [0, -16], opacity: [1, 1] }}
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
          animate={{ y: [-8, 0], opacity: [1, 1] }}
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
          animate={{ y: [-8, 0], opacity: [1, 1] }}
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
          animate={{ y: [-16, 0], opacity: [1, 1] }}
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
          animate={{ y: [0, -14], opacity: [1, 1] }}
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
          animate={{ y: [-8, 0], opacity: [1, 1] }}
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

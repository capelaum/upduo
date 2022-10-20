import {
  services_main,
  service_photo_icon,
  service_pin_icon,
  service_play_icon,
  service_radio_icon,
  service_star_icon,
} from '@constants'
import { motion } from 'framer-motion'
import Image from 'next/future/image'
import { ServicesVectorsContainer } from './styles'

export function ServicesVectors() {
  return (
    <ServicesVectorsContainer>
      <Image src={services_main} alt="" />

      <motion.div
        className="service-vector photo-icon"
        animate={{ y: [0, -20], opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 2,
        }}
      >
        <Image src={service_photo_icon} alt="" />
      </motion.div>

      <motion.div
        className="service-vector pin-icon"
        animate={{ y: [0, -20], opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 3,
        }}
      >
        <Image src={service_pin_icon} alt="" />
      </motion.div>

      <motion.div
        className="service-vector play-icon"
        animate={{ y: [0, -20], opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
        }}
      >
        <Image src={service_play_icon} alt="" />
      </motion.div>

      <motion.div
        className="service-vector radio-icon"
        animate={{ y: [0, -20], opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.25,
        }}
      >
        <Image src={service_radio_icon} alt="" />
      </motion.div>

      <motion.div
        className="service-vector star-icon"
        animate={{
          x: ['0%', '-150%', '-250%', '-200%', '0%'],
          y: ['0%', '200%', '10%', '-100%', '0%'],
          opacity: 1,
          rotate: [0, 360, 0, 360, 180, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 20,
        }}
      >
        <Image src={service_star_icon} alt="" />
      </motion.div>
    </ServicesVectorsContainer>
  )
}

import { ChipInterface } from '@interfaces/ui.interfaces'
import {
  FaAngular,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass
} from 'react-icons/fa'
import { IoLogoCapacitor, IoLogoFirebase } from 'react-icons/io5'
import { SiJquery, SiVite, SiWebpack } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

export const chips: ChipInterface[] = [
  {
    label: 'HTML',
    icon: FaHtml5
  },
  {
    label: 'CSS',
    icon: FaCss3
  },
  {
    label: 'JavaScript',
    icon: FaJs
  },
  {
    label: 'React',
    icon: FaReact
  },
  {
    label: 'React Native',
    icon: TbBrandReactNative
  },
  {
    label: 'Angular',
    icon: FaAngular
  },
  {
    label: 'Node JS',
    icon: FaNodeJs
  },
  {
    label: 'Firebase',
    icon: IoLogoFirebase
  },
  {
    label: 'Capacitor',
    icon: IoLogoCapacitor
  },
  {
    label: 'Git',
    icon: FaGithub
  },
  {
    label: 'jQuery',
    icon: SiJquery
  },
  {
    label: 'SASS',
    icon: FaSass
  },
  {
    label: 'Webpack',
    icon: SiWebpack
  },
  {
    label: 'Vite',
    icon: SiVite
  }
]

import { v4 as uuidv4 } from 'uuid'
// Agusta
import mvarush_front from './assets/images/agusta/mvarush_front.png'
import mvarush_right from './assets/images/agusta/mvarush_right.png'
import mvarush_back from './assets/images/agusta/mvarush_back.png'
import mvarush_left from './assets/images/agusta/mvarush_left.png'

import mvadrrscs_front from './assets/images/agusta/mvadrrscs_front.png'
import mvadrrscs_right from './assets/images/agusta/mvadrrscs_right.png'
import mvadrrscs_back from './assets/images/agusta/mvadrrscs_back.png'
import mvadrrscs_left from './assets/images/agusta/mvadrrscs_left.png'

import mvaf3_front from './assets/images/agusta/mvaf3_front.png'
import mvaf3_right from './assets/images/agusta/mvaf3_right.png'
import mvaf3_back from './assets/images/agusta/mvaf3_back.png'
import mvaf3_left from './assets/images/agusta/mvaf3_left.png'

import mvabrr_front from './assets/images/agusta/mvabrr_front.png'
import mvabrr_right from './assets/images/agusta/mvabrr_right.png'
import mvabrr_back from './assets/images/agusta/mvabrr_back.png'
import mvabrr_left from './assets/images/agusta/mvabrr_left.png'

import mvabrrn_front from './assets/images/agusta/mvabrrn_front.png'
import mvabrrn_right from './assets/images/agusta/mvabrrn_right.png'
import mvabrrn_back from './assets/images/agusta/mvabrrn_back.png'
import mvabrrn_left from './assets/images/agusta/mvabrrn_left.png'

// Ducati
import dpv4_front from './assets/images/ducati/dpv4_front.webp'
import dpv4_right from './assets/images/ducati/dpv4_right.webp'
import dpv4_back from './assets/images/ducati/dpv4_back.webp'
import dpv4_left from './assets/images/ducati/dpv4_left.webp'

import dpv4s_front from './assets/images/ducati/dpv4s_front.webp'
import dpv4s_right from './assets/images/ducati/dpv4s_right.webp'
import dpv4s_back from './assets/images/ducati/dpv4s_back.webp'
import dpv4s_left from './assets/images/ducati/dpv4s_left.webp'

import dsfv2_front from './assets/images/ducati/dsfv2_front.webp'
import dsfv2_right from './assets/images/ducati/dsfv2_right.webp'
import dsfv2_back from './assets/images/ducati/dsfv2_back.webp'
import dsfv2_left from './assets/images/ducati/dsfv2_left.webp'

import dsfv4sp_front from './assets/images/ducati/dsfv4sp_front.webp'
import dsfv4sp_right from './assets/images/ducati/dsfv4sp_right.webp'
import dsfv4sp_back from './assets/images/ducati/dsfv4sp_back.webp'
import dsfv4sp_left from './assets/images/ducati/dsfv4sp_left.webp'

// yamaha
import yr1_front from './assets/images/yamaha/yr1_front.jpeg'
import yr1_right from './assets/images/yamaha/yr1_right.jpeg'
import yr1_back from './assets/images/yamaha/yr1_back.jpeg'
import yr1_left from './assets/images/yamaha/yr1_left.jpeg'

import yr1m_front from './assets/images/yamaha/yr1m_front.jpeg'
import yr1m_right from './assets/images/yamaha/yr1m_right.jpeg'
import yr1m_back from './assets/images/yamaha/yr1m_back.jpeg'
import yr1m_left from './assets/images/yamaha/yr1m_left.jpeg'

export const Data = [
  {
    id: uuidv4(),
    category: 'naked',
    brand: 'mv agusta',
    model: 'rush',
    cv: 208,
    cc: 998,
    engine: '4 cilindros en linea',
    max_speed: 300,
    weight: 186,
    price: 40200,
    imgs: [mvarush_front, mvarush_right, mvarush_back, mvarush_left],
    amount: 0,
  },
  {
    id: uuidv4(),
    category: 'naked',
    brand: 'mv agusta',
    model: 'dragster rr scs',
    cv: 140,
    cc: 798,
    engine: '3 cilindros en linea',
    max_speed: 244,
    weight: 168,
    price: 21900,
    imgs: [mvadrrscs_front, mvadrrscs_right, mvadrrscs_back, mvadrrscs_left],
    amount: 0,
  },
  {
    id: uuidv4(),
    category: 'super-sport',
    brand: 'mv agusta',
    model: 'f3 rosso',
    cv: 147,
    cc: 798,
    engine: '3 cilindros en linea',
    max_speed: 240,
    weight: 173,
    price: 17600,
    imgs: [mvaf3_front, mvaf3_right, mvaf3_back, mvaf3_left],
    amount: 0,
  },
  {
    id: uuidv4(),
    category: 'naked',
    brand: 'mv agusta',
    model: 'brutale 1000rr',
    cv: 208,
    cc: 998,
    engine: '4 cilindros en linea',
    max_speed: 300,
    weight: 186,
    price: 36700,
    imgs: [mvabrr_front, mvabrr_right, mvabrr_back, mvabrr_left],
    amount: 0,
  },
  {
    id: uuidv4(),
    category: 'naked',
    brand: 'mv agusta',
    model: 'brutale 1000 nürburgring',
    cv: 208,
    cc: 998,
    engine: '4 cilindros en linea',
    max_speed: 300,
    weight: 183,
    price: 43200,
    imgs: [mvabrrn_front, mvabrrn_right, mvabrrn_back, mvabrrn_left],
    amount: 0,
  },
  {
    id: uuidv4(),
    category: 'super-sport',
    brand: 'ducati',
    model: 'panigale v4',
    cv: 215.5,
    cc: 1103,
    engine: '4 cilindros en v',
    max_speed: 299,
    weight: 175,
    price: 28090,
    imgs: [dpv4_front, dpv4_right, dpv4_back, dpv4_left],
    amount: 0,
  },
  {
    id: uuidv4(),
    category: 'super-sport',
    brand: 'ducati',
    model: 'panigale v4 s',
    cv: 215.5,
    cc: 1103,
    engine: '4 cilindros en v',
    max_speed: 299,
    weight: 174,
    price: 33790,
    imgs: [dpv4s_front, dpv4s_right, dpv4s_back, dpv4s_left],
    amount: 0,
  },
  {
    id: uuidv4(),
    category: 'naked',
    brand: 'ducati',
    model: 'streetfighter v2',
    cv: 153,
    cc: 955,
    engine: '2 cilindros en v',
    max_speed: 273.5,
    weight: 178,
    price: 18290,
    imgs: [dsfv2_front, dsfv2_right, dsfv2_back, dsfv2_left],
    amount: 0,
  },
  {
    id: uuidv4(),
    category: 'naked',
    brand: 'ducati',
    model: 'streetfighter v4 sp',
    cv: 208,
    cc: 1103,
    engine: '4 cilindros en v',
    max_speed: 299,
    weight: 177,
    price: 35490,
    imgs: [dsfv4sp_front, dsfv4sp_right, dsfv4sp_back, dsfv4sp_left],
    amount: 0,
  },
  {
    id: uuidv4(),
    category: 'super-sport',
    brand: 'yamaha',
    model: 'r1',
    cv: 200,
    cc: 998,
    engine: '4 cilindros en linea',
    max_speed: 270,
    weight: 201,
    price: 21899,
    imgs: [yr1_front, yr1_right, yr1_back, yr1_left],
    amount: 0,
  },
  {
    id: uuidv4(),
    category: 'super-sport',
    brand: 'yamaha',
    model: 'r1 m',
    cv: 200,
    cc: 998,
    engine: '4 cilindros en linea',
    max_speed: 299,
    weight: 202,
    price: 29499,
    imgs: [yr1m_front, yr1m_right, yr1m_back, yr1m_left],
    amount: 0,
  },
]

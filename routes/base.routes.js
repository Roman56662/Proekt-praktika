const { Router } = require('express')
const { Types } = require('mongoose')
const Country = require('../models/Country')
const Person = require('../models/Person')
const Story = require('../models/Story')
const router = Router()


const countryMok =[
    {
      title: 'Италия',
      popular: true,
      flag: 'https://psv4.userapi.com/c520036/u173154522/docs/d19/146e8d27744d/263-italy.png?extra=esiGkehJn4ylCbEtUdh4KJwoHJDHm7wwUMh31-qR8GArd8E-EiH-pViiHpMWCic6mHw5PlimHoJ3ge0aNx-v0m8793VV2asyZRxne88di61lrdVdNiS4bwi5rtKlsV93gXygWR2UZHSFyzNHcLOysEaLvYE'
    },
    {
      title: 'Россия',
      popular: true,
      flag: 'https://psv4.userapi.com/c536436/u173154522/docs/d17/5ecfc55d6a0d/044-russia.png?extra=zEVjI383dCnjKbCYvrIRece4m_FnhMmeM9wpHggz_jqqkwkBMXTm-y2gljlT7Y-ttVaPwtzdQS_kbcZj2uE1ItfFw8El7F_Q4P0GzhfmQdXhtEuAXm2OeAWXZOZnd-mbuSTx-Ngnsw6VHpcjhHBsVJWZ3eI'
    },
    {
      title: 'Япония',
      popular: true,
      flag: 'https://psv4.userapi.com/c534536/u173154522/docs/d20/69fda6d3c2a5/241-japan.png?extra=w3T0XSLN3XzPX0_wu-zr_15BBjHQ3JQT3JbXRsR6dMn29MSqNm0upDJgi0QpOHqz_y5iCXB75qpk2XsYcP6CytxNB71NED8g367QJIbOs8O2gz1qGBC48hdD5nafAHvXqqYlo0fRuy2l96XrBjQv2VPbdOs'
    },
    {
      title: 'Австралия',
      popular: false,
      flag: 'https://psv4.userapi.com/c532036/u173154522/docs/d43/a8fb81979530/143-australia.png?extra=mGu1ZipRnp14X6ns7yi6Z1aGYc1RJgbGUOwE97GWVUCxmrZmkHBzY31H5nDyJ7Om3HYuRm8444ycwdF2eAQqZQZJqjaBQcARXvyANMSJoBALDoWOnSnb9i0QHl820F0sqnsPog_KJmC8ykTT3ENqbVsYhI8'
    },
]

const cityMok = [
  {
    title: 'Рим',
  },
  {
    title: 'Венеция',
  },
  {
    title: 'Москва',
  },
  {
    title: 'Санкт-Петербург',
  },
  {
    title: 'Токио',
  },
  {
    title: 'Киото',
  },
  {
    title: 'Сидней',
  },
  {
    title: 'Мельбурн',
  }
]

const hotelMok = [
  {
    title: 'Ripetta Natural Suites', //рома
    stars: 3,
    photos: 'https://psv4.userapi.com/c536132/u173154522/docs/d42/00cf91e284af/Ripetta_Natural_Suites.jpg?extra=ahYmFTQ1cPntJIIlnGMehgsOGB1SPuek9fDJPiBpNILPpjV542RBg1mfo11XTYVumFWTlig7_V6Xk3jFaU2xT66igac2q6lrnthUtrSHT-Dt1PB6EI2Cx_iLzO14thtZzyOyXRGjok99r6Ues92H7N6QgHM',
    family: true,
    parking: false,
    wifi: true,
    geopos: '',
  },
  {
    title: 'Rome Kings Suite',
    stars: 4,
    photos: 'https://psv4.userapi.com/c536132/u173154522/docs/d36/8877d8411f35/Rome_Kings_Suite.jpg?extra=209YEDt0wkkFhJMI7-jkKpwC78_vxSPZRRgxsq7Yf5LzpZo-O5ceM9S5LQ-lWyECyaNjNw5n2OBZfPBNOGc1uL5PMHWur9OjEToJ92n80KwDuLPgzor0MJ6ICJdi0A-eMJJTLZVq8dkQtSsX7fkjp45qk5E',
    bar: false,
    parking: false,
    wifi: true,
    geopos: '',
  },
  {
    title: 'Hotel Villa Rosa',
    stars: 3,
    photos: 'https://psv4.userapi.com/c536132/u173154522/docs/d39/b08bf2ec7d72/Hotel_Villa_Rosa.jpg?extra=UawhlOycQduy5NkltFQq4psKPc3MEJ-k7EhrSpX0r0oo_yuRp0-fpkAzy4Z47Todl6kgbHvVL0nZKagJdlLHBQOh8aagbEt8k1GioIGhbL7IISUiOPCpePa2VkkTPY9k_jppjY8PCjabe9kb5EM-V6ulLd4',
    bar: false,
    parking: false,
    wifi: true,
    geopos: '',
  },
  {
    title: 'Atlante Star Hotel',
    stars: 4,
    photos: 'https://psv4.userapi.com/c536132/u173154522/docs/d9/23edf7d41ab7/Atlante_Star_Hotel.jpg?extra=9Ce71x1H74f-F-yzmxEMT_wBKpXHaRYZG0LcvqOQt_sbeqDx8RbJQ0vf47viiFTTVyE-U7xcabdsjHMCra6AipXbszZBhSXHDQwxgl7DNOXB5XAUSgmgTvr_7E961hN7rUZFQS8XDnOKsmE4n6BGJMor8ns',
    bar: true,
    parking: false,
    wifi: true,
    geopos: '',
  },
  {
    title: 'SuiteSistina for Lovers',
    stars: 4,
    photos: 'https://psv4.userapi.com/c536132/u173154522/docs/d9/fba9b0dad7de/SuiteSistina_for_Lovers.jpg?extra=vGv8dhifEax0HOBXx-3sz9WbiIGcb7xJ0gtyXFEDFArUqR3tj6sdryFDRMhTWlV2mzuJVsZGQSIP702iNOlgJnQ34Qy7fP29d6tw3jv3In5KZjqlbYEiaJm7IPw_Kvc7tExv3c0pUl8_WyumrIZEN10QktY',
    bar: false,
    parking: true,
    wifi: true,
    geopos: '',
  },
  {
    title: 'Hilton Molino Stucky Venice', //венеция
    stars: 5,
    photos: 'https://psv4.userapi.com/c536132/u173154522/docs/d27/215f89dcc101/Hilton_Molino_Stucky_Venice.jpg?extra=2v7D03Ow7pcTmUI0A6DI0H0zA4qb4ekFXVuhfmwQeOA64YAEv72bcMWYy9oTbvcPVJG4dFDEhDmUxZGglcwq7UukyYkOINebK7alrsCcOqqdR8YjyAqlqinJ5jPmr8GRbQZOmAhcj05F5O1M7CLGPp7QRBk',
    bar: true,
    parking: false,
    wifi: false,
    geopos: '',
  },
  {
    title: 'Отель Марриотт Москва Гранд', //москва 
    stars: 5,
    photos: 'https://psv4.userapi.com/c536132/u173154522/docs/d24/3c827e523ffb/Otel_Marriott_Moskva_Grand.jpg?extra=6vhHAaLB3AS8axYeVe4vxlBuJHjT19H9q8PXkD2NY5FiqepOilDrmJw5y3VKIodqYekJlIqbYFHWKjq7KE-IxM20dKzSkyZyZyuIF5Wd6jd-cr6Vx9LI8wfqFDDm2v_EqKYyURd_KHRHo1Tb_TlpyJ1KNOI',
    bar: true,
    parking: false,
    wifi: true,
    geopos: '',
  },
  {
    title: 'Отель Гоголь Хауз', //питер
    stars: 4,
    photos: 'https://psv4.userapi.com/c536132/u173154522/docs/d11/c0563a96614f/Otel_Gogol_Khauz.jpg?extra=VXMtYXRuqHwEt-7PyPeo6xE0Q688NeSI2kL-vbVevj72ojuZBPRXoqZE2yji2cQCdNf-z-X3WEqwLE--tASvQL3HF2bRp6HfkXT9IDxFkkK59T7C3b1NQ99Lj7BTvurkOnPQFlKHudzSZHMxMlfp2Ex8l_8',
    bar: true,
    parking: false,
    wifi: true,
    geopos: '',
  },
  {
    title: 'Centurion Hotel Residential Akasaka Station', //токио
    stars: 3,
    photos: 'https://psv4.userapi.com/c536132/u173154522/docs/d39/c0267dc93135/Centurion_Hotel_Residential_Akasaka_Station.jpg?extra=MUfcMBO-qP-nkZy2rkDPjARbfrwSc2OGydjHmMI7psON8pMiUnXdbGJhKk8ZsAa7LWHWtDdmi541HnhxSs9_8GixGevCCs0gEmr-RDwAZjkUOs1jhymNNb7cVv1w5TeOlnnzIi4QfgbdZ6WX6XpYtUw_N4Y',
    bar: false,
    parking: false,
    wifi: false,
    geopos: '',
  },
  {
    title: "Hotel M's Est Shijo Karasuma", //киото
    stars: 3,
    photos: 'https://psv4.userapi.com/c536132/u173154522/docs/d36/74e8efdfa647/Hotel_M_39_s_Est_Shijo_Karasuma.jpg?extra=eY5fKsHcHJOo5wyEt9NJouF4uwKlUcZ6Afj5S-uwLmA_4sdUA0QLgkUmVObOnspqCrrvy7ZFCA5KzvsL4mj2e4wcJvtaajO6Li617nSN-ZVNT7BEcz9BjrXKty7Rnxt9tTu9evdvH-yFG5TugKY_nhBCLbE',
    bar: false,
    parking: false,
    wifi: true,
    geopos: '',
  },
  {
    title: 'Sofitel Sydney Darling Harbour', //сидней
    stars: 5,
    photos: 'https://psv4.userapi.com/c536132/u173154522/docs/d44/684f14aef5b3/Sofitel_Sydney_Darling_Harbour.jpg?extra=nWORGlBbE6cbFN2u705pzOxbegMij1toUN74IPesszTt7J1SvLZSBf4DdF8SbP2sSFct-33PmWvkmXBKOuRCSE8aSXmb9HthA7HsGUG5lT5_rxS4RnIf4C0zH9BUrH1CbKWEfJue5fq7ugUioxmuwGRK9CA',
    bar: true,
    parking: false,
    wifi: false,
    geopos: '',
  },
  {
    title: 'The Langham Melbourne', //Мельбурн
    stars: 5,
    photos: 'https://psv4.userapi.com/c534536/u173154522/docs/d6/2d1b830ff7af/The_Langham_Melbourne.jpg?extra=4qBjzrITMMDhdW2F8qk5v7hV_mqk2vLs_PcLD0VwxjYwPmK33I_W0Z_UU3S4I6yFInjq_bD2irT6S3OSXrf27r4qG9pNJX8QnrVlxqhfKpq8OCyR-RMxZxRVaAzuHmPw3UNkqKpKmUP_mnCiZ4n2qHNn5Qw',
    bar: true,
    parking: false,
    wifi: true,
    geopos: '',
  },
]

const roomMok = [
  {
    type: 'Делюкс', //The Langham Melbourne
    roomsHotel: 3,
    countPeople: 2,
    photo: [
      'https://psv4.userapi.com/c532036/u173154522/docs/d48/97fd4c4c060e/The_Langham_Melbourne_Rooms1.jpg?extra=A27svyBJpFFgr3cTkNbigIhao4aPZjqCwdOt9iYErjMGOrACQtuIB7CqZqZMSgV_M59XC5UrelQKwMWZG9o8X6Wx57RvL9U2IJ_E1wooHwz4oPhu_KELJS1l_c2uVtXubHPtwJqM6UulJz7nW2Ha_CCeRG0',
      'https://psv4.userapi.com/c532036/u173154522/docs/d29/2906c3b922f0/The_Langham_Melbourne_Rooms2.jpg?extra=JlHZzWtcTfKUwYc_fAkHyPdiHpggNdIDb_o6_OfoW1UbAC_zuhh7OStizamahgPvT3H-yy4VSR5ku9wRUtRJPlGh6-6mioiFibsZCA6DV_LqII7EMrQtRbrPoNGQI_t0QHdzN_ZJDVBKpMbnk2sWUcweDrc',
    ],
  },
  {
    type: 'Люкс', //Sofitel Sydney Darling Harbour
    roomsHotel: 2,
    countPeople: 3,
    photo: [
      'https://psv4.userapi.com/c536236/u173154522/docs/d11/d15a2399ea64/Sofitel_Sydney_Darling_Harbour_Rooms1.jpg?extra=0xfHYn-bufs4XZz1JAluW6FOjt2UthjW9t4PScuuBLs_45wV4eERRLG5U8mqy3sMiSOMFkWH6ChnEwGIzHKsbZwUMMuT45Xdco0a_8KaD4Nlm9JXb6w0GqQTRHDX1nVS6uSsEXJEV6koqlA_e0AtI4eUZ4k',
      'https://psv4.userapi.com/c536236/u173154522/docs/d1/8f6b7f87561a/Sofitel_Sydney_Darling_Harbour_Rooms2.jpg?extra=cj_I8YZmYnFRU7hGqLghVpZK6kzPekb2DFbJoPpx9WLYqkSt2yqMD20WJWRGvlLkZsEbgwafEFri2G82T__Z40FAw0oU5vgWyHke4infBEjXcLS4pJZ2hwdeyLCCoPGRkmgrsMTqS_6kRgUE2wByAXjpGaA',
    ],
  },
  {
    type: 'Эконом', //Hotel M's Est Shijo Karasuma
    roomsHotel: 5,
    countPeople: 2,
    photo: [
      'https://psv4.userapi.com/c536236/u173154522/docs/d29/88e51a1906b1/Hotel_M_39_s_Est_Shijo_Karasuma_Rooms1.jpg?extra=K5YXqy5vohF1c9e2lArzYCCV9pvc_VVjLnQxLvPcEL8Uiu1U_C_RTWlj4qiVyKdqe5dgDNT8a7f7RKfX9yJ1jbw-JPfi9fpsYYplyJ_wDU01GjdB-qqBf8NCKwaAjBrIfo24ydeR2yu6JTRbo58Qa7kELqY',
      'https://psv4.userapi.com/c536236/u173154522/docs/d11/56e4d11eb8dc/Hotel_M_39_s_Est_Shijo_Karasuma_Rooms2.jpg?extra=KSTD3ZbL9aT6LPbDuDANtja2n8v0aetm4FYOqAggw9ZA_qcsCLeP645HqhGgIMhCwYYT3OeDqz8xk9z2sH5OIQHMIJdaOmtoBUZuoWhPoD-UlAPSl5NR0DDo0Q4KZ-jI0-PBKkt006sa1TK6XueYjETShdA',
    ],
  },
  {
    type: 'Обычный', //Hotel M's Est Shijo Karasuma
    roomsHotel: 5,
    countPeople: 1,
    photo: [
      'https://psv4.userapi.com/c536236/u173154522/docs/d29/88e51a1906b1/Hotel_M_39_s_Est_Shijo_Karasuma_Rooms1.jpg?extra=K5YXqy5vohF1c9e2lArzYCCV9pvc_VVjLnQxLvPcEL8Uiu1U_C_RTWlj4qiVyKdqe5dgDNT8a7f7RKfX9yJ1jbw-JPfi9fpsYYplyJ_wDU01GjdB-qqBf8NCKwaAjBrIfo24ydeR2yu6JTRbo58Qa7kELqY',
      'https://psv4.userapi.com/c536236/u173154522/docs/d11/56e4d11eb8dc/Hotel_M_39_s_Est_Shijo_Karasuma_Rooms2.jpg?extra=KSTD3ZbL9aT6LPbDuDANtja2n8v0aetm4FYOqAggw9ZA_qcsCLeP645HqhGgIMhCwYYT3OeDqz8xk9z2sH5OIQHMIJdaOmtoBUZuoWhPoD-UlAPSl5NR0DDo0Q4KZ-jI0-PBKkt006sa1TK6XueYjETShdA',
    ],
  },
  {
    type: 'Обычный', //Centurion Hotel
    roomsHotel: 3,
    countPeople: 2,
    photo: [
      'https://psv4.userapi.com/c520036/u173154522/docs/d28/18437e60018a/Centurion_Hotel_Residential_Akasaka_Station_Rooms1.jpg?extra=hTMa5rvACGIJoslzmddblE01AfTrLsYxd-EuM5T2Pe5ZF4jIOn92xYKEIBtrKJ2WsSXYJ0C9CXjBgMUkmXMgf-6ZqHSDWFVHcBQfDHDNVwdUDx0UckPAYyFfFSklcdJ0wEHnG8mz165d0ocKgT_PtyOLgm0',
      'https://psv4.userapi.com/c520036/u173154522/docs/d39/eb7cdffa783a/Centurion_Hotel_Residential_Akasaka_Station_Rooms2.jpg?extra=zX5wypda5IOCJMS5KHHUu6T5ATIPspDLcWY5QpxXCqPfQoxfVHMiOhFA6dLjeZvGzRX_FUbAdRzsE290cQ4LaEV343XTxnGqYm-LhQmymjHv4XtSn7ALAnIRpSeiA1xSBzO0GXE6FJTHJZB78PgmdCLu59E',
    ],
  },
  {
    type: 'Люкс', //Residential Akasaka Station
    roomsHotel: 1,
    countPeople: 3,
    photo: [
      'https://psv4.userapi.com/c520036/u173154522/docs/d28/18437e60018a/Centurion_Hotel_Residential_Akasaka_Station_Rooms1.jpg?extra=hTMa5rvACGIJoslzmddblE01AfTrLsYxd-EuM5T2Pe5ZF4jIOn92xYKEIBtrKJ2WsSXYJ0C9CXjBgMUkmXMgf-6ZqHSDWFVHcBQfDHDNVwdUDx0UckPAYyFfFSklcdJ0wEHnG8mz165d0ocKgT_PtyOLgm0',
      'https://psv4.userapi.com/c520036/u173154522/docs/d39/eb7cdffa783a/Centurion_Hotel_Residential_Akasaka_Station_Rooms2.jpg?extra=zX5wypda5IOCJMS5KHHUu6T5ATIPspDLcWY5QpxXCqPfQoxfVHMiOhFA6dLjeZvGzRX_FUbAdRzsE290cQ4LaEV343XTxnGqYm-LhQmymjHv4XtSn7ALAnIRpSeiA1xSBzO0GXE6FJTHJZB78PgmdCLu59E',
    ],
  },
  {
    type: 'Люкс', //Отель Гоголь Хауз Отель 
    roomsHotel: 8,
    countPeople: 2,
    photo: [
      'https://psv4.userapi.com/c505536/u173154522/docs/d47/3f140178ae38/Otel_Gogol_Khauz_Rooms1.jpg?extra=_jPjDTJHOo71TYbY0884vEeFrMz9HTY_tEyReQsy-DS8v-vsr4GGub4fzAlNtlvCaJFlAUq4A-d2K11lQU0FXu3FStXqrCfRsWfS_OrovaZTOffQiBfjmFSWYF07VgihZEUUNUJ5AOO2dj8StWJ-Dq3r37g',
      'https://psv4.userapi.com/c505536/u173154522/docs/d9/93867695c6fe/Otel_Gogol_Khauz_Rooms2.jpg?extra=CQKSnun8nJHry8lbdFWxfzGPW4L2NxU9Joc6v1I7IHcdzxg3sLMiKFeIxAPB7FVW1TrHbgO_rRhSIKfKcnszPJkU5L4HIAt2DeeO2mAyLpaEoZpS-dyA77CqyOIwBqazMAaIot1Cy6BUl5JTMtVrzeCw5hM',
    ],
  },
  {
    type: 'Делюкс', //Отель Марриотт Москва Гранд
    roomsHotel: 5,
    countPeople: 2,
    photo: [
      'https://psv4.userapi.com/c536132/u173154522/docs/d26/cec4e4a302ea/Otel_Marriott_Moskva_Grand_Rooms1.jpg?extra=wrP2cSIWyNgtfSkNU0z33xuUuebPxyL2Cz2-uoPERTg4pjVo4Dsff7cTguxR9G_783uzPVbBWbvXyBvJty9gHP1IiKhVD0mLQp5DFUCFL7_BKNeLEq_KirXfzo42aPCwoeLcdxliY1zR4eDaRPkKFySqgkg',
      'https://psv4.userapi.com/c536132/u173154522/docs/d11/3e80c3ccb1bb/Otel_Marriott_Moskva_Grand_Rooms2.jpg?extra=z02SE-Cqn2qQyySXLg0Fuw5PHDK75h4wFHkkjFw2IUB65yYoXSZ3aDIcHv7ndZjaDVrM4nti9QFUaFpwWv928Xh8cVcGIfLPrZbWqhyzh8igOVed4LS0w7ddIJ5MgexrY2Uhak_me74Pw_tonBJRI5MSZsM',
    ],
  },
  {
    type: 'Люкс', //Hilton Molino Stucky Venice
    roomsHotel: 6,
    countPeople: 4,
    photo: [
      'https://psv4.userapi.com/c536132/u173154522/docs/d38/b33cd104daba/Hilton_Molino_Stucky_Venice_Rooms1.jpg?extra=ls10kAofSPXGVumsnVhIv3sQZ3vGdff784vpVTa3Rd0C1AsbgYgs8t-WMEW67DVKNA4xdWcVsANEgCRyUTbLx4CI200be-FnTSrzU6KD5TVu6YL3k4xA9LgF2wNwDabNT0rlodAWwK52vizz1Q25kvnDlfs',
      'https://psv4.userapi.com/c536132/u173154522/docs/d8/8e92604973e2/Hilton_Molino_Stucky_Venice_Rooms2.jpg?extra=sDfQEj6Ocv46rCWLvcAtotAkJbdU2qi0PbzQmWT2OTdK9wprH6mCkiUBQ4t86nkTzs02L9xJTlMT2-U6Cxhu-0xStH1xBLvco6AiCMxGO5Dpj6z-PK3KLjcoHW09ZnxZAdViQ_6Ti-Nip9-kEFqlgyGaxAo'
    ],
  },
  {
    type: 'Делюкс', //SuiteSistina for Lovers 
    roomsHotel: 7,
    countPeople: 2,
    photo: [
      'https://psv4.userapi.com/c505536/u173154522/docs/d26/f1e53e7da39b/SuiteSistina_for_Lovers_Rooms1.jpg?extra=dovuhQdC-Qs-e43bbk1TB25SuHOCa-Up8ehR_2oEYpk28L77UHLOMFLZcxyFaFvBcJa50aMR5uzr977uYvXx9QE_g26yfzCnPFnsEKYTnoCQNr1Qcu3hUrahGH-9B-pKJqzBnqxi_sQKk1Gq4Ft53v9DCLc',
      'https://psv4.userapi.com/c505536/u173154522/docs/d22/b05baee2df39/SuiteSistina_for_Lovers_Rooms2.jpg?extra=w7VGfgt-ydcadl4cLHj7fxv-fow5bg0lSDqNfAyesej75KQZxUhYsULhZzMEI_ZNAkKzk_kv6FX27VruWFhHjRmzl9YYTvPiYl39ohV_BuLR0y6auvNS9gwVNGmjlTkCZKQi_6udr_QsOMp7-LtZyF-eLc4',
      'https://psv4.userapi.com/c505536/u173154522/docs/d45/d525783c8038/SuiteSistina_for_Lovers_Rooms3.jpg?extra=UKHqhgl8fZUTrekFuNrygNEK_dsn3hOgN8kPSZNAPCa9ssGP1vxeXwqC8LHOFZBSmMBOjqMkC3YBguZRvSHCOQEtsKHcn114XkRPdcmS7ffz2TmA2Gr45veDTeKPFNzhL-3Spjb5UEF_1RHyyc49FAxYo0M',
    ],
  },
  {
    type: 'Обычный', //Atlante Star Hotel 
    roomsHotel: 13,
    countPeople: 2,
    photo: [
      'https://psv4.userapi.com/c534536/u173154522/docs/d11/bc18779f2439/Atlante_Star_Hotel_Rooms1.jpg?extra=p91lLaby_g_IolJvJ97YPg1DF3d7YtzLX48LNhWbfXYn6EbpN4x2PnG-JOWnOrjgKff-j0P5Zl4bZiXcoWzYxS6TOq5cQKzjNUrahkYXhV3wkEiy0NltEsnb3tNHlWzoGqL2il2SQjjqpQHdAJKxNlEY86g',
      'https://psv4.userapi.com/c534536/u173154522/docs/d20/dcc086f6486d/Atlante_Star_Hotel_Rooms2.jpg?extra=uDpPjJaIMetPtdk6n9sewojGePPL7Jk-b31_nC_7_G-HmoDRxDA9_8KtrMLAe5iin2z6OZXE3N9uZtB9PYcD8WV3hG-Je7HLlbIp7VGjySKtc8lm3iUENHF5U2rRfpzqBf7a2gxi90BnJ6N-Um82oTqFPnM',
      'https://psv4.userapi.com/c534536/u173154522/docs/d43/63ca5603e0e8/Atlante_Star_Hotel_Rooms3.jpg?extra=pjM_EqZSHT18BaFOEy_mudmm2jdt2Hf3F7HRZegUAgE_Ur4oRNnxyKcJZ7j83wzpO3e-Ci5A7-d-RYTEn6AkM7lku8f1gfXKiBXVjH0NgYI7Dqgs8Ql7z2wUA8sZl-q3FR15YMdG39yG3AI-ClJrAQSPagg',
    ],
  },
  {
    type: 'Обычный', // Hotel Villa Rosa
    roomsHotel: 10,
    countPeople: 4,
    photo: [
      'https://psv4.userapi.com/c505536/u173154522/docs/d46/db14ea858219/Hotel_Villa_Rosa_Rooms1.jpg?extra=pukItpCKR0hA0Xglwj8cW0pkTd9o1viTPsWr3nq7fEGlL-oqlnrF7f6VfEwvOJOOPGNWq72YVEdk7dhxOFLSz0e0E2ZDkTm0ntrYOdVBINrokJSKwyNBHQPVG5bXqGQMO-C1RQIAiIHPxGdKM8u8DqQjFfA',
    ],
  },
  {
    type: 'Обычный', // Rome Kings Suite
    roomsHotel: 17,
    countPeople: 4,
    photo: [
      'https://psv4.userapi.com/c536132/u173154522/docs/d39/aa78c01c66d0/Rome_Kings_Suite_Rooms1.jpg?extra=36qEfXnKuMIutwP8kJJgrdJmJELS3rhUdNZn6hnZwki9s5ddeN0FI_1vrA278NZFtU-8fwXN8blYUczLE9NFuHun2OO6jtsaEWTzubOsMZCMSGhvGELgabYlZWFyFXrQyOINm8dokAYRiaikcaFB9Pms928',
      'https://psv4.userapi.com/c536132/u173154522/docs/d43/fc9e70f26219/Rome_Kings_Suite_Rooms2.jpg?extra=ujkmqLBQiWY_etpNdXgNkDFwm2LQ2WAed15zatCDoYDuOsu9WaaeJmH9WzMlDZiLkTzD_xh1fLKLgF49kJolytkm3VyuAxwozmPeQZJ2IOjp4bt-w57Bkk64Lt9TxtzQXQD2aKiNp3hB_y8_CdODsKyUw0w',
      'https://psv4.userapi.com/c536132/u173154522/docs/d8/7d2bcf285494/Rome_Kings_Suite_Rooms3.jpg?extra=liqK7AVfINFJzO7ok81bfsyoYssT5Wi2hm_CylicAI7cywKl7aT_whDypi0LwJJdp3kE98vkiKnoXDKnr7fSwAesXwuVDpFSFfX6CCJgfYLqwLbueINTKai_9s6bYkzRvcKXbrdMRcWO7X88HYvDdnvCnh8',
    ],
  },
  {
    type: 'Люкс', // Ripetta Natural Suites
    roomsHotel: 5,
    countPeople: 2,
    photo: [
      'https://psv4.userapi.com/c536236/u173154522/docs/d25/237d9100b801/Ripetta_Natural_Suites_Rooms.jpg?extra=BuyR9LJjdsjDo-Sa2C3IP4VeNk-KqLEnwmpa8T58JHnYTSRrylqFlsl18BBlit4RiG5WSvvlBHI97tYG6TpYuMWphRVtUUYvrWwDKqvriYOtLD4GYrh8pBMJ0F2D-P-xesyLk-xEAI5_xzHShk2ij1kXxIE',
      'https://psv4.userapi.com/c536236/u173154522/docs/d12/9d54cbd4de45/Ripetta_Natural_Suites_Rooms2.jpg?extra=qIurus_cFUv2TsauyMMlzy1QEkAkIFODLcwbClC0scBxjfsH5j1W8lMHRj9bMlTNuM8beMDhMFek-EvQJ5_31betfIB3gDgP2DdWk5XqXNWLVBm5qhTdZFKHlRAs5kKFJsWgdhlLD6VVuBECHO1HfSYbznQ',
      'https://psv4.userapi.com/c536236/u173154522/docs/d47/59c2fed3d56f/Ripetta_Natural_Suites_Rooms3.jpg?extra=CncBMWlLAtzLnRa8JaxGS7PIicrn-krY-nz18xm9LFb1NR890dkuudh0ccD2ueWBibF_Z1Km_PAIjxbmfaRhG1PS5n2hF_TsrfbV8Dczpdi6VoLYWZsxbYF9r6YyX1oI_n43398PzRDahGQeen4H_pbu3Ms',
      'https://psv4.userapi.com/c536236/u173154522/docs/d39/f43fb1fd89fe/Ripetta_Natural_Suites_Rooms4.jpg?extra=ZFRFcGv5qFXZKuit-ZCYs8fi6vFK02QIht8jkmfk7DDKCRKOIj7PwUh5HKzOv-zqlZg8goZ4NIadxl07ai1iN805RaLoD5WWFn3_44EiTbqq9-6avpu5StAZvfhXbYo4PH3IEhDnT9-yNPYB_Yg2VMFuol4',
    ],
  },
]

const tourMok = [
  {
    dateArrive: '',
    dateDeart: '',
    price: '',
    nutrition: true,
    fly: true,
    transfer: true,
    health: true
  },
  {
    dateArrive: '',
    dateDeart: '',
    price: '',
    nutrition: true,
    fly: true,
    transfer: true,
    health: true
  },
]

const reviewMok = [

]


// const author = new Person({
//   _id: new Types.ObjectId,
//   name: 'Ian Fleming',
//   age: 50
// })

// const story1 = new Story({
//   title: 'New title',
//   author: '609a8a79d2936f8d7e36db82'
// })

// story1.save(function (err) {
//   if (err) return handleError(err)
// })

// author.save(function (err) {
//   if (err) return handleError(err)

//   const story1 = new Story({
//     title: 'Casino Royale',
//     author: author._id
//   })

//   story1.save(function (err) {
//     if (err) return handleError(err)
//   })
// })

Story.findOne({ title: 'just title' }, function (err, story) {
  if (err) return handleError(err)
  
  console.log(story)
})

// Story.
//   findOne({ title: 'New title' }).
//   populate('author').
//   exec(function (err, story) {
//     if (err) return handleError(err)
//     console.log('The author is %s', story.author.name)
//   })






// countriesMok.map((item) => {
//     item = new Countries({
//     title: item.title,
//     price: item.price,
//     popular: item.popular,
//     flag: item.flag
//   })
//   item.save(function (err) {
//   if (err) return console.error(err);
// })
// })

let country = ''



Country.find( (err, items) => {
  if (err) return console.error(err)
  country = items
})

router.get('/test', async (req, res) =>{
  res.send(country)
})

module.exports = router
import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Rizqi Hasanuddin',
  initials: 'RH',
  location: 'Malang, East Java',
  description: `Passionate undergraduate Informatics Engineer with a knack for 
  <a class="underline decoration-blue-500">Artificial Intelligence</a>
  and a love for all things 
  <a class="underline decoration-pink-500">Data</a>`,
  summary:    
    'lorem ipsum aduh bingung aduh bingung aduh bingung aduh bingung aduh bingung aduh bingung aduh bingung aduh bingung aduh bingung aduh bingung aduh bingung aduh bingung aduh bingung aduh bingung aduh bingung',
  avatarUrl: '/gwe.jpeg',
  skills: [
    'Python',
    'Django',
    'Tensorflow',
    'Docker',            
    'Bash',
    'SQL',
    'Power BI',    
    'Power Query',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'rizqih@protonmail.ch',
    tel: '+6281336573534',
    social: {
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rizqi-hasanuddin',
        icon: Icons.linkedin,

        navbar: true,
      },
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/rzqh',
        icon: Icons.github,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: 'PT. Sirkulasi Kompas Gramedia (KGX)',
      badges: [],
      location: 'On-site',
      title: 'Jakarta - On-site | Data Engineer Intern',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/D560BAQE8Oew5i6T6tA/company-logo_100_100/company-logo_100_100/0/1689662484890/venturo_pro_indonesia_logo?e=1748476800&v=beta&t=JG6gWJ7nfrlaVVRtKVoH67LPzTdjQCasUtOdiCeE-zg',
      start: 'Feb 2024',
      end: 'Jul 2024',
      description:
        'In the company, I manage and optimize various projects involving planning, team coordination, and oversight to ensure objectives are achieved with high efficiency. As a Project Manager, I am responsible for designing and implementing strategies that support the success of each project, identifying risks, and ensuring smooth communication among all involved parties. My focus is on effective resource management, meeting deadlines, and achieving quality standards as set.',
    },
    {
      company: 'Fakultas Kedokteran Universitas Brawijaya',
      badges: [],
      location: 'On-site',
      title: 'Malang - On-site | Network Engineer & IT Support Intern',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/D560BAQEONBPsiZnU8w/company-logo_200_200/company-logo_200_200/0/1729482329489?e=1748476800&v=beta&t=lAUP5rf27mTaKdk8fb4D-uT3lP6W9VauxjM3qVJ1jM4',
      start: 'Oct 2019',
      end: 'Mar 2020',
      description:
        'In this program, I enhanced my skills and knowledge in machine learning, from foundational concepts to expert-level techniques, under the guidance of experienced mentors. Throughout the camp, I gained hands-on experience in developing machine learning models, learning key algorithms, and implementing best practices for real-world applications.',
    },    
  ],
  education: [
    {
      school: 'Bangkit Academy led by Google, GoTo & Traveloka',
      href: 'https://um.ac.id/',
      degree: "Machine Learning Cohort",
      logoUrl:
        'https://media.licdn.com/dms/image/v2/C510BAQGIM3XtyiSK9Q/company-logo_100_100/company-logo_100_100/0/1630596771951/universitas_negeri_malang_logo?e=1748476800&v=beta&t=0VqhY2cs_XYS7uJ9RCCsYJ0ACEq-F4CvYnhlCmvxzGo',
      start: '2024',
      end: '2024',
    },
    {
      school: 'Institut Teknologi dan Bisnis ASIA',
      href: 'https://ftd.asia.ac.id/',
      degree: "Bachelor's Degree of Computer Science ",
      logoUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABjFBMVEUZQYn////90QD+/v7/2AD/2QD/1gAAQo3/1ADkAADmHyi2LE3kACvLJz7qYWPoTVPpGR/pd3rlBBUALoHxnJzlESjlDCIAOozsYCLvdx3/3QAANY26wNQAM47sdXkANYQkICxPZZwuKCsAAC4eGywzLCsAMI8PPYcANI4pJCwbGSwWFS0ALZDlAAwAM4MYFy3wxwgAKX82T5D4shDrVSPCKUUODy2bpsL0lxf64eEAKpGagR7pQyXoNCf98/MAI5PzkBn3qRIAJpKrjxvvxwk9NCpZSydRRCj1urv3yMnxgxvweh3qTST2pRT8yAjubCBIPX8AH3xyXySwkhrvioz52tsAGpXPszr2w8TbtxDs7vNpWCXDoxbT2OTgug69nRjnOD3zqKmcMV1XYHo5T4FxcG6Wil9/emm0n0+9pUehklmLgmRxgayCbCJSRSioscrrZ2pvOHCGNGejMFlbO3lHV3+ENWlra3PKrUCtmVJcY3dpeqg9V5TpUVXSJTlNO3wAEJesL1WJlLcAEXh1OrETAAAgAElEQVR4nNWdi1/a2Lb4ISYxpFQpFWLDUBlEIiKFoqUqvlrjo7bFjo/SVCZieWPpY2Y4gDPtnDP3H/+tvRNIeEQR6fndu+/9nKmQhP3NWnu99t6JyfyD28j68ou984njh2PpNKu29PjYveOJ872T9fWRH/37ZtMPvPb6i/N739I2iyVktzmdToeuwZ82e8hicabHjs9frP/ATvwowvUXE2N2TOawWh3s2uqryYMH+5ubm0tLm5v7+y8PJl+trbHoO0xqezhx8qMwfwDh+rvj8ZDFjtlWD/aXFhIJgoJGkrTaSBL9zSQSC0v7k6tWxGm32L8d/xBhDplwZHliPBSyOUFui/uvEzSiYhjCoDEMHEAyidcvX7GgufZQ6Nv58nA7NGTCk+M0lt3awdICQZHGaJ2gJEUsLE2yWJbjEyfD7NMQCZeP2ZDdYXUsbiYYku4TTodJk8zC5iuHFUSZnhiiug6JcP183GJzWNmD1wR/czqNkk+8RqK0W77tDQtyKIQnD20hGHqTzwiSHpSu2WiSeD1ptTpDzuPhDMnbE47sYfEtLhHUwMJrbwxFLL2yOmyWsXf/CwhHztNIfPuJ20tP32h64QEI0pLe+/9MuD4RCjmsq0tgJYbJhxpDEptrVjbEnt8ysLuO8ErLPcEC36uF4YpPazTzbNXqCKXPr+rDtYP1OsIvtnMjo3ZuB+cwucAPXXxaY/gFGJAh1khX1ycsE7clBCvJHvcS5Is0yG9xoYd1YVqtbxDjExgSGFnLeM8uPLTZ7UMgdNrtFoBsl+TymMUJ+tnGp4RgRALCzYVnz54toHiUIa8coegURn8CPoNu86gMBbrqtHxp78D6i2O7xWZnb094z/5twgaXsrBfzk9aY/4Y+NZeNzuPwkueSiy83j9YXEUJQ7M52NXJ/WcJgxiAIcG/v2w/A7KQxYPN1wsJniJbAS1NL7EOm+28+esjL87HWIvdZmHPh0D40D6G1AECMjsExul75++W11+wdpZd4nkQGep7YuHZ5oNXLE4RUC4UQgmh3R6yNLOn1f0E3WWMIEZ7sNbMnponKJkkhH5WdvHB5jMQKRYzxVP7LBtKL6+f7E08TNtDqC948AxFhmPYXp1MjIVwP1A3IE1fnURtcXV1DaOhjkI+O/7l3sTeu5OTk+Xl5ZOTF3sT977ZcSz+aqmdkUyAK3A4QxYWMuB3L5onvDifuPclDVdCt8ahyPTVIv6pNZZ1OuHH8a2wjaHwfHl4hOnxF/DPkZPze+OsDYHaUM6Omw39oB2l6nsnPUsScNY3OwQF7JI2ImliH+5JyPllb7nnKesvzo+/sTaUQtu1X0LCDtnYb8fKWe/SD4dHOG6zpCdUx7N88gJVXb58GRsb+/Lw4T1UblnWW4F1OGLvfAK183eKgVo/T1tY6+oCpQrwNQumY2xvRL2ecvT53ovOC6Fv7uGf+gI/dTwBR6gHLE/AQLw3REIn3FD7dYnbyPK784fjLKR4WJ2VkWVjx3BSi53LPokMDDGJ+NC1QPVZW/NoNH7tbPobGupX/w6koaBGrG2YhLa7T2ygJRZ7T2UEqSEDgAaJDTVQLZZNp9NwW/CfFpzvnYOqLoLhSKw57OkXOJ/Ex4Mesmn4P3QTldOBefzhRIdqYDawNMdgD9Bxd74Pl/DO6Jvf7uKfD1mc6fS3h/eOkWYd38NFQlxzwi395Pffvv79xqS2N19/u8NiiuMR8/K43bFKLDgcFhhAy1/wKd9//9cf2tF/fP3tP09Y5UrInqCyo/ZL39Jpp/pDd38zjd4dNqFpdNT09fe7aZvasGbZWi39/c6Hr29GcTNpDf355rfvEDaEIPK6F3Kssqzl3DxybIFznnw1tR9tUs5/8/XDne+qAnT9UvrJB3TajyBUOgA3+rff7zz5jrQK6eL3u3dAaiCHDrT2fv9x185avqBIAQDfmZfTdpv99zdXnIB/6OuH3+/c1X7pyZ0P/1J+CB/zQwh197m9GfRU1+c/0hBirZuPQ5Y9857FaXti6uOkq37pBxIO1kZNd+xOQPw2AYCs7V8G1xOEvi84LMKHQyKELn0AozkyYn4HmvrGCDBadf23CYclQ9Sn3+y2MfPyVYBZgi/N/98lNI3+bgtNpJ22v40uxhUiLvqC+79LCL1i7U7DMYgIxY0cbRJMfYzG/52EJhPEWk+MLgVgl5R/hShwXJa7lvF/KSFYG5sRn5ABMjLraiTnL3i5b8LzWxKup21DlaGJ/d3gSpzEi5l5Isddkm+lC6l4nU1VCZ3j1xUbryZch6xzqISjXw2+EC75ksi4pLwry2eZTI64zqSqhKzt2zWIVxKOjNvY4RIaRjJcjucyfLlYcgtigTdl6GsvpBKyaBgNTAjJwLAJjZqQ4bMrSTEvud1yg/FX6Sh3tZ42CSEXezgw4UO7df/gv0RoMtE5V45viJxbkiR/huZyxSsdo0roeHlgtRwPSHhscRzwkzcgdF1v443bbLLk5pikaPInmZK/RlQpOncVYpPwAb/ogHxsEMI9i+MVTd6A0F0Us4MjcnnCPVuPEFG/ROX9F1KyWGr0RUgRaw7LiwEIX1gcawxxA0KuQFzdp6ubkKUuXXmSiLol6tJfihDu+pVq2iIkmQQkncalHSPCdRvrSNyAUOBc9fJF0j0woWleLLsvgVAQiSgnk+UVKd8fIUEvWJ1pQ59hRDhusy7QRN+EXO1iXq7VxHnBPaiiukpJf5aImKKEtFIlCY7jM30SEuSS1f7lhoTHIesmqm72SSiYGLEg16r0RiZ5OaCmchci5xJF8IqNlQaf94PTz/RJSFAPjK1Nb8J3FsckSfRPyOUiJkLKRUlOrNMDEgpV3rQiS/MFPuMnRNc8mBo+6e+PkKBWHSGDam5PQhiErFKC75ewIP87SeVXxAL1VsxxAzC6wcHz2flkfaNIvL3gC64MLYs56nmfhGBtnGzvodiT8BsMwhsRCrnI8xpf2kiWiLf1crTPJFbXuBJ94WIy/mQhS5EXIkQ2SVLk8nK/MiToZ1aD2KYX4YTFukkSNyKMklG3KG+URXGjAdp1pRXsdX6NZwiXWPPXq2JeZqgqV+MjphUxbxxDdBAS/AOrpedkeA/C5ZBjkSJuRGial/LzZR6CS2Ijn5SKydmbEXJlHoafCH6wmHxbpPIuLkJk3QVaiNaM7lUnIcGssbZeSw56EKadbIK4ISGXE91VqrBC8PMFGD9yvxUztbmKBEfmxaq/xERdeYLz10lwFczFJc9XDaTYTZiw2nqlGd2EEyHrEnlTQpNLLKxI9eclvnpJEDl59mZe0VUSV+RiJOpOgpnKE/N5vgaUUoEvyEZjuouQoPZ76mkX4TI4Cp64MSEH7itHmmp8PkrSOSlzswjVVZKfJ5OiIGQ5kKdc43Mud54p8TU/ketXhtDZVUcPPe0i/Oa0tnT0BoTCvJxfYS78YnKDJGsiLd1IT11FcaVE12dRkc2dFKmLWVeOJpgMOEejOLAHIbNgtXXb007CPYtOR/snFKqXWd6UJzYuaL9I1fgkcSMhcg1xpcgXsEJyMpV3u2okKZlcUd7Q8fQgJKiXPbKMDsIRO7uqO6VvQleRbzSSG2Jjg6yBclHFZOEmDoNrECtgbNA/hShddrtzJFV0cdFIfWPeQBl6ERIE60xfQ3hsb/r6G9rSvCQliYtszZUXISIhio3irKt/KXJl4nldKa8JGfK5/4Incn53hq5nknypN2JPQvq1NXR+JSG4wgOKGIBQyPLREkWDieekOpmX6zkpW+9fUV0N4rmaLHEXpWyRr0dn/WU6meSLF+INCAnqlcOyfhXhmI1NEIMQQh/ltzkRoizQMqZYF7NEXaz3nS2Ct5gXM4LyT4Km8vP+S5lkmJJpo5i8CSE4RfvxFYQnFmW5xACEYCCSK7NIalyOki5IIULnxL6H4rwsmVQSLl81UYVsnSKJYtTtz/EG2VhvQoI8cISWjQm/OR0dq7P6JxRMEUlJKmbLZI3KJKkMGe1XTTm+aGrqNAcxaZLkxbLJxbnL/MWNLA0I0dHhMfSEL8BTDExoEgQpksG5wHxDZMoQljBVU39SdOX5HNea/l1JUkQ953fNcgVRzGz0HdOoI3Hf0V600ROOO9c6FxHepNYmIJfhQh2CWy9V+bxUJq8sCLZO5MSIIFyqQuRyfJmb97urDZEiJFE0uIQRIUFYbV8MCHuI8EaEJpO/BjGpG3rkv6AKYrLBiKK/j7nA+To4diEnYQUQokRypVooiTxPyvX8JWOQiRkSkhCeLvcm/OZkKeJWhCZOaPBybR6CywwMiRpfFzPc5TXxmzBfRNUKrkDjlAt0VBIpnpeLhaxrQ0iKBrfIWIYJtm0kaoS9RHhTQhhS0RIv5zgX5wLBiHKjlOevjm44IckjM+pqMIjQVaakeqOQ8a/4510ZiFWNcmBjQnK/zSdqhF+cbOexAxCaBH+1yEfK0fl5iJ3pGgMpwxVCFOZrIl9CuZZLRGUnocpnNlZWVp7PZ0FRKSpSNDrTmBCNxOMehJA17XcffHNCZHG4vMgnc/7ZEl8q0kWx5jKwqYI7m0TxmUk1p2CjpFLtolxMwiikCBjJ8OmNZUiQDxzO9W7CY5u1+2YMRAiNm72s82LhbUYiGPFCyhOZHsomuKMlki9GET2XpVDlQ6hSNCXKyXrjolY1bbytRaQbZE/NBoGNLjptEq47OyLSWxFCX2dhQIqXb3MyXxAJKSl0Bqmcq1rnyVIWVwO4LKFalOcXVHTj+fPnfgHUlCDyhhp+lZaSi450F+F5qD2puC0hHpCQGMy780SEbkSktpRYcPkLEs80ssocgCvLSAogQi03iqWkTIA9pUTjuuRVhMwzq5YnNgnHna96HHobQsRYIEWAKJJSkqa1kpIwmy0TvHzBKfkVHEY1XCoqkawnIRFL1ov5Qi5PGCrplYQExTq/dBAu93IVtyVEPRaJLOfOyAzREofghzFKlS796t8cVxJrirP3X9BS7bKazVYztYtGkoDcou96aXu39x329XbCY5ujx4G3JsTBKvyPq0EllTkIwQ1JLZGPtopxrppYnlUyQ6EeSRIUaCdupJQRrkiiryQkdLZGJWR72pnbE4JGyshIgiJS2KREkY116yxrQxQVcwJhEFMzPeeymRpqeVG8ctL8akJy0TneRviit50ZAiHK/lFQ46pRZTeA0mhRV9v3AkNhh5ijGxJPEuAqSqVSUmSSRrXgfgjp163gVCF8aOvKKoYlQ8HfIJCMXDW+6i/xjVk9n8DNFugkzpsvyYvcvLtWrssiAzpKJY0Sw74IIa5prnjDhCOGB96OEJxCtpbJUgUlpZJL9KXeNgpuU1mUathjuIh6nWeS5Vz0OZigbPWCIG9FSE02XSImhKC7t5LejtCdqZPYZiTdqLd+ORJtE2C2JDeq84rHyJr+XRQLdYjWeEKWZEKR7OCEzGurOmVqUiwpayDr23j8eQhqypdg+MsSUUYRGZltH4GQVKifCJzbBTlJ7d/uaqGYZHgKUrBr8srrtJRwqGqKCW1oVcqwCTmJzj3nBEHguJUaf+ESCp257NsijqsFlzuaq/ONjRJPNDIm/8ZboSCT1xUHriOEno+3CE8s1mcGOz0HJ3SVaBCQYvCFaJG+7JLJfIECP8H5L8vJCJ+pU+WNaonCOiryRrWLbsKXBoT0klXJEhHhhL23u0dtbdDIu4rKgFwBm3wuz9e75qtdRRLSf+GSYMr8pZRcqfORvGk+l4QhWIu6r63vtFbuGWgfk3CE9pqEY85F4xsxIKGrATGMq1BWDKKr2hVDz9cJPAg5Ex+VCEEWo4UIT0uNQl7iy31MXDUJjWwkQa0pxQwgXLc7Ng121POvBl196YfAWqiRzWVgDaLR3mtIknHMKfjzfNJEyFyRL2ZzdZEhxeRFP2XWJqGhmkIezKqExr4CwrtBCechFluJCupKX4HIr7R/76qjcjFOghtU0SQStarMy/WSyBdW+iqytlbQrhr0HVIoXP02oWHYo0CjKunAK2hdZYoWk6W66g2ikU5LIwgQs1ZLDCNyOZBimZIu6nSyUe53SVWL0Jow2g9vxQPRhFLDSSNfsTgwobuejGZyZUbRTXeyU0vRh9UkQ1azDFHLEHQjlyRporTS9xLVFqFj32CI0avoCERoMTwm4WAHJBSqNDd/EbmQogiMqxW6C27uBpXLUmI0Q5H1KuCJVOkmi6lahOwq37v3MBDHMeGJ4TCEyIcdcDcCly9tlKRyWYJQ2+S64MUuLXUnG0nxMkfTFzVCJmUmkq3eYEpVI3Sy1kTP3uP8Yh0R7tl7FdnUm5AecEeJq1HORd4mpVxWrq9c5pIbnfXE2QafvCR4SaJJMSJxhXz1hkuoVULbPbv1dW8VZBYclhNEeM+2ZmBv+TXnvePBCLmClMxcUuVZYV4q8mTXMjCuKs6WaLpQKCUvM/kax914iXhrz8y4QfIODe8ZMpm/OSeNglerfW/QXUECIc9msi6cAddN1Wg730qNoKL+aJbjZv2cMNAC+BbhsW3VwIxQq07w+ab1tJG/Z5AeD0xYbbiUGcHZYrljgEXzspjLiVz/G0avInwXchgMRDTKEKFh2I0KVoPvIRWaeinU5M4dPtnsLOdvJPvcS3k14cQyDMTeAPSmwwKEJxaHgcukXjm/DGOXrIvJdoxCLDxAvJHxNCI0p428HbOAijWmvRBrIGRiDU4fBmExUvT30Eh/PnmLLSgaISQOBqYmYQ29MJsmDE1pwmp5NwxCQYjw1V5L+Vw5uVO6gxBC8mfg8xmH/dxsumd0B1Dxf3koe7nB6oiirPeIavACSVXBeJ1zv4TvQkY+n1y1HZtN35wHvWUI45RdH4QQbEyHfxNmLyMSc+lufurK5wRTlDNV/dz1WymvJVw2rqMtgiUxGY5T8gFaBXdzQgES2mS53K5/nL+YF6VMqYZzwhpTdXH52nxSKviTV+w46I9wxOLoOeeCEb6ZTazR19QiCrpvTugq1es0/H/bciGuKs+6CjKFM31/o7xRqrrlGkeIYpIv+2/j8SFqSRtlwfS+Iz1iYvXuUC9sfg3Nhg9AWI/Igvt5Q1vrLbjcBTErCEK0VAZCIV+Us1WyUePzVSJaKEfkzACMOsKx9vRPg0D57bpJX+hgZFFHaEX7pAfQ0gzesOSWi0rJ08XVimIJJMoVCBHFpxxDkGIp0mDEvBRpuF1CGYLw+Zs6Dh3hPad+TSyTaukkGEs7ItQMER0/02ksTpEHGYd4XxCXoco1cOnuJFXPuVwCx/mlCwLlUK6kJBXIcjX/NtfIwweueVODJhoZzn+TOE5HOGFf0w++GQ0WuXwg1Ilt5lC7GQk8UzyILSUuOdNsst7IN6Sqf6MoSm/94PtqtaQJLwN2NYh8Mi9nqXyVSUZdgnixMW8qJHkCzVqs3DDHR4Tn+qCFkaYlRkd4AoSaUOXpGK3/dnkgQu6Crs0XilVJkjipLpWykkw/vyiJsktGSirMX/A13kRcZClU5i7PFojIhWllZf4SUmJevHpOrSfhO4uOkKrMVZqjkkmwiNCBxSaKkUgk7pk7g/+IkVsRmlwFRpKqcvZSggy4Ou8vSHKDly/9RQktKBGSJSqfbNSoaJWpb1yKRO75hUgmC9HnG2/fcskrtjoZEZ5Y1GqUDJ2PbHsDBPxHxnrosLwwscpitsjpdDDomZnxBGPTFcyv1AAGimk4fz5STW6IQkMq+3NiQyhdJPMbeXEWUsFoTqQlscbMl0S/IEWqGwWCKLizDZGE2yLTRL+7wtoJsbVkUuHpYNg7MxMMTsdS6JMEG3pnapbFya0gfDczE/CkKMXSWi0jAz+BZ76ULNSKDTknyaWcX3BBppsnLqqmC5CveMFQNbH8XK7Pzzb4RvR5QSTrtedcpiDRNaHfQFVHuNycwaYjp2HEMBM+FfHYA8K9FiFByruA6N2JKOMSEZoHJhRMYqN4KdbcbmDwu1yc4EoSfD1CZEo0tVKUIzn+wi/W/SsZkkzm3NWiCF2E0dH3quI2Qm2DAbXlQVKKNx872kZI8Dte9KVqTcFb3oIQvHxDbDTkKOfO0FIyWc4+r4r5ZEFOEpkC51qRJIIqu8TkBVcDnaWkUjnJ53K5/gE7CJtRCyPGZrwzc3LTXrL2cx1hZDqwPRPwqqZVSZBvkVtwrnyyRBY2ksXCRTGXlKXs87ycAd+I7Kkg8xkimQHfXy+R1exFo16CL27i9fWEthYhGff4Pvk8cboXIb01fciIO01vcksZYka//5JI1rNivlG/2HjuTjZgPKplfleVE0okX6sWpWSV41yzrhtmir1lSG77zviUb4bqRUjunpEEQ8cr5BDGYQtSSJZLmVqyJhH1qrShk5EAlFEIVl2uwWoZPcchI22LJMSE25J+HDaXPkdkZVe0RLQIB7elGmIhnxTqVaJ0WWQgiPG34dym2NbLlgIhfjIvQ6uEiTbCZkze/M8t/KEeoiolVyBGA48h5JK8WLzFozOMCHXzEkw7i+IPHQbLNQaPadoal2MaUrEOeYbASflakbmBveyf0KBcqMQ01qtKcUOo03DCRSnCS2BbS4XnlxB1D/50EAPCFxaDmjADhCdtuUU7/6C5RTfjrFBtULnn8kqNb8j1AQszxoSGBdFm9mRULu03P+yxgrv7E3eOKksbjdK/k8RQAI3zwx6EBoWqfnN84U9zRxt51OMwziTzlxkiT8mGWjr1ufNKv97vh9BwbgasJc7xDaYt+q3TCP+YR9qbuactEbg6VSfIKxZV3v+p40rm94/7IXxoVPJV6zS3rbVNPe0i/Ks3xGwmXxCu2Kn/+NdOwpFf+iEcdxiVfHGtLd1rIwlq/dZLu+78iPmjAYVw9UT9L++7rtRL37sIQ0bzg0q9tEfNm6FbIu6DsOvOj5ifTl0FYtgejfSrDW2E6xZ1eq1rtCk17/Z5C4amqIh0pJUx+iDsvvOfO269MDX16NHU1HWuPtpN+GcfhC9Uh89Iiqi092Qo8xbNuSf0DgI6ktqqbM/4ppUSgKOvuaepbsJfdQZCmHpk+vPp08+fnz790/TokdbjrucfCz93XmjE/I+hNmiE53YrIqBT0zsYSzqT1Xoajeeemu5SOorvBKbDnkDAMze9hfV0zX7cB2GPO/9eMxD3o0/fa9b//U8/P1YZ39x90mq/4auD2+ki7NSGXoQPnWtodo0+DeNun07PxXYjGFGZPzyxOJBDpAMKXDBwGj+TIy1jei1hrzs/0rzzwi/Ixem+ARcXVb58Y2++75G1/QdffarL7bRrgxFhWjWl2z5I7ckdT2DOE/hEt8aZaT2Exyl1GtveqRxJEZ5qvgSlv3l83Z03t/7biq5/NXcJ2PwRy+WNrZPw0efuKxk7xBbhuk3Z7hMJBESGis95KtJWIIbSJ3Uef12ZXmNkmSDbXwiHpkivX4uh3Xlza0Caf1YIu80/RsTmQyW0hdg7H/7AV9fcTutK5vfXW5pW7rTti1NHvsAOxfCnwSMa781HazHQzA1+KYM2P0PSuCbc33oazeGbtR5+xJr4qCsW0HUbE9rSHx65fv6seJf7v3ZdyTxi6C5aq02aUSkZ93mmfV4vDEFQSDQBo66ngahOP5FPU6QU35nGMzT8mvPhtWuiHmlcn5vapTpEoZcIR9SIAAht7L+mHv8DhugnHH5qRtn8T6c2XEGoza3tBgM+j4x6vh3EST5+yrB+XRsS3tmhL+jxBvAMDfnSkb52HOru/D8t5cJd1ttGs97gmH96hCyN7cPo/X/gG/Vwk6ANv581bbiG0DZha0U0ZCq+hdw+fRTcJnTr2pp6TCLh+cKesHd3xnfIKAMRFOkaQs3hm/9sEeKcQBewmkc+/qUFd9hC/s2+GX2kGCKV0KQdEG1d0zA8aq5NTOuSI1p5PxpZmUZVX3rJGsJrEyGsQ6aG3vLN+XzhmcNUyjvXnGRjr19f+ot25//6tWUgUL8e6ZiePhYea38hf/kGskj1jqgi1wT3XtBGpJFD1NaXsspaE93b30hsRsgDp7K+1PwNx20QEsR24xLBbwXDakERbR66llDXcVOLcATplqa/OPr6H01PzcgHtACbhB81wlaEapwhamuEsTckK5UzkWp7QZi2Rlhd5x05EkHKZCUcbs2/gZyvIxT+0rzglDYkMbtmaFAErXMdZtTtRzrTiZVaMy+/3tfchZFD1NZ5K0o64/F5PsVlRhNlorXOW41qCOQMycNwME5B/N086FrCP7U7/1gzq8gE6gl/bieEb+/r/LtC+FkjbJ1qNhtliJqW4p5GDmdinoAnNlNJRSgMifZ2qWv1150ta8Qc+mJbPBk5O/QcYX/xynENof7O/6L18WMHIThIjdBsntLJvkmoc/g//aLJ9zpL08x+SUKK7/p8gcBcYCeOxqFuv4W2Z4be8c2kxK2d2Jwndorj9dfX7ZnRvDoQav9GJlBP+NNjZJJaTWgLZxVCLc80P9URGjnE7j0zDEmJR1iUQbSkhFrDwxATnjf3Pe14vJUdMKlzc4dH6rqT62TYduf/aRtZeksz8teUENWaqQehTsb/6Ag/GgixpaVYOGosDSkgiHL7E6nUSlv7nk5CuBpFV3wzM57w3G48xVBNJ3qAEv0rCHV3/qfHOo193OYtAPHPx4LWehFOaW7n4y8/tWmDIeG6XanBkPEtsTkpypA8UlJ6U7d3Td3JzaSmw9OnRyKDbG7z8AVkkK4i1O7808c6e/9LRzYEodljfV+7CGFgaqGDzmb9ZOAuMOGEXa3ne8Oew1TbexbJRee3tj2kSGZiRaIpfBTDiKLiWyA2TV/pD3W6dV+zq8gh6vqsMP5zXxtT3YS6LOzn+5/btMGQkFUfdxypzAQ9Qe+WqPcV6qsv2vYBNx0mLe3O+U5xnowm2U6+GRIKUZ1uTWm9xiWk++01KpT9tiKULsIpTQFG/tLZr/dXyPBda406RaR2psEjHqZUr9/0Fb33cjNi0Jz4ERIAABR6SURBVOsJe2Zw7MOwtodjxoQ6qI9TmgfAOWBX+q8TYzehBjXSlnQa6A4QHo+zWlpEU2J81+OZC8SxjeQXnfq93GhXiTrFSONx6/HEU9s+HLxBpg/htyHhRz3UX5pAcQnpcVcR2/yraao3oU4x30/pBGpUUBy9i4JupZpN0yTFk4QoH516Z3y7+LP2/fjaMxUkdAfoU88pRcqxaUWh2SsIddYEdUUjVEpIj7prqSM/P+pNqBnl94/bb5wRITRl2B3FK6fbAZ/PB3mfZxrFKmhwtT1ToflcjEg4JjOIEMTHbyvriiiIDQwJtdqK2RwVtJS3aQJBil1i/NieSfQk1JkdgwwREVpxLAY+wBPwBWOxac/u6SGkiESP52KYjxWnz3wKpmgIbRAhebibUmpyVxFqZn1kSu86mjnB/Y/diH9O9bKlunMf64f30975E5ah4hdOPTPeSkoWYYyhoi/R/hyl9ufTkHHfKc/QXg9eN8S3am6GhLo7P/KLnrBVQpqKdtbbcCmu2+OP6OUf1ZyjQYYIhOrTcpmz05gHorGU9v5z1OWO59NAkvgKu8SYLy5XAmFlJa36zmEYid+NCHVMv+gDnJHWIQKEOh2IgNBJKETN+j91AY5RhphujkIwNHLcM+cJb8eb/rDHM4bMe4qtIbdinmAgsK0Y1pQXF3TITavRq8Tuj+gJddNQehP4qFOMKLfoJNTpJVgpXeWgt0Mc/WBT9x3iCIxkUqdhH+QLKYz82mo56SQcUW0NCSl+bEfEsqN2fDtKXLvGsr1vpKD1C4IPPaHeBAqPn7aHNx+nugh1Rvlpe6rVW0ttDuXBVvShpOgbKcYhdpuOKHam+1lf6HlteP4CgnNRHYCM7AtidaWfWdW6dCeg7s7/9Mujx7raEzjEqfut9vhnfWURpNRJqC9b/fP40f/o8pJojx8efaLu4aYq4Wk1DWJIMnWK6hMomD7vJtSeuaeFr3zcM6NIc9Fh7/VOP73f+vXp58+6fn2eEj7+1GogNJ1rbLeWmFBftvrp8+en73trQxPwq/qwEkYKBvHafMVi0MqyroOez9wzP7R1bMuniXhgxqOuxrSy6R6E+hluRdl1vdYvPADF+x9tjsr8vkuG+nnWjiv1mmFregr6cC5OIcVLpSKtAC7R+7mJqG6qn9Fn+LNtnzcY8GAdQMbmQzeibjKlo4GYpj63DS39xMv7LkvTPc+qP7dThHds1mdKMWY3LNEMvzUTC3q2mhXClwbPvjSPOR3abDApfQp7w58k7Pzx4HWE/uhCvN8VlbX6NfJLB6Feo7sJNePZdaWuDHH0XzbHgVIkZXY9FULeCQfCc95pdStJwqGUL7oJdUIkI5WY1xM4o8lUUFlwClECa+2SYfccvtYxQTcxgwl1Vgl8fqctNb5Qd4ZoY5sDiqz4PDNzgblPqdR2YIdSvX3I4Bm06DnC6onxcCDgixNo/uYw1VxRa+1+/aSxbkEa++if/gn1pbfOC3WWTEe/s/hNTUr7FPT4fHESZBHeVlSw4/UBHc+CVkLZ7Tlv7FBU1/DTamJMHjhsv3UiGuoW+Lz7HYS67PF9F2H3DLd2OzoAf7dZ95XtBLizZ5Ut1FX6KIxliF6MZPgsaDQScV5/NL0rNQs7IMhTRcHB79vah6IuIey0gG1FDRw+62XYNQ47ajrtV2orKI5+tTteKcHM1hmueCrzusxMGKVNTMco7Homu+Mlvjtn2gQAJW17fNieMuhBIG23s62b759C0/39+X5bOGDShwPv73cS6s/8FS6kr9PpHeLo3zAI1cUlc7EK0dJWSDBUX2i/4pns4BOVrevaVigyHvSGT5UpYfK1tT0E11JxDDE1pZ99Aa+uhV4jH4WP7d+1E+oXVkFMM3Vf/3WbQ2Sbg5BJBQKebXUNDR2fDqPoDcKZK5+rb162O9o2K5Lizpx37ohSQwZqv93a6HULZ/X6Mvf7+zpL2654oLQdhG0OH2TWVvTXLTkZ/e5svWGEjpwGvbG4UkIk4yn8erJVNjRyFWHH+y2olAduk0wStKzE4uSkQx+gttV8Owv579tE3NZgZHUQPtIZZTzuonqtbTnE0Sc2q+7RcuRR0OvbEZUIvFkZPDdfSWi2sWtNFWUIcIqxCpwK0d+2et9eOWza+271Dh/rkr6QDxFzz7UYqMu/dHl8PSEOtfU63ZQhxDJNHWMwESl/8nljZ1qdkG0VLwwJ91rv6yLlbY+6zYuRPZ4d9datObTwrY3wY0eFFAmqvSbc/KJHjh/V6zACEvTaoBKO/sfmUJ97RclHSs+Y+LQ3fKgaDuQprnvPDHqJh5KW0FvT3rlT9VRa8ii1RTCoa6y96RanOnWrTW0Beeqv7kVvyFV01mke6//CM8RtlxY0QKU/TGXaE9tRbf1MIBDAYQkyM9e/KwhlUXixIn02Pb3VEj9/6sVBvOIzmlIU9CeipP6Rfh0zGpiCgD/Reo8+FhRHo7WfHutXUuMY5pFuNZxSLwBP71hTUjv6NBiLBZRlbMhfx5SqIL2qz5oMCc3n6vuQ+IrceuEXeBtvQNV39NpPu4IY/UnXMLIuJfzpH3zr75s+a50def90SlW56FOtfZz6U3feZ+Qcpp7qPkHqgcagCkhWgjsR+tBX4UklHzzCN5962d87u1B4qjrFVlQT2YVxWPGFlRCVTrBNi3pf1xS91X3Q9GKPHv/159PP0PN//vxLN/80pTUYlrrzHnVdqQmozDPRZzEvwzDidCV+WlEmV9R1erZer+rs/e68tmd7k3IgMHfIkKexU3UUJNaM64u9miBMPYI2NfA+p1HTXWRk1FvuQdVOWpoLBD0ej9hybv2/Ow/p6b7mdKgUxOF4eUacUeXKEKsO213Dd2wPvY2+Sdusi80OMbI3AOZz1/cpfuoJHKo95Q/Qgt8+CZE9baUnFHjV4JESyxPkmRIlMcyk1ca++S8hjv4BoZrugV5o1AS8kJqT/GHAq/q211b7vV4sBu8hdWopZjzmnUs1tyimYupYBNdjZY2KqMMG/M3G6pUKWz7fTBBiGToVnlEtPGv0SuDe75J90XyXLF2BXLhpU0H1vcFUc7fmkhUtff3hjKOmJwD4umPLCPRrxiuRVCUYH+hdsvg1j/tKtS62KzaL5xJESCnt5Y8LYFK//2hNBQ1FRrRrSwgPOU8wJQUD6hK2m74PGL9O9hmeIE1FmlPfsscbVHJONdBJLIIYu9L+ofKNfgABTqpGlG5biQA+IwB3HE/pbhq9SPYKwhGWVbxiaz2O7IUYFxf+j1p1u01AvPvjxDj693ebw7HEq/ZlKy7ryp1UCgC3cPi1YO0OuK8lhHwfrI1+qd8MXE+RajjW3A1OLqxZbSDGH8I4CnEaa11VNZSWAtNBLLImJS3P4UGI363eyxNeQ4jeXK17gC19GgjGeQw4PeORGEZ1/uQ+iPF7dyV1CIBfYQQ69vlmH2IzqUNPgCaYeLNPDIZlCJY1sjJXE5ondO9chQzRg70+mJuZaYkkD1PqVxSIkbXdGbb7H32DTOirlolhzqbjPOWdFqlTPFGvNUhZe7/q+HpC9IL1pp+l48riE1qKecMpEhKPVhWI4TfBqNp/Hybj6Js7IdbBvm4V/CAYDW8z/M40ZHXh3bZCy6LDMnEFxJWE5jF709PScd8uWjotB5SUOlKJebalZiCQOLA6bOyHYTGOmv5jszms+4ReVpHpwO6Z55QniYBP/zSrA2uodyzTFyHyGZtKzCDFPBJPSd5mBEelPK0qEPwFjsNhsw1DjqOjbzDfZIcPpFNzHs/MzOmWdBqTtAn7B1Z7r4Sib8KRdBMR0jFvpTKn2lP8mBSvJ7zTjOwZagEz3vnjdnZ1dPSPJ5hvobUSu6WOYiXgic2FwQ0eHklKfZN/abX3elN1/4TmdQ3xNOjzeHxnqtbCeNw98vlmWjeaIRGj0/b9X6ZBIeG839I21uGYTDQHIE3ENcRUbEvaOtyemfFNKxVcEgC/9Y5G+yYERKeKSKYOT+Nik2jbG5N5ufWEDcXkLDywgl1l73wdvTkknPH1jg3sJ/uyxQeDozVnhmxBcIuneSawHd9SRsqDPgCvJcRSVCdCSLKp/1TFMwfqquzWpMXmxwyZ2FxDggTIG0kS47E2p8O6utRaIYniDdHr9bZG4pZvW6SoeCzOK/MWB/0AXk+IETueSwj6EjhtmWxx+lBu/UFTCwcsgrQ9+e1vUx+yRIf88QEGH+uwrr1c4FvVWiqCthOeqX4YfSKGvYHKTkwt3ZKTfQH2QQiIdmv7gwnhzvoirSpOPObzVUTtzpPEswMHhmSffPhq0rbBdrMh2X24y2I89mBBEx9BSofeGIke7RQIN4cCfTTt8cW2RSVcXrSGxvoA7IcQ/GLI8UoXo1Lwq9rDCQlKOvUGYhVRuwkMRS68XAVK6HuIffKf377+/aZz4++bP75++M9dNoTpHK/2F8i2DS+VaV8MLSFgRI93u+UbpHhFmRajE2uOkGE6cXNC8xcL5GhNJnIr3NIc5d6SgZmALxCP6O4CQ9KJ1y9XrVYHwgQMNv39+90nT+7cefLk7vfvaRZ96gS7abWuvnyWoNvwCGbHF6tI6q/5fPHWI3RIde8W5KaW4+v73T8hilEdC+pyG2nau90WGaLHT8U/xWIiLROU3riSPLOw9GBxjbUiUmB1ogZ5mQORWdm1xZdLCyTfTocvOOdLNUNuatcblNuPoF5bWcOMd0BC856FtW6qwfbWtNT+izPeXYo+g1QmsF2R2rdXMTRJEYnEwtLmy4PJxVer0F4tTh7sb75eSCQIqm1frraRfs6D8xiagjHHyLHATpulAz/v7J6fuC2h+cRms06qNedIGyCIEA1LULRU0OuLBeIS0dkg2UIrlfF78eB/AYymmQ7JMbQoSQRO+KQ5tAeUJo68KBhG19fmF3BpwZZevr7HNyVEJrVXwQRa2KvcY7ICMpwLhsNobzhF9zjyikbLp3Ox2MwW3vjhi8kMk/JCHoO0hZnxeiLN4yBbc1jGjBPeWxCazfcsbGsCtk2EMUVrGV/gkGdShxBo0aenR4xuYuB6QAjtvbuBQBBsGMjQd0YTYvh0G7td+K5ZVWBoyLivzpZuQwiD0Qma2iEcMaAu1QEl9YG2KltuvHMVkqDOUmJzMrNno1ommZkJnEZIGYJBtBoStAJAZT7umUbej6yoz8YlE6+sNlvfQ/DmhOblcbuDfdYmRiruUTZOE9RhYE5SzD5YB5ACGY/FAjKdOkup918VF938d+TQu6XW7VJzMWChIWzZVq6UgqCQYOYCSmVBWZtALTkcoZto6M0JIe8HTT3Qi1GcDpyqyDMzXrzRFkUfvjmQQNCzG2HIwxh6zgYjb+8qcjjbCQQ+YTI60HSspLrOE/4bTNGQjXq9MkXT/GlgrpXukolJsKE30tBBCM0nYHB05QWy0hyFdCocOJwJB2N4rVggAIC+U5ADeeidgSSLScVimKESgyzMEz5VQrJddZtyJYAJIYQJoH0C8bDXFz/b2vUEK001JpEAb2BDByY0jyAxQgan/nLq06nayUPoJJ2qIJtAbgcqW8Ew3hJO70AUm6LpszkvpSwkr0TEii8cJ/HmHKYpw5iS8u0E0PI0qhILeCDb3T5rFbxWBxHgQIRIjCGHY79ZT2SahnwO3X2GVCTh3fGoj0JldgOHnlMSFBdXkLyBHZ5h+F2vN0LQZz6frM56+uZwqEtVAkGlKnvq9Z6eqeOBJA6sDsv4zQU4ICHadWpzsEvte8NTcz6JbP17xuP1qFW/Gd8ZpMtUHC2LZ1JzmAQkGk4xyCCpIXwk6FUW3lUCHuXGoHc6q2aI2XQ47M7zgbo6IKF5+Qs4jtUFXmOkTj3e0yMlLiXjAV8cBKdoMsjp1Ffh4z5QWnrLg2wmyvXwY1SDzVXWqvlEecuOPqpHqK/XQEHv3dCE3pYQVHUchuOrBS0t3NrxhcPTeB0jvRM45bd8Xqy/kWmPnArGyIoPmxDPHP5UDKDFx8yuR318AyOC2FMkeeSL6Z8LD7HgMzQAxwZS0NsRgv9nQ6x1sSVHmhS3dqenkWQiPk+cksJ4rhE00SPSAV+qMgdfIW/QJESm5tCzq6W3Xt/OJ1/4UAdIU8DHWtI38/FDI4ThyIYc1tVntDr8GJqX0e4+cGdosG3jJeLwRyACKeVhBa1/AXuDnQsjhz1bGNgTYRgSj8DUdiwYm4lrOkoSoJ/Ad1XN/gcTmkfOkRxXNwltIzWDl0IGRTSyZngcy3kZMK7bn9BmKgg58cgD24kiITA8MVlOxXfwjAEhnUmtPQUMldhnQT9vyXdbQmh7aYvTYT1YoHXKFUkBBX0UnEabGY/mwMEhXLwEgNyFPAGSp20vfoSM7JuB0RtWE04tgiXphUmrw2n51nN5xX+X0Gx+MWaxgbJuJjTLin2leBpAWcbW3Cce6eoMDl9xheAIAjflMUZEIDw9t1PZkvXWk+YTm6tWh93y5YpJs77bEAjBdxyzIRDk4mv9Q2KQICJIZb3Ia1C74Wns3MmjOV8wOBdWirrkVkpUd0U27w2ZWHoF4guxE4P6h/Y2FEIYkHtjFrvT6phcSvAdyZK6yEjaUjZZE6QYPzyMt9Z36FN9MDmJpUWr1Qnie9dPpbCfNiRCaOsT6RCCXN1fYMjulJChWzYEhmFX8QmV0YgFVJxz2kPp8+GID7fhEUI7mRi3IHVlJzcXOqpMVzX0OMrEwv4iKiOHLN/OB/fuvdpQCaGtn4+FQJRAufpgaQHNdXSVnHRo6HGUILqlg1U0E2AP2b7sDVF6Shs2IbSRFxNjLIxKVBNdW3y5+WwhAeYRVdhaDVXdmERi4dnmg8U1VEu12S3s2MQwTGdX+wGEqK2fnD9kLRa7DXM62LXVxcmDBy/3cXv58mDy1eoai75BkrNY0vfOl4cuPLX9IELc1k/2jr+Ms0AQAlSn09Fq8IcNkYXY8S/HeyfDMps9248kVNr6+vKLvYmJew/HxtNp9KSHdHp87OG9iYm9F8vrP0pwuvb/AKwtJkTtKRaXAAAAAElFTkSuQmCC',
      start: '2021',
      end: '2025',
    },
  ],
  projects: [
    {
      title: 'Catloris: Gamified Nutrition Tracking App',
      active: true,
      description:
        'As part of the final Capstone Project for MSIB Batch 7, EduBooks emerges as an innovative platform that simplifies finding and purchasing quality books, including textbooks, academic references, and self-development. Additionally, it fosters an active reader community to share reviews, recommendations, and promote literacy education.',
      technologies: ['Python', 'Tensorflow', 'Docker', 'FastAPI', 'Google Cloud', 'Kotlin'],
      links: [
        {
          type: 'Android Application',
          href: 'https://bookmsibv1.up.railway.app/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
    },    
  ],
  hackathons: [
    {
      title: 'JavaScript Intermediate Certification',
      dates: 'Jan 2025',
      location: 'Sololern',
      image:
        'https://media.licdn.com/dms/image/v2/C4D0BAQHER-dvTqh2tA/company-logo_100_100/company-logo_100_100/0/1630576160230/sololearn_inc__logo?e=1749081600&v=beta&t=IJRKT71SrjO2cn8SaBCMgf2rODddyLt_4uBgwtjfXEQ',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Streamer Source',
          href: 'https://github.com/justinmichaud/htn2017',
        },
      ],
    },
    {
      title: 'Sertifikasi Kompetensi Fullstack Developer',
      dates: ' Des 2024',
      location: 'Kementerian Ketenagakerjaan Republik Indonesia',
      image:
        'https://media.licdn.com/dms/image/v2/C510BAQEXLaR8drbv_g/company-logo_100_100/company-logo_100_100/0/1630627733931?e=1749081600&v=beta&t=Pz88yv2kbRD5_4Zee6CykxEpNNBpGEW5R72fqHQbAD8',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Streamer Source',
          href: 'https://github.com/justinmichaud/htn2017',
        },
      ],
    },
    {
      title: 'Sertifikasi Hak Kekayaan Intelektual',
      dates: 'Mei 2024',
      location: 'Kementrian Hukum dan Hak Asasi Manusia Republik Indonesia',
      image:
        'https://media.licdn.com/dms/image/v2/C560BAQFS_aO_wNb0zA/company-logo_100_100/company-logo_100_100/0/1630648723948?e=1749081600&v=beta&t=pLKvako-CgZa2aEgjIk6Y3HE59OqWTBydIm2Y40XEEs',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Streamer Source',
          href: 'https://github.com/justinmichaud/htn2017',
        },
      ],
    },
    {
      title: 'Fullstack Competency Certification',
      dates: 'Mei 2024',
      location: 'Lx Internasional',
      image:
        'https://media.licdn.com/dms/image/v2/C560BAQHUbIOiyNLOUw/company-logo_100_100/company-logo_100_100/0/1630672897960/lginternationalcorp_logo?e=1749081600&v=beta&t=W34Ls0Z-bnEWb7kG4i4WyARz3U0OGpnVVBIJUp4dCfU',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Streamer Source',
          href: 'https://github.com/justinmichaud/htn2017',
        },
      ],
    },
  ],
} as const;

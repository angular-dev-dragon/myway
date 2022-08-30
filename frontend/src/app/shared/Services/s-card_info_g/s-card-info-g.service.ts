import { Injectable } from '@angular/core';
import { find, of, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SCardInfoGService {
  s_card_info: any[];
  info: any;
  constructor() {
    this.s_card_info = [
      {
        name: 'hpi',
        id: 'd342',
        detail: {
          filter: false,
          row: [
            {
              colum: 3,
              cards_we_need: [
                {
                  name: 'adds',
                  id: 'pk',
                  info: [
                    {
                      img: {
                        src: 'https://i1.hespress.com/wp-content/uploads/2022/06/Sidi_Ali.jpg',
                        alt: ' THIS IS BLABLA',
                        width: '100%',
                        height: '',
                        style: {
                          width: '100%',
                        },
                      },
                    },
                    {
                      img: {
                        src: 'https://i1.hespress.com/wp-content/uploads/2022/06/Sidi_Ali.jpg',
                        alt: ' THIS IS BLABLA',
                        width: '100%',
                        height: '',
                        style: {
                          width: '100%',
                        },
                      },
                    },
                    {
                      img: {
                        src: 'https://i1.hespress.com/wp-content/uploads/2022/06/Sidi_Ali.jpg',
                        alt: ' THIS IS BLABLA',
                        width: '100%',
                        height: '',
                        style: {
                          width: '100%',
                        },
                      },
                    },
                  ],
                },
              ],
            },
            {
              colum: 3,
              cards_we_need: [
                {
                  name: 'card-w1-h1-v2',
                  id: 'pk',
                  info: [
                    {
                      img: {
                        src: 'https://thumbs.dreamstime.com/b/smart-home-creative-symbol-technology-concept-safety-automation-building-system-abstract-business-construction-logo-digital-137071770.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: '5555GGGGG',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/007/372/575/original/home-automation-icon-or-logo-suitable-for-smart-home-technology-home-security-or-home-monitoring-technology-line-art-style-with-black-color-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: '5555GGGGG',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/007/372/575/original/home-automation-icon-or-logo-suitable-for-smart-home-technology-home-security-or-home-monitoring-technology-line-art-style-with-black-color-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: '5555GGGGG',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/007/372/575/original/home-automation-icon-or-logo-suitable-for-smart-home-technology-home-security-or-home-monitoring-technology-line-art-style-with-black-color-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: '5555GGGGG',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/007/372/575/original/home-automation-icon-or-logo-suitable-for-smart-home-technology-home-security-or-home-monitoring-technology-line-art-style-with-black-color-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: '5555GGGGGG',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/007/372/575/original/home-automation-icon-or-logo-suitable-for-smart-home-technology-home-security-or-home-monitoring-technology-line-art-style-with-black-color-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: '5555GGGGGG',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/007/372/575/original/home-automation-icon-or-logo-suitable-for-smart-home-technology-home-security-or-home-monitoring-technology-line-art-style-with-black-color-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: '5555GGGGGG',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/007/372/575/original/home-automation-icon-or-logo-suitable-for-smart-home-technology-home-security-or-home-monitoring-technology-line-art-style-with-black-color-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: '5555GGGGGG',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/007/372/575/original/home-automation-icon-or-logo-suitable-for-smart-home-technology-home-security-or-home-monitoring-technology-line-art-style-with-black-color-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: '5555GGGGGGG',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/007/372/575/original/home-automation-icon-or-logo-suitable-for-smart-home-technology-home-security-or-home-monitoring-technology-line-art-style-with-black-color-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: '5555GGGGGGG',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/007/372/575/original/home-automation-icon-or-logo-suitable-for-smart-home-technology-home-security-or-home-monitoring-technology-line-art-style-with-black-color-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: '5555GGGGGGG',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/007/372/575/original/home-automation-icon-or-logo-suitable-for-smart-home-technology-home-security-or-home-monitoring-technology-line-art-style-with-black-color-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: '5555GGGGGGG',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/007/372/575/original/home-automation-icon-or-logo-suitable-for-smart-home-technology-home-security-or-home-monitoring-technology-line-art-style-with-black-color-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/007/372/575/original/home-automation-icon-or-logo-suitable-for-smart-home-technology-home-security-or-home-monitoring-technology-line-art-style-with-black-color-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                  ],
                },
              ],
            },
            {
              colum: 3,
              cards_we_need: [
                {
                  name: 'card-w1-h1-v2',
                  id: 'pk',
                  info: [
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                  ],
                },
              ],
            },
            {
              colum: 3,
              cards_we_need: [
                {
                  name: 'card-w1-h1-v2',
                  id: 'pk',
                  info: [
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                    {
                      img: {
                        src: 'https://static.vecteezy.com/system/resources/previews/004/970/834/original/smart-home-technology-logo-design-template-free-free-vector.jpg',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'Total Energies',
                      sictor: 'web devlopment',
                      city: 'tanger',
                      id: 'G',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        name: 'show 2',
        id: 'd342',
        detail: {
          filter: true,
          row: [
            {
              colum: 3,
              cards_we_need: [
                {
                  name: 'adds',
                  id: 'pk',
                  info: [
                    {
                      img: {
                        src: 'https://i1.hespress.com/wp-content/uploads/2022/06/Sidi_Ali.jpg',
                        alt: ' THIS IS BLABLA',
                        width: '100%',
                        height: '',
                        style: {
                          width: '100%',
                        },
                      },
                    },
                    {
                      img: {
                        src: 'https://i1.hespress.com/wp-content/uploads/2022/06/Sidi_Ali.jpg',
                        alt: ' THIS IS BLABLA',
                        width: '100%',
                        height: '',
                        style: {
                          width: '100%',
                        },
                      },
                    },
                    {
                      img: {
                        src: 'https://i1.hespress.com/wp-content/uploads/2022/06/Sidi_Ali.jpg',
                        alt: ' THIS IS BLABLA',
                        width: '100%',
                        height: '',
                        style: {
                          width: '100%',
                        },
                      },
                    },
                  ],
                },
                {
                  name: 'adds',
                  id: 'pk',
                  info: [
                    {
                      img: {
                        src: 'https://i1.hespress.com/wp-content/uploads/2022/06/Sidi_Ali.jpg',
                        alt: ' THIS IS BLABLA',
                        width: '100%',
                        height: '',
                        style: {
                          width: '100%',
                        },
                      },
                    },
                    {
                      img: {
                        src: 'https://i1.hespress.com/wp-content/uploads/2022/06/Sidi_Ali.jpg',
                        alt: ' THIS IS BLABLA',
                        width: '100%',
                        height: '',
                        style: {
                          width: '100%',
                        },
                      },
                    },
                    {
                      img: {
                        src: 'https://i1.hespress.com/wp-content/uploads/2022/06/Sidi_Ali.jpg',
                        alt: ' THIS IS BLABLA',
                        width: '100%',
                        height: '',
                        style: {
                          width: '100%',
                        },
                      },
                    },
                  ],
                },
              ],
            },
            {
              colum: 3,
              cards_we_need: [
                {
                  name: 'adds',
                  id: 'pk',
                  info: [
                    {
                      img: {
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pNAX4VgFqGZfk0g9qUpfzfTP7gpoLstdIXnsC10&s',
                        alt: ' THIS IS BLABLA',
                        style: {
                          width: '100px',
                        },
                      },

                      title: 'web devloip ',
                      sub_tutle: 'ahmed aould amar',
                      city: 'tanger',
                      id: 'adsfasd',
                    },
                  ],
                },
                {
                  name: 'adds',
                  id: 'pk',
                  info: [],
                },
              ],
            },
          ],
        },
      },
    ];
  }
  get_all_s_card() {
    return this.s_card_info;
  }

  // get_a_col_in_a_show(show_name: string, coll_name: string, row_name: number = 1) {
  //   return of(
  //     this.s_card_info
  //       .find((i: any) => i.name === show_name)
  //       ?.detail.row[row_name].all_cards.find((i: any) => i.info === coll_name)
  //   );
  // }

  get_a_card_0_in_a_show(show: string, card: string, row: number = 1) {
    return of(
      this.s_card_info
        .find((i: any) => i.name === show)
        ?.detail.row[row].all_cards.find((i: any) => i.name === card)
    );
  }
}

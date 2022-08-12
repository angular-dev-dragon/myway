import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesInfoService {
  url: string = 'https://restcountries.com/v3.1/all';
  countries: any;
  Kuwait__Exampel: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.Kuwait__Exampel = [
      {
        name: {
          common: 'Kuwait',
          official: 'State of Kuwait',
          nativeName: { ara: { official: 'دولة الكويت', common: 'الكويت' } },
        },
        tld: ['.kw'],
        cca2: 'KW',
        ccn3: '414',
        cca3: 'KWT',
        cioc: 'KUW',
        independent: true,
        status: 'officially-assigned',
        unMember: true,
        currencies: { KWD: { name: 'Kuwaiti dinar', symbol: 'د.ك' } },
        idd: { root: '+9', suffixes: ['65'] },
        capital: ['Kuwait City'],
        altSpellings: ['KW', 'State of Kuwait', 'Dawlat al-Kuwait'],
        region: 'Asia',
        subregion: 'Western Asia',
        languages: { ara: 'Arabic' },
        translations: {
          ara: { official: 'دولة الكويت', common: 'الكويت' },
          ces: { official: 'Stát Kuvajt', common: 'Kuvajt' },
          cym: { official: 'State of Kuwait', common: 'Kuwait' },
          deu: { official: 'Staat Kuwait', common: 'Kuwait' },
          est: { official: 'Kuveidi Riik', common: 'Kuveit' },
          fin: { official: 'Kuwaitin valtio', common: 'Kuwait' },
          fra: { official: 'État du Koweït', common: 'Koweït' },
          hrv: { official: 'Država Kuvajt', common: 'Kuvajt' },
          hun: { official: 'Kuvaiti Állam', common: 'Kuvait' },
          ita: { official: 'Stato del Kuwait', common: 'Kuwait' },
          jpn: { official: 'クウェート国', common: 'クウェート' },
          kor: { official: '쿠웨이트국', common: '쿠웨이트' },
          nld: { official: 'Staat Koeweit', common: 'Koeweit' },
          per: { official: 'دولت کویت', common: 'کُویت' },
          pol: { official: 'Państwo Kuwejt', common: 'Kuwejt' },
          por: { official: 'Estado do Kuwait', common: 'Kuwait' },
          rus: { official: 'Государство Кувейт', common: 'Кувейт' },
          slk: { official: 'Kuvajtský štát', common: 'Kuvajt' },
          spa: { official: 'Estado de Kuwait', common: 'Kuwait' },
          swe: { official: 'Staten Kuwait', common: 'Kuwait' },
          urd: { official: 'دولتِ کویت', common: 'کویت' },
          zho: { official: '科威特国', common: '科威特' },
        },
        latlng: [29.5, 45.75],
        landlocked: false,
        borders: ['IRQ', 'SAU'],
        area: 17818.0,
        demonyms: {
          eng: { f: 'Kuwaiti', m: 'Kuwaiti' },
          fra: { f: 'Koweïtienne', m: 'Koweïtien' },
        },
        flag: '\uD83C\uDDF0\uD83C\uDDFC',
        maps: {
          googleMaps: 'https://goo.gl/maps/aqr3aNQjS1BAvksJ7',
          openStreetMaps: 'https://www.openstreetmap.org/relation/305099',
        },
        population: 4270563,
        fifa: 'KUW',
        car: { signs: ['KWT'], side: 'right' },
        timezones: ['UTC+03:00'],
        continents: ['Asia'],
        flags: {
          png: 'https://flagcdn.com/w320/kw.png',
          svg: 'https://flagcdn.com/kw.svg',
        },
        coatOfArms: {
          png: 'https://mainfacts.com/media/images/coats_of_arms/kw.png',
          svg: 'https://mainfacts.com/media/images/coats_of_arms/kw.svg',
        },
        startOfWeek: 'sunday',
        capitalInfo: { latlng: [29.37, 47.97] },
        postalCode: { format: '#####', regex: '^(\\d{5})$' },
      },
    ];
  }

  getCountries() {
    return this.http.get(this.url);
  }
}

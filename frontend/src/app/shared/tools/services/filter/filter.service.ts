import { Injectable } from '@angular/core';
import { GenericService } from '../../../services/generic.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  reusltdata!: any[];
  path!: any;

  allValAndPath!: { path: any; filterbythis: any }[];
  constructor(private genericService: GenericService) {

  }
  filter(data: any[], filter: { path: any; filterbythis: any }) {
    this.reusltdata = data;
    if (filter.filterbythis instanceof Array) {
      if (filter.path instanceof Array) {
        filter?.path.map((i) => {
          this.reusltdata = this.filtererry(
            this.reusltdata,
            filter.filterbythis,
            i
          );
        });


      } else {
        this.reusltdata = this.filtererry(
          this.reusltdata,
          filter.filterbythis,
          filter?.path
        );
      }
    } else {
      if (filter.path instanceof Array) {
        let result= new  Set();
        filter.path.map((v) => {
          result = new Set([...result,...this.reusltdata.filter((i: any) => {
            console.log(this.removeAccent(this.g(v, i)));
            return this.removeAccent(this.g(v, i))
              .toLowerCase()
              .includes(filter.filterbythis.toLowerCase());
          })]);
        });
       this.reusltdata = [...result]



      } else {

        this.reusltdata = this.reusltdata.filter((i: any) => {
          return this.removeAccent(this.g(filter?.path, i))
            .toLowerCase()
            .includes(filter.filterbythis.toLowerCase());
        });
      }
    }

    return this.reusltdata;
  }

  filtererry(data: any[], CheckboxList: any, label: any) {
    let result = CheckboxList.filter((el: any) => el.nativeElement.checked);
    result = result.length
      ? result
          .reduce((previousValue: any, currentValue: any) => {
            return [
              ...previousValue,
              ...data.filter((val) => {
                return this.removeAccent(this.g(label, val))
                  .toLowerCase()
                  .includes(
                    this.removeAccent(
                      currentValue.nativeElement.value.toLowerCase()
                    )
                  );
              }),
            ];
          }, [])
          .reduce((previousValue: any, currentValue: any) => {
            if (!previousValue.find((val: any) => val.id == currentValue.id))
              previousValue.push(currentValue);
            return previousValue;
          }, [])
      : data;


    return result;
  }

  g(path: string, data: any): any {
    let [current, ...child] = path.split('.');
    if (child?.length) {
      return this.g(child.join('.'), data[current]);
    }
    if (current) {
      return data[current];
    }
    return data;
  }

  getdata(page: string) {


    this.reusltdata = this.genericService.get(page).getlist()

    console.log('get data' ,JSON.parse(JSON.stringify(this.reusltdata)));

    return JSON.parse(JSON.stringify(this.reusltdata));
  }

  getlist() {
    return this.reusltdata;
  }

  removeAccent(s: any) {
    var r = s.toLowerCase();
    r = r.replace(new RegExp('-', 'g'), ' ');
    r = r.replace(new RegExp('_', 'g'), ' ');
    r = r.replace(new RegExp('[àáâãäå]', 'g'), 'a');
    r = r.replace(new RegExp('æ', 'g'), 'ae');
    r = r.replace(new RegExp('ç', 'g'), 'c');
    r = r.replace(new RegExp('[èéêë]', 'g'), 'e');
    r = r.replace(new RegExp('[ìíîï]', 'g'), 'i');
    r = r.replace(new RegExp('ñ', 'g'), 'n');
    r = r.replace(new RegExp('[òóôõö]', 'g'), 'o');
    r = r.replace(new RegExp('œ', 'g'), 'oe');
    r = r.replace(new RegExp('[ùúûü]', 'g'), 'u');
    r = r.replace(new RegExp('[ýÿ]', 'g'), 'y');
    r = r.replace(new RegExp('ç', 'g'), 'c');
    return r;
  };
}

// getPageName(p: string) {
//   return this.genericService.NamePage(p);
// }
//   filter(array: any[], filter: { field: string[]; filterBy: string[] }[]) {
//     let tempArr = array;
//     filter.forEach((filt) => {
//       tempArr = tempArr.filter((i: any, index) => {
//         return this.g(filt.field[index], i)
//           .toLowerCase()
//           .includes(filt.filterBy[index].toLowerCase());
//       });
//     });
//     console.log(tempArr);
//     return (this.reusltdata = tempArr);
//   }
// }

// getDataFromFilterCompounat(pageNameValue: string, datainput: []) {
//   //   this.filter(this.genericService.get(pageNameValue), {
//   //     field: [],
//   //     filterBy: [],
//   //   });
//   // }
// }

// g(path: string, data: any): any {
//   let [current, ...child] = path.split('.');
//   if (child?.length) {
//     return this.g(child.join('.'), data[current]);
//   }
//   if (current) {
//     return data[current];
//   }
//   return data;
// }

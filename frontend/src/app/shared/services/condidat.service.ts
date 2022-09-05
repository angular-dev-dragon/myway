import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class CondidatService {
  condidaInfo=[]
  constructor() {}



getAllInfo()
{
  return this.condidaInfo
}

}

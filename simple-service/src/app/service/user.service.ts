import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }
  users:string[] = ['Meera','Maan','Minni'];
  getFirstUser(){
   return this.users[0];
  }

}

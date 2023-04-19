import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class JWTTokenService {

  jwthelper = new JwtHelperService();
  constructor() {
  }

  idgetfromtoken(item:string) {
     return this.jwthelper.decodeToken(item).sub;

  }

}

import { Injectable } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

export interface User {
  username: string;
  password: string;
}

const mockUser: User = {
  username: 'luis@gmail.com',
  password: '12345'
};

@Injectable()
export class AuthenticationService {
  user = null;

  constructor(private routerExtensions: RouterExtensions) {}

  authenticate(username: string, password: string): boolean {
    if (mockUser.username === username && mockUser.password === password) {
      this.user = mockUser;
    }
    return this.user ? true : false;
  }

  logout() {
    this.user = null;
    //limpar historico
    this.routerExtensions.navigate(['login'], { clearHistory: true });
  }
}

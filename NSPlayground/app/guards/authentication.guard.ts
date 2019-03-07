import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(
        private authService: AuthenticationService,
        private routerExtensions: RouterExtensions
    ) { }

    canActivate(): boolean {
        if (!this.authService.user) {
            this.routerExtensions.navigate(['login']);
            return false;
        }
        return true;
    }
}

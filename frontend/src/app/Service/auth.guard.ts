import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate, CanActivateChild{

  constructor(private authservice: AuthService, private router: Router) { }
  
  canActivate(): boolean {
    if (this.authservice.isLoggedIn()) {
      return true;
    }else{
      this.router.navigateByUrl('/');
      return false;
    }
  }

  canActivateChild(): boolean {
    if (this.authservice.isLoggedIn()) {
      return true;
    }else{
      this.router.navigateByUrl('/');
      return false;
    }}
    
}
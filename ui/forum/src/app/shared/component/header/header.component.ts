import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/model/user.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  user !: User;
  authSub!: Subscription;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authSub = this.authService.user
      .subscribe(user => {
        this.user = user!;
      });
  }

  onLogoutClicked() {
    this.authService.logout();
  }

  ngOnDestroy(){
    this.authSub.unsubscribe();
  }

}

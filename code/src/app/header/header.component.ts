import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { authservice } from '../auth/auth.service';
import { dbStorageService } from '../shared/db-storage';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;

  private usersub: Subscription;
  constructor(
    private dbStorageService: dbStorageService,
    private authservice: authservice
  ) {}

  ngOnInit() {
    this.usersub = this.authservice.user.subscribe((user) => {
      //  this.isAuthenticated =!user? false :true;
      this.isAuthenticated = !!user;
    });
  }
  onSavedata() {
    this.dbStorageService.storeBugs();
  }
  onFetchdata() {
    this.dbStorageService.fetchBugs().subscribe();
  }
  onLogout(){
    this.authservice.logout();
  }
  ngOnDestroy() {
    this.usersub.unsubscribe();
  }
}


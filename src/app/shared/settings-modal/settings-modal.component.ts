import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss'],
})
export class SettingsModalComponent implements OnInit {
  constructor(private authService: AngularFireAuth, private router: Router) {}

  async logout() {
    await this.authService.signOut();
    this.router.navigate(['auth'])
    
  }

  ngOnInit(): void {}
}

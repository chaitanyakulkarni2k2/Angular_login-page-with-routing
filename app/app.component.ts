import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-page';

  constructor(private router: Router) { }

  signIn() {
    // Add your authentication logic here

    // If authentication is successful, navigate to the blank page
    this.router.navigate(['/blank']);
     
  }
}

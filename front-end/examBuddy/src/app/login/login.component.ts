import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit(form: NgForm): void { // Use NgForm here
    if (form.valid) {
      console.log(form.value); // Your authentication logic will go here
      this.router.navigate(['/']); // Navigate to the homepage after login
    }
  }
}

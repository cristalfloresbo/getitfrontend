import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Login } from "src/app/models/login.model";
import { Router } from '@angular/router';
import { ApiService } from "src/app/api-service/api.service";
import { ShowAlertMessage } from 'src/app/helpers/showAlertMessage';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  usuario: Login[];
  public showAlert: ShowAlertMessage;
  constructor(public formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.createLoginForm();
  }
  


  private createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]]

    });

  }
  public isInvalid(formControlName: string) {
    const control = this.loginForm.controls[formControlName];
    return !control.valid && (control.dirty || control.touched);
  }

  public hasErrorControl(formControlName, errorType) {
    return this.loginForm.controls[formControlName].errors[errorType];
  }

  getFormularioRegistro(event: Event) {
    event.preventDefault();
    console.log(this.loginForm.value);
  }
  /* public save() {
     this.login = this.loginForm.value as Login;
     
   }*/
  /*async onLogin() {
     const { email, password } = this.loginForm.value;
     const Swal = require('sweetalert2');
 
 
     this.apiService.getUsers() //getUsers debe comparar los usuarios de la base de datos endpoit 
       .snapshotChanges()
       .subscribe(item => {
         this.usuario = [];
         item.forEach(element => {
           let x = element.payload.toJSON();//Convertir a JSON
           x["$key"] = element.key;
           if (x["email"] == email && x["pass"] == password) {
             this.usuario.push(x as Login);
             localStorage.setItem("user", JSON.stringify(x as Login));
           }
         });
 
 
         if (localStorage.getItem('user') == "undefined") {
           Swal.fire({
             position: 'top-center',
             type: 'success',
             title: 'Datos Incorrectos',
             showConfirmButton: false,
             timer: 2000
           })
         } else {
           Swal.fire({
             position: 'top-center',
             type: 'success',
             title: 'Bienvenido ',
             showConfirmButton: false,
             timer: 2000
           })
           this.router.navigate(['/']);
         }
 
       });
 
 
   }*/

  public login() {
    this.apiService.post('login', this.loginForm).subscribe(response => {
      const user = response;
      this.showAlert.showSuccessAlert("Bienvenido");// nombre del usuario
      this.router.navigate(['/getit/home']);
    }, (error: HttpErrorResponse) => {// falla
      this.showAlert.showErrorAlert("datos incorrectos, vuelva a intentarlo");
      //not found el usuario no se encontro
      // 
    });


  }



}

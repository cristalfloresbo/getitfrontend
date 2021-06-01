import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { ApiService } from "src/app/api-service/api.service";
import { HttpErrorResponse } from "@angular/common/http";
import { ShowAlertMessage } from "src/app/helpers/showAlertMessage";
import { WorkArea } from "src/app/models/workArea.model";
import * as moment from 'moment';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public ultDate = "";
  public defaultDate = "";
  public prevPhone = 'https://wa.me/591';
  public defaultNum = 0;
  public auxPhone = "";
  private showMessage = new ShowAlertMessage();
  public workareas: WorkArea[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loadWorkAreas();
  }

  user = this.formBuilder.group({
    firstname: [
      "",
      [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(50)
      ],
    ],
    lastname: [
      "",
      [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(50)
      ],
    ],
    phone: [
      "", 
      [
        Validators.required, 
        Validators.minLength(8)
      ]
    ],
    birthdate: [
      this.defaultDate,
      [
        Validators.required
      ],
    ],
    address: [
      "",
      [
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(50)
      ],
    ],
    workAreaId: [
      "", 
    ],
    score: [
      this.defaultNum
    ],
    email: [
      "",
      [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
      ],
    ],
    password: [
      "",
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/
        ),
      ],
    ],
  });

  async loadWorkAreas() {
    await this.apiService
      .getAll<WorkArea[]>("/workareas")
      .subscribe((response) => {
        this.workareas = response;
      });
  }

  saveData() {
    const ag = this.calAge();
    if (ag >= 18) {
      this.createLink();
      console.log('La edad es' + ' ' + ag);
      console.log(this.user.value);
	    this.user.get("workAreaId").setValue(+this.user.get("workAreaId").value); 

      this.apiService.post(`/register-user`, this.user.value).subscribe(
        (idUser: number) => {
          this.showMessage.showSuccessAlert(
            `user with id: ${idUser} registered successfully!`
          );
        },
        (error: HttpErrorResponse) => {
          this.showMessage.showErrorAlert(
		  	    `Ha ocurrido un error: ${error.message}, vuelva a intentarlo`
          );
        }
      );
    } else {
        this.showMessage.showError(
          `No puedes registrarte no cumples con la edad necesaria`
        );
        console.log('No puedes registrarte no cumples con la edad necesaria' + 'tu edad es:' + ag);
        console.log(this.user.value);
      }
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.user.get("birthdate").setValue(date, {
      onlyself: true,
    });
  }

  calAge() {
    const age = moment(new Date()).diff(moment(this.ultDate), 'years');
    return age;
  }

  createLink() {
    this.user.controls.phone.setValue(this.prevPhone + this.auxPhone);
  }

  clearForm() {
    this.user.controls.firstname.setValue('');
    this.user.controls.lastname.setValue('');
    this.user.controls.phone.setValue('');
    this.user.controls.birthdate.setValue('');
    this.user.controls.address.setValue('');
    this.user.controls.workAreaid.setValue('0');
    this.user.controls.email.setValue('');
    this.user.controls.password.setValue('');
  }

  private cancel(): void {
    this.showMessage.showCancelAlert(
      "¿Está seguro que desea cancelar su registro?",
      ""
    );
  }
}
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
  public mDate = this.minDate();
  public mxDate = this.maxDate();
  public defaultNum = 0;
  public auxPhone = "";
  private showMessage = new ShowAlertMessage();
  public workareas: WorkArea[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  user = this.formBuilder.group({
    firstname: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ],
    ],
    lastname: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ],
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.min(60000000),
        Validators.max(79999999)
      ]
    ],
    birthdate: [
      this.defaultDate,
      [
        Validators.required
      ],
    ],
    address: [
      '',
      [
        Validators.minLength(10),
        Validators.maxLength(50)
      ],
    ],
    workAreaId: [
      '0',
    ],
    score: [
      this.defaultNum
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/
        ),
      ],
    ],
    password: [
      "",
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{1,30}$/
        ),
      ],
    ],
  });

  ngOnInit() {
    this.loadWorkAreas();
  }

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
      this.apiService.post('/register-user', this.user.value).subscribe(
        (idUser: number) => {
          this.showMessage.showSuccessAlert('¡Se registró exitosamente!');
          window.location.href = '/getit';
        },
        (error: HttpErrorResponse) => {
          this.showMessage.showErrorAlert(
            `Ha ocurrido un error: ${error.message}, vuelva a intentarlo`
          );
        }
      );
    } else {
        this.showMessage.showError(
          'Tiene que tener por lo menos 18 años para registrarse'
        );
      }
  }

  getDate(e) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.user.get("birthdate").setValue(date, {
      onlyself: true,
    });
  }

  minDate() {
    const fecha = new Date();
    fecha.setFullYear(fecha.getFullYear() - 70);
    return fecha.toISOString().substring(0, 10);
  }

  maxDate() {
    const fecha = new Date();
    fecha.setFullYear(fecha.getFullYear() - 18);
    return fecha.toISOString().substring(0, 10);
  }

  calAge() {
    const age = moment(new Date()).diff(moment(this.ultDate), 'years');
    return age;
  }

  createLink() {
    this.user.controls.phone.setValue('https://wa.me/591' + this.auxPhone);
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

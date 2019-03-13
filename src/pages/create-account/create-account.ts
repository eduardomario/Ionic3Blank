import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsServiceProvider } from '../../providers/students-service/students-service';
import { Students } from '../../model/student-model';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  createAccountForm: FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private fb: FormBuilder,
    private loading: LoadingController,
    private students_provider: StudentsServiceProvider) {

    this.createAccountForm = this.fb.group({
      name:['', Validators.required],
      app:['', Validators.required],
      apm:[''],
      email:['', Validators.required],
      matricula:['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  createAccount(){
    let presentLoading = this.loading.create({
      content: 'Un momento'
    });
    presentLoading.present();
    console.log(this.createAccountForm.getRawValue());
    let accountInfo: Students = this.createAccountForm.getRawValue();
    this.students_provider
        .createAccountStudents(accountInfo)
        .subscribe( () => {
          console.log('Data');
        }, error => {
          console.log('Error',error);
          presentLoading.dismiss();
        }, () => {
          console.log('Success');
          presentLoading.dismiss();
        })
  }

  goBack(){
    console.log('goToHome');
    this.navCtrl.popToRoot();
  }
}

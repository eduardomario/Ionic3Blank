import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CostumerPage } from '../costumer/costumer';
import { StudentsServiceProvider } from '../../providers/students-service/students-service';
import { Students } from '../../model/student-model';
import { EventsProvider } from '../../providers/events/events';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  user:string;
  data:any;
  colorLabel: string;
  students:any[]=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private students_provider:StudentsServiceProvider,
    private event_manager: EventsProvider) {
    this.data = this.navParams.data;
    this.user = this.navParams.get('user');
    this.loadStudents();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  goCostumer(){
    console.log('goToCostumer');
    //this.navCtrl.push(CostumerPage);
    setTimeout(() => {
      this.colorLabel = 'danger';
    },3*1000)
  }

  logout(){
    console.log('goToHome');
    this.navCtrl.popToRoot();
  }

  deleteCard(student){
    console.log('delete');
    console.log(student);
    this.event_manager.setIsLoading(true);
    this.students_provider
      .deleteStudent(student.id)
      .subscribe(() => {
        this.event_manager.setIsLoading(false);
        this.loadStudents();
        this.event_manager.setMsgToast("Se elimino correctamente");
      }, error => {
        this.event_manager.setIsLoading(false);
        this.event_manager.setMsgToast(error.error.message);
        console.log(error);        
      });
  }

  loadStudents(){
    this.students_provider
      .getStudents()
      .subscribe((response:any)=>{
        this.students = response;
      },error=>{
        console.log(error);
      });
  }

}

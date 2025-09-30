import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { TestService } from '../../Services/test.service';

@Component({
  selector: 'app-dashboard',
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  tests = [];

  constructor(private notification: NzNotificationService,
    private testService: TestService,
  ){}


  ngOnInit(){
    this.getAllTests();
  }

  getAllTests(){
    this.testService.getAllTest().subscribe(res=>{
      this.tests =res;
    },error=>{
      this.notification
      .error(
        'ERROR',
        `Something went wrong, try again`,
        {nzDuration: 5000}
      )
    })
  }


  getFormatedTime(time): String{
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    return `${minutes} minutes ${seconds} seconds`;
  }
}
 
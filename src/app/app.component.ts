import { Component, OnInit } from '@angular/core';
import { GradeService } from './service/grade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  score: number;
  grade: string;
  outputClass: string;
  constructor(private gradeService: GradeService) {

  }

  ngOnInit() {
    this.score = 0;
    this.grade = 'A+';
    this.changeOuputClass();
  }

  getGrade(score: number) {
    // this.gradeService.getGradeFromScore(score)
    //   .subscribe(result => {
    //     this.grade = result.data.score;
    //     this.changeOuputClass();
    //   });
  }

  changeOuputClass() {
    switch (this.grade) {
      case 'F': this.outputClass = 'btn btn-danger btn-lg col-md-3';
        break;
      case 'D': this.outputClass = 'btn btn-warning btn-lg col-md-3';
        break;
      case 'C': this.outputClass = 'btn btn-info btn-lg col-md-3';
        break;
      case 'B': this.outputClass = 'btn btn-Light btn-lg col-md-3';
        break;
      case 'A': this.outputClass = 'btn btn-success btn-lg col-md-3';
        break;
      default:
        this.outputClass = 'hideGrade';
    }
  }
}

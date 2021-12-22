import { Component, OnInit } from '@angular/core';
import { AngularserviceService } from '../service/angularservice.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  public questionList:any=[];
  public currentQuestion:number=0;
  public points:number=0;
  correctAnswer:number=0;
  incorrectAnswer:number=0;
  isQuizCompleted:boolean=false;

  constructor(private angularservice:AngularserviceService) { }

  ngOnInit(): void {
   this.getallquestions();
  }
  getallquestions(){
    this.angularservice.getangularjson()
    .subscribe(res=>{
      this.questionList=res.questions;
    })
  }

  previousQuestion(){
    this.currentQuestion--;
  }
  nextQuestion(){
    this.currentQuestion++;
  }

  answer(currentqno:number,option:any){
    if(currentqno===this.questionList.length){
      this.isQuizCompleted=true;
    }
    if(option.correct){
      this.points+=10;
      this.correctAnswer++;
      this.currentQuestion++;
    }
    else{
      this.points-=10;
      this.incorrectAnswer++;
      this.currentQuestion++;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { JavaserviceService } from '../service/javaservice.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  public questionList:any=[];
  public currentQuestion:number=0;
  public points:number=0;
  correctAnswer:number=0;
  incorrectAnswer:number=0;
  isQuizCompleted:boolean=false;

  constructor(private javaservice:JavaserviceService) { }

  ngOnInit(): void {
   this.getallquestions();
  }
  getallquestions(){
    this.javaservice.getjavajson()
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

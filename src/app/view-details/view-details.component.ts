import { Component, OnInit } from '@angular/core';
import {Course} from '../course';
import {Student} from '../student';
import {Education } from '../education';
import { StudentService} from '../student.service';



@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  student_details:Student;

  constructor(private studentService:StudentService) { 
    this.studentService.ViewStudent().subscribe(
      student=>{
        this.student_details=student;

        


      }
    );
  }

  ngOnInit() {
  }

}
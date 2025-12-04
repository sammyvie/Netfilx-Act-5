import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;


  showNote() {
    this.isNoteVisible = true;
  }

  hideNote() {
    this.isNoteVisible = false;
  }

  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }

  monthNameStatic: string = 'Oct';
  monthNameDynamic: string = 'Oct';

  cityList: string[] = ['Angeles', 'San Fernando', 'Mabalacat', 'Tarlac', 'Bataan'];

  studentList: any[] = [
    {stud_name:'A', course:'Web Development', isActive:false},
    {stud_name:'B', course:'Network Administration', isActive:false},
    {stud_name:'C', course:'Software Development', isActive:false},
    {stud_name:'D', course:'Cybersecurity', isActive:false},
    {stud_name:'E', course:'Web Development', isActive:true},
  ];


}

import { Component, OnInit } from '@angular/core';

import { Course } from './../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'front-end'},
    {_id: '2', name: 'CSS', category: 'front-end'}
  ];
  public displayedColumns: string[] = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}

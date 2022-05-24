import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  nameLang:any;
  ngOnInit(): void {
    this.nameLang = this.route.snapshot.params['name'];
  }
}

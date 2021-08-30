import { listServices } from './../../services/list.services';
import { Component, OnInit} from '@angular/core';

@Component({
  selector:'app-todoList',
  templateUrl: './todoList.component.html'
})

export class todoList implements OnInit{

  constructor(private service : listServices) {}
  x1:any;
  x2:any;
  list: any;
  ngOnInit() {
    this.list = this.service.list;
  }
 
  openDialog(t,r) {
    this.x1 = t;
    this.x2 = r;
  }

  deleteTask() {
    this.x2.remove();
    this.x2.removeChild();
    this.service.removeElement(this.x1);
  }
}
import { listServices } from './../../services/list.services';
import { Component } from "@angular/core";

@Component({
   selector : 'app-addTodo',
   templateUrl: './addTodo.component.html'
})

export class addTodo {
    
   constructor(private service : listServices){}
  
   addtoarr(f) {
      this.service.addTolist(f.value.first);
   }

}
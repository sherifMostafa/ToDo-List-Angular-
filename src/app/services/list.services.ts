export class listServices {
  list : any[] = ["ddd" , "ssss"];

  addTolist(item) {
   this.list.push(item);
  }

  removeElement(item) {
    const index = this.list.indexOf(item, 0);
    if (index > -1) {
       this.list.splice(index, 1);
    }

    // delete this.list[1];
  }
}
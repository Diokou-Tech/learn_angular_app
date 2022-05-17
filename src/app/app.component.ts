import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List App';
  langName ='';
  langStatus='';
  status = [
    'learned',
    'learn in progress',
    'not learn',
  ]
  langages = [
      {name : 'PHP', id: 0, status: 'learned'},
      {name : 'Javascript', id: 1, status: 'learned'},
      {name : 'Java', id:2, status: 'learn in progress'},
      {name : 'Python', id : 3, status: 'not learn'},
  ];

  deleteLang(langId: number){
    // this.langages.splice(langId,1);  
    const IndexElement = this.langages.findIndex((task) => task.id === langId);
    this.langages.splice(IndexElement,1);  
  }
  addLang(){
    // alert('addLang click')
    const lastIndex = this.langages.length - 1 ;
    const id = lastIndex + 1;
    this.langages.push({'name' : this.langName, 'id' : id, 'status' : this.langStatus});
    this.langName = '';
    this.langStatus = '';
  }
}

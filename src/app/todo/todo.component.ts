import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Todo List App';
  langName ='';
  langStatus='';
  status = [
    'learned',
    'in progress',
    'not learned',
  ]
  langages = [
      {name : 'PHP', id: 0, status: 'learned'},
      {name : 'Javascript', id: 1, status: 'learned'},
      {name : 'Java', id:2, status: 'in progress'},
      {name : 'Python', id : 3, status: 'not learned'},
  ];
  tempLangs =this.langages;

  deleteLang(langId: number){
    // this.langages.splice(langId,1);  
    const IndexElement = this.langages.findIndex((task) => task.id === langId);
    this.langages.splice(IndexElement,1);  
  }
  addLang(){
    // alert('addLang click')
    if(this.langName == '' || this.langStatus == ''){
      alert('Remplir tous les champs !');
      return ;
    }
    const lastIndex = this.langages.length - 1 ;
    const id = lastIndex + 1;
    this.langages.push({'name' : this.langName, 'id' : id, 'status' : this.langStatus});
    this.langName = '';
    this.langStatus = '';
  }
  filterLang(langStatusFilter:any){
    if(langStatusFilter != null){
      this.langages = this.tempLangs.filter((lang)=> langStatusFilter === lang.status);
    }else{
      this.langages = this.tempLangs;
      return;
    }
  }

}

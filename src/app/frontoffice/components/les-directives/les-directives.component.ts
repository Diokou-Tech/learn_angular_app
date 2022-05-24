import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-les-directives',
  templateUrl: './les-directives.component.html',
  styleUrls: ['./les-directives.component.css']
})
export class LesDirectivesComponent implements OnInit {
  isSpecial = false;
  show = true;
  constructor() { }

  ngOnInit(): void {
    this.isSpecial = !this.isSpecial;
  }
  toggle(){
    this.isSpecial = !this.isSpecial;
  }
  afficher(){
    this.show = !this.show;
  }
  logger(element:any){
    alert('VOici la valeur tapée ! ' + element.value);
  }

}

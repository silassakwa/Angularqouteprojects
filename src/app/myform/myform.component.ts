import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{Quotes} from '../quotes';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
 //enterQuotes=new Quotes("" ,"" , "",new Date());
  @Output() addQuotes=new EventEmitter <Quotes>();
  onSubmit(){
  //this.addQuotes.emit(this.enterQuotes);
  //this.addQuotes.emit(this.newQuotes);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

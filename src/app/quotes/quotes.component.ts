import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes=[
          new Quotes(1,'Life is just a chance to grow a soul.',' A. Powell Davies',20,0),
          new Quotes(2,'Only a life lived for others is a life worthwhile.',' Albert Einstein',19,1 ),
          new Quotes(3,'Expect nothing, live frugally on surprise.','Alice Walker',14,4),
          new Quotes(4,'Because I have loved life, I shall have no sorrow to die.',' Amelia Burr',12,3),
          new Quotes(5,'People living deeply have no fear of death.','Anais Nin',12,5 ),
        
  ]
  deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
        
        if(toDelete){
            this.quotes.splice(index,1)
        }
      }
    }
toogleDetails(index){
    this.quotes[index].description = !this.quotes[index].description;
}
  constructor() { }

  ngOnInit() {
  }

}

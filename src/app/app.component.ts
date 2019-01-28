import { Component } from '@angular/core';
import {Quotes} from './quotes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  quotes=[
   
    new Quotes(1,'Life is just a chance to grow a soul.',' A. Powell Davies',new Date(2019,3,14)),
    new Quotes(2,'Only a life lived for others is a life worthwhile.',' Albert Einstein', new Date(2018,9,14)),
    new Quotes(3,'Expect nothing, live frugally on surprise.','Alice Walker',new Date(2018,5,14)),
    new Quotes(4,'Because I have loved life, I shall have no sorrow to die.',' Amelia Burr',new Date(2018,7,14)),
    new Quotes(5,'People living deeply have no fear of death.','Anais Nin',new Date(2018,10,14)),
  
        
  ]
}

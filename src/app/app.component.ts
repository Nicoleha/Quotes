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
    new Quotes(1,'Life is just a chance to grow a soul.',' A. Powell Davies',20,0),
          new Quotes(2,'Only a life lived for others is a life worthwhile.',' Albert Einstein',19,1 ),
          new Quotes(3,'Expect nothing, live frugally on surprise.','Alice Walker',14,4),
  new Quotes(4,'Because I have loved life, I shall have no sorrow to die.',' Amelia Burr',12,3),
          new Quotes(5,'People living deeply have no fear of death.','Anais Nin',12,5 ),
        
  ]
}

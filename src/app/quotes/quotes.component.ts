import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes=[
    new quote('Life is just a chance to grow a soul.',' A. Powell Davies',20,0),
          new quote('Only a life lived for others is a life worthwhile.',' Albert Einstein',19,1 ),
          new quote('Expect nothing, live frugally on surprise.','Alice Walker',14,4),
          new quote('Because I have loved life, I shall have no sorrow to die.',' Amelia Burr',12,3),
          new quote('People living deeply have no fear of death.','Anais Nin',12,5 ),
        
  ]

  constructor() { }

  ngOnInit() {
  }

}

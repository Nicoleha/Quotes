import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() quote:Quotes;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  public upvote:number=0
  like(upvote){
   this.upvote+=1
  }
  public downvote:number=0
  dislike(upvote){
   this.upvote-=1
  }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Quote} from '../../models/quote';

@Component({
  selector: 'app-quotify',
  templateUrl: './quotify.component.html',
  styleUrls: ['./quotify.component.css']
})
export class QuotifyComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('If you can make a woman laugh, you can make her do anything.','Marilyn Monroe','Lyn Adelaide',new Date(2020,4,8),2,1),
    new Quote('There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.','Jane Austen','Edrea Jakes',new Date(2020,3,30),1,5),
    new Quote('A friend is someone who knows all about you and still loves you.','Elbert Hubbard','Lizbeth Wangu',new Date(2020,1,5),5,0),
    new Quote('It is not a lack of love, but a lack of friendship that makes unhappy marriages.','Friedrich Nietzsche','Charlene Rose',new Date(2019,9,11),1,1),
    new Quote('The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.',' Bob Marley','Albert Austen',new Date(2019,5,15),3,2),
  ];  
  textContent : string = 'see more'
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
    this.textContent = 'see less'
  }
  quoteDeleted(deleteQuote, index){
    if (deleteQuote){
      this.quotes.splice(index,1)
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

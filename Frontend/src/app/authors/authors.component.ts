import { Component, OnInit } from '@angular/core';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title="Authors"

  
  authors=[{
    name: '',
    born: '',
    image: '',
    }]

  constructor(private authorservice:AuthorserviceService) { }

  ngOnInit(): void {

    this.authorservice.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
      console.log(this.authors)
    });

  }

}

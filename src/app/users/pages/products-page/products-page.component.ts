import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  
  constructor(
    private gifService:GifService
  ){
   this.gifs()
  }
  
  public gifList:string[]=[]

  gifs(){
    const gifs=[...this.gifService._tagHistory]
    this.gifList=gifs
  }
  
  
  @ViewChild('tagInput')
  public tagInput!:ElementRef<HTMLInputElement>
  

  searchGif():void{
    const newSearch=this.tagInput.nativeElement.value
    this.gifService.searchTag(newSearch)
    this.tagInput.nativeElement.value=''
    this.gifs()
  }
}

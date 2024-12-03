import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { CommonModule } from '@angular/common';
import { Gif } from '../../interfaces/Gif.interface';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'] // Corrige `styleUrl` a `styleUrls`
})
export class ProductsPageComponent implements OnInit {
  public searchList: string[] = [];
  public gifList: Gif[] = [];

  @ViewChild('tagInput') public tagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private gifService: GifService
  ) {
    this.tagHistory()
  }

  ngOnInit(): void {
    // Suscríbete al BehaviorSubject para obtener los GIFs
    this.gifService.gifList$.subscribe((gifs) => {
      this.gifList = gifs;
      console.log('GIFs actualizados:', this.gifList);
    });

    // Obtén el historial inicial
    this.searchList = [...this.gifService.tagHistory];
  }

  tagHistory():string[]{
    const newList=[...this.gifService.tagHistory]
    this.searchList=newList
    return this.searchList
  }

  searchGif(): void {
    const newSearch = this.tagInput.nativeElement.value;
    if (newSearch.trim().length > 0) {
      this.gifService.searchTag(newSearch);
      this.tagInput.nativeElement.value = '';
    }
    this.tagHistory()
  }
}

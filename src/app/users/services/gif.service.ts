import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  
  private organizedTags(tag:string){
    tag=tag.toLowerCase()
    if(this._tagHistory.includes(tag)){
      this._tagHistory=this._tagHistory.filter((e)=>e!==tag)
    }
    this._tagHistory.unshift(tag)
    this._tagHistory=  this._tagHistory.splice(0,6)
  }
  
  public _tagHistory:string[]=[]
  constructor() { }

  get tagHistory(){
    return [...this._tagHistory]
  }

  searchTag(tag:string):void{
    if(tag.length===0)return 
    this.organizedTags(tag)
  }

}

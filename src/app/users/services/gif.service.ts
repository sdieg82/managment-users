import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const GIPHY_API_KEY='gu3Vy8xgg6kifgQ571WCF1fpduDZQ1X2'
const urlGif = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=valorant`

@Injectable({
  providedIn: 'root'
})
export class GifService {
  
  constructor(
    private http:HttpClient
  ) { }
  
  private apiGif:string=GIPHY_API_KEY
  
  private organizedTags(tag:string){
    tag=tag.toLowerCase()
    if(this._tagHistory.includes(tag)){
      this._tagHistory=this._tagHistory.filter((e)=>e!==tag)
    }
    this._tagHistory.unshift(tag)
    this._tagHistory=  this._tagHistory.splice(0,6)
  }
  
  public _tagHistory:string[]=[]

  get tagHistory(){
    return [...this._tagHistory]
  }

  searchTag(tag:string):void{
    if(tag.length===0)return 
    this.organizedTags(tag)
    this.http.get(urlGif)
    .subscribe(
      resp=>{
        console.log(resp)
      }
    )
  }
}

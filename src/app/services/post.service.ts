import { Injectable } from '@angular/core';
import { Ipost } from '../components/models/Iposts';
import { Idata } from '../components/models/Idata';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Idata[] = [
    {
      postdata : "this project will work",
      date : new Date(),
      id : (Math.random() * Number(new Date())).toFixed().toString(),
      userid : "1"  ,
      img:  "media/pexels-elti-meshau-107925-333850.jpg"
    }
    ,
    {
      postdata : "this project will work",
      date : new Date(),
      id : (Math.random() * Number(new Date())).toFixed().toString(),
      userid : "1"  ,
      img:  "media/pexels-simon73-1181181.jpg"
    },
    {
      img:  "media/pexels-vladbagacian-1368382.jpg",
      postdata : "this project will work",
      date : new Date(),
      id : (Math.random() * Number(new Date())).toFixed().toString(),
      userid : "2"  
    }
  ];
 addPost(postdata : Idata ){
   
    this.posts.push(postdata);
 }
deletePost(id : string)
{
  this.posts =  this.posts.filter((post)=> post.id !== id);
}
editpost(postdata : string , postimg : string|null , id : string)
{
  const index = this.posts.findIndex((post)=> post.id === id )
  if(index != -1)
  {
  const post : Idata = {
    ...this.posts[index],
    img : postimg,
    postdata  
  }
  this.posts[index] = post;
} 
}

}

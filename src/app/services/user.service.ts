import { inject, Injectable } from '@angular/core';
import { IUser } from '../components/models/Iuserdata';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  router = inject(Router);
  logedUser: IUser | null = null;
  users : IUser[] = 
  [
    {
        id : "1",
        userImg : "media/pexels-elti-meshau-107925-333850.jpg",
        username : "hima elarby",
        password : "123123"
    },
    {
        id : "2",
        userImg : "media/pexels-simon73-1181181.jpg",
        username : "hazem elarby",
        password : "123"
    }
  ]
getuserbyid(id : string )
{
  return this.users.find((user)=> user.id === id );
  
}
login(userName: string, password: string) {
  for(let i = 0; i < this.users.length; i++) {
    if(this.users[i].username.toLowerCase() === userName.toLowerCase() && this.users[i].password === password) {
      this.logedUser = this.users[i];
      break;
    }
  }

  this.router.navigate(['']);
}

register(newUser: IUser) {
  this.users.push(newUser);
  this.router.navigate(['login']);
}

logOut() {
  this.logedUser = null;
}

}

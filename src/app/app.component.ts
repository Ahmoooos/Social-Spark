import { Component, inject } from '@angular/core';
import { Ipost } from './components/models/Iposts';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'socialapp';
  private _postservices = inject(PostService);

 get postservices()
 {
  return this._postservices;
 }
 
}

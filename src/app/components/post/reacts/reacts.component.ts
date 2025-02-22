import { Component } from '@angular/core';

@Component({
  selector: 'app-reacts',
  standalone: false,
  templateUrl: './reacts.component.html',
  styleUrl: './reacts.component.css'
})
export class ReactsComponent {
  selectedReaction: number | null = null;

  // Define the reactions (icon classes) in an array. This lets us easily use ngFor.
  reactions = [
    { id: 0, icon: 'fa-solid fa-thumbs-up' },
    { id: 1, icon: 'fa-regular fa-heart' },
    { id: 2, icon: 'fa-regular fa-face-sad-cry' },
    { id: 3, icon: 'fa-regular fa-face-angry' }
  ];

  // Toggle the selected reaction. If already selected, unselect it.
  selectReaction(index: number): void {
    this.selectedReaction = this.selectedReaction === index ? null : index;
    console.log("Selected reaction:", this.selectedReaction);
  }
}


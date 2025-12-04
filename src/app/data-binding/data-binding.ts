
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.html',
  styleUrls: ['./data-binding.css'],
})
export class DataBinding {
  // Interpolation
  studentName = "Samantha Wayne D. Gonzales";
  score = 95;

  // Property binding
  imageUrl = "https://www.1800flowers.com/blog/wp-content/uploads/2023/06/pink-flowers-pink-tulips-1024x576.jpg?q=70&width=3840&auto=webp";
  isDisabled = true;

  // Attribute binding
  colSpanValue = 3;

  // Class binding
  isPassing = true;

  // Style binding
  boxColor = "pink";
  boxSize = "250px";
}

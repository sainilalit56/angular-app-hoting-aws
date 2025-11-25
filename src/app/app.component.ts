import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data1: string = '';
  data2: string = '';

  submitBoundValues() {
    console.log('Bound Value 1:', this.data1);
    console.log('Bound Value 2:', this.data2);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        // Check if the response was successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the JSON data from the response
        return response.json();
      })
      .then((data) => {
        // Handle the successful response data
        console.log('API call successful:', data);
        // You can now work with the 'data' object
        document.getElementById('output').textContent = `Title: ${data.title}`;
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch operation
        console.error('Error during API call:', error);
        document.getElementById(
          'output'
        ).textContent = `Error: ${error.message}`;
      });
    // Perform further actions with the bound values
  }
}

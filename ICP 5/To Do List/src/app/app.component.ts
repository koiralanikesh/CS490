import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To-do List';
  // Write code to push new item
  // define list of items
  public items: Array<{itemNumber: number, description: string, complete: string, buttonText: string;}> = [
  ];

  newItems() {
    const new_text: string = document.getElementById('ItemDes').value;
    document.getElementById('ItemDes').value = '';
    this.items.push({
      itemNumber: (this.items.length + 1),
      description:  new_text,
      complete: '',
      buttonText: 'Complete'
    });
  }


// Write code to complete item
  completeItem(complete_items: number) {
    if (this.items[complete_items - 1 ].buttonText === 'ItemDesRe-Open') {
      this.items[complete_items - 1 ].buttonText = 'Complete';
      this.items[complete_items - 1 ].complete = '';
    } else {
      this.items[complete_items - 1 ].buttonText = 'Re-Open';
      this.items[complete_items - 1 ].complete = 'completed';
    }
  }

  deleteItem(num_2_remove: number) {
    this.items.splice(num_2_remove, 1);
  }

}




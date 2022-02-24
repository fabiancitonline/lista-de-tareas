import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public items: string[] = [];

  public NuevaTarea = '';

  public AddTarea() {
    if (this.NuevaTarea === '') {
    } else {
      this.items.push(this.NuevaTarea);
      this.NuevaTarea = '';
    }
  }

  public borrarTarea(index: number) {
    this.items.splice(index, 1);
  }
}

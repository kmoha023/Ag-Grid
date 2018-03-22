import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-component',
  templateUrl: './reg-component.component.html',
  styleUrls: ['./reg-component.component.css']
})
export class RegComponentComponent {
  private params: any;

    agInit(params: any): void {
        this.params = params;
    }

}

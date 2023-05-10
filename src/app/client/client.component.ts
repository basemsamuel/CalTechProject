import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/model/client';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  showFormData = false;
  
  clientForm = new FormGroup(
    {
      name: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl('')
    }
  )

  onSubmit() {
      alert(JSON.stringify(this.clientForm.value))
  }
}

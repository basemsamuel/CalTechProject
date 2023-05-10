import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/model/client';

@Component({
  selector: 'app-clientscheduling',
  templateUrl: './clientscheduling.component.html',
  styleUrls: ['./clientscheduling.component.css']
})
export class ClientschedulingComponent {
  clientForm = new FormGroup(
    {
      fnanameme: new FormControl(''),
      lname: new FormControl(''),
      meeting_desc: new FormControl(''),
      apptdate: new FormControl(''),
      apptime: new FormControl(''),
      appendtime: new FormControl('')
    }
  )

  onSubmit() {
      alert(JSON.stringify(this.clientForm.value))
  }
}

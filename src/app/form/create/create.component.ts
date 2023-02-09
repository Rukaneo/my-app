import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  addUser:any;
  constructor(private fb:FormBuilder,
    private routes:Router,
    private testService:TestService) {

      this.addUser = fb.group(
        {
          name:['' ],
          email:[''],
          phone:['']

        }
      )
      
    }
    
    onSubmit(): void {
      this.testService.createUser(this.addUser.value).subscribe((data:any) =>{console.log(data);
      });
      console.log(this.addUser.value);
      this.routes.navigate(['/view'])
    }

    
}

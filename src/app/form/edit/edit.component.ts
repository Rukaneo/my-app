import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from 'src/app/service/test.service';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/users.module';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  editUser:any;
  id:any;
  constructor(private fb:FormBuilder,
    private routes:Router,
    private testService: TestService,
    private url:ActivatedRoute
    ) {

      this.editUser = fb.group(
        {
          _id:[''],
          name:['' ],
          email:[''],
          phone:['']

        }
      )

    }

    ngOnInit(): void {

      this.getUser();
      
  
    }

    getUser(): void {
      this.id = this.url.snapshot.params['id'];
      console.log(this.id);
      this.testService.getUser(this.id).subscribe(data =>{
      //  console.log(data.data!['user']._id)    
    // this.editUser.setValue({
    //       _id: data.data!['user']._id,
    //       name:data.data!['user'].name,
    //       email:data.data!['user'].email,
    //       phone:data.data!['user'].phone
    //     });
    this.editUser.patchValue(data.data!['user'])
      })
    }
    onSubmit(): void {
      // console.log(this.editUser.value);
      this.testService.updateUser(this.editUser.value).subscribe((data:any) =>{console.log(data);
      });
      console.log(this.editUser.value);
      this.routes.navigate(['/view'])
    }

}

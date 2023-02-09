import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/service/test.service';
import { UserModel } from 'src/app/models/users.module';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  contact!:UserModel [] ;

  constructor(private route: ActivatedRoute,
    private testService: TestService) { }
  ngOnInit(): void {

    this.getUser();
  }

  getUser(): void {
    // this.testService.getAllUsers().subscribe(data => { console.log(  data) } );
    this.testService.getAllUsers().subscribe(res => {
      this.contact = res.data!['users']
      // console.log(this.contact[3].phone)
    })
      // {console.log(res.data!['users'])});
    // this.testService.getAllUsers().subscribe(users => this.contact =  users.[0]['users']);
  //   this.testService.getAllUsers2().subscribe(resp => {
  //  console.log(resp.data.users); 
  //   });
  //   this.testService.getAllUsers2().subscribe(resp => this.contact = resp.data.users
  //   )
  };

  delUser(_id: any, name: string): void {
    // console.log(window.confirm('Delete user?'))
   if(window.confirm('Delete User?')) {
    this.testService.deleteUser(_id).subscribe(data => { 
      console.log(data)
      if(!data) {
        this.getUser()
        console.log(`${name} deleted successfully`)
      }else{

        console.log('User not deleted')
      }
       });

   } console.log('Operation cancelled')
 
    // this.contact = this.contact.filter((u: any) => u !== datas);
    
    // alert(`${datas.name} was deleted from database`);
  };


  getContact(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.testService.getUser(id).subscribe(data => this.contact = data);
  }
  

}


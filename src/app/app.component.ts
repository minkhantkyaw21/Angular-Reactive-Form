import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl,ReactiveFormsModule,Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-Reactive-Form';

  reactiveForm :FormGroup;
  ngOnInit(): void {
      this.reactiveForm=new FormGroup({
        firstname:new FormControl(null,Validators.required),
        lastname:new FormControl(null,Validators.required),
        email:new FormControl(null,[Validators.required,Validators.email]),
        username:new FormControl(null),
        dob:new FormControl(null),
        phone:new FormControl(null),
        gender:new FormControl('Male'),
        address:new FormGroup({
          street:new FormControl(null,Validators.required),
          country:new FormControl('Myanmar'),
          city:new FormControl(null,Validators.required)
        }),
        skills:new FormArray([
          new FormControl(null,Validators.required)
        ]),
        experience:new FormArray([
          
        ])
       
           
      })
  }
  OnFormSubmitted(){
    console.log(this.reactiveForm);
  }
  AddSkill(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }
  DeleteSkill(index:number){
    const controls=<FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }
  AddExperience(){
    const formgroup=new FormGroup({
      company:new FormControl(null),
      exp:new FormControl(null),
      position:new FormControl(null)
    });
    (<FormArray>this.reactiveForm.get('experience')).push(formgroup);
  }
  DeleteExperience(index:number){
    const formarr=<FormArray>this.reactiveForm.get('experience');
    formarr.removeAt(index);
  }
}

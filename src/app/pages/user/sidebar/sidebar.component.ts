import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  categories:any;
  id:any;
  constructor(
    private _cat:CategoryService,
    private _snack:MatSnackBar,
    private _login:LoginService
  ){}
  ngOnInit(): void {
   this._cat.categories().subscribe((data:any)=>{
    this.categories=data;
   },(error)=>{
    this._snack.open("Error in loading data",'',{duration:3000,});
   });

  this._login.getCurrentUser().subscribe((data:any)=>{
    this.id=data.id;
  });
 
  }

}

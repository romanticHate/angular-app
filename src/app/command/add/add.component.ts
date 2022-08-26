import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() comm:any;
  
  Id:string="";
  HowTo:string="";
  Line:string="";
  Platform:string="";  

  CommandList : any=[];

  ngOnInit(): void {
   this.loadCommandList();
  }

  loadCommandList(){
    this.service.getAllCommand().subscribe((data:any)=>{
      this.CommandList=data;

      this.Id=this.comm.Id;
      this.HowTo=this.comm.HowTo;
      this.Line=this.comm.Line;
      this.Platform=this.comm.Platform;
     
    });
  }

  addCommand(){
    var val = {
      Id:this.Id,
      HowTo:this.HowTo,
      Line:this.Line,
      Platform:this.Platform};  

    this.service.addCommand(val).subscribe(res=>{
    
    });
  }

  editCommand(){
    var val = {
      Id:this.Id,
      HowTo:this.HowTo,
      Line:this.Line,
      Platform:this.Platform};  

    this.service.updateCommand(val).subscribe(res=>{
    alert(res.toString());
    });
  }  
}

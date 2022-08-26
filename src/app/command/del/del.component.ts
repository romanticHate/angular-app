import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() comm:any;
  CommandList: any = [];
  ngOnInit(): void {
  }

  deleteClick() {  
    this.service.deleteCommand(this.comm.Id).subscribe(data => {
      this.refreshList();
    });
  }

  refreshList() {
    this.service.getAllCommand().subscribe(data => {
      this.CommandList = data;
    });
  }
}

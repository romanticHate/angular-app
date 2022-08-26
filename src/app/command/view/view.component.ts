import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private service: SharedService) { }

  values = '';
  CommandList: any = [];
  ModalTitle: string = "";
  ActivateAddEdit: Boolean = false;
  ActivateDel: Boolean = false;
  comm: any;

  ngOnInit(): void {
    this.refreshList();
  }

  onSearch(event: any) {
    this.values = event.target.value;
    if (!this.values)
      this.refreshList();

    else
      this.service.getCommandListByPlatform(this.values).subscribe(data => {
        this.CommandList = data;
        console.log(this.CommandList);
      });
  }

  addClick() {
    this.comm = {
      Id: 0,
      HowTo: "",
      Line: "",
      Platform: ""
    }
    this.ModalTitle = "Add";
    this.ActivateAddEdit = true;
  }

  editClick(item: any) {
    console.log(item);
    this.comm = item;
    this.ModalTitle = "Edit";
    this.ActivateAddEdit = true;
  }

  deleteClick(item: any) {
    console.log(item);
    this.comm = item;
    this.ModalTitle = "Delete";
    this.ActivateDel = true;
    this.ActivateAddEdit = false;
  }

  closeClick() {
    this.ActivateDel = false;
    this.ActivateAddEdit = false;
    this.refreshList();
  }

  refreshList() {
    this.service.getAllCommand().subscribe(data => {
      this.CommandList = data;
      console.log(this.CommandList);
    });
  }
}

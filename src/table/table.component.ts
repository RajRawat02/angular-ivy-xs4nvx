import { Component, OnInit } from '@angular/core';
import { policy } from './../model/policy';
import { PolicyService } from '../services/policy.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  policies: any = [];
  id: string;

  constructor(private policy: PolicyService, private modalService: NgbModal) {}

  ngOnInit() {
    this.policy.getAllPolicies().subscribe((data: any) => {
      console.log('^^^^^^^^^^^^^^66666', data.data);
      this.policies = data.data;
    });
  }

  search() {
    this.policy.searchpolicy(this.id).subscribe((data: any) => {
      console.log('$$$$$$$$$$$$$$$$$$$44', data.data);
      if (data.data !== null) {
        let d = [];
        this.policies = d.push(data.data);
      }
    });
  }

  open(policy) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.policy = policy;
  }
}

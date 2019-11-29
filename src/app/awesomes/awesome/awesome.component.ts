import {Component, OnInit} from '@angular/core';
import {IAwesome} from '../iawesome';
import {AwesomesService} from '../../service/awesomes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-awesome',
  templateUrl: './awesome.component.html',
  styleUrls: ['./awesome.component.css']
})
export class AwesomeComponent implements OnInit {
  awesomesList: IAwesome[] = [];
  // idAwesome = +this.routeActiveted.snapshot.paramMap.get('id');

  constructor(private awesomeService: AwesomesService,
              private routeActiveted: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.awesomeService.getAll().subscribe((data: IAwesome[]) => {
      this.awesomesList = data;
    });
  }

  deleteAwesome(id) {
    if(confirm('bạn có chắc muốn xóa không?'))
    this.awesomeService.delete(id).subscribe(() => {
      return this.getAll();
    });
  }
}

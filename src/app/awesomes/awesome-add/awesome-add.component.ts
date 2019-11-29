import {Component, OnInit} from '@angular/core';
import {IAwesome} from '../iawesome';
import {FormBuilder, Validators} from '@angular/forms';
import {AwesomesService} from '../../service/awesomes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-awesome-add',
  templateUrl: './awesome-add.component.html',
  styleUrls: ['./awesome-add.component.css']
})
export class AwesomeAddComponent implements OnInit {
  awesomeList: IAwesome[] = [];
  AddAwesomeForm = this.fb.group({
    tag: ['', Validators.required],
    url: ['', Validators.required],
    descriptions: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private awesomeService: AwesomesService,
              private route: Router) {
  }

  ngOnInit() {
  }

  create() {
    const data = this.AddAwesomeForm.value;
    this.awesomeService.add(data).subscribe(result => {
      this.route.navigate(['/awesome']);
      console.log(data);
    });
  }

  get tag() {
    return this.AddAwesomeForm.get('tag');
  }
  get url() {
    return this.AddAwesomeForm.get('url');
  }
  get descriptions() {
    return this.AddAwesomeForm.get('descriptions');
  }


}

import {Component, OnInit} from '@angular/core';
import {AwesomesService} from '../../service/awesomes.service';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {IAwesome} from '../iawesome';

@Component({
  selector: 'app-awesome-edit',
  templateUrl: './awesome-edit.component.html',
  styleUrls: ['./awesome-edit.component.css']
})
export class AwesomeEditComponent implements OnInit {
  idAwesome = +this.routeActiveted.snapshot.paramMap.get('id');
  EditAwesomeForm = this.fb.group({
      tag: ['', [Validators.required]],
      url: ['', [Validators.required]],
      descriptions: ['', [Validators.required]],
    }
  );

  constructor(private awesomeService: AwesomesService,
              private fb: FormBuilder,
              private routeActiveted: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit() {
    this.awesomeService.findById(this.idAwesome).subscribe((data: IAwesome) => {
      this.EditAwesomeForm.patchValue({
        tag: data.tag,
        url: data.url,
        descriptions: data.descriptions
      });
    });
  }

  update() {
    const data = this.EditAwesomeForm.value;
    this.awesomeService.update(data, this.idAwesome).subscribe(result => {
      this.route.navigate(['/awesome']);
    });
  }

  get tag() {
    return this.EditAwesomeForm.get('tag');
  }

  get url() {
    return this.EditAwesomeForm.get('url');
  }

  get descriptions() {
    return this.EditAwesomeForm.get('descriptions');
  }


}

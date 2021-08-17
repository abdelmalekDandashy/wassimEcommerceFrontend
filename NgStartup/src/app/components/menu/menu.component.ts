import { Component, OnInit } from '@angular/core';
import { menumodel } from '../../core/Models/menumodel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  entries: menumodel[] = [];
  constructor(private router: Router) { }

  MenuHandler(m: menumodel) {
    const NavArray = [];
    NavArray.push(m.route);
    this.router.navigate(NavArray);
  }

  ngOnInit() {
    let m = new menumodel();
    m.fa_icon = 'fa fa-users';
    m.title = 'Persons';
    m.route = 'person';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-transgender-alt';
    m.title = 'Gender';
    m.route = 'gender';
    this.entries.push(m);


    m = new menumodel();
    m.fa_icon = 'fa fa-product-hunt';
    m.title = 'product';
    m.route = 'product';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-category-alt';
    m.title = 'category';
    m.route = 'category';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-user-alt';
    m.title = 'user Account';
    m.route = 'userAccount';
    this.entries.push(m);
  }

}

import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterEvent, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  collapsed = false;
  navData = navbarData;

}

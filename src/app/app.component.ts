import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HostLocationService } from 'src/app/service/host-location.service';
import { Router, NavigationEnd } from '@angular/router';
import { AttrAst } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title = 'container';
  outpatientPath: string = null;
  constructor(
    private hostLoaction: HostLocationService) {
   // 本来想使用路由监听，一旦路由变化，但好像没作用，监听不到子路由的变化，
  }
  public ngAfterViewInit(): void {
    // 
    // output
    const dom = document.getElementById('outpatient');
    dom.addEventListener('pathChange', (event: any) => {
      this.changedOutpatientPath(event.detail);
    });
  }

  public ngOnInit(): void {
    this.hostLoaction.handleNavigation();
  }

  public navigateTo(outlet: string, path: string): void {
    switch (outlet) {
       case 'outpatient':
         this.outpatientPath = path;

         break;
       default:
    }
  }

  public showAsElement(outlet: string, tagName: string, attrs?: any): void {
    switch (outlet) {
       case 'outpatient':
         const dom = document.getElementById("test2");
         dom.innerHTML = '';
         const targetDom = document.createElement(tagName);
         dom.appendChild(targetDom);
         if (attrs) {
          (Object.keys(attrs)).forEach((attrName) => {
            targetDom.setAttribute(attrName, attrs[attrName]);
          });
         }
         break;
       default:
    }
  }

  changedOutpatientPath(path: string) {
    if (this.outpatientPath !== path) {
      this.outpatientPath = path;
    }
  }
}

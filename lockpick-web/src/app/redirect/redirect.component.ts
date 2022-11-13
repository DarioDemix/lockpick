import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareProviderService } from '../service/share-provider.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sharedProvider: ShareProviderService) { }

  ngOnInit() {
    let url = this.sharedProvider.getUrl();
    this.navigate(url);
  }

  navigate(url: string){
    this.router.navigateByUrl(url);
  }
}

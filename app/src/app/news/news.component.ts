import { getLocaleCurrencyName } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  
  public dateForm = new FormControl('',[ Validators.required]);
  public searchForm = new FormControl('',[ Validators.required]);
  public toggleForm = new FormControl('',[ Validators.required]);
  public newsData: any = {status:'', totalResults:0, articles:[]};
  constructor(private providerService: ProviderService,
            @Inject(LOCALE_ID) public locale: string) { }

  ngOnInit(): void {
    this.getNews( {
      country: 'mx',
      language: 'es'
    });
  }

  public searchNews(): void {
    console.log(this.searchForm.value);
    this.getNews({
      q: this.searchForm.value
    });
  }
 
  public getNews(dataRequest: any): void {
    this.providerService.getNews(dataRequest).subscribe((data) => {
      this.newsData = data;
      console.log(this.newsData);
    });
  }

  public chooseDate(): void {
    const dateData = new Date(this.dateForm.value);
    this.getNews( {
      country: 'mx',
      publishedAt: dateData.toUTCString()
    });
  }

  public toggleNews(): void {
    console.log(this.toggleForm.value);
    if(this.toggleForm.value === 'international') {
      this.getNews({
        language: 'es',
      });
    } else {
      this.getNews( {
        country: 'mx',
      });
    }
  }

}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];
  clientID = '&client_id=V0CVSR3AP43OHVN34GSHQHN3NUZZF0LU5WONGZSBAWPAAS1K';
  clientSecret = '&client_secret=UD20RJW5KQVWDNOLVUMXQKSCUXQ05EYL34PZLF0ADTQMFUWK';


  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
  }

  getVenues() {

    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;

    if (this.recipeValue !== null) {
      /**
       * Write code to get recipe
       */
      this._http.get('https://api.edamam.com/search?app_id=dd3168b7&app_key=4f1eb3050c89fecf1e1a7d9781446bbf&from=0&to=4&calories=591-722&health=alcohol-free&q=' + this.recipeValue)
        .subscribe((data: any) => {
          for (let i = 0; i < data.hits.length; i++) {
            this.recipeList[i] =  {
              'name' : data.hits[i].recipe.label,
              'url'  : data.hits[i].recipe.url,
              'icon' : data.hits[i].recipe.image
            };
          }
        });

    }

    if (this.placeValue != null && this.placeValue !== '' && this.recipeValue != null && this.recipeValue !== '') {
      /**
       * Write code to get place
       */
      this._http.get('https://api.foursquare.com/v2/venues/explore?near=' + this.placeValue + this.clientID+this.clientSecret+'&v=20190909&limit=6&query=' + this.recipeValue).subscribe((data: any) => {
          for (let i = 0; i < data.response.groups[0].items.length; i++) {
            this.venueList[i] = data.response.groups[0].items[i].venue;
            const name = this.venueList[i].name;
            const location = this.venueList[i].location.formattedAddress[i];
          }
        });
    }
    }
  }

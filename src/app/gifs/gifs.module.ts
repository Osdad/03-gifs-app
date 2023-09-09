import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page.component';
import { SearchBoxComponent } from './components/search/search-box.component';
import { ListGifsComponent } from './components/cardlist/cardlist.component';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, ListGifsComponent],
  exports: [HomePageComponent],
  imports: [CommonModule],
})
export class GifsModule {}

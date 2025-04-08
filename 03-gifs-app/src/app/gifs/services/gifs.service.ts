import { computed, inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs";

import type { GiphyResponse } from "../interfaces/giphy.interfaces";
import { Gif } from "../interfaces/gif.interface";
import { GifMapper } from "../mapper/gif.mapper";
import { environment } from "@envs/environment";

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        }
      })
      .subscribe((res) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(res.data);
        this.trendingGifs.set(gifs);
        this.trendingGifLoading.set(false);

        console.log(gifs);
      })
  }

  searchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        }
      })
      .pipe(
        map(({ data }) => data),
        map(items => GifMapper.mapGiphyItemsToGifArray(items)),
        tap(items => {
          this.searchHistory.update(history => ({
            ...history,
            [query.toLowerCase()]: items,
          }))
        })
      )
      // .subscribe((res) => {
      //   const gifs = GifMapper.mapGiphyItemsToGifArray(res.data);

      //   console.log(gifs);
      // })
  }
}

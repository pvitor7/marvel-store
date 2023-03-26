export interface IComicRequest {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: Array<{
      type: string;
      language: string;
      text: string;
    }>;
    resourceURI: string;
    urls: Array<{
      type: string;
      url: string;
    }>;
    series: {
      resourceURI: string;
      name: string;
    };
    variants: Array<{
      resourceURI: string;
      name: string;
    }>;
    collections: Array<any>;
    collectedIssues: Array<any>;
    dates: Array<{
      type: string;
      date: string;
    }>;
    prices: Array<{
      type: string;
      price: number;
    }>;
    thumbnail: {
      path: string;
      extension: string;
    };
    images: Array<{
      path: string;
      extension: string;
    }>;
    creators: {
      available: number;
      collectionURI: string;
      items: Array<{
        resourceURI: string;
        name: string;
        role: string;
      }>;
      returned: number;
    };
    characters: {
      available: number;
      collectionURI: string;
      items: Array<{
        resourceURI: string;
        name: string;
      }>;
      returned: number;
    };
    stories: {
      available: number;
      collectionURI: string;
      items: Array<{
        resourceURI: string;
        name: string;
        type: string;
      }>;
      returned: number;
    };
    events: {
      available: number;
      collectionURI: string;
      items: Array<{
        resourceURI: string;
        name: string;
      }>;
      returned: number;
    };
}

export const comicEmpty: IComicRequest = {
    id: 0,
    digitalId: 0,
    title: "",
    issueNumber: 0,
    variantDescription: "",
    description: "",
    modified: "",
    isbn: "",
    upc: "",
    diamondCode: "",
    ean: "",
    issn: "",
    format: "",
    pageCount: 0,
    textObjects: [],
    resourceURI: "",
    urls: [],
    series: {
      resourceURI: "",
      name: "",
    },
    variants: [],
    collections: [],
    collectedIssues: [],
    dates: [],
    prices: [],
    thumbnail: {
      path: "",
      extension: "",
    },
    images: [],
    creators: {
      available: 0,
      collectionURI: "",
      items: [],
      returned: 0,
    },
    characters: {
      available: 0,
      collectionURI: "",
      items: [],
      returned: 0,
    },
    stories: {
      available: 0,
      collectionURI: "",
      items: [],
      returned: 0,
    },
    events: {
      available: 0,
      collectionURI: "",
      items: [],
      returned: 0,
    },
  };

export const arrayComics = [
    
        {
            "id": 91992,
            "digitalId": 0,
            "title": " Fantastic Four by Dan Slott Vol. 1 (Hardcover)",
            "issueNumber": 0,
            "variantDescription": "",
            "description": null,
            "modified": "2021-02-22T16:40:08-0500",
            "isbn": "978-1-302-92827-8",
            "upc": "",
            "diamondCode": "SEP200729",
            "ean": "9781302 928278 53999",
            "issn": "2373-8820",
            "format": "Hardcover",
            "pageCount": 368,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/91992",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/collection/91992/_fantastic_four_by_dan_slott_vol_1_hardcover?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/31445",
                "name": " Fantastic Four by Dan Slott Vol. 1 (2021)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2021-03-10T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "2020-10-05T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 39.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/a0/603d5b82a5bc0",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/a0/603d5b82a5bc0",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91992/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 1
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91992/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91992/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/205070",
                        "name": "cover from FANTASTIC FOUR BY DAN SLOTT VOL. 1 HC (2021) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/205071",
                        "name": "story from FANTASTIC FOUR BY DAN SLOTT VOL. 1 HC (2021) #1",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91992/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 71400,
            "digitalId": 0,
            "title": " Superior Spider-Man Vol. 2: Otto-matic (Trade Paperback)",
            "issueNumber": 0,
            "variantDescription": "",
            "description": null,
            "modified": "2019-12-13T16:24:00-0500",
            "isbn": "978-1-302-91481-3",
            "upc": "",
            "diamondCode": "SEP190996",
            "ean": "9781302 914813 51799",
            "issn": "2328-4811",
            "format": "Trade Paperback",
            "pageCount": 136,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/71400",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/collection/71400/_superior_spider-man_vol_2_otto-matic_trade_paperback?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/26024",
                "name": " Superior Spider-Man Vol. 2: Otto-matic (2019)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2019-12-18T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "2019-10-28T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 17.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/5df3fc8b3c883",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/5df3fc8b3c883",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/71400/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                        "name": "Christos Gage",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/942",
                        "name": "Mike Hawthorne",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/437",
                        "name": "Lan Medina",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 4
            },
            "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/71400/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                        "name": "Spider-Man (Peter Parker)"
                    }
                ],
                "returned": 1
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/71400/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/158776",
                        "name": "cover from SUPERIOR SPIDER-MAN VOL. 2 TPB (2020) #2",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/158777",
                        "name": "story from SUPERIOR SPIDER-MAN VOL. 2 TPB (2020) #2",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/71400/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 49011,
            "digitalId": 34160,
            "title": "100th Anniversary Special (2014) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": "Just in time for the release of their SEVENTH epic motion picture, the Guardians of the Galaxy are celebrating their 100th Anniversary...by taking on the THE SILVER GALACTUS!",
            "modified": "2014-07-21T11:39:24-0400",
            "isbn": "",
            "upc": "75960608000700511",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "Just in time for the release of their SEVENTH epic motion picture, the Guardians of the Galaxy are celebrating their 100th Anniversary...by taking on the THE SILVER GALACTUS!"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/49011",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/49011/100th_anniversary_special_2014_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/100th-Anniversary-Special-1/digital-comic/34160?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=34160&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/34160?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/18454",
                "name": "100th Anniversary Special (2014)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49010",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49009",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49008",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49007",
                    "name": "100th Anniversary Special (2014) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2014-07-30T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2014-07-16T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2015-01-26T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2014-07-30T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/10/53cd2c7612d2f",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/10/53cd2c7612d2f",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/b0/536d00217d190",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49011/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/485",
                        "name": "Andy Lanning",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12392",
                        "name": "David Lopez",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 2
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49011/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49011/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110109",
                        "name": "cover from 100th Anniversary Special (2014) #5",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110110",
                        "name": "story from 100th Anniversary Special (2014) #5",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49011/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 49010,
            "digitalId": 34127,
            "title": "100th Anniversary Special (2014) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": "CELEBRATE 100 YEARS OF EARTHS MIGHTIEST HEROES...THE AVENGERS! Following the failed Badoon invasion of Earth and America's disappearance into the Negative Zone, how will the Avengers of 2061 cope?!",
            "modified": "2014-07-16T13:13:34-0400",
            "isbn": "",
            "upc": "75960608000700411",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "CELEBRATE 100 YEARS OF EARTH&#39;S MIGHTIEST HEROES &ndash; THE AVENGERS! Following the failed Badoon invasion of Earth and America&#39;s disappearance into the Negative Zone, how will the Avengers of 2061 cope?!"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/49010",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/49010/100th_anniversary_special_2014_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/100th-Anniversary-Special-1/digital-comic/34127?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=34127&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/34127?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/18454",
                "name": "100th Anniversary Special (2014)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49011",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49009",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49008",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49007",
                    "name": "100th Anniversary Special (2014) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2014-07-23T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2014-07-09T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2015-01-19T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2014-07-23T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/53c406e09649c",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/53c406e09649c",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/40/536cffe2a8b13",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49010/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49010/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49010/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110107",
                        "name": "cover from 100th Anniversary Special (2014) #4",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110108",
                        "name": "story from 100th Anniversary Special (2014) #4",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49010/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 49009,
            "digitalId": 34155,
            "title": "100th Anniversary Special (2014) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": "Have the X-Men of 2061 achieved Xavier's dream of mutants and humans living in harmony? Or will there always be a need for the X-Men?",
            "modified": "2014-07-16T13:12:43-0400",
            "isbn": "",
            "upc": "75960608000700311",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "- Have the X-Men of 2061 achieved Xavier's dream of mutants and humans living in harmony? Or will there always be a need for the X-Men?"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/49009",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/49009/100th_anniversary_special_2014_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/100th-Anniversary-Special-1/digital-comic/34155?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=34155&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/34155?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/18454",
                "name": "100th Anniversary Special (2014)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49011",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49010",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49008",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49007",
                    "name": "100th Anniversary Special (2014) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2014-07-16T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2014-07-02T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2015-01-12T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2014-07-16T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/53bae9abd8e6f",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/53bae9abd8e6f",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/c0/536cffa4cbc98",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49009/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13138",
                        "name": "In-Hyuk Lee",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11788",
                        "name": "Jennifer Van Meter",
                        "role": "writer"
                    }
                ],
                "returned": 2
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49009/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49009/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110105",
                        "name": "cover from 100th Anniversary Special (2014) #3",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110106",
                        "name": "story from 100th Anniversary Special (2014) #3",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49009/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 49008,
            "digitalId": 34110,
            "title": "100th Anniversary Special (2014) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": "It's 100 years after the wall-crawler's creation, but when the Kingpin has taken Spider-Man's ultra-powerful techno-symbiote suit, Spider-Man will need to prove once again why he is the world's greatest super hero.",
            "modified": "2014-07-16T13:12:20-0400",
            "isbn": "",
            "upc": "75960608000700211",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "It&#39;s 100 years after the wall-crawler&#39;s creation, but when the Kingpin has taken Spider-Man&#39;s ultra-powerful techno-symbiote suit, Spider-Man will need to prove once again why he is the world&#39;s greatest super hero."
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/49008",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/49008/100th_anniversary_special_2014_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/100th-Anniversary-Special-1/digital-comic/34110?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=34110&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/34110?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/18454",
                "name": "100th Anniversary Special (2014)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49011",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49010",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49009",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49007",
                    "name": "100th Anniversary Special (2014) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2014-07-09T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2014-06-25T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2015-01-05T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2014-07-09T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/20/53b1be72eec81",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/20/53b1be72eec81",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/c0/536cff66debd3",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49008/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13138",
                        "name": "In-Hyuk Lee",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9432",
                        "name": "Sean Ryan",
                        "role": "writer"
                    }
                ],
                "returned": 2
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49008/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49008/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110103",
                        "name": "cover from 100th Anniversary Special (2014) #2",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110104",
                        "name": "story from 100th Anniversary Special (2014) #2",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49008/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 49007,
            "digitalId": 34097,
            "title": "100th Anniversary Special (2014) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": "A REMARKABLE ARTIFACT FROM THE FUTURE OF MARVEL COMICS! It&#39;s 2061 and the world of the Fantastic Four has turned upside-down, complete with the granddaughter of Doom...and the Richards-Banner twins",
            "modified": "2014-07-16T13:11:56-0400",
            "isbn": "",
            "upc": "75960608000700111",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "A REMARKABLE ARTIFACT FROM THE FUTURE OF MARVEL COMICS! It&#39;s 2061 and the world of the Fantastic Four has turned upside-down, complete with the granddaughter of Doom...and the Richards-Banner twins"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/49007",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/49007/100th_anniversary_special_2014_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=34097&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/18454",
                "name": "100th Anniversary Special (2014)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49011",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49010",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49009",
                    "name": "100th Anniversary Special (2014) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/49008",
                    "name": "100th Anniversary Special (2014) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2014-07-02T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2014-06-18T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2015-11-10T00:00:00-0500"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/53a85058a61f0",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/53a85058a61f0",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/30/536cff2402418",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49007/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49007/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49007/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110101",
                        "name": "cover from 100th Anniversary Special (2014) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110102",
                        "name": "story from 100th Anniversary Special (2014) #1",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/49007/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 37253,
            "digitalId": 23162,
            "title": "15 Love (2011) #3",
            "issueNumber": 3,
            "variantDescription": "",
            "description": "",
            "modified": "2011-08-05T12:00:28-0400",
            "isbn": "",
            "upc": "5960605470-00311",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 48,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "It has come to this! The Mighty Marvel Age of Tennis Manga comes to a pulse pounding conclusion as Mill Collins finds herself in the Wayde Tennis Academy's big tournament...but her chances are looking slim. Between a possible modeling deal and the boy she's interested in, is it any wonder her trainer thinks she's not focused? But if she wants to prove herself she needs to get her head in the game fast and turn things around!"
                },
                {
                    "type": "issue_preview_text",
                    "language": "en-us",
                    "text": "Between a possible modeling deal and the boy she's interested in, is it any wonder Mill's trainer thinks she's not focused? But if she wants to prove herself she needs to get her head in the game fast and turn things around!"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37253",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/37253/15_love_2011_3?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/15-Love-3/digital-comic/23162?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=23162&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/23162?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/13379",
                "name": "15 Love (2011)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2011-08-03T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2011-07-19T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2012-05-14T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2011-09-06T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 4.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 1.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/5601c38d760b9",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/5601c38d760b9",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37253/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/274",
                        "name": "Tommy Ohtsuka",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/496",
                        "name": "Andi Watson",
                        "role": "writer"
                    }
                ],
                "returned": 2
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37253/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37253/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82484",
                        "name": "Cover #82484",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82485",
                        "name": "Interior #82485",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37253/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 37251,
            "digitalId": 22411,
            "title": "15 Love (2011) #2",
            "issueNumber": 2,
            "variantDescription": "",
            "description": "Millie's new coach, Walt, has her working day and night, training to get her off the bottom of the academy's ranking. But when a photographer takes an interest in Mill, a whole new wrinkle is added into her life.",
            "modified": "2013-03-06T10:11:51-0500",
            "isbn": "",
            "upc": "5960605470-00211",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 48,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "Millie Collins is finding that her dream of playing tennis is not as easy as she's thought.  Her new coach, Walt, has her working day and night, training to get her off the bottom of the Wayde Tennis Academy's ranking.  But when a photographer takes an interest in Mill, a whole new wrinkle is added into her life. Can she make time for modeling and still save herself from being expelled?"
                },
                {
                    "type": "issue_preview_text",
                    "language": "en-us",
                    "text": "Millie's new coach, Walt, has her working day and night, training to get her off the bottom of the academy's ranking.Â  But when a photographer takes an interest in Mill, a whole new wrinkle is added into her life."
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37251",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/37251/15_love_2011_2?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/15-Love-2/digital-comic/22411?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=22411&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/22411?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/13379",
                "name": "15 Love (2011)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2011-07-06T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2011-06-21T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2012-05-14T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2011-08-02T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 4.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 1.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5601c35a91d15",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5601c35a91d15",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/10/4d9f1f15f29ef",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37251/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/274",
                        "name": "Tommy Ohtsuka",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/496",
                        "name": "Andi Watson",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                        "name": "Jordan D. White",
                        "role": "editor"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37251/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37251/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82480",
                        "name": "Cover #82480",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82481",
                        "name": "Interior #82481",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37251/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 37254,
            "digitalId": 21429,
            "title": "15 Love (2011) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": "Teenage tennis action as only Marvel can deliver! Tennis is Mill Collins whole life...but as the lowest ranking student at the Wayde Tennis Academy, she's about to lose her scholarship, and any chance at reaching her dream. What will she do next?",
            "modified": "2013-03-05T19:42:21-0500",
            "isbn": "",
            "upc": "5960605470-00111",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 48,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "TEENAGE TENNIS ACTION AS ONLY MIGHTY MARVEL CAN DELIVER! Tennis is Mill Collins whole life...but as the lowest ranking student at the Wayde Tennis Academy, she's about to lose her scholarship, and any chance at reaching her dream.  Her coach has given up on her, her aunt thinks she doesn't try, and the only one who believes in her is a washed-up drunk...how wrong can things possible go before Mill catches a break?"
                },
                {
                    "type": "issue_preview_text",
                    "language": "en-us",
                    "text": "Teenage tennis action as only Marvel can deliver! Tennis is Mill Collins whole life...but as the lowest ranking student at the Wayde Tennis Academy, she's about to lose her scholarship, and any chance at reaching her dream. What will she do next?"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37254",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/37254/15_love_2011_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=21429&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/13379",
                "name": "15 Love (2011)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2011-06-08T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2011-05-24T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2015-09-21T15:31:41-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 4.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 1.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/d0/5601c374d0812",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/d0/5601c374d0812",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/00/4d7a87fed73f1",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37254/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/274",
                        "name": "Tommy Ohtsuka",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/496",
                        "name": "Andi Watson",
                        "role": "writer"
                    }
                ],
                "returned": 2
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37254/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37254/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82486",
                        "name": "15-Love (2011) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82487",
                        "name": "Interior #82487",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37254/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 37252,
            "digitalId": 0,
            "title": "15-Love GN-TPB (Graphic Novel)",
            "issueNumber": 1,
            "variantDescription": "",
            "description": "Teenage tennis action as only Mighty Marvel can deliver! Tennis is Mill Collins' whole life. But as the lowest-ranking student at the Wayde?Tennis Academy, she's about to lose her scholarship - and any chance at reaching her dream. Her coach has given up on her, her aunt thinks she doesn't try, and the only one who believes in her is a washed-up drunk. How wrong can things possibly go before Mill catches a break? Collecting 15-LOVE #1-3.",
            "modified": "2011-10-14T16:22:14-0400",
            "isbn": "978-0-7851-1334-8",
            "upc": "5960611334-00111",
            "diamondCode": "",
            "ean": "9780785 113348 51499",
            "issn": "",
            "format": "Graphic Novel",
            "pageCount": 144,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "Teenage tennis action as only Mighty Marvel can deliver! Tennis is Mill Collins' whole life. But as the lowest-ranking student at the Wayde?Tennis Academy, she's about to lose her scholarship - and any chance at reaching her dream. Her coach has given up on her, her aunt thinks she doesn't try, and the only one who believes in her is a washed-up drunk. How wrong can things possibly go before Mill catches a break? Collecting 15-LOVE #1-3."
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37252",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/collection/37252/15-love_gn-tpb_graphic_novel?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/13380",
                "name": "15-Love GN-TPB (2013 - Present)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2011-10-19T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2011-10-04T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 14.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/50/4e272be1b96af",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/50/4e272be1b96af",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37252/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37252/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37252/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82482",
                        "name": "15-Love GN-TPB (2013) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82483",
                        "name": "Interior #82483",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/37252/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 440,
            "digitalId": 3161,
            "title": "1602 (2003) #8",
            "issueNumber": 8,
            "variantDescription": "",
            "description": "",
            "modified": "2018-03-07T15:57:16-0500",
            "isbn": "",
            "upc": "5960605253-00811",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 0,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "CLIMATIC last issue! Secrets revealed! Mysteries explained! A mighty sacrifice! Worlds live! Worlds die! Heroes make choices! And so do villains..."
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/440",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/440/1602_2003_8?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1602-8/digital-comic/3161?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=3161&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/3161?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                "name": "1602 (2003 - 2004)"
            },
            "variants": [],
            "collections": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/3962",
                    "name": "Silver Surfer: Rebirth of Thanos (Trade Paperback)"
                }
            ],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2004-03-31T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "-0001-11-30T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2010-01-28T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2010-11-02T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 1.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/c0/5aa052106f9d3",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/c0/5aa052106f9d3",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/4bc6978a1e62f",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/440/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/567",
                        "name": "Neil Gaiman",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                        "name": "Andy Kubert",
                        "role": "penciller"
                    }
                ],
                "returned": 2
            },
            "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/440/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                    }
                ],
                "returned": 1
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/440/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1723",
                        "name": "Cover #1723",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1724",
                        "name": "Interior #1724",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/440/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 145,
            "digitalId": 6315,
            "title": "1602 (2003) #7",
            "issueNumber": 7,
            "variantDescription": "",
            "description": "",
            "modified": "2013-07-30T10:52:58-0400",
            "isbn": "",
            "upc": "5960605499-00111",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 0,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "Secrets are revealed and coffins are closed as two of our 17th-century Marvel heroes lose their lives in the penultimate chapter to this major, best-selling limited series event!\r\n32 PGS./MARVEL PSR...$3.50"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/145",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/145/1602_2003_7?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1602-7/digital-comic/6315?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=6315&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/6315?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                "name": "1602 (2003 - 2004)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2004-02-11T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "-0001-11-30T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2010-01-21T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2010-11-02T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.5
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 1.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/568e6b71aabd8",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/568e6b71aabd8",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/51db2241995f7",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/d0/4bc6ab93b679f",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/145/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/567",
                        "name": "Neil Gaiman",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                        "name": "Andy Kubert",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/566",
                        "name": "Scott McKowen",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/145/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009417",
                        "name": "Magneto"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                    }
                ],
                "returned": 2
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/145/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2629",
                        "name": "1602 #7",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2630",
                        "name": "1602 #7",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/145/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 146,
            "digitalId": 6314,
            "title": "1602 (2003) #6",
            "issueNumber": 6,
            "variantDescription": "",
            "description": "",
            "modified": "2018-03-07T15:58:03-0500",
            "isbn": "",
            "upc": "5960605372-01811",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 0,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "Cardstock cover by SCOTT MCKOWEN\r\nDoctor Strange goes to the moon, while our heroes take on Doom and his Vulture squadron!\r\n32 PGS./MARVEL PSR...$3.50"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/146",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/146/1602_2003_6?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1602-6/digital-comic/6314?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=6314&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/6314?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                "name": "1602 (2003 - 2004)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2004-01-14T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "-0001-11-30T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2010-01-14T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2010-11-02T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.5
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 1.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/5aa052400468e",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/5aa052400468e",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/4bc6ab8f52965",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/146/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/567",
                        "name": "Neil Gaiman",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                        "name": "Andy Kubert",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/566",
                        "name": "Scott McKowen",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/146/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009661",
                        "name": "The Watchers"
                    }
                ],
                "returned": 1
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/146/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1770",
                        "name": "Cover #1770",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1771",
                        "name": "Interior #1771",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/146/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 147,
            "digitalId": 6313,
            "title": "1602 (2003) #5",
            "issueNumber": 5,
            "variantDescription": "",
            "description": "",
            "modified": "2018-03-07T15:58:28-0500",
            "isbn": "",
            "upc": "5960605469-00211",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 0,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "Sir Nicholas Fury leads an army against Carlos Javier's Witchbreed!  And we learn the true history of the Four from the Fantastik.\r\n32 PGS./MARVEL PSR...$3.50"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/147",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/147/1602_2003_5?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1602-5/digital-comic/6313?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=6313&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/6313?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                "name": "1602 (2003 - 2004)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2003-12-10T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "-0001-11-30T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2010-01-07T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2010-11-02T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.5
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 1.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/5aa052598a31d",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/5aa052598a31d",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4bc6ab8a4de85",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/147/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/567",
                        "name": "Neil Gaiman",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                        "name": "Andy Kubert",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/566",
                        "name": "Scott McKowen",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/147/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011054",
                        "name": "Spider-Man (1602)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                    }
                ],
                "returned": 2
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/147/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2264",
                        "name": "Cover #2264",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2265",
                        "name": "Interior #2265",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/147/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 148,
            "digitalId": 6312,
            "title": "1602 (2003) #4",
            "issueNumber": 4,
            "variantDescription": "",
            "description": "",
            "modified": "2018-03-07T15:59:04-0500",
            "isbn": "",
            "upc": "5960605109-03911",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 0,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "With the country in turmoil, Dr. Strange learns Virginia Dare's dark secret, Peter Parquargh is captured by the X-Men, and Fury is placed in an impossible position! 32 PGS./MARVEL PSR...$3.50"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/148",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/148/1602_2003_4?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1602-4/digital-comic/6312?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=6312&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/6312?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                "name": "1602 (2003 - 2004)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2003-11-12T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "-0001-11-30T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2009-12-01T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2010-11-02T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.5
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 1.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/5aa05273b5cd7",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/5aa05273b5cd7",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/f0/4bc6ab851219b",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/148/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/567",
                        "name": "Neil Gaiman",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                        "name": "Andy Kubert",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/566",
                        "name": "Scott McKowen",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/148/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009281",
                        "name": "Doctor Doom"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009463",
                        "name": "Matthew Murdock"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009547",
                        "name": "Natasha Romanoff"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011054",
                        "name": "Spider-Man (1602)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                        "name": "X-Men"
                    }
                ],
                "returned": 6
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/148/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1600",
                        "name": "Cover #1600",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1601",
                        "name": "Interior #1601",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/148/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 377,
            "digitalId": 6311,
            "title": "1602 (2003) #3",
            "issueNumber": 3,
            "variantDescription": "",
            "description": "",
            "modified": "2018-03-07T15:53:35-0500",
            "isbn": "",
            "upc": "5960605109-04311",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 0,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "Matthew Murdoch continues to make his way across Europe to get the mysterious Templar treasure that Dr. Strange thinks will give him the key to the mysterious weather changes. But can he get to it before Otto Von Doom?  And what does the first American-born child, Virginia Dare, have to do with it all? 32 PGS./MARVEL PSR...$3.50"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/377",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/377/1602_2003_3?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1602-3/digital-comic/6311?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=6311&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/6311?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                "name": "1602 (2003 - 2004)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2003-10-08T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "-0001-11-30T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2009-11-17T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2010-11-02T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.5
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 1.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/5aa0512899ebe",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/5aa0512899ebe",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/a0/4bc69c799f6e4",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/377/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/567",
                        "name": "Neil Gaiman",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                        "name": "Andy Kubert",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/566",
                        "name": "Scott McKowen",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/377/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009463",
                        "name": "Matthew Murdock"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009547",
                        "name": "Natasha Romanoff"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009471",
                        "name": "Nick Fury"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011054",
                        "name": "Spider-Man (1602)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                        "name": "X-Men"
                    }
                ],
                "returned": 6
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/377/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1616",
                        "name": "Cover #1616",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1617",
                        "name": "Interior #1617",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/377/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 50114,
            "digitalId": 32179,
            "title": "1602 (2003) #2",
            "issueNumber": 2,
            "variantDescription": "",
            "description": null,
            "modified": "2015-07-22T15:31:38-0400",
            "isbn": "",
            "upc": "",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 0,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/50114",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/50114/1602_2003_2?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=32179&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                "name": "1602 (2003 - 2004)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2003-09-01T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "-0001-11-30T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2013-10-02T14:35:37-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 0
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/50/52961aabe3f5f",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/50/52961aabe3f5f",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/50114/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/50114/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009281",
                        "name": "Doctor Doom"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009463",
                        "name": "Matthew Murdock"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009547",
                        "name": "Natasha Romanoff"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009471",
                        "name": "Nick Fury"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011054",
                        "name": "Spider-Man (1602)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009661",
                        "name": "The Watchers"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                        "name": "X-Men"
                    }
                ],
                "returned": 8
            },
            "stories": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/50114/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113142",
                        "name": "Cover from 1602 #2",
                        "type": "cover"
                    }
                ],
                "returned": 1
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/50114/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 20630,
            "digitalId": 6309,
            "title": "1602 (2003) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": "",
            "modified": "2019-05-08T10:36:17-0400",
            "isbn": "",
            "upc": "",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 0,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "The start of a whole new Marvel Universe begins here! It's the Marvel Universe in the year 1602."
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/20630",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/20630/1602_2003_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1602-1/digital-comic/6309?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=6309&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/6309?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                "name": "1602 (2003 - 2004)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2003-08-13T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "-0001-11-30T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2009-08-17T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2010-11-02T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 0
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 1.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/20/5aa0527ab02c4",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/20/5aa0527ab02c4",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/03/5140e6f528791",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/4bb694c146364",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/50/4bb3d381b4649",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/20630/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 9,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/20630/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009281",
                        "name": "Doctor Doom"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009417",
                        "name": "Magneto"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009463",
                        "name": "Matthew Murdock"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009547",
                        "name": "Natasha Romanoff"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009471",
                        "name": "Nick Fury"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011054",
                        "name": "Spider-Man (1602)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009661",
                        "name": "The Watchers"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                        "name": "X-Men"
                    }
                ],
                "returned": 9
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/20630/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/44869",
                        "name": "Cover #44869",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/44870",
                        "name": "Interior #44870",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/20630/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 51201,
            "digitalId": 40141,
            "title": "1602 Witch Hunter Angela (2015) #4",
            "issueNumber": 4,
            "variantDescription": "",
            "description": "Spurred by revenge, Angela races to meet Enchantress's endgame as the gates of Faerie are wrenched open! The dead walk and speak (and tell terrible jokes), and Kieron and Kody Chamberlain lead the revels, as Angela embarks on the Wild Hunt for Serah's soul!",
            "modified": "2015-09-21T13:40:27-0400",
            "isbn": "",
            "upc": "75960608200100411",
            "diamondCode": "AUG150681",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "• Spurred by revenge, Angela races to meet Enchantress's endgame as the gates of Faerie are wrenched open!\n• The dead walk and speak (and tell terrible jokes), and Kieron and Kody Chamberlain lead the revels, as Angela embarks on the Wild Hunt for Serah's soul!"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/51201",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/51201/1602_witch_hunter_angela_2015_4?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1602-Witch-Hunter-Angela-4/digital-comic/40141?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=40141&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/40141?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                "name": "1602 Witch Hunter Angela (2015)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-10-07T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-09-23T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2016-04-04T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2015-10-07T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/03/5601855c253f1",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/03/5601855c253f1",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51201/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                        "name": "Kieron Gillen",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51201/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017574",
                        "name": "Angela (Aldrif Odinsdottir)"
                    }
                ],
                "returned": 1
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51201/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113979",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #4",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113980",
                        "name": "story from 1602 Witch Hunter Angela (2015) #4",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51201/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 51200,
            "digitalId": 39890,
            "title": "1602 Witch Hunter Angela (2015) #3",
            "issueNumber": 3,
            "variantDescription": "",
            "description": "\"IN WHICH WICKED SOMETHINGS THIS WAY COME.\" The hunt is on! The Faustians have made their deal with the Devil -- er, Enchantress -- but Angela isn't going to take that lying down, is she? No, not by her psychic ribbons and very, very pointy weapons, no, she is not. Out into the wilds of the countryside, Angela and Sera collide with a wandering caravan of ne'er-do-well performers. (Hint: their name starts with a \"G\" and ends with an \"Y\" and has an \"Uardians of the Galax\" in the middle.) Pagan rites, dubious ethics, a deadly curse, and Kieron and Irene Koh being up to no good... who can resist the lure of the Faustians?",
            "modified": "2015-09-01T12:07:56-0400",
            "isbn": "",
            "upc": "75960608200100311",
            "diamondCode": "JUN150754",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "\"IN WHICH HEARTS REND AND HEADS ROLL\" Enchantress's prophecy strangles Angela and Sera from all sides when they are forced to ride hell (and a few other realms, too) for leather to the distant coast. In a haunted castle, a tormented witchbreed girl named Anna Maria - a.k.a. the 1602 Rogue - makes a deadly deal - with a shocking price! Kieron and Frazer Irving bring to life the first tale Angela tells that is her very own - as the forces of Faerie close in!"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/51200",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/51200/1602_witch_hunter_angela_2015_3?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1602-Witch-Hunter-Angela-3/digital-comic/39890?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=39890&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/39890?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                "name": "1602 Witch Hunter Angela (2015)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/56248",
                    "name": "1602 Witch Hunter Angela (2015) #3 (Irving Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-09-09T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-08-26T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2016-03-07T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2015-09-02T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/40/55e4919600061",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/40/55e4919600061",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/0/03/5581ba4431724",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51200/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                        "name": "Kieron Gillen",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1063",
                        "name": "Frazer Irving",
                        "role": "artist"
                    }
                ],
                "returned": 4
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51200/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51200/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113977",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #3",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113978",
                        "name": "story from 1602 Witch Hunter Angela (2015) #3",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51200/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 56248,
            "digitalId": 0,
            "title": "1602 Witch Hunter Angela (2015) #3 (Irving Variant)",
            "issueNumber": 3,
            "variantDescription": "Irving Variant",
            "description": "\"IN WHICH HEARTS REND AND HEADS ROLL\"\n- Enchantress's prophecy strangles Angela and Sera from all sides when\nthey are forced to ride hell (and a few other realms, too) for leather to\nthe distant coast.\n- In a haunted castle, a tormented witchbreed girl named Anna Maria -\na.k.a. the 1602 Rogue - makes a deadly deal - with a shocking price!\n- Kieron and Frazer Irving bring to life the first tale Angela tells that\nis her very own - as the forces of Faerie close in!",
            "modified": "2015-09-01T12:13:26-0400",
            "isbn": "",
            "upc": "75960608200100321",
            "diamondCode": "JUN150755",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "\"IN WHICH HEARTS REND AND HEADS ROLL\"\n- Enchantress's prophecy strangles Angela and Sera from all sides when\nthey are forced to ride hell (and a few other realms, too) for leather to\nthe distant coast.\n- In a haunted castle, a tormented witchbreed girl named Anna Maria -\na.k.a. the 1602 Rogue - makes a deadly deal - with a shocking price!\n- Kieron and Frazer Irving bring to life the first tale Angela tells that\nis her very own - as the forces of Faerie close in!"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/56248",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/56248/1602_witch_hunter_angela_2015_3_irving_variant/irving_variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                "name": "1602 Witch Hunter Angela (2015)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/51200",
                    "name": "1602 Witch Hunter Angela (2015) #3"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-09-09T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-08-26T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/20/55e492ddefd84",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/20/55e492ddefd84",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/56248/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                        "name": "Kieron Gillen",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "artist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1063",
                        "name": "Frazer Irving",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 4
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/56248/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/56248/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/123459",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #3 (IRVING VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/123460",
                        "name": "story from 1602 Witch Hunter Angela (2015) #3 (IRVING VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/56248/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 51199,
            "digitalId": 39450,
            "title": "1602 Witch Hunter Angela (2015) #2",
            "issueNumber": 2,
            "variantDescription": "",
            "description": "\"IN WHICH WICKED SOMETHINGS THIS WAY COME.\" The hunt is on! The Faustians have made their deal with the Devil -- er, Enchantress -- but Angela isn't going to take that lying down, is she? No, not by her psychic ribbons and very, very pointy weapons, no, she is not. Out into the wilds of the countryside, Angela and Sera collide with a wandering caravan of ne'er-do-well performers. (Hint: their name starts with a \"G\" and ends with an \"Y\" and has an \"Uardians of the Galax\" in the middle.) Pagan rites, dubious ethics, a deadly curse, and Kieron and Irene Koh being up to no good... who can resist the lure of the Faustians?",
            "modified": "2015-07-21T12:43:37-0400",
            "isbn": "",
            "upc": "75960608200100211",
            "diamondCode": "MAY150712",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "\"IN WHICH WICKED SOMETHINGS THIS WAY COME\"\nThe hunt is on! The Faustians have made their deal with the Devil -- er, Enchantress -- but Angela isn't going to take that lying down, is she? No, not by her psychic ribbons and very, very pointy weapons, no, she is not. Out into the wilds of the countryside, Angela and Sera collide with a wandering caravan of ne'er-do-well performers. (Hint: their name starts with a \"G\" and ends with an \"Y\" and has an \"Uardians of the Galax\" in the middle.) Pagan rites, dubious ethics, a deadly curse, and Kieron and Irene Koh being up to no good - who can resist the lure of the Faustians?"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/51199",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/51199/1602_witch_hunter_angela_2015_2?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1602-Witch-Hunter-Angela-2/digital-comic/39450?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=39450&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/39450?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                "name": "1602 Witch Hunter Angela (2015)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/55191",
                    "name": "1602 Witch Hunter Angela (2015) #2 (Koh Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-07-29T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-07-15T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2016-01-25T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2015-07-29T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/55ae75b04c51a",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/55ae75b04c51a",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/03/5575bc9103627",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51199/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 2
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51199/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51199/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113975",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #2",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113976",
                        "name": "story from 1602 Witch Hunter Angela (2015) #2",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51199/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 55191,
            "digitalId": 0,
            "title": "1602 Witch Hunter Angela (2015) #2 (Koh Variant)",
            "issueNumber": 2,
            "variantDescription": "Koh Variant",
            "description": "\"IN WHICH WICKED SOMETHINGS THIS WAY COME\"\n- The hunt is on! The Faustians have made their deal with the Devil -- er, Enchantress -- but Angela isn't going to take that lying down, is she? No, not by her psychic ribbons and very, very pointy weapons, no, she is not.\n- Out into the wilds of the countryside, Angela and Sera collide with a wandering caravan of ne'er-do-well performers. (Hint: their name starts with a \"G\" and ends with an \"Y\" and has an \"Uardians of the Galax\" in the middle.)\n- Pagan rites, dubious ethics, a deadly curse, and Kieron and Irene Koh being up to no good - who can resist the lure of the Faustians?",
            "modified": "2015-07-21T12:50:57-0400",
            "isbn": "",
            "upc": "75960608200100221",
            "diamondCode": "MAY150713",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "\"IN WHICH WICKED SOMETHINGS THIS WAY COME\"\n- The hunt is on! The Faustians have made their deal with the Devil -- er, Enchantress -- but Angela isn't going to take that lying down, is she? No, not by her psychic ribbons and very, very pointy weapons, no, she is not.\n- Out into the wilds of the countryside, Angela and Sera collide with a wandering caravan of ne'er-do-well performers. (Hint: their name starts with a \"G\" and ends with an \"Y\" and has an \"Uardians of the Galax\" in the middle.)\n- Pagan rites, dubious ethics, a deadly curse, and Kieron and Irene Koh being up to no good - who can resist the lure of the Faustians?"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55191",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/55191/1602_witch_hunter_angela_2015_2_koh_variant/koh_variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                "name": "1602 Witch Hunter Angela (2015)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/51199",
                    "name": "1602 Witch Hunter Angela (2015) #2"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-07-29T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-07-15T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/55ae776a0cb39",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/55ae776a0cb39",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/55191/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "artist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12756",
                        "name": "Irene Koh",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/55191/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/55191/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/121474",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #2 (TBD ARTIST VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/121475",
                        "name": "story from 1602 Witch Hunter Angela (2015) #2 (TBD ARTIST VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/55191/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 51198,
            "digitalId": 38881,
            "title": "1602 Witch Hunter Angela (2015) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": "In the altered realms of BATTLEWORLD, Angela and Sera are WITCH HUNTERS, the scourges of King James' England, 1602. In a land beset by magic and monstrosity, they seek a new and seductive evil...not witchbreed, but deal-making FAUSTIANS, who bargain with ancient creatures for unnatural power! Moral ambiguity? Fancy allusions? Marguerite making the most of that English degree? ...try 1602 WITCH HUNTER ANGELA #1!",
            "modified": "2015-06-02T10:57:14-0400",
            "isbn": "",
            "upc": "75960608200100111",
            "diamondCode": "APR150747",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "In the altered realms of BATTLEWORLD, Angela and Sera are WITCH HUNTERS, the scourges of King James' England, 1602. In a land beset by magic and monstrosity, they seek a new and seductive evil-not witchbreed, but deal-making FAUSTIANS, who bargain with ancient creatures for unnatural power! Moral ambiguity? Fancy allusions? Marguerite making the most of that English degree? tl;dr - try 1602 WITCH HUNTER ANGELA #1!"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/51198",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/51198/1602_witch_hunter_angela_2015_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1602-Witch-Hunter-Angela-1/digital-comic/38881?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=38881&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/38881?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                "name": "1602 Witch Hunter Angela (2015)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/55028",
                    "name": "1602 Witch Hunter Angela (2015) #1 (Christopher Gwengela Variant)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/54728",
                    "name": "1602 Witch Hunter Angela (2015) #1 (Isanove Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-06-10T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-05-27T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2015-12-14T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2015-06-10T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/55099c53608a6",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/50/555f3a9853594",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/555f3a6cab779",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/555f3a13f358e",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/10/555f39e53a5f6",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/60/555f39916d178",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/55099c53608a6",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51198/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 2
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51198/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51198/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113973",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113974",
                        "name": "story from 1602 Witch Hunter Angela (2015) #1",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/51198/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 55028,
            "digitalId": 0,
            "title": "1602 Witch Hunter Angela (2015) #1 (Christopher Gwengela Variant)",
            "issueNumber": 1,
            "variantDescription": "Christopher Gwengela Variant",
            "description": "- In the altered realms of BATTLEWORLD, Angela and Sera are WITCH HUNTERS, the scourges of King James' England, 1602. - In a land beset by magic and monstrosity, they seek a new and seductive evil-not witchbreed, but deal-making FAUSTIANS, who bargain with ancient creatures for unnatural power! - Moral ambiguity? Fancy allusions? Marguerite making the most of that English degree? - tl;dr - try 1602 WITCH HUNTER ANGELA #1",
            "modified": "2015-06-02T11:16:47-0400",
            "isbn": "",
            "upc": "75960608200100131",
            "diamondCode": "APR150749",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "- In the altered realms of BATTLEWORLD, Angela and Sera are WITCH HUNTERS, the scourges of King James' England, 1602. - In a land beset by magic and monstrosity, they seek a new and seductive evil-not witchbreed, but deal-making FAUSTIANS, who bargain with ancient creatures for unnatural power! - Moral ambiguity? Fancy allusions? Marguerite making the most of that English degree? - tl;dr - try 1602 WITCH HUNTER ANGELA #1"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55028",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/55028/1602_witch_hunter_angela_2015_1_christopher_gwengela_variant/christopher_gwengela_variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                "name": "1602 Witch Hunter Angela (2015)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/54728",
                    "name": "1602 Witch Hunter Angela (2015) #1 (Isanove Variant)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/51198",
                    "name": "1602 Witch Hunter Angela (2015) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-06-10T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-05-27T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/556dc73e378a0",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/556dc73e378a0",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/10/555f38fd062f8",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/55028/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10405",
                        "name": "John Tyler Christopher",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "artist"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/55028/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/55028/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/121219",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #1 (TBD ARTIST MISTRESS OF GWENG FU VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/121220",
                        "name": "story from 1602 Witch Hunter Angela (2015) #1 (TBD ARTIST MISTRESS OF GWENG FU VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/55028/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 54728,
            "digitalId": 0,
            "title": "1602 Witch Hunter Angela (2015) #1 (Isanove Variant)",
            "issueNumber": 1,
            "variantDescription": "Isanove Variant",
            "description": "",
            "modified": "2015-06-02T11:07:41-0400",
            "isbn": "",
            "upc": "75960608200100121",
            "diamondCode": "APR150748",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "- In the altered realms of BATTLEWORLD, Angela and Sera are WITCH HUNTERS, the scourges of King James' England, 1602. - In a land beset by magic and monstrosity, they seek a new and seductive evil-not witchbreed, but deal-making FAUSTIANS, who bargain with ancient creatures for unnatural power! - Moral ambiguity? Fancy allusions? Marguerite making the most of that English degree? - tl;dr - try 1602 WITCH HUNTER ANGELA #1!"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/54728",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/54728/1602_witch_hunter_angela_2015_1_isanove_variant/isanove_variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                "name": "1602 Witch Hunter Angela (2015)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/55028",
                    "name": "1602 Witch Hunter Angela (2015) #1 (Christopher Gwengela Variant)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/51198",
                    "name": "1602 Witch Hunter Angela (2015) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-06-10T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-05-27T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/60/55099cf7b4111",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/60/55099cf7b4111",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/54728/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "artist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13055",
                        "name": "Richard Isanove",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/54728/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/54728/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/120677",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #1 (TBD ARTIST VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/120678",
                        "name": "story from 1602 Witch Hunter Angela (2015) #1 (TBD ARTIST VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/54728/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 52076,
            "digitalId": 40267,
            "title": "1872 (2015) #4",
            "issueNumber": 4,
            "variantDescription": "",
            "description": "IT'S HIGH NOON IN TIMELY! Will justice stand tall, or die in the street? Timid Dr. Banner comes out of his shell. Red Wolf's fate is finally revealed...",
            "modified": "2015-10-13T14:30:42-0400",
            "isbn": "",
            "upc": "75960608222300411",
            "diamondCode": "AUG150669",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "IT'S HIGH NOON IN TIMELY! Will justice stand tall, or die in the street? Timid Dr. Banner comes out of his shell. Red Wolf's fate is finally revealed..."
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/52076",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/52076/1872_2015_4?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1872-4/digital-comic/40267?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=40267&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/40267?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19501",
                "name": "1872 (2015)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-10-21T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-10-07T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2016-04-18T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2015-10-21T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/04/561d4c9f8edfd",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/04/561d4c9f8edfd",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/04/55f6fbeeec959",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52076/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                        "name": "Gerry Duggan",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/820",
                        "name": "Leonard Kirk",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12483",
                        "name": "Nik Virella",
                        "role": "artist"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52076/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52076/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115729",
                        "name": "cover from Marvel 1862 (2015) #4",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115730",
                        "name": "story from Marvel 1862 (2015) #4",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52076/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 52075,
            "digitalId": 39924,
            "title": "1872 (2015) #3",
            "issueNumber": 3,
            "variantDescription": "",
            "description": "Fisk and his men are triumphant-but have they let their guard down? Just what concoction is timid Dr. Banner cooking up in his apothecary? You cannot miss the shocking last page as a hero is reborn.",
            "modified": "2015-09-14T15:19:54-0400",
            "isbn": "",
            "upc": "75960608222300311",
            "diamondCode": "JUN150785",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "Fisk and his men are triumphant-but have they let their guard down? Just what concoction is timid Dr. Banner cooking up in his apothecary? You cannot miss the shocking last page as a hero is reborn."
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/52075",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/52075/1872_2015_3?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1872-3/digital-comic/39924?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=39924&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19501",
                "name": "1872 (2015)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/56249",
                    "name": "1872 (2015) #3 (Francavilla Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-09-23T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-09-09T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2016-03-21T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2015-09-23T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/55f6e3aa15402",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/55f6e3aa15402",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/557b260312ac4",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52075/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                        "name": "Gerry Duggan",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/820",
                        "name": "Leonard Kirk",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12483",
                        "name": "Nik Virella",
                        "role": "artist"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52075/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52075/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115727",
                        "name": "cover from Marvel 1862 (2015) #3",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115728",
                        "name": "story from Marvel 1862 (2015) #3",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52075/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 56249,
            "digitalId": 0,
            "title": "1872 (2015) #3 (Francavilla Variant)",
            "issueNumber": 3,
            "variantDescription": "Francavilla Variant",
            "description": "",
            "modified": "2015-09-14T11:27:21-0400",
            "isbn": "",
            "upc": "75960608222300321",
            "diamondCode": "JUN150786",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "• Fisk and his men are triumphant-but have they let their guard down?\n• Just what concoction is timid Dr. Banner cooking up in his apothecary?  \n• You cannot miss the shocking last page as a hero is reborn."
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/56249",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/56249/1872_2015_3_francavilla_variant/francavilla_variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19501",
                "name": "1872 (2015)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/52075",
                    "name": "1872 (2015) #3"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-09-23T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-09-09T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/55f6e6644a01f",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/55f6e6644a01f",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/56249/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                        "name": "Gerry Duggan",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11886",
                        "name": "Francesco Francavilla",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12483",
                        "name": "Nik Virella",
                        "role": "artist"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/56249/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/56249/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/123461",
                        "name": "cover from 1872 (2015) #3 (TBD ARTIST VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/123462",
                        "name": "story from 1872 (2015) #3 (TBD ARTIST VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/56249/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 52074,
            "digitalId": 39724,
            "title": "1872 (2015) #2",
            "issueNumber": 2,
            "variantDescription": "",
            "description": "Dead Man's Hand! Bullseye! Elektra! Grizzly! Doc Ock! 'Nuff said, partner!",
            "modified": "2015-08-19T08:41:13-0400",
            "isbn": "",
            "upc": "75960608222300211",
            "diamondCode": "MAY150726",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "DEAD MAN'S HAND! BULLSEYE! ELEKTRA! GRIZZLY! DOC OCK! 'NUFF SAID, PARTNER!"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/52074",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/52074/1872_2015_2?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1872-2/digital-comic/39724?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=39724&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/39724?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19501",
                "name": "1872 (2015)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-08-19T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-07-27T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2016-02-15T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2015-08-19T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/55ce513920dc1",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/55ce513920dc1",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/55b7a04d2641e",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52074/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                        "name": "Gerry Duggan",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/820",
                        "name": "Leonard Kirk",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/593",
                        "name": "Lee Loughridge",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11921",
                        "name": "Jacob Thomas",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12483",
                        "name": "Nik Virella",
                        "role": "inker"
                    }
                ],
                "returned": 7
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52074/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52074/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115725",
                        "name": "cover from Marvel 1862 (2015) #2",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115726",
                        "name": "story from Marvel 1862 (2015) #2",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52074/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 52072,
            "digitalId": 39211,
            "title": "1872 (2015) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": "REAL HEROES DIE WITH THEIR BOOTS ON. SHERIFF STEVE ROGERS faces corruption and fear in the boom town of TIMELY. The only thing ANTHONY STARK seems capable of is pulling a cork, so can he pull Rogers' fat from the fire? But...a stranger comes to town that will change Timely forever...for anyone left standing, that is.",
            "modified": "2015-09-02T08:30:13-0400",
            "isbn": "",
            "upc": "75960608222300111",
            "diamondCode": "APR150784",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "SHERIFF STEVE ROGERS faces corruption and fear in the boom town of TIMELY. The only thing ANTHONY STARK seems capable of is pulling a cork, so can he pull Rogers' fat from the fire? But...a stranger comes to town that will change Timely forever...for anyone left standing, that is."
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/52072",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/52072/1872_2015_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/1872-1/digital-comic/39211?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=39211&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/39211?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19501",
                "name": "1872 (2015)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/52073",
                    "name": "1872 (2015) #1 (Young Variant)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/55058",
                    "name": "1872 (2015) #1 (Shaner Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-07-08T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-06-24T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2016-01-04T00:00:00-0500"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2015-08-12T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/a0/559427a3bfded",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/a0/559427a3bfded",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/03/5552537364db2",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/60/55525356e7a0d",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/80/55525334abb1a",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/b0/555252e210a45",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/60/555252a5d908b",
                    "extension": "jpg"
                },
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/e0/55145ac4316d3",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52072/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                        "name": "Gerry Duggan",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/25",
                        "name": "Alex Maleev",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12483",
                        "name": "Nik Virella",
                        "role": "penciller"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52072/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52072/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115721",
                        "name": "cover from Marvel 1862 (2015) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115722",
                        "name": "story from Marvel 1862 (2015) #1",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52072/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 52073,
            "digitalId": 0,
            "title": "1872 (2015) #1 (Young Variant)",
            "issueNumber": 1,
            "variantDescription": "Young Variant",
            "description": "",
            "modified": "2015-07-01T13:57:06-0400",
            "isbn": "",
            "upc": "75960608222300121",
            "diamondCode": "APR150786",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "REAL HEROES DIE WITH THEIR BOOTS ON - SHERIFF STEVE ROGERS faces corruption and fear in the boom town of TIMELY. - The only thing ANTHONY STARK seems capable of is pulling a cork, so can he pull Rogers' fat from the fire? - But...a stranger comes to town that will change Timely forever...for anyone left standing, that is."
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/52073",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/52073/1872_2015_1_young_variant/young_variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19501",
                "name": "1872 (2015)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/52072",
                    "name": "1872 (2015) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/55058",
                    "name": "1872 (2015) #1 (Shaner Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-07-08T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-06-24T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/559429613db46",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/559429613db46",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52073/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                        "name": "Gerry Duggan",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12708",
                        "name": "Evan Doc Shaner",
                        "role": "artist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7190",
                        "name": "Skottie Young",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 3
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52073/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52073/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115723",
                        "name": "cover from Marvel 1862 (2015) #1 (YOUNG VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115724",
                        "name": "story from Marvel 1862 (2015) #1 (YOUNG VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/52073/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 55058,
            "digitalId": 0,
            "title": "1872 (2015) #1 (Shaner Variant)",
            "issueNumber": 1,
            "variantDescription": "Shaner Variant",
            "description": "",
            "modified": "2015-07-01T14:05:15-0400",
            "isbn": "",
            "upc": "75960608222300131",
            "diamondCode": "APR150785",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
                {
                    "type": "issue_solicit_text",
                    "language": "en-us",
                    "text": "REAL HEROES DIE WITH THEIR BOOTS ON - SHERIFF STEVE ROGERS faces corruption and fear in the boom town of TIMELY. - The only thing ANTHONY STARK seems capable of is pulling a cork, so can he pull Rogers' fat from the fire? - But...a stranger comes to town that will change Timely forever...for anyone left standing, that is."
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55058",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/55058/1872_2015_1_shaner_variant/shaner_variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/19501",
                "name": "1872 (2015)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/52072",
                    "name": "1872 (2015) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/52073",
                    "name": "1872 (2015) #1 (Young Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2015-07-08T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2015-06-24T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/03/55942a573c552",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/03/55942a573c552",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/55058/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                        "name": "Gerry Duggan",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12708",
                        "name": "Evan Doc Shaner",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 2
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/55058/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/55058/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/121278",
                        "name": "cover from Marvel 1862 (2015) #1 (SHANER VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/121279",
                        "name": "story from Marvel 1862 (2015) #1 (SHANER VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/55058/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 24321,
            "digitalId": 0,
            "title": "1939 Daily Bugle (2009) #6",
            "issueNumber": 6,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960606814-00611",
            "diamondCode": "MAR098023",
            "ean": "",
            "issn": "",
            "format": "Newspaper",
            "pageCount": 8,
            "textObjects": [
                {
                    "type": "70th_winner_desc",
                    "language": "en-us",
                    "text": "Extra! Extra! Read all about it! This special edition of the DAILY BUGLE has the scoop on a new decade of secrets and surprises! As we stand on the cusp of the 1940s, who knows what glorious marvels await? What technological, cultural and spiritual breakthroughs will reach the people of this great land? The journalists of the DAILY BUGLE will introduce you to some of the movers and shakers who are making things happen in the fields of science, art, fashion, sports and national defense! If you want to know the people, places and things that will shape your future, the DAILY BUGLE is here for you with our consummate standards of editorial excellence! This\r\ncommemorative issue of the BUGLE will be a keepsake to cherish for decades to come! And best of all, this special edition is FREE!\r\nRated T  ...FREE"
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24321",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/24321/1939_daily_bugle_2009_6?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7520",
                "name": "1939 Daily Bugle (2009 - Present)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2009-06-17T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2009-05-28T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 0
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/d0/4bb4eafadecaf",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/d0/4bb4eafadecaf",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 9,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24321/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10024",
                        "name": "Chance Fiveash",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8123",
                        "name": "Bob Greenberger",
                        "role": "other"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9718",
                        "name": "Jess Harold",
                        "role": "other"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7935",
                        "name": "Sheila Johnson",
                        "role": "other"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8155",
                        "name": "Brian O'Dell",
                        "role": "other"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10363",
                        "name": "John Rhett Thomas",
                        "role": "other"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8402",
                        "name": "Dugan Trodglen",
                        "role": "other"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7553",
                        "name": "JEPH YORK",
                        "role": "other"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/243",
                        "name": "Mike Mayhew",
                        "role": "colorist"
                    }
                ],
                "returned": 9
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24321/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24321/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54073",
                        "name": "Cover #54073",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54074",
                        "name": "Interior #54074",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24321/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 24328,
            "digitalId": 0,
            "title": "2009 Mini-Poster 6 (2009) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960605400-15211",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Poster",
            "pageCount": 1,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24328",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/24328/2009_mini-poster_6_2009_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7521",
                "name": "2009 Mini-Poster 6 (2009 - Present)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24329",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24342",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24324",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24325",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24340",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24341",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24323",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24336",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24338",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24339",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2009-09-16T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2009-08-20T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 0
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            },
            "images": [],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24328/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24328/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24328/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54085",
                        "name": "Cover #54085",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54086",
                        "name": "Interior #54086",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24328/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 24329,
            "digitalId": 0,
            "title": "2009 Mini-Poster 6 (2009) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960605400-15221",
            "diamondCode": "JUL090632",
            "ean": "",
            "issn": "",
            "format": "Poster",
            "pageCount": 1,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24329",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/24329/2009_mini-poster_6_2009_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7521",
                "name": "2009 Mini-Poster 6 (2009 - Present)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24328",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24342",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24324",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24325",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24340",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24341",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24323",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24339",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24336",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24338",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2009-09-16T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2009-08-20T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 8.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            },
            "images": [],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24329/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24329/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24329/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54087",
                        "name": "Cover #54087",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54088",
                        "name": "Interior #54088",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24329/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 24342,
            "digitalId": 0,
            "title": "2009 Mini-Poster 6 (2009) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960605400-14911",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Poster",
            "pageCount": 1,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24342",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/24342/2009_mini-poster_6_2009_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7521",
                "name": "2009 Mini-Poster 6 (2009 - Present)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24328",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24329",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24324",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24325",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24323",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24340",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24341",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24336",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24338",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24339",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2009-08-19T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2009-07-23T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 0
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            },
            "images": [],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24342/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24342/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24342/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54113",
                        "name": "Cover #54113",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54114",
                        "name": "Interior #54114",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24342/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 24324,
            "digitalId": 0,
            "title": "2009 Mini-Poster 6 (2009) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960605400-15011",
            "diamondCode": "MAY098216",
            "ean": "",
            "issn": "",
            "format": "Poster",
            "pageCount": 1,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24324",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/24324/2009_mini-poster_6_2009_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7521",
                "name": "2009 Mini-Poster 6 (2009 - Present)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24328",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24329",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24342",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24325",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24341",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24323",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24340",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24336",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24338",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24339",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2009-08-05T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2009-07-09T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 0
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            },
            "images": [],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24324/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24324/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24324/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54077",
                        "name": "Cover #54077",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54078",
                        "name": "Interior #54078",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24324/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 24325,
            "digitalId": 0,
            "title": "2009 Mini-Poster 6 (2009) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960605400-15021",
            "diamondCode": "JUN090658",
            "ean": "",
            "issn": "",
            "format": "Poster",
            "pageCount": 1,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24325",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/24325/2009_mini-poster_6_2009_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7521",
                "name": "2009 Mini-Poster 6 (2009 - Present)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24328",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24329",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24342",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24324",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24340",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24341",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24323",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24336",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24338",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24339",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2009-08-05T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2009-07-09T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 8.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            },
            "images": [],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24325/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24325/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24325/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54079",
                        "name": "Cover #54079",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54080",
                        "name": "Interior #54080",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24325/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 24340,
            "digitalId": 0,
            "title": "2009 Mini-Poster 6 (2009) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960605400-14811",
            "diamondCode": "MAY090614",
            "ean": "",
            "issn": "",
            "format": "Poster",
            "pageCount": 1,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24340",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/24340/2009_mini-poster_6_2009_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7521",
                "name": "2009 Mini-Poster 6 (2009 - Present)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24328",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24329",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24342",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24324",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24325",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24341",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24323",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24336",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24338",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24339",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2009-07-22T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2009-06-25T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 0
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            },
            "images": [],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24340/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24340/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24340/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54109",
                        "name": "Cover #54109",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54110",
                        "name": "Interior #54110",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24340/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 24341,
            "digitalId": 0,
            "title": "2009 Mini-Poster 6 (2009) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960605400-14821",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Poster",
            "pageCount": 1,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24341",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/24341/2009_mini-poster_6_2009_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7521",
                "name": "2009 Mini-Poster 6 (2009 - Present)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24328",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24329",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24342",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24324",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24325",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24340",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24323",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24336",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24338",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24339",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2009-07-22T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2009-06-25T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 8.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            },
            "images": [],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24341/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24341/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24341/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54111",
                        "name": "Cover #54111",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54112",
                        "name": "Interior #54112",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24341/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 24323,
            "digitalId": 0,
            "title": "2009 Mini-Poster 6 (2009) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960605400-14011",
            "diamondCode": "MAY098086",
            "ean": "",
            "issn": "",
            "format": "Poster",
            "pageCount": 1,
            "textObjects": [
                {
                    "type": "70th_winner_desc",
                    "language": "en-us",
                    "text": ""
                }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24323",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/24323/2009_mini-poster_6_2009_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7521",
                "name": "2009 Mini-Poster 6 (2009 - Present)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24328",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24329",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24342",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24324",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24325",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24340",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24341",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24336",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24338",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24339",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2009-07-22T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2009-07-02T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 0
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            },
            "images": [],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24323/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24323/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24323/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54075",
                        "name": "Cover #54075",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54076",
                        "name": "Interior #54076",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24323/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 24336,
            "digitalId": 0,
            "title": "2009 Mini-Poster 6 (2009) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960605400-14611",
            "diamondCode": "APR098382",
            "ean": "",
            "issn": "",
            "format": "Poster",
            "pageCount": 1,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24336",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/24336/2009_mini-poster_6_2009_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7521",
                "name": "2009 Mini-Poster 6 (2009 - Present)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24328",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24329",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24342",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24324",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24325",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24340",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24341",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24323",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24339",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24338",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2009-07-08T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2009-06-11T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 0
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            },
            "images": [],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24336/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24336/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24336/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54101",
                        "name": "Cover #54101",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54102",
                        "name": "Interior #54102",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24336/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 24338,
            "digitalId": 0,
            "title": "2009 Mini-Poster 6 (2009) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960605400-14711",
            "diamondCode": "APR098383",
            "ean": "",
            "issn": "",
            "format": "Poster",
            "pageCount": 1,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24338",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/24338/2009_mini-poster_6_2009_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7521",
                "name": "2009 Mini-Poster 6 (2009 - Present)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24329",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24328",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24342",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24324",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24325",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24340",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24341",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24323",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24336",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24339",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2009-07-08T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2009-06-11T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 0
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            },
            "images": [],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24338/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24338/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24338/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54105",
                        "name": "Cover #54105",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54106",
                        "name": "Interior #54106",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24338/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 24339,
            "digitalId": 0,
            "title": "2009 Mini-Poster 6 (2009) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960605400-14721",
            "diamondCode": "MAY090613",
            "ean": "",
            "issn": "",
            "format": "Poster",
            "pageCount": 1,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24339",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/24339/2009_mini-poster_6_2009_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7521",
                "name": "2009 Mini-Poster 6 (2009 - Present)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24328",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24329",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24342",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24324",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24325",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24341",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24323",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24340",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24336",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/24338",
                    "name": "2009 Mini-Poster 6 (2009) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2009-07-08T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2009-06-11T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 8.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            },
            "images": [],
            "creators": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24339/creators",
                "items": [],
                "returned": 0
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24339/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24339/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54107",
                        "name": "Cover #54107",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54108",
                        "name": "Interior #54108",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/24339/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84345,
            "digitalId": 54570,
            "title": "2020 Force Works (2020) #3",
            "issueNumber": 3,
            "variantDescription": "",
            "description": null,
            "modified": "2020-09-09T11:36:46-0400",
            "isbn": "",
            "upc": "75960609844600311",
            "diamondCode": "FEB200912",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84345",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84345/2020_force_works_2020_3?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2020-Force-Works-3/digital-comic/54570?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=54570&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/54570?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29693",
                "name": "2020 Force Works (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/88409",
                    "name": "2020 Force Works (2020) #3 (Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-08-26T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2020-08-03T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-09-14T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2020-06-03T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/60/5e8b6d2d5e8f9",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/60/5e8b6d2d5e8f9",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84345/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13647",
                        "name": "Lauren Amaro",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13180",
                        "name": "Federico Blee",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12239",
                        "name": "Guru Efx",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1405",
                        "name": "Matt Milla",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12856",
                        "name": "Juanan Ramirez",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12771",
                        "name": "Matthew Rosenberg",
                        "role": "writer"
                    }
                ],
                "returned": 7
            },
            "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84345/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017834",
                        "name": "War Machine (James Rhodes)"
                    }
                ],
                "returned": 1
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84345/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186487",
                        "name": "cover from 2020 Force Works (2020) #3",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186488",
                        "name": "story from 2020 Force Works (2020) #3",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84345/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 88409,
            "digitalId": 0,
            "title": "2020 Force Works (2020) #3 (Variant)",
            "issueNumber": 3,
            "variantDescription": "Variant",
            "description": null,
            "modified": "2020-05-01T09:02:00-0400",
            "isbn": "",
            "upc": "75960609844600321",
            "diamondCode": "FEB200913",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/88409",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/88409/2020_force_works_2020_3_variant/variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29693",
                "name": "2020 Force Works (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84345",
                    "name": "2020 Force Works (2020) #3"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-08-26T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2020-08-03T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/50/5f3d4c9f1e697",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/50/5f3d4c9f1e697",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/88409/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13647",
                        "name": "Lauren Amaro",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13180",
                        "name": "Federico Blee",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12239",
                        "name": "Guru Efx",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13632",
                        "name": "Ryan Brown",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12856",
                        "name": "Juanan Ramirez",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12771",
                        "name": "Matthew Rosenberg",
                        "role": "writer"
                    }
                ],
                "returned": 7
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/88409/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/88409/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/196813",
                        "name": "cover from 2020 Force Works (2020) #3 (VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/196814",
                        "name": "story from 2020 Force Works (2020) #3 (VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/88409/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84972,
            "digitalId": 0,
            "title": "2020 Force Works (2020) #2 (Variant)",
            "issueNumber": 2,
            "variantDescription": "Variant",
            "description": null,
            "modified": "2020-03-19T11:06:36-0400",
            "isbn": "",
            "upc": "75960609844600221",
            "diamondCode": "JAN200890",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84972",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84972/2020_force_works_2020_2_variant/variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29693",
                "name": "2020 Force Works (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84344",
                    "name": "2020 Force Works (2020) #2"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-03-25T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2020-03-02T00:00:00-0500"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/20/5e6fadddca50e",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/20/5e6fadddca50e",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84972/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13180",
                        "name": "Federico Blee",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12856",
                        "name": "Juanan Ramirez",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10120",
                        "name": "Roberto DI Salvo",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12771",
                        "name": "Matthew Rosenberg",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12991",
                        "name": "Rachelle Rosenberg",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13793",
                        "name": "Thomas Tenney",
                        "role": "inker (cover)"
                    }
                ],
                "returned": 8
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84972/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84972/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/188579",
                        "name": "cover from 2020 Force Works (2020) #2",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/188580",
                        "name": "story from 2020 Force Works (2020) #2",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84972/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84344,
            "digitalId": 54229,
            "title": "2020 Force Works (2020) #2",
            "issueNumber": 2,
            "variantDescription": "",
            "description": null,
            "modified": "2020-09-09T11:36:35-0400",
            "isbn": "",
            "upc": "75960609844600211",
            "diamondCode": "JAN200889",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84344",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84344/2020_force_works_2020_2?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2020-Force-Works-2/digital-comic/54229?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=54229&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/54229?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29693",
                "name": "2020 Force Works (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84972",
                    "name": "2020 Force Works (2020) #2 (Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-03-25T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2020-03-02T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-09-14T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2020-03-25T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/10/5e62ac7e98df3",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/10/5e62ac7e98df3",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84344/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13180",
                        "name": "Federico Blee",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1405",
                        "name": "Matt Milla",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12856",
                        "name": "Juanan Ramirez",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12771",
                        "name": "Matthew Rosenberg",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10120",
                        "name": "Roberto DI Salvo",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 7
            },
            "characters": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84344/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011220",
                        "name": "Mockingbird"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1014528",
                        "name": "Quake (Daisy Johnson)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009682",
                        "name": "U.S. Agent"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017834",
                        "name": "War Machine (James Rhodes)"
                    }
                ],
                "returned": 4
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84344/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186485",
                        "name": "cover from 2020 Force Works (2020) #2",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186486",
                        "name": "story from 2020 Force Works (2020) #2",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84344/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84343,
            "digitalId": 53922,
            "title": "2020 Force Works (2020) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "2020-09-09T16:52:47-0400",
            "isbn": "",
            "upc": "75960609844600111",
            "diamondCode": "DEC190829",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84343",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84343/2020_force_works_2020_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2020-Force-Works-1/digital-comic/53922?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=53922&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/53922?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29693",
                "name": "2020 Force Works (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84669",
                    "name": "2020 Force Works (2020) #1 (Variant)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84670",
                    "name": "2020 Force Works (2020) #1 (Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-02-26T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "2020-02-03T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-08-31T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2020-02-26T00:00:00-0500"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5e4c36620e12d",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5e4c36620e12d",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84343/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13180",
                        "name": "Federico Blee",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10355",
                        "name": "Carlos Gomez",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12856",
                        "name": "Juanan Ramirez",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12771",
                        "name": "Matthew Rosenberg",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/442",
                        "name": "Dean White",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 7
            },
            "characters": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84343/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011220",
                        "name": "Mockingbird"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1014528",
                        "name": "Quake (Daisy Johnson)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009682",
                        "name": "U.S. Agent"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017834",
                        "name": "War Machine (James Rhodes)"
                    }
                ],
                "returned": 4
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84343/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186483",
                        "name": "cover from 2020 Force Works (2020) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186484",
                        "name": "story from 2020 Force Works (2020) #1",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84343/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84669,
            "digitalId": 0,
            "title": "2020 Force Works (2020) #1 (Variant)",
            "issueNumber": 1,
            "variantDescription": "Variant",
            "description": null,
            "modified": "2020-02-20T15:05:39-0500",
            "isbn": "",
            "upc": "75960609844600121",
            "diamondCode": "DEC190831",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84669",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84669/2020_force_works_2020_1_variant/variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29693",
                "name": "2020 Force Works (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84343",
                    "name": "2020 Force Works (2020) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84670",
                    "name": "2020 Force Works (2020) #1 (Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-02-26T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "2020-02-03T00:00:00-0500"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/5e4c33a992cc2",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/5e4c33a992cc2",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84669/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13180",
                        "name": "Federico Blee",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13021",
                        "name": "David Curiel",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13042",
                        "name": "Mike Mckone",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12856",
                        "name": "Juanan Ramirez",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12771",
                        "name": "Matthew Rosenberg",
                        "role": "writer"
                    }
                ],
                "returned": 7
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84669/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84669/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/187973",
                        "name": "cover from 2020 Force Works (2020) #1 (VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/187974",
                        "name": "story from 2020 Force Works (2020) #1 (VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84669/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84670,
            "digitalId": 0,
            "title": "2020 Force Works (2020) #1 (Variant)",
            "issueNumber": 1,
            "variantDescription": "Variant",
            "description": null,
            "modified": "2020-02-20T15:05:40-0500",
            "isbn": "",
            "upc": "75960609844600131",
            "diamondCode": "DEC190830",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84670",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84670/2020_force_works_2020_1_variant/variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29693",
                "name": "2020 Force Works (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84343",
                    "name": "2020 Force Works (2020) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84669",
                    "name": "2020 Force Works (2020) #1 (Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-02-26T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "2020-02-03T00:00:00-0500"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/10/5e4c33a0287eb",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/10/5e4c33a0287eb",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84670/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13180",
                        "name": "Federico Blee",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/554",
                        "name": "Ben Oliver",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12856",
                        "name": "Juanan Ramirez",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8706",
                        "name": "Jay David Ramos",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12771",
                        "name": "Matthew Rosenberg",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/489",
                        "name": "Philip Tan",
                        "role": "inker (cover)"
                    }
                ],
                "returned": 8
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84670/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84670/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/187975",
                        "name": "cover from 2020 Force Works (2020) #1 (VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/187976",
                        "name": "story from 2020 Force Works (2020) #1 (VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84670/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84341,
            "digitalId": 54230,
            "title": "2020 Iron Age (2020) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": "The Robot Revolution rages on! But as the fighting escalates and convictions are put to the test - is everyone committed to their cause or is there more going on than meets the eye? Don’t miss out on this collection of epic adventures from both sides of the conflict featuring Machine Man, Doctor Shapiro and Alkhema. From industry legend Tom DeFalco & Nick Roche, Christopher Cantwell & Matt Horak, Fonda Lee & Damian Couceiro!",
            "modified": "2020-09-09T14:13:27-0400",
            "isbn": "",
            "upc": "75960609849100111",
            "diamondCode": "JAN200893",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 40,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84341",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84341/2020_iron_age_2020_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2020-IRON-AGE-1-1/digital-comic/54230?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=54230&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/54230?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29692",
                "name": "2020 Iron Age (2020)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-03-18T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2020-02-24T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-09-14T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2020-03-18T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 4.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 4.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/80/5e67b468d9d9b",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/80/5e67b468d9d9b",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 13,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84341/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13861",
                        "name": "Christopher Cantwell",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                        "name": "Tom Defalco",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13919",
                        "name": "Fonda Lee",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13280",
                        "name": "Damian Couceiro",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12966",
                        "name": "Matt Horak",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13021",
                        "name": "David Curiel",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13518",
                        "name": "Triona Farrell",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8706",
                        "name": "Jay David Ramos",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13103",
                        "name": "Felipe Sobreiro",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13128",
                        "name": "Nick Roche",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13061",
                        "name": "Cory Smith",
                        "role": "penciler (cover)"
                    }
                ],
                "returned": 13
            },
            "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84341/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010805",
                        "name": "Machine Man"
                    }
                ],
                "returned": 1
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84341/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186479",
                        "name": "cover from new series (2020) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186480",
                        "name": "story from new series (2020) #1",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84341/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84347,
            "digitalId": 54843,
            "title": "2020 Ironheart (2020) #2",
            "issueNumber": 2,
            "variantDescription": "",
            "description": null,
            "modified": "2020-09-09T11:47:08-0400",
            "isbn": "",
            "upc": "75960609847700211",
            "diamondCode": "MAR200975",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84347",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84347/2020_ironheart_2020_2?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2020-Ironheart-2/digital-comic/54843?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=54843&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/54843?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29694",
                "name": "2020 Ironheart (2020)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-06-17T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2029-12-08T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-09-14T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2020-06-17T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/00/5f0cbcefa582a",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/00/5f0cbcefa582a",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84347/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13590",
                        "name": "Vita Ayala",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14045",
                        "name": "Danny Lore",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13676",
                        "name": "Mattia Iacono",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13630",
                        "name": "Woo Chul Lee",
                        "role": "painter (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12120",
                        "name": "David Messina",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 7
            },
            "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84347/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017831",
                        "name": "Ironheart (Riri Williams)"
                    }
                ],
                "returned": 1
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84347/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186491",
                        "name": "cover from 2020 Ironheart (2020) #2",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186492",
                        "name": "story from 2020 Ironheart (2020) #2",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84347/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84346,
            "digitalId": 54571,
            "title": "2020 Ironheart (2020) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "2020-09-09T11:25:34-0400",
            "isbn": "",
            "upc": "75960609847700111",
            "diamondCode": "FEB200914",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84346",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84346/2020_ironheart_2020_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2020-Ironheart-1/digital-comic/54571?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=54571&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29694",
                "name": "2020 Ironheart (2020)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-05-20T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2020-04-27T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-09-14T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2021-06-01T18:25:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/5e99c32ae9b12",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/5e99c32ae9b12",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84346/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13590",
                        "name": "Vita Ayala",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14045",
                        "name": "Danny Lore",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13676",
                        "name": "Mattia Iacono",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13080",
                        "name": "S SKAN",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12120",
                        "name": "David Messina",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 7
            },
            "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84346/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017831",
                        "name": "Ironheart (Riri Williams)"
                    }
                ],
                "returned": 1
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84346/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186489",
                        "name": "cover from 2020 Ironheart (2020) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186490",
                        "name": "story from 2020 Ironheart (2020) #1",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84346/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84353,
            "digitalId": 55049,
            "title": "2020 iWolverine (2020) #2",
            "issueNumber": 2,
            "variantDescription": "",
            "description": null,
            "modified": "2020-09-09T16:52:51-0400",
            "isbn": "",
            "upc": "75960609848400211",
            "diamondCode": "APR200965",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84353",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84353/2020_iwolverine_2020_2?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2020-Iwolverine-2/digital-comic/55049?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=55049&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/55049?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29697",
                "name": "2020 iWolverine (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/90178",
                    "name": "2020 iWolverine (2020) #2 (Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-08-26T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2020-08-03T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-09-14T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2020-08-26T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/5f3d36dd2c1b2",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/5f3d36dd2c1b2",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84353/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13647",
                        "name": "Lauren Amaro",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9371",
                        "name": "Roland Boschi",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/42",
                        "name": "Larry Hama",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8027",
                        "name": "Andres Mossa",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10344",
                        "name": "Juan Jose Ryp",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                        "name": "Vc Joe Sabino",
                        "role": "letterer"
                    }
                ],
                "returned": 7
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84353/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84353/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186503",
                        "name": "cover from 2020 Weapon.Exe (2020) #2",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186504",
                        "name": "story from 2020 Weapon.Exe (2020) #2",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84353/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 90178,
            "digitalId": 0,
            "title": "2020 iWolverine (2020) #2 (Variant)",
            "issueNumber": 2,
            "variantDescription": "Variant",
            "description": null,
            "modified": "2020-04-30T09:05:11-0400",
            "isbn": "",
            "upc": "75960609848400221",
            "diamondCode": "APR200966",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/90178",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/90178/2020_iwolverine_2020_2_variant/variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29697",
                "name": "2020 iWolverine (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84353",
                    "name": "2020 iWolverine (2020) #2"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-08-26T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2020-08-03T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/60/5f3d4cb97aaec",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/60/5f3d4cb97aaec",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/90178/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9371",
                        "name": "Roland Boschi",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/42",
                        "name": "Larry Hama",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13056",
                        "name": "Daniel Warren Johnson",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8027",
                        "name": "Andres Mossa",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                        "name": "Vc Joe Sabino",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13224",
                        "name": "Michael Spicer",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 7
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/90178/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/90178/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/201404",
                        "name": "cover from 2020 Iwolverine (2020) #2 (VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/201405",
                        "name": "story from 2020 Iwolverine (2020) #2 (VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/90178/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84352,
            "digitalId": 54844,
            "title": "2020 iWolverine (2020) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "2020-09-09T16:52:51-0400",
            "isbn": "",
            "upc": "75960609848400111",
            "diamondCode": "MAR200973",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84352",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84352/2020_iwolverine_2020_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2020-Iwolverine-1/digital-comic/54844?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=54844&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/54844?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29697",
                "name": "2020 iWolverine (2020)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-07-15T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2020-06-22T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-09-14T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2020-07-15T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/5f0cbd26146f4",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/5f0cbd26146f4",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84352/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13647",
                        "name": "Lauren Amaro",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9371",
                        "name": "Roland Boschi",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/42",
                        "name": "Larry Hama",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8027",
                        "name": "Andres Mossa",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10344",
                        "name": "Juan Jose Ryp",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                        "name": "Vc Joe Sabino",
                        "role": "letterer"
                    }
                ],
                "returned": 7
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84352/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84352/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186501",
                        "name": "cover from 2020 Weapon.Exe (2020) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186502",
                        "name": "story from 2020 Weapon.Exe (2020) #1",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84352/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84974,
            "digitalId": 0,
            "title": "2020 Machine Man (2020) #2 (Variant)",
            "issueNumber": 2,
            "variantDescription": "Variant",
            "description": null,
            "modified": "2020-03-10T16:01:29-0400",
            "isbn": "",
            "upc": "75960609845300221",
            "diamondCode": "JAN200888",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 40,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84974",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84974/2020_machine_man_2020_2_variant/variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29695",
                "name": "2020 Machine Man (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84349",
                    "name": "2020 Machine Man (2020) #2"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-03-18T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2020-02-24T00:00:00-0500"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 4.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/03/5e666420e8903",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/03/5e666420e8903",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 11,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84974/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13162",
                        "name": "Erick Arciniega",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13005",
                        "name": "Dono Sanchez-Almara",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13074",
                        "name": "Adriano DI Benedetto",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7964",
                        "name": "Andy Macdonald",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                        "name": "Tom Defalco",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                        "name": "Christos Gage",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/942",
                        "name": "Mike Hawthorne",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10344",
                        "name": "Juan Jose Ryp",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 11
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84974/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84974/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/188583",
                        "name": "cover from 2020 Machine Man (2020) #2",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/188584",
                        "name": "story from 2020 Machine Man (2020) #2",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84974/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84349,
            "digitalId": 54231,
            "title": "2020 Machine Man (2020) #2",
            "issueNumber": 2,
            "variantDescription": "",
            "description": null,
            "modified": "2020-09-09T11:35:49-0400",
            "isbn": "",
            "upc": "75960609845300211",
            "diamondCode": "JAN200887",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 40,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84349",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84349/2020_machine_man_2020_2?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2020-Machine-Man-2/digital-comic/54231?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=54231&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/54231?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29695",
                "name": "2020 Machine Man (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84974",
                    "name": "2020 Machine Man (2020) #2 (Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-03-18T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2020-02-24T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-09-14T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2020-03-18T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 4.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 4.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/0/04/5e67b574cebff",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/0/04/5e67b574cebff",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 11,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84349/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13162",
                        "name": "Erick Arciniega",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13005",
                        "name": "Dono Sanchez-Almara",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13074",
                        "name": "Adriano DI Benedetto",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7964",
                        "name": "Andy Macdonald",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                        "name": "Tom Defalco",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                        "name": "Christos Gage",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/942",
                        "name": "Mike Hawthorne",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13128",
                        "name": "Nick Roche",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13224",
                        "name": "Michael Spicer",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 11
            },
            "characters": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84349/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009376",
                        "name": "Jocasta"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010805",
                        "name": "Machine Man"
                    }
                ],
                "returned": 2
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84349/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186495",
                        "name": "cover from 2020 Machine Man (2020) #2",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186496",
                        "name": "story from 2020 Machine Man (2020) #2",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84349/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84348,
            "digitalId": 53923,
            "title": "2020 Machine Man (2020) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "2020-09-09T11:35:38-0400",
            "isbn": "",
            "upc": "75960609845300111",
            "diamondCode": "DEC190826",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 40,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84348",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84348/2020_machine_man_2020_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2020-Machine-Man-1/digital-comic/53923?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=53923&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/53923?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29695",
                "name": "2020 Machine Man (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84672",
                    "name": "2020 Machine Man (2020) #1 (Variant)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84671",
                    "name": "2020 Machine Man (2020) #1 (Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-02-19T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "2020-01-27T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-08-24T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2020-02-19T00:00:00-0500"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 4.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 4.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/10/5e28a4c97286d",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/10/5e28a4c97286d",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 11,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84348/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13162",
                        "name": "Erick Arciniega",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13005",
                        "name": "Dono Sanchez-Almara",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13074",
                        "name": "Adriano DI Benedetto",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7964",
                        "name": "Andy Macdonald",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                        "name": "Tom Defalco",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                        "name": "Christos Gage",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/942",
                        "name": "Mike Hawthorne",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13128",
                        "name": "Nick Roche",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13224",
                        "name": "Michael Spicer",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 11
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84348/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84348/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186493",
                        "name": "cover from 2020 Machine Man (2020) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186494",
                        "name": "story from 2020 Machine Man (2020) #1",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84348/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84672,
            "digitalId": 0,
            "title": "2020 Machine Man (2020) #1 (Variant)",
            "issueNumber": 1,
            "variantDescription": "Variant",
            "description": null,
            "modified": "2019-11-21T09:02:37-0500",
            "isbn": "",
            "upc": "75960609845300131",
            "diamondCode": "DEC190827",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 40,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84672",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84672/2020_machine_man_2020_1_variant/variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29695",
                "name": "2020 Machine Man (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84348",
                    "name": "2020 Machine Man (2020) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84671",
                    "name": "2020 Machine Man (2020) #1 (Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-02-19T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "2020-01-27T00:00:00-0500"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 4.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/30/5e42cacd45be7",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/30/5e42cacd45be7",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 10,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84672/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13162",
                        "name": "Erick Arciniega",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13005",
                        "name": "Dono Sanchez-Almara",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13074",
                        "name": "Adriano DI Benedetto",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7964",
                        "name": "Andy Macdonald",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                        "name": "Tom Defalco",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                        "name": "Christos Gage",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/942",
                        "name": "Mike Hawthorne",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12703",
                        "name": "Dave Rapoza",
                        "role": "painter (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 10
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84672/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84672/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/187979",
                        "name": "cover from 2020 Machine Man (2020) #1 (VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/187980",
                        "name": "story from 2020 Machine Man (2020) #1 (VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84672/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84671,
            "digitalId": 0,
            "title": "2020 Machine Man (2020) #1 (Variant)",
            "issueNumber": 1,
            "variantDescription": "Variant",
            "description": null,
            "modified": "2019-11-21T09:02:36-0500",
            "isbn": "",
            "upc": "75960609845300121",
            "diamondCode": "DEC190828",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 40,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84671",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84671/2020_machine_man_2020_1_variant/variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29695",
                "name": "2020 Machine Man (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84348",
                    "name": "2020 Machine Man (2020) #1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84672",
                    "name": "2020 Machine Man (2020) #1 (Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-02-19T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "2020-01-27T00:00:00-0500"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 4.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/00/5e42cb1a158b8",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/00/5e42cb1a158b8",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 10,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84671/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13162",
                        "name": "Erick Arciniega",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13005",
                        "name": "Dono Sanchez-Almara",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13074",
                        "name": "Adriano DI Benedetto",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7964",
                        "name": "Andy Macdonald",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13632",
                        "name": "Ryan Brown",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                        "name": "Tom Defalco",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                        "name": "Christos Gage",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/942",
                        "name": "Mike Hawthorne",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    }
                ],
                "returned": 10
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84671/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84671/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/187977",
                        "name": "cover from 2020 Machine Man (2020) #1 (VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/187978",
                        "name": "story from 2020 Machine Man (2020) #1 (VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84671/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84351,
            "digitalId": 54572,
            "title": "2020 Rescue (2020) #2",
            "issueNumber": 2,
            "variantDescription": "",
            "description": null,
            "modified": "2020-09-09T11:42:31-0400",
            "isbn": "",
            "upc": "759606098461000211",
            "diamondCode": "FEB200910",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84351",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84351/2020_rescue_2020_2?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2020-Rescue-2/digital-comic/54572?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=54572&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/54572?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29696",
                "name": "2020 Rescue (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/88411",
                    "name": "2020 Rescue (2020) #2 (Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-06-24T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2020-03-16T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-09-14T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2020-06-24T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/5e8653e3cb7c1",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/5e8653e3cb7c1",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84351/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8648",
                        "name": "Jacen Burrows",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/362",
                        "name": "Scott Hanna",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/208",
                        "name": "Paco Medina",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13339",
                        "name": "Pete Pantazis",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13707",
                        "name": "Dana Schwartz",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 8
            },
            "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84351/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009494",
                        "name": "Pepper Potts"
                    }
                ],
                "returned": 1
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84351/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186499",
                        "name": "cover from 2020 Rescue (2020) #2",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186500",
                        "name": "story from 2020 Rescue (2020) #2",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84351/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 88411,
            "digitalId": 0,
            "title": "2020 Rescue (2020) #2 (Variant)",
            "issueNumber": 2,
            "variantDescription": "Variant",
            "description": null,
            "modified": "2020-04-03T17:08:20-0400",
            "isbn": "",
            "upc": "759606098461000221",
            "diamondCode": "FEB200911",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/88411",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/88411/2020_rescue_2020_2_variant/variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29696",
                "name": "2020 Rescue (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84351",
                    "name": "2020 Rescue (2020) #2"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-06-24T00:00:00-0400"
                },
                {
                    "type": "focDate",
                    "date": "2020-03-16T00:00:00-0400"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/5e87403d03fbf",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/5e87403d03fbf",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/88411/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13591",
                        "name": "Mirka Andolfo",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8648",
                        "name": "Jacen Burrows",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/362",
                        "name": "Scott Hanna",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13339",
                        "name": "Pete Pantazis",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13707",
                        "name": "Dana Schwartz",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 8
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/88411/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/88411/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/196817",
                        "name": "cover from 2020 Rescue (2020) #2 (VARIANT)",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/196818",
                        "name": "story from 2020 Rescue (2020) #2 (VARIANT)",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/88411/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84975,
            "digitalId": 0,
            "title": "2020 Rescue (2020) #1 (Variant)",
            "issueNumber": 1,
            "variantDescription": "Variant",
            "description": null,
            "modified": "2020-02-24T11:59:59-0500",
            "isbn": "",
            "upc": "759606098461000121",
            "diamondCode": "JAN200892",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84975",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84975/2020_rescue_2020_1_variant/variant?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29696",
                "name": "2020 Rescue (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84350",
                    "name": "2020 Rescue (2020) #1"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-03-04T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "2020-02-10T00:00:00-0500"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/10/5e53e93d8cc47",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/10/5e53e93d8cc47",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84975/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13069",
                        "name": "Jen Bartel",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8648",
                        "name": "Jacen Burrows",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/362",
                        "name": "Scott Hanna",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13339",
                        "name": "Pete Pantazis",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13707",
                        "name": "Dana Schwartz",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 7
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84975/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84975/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/188585",
                        "name": "cover from 2020 Rescue (2020) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/188586",
                        "name": "story from 2020 Rescue (2020) #1",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84975/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 84350,
            "digitalId": 54232,
            "title": "2020 Rescue (2020) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "2020-09-09T14:13:27-0400",
            "isbn": "",
            "upc": "759606098461000111",
            "diamondCode": "JAN200891",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84350",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/84350/2020_rescue_2020_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2020-Rescue-1/digital-comic/54232?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=54232&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/54232?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/29696",
                "name": "2020 Rescue (2020)"
            },
            "variants": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/84975",
                    "name": "2020 Rescue (2020) #1 (Variant)"
                }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2020-03-04T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "2020-02-10T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-09-07T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2020-03-04T00:00:00-0500"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 3.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 3.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/d0/5e53eb33cb1fa",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/d0/5e53eb33cb1fa",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84350/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8648",
                        "name": "Jacen Burrows",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/362",
                        "name": "Scott Hanna",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/208",
                        "name": "Paco Medina",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13339",
                        "name": "Pete Pantazis",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13707",
                        "name": "Dana Schwartz",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 8
            },
            "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84350/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009494",
                        "name": "Pepper Potts"
                    }
                ],
                "returned": 1
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84350/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186497",
                        "name": "cover from 2020 Rescue (2020) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/186498",
                        "name": "story from 2020 Rescue (2020) #1",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84350/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 78503,
            "digitalId": 52960,
            "title": "2099 Alpha (2019) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "2019-11-18T10:54:21-0500",
            "isbn": "",
            "upc": "75960609617600111",
            "diamondCode": "SEP190821",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 40,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/78503",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/78503/2099_alpha_2019_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2099-ALPHA-1-1/digital-comic/52960?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=52960&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/52960?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/27980",
                "name": "2099 Alpha (2019)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2019-11-20T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "2019-10-28T00:00:00-0400"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-05-25T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2019-11-20T00:00:00-0500"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 4.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 4.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/00/5dc98b1e694eb",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/00/5dc98b1e694eb",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/78503/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13914",
                        "name": "Viktor Bogdanovic",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12239",
                        "name": "Guru Efx",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5933",
                        "name": "Patrick Gleason",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/872",
                        "name": "Marte Gracia",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
                        "name": "Nick Lowe",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11434",
                        "name": "Nick Spencer",
                        "role": "writer"
                    }
                ],
                "returned": 7
            },
            "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/78503/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                        "name": "Spider-Man (Peter Parker)"
                    }
                ],
                "returned": 1
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/78503/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/174026",
                        "name": "cover from Amazing Spider-Man 2099 Alpha (2019) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/174027",
                        "name": "story from Amazing Spider-Man 2099 Alpha (2019) #1",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/78503/events",
                "items": [],
                "returned": 0
            }
        },
        {
            "id": 78504,
            "digitalId": 53203,
            "title": "2099 Omega (2019) #1",
            "issueNumber": 1,
            "variantDescription": "",
            "description": null,
            "modified": "2019-12-12T10:50:15-0500",
            "isbn": "",
            "upc": "759606096221000111",
            "diamondCode": "OCT190942",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 40,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/78504",
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/issue/78504/2099_omega_2019_1?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "purchase",
                    "url": "http://comicstore.marvel.com/2099-OMEGA-1-1/digital-comic/53203?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "reader",
                    "url": "http://marvel.com/digitalcomics/view.htm?iid=53203&utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                },
                {
                    "type": "inAppLink",
                    "url": "https://applink.marvel.com/issue/53203?utm_campaign=apiRef&utm_source=a93afdf852ebe2ee61d4259849044735"
                }
            ],
            "series": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/27981",
                "name": "2099 Omega (2019)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
                {
                    "type": "onsaleDate",
                    "date": "2019-12-18T00:00:00-0500"
                },
                {
                    "type": "focDate",
                    "date": "2019-11-18T00:00:00-0500"
                },
                {
                    "type": "unlimitedDate",
                    "date": "2020-06-22T00:00:00-0400"
                },
                {
                    "type": "digitalPurchaseDate",
                    "date": "2019-12-18T00:00:00-0500"
                }
            ],
            "prices": [
                {
                    "type": "printPrice",
                    "price": 4.99
                },
                {
                    "type": "digitalPurchasePrice",
                    "price": 4.99
                }
            ],
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/5defb2b89c172",
                "extension": "jpg"
            },
            "images": [
                {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/5defb2b89c172",
                    "extension": "jpg"
                }
            ],
            "creators": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/78504/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5933",
                        "name": "Patrick Gleason",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
                        "name": "Nick Lowe",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12991",
                        "name": "Rachelle Rosenberg",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12369",
                        "name": "Gerardo Sandoval",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11434",
                        "name": "Nick Spencer",
                        "role": "writer"
                    }
                ],
                "returned": 5
            },
            "characters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/78504/characters",
                "items": [],
                "returned": 0
            },
            "stories": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/78504/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/174028",
                        "name": "cover from Amazing Spider-Man 2099 Omega (2019) #1",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/174029",
                        "name": "story from Amazing Spider-Man 2099 Omega (2019) #1",
                        "type": "interiorStory"
                    }
                ],
                "returned": 2
            },
            "events": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/78504/events",
                "items": [],
                "returned": 0
            }
        }
      ];

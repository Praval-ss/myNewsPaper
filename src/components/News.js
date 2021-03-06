import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

  articles=[
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Nick Keppler, Amy B Wang, Annabelle Timsit",
      "title": "Shooting at Airbnb party kills 2, injures 8 in Pittsburgh, city says",
      "description": "Pittsburgh officials said some 200 people — many underage — attended the party, and as many as 90 rounds were fired inside.",
      "url": "https://www.washingtonpost.com/nation/2022/04/17/pittsburgh-shooting-airbnb-party-east-allegheny/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/04-17-2022/t_e48d6425e22f448094fc7fbb5ab75ef1_name_imrs_php.jpg&w=1440",
      "publishedAt": "2022-04-17T18:47:54+00:00",
      "content": "Placeholder while article actions load\r\nPITTSBURGH A shooting early Sunday at a house party in Pittsburgh left two people dead and at least eight injured, city officials said.\r\nPolice said they respo… [+5868 chars]"
    },
    {
      "source": {
        "id": "msnbc",
        "name": "MSNBC"
      },
      "author": "MSNBC",
      "title": "Shooting at South Carolina club leaves 9 injured, authorities said",
      "description": "Authorities in South Carolina say they are investigating shooting at a club in Hampton County early Sunday that left at least nine people injured.",
      "url": "https://www.nbcnews.com/news/us-news/shooting-south-carolina-club-leaves-9-injured-authorities-said-rcna24744",
      "urlToImage": "https://nodeassets.nbcnews.com/cdnassets/projects/socialshareimages-bento/og-nbcnews1680x840.png",
      "publishedAt": "2022-04-17T18:22:28Z",
      "content": "HAMPTON, S.C. Authorities in South Carolina say they are investigating shooting at a club in Hampton County early Sunday that left at least nine people injured. It was the second mass shooting in the… [+1389 chars]"
    },
    {
      "source": {
        "id": "the-huffington-post",
        "name": "The Huffington Post"
      },
      "author": "AP",
      "title": "Authorities: 9 Hurt In Shooting At Club In South Carolina",
      "description": "Authorities in South Carolina say they are investigating an early morning shooting at a club in Hampton County that left at least nine people injured.",
      "url": "https://www.huffpost.com/entry/south-carolina-weekend-shootings_n_625c527ee4b0be72bff7681f",
      "urlToImage": "https://img.huffingtonpost.com/asset/625c54b121000042795063c6.jpeg?ops=1778_1000",
      "publishedAt": "2022-04-17T18:04:08Z",
      "content": "HAMPTON, S.C. (AP) Authorities in South Carolina say they are investigating shooting at a club in Hampton County early Sunday that left at least nine people injured. It was the second mass shooting i… [+1394 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Tim MacMahon",
      "title": "Luka Doncic again does light shooting; Game 2 status vs. Utah Jazz to be determined",
      "description": "Luka Doncic did light shooting on Sunday for the second consecutive day in a sign of progress from a strained left calf. Coach Jason Kidd said that his superstar's status for Game 2 is yet to be determined.",
      "url": "http://espn.go.com/nba/story/_/id/33756571/luka-doncic-again-does-light-shooting-game-2-status-vs-utah-jazz-determined",
      "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0222%2Fr977954_1296x729_16%2D9.jpg",
      "publishedAt": "2022-04-17T17:55:37Z",
      "content": "DALLAS -- Mavericks coach Jason Kidd said Sunday that Luka Doncic's status for Monday's Game 2 is yet to be determined after the superstar did light shooting for the second consecutive day, a sign of… [+1505 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": null,
      "title": "US rocked by 3 mass shootings during Easter weekend; 2 dead",
      "description": "HAMPTON, S.C. (AP) — Authorities in South Carolina say they are investigating shooting at a club in Hampton County early Sunday that left at least nine people injured. It was the third mass shooting in the U.S.",
      "url": "https://apnews.com/8587b95c3e87935cc9274aef31bf2ad3",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/14e43b1dd9d248d3b9b3cbb37009f398/3000.jpeg",
      "publishedAt": "2022-04-17T17:03:31Z",
      "content": "HAMPTON, S.C. (AP) — Authorities in South Carolina say they are investigating shooting at a club in Hampton County early Sunday that left at least nine people injured. It was the third mass shooting … [+2746 chars]"
    },
    {
      "source": {
        "id": "google-news-ca",
        "name": "Google News (Canada)"
      },
      "author": "Akrit Michael",
      "title": "Five men coming from Ramadan prayers injured after drive-by shooting in Scarborough parking lot",
      "description": "A local Muslim association said it doesn’t believe hate was a motive in this shooting, but Toronto police hate crime unit is looking into the investigation “as a precaution.”",
      "url": "https://www.thestar.com/news/gta/2022/04/17/five-men-leaving-ramadan-prayers-injured-after-drive-by-shooting.html",
      "urlToImage": "https://images.thestar.com/Vx6lCgHjeUErOrhnopiiovjyNJo=/1200x802/smart/filters:cb(1650218122322)/https://www.thestar.com/content/dam/thestar/news/gta/2022/04/17/five-men-leaving-ramadan-prayers-injured-after-drive-by-shooting/_1_main_drive_by_shooting.jpg",
      "publishedAt": "2022-04-17T16:52:30+00:00",
      "content": "The Toronto police hate crime unit is looking into a recent drive-by shooting ‘as a precaution,’ but a local Muslim association says it does not believe hate was a motive.\r\nFive Muslim men, who had j… [+2630 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": null,
      "title": "Police arrest suspect in South Carolina mall shooting that left 9 shot, another 5 injured",
      "description": "Police have arrested a man in connection with a shooting at the Columbiana Centre mall in Harbison that sent weekend shoppers fleeing for safety.",
      "url": "https://www.usatoday.com/story/news/nation/2022/04/17/south-carolina-mall-shooting-suspect-arrrested-harbison/7349851001/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2022/04/17/USAT/510f14e4-d518-4b53-8181-547ddca67737-AP22106819260610.jpg?auto=webp&crop=5651,3179,x0,y376&format=pjpg&width=1200",
      "publishedAt": "2022-04-17T15:25:15+00:00",
      "content": "Police have arrested a man in connection with a shooting at a busy Columbia, South Carolina, mall that left 14 people injured and sent panicked Easter weekend shoppers fleeing for safety.\r\nJewayne M.… [+2158 chars]"
    },
    {
      "source": {
        "id": "the-huffington-post",
        "name": "The Huffington Post"
      },
      "author": "AP",
      "title": "Shooting At Pittsburgh House Party Leaves 2 Minors Dead, 9 Wounded",
      "description": "As many as 50 rounds were fired inside the house where more than 200 people had gathered. Many of those inside were underage, police said.",
      "url": "https://www.huffpost.com/entry/pittsburgh-house-party-shooting_n_625c1439e4b0e97a351f69d9",
      "urlToImage": "https://img.huffingtonpost.com/asset/625c15b421000042795063a9.jpeg?cache=2vPT0rSr6D&ops=1778_1000",
      "publishedAt": "2022-04-17T13:34:31Z",
      "content": "PITTSBURGH (AP) Two minors were dead and at least nine more people were wounded in a shooting at a house party in Pittsburgh early Sunday morning, police said.\r\nThe shooting happened around 12:30 a.m… [+877 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Stephen Fastenau, Nick Reynolds and Steve Garrison sfastenau@postandcourier.com nreynolds@postandcourier.com sgarrison@postandcourier.com",
      "title": "14 injured, 1 arrested after Columbia mall shooting: 'Everybody started freaking out'",
      "description": "Nine people were shot and five more injured when they were trampled as shoppers fled after gunfire erupted at a crowded Columbia shopping mall on the afternoon before Easter.",
      "url": "https://www.postandcourier.com/columbia/news/14-injured-1-arrested-after-columbia-mall-shooting-everybody-started-freaking-out/article_9c4dcc2e-bdb5-11ec-a261-43e4a04b953e.html",
      "urlToImage": "https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/b/66/b6624e14-bdce-11ec-848b-87b28579fb39/625b3a5f5d053.image.jpg?crop=680%2C357%2C0%2C76&resize=680%2C357&order=crop%2Cresize",
      "publishedAt": "2022-04-17T13:06:20+00:00",
      "content": "COLUMBIA  Nine people were shot and five more injured when they were trampled by shoppers fleeing gunfire in a crowded Columbia shopping mall on the afternoon before Easter. \r\nPolice arrested a 22-ye… [+3984 chars]"
    },
    {
      "source": {
        "id": "msnbc",
        "name": "MSNBC"
      },
      "author": "MSNBC",
      "title": "Mass shooting at Pittsburgh party leaves two dead",
      "description": "Two young men were killed and at least nine others injured in a mass shooting early Sunday in Pittsburg, police said.",
      "url": "https://www.nbcnews.com/news/us-news/mass-shooting-pittsburgh-party-leaves-two-dead-rcna24721",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-04/220417-pittsburgh-shooting-ha-3616b1.jpg",
      "publishedAt": "2022-04-17T11:12:28Z",
      "content": "Two young men were killed and at least nine others injured in a mass shooting early Sunday in Pittsburg, police said.\r\nThe shooting happened just after 12:30 a.m. during a party at a short-term renta… [+789 chars]"
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": null,
      "title": "Police: 2 Dead, Several Hurt in Shooting At Pittsburgh Party",
      "description": "",
      "url": "https://www.bloomberg.com/news/articles/2022-04-17/police-2-dead-11-injured-in-east-allegheny-shooting",
      "urlToImage": null,
      "publishedAt": "2022-04-17T10:23:02+00:00",
      "content": ""
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "The Associated Press",
      "title": "2 minors dead, 8 wounded in shooting at Pittsburgh party",
      "description": "PITTSBURGH (AP) — Shots fired at a house party in Pittsburgh early Sunday left two minors dead and at least eight more people wounded, police said.The shooting happened around 12:30 a.m. during a party at a short-term rental property where hundreds of people …",
      "url": "https://apnews.com/1e2c7890500b729ca76610b47d8e5769",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/efba5b3d23994a4bb1af213efb0d7c48/3000.jpeg",
      "publishedAt": "2022-04-17T09:25:18Z",
      "content": "PITTSBURGH (AP) — Shots fired at a house party in Pittsburgh early Sunday left two minors dead and at least eight more people wounded, police said.The shooting happened around 12:30 a.m. during a par… [+4624 chars]"
    },
    {
      "source": {
        "id": "the-huffington-post",
        "name": "The Huffington Post"
      },
      "author": "Sara Boboltz",
      "title": "10 People Shot At Columbiana Mall In South Carolina",
      "description": "At least 12 people were injured in a shooting and the panic that followed on a busy Saturday at the Columbia-area mall.",
      "url": "https://www.huffpost.com/entry/columbiana-mall-shooting-south-carolina_n_625b2d17e4b06c2ea32b48b8",
      "urlToImage": "https://img.huffingtonpost.com/asset/625b3b9c230000c2db139daa.jpeg?ops=1778_1000",
      "publishedAt": "2022-04-16T21:27:47Z",
      "content": "Authorities stage outside Columbiana Centre mall in Columbia, S.C., following a shooting, Saturday, April 16, 2022. \r\nTen people sustained gunshot wounds Saturday at a mall in Columbia, South Carolin… [+1418 chars]"
    },
    {
      "source": {
        "id": "vice-news",
        "name": "Vice News"
      },
      "author": "Emma Ockerman",
      "title": "The Cops Involved in George Floyd's Fatal Arrest Had Previous Violent Incidents on the Force",
      "description": "Derek Chauvin, who kneeled on Floyd's neck for minutes, had been involved in at least two police shootings during his tenure.",
      "url": "https://www.vice.com/en_us/article/wxq5gn/the-cops-involved-in-george-floyds-fatal-arrest-had-previous-violent-incidents-on-the-force",
      "urlToImage": "https://video-images.vice.com/test-uploads/articles/5ece94a6c19e170098c78783/lede/1590597223699-AP_20148017868432.jpeg?crop=1xw:0.8416666666666667xh;center,center&resize=1200:*",
      "publishedAt": "2020-05-27T16:36:09Z",
      "content": "Two of the four Minneapolis cops involved in George Floyds fatal arrest Monday including the one seen in a viral video kneeling on the black mans neck for several minutes as he repeatedly cried out t… [+4196 chars]"
    }
  ]

  constructor(){
    super();

    this.state={
      articles: this.articles,
      loading: false
    }
  }


  render() {
    return (
      <div className='container my-3'>

        <h2 style={{textAlign : "center"}}>Top HeadLines...</h2>

        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageurl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}
        </div>
      </div>

    )
  }
}

export default News
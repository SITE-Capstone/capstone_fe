import React from "react";
import Article from "../Article/Article";
import apiClient from "../Services/apiClient";

const dummy = [
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Khari Johnson",
    title: "Why Not Use Self-Driving Cars as Supercomputers?",
    description:
      "Autonomous vehicles use the equivalent of 200 laptops to get around. Some want to tap that computing power to decode viruses or mine bitcoin.",
    url: "https://www.wired.com/story/use-self-driving-cars-supercomputers/",
    urlToImage:
      "https://media.wired.com/photos/60f081b4c147fe7a1a367362/191:100/w_1280,c_limit/Business-Autonomous-Vehicles-Supercomputers-1201885684.jpg",
    publishedAt: "2021-07-19T11:00:00Z",
    content:
      "Like Dogecoin devotees, the mayor of Reno, and the leaders of El Salvador, Aldo Baoicchi is convinced cryptocurrency is the future. The CEO and founder of Canadian scooter maker Daymak believes this … [+4116 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Richard Lawler",
    title: "Kaseya ransomware attackers demand $70 million, claim they infected over a million devices",
    description:
      "Three days after ransomware attackers hijacked a managed services platform, recovery efforts continued. The REvil group is reportedly asking for as much as $70 million in Bitcoin to unlock the more than 1 million devices infected.",
    url: "https://www.theverge.com/2021/7/5/22564054/ransomware-revil-kaseya-coop",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/nk-drxT0WYuHTTAQw6MhPgi4LK8=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8792137/acastro_170629_1777_0008_v2.jpg",
    publishedAt: "2021-07-05T19:45:10Z",
    content:
      "Filed under:\r\nThe supply chain attack has reached over a thousand organizations.\r\nIllustration by Alex Castro / The Verge\r\nThree days after ransomware attackers started the holiday weekend by comprom… [+3376 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "Gang behind huge cyber-attack demands $70m in Bitcoin",
    description:
      'The authors of a "colossal" ransomware attack demand the sum in Bitcoin in return for a key to unlock all files.',
    url: "https://www.bbc.co.uk/news/technology-57719820",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/4532/production/_119241771_gettyimages-645051326.jpg",
    publishedAt: "2021-07-05T12:14:34Z",
    content:
      'image copyrightGetty Images\r\nThe gang behind a "colossal" ransomware attack has demanded $70m (£50.5m) paid in Bitcoin in return for a "universal decryptor" that it says will unlock the files of all … [+4140 chars]',
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Lucas Matney",
    title: "Crypto startup Phantom banks funding from Andreessen Horowitz to scale its multi-chain wallet",
    description:
      "While retail investors grew more comfortable buying cryptocurrencies like Bitcoin and Ethereum in 2021, the decentralized application world still has a lot of work to do when it comes to onboarding a mainstream user base. Phantom is part of a new class of cry…",
    url: "http://techcrunch.com/2021/07/14/crypto-startup-phantom-banks-funding-from-andreessen-horowitz-to-scale-its-multi-chain-wallet/",
    urlToImage: "https://techcrunch.com/wp-content/uploads/2021/07/Phantom-Founders-01.jpg?w=600",
    publishedAt: "2021-07-14T19:09:01Z",
    content:
      "While retail investors grew more comfortable buying cryptocurrencies like Bitcoin and Ethereum in 2021, the decentralized application world still has a lot of work to do when it comes to onboarding a… [+2288 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Tom Arnold, Karin Strohecker",
    title: "El Salvador bitcoin plan 'bulletproof', president says - Reuters",
    description:
      'El Salvador is determined to push ahead with making bitcoin legal tender, a process that will bring only small risks and prove a "leap forward for humanity", the country\'s President Nayib Bukele said in an interview with a bitcoin journalist.',
    url: "https://www.reuters.com/article/el-salvador-bitcoin-bukele-idUSL5N2O53AL",
    urlToImage: "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
    publishedAt: "2021-06-23T13:46:00Z",
    content:
      "LONDON, June 23 (Reuters) - El Salvador is determined to push ahead with making bitcoin legal tender, a process that will bring only small risks and prove a leap forward for humanity, the countrys Pr… [+2648 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Tom Arnold,Karin Strohecker",
    title: 'El Salvador bitcoin plan "bulletproof", president says - Reuters',
    description:
      'El Salvador is determined to push ahead with making bitcoin  legal tender, a process that will bring only small risks and prove a "leap forward for humanity", the country\'s President Nayib Bukele said in an interview with a bitcoin journalist.',
    url: "https://www.reuters.com/business/el-salvador-bitcoin-plan-bulletproof-president-says-2021-06-23/",
    urlToImage:
      "https://www.reuters.com/resizer/-NVJNngENeVucFqs_thLKomcREk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PAJVGKERRBLV3DPA6YELYMSRTQ.jpg",
    publishedAt: "2021-06-23T13:58:00Z",
    content:
      'LONDON, June 23 (Reuters) - El Salvador is determined to push ahead with making bitcoin legal tender, a process that will bring only small risks and prove a "leap forward for humanity", the country\'s… [+2764 chars]',
  },
  {
    source: {
      id: null,
      name: "MarketBeat",
    },
    author: "Melissa Brock",
    title: "Gold is Dead? Should You Opt for Gold (Over Crypto) in Your Portfolio?",
    description:
      "Bitcoin transactions are recorded on a blockchain, a distributed ledger that cannot fail. Government doesn't control bitcoin (unlike banks) and that's...",
    url: "https://www.marketbeat.com/originals/should-you-opt-for-gold-over-crypto-in-your-portfolio/?utm_source=entrepreneurcom&amp;amp;utm_medium=entrepreneurcom",
    urlToImage: "https://assets.entrepreneur.com/content/3x2/2000/20160408155709-default-hero-entrepreneur.png",
    publishedAt: "2021-06-22T10:10:00Z",
    content:
      "This story originally appeared on MarketBeatWhen meme coins surged earlier this year (remember Dogecoin mania?) it might've been easy to dump everything you owned — stocks, bonds, gold — for crypto. … [+6151 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters",
    title: "Cryptocurrencies tumble amid China crackdown on bitcoin miners - Reuters",
    description:
      "Cryptocurrencies tumbled on Monday as China's crackdown on bitcoin mining expanded to the province of Sichuan.",
    url: "https://www.reuters.com/technology/cryptocurrencies-tumble-amid-china-crackdown-bitcoin-miners-2021-06-21/",
    urlToImage:
      "https://www.reuters.com/resizer/vrrOc0dnUuHV9__Plp9bJglZGWs=/800x419/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7GDD6S7NDRPEFFFAZVABH2K454.jpg",
    publishedAt: "2021-06-21T07:12:00Z",
    content:
      "TOKYO, June 21 (Reuters) - Cryptocurrencies tumbled on Monday as China's crackdown on bitcoin mining expanded to the province of Sichuan. read more \r\nBitcoin fell to as low as $32,288 for the first t… [+377 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Tom Wilson",
    title: "Boom, bust and bewildered: Bitcoin's year so far - Reuters",
    description: "If you're a bitcoin investor, your nerves may have taken quite a pounding in 2021.",
    url: "https://www.reuters.com/technology/boom-bust-bewildered-bitcoins-year-so-far-2021-06-30/",
    urlToImage:
      "https://www.reuters.com/resizer/Iz_V3_lUcgBTBIkxGaqEvdnifa0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3GKHTWVGDVPXNFB47P2YJYB5UY.jpg",
    publishedAt: "2021-06-30T13:46:00Z",
    content:
      "A representation of virtual currency Bitcoin is seen in front of a stock graph in this illustration taken March 15, 2021. REUTERS/Dado Ruvic/IllustrationLONDON, June 30 (Reuters) - If you're a bitcoi… [+3630 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters",
    title: "Bitcoin falls 8.6% to $32540 - Reuters",
    description: "Bitcoin dipped 8.57% to $32,540.35 at 2011 GMT on Monday, losing $3,049.42 from its previous close.",
    url: "https://www.reuters.com/technology/bitcoin-falls-86-32540-2021-06-21/",
    urlToImage:
      "https://www.reuters.com/resizer/EA_FhvXIW0VXFcNDdLs7vrbpIYg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QLML2PWULBJHRGKWO6BATZD6OY.jpg",
    publishedAt: "2021-06-21T20:35:00Z",
    content:
      "June 21 (Reuters) - Bitcoin dipped 8.57% to $32,540.35 at 2011 GMT on Monday, losing $3,049.42 from its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, is down 49.9% from… [+308 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters Staff",
    title: "Bitcoin falls 8.6% to $32,540 - Reuters",
    description: "Bitcoin dipped 8.57% to $32,540.35 at 2011 GMT on Monday, losing $3,049.42 from its previous close.",
    url: "https://www.reuters.com/article/crypto-currency-bitcoin-idUSL3N2O341V",
    urlToImage: "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
    publishedAt: "2021-06-21T20:16:00Z",
    content:
      "By Reuters Staff\r\nJune 21 (Reuters) - Bitcoin dipped 8.57% to $32,540.35 at 2011 GMT on Monday, losing $3,049.42 from its previous close.\r\nBitcoin, the worlds biggest and best-known cryptocurrency, i… [+269 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters",
    title: "Bitcoin falls 7.4 percent to $32094 - Reuters",
    description: "Bitcoin dropped 7.37% to $32,094.44 on Friday, losing $2,554.88 from its previous close.",
    url: "https://www.reuters.com/technology/bitcoin-falls-74-percent-32094-2021-06-25/",
    urlToImage:
      "https://www.reuters.com/resizer/EA_FhvXIW0VXFcNDdLs7vrbpIYg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QLML2PWULBJHRGKWO6BATZD6OY.jpg",
    publishedAt: "2021-06-25T20:21:00Z",
    content:
      "A representation of the virtual cryptocurrency Bitcoin is seen in this picture illustration taken June 14, 2021. REUTERS/Edgar Su/IllustrationJune 25 (Reuters) - Bitcoin dropped 7.37% to $32,094.44 o… [+434 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters Editorial",
    title: "Bitcoin slumps after China crackdown - Reuters",
    description: "Bitcoin tumbled on Monday after news of a fresh crackdown on the cryptocurrency's miners in China.",
    url: "https://www.reuters.com/video/watch/idP60K?now=true",
    urlToImage: "https://ajo.prod.reuters.tv/api/v2/img/60d06bb0e4b0653eea188161-1624271792852?location=LANDSCAPE",
    publishedAt: "2021-06-21T11:01:03Z",
    content:
      "Posted \r\nBitcoin tumbled on Monday after news of a fresh crackdown on the cryptocurrency's miners in China.",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters Staff",
    title: "Bitcoin rises 5.4% to $36,361.69 - Reuters",
    description: "Bitcoin rose 5.44% to $36,361.69 on Tuesday, adding $1,874.58 to its previous close.",
    url: "https://www.reuters.com/article/us-crypto-currency-bitcoin-idUSKCN2E52H9",
    urlToImage: "https://static.reuters.com/resources/r/?m=02&d=20210629&t=2&i=1567370357&r=LYNXNPEH5S1BR&w=800",
    publishedAt: "2021-06-29T20:21:00Z",
    content:
      "By Reuters Staff\r\nFILE PHOTO: Representations of the Bitcoin cryptocurrency are seen in this illustration picture taken June 7, 2021. REUTERS/Edgar Su/Illustration/File Photo\r\n(Reuters) - Bitcoin ros… [+304 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters Staff",
    title: "Bitcoin falls 7.4 percent to $32,094 - Reuters",
    description: "Bitcoin dropped 7.37% to $32,094.44 on Friday, losing $2,554.88 from its previous close.",
    url: "https://www.reuters.com/article/crypto-currency-bitcoin-idUSL3N2O73G4",
    urlToImage: "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
    publishedAt: "2021-06-25T20:12:00Z",
    content:
      "By Reuters Staff\r\nJune 25 (Reuters) - Bitcoin dropped 7.37% to $32,094.44 on Friday, losing $2,554.88 from its previous close.\r\nBitcoin, the worlds biggest and best-known cryptocurrency, is down 50.5… [+253 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters",
    title: "Bitcoin drops over 5% to $33226.36 - Reuters",
    description: "Bitcoin dropped 5.17% to $33,226.36 on Thursday, losing $1,810.87 from its previous close.",
    url: "https://www.reuters.com/technology/bitcoin-drops-over-5-3322636-2021-07-01/",
    urlToImage:
      "https://www.reuters.com/resizer/tWz6wmeQen123r5Y_SZlKEXIlt0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VAO7ZGYTBNJOLKIAQBDOGPCLUA.jpg",
    publishedAt: "2021-07-01T20:18:00Z",
    content:
      "A representations of virtual currency Bitcoin is seen in front of a stock graph in this illustration taken,May 19, 2021. REUTERS/Dado Ruvic/IllustrationJuly 1 (Reuters) - Bitcoin dropped 5.17% to $33… [+441 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters Editorial",
    title: "Sotheby's diamond auction marks bitcoin milestone - Reuters",
    description:
      "A rare pear-shaped diamond that is expected to fetch up to $15 million can be bought at a Sotheby's auction next month using cryptocurrencies, in another first for the emerging asset. This report produced by Chris Dignam.",
    url: "https://www.reuters.com/video/watch/idP6bA?now=true",
    urlToImage: "https://ajo.prod.reuters.tv/api/v2/img/60d0e406e4b0653eea1881c7-1624302598649?location=LANDSCAPE",
    publishedAt: "2021-06-21T20:24:34Z",
    content:
      "Posted \r\nA rare pear-shaped diamond that is expected to fetch up to $15 million can be bought at a Sotheby's auction next month using cryptocurrencies, in another first for the emerging asset. This r… [+30 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters Staff",
    title: "Bitcoin falls 8.5% to $31,700 - Reuters",
    description: "Bitcoin dipped 8.51% to $31,699.83 at 22:04 GMT on Friday, losing $2,937.27 from its previous close.",
    url: "https://www.reuters.com/article/crypto-currency-bitcoin-idUSL3N2O73MM",
    urlToImage: "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
    publishedAt: "2021-06-25T22:10:00Z",
    content:
      "By Reuters Staff\r\nJune 25 (Reuters) - Bitcoin dipped 8.51% to $31,699.83 at 22:04 GMT on Friday, losing $2,937.27 from its previous close.\r\nBitcoin, the worlds biggest and best-known cryptocurrency, … [+258 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters Editorial",
    title: "Bitcoin slumps after China crackdown - Reuters",
    description:
      "Bitcoin tumbled on Monday after news of a fresh crackdown on the cryptocurrency's miners in China. Julian Satterthwaite reports.",
    url: "https://www.reuters.com/video/watch/idOVEICNCSR",
    urlToImage: "https://static.reuters.com/resources/r/?d=20210621&i=OVEICNCSR&r=OVEICNCSR&t=2",
    publishedAt: "2021-06-21T10:58:46Z",
    content:
      "Posted \r\nBitcoin tumbled on Monday after news of a fresh crackdown on the cryptocurrency's miners in China. Julian Satterthwaite reports.",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters",
    title: "Bitcoin falls 7% to $35431.15 - Reuters",
    description: "Bitcoin dropped 7% to $35,431.15 at 20:02 GMT on Friday, losing $2,666.53 from its previous close.",
    url: "https://www.reuters.com/business/bitcoin-falls-7-3543115-2021-06-18/",
    urlToImage:
      "https://www.reuters.com/resizer/XCjUynQ90pQhadaxKT4lycSjpK4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XXSRKPGSAFPURAJNX2J6JLH4SE.jpg",
    publishedAt: "2021-06-18T20:10:00Z",
    content:
      "June 18 (Reuters) - Bitcoin dropped 7% to $35,431.15 at 20:02 GMT on Friday, losing $2,666.53 from its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, is down 45.4% from … [+295 chars]",
  },
];

class News extends React.Component {
  state = {
    articles: [],
    symbol: "Bitcoin",
    name: "",
  };
  componentDidMount() {
    apiClient.getCoinNews(this.props.symbol).then((res) => {
      let articles = [];
      if (res.data === null) {
        console.log("#24 News.js Error:", res);
        setTimeout(
          apiClient.getCoinNews(this.props.symbol).then((res2) => {
            if (res2.data === null) {
              console.log("#29 News.js Error:", res2);
              articles = dummy;
            } else {
              articles = res2.data.articles;
            }
          }),
          3000
        );
      } else {
        articles = res.data.articles;
      }

      this.setState({
        articles: articles,
        symbol: "Bitcoin",
        name: "Bitcoin",
      });
      console.log("#299 State:", this.state.articles);
    });
  }

  render() {
    const newsItems = this.state.articles.map((article, idx) => (
      <Article
        source={article.source.name}
        headline={article.title}
        url={article.url}
        urlToImage={article.urlToImage}
        publishedAt={article.publishedAt}
        key={idx}
      />
    ));
    return <div>{newsItems}</div>;
  }
}

export default News;

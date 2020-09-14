const express = require('express');
const router = express.Router();
const topStories = require('../models/top-stories-model');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('6ff0398454074a969183758dbd1b62cc');


router.get('/top-stories', (req, res) => {
    let data;
    let param
    if(req.query !== {}) {
      param = {
        sources: req.query.channels,
        // q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us'
      }
    } else {
      param = {
        sources: req.query.channels,
        // q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us'
      }
    }
  
    newsapi.v2.topHeadlines(param).then(response => {
        console.log(response);
        data = response;
        res.status(200).json(response);
      });
});

// router.get('/news/', (req, res) => {
 
//   newsapi.v2.sources({
//     category: 'technology',
//     language: 'en',
//     country: 'us'
//   }).then(response => {
//     console.log(response);
//   });
// });

router.get('/news/', (req, res) => {
  let param = req.query;
  console.log(param);
  let data = {
    q: param.term,
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk,techcrunch.com',
    // from: '2017-12-01',
    // to: '2017-12-12',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  }
  newsapi.v2.everything(data).then(response => {
    console.log(response);
    res.status(200).json(response);
  });
});

module.exports = router;
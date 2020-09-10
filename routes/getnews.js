const express = require('express');
const router = express.Router();
const topStories = require('../models/top-stories-model');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('6ff0398454074a969183758dbd1b62cc');


router.get('/top-stories', (req, res) => {
    let data;
    newsapi.v2.topHeadlines({
        sources: 'bbc-news,the-verge',
        // q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us'
      }).then(response => {
        console.log(response);
        data = response;
        res.status(200).json(response);
      });
});

router.get('/news/:term', (req, res) => {

});

router.get('/news', (req, res) => {

});
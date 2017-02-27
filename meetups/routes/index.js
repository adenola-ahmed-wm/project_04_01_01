var express = require('express');
var router = express.Router();
var appdata = require('../public/data.json');

/* get home page */
router.get('/', function(req, res, next) {
  var myArtwork = [];
  var myArtists = [];
  myArtists = appdata.speakers;
  appdata.speakers.forEach(function(item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('index', {
    title: 'Home',
    artwork: myArtwork,
    artists: myArtists,
    page: 'home'
  });
});

/* get speakers page */
router.get('/speakers', function(req, res, next) {
  var myArtwork = [];
  var myArtists = [];
  myArtists = appdata.speakers;
  appdata.speakers.forEach(function(item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('speakers', {
    title: 'speakers',
    artwork: myArtwork,
    artists: myArtists,
    page: 'artistList'
  });
});

/* get speakers detail page */
router.get('/speakers/:speakerid', function(req, res, next) {
  var myArtwork = [];
  var myArtists = [];
  appdata.speakers.forEach(function(item) {
    if (item.shortname == req.params.speakerid) {
      myArtists.push(item);
      myArtwork = myArtwork.concat(item.artwork);
    }
  });
  res.render('speakers', {
    title: 'speakers',
    artwork: myArtwork,
    artists: myArtists,
    page: 'artistDetail'
  });
});

module.exports = router;
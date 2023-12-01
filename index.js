const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let versions = {};

// Fungsi untuk mendapatkan semua hits dari semua versi
function getAllHits() {
  let allHits = {
    all_hit: 0,
    total_hit: 0,
    hit_today: 0,
  };

  for (const version in versions) {
    allHits.all_hit += versions[version].total_hit;
    allHits.total_hit += versions[version].total_hit;
    allHits.hit_today += versions[version].hit_today;
  }

  return allHits;
}

// Fungsi untuk membuat database versi baru
function createVersionDatabase(version) {
  versions[version] = {
    total_hit: 0,
    hit_today: 0,
    version: version,
  };
}

// Fungsi untuk menambah total hits
function incrementTotalHits(version) {
  versions[version].total_hit++;
}

// Fungsi untuk menambah hits hari ini
function incrementHitToday(version) {
  versions[version].hit_today++;
}

// Fungsi untuk mendapatkan total hits dari suatu versi
function getTotalHits(version) {
  return versions[version].total_hit;
}

// Fungsi untuk mendapatkan hits hari ini dari suatu versi
function getHitToday(version) {
  return versions[version].hit_today;
}

// Fungsi untuk menjalankan reset hits setiap hari jam 00:00 WIB
cron.schedule('0 0 * * *', () => {
  for (const version in versions) {
    versions[version].hit_today = 0;
  }
  console.log('Reset hits at midnight');
});

app.get('/all-hits', (req, res) => {
  const allHits = getAllHits();
  res.json({
    creator: 'jas kiding',
    status: true,
    message: 'success',
    result: {
      all_hit: allHits.all_hit,
      total_hit: allHits.total_hit,
      hit_today: allHits.hit_today,
      version: '1.0.0', 
    },
  });
});

app.post('/post-version', (req, res) => {
  if (req.method !== 'POST') {
    return res.json({
      creator: 'jas kiding',
      status: false,
      message: 'you must use post method',
      result: {},
    });
  }

  const version = req.body.version;
  if (!versions[version]) {
    createVersionDatabase(version);
  }
  incrementTotalHits(version);
  incrementHitToday(version);
  res.json({
    creator: 'jas kiding',
    status: true,
    message: 'success',
    result: {
      all_hit: getAllHits().all_hit,
      total_hit: getTotalHits(version),
      hit_today: getHitToday(version),
      version: version,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

require('dotenv').config();
const cheerios = require('cheerio');
const getUrls = require('get-urls');
const fetch = require('node-fetch');
const puppeteer = require('puppeteer');

const scrapeImages = async (username) => {
    const browser = await puppeteer.launch({ headless : false });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/accounts/login/');
    await page.setViewport({ width: 1000, height: 500 });
    await page.waitFor(200);
    await page.type('[name="username"]', process.env.INSTA_USERNAME);
    await page.type('[name="password"]', process.env.INSTA_PASSWORD);
    await page.click('[type=submit]');
}
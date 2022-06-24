const { Client } = require("@notionhq/client");
require('dotenv').config();

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.DATABASE_ID;

module.exports = {notion, databaseId};
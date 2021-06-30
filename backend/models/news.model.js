

const NewsAPI = require('newsapi');

const getNews = async (params) => {
    const newsapi = new NewsAPI('f67390ba894b4f219149fa3f738b95d1');
    return await newsapi.v2.topHeadlines(params);    
}


module.exports = {
    getNews
};

module.exports = { 
    DB:process.env.HOST ? process.env.HOST : 'mongodb+srv://admin:learnit123@learnit-sandbox-qxysy.mongodb.net/learnit-react',
    APP_PORT : process.env.APP_PORT ? process.env.APP_PORT : 80,
};
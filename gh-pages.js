const ghpages = require('gh-pages');

ghpages.publish(
    'dist', // path to public directory
    () => {
        console.log('Deploy Complete!')
    }
)
//https://purgecss.com/safelisting.html

module.exports = {
  //content: file and folders to scan
  content: ['index.html', 'js/*.js'],
  //css content to purge
  css: ['css/style.min.css'],
  //css selectors that are safe to leave in the final CSS
  safelist: {
    //css selectors without "." for class or "#" for id
    standard: [
      'fade',
      'show',
    ],
    // safelist selectors and their children based on a regular expression: /tooltip$/
    deep: [],
    //example, selectors such as button.bg-red.nonexistent-class will be left in the final CSS, even if button and nonexistent-class are not found.
    greedy: [],
    //css keyframe names
    keyframes: [],
    //sass variable names
    variables: []
  },
  output: 'css/style.min.css'
};
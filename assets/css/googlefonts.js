  module.exports = (function() {
      var WebFontConfig = {
          google: {
              families: [
                'Flamenco:400,300:latin',
                'Raleway::latin', 
                'Fredericka+the+Great::latin',
                'Poiret+One::latin,latin-ext'
              ]
          }
      };

      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
        })();
  })();

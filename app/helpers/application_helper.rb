module ApplicationHelper
  
  def google_analytics
    if (ENV['RAILS_ENV'] == 'production')
      return javascript_tag("var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-27188871-1']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();");
    end
  end
  
end

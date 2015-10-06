---
layout: post
title:  "Welcome to Jekyll!"
date:   2015-10-03 01:20:39
categories: jekyll update
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

{% highlight javascript %}
function printChars(array) {
    for (var i = 0; i < array.length; ++i) {
        if (isArray(array[i])) {
            printChars(array[i]);
        } else {
            console.log(array[i]);
        }
    }
}

console.log('Random test');

this.functionName();

1234567890

Math.floor(Math.random() * (i + 1));
{% endhighlight %}

{% highlight haskell linenos %}
factorial :: Integer -> Integer
factorial 1 = 1
factorial x = x * factorial(x - 1)
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help

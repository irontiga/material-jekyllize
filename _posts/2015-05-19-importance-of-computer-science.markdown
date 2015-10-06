---
layout: post
title:  "The Importance Of Computer Science"
date:   2015-05-19 01:20:39
categories: computer science
---

So throughout my journey of learning how to program on my own, I've run across a rather peculiar observation. Or maybe it's not so peculiar after all.

From what I've seen, most self-taught programmers, (actually all self-taught programmers I've met so far) have completely neglected to look into computer science. At first I didn't immediately realize how important it was, but after trying to actually delve more into it, I then noticed how important certain aspects of computer science are. Who wouldn't want a programmer that happens to know the cost associated with every line of code he writes? Just about every line of code or algorithm will have a performance cost attached to it.

There are two things we must always keep in mind when writing our code, and those are:

> Time Complexity: Otherwise known as Runtime. How much time would it take this code to execute?
> Space Complexity: Also known as Memory Usage. How many operations will this code perform?

When we talk about Space/Time complexity, we usually talk about what the worst case scenario would be. Most attention is paid to the upper-bound costs associated with the algorithm.

Computer scientists use Asymptotic Notation to quantify the time and space requirement for an algorithm with an increasingly large input. Now, you could write up a program to solve the given problem and see how long it takes to run on different inputs, but there are several problems with this approach. First, the amount of time it takes to run would depend on the processing power of your computer, what other programs you currently have open, the programming language, compiler, and just a whole ton of other stuff which makes it a very inaccurate strategy. Also, we want a basic idea of how the runtime scales with ever-increasing inputs without having to limit ourselves to just a few results on a chart. The study of asymptotic analysis solves these problems. The graph below shows a comparison of different asymptotic growth rates:

![Time-Complexity][pic1]

With that in mind, if you're one of those autodidacts trying to learn how to program on your own (like me) to get a job, you'd probably be well off in trying to invest your time into learning these concepts to produce more cost-efficient code. It still surprises me that many self-taught programmers avoid this, but perhaps the answer to that lies in how complex these topics can get. Not everyone has fun with math, and that's alright. When I first started learning these things, looking at all the math symbols felt like I was staring at hieroglyphs. But with perserverance, I managed to pull through and make the best of it. In the end, having a solid knowledge of these things could save the company you're working for (or your startup) untold amounts of money. 

When you're dealing with hundreds of thousands, or even millions of visitors, strategies you learn from computer science for squeezing out efficiency make all the difference in the world. As for whether or not you should go to college for this, is another topic which I won't touch. The return on investment for where you study and how much you pay for it, is highly subjective. But the knowledge and skill itself, is beyond a doubt, important to have. Below are links to videos/books/articles that I really recommend to anyone looking to get started and are the ones I've personally gone through myself:

`YouTube:` [Asymptotic Notation][y1]

`YouTube:` [Complexity: Log, Linear, Quadratic, & Exponential Algorithms][y2]

`YouTube:` [Big-Oh, Omega and Theta notation][y3]

`YouTube:` [Computational Complexity][y4]

`Lecture:` [Computer Science 101][l1]

`Lecture:` [Algorithms: Design and Analysis - Part I][l2]

`Lecture:` [Algorithms: Design and Analysis - Part II][l3]

`Lecture:` [Algorithms: Part I][l4]

`Lecture:` [Algorithms: Part II][l5]

`Reading:` [Introduction to Algorithms, 3rd Edition][r1]

`Article:` [Calculating Time Complexity of Algorithms][a1]

`Article:` [Table of Common Time Complexities][a2]

`Article:` [List of Fundamentals of Algorithms][a3]


I'll try adding more to this list as I continue learning more, especially articles that simplify this and other books I come across. So stay tuned for more updates! 

[y1]: https://www.youtube.com/watch?v=iOq5kSKqeR4
[y2]: https://www.youtube.com/watch?v=ewd7Lf2dr5Q
[y3]: https://www.youtube.com/watch?v=pe250F4ttmE
[y4]: https://www.youtube.com/watch?v=moPtwq_cVH8
[l1]: https://www.coursera.org/course/cs101
[l2]: https://www.coursera.org/course/algo
[l3]: https://www.coursera.org/course/algo2
[l4]: https://www.coursera.org/course/algs4partI
[l5]: https://www.coursera.org/course/algs4partII
[r1]: http://www.amazon.com/Introduction-Algorithms-Edition-Thomas-Cormen/dp/0262033844
[a1]: http://www.quora.com/What-are-some-easy-ways-to-understand-and-calculate-the-time-complexity-of-algorithms/answer/Aditya-Joshi-5
[a2]: http://en.wikipedia.org/wiki/Time_complexity#Table_of_common_time_complexities
[a3]: http://www.geeksforgeeks.org/fundamentals-of-algorithms/
[pic1]: /time-complexity.jpg

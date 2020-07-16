# hangman\_mvp

This is a minimum viable product for [Hangman][1] written as an interview
exercise.

# Usage

Open `hangman.html` in any modern web browser. If my design is acceptable, it
should be easy enough to figure out what to do from there. Otherwise, to start
a game, click the "Start new game." button at the bottom of the page. During
the game the page will respond to key presses and register those presses as
your letter guesses.

# Future Direction

None, technically, as the MVP is the final product in this case, but let's
play into the fiction that this is a MVP for some real game we would want
people to pay for.

Most glaring is my "programmer art" used for the gallows and the overall
blandness of the page. An artist should be commissioned to draw a more
appealing gallows and other assets. Several UI passes need to be performed to
build up an aesthetic.

While I am relatively happy with the UX of this MVP, I am not a trained UX
expert. Someone with more experience should be consulted.

I would like this game to support words with spaces or punctuation in them.
Words like "United States" should be valid according to the rules of the game
in the text at the top of the page, but the word display functionality does not
yet handle these spaces correctly. I would like to see spaces and punctuation
be displayed from the start of the game without an underline beneath them. I
predict that this feature would require a simple modification to
`Game.updateWordDisplay()` and a new CSS style for an un-underlined version of
`.guessed-letter`.

# Language Choice

I chose JavaScript to write this game for three main reasons.

First, portability. Because this is an interview exercise, I want to ensure the
maximum likelihood that the reviewer of this exercise can run it. Because
JavaScript runs in a web browser, if I write reasonably basic JavaScript, the
reviewer should be able to run it regardless of the operating system they are
using.

Second, graphics. When trying to figure out what the MVP should look like, I
had considered a console application written in C# or Python. After some
thought, I concluded that I wanted this MVP to display a graphical gallows, and
while ASCII art was an option in a console app, it wouldn't be too hard to draw
the gallows graphically. JavaScript came to mind as a language that could
rather easily display images when paired with HTML.

Finally, display of ability. I have little to no professional experience with
HTML, CSS, or JavaScript, but I do have some hobbyist experience. By
implementing this exercise using these three technologies I hope to prove that
I am competent with them.

[1]: https://en.wikipedia.org/wiki/Hangman_(game)

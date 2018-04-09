## Objectives

1. Explore the Entity-Component-System in steps

## Overview

We are going to build a simple world step by step, adding complexity as we go. While we provide code examples, you should feel free (and are encouraged to) experiment as we go. Consider using different primitives (i.e. an `<a-octahedron>` instead of an `<a-sphere>`) and/or components as we progress. After all, this is your world!

We will be building off of the provided `index.html` file, and start writing our own functionality in with `index.js`. You will see that both the `a-frame` library, as well as our `index.js` script, have already been included in the `html`.

## Entity

- make sphere viewing it and add texture
- why is it all black? we have lights disabled! let's add an ambient light so everything is generally lit, without a specific source of the light (uncomment light line in html)
- make light sources inside spheres

- write function to make many spheres
- move inside it oops cant see on to component

## Component

- change the painting to the inside
- we have actually been working with components already. remember what we defined components as "quote". well, all of the attributes in the html are components!
- add a bounding component to the sphere?
- send one ball to reflect?

## System

- balls moving based on some type of gravity thing
- or the game itself spawns balls and avoid them



### Part 1: Do Some Stuff

## Resources

* [Stack Exchange](http://www.stackexchange.com) - [Some Question on Stack Exchange](http://www.stackexchange.com/questions/123)

<p class='util--hide'>View <a href='https://learn.co/lessons/entity-component-system'>Entity Component System</a> on Learn.co and start learning to code for free.</p>

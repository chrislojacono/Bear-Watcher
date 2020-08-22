# Bear-Watcher

The goal was to build a single page app that people tracking bears can use to store information about the bears they see and keep a tally of how many fish they had attempted to catch, and how many they have actually caught, and timestamps of when the most recent attempt/catch was.

## The Motivation
The point of this assignment was to test our ability on using jQuery and modules in a program instead of running everything out of a single JS page like we had done in the past.

## Build Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/9bced2aa-39f6-4823-8e2c-894fc9e12bb2/deploy-status)](https://app.netlify.com/sites/bear-watcher/deploys)

## Code Style 
We used Vanilla Javascript ES6, JQuery, HTML5, CSS3 and Modules

## Screenshots
![Screen Shot 2020-08-22 at 2 13 48 PM](https://user-images.githubusercontent.com/66916708/90964048-e198f280-e482-11ea-809c-f42ae591785b.png)

## Framework
Javascript

## Features
The user has the ability to add Bears to the DOM and manipulate how many fish they have caught and how many attempts have been made

## Code Example 
```const dateTime = () =>{
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return today + time
  }
  const timeEvent = (array, index)  =>{
    $(`#attempted-${index}`).on('click', ()=> { 
        bearsArray[index].dateTime = dateTime()
        bearsArray[index].attempted++
        $(`#timeStamp-${index}`).html(`${dateTime()}`)
        $(`attempt-${index}`).html(`${bearsArray[index].attempted}`)
        makeRiver(array[index])
  })
  $(`#caught-${index}`).on('click', ()=> {
    bearsArray[index].dateTime = dateTime()
    bearsArray[index].total++ 
    $(`#timeStamp-${index}`).html(`${dateTime()}`)
    $(`#totalCount-${index}`).html(`${bearsArray[index].total}`)
    makeRiver(array[index])
  
  })
  }
  ```
  ## Site deployed
  https://bear-watcher.netlify.app/

# Angular GDD

A simple tool for crafting game design documents written in AngularJS.

This is a bit of a rework, from scratch of [https://github.com/omgaz/ags-gdd](https://github.com/omgaz/ags-gdd)

## Demo

Deployed to Heroku at: [http://angular-gdd.herokuapp.com/](http://angular-gdd.herokuapp.com/)

## Installation

clone from git

	git clone https://github.com/omgaz/AngularGDD.git

install packages

	cd AngularGDD
	npm install

run grunt (concat and minify js into client/app dir)

	grunt

start server for development

	grunt server watch

start server for production

	npm start

## Code

Code is in the `src` directory.

Run `grunt` to concat and minify (src compilation directory is `client/app`).

## API

get characters
	
	get /api/characters

## version 0.0.2

 - static json files for content

## next steps

 - oauth
 - firebase
 - bower
 - karma
 - protractor
 - migrate css to scss
 - migrate js to coffeescript (or typescript)
 - create new characters (start with just local storage for now then maybe an AWS db)

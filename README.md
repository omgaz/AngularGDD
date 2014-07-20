# Angular GDD

A simple tool for crafting game design documents written in AngularJS.

## Installation

clone from git

	git clone https://github.com/omgaz/AngularGDD.git

install packages

	cd AngularGDD
	npm install

run grunt (concat and minify js into client/app dir)

	grunt

start server

	node ./server/web-server

## Code

Code is in the `src` directory.

Run `grunt` to concat and minify (src compilation directory is `client/app`).

## API

get characters
	
	get /api/characters

## version 0.0.1

 - static json files for content

## next steps

 - migrate css to scss
 - migrate js to coffeescript (or typescript)
 - handle route navigation
 - create new characters (start with just local storage for now then maybe an AWS db)
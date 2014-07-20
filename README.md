# Angular GDD

A simple tool for crafting game design documents written in AngularJS.

## version 0.0.1

 - static json files for content

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

## Writing code

Code base is in the src folder. Edit files in here, the run the Grunt command to compile it to your client.

## Usage

get characters
	
	get /api/characters
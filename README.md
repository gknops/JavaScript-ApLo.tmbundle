# Introduction

`JavaScript-ApLo.tmbundle` provides support for [JSHint](https://github.com/gknops/jshint) and [JSLint](https://github.com/douglascrockford/JSLint). It requires [`ApLo.tmbundle`](https://github.com/gknops/aplo.tmbundle).

![JavaScript Syntax Check](https://github.com/gknops/JavaScript-ApLo.tmbundle/raw/master/JavaScriptSyntaxCheck.png)

By default JSHint checks is tied to `callback.document.did-save` semantic class and the `source.js` scope, so it will check any JavaScript file on save. To use JSLint instead, delete that semantic class in teh JSHint command and add it to the JSLint command.

**NOTE**: this bundle does NOT replace the standard JavaScript bundle, you still need that for the language definition etc.


# Installation

Open a terminal window and enter these commands:

	cd ~/Library/Application\ Support/Avian/Bundles
	git clone --recursive git://github.com/gknops/JavaScript-ApLo.tmbundle.git


# .tm_properties variables

You can control some functions of this plugin by defining variables in a `.tm_properties` file, either in your home directory, the project directory or anywhere else `.tm_properties` files are allowed at.


## APLO\_JSHINT\_OPTIONS

Sets the options used when JSLint runs. See <http://www.jshint.com/options/> for available options. By default all enforcing options are enabled, and all relaxing options are disabled. To change options, you can add them to any `.tm_properties` along the path of the source file. For example I use this in `~/.tm_properties`:

	APLO_JSHINT_OPTIONS		= "plusplus: false"


## APLO\_JSLINT\_OPTIONS

Sets the options used when JSLint runs. See <http://www.JSLint.com/lint.html#options> for available options. The default is

	APLO_JSLINT_OPTIONS="devel: true, browser: true, white: true, onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4"


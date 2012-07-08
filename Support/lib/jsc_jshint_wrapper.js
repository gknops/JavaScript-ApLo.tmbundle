/*

This script is just a wrapper around jshint, intended to be invoked by jsc.
The script is depending on jshint, which means jshint has to be loaded before this script.

*/
/*global JSHINT, print, quit, arguments */

(function(source,optionsString) {
	if(typeof JSHINT === 'undefined')
	{
		print('ERROR: JSHINT does not appear to be properly loaded.');
		quit();
	}
	
	if(!source)
	{
		print('ERROR: no source file.');
		quit();
	}
	
	var jsHintOptions={};
	
	eval(optionsString);
	
	var result=JSHINT(source,jsHintOptions);
	
	if(result)
	{
		print('Syntax OK');
	}
	else
	{
		var errors=JSHINT.data().errors;
		var numErrors=errors.length;
		var i;
		
		for(i=0;i<numErrors;i++)
		{
			var error=errors[i];
			if(error)
			{
				print(''+error.line+':'+error.character+': '+error.reason);
			}
		}
	}
	quit();
}(arguments[0],arguments[1]));

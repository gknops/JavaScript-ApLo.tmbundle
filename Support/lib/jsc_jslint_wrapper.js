/*

Based on https://gist.github.com/2064959, original comment:

This script is just a wrapper around Douglas Crockfords jslint, intended to be invoked by jsc.
The script is depending on jslint, which means jslint has to be loaded before this script.

*/
/*global JSLINT, print, quit, arguments */	
(function(source) {
	if(typeof JSLINT === 'undefined')
	{
		print('ERROR: JSLINT does not appear to be properly loaded.');
		quit();
	}
	
	if(!source)
	{
		print('ERROR: no source file.');
		quit();
	}
	
	var 
		// Options from www.jslint.com when using "The good parts" 
		goodPartsOptions={
			devel: true,
			browser: true,
			white: true,
			onevar: true,
			undef: true,
			newcap: true,
			nomen: true,
			regexp: true,
			plusplus: true,
			bitwise: true,
			maxerr: 50,
			indent: 4
		},					
	    result=JSLINT(source,goodPartsOptions);
	
	if(result)
	{
		print('Syntax OK');
	}
	else
	{
		var errors=JSLINT.data().errors;
		var numErrors=errors.length;
		var i;
		
		for(i=0;i<numErrors;i++)
		{
			var error=errors[i];
			if(error)
			{
				print(' '+error.line+':'+error.character+': '+error.reason);
			}
		}
	}
	quit();
}(arguments[0]));

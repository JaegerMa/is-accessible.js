'use strict';

const fs = require('fs');

function isAccessible(path, mode, callback)
{
	if(!callback && mode && typeof(mode) === 'function')
	{
		callback = mode;
		mode = null;
	}
	let promise = new Promise((resolve, reject) =>
	{
		fs.access(path, getMode(mode), (err) =>
		{
			resolve(!err);
		});
	});

	if(callback)
		promise.then(callback);
	else
		return promise;
}
isAccessible.sync = function(path, mode)
{
	try
	{
		fs.accessSync(path, getMode(mode));
		return true;
	}
	catch(x)
	{
		return false;
	}
}

function getMode(modeStr)
{
	let mode = fs.constants.F_OK;

	if(!modeStr || typeof(modeStr) !== 'string')
		return mode;
	
	if(modeStr.includes('r'))
		mode |= fs.constants.R_OK;
	if(modeStr.includes('w'))
		mode |= fs.constants.W_OK;
	if(modeStr.includes('x'))
		mode |= fs.constants.X_OK;
	
	return mode;
}

module.exports = isAccessible;
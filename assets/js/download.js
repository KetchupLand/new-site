
var platforms = [ 'windows', 'linux', 'android', 'minetest' ];
var platformsLength = platforms.length;

// By default the platform select is hidden and the headers are shown, to appease people with Javascript disabled.
document.getElementById('platform-select').style.display = 'block';
for (var i = 0; i < platformsLength; i++) {
	var platform = platforms[i];
	document.getElementById('platform-'+platform).style.display = 'none';
}

function showPlatform(selPlatform) {
	for (var i = 0; i < platformsLength; i++) {
		var platform = platforms[i];
		var elBlock = document.getElementById('platform-'+platform);
		var elBtn = document.getElementById('button-'+platform);
		if (selPlatform == platform) {
			elBtn.disabled = true;
			elBlock.style.display = 'block';
		} else {
			elBtn.disabled = false;
			elBlock.style.display = 'none';
		}
	}

	document.getElementById('platform-'+selPlatform).scrollIntoView();
}

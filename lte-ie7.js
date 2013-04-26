/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'JS_icons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-up' : '&#x4e;',
			'icon-twitter' : '&#x74;',
			'icon-star' : '&#x73;',
			'icon-post' : '&#x70;',
			'icon-plus' : '&#x3d;',
			'icon-minus' : '&#x2d;',
			'icon-foward' : '&#x6e;',
			'icon-facebook' : '&#x66;',
			'icon-edit' : '&#x65;',
			'icon-download' : '&#x64;',
			'icon-down' : '&#x42;',
			'icon-back' : '&#x62;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};
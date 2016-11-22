function getYear() {
	var now = new Date();
	var year = now.getYear();
	return (year < 2000) ? year+1900 : year;
}
document.write('<div id="copyRight">');
document.write('<address>Copyright (C) 2001-');
document.write(getYear());
document.write(' NetMile, Inc. All Rights Reserved.</address>');
document.write('</div>');
document.close();
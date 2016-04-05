//Strings metods

//ES5
.charAt()-връща символ
.charCodeAt() - въръща Unicode номер за ES5
.sort() - сортира даден string
.indexOf() -връща първия индекс в който е намерен даден елемент елемент, или -1 ако не е намерен
.map() - връща нов масив с резултатите от условието на функцията за всеки елемент от масива
.trim() - премахва празното пространство между strings
.test() - търси съвпадения в string, връща true или false
.match()- извлича съвпадения в string с изполване на регулярен израз
.toString() - връща string, предсатвляващ определен обект
.toFixed(2)-форматира номер след десетичната запетая

//ES6
.codePointAt() - връща Unicode номер за ES6, съответства на charCodeAt()
String.fromCodePoint() - връща символ по даден Unicode номер
.normalize() - ("NFC"),("NFD"),("NFKC"),("NFKD")- нормализира Unicode формите
.includes() - връща true, ако даден текст е намерен в рамките на даден string и false ако не е намерен
.statrWith() -връща true, ако даден текст е намерен в началото на даден string и false ако не е намерен
.repeat() - връща оригиналния string повторен определен брой пъти
.exec() - търси за съвпадения в string, връща съвпадащия текст или 0, ако не е намерен
.source - връща оригиналния string
.flags- връща флаговете в регулярния израз
``- template literal- вкючва многоредови strings
${ }-template literal- заместване
String.raw - връща необработената string форма на template literal

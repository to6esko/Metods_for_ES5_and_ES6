//Strings
//ES5
.charAt()-връща символ
.charCodeAt() - въръща Unicode номер за ES5
.sort() - сортира даден string, масив и го връща
.indexOf() -връща първия индекс в който е намерен даден елемент елемент, или -1 ако не е намерен
.map() - връща нов масив с резултатите от условието на функцията за всеки елемент от масива
.trim() - премахва празното пространство между strings
.test() - търси съвпадения в string, връща true или false
.match()- извлича съвпадения в string с изполване на регулярен израз
.toString() - връща string, предсатвляващ определен обект
.toFixed(2)-форматира номер след десетичната запетая
instanceof- проверява дали прототипа на обкета е обвързан с прототипа на конструктора
.replace()-връща нов string със замененото съвпадение - .replaceAll()
.search()-търси за съвпадения между регулярен израз и string
.split()-разделя string в масив от substrings
.concat()-съединява два или повече strings и връща нов string

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
`${ }`-template literal- заместване
String.raw - връща необработената string форма на template literal




//Function
//ES5
.bind()-създава нова функция,като свързва this с определена последователност от аргументи //bind(this)
.call()-извиква функция с дадена this стойност и аргументи, представени по отделно
.apply()-извиква функция с дадена this стойност и аргументи, представени като масив
.reduce()-прилага функция върху всяка стойност в масив от ляво на дясно, за да сведе масива до една единствена стойност

//ES6
rest / spread - (...) - позволява представяне на неограничен брой аргументи, като масив //(object, ...keys)

//Object
//ES5
JSON.stringify()-конвертира JS стойности в JSON string
Object.create()-създава нов обект с указания прототип обект и свойства
Object.getPrototypeOf()-извлича прототипа на даден обект
Object.defineProperty(obj,prop,descriptor)-дефинира ново или променя свойство в обект и се връща на обекта //Object.defineProperties(obj,props)
Object.getOwnPropertyNames()-връща масив с всички открити свойства в даден обект


//ES6
Object.is()-определя дали две стойности са една и съща стойност
Object.assign()-копира стойностите на всички собствени свойства от един или повече обекти към целевия обект.
Object.keys()-връща масив със собствени номерирани свойства от даден обект в същия ред, по който се обработват от for-in цикъл
Object.setPrototypeOf()-променя прототипа на даден обект
super- изполва се за извикване на функции от обекта родител
super.prop and super[expr]-са валидни за всеки метод дфиниция в класове и обект литерали




//Symbols
Symbol()-уникален и неизменен вид данни,които се използват за идентификатор на обектни свойства.
Symbol.for("key")-създава символ в глобалния регистър за споделяне на символи
Symbol.keyFor(key)-извлича ключа на споделен символ от глобалния регистър за символи
Object.getOwnPropertySymbols(obj)-връща масив с всички открити символни свойства в даден обект
Symbol.hasInstance()-използва се от instanceof за да определи наследството на даден обект
Symbol.isConcatSpreadable()- булева стойност, показваща дали употребата на Array.prototype.concat() ще изглади елементите на колекцията.
Symbol.iterator - метод, който връща iterator за даден обект, използва се с for of.
Symbol.match - метод използван от String.prototype.match() за сравняване на strings.
Symbol.replace - метод използван от String.prototype.replace() за заместване на съвпадащи substrings.
Symbol.search - метод използван от String.prototype.search() за намиране на substrings.
Symbol.species - функция конструктор от която са направени извлечените обекти
Symbol.split - метод използван от String.prototype.split() за разделяне на strings.
Symbol.toPrimitive -конвентира обект към примитивна стойност.
Symbol.toStringTag - string използван от Object.prototype.toString() за създаване на описание на обект.
Symbol.unscopables - обект, чиито свойства са имената на свойствата на обекта, които не трябва да бъдат включени в обект декларацията и изключени от околната среда.




//Array
.values()-връща нов масив итератор обект, който съдържа стойности за всеки индекс в масива
forEach()-извиква подадената функция последоватлено поведнъж за всеки елемент в масива.



//Set
let mySet = new Set();
Set()-обект, който позволява съхраняване на уникални стойности от всякакъв тип
mySet.add()-добавя нов елемент с определена стойност в края на Set object
mySet.has()-връща булева стойност посочваща дали съществува даден елемент с определена стойност в Set object
mySet.delete()-премахва определен елемент от Set object
mySet.clear()-премахва всички елементи от Set object
mySet.size()-показва броя на елементите в Set object
mySet.forEach(function(value,key,ownerSet){console.log(key+" "+value)});
spread- array = [...mySet]; - конвертиране в масив

//Maps
let myMaps = new Maps();
Maps()-списък от ключ/стойности,където ключа и стойноста могат да бъдат от всякакъв тип
myMaps.set(key,value);-подавне на ключ за осоцииране със стойноста със .set
myMaps.get(key);-извличане на стойноста, чрез подаване на ключа към .get
myMaps.has(key)-показва дали даден ключ съществува в Map object 
myMaps.delete(key)-прeмахва ключ и свързаната стойност към него от Map object
myMaps.clear()-премахва всички елементи от Map object
myMaps.size()-показва колко ключ/стойности има в един Map object


//Iterator
//ES5
.entries()-връща итератор,чиито стойности са ключ/стойност
.values()-връща итератор,чиито стойности са стойностите в колекцията
.keys()връща итератор, чиито стойности са ключовете в колекцията
.next()-връща обект с две свойства value и done - {value:1,done:false}
for (let value of iterable){statement}-
//Generator
function * createIterator(){yield 1; yield 2;};
let iterator=createIterator();
console.log(iterator.next()); //{value:1,done:false}
console.log(iterator.next()); //{value:2,done:false}
console.log(iterator.next()); //{value:undefined,done:true}
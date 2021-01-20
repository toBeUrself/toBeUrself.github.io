(function () {
  window.questions = [
  {
    "index": 1,
    "title": "1. JS中7中基本的数据类型",
    "content": "* `Number`\n* `String`\n* `Boolean`\n* `Null`\n* `Undefined`\n* `Symbol`: ES6添加，代表创建后独一无二且不可变的数据类型。\n* `BigInt`: ES10添加，是一种数字类型的数据，它可以表示任意精度格式的整数，使用BigInt可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。"
  },
  {
    "index": 2,
    "title": "2. 堆和栈的区别",
    "content": "> JS中有两种类型的值，基本类型和引用类型，分别存放在栈和堆中。\n* 在数据结构中，栈中数据的存取方式是先进先出。而堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。完全二叉树是堆的一种实现方式。\n* 在操作系统中，内存被分为栈区和堆区。\n* 栈区内存由编译器自动分配释放，内存函数的参数值，局部变量的值等。\n* 堆区内存一般由程序员分配释放，若程序员不释放，程序结束后由垃圾回收机制回收。\n* 栈的大小一般是2M，堆的大小和系统虚拟内存有关，一般是4G？\n* 栈是由系统自动分配，速度较快。但程序员无法控制。\n* 堆是由new分配的内存，一般速度比较慢，而且容易产生内存碎片，不过用起来很方便。"
  },
  {
    "index": 3,
    "title": "3. 内部属性 [[Class]] 是什么",
    "content": "* **对象的`[[class]]`属性**：所有`typeof`返回值为“object”的对象（如数组）都包含一个内部属性`[[class]]`，可以把它看作内部的一个分类，这个属性无法直接访问，一般通过`Object.prototype.toString(..)`来查看。\n\n例如：Object.prototype.toString.call([1, 2, 3]) // \"[object Array]\"\n\n* **基本类型值的`[[class]]`属性**：基本类型值被各自的封装对象自动包装，所以他们的内部`[[class]]`属性分别为“String”，“Number”和“Boolean”。\n* **封装对象**：由于基本类型值没有.length和.toString()这样的属性和方法，需要通过封装对象才能访问，此时Javascript引擎会自动为基本类型值包装一个封装对象。\n\n例如字符串：`'abc'.length // 3`\n\n* **拆封**：如果想要得到封装对象中的基本类型值，可以使用`valueOf()`函数。\n\n```javascript\n//封装对象的拆封\nvar s = new String( \"abc\" );\nvar n = new Number( 42 );\nvar b = new Boolean( true );\n\nconsole.log(s.valueOf());\nconsole.log(n.valueOf());\nconsole.log(b.valueOf());\n```"
  },
  {
    "index": 4,
    "title": "4. 介绍js有哪些内置对象",
    "content": "* 与宿主无关，独立于宿主环境的ECMASript实现提供的对象：\n\n\tObject、Array、Date、Error、RegExp、Function、Boolean、Number、String、JSON、Math、Promise、WebAssembly、Generator等。\n\n* 宿主对象：\n\n\tWindow和Document等。"
  },
  {
    "index": 5,
    "title": "5. undefined 和 undeclared 的区别？",
    "content": "* 已在作用域中声明但还没有赋值的变量，是`undefined`的。\n* 相反，还没有在作用域中声明过的变量，是`undeclared`的。\n\n* 对于`undeclared`变量的引用，浏览器会报引用错误，如`ReferenceError: b is not defined`。\n* 但是我们可以使用`typeof`的安全机制来避免报错，因为对于`undeclared`（或者 not defined）变量，typeof 会返回`undefined`。\n\n* 在ECMAScript2015前，使用`typeof`永远不会抛出错误。\n\n* 但在加入了块级作用域的 let 和 const 之后，在其被声明之前对块中的 let 和 const 变量使用`typeof`会抛出一个 ReferenceError。\n\n* 块级作用域变量在块的头部处于\"暂存死区\"，直至其被初始化，在这期间，访问变量将会引发错误。"
  },
  {
    "index": 6,
    "title": "6. null 和 undefined 的区别？",
    "content": "* 首先`Null`和`Undefined`都是基本数据类型，这两个基本数据类型分别都只有一个值，就是`undefined`和`null`。\n* `undefined` 代表含义是未定义\n* `null` 代表的含义是空对象。\n* `typeof null` 会返回 'object'，这是一个历史遗留问题：\n\n    在JS最初的实现中，JS中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0，由于 null 代表的是空指针（大多数平台下值为 0x00），因此 null 的类型标签是 0， typeof null也因此返回 'object'。\n\n* 当用双等号`==`对两种类型的值进行比较时会返回 true，使用三个等号`===`时会返回 false。"
  },
  {
    "index": 7,
    "title": "7. 如何获取安全的 undefined 值？",
    "content": "> 该问题在ES5后已被修复\n\n* 因为 `undefined` 是一个表示符，所以可以被当作变量来使用和赋值，但是这样会影响 `undefined` 的正常判断。\n* 表达式 `void 表达式` 没有返回值，因此返回结果是 undefined 。 void 并不改变表达式结果，只是让表达式不返回值。\n* 按惯例我们用 `void 0` 来获得 undefined 。\n\n* undefined/NaN/Infinity是全局属性，这些属性是不可写（writable:false）的，也就是说在全局作用域内不能重新赋值（赋值无效，不会报错）。\n* null是一个JavaScript字面量（而不是全局对象的一个属性），不能对其赋值。\n\n* 在ES3中，有一个bug，undefined是一个可读可写的变量，可以给他赋任意值，但到了ES5就被修复了，他是一个只读的值，所以虽然没有报错，但是赋值语句是没有效果的。"
  },
  {
    "index": 8,
    "title": "8. 说几条JS的基本规范？",
    "content": "* 代码规范通常包括以下几个方面：\n    变量和函数的命名规则。\n    空格、缩进、注释的使用规则。\n    其他常用规范。\n\n* 变量驼峰命名\n* 运算法（=+-*/）前后需要添加空格\n* 代码缩进\n* 将左花括号放在第一行的结尾。\n* 将右花括号独立放在一行\n* 尽量使用 ‘===’，‘!==’ 代替 ‘==’ ， ‘!=‘"
  },
  {
    "index": 9,
    "title": "9. JS原型，原型链？有什么特点？",
    "content": "* 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 `Object.prototype` 所以这就是我们新建的对象为什么能够使用`toString()` 等方法的原因。\n* 在 js 中，我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 `prototype` 属性值，这个属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。\n* 当我们使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针执行构造函数的 `prototype` 属性对应的值，在 ES5 中这个指针被称为对象的原型。\n* 一般来说我们是不应该能够获取这个值的，但是现在浏览器中都实现了 `__proto__` 属性来让我们访问这个属性，但是我们最好不要使用这个属性，因为它不是规范中规定的。\n* ES5 中新增了一个 `Object.getPrototypeOf()` 方法，我们可以通过这个方法来获取对象的原型。\n* js 获取原型的方法\n\n```javascript\np.__proto__\np.construnctor.prototype\nObject.getPrototypeOf(p)\n```"
  },
  {
    "index": 10,
    "title": "10. 在js中不同进制数字的表示方式",
    "content": "* 以 0X、0x 开头的表示为十六进制\n* 以 0、0O、0o 开头的表示为八进制\n* 以 0B、0b 开头的表示为二进制"
  },
  {
    "index": 11,
    "title": "11. js 中整数的安全范围是多少？",
    "content": "* 安全整数指的是，在这个范围内的整数转化为二进制存储的时候不会出现进度丢失，能够被“安全”呈现的最大整数是`2^53 - 1`，即`9007199254740991`，在ES6中被定义为 `Number.MAX_SAFE_INTEGER`。最小整数是 `-9007199254740991`，在ES6中被定义为\n`Number.MIN_SAFE_INTEGER`。\n* 如果某次计算的结果得到了一个超过JS数值范围的值，那么这个值会被自动转换为特殊的 `Infinity` 值。如果某次计算返回了正或负 `Infinity` 值，那么该值将无法参与下一次的计算。\n* 判断一个值是不是有穷的，可以使用 `isFinite()` 函数来判断。"
  },
  {
    "index": 12,
    "title": "12. typeof NaN 的结果是什么？",
    "content": "* NaN 意指不是一个“数字”(not a number)，NaN 是一个“警戒值”(sentinel value， 有特殊用途的常规值)，用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。\n* `typeof NaN; // \"number\"`\n* NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 === 不成立）的值。而 !== 为true。"
  },
  {
    "index": 13,
    "title": "13. isNaN() 和 Number.isNaN() 函数的区别？",
    "content": "* 函数 `isNaN()` 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的值都会返回 true，因此非数字值传入也会返回 true，\n* 会影响 NaN 的正常判断。\n* 函数 `Number.isNaN()` 会首先判断传入的参数是否为数字，如果是数字再继续判断是否为 NaN，这种方法对于 NaN 的判断更为准确。"
  },
  {
    "index": 14,
    "title": "14. Array 构造函数只有一个参数值时的表现？",
    "content": "* 如果传递给Array构造函数的唯一参数是介于 0 和 232-1（含）之间的整数，这将返回一个新的JavaScript数组，其长度属性设置为该数字（注意：这意味着实现了一个arrayLength空槽的数组，空槽不具有实际未定义值 undefined）。如果参数是任何其他数字，则会抛出一个RangeError异常。\n* 如果传入多个参数，则所有参数都作为新数组的元素。"
  },
  {
    "index": 15,
    "title": "15. 其他值到字符串的转换规则？",
    "content": "* Null、Undefined 类型、Boolean类型，都会转换成本身 `null, undefined, true/false`\n* Number 类型的值直接转换，不过那些极小和极大的数字会使用指数形式\n* Symbol 类型的值直接转换，但是只允许显式强制类型转换，使用隐式强制类型转换会产生错误。\n* 对普通对象来说，调用 `toString()`（Object.prototype.toString()）来返回内部属性`[[Class]]`的值，如\"[object Object]\"。如果对象有自己的 `toString()` 方法，字符串化时就会调用该方法并使用其返回值。\n\n[JavaScript各种转换](https://www.jianshu.com/p/a1b29af6da10)"
  },
  {
    "index": 16,
    "title": "16. 其他值到数字值的转换规则？",
    "content": "* Undefined 类型的值转换为 NaN；Null 类型的值转换为 0；Boolean 类型的值，true 转换为 1，false 转换为 0。\n* String 类型的值转换如同使用 `Number()` 函数进行转换，如果包含非数字值则转换为 NaN，空字符串为 0。\n* Symbol 类型的值不能转换为数字，会报错。\n* 对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。\n    1. 对象转换成数字类型，首先调用valueOf()方法，有的话就返回基本类型值，如果没有就使用toString()方法，返回结果，如果都没有就报错\n    2. 数组转换成数字类型，的逻辑过程也同上\n\n* 对于字符串还可以使用`parseInt()`和`parseFloat()`等方式获取数字\n\n[JavaScript各种转换](https://www.jianshu.com/p/a1b29af6da10)"
  },
  {
    "index": 17,
    "title": "17. 其他值到布尔类型的值的转换规则？",
    "content": "* 以下值会被转换为false：`false`、`\"\"`、`0`、`NaN`、`null`、`undefined`，其余任何值都会被转换为true。\n\n[JavaScript各种转换](https://www.jianshu.com/p/a1b29af6da10)"
  },
  {
    "index": 18,
    "title": "18. 隐式转换",
    "content": "* JavaScript是弱类型语言，在计算的时候，运算符两边的数据可以不一样，编译器会根据规则自动转成一样的数据类型再计算，这个自动转换的方式就称为隐式转换\n* 能产生隐式转换的操作有：\n    1. 四则运算: +, -, *, /\n    2. 比较运算符: ==, <, >, >=, <=\n    3. 判断语句: if (..) 语句中的条件判断表达式、for ( .. ; .. ; .. ) 语句中的条件判断表达式（第二个）、 while (..) 和 do..。\n    4. while(..) 循环中的条件判断表达式、? : 中的条件判断表达式。\n    5. Native调用: console, alert 输入时会自动转换成 String 类型\n    6. 逻辑非 !，将直接调用 ToBoolean 方法，然后取反返回。\n\n* 大多数情况下都是正常转换的，但也有需要记住的点，具体可参考如下文章。\n\n[JavaScript各种转换](https://www.jianshu.com/p/a1b29af6da10)"
  },
  {
    "index": 19,
    "title": "19. 对象和数组的 valueOf 和 toString 的结果是什么？",
    "content": "* `toString()`和`valueOf()`都是对象的方法。\n* `toString()`方法返回反映这个对象的字符串。\n* `valueOf()`方法如果存在任意原始值，它就默认将对象转换为表示它的原始值；\n* 对象是复合值，而大多数对象无法真正表示为一个原始值，因此默认的valueOf()方法简单地返回对象本身，而不是返回一个原始值。"
  },
  {
    "index": 20,
    "title": "20. 什么是假值对象？",
    "content": "* 在JavaScript中，false、null、0、”“、undefined 和 NaN 被称为假值"
  },
  {
    "index": 21,
    "title": "21. ~ 操作符的作用？",
    "content": "* 取反码，按位取反，~-1 = 0, ~1 = -2, ~0 = -1\n\n```javascript\nif (!~['a', 'b', 'c'].indexOf('d')) { // !~-1 === true\n    console.log('会执行到这里')\n}\n```"
  },
  {
    "index": 22,
    "title": "22. 解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字，它们之间的区别是什么？",
    "content": "* 解析字符串中的数字，如果首字符是数字，就能正常解析数字，直到遇到非数字为止。\n* 强制类型转换，需要字符串都为数字，或者为合法的浮点数。否则返回 NaN。"
  },
  {
    "index": 23,
    "title": "23. 什么情况下会发生布尔值的隐式强制类型转换？",
    "content": "* if (..) 语句中的条件判断表达式。\n* for ( .. ; .. ; .. ) 语句中的条件判断表达式（第二个）。\n* while (..) 和 do..while(..) 循环中的条件判断表达式。\n* ? : 中的条件判断表达式。\n* 逻辑运算符 ||（逻辑或）和 &&（逻辑与）左边的操作数（作为条件判断表达式）。"
  },
  {
    "index": 24,
    "title": "24. Symbol 值的强制类型转换？",
    "content": "* Symbol 作为一个基本类型，不能转换为字符串和Number。"
  },
  {
    "index": 25,
    "title": "25.  == 操作符的强制类型转换规则？",
    "content": "> 操作数1 == 操作数2，  操作数1 === 操作数2\n\n* 比较过程：\n\n* 双等号`==`： \n\n    1. 如果两个值类型相同，再进行三个等号(===)的比较\n\n    2. 如果两个值类型不同，也有可能相等，需根据以下规则进行类型转换在比较：\n\n　　　　1）如果一个是null，一个是undefined，那么相等\n\n　　　　2）如果一个是字符串，一个是数值，把字符串转换成数值之后再进行比较\n\n* 三等号`===`:\n\n    1. 如果类型不同，就一定不相等\n\n    2. 如果两个都是数值，并且是同一个值，那么相等；如果其中至少一个是NaN，那么不相等。（判断一个值是否是NaN，只能使用`isNaN( )` 来判断）\n    \n    3. 如果两个都是字符串，每个位置的字符都一样，那么相等，否则不相等\n\n    4. 如果两个值都是true，或是false，那么相等\n\n    5. 如果两个值都引用同一个对象或是函数，那么相等，否则不相等\n\n    6. 如果两个值都是null，或是undefined，那么相等"
  },
  {
    "index": 26,
    "title": "26. 如何将字符串转化为数字，例如 '12.3b'?",
    "content": "* parseInt、parseFloat，正则替换也可以\n\n```javascript\nfunction getStringofNum(text) {\n    //取出字符串中的数字\n    var value = text.replace(/[^0-9]/ig,\"\");\n    return value;\n}\ngetStringofNum('sdjk_2.4.7') // 247\n```"
  },
  {
    "index": 27,
    "title": "27. 如何将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为『12,000,000.11』?",
    "content": "* 用正则匹配或者遍历"
  },
  {
    "index": 28,
    "title": "28. 如何实现数组的随机排序？",
    "content": "* 主要借助 `Math.random()` 方法.\n\n* 如果用sort来排序，可以在sort的时候和一个值比较，随机返回-1 或 1"
  },
  {
    "index": 29,
    "title": "29. javascript 创建对象的几种方式？",
    "content": "* {} 使用字面量\n* new Ｏbject()\n* 工厂模式\n* 构造函数模式（constructor）\n* 原型模式（prototype）\n* 构造函数+原型模式\n* 还有一些不常用的方式，如动态原型，寄生构造函数，稳妥构造函数。"
  },
  {
    "index": 30,
    "title": "30. JavaScript 继承的几种实现方式？",
    "content": "* 初步有6种，Child.prototype = new Father() 或者 Child.prototype = Father.prototype，\n* 如果需要往父级传递参数，可以在 Child 的构造函数中手动调用 Father 函数。\n\n```javascript\n// 父类\nfunction Animal (type) {\n    this.type = type\n}\nAnimal.prototype.sayType = function () {\n    console.log(this.type)\n}\n\n// 1：原型链继承\n// 核心： 将父类的实例作为子类的原型\nfunction Cat (name) {\n    this.name = name\n}\nCat.prototype = new Animal()\n\nconst cat = new Cat('kitty', 'Cat')\ncat.name // kitty\ncat.type // undefined\ncat.sayType() // undefined\n\n/*\n特点：\n\n    非常纯粹的继承关系，实例是子类的实例，也是父类的实例\n    父类新增原型方法/原型属性，子类都能访问到\n    简单，易于实现\n缺点：\n\n    要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行\n    无法实现多继承\n    来自原型对象的所有属性被所有实例共享（来自原型对象的引用属性是所有实例共享的）（详细请看附录代码： 示例1）\n    创建子类实例时，无法向父类构造函数传参\n    推荐指数：★★（3、4两大致命缺陷）\n*/\n\n// instanceof 运算符用来检测 （某个类）constructor.prototype 是否存在于参数 object 的原型链上。\n\n// 2：构造继承\n// 核心：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）\nfunction Cat (name, type) {\n    Animal.call(this, type)\n    this.name = name\n}\n\nconst cat = new Cat('kitty', 'Cat')\ncat.name // kitty\ncat.type // Cat\ncat.sayType() // TypeError: cat.sayType is not a function\n/*\n特点：\n\n    解决了1中，子类实例共享父类引用属性的问题\n    创建子类实例时，可以向父类传递参数\n    可以实现多继承（call多个父类对象）\n缺点：\n\n    实例并不是父类的实例，只是子类的实例\n    只能继承父类的实例属性和方法，不能继承原型属性/方法\n    无法实现函数复用，每个子类都有父类实例函数的副本，影响性能 // 因为把this传递进去了\n推荐指数：★★（缺点3）\n*/\n\n// 3：实例继承\n// 核心：为父类实例添加新特性，作为子类实例返回\nfunction Cat(name, type) {\n    var instance = new Animal(type)\n    instance.name = name\n    return instance\n}\nvar cat = new Cat('kitty', 'Cat')\ncat.name // kitty\ncat.type // Cat\ncat.sayType() // Cat\n/*\n特点：\n\n    不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果\n缺点：\n\n    实例是父类的实例，不是子类的实例\n    不支持多继承\n    推荐指数：★★\n*/\n// 4：拷贝继承\nfunction Cat(name, type) {\n    var animal = new Animal(type);\n    for(var p in animal){\n        Cat.prototype[p] = animal[p];\n    }\n    animal.name = name\n}\nvar cat = new Cat('kitty', 'Cat')\ncat.name // kitty\ncat.type // Cat\ncat.sayType() // Cat\n/*\n特点：\n\n    支持多继承\n缺点：\n\n    效率较低，内存占用高（因为要拷贝父类的属性）\n    无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）\n推荐指数：★（缺点1\n*/\n// 5：组合继承\n// 核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用\nfunction Cat(name, type) {\n    Animal.call(this, type);\n    this.name = name\n}\nCat.prototype = new Animal()\nCat.prototype.constructor = Cat\n\nvar cat = new Cat('kitty', 'Cat')\ncat.name // kitty\ncat.type // Cat\ncat.sayType() // Cat\n/*\n特点：\n\n    弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法\n    既是子类的实例，也是父类的实例\n    不存在引用属性共享问题\n    可传参\n    函数可复用\n缺点：\n\n    调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）\n推荐指数：★★★★（仅仅多消耗了一点内存）\n*/\n// 6：寄生虫组合继承\n// 核心：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点\nfunction Cat(name, type) {\n    Animal.call(this, type)\n    this.name = name\n}\n;(function () {\n    var Super = function(){}\n    Super.prototype = Animal.prototype\n    //将实例作为子类的原型\n    Cat.prototype = new Super()\n    Cat.prototype.constructor = Cat\n})()\nvar cat = new Cat('kitty', 'Cat')\ncat.name // kitty\ncat.type // Cat\ncat.sayType() // Cat\n/*\n特点：\n\n    堪称完美\n缺点：\n\n    实现较为复杂\n推荐指数：★★★★（实现复杂，扣掉一颗星）\n*/\n```"
  },
  {
    "index": 31,
    "title": "31. 寄生式组合继承的实现？",
    "content": "```javascript\nfunction Father (type) {\n    this.type = type\n}\nFather.prototype.getType = function () { return this.type }\nfunction Child (name, type) {\n    Father.call(this, type)\n    this.name = name\n}\nconst Super = function () {}\nSuper.prototype = Father.prototype\nChild.prototype = new Super()\nChild.prototype.construnctor = Child\nconst instance = new Child('tim', 'Cat')\n```"
  },
  {
    "index": 32,
    "title": "32. Javascript 的作用域链？",
    "content": "* 作用域：在运行时代码中的某些特定部分中的变量，函数和对象的可访问性。\n\n换句话说，作用域决定了代码区块中变量和其他资源的可见性。\n\n全局变量可全局访问，但是如果都放在全局会造成全局命名空间污染，引起命名冲突，也不利于垃圾回收。\n\n* 自由变量：当前作用域没有定义的变量。\n* 作用域链：如果变量在当前作用域没有找到，就去父级作用域寻找，如果父级作用域也没有，就一层一层往上寻找，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是作用域链。\n\n* 看个例子：\n\n```javascript\nvar x = 10\nfunction fn() {\n    console.log(x)\n}\nfunction show(f) {\n    ;(function() {\n        f() // 10， 而不是 20\n    }())\n}\nshow(fn)\n```\n\n```\n解释：在 fn 函数中，取自由变量 x 的值时，要到那个作用域中取？\n要到创建 fn 函数的那个作用域中取，而无论 fn 函数将在哪里调用。\n作用域与执行上下文不是相同的概念：\n    JS 属于解释型语言，执行分为：解释和执行两个阶段\n    解释阶段：\n        词法分析\n        语法分析\n    执行阶段：\n        创建执行上下文\n        执行函数代码\n        垃圾回收\n    JS 解释阶段便会确定作用域规则，因此作用域在函数定义时就已经确定了，而不是在函数调用时确定，但是执行上下文是函数执行之前创建的。执行上下文最明显的就是 this 的指向是执行时确定的。\n作用域访问的变量是编写代码的结构确定的。\n作用域和执行上下文之间最大的区别是：\n    执行上下文在运行时确定，随时可以改变；\n    作用域在定义时就确定，并且不会改变。\n一个作用域下可能包含若干个上下文环境。有可能从来没有过上下文环境（函数从来没有被调用过）；有可能有过，现在函数被调用完毕后，上下文环境被销毁了；有可能同时存在一个或多个（闭包）。同一个作用域下，不同的调用会产生不同的执行上下文环境，继而产生不同的变量的值。\n```"
  },
  {
    "index": 33,
    "title": "33. 谈谈 This 对象的理解。",
    "content": "this 时函数运行时自动生成的一个内部对象，只能在函数内部使用，但总是指向调用它的对象。\n\n* 在全局作用域中调用：\n\n    this指向window，其实在全局作用域中定义的var 变量和函数，都会挂到window对象上作为属性，那么this指向window就很正常了\n    例子：\n\n    ```javascript\n    function a() {\n        function b() {\n            function c() {\n                console.log(this) // window\n            }\n            c()\n        }\n        b()\n    }\n    a()\n    ```\n\n    其实只要不是 obj.sayName() 这样通过.来调用函数，都算是通过window来调用函数，函数里面的this指向window。\n\n* 作为对象方法调用：\n\n    ```javascript\n    var name = 'Jenny'\n    var obj = {\n        name: 'Danny',\n        person: function () {\n            return this.name\n        }\n    }\n    console.log(obj.person()) // Danny\n    ```\n\n    这个例子中，this指向obj\n\n* 作为构造函数调用：\n\n    构造函数使用 `new` 关键字创建一个实例，此时this指向实例对象。（当然前提是构造函数没有手动 return）\n通过 apply() 和 call() 改变调用函数的对象，让函数中的 this 指向调用的第一个参数。"
  },
  {
    "index": 34,
    "title": "34. eval 是做什么的？",
    "content": "这题目的看起来比较简单，但是总感觉没有这么简单，确实是这样子。所以回答这个题目要从不同的角度去回答。\n\n首先要回答清楚它是干什么的有什么用，然后谈谈它对作用域的影响，然后就是执行效率的问题，最后谈谈 eval() 的其他作用。\n\n作用：\n\n    把字符串参数解析成JS代码并运行，并返回执行的结果；\n\n    eval 函数接收一个参数s，如果s不是字符串，则直接返回s，否则执行s语句。\n\n    如果s语句执行结果是一个值，则返回此值，否则返回 undefined.\n\n    `eval('2 + 3')`\n\n    `eval('var age = 10')`\n\neval 的作用域：\n\n    ```javascript\n    function a() {\n        eval('var x = 1')\n        console.log(x) // 1\n    }\n    a()\n    console.log(x) // ReferenceError: x is not defined\n    ```\n\n    说明作用域在它所有的范围内有效\n\n* 安全问题：\n\n    JS中的 eval() 不安全，可能会被利用做XSS攻击（跨站脚本攻击 Cross Site Scripting)，eval 也存在一个安全问题，因为它可以执行传给它的任何字符串，所以永远不要传入来历不明或者不受信任源的参数字符串。\n    \n* 注意事项：\n\n    应该避免使用 eval，不安全，会运行编译器，非常耗性能（2次，一次解析成JS语句，一次执行）\n\n* 实际上，常用的比如 script标签，setTimeout，setInterval，new Function 等都间接调用了 eval 函数。"
  },
  {
    "index": 35,
    "title": "35. 什么是 DOM 和 BOM？",
    "content": "JS 由三部分构成，ECMAScript, DOM 和 BOM，根据宿主（浏览器）的不同，具体的表现形式也不尽相同。\n\nBOM是浏览器对象模型，提供了独立于内容而与浏览器窗口交互的对象。描述了与浏览器进行交互的方法和接口，可以对浏览器窗口进行访问和操作。\n\nDOM是文档对象模型，是针对XML的基于树的API。描述了处理网页内容的方法和接口，是HTML和XML的API，DOM把整个页面规划成由节点层级构成的文档。\n\nBOM的最根本对象是window\n\nDOM最根本的对象是document（实际上是window.document)"
  },
  {
    "index": 36,
    "title": "36. 写一个通用的事件侦听器函数。",
    "content": "事件冒泡机制：当一个元素接收到事件的时候，会把他接收到的所有事件传播给他的父级，一直到顶层window\n\n事件捕获机制：当触发目标元素时，会从目标元素的最顶层的祖先元素事件往下执行到目标元素为止\n\n事件流的三个阶段：事件捕获阶段，处于目标阶段，事件冒泡阶段（无论是冒泡事件还是捕获事件，元素都会先执行捕获阶段）\n\n* 所有事件的顺序是（注意本元素代码的顺序执行）\n\n    其他元素捕获阶段事件->本元素代码顺序事件->其他元素冒泡阶段事件\n\n* 给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？\n\n    执行两次事件，同一个dom元素且这个是目标阶段的元素，按照事件的顺序执行事件--这时候捕获和冒泡无法区分，为事件目标元素了。\n\n```javascript\nvar EventUtil = {\n    // 根据情况分别使用dom2 || IE || dom0方式 来添加事件\n    addHandler: function (element, type, handler) {\n        if (element.addEventListener) {\n            element.addEventListener(type, handler, false)\n        } else if (element.attachEvent) {\n            element.attachEvent('on' + type, handler)\n        } else {\n            element['on' + type] = handler\n        }\n    },\n    removeHandler: function (element, type, handler) {\n        if (element.removeEventListener) {\n            element.removeEventListener(type, handler, false) // false是冒泡，true是捕获\n        } else if (element.detachEvent) {\n            element.detachEvent('on' + type, handler)\n        } else {\n            element['on' + type] = null\n        }\n    },\n    // 根据情况分别获取DOM或者IE中的事件对象，事件目标，阻止事件的默认行为\n    getEvent: function (event) {\n        return event ? event : window.event\n    },\n    getTarget: function (event) {\n        return event.target || event.srcElement\n    },\n    preventDefault: function (event) {\n        if (event.preventDefault) {\n            event.preventDefault()\n        } else {\n            event.returnValue = false\n        }\n    },\n    stopPropagation: function (event) {\n        if (event.stopPropagation) {\n            event.sotpPropagation()\n        } else {\n            event.cancelBubble = true\n        }\n    }\n}\n```"
  },
  {
    "index": 37,
    "title": "37. 事件是什么？IE 与火狐的事件机制有什么区别？ 如何阻止冒泡？",
    "content": "* IE是事件冒泡没有捕获阶段、firefox支持事件冒泡和事件捕获模型\n\n1）、cancelBubble（HTML DOM Event 对象属性） ：如果事件句柄想阻止事件传播到包容对象，必须把该属性设为 true。 \n\n注意旧ie的方法：ev.cancelBubble = true;（IE） \n\n2）、stopPropagation（HTML DOM Event 对象方法）：（Firefox）终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播* 调用该方法后，该节点上处理该事件的处理程序将被调用，事件不再被分派到其他节点。 \n\n3）、 preventDefault（HTML DOM Event 对象方法）通知浏览器不要执行与事件关联的默认动作。"
  },
  {
    "index": 38,
    "title": "38. 三种事件模型是什么？",
    "content": "* 原始（DOM0）、IE、DOM2三种事件模型\n\n* 原始事件模型：\n\n\t事件发生后没有传播的概念，没有事件流。事件发生，马上处理。\n\n\t监听函数只是元素的一个属性值，通过指定元素的属性值来绑定监听器。书写方式有两种\n\n\t1） 在HTML中，<button type=\"button\" onclick=\"onBtnClick()\">按钮</button>\n\n\t2）在js中，document.getElementById('btn').onclick = onBtnClick\n\n* 缺点：\n\n\t逻辑与显示没有分离\n\n\t相同事件的监听函数只能绑定一个，后绑定的会覆盖掉前面的（这个可以绑定一个汇总的事件处理函数）\n\n\t无法通过事件的冒泡、委托等机制完成更多事情\n\n* IE事件模型：\n\n\tIE的事件模型只有两步，先执行元素的监听函数，然后事件沿着父节点一直冒泡到document。\n\n\t用attachEvent(type, handler)绑定监听事件，其中type需要 'on' + type，移除事件用detachEvent(type, handler)\n\t可以解决原始事件模型的缺点，但是兼容性很差\n* DOM2事件模型：\n\n\tW3C制定的标准，除了一些8及以下的低版本IE，其他浏览器基本都已经支持该标准。W3C制定的标准中，一次事件的发生包含三个程：\n\n\t1）事件捕获阶段：从document一直向下传播到目标元素，在这个过程中，依次检查经过的节点是否注册了捕获监听函数，如有则执行\n\n\t2）事件处理阶段：事件到达目标函数，执行目标函数的事件处理函数。\n\n\t3）事件冒泡阶段：事件从目标元素上升一直到达document，同样一次检查经过的节点是否注册了该事件的监听函数，有则执行。\n\n\t所有的事件都会经历捕获阶段，但是只有部分事件会经历冒泡阶段，比如submit事件就不会被冒泡。\n    \n\taddEventListener(type, handler, true|false)，注意type前面不用加'on'，和IE不同。"
  },
  {
    "index": 39,
    "title": "39. 事件委托是什么？",
    "content": "* JS事件代理就是通过给父级元素绑定事件，不给子级元素绑定事件，然后当点击子级元素时，通过事件冒泡机制在其绑定的父元素上\n* 触发事件处理函数，主要目的是为了提升性能，因为我不用给每个子级元素绑定事件，只给父级元素绑定一次就好了，在原生js里面就是\n* 通过event对象的target属性实现\n\n`var target = evt.target || evt.srcElement`\n\n* target 事件触发的目标元素，currentTarget绑定事件的元素，也就是代理的元素。"
  },
  {
    "index": 40,
    "title": "40. [\"1\", \"2\", \"3\"].map(parseInt) 答案是多少？",
    "content": "> [\"1\", \"2\", \"3\"].map(parseInt) = [1, NaN, NaN]\n\nparseInt(string, radix) 解析一个字符串并返回指定基数的十进制，radix 是 2-36 之间的整数，表示被解析字符串的基数。\n\n如果 parseInt 遇到的字符不是指定 radix 参数中的数字，它将忽略该字符以及所有后续字符，并返回到该点为止已解析的整数值。\n\n如果 radix 是 undefined、0或未指定的，JavaScript会假定以下情况：\n\n* 如果输入的 string以 \"0x\"或 \"0x\"（一个0，后面是小写或大写的X）开头，那么radix被假定为16，字符串的其余部分被当做十六进制数去解析。\n* 如果输入的 string以 \"0\"（0）开头， radix被假定为8（八进制）或10（十进制）。具体选择哪一个radix取决于实现。ECMAScript 5 澄清了应该使用 10 (十进制)，但不是所有的浏览器都支持。因此，在使用 parseInt 时，一定要指定一个 radix。\n* 如果输入的 string 以任何其他值开头， radix 是 10 (十进制)。\n* 如果第一个字符不能转换为数字，parseInt会返回 NaN。"
  },
  {
    "index": 41,
    "title": "41. 什么是闭包，为什么要用它？",
    "content": "当某个函数调用时会创建一个执行环境以及作用域链，然后根据arguments和其他命名参数初始化形成活动对象。\n\n在外部函数调用结束后，其执行环境与作用域链被销毁，但是其活动对象保存在了闭包之中，最后在闭包函数调用结束后才销毁。\n\n简单的说，闭包就是能够读取其他函数内部变量的函数。在js中，闭包是指有权访问另一个函数作用域中的变量的函数。\n\n* 作用：\n\n    匿名自执行函数、\n\n    更优雅，更简洁的表达出代码、\n\n    在某些方面提升代码执行效率、\n\n    实现封装、\n\n    实现面向对象中的对象、\n\n    缓存\n\n    可读取其他函数内部的变量\n\n    让这些变量的值始终保存在内存中（闭包使得JS的垃圾回收机制GC不会收回外部函数所占用的资源，因为外部函数的内部函数的执行需要依赖外部函数中的变量）"
  },
  {
    "index": 42,
    "title": "42. javascript 代码中的 \"use strict\"; 是什么意思 ? 使用它区别是什么？",
    "content": "* \"严格模式\"是一种在JS代码运行时自动实行更严格解析和错误处理的方法。这种模式使得JS在更严格的条件下运行。\n* 优点：\n    消除JS语法的一些不合理、不严谨之处，减少一些怪异行为\n\n    消除代码运行的一些不安全之处，保证代码运行的安全\n\n    提高编译器效率，增加运行速度\n\n    为未来新版本JS做好铺垫\n    \n\tIE6，7，8，9不支持严格模式"
  },
  {
    "index": 43,
    "title": "43. instanceof 的作用？",
    "content": "* 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。"
  },
  {
    "index": 44,
    "title": "44. new 操作符具体干了什么呢？如何实现？",
    "content": "* 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。\n* new 关键字会进行如下的操作：\n\n    创建一个空的简单JavaScript对象（即{}）；\n\n    链接该对象（设置该对象的constructor）到另一个对象 ；\n\n    将步骤1新创建的对象作为this的上下文 ；\n\n    如果该函数没有返回对象，则返回this。\n\n```javascript\nfunction create(C, ...args) {\n    const o = Object.create(C.prototype)\n    const res = C.call(o, ...args)\n    return typeof res === 'object' ? res : o\n}\n```\n\n`object.create()`方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。"
  },
  {
    "index": 45,
    "title": "45. 对于 JSON 的了解？",
    "content": "* JSON 是一种取代XML的数据结构，和XML相比，它更小巧但描述能力不差，网络传输数据将减少更多的流量从而加快速度，是一种轻量级的数据交换格式。"
  },
  {
    "index": 46,
    "title": "46. js 延迟加载的方式有哪些？",
    "content": "js实现延迟加载的几种方法，js的延迟加载有助于提高页面的加载速度。\n\njs延迟加载，也就是等页面加载完成之后再加载JS文件。\n\n一般有如下几种方式：\n\n    defer 属性\n\n    async 属性\n\n    动态创建DOM方式\n\n    使用setTimeour延迟方法\n\n    让js最后加载\n    \n* defer：\n\n    HTML 4.0.1为script标签定义了defer属性，告诉浏览器立即下载，但“延迟执行”。表明脚本在执行时不会影响页面的构造，也就是说，脚本会被延迟到整个页面都解析完毕之后再执行。支持HTML 5 的实现会忽略前乳脚本设置的 defer 属性。\n* async：\n\n    HTML 5 为script标签定义了async属性。与defer属性类似，都用于改变处理脚本的行为。同样，只适用于外部脚本文件。不让页面等待脚本下载和执行，从而一步加载页面其他内容。移步脚本一定会在页面的load事件前执行。\n\n    不能保证脚本会按顺序执行。\n\n* 动态创建DOM方式：\n\n    在页面onload事件中动态添加script标签，以达到页面加载完毕后下载js的目的。\n\n* 使用setTimeour延迟方法：\n\n    把js代码用setTimeout放在宏任务中异步执行。\n\n* 让js最后加载:\n\n    把js外部引入的文件放到页面底部，来让js最后引入，从而加快页面加载速度。"
  },
  {
    "index": 47,
    "title": "47. Ajax 是什么? 如何创建一个 Ajax？",
    "content": "Ajax 并不算是一种新的技术，全称是 asynchronous javascript and xml，可以说是已有技术的组合，主要用来实现客户端与服务器端的异步通信效果，实现页面的局部刷新，早期的浏览器并不能原生支持ajax，可以使用隐藏帧方式变相实现异步效果，后来浏览器提供了对ajax的原生支持，使用ajax原生方式发送请求主要通过XMLHttpRequest（标准浏览器）、ActiveXObject（IE 浏览器）对象实现异步通信效果。\n\n* ajax是基于现有的Internet标准，并且联合使用它们：\n\n    XMLHttpRequest对象（异步的与服务器交换数据）\n\n    JavaScript/DOM（信息显示/交互）\n\n    CSS （给数据定义样式）\n\n    XML （作为转换数据的格式）\n\n* ajax的优点\n\n    页面局部刷新，用户体验好\n\n    异步通信，更加快的响应能力\n\n    减少冗余请求，减轻了服务器负担；按需获取数据，节约带宽资源\n\n    基于标准化的并被广泛支持的技术，不需要下载插件或者小程序。\n\n* 缺点：\n\n    ajax干掉了浏览器部分的back和收藏书签功能，即对浏览器后退机制的破坏。\n\n    存在一定的安全问题，AJAX暴露了与服务器交互的细节。\n\n    对搜索引擎的支持比较弱\n\n    破坏了程序的异常机制\n\n    无法用URL直接访问\n\n* 创建AJAX的步骤：\n\n    AJAX的原理简单来说通过XMLHTTPREQUEST对象来向服务器发送异步请求，从服务器或侧数据，然后用js来操作DOM而更新页面。这其中最关键的一步就是从服务器获得请求数据。\n\n* ajax过程：\n\n    1）创建XMLHttpRequest对象，也就是创建一个异步调用对象\n\n    2）创建一个新的HTTP请求，并指定该HTTP请求的方法，URL及验证信息\n\n    3）设置响应HTTP请求状态变化的函数\n\n    4）发送HTTP请求\n\n    5）获取异步调用返回的数据\n\n    6）使用JS和DOM实现局部刷新\n\n    ```javascript\n    let xhr\n    if (window.XMLHttpRequest) {\n        xhr = new XMLHttpRequest()\n    } else {\n        // IE 5, 6浏览器\n        xhr = new ActiveXObject('Microsoft.XMLHTTP')\n    }\n    xhr.onreadystatechange = function () {\n        if (xhr.readyState === 4 && xhr.status === 200) {\n            console.log(xhr.responseText)\n        }\n    }\n    xhr.open('GET', 'ajax_info.txt', true)\n    xhr.send()\n    ```"
  },
  {
    "index": 48,
    "title": "48. 谈一谈浏览器的缓存机制？",
    "content": "浏览器的缓存机制也就是我们说的HTTP缓存机制，其机制是根据HTTP报文的缓存标识进行的。\n\nHTTP报文分为两种：请求报文 和 响应报文，都有通用信息头，请求头/响应头，实体头\n\n* 缓存过程分析：\n\n    浏览器与服务器通信的方式为应答模式，即，浏览器发起HTTP请求，服务器响应对应请求。\n    \n    浏览器会根据响应报文中HTTP头的缓存标识，决定是否缓存结果。\n\n* 缓存位置：\n\n    1. Service Worker：运行在浏览器背后的独立线程，一般可以用来实现缓存功能，离线web应用。与浏览器的缓存机制不一样，可以开发者自己控制。\n\n    2. Memory Cache：主要包含当前页面中已经抓取到的资源，样式，脚本和图片等，读取速度快，但是缓存持续性很短，随着进程释放而释放，关闭Tab页面就被释放。有一块重要的缓存资源是preloader相关指令（例如<link rel=\"prefetch\">）下载的资源。\n\n    3. Disk Cache：读取速度慢点，但是什么都能存储到磁盘中，比之Memory Cache胜在容量和存储时效性上。\n\n        对于浏览器会把那些文件丢进内存，那些丢进硬盘中，没有具体的参考，比较靠谱的是：\n\n            对于大文件来说，大概率是不存储在内存中的，反之亦然。\n\n            当前系统内存使用率高的话，文件优先存储进硬盘。\n\n    4. Push Cache：推送缓存，是HTTP/2中的内容，当以上三种缓存都没有命中时，它才会被使用。只会在会话（Session）中存在，一旦会话结束就被释放，并且缓存时间也很短暂，在Chrome中只有5分钟左右，同时它也并非严格执行HTTP头中的缓存指令。\n\n**强制缓存 与 协商缓存：根据是否需要向服务器重新发送HTTP请求。强制缓存优先级高于协商缓存。**\n\nHTTP缓存的基本目的是使应用执行的更快，更易扩展，但是HTTP缓存通常只适用于idempotent request（可以理解为查询请求），也就是不更新服务端数据的请求），这就导致了在HTTP的世界里，一般都是对Get请求做缓存，Post请求很少有缓存。（是否没有直接说Post请求不能缓存啊！）\n\n* 强制缓存：\n    强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程，强制缓存的情况主要有三种：\n\n        1）不存在该缓存结果和缓存标识，强制缓存失效，则直接向该服务器发起请求（跟第一次发起请求一致）\n\n        2）存在该缓存结果和缓存标识，但是结果已经失效，强制缓存失效，则使用协商缓存\n\n        3）存在该缓存结果和缓存标识，且该结果没有失效，强制缓存生效，直接返回该结果。\n\n    强制缓存的规则：当浏览器向服务器发送请求的时候，服务器会将缓存规则放入HTTP响应报文的实体头中，控制强制缓存的字段分别是Expires和Cache-Control，其中Cache-Control的优先级比Expires高。\n\n    Expires：是HTTP/1.0 的字段，但是现在浏览器的默认使用的是HTTP/1.1，Expires已经被Cache-Control替代，原因在于Expires控制缓存的原理是使用客户端的时间与服务器返回的时间做对比，如果客户端与服务器的时间由于某些原因（时区不同，有一方时间不准）发生误差，那么强制缓存直接失效，就毫无意义。\n\n    Cache-Control：在HTTP/1.1 中，是最重要的规则，主要用于控制网页缓存，主要取值为：\n\n        1）public：所有内容都将被缓存（客户端和代理服务器都可以缓存）\n\n        2）private：所有内容只有客户端可以，默认取值\n\n        3）no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定\n\n        4）no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存\n\n        5）max-age=xxx(xxx is numberic)：缓存内容将在xxx秒后失效\n\n    HTTP响应报文中，expires的时间值是一个绝对值，Mon, 16 Apr 2018 01:41:50 GMT，而Cache-Control是相对值，在无法确定客户端的时间是否与服务端的时间同步的情况下，Cache-Control相比于expires是更好的选择，所以同时存在时，只有Cache-Control生效。\n\n    缓存存放位置：from memory cache代表使用内存中的缓存 和 from disk cache代表使用的是硬盘中的缓存，浏览器读取缓存的顺序为memory -> disk。\n\n* 协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程，主要有两种情况：\n\n    1）协商缓存生效，返回304\n\n    2）协商缓存失败，返回200\n\n    控制协商缓存的字段分别有：Last-Modified/If-Modified-Since和Etag/If-None-Match，其中Etag/If-None-Match的优先级比Last-Modified/If-Modified-Since高\n\n    Last-Modified：服务器响应请求时，返回该资源文件在服务器最后被修改的时间\n\n    If-Modified-Since：客户端再次发起该请求时，携带上次请求返回的Last-Modified值，通过此字段值告诉服务器该资源上次请求返回的最后被修改时间。服务器收到该请求，发现请求头含有If-Modified-Since字段，则会根据该字段的值与该资源在服务器的最后被修改时间做对比，如服务器的资源最后被修改时间大于If-Modified-Since的字段值，则重新返回资源，状态码为200，否则返回304，代表资源无更新，可继续使用缓存文件。\n\n    Etag：是服务器响应请求时，返回当前资源文件的一个唯一标识（由服务器生成）\n    If-None-Match：是客户端再次发起该请求时，携带上次请求返回的唯一标识Etag值，通过此字段告诉服务器该资源上次请求返回的唯一标志值。和If-Modified-Since的功能差不多。\n    "
  },
  {
    "index": 49,
    "title": "49. Ajax 解决浏览器缓存问题？",
    "content": "禁止浏览器缓存功能有如下几种方法：\n\n1）在ajax发送请求前加上ajax.setRequestHeader('If-Modified-Since', '0')\n\n2）在ajax发送请求前加上ajax.setRequestHeader('Cache-Control', 'no-cache')\n\n3）在url后面加上一个随机数：fresh=Math.random()\n\n4）在url后面加上时间搓：nowtime=Date.now() // 和加随机数一样的道理"
  },
  {
    "index": 50,
    "title": "50. 什么是浏览器的同源政策？",
    "content": "* 是一个重要的安全策略，它用于限制一个origin的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。\n\n* 如果两个 URL 的 protocol、port (如果有指定的话)和 host 都相同的话，则这两个 URL 是同源。这个方案也被称为“协议/主机/端口元组”，或者直接是 “元组”。（“元组” 是指一组项目构成的整体，双重/三重/四重/五重/等的通用形式）。"
  },
  {
    "index": 51,
    "title": "51. 如何解决跨域问题？",
    "content": "同源策略限制的情况：\n\n    1）Cookie、LocalStorage和IndexDB无法读取\n\n    2）DOM和Js对象无法获取\n\n    3）AJAX请求不能发送\n\n注意：对于像img、iframe、script等标签的src属于特例，他们是可以访问非同源网站的资源的。\n\n解决跨域方法：\n\n    1）HTTP响应头里面加上Access-Control-Allow-Origin字段，值可以是*或者包括该网页域名。\n\n    2）JSONP方式，借助script标签的src属性，需要后端返回可执行的脚本，需要后端的配合。\n\n    3）把请求发到自己的（同源的后端服务器），通过服务器跨域取请求服务。\n    s\n    4）利用nginx转发，原理和上面通过服务器转发差不多。都是利用后端没有同源策略。"
  },
  {
    "index": 52,
    "title": "52. 服务器代理转发时，该如何处理 cookie？",
    "content": "Cookie 或 Session 技术的应用，解决了HTTP协议的一个问题--无法保持客户状态，因此它现在被广泛应用于各种Web站点中。\n\nHTTP应用代理：接收用户请求，根据用户请求的URL去真正的目标服务器取回目标页面，再根据不同应用的要求作出相应处理后返回给用户。\n\n应用代理需要处理好Cookie和Session的传递、更新和废除等问题。\n\nCookie 是 Web 服务器向用户的浏览器发送的一段ASCII码文本。一旦收到Cookie，浏览器会把Cookie的信息片段以“名/值”对（name-value pairs）的形式存储保存在本地。这以后，每当向同一个Web服务器请求一个新的文档时，Web浏览器都会发送站点存储在本地的Cookie。创建Cookie的最初目的是想让Web服务器能够通过多个HTTP请求追踪客户。有些复杂的网络应用需要在不同的页面之间保持一致，他们需要这种会话状态的保持能力。\n\n浏览器与Web服务器通过HTTP协议进行通讯，而Cookie就是保存在HTTP协议的请求或者应答头部。\n\n在HTML文档被发送之前，Web服务器通过传送HTTP包头中的Set-Cookie消息把一个cookie发送到用户的浏览器中。\n\n* 完整的Set-Cookie头：\n    Set-Cookie: customer=huangxp; path=/foo/; domain=.ibm.com;\n    expires= Wednesday, 19-OCT-05 23:12:40 GMT; [secure]   \n* Set-Cookie的每个属性解释：\n    1. customer=huangxp一个\"名称=值\"对，把名称customer设置为值\"huangxp\"，这个属性在Cookie中必须有。\n    2. path=/foo/控制哪些访问能够出发cookie的发送，如果没有制定path，cookie会在所有对此站点HTTP发送时发送。如果path=/directory/，只有访问该目录下的网页时，cookie才被发送。在这个例子中，用户在访问目录/foo/下的内容时，浏览器将发送此cookie。如果指定了path，但是path与当前访问的URL不符，则此cookie将被忽略。\n    3. domain=.ibm.com指定cookie被发送到哪台计算机上。正常情况下，cookie只被送回最初发送cookie的计算机。在这个例子中，cookie会被发送到任何在.ibm.com域中的主机。如果domain被设置为空，domain就别设置为和提供cookie的Web服务器相同。如果domain不为空，并且它的值又和cookie的Web服务器域名不符，这个Cookie将被忽略。\n    4. expires= Wednesday, 19-OCT-05 23:12:40 GMT;  指定cookie失效的时间。如果没有制定失效时间，这个cookie就不会被写入计算机的硬盘上，并且只持续到这次会话结束。\n    5. [secure] 如果secure这个词被作为Set-Cookie头的一部分，那么cookie只能通过完全通道传输（目前即SSL通道）。否则，浏览器将忽略此Cookie。"
  },
  {
    "index": 53,
    "title": "53. 简单谈一下 cookie ？",
    "content": "cookie是服务器提供的一种用于维护会话状态信息的数据，通过服务器发送到浏览器，浏览器保存在本地，当下一次有同源的请求时，将保存的cookie值添加到请求头部，发送给服务端。这可以用来实现记录用户登录状态等功能。cookie一般可以存储4k大小的数据，并且只能够被同源的网页所共享访问。\n\n服务器端可以使用Set-Cookie的响应头部来配置cookie信息。一条cookie包括了五个属性值expires、domain、path、secure、HttpOnly。其中expires制定了失效时间，domain是域名、path是路径、domain和path一起限制了cookie能够被哪些URL访问。secure规定了cookie只能在确保安全的情况下传输，HttpOnly规定了这个cookie只能被服务器访问，不能使用js 脚本访问。\n\n在发生跨域请求的时候，即使是同源下的cookie，也不会被自动添加到请求头部，除非显示的规定。"
  },
  {
    "index": 54,
    "title": "54. 模块化开发怎么做？",
    "content": "[参考文章](https://www.cnblogs.com/chenguangliang/p/5856701.html)\n\n* 什么是模块化开发：\n    1. 模块就是一个有特定功能的文件，我们可以通过加载这些模块得到特定的功能。\n    2. 模块化开发就是js的功能分离，通过需求引入不同的文件。\n    3. 模块化开发可以使代码耦合度降低，避免代码多次在页面出现，他最大的作用就是重用。\n\n* 模块开发遵循的规范：\n    1. AMD（RequireJS）规范也叫异步模块加载规范，在这个规范下模块会异步加载，不影响后面语句的执行，我们可以使用define定义模块，使用require调用模块。\n    2. CommonJS规范是服务器端模块的规范，nodejs就采用了这个规范，每个模块都有一个单独的作用域，模块内部的变量无法被其他模块读取，除非定义为global对象和属性。\n    3. CMD（SeaJS）规范通用模块定义，CMD是按需加载，一个模块就是一个文件。\n\n\t当module.exports和exports都存在，以module.exports为准，因为exports是module.exports的快捷方式，指向的仍然是原来的地址。return也可以暴露接口，优先级为return > module.exports > exports。\n\n\t模块引用（require）模块定义（exports）模块标识（module）\n\n\trequire() 用来引用外部模块；\n\n\texports对象用于导出当前模块的方法或变量，唯一的导出口；\n\n\tmodule对象就代表模块本身。\n\n\t虽说Node遵循CommonJS的规范，但是相比也是做了一些取舍，填了一些新东西的。\n\n\t浏览器不兼容CommonJS的根本原因，在于缺少四个Node.js环境的变量。\n\n\t\tmodule\n\n\t\texports\n\n\t\trequire\n\n\t\tglobal\n\n\t只要能够提供这四个变量，浏览器就能加载CommonJS模块。示例：\n\n    ```javascript\n\tvar module = {\n\t\texports: {}\n\t}\n\t;(function (module, exports) {\n\t\texports.multiply = function (n) { return n * 1000 }\n\t}(module, module.exports))\n\tvar f = module.exports.multiply\n    f(5) // 5000\n    ```\n\n\t上面代码向一个立即执行函数提供一个module和exports两个外部变量，模块就放在这个立即执行函数里面。模块的输出值放在module.exports之中，这样就实现了模块的加载。\n\n\tBrowserify的实现，Browserify是目前最常用的CommonJS格式转换的工具：\n    \n        ```javascript\n\t\t// foo.js\n\t\tmodule.exports = function (x) {\n\t\t\tconsole.log(x)\n\t\t}\n\n\t\t// main.js\n\t\tvar foo = require('./foo')\n\t\tfoo('Hi')\n        ```\n\n\t使用下面的命令，可以将main.js转为浏览器可用的格式。\n\n\t\t`browserify main.js > compiled.js`\n\n\tbrowserify将所有模块放入一个数组，id属性是模块的编号，source属性是模块的源码，deps属性是模块的依赖。\n\n\t因为main.js里面加载了foo.js，所有deps属性就制定了./foo对应1号模块。执行的时候，浏览器遇到require('./foo')语句，就自动执行1号模块的source属性，并将执行后的module.exports属性值输出。\n\n\t原则上是导入模块的时候，执行模块中的代码，并注入module，module.exports变量，作为与宿主模块沟通的接口。其他诸如匹配正确的文件名，匹配相对路径，做起来不难。\n\n  * AMD：\n\n  \t基于commonJS规范的nodeJS出来以后，服务器的模块概念已经形成，很自然地，大家就想要客户端模块。而且最好两者能够兼容，一个模块不用修改，在服务器和浏览器都可以运行。但是，由于一个重大的局限，使得CommonJS规范不适用于浏览器环境。\n        \n        ```javascript\n  \t\tconst math = require('math')\n        math.add(2, 3)\n        ```\n\n  \t第二行代码必须等待math.js加载完成。也就是说，如果加载时间很长，整个应用就会停在那里等。require是同步的。\n\n  \t这对服务器端不是一个问题，因为所有的模块都放在本地磁盘，可以同步加载完成，等待时间就是硬盘的读取时间。\n\n  \t但是对于浏览器，这却是一个大问题，因为模块都放在服务端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于‘假死’状态。\n  \t因此浏览器端的模块，不能采用‘同步加载’，只能采用‘异步加载’，这就是AMD规范诞生的背景。\n\n  \t也采用require（）语句加载模块，但是不同于CommonJS，它要求两个参数：\n\n        ```javascript\n  \t\trequire([module], callback)\n  \t\t如：\n  \t\trequire('math', function (math) {\n            math.add(2, 3)\n        })\n        ```\n\n  \t通过回调函数来实现异步加载模块。"
  },
  {
    "index": 55,
    "title": "55. ES6 模块与 CommonJS 模块、AMD、CMD 的差异。",
    "content": "ES6的模块不是对象，import命令会被JS引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载。也正是因为这个，使得静态分析成为可能。\n\n* 特征：\n\n    严格模式，ES6的模块自动采用严格模式\n\n    read-only特性，import的属性是只读的，不能赋值，类似于const的特性\n\n    export/import提升，必须位于模块顶级，不能位于作用域内，其次对于模块内的import/export会提升到模块顶部，这是在编译阶段完成的\n\n* 差异：\n\n    CommonJS输出值的拷贝，es6输出一个只读的引用\n\n    CommonJS运行时加载，是对象，es6模块不是对象，而是通过export命令显示指定输出的代码，import时采用静态命令的形式。即在import时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。模块内部引用的变化，会反应在外部。"
  },
  {
    "index": 56,
    "title": "56. requireJS 的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）",
    "content": "[参考文档](https://www.cnblogs.com/chenguangliang/p/5856701.html)\n\n当文件越来越多，需要很多script标签加载文件，文件之间有依赖性，需要严格保证加载顺序，当依赖关系很复杂的时候，代码的编写和维护都会变得困难。\n\n* 优点：\n\n    1）实现js文件的异步加载，避免网页失去响应\n\n    2）管理模块之间的依赖性，便于代码的编写和维护。\n\n使用全局define函数，如commonJS中modules一样可以缓存模块，找不到在加载，避免重复加载。\n\n所有模块必须使用define函数定义，才能符合规范。"
  },
  {
    "index": 57,
    "title": "57. ECMAScript6 怎么写 class，为什么会出现 class 这种东西?",
    "content": "```javascript\nfunction Person (name, age) {\n    this.name = name\n    this.age = age\n}\nPerson.prototype.sayName = function () {\n    console.log(this.name)\n}\nconst p = new Person('tim', 28)\n```\n\n使用prototype实现继承的写法跟传统的面相对象语言（比如C++和JAVA）差异很大，很容易让新学习这门语言的程序员感到困惑。\n\n提供class关键字，作为语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法而已。\n\n没有变量提升、必须用new调用、类的方法不可枚举、extends 继承、super关键字、自动使用严格模式等与原始方式存在差异。"
  },
  {
    "index": 58,
    "title": "58. documen.write 和 innerHTML 的区别？",
    "content": "\tdocument.write()和innerHTML都能够动态地向文档中添加标记。\n\n* 区别：\n    ①document.write()必须使用script标签才能被调用。违背了“行为与表现分离的原则”，即无法实现JavaScript和HTML的分离。\n\n    ②document.write()容易导致验证错误。比如在例①中，<script>标签后面很容易认为是<p>标签，而在<script>标签后面打开<p>标签是非法的。事实上，那个“<p>”和“</p>”只不过是一个将被插入文档的字符串的组成部分而已。\n\n    ③document.write与MIME类型application/xhtml+xml不兼容，浏览器在呈现这种XHTML文档时根本不会执行document.write()方法。\n\n    ④document.write()仅支持写入。\n\n    ⑤innerHTML可以实现JavaScript和HTML的分离。\n    \n    ⑥innerHTML既支持读取，又支持写入。\n\n    综上所述：推荐使用innerHTML，不推荐使用document.write()。\n\n* 拓展：$(document).ready和window.onload的区别\n\n    $(document).ready和window.onload都是在都是在页面加载完执行的函数，大多数情况下差别不大，但也是有区别的。\n\n    $(document).ready:是DOM结构绘制完毕后就执行，不必等到加载完毕。 意思就是DOM树加载完毕，就执行，不必等到页面中图片或其他外部文件都加载完毕。并且可以写多个.ready。\n\n    window.onload:是页面所有元素都加载完毕，包括图片等所有元素。只能执行一次。\n\n    所以，$(document).ready的执行时间要早于window.onload。并且可以写多个"
  },
  {
    "index": 59,
    "title": "59. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？",
    "content": "1）创建新节点\n\n    createDocumentFragment()    //创建一个DOM片段\n\n    createElement()   //创建一个具体的元素\n\n    createTextNode()   //创建一个文本节点\n\n（2）添加、移除、替换、插入\n\n    appendChild()\n\n    removeChild()\n\n    replaceChild()\n\n    insertBefore()\n\n（3）查找\n\n    getElementsByTagName()    //通过标签名称\n\n    getElementsByName()    //通过元素的Name属性的值\n\n    getElementById()    //通过元素Id，唯一性\n\n（4）复制\n\n    element.cloneNode // 分深复制和浅复制"
  },
  {
    "index": 60,
    "title": "60. innerHTML 与 outerHTML 的区别？",
    "content": "1）innerHTML:\n\n　　从对象的起始位置到终止位置的全部内容,不包括Html标签。\n\n2）outerHTML:\n\n　　除了包含innerHTML的全部内容外, 还包含对象标签本身。\n\n3）需要注意的是outerHTML属性只有IE浏览器才有，其它浏览器是不支持的"
  },
  {
    "index": 61,
    "title": "61. .call() 和 .apply() 的区别？",
    "content": "/*apply()方法*/\n\n`function.apply(thisObj[, argArray])`\n\n/*call()方法*/\n\n`function.call(thisObj[, arg1[, arg2[, [,...argN]]]]);`\n\n共同点：\n\n\t将一个函数的对象上下文从初始的上下文改变为由thisObj指定的新对象。\n不同点：\n\n\t传入的参数列表形式不同 call()接受一个一个的参数，apply()接收一个参数数组。"
  },
  {
    "index": 62,
    "title": "62. JavaScript 类数组对象的定义？",
    "content": "* 只包含使用从零开始，且自然递增的整数做键名，并且定义了length表示元素个数的对象，我们就认为他是类数组对象！"
  },
  {
    "index": 63,
    "title": "63. [,,,] 的长度？",
    "content": "`[,,,].length // 3`\n\n在大多数编程语言中，数组是连续的值序列。在 JavaScript 中，Array 是一个将索引映射到元素的字典。它可以存在空洞（holes） —— 零和数组长度之间的索引没有映射到元素（“缺失索引”）\n\n[快数组和慢数组的的区别](https://cloud.tencent.com/developer/article/1554526)"
  },
  {
    "index": 64,
    "title": "64. JavaScript 中的作用域与变量声明提升？",
    "content": "1）全局作用域\n\n2）函数作用域\n\n3）ES6新增的 let, const 局部作用域\n\n4）var,function 声明会在编译阶段提升，let, const不会，并会把作用域锁住，在声明前使用，会报错。"
  },
  {
    "index": 65,
    "title": "65. 如何编写高性能的 Javascript ？",
    "content": "1）遵循严格模式：'use strict'\n\n2）将js放在页面底部，加快渲染页面\n\n3）将js脚本成组打包，减少请求\n\n4）使用非阻塞方式下载js脚本\n\n5）尽量减少使用闭包\n\n6）缓存DOM节点的访问\n\n7）避免使用eval和function构造器\n\n8）给setTimeout() 和 setInterval() 传递函数而不是字符串作为参数\n\n9）尽量使用直接量创建对象和数组\n\n10）最小化重绘和回流"
  },
  {
    "index": 66,
    "title": "66. 简单介绍一下 V8 引擎的垃圾回收机制",
    "content": "0）标记清除\n\n1）引用计数法\n\n2）根搜索算法"
  },
  {
    "index": 67,
    "title": "67. 哪些操作会造成内存泄漏？",
    "content": "内存泄漏是指一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束。\n\nJS垃圾回收机制：找出不再使用的变量，然后释放掉其占用的内存，但是这个过程不是实时的，因为其开销比较大，所以垃圾回收系统GC会按照固定的时间间隔，周期性的执行。\n\n* 代码不当导致内存泄漏：\n\n    1）意外的全局变量引起的内存泄漏\n\n        ```javascript\n        function leaks () {\n            leak = 'tim'\n        }\n        ```\n\n    2）闭包引起的内存泄露\n\n        ```javascript\n        function bindEvent () {\n            var name = 'tim'\n            var obj = document.createElement('div')\n            obj.onclick = function () {\n                console.log(name)\n            }\n        }\n        ```\n\n    3) 没有清理的DOM元素引用\n\n        有些Dom元素用变量引用后，如果只删除Dom元素，没有删除变量，那么Dom对象还是会在内存中的。\n\n    4）被遗忘的定时器或者回调\n\n    5）子元素存在引用引起的内存泄露\n\n        如果有地方引用子元素，即使子元素被删除，其对象也在内存中，引用混乱导致的泄露。\n\n* 循环引用会导致`JSON.stringify()`出错，BigInt也不能被JSON序列化\n\n* JSON.stringify()说明：\n\n    转换值如果有toJSON()方法，该方法定义什么值将被序列化。\n\n    非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。\n\n    布尔值、数字、字符串的包装对象在序列化过程中会自动转换对应的原始值。\n\n    undefined 、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性中时）或者被转换成null（出现在数组中时）。函数、undefined被单独转换时，会返回undefined，如JSON.stringify(function () {}) 或 JSON.stringify(undefined))。\n\n    对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。\n\n    所有以symbol为属性键的属性都会被忽略掉，即使replacer参数中强制指定包含了它们。\n\n    Date日期调用了toJSON()将其转换成为了string字符串（同Date.toISOStirng()），因此会被当作字符串处理。\n\n    NaN 和 Infinity 格式的数值及 null 都会被当作 null。\n\n    其他类型的对象，包括Map/Set/WeakMap/weakSet,仅会序列化可枚举的属性。\n\n* 通过map来保存遍历的对象，如果这个对象被遍历过了，就不再处理。把该属性置为undefined或者是其他。\t"
  },
  {
    "index": 68,
    "title": "68. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？",
    "content": "前端路由！\n\nHTML5里引用新的API，就是history.pushState和history.replaceState，就是通过这个接口做到无刷新改变页面URL的。\n\n虽然ajax可以无刷新改变页面内容，但无法改变页面URL。\n\n其次为了更好的可访问性，内容发生改变后，改变URL的hash。\n\n如何响应浏览器的前进、后退操作：\n\n    window对象上提供了onpopstate事件，上面传递的state对象会成为event的子对象，这样就可以拿到存储的数据了。"
  },
  {
    "index": 69,
    "title": "69. 如何判断当前脚本运行在浏览器还是 node 环境中？（阿里）",
    "content": "* 判断global对象，如果是window，那就是浏览器环境，反之就是node环境。"
  },
  {
    "index": 70,
    "title": "70. 把 script 标签放在页面的最底部的 body 封闭之前和封闭之后有什么区别？浏览器会如何解析它们？",
    "content": "html标签只包含head和body两个标签，解析时，所有的标签都会解析进这两个标签里边。body之前的任何位置都会解析进head里边，之后的都会解析进body里边。\n\n按照HTML5标准中的HTML语法规则，如果在body后再出现<script>或任何元素的开始标签，都是parse error，浏览器会忽略之前的</body>，即视作仍旧在body内。所以实际效果和写在</body>之前没有区别的。\n\n总之，这种写法虽然也能work，但是并没有带来任何的额外好处，实际上出现这种的写法很可能是误解了‘将script放在页面最末端的‘教条。所以还是不要这样写为好。"
  },
  {
    "index": 71,
    "title": "71. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？",
    "content": "[参考文章](https://www.jianshu.com/p/6e2b68a93c88)\n\n以前网页主要是为宽屏设备设计的，为了应对手机屏，做了一些约定，其中‘双击缩放’很出名。\n\n如果用户点击一个链接，浏览器一开始不知道用户是要打开这个链接还是用放大还是双击滚动的操作，因此，IOS Safari 就等待300ms，以判断用户是否再次点击了屏幕。这些约定被业界复制。\n\n当用户体验越来越重要后，点击后300ms的延迟变得不可忍受，才被重视起来，但是已经成为历史问题。\n\n* 浏览器厂商的解决方案：\n\n    方案一：禁用缩放\n\n    方案二：更改默认的视口宽度\n\n    方案三：CSS touch-action\n\n由于浏览器厂商的支持不一致，存在兼容性问题，就出现了JS自己的解决方案。\n\n* 方案一：指针事件的polyfill\n\n* 方案二：FashClick，转门为解决移动端浏览器300毫秒点击延迟问题所开发的一个轻量级的库。FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即发出模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉。\n\n300ms延迟会导致点击穿透问题：\n\n既然click点击有300ms延迟的问题，那么对于触摸屏，我们直接监听touchstart事件是不是可以？\n\n* 这有两个不好的地方：\n\n    1）touchstart是手指触摸就触发，有时候用户只是想滑动屏幕，却触发了touchstart事件，这不是想要的结果。\n\n    2）使用touchstart事件在某些场景下可能会出现穿透的现象。\n\n* 什么是点击穿透？\n\n    假如页面上有两个元素A和B。B元素在A元素之上。我们在B元素的touchstart事件上注册了一个回调函数，该回调函数的作用是隐藏B元素。我们发现，当我们点击B元素，B元素被隐藏了，随后，A元素触发了click事件。\n\n    这是因为在移动端浏览器，事件执行的顺序是touchstart > touchend > click。而click事件有300ms的延迟，当touchstart事件把B元素隐藏之后，隔了300ms，浏览器触发了click事件，但是此时B元素不见了，所以该事件被派发到了A元素身上。如果A元素是一个链接，那此时页面就会意外地跳转。"
  },
  {
    "index": 72,
    "title": "72. 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？",
    "content": "路由是根据不同的URL地址展示不同的内容或页面。\n\n前端路由就是把不同路由对应不同的内容或者页面的任务交给前端来做，之前是通过服务器根据URL的不同返回不同的页面的实现的。\n\n* 什么时候使用前端路由：\n\n    在单页面应用，大部分内容页面结构不变，只改变部分内容的应用。\n\n* 前端路由有什么优点和缺点？\n\n    1） 用户体验好，不需要每次都从服务器全部获取，快速展现给用户\n\n    2）使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存\n\n    3）单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置"
  },
  {
    "index": 73,
    "title": "73. 什么是 Polyfill ？",
    "content": "* from MDN:\n\n    Polyfill是一块代码（通常是Web上的JS），用来为旧浏览器提供它没有原生支持的较新的功能。\n\n    比如说polyfill可以让ie7使用Silverlight插件来模拟HTML Canval元素的功能，或模拟CSS实现rem单位的支持，或text-shadow，或者其他任何你想要的功能。"
  },
  {
    "index": 74,
    "title": "74. 检测浏览器版本版本有哪些方式？",
    "content": "* userAgent判断厂商，检测对象方法是不是存在，做降级处理"
  },
  {
    "index": 75,
    "title": "75. 介绍一下 js 的节流与防抖？",
    "content": "```javascript\n// 节流\nfunction debounce (fn) {\n    let timer = null\n    return (...args) => {\n        clearTimeout(timer)\n        timer = setTimeout(() => {\n            fn.apply(this, args)\n        }, 500)\n    }\n}\n\n// 防抖\nfunction throttle (fn) {\n    let canDo = true\n    let timer = null\n    return (...args) => {\n        if (!canDo) {\n            return\n        }\n        canDo = false\n        fn.apply(this, args)\n        timer = setTimeout(() => {\n            canDo = true\n            clearTimeout(timer)\n        }, 300)\n    }\n}\n```\n\n* 总结：\n\n函数防抖：将多次操作合并为一次操作进行。原理是维护一个计时器，规定在delay时间后触发函数，但是在delay时间内再次触发的话，就会取消之前的计时器而重新设置。这样一来，只有最后一次操作能被触发。\n\n函数节流：使得一定时间内只触发一次函数。原理是通过判断是否有延迟调用函数未执行。\n\n* 区别： \n\n函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现"
  },
  {
    "index": 76,
    "title": "76. 开发中常用的几种 Content-Type ？",
    "content": "* `text/html`：文本方式的网页文件。\n\n* `text/plain`：窗体数据以纯文本形式进行编码，其中不含任何控件或格式字符。空格转换为 “+” 加号，但不对特殊字符编码。\n\n* `application/x-www-form-urlencoded`：在发送到服务器之前，所有字符都会进行编码，空格转换为 “+” 加号，特殊符号转换为 ASCII HEX 值。 窗体数据被编码为：名称/值对，这是标准的编码格式。\n\n* `multipart/form-data`：窗体数据被编码为一条消息，页上的每个控件对应消息中的一个部分，上传附件用到。在使用包含文件上传控件的表单时，必须使用该值。\n\n* `application/json`：数据以json形式进行编码。\n\n* `application/xml`：数据以xml形式进行编码，application/xml会根据xml头指定的编码格式来编码。\n\n* `text/xml`：文本方式的xml文件，text/xml忽略xml头所指定编码格式而默认采用US-ASCII编码。"
  },
  {
    "index": 77,
    "title": "77. 如何封装一个 javascript 的类型判断函数？",
    "content": "* 利用 `Object.prototype.toString.call`\n\n```javascript\nvar valide = (function(){\n    // 是否是字符串\n    function isString(value){\n        return Object.prototype.toString.call(value) == \"[object String]\";\n    }\n    // 是否是数字\n    function isNumber(value){\n        return Object.prototype.toString.call(value) == \"[object Number]\";\n    }\n    // 是否是布尔值\n    function isBoolean(value){\n        return Object.prototype.toString.call(value) == \"[object Boolean]\";\n    }\n    // 是否undefined\n    function isUndefined(value){\n        return Object.prototype.toString.call(value) == \"[object Undefined]\";\n    }\n    // 是否是null\n    function isNull(value){\n        return Object.prototype.toString.call(value) == \"[object Null]\";\n    }\n    // 是否数组\n    function isArray(value){\n        return Object.prototype.toString.call(value) == \"[object Array]\";\n    }\n    // 是否是函数\n    function isFunction(value){\n        return Object.prototype.toString.call(value) == \"[object Function]\";\n    }\n    // 是否是对象\n    function isObject(value){\n        return Object.prototype.toString.call(value) == \"[object Object]\";\n    }\n    // 是否是正则表达式\n    function isRegExp(value){\n        return Object.prototype.toString.call(value) == \"[object RegExp]\";\n    }\n    // 是否是日期对象\n    function isDate(value){\n        return Object.prototype.toString.call(value) == \"[object Date]\";\n    }\n    return {\n        isString: isString,\n        isNumber: isNumber,\n        isBoolean: isBoolean,\n        isUndefined: isUndefined,\n        isNull: isNull,\n        isArray: isArray,\n        isFunction: isFunction,\n        isObject: isObject,\n        isRegExp: isRegExp,\n        isDate: isDate\n    };\n})();\n```"
  },
  {
    "index": 78,
    "title": "78. 如何判断一个对象是否为空对象？",
    "content": "1）将json对象转化为json字符串，再判断该字符串是否为'{}'\n\n    ```javascript\n    var data = {}\n    JSON.stringify(data) === '{}'\n    ```\n\n2）for...in、Object.getOwnPropertyNames()、Object.keys()返回空数组"
  },
  {
    "index": 79,
    "title": "79. 一道常被人轻视的前端 JS 面试题",
    "content": "```javascript\nfunction Foo() {\ngetName = function () { alert (1); };\n    return this;\n}\nFoo.getName = function () { alert (2);};\nFoo.prototype.getName = function () { alert (3);};\nvar getName = function () { alert (4);};\nfunction getName() { alert (5);}\n\n//请写出以下输出结果：\nFoo.getName();\ngetName();\nFoo().getName();\ngetName();\nnew Foo.getName();\nnew Foo().getName();\nnew new Foo().getName();\n```\n\n[解析](https://www.cnblogs.com/xxcanghai/p/5189353.html)"
  },
  {
    "index": 80,
    "title": "80. js 中的命名规则",
    "content": "主要规范如下：\n\n    1）标识符第一个字符必须是字母、下划线_或美元符号$，其后的字符可以是字母、数字或下划线、美元符号；\n    \n    2）自定义的标识符不能和 JavaScript 中的关键字及保留字同名，但可以包含关键字或保留字。关键字及保留字介绍请参见本节后面的内容介绍；\n    \n    3）标识符不能包含空格；\n    \n    4）标识符不能包含+、-、@、#等特殊字符；\n    \n    5）由多个单词组成的复合标识符命名主要有两种方式：\n        \n        一是使用下划线连接各个单词，每个单词全部小写，例如：dept_name。\n        \n        二是使用驼峰式，其中又分大驼峰和小驼峰。大驼峰的格式是每个单词的首字母大写，其余字母小写，例如：DeptName；小驼峰的格式是第一个单词全部小写，第二单词开始的\t每个单词首字母大写，其余字母小写，例如：deptName。"
  },
  {
    "index": 81,
    "title": "81. js 语句末尾分号是否可以省略？",
    "content": "ASI机制（Automatic semicolon insertion）允许我们省略分号。ASI机制不是说在解析过程中解析器自动把分号添加到代码中，而是说解析器除了分号还会以换行为基础按一定的规则作为断句的依据，从而保证解析的正确性。\n\n* ASI规则：\n\n    1.新行并入当前行构成非语法时，自动插入分号\n\n    2. continue, return, break, throw后自动插入分号\n\n    3. ++, -- 后缀表达式作为新行开始，会在行首自动插入分号\n\n    4. 代码块的最后一个语句会自动插入分号\n\n* 注意事项：\n\n    不要将++或--放在同一行\n\n    如果return后有参数，不要将参数放在独立的行\n\n    不要将括号的开始放在新的一行"
  },
  {
    "index": 82,
    "title": "82. Object.assign()",
    "content": "* Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。"
  },
  {
    "index": 83,
    "title": "83. ath.ceil 和 Math.floor",
    "content": "* Math.round()  “四舍五入”， 该函数返回的是一个四舍五入后的的整数。\n* Math.ceil()  “向上取整”， 即小数部分直接舍去，并向正数部分进1。\n* Math.floor()  “向下取整” ，即小数部分直接舍去。"
  },
  {
    "index": 84,
    "title": "84. js for 循环注意点",
    "content": "// 次佳的循环\n\n`for (var i=0; i<myarray.length; i++) { /* todo */ }`\n\n每次循环都会获取一下数组的长度，降低代码的效率，当myarray是HTMLCollection对象的时候影响更大。\n\n* for in:\n\n    获取的是key，以任意顺序遍历一个对象除Symbol以外的🉑️枚举的属性。\n\n    可枚举属性是指那些内部“可枚举”标志设置为true的属性，对于通过直接的赋值和属性初始化的属性，该标志默认为true，对于通过\n    \n    Object.defineProperty等定义的属性，该标志默认为false。可枚举的属性可以通过for...in循环进行遍历（除非该属性名是一个Symbol）。\n\n* for of:\n\n    获取的是值\n\n* forEach:\n\n    可以直接获取值，但是不能中断，可以直接获取值。\n\n`hasOwnProperty（）`方法会返回一个布尔值，指示对象自身属性中是否具有制定的属性。obj.hasOwnProperty('name')。\n\n`propertyIsEnumerable()` 方法返回一个布尔值，表示指定的属性是否可枚举。obj.propertyIsEnumerable('name')。\n\n`Object.getOwnPropertyNames()`方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。\n\n`Object.keys()` 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。\n\n`Object.values()`方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。\n\n`Object.entries()`方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。\n\n`Object.create()`方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。"
  },
  {
    "index": 85,
    "title": "85. js 中倒计时的纠偏实现？",
    "content": "```javascript\nconst interval = 100\nlet ms = 50000 // 从服务器和活动开始时间计算出的时间差，这里测试用500000ms\nlet count = 0\nconst startTime = Date.now()\nlet timerCounter\nif (ms >= 0) {\n    timerCounter = setTimeout(countDownStart, interval)\n}\nfunction countDownStart () {\n    clearTimeout(timerCounter)\n    count++\n    const offset = Date.now() - (startTime + count * interval) // 这里可计算出当前执行倒计时的时间与实际应该执行时间的偏差，进而可以计算出下次执行倒计时的时间，如果上一次执行晚了，下一次就提前执行，如果上一次执行早了，下一次就晚一点执行。\n    const nextTime = interval - offset\n    if (nextTime < 0) {\n        nextTime = 0\n    }\n    ms -= interval\n    console.log(`误差：${offset} ms，下一次执行：${nextTime} ms 后，离活动开始还有：${ms} ms`)\n    if (ms >= 0) {\n        timerCounter = setTimeout(countDownStart, nextTime)\n    }\n}\n```"
  },
  {
    "index": 86,
    "title": "86. 如何查找一篇英文文章中出现频率最高的单词？",
    "content": "```javascript\n// 注意这里匹配的是单词\nfunction getMaxTimeWord (article) {\n    let times = 0\n    let maxTimesWord = ''\n    const map = new Map()\n    const arr = article.match(/[A-z]+/g)\n    const str = arr.join(' ')\n    arr.forEach(word => {\n        if (!map.has(word)) {\n            map.add(word)\n            const num = str.match(new RegExp(word, 'g')).length\n            if (num > times) {\n                times = num\n                maxTimesWord = word\n            }\n        }\n    })\n    return {\n        times,\n        maxTimesWord\n    }\n}\n```"
  }
]
})()

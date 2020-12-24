1. JS中6中基本的数据类型：
	Number
	String
	Boolean
	Null
	Undefined
	Symbol: es6添加，代表创建后独一无二且不可变的数据类型。
	BigInt: es10添加，是一种数字类型的数据，它可以表示任意精度格式的整数，使用BigInt可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

2. JS中有两种类型的值，基本类型和引用类型，分别存放在栈和堆中。

3. 堆和栈的区别：
	在数据结构中，栈中数据的存取方式是先进先出。而堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。完全二叉树是堆的一种实现方式。
	在操作系统中，内存被分为栈区和堆区。
	栈区内存由编译器自动分配释放，内存函数的参数值，局部变量的值等。
	堆区内存一般由程序员分配释放，若程序员不释放，程序结束后由垃圾回收机制回收。
	栈的大小一般是2M，堆的大小和系统虚拟内存有关，一般是4G？
	栈是由系统自动分配，速度较快。但程序员无法控制。
	堆是由new分配的内存，一般速度比较慢，而且容易产生内存碎片，不过用起来很方便。

4. 内部属性[[Class]]是什么？
	可以把它看作内部的一个分类，这个属性无法直接访问，一般通过 Object。prototype.toString(..) 来查看。
	Object.prototype.toString.call([1, 2, 3]) // "[object Array]"

5. 介绍js有哪些内置对象？
	与宿主无关，独立于宿主环境的ECMASript实现提供的对象：
		Object、Array、Date、Error、RegExp、Function、Boolean、Number、String、JSON、Math、Promise、WebAssembly、Generator等
	宿主对象：
		Window和Document等

6. undefined 和 undeclared 的区别？
	已在作用域中声明但还没有赋值的变量，是 undefeated 的。
	相反，还没有在作用域中声明过的变量，是 undeclared 的。

	对于 undecided 变量的引用，浏览器会报引用错误，如 ReferenceError: b is not defined 。
	但是我们可以使用 typeof 的安全机制来避免报错，因为对于 undeclared （或者 not defined）变量，typeof 会返回 'undefined'。

	在ECMAScript2015前，使用 typeof 永远不会抛出错误。

	但在加入了块级作用域的 let 和 const 之后，在其被声明之前对块中的 let 和 const 变量使用 typeof 会抛出一个 ReferenceError。

	块级作用域变量在块的头部处于"暂存死区"，直至其被初始化，在这期间，访问变量将会引发错误。

7. null 和 undefined 的区别？
	首先 Null 和 Undefined 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。
	undefined 代表含义是未定义
	null 代表的含义是空对象。
	typeof null 会返回 'object'，这是一个历史遗留问题：
		在JS最初的实现中，JS中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0，由于 null 代表的是空指针（大多数平台下值为 0x00），因此 null 的类型标签是 0， typeof null也因此返回 'object'。
	当用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

8. 如何获取安全的 undefined 值？
	因为 undefined 是一个表示符，所以可以被当作变量来使用和赋值，但是这样会影响 undefined 的正常判断。
	表达式 void ___ 没有返回值，因此返回结果是 undefined 。 void 并不改变表达式结果，只是让表达式不返回值。
	按惯例我们用 void 0 来获得 undefined 。

9. 说几条JS的基本规范？
	代码规范通常包括以下几个方面：
		变量和函数的命名规则。
		空格、缩进、注释的使用规则
		其他常用规范

	变量驼峰命名
	运算法（=+-*/）前后需要添加空格
	代码缩进
	将左花括号放在第一行的结尾。
	将右花括号独立放在一行
	尽量使用 ‘===’，‘!==’ 代替 ‘==’ ， ‘!=‘

10. JS原型，原型链？有什么特点？
	当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 Object.prototype 所以这就是我们新建的对象为什么能够使用toString() 等方法的原因。
	在 js 中，我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性值，这个属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。
	当我们使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针执行构造函数的 prototype 属性对应的值，在 ES5中这个指针被称为对象的原型。
	一般来说我们是不应该能够获取这个值的，但是现在浏览器中都实现了 __proto__ 属性来让我们访问这个属性，但是我们最好不要使用这个属性，因为它不是规范中规定的。
	ES5 中新增了一个 Object.getPrototypeOf() 方法，我们可以通过这个方法来获取对象的原型。

11. js 获取原型的方法？
	p.__proto__
	p.construnctor.prototype
	Object.getPrototypeOf(p)

12. 在js中不同进制数字的表示方式
	以 0X、0x 开头的表示为十六进制
	以 0、0O、0o 开头的表示为八进制
	以 0B、0b 开头的表示为二进制

13. js 中整数的安全范围是多少？
	安全整数指的是，在这个范围内的整数转化为二进制存储的时候不会出现进度丢失，能够被“安全”呈现的最大整数是2^53 - 1，即9007199254740991，在ES6中被定义为 Number.MAX_SAFE_INTEGER。最小整数是 -9007199254740991，在ES6中被定义为
	Number.MIN_SAFE_INTEGER。
	如果某次计算的结果得到了一个超过JS数值范围的值，那么这个值会被自动转换为特殊的 Infinity 值。如果某次计算返回了正或负 Infinity 值，那么该值将无法参与下一次的计算。
	判断一个值是不是有穷的，可以使用 isFinite 函数来判断。

14. typeof NaN 的结果是什么？
	NaN 意指不是一个“数字”(not a number)，NaN 是一个“警戒值”(sentinel value， 有特殊用途的常规值)，用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。
	typeof NaN; // "number"
	NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 === 不成立）的值。而 !== 为true。

15. isNaN 和 Number.isNaN 函数的区别？
	函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的值都会返回 true，因此非数字值传入也会返回 true，
	会影响 NaN 的正常判断。
	函数 Number.isNaN 会首先判断传入的参数是否为数字，如果是数字再继续判断是否为 NaN，这种方法对于 NaN 的判断更为准确。

16. Array 构造函数只有一个参数值时的表现？
	如果传递给Array构造函数的唯一参数是介于0和232-1（含）之间的整数，这将返回一个新的JavaScript数组，其长度属性设置为该数字（注意：这意味着实现了一个arrayLength空槽的数组，空槽不具有实际未定义值 undefined）。如果参数是任何其他数字，则会抛出一个RangeError异常。

17. 其他值到字符串的转换规则？String(args)
	（1）如果有toString()方法，则调用该方法（不传递radix参数）并返回结果
  （2）如果是null，返回”null”
  （3）如果是undefined，返回”undefined”

18. 其他值到数字值的转换规则？Number(args)、pareseInt(string, radix)
	（1）如果是布尔值，true和false分别被转换为1和0
  （2）如果是数字值，返回本身。
  （3）如果是null，返回0.
  （4）如果是undefined，返回NaN。
  （5）如果是字符串，遵循以下规则：
  		1、如果字符串中只包含数字，则将其转换为十进制（忽略前导0）
  		2、如果字符串中包含有效的浮点格式，将其转换为浮点数值（忽略前导0）
  		3、如果是空字符串，将其转换为0
  		4、如果字符串中包含非以上格式，则将其转换为NaN
  （6）如果是对象，则调用对象的valueOf()方法，然后依据前面的规则转换返回的值。如果转换的结果是NaN，则调用对象的toString()方法，
  	再次依照前面的规则转换返回的字符串值。
  https://www.cnblogs.com/Juphy/p/7085197.html

19. 其他值到布尔类型的值的转换规则？Boolean(args)
	以下值会被转换为false：false、""、0、NaN、null、undefined，其余任何值都会被转换为true。

20. {} 和 [] 的 valueOf 和 toString 的结果是什么？
	toString()和valueOf()都是对象的方法。toString()方法返回反映这个对象的字符串。
	valueOf()方法如果存在任意原始值，它就默认将对象转换为表示它的原始值；
	对象是复合值，而大多数对象无法真正表示为一个原始值，因此默认的valueOf()方法简单地返回对象本身，而不是返回一个原始值。

21. 什么是假值对象？
	在JavaScript中，false、null、0、”“、undefined 和 NaN 被称为假值

22. ~ 操作符的作用？
	取反码，按位取反，~-1 = 0, ~1 = -2, ~0 = -1

23. 解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字，它们之间的区别是什么？
	解析字符串中的数字，如果首字符是数字，就能正常解析数字，直到遇到非数字为止。
	强制类型转换，需要字符串都为数字，或者为合法的浮点数。否则返回 NaN。

24. 操作符什么时候用于字符串的拼接？


25. 什么情况下会发生布尔值的隐式强制类型转换？
	if 判断时，!判断时


26. || 和 && 操作符的返回值？

27. Symbol 值的强制类型转换？
	Symbol 作为一个基本类型，不能转换为字符串和Number

28. == 操作符的强制类型转换规则？
	操作数1 == 操作数2，  操作数1 === 操作数2

	比较过程：

　　双等号==： 

　　（1）如果两个值类型相同，再进行三个等号(===)的比较

　　（2）如果两个值类型不同，也有可能相等，需根据以下规则进行类型转换在比较：

　　　　1）如果一个是null，一个是undefined，那么相等

　　　　2）如果一个是字符串，一个是数值，把字符串转换成数值之后再进行比较

　　三等号===:

　　（1）如果类型不同，就一定不相等

　　（2）如果两个都是数值，并且是同一个值，那么相等；如果其中至少一个是NaN，那么不相等。（判断一个值是否是NaN，只能使用isNaN( ) 来判断）

　　（3）如果两个都是字符串，每个位置的字符都一样，那么相等，否则不相等。

　　（4）如果两个值都是true，或是false，那么相等

　　（5）如果两个值都引用同一个对象或是函数，那么相等，否则不相等

　　（6）如果两个值都是null，或是undefined，那么相等

29. 如何将字符串转化为数字，例如 '12.3b'?
	parseInt、parseFloat，正则替换也可以

30. 如何将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为『12,000,000.11』?
	用正则匹配或者遍历

31. 常用正则表达式

32. 生成随机数的各种方法？
	主要借助 Math.random() 方法

33. 如何实现数组的随机排序？
	主要借助 Math.random() 方法，如果用sort来排序，可以在sort的时候和一个值比较，随机返回-1 或 1


34. javascript 创建对象的几种方式？
	{}
	new Ｏbject()
	使用字面量
	工厂模式
	构造函数模式（constructor）
	原型模式（prototype）
	构造函数+原型模式
	还有一些不常用的方式，如动态原型，寄生构造函数，稳妥构造函数。

35. JavaScript 继承的几种实现方式？
	初步有6种，Child.prototype = new Father() 或者 Child.prototype = Father.prototype，
	如果需要往父级传递参数，可以在 Child 的构造函数中手动调用 Father 函数。

36. 寄生式组合继承的实现？
	function Father (type) {
		this.type = type
	}
	Father.prototype.getType = function () { return this.type }
	function Child (name, type) {
		Father.call(this, type)
		this.name = name
	}
	const Super = function () {}
	Super.prototype = Father.prototype
	Child.prototype = new Super()
	Child.prototype.construnctor = Child
	const instance = new Child('tim', 'Cat')

37. Javascript 的作用域链？
	作用域：在运行时代码中的某些特定部分中的变量，函数和对象的可访问性。
	换句话说，作用域决定了代码区块中变量和其他资源的可见性。
	全局变量可全局访问，但是如果都放在全局会造成全局命名空间污染，引起命名冲突，也不利于垃圾回收。
	自由变量：当前作用域没有定义的变量。
	作用域链：如果变量在当前作用域没有找到，就去父级作用域寻找，如果父级作用域也没有，就一层一层往上寻找，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是作用域链。

	看个例子：
	var x = 10
	function fn() {
		console.log(x)
	}
	function show(f) {
		;(function() {
			f() // 10， 而不是 20
		}())
	}
	show(fn)
	解释：在 fn 函数中，取自由变量 x 的值时，要到那个作用域中取？
	要到创建 fn 函数的那个作用域中取，而无论 fn 函数将在哪里调用。
	作用域与执行上下文不是相同的概念：
		JS 属于解释型语言，执行分为：解释和执行两个阶段
		解释阶段：
			词法分析
			语法分析
		执行阶段：
			创建执行上下文
			执行函数代码
			垃圾回收
		JS 解释阶段便会确定作用域规则，因此作用域在函数定义时就已经确定了，而不是在函数调用时确定，但是执行上下文是函数执行之前创建的。执行上下文最明显的就是 this 的指向是执行时确定的。
	作用域访问的变量是编写代码的结构确定的。
	作用域和执行上下文之间最大的区别是：
		执行上下文在运行时确定，随时可以改变；
		作用域在定义时就确定，并且不会改变。
	一个作用域下可能包含若干个上下文环境。有可能从来没有过上下文环境（函数从来没有被调用过）；有可能有过，现在函数被调用完毕后，上下文环境被销毁了；有可能同时存在一个或多个（闭包）。同一个作用域下，不同的调用会产生不同的执行上下文环境，继而产生不同的变量的值。

38. 谈谈 This 对象的理解。
	this 时函数运行时自动生成的一个内部对象，只能在函数内部使用，但总是指向调用它的对象。
	在全局作用域中调用：
		this指向window，其实在全局作用域中定义的var 变量和函数，都会挂到window对象上作为属性，那么this指向window就很正常了
		例子：
		function a() {
			function b() {
				function c() {
					console.log(this) // window
				}
				c()
			}
			b()
		}
		a()
		其实只要不是 obj.sayName() 这样通过.来调用函数，都算是通过window来调用函数，函数里面的this指向window。
	作为对象方法调用：
		var name = 'Jenny'
		var obj = {
			name: 'Danny',
			person: function () {
				return this.name
			}
		}
		console.log(obj.person()) // Danny
		这个例子中，this指向obj
	作为构造函数调用：
		构造函数使用 new 关键字创建一个实例，此时this指向实例对象。（当然前提是构造函数没有手动 return）
	通过 apply() 和 call() 改变调用函数的对象，让函数中的 this 指向调用的第一个参数。

39. eval 是做什么的？
	这题目的看起来比较简单，但是总感觉没有这么简单，确实是这样子。所以回答这个题目要从不同的角度去回答。
	首先要回答清楚它是干什么的有什么用，然后谈谈它对作用域的影响，然后就是执行效率的问题，最后谈谈 eval() 的其他作用。
	作用：
		把字符串参数解析成JS代码并运行，并返回执行的结果；
		eval 函数接收一个参数s，如果s不是字符串，则直接返回s，否则执行s语句。
		如果s语句执行结果是一个值，则返回此值，否则返回 undefined.
		eval('2 + 3')
		eval('var age = 10')
	eval 的作用域：
		function a() {
			eval('var x = 1')
			console.log(x) // 1
		}
		a()
		console.log(x) // ReferenceError: x is not defined
		说明作用域在它所有的范围内有效
	安全问题：
		JS中的 eval() 不安全，可能会被利用做XSS攻击（跨站脚本攻击 Cross Site Scripting)，eval 也存在一个安全问题，因为它可以执行传给它的任何字符串，所以永远不要传入来历不明或者不受信任源的参数字符串。
	注意事项：
		应该避免使用 eval，不安全，会运行编译器，非常耗性能（2次，一次解析成JS语句，一次执行）
	实际上，常用的比如 script标签，setTimeout，setInterval，new Function 等都间接调用了 eval 函数。

40. 什么是 DOM 和 BOM？
	JS 由三部分构成，ECMAScript, DOM 和 BOM，根据宿主（浏览器）的不同，具体的表现形式也不尽相同。

	BOM是浏览器对象模型，提供了独立于内容而与浏览器窗口交互的对象。描述了与浏览器进行交互的方法和接口，可以对浏览器窗口进行访问和操作。

	DOM是文档对象模型，是针对XML的基于树的API。描述了处理网页内容的方法和接口，是HTML和XML的API，DOM把整个页面规划成由节点层级构成的文档。
	BOM的最根本对象是window
	DOM最根本的对象是document（实际上是window.document)

41. 写一个通用的事件侦听器函数。
	事件冒泡机制：当一个元素接收到事件的时候，会把他接收到的所有事件传播给他的父级，一直到顶层window
	事件捕获机制：当触发目标元素时，会从目标元素的最顶层的祖先元素事件往下执行到目标元素为止
	事件流的三个阶段：事件捕获阶段，处于目标阶段，事件冒泡阶段（无论是冒泡事件还是捕获事件，元素都会先执行捕获阶段）
	所有事件的顺序是（注意本元素代码的顺序执行）
		其他元素捕获阶段事件->本元素代码顺序事件->其他元素冒泡阶段事件
	给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？
		执行两次事件，同一个dom元素且这个是目标阶段的元素，按照事件的顺序执行事件--这时候捕获和冒泡无法区分，为事件目标元素了。
	var EventUtil = {
		// 根据情况分别使用dom2 || IE || dom0方式 来添加事件
		addHandler: function (element, type, handler) {
			if (element.addEventListener) {
				element.addEventListener(type, handler, false)
			} else if (element.attachEvent) {
				element.attachEvent('on' + type, handler)
			} else {
				element['on' + type] = handler
			}
		},
		removeHandler: function (element, type, handler) {
			if (element.removeEventListener) {
				element.removeEventListener(type, handler, false) // false是冒泡，true是捕获
			} else if (element.detachEvent) {
				element.detachEvent('on' + type, handler)
			} else {
				element['on' + type] = null
			}
		},
		// 根据情况分别获取DOM或者IE中的事件对象，事件目标，阻止事件的默认行为
		getEvent: function (event) {
			return event ? event : window.event
		},
		getTarget: function (event) {
			return event.target || event.srcElement
		},
		preventDefault: function (event) {
			if (event.preventDefault) {
				event.preventDefault()
			} else {
				event.returnValue = false
			}
		},
		stopPropagation: function (event) {
			if (event.stopPropagation) {
				event.sotpPropagation()
			} else {
				event.cancelBubble = true
			}
		}
	}

42. 事件是什么？IE 与火狐的事件机制有什么区别？ 如何阻止冒泡？
	IE是事件冒泡没有捕获阶段、firefox支持事件冒泡和事件捕获模型
	1）、cancelBubble（HTML DOM Event 对象属性） ：如果事件句柄想阻止事件传播到包容对象，必须把该属性设为 true。 
	注意旧ie的方法：ev.cancelBubble = true;（IE） 
	2）、stopPropagation（HTML DOM Event 对象方法）：（Firefox）终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播。调用该方法后，该节点上处理该事件的处理程序将被调用，事件不再被分派到其他节点。 
	3）、 preventDefault（HTML DOM Event 对象方法）通知浏览器不要执行与事件关联的默认动作。

43. 三种事件模型是什么？
	原始（DOM0）、IE、DOM2三种事件模型
	原始事件模型：
		事件发生后没有传播的概念，没有事件流。事件发生，马上处理。
		监听函数只是元素的一个属性值，通过指定元素的属性值来绑定监听器。书写方式有两种
		1） 在HTML中，<button type="button" onclick="onBtnClick()">按钮</button>
		2）在js中，document.getElementById('btn').onclick = onBtnClick
	缺点：
		逻辑与显示没有分离
		相同事件的监听函数只能绑定一个，后绑定的会覆盖掉前面的（这个可以绑定一个汇总的事件处理函数）
		无法通过事件的冒泡、委托等机制完成更多事情
	IE事件模型：
		IE的事件模型只有两步，先执行元素的监听函数，然后事件沿着父节点一直冒泡到document。
		用attachEvent(type, handler)绑定监听事件，其中type需要 'on' + type，移除事件用detachEvent(type, handler)
		可以解决原始事件模型的缺点，但是兼容性很差
	DOM2事件模型：
		W3C制定的标准，除了一些8及以下的低版本IE，其他浏览器基本都已经支持该标准。W3C制定的标准中，一次事件的发生包含三个过程：
		1）事件捕获阶段：从document一直向下传播到目标元素，在这个过程中，依次检查经过的节点是否注册了捕获监听函数，如有则执行
		2）事件处理阶段：事件到达目标函数，执行目标函数的事件处理函数。
		3）事件冒泡阶段：事件从目标元素上升一直到达document，同样一次检查经过的节点是否注册了该事件的监听函数，有则执行。
		所有的事件都会经历捕获阶段，但是只有部分事件会经历冒泡阶段，比如submit事件就不会被冒泡。
		addEventListener(type, handler, true|false)，注意type前面不用加'on'，和IE不同。



44. 事件委托是什么？
	JS事件代理就是通过给父级元素绑定事件，不给子级元素绑定事件，然后当点击子级元素时，通过事件冒泡机制在其绑定的父元素上
	触发事件处理函数，主要目的是为了提升性能，因为我不用给每个子级元素绑定事件，只给父级元素绑定一次就好了，在原生js里面就是
	通过event对象的target属性实现

	var target = evt.target || evt.srcElement
	target 事件触发的目标元素，currentTarget绑定事件的元素，也就是代理的元素。

45. ["1", "2", "3"].map(parseInt) 答案是多少？
	["1", "2", "3"].map(parseInt) = [1, NaN, NaN]
	parseInt(string, radix) 解析一个字符串并返回指定基数的十进制，radix 是 2-36 之间的整数，表示被解析字符串的基数。
	如果 parseInt 遇到的字符不是指定 radix 参数中的数字，它将忽略该字符以及所有后续字符，并返回到该点为止已解析的整数值。
	如果 radix 是 undefined、0或未指定的，JavaScript会假定以下情况：
		如果输入的 string以 "0x"或 "0x"（一个0，后面是小写或大写的X）开头，那么radix被假定为16，字符串的其余部分被当做十六进制数去解析。
		如果输入的 string以 "0"（0）开头， radix被假定为8（八进制）或10（十进制）。具体选择哪一个radix取决于实现。ECMAScript 5 澄清了应该使用 10 (十进制)，但不是所有的浏览器都支持。因此，在使用 parseInt 时，一定要指定一个 radix。
		如果输入的 string 以任何其他值开头， radix 是 10 (十进制)。
		如果第一个字符不能转换为数字，parseInt会返回 NaN。

46. 什么是闭包，为什么要用它？
	当某个函数调用时会创建一个执行环境以及作用域链，然后根据arguments和其他命名参数初始化形成活动对象。
	在外部函数调用结束后，其执行环境与作用域链被销毁，但是其活动对象保存在了闭包之中，最后在闭包函数调用结束后才销毁。
	简单的说，闭包就是能够读取其他函数内部变量的函数。在js中，闭包是指有权访问另一个函数作用域中的变量的函数。
	作用：
		匿名自执行函数、
		更优雅，更简洁的表达出代码、
		在某些方面提升代码执行效率、
		实现封装、
		实现面向对象中的对象、
		缓存
	 可读取其他函数内部的变量
		让这些变量的值始终保存在内存中（闭包使得JS的垃圾回收机制GC不会收回外部函数所占用的资源，因为外部函数的内部函数的执行需要依赖外部函数中的变量）

47. javascript 代码中的 "use strict"; 是什么意思 ? 使用它区别是什么？
48. 如何判断一个对象是否属于某个类？
49. instanceof 的作用？
50. new 操作符具体干了什么呢？如何实现？
51. Javascript 中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？
52. 对于 JSON 的了解？
53. [].forEach.call($$(""),function(a){a.style.outline="1px solid #" (~~(Math.random()(1<<24))).toString(16)}) 能解释一下这段代码的意思吗？
54. js 延迟加载的方式有哪些？
55. Ajax 是什么? 如何创建一个 Ajax？
56. 谈一谈浏览器的缓存机制？
57. Ajax 解决浏览器缓存问题？
58. 同步和异步的区别？
59. 什么是浏览器的同源政策？
60. 如何解决跨域问题？
61. 服务器代理转发时，该如何处理 cookie？
62. 简单谈一下 cookie ？
63. 模块化开发怎么做？
64. js 的几种模块规范？
65. AMD 和 CMD 规范的区别？
66. ES6 模块与 CommonJS 模块、AMD、CMD 的差异。
67. requireJS 的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）
68. JS 模块加载器的轮子怎么造，也就是如何实现一个模块加载器？
69. ECMAScript6 怎么写 class，为什么会出现 class 这种东西?
70. documen.write 和 innerHTML 的区别？
71. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？
72. innerHTML 与 outerHTML 的区别？
73. .call() 和 .apply() 的区别？
74. JavaScript 类数组对象的定义？
75. 数组和对象有哪些原生方法，列举一下？
76. 数组的 fill 方法？
77. [,,,] 的长度？
78. JavaScript 中的作用域与变量声明提升？
79. 如何编写高性能的 Javascript ？
80. 简单介绍一下 V8 引擎的垃圾回收机制
81. 哪些操作会造成内存泄漏？
82. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？
83. 如何判断当前脚本运行在浏览器还是 node 环境中？（阿里）
84. 把 script 标签放在页面的最底部的 body 封闭之前和封闭之后有什么区别？浏览器会如何解析它们？
85. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？
86. 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？
87. 如何测试前端代码么？ 知道 BDD, TDD, Unit Test 么？ 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)？
88. 检测浏览器版本版本有哪些方式？
89. 什么是 Polyfill ？
90. 使用 JS 实现获取文件扩展名？
91. 介绍一下 js 的节流与防抖？
92. Object.is() 与原来的比较操作符 “===”、“==” 的区别？
93. escape,encodeURI,encodeURIComponent 有什么区别？
94. Unicode 和 UTF-8 之间的关系？
95. js 的事件循环是什么？
96. js 中的深浅拷贝实现？
97. 手写 call、apply 及 bind 函数
98. 函数柯里化的实现
99. 为什么 0.1 0.2 != 0.3？如何解决这个问题？
100. 原码、反码和补码的介绍
101. toPrecision 和 toFixed 和 Math.round 的区别？
102. 什么是 XSS 攻击？如何防范 XSS 攻击？
103. 什么是 CSP？
104. 什么是 CSRF 攻击？如何防范 CSRF 攻击？
105. 什么是 Samesite Cookie 属性？
106. 什么是点击劫持？如何防范点击劫持？
107. SQL 注入攻击？
108. 什么是 MVVM？比之 MVC 有什么区别？什么又是 MVP ？
109. vue 双向数据绑定原理？
110. Object.defineProperty 介绍？
111. 使用 Object.defineProperty() 来进行数据劫持有什么缺点？
112. 什么是 Virtual DOM？为什么 Virtual DOM 比原生 DOM 快？
113. 如何比较两个 DOM 树的差异？
114. 什么是 requestAnimationFrame ？
115. 谈谈你对 webpack 的看法
116. offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别？
117. 谈一谈你理解的函数式编程？
118. 异步编程的实现方式？
119. Js 动画与 CSS 动画区别及相应实现
120. get 请求传参长度的误区
121. URL 和 URI 的区别？
122. get 和 post 请求在缓存方面的区别
123. 图片的懒加载和预加载
124. mouseover 和 mouseenter 的区别？
125. js 拖拽功能的实现
126. 为什么使用 setTimeout 实现 setInterval？怎么模拟？
127. let 和 const 的注意点？
128. 什么是 rest 参数？
129. 什么是尾调用，使用尾调用有什么好处？
130. Symbol 类型的注意点？
131. Set 和 WeakSet 结构？
132. Map 和 WeakMap 结构？
133. 什么是 Proxy ？
134. Reflect 对象创建目的？
135. require 模块引入的查找方式？
136. 什么是 Promise 对象，什么是 Promises/A 规范？
137. 手写一个 Promise
138. 如何检测浏览器所支持的最小字体大小？
139. 怎么做 JS 代码 Error 统计？
140. 单例模式模式是什么？
141. 策略模式是什么？
142. 代理模式是什么？
143. 中介者模式是什么？
144. 适配器模式是什么？
145. 观察者模式和发布订阅模式有什么不同？
146. Vue 的生命周期是什么？
147. Vue 的各个生命阶段是什么？
148. Vue 组件间的参数传递方式？
149. computed 和 watch 的差异？
150. vue-router 中的导航钩子函数
151. $route 和 $router 的区别？
152. vue 常用的修饰符？
153. vue 中 key 值的作用？
154. computed 和 watch 区别？
155. keep-alive 组件有什么作用？
156. vue 中 mixin 和 mixins 区别？
157. 开发中常用的几种 Content-Type ？
158. 如何封装一个 javascript 的类型判断函数？
159. 如何判断一个对象是否为空对象？
160. 使用闭包实现每隔一秒打印 1,2,3,4
161. 手写一个 jsonp
162. 手写一个观察者模式？
163. EventEmitter 实现
164. 一道常被人轻视的前端 JS 面试题
165. 如何确定页面的可用性时间，什么是 Performance API？
166. js 中的命名规则
167. js 语句末尾分号是否可以省略？
168. Object.assign()
169. Math.ceil 和 Math.floor
170. js for 循环注意点
171. 一个列表，假设有 100000 个数据，这个该怎么办？
172. js 中倒计时的纠偏实现？
173. 进程间通信的方式？
174. 如何查找一篇英文文章中出现频率最高的单词？


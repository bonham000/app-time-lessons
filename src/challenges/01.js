
/* HTML markup for beginning and end of code snippets */
const start = `<pre><code class='language-javascript'>`;
const end = `</code></pre>`;

/***********************************
 * Create Code Snippets
 *********************************** */

const FUNCTION_PARAMETERS = {
snippet:`
${start}function add(a, b) {
	return a + b;
};
${end}`
};

const GREETING = {
snippet:`
${start}function sayHello(name) {
	return "Hello, " + name + "!";
};

sayHello("Ryan");
${end}`
};

const FUNC = {
snippet:`
${start}function performMath(firstValue, secondValue) {
	var multiplier = 10;

	return (firstValue + secondValue) * multiplier;
};
	
performMath(3, 4);
${end}`,
choices: [
"<code>7</code>",
"<code>12</code>",
"<code>17</code>",
"<code>70</code>",
"<code>170</code>",
]};

/***********************************
* Export Challenge Array
*********************************** */

export default {
	title: "Week 1 Quiz",
	category: "JavaScript and Basic Data Structures",
	challenges: [
		{
    	title: `Which JavaScript type represents an "empty" or "absent" value?`,
    	subtitle: `JavaScript Data Types`,
    	choices: [
				"none",
				"empty",
				"nonce",
				"nothing",
    		"null/undefined",
    	],
    	solution: `4`,
    	explanation: `
				In JavaScript <code>null</code> and <code>undefined</code> are both types to represent
				values which are "absent" or "not defined yet". Each has a specific meaning and usage,
				but in general they represent types where the value is missing or not present yet.`
    },
    {
    	title: `In the following function, <code>a</code> and <code>b</code> are referred to as: ${FUNCTION_PARAMETERS.snippet}`,
    	subtitle: `JavaScript Programming Styles`,
    	choices: [
				"Letters",
				"Arguments/Parameters",
				"Keywords",
				"Types",
    	],
    	solution: `1`,
			explanation: `
				In the above function, <code>a</code> and <code>b</code> are function arguments. These are
				passed into the function when it is called, and generally they are referred to as
				"arguments" or "parameters".`
		},
		{
    	title: `In the following function, what will be the output of the line <code>sayHello("Ryan")</code>? ${GREETING.snippet}`,
    	subtitle: `Function return`,
    	choices: [
				"Ryan",
				"Hello, Ryan",
				"Hello, Ryan!",
				"undefined",
    	],
    	solution: `2`,
			explanation: `
				The function takes the argument <code>name</code> and concatenates it with "Hello " and an
				exclamation mark <code>"!"</code>. The line <code>sayHello("Ryan")</code> calls the <code>sayHello</code>
				function and passes the string <code>"Ryan"</code> as an argument - this string value goes into
				the <code>name</code> argument of the function, which then outputs the string <code>"Hello, Ryan!"</code>.`
		},
		{
    	title: `JavaScript, like other languages have special reserved words, like <code>function</code>, <code>return</code>, <code>true</code>. What is the name for these special reserved words?`,
    	subtitle: `Language keywords`,
    	choices: [
				"Keywords",
				"Specials",
				"Reserved Words",
				"They do not have a special name.",
    	],
    	solution: `0`,
			explanation: `
				These words are called "keywords" and they are reserved by the language to have special meaning.
				For instance, <code>function</code> denotes a function definition, and <code>return</code> is a keyword
				to indicate you are returning a value from a function.<br /><br />Learning the meaning and usage of these lanugage
				keywords will help you understand programming code whn you are looking at it. In general, there are not
				that many keywords in a language.`
		},
		{
    	title: `In the following function, what will be the output of the line <code>performMath(3, 4)</code>? ${FUNC.snippet}`,
    	subtitle: `Perform math`,
    	choices: FUNC.choices,
    	solution: `3`,
			explanation: `
				This function uses a new keyword we have not learned yet called <code>var</code>! This keyword
				stands for "variable" and allows you to assign values. In this case, the value <code>10</code>
				is assigned to the variable <code>multiplier</code>.<br /><br />Then, we perform some math in
				the function body. Programming languages usually have support for common math operations, just
				like you are used to with a calculator. So here, we add the arguments <code>firstValue</code>
				and <code>secondValue</code> together, and then multiple the result by the <code>multiplier</code>
				variable, <code>10</code>, to get <code>70</code>!<br /><br />Don't worry, you do not have to be
				good at math to learning programming 😉`
    },
	]
};

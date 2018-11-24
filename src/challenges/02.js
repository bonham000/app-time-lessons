
/* HTML markup for beginning and end of code snippets */
const start = `<pre><code class='language-javascript'>`;
const end = `</code></pre>`;

/***********************************
 * Create Code Snippets
 *********************************** */
const TODO_LIST = {
snippet:`
${start}const myTodoList = [
  "Learn about coding",
  "Do the homework for App Time!",
  "Review what I learned",
];
${end}`
};

const NOTES = {
snippet:`
${start}
let notes = [];

function addNote(myNewNote) {
	notes.push(myNewNote);
};
	
addNote("My secret note");
${end}`,
choices: [
"<code>[\"My secret note\"]</code>",
"<code>[]</code>",
"<code>[\"\"]</code>",
"<code>undefined</code>",
"<code>\"My secret note\"</code>",
]};

/***********************************
* Export Challenge Array
*********************************** */

export default {
	title: "Week 2 Quiz",
	category: "Basic JavaScript Syntax",
	challenges: [
		{
    	title: `In JavaScript the keyword <code>const</code> is used for values that`,
    	subtitle: `const keyword`,
    	choices: [
				"Are constant and cannot be changed",
				"Are mutable and should be changed",
				"It is used for all variables",
				"<code>const</code> is not a JavaScript keyword",
    	],
    	solution: `0`,
    	explanation: `
        In JavaScript there are three main keywords used to define variables: <code>var</code>,
        <code>let</code>, and <code>const</code>. In general, programmers only use <code>let</code>,
        and <code>const</code>.
        
        You can think of the <code>const</code> keyword as a default choice. Variables defined with
        <code>const</code> are "constant" and cannot be reassigned. If you need to change the value
        stored in a variable later in your program, you can use the <code>let</code> keyword.`
    },
    {
    	title: `What is the right what to describe the following? ${TODO_LIST.snippet}`,
    	subtitle: `JavaScript Programming Styles`,
    	choices: [
				"<code>myTodoList</code> is an array of strings",
        "<code>myTodoList</code> is a function which takes multiple arguments",
        "None of these are correct",
        "<code>myTodoList</code> is a string",
        "I don't know",
    	],
    	solution: `0`,
			explanation: `
        Here, <code>myTodoList</code> is declared using <code>const</code> as an array of strings. This
        is just like the notebook we saw in class, except here the notes are all todo items 🤗`
		},
		{
    	title: `After the following code runs, what will the variable <code>notes</code> look like? ${NOTES.snippet}`,
    	subtitle: `Function return`,
    	choices: NOTES.choices,
    	solution: `0`,
			explanation: `
        The function takes the argument <code>addNote</code> takes one argument, <code>myNewNote</code> and pushes
        this argument onto the array of notes defined in the variable <code>notes</code>. Therefore, after running the line
        <code>addNote("My secret note");</code> the <code>notes</code> array will be an array of one value: the string value
        <code>"My secret note"</code>.`
		},
		{
    	title: `In this line: <code>myArray.push</code>, the <code>.push</code> is usually referred to as a "method".`,
    	subtitle: `Language keywords`,
    	choices: [
				"True",
				"False",
				"I don't know",
    	],
    	solution: `0`,
			explanation: `
        In this example <code>.push</code> is referred to as a "method". Data structures in programming languages usually
        provide "methods" for programmers to manipulate, copy, read, or change them or their data. These methods are usually
        accessed with the "dot syntax", like we see here <code>.push</code><br /><br /> Methods allow you to do something, so
        they are all functions. However, the word "method" is more descriptive because it tells you it is a method on some
        data structure, whereas the word function does not imply this. You can write functions anywhere in your code, but
        methods are always attached to some data structure.`
		},
		{
    	title: `Which is the right keyword to use to define a variable which you know you want to change the value of later?`,
    	subtitle: `Const vs. Let`,
    	choices: [
        "<code>let</code>",
        "<code>var</code>",
        "<code>const</code>",
        "<code>function</code>",
        "None of these",
      ],
    	solution: `0`,
      explanation: `
        If you want to change the value of a variable, you should use the <code>let</code> keyword. Technically,
        <code>var</code> will also allow you to do this, but generally using <code>var</code> is avoided in modern
        JavaScript.<br /><br />There are a few more details about using <code>const</code> and <code>let</code>,
        but just remember to try to always use <code>const</code> first and then if you decide you need to
        change the value of some variable you can use <code>let</code> instead. If you follow this rule you will
        do great! 🙏
				`
    },
	]
};

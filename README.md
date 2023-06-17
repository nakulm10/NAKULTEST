# FULL STACK DEVELOPMENT CLASS TEST

## ANS 1) 
#### An internet website typically consists of two main components: the front-end and the back-end. These components work together to deliver a functional and interactive web experience to users. Here's an overview of how the front-end and back-end divisions work in the context of a website:

### Frontend:
*The front-end refers to the part of the website that users interact with directly. It encompasses the visual and interactive elements that users see and interact with in their web browsers. The front-end is responsible for the presentation layer of the website and includes HTML, CSS, and JavaScript.*

a. ***HTML (Hypertext Markup Language):*** HTML provides the structure and content of the website. It defines the elements, such as headings, paragraphs, images, links, and forms, that make up the web page.

b. ***CSS (Cascading Style Sheets):*** CSS is used to style the HTML elements, defining their appearance, layout, and design. It enables the website to have a visually appealing and consistent look across different pages.

c. ***JavaScript:*** JavaScript is a programming language that adds interactivity and dynamic behavior to the website. It allows for the creation of interactive features like animations, form validations, and dynamic content updates.

d. ***React Js:*** It is a popular client side front ed developing application which encapsulates the features of all the three HTML,CSS AND javascript and provides a platfrom for the user to host a site on his local host.

Front-end developers focus on implementing the design provided by UI/UX designers and ensure that the website is visually appealing, responsive, and user-friendly.



### Back-end:
The back-end refers to the server-side of the website that is responsible for processing requests, managing data, and performing complex operations. It handles the logic and functionality behind the scenes and interacts with databases, external APIs, and other resources.
a. Server-side programming languages: Back-end development typically involves using server-side programming languages such as Python, Ruby, Java, PHP, or Node.js. These languages allow developers to build the server-side logic and handle user requests.

b. Frameworks and libraries: Back-end developers often use frameworks and libraries to streamline development. Examples include Django and Flask for Python, Ruby on Rails, Spring for Java, Laravel for PHP, and Express.js for Node.js.

c. Databases: Back-end development involves working with databases to store, retrieve, and manipulate data. Popular choices include MySQL, PostgreSQL, MongoDB, and SQLite.

d. APIs (Application Programming Interfaces): Back-end developers create APIs to allow communication between the front-end and back-end systems or to integrate external services into the website.

Back-end developers focus on implementing the business logic, data management, security, and performance optimizations required to ensure the website functions correctly and efficiently.

Overall, the front-end and back-end divisions work together to create a cohesive web experience. The front-end handles the presentation and user interaction aspects, while the back-end manages the underlying logic, data, and server-side operations.






## ANS 2)
In HTML (Hypertext Markup Language), tags are used to define the structure and elements of a web page. Tags are enclosed in angle brackets (<>) and come in pairs: an opening tag and a closing tag. The opening tag denotes the start of an element, and the closing tag denotes the end. Some HTML tags, known as self-closing tags, don't require a closing tag as they represent elements without content or have content specified in attributes.

Here are some categories of HTML tags with examples:

1. Heading Tags:
Heading tags are used to define the headings or titles of sections on a web page. They range from `<h1>` to `<h6>`, where `<h1>` represents the highest level of heading and `<h6>` the lowest.

Example:
```html
<h1>Welcome to My Website</h1>
```

2. Paragraph Tags:
Paragraph tags are used to define paragraphs of text.

Example:
```html
<p>This is a paragraph of text.</p>
```

3. Link Tags:
Link tags are used to create hyperlinks to other web pages or resources. They are represented by the `<a>` tag and require an attribute called `href` to specify the target URL.

Example:
```html
<a href="https://www.example.com">Visit Example Website</a>
```

4. Image Tags:
Image tags are used to embed images in a web page. They are represented by the `<img>` tag and require an attribute called `src` to specify the image source (URL or file path).

Example:
```html
<img src="image.jpg" alt="Description of the image">
```

5. List Tags:
List tags are used to create ordered or unordered lists. The `<ul>` tag represents an unordered list (bullet points), and the `<ol>` tag represents an ordered list (numbered items). List items are represented by the `<li>` tag and are nested inside the list tags.

Example (unordered list):
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Example (ordered list):
```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

6. Form Tags:
Form tags are used to create interactive forms on a web page. They are represented by the `<form>` tag and contain form inputs, such as text fields, checkboxes, radio buttons, and buttons.

Example:
```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>
```

These are just a few examples of HTML tags. There are many more tags available to define different elements and structures in HTML, such as tables, divs, spans, headers, and more.



## ANS 3)
The virtual DOM is a representation of a DOM object. In React JS, every DOM element has a corresponding Virtual DOM Object. No doubt that the virtual DOM has the same properties as we have in the normal DOM object but unlike the DOM object where we can directly change what is on the screen, we cannot do that for the virtual DOM.

### Working of VIRTUAL DOM:
For every update done on the Virtual DOM, React compares the Virtual DOM with a snapshot of the initial state before the update was done. So, with the help of this comparison done by react js, it automatically figures out which part of your react component needs to be updated. Interestingly, React uses what we call the diffing algorithm to do this and the process of using this diffing algorithm is called diffing. So once reacts compares, it then updates the components which need to be updated with the updated nodes. Let us look at a sample code to see what it looks like:

### Initial DOM State:

<div>
         <div>
               <h1>Hello World</h1>
         </div>
         <div>
               <h1>Hello Planet</h1>
         </div>
</div>

### Update DOM State:
<div>
         <div>
               <h1>Hello World</h1>
         </div>
         <div>
               <h1>Hello Planet</h1>
         </div>
</div>
#### According to the second section of code, the DOM only modifies its content when it receives an update. Since this update happens so quickly, we frequently are unaware of it. It just identifies the component that needs to be updated and does the change for us.

#### When the DOM receives an update, it changes only the content of the DOM as we can find in the second block of code. This update is so fast that we don’t usually know when this happens. It only marks the component which needs to be updated and updates it for us.The virtual DOM provides a mechanism that abstracts manual DOM manipulations away from the developer, helping us to write more predictable code. It does so by comparing two render trees to determine exactly what has changed, only updating what is necessary on the actual DOM.

### Virtual DOM actually makes things faster:
When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in the state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again.


## ANS 4)
Here are 10 key differences between MySQL (a relational database management system) and NoSQL (a non-relational database system):

### 1) Data Model:

##### MySQL: MySQL follows a relational data model, organizing data into tables with predefined schemas and relationships between them.
##### NoSQL: NoSQL databases use various data models like key-value, document, columnar, or graph, allowing for flexible and dynamic data structures.

### 2) Schema:

##### MySQL: MySQL enforces a rigid schema where the structure of tables and their columns must be defined in advance.
##### NoSQL: NoSQL databases are schema-less or schema-flexible, enabling the addition or modification of fields on the fly without predefined structures.

### 3) Scalability:

##### MySQL: Scaling MySQL databases vertically by upgrading hardware or adding more powerful servers is common. Horizontal scaling can be challenging.
##### NoSQL: NoSQL databases are designed for horizontal scalability, allowing easy distribution of data across multiple servers and handling high traffic loads.

### 4) Query Language:

##### MySQL: MySQL uses SQL (Structured Query Language), a powerful and standardized language for querying relational databases.
##### NoSQL: NoSQL databases often have their own query languages or APIs tailored to the specific data model they support, which may differ from SQL.

### 5) ACID Compliance:

##### MySQL: MySQL follows the ACID (Atomicity, Consistency, Isolation, Durability) principles, ensuring data integrity and reliability.
##### NoSQL: NoSQL databases often sacrifice strict ACID compliance for improved scalability and performance, favoring eventual consistency.

### 6) Joins and Relationships:

##### MySQL: MySQL supports complex joins and relationships between tables, allowing for efficient querying of related data.
##### NoSQL: NoSQL databases typically do not support joins and relationships directly, requiring denormalization or the use of specialized techniques.

### 7) Data Replication:

##### MySQL: MySQL provides built-in features for data replication, allowing data to be copied across multiple servers for backup, failover, or load balancing.
##### NoSQL: NoSQL databases also support replication but may have different approaches and mechanisms based on the specific database system.

### 8) Data Storage:

##### MySQL: MySQL stores data in tables, using a fixed schema and predefined data types for columns.
##### NoSQL: NoSQL databases store data in various formats like documents, key-value pairs, wide-column stores, or graphs, providing flexibility in data representation.

### 9) Transactions:

##### MySQL: MySQL supports ACID-compliant transactions, ensuring data consistency and atomicity for multiple operations.
##### NoSQL: NoSQL databases have varied support for transactions, with some offering transactional capabilities, while others prioritize performance and scalability over strict transactions.

***It's important to note that these differences are generalizations, and the specific features and characteristics of MySQL and NoSQL databases can vary across different implementations and versions.***


## ANS 5)
#### DBMS has a variety of advantages over file system and one of them being Data Consistency i.e. data remains consist even after amendind the data a number of times. It ensures that the data satisfies defined constraints, rules, and relationships. When data consistency is maintained, it means that the data is reliable, coherent, and free from contradictions or anomalies.Here are a few key aspects of data consistency in DBMS:

***Integrity Constraints: DBMS uses integrity constraints to enforce rules and maintain data consistency. Constraints, such as unique keys, foreign keys, and check constraints, ensure that data entered into the database follows specified rules and relationships.***

***Transactions: Transactions are units of work performed within a DBMS. Maintaining data consistency is a critical aspect of transactions. ACID (Atomicity, Consistency, Isolation, Durability) properties ensure that a transaction either completes successfully, leaving the data in a consistent state, or rolls back if an error occurs, maintaining data integrity.***

***Data Validation: DBMS provides mechanisms to validate and verify data before it is stored in the database. This includes data type validation, length constraints, range checks, and business rules to ensure the correctness of data being entered.***

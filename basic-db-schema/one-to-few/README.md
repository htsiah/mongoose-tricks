# mongoose-tricks : one to few example

An example of “one-to-few” might be the addresses for a person. This is a good use case for embedding – you’d put the addresses in an array inside of your Person object.

The main advantage is that you don’t have to perform a separate query to get the embedded details; the main disadvantage is that you have no way of accessing the embedded details as stand-alone entities.

References:
https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1<br>
https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-2<br>
https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3<br>
https://zellwk.com/blog/mongoose-subdocuments/<br>

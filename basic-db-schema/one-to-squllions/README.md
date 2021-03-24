# mongoose-tricks : one to squllions example

An example of “one-to-squillions” might be an event logging system that collects log messages for different machines. Any given host could generate enough messages to overflow the 16 MB document size, even if all you stored in the array was the ObjectID. This is the classic use case for “parent-referencing” – you’d have a document for the host, and then store the ObjectID of the host in the documents for the log messages.

The example used timestamp in log where the createdAt and updatedAt maintainance by mongoose.

You’d use a (slightly different) application-level join to find the most recent 5,000 messages for a host:

host = db.hosts.findOne({ipaddr:"10.1.1.1"}) <br>
db.logs.find({host: host.\_id}).sort({createAt:-1}).limit(5000).pretty()

References:
https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1<br>
https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-2<br>
https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3<br>
https://masteringjs.io/tutorials/mongoose/timestamps<br>

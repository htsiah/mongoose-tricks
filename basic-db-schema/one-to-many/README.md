# mongoose-tricks : one to few example

An example of “one-to-many” might be parts for a product in a replacement parts ordering system. Each product may have up to several hundred replacement parts, but never more than a couple thousand or so.

The example used populate method to list down all parts in the product. The part ref in product automatic remove when the part is removed.

The example also demonstrate using $pull to remove the ref part in product.

References:
https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1<br>
https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-2<br>
https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3<br>
https://zellwk.com/blog/mongoose-subdocuments/<br>
https://www.freecodecamp.org/news/mongoose101/<br>

# About
Awesome Keystonejs project rewritten in EJS.

 - Frontoffice ( public )
 - Backoffice ( CMS )

## Add a new route - Frontoffice 

1. Add *foo.ejs* in **/templates/views/pages**
2. Add *foo.js* in **/routes/views**
3. Add a new route in **/routes/index.js** under *Setup route bindings*
4. In **/routes/middleware.js** under *res.locals.navLinks* add a line like the one below and change the *foo* fields 
``` 
{ label: 'Foo', key: 'foo', href: '/foo' } 
```
5. Don't forget to change locals.section string **/routes/views/yourFooRoute.js** ( Frontoffice navigation )
6. Don't forget to add *next();* in **/routes/views/yourFooRoute.js**

## Add a new route - Backoffice

1. In **keystone.js** at *keystone.set('nav'...* add

```
foo: 'foo'
```
```
keystone.set('nav', {
	posts: ['posts', 'post-categories'],
	galleries: 'galleries',
	enquiries: 'enquiries',
	users: 'users',
	foo: 'foo'
});

```
2. In **/models** directory add a new file *Foo.js*
3. Add this structure ( taken from User model ) to *Foo.js*
```
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Foo Model
 * ==========
 */
var Foo = new keystone.List('foo');

Foo.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Foo.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Foo.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Foo.defaultColumns = 'name, email, isAdmin';
Foo.register();

```
4. Modify *Foo.js* according to your use case


## Todo
 
 - 404 page
 - 500 page
 - flash messages template
 - test email notification
 - test advanced features of EJS

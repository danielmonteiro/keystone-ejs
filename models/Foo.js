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

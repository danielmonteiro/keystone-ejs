# About
Awesome Keystonejs project rewritten in EJS.

## Adding a new page 

1. Add *foo.ejs* in /templates/views/pages
2. Add *foo.js* in /routes/views
3. Add a new route/page in /routes/index.js under *Setup route bindings*
4. In /routes/middleware.js under *res.locals.navLinks* add a line like the one below and change *foo* fields 
``` 
{ label: 'Foo', key: 'foo', href: '/foo' } 
```
5. Don't forget to change locals.section string /routes/views/yourFooRoute.js ( navigation )
5. Don't forget to add *next();* in /routes/views/yourFooRoute.js


## Todo
 
 - 404 page
 - 500 page
 - flash messages template
 - test email notification
 - test advanced features of EJS

# Chapter 1:

## 1. Create angular application with below command. 

``` 
ng new my-app --directory=Chapter1
```

## 2. Run the application using,

```
ng serve --port=4200
```

## Extension installed
- Nx Console
- Angular Language Service
- Angular Snippets
- Angular Evergreen
- Material Icon Theme

----
----

# Chapter 2:

## 1. Create angular application with below command. 

```
ng new my-blog --routing --style=scss --directory=Chapter2/
```

## 2. Install bootstrap

```
npm install bootstrap
```

## 3. Create core module

```
ng generate module core
```

## 4. Create component header

```
ng generate component header --path=src/app/core --module=core --export
```

## 5. Create shared module

```
ng generate module shared
```

## 6. Create footer component which can be in shared module

```
ng generate component footer --path=src/app/shared --module=shared --export
```

## 7. Create contact module.

```
ng generate module contact
```

## 8. Create contact component.

```
ng generate component contact --path=src/app/contact --module=contact --export --flat
```

## 9. Adding articles feature module

```
ng generate module articles --route=articles
```

## Adding Scully to application.

```
npm install @scullyio/init @scullyio/ng-lib @scullyio/scully @scullyio/scully-plugin-puppeteer --force
```

## Reference

- [Angular Projects](https://github.com/PacktPublishing/Angular-Projects-Third-Edition)
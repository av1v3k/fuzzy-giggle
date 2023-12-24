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

## Intialize blog page:

```
ng generate @scullyio/init:markdown --project my-blog
```

Above command would consecutively ask many questions which needs to be answered.

```
npx nx generate @scullyio/init:create-markdown --name=posts --route=posts --sourceDir=mdfiles --project=my-blog --no-interactive
```

Import the below in articles component.

```
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, map } from 'rxjs';
```

To Build and generate blog routes,
```
ng build
npx scully --project my-blog
```

To serve the blog, The command starts 2 web servers - 1. static prerendered version of our website built using Scully 2. Angular Live version.
```
npx scully serve --project my-blog
```

To Create a New Blog Post: - which creates a new .md files in the folder mdfiles and edit the file. And follow, previous 2 commands above to build and serve the application.

```
ng generate @scullyio/init:post --name="Angular and Scully"
```

# Chapter 3: Issue Tracking System

Initialize the Project:

```
ng new issue-tracker --defaults
```

Install cds
```
npm install @cds/core @clr/angular @clr/ui --save
```

Create service issues,
```
ng generate service issues
```

## Reference

- [Angular Projects](https://github.com/PacktPublishing/Angular-Projects-Third-Edition)
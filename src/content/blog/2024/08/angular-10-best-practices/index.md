---
title: "Angular: My best practices"
date: 2024-08-10
categories:
  - "frontend-development"
tags:
  - "angular"
  - "design-patterns"
  - "typescript"
coverImage: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-site-6fafa.firebasestorage.app/o/blog-posts%2F1_QfmtMDpR23DkpSBOEB50FA.webp?alt=media&token=67fc747c-5a93-4829-93bc-9654a02e313f"
---

When working with Angular, it's important to maintain some tried and trusted methods to keep things running smoothly. I have outlined some of my best practices that will help to keep your Angular app optimised and organised.

## Set up for success

One of the most important things you can do for your Angular application, is to keep it organised. It is crucial to choose, and stick to, an architectural pattern that will be understood by everyone working on the project.

### Creating app elements

Firstly, you should be creating your components, services, and other elements with **Angular CLI.** With Angular CLI, elements will be created following Angular coding standards, your code will be consistent, and it will help to automate repetitive tasks.

For example, if you're creating a new application. Use the following command to initialise the app: `ng new name-of-application`. Once you've initialised your app, you'll want to create elements like so: `ng generate component name-of-component`

For further reference on how to create app elements with Angular CLI, [read the documentation.](https://angular.dev/tools/cli)

### Folder structure

An Angular app needs to be organised. Everything should have its place. Ideally your app will have three main folders:

- **Core** - This is where we keep our logic that relates to global state, APIs, and singleton services.

- **Features** - This is where we keep our individual features of the application. For example, various screens/views. If you had a `UserProfile` screen. You would have a sub-folder within features like so: `features/user-profile/...` All code that relates to the user profile screen (and is not shared with any other features) would live here.

- **Shared** - This folder is where we keep any shared/utilities that are used in multiple places, but not all. For example, if you had a service or class that manipulated dates. This service would be stored in the `shared/services` folder.

It will probably be easier to understand with a diagram of sorts. See the layout below:

```
/my-angular-app (root folder level)
│
├── /public (Assets & Images)
|
├── /src
│   ├── /environments (Environment configurations)
│   │
│   ├── /styles (Global styles & stylesheets)
|   |
│   ├── /app (Main app directory)
│   │   ├── /core
│   │   │   ├── /services
│   │   │   ├── /interceptors
│   │   │   ├── /guards
│   │   │   ├── /models
│   │   │
│   │   ├── /shared
│   │   │   ├── /components
│   │   │   ├── /constants
│   │   │   │   ├── category1.constants.ts
│   │   │   │   ├── category2.constants.ts
│   │   │   ├── /interfaces
│   │   │   │   ├── category1.interfaces.ts
│   │   │   │   ├── category1.interfaces.ts
│   │   │   ├── /directives
│   │   │   ├── /pipes
│   │   │
│   │   ├── /features
│   │   │   ├── /feature1 (Individual feature modules / pages / views)
│   │   │   │   ├── /components
│   │   │   │   ├── /services
│   │   │   |   ├── /constants
|   │   │   │   ├── /interfaces
│   │   │   │   ├── feature1.component.ts
│   │   │   │   ├── feature1.service.ts
│   │   │   └── ...
```

As you can see from the layout above, each folder has the same layout and follows the same pattern. This will help to find what you need, and keep code in it's relevant location.

## Lazy loading

### What is lazy loading?

Lazy loading is a concept where you only load what you need at the current time. Rather than loading everything all at once. It will only load the parts of the app that are needed for the current page or action. This makes the app faster and more efficient because you don't have to wait for everything to load at once. In Angular, this helps speed up the initial loading time of the app by breaking it down into smaller pieces that get loaded as you navigate through different parts of the site.

For example: Let's say you have an Angular app that has 14 different features, or views. A user comes to your website via the home page, logs in, checks something on their account page, and then closes the browser. If you _**didn't**_ implement lazy loading, you would have loaded all 14 feature modules. However the user only needed to view 3 of them.

### How to implement lazy loading

In an Angular app, you'll lazy load your feature modules via the routing module.

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./features/home/home.module')
    .then(m=>m.HomeModule)
  },
  {
    path:'login',
    loadChildren: () => import('./features/login/login.module')
    .then(m=>m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

As you can see in the example above, each module will be loaded via the `loadChildren` property. This will allow you to encapsulate your feature logic within individual modules for that specific feature.

## Use "trackBy" in for loops

You should use `trackBy` in Angular's `*ngFor` loops to improve the performance of your application, especially when dealing with large lists of data. Here's why:

Normally, when Angular updates a list, it checks each item in the list by its reference. If anything changes in the list, Angular re-renders the entire list—even if only one item has changed. This can be inefficient.

Using `trackBy` allows you to tell Angular how to uniquely identify each item in the list, like by an ID. This way, when the list changes, Angular only updates the specific item(s) that have changed instead of re-rendering the whole list. This reduces the amount of work the framework has to do, making your app faster and more efficient, especially for long or frequently updated lists.

I'll give you a couple of examples. Angular has implemented a new and improved way of writing for loops in templates. You can see how it should be done depending on which version of Angular you're using

The template file:

```
<!-- Angular version <= 16 -->
<div *ngFor="let item of items; trackBy: trackById">
  {{ item.name }}
</div>

<!-- Angular version >= 17 -->
@for (let item of items; track item.id) {
  <div>{{ item.name }}</div>
}
```

The component file (will only be required for version <= 16)

```
trackById(index: number, item: any): number {
  return item.id; // or any unique property of your items
}
```

## OnPush change detection

By default, Angular's change detection system checks **all components** for changes any time a change occurs. For example: user interaction, HTTP request completion. In large applications with many components, this can cause unnecessary re-checking of components that haven't changed, slowing down the app.

With `OnPush`, Angular only checks for changes in a component if:

- An input property of the component has changed.

- An event or callback (like `click` or `setTimeout`) triggers a change.

- An observable or promise provides new data.

### Example

Imagine you're building a dashboard for a financial app that shows stock prices, user portfolios, and account balances. Since the app only updates specific pieces of data, and you don't want the entire page re-rendering unnecessarily every time the data changes, you could optimize it using `ChangeDetectionStrategy.OnPush`

Suppose your dashboard component receives portfolio data via an `@Input()` from a parent component, and this data only updates occasionally. In this case, you can use `ChangeDetectionStrategy.OnPush` to tell Angular to check the component for changes **only** when the `@Input()` changes, rather than running change detection for every event in the app.

```typescript
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
  @Input() portfolio: Portfolio;
}
```

This ensures that the `PortfolioComponent` will only re-render when its `@Input` (`portfolio`) is updated, reducing unnecessary checks and improving the app's performance.

**How It Works**: If the parent component passes a new reference of the `portfolio` object, the child component (`PortfolioComponent`) will re-render. However, if the `portfolio` data itself is updated but the reference stays the same, the component won’t be re-rendered unless explicitly triggered.

This approach is particularly useful for large-scale applications with a lot of data-driven UI, where frequent and unnecessary re-rendering can cause performance issues.

## The async pipe

The async pipe is used in Angular templates to automatically subscribe to `Observable` data streams. It handles the emission of values, and also automatically unsubscribes from the `Observable`. This is particularly useful as it means you don't need to manually subscribe and unsubscribe from the `Observable` in your component file. It will help with performance, because if you don't unsubscribe from your subscriptions. It can cause memory leaks.

### Example

Imagine you are building a **chat application** where messages are fetched from a server and streamed to the client using an observable. You want to display these messages in real time without manually managing the subscription to the data stream.

chat.component.ts:

```typescript
export class ChatComponent {
  messages$: Observable<Message[]> = this.chatService.getMessages();
}
```

In the template file, you can use the `async` pipe to display the messages:

```typescript
<div *ngFor="let message of messages$ | async">
  {{ message.content }}
</div>
```

### When to use it

- **Real-time data**: For continuously updating data streams (e.g., chat messages, live stock prices).

- **Avoid manual subscription**: If you don't want to manually subscribe to observables in your code and deal with unsubscribing in the `ngOnDestroy` lifecycle hook.

- **Cleaner template**: The `async` pipe simplifies your template and reduces the amount of code required to handle asynchronous data, making your application more readable and maintainable.

### Why you should use it

- **Prevents Memory Leaks**: Automatically unsubscribes from observables when the component is destroyed, which helps avoid memory leaks.

- **Simplifies Code**: Removes the need for explicit `subscribe` and `unsubscribe` logic in the component's TypeScript file.

- **Reactive UI Updates**: Automatically updates the UI when the observable emits new data, keeping the interface responsive and real-time.

This use case is particularly relevant in applications requiring real-time data, such as messaging apps, live dashboards, or notifications, where maintaining efficient and clean code is critical for scalability and performance.

## Keep it simple, stupid (KISS)

he **KISS (Keep It Simple, Stupid)** principle is a design philosophy that emphasizes simplicity in systems and solutions. It advocates for avoiding unnecessary complexity, which can lead to issues like poor maintainability, difficulty in debugging, and slower performance. The goal is to ensure that systems are as simple and intuitive as possible while still fulfilling the necessary functionality.

### Why It’s Important

**Bug Prevention**: Complex systems are more prone to bugs because the interaction between components can become difficult to track. Keeping it simple reduces this risk by minimizing the moving parts.

**Maintainability**: Simple code is easier to maintain, read, and understand. When the code is clean, new developers or team members can easily jump in and make updates without being overwhelmed by complex logic.

**Scalability**: Simple solutions are generally easier to scale. As the application grows, it's more efficient to build on simple, clear foundations than on overly complex, tightly coupled systems.

**Performance**: Simplicity often leads to better performance because it avoids unnecessary processing, making the application faster and more responsive.

### How to implement it in Angular

**Modular Architecture**: Break your application into smaller, reusable, and independent components or services. Each component should serve a single purpose. For example, instead of having one large component that handles multiple responsibilities, split them into smaller components, each responsible for a specific part of the UI. For example - rather than have one big `TodoComponent` file. Have separate components for the `TodoListComponent` and `TodoListItemComponent`

**Use Services for Business Logic**: Keep components focused on the UI, and move business logic to services. This ensures components remain simple and primarily concerned with rendering, while services handle more complex logic. For example: any data manipulation, or if you need to combine the data from multiple API calls into one `Observable` steam. You would use a service for this.

**Avoid Over-Engineering**: Don’t try to solve problems you don’t have yet or anticipate every future use case. Focus on what you need right now, and allow flexibility for future changes.

**Example**: Don’t add unnecessary abstractions like complex decorators or generic classes unless there's a clear need. Keep your solutions direct and simple.

**Simple Data Flow**: Use Angular’s reactive programming features, like `@Input`, `@Output`, and observables, to maintain clear and predictable data flows. Avoid tightly coupling components and services, which can lead to confusion and hard-to-debug issues.

**Leverage Angular’s Built-in Features**: Instead of writing custom solutions, use Angular’s built-in directives (`*ngIf`, `*ngFor`, `async` pipe) and lifecycle hooks (`ngOnInit`, `ngOnDestroy`). This reduces the amount of custom code you need to maintain and keeps the codebase more standard and simpler to understand for other developers.

## Standalone components

**Standalone components** in Angular are a new feature introduced in Angular 14 that allow you to create components without requiring them to be declared in Angular modules (`NgModules`). This simplifies Angular's previously strict reliance on modules and provides a more flexible approach to building applications. [The official Angular docs](https://angular.dev/guide/components/importing#standalone-components) clearly state that all new development in Angular should be done with standalone components.

### Concept

In traditional Angular development, every component, directive, or pipe had to be declared in an `NgModule`. With standalone components, you can bypass this requirement by creating components that are self-sufficient and independent of modules.

A standalone component is marked using the `standalone: true` flag in its metadata, which allows it to import its dependencies directly (such as other components, directives, or services) without needing to be part of an `NgModule`.

### Why use standalone components now?

1. **Simplification of the Application Structure**:
    - Standalone components reduce the complexity of Angular applications by eliminating the need to declare components in an `NgModule`. This means fewer files and configurations to manage.

    - In small and medium-sized applications, this can make the codebase more straightforward, easier to maintain, and more intuitive for new developers.

3. **Faster Development**:
    - You can now develop and test components in isolation without worrying about module configurations. This accelerates the development process, as you can create standalone components that handle specific tasks independently.

    - It streamlines the creation of individual features or even small-scale apps without the overhead of setting up modules.

5. **Improved Flexibility**:
    - Standalone components enable you to import only the required dependencies at the component level. This means you no longer need to worry about large module files that import unnecessary features for the entire app.

    - This granular approach also promotes better tree-shaking, which can reduce the final bundle size of your app by eliminating unused code.

7. **Future-Proofing Your Application**:
    - With Angular moving toward a module-free approach, using standalone components aligns with the future direction of the framework. New Angular features will likely build on this modular-free structure, making it important to start incorporating standalone components into your applications now to stay up to date with best practices.

9. **Reusable Components Across Multiple Applications**:
    - Standalone components can be easily reused in different applications or libraries, as they are self-contained and don’t rely on an `NgModule`. This makes sharing code between projects much easier.

### How to use standalone components

You would make a component standalone by setting the component metadata property to `true`. This will allow you to import modules, components, directives etc. into your standalone component directly. See the code below for an example:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  imports: [CommonModule],
  standalone: true
})
export class UserListComponent {}
```

## Renderer is your friend-erer

In Angular, **`Renderer2`** is a service provided to help developers interact with the DOM (Document Object Model) in a platform-independent way. It abstracts direct DOM manipulation, which is crucial for ensuring cross-platform compatibility and security within Angular applications, particularly in server-side rendering environments like Angular Universal (SSR)

### Key concepts

**Security (Avoiding XSS Attacks)**: Direct DOM manipulation can introduce security risks, such as cross-site scripting (XSS) vulnerabilities, by allowing unsafe data to be inserted into the DOM. Angular’s `Renderer2` ensures that interactions with the DOM are handled in a secure way, preventing such vulnerabilities by applying Angular's built-in sanitization and security measures..

**Platform Independence**: Directly manipulating the DOM using methods like `document.getElementById` or `document.createElement` works only in environments where the browser's DOM is available (i.e., client-side). However, Angular supports server-side rendering (SSR), where there is no DOM. `Renderer2` provides a way to interact with the DOM that works in both client-side and server-side environments, ensuring your app remains functional across platforms.

### Common Use Cases for Renderer2

- **Dynamic DOM Manipulation**: `Renderer2` is typically used when components or directives need to add, remove, or modify elements dynamically at runtime.

- **Cross-Platform Applications**: If you are working on an application that might be rendered in environments that don't support the DOM (e.g., server-side rendering, Web Workers, etc.), using `Renderer2` ensures that your app still behaves as expected without errors.

- **Listening to Events**: In addition to manipulating DOM elements, `Renderer2` allows you to dynamically add event listeners to DOM elements, improving the flexibility of user interactions.

### Why Use Renderer2

1. **Cross-Platform Compatibility**: Angular applications are expected to work not only in the browser but also in environments without a DOM (e.g., server-side rendering with Angular Universal). Using `Renderer2` allows your app to interact with the DOM in a safe, consistent manner across these environments.

3. **Security**: Angular uses `Renderer2` to apply necessary security checks, such as preventing XSS attacks, which might otherwise occur if developers directly insert untrusted data into the DOM.

5. **Separation of Concerns**: Using `Renderer2` encourages a cleaner, more structured approach to DOM interaction, aligning with Angular’s philosophy of handling view-related changes in a declarative way, while maintaining separation between business logic and DOM manipulation.

By using `Renderer2`, Angular ensures your app remains both **cross-platform** and **secure**, which is critical when building scalable, robust web applications.

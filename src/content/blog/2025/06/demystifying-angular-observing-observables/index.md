---
title: "Demystifying Angular: Observing Observables"
date: 2025-06-28
categories:
  - "frontend-development"
tags:
  - "angular"
  - "framework-concepts"
  - "typescript"
coverImage: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-site-6fafa.firebasestorage.app/o/blog-posts%2Fimage-11.png?alt=media&token=40f8d8b3-d8c8-44f9-bc75-c428575590bd"
---

Angular is a pretty great frontend framework (at least I think so, anyway). However, there are things that confused the life out of me when I first started trying to get to grips with them. One of these things, was Observables. Which likes most things in life, seems so trivial now looking back.

In modern Angular applications, you'll probably be harnessing the power of signals. That being said, if you’re working with Angular. Sooner or later you’re going to bump into Observables. And if you’re anything like I was, you’ll nod along for a bit, pretend you get it, then go stare blankly at the docs for 40 minutes wondering why .subscribe() doesn’t give you what you need.

Let me save you the spiral.

* * *

## **What is an Observable, really?**

In plain English: **An Observable is a stream of data you can listen to over time**.

That’s it.

It’s not magic. It’s just a way of saying, _“Let me know when something happens, and I’ll deal with it then.”_

Think:

- Waiting for data from an API

- Watching a form input for changes

- Responding to button clicks

- Handling WebSocket messages

It’s all stuff that doesn’t happen immediately, but you want to react when it does.

* * *

## **Why Not Just Use Promises?**

**Promises are fine**, but they only give you one result, one time.

Imagine you’re ordering a takeaway. A Promise is the driver ringing your doorbell once. You answer it, take the food, job done.

An Observable is like getting a food subscription. Every Friday, like clockwork, you get a new delivery. You can decide what to do with it each time, and stop the subscription whenever you want.

So if you need **multiple values over time**, or you want more control over how you deal with them, Observables are the way to go.

* * *

## **A Quick Angular Example**

Say we’ve got a service that fetches a list of pubs (keeping it realistic):

```typescript
@Injectable({ providedIn: 'root' })
export class PubService {
  constructor(private http: HttpClient) {}

  getPubs(): Observable<Pub[]> {
    return this.http.get<Pub[]>('/api/pubs');
  }
}
```


In your component:

```typescript
export class PubListComponent implements OnInit {
  pubs$: Observable<Pub[]>;

  constructor(private pubService: PubService) {}

  ngOnInit() {
    this.pubs$ = this.pubService.getPubs();
  }
}
```

And in your template:

```html
<ul>
  <li *ngFor="let pub of pubs$ | async">{{ pub.name }}</li>
</ul>
```


Notice that $ at the end of pubs$ — bit of a convention to show it’s an Observable. The async pipe takes care of subscribing and unsubscribing automatically. Clean and tidy.

* * *

## **Do I Need to Unsubscribe?**

If you’re using the async pipe: **nope**. Angular handles that for you.

But if you’re subscribing manually in code, **yes, you do** — especially in components. Otherwise you’ll end up with memory leaks or code running when it shouldn’t.

The usual pattern (before v16+) in more legacy codebases looks like this:

```typescript
private destroy$ = new Subject<void>();

ngOnInit() {
  this.pubService.getPubs()
    .pipe(takeUntil(this.destroy$))
    .subscribe(pubs => {
      this.pubs = pubs;
    });
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
```


That `takeUntil()` bit basically says, _“Only stay subscribed until I say otherwise.”_ Then in `ngOnDestroy`, you call time on it.

Nowadays, in modern Angular, we have a built in lifecycle-aware operator: `takeUntilDestroyed()`. You would use it as follows:

```typescript
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

ngOnInit() {
  this.pubService.getPubs()
    .pipe(takeUntilDestroyed())
    .subscribe(pubs => {
      this.pubs = pubs;
    });
}
```

This is because Angular had the sense to realise aint nobody got time to manually unsubscribe from every subcription. They want to scrap it once they no longer need it!

## **Where You’ll See Observables in Angular**

You’ll find Observables all over the place in Angular:

- HTTP requests (HttpClient)

- Reactive form value changes

- Route param and query param changes

- Event handling (clicks, key presses, scrolls)

- Real-time updates with WebSockets

They’re baked in — so if you’re building anything non-trivial, you’ll end up using them whether you like it or not.

* * *

## **Real Talk: Are Observables Hard?**

They can be — especially when people start chaining ten operators together like it’s some kind of functional programming flex.

But for 90% of real-world use, you only need to know a few key things:

- `subscribe()` to use the data

- `pipe()` to modify or manage the stream

- `takeUntil()` to avoid memory leaks

- async pipe to keep things clean in templates

Start with those, and you’ll be grand.

* * *

## **Final Thoughts**

Observables aren’t as scary as they seem. They’re just a way to work with data that arrives over time — which, in modern web apps, is most of it.

Once you get the hang of them, they actually make your code cleaner and easier to reason about — especially compared to callback hell or Promise juggling.

And look — if you’re just starting out, don’t feel bad if they confuse you at first. They confused me too. And probably still will again at some point on a Monday morning before the coffee kicks in.

If you found this useful, or it cleared something up, feel free to share it. And if you want to chat more about Angular, Observables, or frontend life in general, drop me a message.

Thanks for reading.

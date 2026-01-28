# servo-hackernews

Node.js script that gets the 10 more recent entires at [Hacker News](https://news.ycombinator.com/) for a given term (or `servo` by default).

Install dependencies:
```sh
npm install
```

Run [Servo](https://servo.org/download) enabling WebDriver on port 7002:
```
~/Downloads/servo-x86_64-linux-gnu/servo/servo --webdriver=7002
```

Run the application:
```sh
node main.js
```

That would print in the console the list of the 10 more recent stories related to `servo`:
```
More recent top 10 stories
[
  'FOSDEM 2026 – The Servo project and its impact on the web platform ecosystem [video](https://fosdem.org/2026/schedule/event/LXFKS9-servo-project-impact/)',
  'December in Servo: multiple windows, proxy support, better caching, and more(https://servo.org/blog/2026/01/23/december-in-servo/)',
  'December in Servo(https://servo.org/blog/2026/01/23/december-in-servo/)',
  'Servo 2025 Stats(https://blogs.igalia.com/mrego/servo-2025-stats/)',
  'Servo is starting to become usable(https://book.servo.org/building/building.html)',
  'November in Servo: Monthly Releases, Context Menus, Parallel CSS Parsing, & More(https://servo.org/blog/2025/12/15/november-in-servo/)',
  'November in Servo: monthly releases, context menus, parallel CSS parsing, and m(https://servo.org/blog/2025/12/15/november-in-servo/)',
  'Show HN: Use TypeScript in Servo Browser Fork(https://github.com/pannous/servo/)',
  'Servo: Lightweight, high-performance alternative for embedding web technologies(https://servo.org/)',
  'Servo Sponsorship Tiers(https://servo.org/blog/2025/11/21/sponsorship-tiers/)'
]
```

You can pass an argument to use as search term:
```sh
node main.js igalia
```

And the result:
```
More recent top 10 stories
[
  'Servo 2025 Stats(https://blogs.igalia.com/mrego/servo-2025-stats/)',
  'Unlocking 15% More Performance: A Case Study in LLVM Optimization for RISC-V(https://blogs.igalia.com/compilers/2025/11/22/unlocking-15-more-performance-a-case-study-in-llvm-optimization-for-risc-v/)',
  'Helping Valve to power up Steam devices(https://www.igalia.com/2025/11/helpingvalve.html)',
  'Servo: A new web engine written in Rust(https://blogs.igalia.com/mrego/servo-a-new-web-engine-written-in-rust/)',
  'Servo: A new web engine written in Rust(https://blogs.igalia.com/mrego/servo-a-new-web-engine-written-in-rust/)',
  'Igalia, Servo, and the Sovereign Tech Fund(https://www.igalia.com/2025/10/09/Igalia,-Servo,-and-the-Sovereign-Tech-Fund.html)',
  'RIP XSLT?(https://www.igalia.com/chats/xslt-liam)',
  'Summary of the May 2025 TC39 plenary(https://blogs.igalia.com/compilers/2025/07/03/summary-of-the-may-2025-tc39-plenary/)',
  'Fair(er) DRM GPU Scheduler(https://blogs.igalia.com/tursulin/fair-er-drm-gpu-scheduler/)',
  'Fair(er) DRM GPU Scheduler(https://blogs.igalia.com/tursulin/fair-er-drm-gpu-scheduler/)'
]
```


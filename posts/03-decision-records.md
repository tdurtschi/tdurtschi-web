---
title: "Are you documenting your important decisions?"
date: "2021-04-11"
previewLength: 600
---

I want to start by sharing an experience I had on a recent project. Our team inherited a document management application from a group of contractors who had all left the company about 2 years ago. They had left behind only a small readme about how to run the project.

One major problem surfaced once we started working in the code: this app had been built to handle two separate types of users from different parts of the organization, and the code to handle these two use cases was completely jumbled together. This made it very difficult to understand and extend, especially since our team was only familiar with *one* of the user types. 

We spent a few days struggling with this codebase, frequently running into problems. Making changes intended for our users caused the tests to break for the other users, with no simple explanation as to why.

After struggling for a week or so, our team decided to split the application in two, refactoring each app to handle just one type of user. We spent a few days getting everything up and running. As expected, we began making good progress on our features now that we weren't worried about breaking the other workflow.

Soon after, we had a meeting with several business stakeholders. When I explained our refactor, I was expecting them to be impressed by our insight. After all, we were now delivering stories at a faster rate. However, to my surprise, they immediately pushed back on our strategy. They were concerned that we hadn't considered why the app was architected to handle two user groups in the first place.

We asked why the first version of the app was build this way, but nobody present in the meeting actually knew! They vaguely recalled a past conversation about it, but the actual reasoning had been lost with the departure of the original implementers.

We left the conversation feeling concerned that maybe we'd made the wrong decision. Was there something we didn't know about that would end up coming back to bite us? If only the engineers from the past had left us some clues...

## Decision Records

For me, this experience perfectly illustrated the value that a decision record can provide. A decision record represents a snapshot in time when an important decision was made. The goal is to capture the relevant information at the time a decision was made, alternatives that were considered, and so on. 

_Note: Many other online sources use the term "Architecture Decision Records". I'm avoiding this term primarily becuase I think decision records are valuable for more than just architectural decisions, and secondly, because "architecture" means something different to just about everybody._

## How Does a Decision Record Make Your Team More Successful?

As humans, our memory is imperfect, and the context surrounding a decision will eventually be lost over time. This problem is made worse when a team has high turnover. One benefit of decision records is that they can prevent churn. In the example I shared at the beginning, we wrote a decision record explaining why we had split our app in two. The next time the topic came up, we could point to our decision record to show why we had made our decision. We hoped that by leaving a decision record behind, the next team of developers to work on this app would understand our decision, and wouldn't attempt to recombine the two code bases.

Decision records also serve as a way for the team to collectively own their decisions, preventing disagreements among team members. For example, if your team decided to structure source files in a certain way, or apply certain formatting conventions, it is helpful to have a document to refer to next time someone asks "why?".

One common critique of software documentation is that it goes out of date quickly. I agree! The great thing about decision records is that, since they are a snapshot in time, they never go out of date. However, this doesn't mean your decisions are immutable for all time. If your team learns something new that tips the scales, just go ahead and amend your decision record.

## How to Write a Decision Record?

It's easy to find different templates with a quick search, and I've also included one at the end of this article. Decision records cover just a few simple points:

- Context (why do you need to make this decision?)
- Details about each option considered (you did consider more than one option, right?)
- The Decision (what are we going to do?)
- The Reasoning (what made this choice the best one?)

Here are a few best practices for Decision Records (DRs):

- Consider writing a DR when making a large, impactful decision, or when the team isn't aligned on how to proceed.
- When possible, have the whole team write the DR together. This will help ensure the team is aligned about the decision being made.
- Write the DR when the decision is fresh in your memory. If possible, write it while you're making the decision. (Writing a DR may help you make a better decision!)
- Don't spend a lot of time. 30-60 mins is usually enough.
- Put the DR somewhere it's easy to find. I prefer having DR's in source control, in a folder called 'Decision Records' at the project root.

### Example Template

```md
# Title

_Date_

## Status

What is the status, such as proposed, accepted, rejected, deprecated, superseded, etc.?

## Context

Why do you need to make this decision now? What's going on on with the product? What have you learned recently?

## Options Considered

List each option, with pro's and con's for every one.

## Decision

What is the decision? What factors led you to this decision?

## Consequences

Describe immediate consequences of the decision.
```

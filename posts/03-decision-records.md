---
title: "Are you documenting your important decisions?"
date: "2021-04-11"
previewLength: 600
---

I want to start by sharing an experience I had on a recent project. Our team was tasked with adding new features to an internal app for managing insurance documents. We inherited the codebase from a group of contractors who had all left the company about 2 years prior, leaving behind only a small readme about how to run the project.

One major problem became very clear once we started working in the code: the app had been built to handle two separate types of users, and that the code to handle these two use cases was completely jumbled together. This made it very difficult to understand and extend, especially since our team was only familiar with one of the user types. We spent a few days struggling with this codebase, but we kept running into problems. Making changes intended for our users caused the tests to break for the other users, with no simple explanation as to why.

Our team decided to split the application in two, refactoring each app so that it could each just one type of user. We spent a few days getting everything up and running, and started making good progress on adding our features without worrying about breaking the other workflow.

Soon after, we had a meeting with several business stakeholders. When I explained our refactoring strategy to them, I expected them to be impressed that our insight had resulted in quicker feature delivery. However, to my surprise, they immediately pushed back on our strategy. "I thought the original developers had decided to handle both user types with one codebase," one stakeholder said. A few architects on the call nodded in agreement. Our team asked why that decision had been made, but nobody present actually knew! They recalled that there was a conversation about it, but the context had been lost with the departure of the original implementers.

We left the conversation feeling concerned that maybe we'd made the wrong decision. Was there something we didn't know about that would end up coming back to bite us? This is a great example of a case where having a decision record would have been useful!

## What is a Decision Record?

A decision record represents a snapshot in time when an important decision was made. The goal is to capture the relevant information at the time a decision was made, alternatives that were considered, and so on.

_Note: Many other online sources use the term "Architecture Decision Records". I'm avoiding this term primarily becuase I think decision records are valuable for more than just architectural decisions, and secondly, because "architecture" means something different to just about everybody._

## How to Write a Decision Record?

It's easy to find different templates with a quick search, but I've also included one at the end of this article. I believe there are just a few important topics to cover:

- Context (why do you need to make this decision?)
- Details about each option considered (you did consider more than one option, right?)
- The decision itself (what are we going to do?)
- The reasoning (what made this choice the best one?)

Here are a few best practices for Decision Records (DRs):

- Consider writing a DR when making a large, impactful decision, or when full team alignment has been difficult to achieve.
- When possible, have the whole team write the DR together. This will help ensure the team is aligned about the decision being made.
- Write the DR when the decision is fresh in your memory. If possible, write it while you're making the decision. (Writing a DR may help you make a better decision!)
- Don't spend a lot of time. 30-60 mins is usually enough!
- Put the DR somewhere it's easy to find. I prefer having DR's in source control, in a folder called 'Decision Records' at the project root.

## How Does a Decision Record Make Your Team More Successful?

Decision records solve a few important problems. First of all, as humans our memory is imperfect, and the important context around decisions will be lost over time (even worse if the team has high turnover). A decision record can prevent churn when new team members don't understand why a decision was made. In the example I shared at the beginning, my pair and I ended up drafting a decision record explaining why we had split the app in two. We hoped that a third group of engineers wouldn't come along and decide to recombine the applications!

Decision records also serve as a way for the team to collectively own their decisions, preventing disagreements among team members. For example, if your team decided to structure source files in a certain way, or apply certain formatting conventions, it could be helpful to have a document to refer to next time someone asks "why?".

One common critique of software documentation is that it goes out of date quickly. A great thing about decision records is that, since they capture a single point in time, they never go out of date! However, this doesn't mean decisions are immutable for all time. If your team learns something new that tips the scales, go ahead and add another decision record which says as much.

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

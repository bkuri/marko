# Contributing

:+1::tada: We're excited you want to contribute! Read on! :tada::+1:

## Reporting security issues

If you discover a security issue, please **DO NOT** file a public issue, 
instead send your report [privately](https://gitter.im/patrick-steele-idem).

Security reports are greatly appreciated and we will publicly thank you for it.
We currently do not offer a paid security bounty program.

## Reporting other issues

A great way to contribute to the project is to send a detailed report when you
encounter an issue.

Check that [our issue database](https://github.com/marko-js/marko/issues)
doesn't already include that problem or suggestion before submitting an issue.
If you find a match, you can use the "subscribe" button to get notified on
updates. Rather than leaving a "+1" or "I have this too" comment, you can add a 
[reaction](https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments) 
to let us know that this is also affecting you without cluttering the conversation. 
However, if you have ways to reproduce the issue or have additional information that may help
resolving the issue, please leave a comment.

We have an [ISSUE_TEMPLATE](ISSUE_TEMPLATE.md) that will populate your textarea 
when you go to open an issue.  Use the relevant section and remove the rest. 

Please provide as much detail as possible.

## Quick contribution tips and guidelines

This section gives the experienced contributor some tips and guidelines.

### Pull requests are always welcome

Not sure if that typo is worth a pull request? Found a bug and know how to fix
it? Do it! We will appreciate it. Any significant improvement should be
documented as [a GitHub issue](https://github.com/marko-js/marko/issues) before
anybody starts working on it.

We are always thrilled to receive pull requests. We do our best to process them
quickly. If your pull request is not accepted on the first try,
don't get discouraged! We'll work with you to come to an acceptable solution.

If you're new to GitHub or open source you can check out this 
[free course](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) 
on how to contribute to an open source project.

Before submitting your PR, make sure that all new and previous tests pass and that [coverage](https://coveralls.io/github/marko-js/marko?branch=master) has not decreased:
```
npm run test-coverage
```

### Tackling an existing issue

Comment on the issue and let us know you'd like to tackle it.   
We'll assign you to the issue so that we don't duplicate effort.  

If for some reason you aren't going to be able to complete the work, 
let us know as soon as you can so we can open it up for another 
developer to work on.

Here's some to get started with:

- [`bite-sized`](https://github.com/marko-js/marko/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3Abite-sized%20no%3Aassignee) issues: great for new contributors
- [`help-wanted`](https://github.com/marko-js/marko/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3Ahelp-wanted%20no%3Aassignee) issues: won't be tackled in the near future by the maintainers... we need your help!
- [un-assigned](https://github.com/marko-js/marko/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20no%3Aassignee%20) issues: open issues that no one has claimed... yet

## Maintainers

* [Patrick Steele-Idem](https://github.com/patrick-steele-idem) (Twitter: [@psteeleidem](http://twitter.com/psteeleidem))
* [Phillip Gates-Idem](https://github.com/philidem/) (Twitter: [@philidem](https://twitter.com/philidem))
* [Michael Rawlings](https://github.com/mlrawlings) (Twitter: [@mlrawlings](https://twitter.com/mlrawlings))
* [Martin Aberer](https://github.com/tindli) (Twitter: [@metaCoffee](https://twitter.com/metaCoffee))

## Labels

Once you post an issue, a maintainer will add one or more labels to it.
Below is a guideline for the maintainers and anyone else who is interested 
in what the various labels mean. 

### Type
Every issue should be assigned one of these.

- **enhancement**: A feature request
- **bug**: A bug report
- **docs**: An issue about documentation
- **question**: A question about how to use Marko

### Scope
What part of the Marko stack does this issue apply to? In most cases there should only be one of these.

- **parser**: Relates to `htmljs-parser`
- **compiler**: Relates to the compiler (server only)
- **runtime**: Relates to the runtime (isomorphic/universal)
- **core-taglib**: Relates to custom tags that ship with Marko
- **widgets**: Relates to `marko-widgets`
- **tools**: Relates to editor plugins, commandline tools, etc.

### Difficulty
Indicates a very large or very small issue.  Not required.

- **bite-sized**: An issue that would be great for new contributors to tackle
- **epic**: A large change that will take some time and likely have sub-issues

### Status
In many cases, additional *actions* should be taken when applying one of these.

- **resolved**: The question was answered, the bug was fixed, or the feature was implemented. *Close the issue.*
- **confirmed**: This is indeed a bug, or the feature has been fleshed out and should be implemented.  
- **help-wanted**: This is not something on the main roadmap, but we'd love for someone in the community to tackle it
- **invalid**: This was user error, not a bug. *Close the issue.*
- **duplicate**: Someone has already posted the same or a very similar issue.  *Reference the original issue and close this issue.*
- **wontfix**: This is not a bug, but intended behavior, or this feature will not be implemented.  *Close the issue.*
- **needs-clarifying**: More information is needed to reproduce the bug. *Ask for more information.  If no reply is received within a week, the issue should be closed.*

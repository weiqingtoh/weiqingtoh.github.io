---
layout: post
title:  "Force-with-lease: an alternative to force push"
date:   2016-04-20 12:58:00 +0800
categories: posts
tags: workflow git push force lease
---
I currently work at Experimental Systems and Technology Lab, and we build web applications. For development, we use git for version control - for the record, git is fantastic in enabling collaborative work. In our team, we use [feature branches][feature-branch-workflow] in our development workflow, and do [pull requests][pull-requests] for code review by other team members.

A typical feature would be developed in this manner:

1. Pick up a feature, create local feature branch.
1. Do the necessary changes, commit to local feature branch.
1. Push a local branch to the remote, then open a pull request for team members' review.
1. Update local branch with members' comments and update the pull request.
1. Merge pull request into `master` branch.

## Force push-ing

In most typical scenarios, this works well. However, code review often result in me having to *amend or squash my commit(s)*. Because of that, we can't do a simple `git push` to update the feature branch; rather we have to do `git push --force` (or `git push -f`).

When we do a `git push --force`, this is the first thing and comes to mind:

![alt text][force-push-logo]

And of course, a horror story: [Jenkins developer accidentally forced pushed to 150+ github repos][jenkins-force-push]. Many have sworn off it, but others do recommend to do it under controlled conditions. Here is a guide on how to do a proper [force push][force-push-guide].

## A safe alternative: force-with-lease

A force push overwrites a remote branch with your local branch, **regardless** of the status of that branch (more on force push [here](force-push-docs)). This is not ideal in a team scenario as it might result in a member overwriting other members' commits (especially if the member forgot to do a `git rebase`).

__Enter the safer alternative__: `git push --force-with-lease`

Force with lease gives you the flexibility to override new commits on your remote branch, whilst protecting your old commit history:

- If you rebased and squashed/edited/created new commits, you will be able to update the remote  branch.
- If new commits are added to the remote branch (by some team member), this command would not update the remote branch (_and not overwrite any work_).

([As quoted from the docs](force-with-lease-docs))

> This option allows you to say that you expect the history you are updating is what you rebased and want to replace. If the remote ref still points at the commit you specified, you can be sure that no other people did anything to the ref. It is like taking a "lease" on the ref without explicitly locking it, and the remote ref is updated only if the "lease" is still valid.

## Moving towards force-with-lease
Moving from `git push -f` to `git push --force-with-lease` can be challenging - who likes typing extra characters anyway?

One easy way is to set an alias (credits to [this link](set-force-with-lease-alias)): run `git config --global alias.pushf "push --force-with-lease"` and you can execute it with `git pushf`!

_Optional_: Github now allows admins to [disable force push](force-push-disable-github) on a protected branch. This might cause some inconvenience at the start, but in the long run we can prevent screw-ups from happening again.

[estl-blog-link]: http://blog.estl.moe/
[feature-branch-workflow]: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
[force-push-docs]: https://git-scm.com/docs/git-push
[force-push-guide]: http://willi.am/blog/2014/08/12/the-dark-side-of-the-force-push/
[force-push-logo]: https://i.imgur.com/XFQLB.jpg
[jenkins-force-push]: https://groups.google.com/forum/#!searchin/jenkinsci-dev/force$20push/jenkinsci-dev/-myjRIPcVwU/mrwn8VkyXagJ
[force-with-lease-docs]: https://git-scm.com/docs/git-push
[pull-requests]: https://www.atlassian.com/git/tutorials/making-a-pull-request/
[set-force-with-lease-alias]: http://stackoverflow.com/questions/30542491/push-force-with-lease-by-default
[force-push-disable-github]: https://github.com/blog/2051-protected-branches-and-required-status-checks

---
title:  "Setting up Graylog to Export CSV (with nginx)"
date:   2016-02-16 09:58:00 +0800
layout: post
blog: true
tags:
- graylog
- nginx
- deployment
- production
---
I've been using [Graylog](https://www.graylog.org/)  to build a centralised log system to collect logs for applications in production.

Graylog is fantastic at visualisation, similar to kibana, however, we needed to do some extra analysis, which required exporting the data. When I tried downloading it, I got an error:

```
The response to this request is chunked and hence requires HTTP 1.1 to be sent, but this is a HTTP 1.0 request.
```

The fix required some googling and digging, but just to share with the rest (so you guys don't make the same mistake), the root cause was nginx serving Graylog over HTTP/1.0. The fix was to then add the following line:

```
location / {
  ...
  proxy_http_version 	  1.1;
  ...
}
```

Then do a `(sudo) service nginx reload`. And you can happily do data analysis
on the exported data on excel!

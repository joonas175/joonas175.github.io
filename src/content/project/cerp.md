---
name: Oscar cERP
shortName: cerp
shortDescription: Web-based ERP solution
languages: ['JavaScript', 'Java']
frameworks: ['Spring', 'Vue']
other: ['Liferay', 'PWA']
type: work
start: 2021-11
---

# Oscar cERP

A web-based ERP solution, which is a user-friendly interface for Oscar Software's business platform,
consisting of many applications.

## Work

I worked as part of the Oscar cERP project development team, as a full stack developer.
Work consisted of developing new features, bug fixing and deployment to production.
Deployment needed Linux shell knowledge.

Used frameworks and tools:
- Liferay
- Vue 2
- Spring Boot
- Node.js
- Oracle SQL Developer
- Shell

## Notable features

Some bigger features, where I was the biggest contributor.

### ADFS Integration

Creating a plugin for Liferay, which added the [ADFS OpenID](https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/development/ad-fs-openid-connect-oauth-concepts)
authorization flow to Liferay.

### Facelift

Complete rework of the layout. I did most of the theming and action logic for the core layout. A lot of portlets were redone by me also, but the rest of the
team stepped in during the project. The layout overhaul had some code refactoring in it, fixing a lot of bugs encountered during the facelift process.
During the process I learned a lot about CSS/SCSS, JSP and Velocity templates, and plain JS DOM manipulation.

### Timetracking NFC & PWA mode

To add in and out work bookings from a tablet to timetracking, there was an Android app to read NFC tags. 
The Android app was hard to keep up-to-date on the client's devices, so we started researching
on how to implement it using Progressive Web Application functionality. 

I took part in the research process and did the actual implementation. The timetracking webpage became installable, so there
was no need to worry about manually updating the app to client's devices. 
[Web NFC API](https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API) was used for tag reading.

# Mini-Workshop: Angular Schematics

This is a repository for angular schematics mini-workshop at Angular Meetup Dresden.

## Pre-Requirements

* Node v10+
* Angular v7+

## Installation

### Step 1: Install pre required packages

Install the Schematics command line tool globally:
```
npm install -g @angular-devkit/schematics-cli
```

_Optional:_

Install Schematics library globally:
```
npm install -g @schematics/schematics
```

Install Schematics schematics, example schematic globally:
```
npm install -g @schematics/schematics
```

### Step 2: Create new schematics project

Create new blank schematic project:
```
schematics blank --name example-component
```

_Optional:_

Create example schematics:
```
schematics @schematics/schematics:schematic --name example-schematics
```
In the `example-schematics`-project you will have some exampel schematics and helpfull comments. It's good to learn schematics.


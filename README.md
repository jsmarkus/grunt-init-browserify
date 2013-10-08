grunt-init-browserify
=====================

Grunt-init task that creates `browserify` project.

Install
-------

    git clone https://github.com/jsmarkus/grunt-init-browserify.git ~/.grunt-init/browserify

Run
---

    grunt-init browserify

Grunt tasks
-----------

 * `grunt` - build debug version
 * `grunt release` - build production version
 * `grunt watch` - build debug version while watching files modifications

Example session
---------------

    ☭> cd tmp
    ☭> mkdir helloworld
    ☭> cd helloworld/
    ☭> grunt-init browserify
    Running "init:browserify" (init) task
    This task will create one or more files in the current directory, based on the
    environment and the answers to a few questions. Note that answering "?" to any
    question will show question-specific help and answering "none" to most questions
    will leave its value blank.

    Please answer the following:
    [?] Project name (helloworld)
    [?] Version (0.1.0)
    [?] Do you need to make any changes to the above before continuing? (y/N)

    Writing Gruntfile.js...OK
    Writing index.html...OK
    Writing lib/empty...OK
    Writing src/index.js...OK
    Writing package.json...OK

    Initialized from template "browserify".

    Done, without errors.

    ☭> npm install
    ...
    ...
    ☭> grunt
    Running "browserify:dev" (browserify) task
    >> Bundled build/debug/app.js

    Done, without errors.
    ☭>
    ☭>
    ☭> grunt release
    Running "browserify:prod" (browserify) task
    >> Bundled build/release/app.js

    Done, without errors.

    ☭> grunt watch
    Running "watch" task
    Waiting...OK


    Running "browserify:dev" (browserify) task
    >> Bundled build/debug/app.js

    Running "watch" task
    Completed in 0.016s at Tue Oct 08 2013 19:13:20 GMT+0300 (EEST) - Waiting...

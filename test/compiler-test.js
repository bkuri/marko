'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var compiler = require('../compiler');
var loader = require('../runtime/loader')
var autotest = require('./autotest');
var fs = require('fs');

require('marko/node-require').install();

describe('compiler', function() {
    var autoTestDir = path.join(__dirname, 'autotests/compiler');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var templatePath = path.join(dir, 'template.marko');
        var mainPath = path.join(dir, 'test.js');
        var main;

        if (fs.existsSync(mainPath)) {
            main = require(mainPath);
        }

        if (main && main.checkError) {
            var e;

            try {
                compiler.compileFile(templatePath);
            } catch(_e) {
                e = _e;
            }

            if (!e) {
                throw new Error('Error expected');
            }

            main.checkError(e);
            done();

        } else {
            var compiledSrc = compiler.compileFile(templatePath);
            helpers.compare(compiledSrc, '.js');
            if(main && main.checkTemplate) {
                var template = loader.loadSource(templatePath, compiledSrc);
                main.checkTemplate(template);
            }
            done();
        }
    });

});
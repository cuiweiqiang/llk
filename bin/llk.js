#!/usr/bin/env node
/*
 * @Author: cuiweiqiang
 * @Date:   2018-06-21 16:55:55
 * @Last Modified by:   cuiweiqiang
 * @Last Modified time: 2018-06-21 17:19:40
 */

'use strict';

const co = require('co');
const Command = require('..');

co(function*() {
    yield new Command().run(process.cwd(), process.argv.slice(2));
}).catch(err => {
    console.error(err.stack);
    process.exit(1);
});

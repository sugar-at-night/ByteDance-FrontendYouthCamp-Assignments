#!/usr/bin/env node
const program = require('commander')
//策略模式
// program.version('0.0.1')
program.version(require('../package').version)
program.command('init <name>')
    .description('init project')
    // .action(name=>{
    //     console.log('init'+name)
    // })
    .action(require('../lib/init'))
program.command('refresh')
    .description('refresh routers...')
    .action(require('../lib/refresh'))
program.parse(process.argv)
// console.log('hello cli ...')
// console.log(process.argv)
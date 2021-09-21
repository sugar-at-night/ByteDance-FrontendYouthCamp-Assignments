//打印欢迎界面
const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const{clone} = require('./download')
// const { spawn, ChildProcess } = require('child_process')
// require('child_process')
const spawn = async (...args)=>{
    const{spawn} = require('child_process')
    return new Promise(resolve =>{
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stdout.pipe(process.stderr)
        proc.on('close',()=>{
            resolve()
        })
    })
}
module.exports= async name => {
    //print welcome page 
    clear()
    const data = await figlet('Welcome')
    log(data)
    //module
    log('创建项目'+name)
    await clone('github:su37josephxia/vue-template', name)
    //dependency
    //子进程
    log('安装依赖')
    await spawn('npm', ['install'], { cwd: `./${name}` })
    log(chalk.green(`
        安装完成：
        To get Start:
        ===========================
        cd ${name}
        npm run serve
        ===========================
            `))
    const open = require('open')
    open('http://localhost:8080')
    await spawn('npm', ['run','serve'], {cwd:'./${name}'})
}
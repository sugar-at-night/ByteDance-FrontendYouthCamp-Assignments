const {promisify} = require('util')
module.exports.clone = async (repo, desc)=>{
    const download = promisify(require('download-git-repo'))
    // const ora = require('ora')
    //进度条
    // const process = ora('⏬download...${repo}')
    // await process.start()
    await download(repo, desc)
    // process.succeed()
}
const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument("appname", { type: String, required: true });
    }

    collecting() {
        this.log('Detect local files...');
    }

    creating() {
        this.fs.copy(this.templatePath('**'), this.destinationPath(this.options.appname))
        this.fs.copy(this.templatePath('.*'), this.destinationPath(this.options.appname))
    }

    end() {
        this.log(`

Your application was created successfully`);
        this.log(chalk.blue(`cd ${this.options.appname}`))
        this.log(chalk.blue('npm install'))
        this.log(chalk.blue('npm run serve'))
    }
};
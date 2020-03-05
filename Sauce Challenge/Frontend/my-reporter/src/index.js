module.exports = function () {
    return {
        noColor: true,
        async reportTaskStart (startTime, userAgents, testCount) {
            this.startTime = startTime;
            this.testCount = testCount;

            this.write(`Running tests in: ${userAgents}`)
                .newline()
                .newline();
        },

        async reportFixtureStart (name) {
            this.currentFixtureName = name;
        },

        async reportTestDone (name, testRunInfo) {
            const errors      = testRunInfo.errs;
            const warnings    = testRunInfo.warnings;
            const hasErrors   = !!errors.length;
            const hasWarnings = !!warnings.length;
            const result      = hasErrors ? 'passed' : 'failed';

            name = `${this.currentFixtureName} - ${name}`;

            const title = `${result} ${name}`;

            this.write(title);

            if (hasErrors) {
                this.newline()
                    .write('Errors:');

                errors.forEach(error => {
                    this.newline()
                        .write(this.formatError(error));
                });
            }

            if (hasWarnings) {
                this.newline()
                    .write('Warnings:');

                warnings.forEach(warning => {
                    this.newline()
                        .write(warning);
                });
            }
        },

        async reportTaskDone (endTime, passed, warnings, result) {
            const durationMs  = endTime - this.startTime;
            const durationStr = this.moment.duration(durationMs).format('h[h] mm[m] ss[s]');
			
            let footer = result.failedCount ? `${result.failedCount}/${this.testCount} failed` : `${result.passedCount} passed`;

            footer += ` (Duration: ${durationStr})`;
            footer += ` (Skipped: ${result.skippedCount})`;
            footer += ` (Warnings: ${warnings.length})`;

            this.write(footer)
                .newline();
        }
    };
};

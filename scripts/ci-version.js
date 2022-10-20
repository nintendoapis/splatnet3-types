import * as child_process from 'node:child_process';
import * as util from 'node:util';
import { fileURLToPath } from 'node:url';

const execFile = util.promisify(child_process.execFile);

const options = {cwd: fileURLToPath(new URL('..', import.meta.url))};
const git = (...args) => execFile('git', args, options).then(({stdout}) => stdout.toString().trim());

const [revision, branch_str, changed_files_str, last_commit_timestamp_str] = await Promise.all([
    git('rev-parse', 'HEAD'),
    git('rev-parse', '--abbrev-ref', 'HEAD'),
    git('diff', '--name-only', 'HEAD'),
    git('log', '-1', '--format=%cd'),
]);

const branch = branch_str && branch_str !== 'HEAD' ? branch_str : null;
const changed_files = changed_files_str.length ? changed_files_str.split('\n') : [];
const last_commit_timestamp = new Date(last_commit_timestamp_str);

console.warn({
    revision,
    branch,
    changed_files,
    last_commit_timestamp,
});

const version =
    '0.1.' +
    last_commit_timestamp.getUTCFullYear() +
    (last_commit_timestamp.getUTCMonth() + 1).toString().padStart(2, '0') +
    last_commit_timestamp.getUTCDate().toString().padStart(2, '0') +
    last_commit_timestamp.getUTCHours().toString().padStart(2, '0') +
    last_commit_timestamp.getUTCMinutes().toString().padStart(2, '0') +
    last_commit_timestamp.getUTCSeconds().toString().padStart(2, '0') +
    '+sha.' + revision.substr(0, 7);

console.warn({
    version,
});

console.log(version);

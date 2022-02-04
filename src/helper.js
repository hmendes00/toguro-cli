import execa from 'execa';
import { v4 } from "uuid";

export function newAppId() {
    return v4();
}

export async function initGit(options) {
    const result = await execa('git', ['init'], {
        cwd: options.targetDirectory,
    });
    if (result.failed) {
        return Promise.reject(new Error('Failed to initialize git'));
    }
    return;
}
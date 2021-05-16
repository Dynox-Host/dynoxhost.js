declare module "dynoxhost.js" {
    export class DynoxHost {
        constructor(apiKey: string) {}
        getUsage(id: string)
        getDetails(id: string)
        setPowerState(id: string, state: string)
        createBackup(id: string)
        getBackupDetails(id: string, backupID: string)
    }
}
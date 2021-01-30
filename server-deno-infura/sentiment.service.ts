
import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts"

export class SentimentService {

    public static async getSentimentHistory(linkToExampleDataRemote: string = "server-deno-infura") {
        const sentimentHistory = await Persistence.readFromRemoteFile(linkToExampleDataRemote)
        console.log(`remote file content: ${sentimentHistory}`)
        
    }

    public static async getPriceHistory(linkToExampleDataRemote: string = "server-deno-infura") {
        
        const sentimentHistory = await Persistence.readFromRemoteFile(linkToExampleDataRemote)
        console.log(`remote file content: ${sentimentHistory}`)

    }

    public static async saveToGitHub(dataToBeStored: any) {
        const projectPathForData = `${Deno.cwd()}/server-deno-infura`

        // /*************      Local Mode      *************/
        // const pathToFile = `${projectPathForData}/example-file.json`
        // await Persistence.saveToLocalFile(pathToFile, JSON.stringify(dataToBeStored))

        // const localFileContent = await Persistence.readFromLocalFile(pathToFile)
        // console.log(`local file content: ${localFileContent}`)

        const userName = "michael-spengler"
        // import { password } from './topsecret/config.ts'
        const org = "michael-spengler"
        const repo = "server-deno-infura"
        // await Persistence.commitAndPush(projectPathForData, userName, password, org, repo) // commented out as I should not publish my password

        const linkToExampleDataRemote = "https://raw.githubusercontent.com/michael-spengler/persistence-example-project-folder/master/example-file.json"
        console.log(`remote file content: ${await Persistence.readFromRemoteFile(linkToExampleDataRemote)}`)

    }
}


SentimentService.saveToGitHub([{ sentiment: 0.2}])


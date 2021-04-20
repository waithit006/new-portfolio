import _ from 'lodash'
import { ExperienceInterface } from '../interfaces'

export default class ExperienceModel {

    skills: ExperienceInterface[]

    constructor(json) {
        json = json.map((responsibility: any) => {
            responsibility['responsibility'] = responsibility['responsibility'].map((val: any) => (val.responsibility))
            return responsibility
        })
        this.skills = json
    }

    toAPIResponse(): ExperienceInterface[] {
        return [...this.skills]
    }

}
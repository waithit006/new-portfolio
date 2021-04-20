import _ from 'lodash'
import { SkillsInterface } from '../interfaces'

export default class ExperienceModel {

    skills: SkillsInterface[] = []

    constructor(json:any) {
        json = json.map((skill: any) => {
            skill['icon'] = process.env.API_URL + skill.icon?.url
            return skill
        })
        this.skills = json
    }

    toAPIResponse(): SkillsInterface[] {
        return [...this.skills]
    }

}
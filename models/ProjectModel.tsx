import _ from 'lodash'
import { ProjectInterface } from '../interfaces'

export default class ExperienceModel {

    projects: ProjectInterface[] = []

    constructor(json:any) {
        json = json.map((project: any) => {
            project['images'] = project['images'].map((image:any)=>(process.env.API_URL + image.url))
            project['tech'] = project['tech'].map((tech:any)=>(tech.tech))
            return project
        })
        this.projects = json
    }

    toAPIResponse(): ProjectInterface[] {
        return [...this.projects]
    }

}
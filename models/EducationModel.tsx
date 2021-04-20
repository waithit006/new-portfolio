import _ from 'lodash'
import { EducationInterface } from '../interfaces'

export default class EducationModel {

    educations: EducationInterface[]

    constructor(json) {
       this.educations = json
    }

    toAPIResponse(): EducationInterface[] {
        return [...this.educations]
    }

}
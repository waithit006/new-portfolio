import HomeModel from '../models/HomeModel'
import EducationModel from '../models/EducationModel'
import ExperienceModel from '../models/ExperienceModel'
import SkillsModel from '../models/SkillsModel'
import axios from 'axios'

export function getHomeAPI(): Promise<HomeModel | undefined> {
    return new Promise((resolve, reject) => {
        axios.get(process.env.API_URL + "/home")
            .then((result) => {
                resolve(new HomeModel(result.data))
            })
            .catch((err) => {
                reject(err)
            })
    })
}


export function getEducationAPI(): Promise<EducationModel | undefined> {
    return new Promise((resolve, reject) => {
        axios.get(process.env.API_URL + "/educations?_sort=created_at:DESC")
            .then((result) => {
                resolve(new EducationModel(result.data))
            })
            .catch((err) => {
                reject(err)
            })
    })
}


export function getExperienceAPI(): Promise<ExperienceModel | undefined> {
    return new Promise((resolve, reject) => {
        axios.get(process.env.API_URL + "/experiences?_sort=created_at:DESC")
            .then((result) => {
                resolve(new ExperienceModel(result.data))
            })
            .catch((err) => {
                reject(err)
            })
    })
}


export function getSkillsAPI(): Promise<SkillsModel | undefined> {
    return new Promise((resolve, reject) => {
        axios.get(process.env.API_URL + "/skills")
            .then((result) => {
                resolve(new SkillsModel(result.data))
            })
            .catch((err) => {
                reject(err)
            })
    })
}
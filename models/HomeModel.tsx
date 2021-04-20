import _ from 'lodash'
import { HomeInterface } from '../interfaces'

export default class HomeModel implements HomeInterface {

    name: string
    position: string
    birthdate: string
    age: number
    nationality: string
    language: string
    phone: string
    email: string
    about_me: string
    github_url: string
    facebook_url: string
    instagram_url: string
    published_at: string
    created_at: string
    updated_at: string
    resume_files: string
    profile_img: string

    constructor(json) {
        this.name = _.get(json, 'name')
        this.position = _.get(json, 'position')
        this.birthdate = _.get(json, 'birthdate')
        this.age = _.get(json, 'age')
        this.nationality = _.get(json, 'nationality')
        this.language = _.get(json, 'language')
        this.phone = _.get(json, 'phone')
        this.email = _.get(json, 'email')
        this.about_me = _.get(json, 'about_me')
        this.github_url = _.get(json, 'github_url')
        this.facebook_url = _.get(json, 'facebook_url')
        this.instagram_url = _.get(json, 'instagram_url')
        this.published_at = _.get(json, 'published_at')
        this.created_at = _.get(json, 'created_at')
        this.updated_at = _.get(json, 'updated_at')

        this.resume_files = process.env.API_URL + _.get(json, 'resume_files.url')
        this.profile_img = process.env.API_URL + _.get(json, 'profile_img.url')
    }

    toAPIResponse(): HomeInterface {
        return {
            name: this.name,
            position: this.position,
            birthdate: this.birthdate,
            age: this.age,
            nationality: this.nationality,
            language: this.language,
            phone: this.phone,
            email: this.email,
            about_me: this.about_me,
            github_url: this.github_url,
            facebook_url: this.facebook_url,
            instagram_url: this.instagram_url,
            published_at: this.published_at,
            created_at: this.created_at,
            updated_at: this.updated_at,
            resume_files: this.resume_files,
            profile_img: this.profile_img,
        }
    }

}
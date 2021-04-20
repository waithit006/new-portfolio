export interface HomeInterface {
    name: string,
    position: string,
    birthdate: string,
    age: number,
    nationality: string,
    language: string,
    phone: string,
    email: string,
    about_me: string,
    github_url: string,
    facebook_url: string,
    instagram_url: string,
    published_at: string,
    created_at: string,
    updated_at: string,
    resume_files: string,
    profile_img: string
}


export interface EducationInterface {
    date: string,
    name_education: string,
    detail_education: string,
    published_at: string,
    created_at: string,
    updated_at: string
}

export interface ExperienceInterface {
    date_range: string,
    company: string,
    position: string,
    responsibility: string[]
}
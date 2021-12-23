export default interface IUserProfile {
  profile: {
    description: string,
    gender: string,
    birthday: string,
    country: string,
    rank: string,
    languages: string,
    email: string,
    website: string,
    twitter: string,
    file: {
      iso8601: {
        lastModified: string,
        createdAt: string,
      },
      ms: {
        lastModified: string,
        createdAt: string,
      }
    },
    pronouns: string
  },
  id: string,
  username: string,
  discriminator: string,
  publicFlags: number,
  avatar: {
    id: string,
    url: {
      png: string,
      jpg: string,
      webp: string
    }
  },
  banner: {
    id: string,
    color: string,
  },
  accentColor: number
}

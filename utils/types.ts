export interface ContactType {
 createdAt?: string
 email: string
 firstName?: string
 lastName?: string
 phone?: string
 updatedAt: string
 _id: string
}

export interface ResponseType {
 count: number
 perPage: number
 currentPage: number
 totalPages: number
 results: ContactType[]
}

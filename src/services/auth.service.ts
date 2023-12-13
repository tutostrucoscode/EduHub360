import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../config/firebase-config'

export type EmailCheck = string

export const validateUserInFirestore = async (email: string | null): Promise<EmailCheck> => {
    console.log('validateUserInFirestore starts')
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!email || !email.match(regexEmail)) return 'Invalid'
    try {
        const userCollectionRef = query(
            collection(db, 'users'),
            where('nameInfo.email', '==', email)
        )
        const querySnapshot = await getDocs(userCollectionRef)
        let user = undefined
        querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data())
            user = doc.id
        })
        return user ? user : 'UserNotFound'
    } catch (error) {
        throw new Error(`Error al validar el email ${email} en firestore: ${error}`)
    }
}

export const getUserFirestoreRef = (id: string) => {
    return doc(db, 'users', id)
}

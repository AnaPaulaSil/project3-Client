import { Card } from "react-bootstrap"
import {api} from "../../api/api"

function FeedPage() {
    async function cardsUsers() {
        try {
            const response = await api.get(`/users/all`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <h1>feed</h1>
        </>
    )
}

export default FeedPage
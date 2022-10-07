import PostList from '../components/PostList'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h2>Listings:</h2>
            <PostList />
        </div>
    )
}
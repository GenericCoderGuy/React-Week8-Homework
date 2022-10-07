import PostForm from '../components/PostForm'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h2>List you Car:</h2>
            {
                (user.loggedIn) ?
                (
                    <>
                        <PostForm />
                    </>
                )
                :
                ''
            }
        </div>
    )
}
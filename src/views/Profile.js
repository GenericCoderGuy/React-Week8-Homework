import PostProfile from '../components/PostProfile'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
        <div>
            {
                (user.loggedIn) ?
                (
                    <>
                        <h2>{ user.username }'s Profile</h2>
                    </>
                )
                :
                ''
            }
        </div>
    )
}
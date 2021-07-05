import React from 'react'
import { User } from '../../../../../../interfaces/user'
import FoundUserCard from './FoundUserCard'

interface Props {
    foundUsers: User[]
}
const FoundUserList: React.FC<Props> = ({ foundUsers }) => {
    return (
        <div className="w-full h-full overflow-y-auto">
            {foundUsers.map((user) => {
                return <FoundUserCard key={user._id} foundUser={user} />
            })}
        </div>
    )
}

export default FoundUserList

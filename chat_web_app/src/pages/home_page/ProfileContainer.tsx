import React, { useContext, useEffect, useState } from 'react'
import AvatarImage from '../../components/AvatarImage'
import OptionIcon from '../../assets/icons/option.svg'
import { UserContext } from '../../context/user_context'
import DropdownStatus from '../../components/dropdown_status/DropdownStatus'
import { User } from '../../interfaces/user'
const profileContainer = () => {
    const user = useContext(UserContext)

    // const componentDidMount = () => {}

    // useEffect(componentDidMount, [])
    return (
        <div className="pb-4">
            <div className="flex justify-center items-center bg-hell-blue p-8 rounded-b-3xl">
                <div className="pr-4">
                    <AvatarImage src="https://cdn.luxe.digital/media/2019/09/12084906/casual-dress-code-men-street-style-luxe-digital-1.jpg" alt="My profile image" />
                </div>

                <div className="flex-1 flex flex-col justify-center items-start">
                    <div className="flex justify-between w-full">
                        <h2 className="text-2xl font-poppins font-semibold text-black-hell">{user.value?.name}</h2>
                        <OptionIcon className="cursor-pointer" />
                    </div>

                    <DropdownStatus />
                </div>
            </div>
        </div>
    )
}

export default profileContainer

import React from 'react'
import NavigationButton from './NavigationButton'
import { Tab, getIconBasedInTabEnum } from '../../../../enums/tab'

interface Props {
    tab: Tab
    onNavBarClick(tab: Tab): void
}

const bottomNavigationButtons: React.FC<Props> = ({ tab, onNavBarClick }) => {
    return (
        <div className="flex justify-evenly border-t-1.5 border-gray-300 bg-hell-blue">
            {Object.values(Tab).map((currentTab) => (
                <NavigationButton onClick={() => onNavBarClick(currentTab)} key={currentTab} isCurrent={currentTab === tab} Icon={getIconBasedInTabEnum(currentTab as Tab)} />
            ))}
            {/* <NavigationButton Icon={ContactIcon} isCurrent={} />
            <NavigationButton Icon={ContactsIcon} isCurrent={tab === Tab.contacts}/>
            <NavigationButton Icon={StarIcon} isCurrent={tab === Tab.}/>
            <NavigationButton Icon={SearchIcon} /> */}
        </div>
    )
}

export default bottomNavigationButtons

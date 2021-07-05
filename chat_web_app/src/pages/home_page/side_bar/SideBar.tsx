import React, { useState } from 'react'
import { Tab } from '../../../enums/tab'
import ProfileContainer from '../ProfileContainer'
import BottomNavigationButtons from './bottom_navigation_buttons/BottomNavigationButtons'
import ContactsTab from './side_bar_tabs/contacts_tab/ContactsTab'
import MessagedContactsTab from './side_bar_tabs/messaged_contacts_tab/MessagedContactsTab'
import FavoriteTab from './side_bar_tabs/favorite_tab/FavoriteTab'
import SearchTab from './side_bar_tabs/search_tab/SearchTab'

const SideBar = () => {
    const [currentTab, setCurrentTab] = useState<Tab>(Tab.messageContactTab)
    const onNavBarButtonClick = (tab: Tab) => setCurrentTab(tab)

    return (
        <aside className="flex flex-col w-1/6 min-w-450">
            <ProfileContainer />
            {Tab.messageContactTab === currentTab && <MessagedContactsTab />}
            {Tab.contacts === currentTab && <ContactsTab />}
            {Tab.search === currentTab && <SearchTab />}
            {Tab.favorite === currentTab && <FavoriteTab />}
            <BottomNavigationButtons onNavBarClick={onNavBarButtonClick} tab={currentTab} />
        </aside>
    )
}

export default SideBar

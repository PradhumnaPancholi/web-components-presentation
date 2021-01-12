import {Heading, Text, OrderedList, ListItem} from 'spectacle'
import React from 'react'

const BuildingBlocks = () => {
    return(
        <React.Fragment>
            <Heading>Building Blocks</Heading>
            <OrderedList>
                <ListItem>Custom Element</ListItem>
                <ListItem>Shadow DOM</ListItem>
                <ListItem>HTML Templates</ListItem>
            </OrderedList>
        </React.Fragment>
    )
} 

export default BuildingBlocks
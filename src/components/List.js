'use strict'
import React, { Component } from 'react'

const ListItem = (props) => <li>{ props.text }</li>

const List = (props) => {
    const listNodes = props.data.map((
    value,index) => {
        return(
            <ListItem text={value} key={index}></ListItem>
        )
    })

    return ( <ul>{listNodes}</ul>
    )
}

export default List
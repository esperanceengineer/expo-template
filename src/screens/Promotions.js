import React, { Component } from 'react'
import ListItem from '../containers/ListItem';

export default class Promotions extends Component {
    onReload = () => {
        console.log('Pull refresh');
    }
    render() {
        const {promotions} = this.props.route.params;
        return (
            <ListItem
            onReload={this.onReload}
            navigation={this.props.navigation}
            promotions={promotions}
            loading={false}
            refreshing={false}
          />
        )
    }
}

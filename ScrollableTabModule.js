import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native'

import ScrollableTabView , { DefaultTabBar } from 'react-native-scrollable-tab-view'

import CustomTabBar from './CustomTabBar'
import PropTypes from "prop-types";

export default class ScrollableTabModule extends Component {

    render() {

        let arr = []
        for (let i = 0; i< this.props.num; i++){
            arr.push(i)
        }

        let mainView =arr.map((item,index) => {

            switch (index) {
                case 0:
                    return this.props.tabOne;
                case 1:
                    return this.props.tabTwo;
                case 2:
                   return this.props.tabThree;
                case 3:
                    return this.props.tabFour;
                case 4:
                    return this.props.tabFive;
                case 5:
                    return this.props.tabSix;
            }
        })

        return (
                <ScrollableTabView
                    style={{backgroundColor:'cyan'}}
                    locked={false}
                    renderTabBar={() => (<DefaultTabBar
                        backgroundColor={'#f4f4f4'}
                        tabUnderlineDefaultWidth={20} // default containerWidth / (numberOfTabs * 4)
                        tabUnderlineScaleX={3} // default 3
                        activeColor={"#0af"}
                        inactiveColor={"#333"}
                    />)}>

                    {/*<View style={{width:100,height:300,backgroundColor:'yellow'}} tabLabel='Tab1'>*/}
                        {/*<Text>1111</Text>*/}
                    {/*</View>*/}
                    {/*<Text tabLabel='Tab2'>Tab2</Text>*/}
                    {/*<Text tabLabel='Tab3'>Tab3</Text>*/}
                    {mainView}
                </ScrollableTabView>
        )
    }
}

const propTypes = {
    num: PropTypes.number,
    tabOne: PropTypes.func,
    tabTwo: PropTypes.func,
    tabThree: PropTypes.func,
    tabFour: PropTypes.func,
    tabFive: PropTypes.func,
    tabSix: PropTypes.func,
}

ScrollableTabModule.propTypes = propTypes;
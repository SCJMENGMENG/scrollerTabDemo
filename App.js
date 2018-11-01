/**
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native'

import ScrollableTabView , { DefaultTabBar } from 'react-native-scrollable-tab-view'

import CustomTabBar from './CustomTabBar'

import ScrollableTabModule from './ScrollableTabModule';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={{flex:1,marginTop: 100,backgroundColor:'red'}}>
                {/*<ScrollableTabView*/}
                    {/*style={{backgroundColor:'cyan'}}*/}
                    {/*renderTabBar={() => (<CustomTabBar*/}
                        {/*backgroundColor={'#f4f4f4'}*/}
                        {/*tabUnderlineDefaultWidth={20} // default containerWidth / (numberOfTabs * 4)*/}
                        {/*tabUnderlineScaleX={3} // default 3*/}
                        {/*activeColor={"#0af"}*/}
                        {/*inactiveColor={"#333"}*/}
                    {/*/>)}>*/}

                    {/*<View style={{width:100,height:300,backgroundColor:'yellow'}} tabLabel='Tab1'>*/}
                        {/*<Text>1111</Text>*/}
                    {/*</View>*/}
                    {/*<Text tabLabel='Tab2'>Tab2</Text>*/}
                    {/*<Text tabLabel='Tab3'>Tab3</Text>*/}
                {/*</ScrollableTabView>*/}
                <ScrollableTabModule
                    num={6}
                    tabOne={<View style={{width:100,height:300,backgroundColor:'yellow'}} tabLabel='Tab1'><Text>1111</Text></View>}
                    tabTwo={<Text tabLabel={'1asdfasdfasdfa2'}>234234</Text>}
                    tabThree={<Text tabLabel={'13asdfa122'}>234234</Text>}
                    tabFour={<Text tabLabel={'131asdfa22'}>234234</Text>}
                    tabFive={<Text tabLabel={'131asdfa2212'}>234234</Text>}
                    tabSix={<Text tabLabel={'1312212'}>234234</Text>}
                />
            </View>
        )
    }
}


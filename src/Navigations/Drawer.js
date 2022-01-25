import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem } from '@react-navigation/drawer';
import React,{Linking,useLayoutEffect} from "react";
import {PloggingScreen,SettingScreen,MyPageScreen,FeedScreen,RecordScreen,FriendScreen} from '../screens'; /*폴더까지만 입력하면 폴더 아래에 있는 index.js 파일을 가져옴 */
import {  FontAwesome,MaterialIcons,FontAwesome5,Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Drawer = createDrawerNavigator();


const  StyledText=styled.Text`
font-size: 20px;
font-weight: 600;
border-bottom-color: #dddddd;
padding-bottom:80;
margin : 0px 12px;
margin-bottom : 20;
padding-left:20;
border-bottom-width : 1px;
border-bottom-color : #dddddd;

`;


const DrawerNav = ()=>{

    const userName =undefined;
    CustomDrawerContent =(props)=>{
        return(
            // 기존 drawer list 들 
            <DrawerContentScrollView {...props}>
            <FontAwesome name="user-circle" size={60} color="#dddddd" style={{marginLeft:20}} />
               <StyledText>{userName?userName:'GUEST'}</StyledText>
               
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        )
    }
    return (
        <Drawer.Navigator 
        initialRouteName='Plogging'
        screenOptions={{
            drawerActiveTintColor:"black",
            drawerInactiveTintColor: '#dddddd',
            drawerLabelStyle: {fontWeight : 'bold'},
           
            
        }}
        drawerContent={props => <CustomDrawerContent {...props}/>}/*렌더링 할 요소 반환 */
        
        >
        
            <Drawer.Screen name='Plogging' component={PloggingScreen} options={{ drawerLabel: '플로깅(러닝)', drawerIcon: ({focused})=> <FontAwesome5 name="running" size={24} color={focused?'black':'#dddddd'}/> }}/>
            <Drawer.Screen name='Feed' component={FeedScreen} options={{ drawerLabel: '피드' ,drawerIcon: ({focused})=><MaterialIcons name="dynamic-feed" size={24} color={focused?'black':'#dddddd'} />}}/>
            <Drawer.Screen name='Record' component={RecordScreen} options={{ drawerLabel: '기록' ,drawerIcon: ({focused})=><Ionicons name="bar-chart-sharp" size={24} color={focused?'black':'#dddddd'} />}}/>
            <Drawer.Screen name='Friend' component={FriendScreen} options={{ drawerLabel: '친구' ,drawerIcon: ({focused})=><Ionicons name="people-circle-outline" size={24} color={focused?'black':'#dddddd'} />}}/>
            <Drawer.Screen name='Setting' component={SettingScreen} options={{ drawerLabel: '설정' ,drawerIcon: ({focused})=><Ionicons name="settings-sharp" size={24} color={focused?'black':'#dddddd'} />}}/>
            
        </Drawer.Navigator>
    )
}

export default DrawerNav;
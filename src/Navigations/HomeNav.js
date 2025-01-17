import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem } from '@react-navigation/drawer';
import React from "react";
import {PloggingScreen,SettingScreen,MyPageScreen,FeedScreen,RecordScreen,RankingScreen,ChallengeScreen,StoreScreen} from '../screens'; /*폴더까지만 입력하면 폴더 아래에 있는 index.js 파일을 가져옴 */
import { MaterialIcons,FontAwesome5,Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Avatar from '../components/ProfileAvatar';
import { TouchableOpacity } from 'react-native';
const Drawer = createDrawerNavigator();


const  StyledText=styled.Text`
font-size: 20px;
font-weight: 600;

padding-bottom:80px;
margin : 0px 12px;
margin-bottom : 20px;
padding-left : 100px;
border-bottom-width : 1px;
border-bottom-color : #dddddd;


`;



const HomeNav = ()=>{

    const userName =undefined;
    CustomDrawerContent =(props)=>{
  
        return(
          
            <DrawerContentScrollView {...props}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('MyPage')}>
            <Avatar/>
            </TouchableOpacity>
         
               <StyledText>{userName?userName:'GUEST'}</StyledText>
              
                <DrawerItemList {...props} /* 기존 drawer list 들 *//>
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
           headerShown: true,
           
        }}
        drawerContent={props => <CustomDrawerContent {...props}/>}/*렌더링 할 요소 반환 */
        
        >
          <Drawer.Screen name='MyPage' component={MyPageScreen} options={{  drawerLabel: '마이페이지' ,drawerIcon: ({focused})=><Ionicons name="person-circle" size={24} color={focused?'black':'#dddddd'} />,drawerItemStyle:{display:'none'}}}/>
            <Drawer.Screen name='Plogging' component={PloggingScreen} options={{ drawerLabel: '플로깅(러닝)', drawerIcon: ({focused})=> <FontAwesome5 name="running" size={24} color={focused?'black':'#dddddd'}/> }}/>
            <Drawer.Screen name='Feed' component={FeedScreen} 
                options={({route,navigation})=>({ 
                    drawerLabel: '피드' ,
                    drawerIcon: ({focused})=><MaterialIcons name="dynamic-feed" size={24} color={focused?'black':'#dddddd'}/>,
                    headerShown : true,         
                    
                })}/>
            <Drawer.Screen name='Record' component={RecordScreen} options={{ drawerLabel: '기록' ,drawerIcon: ({focused})=><Ionicons name="bar-chart-sharp" size={24} color={focused?'black':'#dddddd'} />}}/>
            <Drawer.Screen name='Challenge' component={ChallengeScreen} options={{ drawerLabel: '챌린지' ,drawerIcon: ({focused})=><Ionicons name="trophy-sharp" size={24} color={focused?'black':'#dddddd'} />}}/>
            <Drawer.Screen name='Rank' component={RankingScreen} options={{ drawerLabel: '순위' ,drawerIcon: ({focused})=><Ionicons name="people-circle-outline" size={24} color={focused?'black':'#dddddd'} />}}/>
            <Drawer.Screen name='Store' component={StoreScreen} options={{ drawerLabel: '상점' ,drawerIcon: ({focused})=><FontAwesome5 name="store" size={19} color={focused?'black':'#dddddd'} />}}/>
            <Drawer.Screen name='Setting' component={SettingScreen} options={{ drawerLabel: '설정' ,drawerIcon: ({focused})=><Ionicons name="settings-sharp" size={24} color={focused?'black':'#dddddd'} />}}/>
    
        </Drawer.Navigator>
    )
}

export default HomeNav;
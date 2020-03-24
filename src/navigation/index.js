import React from 'react';
import {View,Image,Share,Platform } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItem,DrawerItemList} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Ionicons} from '@expo/vector-icons';


//Personal components
import colors from '../api/color';
import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import CategoryScreen from '../screens/Categories';
import CouponScreen from '../screens/Coupons';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import SearchScreen from '../screens/Search';
import ProfileScreen from '../screens/Profil';
import PromotionScreen from '../screens/Promotion';
import PromotionsScreen from '../screens/Promotions';
import NotificationScreen from '../screens/Notification';


/*
Stack navigators
*/

//Auth Stack
const AuthStack = createStackNavigator();
function AuthStackScreen({navigation}) {
    return (
        <AuthStack.Navigator screenOptions={{
            headerTitleStyle: {
                color: colors.primary,
                fontWeight:'bold'
            },
            headerTintColor:colors.primary
        }} >
            <AuthStack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}} />
            <AuthStack.Screen name='Login' component={LoginScreen} options={{title:'Connexion'}} />
            <AuthStack.Screen name='Signup' component={SignupScreen} options={{title:'Inscription'}} />
            <AuthStack.Screen name='Auth' component={DrawerNavigatorScreen} options={{headerShown:false}}/>
        </AuthStack.Navigator>
    )
}

//Home stack
const HomeStack = createStackNavigator();
function HomeStackScreen({navigation}) {
    return (
        <HomeStack.Navigator initialRouteName='Home' screenOptions={{
            headerTitleStyle : {
                fontWeight:'bold',
                color:colors.primary
            },
            headerTintColor:colors.primary,
        }} >
            <HomeStack.Screen name ='Home' component ={HomeScreen} options={{
                title:'Accueil',
                headerLeft: () => (<Ionicons 
                    style={{paddingLeft:10}} 
                    name='ios-menu' size={30} color={colors.primary} 
                    onPress={()=>navigation.openDrawer()} />),
                headerRight: () => 
                (<View style={{flexDirection:'row'}}>
                    <Ionicons 
                    style={{paddingRight:10}} 
                    name='ios-notifications' size={30} color={colors.primary} 
                    onPress={() => navigation.navigate('Notification')} />
                    <Ionicons 
                    style={{paddingRight:10}} 
                    name='ios-send' size={30} color={colors.primary} 
                    onPress={() => navigation.navigate('Promotion')} />
                </View>)
                    }} />
            <HomeStack.Screen name ='Details' component ={DetailsScreen} 
            options={({route}) => ({
                title:route.params.title,
                headerRight: () => {
                    if (Platform.OS === 'ios') {
                        return(
                        <Ionicons 
                        style={{paddingRight:10}} 
                        name='ios-share' size={30} color={colors.primary} 
                        onPress={() => Share.share(
                            {title: 'Produit',message: 'vente de produits it-corp'})} />
                        )
                    }
                    }
                })} />
            <HomeStack.Screen name ='Promotion' component ={PromotionScreen}/>
            <HomeStack.Screen name ='Notification' component ={NotificationScreen}/>
        </HomeStack.Navigator>

    )
}

//Category stack
const CategoryStack = createStackNavigator();
function CategoryStackScreen({navigation}) {
    return(
        <CategoryStack.Navigator initialRouteName='Category' screenOptions={{
            headerTitleStyle : {
                fontWeight:'bold',
                color:colors.primary
            },
            headerTintColor:colors.primary,
        }} >
            <CategoryStack.Screen name='Category' component={CategoryScreen} options={{
                title:'Catégories',
                headerLeft: () => (<Ionicons 
                    style={{paddingLeft:10}} 
                    name='ios-menu' size={30} color={colors.primary} 
                    onPress={()=>navigation.openDrawer()} />),
                }} />
            <CategoryStack.Screen name='Promotions' component={PromotionsScreen} options={({route}) => ({
                title:route.params.title
            })} />
        </CategoryStack.Navigator>
    )
}

//Coupon stack
const CouponStack  = createStackNavigator();
function CouponStackScreen({navigation}) {
    return(
        <CouponStack.Navigator initialRouteName='Coupon' screenOptions={{
            headerTitleStyle : {
                fontWeight:'bold',
                color:colors.primary
            },
            headerTintColor:colors.primary,
            headerLeft: () => (<Ionicons 
            style={{paddingLeft:10}} 
            name='ios-menu' size={30} color={colors.primary} 
            onPress={()=>navigation.openDrawer()} />),
        }} >
            <CouponStack.Screen name='Coupon' component={CouponScreen} options={{title:'Coupons'}} />
        </CouponStack.Navigator>
    )
}
//Bottom navigator
const TabNavigator = createBottomTabNavigator();
function TabNavigatorScreen({navigation}) {
    return(
        <TabNavigator.Navigator initialRouteName='Home' screenOptions={({route}) => ({
            tabBarIcon: ({focused,color,size}) => {
                let iconName;

                if(route.name === 'Home') {
                    iconName= 'ios-home';
                }
                else if(route.name === 'Category') {
                    iconName= 'ios-list-box';
                }else if (route.name === 'Coupon') {
                    iconName= 'ios-information-circle-outline';
                }else if(route.name === 'Search') {
                    iconName= 'ios-search';
                }else if (route.name === 'Profile') {
                    iconName= 'ios-person';
                }
                return <Ionicons name={iconName} color={color} size={size} />;
            },
        })}  tabBarOptions = {{
            activeTintColor: colors.primary,
            inactiveTintColor: 'gray',
            style:{
                backgroundColor:'white',
                borderTopWidth:0,
                shadowOffset:{width:5,height:3},
                shadowColor:'black',
                shadowOpacity:0.5,
                elevation:5
            }
        }} >
            <TabNavigator.Screen name='Home' component={HomeStackScreen} options={{title:'Accueil'}} />
            <TabNavigator.Screen  name='Category' component={CategoryStackScreen} options={{title:'Catégories'}}/>
            <TabNavigator.Screen name='Coupon' component={CouponStackScreen} options={{title:'Coupon'}}/>
            <TabNavigator.Screen name='Search' component={SearchScreen} options={{title:'Recherche'}}/>
            <TabNavigator.Screen name='Profile' component={ProfileScreen} options={{title:'Profil'}}/>
        </TabNavigator.Navigator>
    )
}

//Drawer Navigator
const DrawerNavigator = createDrawerNavigator();
function CustomDrawerContent(props) {
    return(
        <DrawerContentScrollView {...props} style={{flex:1}} >
            <View style={{flex:1,alignItems:'center',padding:10}} >
                <Image
                    source={require('../assets/images/promotion.jpg')}
                    style={{height:120,width:120,borderRadius:60}}
                />
            </View>
            <DrawerItem
                label='Accueil'
                onPress={() => props.navigation.navigate('Home')}
                icon = {({size,color}) => <Ionicons size={size} color={color} name='ios-home' />}
            />
            <DrawerItem
                label='Catégories'
                onPress={() => props.navigation.navigate('Category')}
                icon = {({size,color}) => <Ionicons size={size} color={color} name='ios-list-box' />}
            />
            <DrawerItem
                label='Coupons'
                onPress={() => props.navigation.navigate('Coupon')}
                icon = {({size,color}) => <Ionicons size={size} color={color} name='ios-information-circle' />}
            />
            <DrawerItem
                label='Profil'
                onPress={() => props.navigation.navigate('Profile')}
                icon = {({size,color}) => <Ionicons size={size} color={color} name='ios-person' />}
            />
        </DrawerContentScrollView>
    )
}
function DrawerNavigatorScreen({navigation}) {
    return(
        <DrawerNavigator.Navigator initialRouteName='Accueil' 
        drawerContent={props => CustomDrawerContent(props)} drawerContentOptions={{
            inactiveTintColor:'gray',
            activeTintColor:'#fff',
            activeBackgroundColor:colors.primary,
        }} >
            <DrawerNavigator.Screen name='Accueil' component={TabNavigatorScreen}/>
        </DrawerNavigator.Navigator>
    )
}


const Navigation = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <AuthStackScreen/>
        </NavigationContainer>
    </SafeAreaProvider>
);

export default Navigation;

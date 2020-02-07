Object.defineProperty(exports,"__esModule",{value:true});var _color=require('color');var _color2=_interopRequireDefault(_color);var _reactNative=require('react-native');var _commonColor=require('./commonColor');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var deviceHeight=_reactNative.Dimensions.get('window').height;var deviceWidth=_reactNative.Dimensions.get('window').width;var platform=_reactNative.Platform.OS;var platformStyle=_commonColor.PLATFORM.MATERIAL;var isIphoneX=platform===_commonColor.PLATFORM.IOS&&(deviceHeight===812||deviceWidth===812||deviceHeight===896||deviceWidth===896);exports.default={platformStyle:platformStyle,platform:platform,headerStyle:'#edebed',iconStyle:'#000',contentStyle:'#f5f4f5',expandedIconStyle:'#000',accordionBorderColor:'#d3d3d3',elevation:4,containerTouchableBackgroundColor:'rgba(0,0,0,0.4)',innerTouchableBackgroundColor:'#fff',listItemHeight:50,listItemBorderColor:'transparent',marginHorizontal:-15,marginLeft:14,marginTop:15,minHeight:56,padding:15,touchableTextColor:'#757575',androidRipple:true,androidRippleColor:'rgba(256, 256, 256, 0.3)',androidRippleColorDark:'rgba(0, 0, 0, 0.15)',buttonUppercaseAndroidText:true,badgeBg:'#ED1727',badgeColor:'#fff',badgePadding:0,buttonFontFamily:'Roboto',buttonDisabledBg:'#b5b5b5',buttonPadding:6,get buttonPrimaryBg(){return this.brandPrimary;},get buttonPrimaryColor(){return this.inverseTextColor;},get buttonInfoBg(){return this.brandInfo;},get buttonInfoColor(){return this.inverseTextColor;},get buttonSuccessBg(){return this.brandSuccess;},get buttonSuccessColor(){return this.inverseTextColor;},get buttonDangerBg(){return this.brandDanger;},get buttonDangerColor(){return this.inverseTextColor;},get buttonWarningBg(){return this.brandWarning;},get buttonWarningColor(){return this.inverseTextColor;},get buttonTextSize(){return this.fontSizeBase-1;},get buttonTextSizeLarge(){return this.fontSizeBase*1.5;},get buttonTextSizeSmall(){return this.fontSizeBase*0.8;},get borderRadiusLarge(){return this.fontSizeBase*3.8;},get iconSizeLarge(){return this.iconFontSize*1.5;},get iconSizeSmall(){return this.iconFontSize*0.6;},cardDefaultBg:'#fff',cardBorderColor:'#ccc',cardBorderRadius:2,cardItemPadding:platform===_commonColor.PLATFORM.IOS?10:12,CheckboxRadius:0,CheckboxBorderWidth:2,CheckboxPaddingLeft:2,CheckboxPaddingBottom:5,CheckboxIconSize:16,CheckboxIconMarginTop:1,CheckboxFontSize:17,checkboxBgColor:'#039BE5',checkboxSize:20,checkboxTickColor:'#fff',brandPrimary:'#3F51B5',brandInfo:'#62B1F6',brandSuccess:'#5cb85c',brandDanger:'#d9534f',brandWarning:'#f0ad4e',brandDark:'#000',brandLight:'#f4f4f4',containerBgColor:'#fff',datePickerTextColor:'#000',datePickerBg:'transparent',fabWidth:56,DefaultFontSize:16,fontFamily:'Roboto',fontSizeBase:15,get fontSizeH1(){return this.fontSizeBase*1.8;},get fontSizeH2(){return this.fontSizeBase*1.6;},get fontSizeH3(){return this.fontSizeBase*1.4;},footerHeight:55,footerDefaultBg:'#3F51B5',footerPaddingBottom:0,tabBarTextColor:'#bfc6ea',tabBarTextSize:11,activeTab:'#fff',sTabBarActiveTextColor:'#007aff',tabBarActiveTextColor:'#fff',tabActiveBgColor:'#3F51B5',toolbarBtnColor:'#fff',toolbarDefaultBg:'#3F51B5',toolbarHeight:56,toolbarSearchIconSize:23,toolbarInputColor:'#fff',searchBarHeight:platform===_commonColor.PLATFORM.IOS?30:40,searchBarInputHeight:platform===_commonColor.PLATFORM.IOS?40:50,toolbarBtnTextColor:'#fff',toolbarDefaultBorder:'#3F51B5',iosStatusbar:'light-content',get statusBarColor(){return(0,_color2.default)(this.toolbarDefaultBg).darken(0.2).hex();},get darkenHeader(){return(0,_color2.default)(this.tabBgColor).darken(0.03).hex();},iconFamily:'Ionicons',iconFontSize:28,iconHeaderSize:24,inputFontSize:17,inputBorderColor:'#D9D5DC',inputSuccessBorderColor:'#2b8339',inputErrorBorderColor:'#ed2f2f',inputHeightBase:50,get inputColor(){return this.textColor;},get inputColorPlaceholder(){return'#575757';},buttonLineHeight:19,lineHeightH1:32,lineHeightH2:27,lineHeightH3:22,lineHeight:24,listBg:'transparent',listBorderColor:'#c9c9c9',listDividerBg:'#f4f4f4',listBtnUnderlayColor:'#DDD',listItemPadding:12,listNoteColor:'#808080',listNoteSize:13,listItemSelected:'#3F51B5',defaultProgressColor:'#E4202D',inverseProgressColor:'#1A191B',radioBtnSize:23,radioSelectedColorAndroid:'#3F51B5',radioBtnLineHeight:24,get radioColor(){return this.brandPrimary;},segmentBackgroundColor:'#3F51B5',segmentActiveBackgroundColor:'#fff',segmentTextColor:'#fff',segmentActiveTextColor:'#3F51B5',segmentBorderColor:'#fff',segmentBorderColorMain:'#3F51B5',defaultSpinnerColor:'#45D56E',inverseSpinnerColor:'#1A191B',tabDefaultBg:'#3F51B5',topTabBarTextColor:'#b3c7f9',topTabBarActiveTextColor:'#fff',topTabBarBorderColor:'#fff',topTabBarActiveBorderColor:'#fff',tabBgColor:'#F8F8F8',tabFontSize:15,textColor:'#000',inverseTextColor:'#fff',noteFontSize:14,get defaultTextColor(){return this.textColor;},titleFontfamily:'Roboto',titleFontSize:19,subTitleFontSize:14,subtitleColor:'#FFF',titleFontColor:'#FFF',borderRadiusBase:2,borderWidth:1/_reactNative.PixelRatio.getPixelSizeForLayoutSize(1),contentPadding:10,dropdownLinkColor:'#414142',inputLineHeight:24,deviceWidth:deviceWidth,deviceHeight:deviceHeight,isIphoneX:isIphoneX,inputGroupRoundedBorderRadius:30,Inset:{portrait:{topInset:24,leftInset:0,rightInset:0,bottomInset:34},landscape:{topInset:0,leftInset:44,rightInset:44,bottomInset:21}}};
//# sourceMappingURL=material.js.map
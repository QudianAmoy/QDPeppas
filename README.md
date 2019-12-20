# QDPeppas脚手架

** 基于React Native的一键同时生成iOS/Android项目解决方案 **

![]()

## 脚手架APP页面预览

![]()
 
![]()

![]() 

## 生成语句

执行命令：`react-native init MyApp --version 0.59.10 --template QDPeppas`

执行命令：`npm install`

### Android 初始化配置方法(替换生成Demo包名)

* 修改Android app.gradle的包名
  ![]()
  
* 修改代码包名
  ![]()
  
* 修改Manifest的包名
  ![]()
  

### iOS 初始化配置方法(替换生成Demo包名)

* 用Xcode打开项目，双击项目名改成新名字（重命名项目时，记得先备份好一份；重命名项目时，记得先备份好一份；重命名项目时，记得先备份好一份）
  ![]()
  
* Rename项目名称
  ![]()
  
* 打开应用所在文件夹，修改文件夹名字，所有QDTemplateDemo 改成 NewDemo，包含NewDemoTests.m文件
  ![]()
  
* 选中 NewDemo.xcodeproj 右键打开 --> 显示包内容 --> 双击打开 project.pbxproj ，替换名字
  ![]()
  
* 修改podfile的target，pod install，然后打开workspace
  ![]()
  
* 修改Display Name
  ![]()
  
* manage schemes，修改

## 项目结构路径介绍

+ api
    + 存放各种网络接口、URL，统一的网络请求方法（GET、POST）
+ assets
    + 归类存放图片资源文件，例如home页面图片单独建立一个新的路径./assets/home/1.png
+ base
    + 父类页面，让./page/内的页面继承父类页面
+ components
    + 自定义组件，例如列表、按钮
+ config
    + 配置APP基础信息，版本号，APP名称
+ constants
    + 配置APP内部需要定义的常量，例如：颜色、固定尺寸、事件、图片路径等
+ manager
    + 路由管理器（RouterManager），管理APP整体路由、RN页面跳转
    + 页面管理器（PageManager），自动注册在/page页面内的新增加的页面
    + 权限管理器（PermissionManager），当前仅用Android系统中的权限弹窗
    + 异常上报管理（ReportManager），异常上报处理
+ model
    + 网络交互，或页面交互中的数据结构
+ page
    + APP中的业务逻辑页面，例如home、user、login等页面
+ store
    + 存储模块，提供APP信息存储
+ utils
    + 通用工具方法
+ vender
+ App.js
    + APP启动入口
+ Global.js
    + 全局变量，全局调用方法,例如路由跳转

## 运行指令

执行命令：`react-native run-ios --simulator "iPhone X”` 或已有虚拟机 `react-native run-ios`

执行命令：已经链接手机、虚拟机情况下`react-native run-android`

## 프로젝트 설명 
> [배포 링크](https://mobile-nav-sample.vercel.app/)

https://github.com/prgrms-fe-devcourse/FEDC4-13_React/assets/62418379/cf1d0e85-4562-4a30-84ce-4fd0a4a2d98f

React와 TypeScript로 네비게이션 시스템을 구현했습니다.

react-native 에서 사용했던 navigation 라이브러리의 코드 인터페이스가 생각나서, router 나 navigation 라이브러리처럼 어디서든 가져다가 쓸 수 있게 하자! 라는 생각으로 구현했습니다.

<br/>

## 구현 내용
  
### 구조도

<img width="400" alt="image" src="https://github.com/prgrms-fe-devcourse/FEDC4-13_React/assets/62418379/85af6a7d-e3e0-4b0e-9e3f-024f9452b3c5">

### 구현 내용


* useHistory hook 을 구현하여 스토리지에서 불러오기(+useStorage), 앞으로가기, 뒤로가기와 같은 history 관련 로직을 처리했습니다.
* 뒤로가기를 수행해서 pop 된 history 정보는 poppedHistory 에 쌓아서, 앞으로가기 기능을 추가했습니다.
* contextAPI 를 활용해서 **NavigationContainer 로 둘러쌓인 하위 요소**들이 useNavigation 을 호출하여 자유롭게 navigation 로직을 사용할 수 있도록 했습니다.
```tsx
// example
const navigation = useNavigation();
navigation.navigate('Home'); // Home 으로 이동
```
<br/>

* Navigator 컴포넌트는 NavHeader 와 ScreenViewer 를 렌더링하며, props 로 아래와 같은 옵션을 받아 자유롭게 커스텀이 가능하도록 했습니다.
* 스토리북을 통해 확인할 수 있습니다.

```tsx
const options = {
  header: {
    headerColor, // 헤더 배경 색상
    titleColor, // 헤더 제목 텍스트 색상
    tintColor, // 헤더 버튼 텍스트 색상
    forward, // 앞으로가기 기능 on/off
    border,  // 헤더 border on/off
    shadow, // 헤더 shadow on/off
    buttonDetail, // 뒤로/앞으로 가기 버튼 디테일 on/off (on: 어디 페이지로 가는지 표시)
    pointerShape, // 뒤로/앞으로 가기 버튼 아이콘 모양 (chevron / arrow)
    titleAlign, // 헤더 제목 정렬 (start/center/end)
  },
  animation: {
    animationType, // 화면 전환 애니메이션 (slide, pop, updown, fade, none(없음))
    timeout // 화면 전환 시간
  }
}
```
<br/>

* prop 으로 destination 을 받는 네비게이션 전용 버튼 컴포넌트를 구현했습니다.
```tsx
<NavButton shape='round' destination='Post'>Post</NavButton>
```
<br/>

* navigation 관련 코드는 한 폴더 안에 묶고, index 파일을 활용해 외부에서 쓰이는 파일들만 (`NavigationContainer, Navigator, Screen, useNavigation, NavButton`) 꺼내 쓰도록 했습니다. 
* 결과적으로, App 파일에서는 이런식으로 쓰입니다.
```tsx
  <NavigationContainer initialScreenName='Home'>
    <Navigator options={navigatorOptions}>
      <Screen
        name='Home'
        title='홈'
        component={Home}
      />
      <Screen
        name='Edit'
        title='에디터'
        component={Edit}
      />
      // more Screen...
    </Navigator>
  </NavigationContainer>
```


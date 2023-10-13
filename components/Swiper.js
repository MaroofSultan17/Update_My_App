import { View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

export default function Swiper() {
  const images = [
    require('../assets/Logo.png'),
    require('../assets/image1.png'),
    require('../assets/image2.png'),
    require('../assets/image3.png'),

    
  ]
  return (
    <View >
      <SliderBox images={images} dotColor="red" inactiveDotColor="black" dotStyle={{
        height: 15, width: 15, borderRadius: 10
      }}
        imageLoadingColor="black"
        autoplay={true}
        autoplayInterveal={1000}
        circleLoop={true}
        onCurrentImagePressed={(index) => alert(index + 1)}
        paginationBoxVerticalPadding={20}
        sliderBoxHeight={250}
        ImageComponentStyle={{ flex: 0,alignContent: 'center', alignItems: 'center' }}
      />
    </View>
  );
}
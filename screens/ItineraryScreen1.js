import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { ExpoConfigView, ExpoLinksView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: '',
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.wrapper}>
        <Text style={styles.locationText}>TOKYO</Text>
        </ScrollView>

        <Text style={styles.dateText}>4/7/19</Text>

        <ScrollView style={styles.textContainer}>
          <Text style={styles.bigText}>Breakfast</Text>
        </ScrollView>
        <Text></Text>
        <ScrollView style={styles.textContainer}>
          <Text style={styles.bigText}>Name:</Text>
          <Text style={styles.smolText}>MORI Digital Art Museum</Text>
          <Text></Text>
          <Text style={styles.bigText}>Time:</Text>
          <Text style={styles.smolText}>10:00 AM</Text>
          <Text></Text>
          <Text style={styles.bigText}>Time Allocated:</Text>
          <Text style={styles.smolText}>4 hours</Text>
          <Text></Text>
          <Text style={styles.bigText}>Addresss:</Text>
          <Text style={styles.smolText}>Japan, 〒135-0064 Tokyo, Koto City, Aomi, 1 Chome−3−８ お台場パレットタウン</Text>
          <Text></Text>
          <Text style={styles.bigText}>Description:</Text>
          <Text style={styles.smolText}>teamLab Borderless is a world of art without boundaries, a museum without a map. teamLab Borderless is a group of artworks that form one borderless world. Artworks move out of rooms, communicate with other works, influence, and sometimes intermingle with each other with no boundaries.  Immerse your body in borderless art in this vast, complex, three-dimensional 10,000 square meter world. Wander, explore with intention, discover, and create a new world with others.
</Text>
        </ScrollView>
<Text></Text>

<ScrollView style={styles.textContainer}>
          <Text style={styles.bigText}>Lunch</Text>
        </ScrollView>
        <Text></Text>

        <ScrollView style={styles.textContainer}>
          <Text style={styles.bigText}>Name:</Text>
          <Text style={styles.smolText}>Muji GINZA Flagship Store</Text>
          <Text></Text>
          <Text style={styles.bigText}>Time:</Text>
          <Text style={styles.smolText}>2:00 PM</Text>
          <Text></Text>
          <Text style={styles.bigText}>Time Allocated:</Text>
          <Text style={styles.smolText}>2 hours</Text>
          <Text></Text>
          <Text style={styles.bigText}>Addresss:</Text>
          <Text style={styles.smolText}>Japan, 〒3-chōme-3-5 Ginza, Chuo City, Tōkyō-to 104-0061</Text>
          <Text></Text>
          <Text style={styles.bigText}>Description:</Text>
          <Text style={styles.smolText}>Through the careful selection of materials, streamlining manufacturing processes, and simplifying our packaging, we have continually introduced high quality Muji brand products onto the market.
</Text>
        </ScrollView>
        <Text></Text>
        <ScrollView style={styles.textContainer}>
          <Text style={styles.bigText}>Name:</Text>
          <Text style={styles.smolText}>Tokyu Hands Ginza</Text>
          <Text></Text>
          <Text style={styles.bigText}>Time:</Text>
          <Text style={styles.smolText}>5:00 PM</Text>
          <Text></Text>
          <Text style={styles.bigText}>Time Allocated:</Text>
          <Text style={styles.smolText}>2 hours</Text>
          <Text></Text>
          <Text style={styles.bigText}>Addresss:</Text>
          <Text style={styles.smolText}>Japan, 〒104-0061 Tokyo, Chuo City, Ginza, 2 Chome−2−14 マロニエゲート銀座</Text>
          <Text></Text>
          <Text style={styles.bigText}>Description:</Text>
          <Text style={styles.smolText}>Tokyu Hands delay with all kinds of products, such as high-quality and high-functional living ware, fancy made-in-Japan bags, convenient travel goods, the latest Japanese stationery, unique articles, topical beauty products, and tools and materials for DIY.
</Text>
        </ScrollView>
        <Text></Text>
        <ScrollView style={styles.textContainer}>
          <Text style={styles.bigText}>Dinner</Text>
        </ScrollView>
        <Text></Text>
        <Text></Text>


        <Text style={styles.dateText}>4/8/19</Text>

        <ScrollView style={styles.textContainer}>
          <Text style={styles.bigText}>Name:</Text>
          <Text style={styles.smolText}>Tsukiji Fish Market</Text>
          <Text></Text>
          <Text style={styles.bigText}>Time:</Text>
          <Text style={styles.smolText}>5:00 AM</Text>
          <Text></Text>
          <Text style={styles.bigText}>Time Allocated:</Text>
          <Text style={styles.smolText}>1.5 hours</Text>
          <Text></Text>
          <Text style={styles.bigText}>Addresss:</Text>
          <Text style={styles.smolText}>5 Chome-2-1 Tsukiji, Chuo City, Tokyo 104-0045, Japan</Text>
          <Text></Text>
          <Text style={styles.bigText}>Description:</Text>
          <Text style={styles.smolText}>Tsukiji Fish Market is the largest wholesale fish and seafood market in the world. It is also one of the largest wholesale food markets of any kind.
</Text>
        </ScrollView>
<Text></Text>
<ScrollView style={styles.textContainer}>
          <Text style={styles.bigText}>Breakfast</Text>
        </ScrollView>
        <Text></Text>

        <ScrollView style={styles.textContainer}>
          <Text style={styles.bigText}>Name:</Text>
          <Text style={styles.smolText}>Urikiriya</Text>
          <Text></Text>
          <Text style={styles.bigText}>Time:</Text>
          <Text style={styles.smolText}>10:00 AM</Text>
          <Text></Text>
          <Text style={styles.bigText}>Time Allocated:</Text>
          <Text style={styles.smolText}>1 hour</Text>
          <Text></Text>
          <Text style={styles.bigText}>Addresss:</Text>
          <Text style={styles.smolText}>Japan, 〒104-0045 Tokyo, Chuo City, 7, 築地4-7-2 IWAMA bldg</Text>
          <Text></Text>
          <Text style={styles.bigText}>Description:</Text>
          <Text style={styles.smolText}>Urikiri-Ya is a retail store of Iwama Honsha established in 1902 as a wholesaler specializing in tableware. We constantly stock more than 6,000 new items from many localities, including Akita ware, Mino ware and Kutani ware.
</Text>
        </ScrollView>
        <Text></Text>

<ScrollView style={styles.textContainer}>
          <Text style={styles.bigText}>Lunch</Text>
        </ScrollView>
        <Text></Text>

        <ScrollView style={styles.textContainer}>
          <Text style={styles.bigText}>Name:</Text>
          <Text style={styles.smolText}>Studio Ghibli Museum</Text>
          <Text></Text>
          <Text style={styles.bigText}>Time:</Text>
          <Text style={styles.smolText}>1:00 PM</Text>
          <Text></Text>
          <Text style={styles.bigText}>Time Allocated:</Text>
          <Text style={styles.smolText}>4 hours</Text>
          <Text></Text>
          <Text style={styles.bigText}>Addresss:</Text>
          <Text style={styles.smolText}>1 Chome-1-83 Shimorenjaku, Mitaka, Tokyo 181-0013, Japan</Text>
          <Text></Text>
          <Text style={styles.bigText}>Description:</Text>
          <Text style={styles.smolText}>Open the door and welcome to wonderland! Every window and lamp is lovingly hand-crafted with beautiful and colorful stained glass using Ghibli characters, pretty plants and flowers, and forest animals. When the sun is shining, the vivid colors of the glass are reflected in splashes of colored light on the stone floors.
</Text>
        </ScrollView>
        <Text></Text>
        <ScrollView style={styles.textContainer}>
          <Text style={styles.bigText}>Dinner</Text>
        </ScrollView>



        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30
  },
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#fae3d9',
    flexWrap: "wrap"
  },
  locationContainer: {
    alignItems: 'center',
  },
  textContainer: {
    flexWrap: "wrap",
    width: 300,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#61c0bf',
    borderRadius: 5,
  },
  bigText: {

    flexWrap: "wrap",
    flexDirection: 'row',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  smolText: {
    width: 275,
    flexDirection: 'row',
    flexWrap: "wrap",
    color: '#fff',
    fontSize: 15,
  },
  dateText: {
    flexWrap: "wrap",
    flexDirection: 'row',
    color: '#ffb6b9',
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  locationText: {
    color: '#fff',
    fontSize: 70,
    paddingBottom: 5,
    fontWeight: "bold",
    shadowOpacity: 1,
    shadowColor: '#ffb6b9',
    textShadowOffset: {width: 0, height: 5},
  }
});

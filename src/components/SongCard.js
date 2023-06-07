import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from "./SongCard.styles";

const SongCard = props => {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.song.imageUrl}} style={styles.image}/>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.info_container}>
            <View style={styles.body}>
          <Text>{props.song.artist}</Text>
          <Text style={styles.year}>{props.song.year}</Text>
        </View>
        {props.song.isSoldOut && (
        <View style={styles.tukCont}>
            <Text style={styles.tuk}>TÜKENDİ</Text>
        </View>
        )}
        </View>
      </View>
    </View>
  );
};

export default SongCard;

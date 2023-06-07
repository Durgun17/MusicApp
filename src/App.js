import React,{useState} from "react";
import { View,Text,FlatList,StyleSheet,SafeAreaView } from "react-native";
import music_data from "./music-data.json";
import SongCard from "./components/SongCard";
import SearchBar from "./components/SearchBar/SearchBar";
// import { useState } from "react";

function App(){

const [lisst, setList] = useState(music_data);
const renderSong = ({item}) => <SongCard song={item}/>
const renderSeparator = () => <View style={styles.separator}/>
const handleSearch = Text => {
    const filteredList = music_data.filter( song =>{
        const searcedText = Text.toLowerCase();
        const currentTite = song.title.toLowerCase();

        return currentTite.indexOf(searcedText) > -1;
    });

    setList(filteredList);
};

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <SearchBar 
                onSeach={handleSearch}
                />
                <FlatList 
                keyExtractor={item => item.id}
                data={lisst}
                renderItem={renderSong}
                ItemSeparatorComponent={renderSeparator}
                />
            </View>
        </SafeAreaView>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {flex: 1,
    },
    separator: {
        borderWidth: 1,
        borderColor: "grey",
    },
    

});

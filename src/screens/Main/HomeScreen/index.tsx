import React, { FC, useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Carousel from "react-native-snap-carousel";

import { SettingsContext } from "../../../context/SettingsContext";
import { AppStackParams, Game } from "../../../types";

import { styles } from "./styles";
import { api } from "../../../api";
import moment from "moment";
import Typography from "../../../components/Typography";
import CoverImageCard from "../../../components/CoverImageCard";
import Spacer from "../../../components/Spacer";
import ArtworkImageCard from "../../../components/ArtworkImageCard";

interface IHomeScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "AppTabs">;
}

const HomeScreen: FC<IHomeScreenProps> = ({ navigation }) => {
  const { colors } = useTheme();
  const { selectedGenres, selectedPlatforms } = useContext(SettingsContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [reccomendedGames, setReccomendedGames] = useState<Game[] | null>(null);
  const [featuredGames, setFeaturedGames] = useState<Game[] | null>(null);
  const [upcomingGames, setUpcomingGames] = useState<Game[] | null>(null);

  const getReccomendedGames = async (platforms: string, genres: string) => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await api.post(
        "/games",
        `fields name, cover.url, name; where platforms = (${platforms}) & genres = (${genres}) & artworks != null; limit 30;`
      );

      setReccomendedGames(response.data);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  const getFeaturedGames = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await api.post(
        "/games",
        `fields name, cover.url, artworks.url, name; where first_release_date > ${moment()
          .startOf("year")
          .unix()} & hypes != null & cover != null & version_parent = null & artworks != null; sort hypes desc; limit 30;`
      );

      setFeaturedGames(response.data);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  const getUpcomingGames = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await api.post(
        "/games",
        `fields name, cover.url, artworks.url, name; where first_release_date > ${moment().unix()} & hypes != null & cover != null & version_parent = null & artworks != null; sort hypes desc; limit 30;`
      );

      setUpcomingGames(response.data);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  if (selectedPlatforms.length > 0 && selectedGenres.length > 0) {
    useEffect(() => {
      getReccomendedGames(
        selectedPlatforms.join(","),
        selectedGenres.join(",")
      );
    }, [selectedGenres, selectedPlatforms]);
  }

  useEffect(() => {
    getFeaturedGames();
  }, []);

  useEffect(() => {
    getUpcomingGames();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.page}>
        <View style={styles.centeredPage}>
          <ActivityIndicator size={40} color={colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  if (!isLoading && error) {
    return (
      <SafeAreaView style={styles.page}>
        <View style={styles.centeredPage}>
          <Typography>Error getting data.</Typography>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {featuredGames && (
          <Carousel
            data={featuredGames.slice(0, 9)}
            layout="default"
            itemWidth={Dimensions.get("screen").width * 0.85}
            sliderWidth={Dimensions.get("screen").width}
            inactiveSlideShift={-10}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <ArtworkImageCard game={item} />
              </TouchableOpacity>
            )}
          />
        )}

        <View style={styles.flatlistsWrapper}>
          {reccomendedGames && (
            <>
              <Spacer y={10} />
              <View style={styles.row}>
                <Typography variant="bold" size={22}>
                  For you
                </Typography>
                <Typography color="primary" size={16}>
                  See More
                </Typography>
              </View>

              <Spacer y={20} />
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={reccomendedGames.slice(0, 9)}
                horizontal
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={{
                      marginRight:
                        index === reccomendedGames.slice(0, 9).length - 1
                          ? 0
                          : 10,
                    }}
                  >
                    <CoverImageCard game={item} />
                  </TouchableOpacity>
                )}
              />
              <Spacer y={10} />
            </>
          )}

          {upcomingGames && (
            <>
              <View style={styles.row}>
                <Typography variant="bold" size={22}>
                  Upcoming{" "}
                </Typography>
                <Typography color="primary" size={16}>
                  See More
                </Typography>
              </View>

              <Spacer y={20} />
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={upcomingGames.slice(0, 9)}
                horizontal
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={{
                      marginRight:
                        index === upcomingGames.slice(0, 9).length - 1 ? 0 : 10,
                    }}
                  >
                    <CoverImageCard game={item} />
                  </TouchableOpacity>
                )}
              />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

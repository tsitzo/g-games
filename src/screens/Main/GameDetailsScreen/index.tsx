import React, { FC, useContext, useEffect, useRef, useState } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import moment from "moment";
import { RouteProp, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { AppStackParams, Game } from "../../../types";

import Typography from "../../../components/Typography";
import Spacer from "../../../components/Spacer";
import ScreenshotImage from "../../../components/ScreenshotImage";
import CoverImageCard from "../../../components/CoverImageCard";
import { styles } from "./styles";
import { api } from "../../../api";
import { getDevs, getPublishers } from "../../../utils";
import VideoThumbnail from "../../../components/VideoThumbnail";
import GridCoverImageCard from "../../../components/GridCoverImageCard";
import { CollectionsContext } from "../../../context/CollectionsContext";

interface IGameDetailsScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "GameDetailsScreen">;
  route: RouteProp<AppStackParams, "GameDetailsScreen">;
}

const { height } = Dimensions.get("screen");
const screenshotHeight = height * 0.65;

const GameDetailsScreen: FC<IGameDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const {
    archiveHandler,
    wishlistHandler,
    backlogHandler,
    isArchive,
    isBacklog,
    isWishlist,
  } = useContext(CollectionsContext);
  const { id } = route.params;
  const bottomSheetRef = useRef<BottomSheet>(null);

  const { colors } = useTheme();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [gameDetails, setGameDetails] = useState<Game | null>(null);

  const getGameDetails = async (id: number) => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await api.post(
        "/games",
        `fields name, summary, cover.url, screenshots.url, videos.video_id, genres.name, similar_games.cover.url, dlcs.cover.url, platforms.name, first_release_date, involved_companies.publisher, involved_companies.developer, involved_companies.company.name; where id = ${id} ;`
      );

      setGameDetails(response.data[0]);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getGameDetails(id);
  }, [id]);

  if (isLoading) {
    return (
      <View style={[styles.page, { backgroundColor: colors.modalBackground }]}>
        <View style={styles.centeredPage}>
          <ActivityIndicator size={40} color={colors.primary} />
        </View>
      </View>
    );
  }

  if (!isLoading && error) {
    return (
      <View style={[styles.page, { backgroundColor: colors.modalBackground }]}>
        <View style={styles.centeredPage}>
          <Typography>Error getting data.</Typography>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.page, { backgroundColor: colors.modalBackground }]}>
      <View style={{ height: screenshotHeight }}>
        <View style={styles.imagePanel}>
          {/* <ImageBackground
            resizeMode="cover"
            style={styles.imageBackground}
            source={{
              uri:
                gameDetails?.screenshots &&
                `https:${gameDetails.screenshots?.[
                  Math.floor(Math.random() * gameDetails.screenshots.length)
                ].url?.replace("t_thumb", "t_screenshot_med")}`,
            }}
          />
          <View style={styles.coverMask} /> */}
          {gameDetails?.cover && (
            <View style={styles.coverContainer}>
              <View style={styles.coverWrapper}>
                <GridCoverImageCard game={gameDetails} />
              </View>
            </View>
          )}
        </View>
      </View>
      <BottomSheet
        snapPoints={[height - screenshotHeight, height]}
        ref={bottomSheetRef}
        backgroundStyle={{ backgroundColor: colors.card }}
        handleIndicatorStyle={{ backgroundColor: colors.subtext, width: 100 }}
      >
        <BottomSheetScrollView
          contentContainerStyle={styles.bottomSheetScrollview}
          showsVerticalScrollIndicator={false}
        >
          <Typography
            variant="bold"
            size={28}
            numberOfLines={2}
            adjustsFontSizeToFit
          >
            {gameDetails?.name}
          </Typography>

          <Spacer y={10} />

          <View style={styles.collectionButtonsRow}>
            <TouchableOpacity
              style={[
                styles.collectionButton,
                {
                  backgroundColor: isArchive(gameDetails?.id!)
                    ? colors.primary
                    : colors.surface,
                },
              ]}
              onPress={() =>
                archiveHandler({
                  id: gameDetails?.id!,
                  cover: gameDetails?.cover,
                  name: gameDetails?.name!,
                })
              }
            >
              <Text
                style={[
                  styles.collectionButtonText,
                  {
                    fontWeight: isArchive(gameDetails?.id!) ? "700" : "500",
                    color: isArchive(gameDetails?.id!) ? "#fff" : colors.text,
                  },
                ]}
              >
                Archive
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.collectionButton,
                {
                  backgroundColor: isWishlist(gameDetails?.id!)
                    ? colors.primary
                    : colors.surface,
                },
              ]}
              onPress={() =>
                wishlistHandler({
                  id: gameDetails?.id!,
                  cover: gameDetails?.cover,
                  name: gameDetails?.name!,
                })
              }
            >
              <Text
                style={[
                  styles.collectionButtonText,
                  {
                    fontWeight: isWishlist(gameDetails?.id!) ? "700" : "500",
                    color: isWishlist(gameDetails?.id!) ? "#fff" : colors.text,
                  },
                ]}
              >
                Wishlist
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.collectionButton,
                {
                  backgroundColor: isBacklog(gameDetails?.id!)
                    ? colors.primary
                    : colors.surface,
                },
              ]}
              onPress={() =>
                backlogHandler({
                  id: gameDetails?.id!,
                  cover: gameDetails?.cover,
                  name: gameDetails?.name!,
                })
              }
            >
              <Text
                style={[
                  styles.collectionButtonText,
                  {
                    fontWeight: isBacklog(gameDetails?.id!) ? "700" : "500",
                    color: isBacklog(gameDetails?.id!) ? "#fff" : colors.text,
                  },
                ]}
              >
                Backlog
              </Text>
            </TouchableOpacity>
          </View>

          <Spacer y={10} />
          <Typography color="subtext">{gameDetails?.summary}</Typography>
          <Spacer y={20} />

          {gameDetails?.first_release_date && (
            <View style={styles.textRow}>
              <Typography color="subtext">Release Date: </Typography>
              <Typography variant="bold">
                {moment(gameDetails.first_release_date * 1000).format("ll")}
              </Typography>
            </View>
          )}
          <Spacer y={10} />

          {gameDetails?.genres && (
            <View style={styles.textRow}>
              <Typography color="subtext">Genres: </Typography>
              <Typography variant="bold" style={styles.textValue}>
                {gameDetails.genres.map((g) => g.name).join(", ")}
              </Typography>
            </View>
          )}

          <Spacer y={10} />

          {gameDetails?.platforms && (
            <View style={styles.textRow}>
              <Typography color="subtext">Platforms: </Typography>
              <Typography variant="bold" style={styles.textValue}>
                {gameDetails.platforms.map((p) => p.name).join(", ")}
              </Typography>
            </View>
          )}

          <Spacer y={10} />

          {gameDetails?.involved_companies && (
            <View style={styles.textRow}>
              <Typography color="subtext">Developers: </Typography>
              <Typography variant="bold" style={styles.textValue}>
                {getDevs(gameDetails.involved_companies).join(", ")
                  ? getDevs(gameDetails.involved_companies).join(", ")
                  : "-"}
              </Typography>
            </View>
          )}

          <Spacer y={10} />

          {gameDetails?.involved_companies && (
            <View style={styles.textRow}>
              <Typography color="subtext">Publishers: </Typography>
              <Typography variant="bold" style={styles.textValue}>
                {getPublishers(gameDetails.involved_companies).join(", ")
                  ? getPublishers(gameDetails.involved_companies).join(", ")
                  : "-"}
              </Typography>
            </View>
          )}

          <Spacer y={10} />

          {gameDetails?.screenshots && (
            <>
              <Spacer y={20} />
              <Typography variant="bold" color="subtext">
                Screenshots
              </Typography>
              <Spacer y={20} />

              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={gameDetails.screenshots}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={[
                      styles.screenshotWrapper,
                      {
                        marginRight:
                          index === gameDetails.screenshots!.length - 1
                            ? 0
                            : 10,
                      },
                    ]}
                  >
                    <ScreenshotImage screenshot={item} />
                  </TouchableOpacity>
                )}
              />
            </>
          )}

          {gameDetails?.videos && (
            <>
              <Spacer y={20} />
              <Typography variant="bold" color="subtext">
                Videos
              </Typography>
              <Spacer y={20} />
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={gameDetails.videos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <View
                    style={[
                      styles.videoWrapper,
                      {
                        marginRight:
                          index === gameDetails.videos!.length - 1 ? 0 : 10,
                      },
                    ]}
                  >
                    <VideoThumbnail videoID={item.video_id} />
                  </View>
                )}
              />
            </>
          )}

          {gameDetails?.similar_games && (
            <>
              <Spacer y={20} />
              <Typography variant="bold" color="subtext">
                Similar Games
              </Typography>
              <Spacer y={20} />
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={gameDetails.similar_games}
                horizontal
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.push("GameDetailsScreen", {
                        id: item.id,
                      })
                    }
                    style={[
                      styles.coverShadow,
                      {
                        marginRight:
                          index === gameDetails.similar_games!.length - 1
                            ? 0
                            : 10,
                      },
                    ]}
                  >
                    <CoverImageCard game={item} />
                  </TouchableOpacity>
                )}
              />
            </>
          )}

          {gameDetails?.dlcs && (
            <>
              <Spacer y={10} />
              <Typography variant="bold" color="subtext">
                DLCs
              </Typography>
              <Spacer y={20} />
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={gameDetails.dlcs}
                horizontal
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.push("GameDetailsScreen", {
                        id: item.id,
                      })
                    }
                    style={[
                      styles.coverShadow,
                      {
                        marginRight:
                          index === gameDetails.dlcs!.length - 1 ? 0 : 10,
                      },
                    ]}
                  >
                    <CoverImageCard game={item} />
                  </TouchableOpacity>
                )}
              />
            </>
          )}
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default GameDetailsScreen;

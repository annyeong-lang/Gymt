import React, { useState } from "react";
import PropTypes from "prop-types";
import { ScrollView, ActivityIndicator, RefreshControl } from "react-native";

const ScrollContainer = ({
  loading=false,
  children,
  refreshFn
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator ={false}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          enabled={false}
          tintColor={"white"}
        />
      }
      style={{ backgroundColor: "white" }}
    >
    {loading ? <ActivityIndicator color="white" size="small" /> : children}
    </ScrollView>
  );
};

export default ScrollContainer;
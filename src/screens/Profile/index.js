import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Alert,
  Linking,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  SafeAreaView,
} from "react-native";
import { hitProfileAPI } from "../../action/profileapi";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    try {
      this.props.hitProfileAPI();
    } catch (error) {
      console.log("Error in Fetch Movies List" + error);
    }
  };

  render() {
    const { data } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: "95%",
                alignSelf: "center",
                padding: 10,
                borderWidth: 1,
                borderTopColor: index === 0 ? "white" : "white",
                borderBottomColor: "black",
                borderWidth: 0.5,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#000" }}
                >
                  Name:
                </Text>
                <Text>{item.name}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#000" }}
                >
                  UserName:
                </Text>
                <Text>{item.username}</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#000" }}
                >
                  Email:
                </Text>
                <Text>{item.email}</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#000" }}
                >
                  Address:
                </Text>
                <Text
                  style={{ marginLeft: 10, width: "80%", textAlign: "right" }}
                >
                  {item.address.street}, {item.address.suite},{" "}
                  {item.address.city},{item.address.zipcode}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#000" }}
                >
                  GeoLocation:
                </Text>
                <Text>
                  {item.address.geo.lat}, {item.address.geo.lng}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#000" }}
                >
                  Phone:
                </Text>
                <Text>{item.phone}</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#000" }}
                >
                  Website:
                </Text>
                <Text>{item.website}</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#000" }}
                >
                  Company:
                </Text>
                <Text
                  style={{ marginLeft: 10, width: "80%", textAlign: "right" }}
                >
                  {item.company.name}, {item.company.catchPhrase},{" "}
                  {item.company.catchPhrase}
                </Text>
              </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                marginTop: 10,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <Text>Please wait...</Text>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.profilereducer.data,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      hitProfileAPI: hitProfileAPI,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

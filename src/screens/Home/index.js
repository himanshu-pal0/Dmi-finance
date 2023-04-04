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
import { hitAPI } from "../../action/homeapi";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    try {
      this.props.hitAPI();
    } catch (error) {
      console.log("Error in Fetch Movies List" + error);
    }
  };

  render() {
    const { movies } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={movies}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: "90%",
                borderWidth: 1,
                borderTopColor: index === 0 ? "white" : "white",
                borderBottomColor: "black",
                borderWidth: 0.5,
                alignSelf:'center',
                marginTop: 10,
              }}
            >
              <View style={{ flexDirection: "row", alignContent:'center', paddingHorizontal: 10, marginTop: 10,marginBottom: 5 }}>
                <Text
                  style={{
                    color: "#000",
                    fontSize: 14,
                    fontWeight: "700",
                  }}
                >
                  Tittle:
                </Text>
                <Text
                  style={{
                    color: "#000",
                    fontSize: 14,
                    fontWeight: "500",
                    marginLeft: 15,
                    width: '85%'
                  }}
                >
                  {item.title}
                </Text>
              </View>

              <View style={{flexDirection:'row',paddingHorizontal: 10,paddingBottom: 10, justifyContent:'space-between',}}>
                <Text style={{fontSize:14, fontWeight:"700", color: '#000',}}>body:</Text>
                <Text style={{fontSize:14, fontWeight:"500", marginLeft: 5, width: '85%', alignSelf:"center",}}>{item.body}</Text>
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
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Profile")}
          style={{
            width: 130,
            height: 40,
            backgroundColor: "black",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>Go To Profile</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.homereducer.movies,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      hitAPI: hitAPI,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

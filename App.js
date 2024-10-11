import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  return (
    <SafeAreaView className="bg-gray-100  h-full">
      <View className="p-4">
        {/***Topbar start */}
        <View className="flex-row justify-between items-center">
          {/**** child one start*/}
          <View className="bg-white rounded-full  w-10 p-2 ">
            <FontAwesome name="bell-o" size={24} color="black" />
          </View>
          {/**child one end */}
          {/**** child two start*/}

          <View className="h-10 w-40">
            <Image
              source={require("./assets/logo.png")}
              className="w-full h-full object-cover"
            />
          </View>
          {/**child two end */}
          {/**** child three start*/}
          <View className="bg-gray-400 p-2 rounded-full w-10">
            <Fontisto name="male" size={24} color="white" />
          </View>
          {/**child three end */}
        </View>
        {/**Topbar end */}

        {/***search start */}
        <View className="bg-white mx-auto my-6 flex-row items-center justify-between w-[360] shadow-lg rounded p-4">
          <TextInput
            className="font-bold"
            placeholder="Search Hubtel"
            keyboardType="numeric"
          />
          <Ionicons name="search-outline" size={24} color="black" />
        </View>

        {/**search end */}

        {/**services start */}

        <View className="flex-row items-center justify-center gap-2 my-2 flex-wrap">
          <TouchableOpacity className="h-28 gap-y-2 w-28 rounded-xl bg-white flex-col  justify-center items-center">
            <View>
              <MaterialCommunityIcons name="cash" size={24} color="black" />
            </View>
            <View>
              <Text>Send Money</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-28 gap-y-2 w-28 rounded-xl bg-white flex-col  justify-center items-center">
            <View>
              <MaterialCommunityIcons name="cash" size={24} color="black" />
            </View>
            <View>
              <Text>Send Money</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-28 gap-y-2 w-28 rounded-xl bg-white flex-col  justify-center items-center">
            <View>
              <MaterialCommunityIcons name="cash" size={24} color="black" />
            </View>
            <View>
              <Text>Send Money</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-28 gap-y-2 w-28 rounded-xl bg-white flex-col  justify-center items-center">
            <View>
              <MaterialCommunityIcons name="cash" size={24} color="black" />
            </View>
            <View>
              <Text>Send Money</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-28 gap-y-2 w-28 rounded-xl bg-white flex-col  justify-center items-center">
            <View>
              <MaterialCommunityIcons name="cash" size={24} color="black" />
            </View>
            <View>
              <Text>Send Money</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-28 gap-y-2 w-28 rounded-xl bg-white flex-col  justify-center items-center">
            <View>
              <MaterialCommunityIcons name="cash" size={24} color="black" />
            </View>
            <View>
              <Text>Send Money</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-28 gap-y-2 w-28 rounded-xl bg-white flex-col  justify-center items-center">
            <View>
              <MaterialCommunityIcons name="cash" size={24} color="black" />
            </View>
            <View>
              <Text>Send Money</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-28 gap-y-2 w-28 rounded-xl bg-white flex-col  justify-center items-center">
            <View>
              <MaterialCommunityIcons name="cash" size={24} color="black" />
            </View>
            <View>
              <Text>Send Money</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-28 gap-y-2 w-28 rounded-xl bg-white flex-col  justify-center items-center">
            <View>
              <MaterialCommunityIcons name="cash" size={24} color="black" />
            </View>
            <View>
              <Text>Send Money</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/**services end */}
      </View>
    </SafeAreaView>
  );
};

export default App;

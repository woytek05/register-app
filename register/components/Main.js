import React, { Component } from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Alert,
} from "react-native";

import MyButton from "./MyButton";
import Settings from "./Settings";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
        };
    }

    register = (login, password, registered) => {
        const data = JSON.stringify({
            login: login,
            password: password,
            registered: registered,
        });

        const options = {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: data,
        };

        fetch(
            `${Settings.serverAddress}:${Settings.serverPort}/register`,
            options
        )
            .then((response) => response.json())
            .then((data) => {
                Alert.alert("Alert", data.response, [
                    {
                        text: "OK",
                        onPress: () => {
                            this.props.navigation.navigate("users");
                        },
                    },
                ]);
            })
            .catch((error) => console.log(error));
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <StatusBar />
                <View style={styles.headerContainer}>
                    <Text style={styles.header}> Register App </Text>
                </View>
                <View style={styles.alignItemsCenter}>
                    <Text style={[styles.smallHeader, styles.marginTop]}>
                        Welcome in app!
                    </Text>
                    <TextInput
                        style={[styles.input, styles.marginTop]}
                        placeholder="Login"
                        placeholderTextColor="#757575"
                        onChangeText={(text) => this.setState({ login: text })}
                        defaultValue={this.state.login}
                    />
                    <TextInput
                        style={[styles.input, styles.marginTop]}
                        placeholder="Password"
                        placeholderTextColor="#757575"
                        onChangeText={(text) =>
                            this.setState({ password: text })
                        }
                        defaultValue={this.state.password}
                    />
                    <MyButton
                        text="REGISTER"
                        onPress={() => {
                            this.register(
                                this.state.login,
                                this.state.password,
                                Date.now()
                            );
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = require("./Styles");

export default Main;

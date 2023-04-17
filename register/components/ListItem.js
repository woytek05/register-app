import React, { Component } from "react";
import { View, Text, Image, Alert } from "react-native";
import MyButton from "./MyButton";
import Settings from "./Settings";
import margin from "./Margin";
import colors from "./Colors";

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    deleteUser = (id) => {
        const data = JSON.stringify({
            id: id,
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
            `${Settings.serverAddress}:${Settings.serverPort}/deleteUser`,
            options
        )
            .then(() => this.props.getUsers())
            .catch((error) => console.log(error));
    };

    render() {
        return (
            <View style={[styles.flex1, styles.marginTop]}>
                <View style={[styles.flex1, styles.row]}>
                    <View style={styles.flex1}>
                        <View style={styles.center}>
                            <Image
                                style={styles.avatar}
                                source={require("../assets/avatar.webp")}
                            />
                        </View>
                    </View>
                    <View style={styles.flex2}>
                        <View style={[styles.spaceAround, styles.row]}>
                            <MyButton
                                text="DETAILS"
                                width={75}
                                height={35}
                                margin={margin(0)}
                                onPress={() => {
                                    this.props.navigation.navigate("details", {
                                        id: this.props.id,
                                    });
                                }}
                            ></MyButton>
                            <MyButton
                                text="DELETE"
                                width={75}
                                height={35}
                                onPress={() => {
                                    Alert.alert(
                                        "Delete User",
                                        `Are you sure you want to delete user with index ${this.props.index}?`,
                                        [
                                            {
                                                text: "Cancel",
                                                style: "cancel",
                                            },
                                            {
                                                text: "Yes",
                                                onPress: () => {
                                                    this.deleteUser(
                                                        this.props.id
                                                    );
                                                },
                                            },
                                        ]
                                    );
                                }}
                            ></MyButton>
                        </View>
                    </View>
                </View>
                <View style={styles.center}>
                    <View>
                        <Text style={styles.smallHeader}>
                            {this.props.index}:{this.props.login}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = require("./Styles");

export default ListItem;

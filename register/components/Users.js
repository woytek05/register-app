import React, { Component } from "react";
import { View, Text, Button, FlatList, StatusBar } from "react-native";
import Settings from "./Settings";
import MyButton from "./MyButton";
import ListItem from "./ListItem";
import margin from "./Margin";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    getUsers = () => {
        fetch(`${Settings.serverAddress}:${Settings.serverPort}/getUsers`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let users = [];
                for (const user of Object.values(data.users)) {
                    let newUser = {};
                    for (const [key, value] of Object.entries(user)) {
                        newUser[key] = value;
                    }
                    users.push(newUser);
                }

                users.sort((a, b) => {
                    if (a.index < b.index) return -1;
                });

                this.setState({ users: users });
                console.log(
                    new Date(Date.now()).toLocaleTimeString(),
                    users.length
                );
            });
    };

    componentDidMount = () => {
        this.getUsers();
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <StatusBar />
                <View style={styles.flex1}>
                    <View style={styles.center}>
                        <MyButton
                            text="BACK TO LOGIN PAGE"
                            width={200}
                            margin={margin(0)}
                            onPress={() => {
                                this.props.navigation.navigate("main");
                            }}
                        />
                    </View>
                    <View style={[styles.flex8, styles.marginBottom]}>
                        <FlatList
                            data={this.state.users}
                            renderItem={({ item }) => (
                                <ListItem
                                    id={item._id}
                                    index={item.index}
                                    login={item.login}
                                    getUsers={this.getUsers}
                                    navigation={this.props.navigation}
                                ></ListItem>
                            )}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = require("./Styles");

export default Users;

import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Settings from "./Settings";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: "",
            id: "",
            login: "",
            password: "",
            registered: 0,
        };
    }

    getUserData = () => {
        fetch(
            `${Settings.serverAddress}:${Settings.serverPort}/getUserData?id=${this.props.route.params.id}`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    index: data.docs[0].index,
                    id: data.docs[0]._id,
                    login: data.docs[0].login,
                    password: data.docs[0].password,
                    registered: data.docs[0].registered,
                });
            });
    };

    componentDidMount() {
        this.getUserData(this.props.id);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.alignItemsCenter}>
                    <View style={styles.center}>
                        <View>
                            <Image
                                style={styles.bigAvatar}
                                source={require("../assets/avatar.webp")}
                            />
                        </View>
                        <View style={styles.smallMarginTop}>
                            <Text style={styles.smallHeader}>Index</Text>
                            <Text style={styles.blueText}>
                                {this.state.index}
                            </Text>
                        </View>
                        <View style={styles.smallMarginTop}>
                            <Text style={styles.smallHeader}>ID</Text>
                            <Text style={styles.blueText}>{this.state.id}</Text>
                        </View>
                        <View style={styles.smallMarginTop}>
                            <Text style={styles.smallHeader}>Login</Text>
                            <Text style={styles.blueText}>
                                {this.state.login}
                            </Text>
                        </View>
                        <View style={styles.smallMarginTop}>
                            <Text style={styles.smallHeader}>Password</Text>
                            <Text style={styles.blueText}>
                                {this.state.password}
                            </Text>
                        </View>
                        <View style={styles.smallMarginTop}>
                            <Text style={styles.smallHeader}>Registered</Text>
                            <Text style={styles.blueText}>
                                {new Date(
                                    this.state.registered
                                ).toLocaleDateString() +
                                    " " +
                                    new Date(
                                        this.state.registered
                                    ).toLocaleTimeString()}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = require("./Styles");

export default Details;

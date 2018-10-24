import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert, FlatList, Image, ActivityIndicator } from 'react-native'

export default class ServiceComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.props.callService()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data != null && !nextProps.isLoading) {
            this.setState({
                data: nextProps.data
            });
        }

        if (nextProps.error != undefined) {
            Alert.alert(
                'Error', nextProps.error, 
                [{ text: 'Do you want to reload', onPress: () => this.props.callService() },],
                { cancelable: false })
        }
    }

// <Image source={{ uri: rowData.data.thumbnail }} style={styles.photo} />
    renderCell = (personJson) => (
        <View style={styles.containerList}>
            <Text style={styles.text}>
                {`${personJson.firstname} ${personJson.lastname}`}
            </Text>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={{ marginTop: 20 }}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => this.renderCell(item)}
                /> 
                <ActivityIndicator
                    animating={this.props.isLoading}
                    style={[styles.centering, { height: 80 }]}
                    size="large"
                    color="#0000ff"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    containerList: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 80,
        width: 80,
        borderRadius: 20,
        backgroundColor: '#000000'
    },

    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,

    },
});
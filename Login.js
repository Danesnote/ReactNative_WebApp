import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import Firebase from "../firebase";

class Login extends React.Component {
  state = {
    email: ``,
    password: ``,
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={this.state.email}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          value={this.state.password}
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Button title="Don't have an account yet? Sign up" />
      </View>
    );
  }
}

export default Login;
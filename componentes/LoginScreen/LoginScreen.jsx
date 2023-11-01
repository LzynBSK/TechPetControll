const Login = ({navigation}) => {
  const userContext = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await Parse.User.logIn(username, password);
      userContext.setUser(user);
      userContext.setIsUserLoaded(true);
    } catch (error) {
      console.error('Failed to log in', error);
    }
  };
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtCadastro}>Login</Text>
      <TextInput
        style={styles.input1}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input2}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.enterButton} onPress={handleLogin}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },

  header: {},

  sideBySide: {
    flexDirection: "row",
  },

  Btw: {
    justifyContent: "space-between",
  },

  button: {
    width: "40%",
    borderWidth: 1,
    borderColor: "black",
    padding: 6,
    borderRadius: 2,
    //backgroundColor:'black'
  },

  text: {
    fontSize: 24,
  },

  containerOptions: {
    width: "96%",
    marginTop: 50,
  },

  options: {
    borderColor: "transparent",
    height: "20%",
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#c9cdce",
    gap:10
  },

  searchContainer: {
    borderWidth: 1,
    height: 50,
    alignItems: "center",
    paddingLeft: 6,
    paddingRight: 10,
    borderRadius: 4,
  },

  search: {
    marginLeft: 10,
    fontSize: 18,
    borderColor: "gray",
  },

  profile: {
    borderWidth: 1,
    borderRadius: 10,
    height: 80,
    backgroundColor: "#edeaea",
    marginBottom: "5%",
    padding: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#3388aa",
  },

  containerForm: {
    flex: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "left",
    paddingLeft: "8%",
    paddingRight: "8%",
    //justifyContent:'center'
  },
  title: {
    fontSize: 28,
    marginTop: "10%",
  },

  buttonEnter: {
    backgroundColor: "#3388aa",
    padding: 10,
    width: "100%",
    marginTop: "16%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    fontSize: 14,
  },

  forgotPass: {
    marginTop: "14%",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },

  popUp: {
    borderRadius: 8,
    borderColor: "#333",
    borderWidth: 1,
    backgroundColor: "white",
    position: "absolute",
    padding: 10,
    width: "100%",
    height: "20%",
    bottom: 0,
  },

  buttonOut: {
    backgroundColor: "#ff0000",
    padding: 10,
    width: "100%",
    marginTop: "16%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },

  hiddenText: {
    display: "none",
    color: "#ff0000",
    marginTop: "8%",
  },

  visibleText: {
    display: "flex",
    color: "#ff0000",
    marginTop: "8%",
  },

  headerIcons: {
    marginBottom: "4%",
    borderBottomWidth: 1,
    paddingBottom: 4,
  },

  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 10,
  },
  //INTRODUÇÃO:
  containerIntro: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  richEditor: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    minHeight:500
  },
  richToolbar: {
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  titleIntro:{
    fontSize: 30, 
    marginBottom:20, 
  },

  //ANEXOS:
  fileName: {
    marginTop: 20,
    fontSize: 16,
    color: "#333",
  },
  containerAttachment: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default styles;

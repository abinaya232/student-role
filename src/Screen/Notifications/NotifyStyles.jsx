import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
    padding: 20,
    height:"80%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginLeft:100,
  },
  closeText: {
    fontSize: 20,
    color: "black",
    fontWeight:"bold",
  },
  man: {
    alignSelf: "center",
    marginVertical: 10,
  },
  noNotificationText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000",
  },
  subText: {
    textAlign: "center",
    fontSize: 13,
    color: "gray",
    marginTop: 5,
  },
  touchWrapper: {
    alignItems: "center",
  },
  date: {
    fontSize: 14,
    color: "#4A5B9B",
    marginBottom: 10,
  },
  notificationCard: {
    borderTopWidth: 1,
    borderColor: "#f0f0f0",
    paddingVertical: 10,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  type: {
    color: "#4A5B9B",
    // fontWeight: "bold",
    fontSize: 15,
  },
  cross: {
    color: "#4A5B9B",
    fontSize: 16,
    fontWeight: "bold",
    width: 24,
    height: 24,
    lineHeight: 24,
    textAlign: "center",
    backgroundColor: "#2A36634D",
    borderRadius: 99,
    overflow: "hidden",
    marginBottom:20,
  },
  
  description: {
    fontSize: 14,
    color: "#000",
    marginBottom: 4,
  },
  statusResolved: {
    flexDirection:"row",
    alignSelf: "flex-start",
    backgroundColor: "#f1f4ff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    color: "#6A5ACD",
    fontSize: 12,
    fontWeight: "500",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  description: {
    fontSize: 14,
    color: "#000",
    flex: 1,
    marginRight: 100, // gives breathing room before status
  },
  
  statusApproved: {
    alignSelf: "flex-start",
    backgroundColor: "#f1f4ff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    color: "#6A5ACD",
    fontSize: 12,
    fontWeight: "500",
  },
});

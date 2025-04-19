import { StyleSheet } from 'react-native';

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        // backgroundColor: '#333',
      },
      text: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
      },
      circle: {
        width: 40,
        height: 40,
        backgroundColor: '#2A366333',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      },
      badge: {
        position: 'absolute',
        top: 3,
        right: 5,
        marginRight: -6,
        width: 8,
    
        height: 8,
        backgroundColor: 'red',
        borderRadius: 4,
      },
      chatTitle: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      initial: {
        fontSize: 20,
        color: 'black',
      },
      chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 12,
        marginVertical: 4,
        borderRadius: 8,
        marginHorizontal: 10,
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
      },
      chatDetails: {
        flex: 1,
        marginLeft: 12,
      },
      chatName: {
        fontSize: 17,
        // fontWeight: 'bold',
        color: 'black',
      },
      chatMessage: {
        fontSize: 14,
        color: '#666',
      },
      chatMeta: {
        alignItems: 'flex-end',
      },
      chatTime: {
        fontSize: 12,
        color: '#666',
      },
      unreadBadge: {
        backgroundColor: '#86CD824D',
        borderRadius: 10,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
      },
      unreadText: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
      },profileContainer: {
        width: 40,  // Default profile size
        height: 40,
        borderRadius: 20, 
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      wardenBackground: {
        width: 55,  
        height: 55,
        borderRadius: 27.5,
        backgroundColor: '#E8F5E9', // Light green shade
      },
      
      wardenImage: {
        width: 50,  
        height: 50,
        borderRadius: 25,
      },
      
      groupBackground: {
        width: 52,  
        height: 52,
        borderRadius: 25,
        backgroundColor: '#E0E0E0', // Light gray background for group icon
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      groupIcon: {
        width: 30,  // Adjusted for better fit
        height: 30,
      },
      
      chat:{
fontWeight:'bold',
marginRight:-50,
      },
});
export default styles;
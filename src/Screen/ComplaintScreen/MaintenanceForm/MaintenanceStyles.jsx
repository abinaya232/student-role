import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
    
  // },
  
  scrollContainer: {
    paddingBottom: 100, // leave space for bottom nav
  },
  
  header: {
    backgroundColor: '#474e94',
    height: 56,
    justifyContent: 'center', // centers children vertically
    paddingHorizontal: 12,
  },
  
  backArrowContainer: {
    position: 'absolute',
    left: 12,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  backArrowImage: {
    width: 12,
    height: 12,
    tintColor: '#fff',
  },
  
  headerTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
               // slight nudge to align with icon
  
  
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    marginTop:12,
  },
  activeTab: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2A3663',
    borderBottomWidth: 2,
    borderBottomColor: '#2A3663',
    paddingHorizontal: 16,
    paddingBottom: 4,
    marginRight: 20,
  },
  inactiveTab: {
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 16,
    paddingBottom: 4,
  },
  section: {
    paddingHorizontal: 16, // tighter, consistent margin like header
    marginTop: 10,
  },
  
  sectionLabel: {
    fontSize: 15,
    color: '#222',
    marginBottom: 22,
    fontWeight: '500',
  },
  
  required: {
    color: 'red',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    columnGap: 10,   // space between columns
    rowGap: 18,      // vertical spacing between rows
    paddingLeft: 24,
  },
  
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',         // ensures two columns
  },
  
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#253C78',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  
  selectedDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#253C78',
  },
  
  radioText: {
    fontSize: 15,
    color: '#253C78',
    fontWeight: '500',
  },

});
import { StyleSheet, View, Button } from "react-native"
import * as Notifications from "expo-notifications"


Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    }
  },
})

export default function App() {


  const triggerLocalNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello World!",
        body: "Hi Hamza",
      },
      trigger: { seconds: 5 },
    })
  }

  return (
    <View style={styles.container}>
      <Button
        title="Trigger Local Notification"
        onPress={triggerLocalNotificationHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})





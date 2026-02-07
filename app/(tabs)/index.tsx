import React, { useEffect, useState } from "react";
import { Button, NativeModules, ScrollView, StyleSheet, Text, View } from "react-native";

const { DeviceControl } = NativeModules;

export default function App() {
  const [overlay, setOverlay] = useState(false);
  const [battery, setBattery] = useState(false);
  const [admin, setAdmin] = useState(false);

  const refreshStatus = async () => {
    const ov = await DeviceControl.isOverlayEnabled();
    const bat = await DeviceControl.isIgnoringBatteryOptimizations();
    const ad = await DeviceControl.isDeviceAdminEnabled();

    setOverlay(ov);
    setBattery(bat);
    setAdmin(ad);
  };

  useEffect(() => {
    refreshStatus();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📱 EMI LOCK DEMO</Text>

      <Text style={styles.status}>Overlay Permission: {overlay ? "✅ YES" : "❌ NO"}</Text>
      <Text style={styles.status}>Battery Optimization Ignored: {battery ? "✅ YES" : "❌ NO"}</Text>
      <Text style={styles.status}>Device Admin Enabled: {admin ? "✅ YES" : "❌ NO"}</Text>

      <View style={styles.gap} />

      <Button title="Refresh Status" onPress={refreshStatus} />

      <View style={styles.gap} />

      <Button title="Enable Overlay Permission" onPress={() => DeviceControl.openOverlaySettings()} />
      <View style={styles.gap} />

      <Button title="Ignore Battery Optimization" onPress={() => DeviceControl.openBatteryOptimizationSettings()} />
      <View style={styles.gap} />

      <Button title="Enable Device Admin" onPress={() => DeviceControl.requestDeviceAdmin()} />
      <View style={styles.gap} />

      <Button title="Open Accessibility Settings" onPress={() => DeviceControl.openAccessibilitySettings()} />
      <View style={styles.gap} />

      <Button title="Start Foreground Service" onPress={() => DeviceControl.startForegroundService()} />
      <View style={styles.gap} />

      <Button title="Stop Foreground Service" onPress={() => DeviceControl.stopForegroundService()} />
      <View style={styles.gap} />

      <Button title="Open Lock Screen (Demo)" onPress={() => DeviceControl.openLockScreen()} />
      <View style={styles.gap} />

      <Button title="Lock Now (Device Admin)" onPress={() => DeviceControl.lockNow()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  status: { fontSize: 18, marginBottom: 10 },
  gap: { height: 12 },
});

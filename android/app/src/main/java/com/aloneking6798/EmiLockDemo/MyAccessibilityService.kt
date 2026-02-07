package com.aloneking6798.EmiLockDemo

import android.accessibilityservice.AccessibilityService
import android.view.accessibility.AccessibilityEvent
import android.util.Log

class MyAccessibilityService : AccessibilityService() {

    override fun onAccessibilityEvent(event: AccessibilityEvent?) {
        if (event?.packageName != null) {
            Log.d("ACCESSIBILITY", "Opened: ${event.packageName}")
        }
    }

    override fun onInterrupt() {}
}

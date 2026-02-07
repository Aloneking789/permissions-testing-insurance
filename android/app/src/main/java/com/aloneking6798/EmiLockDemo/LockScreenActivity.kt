package com.aloneking6798.EmiLockDemo

import android.os.Bundle
import android.view.View
import android.view.WindowManager
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.constraintlayout.widget.ConstraintLayout

class LockScreenActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        window.setFlags(
            WindowManager.LayoutParams.FLAG_FULLSCREEN,
            WindowManager.LayoutParams.FLAG_FULLSCREEN
        )

        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        val textView = TextView(this)
        textView.text = "🔒 DEVICE LOCKED (DEMO)\n\nEMI Pending ₹2500\n\nPay to unlock"
        textView.textSize = 22f
        textView.setPadding(50, 200, 50, 50)

        val button = Button(this)
        button.text = "UNLOCK (DEMO)"
        button.setOnClickListener {
            finish()
        }

        val layout = ConstraintLayout(this)
        layout.addView(textView)
        layout.addView(button)

        setContentView(layout)

        // Disable system UI
        window.decorView.systemUiVisibility =
            View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY or
            View.SYSTEM_UI_FLAG_HIDE_NAVIGATION or
            View.SYSTEM_UI_FLAG_FULLSCREEN
    }

    override fun onBackPressed() {
        // disable back button
    }
}

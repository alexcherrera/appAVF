package com.fullsail.college_organizer;

import android.app.Activity;
import android.os.Bundle;
import org.apache.cordova.*;

public class Organizer extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///../assets/www/index.html");
    }
}

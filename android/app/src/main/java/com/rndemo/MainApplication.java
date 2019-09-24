package com.rndemo;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.horcrux.svg.SvgPackage;
import com.beefe.picker.PickerViewPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.psykar.cookiemanager.CookieManagerPackage;
import com.microsoft.codepush.react.CodePush;
import com.wix.autogrowtextinput.AutoGrowTextInputPackage;
import com.remobile.toast.RCTToastPackage;
import com.phoobobo.rnwebviewplus.ReactWebViewPlusPackage;
import com.peppas.ui.UIReactPackage;
import com.peppas.toolkit.RNToolkitPackage;
import com.peppas.imagepreview.RNImagePreviewPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected String getJSBundleFile(){
      return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new SvgPackage(),
            new PickerViewPackage(),
            new LinearGradientPackage(),
            new PickerPackage(),
            new RNDeviceInfo(),
            new CookieManagerPackage(),
            new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), getApplicationContext(), BuildConfig.DEBUG),
            new AutoGrowTextInputPackage(),
            new RCTToastPackage(),
            new ReactWebViewPlusPackage(),
            new UIReactPackage(),
            new RNToolkitPackage(),
            new RNImagePreviewPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}

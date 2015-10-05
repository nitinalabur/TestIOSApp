#import "SnapshotHelper.js"

// var target = UIATarget.localTarget();
// var app = target.frontMostApp();
// var window = app.mainWindow();

var target = UIATarget.localTarget();
captureLocalizedScreenshot("0-LandingScreen")

target.delay(3)

// target.scheme = TestIOSApp
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);
target.frontMostApp().mainWindow().buttons()["Button 1"].tap();
captureLocalizedScreenshot('button1-tapped')
target.frontMostApp().mainWindow().buttons()["Button 2"].tap();
captureLocalizedScreenshot('button2-tapped')
target.frontMostApp().mainWindow().buttons()["Button 3"].tap();
captureLocalizedScreenshot('button3-tapped')
target.frontMostApp().mainWindow().buttons()["Button 4"].tap();
captureLocalizedScreenshot('button4-tapped')
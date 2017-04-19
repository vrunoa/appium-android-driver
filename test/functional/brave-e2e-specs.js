import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import AndroidDriver from '../..';

chai.should();
chai.use(chaiAsPromised);

const capabilities = {
  "browserName": "brave",
  "avd": "Nexus_5X_API_23",
  "platformName": "Android",
  "platformVersion": "6.0",
  "deviceName": "Android Emulator",
  "chromedriverExecutable": "/Users/vruno/Sauce/appium-android-driver/Chromedriver"
};

describe('createSession', function () {
  let driver;
  before(() => {
    driver = new AndroidDriver();
  });
  afterEach(async () => {
    await driver.deleteSession();
  });
  it('should start brave browser', async () => {
    await driver.createSession(capabilities);
    await driver.getFocusedPackageAndActivity();    
  });
});

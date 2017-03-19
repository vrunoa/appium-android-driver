import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import AndroidDriver from '../..';
import path from 'path';
import { sleep } from 'asyncbox';

chai.should();
chai.use(chaiAsPromised);

const AVD_ANDROID_24_WITHOUT_GMS = "Nexus_5_API_24";
const capabilities = {
  "browserName": "chromium-webview",
  "avd": AVD_ANDROID_24_WITHOUT_GMS,
  "platformName": "Android",
  "platformVersion": "7.0",
  "deviceName": "Android Emulator",
  "chromedriverExecutable": path.join(process.cwd(), "chromedriver")
};

describe('createSession', function () {
  let driver;
  before(() => {
    driver = new AndroidDriver();
  });
  afterEach(async () => {
    await driver.deleteSession();
  });
  it('should start android session using webview browser tester on android 7', async () => {
    await driver.createSession(capabilities);
    await driver.setUrl("http://google.com");
    await sleep(1500);
    let contexts = await driver.getContexts();
    contexts.indexOf("CHROMIUM").should.not.equal(-1);
    await driver.setContext("CHROMIUM");
    let el = await driver.findElOrEls("id", "lst-ib", false);
    el.should.not.equal(null);
    await driver.click(el.ELEMENT);
    await sleep(500);
    await driver.setElementValue("android", el.ELEMENT);
    await sleep(1500);
    el = await driver.findElOrEls("id", "tsbb", false);
    el.should.not.equal(null);
    await driver.click(el.ELEMENT);
    await sleep(5000);
  });
});

# pluotsorbet-kaios-template
为KaiOS准备的 PluotSorbet Java ME 模拟器模板

## 如何测试你的 JAR

### Step 1

将需要测试的 JAR 和 JAD 文件放入 `application/jar/` 文件夹中。

**注意：对于J2ME平台应用，JAR和JAD文件必须同时存在。**

**如果没有 JAD 文件，可以用 7-Zip 等压缩软件打开 JAR，找到 `META-INF/MANIFEST.MF`，解压后重命名为 `<JAR file name>.jad`**

**然后用你喜欢的代码编辑器进行修改，添加以下两行，请根据实际情况修改：**

```
MIDlet-Jar-URL: <JAR file name>.jar
MIDlet-Jar-Size: <JAR file size (Unit is bytes)>
```

**或者使用第三方工具来生成（例如ezJar）**

### Step 2

找到 `application/config/runtests.js`，并修改对应的值：

```js
config.jars = "jar/<JAR file name>.jar"; //你的 JAR 文件名
config.jad = "jar/<JAD file name>.jad";  //你的 JAD 文件名，一般和 JAR 文件名相同
config.midletClassName = "com.example";  //JAR 的 MIDlet 类名，可以在 JAD 文件的 "MIDlet-1" 中找到，可以参考以下截图。
```

MIDlet 类名: ![](midlet.png)

### Step 3

使用 WebIDE 打开 `application` 文件夹，然后运行它！

## 已知问题

1. 不支持声音，是目前的已知bug，后续尽力修复

2. ~~偶然出现存档无法保存的问题，为已知bug~~

3. ~~可能无法退出游戏，退出的时候会显示黑屏，需要按挂机键退出，此问题已经修复，部分软件可能未及时修改。~~

4. 部分游戏方向键不能用要数字按键

5. 由于是js模拟的j2me虚拟机，运行速度可能偏慢，此项后续可能通过aot技术进行优化

6. 如果运行时提示错误，需要按挂机键重启软件，此为已知问题，后续可能会修复

7. ~~使用*和#键进行截图时，可能会触发重新加载游戏而导致闪屏，此为调试时引入的功能，后续可能会修复~~

## License

LGPL-2.1

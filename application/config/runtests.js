config.jars = "jar/<JAR file name>.jar";
config.jad = "jar/<JAD file name>.jad";
config.midletClassName = "com.example"; 
MIDlet.shouldStartBackgroundService = function() {
  return fs.exists("/startBackgroundService");
};
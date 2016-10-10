# ventureout-mobile
A simplified mobile version of Venture Out

http://docs.nativescript.org/angular/start/quick-setup <-- Follow this guide to set up your environment


Then, run this command in your repo directory to start the simulator:
tns livesync ios --emulator --watch


Known error with dropdown, must make a change in nativescript-drop-down module. Remove parentheses on line 32 after mainScreen. Github Issue https://github.com/PeterStaev/NativeScript-Drop-Down/issues/34

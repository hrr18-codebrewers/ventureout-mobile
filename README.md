# ventureout-mobile
A simplified mobile version of Venture Out. Find events based on your interests, budget, availability, and location. The mobile app currently only connects to the Eventbrite API, but there are plans to connect to more API's to allow users to find all applicable events.

Web Version: https://github.com/hrr18-codebrewers/ventureout


http://docs.nativescript.org/angular/start/quick-setup <-- Follow this guide to set up your environment


Then, run this command in your repo directory to start the simulator:
tns livesync ios --emulator --watch


Known error with dropdown, must make a change in nativescript-drop-down module. Remove parentheses on line 32 after mainScreen in drop-down.ios.js file. Github Issue https://github.com/PeterStaev/NativeScript-Drop-Down/issues/34

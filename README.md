# Telegram Logger Bot
The bot logs all data given to it into a Google Spreadsheet.

## Bot in action

![Logger Bot](https://github.com/skgnotes/Telegram-Logger-Bot/blob/master/screengrabs/botinaction.png?raw=true)

## Steps
1. Create Telegram bot using botfather.

![](https://github.com/skgnotes/Telegram-Logger-Bot/blob/master/screengrabs/botfather.png?raw=true)

2. Set up a Spreadsheet for logging data.
3. Set up Google Apps Script. Copy code in [loggerbot.gs](https://github.com/skgnotes/Telegram-Logger-Bot/blob/master/loggerbot.gs)
4. Deploy as web app. Set access to “Anyone, even anonymous”

![](https://github.com/skgnotes/Telegram-Logger-Bot/blob/master/screengrabs/deploy.png?raw=true)

![](https://github.com/skgnotes/Telegram-Logger-Bot/blob/master/screengrabs/settingaccess.png?raw=true)

5. Initialise bot token, spreadsheet id & web app url values in code

![Initialize project variables](https://github.com/skgnotes/Telegram-Logger-Bot/blob/master/screengrabs/initialisevariables.png?raw=true)

6. Set web hook by running the setWebhook() function.

![Initialize project variables](https://github.com/skgnotes/Telegram-Logger-Bot/blob/master/screengrabs/setwebhook.png?raw=true)

## Notes

* Each time you make changes to the code, make sure your deploy as web app again (and also have the version number changed when you do so).
* If you change the name of your sheet, make sure to have it also reflected in your code. Sheet1 is the default value of sheet in a new spreadsheet.

#### Improvements that can be made to code

* Create spreadsheet through code itself.
* Have key values set as project properties & masked.



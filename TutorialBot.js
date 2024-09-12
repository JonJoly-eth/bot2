"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
const { Bot } = require('grammy');
const express = require('express');
const app = express();

// Ваша обработка вебхука
app.post('/webhook', (req, res) => {
    bot.handleUpdate(req.body);
    res.sendStatus(200);
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
    console.log('Bot is listening on port 3000');
});
exports.__esModule = true;
var grammy_1 = require("grammy");
//Store bot screaming status
var screaming = false;
//Create a new bot
var bot = new grammy_1.Bot('6961920270:AAHP-89WqBiNT9QXKepSW2as5KnA3L6Oldg');
//This function handles the /scream command
bot.command("scream", function () {
    screaming = true;
});
//This function handles /whisper command
bot.command("whisper", function () {
    screaming = false;
});
//Pre-assign menu text
var firstMenu = "<b>Menu 1</b>\n\nA beautiful menu with a shiny inline button.";
var secondMenu = "<b>Menu 2</b>\n\nA better menu with even more shiny inline buttons.";
//Pre-assign button text
var nextButton = "Next";
var backButton = "Back";
var tutorialButton = "Tutorial";
//Build keyboards
var firstMenuMarkup = new grammy_1.InlineKeyboard().text(nextButton, nextButton);
var secondMenuMarkup = new grammy_1.InlineKeyboard().text(backButton, backButton).text(tutorialButton, "https://core.telegram.org/bots/tutorial");
//This handler sends a menu with the inline buttons we pre-assigned above
bot.command("menu", function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ctx.reply(firstMenu, {
                    parse_mode: "HTML",
                    reply_markup: firstMenuMarkup
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//This handler processes back button on the menu
bot.callbackQuery(backButton, function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            //Update message content with corresponding menu section
            return [4 /*yield*/, ctx.editMessageText(firstMenu, {
                    reply_markup: firstMenuMarkup,
                    parse_mode: "HTML"
                })];
            case 1:
                //Update message content with corresponding menu section
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//This handler processes next button on the menu
bot.callbackQuery(nextButton, function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            //Update message content with corresponding menu section
            return [4 /*yield*/, ctx.editMessageText(secondMenu, {
                    reply_markup: secondMenuMarkup,
                    parse_mode: "HTML"
                })];
            case 1:
                //Update message content with corresponding menu section
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//This function would be added to the dispatcher as a handler for messages coming from the Bot API
bot.on("message", function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //Print to console
                console.log("".concat(ctx.from.first_name, " wrote ").concat("text" in ctx.message ? ctx.message.text : ""));
                if (!(screaming && ctx.message.text)) return [3 /*break*/, 2];
                //Scream the message
                return [4 /*yield*/, ctx.reply(ctx.message.text.toUpperCase(), {
                        entities: ctx.message.entities
                    })];
            case 1:
                //Scream the message
                _a.sent();
                return [3 /*break*/, 4];
            case 2: 
            //This is equivalent to forwarding, without the sender's name
            return [4 /*yield*/, ctx.copyMessage(ctx.message.chat.id)];
            case 3:
                //This is equivalent to forwarding, without the sender's name
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
//Start the Bot
bot.start();

// https://www.redditstatic.com/desktop2x/Chat~Governance~Reddit.a208f63048e1abef93df.js
// Retrieved at 1/27/2020, 3:20:18 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Chat~Governance~Reddit"], {
		"./assets/fonts/IBMPlexSans/font.less": function(e, t, i) {},
		"./assets/fonts/NotoSans/font.less": function(e, t, i) {},
		"./src/app/strings/index.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.match.js"), i("./node_modules/core-js/modules/es6.regexp.split.js"), i("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = i("./node_modules/lodash/get.js"),
				s = i.n(n),
				r = (i("./node_modules/react/index.js"), i("./src/lib/constants/index.ts")),
				o = i("./src/lib/logs/console.ts"),
				d = i("./src/lib/stringInterpolate/index.ts"),
				l = i("./src/app/strings/sources/error.js"),
				a = {
					errors: {
						unknowngild: {
							en: "Gilding unknown thing"
						}
					},
					awards: {
						en: "Awards"
					},
					awardBadge: {
						silverTooltipMessage: {
							en: "This %{postOrComment} has received the Silver Award %{count} time(s)"
						},
						goldTooltipMessage: {
							en: "This %{postOrComment} has received the Gold Award %{count} time(s)"
						},
						platinumTooltipMessage: {
							en: "This %{postOrComment} has received the Platinum Award %{count} time(s)"
						}
					},
					checkoutForm: {
						cardExpiryPlaceholder: {
							en: "MM/YY"
						},
						cardNumberPlaceholder: {
							en: "CARD NUMBER"
						},
						cardSecurityCodePlaceholder: {
							en: "CCV"
						},
						nameOnCardPlaceholder: {
							en: "NAME ON CARD"
						},
						postalCodePlaceholder: {
							en: "ZIP CODE"
						},
						yourCardsNameFieldIsIncomplete: {
							en: "Your card’s name field is incomplete"
						},
						infoSuccessfullyUpdated: {
							en: "You successfully updated your payment information!"
						},
						rememberThisCard: {
							en: "Remember this card"
						},
						cardEndingIn: {
							en: "Card ending in %{last4}"
						},
						cardExpiry: {
							en: "Expires %{month}/%{year}"
						}
					},
					giveAward: {
						en: "Give Award"
					},
					coinBalance: {
						coinBalance: {
							en: "Coin balance:: :coin:%{coinBalance}"
						},
						whatAreCoins: {
							en: "What are Coins?"
						}
					},
					coins: {
						en: "coins"
					},
					coinsHero: {
						description: {
							en: "Coins are a virtual good you can use to award exemplary posts or comments. Support Reddit and encourage your favorite contributors to keep making Reddit better."
						},
						CTA: {
							en: "Get coins"
						}
					},
					coinsAwards: {
						title: {
							en: "Here’s what you can buy with Coins"
						},
						description: {
							en: "Spend your Coins on these Awards reserved exclusively for the finest Reddit contributors. Awarding a post or comment highlights it for all to see, and some Awards also grant the honoree special bonuses."
						},
						descriptionMobile: {
							en: "Coins are used to award exemplary posts or comments and help support Reddit."
						},
						silverAward: {
							title: {
								en: "Silver Award"
							},
							description: {
								en: "Shows a Silver Award on the post or comment and ... that’s it. You’ll need :coin_price: Coins."
							}
						},
						goldAward: {
							title: {
								en: "Gold Award"
							},
							description: {
								en: "Gives the recipient a week of Reddit Premium (including :coin_benefit: Coins) and shows a Gold Award on the post or comment. You’ll need :coin_price: Coins."
							}
						},
						platinumAward: {
							title: {
								en: "Platinum Award"
							},
							description: {
								en: "Gives the recipient a month of Reddit Premium, which includes :coin_benefit: Coins for that month, and shows a Platinum Award on the post or comment. You’ll need :coin_price: Coins."
							}
						}
					},
					coinsPurchase: {
						findRedditUsefulTitle: {
							en: "Find Reddit useful? Award great posts."
						},
						useCoinsToGift: {
							en: "Use Coins to gift Redditors who contribute the best content."
						},
						recognizeRedditors: {
							en: "Recognize Redditors who make Reddit the front page of the internet"
						},
						finest: {
							en: "Finest option"
						},
						bonus: {
							en: "bonus"
						},
						item1line1: {
							en: "Give one Platinum Award, "
						},
						item1line2: {
							en: "or 3 Gold Awards, "
						},
						item1line3: {
							en: "or 18 Silver Awards."
						},
						item2line1: {
							en: "Give one Gold Award "
						},
						item2line2: {
							en: "or 5 Silver Awards."
						},
						item3line1: {
							en: "Give 2 Gold Awards, "
						},
						item3line2: {
							en: "or 11 Silver Awards."
						},
						item4line1: {
							en: "Give 4 Platinum Awards, "
						},
						item4line2: {
							en: "or 14 Gold Awards, "
						},
						item4line3: {
							en: "or 72 Silver Awards."
						},
						item5line1: {
							en: "Give 22 Platinum Awards, "
						},
						item5line2: {
							en: "or 80 Gold Awards, "
						},
						item5line3: {
							en: "or 400 Silver Awards."
						},
						premiumDescription: {
							en: "Get 700 Coins every month with Reddit Premium and browse ads-free"
						}
					},
					coinsFAQ: {
						title: {
							en: "Coins FAQ"
						},
						item1: {
							question: {
								en: "What are Coins?"
							},
							answer: {
								en: ["Coins are our virtual good, and you can use them to award exceptional", "posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool", "new ways to spend your Coins in the future."].join(" ")
							}
						},
						item2: {
							question: {
								en: 'What is "Give Award"?'
							},
							answer: {
								en: 'Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.'
							}
						},
						item3: {
							question: {
								en: "What are these new Award types?"
							},
							answer: {
								en: ["There are now three ways to Give Awards. A Silver Award requires 100 Coins, ", "which simply marks a post or comment with a Silver Award icon. A classic Gold Award ", "requires 500 Coins and gives the recipient a week of Reddit Premium membership ", "and 100 Coins. Finally, the ultra rare Platinum Award costs 1800 Coins, ", "and gives the recipient with one month of Reddit Premium membership, which includes 700 ", "Coins for that month."].join(" ")
							}
						},
						item4: {
							question: {
								en: "I bought Coins, how can I tell how many I have?"
							},
							answer: {
								en: "If you buy Coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username."
							}
						},
						item5: {
							question: {
								en: "Can I transfer Coins between Reddit accounts?"
							},
							answer: {
								en: "You cannot transfer your Reddit Coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 Coins."
							}
						},
						item6: {
							question: {
								en: "Can I get Coins for free?"
							},
							answer: {
								en: "We may give away Coins on special occasions. Stay tuned!"
							}
						},
						item7: {
							question: {
								en: "What happened to Creddits? Do those still exist?"
							},
							answer: {
								en: "Yes, Creddits are simply called \"Coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 Coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community."
							}
						},
						item8: {
							question: {
								en: "I thought Gold was the name of Reddit's subscription membership?"
							},
							answer: {
								en: 'You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "Coins".'
							}
						}
					},
					comingSoon: {
						en: "Coming Soon"
					},
					gildModal: {
						addMessage: {
							en: "Add a message"
						},
						addOptionalMessage: {
							en: "Add a message (optional)"
						},
						award: {
							en: "award"
						},
						awardNameAward: {
							en: "%{awardName} Award"
						},
						awardThing: {
							en: "Award %{postOrComment}"
						},
						redditAwards: {
							en: "Reddit Awards"
						},
						subredditAwards: {
							en: "r/%{subredditName} Awards"
						},
						modAwards: {
							en: "r/%{subredditName} Moderator Awards"
						},
						awardSelector: {
							default: {
								awardMessage: {
									en: "Success! You have given this %{postOrComment} a %{awardName} Award"
								}
							},
							silver: {
								title: {
									en: "Silver"
								},
								awardMessage: {
									en: "Success! You have given this %{postOrComment} a Silver Award"
								}
							},
							gold: {
								title: {
									en: "Gold"
								},
								awardMessage: {
									en: "Success! You have given this %{postOrComment} a Gold Award"
								}
							},
							platinum: {
								title: {
									en: "Platinum"
								},
								awardMessage: {
									en: "Success! You have given this %{postOrComment} a Platinum Award"
								}
							}
						},
						getCoinsAndAwardThing: {
							en: "Next"
						},
						giveAwardToThisPostOrComment: {
							en: "Give an Award to this %{postOrComment}!"
						},
						makeMyGiftAnonymous: {
							en: "Make my gift anonymous"
						},
						givenByModerator: {
							en: "Given by a Moderator"
						},
						notAllowedAwardOwnSubmissions: {
							en: "You are not allowed to award your own submissions "
						},
						optionallyIncludeMessage: {
							en: "Optionally include a message..."
						},
						spendCoin: {
							en: "Spend :coin:%{cost}"
						},
						spendCoinsToHighlightPostOrComment: {
							en: "Spend Coins to highlight this %{postOrComment} for all to see! :learnMoreLink:"
						},
						spendGoldCoinsLearnMoreLink: {
							en: "Learn more."
						},
						howDoAwardsWork: {
							en: "How do Awards work?"
						},
						typeHere: {
							en: "Type here..."
						}
					},
					givePremiumToUserModal: {
						givePremium: {
							en: "Give Premium"
						},
						givePremiumToUser: {
							en: "Use coins to give Premium to %{user}:"
						},
						invalidPremiumPackage: {
							en: "That Premium gift amount is invalid."
						},
						monthDetail: {
							en: "%{months} month (%{coins} Coins)"
						},
						monthsDetail: {
							en: "%{months} months (%{coins} Coins)"
						},
						success: {
							en: "Success! You’ve given Premium to %{user}!"
						}
					},
					postOrComment: {
						comment: {
							en: "comment"
						},
						post: {
							en: "post"
						}
					},
					premium: {
						en: "Premium"
					},
					premiumPerks: {
						title: {
							en: "Here’s what you get with Reddit Premium"
						},
						adsfree: {
							title: {
								en: "Experience Reddit ads-free"
							},
							description: {
								en: "Get Reddit Premium for yourself to enjoy Reddit ads-free and support the community that brings you the hottest news, entertainment, and cat photos every day, all day. Your contribution will help us remain truly independent."
							}
						},
						coins: {
							title: {
								en: "Monthly Coins"
							},
							description: {
								en: "As a thank you to our Premium members, you’ll get a special one-time bonus of :coin:1,000 Coins just for joining, and thereafter earn :coin:700 every month. Use your Coins to award extraordinary contributions to Reddit."
							}
						},
						lounge: {
							title: {
								en: "Access the members-only Lounge"
							},
							description: {
								en: "As a Premium member, you’ll gain access to the exclusive r/lounge community. This longstanding Reddit society is a gathering of people from all walks of life with one key characteristic in common – Reddit. Some say it also holds many secrets…"
							}
						}
					},
					premiumHero: {
						description: {
							en: "Reddit Premium gives you an ad-free experience, special benefits, and directly supports Reddit. The more Reddit is user-supported, the freer we are to make Reddit the best it can be."
						},
						cta: {
							en: "Get Reddit Premium"
						},
						ctaManage: {
							en: "Manage Premium"
						},
						expiration: {
							en: "Your Premium membership is valid until %{date}. Manage it :here:."
						},
						here: {
							en: "here"
						}
					},
					premiumFAQ: {
						title: {
							en: "Reddit Premium FAQ"
						},
						here: {
							en: "here"
						},
						item1: {
							question: {
								en: "What is a Reddit Premium Membership?"
							},
							answer: {
								en: "Reddit Premium is our subscription membership program, and it directly supports Reddit and the communities that it hosts. It offers an entirely ads-free Reddit experience as well as other benefits, including monthly Coins and access to the exclusive r/lounge community. "
							}
						},
						item2: {
							question: {
								en: "Why change the name to Premium? What happened to calling it Gold?"
							},
							answer: {
								en: "The membership has a new name for a good reason. Many people confused the subscription Reddit Gold membership with a virtual good or coin. To make things easier to understand, we’ve renamed the membership to “Reddit Premium”, while the virtual good is called “Coins”. We have kept your favorite features and added more."
							}
						},
						item3: {
							question: {
								en: "What if I was subscribed to the old Gold Membership program?"
							},
							answer: {
								en: "Fine people everywhere with a Gold Membership are now members of Reddit Premium. It still offers the same great ads-free browsing experience and access to r/lounge, but now you will also receive 700 Coins monthly so you can award exceptional contributions."
							}
						},
						item4: {
							question: {
								en: "The Premium membership gives me Coins, what are those for?"
							},
							answer: {
								en: ["Coins are a virtual good, and you can use them to award exceptional posts or", "comments with a Silver, Gold, or Platinum Award. This is a way to show appreciation", "for an exceptional contribution to Reddit, and can also grant the recipient special", "bonus benefits. You can award someone by clicking on “Give Award” below a post or comment."].join(" ")
							}
						},
						item5: {
							question: {
								en: "Do I have to subscribe to Reddit Premium to get Coins?"
							},
							answer: {
								en: "Monthly Coins are a great benefit for being a Premium member, but if you wish you can also buy individual quantities of Coins :here:. Additionally, you will receive Coins if you are awarded Gold or Platinum."
							}
						}
					},
					premiumPurchase: {
						adsFreeExperience: {
							en: "Ads-Free Experience"
						},
						awardGreatContent: {
							en: "Award great content every month"
						},
						goldEveryMonth: {
							en: "Gold every month to award great content"
						},
						stamp: {
							en: ":coin:%{count} Coin one-time bonus"
						},
						item1: {
							en: "Experience Reddit ads-free"
						},
						item2: {
							en: "Help support the Reddit community"
						},
						item3: {
							en: ":coin:700 Coins monthly"
						},
						item4: {
							en: "Access to the exclusive r/lounge"
						},
						cta: {
							en: "$%{price} / Month"
						},
						learnMore: {
							en: "Learn more"
						},
						ctaManage: {
							en: "Manage Premium"
						},
						renewal: {
							en: "Subscription automatically renews monthly"
						},
						giftcode: {
							en: "Redeem a gift code"
						},
						giftCodePlaceholder: {
							en: "Gift Code"
						},
						redeemGiftCode: {
							en: "Redeem"
						},
						redeemGiftCodeSuccess: {
							en: "You have redeemed your gift code successfully"
						}
					},
					purchaseCoinsModal: {
						giveAward: {
							en: "Give the %{awardName} Award"
						},
						byPurchasingCoinsYouAgree: {
							en: "By purchasing Coins, you agree to the :agreement:."
						},
						buyCoins: {
							en: "Buy %{amount} Coins!"
						},
						completePurchaseButton: {
							en: "Complete purchase"
						},
						continueToPaypalButton: {
							en: "Continue to paypal"
						},
						minimumCoinsPurchaseIs: {
							en: "The minimum Coins purchase is %{coins} Coins."
						},
						paymentDoneButton: {
							en: "Done"
						},
						redditUserAgreement: {
							en: "Reddit User Agreement"
						},
						totalAmount: {
							en: "Total: $%{amount}"
						},
						thanksForPurchasingCoins: {
							en: "Thanks for purchasing Coins, %{userName}!"
						},
						thanksForPurchasingCoinsAndGild: {
							en: "Thanks for purchasing an Award, %{userName}!"
						},
						youArePurchasingCoinsForYourself: {
							en: "You're purchasing Coins for yourself, %{userName}!"
						},
						youArePurchasingCoinsForGild: {
							en: "%{coinCount} Coins will automatically be spent on this %{awardName} Award."
						},
						yourPurchaseIsPending: {
							en: "The transaction is processing and we will let you know when it's done."
						},
						yourTransactionCompletedAndDetailsEmailed: {
							en: "Your transaction has been completed and details have been emailed to you. Navigate to the post or comment and refresh to see the Award."
						},
						youWillHaveCoinsRemaining: {
							en: "You’ll have %{remainingCoins} Coins remaining."
						}
					},
					purchasePremiumModal: {
						byPurchasingRedditPremiumYouAgree: {
							en: "By purchasing Reddit Premium, you agree to the :agreement:."
						},
						buyRedditPremium: {
							en: "Buy Reddit Premium!"
						},
						completePurchaseButton: {
							en: "Complete purchase"
						},
						continueToPaypalButton: {
							en: "Continue to paypal"
						},
						findMoreAboutLoungeOnReddit: {
							en: "Find more about :loungeLink: on Reddit."
						},
						manageYourAdsFreeExperience: {
							en: "Manage your ads-free experience."
						},
						paymentDoneButton: {
							en: "Done"
						},
						redditUserAgreement: {
							en: "Reddit User Agreement"
						},
						thanksForPurchasingPremium: {
							en: "Thanks for purchasing Reddit Premium!"
						},
						totalMonthlyAmount: {
							en: "Total: $%{amount}/monthly"
						},
						youArePurchasingRedditPremiumForYourself: {
							en: "You're purchasing Reddit Premium for yourself, %{userName}!"
						},
						yourPurchaseIsPending: {
							en: "You will receive a message in your inbox once your purchase is confirmed."
						},
						yourRedditPremiumRenewsAutomatically: {
							en: "Your Reddit Premium membership automatically renews on a monthly basis. Cancel anytime. There are no refunds for partial months."
						}
					},
					coinsNum: {
						en: "%{num} Coins"
					},
					gildedTooltip1: {
						en: "%{count1} %{title1}"
					},
					gildedTooltip2: {
						en: "%{count1} %{title1} and %{count2} %{title2}"
					},
					gildedTooltip3: {
						en: "%{count1} %{title1}, %{count2} %{title2}, and %{count3} %{title3}"
					}
				},
				u = {
					all: {
						en: "View all"
					},
					backToProfile: {
						en: "Back to Profile"
					},
					birthday: {
						en: "Reddit Birthday"
					},
					by: {
						en: "by"
					},
					cakeDay: {
						en: "Cake day"
					},
					comments: {
						en: "Comments"
					},
					contributorSettings: {
						automoderator: {
							en: "Automoderator"
						},
						banned: {
							en: "Ban users"
						},
						customizeProfile: {
							en: "Customize Profile"
						},
						flairs: {
							en: "Flairs"
						},
						help: {
							en: "Help"
						},
						log: {
							en: "Moderation Log"
						},
						moderators: {
							en: "Moderators"
						},
						modmail: {
							en: "Mod Mail"
						},
						modqueue: {
							en: "Moderation Queue"
						},
						mute: {
							en: "Mute users"
						},
						privacy: {
							en: "Privacy"
						},
						reports: {
							en: "Reports"
						},
						rules: {
							en: "Rules"
						},
						settings: {
							en: "Settings"
						},
						snoovatar: {
							en: "View/Edit my Snoovatar"
						},
						spam: {
							en: "Spam"
						},
						stylesheet: {
							en: "CSS and Images"
						},
						traffic: {
							en: "Traffic"
						},
						userPrefs: {
							en: "User Preferences"
						}
					},
					chat: {
						en: "Chat"
					},
					communityTokens: {
						en: "Community Voting Power"
					},
					communityTokensSubreddit: {
						en: "%{count} %{tokenName}"
					},
					customizeProfile: {
						en: "Customize Profile"
					},
					disabledComments: {
						en: "Viewing this user's comments will be available shortly."
					},
					follow: {
						en: "Follow"
					},
					followDescription: {
						en: "Following this user will show all the posts they make to their profile on your front page."
					},
					followers: {
						en: "Followers"
					},
					followersInfo: {
						en: "Your followers will see posts you make to your profile"
					},
					following: {
						en: "Following"
					},
					forbidden: {
						title: {
							en: "You do not have permission to access this resource"
						},
						savedSubtitle: {
							en: "You can only look at your own saved posts and comments"
						}
					},
					gold: {
						en: "Reddit Premium Membership"
					},
					in: {
						en: "in"
					},
					imageUpload: {
						avatar: {
							en: "Avatar"
						},
						description: {
							en: "Upload your own profile avatar and cover images."
						},
						drag: {
							en: "Drag and drop"
						},
						cancel: {
							en: "Cancel"
						},
						formatDescription: {
							en: "Profile images must be .PNG or .JPG format."
						},
						header: {
							en: "Header"
						},
						label: {
							en: "Avatar and Header"
						},
						or: {
							en: "or"
						},
						upload: {
							en: "Upload"
						},
						uploading: {
							en: "Uploading"
						}
					},
					karma: {
						en: "Karma"
					},
					karmaCount: {
						en: "%{count} Karma"
					},
					less: {
						en: "View less"
					},
					moderatedSubreddits: {
						en: "Moderator of these communities"
					},
					moderatedSubredditsYours: {
						en: "You're a moderator of these communities"
					},
					more: {
						en: "View more"
					},
					nsfw: {
						en: "NSFW"
					},
					nsfwTitle: {
						en: "Adult content: Not Safe For Work"
					},
					onboardingModal: {
						customize: {
							en: "Customize your profile"
						},
						item1: {
							title: {
								en: "New profile design"
							},
							description: {
								en: "A new, cleaner way for other users to see your profile"
							}
						},
						item2: {
							title: {
								en: "Pinned posts"
							},
							description: {
								en: "Pin your favorite posts to the top of your page"
							}
						},
						item3: {
							title: {
								en: "Avatar and Banner"
							},
							description: {
								en: "More ways to personalize your identity on Reddit"
							}
						},
						item4: {
							title: {
								en: "Post to profile"
							},
							description: {
								en: "Make posts directly to your profile"
							}
						},
						ok: {
							en: "Show me"
						},
						title: {
							en: "Welcome to your new profile"
						},
						titleDescription: {
							en: "We’re improving Reddit and we’re excited for you to try out the new profile experience!"
						}
					},
					options: {
						message: {
							en: "Message"
						},
						messageUser: {
							en: "Send a Private Message"
						},
						snoovatar: {
							en: "Snoovatar"
						},
						inviteToChat: {
							en: "Start Chat"
						}
					},
					overview: {
						en: "Overview"
					},
					pagination: {
						next: {
							en: "next"
						},
						prev: {
							en: "prev"
						},
						title: {
							en: "view more:"
						}
					},
					posts: {
						en: "Posts"
					},
					privacy: {
						en: "Privacy and Safety"
					},
					profileModeration: {
						barTitle: {
							en: "Profile Moderation"
						},
						moderationIntro: {
							part1Text: {
								en: "Posting directly to your profile is optional. If you choose not to post\n        to your profile, you will not have a need for moderation tools."
							},
							part2Text: {
								en: "If you do choose to post to your profile, then it's important to get\n        familiar with your "
							},
							part3Link: {
								en: "moderation tools"
							},
							part4Text: {
								en: " and the "
							},
							part5Link: {
								en: "mod guidelines"
							},
							part6Text: {
								en: " to ensure that personal information, spam, and other disallowed content\n        isn't showing up and remaining in the comments of your profile.  Below, you'll\n        find a basic guide for the tools provided to you:"
							}
						},
						traffic: {
							title: {
								en: "Traffic"
							},
							description: {
								en: "View traffic statistics and graphs for your profile."
							}
						},
						moderators: {
							title: {
								en: "Moderators"
							},
							description: {
								en: "If your profile's comments are busy and you need some help with moderation,\n        you might want to add on some users as mods to assist you. You can do this here.\n        Choose users that you trust to represent you via their statements and mod actions,\n        and be mindful of what permissions your grant them."
							}
						},
						moderationLog: {
							title: {
								en: "Moderation Log"
							},
							description: {
								en: "The moderation log lists all mod actions taken by any mod on your profile.\n        If you are the only moderator of your profile the only actions will be from you\n        or Automoderator."
							},
							bullet1: {
								en: "If you add multiple moderators, the mod log can be helpful in seeing who has\n        taken a particular action like banning a user or removing a comment."
							},
							bullet2: {
								en: "The moderation log will also list actions taken by Automoderator if it is\n        set up to make actions on your profile."
							}
						},
						automoderator: {
							title: {
								en: "Automoderator"
							},
							description: {
								en: "Automoderator is our friendly robot that can be used to help you moderator\n        your community.  Automod is a versatile tool that can be set up to remove or flag\n        content posted on your page so you can review it."
							},
							bulletText1: {
								en: "If you have questions about setting up rules, "
							},
							bulletText2: {
								en: " is a valuable resource for help and advice. You can see the "
							},
							bulletLink1: {
								en: "full documentation of how it works here"
							}
						},
						moderationQueue: {
							title: {
								en: "Moderation Queue"
							},
							description: {
								en: "Content that users report can be found here so you can approve or remove it."
							}
						},
						banUsers: {
							title: {
								en: "Ban Users"
							},
							part1Text: {
								en: "This tool allows you to ban users from participating in your page and\n        should be used sparingly. If users are violating site-wide rules or harassing\n        you, please contact the admins at "
							},
							part2Link: {
								en: "contact@reddit.com"
							},
							part3Text: {
								en: " or "
							},
							part4Link: {
								en: "r/reddit.com modmail"
							},
							part5Text: {
								en: "."
							},
							bullet1: {
								en: "Bans can be permanent or timed.  For minor infractions a warning or\n        a short ban is often enough."
							},
							bullet2: {
								en: "It is important to use bans only in situations where it is warranted.\n        Educating users or ignoring someone’s bad behavior can often be more\n        effective than banning them."
							}
						},
						flairs: {
							title: {
								en: "Flairs"
							},
							description: {
								en: "Flair is text that displays next to someone’s username. Users in\n        sports communities use flair to display their favorite team."
							},
							bullet1: {
								en: "“Flair” is like a label you can apply to a post or a specific user.\n        For example, you could flair someone who works with you so other users are\n        aware of who they are."
							}
						},
						spam: {
							title: {
								en: "Spam"
							},
							description: {
								en: "All removed content can be seen here. This includes content caught by\n        the site wide spam filter and content removed by a moderator."
							},
							bullet1: {
								en: "You can approve content that was removed accidentally."
							}
						},
						questions: {
							description: {
								en: "Have more questions? "
							},
							link: {
								en: "Submit a request"
							}
						}
					},
					reportUser: {
						en: "Report User"
					},
					sections: {
						downvoted: {
							en: "Downvoted"
						},
						gilded: {
							en: "Gilded (legacy)"
						},
						hidden: {
							en: "Hidden"
						},
						overview: {
							en: "Overview (legacy)"
						},
						saved: {
							en: "Saved"
						},
						submitted: {
							en: "Submitted"
						},
						upvoted: {
							en: "Upvoted"
						}
					},
					seeMore: {
						en: "see more"
					},
					settingsForm: {
						allowTop: {
							label: {
								en: "Content Visibility"
							},
							description: {
								en: "Posts to this profile can appear in r/all and your profile can be discovered in /users"
							},
							sublabel: {
								en: "Enabled"
							}
						},
						banner: {
							label: {
								en: "Profile Cover"
							},
							description: {
								en: "Upload your own cover image. Image must be exactly 1280x384 pixels,\n        .PNG or .JPG format and less than 500KB."
							}
						},
						errors: {
							bannerError: {
								en: "There was an error uploading your image. Please verify that the size of your image is 1280x384 and less than 500KB."
							},
							iconError: {
								en: "There was an error uploading your image. Please verify that the size of your image is 256x256 and less than 500KB."
							},
							maxLen: {
								en: "200 Characters Max"
							}
						},
						icon: {
							label: {
								en: "Profile Image"
							},
							description: {
								en: "Upload your own profile image. Image must be exactly 256x256 pixels,\n        .PNG or .JPG format and less than 500KB."
							}
						},
						over18: {
							label: {
								en: "Profile Category"
							},
							description: {
								en: "Please select an option below."
							},
							sublabel1: {
								en: "This content is suitable for Everyone"
							},
							sublabel2: {
								en: "This content is NSFW (may contain nudity, pornography, profanity or\n        inappropriate content for those under 18)."
							},
							warning: {
								en: "Your content will only be shown to 18+ audiences"
							},
							nsfw: {
								en: "NSFW"
							}
						},
						prefTopKarmaSubreddits: {
							label: {
								en: "Active in Communities Visibility"
							},
							sublabel1: {
								en: "Show my active communities on my profile"
							},
							sublabel2: {
								en: "Do not show my active communities on my profile"
							}
						},
						publicDescription: {
							label: {
								en: "About"
							},
							description: {
								en: "Let the Reddit community know a little about yourself (200 max characters)"
							},
							placeholder: {
								en: "A little description of yourself"
							}
						},
						title: {
							label: {
								en: "Display Name"
							},
							description: {
								en: "This will only be displayed to viewers of your\n        profile page and will not change your username"
							},
							placeholder: {
								en: "Displayed Name"
							}
						},
						topKarmaSubreddits: {
							label: {
								en: "Active in Communities Visibility"
							},
							sublabel1: {
								en: "Show my active communities on my profile"
							},
							sublabel2: {
								en: "Do not show my active communities on my profile"
							}
						}
					},
					somethingWentWrongTryAgain: {
						en: "Something went wrong. Please try again!"
					},
					sortBy: {
						en: "Sort by"
					},
					subscribe: {
						en: "Join"
					},
					subscribed: {
						en: "Joined"
					},
					subscribers: {
						en: "members"
					},
					nsfwWarningModal: {
						title: {
							en: "Switch Account To SFW"
						},
						beginningOfMsg: {
							en: "If your account contains "
						},
						linkToNSFWPolicy: {
							en: "NSFW content"
						},
						endOfMsg: {
							en: " (contains nudity, pornography, profanity or inappropriate content\n        for those under 18) and it’s not set to NSFW, this will result in actions\n        up to and including suspension of your account."
						},
						cancel: {
							en: "Cancel"
						},
						iUnderstand: {
							en: "I Understand"
						}
					},
					timeBy: {
						en: "Show"
					},
					topSubreddits: {
						en: "Active in these communities"
					},
					topSubredditsYours: {
						en: "You're active in these communities"
					},
					trendingProfiles: {
						en: "Other Interesting Profiles"
					},
					trophycase: {
						en: "Trophy Case (%{count})"
					},
					unfollow: {
						en: "Unfollow"
					},
					unsubscribe: {
						en: "Leave"
					},
					userSpecials: {
						en: "About "
					},
					userSpecialsYours: {
						en: "Your info"
					},
					viewBy: {
						en: "View"
					},
					pinnedPosts: {
						placeholder: {
							description: {
								en: 'Pin a post from your feed using the "..." at the bottom of each post'
							},
							gotIt: {
								en: "OK, I got it"
							},
							title: {
								en: "Show off that karma!"
							}
						},
						title: {
							en: "Pinned posts"
						},
						pinnedLimitReachedModal: {
							buttonText: {
								en: "Ok, I got it"
							},
							headerText: {
								en: "You've reached your pinning limit."
							},
							message: {
								en: "You can only pin ".concat(r.U, " posts to the top of your profile. To pin something new, please unpin a post first.  ")
							}
						}
					}
				};
			const c = (e, t) => ({
				label: e,
				subtext: t
			});
			var m = {
				page: {
					saveRequestSuccess: {
						en: "Changes saved"
					},
					saveRequestFailure: {
						en: "Changes failed to save"
					},
					save: {
						en: "save"
					},
					saving: {
						en: "saving..."
					},
					navTitle: {
						en: "User settings"
					},
					uploading: {
						en: "Loading..."
					},
					tabs: {
						account: {
							en: "Account"
						},
						profile: {
							en: "Profile"
						},
						privacy: {
							en: "Privacy & Security"
						},
						feed: {
							en: "Feed Settings"
						},
						premium: {
							en: "Reddit Premium"
						},
						notifications: {
							en: "Notifications"
						},
						creator: {
							en: "Reddit Creator"
						},
						payments: {
							en: "Payments"
						}
					},
					confirmModal: {
						headerText: {
							en: "Save Changes"
						},
						cancelText: {
							en: "discard changes"
						},
						acceptText: {
							en: "save changes"
						},
						message: {
							en: "Do you want to save the changes you made to your user settings"
						}
					},
					notSupported: {
						en: "The requested page is not supported"
					},
					optional: {
						en: " (optional)"
					}
				},
				accountForm: {
					beta: c({
						en: "Opt into beta tests"
					}, {
						en: "See the newest features from Reddit and join the r/beta community"
					}),
					inRedesignBeta: c({
						en: "Opt out of the redesign"
					}, {
						en: "Revert back to old Reddit for the time being"
					}),
					headings: {
						main: {
							en: "Account settings"
						},
						betaTests: {
							en: "beta tests"
						},
						deactivate: {
							en: "deactivate account"
						},
						connectedAccounts: {
							en: "Connected accounts"
						}
					},
					optOutModal: {
						headerText: {
							en: "Opt out of the redesign"
						},
						message: {
							en: "There is an opt in to redesign setting in Preferences (in old Reddit) if you'd like to opt back in."
						},
						cancelText: {
							en: "Cancel"
						},
						acceptText: {
							en: "opt out"
						}
					},
					connectedAccounts: {
						connectToTwitter: {
							label: {
								en: "Connect to Twitter"
							},
							subtext: {
								en: "Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission."
							}
						},
						twitterConnected: {
							label: {
								en: "You are connected to Twitter"
							},
							subtext: {
								en: "You can now choose to share your posts to Twitter from the new post composer."
							},
							toast: {
								en: "Twitter has been connected!"
							}
						},
						disconnect: {
							en: "Disconnect"
						},
						showTwitterLink: {
							en: "Show link on profile"
						},
						showTwitterLinkDescription: {
							en: "You can show a link to your Twitter account on your profile"
						}
					},
					deactivateModal: {
						content: {
							sorry: {
								en: "Sorry to see you go!"
							},
							contactUs: {
								en: "If you are having a problem on Reddit, please consider contacting us about it before deactivating your account."
							},
							postsDisclaimer: {
								en: "Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually."
							},
							confirmMessage: {
								en: "This action can not be undone. Are you sure you want to deactivate?"
							},
							premiumMessage: {
								en: "Just in case you didn't cancel your Premium subscription, here are all the links: "
							},
							premiumNotificationTitle: {
								en: "Please cancel your Premium subscription before deleting your account."
							},
							premiumNotificationDesktopMessage: {
								en: "You still have an active Reddit Premium subscription. You will need to cancel your subscription for :link:. When you are finished cancelling your premium subscription, return here to fully deactivate your account."
							},
							premiumNotificationMobileMessage: {
								en: "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for :link:. When you are finished cancelling your premium subscription, return here to fully deactivate your account."
							},
							ios: {
								en: "Apple Appstore"
							},
							android: {
								en: "Google Play"
							},
							stripe: {
								en: "Stripe"
							},
							paypal: {
								en: "Paypal"
							}
						},
						headings: {
							main: {
								en: "Deactivate your account"
							},
							reason: {
								en: "why are you deactivating this account? (OPTIONAL)"
							},
							credentials: {
								en: "account credentials for security purposes"
							}
						},
						labels: {
							username: {
								en: "username"
							},
							password: {
								en: "password"
							},
							confirm: {
								en: "I understand that deactivated accounts are not recoverable"
							},
							cancel: {
								en: "cancel"
							},
							deactivate: {
								en: "deactivate"
							},
							back: {
								en: "back"
							},
							deactivateModalToggle: {
								en: "deactivate account"
							}
						}
					},
					changeEmailModal: {
						buttons: {
							cancel: {
								en: "Cancel"
							},
							save: {
								en: "Save"
							}
						},
						description: {
							en: "\n          Update your email below. There will be a new verification email\n          sent that you will need to use to verify this new email.\n        "
						},
						header: {
							en: "Update your email"
						},
						labels: {
							newEmail: {
								en: "New email"
							},
							password: {
								en: "Password"
							}
						}
					},
					checkEmailModal: {
						button: {
							en: "Got it"
						},
						description: {
							confirmEmail: {
								en: "Reddit sent a confirmation email to: <strong>%{email}</strong><br>Click the verify link in the email to secure your Reddit account."
							}
						},
						header: {
							en: "Check your email"
						}
					},
					resetPasswordModal: {
						buttons: {
							cancel: {
								en: "Cancel"
							},
							save: {
								en: "Save"
							}
						},
						errors: {
							failedLogin: {
								en: "Something went wrong. Please try to login with your new password."
							},
							passwordsDoNotMatch: {
								en: "Passwords do not match. Please try again."
							},
							passwordTooShort: {
								en: "Password must be at least 6 characters long."
							}
						},
						header: {
							en: "Update your password"
						},
						labels: {
							confirmPassword: {
								en: "confirm new password"
							},
							newPassword: {
								en: "new password"
							},
							oldPassword: {
								en: "old password"
							}
						},
						success: {
							en: "Password change complete"
						}
					}
				},
				feedForm: {
					adultContent: c({
						en: "Adult content"
					}, {
						en: "Enable to view adult and NSFW (not safe for work) content in your feed and search results"
					}),
					hideNSFW: c({
						en: "Safe browsing mode"
					}, {
						en: "Blur thumbnails and media preview for anything labeled NSFW (not safe for work)"
					}),
					rss: c({
						en: "List of your RSS feeds"
					}, {
						en: "List of links to private RSS feeds so that you can get listings of your content"
					}),
					autoplayVideo: c({
						en: "Autoplay media"
					}, {
						en: "Play videos and gifs automatically when in the viewport"
					}),
					subredditStyling: c({
						en: "Community themes"
					}, {
						en: "Use custom themes for all communities. You can also turn this off on a per community basis."
					}),
					openPostInNewTab: c({
						en: "Open posts in new tab"
					}, {
						en: "Enable to always open posts in a new tab"
					}),
					useMarkdown: c({
						en: "Default to markdown"
					}, {
						en: "When posting, your input will default to markdown text instead of fancy pants"
					}),
					listingSort: c({
						en: "Community content sort"
					}, {
						en: "Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular."
					}),
					rememberCommunitySort: c({
						en: "Remember per community"
					}, {
						en: "Enable if you would like each community to remember and use the last content sort you selected for that community."
					}),
					rememberCommunityLayout: c({
						en: "Remember per community"
					}, {
						en: "Enable if you would like each community to remember and use the last content view you selected for that community."
					}),
					layout: c({
						en: "Global content view"
					}, {
						en: "Choose how you would like content displayed in feeds. This control is also found above your feed."
					}),
					headings: {
						main: {
							en: "Feed settings"
						},
						contentPrefs: {
							en: "content preferences"
						},
						postPrefs: {
							en: "post preferences"
						},
						rss: {
							en: "rss feeds"
						}
					}
				},
				premiumForm: {
					premium: Object.assign({}, c({
						en: "Reddit Premium"
					}, {
						en: "Your Premium subscription will automatically renew at the beginning of your next billing cycle. If your subscription ends, you will have Premium until %{date}."
					}), {
						linkMessage: {
							en: "Get Premium"
						},
						subscribeSubtext: {
							en: "Your Premium membership is valid until %{date}."
						},
						altSubtext: {
							en: "Get Reddit Premium and help support Reddit."
						},
						subscribeLinkMessage: {
							en: "Subscribe"
						}
					}),
					updatePaymentInfo: {
						en: "Update payment information"
					},
					cancelSubscription: {
						en: "Cancel subscription"
					},
					hideAdvertisements: c({
						en: "Hide advertisements"
					}, {
						en: "Enable an ads-free experience on desktop"
					}),
					highlightComments: c({
						en: "Highlight new comments"
					}, {
						en: "Enable highlighting of new comments you haven't seen"
					}),
					headings: {
						main: {
							en: "Reddit Premium"
						},
						subtext: {
							main: {
								en: "Reddit Premium is a subscription membership that upgrades your account with extra features."
							}
						},
						subscriptionStatus: {
							en: "subscription status"
						},
						premiumFeatures: {
							en: "premium features"
						}
					},
					cancelSubscriptionModal: {
						headerText: {
							en: "Cancel your membership"
						},
						message: {
							en: "Are you sure you want to cancel your membership? Reddit really appreciates your support!"
						},
						cancelText: {
							en: "Back"
						},
						acceptText: {
							en: "Yes, Cancel"
						}
					},
					updateCardModal: {
						headerText: {
							en: "Update Payment Information"
						},
						descriptionText: {
							en: "Change the Credit Card associated with your Premium subscription. This will be reflected in your next billing cycle."
						}
					}
				},
				notificationsForm: {
					messageInInbox: c({
						en: "Conversations in inbox"
					}, {
						en: "Display conversations within the messages section of your inbox"
					}),
					markReadInInbox: c({
						en: "Mark as read in inbox"
					}, {
						en: "Mark messages as read when I open my inbox"
					}),
					collapseRead: c({
						en: "Collapse read messages"
					}, {
						en: "Read messages will automatically be collapsed"
					}),
					sendWelcomeMessages: c({
						en: "Mod welcome messages"
					}, {
						en: "Receive welcome messages from moderators when I join their community"
					}),
					usernameMentions: c({
						en: "Username mentions"
					}, {
						en: "Notify me when my username is mentioned in comment"
					}),
					emailNotifications: c({
						en: "Email notifications"
					}, {
						en: "If turned off, you will still receive administrative emails"
					}),
					unreadMessages: c({
						en: "Unread messages"
					}, {
						en: "Receive unread messages via email"
					}),
					digests: c({
						en: "Email digests"
					}, {
						en: "Receive periodic emails with the top posts from your favorite communities"
					}),
					headings: {
						main: {
							en: "Notifications settings"
						},
						inboxNotif: {
							en: "inbox notification"
						},
						emailNotif: {
							en: "email notification"
						},
						desktopNotif: {
							en: "Desktop notifications"
						},
						pushNotif: {
							en: "Push notifications"
						}
					},
					desktopNotifications: {
						main: c({
							en: "Desktop notifications"
						}, {
							en: "See your notifications on the corner of your computer screen, even when Reddit is closed"
						}),
						onlyAvailableWithChromeFirefoxOpera: {
							en: "Only available with Chrome, Firefox, and Opera"
						},
						turnOnModal: {
							change: {
								en: "Change"
							},
							clickOn: {
								en: "Click on"
							},
							gotIt: {
								en: "Got it"
							},
							inYourAddressBar: {
								en: "in your Chrome browser address bar"
							},
							notificationsToAllow: {
								en: "notifications to 'Allow'"
							},
							select: {
								en: "Select"
							},
							siteSettings: {
								en: "site settings"
							},
							title: {
								en: "Turn on Desktop Notifications"
							}
						}
					},
					pushNotifications: {
						chatMessages: c({
							en: "Chat messages"
						}, {
							en: "Receive notifications when a user chats with you or sends a chat request to you"
						}),
						trendingPosts: c({
							en: "Trending posts"
						}, {
							en: "Receive notifications for trending posts from your favorite communities"
						}),
						unreadMessages: c({
							en: "Unread messages"
						}, {
							en: "Receive notifications for private messages, comments to your posts, replies to your comments, and mentions of your username"
						})
					}
				},
				profileForm: {
					headings: {
						main: {
							en: "Customize profile"
						},
						information: {
							en: "Profile Information"
						},
						images: {
							en: "images"
						},
						category: {
							en: "Profile category"
						},
						advanced: {
							en: "advanced"
						},
						moderation: {
							en: "Profile moderation"
						}
					},
					displayName: {
						label: {
							en: "Display name"
						},
						subtext: {
							en: "Set a display name. This does not change your username."
						},
						placeholder: {
							en: "Display name"
						}
					},
					about: {
						label: {
							en: "About"
						},
						subtext: {
							en: "A brief description of yourself shown on your profile."
						},
						placeholder: {
							en: "About"
						}
					},
					images: {
						label: {
							en: "Avatar and banner image"
						},
						subtext: {
							en: "Images must be .png or .jpg format"
						},
						iconUploader: {
							en: "Drag and Drop or Upload Avatar Image"
						},
						bannerUploader: {
							en: "Drag and Drop or Upload Banner Image"
						},
						errors: {
							profileBanner: {
								en: "There was an error uploading your image. Please verify that the size of your image is 1280x384 and less than 500KB."
							},
							profileIcon: {
								en: "There was an error uploading your image. Please verify that the size of your image is 256x256 and less than 500KB."
							}
						}
					},
					nsfw: {
						label: {
							en: "NSFW"
						},
						subtext: {
							en: "This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)"
						}
					},
					contentVisible: {
						label: {
							en: "Content visibility"
						},
						subtext: {
							en: 'Posts to this profile can appear in <a href="/r/all">r/all</a> and your profile can be discovered in <a href="/users">/users</a>'
						}
					},
					showActiveCommunities: {
						label: {
							en: "Active in communities visibility"
						},
						subtext: {
							en: "Show which communities I am active in on my profile."
						}
					},
					modLink: {
						en: 'For moderation tools please visit our <a href="/user/%{userName}/about/edit/moderation">Profile Moderation page</a>'
					},
					toSFWConfirm: {
						title: {
							en: "SWITCH ACCOUNT TO SFW"
						},
						message: {
							en: 'If your account contains <a href="https://www.redditinc.com/policies/content-policy#text-content3">NSFW content</a> (contains nudity, pornography, profanity or inappropriate content for those under 18) and it’s not set to NSFW, this will result in actions up to and including suspension of your account.'
						},
						cancel: {
							en: "Cancel"
						},
						ok: {
							en: "I UNDERSTAND"
						}
					}
				}
			};
			i.d(t, "a", (function() {
				return _
			})), i.d(t, "c", (function() {
				return g
			})), i.d(t, "e", (function() {
				return w
			})), i.d(t, "d", (function() {
				return y
			})), i.d(t, "b", (function() {
				return f
			}));
			const h = {
					polls: {
						numVotes: {
							en: ["%{count} vote", "%{count} votes"]
						},
						numVotesCommas: {
							en: ["%{count} vote,", "%{count} votes,"]
						}
					},
					postCreation: {
						cannotAddFiles: {
							en: ["Couldn't add %{count} more file", "Couldn't add %{count} more files"]
						},
						postsCount: {
							en: ["%{count} post", "%{count} posts"]
						}
					},
					posts: {
						comments: {
							noun: {
								en: ["%{count} comment", "%{count} comments"]
							}
						},
						numViews: {
							noun: {
								en: ["%{count} View", "%{count} Views"]
							}
						},
						points: {
							noun: {
								en: ["%{count} point", "%{count} points"]
							}
						},
						views: {
							noun: {
								en: ["view", "views"]
							}
						}
					},
					comment: {
						allComments: {
							en: ["all %{count} comment", "all %{count} comments"]
						},
						children: {
							en: ["%{numChildren} child", "%{numChildren} children"]
						},
						moreReply: {
							en: ["%{count} more reply", "%{count} more replies"]
						},
						moreThanChildren: {
							en: ["More than %{numChildren} child", "More than %{numChildren} children"]
						},
						point: {
							en: ["%{count} point", "%{count} points"]
						},
						reply: {
							en: ["%{count} reply", "%{count} replies"]
						}
					},
					gold: {
						awardBadge: {
							silverTooltipMessage: {
								en: ["This %{postOrComment} has received the Silver Award", "This %{postOrComment} has received the Silver Award %{count} times"]
							},
							goldTooltipMessage: {
								en: ["This %{postOrComment} has received the Gold Award", "This %{postOrComment} has received the Gold Award %{count} times"]
							},
							platinumTooltipMessage: {
								en: ["This %{postOrComment} has received the Platinum Award", "This %{postOrComment} has received the Platinum Award %{count} times"]
							}
						}
					},
					listings: {
						moreMods: {
							en: ["...and %{count} more »", "...and %{count} more »"]
						},
						subscribers: {
							en: ["%{count} member", "%{count} members"]
						},
						usersHereNow: {
							en: ["%{count} user here now", "%{fuzzed}%{count} users here now"]
						},
						channelMembers: {
							en: [" • %{count} Member", " • %{count} Members"]
						}
					},
					live: {
						viewers: {
							en: ["%{count} viewer", "%{count} viewers"]
						}
					},
					metadata: {
						votes: {
							en: ["%{count} vote", "%{count} votes"]
						},
						comments: {
							en: ["%{count} comment", "%{count} comments"]
						}
					},
					multireddit: {
						adHocDescription: {
							en: ["Posts from %{subreddits}", "Posts from %{subreddits}"]
						},
						info: {
							communityCount: {
								en: ["%{count} community in this %{object}:", "%{count} communities in this %{object}:"]
							}
						}
					},
					profile: {
						followers: {
							en: ["%{count} Follower", "%{count} Followers"]
						},
						subscribers: {
							en: ["%{count} Member", "%{count} Members"]
						}
					},
					time: {
						days: {
							en: ["%{count} day", "%{count} days"]
						},
						hours: {
							en: ["%{count} hour", "%{count} hours"]
						},
						milliseconds: {
							en: ["%{count} millisecond", "%{count} milliseconds"]
						},
						minutes: {
							en: ["%{count} minute", "%{count} minutes"]
						},
						months: {
							en: ["%{count} month", "%{count} months"]
						},
						seconds: {
							en: ["%{count} second", "%{count} seconds"]
						},
						years: {
							en: ["%{count} year", "%{count} years"]
						},
						ago: {
							days: {
								en: ["%{count} day ago", "%{count} days ago"]
							},
							hours: {
								en: ["%{count} hour ago", "%{count} hours ago"]
							},
							milliseconds: {
								en: ["%{count} millisecond ago", "%{count} milliseconds ago"]
							},
							minutes: {
								en: ["%{count} minute ago", "%{count} minutes ago"]
							},
							months: {
								en: ["%{count} month ago", "%{count} months ago"]
							},
							seconds: {
								en: ["%{count} second ago", "%{count} seconds ago"]
							},
							years: {
								en: ["%{count} year ago", "%{count} years ago"]
							}
						}
					}
				},
				p = {
					account: {
						karma: {
							en: "karma"
						},
						karmaTotal: {
							en: "%{karma} karma"
						},
						login: {
							en: "Log In"
						},
						signup: {
							en: "Sign Up"
						},
						logout: {
							en: "logout"
						},
						preferences: {
							en: "preferences"
						}
					},
					alertBanner: {
						learnMore: {
							en: "Learn more"
						},
						suspendedMessage: {
							en: "Your account has been suspended."
						},
						FPRMessage: {
							en: "Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password."
						}
					},
					badges: {
						achievement: {
							en: "Achievement"
						},
						applyBadge: {
							en: "apply"
						},
						applyBadge2: {
							en: "apply badge"
						},
						alreadyOwned: {
							en: "owned"
						},
						buy: {
							en: "convert %{tokenName}"
						},
						clearBadges: {
							en: "clear selection"
						},
						done: {
							en: "done"
						},
						expiresIn: {
							en: "Expires in"
						},
						flairDisallowed: {
							en: "This community does not allow you to select flair"
						},
						flairDisallowedTitle: {
							en: "unavailable"
						},
						flairPickerTitle: {
							en: "select flair"
						},
						free: {
							en: "free"
						},
						getBadge: {
							en: "get badge"
						},
						gotBadge: {
							en: "you got a new badge!"
						},
						pickerTitle: {
							en: "Community Flairs & Badges"
						},
						modeSectionBadges: {
							en: "badges"
						},
						modeSectionFlairs: {
							en: "flairs"
						},
						modeSectionItemGallery: {
							en: "gallery"
						},
						modeSectionItemMyBadges: {
							en: "my badges"
						},
						noBadgesTitle: {
							en: "no badges"
						},
						noBadgesText: {
							en: "You don't have any badges yet. Get them from the Gallery."
						},
						numLeft: {
							en: "%{numerator}/%{denominator} left"
						},
						selectBadge: {
							en: "select badge"
						},
						soldOut: {
							en: "sold out"
						},
						youHave: {
							en: "You have"
						}
					},
					blueBarLinks: {
						wiki: {
							en: "wiki"
						},
						comments: {
							en: "comments"
						},
						duplicates: {
							en: "other discussions"
						}
					},
					collection: {
						addActionText: {
							en: "add"
						},
						addPostToACollection: {
							en: "Add post to a collection"
						},
						collectionBy: {
							en: "Collection by"
						},
						collectionDeletedSuccess: {
							en: "Collection deleted successfully: %{title}"
						},
						deleteCollectionTitle: {
							en: "Delete Collection"
						},
						deleteConfirmation: {
							en: "Are you sure you want to delete this collection? The posts within the collection won't be deleted."
						},
						editModal: {
							collection: {
								en: "Collection"
							},
							description: {
								en: "Description"
							},
							descriptionPlaceholderText: {
								en: "Give some detail on what the collection is about."
							},
							descriptionUpdateSuccess: {
								en: "Collection description updated successfully"
							},
							layoutUpdateSuccess: {
								en: "Collection layout updated successfully"
							},
							edit: {
								en: "Edit"
							},
							editCollection: {
								en: "Edit collection"
							},
							posts: {
								en: "Posts"
							},
							reorderCollectionSuccess: {
								en: "Collection order updated successfully"
							},
							title: {
								en: "Title"
							},
							titleUpdateSuccess: {
								en: "Collection title updated successfully"
							},
							layoutType: {
								en: "Layout type"
							},
							standard: {
								title: {
									en: "Standard"
								},
								subTitle: {
									en: "Best for event or discussion collections"
								}
							},
							gallery: {
								title: {
									en: "Gallery"
								},
								subTitle: {
									en: "Best for image heavy or meme collections"
								}
							}
						},
						follow: {
							follow: {
								en: "Follow"
							},
							followed: {
								en: "Followed"
							},
							unfollow: {
								en: "Unfollow"
							}
						},
						postAddedSuccess: {
							en: "Success! You added a post to the collection: %{title}"
						},
						postRemovedSuccess: {
							en: "Following post removed from collection successfully: %{postTitle}"
						},
						view: {
							en: "VIEW"
						},
						yesDelete: {
							en: "Yes, Delete"
						},
						undo: {
							en: "UNDO"
						},
						save: {
							en: "save"
						}
					},
					comment: {
						confirmCancellation: {
							creation: {
								en: "Are you sure that you want to discard your comment?"
							},
							edit: {
								en: "Are you sure that you want to discard your edits?"
							}
						},
						confirmNavigation: {
							en: "You have a comment in progress, are you sure you want to discard it?"
						},
						cancel: {
							en: "cancel"
						},
						children: {
							en: "children"
						},
						comment: {
							en: "comment"
						},
						commentedBy: {
							en: "Commented by"
						},
						commentDeletedByAuthor: {
							en: "Comment deleted by user"
						},
						commentDeletedByMod: {
							en: "Comment removed by moderator"
						},
						contentPolicy: {
							en: "content policy"
						},
						context: {
							en: "context"
						},
						continueThread: {
							en: "Continue this thread"
						},
						delete: {
							en: "delete"
						},
						deleteComment: {
							en: "Delete comment"
						},
						deleteConfirmation: {
							en: "Are you sure you want to delete your comment?"
						},
						deleted: {
							en: "deleted"
						},
						distinguish: {
							en: "distinguish"
						},
						distinguishAndSticky: {
							en: "Distinguish as Mod and Sticky"
						},
						distinguishAsAdmin: {
							en: "Distinguish as Admin"
						},
						distinguishAsMod: {
							en: "Distinguish as Mod"
						},
						distinguishSticky: {
							en: "yes & sticky"
						},
						dontDigFancyPants: {
							en: "Don't dig the Fancy Pants Editor?\nSwitch to markdown anytime"
						},
						edit: {
							en: "edit"
						},
						editComment: {
							en: "Edit comment"
						},
						edited: {
							en: "edited %{time}"
						},
						empty: {
							en: "Be the first to share what you think!"
						},
						error: {
							en: "Sorry, comments couldn't load!"
						},
						extraReply: {
							en: "Load more comments"
						},
						extraReplyLoading: {
							en: "Loading..."
						},
						failed: {
							en: "failed"
						},
						formattingHelp: {
							en: "formatting help"
						},
						fullComments: {
							en: "full comments"
						},
						hiddenScore: {
							en: "[score hidden]"
						},
						hiddenScorePlain: {
							en: "Score hidden"
						},
						keep: {
							en: "keep"
						},
						level: {
							en: "level %{level}"
						},
						loading: {
							en: "loading..."
						},
						loadMore: {
							en: "load more comments"
						},
						moreFromThisCommunity: {
							en: "More from this community"
						},
						switchToRTE: {
							en: "Switch to fancy pants editor"
						},
						noComments: {
							en: "no comments yet"
						},
						missingComment: {
							en: "That comment is missing"
						},
						pageError: {
							en: "We couldn't load the comments for this post"
						},
						parent: {
							en: "parent"
						},
						pending: {
							en: "submitting..."
						},
						permalink: {
							en: "permalink"
						},
						placeholder: {
							en: "What are your thoughts?"
						},
						points: {
							en: "points"
						},
						reply: {
							en: "Reply"
						},
						report: {
							en: "report"
						},
						return: {
							en: "report"
						},
						save: {
							en: "save"
						},
						saveEdits: {
							en: "save edits"
						},
						savedSuccess: {
							en: "Comment saved successfully"
						},
						savedUndo: {
							en: "Undo"
						},
						share: {
							en: "share"
						},
						showParentComments: {
							en: "Show parent comments"
						},
						singleComment: {
							message: {
								en: "you are viewing a single comment's thread."
							},
							link: {
								en: "view the rest of the comments"
							},
							shortMessage: {
								en: "Single comment thread."
							}
						},
						threadArchived: {
							title: {
								en: "This thread is archived"
							},
							subtitle: {
								en: "New comments cannot be posted and votes cannot be cast"
							}
						},
						tooltips: {
							admin: {
								en: "Reddit admin, speaking officially"
							},
							adminEmeritus: {
								en: "Reddit admin emeritus"
							},
							cakeday: {
								en: "Cake day"
							},
							contractor: {
								en: "Reddit contractor"
							},
							gilded: {
								en: "Gilded"
							},
							moderator: {
								en: "Moderator of %{displayText}, speaking officially"
							},
							op: {
								en: "Original Poster"
							}
						},
						sortedBy: {
							en: "sorted by:"
						},
						undistinguish: {
							en: "Undistinguish"
						},
						unsave: {
							en: "unsave"
						},
						unsavedSuccess: {
							en: "Comment unsaved successfully"
						},
						stickied: {
							en: "Stickied comment"
						},
						topPosts: {
							en: "Top Posts From The %{subredditName} Community"
						},
						viewAllComments: {
							en: "View all comments"
						}
					},
					common: {
						areYouSure: {
							en: "Are you sure?"
						},
						cancel: {
							en: "Cancel"
						},
						close: {
							en: "Close"
						},
						confirm: {
							en: "Confirm"
						},
						disable: {
							en: "Disable"
						},
						join: {
							en: "Join"
						},
						no: {
							en: "No"
						},
						or: {
							en: "or"
						},
						remove: {
							en: "remove"
						},
						retry: {
							en: "retry"
						},
						update: {
							en: "update"
						},
						yes: {
							en: "Yes"
						}
					},
					communityAwards: {
						errors: {
							imageTooBig: {
								en: "The chosen image file is too large. Please pick a new image and try again."
							},
							imageNotEqualDimensions: {
								en: "The chosen image is not square. Please pick a new image and try again."
							},
							imageWrongDimensions: {
								en: "The chosen image does not match the required dimensions. Please pick a new image and try again."
							},
							imageTooLargeDimensions: {
								en: "Image should be less than or equal to %{maxWidth}x%{maxHeight}. Please pick a new image and try again."
							},
							imageUploadError: {
								en: "There was an error uploading the image. Please try again."
							},
							awardCreationError: {
								en: "There was an error creating the award. Please try again."
							},
							awardDeleteError: {
								en: "There was an error deleting the award. Please try again."
							},
							awardDisableError: {
								en: "There was an error disabling the award. Please try again."
							},
							usableAwardsError: {
								en: "There was an error loading awards list. Please try again."
							}
						},
						creationModal: {
							createAward: {
								en: "Create Award"
							},
							name: {
								en: "Name"
							},
							nameOfAward: {
								en: "Name of Award"
							},
							image: {
								en: "Image"
							},
							largeSize: {
								en: "Large"
							},
							normalSize: {
								en: "Normal"
							},
							smallSize: {
								en: "Small"
							},
							fileDimensionsSubtext: {
								en: "Width and height should be equal, and at least %{minSize}px"
							},
							fileSizeSubtext: {
								en: "File size limited to %{maxSize}MB"
							},
							coinCost: {
								en: "Coin cost"
							},
							coinValueConstraints: {
								en: "%{minimum} Coins minimum in increments of %{increments}"
							},
							monthsToGive: {
								en: "Months of Premium to give"
							},
							create: {
								en: "Create"
							},
							successfullyCreated: {
								en: "Community award successfully created!"
							}
						},
						disableModal: {
							successfullyDisabled: {
								en: "%{awardName} Award successfully deleted!"
							}
						}
					},
					communityTopics: {
						communityTopics: {
							en: "Community topics"
						},
						explanation: {
							en: "This will help Reddit recommend your community to relevant users and other discovery experiences."
						},
						suggestedTopics: {
							en: "Suggested topics"
						},
						loadFailed: {
							en: "Oh no! We didn't load your topics. Please try again."
						},
						savePartialFailed: {
							en: "Yikes! It looks like we didn't save all of your topics. Please try again"
						},
						add: {
							en: "Add"
						},
						retry: {
							en: "Retry"
						},
						numSelected: {
							en: "%{part}/%{whole}"
						},
						maxTopicsHit: {
							en: "You can only add up to %{max} community topics"
						}
					},
					contentGate: {
						goldSubreddit: {
							description: {
								en: "The moderators in this community have set it to Reddit Gold members only. You must upgrade to a Reddit Gold membership to continue."
							},
							descriptionPremium: {
								en: "The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue."
							},
							getGold: {
								en: "Get Gold"
							},
							getPremium: {
								en: "Get Premium"
							},
							goHome: {
								en: "Go Home"
							},
							login: {
								en: "Log In"
							},
							signUp: {
								en: "Sign Up"
							},
							title: {
								en: "r/%{subredditName} is a Reddit Gold community"
							},
							titlePremium: {
								en: "r/%{subredditName} is a Reddit Premium community"
							}
						},
						over18: {
							description: {
								en: "You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?"
							},
							title: {
								en: "You must be 18+ to view this community"
							}
						},
						privateSubreddit: {
							description: {
								en: "The moderators in this community have set it to private. You must be a moderator or approved user to visit."
							},
							exploreReddit: {
								en: "Explore Reddit"
							},
							goHome: {
								en: "Go Home"
							},
							messageMods: {
								en: "Message Mods"
							},
							title: {
								en: "You must be invited to visit this community"
							}
						},
						quarantinedSubreddit: {
							continue: {
								en: "Continue"
							},
							description: {
								en: "Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue."
							},
							exploreReddit: {
								en: "Explore Reddit"
							},
							login: {
								en: "Log In"
							},
							noThankYou: {
								en: "No Thank You"
							},
							prompt: {
								en: "Are you certain you want to continue?"
							},
							quarantined: {
								en: "quarantined"
							},
							signUp: {
								en: "Sign Up"
							},
							subtitle: {
								en: "This community is"
							},
							title: {
								en: "Are you sure you want to view this community?"
							},
							verifyEmail: {
								en: "Verify Email"
							},
							bannerTitle: {
								en: "Community Quarantined"
							},
							clickToGoHome: {
								en: "Click to return home."
							},
							quarantineMsg: {
								en: "It is dedicated to shocking or highly offensive content."
							},
							quarantineLabelTooltip: {
								en: "This post was submitted in a quarantined community"
							}
						},
						subredditBanned: {
							description: {
								en: "This community has been banned for violating the Reddit rules."
							},
							exploreReddit: {
								en: "Explore Reddit"
							},
							title: {
								en: "r/%{subredditName} has been banned from Reddit"
							}
						},
						subredditDoesNotExist: {
							goHome: {
								en: "Go Home"
							},
							title: {
								en: "r/%{subredditName} doesn't exist"
							}
						}
					},
					countrySorts: {
						everywhere: {
							en: "everywhere"
						},
						unitedStates: {
							en: "united states"
						},
						argentina: {
							en: "argentina"
						},
						australia: {
							en: "australia"
						},
						bulgaria: {
							en: "bulgaria"
						},
						canada: {
							en: "canada"
						},
						chile: {
							en: "chile"
						},
						colombia: {
							en: "colombia"
						},
						croatia: {
							en: "croatia"
						},
						czechRepublic: {
							en: "czech republic"
						},
						finland: {
							en: "finland"
						},
						greece: {
							en: "greece"
						},
						hungary: {
							en: "hungary"
						},
						iceland: {
							en: "iceland"
						},
						india: {
							en: "india"
						},
						ireland: {
							en: "ireland"
						},
						japan: {
							en: "japan"
						},
						malaysia: {
							en: "malaysia"
						},
						mexico: {
							en: "mexico"
						},
						newZealand: {
							en: "new zealand"
						},
						philippines: {
							en: "philippines"
						},
						poland: {
							en: "poland"
						},
						portugal: {
							en: "portugal"
						},
						puertoRico: {
							en: "puerto rico"
						},
						romania: {
							en: "romania"
						},
						serbia: {
							en: "serbia"
						},
						singapore: {
							en: "singapore"
						},
						sweden: {
							en: "sweden"
						},
						taiwan: {
							en: "taiwan"
						},
						thailand: {
							en: "thailand"
						},
						turkey: {
							en: "turkey"
						},
						unitedKingdom: {
							en: "united kingdom"
						}
					},
					crosspost: {
						anotherRule: {
							en: "See rules details"
						},
						crosspostTitle: {
							en: "Choose a title"
						},
						formNotification: {
							en: "You can share this post to communities you have joined."
						},
						formTitle: {
							en: "Submit a Crosspost"
						},
						moreCrosposts: {
							en: "See more places this has been crossposted"
						},
						policy: {
							part1: {
								en: "please be mindful of reddit’s "
							},
							part2: {
								en: "content policy"
							},
							part3: {
								en: " and practice "
							},
							part4: {
								en: " good reddiquette"
							}
						},
						required: {
							en: "required"
						},
						recentSubreddits: {
							en: "your recent subreddits"
						},
						rules: {
							en: "Crossposting rules for %{name}"
						},
						sendReplies: {
							en: "Send replies to this post to my inbox"
						},
						submit: {
							en: "Submit"
						},
						subreddit: {
							en: "Choose where to crosspost"
						},
						your: {
							en: "Your Profile"
						}
					},
					desktopNotifications: {
						prePrompt: {
							allowNotifications: {
								en: "Allow Notifications"
							},
							body: {
								loggedIn: {
									en: "%{userName}, stay up to date on the best Reddit content for you and replies to your posts and comments with notifications."
								},
								loggedOut: {
									en: "Stay up to date on the best Reddit content for you."
								}
							},
							notNow: {
								en: "Not now"
							},
							title: {
								en: "Enable notifications"
							}
						}
					},
					discoveryUnits: {
						categoryCommunities: {
							en: "%{categoryName} communities"
						},
						communities: {
							en: "Communities"
						},
						communitiesTalkingAboutThis: {
							en: "Communities talking about this"
						},
						continueBrowsingIn: {
							en: "Continue browsing in %{subredditName}"
						},
						more: {
							en: "+%{count} More"
						},
						popularPosts: {
							en: "Popular posts"
						},
						seeAllPosts: {
							en: "See all posts"
						},
						seeAllPostsIn: {
							en: "See all posts in %{subredditName}"
						},
						subscribers: {
							en: "%{number} members"
						},
						topContentLast: {
							en: "Top posts from the past %{range}"
						},
						topPost: {
							en: "Top post"
						},
						topPostsAcrossReddit: {
							en: "Top posts across reddit "
						},
						topPostsInCategory: {
							en: "Top %{category} Posts"
						},
						topSubredditsInCategory: {
							en: "Top %{category} Communities"
						},
						trendingToday: {
							en: "Trending today"
						},
						viewAll: {
							en: "View all %{count}"
						},
						viewCategory: {
							en: "View Category"
						},
						viewCommunity: {
							en: "View Community"
						},
						visitCommunity: {
							en: "Visit Community"
						}
					},
					economy: {
						settings: {
							creator: {
								header: {
									tag: {
										en: "alpha"
									},
									title: {
										en: "Reddit Creator"
									}
								},
								stripeConnect: {
									cta: {
										en: "connect stripe account"
									},
									connected: {
										en: "connected"
									},
									connecting: {
										en: "connecting..."
									},
									description: {
										en: "Connect your Stripe account to Reddit to get paid directly to your bank account. If you don't have a Stripe account it'll only take a couple of minutes to create one."
									},
									disclaimer: {
										en: "Reddit doesn't store personal data collected by Stripe."
									},
									header: {
										en: "accept tips"
									},
									legal: {
										en: "By connecting to Stripe, you agree to our"
									},
									legalLink: {
										en: "Beta Terms of Service"
									},
									title: {
										en: "Stripe Account"
									}
								}
							},
							payments: {
								header: {
									description: {
										en: "View your saved payment methods. For security and privacy, your payment details are never stored by Reddit, and only maintained by our payment providers."
									},
									title: {
										en: "Payments"
									}
								},
								paymentMethods: {
									none: {
										en: "You have no saved payment methods"
									},
									remove: {
										en: "remove"
									},
									removing: {
										en: "removing"
									},
									title: {
										en: "payment methods"
									}
								}
							}
						},
						sidebar: {
							postFlatlistCTA: {
								support: {
									en: "Tip"
								}
							},
							profileCTA: {
								support: {
									en: "tip"
								},
								title: {
									en: "reddit creator"
								}
							}
						},
						support: {
							payment: {
								amounts: {
									customLabel: {
										en: "other"
									}
								},
								anonymous: {
									en: "Make my tip anonymous"
								},
								card: {
									new: {
										ccv: {
											en: "ccv"
										},
										exp: {
											en: "mm/yy"
										},
										name: {
											en: "name on card"
										},
										number: {
											en: "card number"
										},
										update: {
											en: "Save card"
										},
										zip: {
											en: "zip code"
										}
									},
									selector: {
										title: {
											en: "Payment Method"
										},
										other: {
											en: "Add New Card"
										}
									}
								},
								footer: {
									legal: {
										delimiter: {
											en: "."
										},
										link: {
											en: "Beta Terms of Service"
										},
										notAnonymous: {
											en: "Your username & tip amount will be sent to the recipient."
										},
										text: {
											en: "By tipping, you agree to our"
										}
									},
									submit: {
										buttonText: {
											en: "Tip %{username}"
										}
									}
								},
								header: {
									title: {
										en: "Tip Reddit Creators"
									},
									subtext1: {
										en: "Send money to your favorite Reddit Creators."
									},
									subtext2: {
										en: "Help them create more great stuff."
									}
								},
								message: {
									placeholder: {
										en: "Private Message (optional)"
									}
								}
							},
							tooltip: {
								subredditPlacholder: {
									en: "the subreddit"
								},
								text: {
									en: "%{amount}% goes to %{name}"
								},
								textWithFees: {
									en: "%{amount}% goes to %{name} (excluding fees)"
								},
								textWithDisclaimer: {
									en: "%{amount}%* goes to %{name}"
								},
								usernameLoading: {
									en: "Loading..."
								}
							}
						}
					},
					email: {
						verificationStatus: {
							success: {
								en: "Email verification complete"
							},
							alreadyVerified: {
								en: "Your email address has already been verified."
							},
							wrongUser: {
								en: "The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email."
							},
							error: {
								en: "Something went wrong."
							}
						}
					},
					emailVerification: {
						banner: {
							buttons: {
								edit: {
									en: "Edit"
								},
								resend: {
									en: "Resend"
								}
							},
							description: {
								en: "Check your inbox for confirmation email"
							},
							error: {
								en: "Something went wrong sending verification email. Try again later."
							},
							title: {
								en: "Verify your email to secure account: %{email}"
							}
						}
					},
					emojiPicker: {
						cancel: {
							en: "Cancel"
						},
						searchEmoji: {
							en: "Search for emoji"
						}
					},
					error: l.a,
					euCookiePolicy: {
						buttonText: {
							en: "I Agree"
						},
						linkText: {
							en: "Learn More"
						},
						text: {
							en: "Cookies help us deliver our Services. By using our Services or clicking I agree, you agree to our use of cookies."
						}
					},
					explore: {
						categories: {
							description: {
								en: "Breaking news, sports, TV fan theories, and never-ending streams of cute animals. The conversation starts here."
							},
							title: {
								en: "Find your community on Reddit"
							}
						},
						communities: {
							title: {
								en: "Explore %{categoryName}"
							}
						},
						lookingForPopular: {
							en: "Looking for the Popular feed?"
						},
						upsell: {
							description: {
								en: "Reddit is home to thousands of communities, endless conversation, and authentic human connection. Create your account now!"
							},
							title: {
								en: "Find your communities. Customize your Home feed."
							}
						}
					},
					flair: {
						addUserFlair: {
							en: "add user flair"
						},
						addUserFlairAndBadge: {
							en: "add badge & flair"
						},
						addUserBadge: {
							en: "add badge"
						},
						editFlair: {
							en: "edit flair"
						},
						editUserFlair: {
							en: "edit user flair"
						},
						editUserFlairAndBadge: {
							en: "edit badge & user flair"
						},
						editUserBadge: {
							en: "edit user badge"
						},
						noFlair: {
							en: "No flair selected"
						},
						patron: {
							en: "Patron"
						},
						preview: {
							en: "user flair preview"
						},
						showMyFlair: {
							en: "Show my user flair on this community"
						},
						userFlairModalTitle: {
							en: "Select your community flair"
						},
						userFlairPlaceholder: {
							en: "u/username"
						}
					},
					footer: {
						titles: {
							about: {
								en: "about"
							},
							help: {
								en: "help"
							},
							apps: {
								en: "apps & tools"
							},
							love: {
								en: "<3"
							}
						},
						links: {
							blog: {
								en: "blog"
							},
							about: {
								en: "about"
							},
							source: {
								en: "source code"
							},
							ad: {
								en: "advertise"
							},
							app: {
								en: "the reddit app"
							},
							careers: {
								en: "careers"
							},
							jobs: {
								en: "jobs"
							},
							developers: {
								en: "developers"
							},
							engineering: {
								en: "engineering"
							},
							help: {
								en: "help"
							},
							rules: {
								en: "site rules"
							},
							faq: {
								en: "FAQ"
							},
							wiki: {
								en: "wiki"
							},
							reddiquette: {
								en: "reddiquette"
							},
							reddit: {
								en: "reddit.com"
							},
							transparency: {
								en: "transparency"
							},
							contact: {
								en: "contact us"
							},
							iphone: {
								en: "Reddit for iPhone"
							},
							android: {
								en: "Reddit for Android"
							},
							mweb: {
								en: "mobile website"
							},
							press: {
								en: "press"
							},
							buttons: {
								en: "buttons"
							},
							gold: {
								en: "reddit gold"
							},
							gifts: {
								en: "reddit gifts"
							},
							facebook: {
								en: "Facebook"
							},
							twitter: {
								en: "Twitter"
							},
							instagram: {
								en: "Instagram"
							},
							coins: {
								en: "reddit coins"
							},
							premium: {
								en: "reddit premium"
							}
						},
						legal: {
							content: {
								en: "content policy"
							},
							privacy: {
								en: "privacy policy"
							},
							user: {
								en: "user agreement"
							},
							mod: {
								en: "mod policy"
							},
							cp: {
								en: "© 2019 Reddit, Inc. All rights reserved"
							}
						},
						legalbottom: {
							part1: {
								en: "Use of this site constitutes acceptance of our "
							},
							part2: {
								en: " and  "
							},
							part3: {
								en: ". © %{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc."
							},
							privacy: {
								en: "Privacy Policy"
							},
							user: {
								en: "User Agreement"
							}
						}
					},
					form: {
						errors: {
							iconError: {
								en: "There was an error uploading your image. Please verify that the size of your image is 256x256 and less than 500KB."
							},
							bannerError: {
								en: "There was an error uploading your image. Please verify that the size of your image is 1280x384 and less than 500KB."
							}
						},
						saved: {
							en: "Saved!"
						},
						saving: {
							en: "Saving"
						},
						submit: {
							en: "Submit"
						},
						optional: {
							en: " (Optional)"
						},
						required: {
							en: "*Required"
						},
						uploadPhoto: {
							en: "Upload Photo"
						},
						characters: {
							en: "Characters"
						},
						images: {
							en: "Images"
						}
					},
					gold: a,
					gov: {
						available: {
							en: "Transferable"
						},
						bannerPurchaseCTA: {
							en: "buy banner"
						},
						bannerManageCTA: {
							en: "manage banner"
						},
						explanation: {
							en: "Up to 49% of earned %{tokenName}. Remaining are frozen."
						},
						harberger: {
							banner: {
								deleteError: {
									en: "Could not delete image"
								},
								imageSize: {
									en: "192 px high"
								},
								imageTitle: {
									en: "Image"
								},
								tile: {
									en: "Tile"
								},
								title: {
									en: "banner"
								},
								uploadLabel: {
									en: "Drag and Drop or Upload Image"
								},
								uploadError: {
									en: "Could not upload image"
								}
							},
							buyBannerModalTitle: {
								en: "Buy Banner"
							},
							buy: {
								en: "buy"
							},
							controls: {
								cancel: {
									en: "cancel"
								},
								save: {
									en: "save"
								},
								walletAmount: {
									en: "You have"
								}
							},
							explanations: {
								banner: {
									title: {
										en: "Buy r/%{subredditName}'s Top Banner with %{tokenName}"
									},
									text: {
										en: "Set the image to whatever you want"
									}
								},
								tax: {
									title: {
										en: "Hamburger Tax"
									},
									text1: {
										en: "The owner sets the price for the banner"
									},
									text2: {
										en: "They pay a daily tax rate of 1% by burning %{tokenName}"
									},
									text3: {
										en: "If the owner cannot pay the tax, the price goes to 0"
									},
									text4: {
										en: "Anyone can buy the banner at its advertised price"
									},
									text5: {
										en: "The owner cannot refuse to sell it at that price"
									}
								}
							},
							manage: {
								bannerPrice: {
									en: "banner price"
								},
								taxRate: {
									en: "1% daily tax"
								},
								priceTitle: {
									en: "Price and Hamburger Tax"
								},
								priceExplanation: {
									en: "You can protect your ownership by raising the price. This also increases the daily tax. If you're unable to pay the tax, the price goes to 0."
								}
							},
							manageBannerModalTitle: {
								en: "Manage Banner"
							},
							owner: {
								en: "Owned by"
							}
						},
						leaderboard: {
							header: {
								topUsers: {
									en: "top users"
								}
							},
							rangeText: {
								week: {
									en: "Week"
								},
								month: {
									en: "Month"
								},
								year: {
									en: "Year"
								}
							},
							users: {
								singular: {
									en: "User"
								},
								plural: {
									en: "Users"
								}
							}
						},
						pointsDecay: {
							election: {
								body: {
									en: "Moderator %{tokenName} may be removed if there isn’t an election for top moderator within %{time}."
								},
								title: {
									en: "election required for top moderator"
								}
							},
							inactive: {
								body: {
									en: "%{tokenName} may be removed if they are not used in governance polls. To keep your %{tokenName}, vote in 1 governance poll within %{time}."
								},
								title: {
									en: "inactive %{tokenName}"
								},
								time: {
									singular: {
										en: "%{numDays} day"
									},
									plural: {
										en: "%{numDays} days"
									}
								}
							}
						},
						new: {
							en: "new"
						},
						recipientLabel: {
							en: "recipient username"
						},
						recipientPlaceholder: {
							en: "Who will get your %{tokenName}?"
						},
						releaseNotesDone: {
							en: "done"
						},
						releaseNotesNext: {
							en: "next"
						},
						releaseNotesTitle: {
							en: "What's New in %{subredditName}?"
						},
						replaceMod: {
							part1: {
								en: "Should"
							},
							part2: {
								en: "become the top moderator?"
							},
							username: {
								en: "username"
							}
						},
						searchNameError: {
							en: "Could not check that username. Are you sure it's correct?"
						},
						searchNameInvalid: {
							en: "Cannot find this username."
						},
						sendCta: {
							en: "send"
						},
						spinoff: {
							part1: {
								en: "Should we spin-off to"
							},
							part2: {
								en: "?"
							},
							subredditName: {
								en: "subreddit name"
							}
						},
						tipText: {
							en: "Tip %{username} with %{tokenName}"
						},
						transferModalTitle: {
							en: "Send %{tokenName}"
						},
						transferSuccess: {
							en: "Success! You just transferred %{amount} %{tokenName} to %{recipient}"
						},
						types: {
							general: {
								en: "general"
							},
							gov: {
								en: "governance"
							},
							replaceTopMod: {
								en: "replace the top moderator"
							},
							spinoff: {
								en: "spin-off a new community"
							}
						},
						voteLater: {
							en: "later"
						},
						voteCta: {
							en: "%{subredditName} Governance Vote is Open:"
						},
						votePrompt: {
							en: "vote"
						}
					},
					header: {
						appeal: {
							en: "Appeal"
						},
						ariaInstructions: {
							en: "Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts"
						},
						chat: {
							en: "Chat"
						},
						coins: {
							en: "Coins"
						},
						createCommunity: {
							en: "Create Community"
						},
						customizeFlyout: {
							title: {
								en: "New User Settings"
							},
							subtitle: {
								en: "Like customizing Reddit?"
							},
							description: {
								en: "You can save how you sort and view your communities in user settings."
							},
							dismiss: {
								en: "Got It"
							}
						},
						emailVerificationTooltip: {
							title: {
								en: "Confirm your email:"
							},
							description: {
								en: "Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account."
							},
							buttons: {
								updateEmail: {
									en: "Update email"
								},
								gotIt: {
									en: "Got it"
								}
							}
						},
						filter: {
							en: "Filter"
						},
						explore: {
							en: "Explore"
						},
						hamburgerMenu: {
							en: "My Communities Menu"
						},
						home: {
							en: "Home"
						},
						metaFilter: {
							en: "Polls"
						},
						messages: {
							en: "Messages"
						},
						moderation: {
							en: "Moderation"
						},
						modListing: {
							en: "r/Mod"
						},
						modMail: {
							en: "Modmail"
						},
						modMailBeta: {
							en: "Modmail Beta"
						},
						modQueue: {
							en: "Mod Queue"
						},
						mySubscriptions: {
							en: "My Communities"
						},
						navigation: {
							en: "Start typing to filter your communities or use up and down to select."
						},
						newPost: {
							en: "Create Post"
						},
						ogDescription: {
							en: "reddit: the front page of the internet"
						},
						ogTitle: {
							en: "reddit: the front page of the internet"
						},
						premium: {
							en: "Premium"
						},
						publicAccessNetwork: {
							en: "Reddit Public Access Network"
						},
						report: {
							en: "Report"
						},
						search: {
							en: "Search Reddit"
						},
						searchMultireddit: {
							en: "Search m/%{multireddit}"
						},
						searchSubreddit: {
							en: "Search r/%{subreddit}"
						},
						settings: {
							en: "User Settings"
						},
						selected: {
							en: "selected"
						},
						subredditCreation: {
							en: "Create Community"
						},
						userDataRequest: {
							en: "Request your Reddit data"
						},
						userDropdown: {
							en: "User account menu"
						},
						viewDraft: {
							en: "View Draft"
						}
					},
					headerDropdown: {
						coins: {
							en: "Reddit Coins"
						},
						communities: {
							en: "communities"
						},
						feeds: {
							en: "feeds"
						},
						helpCenter: {
							en: "Help Center"
						},
						loginSignup: {
							en: "Log In / Sign Up"
						},
						logout: {
							en: "Log Out"
						},
						moreStuff: {
							en: "More Stuff"
						},
						myProfile: {
							en: "My Profile"
						},
						myStuff: {
							en: "My Stuff"
						},
						mySubscriptions: {
							en: "My Communities"
						},
						optIn: {
							en: "Opt In to New Reddit"
						},
						optOut: {
							en: "Opt Out of Redesign"
						},
						premium: {
							en: "Reddit Premium"
						},
						submitFeedback: {
							en: "Submit Feedback"
						},
						userSettings: {
							en: "User Settings"
						},
						viewOptions: {
							en: "View Options"
						},
						visitOldReddit: {
							en: "Visit Old Reddit"
						}
					},
					hovercard: {
						viewCommunity: {
							en: "View Community"
						}
					},
					listings: {
						aboutMods: {
							en: "about moderation team"
						},
						agePrefix: {
							en: "a community for"
						},
						emptySubreddit: {
							callToAction: {
								en: "Add a post"
							},
							primary: {
								en: "There are no posts in this subreddit"
							},
							secondary: {
								en: "Be the first to till this fertile land."
							}
						},
						emptySubredditRising: {
							primary: {
								en: "Looks like nothing is rising fast enough in this subreddit"
							},
							secondary: {
								en: "Create a new post and take all the glory"
							}
						},
						emptyHomepage: {
							callToAction: {
								en: "Browse popular communities"
							},
							primary: {
								en: "Reddit gets better when you join communities, so find some that you’ll love!"
							}
						},
						errorTitle: {
							en: "We couldn't load this listing"
						},
						explore: {
							howRedditWorks: {
								en: "How Reddit works"
							},
							longDescription: {
								en: 'Find your breaking news, sports,<br />TV fan theories, or never-ending<br />streams of cute animals.<br />See what’s <a href="/r/popular">trending on r/popular</a>.'
							},
							title: {
								en: "Explore"
							}
						},
						home: {
							title: {
								en: "home"
							},
							longDescription: {
								en: "Your personal Reddit frontpage. Come here to check in with your favorite communities."
							}
						},
						all: {
							title: {
								en: "all"
							},
							longDescription: {
								en: "The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation."
							}
						},
						random: {
							en: "random"
						},
						popular: {
							title: {
								en: "popular"
							},
							longDescription: {
								en: "The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet."
							}
						},
						pagination: {
							next: {
								en: "next"
							},
							prev: {
								en: "prev"
							},
							title: {
								en: "view more:"
							},
							or: {
								en: "or"
							},
							random: {
								en: "random subreddit"
							},
							explore: {
								en: "explore some new subreddits"
							}
						},
						messageTheModerators: {
							en: "message the moderators"
						},
						moderators: {
							en: "moderators"
						},
						noResults: {
							en: "Sorry, there doesn't seem to be anything here."
						},
						noPosts: {
							en: "hmm... u/%{profileName} hasn't posted anything"
						},
						noRecentPosts: {
							en: "hmm... u/%{profileName} hasn't posted recently"
						},
						noComments: {
							en: "hmm... u/%{profileName} hasn't commented on anything"
						},
						noRecentComments: {
							en: "hmm... u/%{profileName} hasn't commented recently"
						},
						noPostsButComment: {
							check: {
								en: "check out"
							},
							comments: {
								en: "their comments"
							},
							instead: {
								en: "instead"
							}
						},
						privateEmpty: {
							en: "hmm... looks like you haven't %{verb} yet"
						},
						subscribe: {
							en: "join"
						},
						layoutSwitcher: {
							card: {
								en: "card"
							},
							classic: {
								en: "classic"
							},
							compact: {
								en: "compact"
							},
							label: {
								en: "View"
							},
							welcomeTooltip: {
								label: {
									en: "New Feature"
								},
								title: {
									en: "Card. Classic. Compact"
								},
								body: {
									en: "These icons change the way you view Reddit. Choose between layouts for media, text or just plain density."
								},
								button: {
									en: "Got it"
								}
							}
						},
						toast: {
							error: {
								en: "Sorry, we couldn't load posts for this page."
							},
							retryButton: {
								en: "Retry"
							}
						},
						sponsored: {
							en: "promoted"
						},
						unsubscribe: {
							en: "leave"
						},
						subredditCreation: {
							title: {
								en: "Create Community"
							}
						},
						populatedHome: {
							longDescription: {
								en: "Create an account to save your recommendations and further customize your home feed."
							},
							title: {
								en: "Welcome home"
							}
						}
					},
					live: {
						live: {
							en: "live"
						}
					},
					media: {
						nsfw: {
							en: "Click to see NSFW"
						},
						spoiler: {
							en: "Click to see spoiler"
						},
						nsfwSpoiler: {
							en: "Click to see NSFW spoiler"
						}
					},
					metadata: {
						index: {
							en: "%{votesPluralizedString} and %{commentsPluralizedString} so far on Reddit"
						}
					},
					modals: {
						cancelPurchase: {
							accept: {
								en: "Cancel purchase"
							},
							cancel: {
								en: "back"
							},
							message: {
								en: "Do you want to cancel this purchase? You will lose any information you’ve entered."
							}
						},
						upsellSignup: {
							alreadyARedditor: {
								en: "Already a Redditor?"
							},
							createAccount: {
								en: "Create account"
							},
							text: {
								generic: {
									en: "By having a Reddit account, you can join, vote, and comment on all your favorite Reddit content"
								},
								post: {
									en: "You can post in any community with a Reddit account"
								},
								reply: {
									en: "You can comment on any post with a Reddit account"
								},
								save: {
									en: "You can save any post and comment to read later with a Reddit account"
								},
								subscribe: {
									en: "You can join any community with a Reddit account"
								},
								vote: {
									en: "You can vote on posts and comments to help everyone find the best content with a Reddit account"
								}
							},
							title: {
								en: "Create your Reddit account"
							}
						}
					},
					moderationLog: {
						actions: {
							details: {
								addedEventTimes: {
									en: "added event times to post"
								},
								addedFlairStyling: {
									en: "added flair styling"
								},
								addedStyling: {
									en: "modified community styling"
								},
								addedToCollection: {
									en: "added post to collection"
								},
								addedWidget: {
									en: "added widget"
								},
								allowDiscovery: {
									en: "toggle allow in search/onboarding/discovery"
								},
								allowTop: {
									en: "toggle allow in default/trending lists"
								},
								permanentBan: {
									en: "permanent ban"
								},
								collapseDeletedComments: {
									en: "toggle collapse deleted/removed comments"
								},
								commentScoreHideMins: {
									en: "comment score hide period"
								},
								approved: {
									en: "approved"
								},
								confirmSpam: {
									en: "confirm spam"
								},
								copyrightRemoval: {
									en: "copyright removal"
								},
								copyrightRestoration: {
									en: "copyright restoration"
								},
								createdCollection: {
									en: "created collection"
								},
								cssOnCname: {
									en: "toggle custom css from cname"
								},
								deleteBanner: {
									en: "delete banner image"
								},
								deleteHeader: {
									en: "delete header image"
								},
								deleteIcon: {
									en: "delete icon image"
								},
								deleteImage: {
									en: "delete image"
								},
								deletedCollection: {
									en: "deleted collection"
								},
								description: {
									en: "sidebar description"
								},
								domain: {
									en: "domain"
								},
								editedCollectionDescription: {
									en: "edited collection description"
								},
								editedCollectionDisplayLayout: {
									en: "edited collection display layout"
								},
								editedCollectionTitle: {
									en: "edited collection title"
								},
								editedEventBody: {
									en: "edited event post body"
								},
								editedEventTimes: {
									en: "edited event post times"
								},
								editedEventTitle: {
									en: "edited event post title"
								},
								editedWidget: {
									en: "edited widget"
								},
								excludeBannedModqueue: {
									en: "toggle exclude banned users posts from modqueue"
								},
								flairClearTemplate: {
									en: "clear flair template"
								},
								flairCsv: {
									en: "edit flair by csv"
								},
								flairDeleteTemplate: {
									en: "delete flair template"
								},
								flairAdd: {
									en: "add flair"
								},
								flairDelete: {
									en: "delete flair"
								},
								flairDisabled: {
									en: "disable flair"
								},
								flairEdit: {
									en: "edit flair"
								},
								flairEnabled: {
									en: "toggle flair enabled"
								},
								flairPosition: {
									en: "toggle user flair position"
								},
								flairSelfEnabled: {
									en: "toggle user assigned flair enabled"
								},
								flairTemplate: {
									en: "add/edit flair templates"
								},
								freeFormReports: {
									en: "toggle allow free form reports by users"
								},
								headerTitle: {
									en: "header title"
								},
								ignoreReports: {
									en: "ignore reports"
								},
								lang: {
									en: "language"
								},
								linkFlairPosition: {
									en: "toggle link flair position"
								},
								linkFlairSelfEnabled: {
									en: "toggle submitter assigned link flair enabled"
								},
								linkType: {
									en: "link type"
								},
								over18: {
									en: "toggle viewers must be over 18"
								},
								permissionModeratorInvite: {
									en: "set permissions on moderator invitation"
								},
								permissionModerator: {
									en: "set permissions on moderator"
								},
								publicDescription: {
									en: "description"
								},
								publicTraffic: {
									en: "toggle public traffic stats page"
								},
								removeSelf: {
									en: "removed self"
								},
								remove: {
									en: "remove"
								},
								removedFromCollection: {
									en: "removed post from collection"
								},
								removedStyling: {
									en: "removed community styling"
								},
								removedWidget: {
									en: "removed widget"
								},
								showCnameSidebar: {
									en: "toggle show sidebar from cname"
								},
								showMedia: {
									en: "toggle show thumbnail images of content"
								},
								spam: {
									en: "spam"
								},
								stylesheet: {
									en: "stylesheet"
								},
								submitLinkLabel: {
									en: "submit link button label"
								},
								submitTextLabel: {
									en: "submit text post button label"
								},
								title: {
									en: "title"
								},
								type: {
									en: "type"
								},
								unspam: {
									en: "unspam"
								},
								uploadImageBanner: {
									en: "upload image banner"
								},
								uploadImageHeader: {
									en: "upload image header"
								},
								uploadImageIcon: {
									en: "upload image icon"
								},
								uploadImage: {
									en: "upload image"
								}
							}
						}
					},
					modTools: {
						actionByAutomod: {
							en: "Action taken by Automoderator"
						},
						addARemovalReason: {
							en: "Add a removal reason"
						},
						addPostFlair: {
							en: "Add post flair"
						},
						admin: {
							en: "Admin"
						},
						approve: {
							en: "Approve"
						},
						approved: {
							en: "Approved"
						},
						showComment: {
							en: "Show comment"
						},
						approvedBy: {
							en: "Approved by %{username} at %{time}"
						},
						commentsLocked: {
							en: "Comments are locked"
						},
						confirmRemoval: {
							en: "Confirm removal"
						},
						editPostFlair: {
							en: "Edit post flair"
						},
						distinguishAsMod: {
							en: "Distinguish as Mod"
						},
						emptyQueueText: {
							en: "Kitteh is pleased"
						},
						emptyQueueTitle: {
							en: "The queue is clean!"
						},
						ignoreReports: {
							en: "Ignore Reports"
						},
						items: {
							en: "Items %{startNumItems}-%{endNumItems}"
						},
						loadingReports: {
							en: "Loading reports…"
						},
						lock: {
							en: "Lock"
						},
						lockComment: {
							en: "Lock comment"
						},
						lockComments: {
							en: "Lock comments"
						},
						markNSFW: {
							en: "Mark as NSFW"
						},
						markSpoiler: {
							en: "Mark as Spoiler"
						},
						moderatorOf: {
							en: "Moderator of %{displayText}"
						},
						modTools: {
							en: "Mod tools"
						},
						note: {
							en: "Note: "
						},
						numSelected: {
							en: "%{numSelected} selected"
						},
						pinnedPost: {
							en: "Pinned post"
						},
						reapprove: {
							en: "Reapprove"
						},
						reasonBy: {
							en: "Reason by u/%{username}: "
						},
						removalReason: {
							en: "Removal reason"
						},
						remove: {
							en: "Remove"
						},
						removeAsSpam: {
							en: "Remove as spam"
						},
						removed: {
							en: "Removed"
						},
						removedAsSpam: {
							en: "Removed as spam"
						},
						removedAsSpamBy: {
							en: "Removed as spam by %{username} at %{time}"
						},
						removedBy: {
							en: "Removed by %{username} at %{time}"
						},
						reports: {
							en: "Reports"
						},
						spam: {
							en: "Spam"
						},
						stickiedPost: {
							en: "Stickied post"
						},
						stickyPost: {
							en: "Sticky post"
						},
						unignoreReports: {
							en: "Unignore Reports"
						},
						unlock: {
							en: "Unlock"
						},
						unlockComment: {
							en: "Unlock comment"
						},
						unmarkNSFW: {
							en: "Unmark as NSFW"
						},
						unmarkSpoiler: {
							en: "Unmark as Spoiler"
						}
					},
					monthsToMinutes: {
						accountCompleteness: {
							collapse: {
								en: "Close"
							},
							collapsed: {
								title: {
									communities: {
										en: "and %{count} other communities"
									},
									from: {
										en: "from"
									},
									posts: {
										en: "%{count} new posts"
									}
								}
							},
							expand: {
								en: "Expand"
							},
							expanded: {
								title: {
									en: "%{count} new posts from communities we think you’ll love"
								}
							},
							newPostsForYou: {
								en: "new posts for you"
							},
							otherCommunitiesAdded: {
								en: "+ %{count} other communities added"
							},
							seeNewPosts: {
								en: "See new posts"
							},
							seePosts: {
								en: "See posts"
							}
						},
						subscribeCapToast: {
							title: {
								en: "Oops! You need to Sign Up to join more communities"
							},
							subTitle: {
								en: ""
							},
							content: {
								en: "Sign up to save your communities and secure your account"
							}
						},
						subscribeProfileFailToast: {
							en: "Oops! You need to sign up to follow other users."
						},
						tooltips: {
							disabled: {
								en: "Check out more posts to unlock your home."
							},
							unlock: {
								cancel: {
									en: "Maybe later"
								},
								description: {
									en: "We've added communities and posts to your home that we think you'll love."
								},
								subTitle: {
									en: "%{count} New Posts in Your Home"
								},
								success: {
									en: "See posts"
								},
								title: {
									en: "Your Home's unlocked"
								}
							}
						}
					},
					multireddit: {
						empty: {
							en: "There are 0 communities in this multi"
						},
						emptySubreddits: {
							en: "There are no posts in this multi"
						},
						info: {
							category: {
								en: "category"
							},
							multi: {
								en: "multi"
							},
							readMore: {
								en: "Read more"
							},
							seeMore: {
								en: "See more"
							},
							title: {
								en: "Curated by u/%{username} · %{timeAgo}"
							}
						},
						sidebar: {
							details: {
								en: "Multi details"
							}
						},
						title: {
							en: "%{displayText} subreddits curated by u/%{username}"
						},
						visibility: {
							hidden: {
								en: "Hidden"
							},
							private: {
								en: "Private"
							}
						}
					},
					over18: {
						over18: {
							en: "over 18?"
						},
						title: {
							en: "You must be 18+ to view this page"
						},
						description: {
							en: "You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?"
						},
						no: {
							en: "No Thank You"
						},
						continue: {
							en: "Continue"
						}
					},
					overlay: {
						close: {
							en: "Close"
						}
					},
					polls: {
						addOption: {
							en: "add option"
						},
						cannotFind: {
							en: "Error: Could not load poll"
						},
						closed: {
							en: "Voting closed %{timeAgo}"
						},
						createPageButton: {
							en: "Poll"
						},
						decisionThreshold: {
							en: "Decision Threshold: %{amount}"
						},
						decisionThresholdAchieved: {
							en: "Achieved Decision Threshold"
						},
						decisionThresholdExplanation: {
							en: "Governance Polls are auto-enacted when one option reaches the Decision Threshold. The Decision Threshold is based on the number %{tokenName} that voted previously."
						},
						decisionThresholdTitle: {
							en: "Decision Threshold"
						},
						error: {
							en: "Something went wrong. Please try again later."
						},
						gov: {
							en: "governance"
						},
						govToggle: {
							en: "Governance Poll"
						},
						helpTitle: {
							en: "Tips on Better Polls"
						},
						help1: {
							en: "Suggest short clear options"
						},
						help2: {
							en: "The more options, the better"
						},
						help3: {
							en: "Choose the poll duration"
						},
						help4: {
							en: "Options can't be edited after post creation"
						},
						locked: {
							en: "Locked"
						},
						loggedOutText: {
							en: "You must be logged in to vote"
						},
						noVotesOpen: {
							en: "No one voted yet,"
						},
						noVotesClosed: {
							en: "No one voted,"
						},
						optionPlaceholder: {
							en: "option"
						},
						optInButton: {
							en: "enable"
						},
						optInSuccess: {
							en: "You have opted into receiving %{tokenName}"
						},
						optOutAddendum: {
							en: "If you would like to only opt-out of receiving messages about %{tokenName}, please fill out "
						},
						optOutBullet1: {
							en: "You will no longer receive %{tokenName} in %{subredditName}."
						},
						optOutBullet2: {
							en: "Your username will no longer appear in the Distribution Lists each week."
						},
						optOutBullet3: {
							en: "You will keep the %{tokenName} you already have."
						},
						optOutCancel: {
							en: "cancel"
						},
						optOutExplanation: {
							en: "%{tokenName} reward moderators, posters, and commenters for their contributions to the subreddit. They are distributed weekly and used to weight your vote on polls. By opting-out, you agree that:"
						},
						optOutForm: {
							en: "this form."
						},
						optOutModalTitle: {
							en: "Opt-out of receiving %{tokenName}"
						},
						optOutSubmit: {
							en: "opt-out"
						},
						optOutSuccess: {
							en: "You have successfully opted out of receiving %{tokenName}"
						},
						poll: {
							en: "Poll"
						},
						proposalMetaText: {
							en: "Vote with your %{votes} meta tokens to drive the community. Get newly released tokens every week. Contribute more to increase your voting power."
						},
						seeVote: {
							en: "View Poll"
						},
						title: {
							en: "add poll"
						},
						viewPollTitle: {
							en: "Polls"
						},
						votingBreakdown: {
							en: "%{count} %{tokenName} (%{percent}% of all %{tokenName})"
						},
						voteCTA: {
							en: "vote"
						},
						votingDaysSingular: {
							en: "day"
						},
						votingDaysPlural: {
							en: "days"
						},
						votingLength: {
							en: "Voting length:"
						},
						votingMetaVotes: {
							en: "%{votes} votes"
						}
					},
					posts: {
						addToCollection: {
							en: "Add to collection"
						},
						at: {
							en: "at"
						},
						actionConfirm: {
							en: "are you sure?"
						},
						admin: {
							en: "admin"
						},
						announcement: {
							en: "announcement",
							remove: {
								en: "remove announcement"
							},
							make: {
								en: "make announcement"
							}
						},
						approve: {
							en: "approve"
						},
						approved: {
							en: "approved",
							message: {
								en: "approved by %{approvedBy} at %{approvalDate}"
							}
						},
						archived: {
							en: "Archived"
						},
						by: {
							en: "by"
						},
						cancel: {
							en: "cancel"
						},
						confirmNavigation: {
							en: "You have a post edit in progress, are you sure you want to discard it?"
						},
						couldNotPinPost: {
							en: "Could not pin post"
						},
						couldNotPinPostRemovedPost: {
							en: "You can't pin a removed post"
						},
						couldNotUnpinPost: {
							en: "Could not unpin post"
						},
						clear: {
							en: "Clear"
						},
						comment: {
							verb: {
								en: "comment"
							}
						},
						commentedOnAPost: {
							en: "commented on a post in "
						},
						commentedOn: {
							en: " commented on "
						},
						confirmDelete: {
							action: {
								en: "delete post"
							},
							header: {
								en: "Delete post?"
							},
							text: {
								en: "Are you sure you want to delete your post? You can't undo this."
							}
						},
						copyLink: {
							en: "Copy link"
						},
						copyLinkSuccess: {
							en: "Copied link!"
						},
						crosspost: {
							en: "crosspost"
						},
						crosspostedByFrom: {
							en: "Crossposted by %{by} from %{from}"
						},
						delete: {
							en: "delete"
						},
						deleteSuccess: {
							en: "Post deleted successfully."
						},
						distinguish: {
							en: "distinguish"
						},
						distinguishAsAdmin: {
							en: "Distinguish as admin"
						},
						downvote: {
							en: "downvote"
						},
						editPost: {
							en: "Edit post"
						},
						editFlair: {
							en: "Edit flair"
						},
						embed: {
							en: "Embed"
						},
						event: {
							en: "Event",
							followFailed: {
								en: "Oops, something went wrong. Try again."
							},
							inProgress: {
								en: "Now"
							},
							successfullyFollowed: {
								en: "Success! You followed this event, that means we’ll remind you when it starts!"
							},
							successfullyUnfollowed: {
								en: "Event unfollowed"
							},
							today: {
								en: "Today"
							}
						},
						expando: {
							en: "Expand content"
						},
						expandoLink: {
							en: "Open external content"
						},
						expandoLightbox: {
							en: "View content"
						},
						from: {
							en: "from"
						},
						gild: {
							gilded: {
								en: "a redditor has gifted reddit gold to %{profileName} for this submission."
							},
							gildedPlural: {
								en: "redditors have gifted %{gildedCount} months of reddit gold to %{profileName} for this submission."
							},
							you: {
								en: "you"
							}
						},
						help: {
							en: "help"
						},
						hidden: {
							en: "hidden"
						},
						hiddenScore: {
							en: "[score hidden]"
						},
						hiddenSuccess: {
							en: "Post hidden successfully."
						},
						hiddenUndo: {
							en: "Undo"
						},
						hide: {
							en: "hide"
						},
						ignoredReports: {
							en: "ignored reports"
						},
						ignoreReports: {
							en: "ignore reports"
						},
						link: {
							en: "Link:"
						},
						lock: {
							en: "lock"
						},
						lockedNote: {
							en: "This post is locked. You won't be able to comment."
						},
						markAsNSFW: {
							en: "Mark as NSFW"
						},
						markAsSpoiler: {
							en: "Mark as Spoiler"
						},
						moderatorOf: {
							en: "moderator of"
						},
						moderatorSelected: {
							en: "selected by this subreddits moderators"
						},
						moreOptions: {
							en: "more options"
						},
						nextPost: {
							en: "next post"
						},
						no: {
							en: "no"
						},
						noComments: {
							en: "no comments"
						},
						nsfw: {
							flair: {
								en: "NSFW"
							}
						},
						nsfwTitle: {
							en: "Adult content: Not Safe For Work"
						},
						numComments: {
							en: "%{numComments} Comments"
						},
						oldReports: {
							en: "old reports"
						},
						percentUpvoted: {
							en: "%{percentUpvoted}% Upvoted"
						},
						pinnedPost: {
							en: "pinned post",
							pin: {
								en: "Pin to top of profile"
							},
							unpin: {
								en: "Unpin from top of profile"
							}
						},
						pinPost: {
							en: "Pin Post to Profile"
						},
						postedBy: {
							en: "posted by"
						},
						postedTimeAgoBy: {
							en: "Posted %{timeAgo} by"
						},
						postedOnDateBy: {
							en: "Posted on %{date} by"
						},
						postPinned: {
							en: "Post pinned to profile!"
						},
						postPinnedUndo: {
							en: "UNDO"
						},
						postUnpinned: {
							en: "Post unpinned."
						},
						postUnpinnedReloadPage: {
							en: "Post unpinned, reload to see changes"
						},
						postUnpinnedUndo: {
							en: "UNDO"
						},
						promoted: {
							en: "promoted"
						},
						promotedBy: {
							en: "promoted by"
						},
						promotedTitle: {
							en: "Promoted: content promoted by our advertisers"
						},
						reapprove: {
							en: "reapprove"
						},
						redditAdmin: {
							en: "reddit admin"
						},
						remove: {
							en: "remove"
						},
						removed: {
							by: {
								en: "removed by %{bannedBy} (%{removeType})"
							},
							text: {
								en: "removed"
							},
							notSpam: {
								en: "removed not spam"
							},
							spam: {
								en: "removed as spam"
							}
						},
						report: {
							en: "report"
						},
						reports: {
							numReports: {
								en: "reports: %{numReports}"
							},
							title: {
								main: {
									en: "reports"
								},
								moderator: {
									en: "Moderator Reports"
								},
								user: {
									en: "User Reports"
								}
							}
						},
						reported: {
							en: "reported"
						},
						reportReassurance: {
							en: "Reports go to community moderators anonymously"
						},
						restoreReports: {
							en: "Restore Reports"
						},
						save: {
							en: "save"
						},
						savedSuccess: {
							en: "Post saved successfully"
						},
						savedUndo: {
							en: "Undo"
						},
						seeAllComments: {
							en: "See all comments from"
						},
						loadMoreComments: {
							en: "Load more comments"
						},
						share: {
							en: "share"
						},
						somethingWentWrongWhileLoading: {
							en: "Something went wrong while loading."
						},
						spammed: {
							en: "spammed"
						},
						spam: {
							en: "spam"
						},
						speakingOfficially: {
							redditAdmin: {
								en: "reddit admin, speaking officially"
							},
							subredditModerator: {
								en: "moderator of %{subreddit}, speaking officially"
							}
						},
						spoiler: {
							en: "spoiler"
						},
						spoilerRevealTooltip: {
							en: "Reveal spoiler"
						},
						sponsored: {
							en: "advertisement"
						},
						submitted: {
							en: "submitted %{timeAgo}"
						},
						submittedBy: {
							en: "submitted by"
						},
						to: {
							en: "to"
						},
						toggleSendReplies: {
							en: "Send me reply notifications"
						},
						tryAgain: {
							en: "Try again"
						},
						undistinguish: {
							en: "undistinguish"
						},
						unhide: {
							en: "unhide"
						},
						unhiddenSuccess: {
							en: "Post unhidden successfully."
						},
						unignoreReports: {
							en: "unignore reports"
						},
						unlock: {
							en: "unlock"
						},
						unNsfw: {
							en: "un-nsfw"
						},
						unpinPost: {
							en: "Unpin Post from Profile"
						},
						unsave: {
							en: "unsave"
						},
						unsavedSuccess: {
							en: "Post unsaved successfully"
						},
						unspoiler: {
							en: "unspoiler"
						},
						upvote: {
							en: "upvote"
						},
						upvoted: {
							en: "upvoted"
						},
						views: {
							en: "views"
						},
						yes: {
							en: "yes"
						},
						similarPosts: {
							en: "Mildly similar posts"
						}
					},
					postCreation: {
						apply: {
							en: "Apply"
						},
						cancel: {
							en: "Cancel"
						},
						create: {
							en: "Create"
						},
						editing: {
							success: {
								en: "Post successfully edited"
							}
						},
						select: {
							en: "Select"
						},
						save: {
							en: "Save"
						},
						upload: {
							en: "Upload"
						},
						remove: {
							en: "Remove"
						},
						delete: {
							en: "Delete"
						},
						retry: {
							en: "Retry"
						},
						keep: {
							en: "Keep"
						},
						tryAgain: {
							en: "Try Again"
						},
						addPost: {
							en: "Add post"
						},
						createAPost: {
							en: "Create a post"
						},
						createACrossPost: {
							en: "Create a crosspost"
						},
						editDraft: {
							en: "Edit draft"
						},
						createPost: {
							en: "Create Post"
						},
						contentPolicy: {
							en: "content policy"
						},
						discard: {
							button: {
								en: "Discard"
							},
							richTextFormatting: {
								title: {
									en: "Switch to Markdown"
								},
								body: {
									en: "Switching to markdown will remove any images, gifs or videos from your post."
								}
							}
						},
						draft: {
							entryButtonLabel: {
								en: "Drafts"
							},
							draftListTitle: {
								en: "Drafts"
							},
							draftSavedTime: {
								en: "Draft saved %{time}"
							},
							saved: {
								en: "Saved!"
							},
							confirmDelete: {
								en: "Confirm"
							},
							confirmDeleteCurrentDraft: {
								en: "Delete working draft?"
							},
							saveDraft: {
								en: "Save draft"
							},
							updated: {
								en: "Updated!"
							},
							updateDraft: {
								en: "Update draft"
							},
							draftListEmptyText: {
								en: "Your drafts will live here"
							},
							untitled: {
								en: "Untitled"
							},
							editing: {
								en: "EDITING:"
							}
						},
						collections: {
							entryButtonLabel: {
								en: "Collections"
							},
							collectionsListEmptyText: {
								en: "Your collections will live here"
							},
							noCollectionMatchingFilter: {
								en: "No collection matching filter"
							},
							createCollection: {
								en: "Create a collection"
							},
							collectionsListTitle: {
								en: "My collections"
							},
							creationTime: {
								en: "created %{time}"
							},
							filterPlaceholder: {
								en: "Find a collection"
							},
							createModal: {
								details: {
									en: "Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!"
								},
								editTitle: {
									en: "Edit title"
								},
								giveATitle: {
									en: "Give a title for your collection"
								},
								titlePlaceholderText: {
									en: "Enter title"
								}
							},
							addToCollection: {
								en: "Add to collection"
							},
							resetCollection: {
								en: "Cancel adding to collection"
							}
						},
						schedulePicker: {
							title: {
								en: "When is the event?"
							},
							startTimeLabel: {
								en: "Start time"
							},
							endTimeLabel: {
								en: "End time (optional)"
							},
							to: {
								en: "to"
							},
							timezoneLabel: {
								en: "Time zone"
							},
							submitOptionsTitle: {
								en: "When do you want to submit this post?"
							},
							submitNowOptionLabel: {
								en: "Submit post now"
							},
							submitNowOptionDetails: {
								en: "Submitting post before your event allows people to follow your event and come back at the event time"
							},
							submitAtTime: {
								en: "Submit post at %{time}"
							},
							submitAtTimeScheduleTime: {
								en: "Submit post at scheduled event time"
							},
							submitAtTimeOptionDetails: {
								en: "This post will be visible to only Mods and editable until the event time."
							},
							startTimeMustBeInFutureError: {
								en: "Event start time needs to be in the future"
							},
							endTimeMustBeAfterStartTimeError: {
								en: "End time must be after start time"
							},
							enterValidTimeError: {
								en: "Please enter valid start and end time"
							}
						},
						prompt: {
							loadDraft: {
								body: {
									en: "Loading this draft will discard your current post."
								},
								confirm: {
									en: "Load draft"
								},
								title: {
									en: "Load draft"
								}
							},
							maxDrafts: {
								body: {
									en: "Looks like you’ve hit your max number of drafts. Please delete one to make room."
								},
								confirm: {
									en: "Manage drafts"
								},
								title: {
									en: "Save draft"
								}
							},
							draftsLimitations: {
								body: {
									mediaOnly: {
										en: "Saving this draft will not save media, all other information will be saved"
									},
									scheduleOnly: {
										en: "Saving this draft will not save the applied event schedule, all other information will be saved"
									},
									mediaAndSchedule: {
										en: "Saving this draft will not save media and the applied event schedule, all other information will be saved"
									}
								},
								confirm: {
									en: "Save"
								},
								title: {
									en: "Save draft"
								}
							},
							switchToRTE: {
								body: {
									en: "Switching to Fancy Pants Editor may result in a loss of content"
								},
								confirm: {
									en: "Switch"
								},
								title: {
									en: "Switch to Fancy Pants Editor"
								}
							}
						},
						leaveMarkdownMode: {
							en: "Are you sure that you want to leave markdown mode?"
						},
						imageRemovePromptTitle: {
							en: "Remove image?"
						},
						videoRemovePromptTitle: {
							en: "Remove video?"
						},
						subredditChange: {
							imageRemovePrompt: {
								details: {
									en: "\n          Aw crap, r/%{subredditName} doesn't allow images. If you change to\n          r/%{subredditName} your image will be removed.\n        "
								},
								buttons: {
									confirm: {
										en: "Change and remove image"
									},
									cancel: {
										en: "Keep image"
									}
								}
							},
							videoRemovePrompt: {
								mediaNotAllowed: {
									en: "\n          Aw crap, r/%{subredditName} doesn't allow videos. If you change to\n          r/%{subredditName} your video will be removed.\n        "
								},
								tooLongVideoGif: {
									en: "\n          Aw crap, r/%{subredditName} doesn't allow videos.\n          Please upload a video less than 60 seconds to convert to animated GIF.\n          If you change to r/%{subredditName} your video will be removed.\n        "
								},
								buttons: {
									confirm: {
										en: "Change and remove video"
									},
									cancel: {
										en: "Keep video"
									}
								}
							}
						},
						giveATitle: {
							en: "Title"
						},
						linkPostTab: {
							en: "Link"
						},
						markdown: {
							en: "Markdown"
						},
						mediaPostTab: {
							en: "Image & Video"
						},
						mediaPostTabDisabledTooltip: {
							en: "Images and videos are not\n allowed in r/%{subredditName}"
						},
						imagePostTab: {
							en: "Image"
						},
						videoPostTab: {
							en: "Video"
						},
						modifiers: {
							educationalTooltips: {
								event: {
									calendarIconExplanation: {
										en: "Schedule when the event is happening."
									},
									createIconExplanation: {
										en: "Compose a post like normal."
									},
									description: {
										en: "Let your community know about discussion threads, AMA’s or even a game thread."
									},
									liveIconExplanation: {
										en: "Remind your community when its live."
									},
									title: {
										en: "Make an Event"
									}
								},
								collection: {
									collectionIconExplanation: {
										en: "Create & name your collection."
									},
									createIconExplanation: {
										en: "Compose a post like normal."
									},
									description: {
										en: "Create a series of scheduled events or just group random things. Make something awesome."
									},
									plusIconExplanation: {
										en: "Add more posts to your collection."
									},
									title: {
										en: "Create Collections!"
									}
								},
								gotItButtonText: {
									en: "Got it"
								}
							}
						},
						pasteUrlHere: {
							en: "Url"
						},
						post: {
							en: "Post"
						},
						postTab: {
							en: "Post"
						},
						pleaseBeMindful: {
							en: "Please be mindful of reddit's"
						},
						postConnectAccounts: {
							en: "Connect accounts to share your post"
						},
						postConnectAccountsTooltip: {
							en: "Connect a Twitter account in your User Settings.\nWith a connected account you can choose to share new posts you make directly to Twitter."
						},
						postToTwitter: {
							en: "Share this post on Twitter"
						},
						practiceReddiquette: {
							en: "and practice good"
						},
						recaptchaRequired: {
							en: "Ok, one more thing ... you're human, right?"
						},
						reddiquette: {
							en: "reddiquette"
						},
						rulesBeforePosting: {
							en: "Each community is unique, be sure to read the rules before posting"
						},
						rtfPlaceholderOptional: {
							en: "Text (optional)"
						},
						rtfPlaceholderRequired: {
							en: "Text (required)"
						},
						sendReplies: {
							en: "Send me post reply notifications"
						},
						shareDraft: {
							en: "Enable public draft link"
						},
						shareDraftTooltip: {
							en: "This option will create a link to a preview of this draft.\nAnyone with this link will be able to see this draft.\nYou can disable this link at any time."
						},
						sourcePostNotFound: {
							en: "The original post cannot be found"
						},
						sourcePostNotCrosspostable: {
							en: "The original post cannot be crossposted"
						},
						quickTip: {
							en: "Quick tip:"
						},
						textNames: {
							normal: {
								en: "Normal"
							},
							h1: {
								en: "Heading"
							},
							h2: {
								en: "Heading 2"
							},
							h3: {
								en: "Heading 3"
							},
							h4: {
								en: "Heading 4"
							},
							h5: {
								en: "Heading 5"
							},
							h6: {
								en: "Heading 6"
							}
						},
						linkDetailsPopup: {
							changeButton: {
								en: "Change"
							},
							removeButton: {
								en: "Remove"
							}
						},
						linkEditorPopup: {
							insertButton: {
								en: "Insert"
							},
							applyButton: {
								en: "Apply"
							},
							textLabel: {
								en: "Text"
							},
							linkLabel: {
								en: "Link"
							},
							textInputPlaceholder: {
								en: "Title of link (optional)"
							},
							linkInputPlaceholder: {
								en: "Paste or type a link"
							},
							invalidLinkHint: {
								en: "Link doesn't look right"
							}
						},
						toolbar: {
							heading: {
								en: "Heading"
							},
							bold: {
								en: "Bold"
							},
							italics: {
								en: "Italics"
							},
							markdownMode: {
								en: "Markdown mode"
							},
							underline: {
								en: "Underline"
							},
							spoiler: {
								en: "Spoiler"
							},
							strikethrough: {
								en: "Strikethrough"
							},
							switchToMarkdown: {
								en: "Switch to markdown"
							},
							monospace: {
								en: "Inline Code"
							},
							superscript: {
								en: "Superscript"
							},
							subscript: {
								en: "Subscript"
							},
							unorderedList: {
								en: "Bulleted List"
							},
							orderedList: {
								en: "Numbered List"
							},
							blockQuote: {
								en: "Quote Block"
							},
							codeBlock: {
								en: "Code Block"
							},
							link: {
								en: "Link"
							},
							table: {
								en: "Table"
							},
							image: {
								en: "Add an image"
							},
							video: {
								en: "Add a video"
							}
						},
						tableToolbar: {
							alignLeft: {
								en: "Left align"
							},
							alignCenter: {
								en: "Center align"
							},
							alignRight: {
								en: "Right align"
							},
							insertColumnBefore: {
								en: "Insert column before"
							},
							insertColumnAfter: {
								en: "Insert column after"
							},
							deleteColumn: {
								en: "Delete column"
							},
							insertRowAbove: {
								en: "Insert row above"
							},
							insertRowBelow: {
								en: "Insert row below"
							},
							deleteRow: {
								en: "Delete row"
							},
							deleteTable: {
								en: "Delete table"
							}
						},
						crosspostInput: {
							anyAreNotAllowed: {
								en: "This community does not allow for crossposting of any posts"
							},
							checkingCommunity: {
								en: "Checking community..."
							},
							destinationRequired: {
								en: "A destination community is required to crosspost"
							},
							imagesAreNotAllowed: {
								en: "This community does not allow for crossposting of image posts"
							},
							linksAreNotAllowed: {
								en: "This community does not allow for crossposting of link posts"
							},
							selfpostsAreNotAllowed: {
								en: "This community does not allow for crossposting of text posts"
							},
							sourcePostIdRequired: {
								en: "A source post is required to crosspost"
							},
							videosAreNotAllowed: {
								en: "This community does not allow for crossposting of video posts"
							},
							within24HoursAreNotAllowed: {
								en: "This community has the same crosspost within last 24 hours"
							}
						},
						mediaInput: {
							dropHereToUpload: {
								en: "Drop Here to Upload"
							},
							dragAndDropOr: {
								en: "Drag and drop or"
							},
							chooseThumbnail: {
								en: "Choose thumbnail"
							},
							makeGif: {
								fixedToOffReason: {
									en: "Video cannot be converted to GIF because r/%{subredditName} is a video only subreddit"
								},
								fixedToOnReason: {
									en: "Video auto converted to GIF because r/%{subredditName} is an image only subreddit"
								}
							},
							imageRemovePrompt: {
								en: "Are you sure you want to remove your image?"
							},
							videoRemovePrompt: {
								en: "Are you sure you want to remove your video?"
							},
							videoTooLongForImageOnlySubreddit: {
								en: "Sorry, r/%{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF."
							},
							videoTooLongInGeneral: {
								en: "Video is too long. Maximum video length is 15 minutes."
							},
							mediaAreNotAllowed: {
								en: "Videos and images are not allowed in r/%{subredditName}"
							},
							imagesAreNotAllowed: {
								en: "Images are not allowed in r/%{subredditName}"
							},
							videosAreNotAllowed: {
								en: "Videos are not allowed in r/%{subredditName}"
							},
							imagesLimitExceeded: {
								en: "Post may not contain more that 20 images"
							},
							videosLimitExceeded: {
								en: "Post may not contain more that 5 videos"
							}
						},
						pleaseFixRequirements: {
							en: "Please fix the above requirements"
						},
						requirement: {
							en: "requirement"
						},
						rule: {
							en: "rule"
						},
						uploadStatus: {
							uploading: {
								en: "Uploading"
							},
							success: {
								en: "Success!"
							},
							uploadFailed: {
								en: "Upload failed"
							},
							uploadCanceled: {
								en: "Upload was canceled"
							}
						},
						urlInput: {
							scrapingDisclamer: {
								en: "Posting this link saves the image or gif to Reddit"
							}
						},
						processingVideo: {
							en: "Processing video..."
						},
						processingImage: {
							en: "Processing image..."
						},
						willAutomaticallyPostAt: {
							en: "Will automatically post at"
						},
						editorModeModeHintToast: {
							makeMarkdownDefault: {
								en: "You can set Markdown as the default editor mode in the settings"
							},
							makeRTEDefault: {
								en: "You can set Fancy Pants as the default editor mode in the settings"
							},
							button: {
								en: "Open Settings"
							}
						},
						modBanner: {
							title: {
								en: "Create the ideal %{displayText} post"
							},
							button: {
								en: "Create Post"
							},
							dismissed: {
								en: "Dismissed"
							}
						}
					},
					postDraft: {
						draftSavedTime: {
							en: "Draft last updated by u/%{username} %{time}"
						},
						reviewDraft: {
							en: "Review draft"
						},
						previewStatement: {
							previewTitle: {
								en: "This is a preview of a post"
							},
							previewBody: {
								en: "You are viewing a draft shared by another person. It has not yet been posted to Reddit. See something concerning? "
							},
							reportDraft: {
								en: "Report this draft"
							}
						}
					},
					postingReddiquette: {
						title: {
							en: "Posting to Reddit"
						},
						crosspostTitle: {
							en: "Crossposting to Reddit"
						},
						rememberTheHuman: {
							en: "Remember the human"
						},
						behaveLikeYouWouldInReal: {
							en: "Behave like you would in real life"
						},
						lookForOriginalSource: {
							en: "Look for the original source of content"
						},
						searchForDuplicates: {
							en: "Search for duplicates before posting"
						},
						readCommunityRules: {
							en: "Read the community’s rules"
						},
						mustBeSubscribedToCrosspost: {
							en: "You must join a community to crosspost there"
						}
					},
					postRequirements: {
						bodyLength: {
							label: {
								en: "Length"
							},
							subtext: {
								en: "Set a minimum or maximum text body length (empty is no restriction)"
							}
						},
						postFlair: {
							label: {
								en: "Post Flair"
							},
							subtext: {
								en: "Require a flair to be set"
							},
							disabledSubtext: {
								en: "Users must be able to edit post flair to enforce"
							}
						},
						postingGuidelines: {
							label: {
								en: "Posting guidelines"
							},
							subtext: {
								en: 'Give a quick sentence or two on how to successfully post in your community. Try not to just put "read the rules." Instead, give them a positive guideline on what they can do correctly. This field supports plain text.'
							}
						},
						regexRequirements: {
							label: {
								en: "Advanced: RegEx requirements"
							}
						},
						repostFrequency: {
							label: {
								en: "Repost frequency"
							},
							subtext: {
								en: "Prevent users from posting a link that was already posted to your community within x days of the original"
							}
						},
						requireOneWord: {
							label: {
								en: "Require at least one word"
							},
							subtext: {
								en: "Require at least one of these words in the title (up to 15 strings of 40 characters each)"
							}
						},
						textPostBody: {
							label: {
								en: "Text post body"
							},
							subtext: {
								en: "Restrict how the body of a text post is used"
							}
						},
						titleLength: {
							label: {
								en: "Length"
							},
							subtext: {
								en: "Set a minimum and/or maximum title length (empty is no restriction)"
							}
						}
					},
					profile: u,
					profileBetaConfirmation: {
						title: {
							en: "Profile Pages"
						},
						beta: {
							en: "beta"
						},
						newProfile: {
							en: "New profile view"
						},
						newProfileDescriptionStart: {
							en: "A new, cleaner way for other users to see your profile. "
						},
						newProfileDescriptionKn0thing: {
							en: "Check out u/kn0thing’s profile"
						},
						newProfileDescriptionEnd: {
							en: " to see this in action!"
						},
						postProfile: {
							en: "Post to profile"
						},
						postProfileDescription: {
							en: "You can now make posts directly to your profile"
						},
						activeCommunities: {
							en: "Active in communities"
						},
						activeCommunitiesDescription: {
							en: "Let other users know what your favorite communities are based on karma. (Don’t worry, we filter out NSFW communities)"
						},
						agree: {
							en: "Give me the new Profile"
						},
						prosCons: {
							en: "Awesome, so what can and can’t we do?"
						},
						prosList: {
							item1: {
								en: "Make posts directly to your profile page"
							},
							item2: {
								en: "Allow users to follow the posts you make to your profile"
							},
							item3: {
								en: "Add your own avatar and banner image"
							},
							item4: {
								en: "Auto-expanded content layout to showcase your work"
							}
						},
						consList: {
							item1: {
								en: "Custom snoovatars, Reddit Gold themes, Reddit Enhancement Suite, and other 3rd-party plugins"
							}
						},
						confirmationStart: {
							en: "I understand that opting into the beta is "
						},
						confirmationEnd: {
							en: " to my profile page. I will follow the "
						},
						permanentChange: {
							en: "a permanent change"
						},
						redditWiki: {
							en: "Reddit moderation guidelines"
						},
						reject: {
							en: "Beta access is currently limited and your request to join the beta has been recorded. If you have any concerns or questions please reach us at "
						}
					},
					promoBanners: {
						welcome: {
							header: {
								en: "Welcome to Reddit!"
							},
							subHeader: {
								en: "Come for the cats, stay for the empathy."
							},
							button: {
								en: "Become a redditor"
							}
						},
						join: {
							header: {
								en: "Join the discussion"
							},
							subHeader: {
								en: "Comment and be a part of what the internet is talking about!"
							},
							button: {
								en: "Become a redditor"
							}
						},
						vote: {
							header: {
								en: "Make your voice heard"
							},
							subHeader: {
								en: "Vote and be a part of what the internet is talking about!"
							},
							button: {
								en: "Join the discussion"
							}
						},
						subreddit: {
							header: {
								en: "Join the %{subscribers} people in the %{subredditName} community"
							}
						},
						personalize: {
							header: {
								en: "Personalize your Reddit"
							},
							subHeader: {
								en: "Get updates from your favorite communities"
							},
							button: {
								en: "Get started"
							}
						},
						mobileXPromo: {
							header: {
								en: "Download the Reddit app!"
							},
							manage: {
								en: "Manage multiple accounts"
							},
							subscriptions: {
								en: "Communities on the go"
							},
							downloads: {
								en: "10m+ downloads"
							},
							rated: {
								en: "rated"
							},
							placeholder: {
								en: "Enter phone number"
							},
							countryCode: {
								en: "Please include country code"
							},
							button: {
								en: "Send text"
							},
							empty: {
								en: "Please enter a phone number"
							},
							error: {
								en: "Sorry! The number you used was not correct. Try using a different number."
							},
							success: {
								en: "Success! A download link has been sent to your mobile device."
							},
							qr: {
								en: "Or use your phone's\ncamera to scan code"
							},
							legal: {
								en: "Text message and data fees may apply.  You are agreeing to receive a text message with a\n      link to download the Reddit app.  Reddit will not send any further texts without your\n      permission."
							}
						},
						topBanner: {
							description: {
								en: "Browse the feed below and join or leave communities to make it your own"
							},
							title: {
								en: "Welcome to your starter home!"
							}
						}
					},
					reportFlow: {
						blockUser: {
							blockedUserHeader: {
								en: "%{username} is blocked"
							},
							description: {
								en: "You won't see posts or comments from %{username}. You can change this later in your preference."
							},
							header: {
								en: "Block %{username}"
							},
							pending: {
								en: "Pending..."
							},
							retry: {
								en: "Retry"
							}
						},
						buttons: {
							close: {
								en: "Close"
							},
							pending: {
								en: "Pending"
							},
							submit: {
								en: "Submit"
							}
						},
						contentPolicy: {
							and: {
								en: "and"
							},
							link: {
								en: "Reddit Content Policy"
							},
							readThe: {
								en: "Read the"
							},
							rules: {
								en: "rules."
							}
						},
						fileAComplaint: {
							description: {
								en: "If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:"
							}
						},
						finalPage: {
							description: {
								en: "We've received your report. Here are some things you can do:"
							},
							header: {
								en: "Thanks for letting us know!"
							}
						},
						redditRules: {
							custom: {
								en: "Custom response"
							}
						},
						redditRulesPicker: {
							giveSomeDetail: {
								en: "Give us some detail about your report"
							}
						},
						reportRequest: {
							retry: {
								en: "Retry"
							}
						},
						sectionHeaders: {
							spamAndAbuse: {
								en: "It's spam or abuse"
							}
						},
						selectARule: {
							en: "Select a rule"
						},
						title: {
							comment: {
								en: "Report comment"
							},
							post: {
								en: "Report post"
							},
							chatMessage: {
								en: "Report chat message"
							}
						}
					},
					reportPage: {
						contentPolicy: {
							en: "Reddit Content Policy"
						},
						fields: {
							subreddit: {
								header: {
									en: "You must be a moderator of the subreddit in which the evasion is taking place."
								}
							},
							username: {
								addButtonText: {
									en: "Add username"
								},
								banEvadingUsernamesHeader: {
									en: "List up ban-evading accounts, starting with the originally banned user."
								},
								header: {
									en: "Please provide related username%{plural} you want to report."
								}
							}
						},
						finalPage: {
							header: {
								en: "Thank you for your report."
							},
							text: {
								en: "We will investigate the content you reported and reach out if we have any additional questions."
							}
						},
						form: {
							header: {
								en: "How can we help?"
							},
							policyCheckboxText: {
								part1: {
									en: "I have read the "
								},
								part2: {
									en: " and the "
								},
								part3: {
									en: "."
								}
							},
							textAreaCounter: {
								en: "%{length}/%{maxLength}"
							}
						},
						header: {
							en: "Submit a report"
						},
						loading: {
							en: "Loading..."
						},
						regexInvalid: {
							en: "Please match the requested format."
						},
						selectARule: {
							en: "Select a rule"
						},
						submitButton: {
							pending: {
								en: "Pending"
							},
							submit: {
								en: "Submit"
							}
						}
					},
					search: {
						allRedditResults: {
							en: "All reddit results"
						},
						bestResults: {
							en: "Best results"
						},
						communities: {
							en: "Communities and users"
						},
						communitiesFrom: {
							en: "Communities From"
						},
						dropdown: {
							remove: {
								en: "Remove"
							},
							trendingToday: {
								en: "Trending today"
							}
						},
						globalName: {
							en: "Search Results"
						},
						name: {
							en: "Search"
						},
						noResults: {
							category: {
								en: "Sorry, there were no results for the category "
							},
							communities: {
								en: "Sorry, there were no community results for"
							},
							general: {
								en: "Sorry, there were no results for"
							},
							posts: {
								en: "Sorry, there were no post results for"
							}
						},
						posts: {
							en: "Posts"
						},
						postsFrom: {
							en: "Posts From"
						},
						restrictToSubreddit: {
							en: "Subreddit Results"
						},
						resultsInSubreddit: {
							en: "Search results in "
						},
						resultsIn: {
							en: "Search results in %{displayText}"
						},
						searchResults: {
							en: "Search results"
						},
						seeMorePosts: {
							en: "See More Posts"
						},
						showNsfw: {
							en: "Show NSFW"
						},
						sortBy: {
							en: "Sort By"
						},
						sorts: {
							comments: {
								en: "Comments"
							},
							hot: {
								en: "Hot"
							},
							new: {
								en: "New"
							},
							relevance: {
								en: "Relevance"
							},
							top: {
								en: "Top"
							}
						},
						subredditMetaData: {
							andMore: {
								en: "%{displayText} and more"
							},
							andMoreCommunitiesTalkingAboutThis: {
								en: "Topic • %{displayText} and %{subredditOccurrences} more communities talking about this"
							}
						},
						topic: {
							en: "Topic"
						},
						times: {
							all: {
								en: "All Time"
							},
							day: {
								en: "Past 24 Hours"
							},
							hour: {
								en: "Past Hour"
							},
							month: {
								en: "Past Month"
							},
							week: {
								en: "Past Week"
							},
							year: {
								en: "Past Year"
							}
						},
						title: {
							en: "reddit.com: search results - %{query}"
						},
						toast: {
							error: {
								en: "Sorry, we couldn't load search results."
							},
							moreResultsError: {
								en: "Sorry, we couldn't load more search results."
							},
							retryButton: {
								en: "Retry"
							}
						},
						top: {
							en: "Top results"
						},
						viewMore: {
							en: "View more"
						}
					},
					session: {
						title: {
							register: {
								en: "create a new account"
							},
							login: {
								en: "log in"
							},
							tfaLoginAppCode: {
								en: "Enter the 6 Digit Code From Your Authenticator App"
							},
							tfaLoginBackupCode: {
								en: "Enter the 6 Digit Backup Code"
							}
						},
						login: {
							username: {
								en: "username"
							},
							submit: {
								en: "log in"
							},
							reset: {
								en: "reset password"
							}
						},
						register: {
							username: {
								en: "choose a username"
							},
							passwordRepeat: {
								en: "verify password"
							},
							email: {
								en: "email"
							},
							submit: {
								en: "sign up"
							}
						},
						signin: {
							en: "sign in"
						},
						tfa: {
							code: {
								en: "6-digit code..."
							},
							submit: {
								en: "check code"
							},
							desc: {
								en: "You have two-factor authentication enabled on this account because you're awesome"
							}
						},
						both: {
							password: {
								en: "password"
							}
						},
						tfaLink: {
							toBackupCode: {
								en: "Or use a backup code"
							},
							toAppCode: {
								en: "Or use a code from an authenticator app"
							},
							havingTrouble: {
								en: "Having trouble?"
							}
						},
						toast: {
							success: {
								en: "Successfully logged in!"
							}
						},
						invalid: {
							en: "Sorry, we have failed you. Try refreshing!"
						},
						comment: {
							en: "What are your thoughts? Log in or Sign up"
						}
					},
					settings: m,
					shortcuts: {
						actionsTitle: {
							en: "Action"
						},
						downvote: {
							en: "Downvote"
						},
						expandComment: {
							en: "Collapse/expand comment"
						},
						hide: {
							en: "Hide"
						},
						navigationTitle: {
							en: "Navigation"
						},
						nextLightbox: {
							en: "Next post in lightbox"
						},
						newPost: {
							en: "New post"
						},
						nextPost: {
							en: "Next post or comment"
						},
						openExpando: {
							en: "Open/close expando"
						},
						openNavigation: {
							en: "Open navigation"
						},
						openPost: {
							en: "Open post"
						},
						previousLightbox: {
							en: "Previous post in lightbox"
						},
						previousPost: {
							en: "Previous post or comment"
						},
						postLink: {
							en: "Go to post link"
						},
						replyToComment: {
							en: "Reply to comment"
						},
						save: {
							en: "Save"
						},
						showShortcuts: {
							en: "Show shortcuts"
						},
						submitComment: {
							en: "Submit comment/post"
						},
						upvote: {
							en: "Upvote"
						}
					},
					sidebar: {
						categoryTag: {
							discoverMore: {
								en: "Discover more in:"
							}
						},
						create: {
							account: {
								en: "Create an account"
							},
							community: {
								en: "create your own community"
							},
							link: {
								en: "link or image"
							},
							text: {
								en: "text post"
							},
							title: {
								en: "create a new post"
							}
						},
						communityTools: {
							title: {
								en: "Community Tools"
							},
							communityConfiguration: {
								en: "Community Configuration"
							},
							moderationQueue: {
								en: "Moderation Queue"
							},
							banUsers: {
								en: "Ban Users"
							},
							viewAll: {
								en: "View All Community Tools"
							}
						},
						following: {
							title: {
								en: "Following"
							},
							viewAll: {
								en: "View All"
							}
						},
						gov: {
							latestPollsTitle: {
								en: "Latest Polls"
							},
							leaderboard: {
								en: "leaderboard"
							},
							noRelease: {
								en: "There are currently no new distributions scheduled."
							},
							optOutMessages: {
								en: "Unsubscribe from Receiving Messages"
							},
							ownershipTitle: {
								en: "Subreddit Points"
							},
							showAll: {
								en: "show all"
							},
							tokensIssued: {
								en: "Total"
							},
							tokensNew: {
								en: "New %{tokenName}"
							},
							tokensReleasing: {
								en: "Releasing in %{date}"
							},
							tokenExplanation: {
								en: "%{tokenName} reward moderators, posters, and commenters for their contributions to the subreddit. They are distributed weekly and used to weight your vote on polls."
							},
							yourTokens: {
								en: "Your %{tokenName}"
							},
							yourTokenExplanation: {
								en: "Voting power of %{votingPower}%."
							}
						},
						post: {
							numComments: {
								en: "%{numComments} Comments"
							},
							numViews: {
								en: "%{numViews} Views"
							},
							percentUpvoted: {
								en: "(%{percentUpvoted}% upvoted)"
							},
							points: {
								en: "%{score} Points"
							},
							shortlink: {
								en: "shortlink:"
							},
							title: {
								en: "Post Details"
							}
						},
						recentPosts: {
							en: "Recent posts"
						},
						submit: {
							link: {
								en: "Submit a new link"
							},
							listing: {
								en: "Create your own subreddit"
							},
							text: {
								en: "Submit a new text post"
							},
							post: {
								en: "Create a new post"
							}
						},
						search: {
							en: "Search"
						},
						sponsored: {
							en: "advertisement"
						},
						subreddit: {
							communityOptions: {
								en: "Community options"
							},
							communityTheme: {
								disabledTitle: {
									en: "This is unavailable because themes have been disabled globally in your user settings"
								},
								label: {
									en: "Community theme"
								}
							},
							online: {
								en: "Online"
							},
							settings: {
								en: "My Community Settings"
							},
							subscribe: {
								en: "Join"
							},
							subscribed: {
								en: "Joined"
							},
							subscribers: {
								en: "members"
							},
							title: {
								en: "Community Details"
							},
							unsubscribe: {
								en: "Leave"
							},
							viewers: {
								en: "Viewers"
							}
						},
						trending: {
							follow: {
								en: "Follow"
							},
							following: {
								en: "Following"
							},
							title: {
								en: "Trending Communities"
							}
						},
						widgets: {
							moderators: {
								title: {
									en: "Moderators"
								},
								message: {
									en: "Message the moderators"
								},
								viewAllModerators: {
									en: "View All Moderators"
								}
							},
							myCommunities: {
								description: {
									en: "You can join up to 10 communities before creating an account"
								},
								descriptionTooltip: {
									en: "You can remove any communities you don’t want to see in your home feed by tapping x."
								},
								title: {
									en: "Starter communities"
								},
								titleTooltip: {
									en: "Manage your communities"
								}
							},
							expandableList: {
								viewAll: {
									en: "View All"
								},
								viewLess: {
									en: "View Less"
								},
								viewMore: {
									en: "View More"
								}
							},
							postCollection: {
								addEventStartTime: {
									en: "Add event start time"
								},
								collection: {
									en: "Collection"
								},
								copyLink: {
									en: "Copy collection link"
								},
								createPost: {
									en: "Create post"
								},
								deleteCollection: {
									en: "Delete collection"
								},
								editing: {
									en: "Editing"
								},
								edit: {
									en: "Edit Title"
								},
								editStartTime: {
									en: "Edit start time"
								},
								postedTimeAgo: {
									en: "Posted · %{timeAgo}"
								},
								removeFromCollection: {
									en: "Remove from collection"
								},
								startEventNow: {
									en: "Start event now"
								},
								viewPost: {
									en: "View post"
								}
							},
							relatedQueries: {
								seeMore: {
									en: "See More"
								},
								title: {
									en: "People also searched for"
								}
							}
						},
						moderatorOnboarding: {
							title: {
								en: "Add community style"
							},
							addCommunityIcon: {
								en: "Add community icon"
							},
							customizeHeader: {
								en: "Customize banner"
							},
							customizeColors: {
								en: "Customize colors"
							},
							customizeAppearance: {
								en: "Customize Appearance"
							},
							onlyModerators: {
								en: "Only moderators can see this widget"
							},
							description: {
								en: 'Styling your community helps attract members. For assistance, take a look at the <a href=%{link} className=%{className} target="_blank">Customize Appearance Overview</a>. Here are some great ways to get started.'
							},
							modal: {
								title: {
									en: "Dismiss moderator onboarding checklist"
								},
								text: {
									en: "Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist."
								},
								cancel: {
									en: "Cancel"
								},
								confirm: {
									en: "Confirm"
								}
							}
						}
					},
					sorts: {
						best: {
							en: "best"
						},
						hot: {
							en: "hot"
						},
						new: {
							en: "new"
						},
						rising: {
							en: "rising"
						},
						controversial: {
							en: "controversial"
						},
						top: {
							en: "top"
						},
						gilded: {
							en: "gilded"
						},
						title: {
							en: "Sort"
						}
					},
					stateSorts: {
						allStates: {
							en: "all states"
						},
						alaska: {
							en: "alaska"
						},
						alabama: {
							en: "alabama"
						},
						arkansas: {
							en: "arkansas"
						},
						arizona: {
							en: "arizona"
						},
						california: {
							en: "california"
						},
						colorado: {
							en: "colorado"
						},
						connecticut: {
							en: "connecticut"
						},
						districtOfColumbia: {
							en: "district of columbia"
						},
						delaware: {
							en: "delaware"
						},
						florida: {
							en: "florida"
						},
						georgia: {
							en: "georgia"
						},
						hawaii: {
							en: "hawaii"
						},
						iowa: {
							en: "iowa"
						},
						idaho: {
							en: "idaho"
						},
						illinois: {
							en: "illinois"
						},
						indiana: {
							en: "indiana"
						},
						kansas: {
							en: "kansas"
						},
						kentucky: {
							en: "kentucky"
						},
						louisiana: {
							en: "louisiana"
						},
						massachusetts: {
							en: "massachusetts"
						},
						maryland: {
							en: "maryland"
						},
						maine: {
							en: "maine"
						},
						michigan: {
							en: "michigan"
						},
						minnesota: {
							en: "minnesota"
						},
						missouri: {
							en: "missouri"
						},
						mississippi: {
							en: "mississippi"
						},
						montana: {
							en: "montana"
						},
						northCarolina: {
							en: "north carolina"
						},
						northDakota: {
							en: "north dakota"
						},
						nebraska: {
							en: "nebraska"
						},
						newHampshire: {
							en: "new hampshire"
						},
						newJersey: {
							en: "new jersey"
						},
						newMexico: {
							en: "new mexico"
						},
						nevada: {
							en: "nevada"
						},
						newYork: {
							en: "new york"
						},
						ohio: {
							en: "ohio"
						},
						oklahoma: {
							en: "oklahoma"
						},
						oregon: {
							en: "oregon"
						},
						pennsylvania: {
							en: "pennsylvania"
						},
						rhodeIsland: {
							en: "rhode island"
						},
						southCarolina: {
							en: "south carolina"
						},
						southDakota: {
							en: "south dakota"
						},
						tennessee: {
							en: "tennessee"
						},
						texas: {
							en: "texas"
						},
						utah: {
							en: "utah"
						},
						virginia: {
							en: "virginia"
						},
						vermont: {
							en: "vermont"
						},
						washington: {
							en: "washington"
						},
						wisconsin: {
							en: "wisconsin"
						},
						westVirginia: {
							en: "west virginia"
						},
						wyoming: {
							en: "wyoming"
						}
					},
					structuredStyles: {
						appCompatibility: {
							en: "These community styling options will also display in Reddit apps."
						},
						comingSoon: {
							en: "Coming Soon"
						},
						stylingRestrictedDueToQuarantine: {
							en: "Setting is disabled since this community is quarantined"
						},
						quarantineNotice: {
							en: "This community has been quarantined, some of your settings may not apply."
						},
						remove: {
							en: "remove"
						},
						forms: {
							main: {
								title: {
									en: "Back to mod tools"
								}
							},
							styles: {
								title: {
									en: "Appearance"
								}
							},
							structure: {
								title: {
									en: "Structure"
								}
							},
							moderation: {
								title: {
									en: "Moderation"
								}
							},
							global: {
								title: {
									en: "Color theme"
								},
								themeColors: {
									en: "Theme Colors"
								},
								background: {
									en: "Body Background"
								},
								base: {
									en: "Base"
								},
								highlight: {
									en: "Highlight"
								},
								customImage: {
									en: "Custom Image"
								},
								requiredSize: {
									en: "Required Size: %{size}"
								}
							},
							banner: {
								title: {
									en: "Banner"
								},
								bannerHeight: {
									en: "Height"
								},
								communityNameFormat: {
									en: "Community Name Format"
								},
								positionedImage: {
									en: "Additional Background Image"
								}
							},
							nameAndIcon: {
								title: {
									en: "Name & icon"
								},
								iconVisibilityDescription: {
									en: "Your Community Icon will still display in other areas of Reddit"
								},
								iconVisibilityLabel: {
									en: "Hide Community Icon in Banner"
								}
							},
							menu: {
								title: {
									en: "Menu"
								},
								linkColors: {
									en: "Link Colors"
								},
								activePage: {
									en: "Active Page"
								},
								inactivePage: {
									en: "Inactive Page"
								},
								hover: {
									en: "Hover"
								},
								mainMenuBackground: {
									en: "Main Menu Background"
								},
								overlay: {
									en: "Overlay"
								},
								overlayColor: {
									en: "Overlay Color"
								},
								opacity: {
									en: "Opacity"
								},
								blur: {
									en: "Blur"
								},
								submenuBackground: {
									en: "Submenu Background"
								},
								matchMainMenuBackground: {
									en: "Match Main Menu Background"
								},
								solidColor: {
									en: "Solid Color"
								}
							},
							post: {
								title: {
									en: "Posts"
								},
								titleColor: {
									en: "Title Color"
								},
								upPlusDownVoteIcons: {
									en: "Up + Down Vote Icons"
								},
								upPlusDownVoteIconsDescription: {
									en: "If you want to upload your own vote icons, you'll need to upload an image for each of the indicated icon states."
								},
								standardReddit: {
									en: "Standard Reddit"
								},
								activeDownvote: {
									en: "Active downvote"
								},
								activeUpvote: {
									en: "Active upvote"
								},
								inactiveDownvote: {
									en: "Inactive downvote"
								},
								inactiveUpvote: {
									en: "Inactive upvote"
								},
								countDownvote: {
									en: "Downvote count color"
								},
								countUpvote: {
									en: "Upvote count color"
								},
								postBackground: {
									en: "Post Background"
								},
								linkPreviewPlaceholderImage: {
									en: "Link Preview Placeholder Image"
								},
								linkPreviewPlaceholderImageDescription: {
									en: "Most of the time, link posts automatically generate a placeholder image; sometimes they don't. Use the Standard Reddit placeholder, or create your own!"
								}
							},
							postFlairWidget: {
								addFlair: {
									title: {
										en: "Add flair"
									}
								},
								reorder: {
									title: {
										en: "Reorder"
									}
								},
								searchFlair: {
									en: "Search flair"
								},
								title: {
									en: "Post flair widget"
								}
							},
							themes: {
								applyStyles: {
									en: "Apply styles"
								},
								applyTheme: {
									en: "Apply theme over existing theme?"
								},
								applyThemeDescription: {
									en: "Applying new theme will overwrite the current theme styling. This action cannot be undone."
								},
								banner: {
									en: "Banner"
								},
								colorTheme: {
									en: "Color theme"
								},
								continueWithoutExport: {
									en: "Continue without export"
								},
								export: {
									en: "Export"
								},
								exportButton: {
									en: "Export theme"
								},
								exportCurrent: {
									en: "Export current theme before import?"
								},
								exportFailToast: {
									en: "Sorry, theme failed to export"
								},
								exportPromptDescription: {
									en: "Importing a new theme will overwrite your existing theme. Do you wish to export your current theme before importing a new one?"
								},
								exportSuccessToast: {
									en: "Theme successfully exported"
								},
								importButton: {
									en: "Add new theme"
								},
								importExportExplanation: {
									en: "Generate a .zip file to allow you to save your community's theme or apply other themes. A theme contains appearance settings in:"
								},
								importFailToast: {
									en: "Sorry, theme failed to import"
								},
								importSuccessToast: {
									en: "Theme successfully imported"
								},
								menu: {
									en: "Menu"
								},
								postsExcludingFlair: {
									en: "Posts (excluding post flair templates)"
								},
								themePreview: {
									en: "Theme preview"
								},
								themePreviewDescription: {
									en: "This is a preview of your imported theme. Saving theme will overwrite existing community theme."
								},
								themes: {
									en: "Themes"
								},
								title: {
									en: "Manage themes"
								}
							},
							widgetManager: {
								title: {
									en: "Sidebar widgets"
								},
								titleBackgroundColor: {
									en: "Title background color"
								},
								remainingWidgets: {
									en: "Remaining Widgets: "
								},
								sidebarWidgetAppearance: {
									en: "Sidebar widget appearance"
								},
								widgetAppearance: {
									en: "%{widgetLabel} widget appearance"
								},
								widgetBackgroundColor: {
									en: "Widget background color"
								},
								widgetContent: {
									en: "%{widgetLabel} widget content"
								}
							},
							addWidget: {
								title: {
									en: "Add Widget"
								}
							},
							newWidget: {
								title: {
									en: "New Widget"
								}
							},
							editWidget: {
								title: {
									en: "Edit Widget"
								}
							},
							menuLinks: {
								title: {
									en: "Menu links"
								},
								addLink: {
									en: "Create New Tab"
								},
								editLink: {
									en: "Edit Tab"
								},
								reorderLinks: {
									en: "Reorder Links"
								},
								createLinkTab: {
									en: "Create link tab"
								},
								createSubmenuTab: {
									en: "Create submenu tab"
								},
								tabType: {
									en: "Tab type"
								},
								linkTab: {
									en: "Link Tab"
								},
								submenuTab: {
									en: "Submenu Tab"
								},
								remainingTabs: {
									en: "Remaining Tabs"
								},
								submenuLinks: {
									en: "Submenu Links"
								},
								remainingLinks: {
									en: "Remaining Links"
								},
								tabTitle: {
									en: "Tab Title"
								},
								tabUrl: {
									en: "URL"
								},
								addSubmenuLink: {
									en: "Add Submenu Link"
								},
								editSubmenuLink: {
									en: "Edit Submenu Link"
								},
								reorderSubmenuLinks: {
									en: "Reorder Submenu Links"
								},
								deleteTab: {
									en: "Delete Tab"
								},
								homeLinkLabel: {
									en: "Posts"
								},
								wikiHomeLinkLabel: {
									en: "Wiki"
								}
							},
							flair: {
								toast: {
									flairDeleted: {
										en: "Flair deleted!"
									},
									flairNotDeleted: {
										en: "Sorry, flair wasn't deleted."
									},
									flairNotSaved: {
										en: "Sorry, flair wasn't saved."
									},
									flairReorderFailure: {
										en: "Sorry. Flair reorder wasn't saved."
									},
									flairReorderSuccess: {
										en: "Flair reorder saved."
									},
									flairSaved: {
										en: "Flair saved!"
									},
									retryButtonText: {
										en: "Retry"
									}
								}
							}
						},
						widgets: {
							button: {
								addButton: {
									en: "Add Button"
								},
								buttonColor: {
									en: "Button color"
								},
								buttonText: {
									en: "Button Text"
								},
								description: {
									en: "A widget for buttons..."
								},
								descriptionText: {
									en: "Description text"
								},
								editButton: {
									en: "Edit Button"
								},
								fillColor: {
									en: "Fill color"
								},
								hoverTreatment: {
									en: "Hover treatment"
								},
								imageButton: {
									en: "Image button"
								},
								label: {
									en: "Button"
								},
								listTitle: {
									en: "Buttons"
								},
								newButton: {
									en: "New Button"
								},
								linkUrl: {
									en: "Link URL"
								},
								remainingButtons: {
									en: "Remaining buttons: "
								},
								strokeColor: {
									en: "Stroke color"
								},
								textButton: {
									en: "Text button"
								},
								textColor: {
									en: "Text color"
								}
							},
							"id-card": {
								currentlyViewing: {
									en: "Currently viewing community"
								},
								currentlyViewingText: {
									en: "Online"
								},
								description: {
									en: "Community Description"
								},
								editDescription: {
									en: "Edit Community Description"
								},
								label: {
									en: "ID Card"
								},
								subscribed: {
									en: "Joined community"
								},
								subscribersText: {
									en: "Members"
								}
							},
							"post-flair": {
								description: {
									en: "Display post flair for easy searching"
								},
								label: {
									en: "Post flair"
								},
								layout: {
									en: "Layout"
								},
								remainingFlairs: {
									en: "Remaining flairs: "
								},
								singleColumn: {
									en: "Single column"
								},
								titleText: {
									en: "Title text"
								},
								viewLessFlair: {
									en: "View less flair"
								},
								viewMoreFlair: {
									en: "View more flair"
								},
								widgetTitle: {
									en: "Widget title"
								},
								wordCloud: {
									en: "Word cloud"
								}
							},
							"ads-rules": {
								adsRules: {
									en: "Rules for Reddit Ads"
								}
							},
							"subreddit-rules": {
								createRules: {
									en: "Create Community Rules"
								},
								createRulesText: {
									en: "Before you can display your community's rules, you'll have to create them"
								},
								description: {
									en: "Rules for your community"
								},
								displayFullRules: {
									en: "Fully display rules and description"
								},
								displayCollapsedRules: {
									en: "Display rules, collapse description"
								},
								editRules: {
									en: "Edit Community Rules"
								},
								label: {
									en: "Rules"
								},
								layout: {
									en: "Layout"
								},
								refreshRules: {
									en: "Refresh Rules Widget"
								},
								refreshRulesText: {
									en: "Refresh this pane to customize how your rules will be displayed in this widget"
								},
								refreshRulesTitle: {
									en: "Added your rules?"
								},
								subredditRules: {
									en: "r/%{subreddit} Rules"
								}
							},
							textarea: {
								label: {
									en: "Textarea"
								},
								description: {
									en: "Announcements, quick links, etc."
								}
							},
							image: {
								label: {
									en: "Images"
								},
								description: {
									en: "Art display, more cat pics, etc."
								},
								formDescription: {
									en: "Uploading multiple images to this widget will load a random image on each page refresh."
								},
								widgetTitleDescription: {
									en: "The title of your widget and background styles will not appear in the sidebar."
								},
								titlePlaceholder: {
									en: "WIDGET TITLE"
								},
								linkUrl: {
									en: "Link URL"
								}
							},
							"community-list": {
								label: {
									en: "Community list"
								},
								description: {
									en: "Recommended, related communities, etc."
								},
								communities: {
									en: "Communities"
								},
								communityName: {
									en: "Community Name"
								},
								addCommunity: {
									en: "Add New Community"
								},
								reorderCommunities: {
									en: "Reorder Communities"
								},
								remainingCommunities: {
									en: "Remaining communities: "
								}
							},
							calendar: {
								label: {
									en: "Calendar"
								},
								description: {
									en: "Add a calendar for events, etc."
								},
								eventData: {
									date: {
										en: "Date"
									},
									description: {
										en: "Description"
									},
									location: {
										en: "Location"
									},
									time: {
										en: "Time"
									},
									title: {
										en: "Title"
									}
								},
								eventDataIncluded: {
									en: "Event data included"
								},
								events: {
									en: "Events"
								},
								googleCalendarId: {
									en: "Google Calendar ID"
								},
								invalidGoogleCalendarId: {
									en: "Invalid Google Calendar ID"
								},
								maxNumberEvents: {
									en: "Max %{number} events"
								},
								numberOfEvents: {
									en: "Number of events displayed"
								},
								readLess: {
									en: "read less"
								},
								readMore: {
									en: "...read more"
								},
								synchronize: {
									en: "Synchronize Now"
								},
								toastText: {
									created: {
										en: "New calendar added! It may take a few minutes to see your events appear"
									},
									updated: {
										en: "Calendar is updated! It may take a few minutes to see your events change"
									}
								},
								viewAllEvents: {
									en: "View All Events"
								},
								viewFewerEvents: {
									en: "View Fewer Events"
								}
							},
							custom: {
								css: {
									en: "CSS"
								},
								cssPlaceholder: {
									en: "Css Styling"
								},
								description: {
									en: "Experimental: custom visuals with CSS"
								},
								experimentalNoticeDescription: {
									en: "Custom widgets don't display on mobile devices. Customizations can break at any time"
								},
								experimentalNoticeTitle: {
									en: "This is an experimental feature"
								},
								height: {
									en: "Height"
								},
								heightDescription: {
									en: "Between %{min} and %{max} pixels"
								},
								heightError: {
									en: "Height must be between %{min} and %{max} pixels"
								},
								label: {
									en: "Custom"
								},
								markdownPlaceholder: {
									en: "Markdown Content"
								},
								pixels: {
									en: "PIXELS"
								},
								unsavedImageName: {
									en: "Name of image"
								},
								unsavedImageNameDescription: {
									en: "Names should be unique consisting of alphanumeric and '-' only"
								}
							},
							moderators: {
								label: {
									en: "Moderators"
								}
							}
						},
						labels: {
							background: {
								en: "Background"
							},
							backgroundPosition: {
								cover: {
									en: "Fill"
								},
								tiled: {
									en: "Tile"
								},
								centered: {
									en: "Center"
								},
								left: {
									en: "Left"
								},
								right: {
									en: "Right"
								}
							},
							color: {
								en: "Color"
							},
							communityIcon: {
								en: "Community Icon"
							},
							copied: {
								en: "copied!"
							},
							copy: {
								en: "copy"
							},
							customizationFlag: {
								default: {
									en: "Default"
								},
								custom: {
									en: "Custom"
								}
							},
							image: {
								en: "Image"
							},
							imageInputLabel: {
								en: "Drag and Drop or Upload Image"
							},
							links: {
								invalidLink: {
									en: "The link provided is invalid"
								},
								tooShort: {
									en: "The link provided is too short"
								}
							},
							markdown: {
								en: "Markdown"
							},
							mobileBannerImage: {
								en: "Mobile banner image"
							},
							mobileBannerImageDescription: {
								en: "This image will override the banner background image on mobile apps. Removing the mobile banner image will display the banner background image on mobile apps."
							},
							recommendedUploadSize: {
								en: "Recommended upload size: %{width}x%{height}px"
							},
							required: {
								en: "Required"
							},
							secondaryPositionedImage: {
								en: "Hover Image (optional)"
							},
							size: {
								small: {
									en: "Small"
								},
								medium: {
									en: "Medium"
								},
								large: {
									en: "Large"
								}
							},
							text: {
								en: "Text"
							},
							unsavedImageDescription: {
								en: ".jpeg or .png files up to 10 MB"
							},
							visibility: {
								show: {
									en: "Show"
								},
								hide: {
									en: "Hide"
								}
							},
							widgetTitle: {
								en: "Widget title"
							}
						},
						buttons: {
							add: {
								en: "Add"
							},
							addFlair: {
								en: "Add flair"
							},
							addWidget: {
								en: "Add Widget"
							},
							advanced: {
								en: "Advanced"
							},
							apply: {
								en: "Apply"
							},
							cancel: {
								en: "Cancel"
							},
							clearWidgetColors: {
								en: "Clear widget colors"
							},
							confirm: {
								en: "Confirm"
							},
							continue: {
								en: "Continue"
							},
							deleteWidget: {
								en: "Delete Widget"
							},
							discard: {
								en: "Discard"
							},
							leave: {
								en: "Leave"
							},
							reorderWidgets: {
								en: "Reorder Widgets"
							},
							resetToDefaults: {
								en: "Reset to Defaults"
							},
							remove: {
								en: "Remove"
							},
							reorder: {
								en: "Reorder"
							},
							reset: {
								en: "Reset"
							},
							revert: {
								en: "Revert Changes"
							},
							save: {
								en: "Save"
							}
						},
						colorPicker: {
							colorPicker: {
								en: "Color Picker"
							},
							hexCode: {
								en: "Hex Code"
							},
							hexPlaceholder: {
								en: "Hex #"
							},
							useBrowserColorPicker: {
								en: "Use Browser Color Picker"
							}
						},
						modal: {
							saveChanges: {
								title: {
									en: "Save changes before leaving?"
								},
								text: {
									en: "You have made some changes to your community, do you wish to leave this menu without saving?"
								}
							},
							resetAllStyles: {
								title: {
									en: "Reset to default styling?"
								},
								text: {
									en: "Resetting to defaults here will rollback all your past edits to when your community was first created."
								}
							},
							discardChanges: {
								title: {
									en: "Discard unsaved changes before leaving?"
								}
							},
							nightmode: {
								title: {
									en: "Turning off Night Mode"
								},
								description: {
									en: "In order to continue styling your community, Night Mode must be turned off."
								}
							}
						},
						imageUploadError: {
							en: "Something went wrong"
						}
					},
					subredditCreation: {
						createCommunity: {
							en: "Create Community"
						},
						cannotCreateCommunity: {
							en: "To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities."
						},
						bannedFromCreating: {
							en: "Accounts banned from the site can not create communities until the ban is lifted."
						},
						createCommunityNewIdea: {
							en: "Have an idea for a new community?"
						},
						title: {
							en: "Create a community"
						},
						updateCommunitySuccess: {
							en: "Subreddit settings updated successfully"
						},
						fields: {
							name: {
								description: {
									en: "Community names including capitalization cannot be changed."
								},
								label: {
									en: "community name"
								},
								tooltip: {
									en: 'Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").'
								}
							},
							description: {
								description: {
									en: "This is how new members come to understand your community."
								},
								label: {
									en: "Community description"
								}
							},
							type: {
								public: {
									description: {
										en: "Anyone can view, post, and comment to this community"
									},
									label: {
										en: "Public"
									}
								},
								restricted: {
									label: {
										en: "Restricted"
									}
								},
								private: {
									description: {
										en: "Only approved users can view and submit to this community"
									},
									label: {
										en: "Private"
									}
								},
								employee: {
									description: {
										en: "Only Reddit employees can view and submit to this community"
									},
									label: {
										en: "Employees only"
									}
								},
								premium: {
									description: {
										en: "Only premium members can view and submit to this community"
									},
									label: {
										en: "Premium only"
									}
								},
								label: {
									en: "community type"
								},
								title: {
									en: "Type of Community"
								}
							},
							over18: {
								description: {
									en: "18+ year old community"
								},
								label: {
									en: "Adult content"
								},
								sublabel: {
									en: "When your community is marked as an 18+ community, users must be flagged as 18+ in their user settings"
								}
							}
						},
						cancel: {
							en: "Cancel"
						},
						start: {
							en: "Start"
						},
						errors: {
							nameRequired: {
								en: "A Community Name is required"
							},
							nameWithSpaces: {
								en: "Make sure your Community Name follows all of the formatting rules"
							},
							descriptionRequired: {
								en: "A Community Description is required"
							},
							subredditExists: {
								en: "This Community Name is already taken"
							}
						},
						pending: {
							en: "Your community is being created..."
						},
						settings: {
							title: {
								en: "Community settings"
							},
							heading: {
								en: "Community Profile"
							},
							advancedSettings: {
								en: "Advanced Settings"
							},
							oldSite: {
								label: {
									en: "Settings for old site"
								},
								sublabel: {
									en: "To change settings that influence the old site, you must go to the old settings page"
								},
								link: {
									en: "Old Settings"
								}
							},
							safety: {
								title: {
									en: "Safety & privacy settings"
								},
								heading1: {
									en: "Safety"
								},
								heading2: {
									en: "Privacy"
								},
								excludeBannedModqueue: {
									en: "Exclude posts by site-wide banned users"
								},
								excludeBannedModqueueSublabel: {
									en: "Posts are excluded from modqueue/unmoderated"
								},
								allowTop: {
									en: "Allow posts in /r/all, /r/popular, default, and trending lists"
								},
								allowDiscovery: {
									en: "Allow community in discovery and onboarding"
								},
								crowdControlMode: {
									en: "Turn on crowd control mode"
								},
								crowdControlModeDesc: {
									en: "When crowd control is enabled, comments from users who aren't yet fully trusted in your community (including new users) will display as collapsed by default"
								},
								crowdControlLevel: {
									en: "Adjust crowd control level"
								},
								crowdControlLevelDesc: {
									en: "When crowd control level is strict, comments from users who aren't yet fully trusted in your community (including new users) will display as collapsed by default"
								}
							},
							posts: {
								en: "Post and Comment settings",
								posts: {
									en: "Posts"
								},
								postTypeOptions: {
									en: "Post type options"
								},
								spoilersEnabled: {
									en: "Enable spoiler tag"
								},
								spoilersEnabledSublabel: {
									en: "Media on posts with the spoiler tag are blurred"
								},
								allowImageUploads: {
									en: "Allow image uploads and links to image hosting sites"
								},
								allowPostCrosspostsLabel: {
									en: "Allow crossposting of posts."
								},
								spamFilterStrength: {
									en: "Spam filter strength"
								},
								spamFilterStrengthDesc: {
									en: "HIGH' is the standard filter, 'LOW' disables most filtering, 'ALL' will filter every post initially and they will need to be approved manually to be visible"
								},
								comments: {
									en: "Comments"
								},
								links: {
									en: "Links"
								},
								suggestedCommentSortSublabel: {
									en: "All comment feeds in community will default to this sort setting"
								},
								commentScoreHideMins: {
									en: "Minutes to hide comment scores"
								},
								suggestedCommentSort: {
									en: "Suggested sort"
								},
								suggestedSortDesc: {
									en: "All comment feeds in community will default to this sort setting"
								},
								collapseDeletedComments: {
									en: "Collapse deleted and removed comments"
								}
							},
							wikis: {
								title: {
									en: "Wiki settings"
								},
								header: {
									en: "Community wiki pages"
								},
								wikimode: {
									en: "Wikis can be edited by"
								},
								wikiage: {
									en: "Age of Reddit account required to edit and create wiki pages"
								},
								wikikarma: {
									en: "Karma required to edit and create wiki pages"
								}
							}
						}
					},
					subredditModeration: {
						awards: {
							create: {
								en: "Create"
							},
							title: {
								en: "Awards"
							},
							deleteAward: {
								en: "Delete Award"
							},
							deleteAwardDescription: {
								en: "Deleting an Award will remove the option for members of your community to give the Award. Existing Awards will remain on the posts and comments that have received them."
							},
							remove: {
								en: "Remove: "
							}
						},
						buttons: {
							accept: {
								en: "Accept"
							},
							back: {
								en: "Back"
							},
							confirm: {
								en: "Confirm"
							},
							delete: {
								en: "Delete"
							},
							remove: {
								en: "Remove"
							},
							sendMessage: {
								en: "Send Message"
							},
							cancel: {
								en: "Cancel"
							},
							decline: {
								en: "Decline"
							},
							edit: {
								en: "Edit"
							},
							leave: {
								en: "Leave"
							},
							unmute: {
								en: "Unmute"
							},
							save: {
								en: "Save"
							},
							saveChanges: {
								en: "Save changes"
							},
							invite: {
								en: "Invite"
							},
							next: {
								en: "Next"
							},
							prev: {
								en: "Prev"
							},
							submit: {
								en: "Submit"
							}
						},
						chat: {
							addButton: {
								en: "+ Add room"
							},
							addRoomText: {
								en: "Create your first room and get your community chatting in real time."
							},
							defaultBannedWordsList: {
								label: {
									en: "Block messages using default banned words list"
								},
								sublabel: {
									en: "Messages with any of these words will fail to send"
								}
							},
							cancelButton: {
								en: "Cancel"
							},
							checkboxPrivate: {
								label: {
									en: "Private"
								},
								text: {
									en: "Private channels are only visible to people who have been invited to them."
								}
							},
							createButton: {
								en: "Create Room"
							},
							createNameExistError: {
								en: "A chatroom already exists with this name."
							},
							createRoomHeader: {
								en: "Create Room"
							},
							deleteButton: {
								en: "Delete Room"
							},
							deleteRoomText: {
								en: "Are you sure you want to delete this room? This action cannot be undone."
							},
							deleteRoomHeader: {
								en: "Delete"
							},
							descTextarea: {
								label: {
									en: "Description"
								},
								placeholder: {
									en: "Ex: This channel is for sharing cat facts"
								}
							},
							editButton: {
								en: "Save Changes"
							},
							editRoomHeader: {
								en: "Edit Room"
							},
							emptyRoomsText: {
								en: "There are no joined chatrooms yet"
							},
							blockedWordsFilter: {
								label: {
									en: "Custom list of banned words"
								},
								sublabel: {
									en: "Messages with any words in your custom will fail to send"
								},
								cta: {
									en: "Edit Words"
								},
								subScreen: {
									label: {
										en: "Banned words"
									},
									sublabel: {
										en: "List comma seperated words to ban"
									},
									cta: {
										en: "Save List"
									},
									placeholder: {
										en: "Ex: poop, dogs, cats, fools"
									}
								}
							},
							blockedRegexFilter: {
								label: {
									en: "Custom regex rules (advanced)"
								},
								sublabel: {
									en: "Messages caught by regular expression rules will fail to send"
								},
								deleteButton: {
									en: "Delete Rule"
								},
								cta: {
									en: "Add Rule"
								},
								subScreen: {
									header: {
										en: "Configure regex rule"
									},
									name: {
										en: "Rule name"
									},
									nameplaceholder: {
										en: "Ex: nasty words"
									},
									regex: {
										en: "Regex to evaluate all messages with"
									},
									subregex: {
										en: "List comma separated regular expressions. Here is a  helpful tool."
									},
									placeholder: {
										en: "Ex: poop|dogs|bear(y|ies?)|dogfish?(er|r|r?a|lett?)s?z?"
									},
									cta: {
										en: "Save Rule"
									}
								}
							},
							domainFilter: {
								label: {
									en: "Link domains"
								},
								sublabel: {
									en: "Allow or disallow links from domains"
								},
								approvedcta: {
									en: "Edit Approved Domains"
								},
								bannedcta: {
									en: "Edit Banned Domains"
								},
								subScreen: {
									header: {
										en: "Configure domains"
									},
									approvedlabel: {
										en: "Approved domains"
									},
									bannedlabel: {
										en: "Banned domains"
									},
									placeholder: {
										en: "Ex: google.com, youtube.com, imgur.com"
									},
									cta: {
										en: "Save"
									}
								}
							},
							manageRooms: {
								en: "Manage chatrooms"
							},
							members: {
								en: "Members"
							},
							minimumAcctAge: {
								label: {
									en: "Minimum account age"
								},
								text: {
									en: "People will be unable to send messages until their accounts reach this age"
								}
							},
							modalClose: {
								en: "close"
							},
							nameInput: {
								label: {
									en: "Name"
								},
								placeholder: {
									en: "Ex: cat-facts"
								}
							},
							newMember: {
								label: {
									en: "New member muting"
								},
								text: {
									en: "All new room members will be unable to send messages for this duration after joining"
								}
							},
							rateLimit: {
								label: {
									en: "Message rate limiting (per %{duration} seconds)"
								},
								sublabel: {
									en: "Each person can send this number of messages in a %{duration} second window."
								}
							},
							rooms: {
								en: "Rooms"
							},
							roomsSettingsHeader: {
								en: "Chat Room Settings"
							},
							seeMore: {
								en: "See more"
							},
							settingsButton: {
								en: "Settings"
							},
							subredditWidget: {
								header: {
									en: "Chat rooms"
								},
								menu: {
									title: {
										en: "Chat menu"
									},
									manageRooms: {
										en: "Manage rooms"
									},
									viewRooms: {
										en: "View rooms"
									}
								}
							}
						},
						confirm: {
							en: "Confirm"
						},
						editableModerators: {
							title: {
								en: "You can edit these moderators"
							}
						},
						menu: {
							chat: {
								en: "Chat"
							},
							communitySettings: {
								en: "Community settings"
							},
							modMail: {
								en: "Modmail"
							},
							postRequirements: {
								en: "Post requirements"
							},
							queues: {
								en: "Queues"
							},
							removalReasons: {
								en: "Removal reasons"
							},
							rules: {
								en: "Rules"
							}
						},
						modQueue: {
							cantTakeThatAction: {
								en: "You can't take that action on a comment"
							},
							edited: {
								en: "Edited"
							},
							filters: {
								allPostTypes: {
									en: "Posts and Comments"
								},
								allSubreddits: {
									en: "All subreddits"
								},
								comments: {
									en: "Comments"
								},
								links: {
									en: "Posts"
								},
								searchPlaceholder: {
									en: "Find subreddit"
								}
							},
							modqueue: {
								en: "Mod queue"
							},
							multipleFlairs: {
								en: "Multiple Flairs"
							},
							queue: {
								en: "Queue"
							},
							reports: {
								en: "Reports"
							},
							sidebar: {
								automodConfig: {
									en: "Automoderator Config"
								},
								moderation: {
									en: "Moderation"
								},
								moderationLog: {
									en: "Moderation Log"
								}
							},
							spam: {
								en: "Spam"
							},
							toastText: {
								approve: {
									en: "have been approved"
								},
								flair: {
									en: "have had flair applied"
								},
								ignore_reports: {
									en: "have had their reports ignored"
								},
								lock: {
									en: "have been locked"
								},
								mark_nsfw: {
									en: "have been marked NSFW"
								},
								postsComments: {
									en: "posts/comments"
								},
								remove: {
									en: "have been removed"
								},
								somethingWentWrong: {
									en: "Oh no! Something went wrong!"
								},
								spam: {
									en: "have been marked as spam"
								},
								spoiler: {
									en: "have been marked as spoilers"
								},
								show_comment: {
									en: "has been shown"
								},
								undo: {
									en: "Undo"
								},
								unignore_reports: {
									en: "have had their reports un-ignored"
								},
								unlock: {
									en: "have been unlocked"
								},
								unmark_nsfw: {
									en: "have been un-marked as NSFW"
								},
								unspoiler: {
									en: "have been un-marked as spoilers"
								}
							},
							unmoderated: {
								en: "Unmoderated"
							},
							title: {
								en: "Moderation"
							}
						},
						moreDetails: {
							en: "More Details"
						},
						moderators: {
							cantEdit: {
								en: "can't edit"
							},
							congrats: {
								en: "Congrats!"
							},
							invite: {
								en: "Invite Moderators"
							},
							invitedModerators: {
								en: "Invited moderators"
							},
							inviteUserAsMod: {
								en: "Invite user as mod"
							},
							invitePending: {
								en: "You are invited to become a moderator!"
							},
							leaveAsMod: {
								en: "Leave as mod"
							},
							leaveAsModText: {
								en: "Once you leave as a mod, you will lose mod permissions and will be unable to access any mod tools for this community. Are you sure you wish to leave as a mod of this community?"
							},
							noPermissions: {
								en: "No permissions"
							},
							permissions: {
								en: "Permissions"
							},
							resign: {
								en: "Resign"
							},
							successAdd: {
								en: "Successfully added a moderator"
							},
							title: {
								en: "Moderators of %{subredditName}"
							},
							userAlreadyInvited: {
								en: "That user is already invited"
							},
							usernamePlaceholder: {
								en: "Enter Username"
							},
							areYouSure: {
								en: "Are you sure you want to rescind the moderator invite to %{username}?"
							}
						},
						modHub: {
							incorrectPermissions: {
								en: "Sorry, you do not have the moderator permissions needed to view this page"
							},
							incorrectPermissionsSubtext: {
								en: "You need to change your mod permissions to view this page"
							},
							modOnlyPage: {
								en: "Sorry, this is a moderator-only page"
							},
							mustBeAMod: {
								en: "You must be a moderator to view this page"
							},
							mustBeAModOfSubreddit: {
								en: "You must be a moderator of %{subredditName} to view this page"
							},
							welcome: {
								en: "Welcome to the mod tools for %{subredditName}"
							}
						},
						permissions: {
							all: {
								en: "Full Permissions"
							},
							access: {
								en: "Access"
							},
							config: {
								en: "Config"
							},
							chatConfig: {
								en: "Chat Config"
							},
							chat_config: {
								en: "Chat Config"
							},
							chatOperator: {
								en: "Chat Operator"
							},
							chat_operator: {
								en: "Chat Operator"
							},
							flair: {
								en: "Flair"
							},
							mail: {
								en: "Mail"
							},
							posts: {
								en: "Posts"
							},
							wiki: {
								en: "Wiki"
							}
						},
						navigation: {
							accessManagement: {
								en: "access management"
							},
							automod: {
								en: "Automod"
							},
							awards: {
								en: "Awards"
							},
							badges: {
								en: "Badges"
							},
							banned: {
								en: "Banned"
							},
							community: {
								en: "Community"
							},
							communityActivity: {
								en: "Community activity"
							},
							communityAppearance: {
								en: "Community appearance"
							},
							subredditContent: {
								en: "Content"
							},
							contributors: {
								en: "Approved"
							},
							emojis: {
								en: "Emojis"
							},
							emotes: {
								en: "Emotes"
							},
							flairAndEmojis: {
								en: "Flair & emojis"
							},
							grantUserFlair: {
								en: "Grant user flair"
							},
							moderators: {
								en: "Moderators"
							},
							modLog: {
								en: "Mod log"
							},
							muted: {
								en: "Muted"
							},
							new: {
								en: "new"
							},
							other: {
								en: "Other"
							},
							posts: {
								en: "Posts and Comments"
							},
							postFlair: {
								en: "Post flair"
							},
							rulesAndRegulations: {
								en: "Rules and regulations"
							},
							safety: {
								en: "Safety and Privacy"
							},
							traffic: {
								en: "Traffic stats"
							},
							userFlair: {
								en: "User flair"
							},
							userManagement: {
								en: "User management"
							},
							wikiPages: {
								en: "Wiki pages"
							},
							wikis: {
								en: "Wikis"
							}
						},
						subredditRules: {
							toast: {
								ruleAdded: {
									en: "Rule added"
								},
								ruleDeleted: {
									en: "Rule deleted"
								},
								ruleOrdered: {
									en: "Rule order updated"
								},
								ruleUndo: {
									en: "Undo"
								},
								ruleUpdated: {
									en: "Rule updated"
								}
							}
						}
					},
					subredditPicker: {
						chooseACommunity: {
							en: "Choose a community"
						},
						searchCommunities: {
							en: "Search communities"
						},
						searchYourCommunities: {
							en: "Search your communities"
						},
						noCommunitiesFound: {
							en: "No communities found"
						},
						sectionModeratedSubreddits: {
							en: "Moderated subreddits"
						},
						sectionOwnProfile: {
							en: "Your profile"
						},
						sectionSubscriptions: {
							en: "My communities"
						},
						sectionOthers: {
							en: "Others"
						}
					},
					subscriptions: {
						all: {
							en: "All"
						},
						pending: {
							en: "LOADING..."
						},
						editSubscriptions: {
							en: "edit my communities"
						},
						emptyStateCopy: {
							en: "You have not joined any communities yet!"
						},
						favorite: {
							en: "favorite"
						},
						favorites: {
							en: "favorites"
						},
						filter: {
							en: "Filter"
						},
						moderating: {
							en: "moderating"
						},
						moderatingFull: {
							en: "moderating subreddits"
						},
						multireddits: {
							en: "multis"
						},
						multiredditsFull: {
							en: "multireddits"
						},
						multiredditsCreate: {
							en: "Create New"
						},
						mySubscriptions: {
							en: "my communities"
						},
						news: {
							en: "News"
						},
						otherFeeds: {
							en: "Other"
						},
						otherCommunities: {
							en: "other communities"
						},
						profileActions: {
							subscribe: {
								en: "Follow"
							},
							subscribed: {
								en: "Following"
							},
							unsubscribe: {
								en: "Unfollow"
							}
						},
						popular: {
							en: "Popular"
						},
						profiles: {
							en: "profiles"
						},
						loggedOutCopy: {
							en: "Sign up and stay connected to your favorite communities."
						},
						redditFeeds: {
							en: "Reddit Feeds"
						},
						subredditActions: {
							subscribe: {
								en: "Join"
							},
							subscribed: {
								en: "Joined"
							},
							unsubscribe: {
								en: "Leave"
							}
						},
						subscriptions: {
							en: "my communities"
						},
						unfavorite: {
							en: "unfavorite"
						},
						viewMore: {
							en: "view more"
						},
						viewOptions: {
							title: {
								en: "View Options"
							},
							modMode: {
								en: "Mod Mode"
							}
						}
					},
					time: {
						justNow: {
							en: "just now"
						},
						timeLeft: {
							en: "%{time} left"
						},
						monthName: {
							0: {
								en: "January"
							},
							1: {
								en: "February"
							},
							2: {
								en: "March"
							},
							3: {
								en: "April"
							},
							4: {
								en: "May"
							},
							5: {
								en: "June"
							},
							6: {
								en: "July"
							},
							7: {
								en: "August"
							},
							8: {
								en: "September"
							},
							9: {
								en: "October"
							},
							10: {
								en: "November"
							},
							11: {
								en: "December"
							}
						},
						short: {
							days: {
								en: "d"
							},
							hours: {
								en: "h"
							},
							milliseconds: {
								en: "ms"
							},
							minutes: {
								en: "m"
							},
							months: {
								en: "mo"
							},
							seconds: {
								en: "s"
							},
							years: {
								en: "y"
							}
						},
						soon: {
							en: "a moment"
						},
						today: {
							en: "today"
						}
					},
					timeSorts: {
						day: {
							en: "past 24 hours"
						},
						hour: {
							en: "past hour"
						},
						week: {
							en: "past week"
						},
						month: {
							en: "past month"
						},
						year: {
							en: "past year"
						},
						all: {
							en: "of all time"
						},
						title: {
							en: "Time period"
						}
					},
					title: {
						coins: {
							en: "Coins"
						},
						commentsPage: {
							en: "%{postTitle} : %{subreddit}"
						},
						frontpage: {
							en: "reddit: the front page of the internet"
						},
						modQueue: {
							en: "Moderation Queue"
						},
						premium: {
							en: "Reddit Premium"
						},
						publicAccessNetwork: {
							en: "Reddit Public Access Network"
						},
						submit: {
							en: "Submit to %{subreddit}"
						},
						settings: {
							en: "Reddit Settings"
						},
						subredditCreation: {
							en: "Create Community"
						}
					},
					uappBanner: {
						buttonText: {
							en: "Got it"
						}
					},
					user: {
						tooltip: {
							banUser: {
								en: "Ban User"
							},
							commentKarma: {
								en: "Comment Karma"
							},
							editUserFlair: {
								en: "Edit user flair"
							},
							muteUser: {
								en: "Mute User"
							},
							inviteToChat: {
								en: "Invite to chat"
							},
							postKarma: {
								en: "Post Karma"
							},
							button: {
								follow: {
									en: "Follow"
								},
								unfollow: {
									en: "Unfollow"
								}
							}
						}
					},
					video: {
						snooTooltip: {
							en: "View Comments"
						},
						playTooltip: {
							en: "Play"
						},
						pauseTooltip: {
							en: "Pause"
						},
						settingTooltip: {
							en: "Settings"
						},
						fullscreenTooltip: {
							en: "Fullscreen"
						},
						exitFullscreenTooltip: {
							en: "Exit Fullscreen"
						},
						auto: {
							en: "Auto"
						},
						replay: {
							en: "Replay Video"
						},
						seekBarLabel: {
							en: "Seek Slider"
						}
					}
				};

			function _(e, t, i) {
				const n = e.replace(/-\w+/, "");
				"string" != typeof t && (i = Object.assign({}, i || {}, t[1]), t = t[0]);
				const l = s()(p, "".concat(t, ".").concat(e)) || s()(p, "".concat(t, ".").concat(n)) || s()(p, "".concat(t, ".").concat(r.y));
				return "string" != typeof l ? (Object(o.b)(void 0, "Could not find message for ".concat(t)), t.replace(/\./g, " ")) : Object(d.a)(l, i)
			}

			function g(e, t, i, n) {
				const l = e.replace(/-\w+/, ""),
					a = s()(h, "".concat(t, ".").concat(e)) || s()(h, "".concat(t, ".").concat(l)) || s()(h, "".concat(t, ".").concat(r.y)) || [s()(p, "".concat(t, ".").concat(e)) || s()(p, "".concat(t, ".").concat(l)) || s()(p, "".concat(t, ".").concat(r.y))];
				if ("object" != typeof a || "string" != typeof a[0]) return Object(o.b)(void 0, "Could not find plural message for ".concat(t)), t.replace(/\./g, " ");
				let u = a[function(e, t) {
					return 1 === t ? 0 : 1
				}(0, i)];
				return u || (Object(o.b)(void 0, "Could not find plural message for ".concat(t, " with count ").concat(i)), u = a[0]), Object(d.a)(u, Object.assign({
					count: Number(i).toLocaleString()
				}, n || {}))
			}

			function w(e) {
				return (t, i) => _(t, e, i)
			}

			function y(e) {
				return (t, i, n) => g(t, e, i, n)
			}
			const v = /%\((\w+)\)s/g;

			function f(e, t) {
				return e.replace(v, (function(e, i) {
					return i in t ? t[i] : e
				}))
			}
		},
		"./src/app/strings/sources/error.js": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/constants/index.ts");
			t.a = {
				authentication: {
					en: "There was an authentication error"
				},
				clickHere: {
					en: "Click here to try again."
				},
				generic: {
					en: "Something went wrong"
				},
				genericPage: {
					en: "Something went wrong loading this page. Try again?"
				},
				oops: {
					en: "Oops"
				},
				ok: {
					en: "ok"
				},
				reload: {
					en: "Reload Page"
				},
				tryAgainLater: {
					en: "An error has occured. Please try again later"
				},
				tryLater: {
					en: "Give us a few minutes to fix the problem. Sorry!"
				},
				type: {
					blocked: {
						en: "It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use."
					},
					forbidden: {
						en: "Sorry, You do not have permission to view this page."
					},
					generic: {
						en: "Something went wrong. Just don't panic."
					},
					genericCardValidation: {
						en: "Looks like something went wrong validating your credit card."
					},
					invalidUser: {
						en: "Looks like you entered an invalid user."
					},
					noStripeSubscription: {
						en: "Sorry, but there's no Stripe customer associated with this account."
					},
					notAuthorized: {
						en: "It looks like you aren't allowed to do that."
					},
					notFound: {
						en: "Sorry, there doesn't seem to be anything here."
					},
					notLoggedIn: {
						en: "You might need to be logged in to do that."
					},
					server: {
						en: "Sorry, for some reason reddit can't be reached."
					},
					validation: {
						en: "We weren't able to handle your request."
					}
				},
				[n.j]: {
					en: "you're not allowed to do that"
				},
				[n.Ub]: {
					en: "Video size must be less than ".concat((n.X / n.Z / 1024).toFixed(1), "GB")
				},
				[n.J]: {
					en: "Image size must be less than ".concat(Math.floor(n.S / n.Z), "MB")
				},
				[n.G]: {
					en: "GIF size must be less than ".concat(Math.floor(n.Q / n.Z), "MB")
				},
				[n.L]: {
					en: "Sorry, we accept only images (.png, .jpeg, .gif) and videos (.mp4, .mov)"
				}
			}
		},
		"./src/chat/actions/promo/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return s
			}));
			const n = "PROMO__DISPLAY_PROMO",
				s = "PROMO__HIDE_PROMO"
		},
		"./src/chat/constants/channels.ts": function(e, t, i) {
			"use strict";
			var n, s;
			i.d(t, "b", (function() {
					return n
				})), i.d(t, "a", (function() {
					return s
				})), i.d(t, "g", (function() {
					return r
				})), i.d(t, "f", (function() {
					return o
				})), i.d(t, "d", (function() {
					return d
				})), i.d(t, "e", (function() {
					return l
				})), i.d(t, "c", (function() {
					return a
				})),
				function(e) {
					e.JOINED = "JOINED", e.INVITED = "INVITED", e.PARTIAL = "PARTIAL", e.UNSORTED = "NONE"
				}(n || (n = {})),
				function(e) {
					e.BLOCK = "block", e.CREATE = "create", e.DECLINE_REQUEST = "decline", e.INVITE_MEMBERS = "invite", e.INVITE_MEMBERS_CONFIRMATION = "invite_confirmation", e.DENY = "deny", e.LEAVE = "leave", e.LOCK_CHANNEL_CONFIRMATION = "lock_confirmation", e.VIEW_JOIN = "join", e.VIEW_MEMBERS = "members", e.VIEW_NSFW_CONFIRMATION = "nsfw", e.VIEW_PRIVATE = "private", e.VIEW_INVITE = "invited"
				}(s || (s = {}));
			const r = [s.DENY, s.VIEW_JOIN, s.VIEW_PRIVATE];
			var o;
			! function(e) {
				e.NonSuper = "nonsuper", e.Super = "super"
			}(o || (o = {}));
			const d = 30,
				l = 99;
			var a;
			! function(e) {
				e.All = "all", e.UnreadMessages = "unread_message_count_only", e.Off = "off"
			}(a || (a = {}))
		},
		"./src/chat/constants/container.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return s
			}));
			const n = {
					EMBED: "embed",
					FULL: "full",
					HIDDEN: "hidden",
					MINIMIZED: "minimized"
				},
				s = {
					embed: {
						width: 560,
						height: 380
					},
					full: {
						width: void 0,
						height: void 0
					},
					hidden: {
						width: 0,
						height: 0
					},
					minimized: {
						width: 126,
						height: 40
					}
				}
		},
		"./src/chat/constants/messages.ts": function(e, t, i) {
			"use strict";
			var n, s, r;
			i.d(t, "c", (function() {
					return n
				})), i.d(t, "b", (function() {
					return s
				})), i.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.ADMIN = "admin", e.USER = "user", e.PENDING = "pending"
				}(n || (n = {})),
				function(e) {
					e.TEXT = "text", e.POST = "post", e.EMBED = "embedCollection", e.SNOOMOJI = "snoomoji"
				}(s || (s = {})),
				function(e) {
					e.DELETE = "delete", e.REPORT = "report"
				}(r || (r = {}))
		},
		"./src/chat/constants/sendbird.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return s
			}));
			const n = "sendbird_group_channel_";
			var s;
			! function(e) {
				e.Open = "OPEN", e.Closed = "CLOSED", e.Pending = "PENDING"
			}(s || (s = {}))
		},
		"./src/chat/endpoints/sendbird/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return c
			})), i.d(t, "h", (function() {
				return m
			})), i.d(t, "g", (function() {
				return h
			})), i.d(t, "c", (function() {
				return p
			})), i.d(t, "m", (function() {
				return _
			})), i.d(t, "k", (function() {
				return g
			})), i.d(t, "a", (function() {
				return w
			})), i.d(t, "i", (function() {
				return y
			})), i.d(t, "f", (function() {
				return v
			})), i.d(t, "l", (function() {
				return f
			})), i.d(t, "b", (function() {
				return b
			})), i.d(t, "j", (function() {
				return T
			})), i.d(t, "d", (function() {
				return S
			})), i.d(t, "n", (function() {
				return F
			}));
			var n = i("./src/config.ts"),
				s = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/makeApiRequest/index.ts"),
				o = i("./src/lib/omitHeaders/index.ts"),
				d = i("./src/reddit/constants/headers.ts"),
				l = i("./src/chat/models/Channel/utils/index.ts");
			const a = "".concat("api/v1", "/sendbird"),
				u = {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				c = async e => Object(r.b)(Object(o.a)(e, [d.a]), {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/config"),
					method: s.bb.GET
				}), m = async (e, t) => Object(r.b)(e, {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/me"),
					method: s.bb.GET
				}), h = async (e, t, i) => Object(r.b)(e, {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/contacts?limit=").concat(i),
					method: s.bb.GET
				}), p = async (e, t, i, o) => Object(r.b)(e, {
					data: {
						users: i,
						name: o
					},
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/group_channels"),
					method: s.bb.POST,
					headers: u
				}), _ = async (e, t) => {
					const i = {};
					return t && (i.channel_url = t), Object(r.b)(e, {
						endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat("api/v1", "/opt_in"),
						data: i,
						method: s.bb.POST,
						headers: u
					})
				}, g = async (e, t, i, o) => Object(r.b)(e, {
					data: {
						users: i
					},
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/group_channels/").concat(o, "/invite"),
					method: s.bb.POST,
					withCredentials: !0,
					headers: u
				}), w = async (e, t, i) => Object(r.b)(e, {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/group_channels/").concat(i, "/accept"),
					method: s.bb.PUT,
					withCredentials: !0
				}), y = async (e, t) => Object(r.b)(Object(o.a)(e, [d.a]), {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/unread_message_count"),
					method: s.bb.GET,
					headers: u
				}), v = async (e, t) => Object(r.b)(e, {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat("api/v1", "/channels/recommended"),
					method: s.bb.GET,
					headers: u
				}), f = async (e, t, i, o) => Object(r.b)(e, {
					data: {
						channel_url: i,
						subreddit: o
					},
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/join"),
					method: s.bb.POST,
					headers: u
				}), b = (e, t, i) => Object(r.b)(e, {
					data: i,
					method: s.bb.POST,
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat("api/v1", "/chat/ban"),
					headers: u
				}), T = (e, t, i) => Object(r.b)(e, {
					data: {
						channel_url: Object(l.a)(t),
						modqueue_message_id: i
					},
					method: s.bb.PUT,
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat("api/v1", "/chat/message/report"),
					headers: u
				}), S = (e, t, i) => Object(r.b)(e, {
					data: {
						channel_url: Object(l.a)(t),
						modqueue_message_id: i
					},
					method: s.bb.DELETE,
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat("api/v1", "/chat/message/report"),
					headers: u
				}), F = (e, t, i, o, d) => Object(r.b)(e, {
					data: {
						channel_id: Object(l.a)(t),
						invitee_id: i,
						inviter_id: o,
						reason: d
					},
					method: s.bb.POST,
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat("api/v1", "/chat/report/invite"),
					headers: u
				})
		},
		"./src/chat/helpers/errors.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return s
			}));
			class n extends Error {
				constructor(e, t) {
					super("Invalid Value: '".concat(e, " is ").concat(t, "'"))
				}
			}
			const s = e => {
				0
			}
		},
		"./src/chat/helpers/unreadCount.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return o
			}));
			var n = i("./src/chat/models/Promo/index.ts");
			const s = {
					basicChannelCount: {
						count: 0,
						unread: !1
					},
					subredditChannelCount: {
						count: 0,
						unread: !1
					}
				},
				r = e => {
					const t = {};
					for (const i in e) t[i] = {
						count: e[i],
						unread: !!e[i]
					};
					return Object.assign({}, s, t)
				},
				o = (e, t) => {
					const {
						basicChannelCount: i,
						subredditChannelCount: s
					} = r(e), o = Object(n.d)(t), d = Object(n.e)(o), l = i.count;
					return {
						count: l,
						unread: d || !!l || !!s.count
					}
				}
		},
		"./src/chat/helpers/urls/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "minimizeUrl", (function() {
				return o
			})), i.d(t, "rootUrl", (function() {
				return d
			})), i.d(t, "basicChannelRootUrl", (function() {
				return l
			})), i.d(t, "channelUrl", (function() {
				return u
			})), i.d(t, "channelAction", (function() {
				return c
			})), i.d(t, "channelUserIdUrl", (function() {
				return m
			})), i.d(t, "getShortChannelUrl", (function() {
				return h
			})), i.d(t, "inviteMessageActionUrl", (function() {
				return p
			})), i.d(t, "messageActionUrl", (function() {
				return _
			})), i.d(t, "userActionUrl", (function() {
				return g
			})), i.d(t, "getSubredditFromUrl", (function() {
				return w
			})), i.d(t, "viewProfileUrl", (function() {
				return y
			})), i.d(t, "banUserUrl", (function() {
				return v
			})), i.d(t, "getChannelUrl", (function() {
				return f
			}));
			i("./node_modules/core-js/modules/es6.regexp.replace.js"), i("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var n = i("./src/config.ts"),
				s = i("./node_modules/query-string/index.js"),
				r = i("./src/chat/constants/channels.ts");
			const o = "/chat/minimize/",
				d = "/chat/",
				l = "channel",
				a = e => e ? (e => "r/".concat(String(e).toLowerCase(), "/").concat(l))(e) : l,
				u = (e, t) => "/chat/".concat(a(t), "/").concat(e),
				c = (e, t, i) => "/chat/".concat(a(i), "/").concat(e, "/").concat(t),
				m = e => "/chat/user_id/".concat(e),
				h = e => "".concat(n.a.shortUrl, "/").concat(l, "/").concat(e),
				p = (e, t, i, n) => ({
					pathname: "".concat(c(e, i, n), "/invite/").concat(t),
					state: {
						isOverlay: !0
					}
				}),
				_ = (e, t, i, n) => ({
					pathname: "".concat(c(e, i, n), "/message/").concat(t),
					state: {
						isOverlay: !0
					}
				}),
				g = (e, t, i, n, r) => "".concat(c(e, i, n), "/user/").concat(t).concat(r ? "?" + Object(s.stringify)(r) : ""),
				w = e => new RegExp("reddit.com").test(e) ? e.replace(/^.+reddit.com(\/r\/.+?\/).*$/g, "$1") : "",
				y = e => "".concat(n.a.redditUrl, "/user/").concat(e),
				v = e => "".concat(n.a.redditUrl, "/r/").concat(e, "/about/banned"),
				f = (e, t) => {
					const {
						channelId: i,
						channelState: n
					} = e, {
						INVITED: s,
						PARTIAL: o,
						JOINED: l
					} = r.b, {
						VIEW_JOIN: a,
						VIEW_INVITE: m
					} = r.a;
					switch (n) {
						case s:
							return c(i, m, t);
						case o:
							return c(i, a, t);
						case l:
							return u(i, t);
						default:
							return d
					}
				}
		},
		"./src/chat/models/Channel/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "f", (function() {
				return c
			})), i.d(t, "e", (function() {
				return m
			})), i.d(t, "d", (function() {
				return h
			})), i.d(t, "c", (function() {
				return p
			})), i.d(t, "b", (function() {
				return _
			}));
			var n, s = i("./src/chat/constants/channels.ts"),
				r = i("./src/chat/models/Channel/subreddit.ts"),
				o = i("./src/chat/models/Channel/utils/index.ts"),
				d = i("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				l = i("./src/chat/models/Message/index.ts"),
				a = i("./src/chat/models/User/inviter.ts"),
				u = i("./src/chat/models/User/member.ts");
			! function(e) {
				e[e.Direct = 0] = "Direct", e[e.Group = 1] = "Group", e[e.Subreddit = 2] = "Subreddit"
			}(n || (n = {}));
			s.b.UNSORTED, n.Direct;

			function c(e) {
				let t;
				const i = Object(o.d)(e);
				return i === n.Subreddit && (t = Object(r.b)(e)), i !== n.Direct && i !== n.Group && t || (t = function(e, t) {
					const {
						coverUrl: i,
						createdAt: s,
						customType: r,
						data: c,
						memberCount: m,
						name: g,
						isDistinct: w,
						unreadMessageCount: y,
						unreadMentionCount: v,
						myCountPreference: f,
						inviter: b,
						lastMessage: T,
						members: S,
						url: F,
						myMemberState: E,
						isFrozen: I,
						myMutedState: B,
						myRole: R
					} = e;
					return {
						channelId: Object(d.a)(F),
						channelSendbirdUrl: F,
						channelState: Object(o.b)(t, E),
						coverUrl: i,
						createdAt: Number(s),
						customType: r,
						data: c,
						maxLengthMessage: -1,
						memberCount: m,
						name: g,
						isFrozen: I,
						isModerator: p(R),
						isUserMuted: _(B),
						isMuted: h(f),
						inviter: Object(a.a)(b),
						type: w ? n.Direct : n.Group,
						lastMessage: T ? Object(l.b)(T) : void 0,
						unreadMessageCount: y,
						unreadMentionCount: v,
						members: Object(u.a)(S),
						fetchingFirstMessage: !1,
						fetchingMessages: !1,
						fetchingMessagesError: !1,
						hasMoreMessages: !1,
						isMessageListLoaded: !1
					}
				}(e)), t
			}

			function m(e) {
				const t = {};
				for (let i = 0, n = e.length; i < n; i++) {
					const n = c(e[i]);
					n && (t[n.channelId] = n)
				}
				return t
			}
			const h = e => e === s.c.Off,
				p = e => "operator" === e,
				_ = e => "muted" === e
		},
		"./src/chat/models/Channel/subreddit.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return c
			})), i.d(t, "b", (function() {
				return m
			})), i.d(t, "c", (function() {
				return h
			})), i.d(t, "a", (function() {
				return _
			}));
			var n = i("./src/chat/constants/channels.ts"),
				s = i("./src/chat/models/Channel/index.ts"),
				r = i("./src/chat/models/Channel/utils/index.ts"),
				o = i("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				d = i("./src/chat/models/Message/index.ts"),
				l = i("./src/chat/models/Subreddit/index.ts"),
				a = i("./src/chat/models/User/inviter.ts"),
				u = i("./src/chat/models/User/member.ts");
			const c = e => {
				try {
					const t = JSON.parse(e);
					if (t) {
						const {
							room_description: e,
							subreddit: i
						} = t, n = i && i.id;
						if (i && n) return {
							subredditId: n,
							subreddit: Object(l.b)(i),
							description: e || ""
						}
					}
				} catch (t) {
					return void 0
				}
			};

			function m(e, t) {
				const {
					coverUrl: i,
					createdAt: n,
					customType: l,
					data: m,
					memberCount: h,
					name: p,
					unreadMessageCount: _,
					unreadMentionCount: g,
					inviter: w,
					isPublic: y,
					lastMessage: v,
					members: f,
					url: b,
					myMemberState: T,
					isFrozen: S,
					myCountPreference: F,
					myMutedState: E,
					myRole: I
				} = e, B = c(m);
				if (!B) return;
				const {
					description: R,
					subreddit: x,
					subredditId: C
				} = B;
				return {
					channelId: Object(o.a)(b),
					channelSendbirdUrl: b,
					channelState: Object(r.b)(t, T),
					coverUrl: i,
					createdAt: Number(n),
					customType: l,
					data: m,
					maxLengthMessage: -1,
					memberCount: h,
					name: p,
					isPublic: y,
					isFrozen: S,
					isModerator: Object(s.c)(I),
					isMuted: Object(s.d)(F),
					isUserMuted: Object(s.b)(E),
					inviter: Object(a.a)(w),
					type: s.a.Subreddit,
					lastMessage: v ? Object(d.b)(v) : void 0,
					unreadMessageCount: _,
					unreadMentionCount: g,
					members: Object(u.a)(f),
					fetchingFirstMessage: !1,
					fetchingMessages: !1,
					fetchingMessagesError: !1,
					hasMoreMessages: !1,
					isMessageListLoaded: !1,
					customData: {
						description: R.trim(),
						subreddit: x,
						subredditId: C
					}
				}
			}

			function h(e, t) {
				const i = {};
				return e.forEach(e => {
					const n = m(e, t);
					n && (i[n.channelId] = n)
				}), {
					channels: i
				}
			}
			const p = e => {
				if (e && e.url && e.name && e.subreddit && e.subreddit.id && e.description && e.member_count) return {
					channelId: Object(o.a)(e.url),
					channelSendbirdUrl: e.url,
					channelState: n.b.PARTIAL,
					fetchingMessages: !1,
					fetchingMessagesError: !1,
					hasMoreMessages: !1,
					isMessageListLoaded: !1,
					fetchingFirstMessage: !1,
					name: e.name,
					type: s.a.Subreddit,
					memberCount: e.member_count,
					customData: {
						subredditId: e.subreddit.id,
						description: e.description
					}
				}
			};

			function _(e) {
				const t = {};
				return e.forEach(e => {
					if (e) {
						const i = p(e);
						i && (t[i.channelId] = i)
					}
				}), {
					channels: t
				}
			}
		},
		"./src/chat/models/Channel/utils/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return p
			})), i.d(t, "e", (function() {
				return _
			})), i.d(t, "c", (function() {
				return g
			})), i.d(t, "b", (function() {
				return w
			})), i.d(t, "d", (function() {
				return y
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = i("./node_modules/lodash/keyBy.js"),
				s = i.n(n),
				r = i("./node_modules/lodash/pickBy.js"),
				o = i.n(r),
				d = i("./node_modules/lodash/sortBy.js"),
				l = i.n(d),
				a = i("./node_modules/lodash/toArray.js"),
				u = i.n(a),
				c = i("./src/chat/constants/channels.ts"),
				m = i("./src/chat/constants/sendbird.ts"),
				h = i("./src/chat/models/Channel/index.ts");
			const p = e => m.a + e,
				_ = (e, t) => s()(l()(u()(e), t), "channelId");

			function g(e, t) {
				return o()(e, e => t.includes(e.type))
			}

			function w(e, t) {
				return (e || t || c.b.UNSORTED).toUpperCase()
			}

			function y(e) {
				const t = e.custom_type || e.customType;
				if ("string" == typeof t) {
					const e = t.split("_");
					switch (e.length && e[0]) {
						case "direct":
							return h.a.Direct;
						case "subreddit":
							return h.a.Subreddit;
						case "group":
							return h.a.Group
					}
				}
				return "boolean" == typeof e.is_super && e.is_super || "boolean" == typeof e.isSuper && e.isSuper ? h.a.Subreddit : "boolean" == typeof e.is_distinct && e.is_distinct || "boolean" == typeof e.isDistinct && e.isDistinct ? h.a.Direct : h.a.Group
			}
		},
		"./src/chat/models/Channel/utils/removeSendbirdPrefix.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = i("./src/chat/constants/sendbird.ts");
			t.a = e => e.replace(n.a, "")
		},
		"./src/chat/models/Message/adapter.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/chat/constants/messages.ts"),
				s = i("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				r = i("./src/chat/helpers/errors.ts");
			var o = i("./src/chat/helpers/urls/index.ts");
			const d = {
				text: e => ({
					type: n.b.TEXT,
					value: e
				}),
				post: e => ({
					type: n.b.POST,
					value: e,
					subreddit: Object(o.getSubredditFromUrl)(e)
				}),
				embedCollection: e => {
					const {
						url: t,
						embed: i
					} = function(e, t) {
						try {
							return JSON.parse(e)
						} catch (i) {
							return Object(r.b)(i), t
						}
					}(e, {
						embed: void 0,
						url: ""
					});
					if (t) return {
						type: n.b.EMBED,
						value: t,
						embed: i
					}
				},
				snoomoji: e => ({
					type: n.b.SNOOMOJI,
					value: e
				})
			};
			i.d(t, "b", (function() {
				return h
			})), i.d(t, "c", (function() {
				return _
			})), i.d(t, "a", (function() {
				return g
			}));
			const {
				TEXT: l,
				POST: a,
				EMBED: u,
				SNOOMOJI: c
			} = n.b, m = e => {
				try {
					return JSON.parse(e).v1
				} catch (t) {
					return {}
				}
			}, h = e => m(e).clientMessageId || "", p = e => ({
				channelIsPublic: e.channel_is_public,
				channelName: e.channel_name,
				channelId: e.channel_url && Object(s.a)(e.channel_url),
				messageId: e.message_id,
				messageValue: e.message_value,
				messageCreatedAt: e.message_created_at,
				reason: e.reason,
				reportedUserId: e.reported_user_id,
				reportedUserName: e.reported_user_name,
				subredditId: e.subreddit_id,
				subredditName: e.subreddit_name,
				actions: Object.assign({}, e.actions && e.actions.deleted && {
					deleted: {
						status: e.actions.deleted.status,
						userId: e.actions.deleted.user_id,
						userName: e.actions.deleted.user_name,
						updatedTs: e.actions.deleted.updated_ts
					}
				}, e.actions && e.actions.ignored && {
					ignored: {
						status: e.actions.ignored.status,
						userId: e.actions.ignored.user_id,
						userName: e.actions.ignored.user_name,
						updatedTs: e.actions.ignored.updated_ts
					}
				})
			}), _ = (e, t) => {
				const i = m(t);
				return Object.assign({}, ((e, t) => {
					if (t.snoomoji) return d[c](t.snoomoji);
					if (t.embed_data && t.embed_data.url) return d[a](t.embed_data.url);
					if (t.embed_collection) {
						const e = d[u](t.embed_collection);
						if (e) return e
					}
					return d[l](e)
				})(e, i), {
					clientMessageId: h(t),
					highlights: i.highlights || []
				}, i.report && {
					report: p(i.report)
				})
			}, g = function(e, t, i) {
				let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
				return {
					v1: Object.assign({
						clientMessageId: i,
						highlights: n
					}, t === c ? {
						snoomoji: e
					} : {}, t === a ? {
						embed_data: {
							url: e
						}
					} : {}, t === u ? {
						embed_collection: e
					} : {})
				}
			}
		},
		"./src/chat/models/Message/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return c
			})), i.d(t, "a", (function() {
				return m
			}));
			var n = i("./node_modules/uuid/v4.js"),
				s = i.n(n),
				r = i("./src/chat/constants/messages.ts"),
				o = i("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				d = i("./src/chat/models/Message/adapter.ts"),
				l = i("./src/chat/selectors/messages.ts"),
				a = i("./src/chat/selectors/user.ts");

			function u(e) {
				if (e && e.messageType === r.c.USER) {
					return e.sender
				}
			}

			function c(e) {
				if (e && e.messageType === r.c.USER) {
					const {
						channelUrl: t,
						messageType: i,
						messageId: n,
						createdAt: s,
						updatedAt: l,
						channelType: a,
						message: c,
						data: m,
						customType: h
					} = e;
					return {
						channelId: Object(o.a)(t),
						channelSendbirdUrl: t,
						messageType: r.c[i],
						messageId: n,
						createdAt: s,
						updatedAt: l,
						channelType: a,
						data: m,
						messageData: Object(d.c)(c, m),
						sender: u(e),
						customType: h
					}
				}
			}

			function m(e, t, i, n) {
				const o = s()(),
					u = Object(l.c)(e, i),
					c = JSON.stringify(Object(d.a)(i, n, o, u));
				return {
					channelId: t,
					clientMessageId: o,
					createdAt: (new Date).getTime(),
					data: c,
					messageData: Object(d.c)(i, c),
					messageType: r.c.PENDING,
					error: !1,
					sender: {
						nickname: Object(a.b)(e),
						userId: Object(a.a)(e)
					}
				}
			}
		},
		"./src/chat/models/Promo/index.ts": function(e, t, i) {
			"use strict";
			var n, s, r;
			i.d(t, "a", (function() {
					return n
				})), i.d(t, "b", (function() {
					return s
				})), i.d(t, "c", (function() {
					return r
				})), i.d(t, "d", (function() {
					return o
				})), i.d(t, "e", (function() {
					return d
				})),
				function(e) {
					e.SubredditChatFtux = "displaySubredditChatFtux"
				}(n || (n = {})),
				function(e) {
					e.NSFWWarning = "displayNSFWWarning"
				}(s || (s = {})),
				function(e) {
					e.LegacyNSFWWarning = "nsfwWarning", e.LegacySubredditChatFtux = "firstTimeUserExp"
				}(r || (r = {}));
			const o = e => {
					const t = {};
					for (const i in e) switch (i) {
						case n.SubredditChatFtux:
							t[i] = e[i]
					}
					return t
				},
				d = e => {
					for (const t in e)
						if (!0 === e[t]) return !0;
					return !1
				}
		},
		"./src/chat/models/Subreddit/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return s
			})), i.d(t, "a", (function() {
				return r
			})), i.d(t, "c", (function() {
				return o
			}));
			var n = i("./src/chat/models/Channel/subreddit.ts");

			function s(e) {
				const {
					id: t,
					name: i,
					description: n,
					icon_img: s,
					key_color: r,
					nsfw: o
				} = e;
				return {
					id: t,
					name: i,
					description: n,
					iconImg: s,
					keyColor: r,
					nsfw: o
				}
			}

			function r(e) {
				const t = {};
				return e.forEach(e => {
					if (e && e.subreddit) {
						const i = s(e.subreddit);
						t[i.id] = i
					}
				}), t
			}

			function o(e) {
				const t = {};
				return e.forEach(e => {
					const i = Object(n.d)(e.data);
					if (i) {
						const {
							subreddit: e
						} = i;
						e && (t[e.id] = e)
					}
				}), t
			}
		},
		"./src/chat/models/User/inviter.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return o
			}));
			const n = "t2_1qwk",
				s = "reddit";

			function r(e) {
				if (e) return {
					id: e.user_id,
					name: e.nickname
				}
			}

			function o(e) {
				return {
					id: e ? e.userId : n,
					name: e ? e.nickname : s
				}
			}
		},
		"./src/chat/models/User/member.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var n = i("./node_modules/lodash/isArray.js"),
				s = i.n(n);
			const r = e => s()(e) && e.map(e => ({
				id: e.user_id || e.userId,
				isOnline: e.is_online || e.isOnline,
				lastSeenAt: e.last_seen_at || e.lastSeenAt,
				name: e.nickname,
				profileUrl: e.profile_url || e.profileUrl,
				state: e.state,
				isBlockedByMe: e.isBlockedByMe
			})).filter(Boolean) || []
		},
		"./src/chat/reducers/subscribe.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return s
			}));
			const n = (e, t) => t,
				s = (e, t) => () => t(e.getState().actionListener)
		},
		"./src/chat/selectors/channels.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s = i("./node_modules/lodash/flatten.js"),
				r = i.n(s),
				o = i("./node_modules/lodash/sortBy.js"),
				d = i.n(o),
				l = i("./node_modules/lodash/toArray.js"),
				a = i.n(l),
				u = i("./node_modules/lodash/uniqBy.js"),
				c = i.n(u),
				m = i("./node_modules/lodash/values.js"),
				h = i.n(m);
			! function(e) {
				e.DEFAULT = "default", e.BANNED = "banned", e.KICKED = "kicked"
			}(n || (n = {}));
			var p = i("./src/chat/constants/channels.ts");
			i("./src/chat/models/Channel/index.ts");
			i.d(t, "n", (function() {
				return _
			})), i.d(t, "r", (function() {
				return g
			})), i.d(t, "s", (function() {
				return w
			})), i.d(t, "t", (function() {
				return y
			})), i.d(t, "p", (function() {
				return b
			})), i.d(t, "h", (function() {
				return T
			})), i.d(t, "k", (function() {
				return S
			})), i.d(t, "l", (function() {
				return F
			})), i.d(t, "w", (function() {
				return E
			})), i.d(t, "x", (function() {
				return I
			})), i.d(t, "m", (function() {
				return B
			})), i.d(t, "j", (function() {
				return R
			})), i.d(t, "u", (function() {
				return x
			})), i.d(t, "b", (function() {
				return C
			})), i.d(t, "O", (function() {
				return k
			})), i.d(t, "g", (function() {
				return O
			})), i.d(t, "f", (function() {
				return N
			})), i.d(t, "y", (function() {
				return j
			})), i.d(t, "z", (function() {
				return P
			})), i.d(t, "A", (function() {
				return A
			})), i.d(t, "E", (function() {
				return L
			})), i.d(t, "e", (function() {
				return D
			})), i.d(t, "P", (function() {
				return G
			})), i.d(t, "F", (function() {
				return M
			})), i.d(t, "C", (function() {
				return U
			})), i.d(t, "c", (function() {
				return q
			})), i.d(t, "G", (function() {
				return W
			})), i.d(t, "H", (function() {
				return z
			})), i.d(t, "J", (function() {
				return H
			})), i.d(t, "I", (function() {
				return V
			})), i.d(t, "i", (function() {
				return Y
			})), i.d(t, "v", (function() {
				return K
			})), i.d(t, "o", (function() {
				return Q
			})), i.d(t, "K", (function() {
				return J
			})), i.d(t, "a", (function() {
				return X
			})), i.d(t, "L", (function() {
				return Z
			})), i.d(t, "D", (function() {
				return $
			})), i.d(t, "d", (function() {
				return ee
			})), i.d(t, "q", (function() {
				return te
			})), i.d(t, "M", (function() {
				return ie
			})), i.d(t, "N", (function() {
				return ne
			})), i.d(t, "B", (function() {
				return se
			}));
			const _ = e => e.channels.invited.sortedKeys.length,
				g = e => e.channels.joined.sortedKeys.length,
				w = e => r()(a()(e.channels.subreddit.joined.sortedKeys)).length,
				y = (e, t, i) => {
					const n = t && h()(t.channels) || i || [],
						s = (e => {
							const {
								models: t,
								subreddit: {
									joined: i
								}
							} = e.channels;
							return r()(h()(i.sortedKeys)).map(e => t[e])
						})(e),
						o = c()([...s, ...n], e => e.channelId),
						d = v(e, o);
					return f(e, d)
				},
				v = (e, t) => {
					const i = e.subreddits.models;
					return d()(t, [e => i[e.customData.subredditId].name.toLowerCase()], e => e.name.toLowerCase())
				},
				f = (e, t) => {
					const i = e.subreddits.models;
					return t.reduce((e, t) => {
						const {
							channelId: n,
							customData: {
								subredditId: s
							}
						} = t, r = i[s].name.toLowerCase();
						return e[r] = e[r] || [], e[r].push(n), e
					}, {})
				},
				b = e => e.channels.subreddit.invited.sortedKeys.length,
				T = (e, t) => t ? e.channels.models[t] : void 0,
				S = e => {
					const {
						currentPage: t
					} = e.platform, i = t && t.urlParams.channelId;
					if (i) return T(e, i)
				},
				F = e => {
					const t = S(e);
					if (t && t.channelState === p.b.JOINED) return t
				},
				E = e => {
					const {
						channelId: t
					} = e.channels.selected;
					if (t) return T(e, t)
				},
				I = e => e.channels.selected && e.channels.selected.channelId,
				B = e => S(e) || E(e),
				R = (e, t) => {
					const i = t || B(e);
					return i && i.members && i.members.map(e => e.id)
				},
				x = e => {
					const {
						user: t
					} = e, i = B(e);
					if (i && i.members) return i.members.filter(e => e.id !== t.account.id)
				},
				C = (e, t) => {
					const i = x(e);
					return !(!i || !i.find(e => !!t[e.id].isNSFW))
				},
				k = e => {
					return !!F(e)
				},
				O = e => {
					const t = x(e);
					return t && t.filter(e => e.isBlockedByMe)
				},
				N = e => {
					const t = [],
						i = e.user.account.id;
					return h()(e.channels.models).forEach(e => {
						if (e && e.members) {
							const n = e.members.filter(e => e.id !== i).map(e => e.id);
							n.length && t.push(n)
						}
					}), t.length && t
				},
				j = e => h()(e.messages.models).filter(t => t.channelId === e.channels.selected.channelId),
				P = e => h()(e.messages.pending).filter(t => t.channelId === e.channels.selected.channelId),
				A = (e, t) => {
					const i = E(e);
					return i && i[t]
				},
				L = e => e.channels.joined.hasMoreChannels,
				D = e => e.channels.joined.fetchingChannels,
				G = e => e.channels.joined.sortedKeys.map(t => e.channels.models[t]),
				M = e => e.channels.inviteListExpanded,
				U = e => e.channels.invited.hasMoreChannels,
				q = e => e.channels.invited.fetchingChannels,
				W = e => e.channels.invited.sortedKeys.map(t => e.channels.models[t]),
				z = e => {
					const t = E(e);
					return t && t.inviter && t.inviter.name
				},
				H = e => {
					const t = S(e);
					return !(!t || !t.isMessageListLoaded)
				},
				V = e => e.channels.isCreatingChannel,
				Y = e => {
					const t = E(e);
					return t && t.channelState
				},
				K = e => {
					const {
						sortedKeys: t
					} = e.channels.subreddit.recommended, i = t.map(t => e.channels.models[t]);
					let n = [];
					return i && i.length && (n = i.filter(e => !(!e || e.channelState === p.b.JOINED))), n
				},
				Q = e => {
					const {
						sortedKeys: t
					} = e.channels.subreddit.invited;
					return t && t.map(t => e.channels.models[t])
				},
				J = (e, t) => !(!t || !e.channels.subreddit.recommended.sortedKeys.includes(t)),
				X = e => {
					const t = S(e);
					return !(!t || !t.isModerator)
				},
				Z = (e, t) => {
					const i = T(e, t);
					return !(!i || !J(e, t) || i.channelState === p.b.JOINED)
				},
				$ = e => e.channels.subreddit.invited.hasMoreChannels,
				ee = e => e.channels.subreddit.invited.fetchingChannels,
				te = (e, t) => {
					if (t) return e.channels.subreddit.kicked.sortedKeys.includes(t) ? n.KICKED : e.channels.subreddit.banned.sortedKeys.includes(t) ? n.BANNED : n.DEFAULT
				},
				ie = e => {
					const t = B(e);
					return !(!t || !t.isFrozen)
				},
				ne = e => {
					const t = B(e);
					return !(!t || !t.isMuted)
				},
				se = e => {
					const t = B(e);
					return t && t.customData && t.customData.subreddit && t.customData.subreddit.id
				}
		},
		"./src/chat/selectors/messages.ts": function(e, t, i) {
			"use strict";
			i.d(t, "j", (function() {
				return d
			})), i.d(t, "i", (function() {
				return l
			})), i.d(t, "d", (function() {
				return a
			})), i.d(t, "e", (function() {
				return u
			})), i.d(t, "f", (function() {
				return c
			})), i.d(t, "g", (function() {
				return m
			})), i.d(t, "h", (function() {
				return h
			})), i.d(t, "b", (function() {
				return p
			})), i.d(t, "c", (function() {
				return _
			})), i.d(t, "a", (function() {
				return g
			})), i.d(t, "k", (function() {
				return w
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/lib/linkMatchers/customLinks.ts"),
				s = i("./src/chat/helpers/unreadCount.ts"),
				r = i("./src/chat/selectors/channels.ts"),
				o = i("./src/chat/selectors/promos.ts");
			const d = e => {
					const t = Object(r.n)(e);
					return e.messages.unread.basicChannelCount - t || 0
				},
				l = e => e.messages.unread,
				a = (e, t) => {
					if (t) return e.messages.models[t]
				},
				u = (e, t) => {
					const i = a(e, t);
					return i && i.sender
				},
				c = (e, t) => {
					const i = u(e, t);
					return i && i.userId
				},
				m = (e, t) => {
					const i = a(e, t);
					return i && i.messageData.type
				},
				h = (e, t) => e.messages.pending[t],
				p = e => {
					const t = Object(r.k)(e);
					if (t && t.firstMessageId) return e.messages.models[t.firstMessageId]
				},
				_ = (e, t) => {
					const i = Object(r.a)(e);
					return Object.keys(n.b).map(e => i && t.includes("@" + n.b[e]) && n.b[e]).filter(e => e)
				},
				g = e => {
					const t = l(e),
						i = Object(o.b)(e);
					return Object(s.a)(t, i)
				},
				w = e => {
					const t = l(e);
					return Object(s.b)(t)
				}
		},
		"./src/chat/selectors/promos.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return s
			})), i.d(t, "a", (function() {
				return r
			}));
			const n = e => e.promos,
				s = e => e.promos.displaySubredditChatFtux,
				r = e => e.promos.displayNSFWWarning
		},
		"./src/chat/selectors/user.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return s
			})), i.d(t, "f", (function() {
				return r
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "e", (function() {
				return d
			})), i.d(t, "d", (function() {
				return l
			}));
			const n = e => e.user.account.id,
				s = e => e.user.account.name,
				r = e => !!e.user.account,
				o = e => e.user.session,
				d = e => !!e.user.account && e.user.account.seenSubredditChatFtux,
				l = e => e.user.account
		},
		"./src/config.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/env/index.ts");
			i("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = i("./src/telemetry/models/App.ts");
			const r = {
				https: "true" === {}.HTTPS,
				accountManagerOrigin: (Object(n.b)(), "https://www.reddit.com"),
				adsPath: {}.ADS_URL || "/api/request_promo.json",
				dfpSlotPrefix: {}.DFP_SLOT_PREFIX || "/32173961/desktop",
				apiHeaders: (e => e.split(";").reduce((e, t) => {
					if (t && t.indexOf("=") > 0) {
						const [i, n] = t.split("=");
						e[i.trim()] = n.trim()
					}
					return e
				}, {}))({}.API_HEADERS || ""),
				apiPassThroughHeaders: (e => e.length <= 0 ? [] : e.split(";"))({}.API_PASS_THROUGH_HEADERS || ""),
				appName: {}.APP_NAME || "desktop2x",
				assetPath: "https://www.redditstatic.com/desktop2x",
				cookieDomain: ".reddit.com",
				giphyApiKey: "k2kwyMA6VeyHM6ZRT96OXDGaersnx73Z",
				mediaUrl: "https://www.redditmedia.com",
				port: {}.PORT ? parseInt({}.PORT) : 8888,
				postErrorsUrl: "/errors",
				redditUrl: "https://www.reddit.com",
				apiUrl: "https://www.reddit.com",
				redirectUri: {}.REDIRECT_URI || "https://m.reddit.com/oauth2/token",
				redditHelpUrl: {
					chat: "https://www.reddithelp.com/en/categories/using-reddit/chat",
					modHelpCenter: "https://mods.reddithelp.com/",
					submitRequest: {
						copyrightDmca: "https://www.reddithelp.com/en/submit-request/copyright-dmca",
						trademarkViolation: "https://www.reddithelp.com/en/submit-request/trademark-violation-form"
					},
					privacyQuestions: "https://www.reddithelp.com/en/categories/privacy"
				},
				gatewayUrl: "https://gateway.reddit.com",
				metaUrl: {}.META_URL || "https://meta-api.reddit.com",
				oauthUrl: "https://oauth.reddit.com",
				gqlUrl: "https://gql.reddit.com",
				sendbirdServiceUrl: "https://s.reddit.com",
				sendbirdAppId: "2515BDA8-9D3A-47CF-9325-330BC37ADA13",
				shortUrl: {}.SHORT_URL || "https://s.reddit.com",
				streamingApiUrl: "https://strapi.reddit.com",
				embedlyApiKey: {}.EMBEDLY_KEY || "522baf40bd3911e08d854040d3dc5c07",
				pushNotificationApplicationServerKey: {}.PUSH_NOTIFICATION_APPLICATION_SERVER_KEY || "BJ2nJR9HeBwCWe4s7bKfKgWZkx2Q8Q59yBdSVLxWIhPaWuzHDUxQ2YJnhLvbAVujWBZYuQv60V6a6oipSw09FT0",
				ogImage: "https://www.redditstatic.com/icon.png",
				oldRedditUrl: "https://old.reddit.com",
				processingImageUrl: "https://www.redditstatic.com/image-processing.png",
				processingAvatarImageUrl: "https://www.redditstatic.com/avatars",
				sentryClientPublicURL: "https://6b5ce051b2ed4032bd906af3de0630cd@oops.redditmedia.com/11",
				statsdHost: {}.STATSD_HOST,
				statsdPort: {}.STATSD_PORT,
				statsdDebug: (e => {
					try {
						return !!JSON.parse(e)
					} catch (t) {
						return !1
					}
				})({}.STATSD_DEBUG || ""),
				statsdPrefix: {}.STATSD_PREFIX || "",
				statsdSocketTimeout: parseInt({}.STATSD_TIMEOUT || "100"),
				recaptchaSitekey: {}.RECAPTCHA_SITEKEY || "6LeTnxkTAAAAAN9QEuDZRpn90WwKk_R1TRW_g-JC",
				gtmContainerId: {}.GTM_CONTAINER_ID || "GTM-5XVNS82",
				adblockId: "a2ba06a4-a2ec-4182-b295-c15ffe5f1181",
				logSample: {
					request404: .1,
					request500URIError: 5,
					serverSetCookieAfterRes: 10,
					failToSetLOID: 10,
					tooManyRequests: .05
				},
				telemetry: {
					appName: {
						profilesR2: Object(n.b)() ? s.TelemetryAppName.web : s.TelemetryAppName.webDev,
						redesign: Object(n.b)() ? s.TelemetryAppName.web2x : s.TelemetryAppName.web2xDev,
						redesignR2: Object(n.b)() ? s.TelemetryAppName.desktop2x : s.TelemetryAppName.desktop2xDev,
						chat2x: Object(n.b)() ? s.TelemetryAppName.web2x : s.TelemetryAppName.web2xDev,
						chatR2: Object(n.b)() ? s.TelemetryAppName.web : s.TelemetryAppName.webDev
					},
					postConsumedThreshold: 2e3,
					commentConsumedThreshold: 2e3,
					commentSampleRate: .01
				},
				stripe: {
					apiKey: "pk_live_sD8LeDtVnlJwAGf51jLygWpH",
					economyKey: Object(n.b)() ? "pk_live_tF9aUVWi0EYaLI2PlX64Bg2x" : "pk_test_JdtxSeAF4NWzMbtc7R7PshMT"
				},
				paypal: {
					apiKey: {}.PAYPAL_API_KEY || (Object(n.b)() ? "AXHUGZNCrshqynIpOLkQjqlsrA26Knvf4EB5w1RKfsdxKdsA5WSNo9H_Gng6plKyc48qGhXtmwcYahRy" : "AXH6yPVeFV8sxT1zMvzr8NyPMXx_YkYui1XCy3btQ_s1Zz2R68JC57PqQ2mrj6la-G8y-7UmZyKVsDaR"),
					braintreeApiKey: {}.BRAINTREE_PAYPAL_KEY || (Object(n.b)() ? "Aflf49iitQXbetXO8Ufm6q7zjADO-15_X1tzZqv-hveq4htWjHYNxEmrtB0s0yyyLOCG_ceCB-32EtdY" : "AXH6yPVeFV8sxT1zMvzr8NyPMXx_YkYui1XCy3btQ_s1Zz2R68JC57PqQ2mrj6la-G8y-7UmZyKVsDaR"),
					env: {}.PAYPAL_API_KEY || Object(n.b)() ? "production" : "sandbox",
					buttons: {
						premium: "LAYT3KA5EVVTJ",
						coins500: "SNCZX9LADYMT4",
						coins1100: "6P6X4LTAKNDGG",
						coins1800: "2P5FZYZL42NME",
						coins7200: "W8BKWZXBSWZGC",
						coins40000: "Y9LZ5M2W6VT3A",
						coinsGild500: "BPVKB5BY8HXRA",
						coinsGild1100: "TPGZ3HZ3KE5TS",
						coinsGild1800: "YXZDTMAGNMMEA",
						coinsGild7200: "MQDLLC4FBNSZG",
						coinsGild40000: "T3RL7U6STH7WL"
					}
				},
				releaseNotesSubredditMap: {}.RELEASE_NOTES_SUB_MAP ? JSON.parse({}.RELEASE_NOTES_SUB_MAP) : void 0,
				xpromoSeq: "sequence",
				xpromoSeqSrc: "https://www.reddit.com/sequence/embed",
				xpromoSeqSandbox: "sequence_playground"
			};
			t.a = r
		},
		"./src/higherOrderComponents/addOverlayEvents.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return c
			}));
			var n, s = i("./node_modules/lodash/debounce.js"),
				r = i.n(s),
				o = i("./node_modules/react/index.js"),
				d = i.n(o),
				l = i("./node_modules/react-redux/es/index.js"),
				a = i("./src/lib/constants/index.ts"),
				u = i("./src/reddit/actions/overlayEvents.ts");

			function c(e, t) {
				class i extends o.Component {
					constructor(e) {
						super(e), this.handleKeyDown = e => {
							e.keyCode === a.E && this.props.onKeyDown(e)
						}, this.handleMouseClick = e => {
							this.props.onMouseClick(e)
						}, this.handleResize = r()(e => {
							this.props.onResize(e)
						}, 250, {
							leading: !0
						})
					}
					componentDidMount() {
						t && -1 !== t.indexOf(n.Keydown) || document.addEventListener("keydown", this.handleKeyDown), t && -1 !== t.indexOf(n.Click) || document.addEventListener("click", this.handleMouseClick), t && -1 !== t.indexOf(n.Resize) || window.addEventListener("resize", this.handleResize)
					}
					componentWillUnmount() {
						document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("click", this.handleMouseClick), window.removeEventListener("resize", this.handleResize)
					}
					render() {
						return d.a.createElement(e, this.props)
					}
				}
				return Object(l.b)(null, e => ({
					onKeyDown: t => e(u.d({
						event: t
					})),
					onMouseClick: t => e(u.e({
						event: t
					})),
					onResize: t => e(u.f({
						event: t
					}))
				}))(i)
			}! function(e) {
				e.Click = "click", e.Keydown = "keydown", e.Resize = "resize"
			}(n || (n = {}))
		},
		"./src/higherOrderComponents/asTooltip.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/lodash/omit.js"),
				s = i.n(n),
				r = i("./node_modules/react/index.js"),
				o = i.n(r),
				d = i("./src/lib/fastdom/index.ts"),
				l = i("./src/reddit/components/Portal/index.tsx"),
				a = i("./src/higherOrderComponents/addOverlayEvents.tsx"),
				u = i("./src/higherOrderComponents/sizeMe.tsx"),
				c = i("./src/reddit/components/HiddenDiv.m.less"),
				m = i.n(c),
				h = i("./src/lib/lessComponent.tsx").a.div("Component", m.a);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			i.d(t, "a", (function() {
				return y
			}));
			const _ = ["left", "bottom"],
				g = ["left", "top"],
				w = e => {
					let {
						container: t,
						containerHeight: i,
						excludeContainerPosition: n,
						isFixed: s,
						targetBox: r,
						isOverlayOff: o,
						targetPosition: d,
						tooltipSize: l,
						tooltipPosition: a
					} = e;
					const u = document.body,
						c = u.clientTop || 0,
						m = u.clientLeft || 0,
						[h, p, _, g] = t ? [t.scrollLeft, t.scrollTop, t.scrollWidth, i || t.scrollHeight] : [window.pageXOffset, window.pageYOffset, window.innerWidth, document.body.scrollHeight],
						w = {
							bottom: r.bottom,
							center: r.top + r.height / 2,
							top: r.top
						} [d[1]] + {
							bottom: -l.height,
							center: -l.height / 2,
							top: 0
						} [a[1]],
						y = {
							left: r.left,
							center: r.left + r.width / 2,
							right: r.right
						} [d[0]] + {
							left: 0,
							center: -l.width / 2,
							right: -l.width
						} [a[0]];
					let v, f;
					s ? (v = w - c, f = y - m) : (f = h + m + y, v = p + c + w);
					const b = {
							left: f,
							top: v
						},
						T = {
							bottom: Math.max(0, v + l.height - g),
							left: Math.max(0, 0 - f),
							right: Math.max(0, f + l.width - _),
							top: Math.max(0, 0 - v)
						};
					if (_ > 320 && g > 667 && !o && (Boolean(T.left) !== Boolean(T.right) && (T.left ? b.left = 0 : b.left -= T.right), Boolean(T.top) !== Boolean(T.bottom) && (T.top ? b.top = 0 : b.top -= T.bottom)), n && t) {
						const e = t.getBoundingClientRect();
						b.top = b.top - e.top, b.left = b.left - e.left
					}
					return {
						overflow: T,
						style: b
					}
				};

			function y(e, t) {
				const i = Object(a.b)(e, t),
					n = Object(u.a)(e => {
						const {
							container: t,
							containerHeight: n,
							domEl: r,
							excludeContainerPosition: d,
							isFixed: l,
							target: a,
							isOverlayOff: u,
							targetPosition: c,
							tooltipPosition: m
						} = e;
						if (!a || !r) return null;
						const h = r.getBoundingClientRect(),
							y = a.getBoundingClientRect(),
							v = w({
								container: t,
								containerHeight: n,
								excludeContainerPosition: d,
								isOverlayOff: u,
								isFixed: !!l,
								targetBox: y,
								targetPosition: c || _,
								tooltipSize: {
									height: h.height,
									width: h.width
								},
								tooltipPosition: m || g
							}),
							f = s()(e, "target", "targetPosition", "tooltipPosition"),
							b = e.style ? Object.assign({}, v.style, e.style) : v.style;
						return o.a.createElement(i, p({}, f, {
							overflow: v.overflow,
							style: b,
							targetBox: y
						}))
					});
				class c extends r.Component {
					constructor() {
						super(...arguments), this.state = {
							containerHeight: null,
							isOpen: !1,
							mounted: !1
						}, this.target = null
					}
					componentDidMount() {
						this.target = this.props.tooltipTarget || document.getElementById(this.props.tooltipId), this.props.isOpen && d.a.write(() => {
							this.setState({
								mounted: !0
							})
						})
					}
					componentDidUpdate() {
						this.target = this.props.tooltipTarget || document.getElementById(this.props.tooltipId)
					}
					static getDerivedStateFromProps(e, t) {
						if (t.isOpen === e.isOpen) return null;
						return {
							containerHeight: e.isOpen && !t.isOpen && e.container ? e.container.scrollHeight : null,
							isOpen: e.isOpen
						}
					}
					render() {
						if (!this.props.isOpen) return this.props.renderContentsHidden ? o.a.createElement(h, null, this.props.children) : null;
						const {
							isOpen: e,
							tooltipId: t,
							tooltipTarget: i
						} = this.props, {
							containerHeight: r,
							mounted: d
						} = this.state, a = s()(this.props, "isOpen"), u = t ? this.target : i, c = "".concat(e, "-").concat(d, "-").concat(t || "");
						return o.a.createElement(l.a, {
							key: c,
							container: this.props.container
						}, o.a.createElement(n, p({}, a, {
							containerHeight: r,
							target: u
						})))
					}
				}
				return c
			}
		},
		"./src/higherOrderComponents/makeAsync.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var n = i("./node_modules/react/index.js"),
				s = i.n(n);

			function r(e) {
				var t;
				return (t = class t extends s.a.Component {
					constructor(e) {
						super(e), this.mounted = !1, this.state = {
							Component: t.Component
						}
					}
					componentDidMount() {
						this.mounted = !0, this.state.Component !== e.ErrorComponent && e.getComponent().then(e => {
							t.Component = e, this.mounted && this.setState({
								Component: e
							})
						}, t => (this.mounted && this.setState({
							Component: e.ErrorComponent
						}), Promise.reject(t)))
					}
					componentWillUnmount() {
						this.mounted = !1
					}
					render() {
						const t = this.state.Component || e.LoadingComponent;
						return s.a.createElement(t, this.props)
					}
				}).Component = null, t
			}
		},
		"./src/higherOrderComponents/sizeMe.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/lodash/omit.js"),
				s = i.n(n),
				r = i("./node_modules/react/index.js"),
				o = i.n(r),
				d = i("./node_modules/react-dom/index.js"),
				l = i.n(d);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}

			function u(e) {
				return e.displayName || e.name || "Component"
			}
			class c extends r.Component {
				render() {
					return r.Children.only(this.props.children)
				}
			}
			c.displayName = "SizeMeReferenceWrapper";
			const m = e => {
				let {
					style: t
				} = e;
				const i = {
					style: t || {
						width: "100%",
						height: "100%"
					}
				};
				return o.a.createElement("div", i)
			};
			m.displayName = "SizeMePlaceholder", t.a = function(e) {
				const t = function(e) {
					const t = t => {
						const {
							domEl: i,
							explicitRef: n,
							placeholder: r,
							size: d,
							style: l
						} = t, u = s()(t, "explicitRef", "size", "style"), h = "object" != typeof d || "number" != typeof d.width && "number" != typeof d.height, p = {
							domEl: i,
							style: l
						};
						"object" == typeof d && (p.size = d);
						const _ = h && !1 !== r ? o.a.createElement(m, {
							style: l
						}) : o.a.createElement(e, a({}, p, u));
						return o.a.createElement(c, {
							ref: n
						}, _)
					};
					return t.displayName = "SizeMeRenderer(".concat(u(e), ")"), t
				}(e);
				class i extends o.a.Component {
					constructor() {
						super(...arguments), this.state = {
							width: void 0,
							height: void 0
						}, this.refCallback = e => {
							this.reactInst = e
						}, this.hasSizeChanged = (e, t) => {
							const i = e,
								n = t;
							return Number(i.height).toFixed(0) !== Number(n.height).toFixed(0) || Number(i.width).toFixed(0) !== Number(n.width).toFixed(0)
						}, this.checkIfSizeChanged = e => {
							const {
								width: t,
								height: i
							} = e.getBoundingClientRect(), n = {
								width: t,
								height: i
							};
							this.hasSizeChanged(this.state, n) && this.setState(n)
						}
					}
					componentDidMount() {
						this.handleDOMNode()
					}
					componentDidUpdate() {
						this.handleDOMNode()
					}
					componentWillUnmount() {
						this.hasSizeChanged = () => !1, this.checkIfSizeChanged = e => void 0, this.domEl && (this.domEl = null)
					}
					handleDOMNode() {
						const e = this.reactInst && l.a.findDOMNode(this.reactInst);
						e ? (this.domEl = e, this.checkIfSizeChanged(this.domEl)) : this.domEl && (this.domEl = null)
					}
					render() {
						const e = Object.assign({}, this.state);
						return o.a.createElement(t, a({
							domEl: this.domEl,
							explicitRef: this.refCallback,
							size: e
						}, this.props))
					}
				}
				return i.displayName = "SizeMe(".concat(u(e), ")"), i
			}
		},
		"./src/i18n/translatedFbts lazy recursive ^\\.\\/.*\\.json$": function(e, t, i) {
			var n = {
				"./en-US.json": ["./src/i18n/translatedFbts/en-US.json", "translations/en-US-json"]
			};

			function s(e) {
				if (!i.o(n, e)) return Promise.resolve().then((function() {
					var t = new Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}));
				var t = n[e],
					s = t[0];
				return i.e(t[1]).then((function() {
					return i.t(s, 3)
				}))
			}
			s.keys = function() {
				return Object.keys(n)
			}, s.id = "./src/i18n/translatedFbts lazy recursive ^\\.\\/.*\\.json$", e.exports = s
		},
		"./src/lib/CSSVariableProvider/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/lodash/once.js"),
				s = i.n(n),
				r = i("./node_modules/react/index.js"),
				o = i.n(r),
				d = i("./node_modules/react-dom/index.js"),
				l = i("./src/lib/classNames/index.ts"),
				a = i("./src/lib/domUtils/index.ts"),
				u = i("./src/lib/fastdom/index.ts"),
				c = i("./src/lib/LRUCache/index.ts"),
				m = (i("./node_modules/core-js/modules/es6.regexp.replace.js"), i("./node_modules/core-js/modules/es6.array.sort.js"), i("./node_modules/core-js/modules/es6.regexp.to-string.js"), i("./node_modules/lodash/isPlainObject.js")),
				h = i.n(m),
				p = i("./src/lib/isUrl/index.ts");
			const _ = !0,
				g = e => {
					const t = [];
					return function e(i) {
						let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
						for (const s in i) {
							const r = i[s],
								o = "".concat(n, "-").concat(s);
							!0 !== r && !1 !== r && (null == r ? t.push([o, "initial"]) : "string" == typeof r ? Object(p.a)(r) ? t.push([o, 'url("'.concat(r, '")')]) : t.push([o, r]) : "number" == typeof r && t.push([o, r.toString()]), Array.isArray(r) || h()(r) && e(r, o))
						}
					}(e), w(t)
				},
				w = e => e.sort((e, t) => y(e[0], t[0])),
				y = (e, t) => e === t ? 0 : e < t ? -1 : 1,
				v = (e, t) => {
					if (e === t) return !0;
					if (e.length !== t.length) return !1;
					for (let i = 0; i < e.length; i++) {
						const n = e[i],
							s = t[i];
						if (n[0] !== s[0] || n[1] !== s[1]) return !1
					}
					return !0
				},
				f = e => e.replace(/[^\-a-zA-Z0-9_]/g, ""),
				b = (e, t) => {
					let i = "";
					for (let s = 0; s < e.length; s++) {
						const [t, n] = e[s];
						i += "-".concat(t, ": ").concat(n, ";")
					}
					const n = t === _ ? ":root" : ".".concat(f(t));
					return "".concat(n, " { ").concat(i, " }")
				};
			i.d(t, "a", (function() {
				return I
			})), i.d(t, "b", (function() {
				return R
			})), i.d(t, "e", (function() {
				return x
			})), i.d(t, "d", (function() {
				return C
			})), i.d(t, "c", (function() {
				return _
			}));
			class T {
				constructor(e, t, i) {
					this.isRootOrUniqueClassName = e, this.theme = t, this.cssVarPairs = i || g(t), this.cssVarDefinitions = b(this.cssVarPairs, e)
				}
				updatedRecord(e, t) {
					if (this.isRootOrUniqueClassName !== e) return new T(e, t);
					if (this.theme === t) return this;
					const i = g(t);
					return v(this.cssVarPairs, i) ? this : new T(e, t, i)
				}
				isEqual(e) {
					return this === e || this.isRootOrUniqueClassName === e.isRootOrUniqueClassName && (this.theme === e.theme || v(this.cssVarPairs, e.cssVarPairs))
				}
			}
			const S = () => ({
					contextCache: new c.a(5),
					rootContext: void 0
				}),
				F = S(),
				E = o.a.createContext(F);
			class I extends o.a.Component {
				constructor(e) {
					super(e), this.contextValue = S()
				}
				render() {
					return o.a.createElement(E.Provider, {
						value: this.contextValue
					}, this.props.children)
				}
			}
			const B = o.a.createContext(""),
				R = o.a.createContext({});
			class x extends o.a.Component {
				constructor(e, t) {
					if (super(e, t), !t) throw new Error("CSSVariableProvider must be wrapped in a CSSVPCoordinatorContextProvider");
					const {
						isRootOrUniqueClassName: i,
						theme: n
					} = e, s = this.getRecordFromContext(i), r = void 0 === s ? new T(i, n) : s.updatedRecord(i, n);
					s && s.isEqual(r) || this.setRecordOnContext(i, r), this.cssVarRecord = r
				}
				componentDidMount() {
					x.polyfillCSSVarsIfNeeded()
				}
				updateCssVarRecord(e) {
					const t = this.getRecordFromContext(e.isRootOrUniqueClassName),
						i = t || this.cssVarRecord,
						n = i.updatedRecord(e.isRootOrUniqueClassName, e.theme);
					t && n.isEqual(i) || this.setRecordOnContext(e.isRootOrUniqueClassName, n), n.isEqual(this.cssVarRecord) || (this.cssVarRecord = n)
				}
				getRecordFromContext(e) {
					return e === _ ? this.context.rootContext : this.context.contextCache.get(e)
				}
				setRecordOnContext(e, t) {
					e === _ ? this.context.rootContext = t : this.context.contextCache.set(e, t)
				}
				render() {
					this.updateCssVarRecord(this.props);
					const {
						className: e,
						isRootOrUniqueClassName: t,
						theme: i
					} = this.props, n = t === _ ? "" : f(t);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: this.cssVarRecord.cssVarDefinitions
						}
					}), o.a.createElement(R.Provider, {
						value: i
					}, o.a.createElement(B.Provider, {
						value: n
					}, o.a.createElement("div", {
						className: Object(l.a)(e, n)
					}, this.props.children))))
				}
			}
			x.contextType = E, x.polyfillCSSVarsIfNeeded = s()(() => {
				u.a.read(() => {
					Object(a.e)() || i.e("vendors~css-vars-ponyfill").then(i.bind(null, "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js")).then(e => {
						let {
							default: t
						} = e;
						t({
							fixNestedCalc: !1,
							onlyLegacy: !0,
							updateURLs: !1,
							watch: !0
						})
					})
				})
			});
			const C = (e, t, i) => Object(d.createPortal)(o.a.createElement(B.Consumer, null, t => o.a.createElement("div", {
				className: f(t)
			}, e)), t, i)
		},
		"./src/lib/DeprecatedBrowserProvider/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			})), i.d(t, "b", (function() {
				return d
			}));
			var n = i("./node_modules/react/index.js"),
				s = i.n(n),
				r = i("./src/lib/isBrowserDeprecated/index.ts");
			const o = s.a.createContext(r.a);
			class d extends s.a.Component {
				constructor(e) {
					super(e), this.contextValue = Object(r.b)(e.userAgent)
				}
				render() {
					return s.a.createElement(o.Provider, {
						value: this.contextValue
					}, this.props.children)
				}
			}
		},
		"./src/lib/LRUCache/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			class n {
				constructor(e, t) {
					this.next = null, this.prev = null, this.value = e, this.key = t
				}
			}
			class s {
				constructor(e) {
					this.head = null, this.tail = null, this.data = {}, this.maxSize = e, this.currentSize = 0
				}
				get(e) {
					const t = this.data[e];
					if (void 0 !== t) return this._removeNodeFromList(t), this._setHeadNode(t), t.value
				}
				set(e, t) {
					let i = this.data[e];
					return void 0 === i ? (this.currentSize === this.maxSize ? (i = this.tail, this._removeNodeFromList(i), this.data[i.key] = void 0, i.key = e, i.value = t) : (i = new n(t, e), this.currentSize += 1), this.data[e] = i) : this._removeNodeFromList(i), this._setHeadNode(i), this
				}
				remove(e) {
					const t = this.data[e];
					return void 0 !== t && (this._removeNodeFromList(t), this.data[e] = void 0, this.currentSize -= 1), this
				}
				_removeNodeFromList(e) {
					e.prev ? e.prev.next = e.next : (this.head = e.next, this.head && (this.head.prev = null)), e.next ? e.next.prev = e.prev : (this.tail = e.prev, this.tail && (this.tail.next = null))
				}
				_setHeadNode(e) {
					e !== this.head && (e.next = this.head, e.prev = null, null !== this.head && (this.head.prev = e), this.head = e, null === this.tail && (this.tail = e))
				}
			}
		},
		"./src/lib/addQueryParams/index.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = i("./node_modules/lodash/isNil.js"),
				s = i.n(n),
				r = i("./node_modules/lodash/pickBy.js"),
				o = i.n(r),
				d = i("./node_modules/url/url.js"),
				l = i.n(d),
				a = i("./src/lib/extractQueryParams/index.ts");
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			t.a = (e, t) => {
				const i = l.a.parse(e),
					n = o()(t, e => !s()(e));
				return i.query = Object.assign({}, function(e) {
					const t = {};
					for (const i of e.keys()) "string" == typeof i && (t[i] = e.get(i));
					return t
				}(Object(a.a)(e)), n), i.search = void 0, l.a.format(i)
			}
		},
		"./src/lib/areUrlsEqual/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/history/esm/history.js"),
				s = i("./node_modules/lodash/isEqual.js"),
				r = i.n(s);
			const o = e => (e => Object.assign({}, e, {
				hash: ""
			}))(Object(n.c)(e));
			t.a = (e, t) => r()(o(e), o(t))
		},
		"./src/lib/cache/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/constants/index.ts"),
				s = i("./src/lib/redditId/index.ts"),
				r = i("./src/lib/logs/console.ts"),
				o = i("./src/lib/safeJSONParse/index.ts");
			const d = e => {
					let t;
					try {
						if (!(t = localStorage.getItem(e))) return
					} catch (n) {
						return void Object(r.a)(n, 'localStorage cache get("'.concat(e, '") error'))
					}
					const i = Object(o.a)(t);
					if (i) {
						if (!(i.expires < Date.now())) return i.value
					} else Object(r.a)(void 0, 'localStorage cache get("'.concat(e, '") error parsing: ').concat(i))
				},
				l = (e, t, i) => {
					const n = {
						expires: "number" == typeof i ? Date.now() + 1e3 * i : i.getTime(),
						value: t
					};
					try {
						return localStorage.setItem(e, JSON.stringify(n)), !0
					} catch (s) {
						Object(r.a)(s, 'localStorage cache set("'.concat(e, '") error'))
					}
					return !1
				};
			i.d(t, "a", (function() {
				return a
			})), i.d(t, "c", (function() {
				return u
			})), i.d(t, "b", (function() {
				return c
			})), i.d(t, "d", (function() {
				return m
			}));
			n.I;
			const a = n.Wb,
				u = (e, t, i) => e + "." + t + (i ? "{" + Object(s.b)(i, n.vb.Account) + "}" : ""),
				c = d,
				m = l
		},
		"./src/lib/classNames/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/lodash/isNil.js"),
				s = i.n(n),
				r = i("./node_modules/lodash/isObject.js"),
				o = i.n(r),
				d = i("./node_modules/lodash/isString.js"),
				l = i.n(d);

			function a() {
				const e = [];
				for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
				for (const r of i) s()(r) || (l()(r) ? e.push(r) : Array.isArray(r) ? e.push(a(...r)) : o()(r) && e.push(a(...Object.keys(r).filter(e => !!r[e]))));
				return e.join(" ")
			}
		},
		"./src/lib/consoleAdvert/index.ts": function(e, t, i) {
			console.log("\n                  ,d\"=≥,.,qOp,\n                 ,7'  ''²$(  )\n                ,7'      '?q$7'\n             ..,$$,.\n   ,.  .,,--***²\"\"²***--,,.  .,\n ²   ,p²''              ''²q,   ²\n:  ,7'                      '7,  :\n ' $      ,db,      ,db,      $ '\n  '$      ²$$²      ²$$²      $'    Using Reddit at work? Work for Reddit.\n  '$                          $'        https://www.reddit.com/jobs\n   '$.     .,        ,.     .$'\n    'b,     '²«»«»«»²'     ,d'\n     '²?bn,,          ,,nd?²'\n       ,7$ ''²²²²²²²²'' $7,\n     ,² ²$              $² ²,\n     $  :$              $:  $\n     $   $              $   $\n     'b  q:            :p  d'\n      '²«?$.          .$?»²'\n         'b            d'\n       ,²²'?,.      .,?'²²,\n      ²==--≥²²==--==²²≤--==²\n")
		},
		"./src/lib/constants/cookie.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return s
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "d", (function() {
				return o
			})), i.d(t, "f", (function() {
				return d
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "g", (function() {
				return a
			})), i.d(t, "h", (function() {
				return u
			})), i.d(t, "i", (function() {
				return c
			}));
			const n = "loid",
				s = "loidcreated",
				r = "mod_mode_enabled",
				o = "token",
				d = "session_tracker",
				l = "reddaid",
				a = "reddit_session",
				u = "d2_token",
				c = "wpsn"
		},
		"./src/lib/constants/headers.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "c", (function() {
				return s
			})), i.d(t, "d", (function() {
				return r
			})), i.d(t, "b", (function() {
				return o
			}));
			const n = "x-reddit-loid",
				s = "x-reddit-session",
				r = "set-cookie",
				o = "x-reddaid"
		},
		"./src/lib/constants/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "y", (function() {
				return o
			})), i.d(t, "o", (function() {
				return d
			})), i.d(t, "l", (function() {
				return l
			})), i.d(t, "vb", (function() {
				return a
			})), i.d(t, "Qb", (function() {
				return u
			})), i.d(t, "n", (function() {
				return c
			})), i.d(t, "j", (function() {
				return m
			})), i.d(t, "i", (function() {
				return h
			})), i.d(t, "D", (function() {
				return p
			})), i.d(t, "v", (function() {
				return _
			})), i.d(t, "Lb", (function() {
				return g
			})), i.d(t, "H", (function() {
				return w
			})), i.d(t, "N", (function() {
				return y
			})), i.d(t, "P", (function() {
				return v
			})), i.d(t, "O", (function() {
				return f
			})), i.d(t, "q", (function() {
				return b
			})), i.d(t, "s", (function() {
				return T
			})), i.d(t, "u", (function() {
				return S
			})), i.d(t, "Sb", (function() {
				return F
			})), i.d(t, "r", (function() {
				return E
			})), i.d(t, "Hb", (function() {
				return I
			})), i.d(t, "zb", (function() {
				return B
			})), i.d(t, "Xb", (function() {
				return x
			})), i.d(t, "Ib", (function() {
				return C
			})), i.d(t, "Jb", (function() {
				return k
			})), i.d(t, "Yb", (function() {
				return N
			})), i.d(t, "yb", (function() {
				return j
			})), i.d(t, "jb", (function() {
				return P
			})), i.d(t, "ib", (function() {
				return A
			})), i.d(t, "Ob", (function() {
				return L
			})), i.d(t, "Pb", (function() {
				return D
			})), i.d(t, "Ab", (function() {
				return G
			})), i.d(t, "Tb", (function() {
				return M
			})), i.d(t, "gb", (function() {
				return U
			})), i.d(t, "eb", (function() {
				return q
			})), i.d(t, "a", (function() {
				return W
			})), i.d(t, "b", (function() {
				return z
			})), i.d(t, "Y", (function() {
				return H
			})), i.d(t, "W", (function() {
				return V
			})), i.d(t, "Z", (function() {
				return Y
			})), i.d(t, "X", (function() {
				return K
			})), i.d(t, "S", (function() {
				return Q
			})), i.d(t, "Q", (function() {
				return J
			})), i.d(t, "R", (function() {
				return X
			})), i.d(t, "V", (function() {
				return Z
			})), i.d(t, "L", (function() {
				return $
			})), i.d(t, "Ub", (function() {
				return ee
			})), i.d(t, "J", (function() {
				return te
			})), i.d(t, "G", (function() {
				return ie
			})), i.d(t, "B", (function() {
				return ne
			})), i.d(t, "g", (function() {
				return se
			})), i.d(t, "Db", (function() {
				return re
			})), i.d(t, "Cb", (function() {
				return oe
			})), i.d(t, "nb", (function() {
				return le
			})), i.d(t, "qb", (function() {
				return ae
			})), i.d(t, "rb", (function() {
				return ce
			})), i.d(t, "sb", (function() {
				return me
			})), i.d(t, "U", (function() {
				return he
			})), i.d(t, "z", (function() {
				return pe
			})), i.d(t, "A", (function() {
				return _e
			})), i.d(t, "wb", (function() {
				return ge
			})), i.d(t, "Bb", (function() {
				return ye
			})), i.d(t, "cb", (function() {
				return ve
			})), i.d(t, "I", (function() {
				return fe
			})), i.d(t, "w", (function() {
				return be
			})), i.d(t, "Vb", (function() {
				return Te
			})), i.d(t, "db", (function() {
				return Se
			})), i.d(t, "Wb", (function() {
				return Fe
			})), i.d(t, "bb", (function() {
				return Ee
			})), i.d(t, "d", (function() {
				return Ie
			})), i.d(t, "e", (function() {
				return Be
			})), i.d(t, "h", (function() {
				return Re
			})), i.d(t, "m", (function() {
				return xe
			})), i.d(t, "f", (function() {
				return Ce
			})), i.d(t, "c", (function() {
				return ke
			})), i.d(t, "xb", (function() {
				return Oe
			})), i.d(t, "M", (function() {
				return Ne
			})), i.d(t, "pb", (function() {
				return je
			})), i.d(t, "ob", (function() {
				return Pe
			})), i.d(t, "mb", (function() {
				return Ae
			})), i.d(t, "Gb", (function() {
				return Le
			})), i.d(t, "hb", (function() {
				return De
			})), i.d(t, "Fb", (function() {
				return Ge
			})), i.d(t, "C", (function() {
				return Me
			})), i.d(t, "E", (function() {
				return Ue
			})), i.d(t, "p", (function() {
				return qe
			})), i.d(t, "Rb", (function() {
				return We
			})), i.d(t, "Mb", (function() {
				return ze
			})), i.d(t, "Nb", (function() {
				return He
			})), i.d(t, "fb", (function() {
				return Ve
			})), i.d(t, "Kb", (function() {
				return Ye
			})), i.d(t, "K", (function() {
				return Ke
			})), i.d(t, "Eb", (function() {
				return Qe
			})), i.d(t, "F", (function() {
				return Je
			})), i.d(t, "kb", (function() {
				return Xe
			})), i.d(t, "x", (function() {
				return $e
			})), i.d(t, "k", (function() {
				return et
			})), i.d(t, "ub", (function() {
				return tt
			})), i.d(t, "tb", (function() {
				return it
			})), i.d(t, "lb", (function() {
				return nt
			})), i.d(t, "t", (function() {
				return st
			})), i.d(t, "T", (function() {
				return rt
			})), i.d(t, "ab", (function() {
				return ot
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/config.ts"),
				s = i("./node_modules/lodash/values.js"),
				r = i.n(s);
			const o = "en",
				d = {
					APPEAL: "Appeal",
					COINS: "Coins",
					COINS_MOBILE: "CoinsMobile",
					COLLECTION_COMMENTS_PAGE: "CollectionCommentsPage",
					COMMENTS_PAGE: "CommentsPage",
					EMPTY: "Empty",
					EXPLORE: "Explore",
					DASHBOARD: "UiDashboard",
					FRONTPAGE: "Frontpage",
					META_MEMBERSHIP_PAYWALL_PAGE: "MetaMemberhipPaywallPage",
					MULTIREDDIT: "Multireddit",
					OVER18: "Over18",
					POST_CREATION: "PostCreation",
					POST_DRAFT: "PostDraft",
					SETTINGS: "Settings",
					PROFILE: "Profile",
					PROFILE_BETA_CONFIRMATION_PAGE: "ProfileBetaConfirmationPage",
					PROFILE_COMMENTS: "ProfileComments",
					PROFILE_COMMENTS_PAGE: "ProfileCommentsPage",
					PROFILE_HOMEPAGE: "ProfileHomepage",
					PROFILE_POST_COMMENTS: "ProfilePostComments",
					PROFILE_POSTS: "ProfilePosts",
					PROFILE_PRIVACY: "ProfilePrivacy",
					PROFILE_PRIVATE: "ProfilePrivate",
					PROFILE_SNOOBUILDER: "ProfileSnoobuilder",
					R2_PROFILE_MODERATION: "R2ProfileModeration",
					PROFILE_MODERATION: "ProfileModeration",
					PROFILE_SETTINGS: "ProfileSettings",
					PROFILE_OVERVIEW: "ProfileOverview",
					PUBLIC_ACCESS_NETWORK: "PublicAccessNetwork",
					REPORT_PAGE: "ReportPage",
					R2_COMMENTS_PAGE: "R2CommentsPage",
					R2_LISTING: "R2Listing",
					SEARCH_RESULTS: "SearchResults",
					STRUCTURED_STYLES: "StructuredStyles",
					SUBREDDIT: "Subreddit",
					SUBREDDIT_CREATION: "SubredditCreation",
					SUBREDDIT_LEADERBOARD: "SubredditLeaderboard",
					SUBREDDIT_SETTINGS: "SubredditSettings",
					SUBREDDIT_WIKI: "SubredditWiki",
					TOPIC: "Topic",
					MOD_LISTING: "ModListing",
					MODERATION_PAGES: "ModerationPages",
					MODQUEUE_PAGES: "ModQueuePages",
					INBOX_PAGES: "InboxPages",
					CHAT: "ChatPage",
					CHAT_INVITE: "ChatInvite",
					CHAT_EMPTY: "ChatEmpty",
					CHAT_CREATE: "ChatCreate",
					CHAT_MEMBERS: "ChatMembers",
					CHAT_MINIMIZE: "ChatMinimize",
					CHAT_TEST: "ChatTest",
					PREMIUM: "Premium",
					FRAMED_GILD: "FramedGild",
					FRAMED_MODAL: "FramedModal",
					EXPORT_THEME: "ExportTheme",
					IMPORT_THEME: "ImportTheme",
					POLL: "Poll",
					USER_DATA_REQUEST: "UserDataRequestPage"
				};
			var l;
			! function(e) {
				e.Profiles = "r2d2", e.Redesign = "whitespace", e.Chat = "chat", e.Backend = "server", e.Governance = "governance"
			}(l || (l = {}));
			new Set(Object.keys(l).map(e => l[e]));
			var a;
			! function(e) {
				e.Comment = "t1", e.CommentLoadMore = "loadMore", e.CommentContinueThread = "continueThread", e.Account = "t2", e.Post = "t3", e.Subreddit = "t5"
			}(a || (a = {}));
			const u = "u_",
				c = {
					CHAT: "chat"
				},
				m = "AUTHORIZATION_ERROR",
				h = "AUTHENTICATION_ERROR",
				p = {
					AUTHENTICATION_ERROR: h,
					AUTHORIZATION_ERROR: m,
					BAD_CAPTCHA_ERROR: "BAD_CAPTCHA",
					BAD_REQUEST: "BAD_REQUEST",
					BANNED_FROM_SUBREDDIT: "BANNED_FROM_SUBREDDIT",
					CREDIT_CARD_FAILURE: "CREDIT_CARD_FAILURE",
					CREDIT_CARD_FAILURE_GENERIC: "CREDIT_CARD_FAILURE_GENERIC",
					INVALID_PREMIUM_AMOUNT: "INVALID_PREMIUM_AMOUNT",
					LIKELY_UBLOCK_ERROR: "LIKELY_UBLOCK_ERROR",
					NO_STRIPE_SUBSCRIPTION: "NO_STRIPE_SUBSCRIPTION",
					NO_TEXT: "NO_TEXT",
					NO_URL: "NO_URL",
					NO_USER: "NO_USER",
					NOT_FOUND_ERROR: "NOT_FOUND_ERROR",
					SERVER_ERROR: "SERVER_ERROR",
					SUBMIT_VALIDATION_ERROR: "SUBMIT_VALIDATION_ERROR",
					UNKNOWN_ERROR: "UNKNOWN_ERROR",
					USER_DOESNT_EXIST: "USER_DOESNT_EXIST",
					USER_REQUIRED_ERROR: "USER_REQUIRED",
					VALIDATION_ERROR: "VALIDATION_ERROR",
					RATELIMIT: "RATELIMIT"
				};
			var _, g;
			! function(e) {
				e.Everywhere = "GLOBAL", e.UnitedStates = "US", e.Argentina = "AR", e.Australia = "AU", e.Bulgaria = "BG", e.Canada = "CA", e.Chile = "CL", e.Colombia = "CO", e.Croatia = "HR", e.CzechRepublic = "CZ", e.Finland = "FI", e.Greece = "GR", e.Hungary = "HU", e.Iceland = "IS", e.India = "IN", e.Ireland = "IE", e.Japan = "JP", e.Malaysia = "MY", e.Mexico = "MX", e.NewZealand = "NZ", e.Philippines = "PH", e.Poland = "PL", e.Portugal = "PT", e.PuertoRico = "PR", e.Romania = "RO", e.Serbia = "RS", e.Singapore = "SG", e.Sweden = "SE", e.Taiwan = "TW", e.Thailand = "TH", e.Turkey = "TR", e.UnitedKingdom = "GB"
			}(_ || (_ = {})),
			function(e) {
				e.AllStates = "", e.Alaska = "AK", e.Alabama = "AL", e.Arkansas = "AR", e.Arizona = "AZ", e.California = "CA", e.Colorado = "CO", e.Connecticut = "CT", e.DistrictOfColumbia = "DC", e.Delaware = "DE", e.Florida = "FL", e.Georgia = "GA", e.Hawaii = "HI", e.Iowa = "IA", e.Idaho = "ID", e.Illinois = "IL", e.Indiana = "IN", e.Kansas = "KS", e.Kentucky = "KY", e.Louisiana = "LA", e.Massachusetts = "MA", e.Maryland = "MD", e.Maine = "ME", e.Michigan = "MI", e.Minnesota = "MN", e.Missouri = "MO", e.Mississippi = "MS", e.Montana = "MT", e.NorthCarolina = "NC", e.NorthDakota = "ND", e.Nebraska = "NE", e.NewHampshire = "NH", e.NewJersey = "NJ", e.NewMexico = "NM", e.Nevada = "NV", e.NewYork = "NY", e.Ohio = "OH", e.Oklahoma = "OK", e.Oregon = "OR", e.Pennsylvania = "PA", e.RhodeIsland = "RI", e.SouthCarolina = "SC", e.SouthDakota = "SD", e.Tennessee = "TN", e.Texas = "TX", e.Utah = "UT", e.Virginia = "VA", e.Vermont = "VT", e.Washington = "WA", e.Wisconsin = "WI", e.WestVirginia = "WV", e.Wyoming = "WY"
			}(g || (g = {}));
			const w = {
					BEST: "BEST",
					HOT: "HOT",
					NEW: "NEW",
					RISING: "RISING",
					CONTROVERSIAL: "CONTROVERSIAL",
					TOP: "TOP"
				},
				y = {
					BEST: "best",
					HOT: "hot",
					NEW: "new",
					RISING: "rising",
					CONTROVERSIAL: "controversial",
					TOP: "top",
					GILDED: "gilded"
				};
			var v;
			! function(e) {
				e.Best = "best", e.Hot = "hot", e.New = "new", e.ControversialHour = "controversial_hour", e.ControversialDay = "controversial_day", e.ControversialWeek = "controversial_week", e.ControversialMonth = "controversial_month", e.ControversialYear = "controversial_year", e.ControversialAll = "controversial_all", e.TopHour = "top_hour", e.TopDay = "top_day", e.TopWeek = "top_week", e.TopMonth = "top_month", e.TopYear = "top_year", e.TopAll = "top_all", e.Rising = "rising", e.Gilded = "gilded"
			}(v || (v = {}));
			const f = y.HOT,
				b = (new Set(r()(y)), {
					CONFIDENCE: "confidence",
					TOP: "top",
					NEW: "new",
					CONTROVERSIAL: "controversial",
					OLD: "old",
					RANDOM: "random",
					QA: "qa",
					LIVE: "live",
					CHAT: "chat"
				}),
				T = {
					confidence: "best",
					top: "top",
					new: "new",
					controversial: "controversial",
					old: "old",
					qa: "q&a",
					live: "live (beta)",
					chat: "chat view (beta)"
				};
			var S;
			! function(e) {
				e.Chat = "chat", e.Comment = "comment"
			}(S || (S = {}));
			const F = new Set(r()(b).filter(e => e !== b.CHAT)),
				E = b.CONFIDENCE;
			var I;
			! function(e) {
				e.Comments = "comments", e.Hot = "hot", e.New = "new", e.Relevance = "relevance", e.Top = "top"
			}(I || (I = {}));
			const B = I.Relevance,
				R = new Set([I.Comments, I.Hot, I.New, I.Relevance, I.Top]);

			function x(e) {
				return R.has(e)
			}
			var C, k;
			! function(e) {
				e.ToGlobal = "unrestrict_scope_to_global", e.ToSubreddit = "restrict_scope_to_subreddit"
			}(C || (C = {})),
			function(e) {
				e.Posts = "link", e.Subreddits = "sr", e.Users = "user"
			}(k || (k = {}));
			const O = new Set([k.Posts, k.Subreddits, k.Users]);

			function N(e) {
				return O.has(e)
			}
			const j = ["author", "flair", "nsfw", "self", "selftext", "site", "subreddit", "title", "url"],
				P = "OverviewConversations",
				A = "OverviewChrono",
				L = {
					DAY: "day",
					HOUR: "hour",
					WEEK: "week",
					MONTH: "month",
					YEAR: "year",
					ALL: "all"
				},
				D = "day",
				G = "all",
				M = (L.DAY, new Set(r()(L))),
				U = 5,
				q = {
					CROSSPOST: "crosspost",
					TEXT: "text",
					IMAGE: "image",
					VIDEO: "video",
					EMBED: "embed",
					GIFVIDEO: "gifvideo"
				},
				W = new Set(["image/png", "image/gif", "image/jpeg"]),
				z = new Set(["video/mp4", "video/quicktime"]),
				H = 60,
				V = 900,
				Y = 1048576,
				K = 1024 * Y,
				Q = 20 * Y,
				J = 100 * Y,
				X = 20,
				Z = 5,
				$ = "INVALID_MEDIA_TYPE_ERROR",
				ee = "VIDEO_SIZE_LIMIT_EXCEEDED_ERROR",
				te = "IMAGE_SIZE_LIMIT_EXCEEDED_ERROR",
				ie = "GIF_SIZE_LIMIT_EXCEEDED_ERROR",
				ne = {
					ADMIN: "admin",
					MODERATOR: "moderator",
					ALUMNI_ADMIN: "special",
					NONE: ""
				},
				se = {
					[ne.MODERATOR]: "yes",
					[ne.NONE]: "no",
					[ne.ADMIN]: "admin"
				},
				re = 21,
				oe = 3,
				de = {
					HOT: "hot",
					NEW: "new",
					TOP: "top",
					CONTROVERSIAL: "controversial"
				},
				le = [de.NEW, de.HOT, de.TOP],
				ae = [de.NEW, de.HOT, de.TOP],
				ue = {
					HOT: "hot",
					NEW: "new",
					TOP: "top",
					CONTROVERSIAL: "controversial"
				},
				ce = (new Set(r()(de)), new Set(r()(ue)), de.NEW),
				me = L.ALL,
				he = (new Set(r()({
					OVERVIEW: "overview",
					POSTS: "posts",
					COMMENTS: "comments"
				})), 4),
				pe = "[deleted]",
				_e = "[deleted]",
				ge = "[removed]";
			var we;
			! function(e) {
				e[e.subreddit = 0] = "subreddit", e[e.on = 1] = "on", e[e.off = 2] = "off"
			}(we || (we = {}));
			const ye = 1e3,
				ve = 60 * ye,
				fe = 60 * ve,
				be = 24 * fe,
				Te = 7 * be,
				Se = 30 * be,
				Fe = 365 * be,
				Ee = {
					HEAD: "head",
					GET: "get",
					POST: "post",
					PUT: "put",
					PATCH: "patch",
					DELETE: "delete"
				},
				Ie = 900,
				Be = [300, 250],
				Re = [Be, [300, 600]],
				xe = [Be],
				Ce = [728, 90],
				ke = {
					ABOVE_THE_FOLD: "atf",
					BELOW_THE_FOLD: "btf"
				},
				Oe = {
					APPEAL: "appeal",
					INDEX: "index",
					LISTING: "listing",
					COLLECTION_COMMENTS: "collectionComments",
					COMMENTS: "comments",
					DASHBOARD: "dashboard",
					DUPLICATES: "duplicates",
					EXPLORE: "explore",
					EMAIL_VERIFICATION: "emailVerification",
					META_MEMBERSHIP_PAYWALL_PAGE: "metaMembershipPaywallPage",
					MULTIREDDIT: "multireddit",
					SETTINGS: "settings",
					SETTINGS_REDIRECT: "settingsRedirect",
					OVER18: "over18",
					ORIGINAL_CONTENT_REDIRECT: "originalContentRedirect",
					POST_CREATION: "postCreation",
					POST_DRAFT: "postDraft",
					PROFILE: "profile",
					PROFILE_BETA_CONFIRMATION: "profileBetaConfirmation",
					PROFILE_COMMENTS: "profileComments",
					PROFILE_HOMEPAGE: "profileHomepage",
					PROFILE_ME: "profileMe",
					PROFILE_MODERATION: "profileModeration",
					PROFILE_OVERVIEW: "profileOverview",
					PROFILE_POST_COMMENTS: "profilePostComments",
					PROFILE_POSTS: "profilePosts",
					PROFILE_PRIVACY: "profilePrivacy",
					PROFILE_PRIVATE: "profilePrivate",
					PROFILE_REDIRECT: "profileRedirect",
					PROFILE_SETTINGS: "profileSettings",
					PROFILE_SNOOBUILDER: "profileSnoobuilder",
					PROFILE_SUBMITTED: "profileSumitted",
					PUBLIC_ACCESS_NETWORK: "rpan",
					SEARCH_RESULTS: "searchResults",
					SUBREDDIT: "subreddit",
					SUBREDDIT_CREATION: "subredditCreation",
					SUBREDDIT_LEADERBOARD: "subredditLeaderboard",
					SUBREDDIT_SETTINGS: "subredditSettings",
					SUBREDDIT_WIKI: "subredditWiki",
					TOPIC: "topic",
					MOD_LISTING: "modListing",
					MODERATION_PAGES: "moderationPages",
					MODQUEUE_PAGES: "modQueuePages",
					INBOX_PAGES: "inboxPages",
					CHAT: "chat",
					CHAT_INVITE: "ChatInvite",
					CHAT_EMPTY: "chatEmpty",
					CHAT_CREATE: "chatCreate",
					CHAT_MEMBERS: "chatMembers",
					CHAT_MINIMIZE: "chatMinimize",
					CHAT_TEST: "chatTest",
					COINS: "coins",
					COINS_MOBILE: "coinsMobile",
					PREMIUM: "premium",
					FRAMED_GILD: "framedGild",
					FRAMED_MODAL: "framedModal",
					REPORT: "report",
					POLL: "poll",
					LAYER_REDIRECT: "layerRedirect",
					USER_DATA_REQUEST: "userDataRequest"
				},
				Ne = new Set([Oe.INDEX, Oe.LISTING, Oe.MULTIREDDIT, Oe.SEARCH_RESULTS, Oe.SUBREDDIT, Oe.PROFILE, Oe.PROFILE_COMMENTS, Oe.PROFILE_OVERVIEW, Oe.PROFILE_POSTS, Oe.PROFILE_PRIVATE, Oe.TOPIC]),
				je = new Set([Oe.PROFILE, Oe.PROFILE_COMMENTS, Oe.PROFILE_HOMEPAGE, Oe.PROFILE_POST_COMMENTS, Oe.PROFILE_PRIVACY, Oe.PROFILE_ME, Oe.PROFILE_MODERATION, Oe.PROFILE_OVERVIEW, Oe.PROFILE_POSTS, Oe.PROFILE_PRIVATE, Oe.PROFILE_SETTINGS, Oe.PROFILE_REDIRECT]),
				Pe = new Set([Oe.PROFILE_OVERVIEW, Oe.PROFILE_POSTS, Oe.PROFILE_PRIVATE]),
				Ae = new Set([Oe.PROFILE_COMMENTS, Oe.PROFILE_OVERVIEW, Oe.PROFILE_POSTS, Oe.PROFILE_PRIVATE]),
				Le = new Set([Oe.INDEX, Oe.LISTING, Oe.MULTIREDDIT, Oe.SUBREDDIT]),
				De = {
					PROFILE: "profile",
					WEBSITE: "website"
				},
				Ge = {
					CROSSPOST: "crosspost",
					IMAGE_ONLY: "imageOnly",
					LINK_ONLY: "linkOnly",
					MEDIA: "media",
					POLL: "poll",
					POST: "post"
				},
				Me = new Set([Ge.IMAGE_ONLY, Ge.LINK_ONLY, Ge.POST]),
				Ue = 27,
				qe = {
					NOT_ALLOWED_ACCESS: "not-allowed-access",
					LOGGEDIN_HAS_REDESIGN_COOKIE: "loggedin_has_redesign_cookie",
					API: "api",
					JS: "js",
					GQL: "gql"
				},
				We = new Set(r()(qe));
			var ze, He, Ve, Ye;
			! function(e) {
				e.Awards = "awards", e.Muted = "muted", e.Badges = "badges", e.Banned = "banned", e.Contributors = "contributors", e.Emojis = "emojis", e.Emotes = "emotes", e.Moderators = "moderators", e.SubredditRules = "rules", e.Removal = "removal", e.Modqueue = "modqueue", e.Reports = "reports", e.Spam = "spam", e.Unmoderated = "unmoderated", e.Edited = "edited", e.PostFlair = "postflair", e.PostRequirements = "settings", e.Modlog = "log", e.Flair = "flair", e.CommunitySettings = "edit", e.UserFlair = "userflair", e.Wiki = "wiki", e.WikiContributors = "wikicontributors", e.WikiBanned = "wikibanned", e.Traffic = "traffic", e.SubredditContent = "content", e.Streaming = "streaming"
			}(ze || (ze = {})),
			function(e) {
				e.Community = "community", e.Safety = "safety", e.Posts = "posts", e.Wikis = "wikis"
			}(He || (He = {})),
			function(e) {
				e.Edited = "edited", e.Modqueue = "modqueue", e.Reports = "reports", e.Spam = "spam", e.Unmoderated = "unmoderated"
			}(Ve || (Ve = {})),
			function(e) {
				e.Account = "account", e.Messaging = "messaging", e.Profile = "profile", e.Privacy = "privacy", e.Notifications = "notifications", e.Feed = "feed", e.Gold = "gold", e.Payments = "payments", e.Premium = "premium", e.Creator = "creator", e.SpecialMembership = "special"
			}(Ye || (Ye = {}));
			const Ke = {
					ALL: "inbox",
					UNREAD: "unread",
					MESSAGES: "messages",
					COMMENT_REPLIES: "comments",
					POST_REPLIES: "selfreply",
					USERNAME_MENTIONS: "mentions",
					COMPOSE: "compose",
					SENT: "sent",
					MODERATOR: "moderator"
				},
				Qe = "snoomoji",
				Je = Math.ceil(1e3 / 60);
			var Xe, Ze;
			! function(e) {
				e.TITLE = "title", e.BODY = "body", e.LINK = "link", e.FLAIR = "flair"
			}(Xe || (Xe = {})),
			function(e) {
				e.On = "1", e.Off = "0"
			}(Ze || (Ze = {}));
			const $e = {
					domain: n.a.cookieDomain,
					secure: n.a.https,
					httpOnly: !1
				},
				et = "AutoModerator",
				tt = "paypal",
				it = "creditCard",
				nt = 599,
				st = {
					NUMBER_OF_DIFFS: "gql_numberofdiffs",
					DETAILED_DIFFS: "gql_detaileddiffs"
				},
				rt = 150,
				ot = " …"
		},
		"./src/lib/copyToClipboard/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/logs/console.ts");
			t.a = e => {
				const t = document.body.scrollTop,
					i = document.body.scrollLeft,
					s = document.createElement("textarea");
				s.value = e, document.body.appendChild(s), s.select();
				try {
					document.execCommand("copy")
				} catch (r) {
					return Object(n.a)(r, "Failed to copy text: ".concat(e)), !1
				}
				return document.body.removeChild(s), document.body.scrollTop = t, document.body.scrollLeft = i, !0
			}
		},
		"./src/lib/domUtils/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return d
			})), i.d(t, "c", (function() {
				return l
			})), i.d(t, "e", (function() {
				return a
			})), i.d(t, "d", (function() {
				return u
			})), i.d(t, "a", (function() {
				return c
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = i("./node_modules/lodash/isNil.js"),
				s = i.n(n),
				r = i("./node_modules/lodash/once.js"),
				o = i.n(r);
			const d = () => document && (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement),
				l = (e, t) => {
					s()(e) || (e === document ? window.scrollTo(0, t) : e.scrollTop = t)
				},
				a = o()(() => {
					{
						const e = window.CSS && window.CSS.supports.bind(window.CSS) || window.supportsCSS;
						return !!e && (e("--f:0") || e("--f", 0))
					}
				}),
				u = o()(() => {
					const e = {},
						t = "search tel url email datetime date month week time datetime-local number range color".split(" "); {
						const i = "1)";
						let n, s, r;
						const o = document.documentElement;
						if (!o) return !1;
						const d = document.createElement("input");
						for (let l = 0; l < t.length; l++) d.setAttribute("type", n = t[l]), (r = "text" !== d.type && "style" in d) && (d.value = i, d.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(n) && void 0 !== d.style.webkitAppearance ? (o.appendChild(d), r = (s = document.defaultView).getComputedStyle && "textfield" !== s.getComputedStyle(d, null).webkitAppearance && 0 !== d.offsetHeight, o.removeChild(d)) : /^(search|tel)$/.test(n) || (r = /^(url|email)$/.test(n) ? d.checkValidity && !1 === d.checkValidity() : d.value !== i)), e[t[l]] = !!r;
						return e
					}
				}),
				c = e => {
					if (e) {
						const t = document.getElementById(e);
						t && t.focus()
					}
				}
		},
		"./src/lib/env/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "a", (function() {
				return s
			}));
			const n = () => !0,
				s = () => !n()
		},
		"./src/lib/extractQueryParams/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js"), i("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = "";

			function s(e) {
				if (!e) return new Map;
				const t = e.split("?")[1] || "",
					[i] = t.split("#");
				if (!i) return new Map;
				const s = {},
					r = i.split("&").map((e, t) => {
						const [i, r] = e.split("=");
						try {
							const e = r ? decodeURIComponent(r) : n;
							return s[i] = (s[i] || []).concat(t), [i, e]
						} catch (o) {
							return [i, n]
						}
					}).reduce((e, t, i, n) => {
						const r = t[0],
							o = s[r];
						if (!o || o[0] !== i) return e;
						const d = s[r].map(e => n[e][1]);
						if (d.length) {
							const t = d.join(",");
							e.push([r, t])
						}
						return e
					}, []);
				return new Map(r)
			}
		},
		"./src/lib/fastdom/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react-dom/index.js");
			const s = e => setTimeout(() => {
				throw e
			});
			var r;
			! function(e) {
				e.Read = "READ", e.Write = "WRITE"
			}(r || (r = {}));
			t.a = new class {
				constructor() {
					this.reads = [], this.writes = [], this.batchScheduled = !1, this.executeBatch = () => {
						this.runTasks(this.reads, r.Read), Object(n.unstable_batchedUpdates)(() => {
							this.runTasks(this.writes, r.Write)
						}), this.batchScheduled = !1, this.hasTasks() && this.scheduleBatch()
					}
				}
				read(e) {
					return this.reads.push(e), this.scheduleBatch(), e
				}
				write(e) {
					return this.writes.push(e), this.scheduleBatch(), e
				}
				clear(e) {
					e && (this.removeInplace(e, this.reads), this.removeInplace(e, this.writes))
				}
				removeInplace(e, t) {
					let i = t.indexOf(e);
					for (; i > -1;) t.splice(i, 1), i = t.indexOf(e)
				}
				scheduleBatch() {
					this.batchScheduled || (requestAnimationFrame(this.executeBatch), this.batchScheduled = !0)
				}
				hasTasks() {
					return this.reads.length || this.writes.length
				}
				runTasks(e, t) {
					let i;
					for (; i = e.shift();) this.runTask(i, t)
				}
				runTask(e, t) {
					try {
						e()
					} catch (i) {
						0,
						s(i)
					}
				}
			}
		},
		"./src/lib/initializeClient/index.tsx": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.constructor.js"), i("./node_modules/core-js/modules/es6.regexp.match.js"), i("./node_modules/core-js/modules/es6.regexp.search.js"), i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = i("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = i("./node_modules/@sentry/browser/esm/sdk.js"),
				r = i("./node_modules/@sentry/browser/esm/index.js"),
				o = i("./node_modules/@sentry/minimal/esm/index.js"),
				d = i("./node_modules/fbt/lib/FbtPublic.js"),
				l = i("./node_modules/history/esm/history.js"),
				a = i("./node_modules/js-cookie/src/js.cookie.js"),
				u = i.n(a),
				c = i("./node_modules/raf/index.js"),
				m = i.n(c),
				h = i("./node_modules/react/index.js"),
				p = i.n(h),
				_ = i("./node_modules/react-dom/index.js"),
				g = i.n(_),
				w = i("./node_modules/react-redux/es/index.js"),
				y = i("./node_modules/react-router-redux/es/index.js"),
				v = i("./node_modules/redux/es/index.js"),
				f = (i("./node_modules/redux-immutable-state-invariant/dist/index.js"), i("./src/config.ts"));
			i("./src/lib/consoleAdvert/index.ts");
			const b = "mov-2-h";
			i("./node_modules/core-js/modules/es6.symbol.js");
			var T = i("./node_modules/react-router/esm/react-router.js");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			var F = function(e, t) {
				var i = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (i[n[s]] = e[n[s]])
				}
				return i
			};

			function E(e) {
				let {
					loadingPage: t,
					routes: i
				} = e;
				return i.map(e => (function(e, t) {
					var {
						component: i
					} = e, n = F(e, ["component"]);
					const s = {
						component: e => void 0 !== i ? p.a.createElement(i, S({}, e, {
							fallback: t
						})) : null,
						exact: n.exact,
						path: n.path
					};
					return p.a.createElement(T.d, S({
						key: Array.isArray(n.path) ? n.path[0] : n.path
					}, s))
				})(e, t))
			}
			var I = e => t => p.a.createElement(T.e, {
					history: e,
					children: t.children
				}),
				B = i("./src/lib/CSSVariableProvider/index.tsx"),
				R = i("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				x = i("./src/lib/logs/errors.ts"),
				C = i("./src/lib/performanceTimings/index.tsx"),
				k = i("./src/lib/sentry/index.ts"),
				O = i("./src/reddit/helpers/localStorage/index.ts"),
				N = (i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./src/lib/logSafeJSONStringify/index.ts"));
			const j = e => setTimeout(() => {
					throw e
				}, 0),
				P = new Set(["displayText", "email", "profileId", "url"].map(e => e.toLowerCase()));
			var A = e => t => i => n => {
				"object" == typeof n && k.c.addBreadcrumb({
					message: n.type,
					category: "redux-action"
				});
				const s = i(n),
					r = t.getState();
				return k.c.setExtra("pageInfo", JSON.parse(Object(N.a)(r.platform))), k.c.setUser(JSON.parse(Object(N.a)(r.user, P))), !e && s instanceof Promise && s.catch(j), s
			};
			i.d(t, "a", (function() {
				return U
			}));
			const L = !1;
			m.a.polyfill();
			const D = () => {
					if (!(() => {
							try {
								return window.history.state || {}
							} catch (e) {
								return {}
							}
						})().key && window.history && window.history.replaceState && window.history.replaceState) {
						const e = Math.random().toString(36).substr(2, 6),
							t = "".concat(window.location.pathname).concat(window.location.search).concat(window.location.hash);
						window.history.replaceState({
							key: e
						}, "", t)
					}
				},
				G = () => {
					(document.cookie.match(/loid=/g) || []).length > 1 && (u.a.set("loid", "", {
						expires: 0,
						path: "/"
					}), u.a.set("loid_created", "", {
						expires: 0,
						path: "/"
					}))
				},
				M = (e, t, i) => {
					console.log("%cStarting Raven %crelease %c".concat("e725791-production") + " %cpublic url %c".concat(f.a.sentryClientPublicURL), "color: #7E53C1", "color: #7E53C1", "color: #FFB000", "color: #7E53C1", "color: #FFB000");
					let n = [];
					n = [new RegExp("^".concat(f.a.assetPath), "i")];
					s.e({
						attachStacktrace: !0,
						dsn: f.a.sentryClientPublicURL,
						whitelistUrls: n,
						release: "e725791-production",
						environment: "production",
						ignoreErrors: ["$ is not defined"],
						integrations: [...Object(k.d)(), new r.Integrations.Breadcrumbs({
							console: !1
						}), new r.Integrations.GlobalHandlers({
							onerror: !0,
							onunhandledrejection: !1
						})],
						beforeSend: e => (e = Object(k.b)(e), Object(x.b)(i(), e), e)
					}), t.tags && o.j(t.tags), o.i("app", e)
				};
			async function U(e) {
				let t;
				Object(C.e)(C.b.InitClientStart), document.documentElement && "object" == typeof document.documentElement && "string" == typeof document.documentElement.innerHTML && (t = document.documentElement.innerHTML.length);
				const s = Object(n.b)(() => {}, {
					namespace: e.appName
				});
				G(), D();
				const r = e.history || Object(l.a)();
				let a = e => e.children;
				e.raven && (M(e.appName, e.raven, e.apiContext), a = class extends p.a.Component {
					componentDidCatch(e, t) {
						o.l(i => {
							i.setExtra("info", t), o.c(e)
						}), this.setState({
							errorInfo: t
						})
					}
					render() {
						return this.props.children
					}
				});
				const u = null === window.onunhandledrejection;
				window.onunhandledrejection = e => {
					try {
						o.l(t => {
							t.setExtra("reason", JSON.stringify(e.reason)), o.d("Unhandled rejection: ".concat(e.reason))
						})
					} catch (t) {
						o.l(i => {
							i.setExtra("lastChance", t.message), o.d("Unhandled rejection: ".concat(e.reason))
						})
					}
				};
				const c = window.devToolsExtension ? window.devToolsExtension() : e => e,
					m = [!1, Object(y.d)(r), ...e.customMiddleware || []].filter(Boolean);
				e.raven && m.unshift(A(u));
				let h = window.___r || {};
				delete window.___r;
				const _ = document.getElementById("data");
				_ && _.parentNode && _.parentNode.removeChild(_), e.modifyInitialData && (h = e.modifyInitialData({
					initialData: h,
					browserHistory: r
				}));
				const f = Object(v.e)(e.reducers, h, Object(v.d)(Object(v.a)(...m), c, e.storeEnhancer || (e => e))),
					T = async function() {
						const e = {
							"en-US": {}
						};
						let t = document.documentElement.getAttribute("lang") || "en-US";
						if ("en-US" !== t) try {
							const n = (await i("./src/i18n/translatedFbts lazy recursive ^\\.\\/.*\\.json$")("./".concat(t, ".json"))).default;
							for (const t in n) e[t] = n[t]
						} catch (n) {
							t = "en-US"
						}
						e[t] || (t = "en-US"), d.IntlViewerContext.locale = t, Object(d.init)({
							translations: e
						})
					}(), S = h.user && h.user.account ? h.user.account.id : null;
				Object(O.B)(S);
				const {
					routes: F
				} = e;
				let x = {};
				e.preRender && (x = e.preRender({
					browserHistory: r,
					routes: F,
					store: f,
					flags: {
						DEBUG: L,
						SUPPORTS_REJECTION_EVENTS: u
					}
				})), Object(C.e)(C.b.CreateRouteCompsStart);
				const k = E({
					routes: F,
					loadingPage: e.staticPages ? e.staticPages.loading : void 0
				});
				return await s, Object(C.e)(C.b.ReactHydrateStart), await T,
					function(e) {
						const t = Array.from(e.getElementsByClassName(b));
						for (const i of t) document.head.appendChild(i), i.classList.remove(b)
					}(e.target), await new Promise(t => (e.ssr ? g.a.hydrate : g.a.render)(p.a.createElement(a, null, p.a.createElement(w.a, {
						store: f
					}, p.a.createElement(B.a, null, p.a.createElement(R.b, {
						userAgent: h.meta.userAgent
					}, e.appFactory(I(r), k))))), e.target, t)), Object(C.e)(C.b.ReactHydrateEnd), e.postRender && e.postRender({
						browserHistory: r,
						routes: F,
						serverDocumentLength: t,
						store: f,
						localStorageData: x.localStorageData
					}), Object(C.e)(C.b.InitClientEnd), {
						store: f
					}
			}
		},
		"./src/lib/isBrowserDeprecated/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return h
			})), i.d(t, "b", (function() {
				return p
			}));
			var n = i("./node_modules/ua-parser-js/src/ua-parser.js"),
				s = i.n(n);
			const r = "Apple",
				o = "iOS",
				d = "https://www.google.com/chrome/",
				l = "https://www.microsoft.com/windows/microsoft-edge",
				a = "https://www.mozilla.org/firefox/",
				u = "https://www.apple.com/safari/",
				c = "https://www.opera.com",
				m = "https://www.ucweb.com",
				h = {
					isDeprecated: !1,
					updateLink: null
				};

			function p(e) {
				if (!e) return h;
				const t = new s.a(e),
					i = t.getDevice(),
					n = t.getOS();
				if (i && i.vendor === r || n && n.name === o) return {
					isDeprecated: !0,
					updateLink: null
				};
				let p = h.isDeprecated,
					_ = h.updateLink;
				const g = t.getBrowser();
				switch (g.name) {
					case "Chrome":
					case "Chrome Headless":
					case "Chrome WebView":
						p = parseInt(g.version || "") < 49, _ = d;
						break;
					case "Edge":
						p = parseInt(g.version || "") < 15, _ = l;
						break;
					case "Firefox":
						p = parseInt(g.version || "") < 45, _ = a;
						break;
					case "IE":
					case "Mobile IE":
						p = !0, _ = l;
						break;
					case "Safari":
					case "Mobile Safari":
						p = parseInt(g.version || "") < 11, _ = u;
						break;
					case "Opera":
						p = parseInt(g.version || "") < 35, _ = c;
						break;
					case "UCBrowser":
						p = parseFloat((g.version || "").slice(0, 5)) < 11.5, _ = m
				}
				return {
					isDeprecated: p,
					updateLink: _
				}
			}
		},
		"./src/lib/isUrl/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			const n = /^https?:/;

			function s(e) {
				return n.test(e)
			}
		},
		"./src/lib/lessComponent.tsx": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.symbol.js");
			var n = i("./node_modules/react/index.js"),
				s = i.n(n),
				r = i("./src/lib/classNames/index.ts"),
				o = function(e, t) {
					var i = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (i[n[s]] = e[n[s]])
					}
					return i
				};
			const d = (e, t, i) => {
					const n = i[t];
					class d extends s.a.PureComponent {
						render() {
							const t = this.props,
								{
									className: i,
									innerRef: d
								} = t,
								l = o(t, ["className", "innerRef"]);
							return s.a.createElement(e, Object.assign({}, l, {
								ref: d,
								className: Object(r.a)(n, i)
							}))
						}
					}
					return d.cssClassName = n, d.displayName = t, d
				},
				l = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noindex", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview", "svg", "animate", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "switch", "symbol", "text", "textPath", "tspan", "use", "view"].reduce((e, t) => (e[t] = (e, i) => d(t, e, i), e), {});
			t.a = Object.assign({}, l, {
				wrapped: (e, t, i) => {
					const n = i[t];
					class d extends s.a.PureComponent {
						render() {
							const t = this.props,
								{
									className: i
								} = t,
								d = o(t, ["className"]);
							return s.a.createElement(e, Object.assign({}, d, {
								className: Object(r.a)(n, i)
							}))
						}
					}
					return d.cssClassName = n, d.displayName = t, d
				}
			})
		},
		"./src/lib/linkMatchers/customLinks.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.replace.js"), i("./node_modules/core-js/modules/es6.regexp.constructor.js"), i("./node_modules/core-js/modules/es6.regexp.match.js");
			const n = /\s/,
				s = (e, t) => (i, s, r) => {
					if (s > e.length) {
						const t = i[s - e.length - 1];
						if (!t.match(n)) {
							if ("/" !== t) return 0; {
								const t = s - e.length - 2;
								if (t >= 0 && !i[t].match(n)) return 0
							}
						}
					}
					const o = i.slice(s);
					return "" === o || (t.test(o) ? o.match(t)[0].length : 0)
				};
			var r, o;
			i.d(t, "b", (function() {
					return r
				})), i.d(t, "d", (function() {
					return o
				})), i.d(t, "c", (function() {
					return a
				})), i.d(t, "e", (function() {
					return u
				})), i.d(t, "a", (function() {
					return c
				})), i.d(t, "f", (function() {
					return m
				})),
				function(e) {
					e.All = "all", e.Here = "here"
				}(r || (r = {})),
				function(e) {
					e.subreddit = "r/", e.subredditFull = "/r/", e.profile = "u/", e.profileFull = "/u/", e.mention = "@"
				}(o || (o = {}));
			const d = new RegExp("^[A-Za-z0-9][A-Za-z0-9_]{0,20}\\b"),
				l = new RegExp("^@".concat(r.All), "i"),
				a = new RegExp("^[A-Za-z0-9_-]{0,20}"),
				u = new RegExp("^/?(u|r)/", "i"),
				c = new RegExp("^/?(u/|@)", "i"),
				m = o.subreddit,
				h = {
					subreddit: {
						prefix: o.subreddit,
						config: {
							validate: s(o.subreddit, d),
							normalize(e) {
								const t = e.url.replace(u, "");
								!t && e.lastIndex--, e.url = "/r/" + t
							}
						}
					},
					profile: {
						prefix: o.profile,
						config: {
							validate: s(o.profile, a),
							normalize(e) {
								const t = e.url.replace(u, "");
								!t && e.lastIndex--, e.url = "/user/" + t
							}
						}
					},
					mention: {
						prefix: o.mention,
						config: {
							validate: s(o.mention, a),
							normalize(e) {
								if (l.test(e.text)) e.url = "";
								else {
									const t = e.url.replace(c, "");
									!t && e.lastIndex--, e.url = "/user/" + t
								}
							}
						}
					}
				},
				p = {
					subredditFull: {
						prefix: o.subredditFull,
						config: h.subreddit.config
					},
					profileFull: {
						prefix: o.profileFull,
						config: h.profile.config
					}
				},
				_ = Object.assign({}, h, p);
			t.g = _
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.replace.js"), i("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = i("./node_modules/linkify-it/index.js"),
				s = i.n(n),
				r = i("./node_modules/tlds/index.js"),
				o = i.n(r),
				d = i("./src/lib/linkMatchers/customLinks.ts"),
				l = i("./node_modules/lodash/values.js"),
				a = i.n(l);
			const u = e => a()(d.b).includes(e.substring(1)),
				c = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, c);
			i.d(t, "e", (function() {
				return h
			})), i.d(t, "d", (function() {
				return p
			})), i.d(t, "f", (function() {
				return _
			})), i.d(t, "i", (function() {
				return g
			})), i.d(t, "a", (function() {
				return w
			})), i.d(t, "b", (function() {
				return v
			})), i.d(t, "c", (function() {
				return f
			})), i.d(t, "g", (function() {
				return b
			})), i.d(t, "h", (function() {
				return T
			}));
			const h = s()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				p = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(d.g.mention.prefix, d.g.mention.config),
				_ = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(d.g.subreddit.prefix, d.g.subreddit.config).add(d.g.subredditFull.prefix, d.g.subreddit.config),
				g = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(d.g.profile.prefix, d.g.profile.config).add(d.g.profileFull.prefix, d.g.profile.config),
				w = s()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(d.g.subreddit.prefix, d.g.subreddit.config).add(d.g.subredditFull.prefix, d.g.subreddit.config).add(d.g.profile.prefix, d.g.profile.config).add(d.g.profileFull.prefix, d.g.profile.config).add(d.g.mention.prefix, d.g.mention.config),
				y = h.normalize;
			h.normalize = e => {
				y.call(h, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const v = (e, t) => {
					return (w.match(e) || []).filter(e => {
						const i = u(e.text);
						return !i || i && t
					})
				},
				f = e => {
					return [...g.match(e) || [], ...p.match(e) || []].map(e => !u(e.text) && e.text.replace(d.a, "")).filter(e => e)
				},
				b = (e, t) => {
					const i = e.match(t);
					if (i && 1 === i.length && 0 === i[0].index && i[0].lastIndex === t.length) return i[0]
				},
				T = e => {
					const t = h.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const i = t[0];
						return i.lastIndex === e.length ? i : ((e, t) => {
							const i = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(i)) return t.lastIndex += i.length, t.url += i, t
						})(e, i)
					}
				}
		},
		"./src/lib/loadWithRetries/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/promise-retry/index.js"),
				s = i.n(n);
			t.a = e => s()(e, {
				minTimeout: 1500,
				maxTimeout: 3e5
			})
		},
		"./src/lib/localStorageAvailable/index.ts": function(e, t, i) {
			"use strict";
			t.a = () => {
				try {
					if ("undefined" != typeof localStorage && (localStorage.setItem("reddit_local_storage_feature_test", "yes"), "yes" === localStorage.getItem("reddit_local_storage_feature_test"))) return !0
				} catch (e) {
					return !1
				}
				return !1
			}
		},
		"./src/lib/logSafeJSONStringify/index.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/lib/constants/cookie.ts");
			const s = new Set(["password", "password2", "passwd", "passwd2", "pass", "pass2", "pw", "pw2", "accessToken", "refreshToken", "set-cookie", "cookie", "x-reddit-session", "redditSessionCookie", n.d, n.g, n.h, "authorization"].map(e => e.toLowerCase()));
			t.a = function(e, t) {
				try {
					return JSON.stringify(e, (e, i) => s.has(e.toLowerCase()) ? "<REDACTED />" : t && t.has(e.toLowerCase()) ? "<REDACTED />" : i)
				} catch (i) {
					return JSON.stringify({
						invalidLogJSON: "error trying to serialize logSafeJSON. circular json likely."
					})
				}
			}
		},
		"./src/lib/logs/console.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "b", (function() {
				return o
			}));
			var n;
			i("./node_modules/core-js/modules/es6.regexp.split.js"), i("./src/lib/logSafeJSONStringify/index.ts");
			! function(e) {
				e.Warn = "WARN", e.Error = "ERROR"
			}(n || (n = {}));
			const s = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
						i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.Error;
					i === n.Warn ? e ? console.warn(t, e) : console.warn(t) : e ? console.error(t, e) : console.error(t)
				},
				r = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					s(e, t, n.Error)
				},
				o = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					s(e, t, n.Warn)
				}
		},
		"./src/lib/logs/errors.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return c
			})), i.d(t, "b", (function() {
				return m
			}));
			var n = i("./node_modules/lodash/get.js"),
				s = i.n(n),
				r = i("./node_modules/lodash/throttle.js"),
				o = i.n(r),
				d = i("./src/config.ts"),
				l = i("./src/lib/constants/index.ts"),
				a = i("./src/lib/logSafeJSONStringify/index.ts"),
				u = i("./src/lib/makeRequest/index.ts");
			const c = o()(e => {
					let {
						context: t,
						endpoint: i,
						error: n,
						settings: s,
						statusCode: r,
						type: o
					} = e;
					return Object(u.b)({
						endpoint: d.a.postErrorsUrl,
						method: l.bb.POST,
						data: {
							endpoint: i,
							settings: s,
							statusCode: r,
							type: o,
							releaseClient: "e725791-production",
							appName: t.statsAppName,
							error: n ? JSON.parse(Object(a.a)(n)) : void 0
						},
						type: "json"
					})
				}, 2e3, {
					leading: !0,
					trailing: !0
				}),
				m = (e, t) => {
					const i = t.extra && l.Rb.has(t.extra.errorType) ? t.extra.errorType : l.p.JS,
						n = (t.breadcrumbs || []).reverse();
					if (s()(n, "0.data.url") === d.a.postErrorsUrl && s()(n, "1.data.url") === d.a.postErrorsUrl) return;
					const r = s()(t, "exception.values[0]");
					let o, a = [];
					r ? (o = r.type + ": " + r.value, a = s()(r, "stacktrace.frames", [])) : (o = t.message, a = s()(t, "stacktrace.frames", []));
					const u = {
						isLoggedOut: !s()(t, "user.account"),
						url: s()(t, "extra.pageInfo.currentPage.url"),
						_: o,
						stacktrace: a.slice(0, 8),
						breadcrumbs: n.slice(0, 8),
						tags: t.tags
					};
					c({
						context: e,
						error: u,
						type: i,
						settings: t.settings
					})
				}
		},
		"./src/lib/logs/timing.js": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return l
			})), i.d(t, "b", (function() {
				return c
			})), i.d(t, "c", (function() {
				return m
			}));
			i("./node_modules/core-js/modules/es6.symbol.js"), i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/lib/constants/index.ts"),
				s = i("./src/lib/makeRequest/index.ts"),
				r = i("./src/lib/performance.js");
			const o = .1;

			function d() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
				return Math.random() > e
			}

			function l() {
				if (!r.a || !r.a.timing) return;
				const e = r.a.timing,
					t = {};

				function i(i, n, s) {
					if (!e[n] || !e[s]) return;
					const r = e[n],
						o = e[s] - r;
					0 !== o && (t[i] = o)
				}
				return i("redirectTiming", "redirectStart", "redirectEnd"), i("startTiming", "fetchStart", "domainLookupStart"), i("dnsTiming", "domainLookupStart", "domainLookupEnd"), i("tcpTiming", "connectStart", "connectEnd"), i("httpsTiming", "secureConnectionStart", "connectEnd"), i("requestTiming", "requestStart", "responseStart"), i("responseTiming", "responseStart", "responseEnd"), i("domLoadingTiming", "domLoading", "domInteractive"), i("domInteractiveTiming", "domInteractive", "domContentLoadedEventStart"), i("domContentLoadedTiming", "domContentLoadedEventStart", "domContentLoadedEventEnd"), t
			}

			function a(e) {
				return Object(s.b)({
					method: n.bb.POST,
					endpoint: "/timings",
					data: {
						rum: e
					},
					type: "json"
				})
			}
			let u = !0;

			function c(e) {
				if (!u) return;
				if (u = !1, d()) return;
				if (!e) return;
				const {
					meta: t,
					duration: i
				} = e;
				if (!t || !t.name) return;
				const {
					name: n
				} = t;
				a({
					actionName: "d2.client.".concat(n),
					routeTiming: i
				})
			}
			const m = function(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
				return (n, s) => {
					const r = Date.now();
					if (i && !s) return e(t, n, r - i), i = 0;
					t = n, i = r
				}
			}
		},
		"./src/lib/makeActionCreator/index.ts": function(e, t, i) {
			"use strict";
			t.a = function(e) {
				return t => ({
					type: e,
					payload: t
				})
			}
		},
		"./src/lib/makeApiRequest/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "d", (function() {
				return v
			})), i.d(t, "c", (function() {
				return b
			})), i.d(t, "e", (function() {
				return S
			})), i.d(t, "b", (function() {
				return F
			}));
			var n, s = i("./node_modules/lodash/isEmpty.js"),
				r = i.n(s),
				o = i("./node_modules/lodash/omit.js"),
				d = i.n(o),
				l = i("./node_modules/url/url.js"),
				a = i.n(l),
				u = i("./src/lib/addQueryParams/index.ts"),
				c = i("./src/lib/constants/index.ts"),
				m = i("./src/lib/constants/headers.ts"),
				h = i("./src/lib/logs/errors.ts"),
				p = i("./src/lib/makeRequest/index.ts"),
				_ = (i("./src/lib/sample/index.ts"), i("./src/lib/sentry/index.ts")),
				g = i("./src/config.ts"),
				w = i("./src/reddit/singleton/tracing/index.ts");
			! function(e) {
				e.BannedSubreddit = "BANNED", e.GoldSubreddit = "GOLD", e.PrivateSubreddit = "PRIVATE", e.QuarantinedSubreddit = "QUARANTINED", e.NotFoundSubreddit = "NOT_FOUND", e.ForbiddenSubreddit = "FORBIDDEN"
			}(n || (n = {}));
			const y = (e, t) => {
				const i = Object.assign({}, t, {
					headers: Object.assign({}, t.headers || {}, e.headers)
				});
				(0 === i.endpoint.indexOf(g.a.sendbirdServiceUrl) || (0 === i.endpoint.indexOf(g.a.redditUrl) || i.endpoint.indexOf(g.a.oauthUrl), 0)) && (i.headers = d()(i.headers, [m.a, m.c])), 0 !== i.endpoint.indexOf(g.a.gatewayUrl) && (i.headers = d()(i.headers, [m.b])), t.withoutRedditHeaders && (i.headers = d()(i.headers, [m.a, m.c, m.b]));
				const n = w.a.getTracingHeaders();
				i.headers = Object.assign({}, i.headers, n);
				const {
					host: s,
					protocol: r
				} = a.a.parse(i.endpoint), o = "".concat(r, "//").concat(s), l = t.method === c.bb.GET ? "data" : "query", h = {};
				switch (o !== e.apiUrl && o !== g.a.redditUrl || (h.raw_json = 1, h.gilding_detail = 1), typeof i[l]) {
					case "undefined":
						i[l] = h;
						break;
					case "object":
						i[l] = Object.assign({}, i[l], h);
						break;
					case "string":
						i[l] = Object(u.a)(i[l], h)
				}
				return i
			};
			const v = (e, t, i) => {
					const s = f(i);
					if (s) {
						if (403 === s || 404 === s) {
							const e = i.body && i.body.reason;
							switch ("string" == typeof e ? e.toUpperCase() : "") {
								case n.BannedSubreddit:
								case n.GoldSubreddit:
								case n.PrivateSubreddit:
								case n.QuarantinedSubreddit:
								case n.ForbiddenSubreddit:
									return
							}
						}
						Object(h.a)({
							context: e,
							statusCode: s,
							endpoint: t.endpoint,
							error: i.error,
							type: c.p.API
						})
					}
				},
				f = e => e.status || e.error && e.error.status || void 0,
				b = function() {
					for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
					return (e, i, n) => {
						const s = f(n);
						s && t.some(e => s === e) || v(e, i, n)
					}
				}(400),
				T = {
					400: c.D.BAD_REQUEST,
					401: c.D.AUTHENTICATION_ERROR,
					403: c.D.AUTHORIZATION_ERROR,
					404: c.D.NOT_FOUND_ERROR
				},
				S = e => T[e] || c.D.VALIDATION_ERROR;

			function F(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v;
				const n = t.traceRequestName || "api_call";
				return w.a.recordRpcSpanAsync(n, async () => {
					const n = y(e, t);
					return e.onBeforeRequest(n), Object(p.b)(n).then(n => {
						if (e.onResponse(n, {
								allowSetEmptyLoid: t.allowSetEmptyLoid
							}), !n.ok) return i(e, t, n), !n.status || n.status >= 500 ? Object.assign({}, n, {
							error: {
								fields: [],
								type: c.D.SERVER_ERROR
							}
						}) : n.status >= 400 ? Array.isArray(n.body) ? Object.assign({}, n, {
							error: {
								fields: n.body,
								type: S(n.status)
							}
						}) : n.body && n.body.fields ? Object.assign({}, n, {
							error: {
								fields: n.body.fields.map(e => ({
									field: e,
									msg: n.body.explanation
								})),
								type: S(n.status)
							}
						}) : n.body && n.body.json && n.body.json.errors ? Object.assign({}, n, {
							ok: !1,
							error: {
								type: S(n.status),
								fields: n.body.json.errors.map(e => ({
									field: e[0],
									msg: e[1]
								}))
							}
						}) : n.body && n.body.error && n.body.error.extra ? Object.assign({}, n, {
							ok: !1,
							error: {
								type: "gov",
								fields: [{
									field: "gov",
									msg: n.body.error
								}]
							}
						}) : Object.assign({}, n, {
							error: {
								type: S(n.status)
							}
						}) : Object.assign({}, n, {
							error: {
								type: S(n.status)
							}
						});
						if (!r()(n.body && n.body.json && n.body.json.errors)) {
							const e = n.body.json.errors[0];
							return e[2] ? Object.assign({}, n, {
								ok: !1,
								error: {
									type: e[0],
									fields: [{
										field: e[2],
										msg: e[1]
									}]
								}
							}) : Object.assign({}, n, {
								ok: !1,
								error: {
									type: c.D.VALIDATION_ERROR,
									fields: n.body.json.errors.map(e => ({
										field: e[0],
										msg: e[1]
									}))
								}
							})
						}
						return Object.assign({}, n, {
							error: null
						})
					}).catch(e => (_.c.captureMessage(e), p.a))
				})
			}
		},
		"./src/lib/makeRequest/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return u
			})), i.d(t, "b", (function() {
				return m
			}));
			var n = i("./node_modules/lodash/get.js"),
				s = i.n(n),
				r = i("./node_modules/lodash/isNil.js"),
				o = i.n(r),
				d = i("./node_modules/superagent/lib/client.js"),
				l = i.n(d),
				a = i("./src/lib/constants/index.ts");
			i("./src/lib/logs/console.ts");
			l.a.parse["application/xml"] = e => e;
			const u = {
					error: null,
					ok: !1,
					status: -1,
					body: {},
					headers: {},
					details: ""
				},
				c = (e, t) => {
					switch (e) {
						case a.bb.PUT:
							return l.a.put(t);
						case a.bb.POST:
							return l.a.post(t);
						case a.bb.DELETE:
							return l.a.delete(t);
						case a.bb.PATCH:
							return l.a.patch(t);
						case a.bb.GET:
							return l.a.get(t);
						default:
							return l.a[e](t)
					}
				};

			function m(e) {
				let {
					data: t,
					endpoint: i,
					headers: n,
					method: r,
					redirects: d,
					withCredentials: m,
					query: h,
					type: p = "form",
					setup: _,
					sync: g = !1,
					timeoutMs: w
				} = e;
				return new Promise(e => {
					let y = c(r, i);
					if ("number" == typeof w && y.timeout(w), m && y.withCredentials(), p && (y = y.type(p)), null !== p && y.type(p), r === a.bb.GET ? t && (y = y.query(t)) : (h && (y = y.query(h)), t && (y = y.send(t))), n && y.set(n), o()(d) || y.redirects(d), _ && (y = _(y)), g) {
						const {
							_end: e
						} = y;
						y._end = () => {
							const t = l.a.getXHR;
							l.a.getXHR = () => {
								const e = t();
								l.a.getXHR = t;
								const {
									open: i
								} = e;
								return e.open = function() {
									for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++) n[s] = arguments[s];
									return n.length >= 3 && (n[2] = !1), i.apply(e, Array.from(n))
								}, e
							}, e.call(y)
						}
					}
					y.end((t, i) => {
						if (t) e(Object.assign({}, u, {
							body: s()(t, "response.body", {}),
							error: t,
							status: t.status,
							headers: s()(t, "response.headers", {})
						}));
						else {
							const t = i.body && i.body.json && i.body.json.data ? i.body.json.data.details : "";
							e(Object.assign({}, u, {
								body: i.body,
								ok: !0,
								status: i.status,
								headers: i.header,
								details: t
							}))
						}
					})
				})
			}
		},
		"./src/lib/matchRoute/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return l
			}));
			var n = i("./node_modules/history/esm/history.js"),
				s = i("./node_modules/lodash/fromPairs.js"),
				r = i.n(s),
				o = i("./node_modules/react-router/esm/react-router.js"),
				d = i("./src/lib/extractQueryParams/index.ts");

			function l(e, t, i) {
				const s = Object(n.g)(e);
				for (const n of t) {
					const t = Object(o.h)(s.pathname, n);
					if (t) {
						if (i && n.routePredicate && !n.routePredicate(i)) continue;
						const s = r()([...Object(d.a)(e)]);
						return {
							match: Object.assign({}, t, {
								queryParams: s
							}),
							route: n
						}
					}
				}
			}
		},
		"./src/lib/messageIframeParent/index.ts": function(e, t, i) {
			"use strict";
			t.a = function(e, t) {
				let {
					type: i,
					data: n = {}
				} = e, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "*";
				if (window.parent !== window) {
					const e = {
						type: t ? "".concat(i, ".").concat(t) : i,
						data: n
					};
					window.parent.postMessage(JSON.stringify(e), s)
				}
			}
		},
		"./src/lib/omitHeaders/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/lodash/omit.js"),
				s = i.n(n);
			t.a = (e, t) => Object.assign({}, e, {
				headers: s()(e.headers, t)
			})
		},
		"./src/lib/opener/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return l
			})), i.d(t, "a", (function() {
				return a
			}));
			const n = {
					SELF: "_self",
					BLANK: "_blank",
					PARENT: "_parent",
					TOP: "_top"
				},
				s = "noopener",
				r = "noreferrer",
				o = "nofollow",
				d = "ugc",
				l = "".concat(s, " ").concat(r),
				a = "".concat(s, " ").concat(r, " ").concat(o, " ").concat(d);
			t.d = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.SELF,
					i = arguments.length > 2 ? arguments[2] : void 0;
				if (t === n.BLANK) {
					const n = window.open("", t, i);
					null != n ? (n.opener = null, n.location.href = e) : window.location.href = e
				} else window.location.href = e
			}
		},
		"./src/lib/performance.js": function(e, t, i) {
			"use strict";
			(function(e) {
				const i = e.performance || e.webkitPerformance || e.msPerformance || e.mozPerformance;
				t.a = i
			}).call(this, i("./node_modules/webpack/buildin/global.js"))
		},
		"./src/lib/performanceTimings/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return d
			})), i.d(t, "e", (function() {
				return u
			})), i.d(t, "f", (function() {
				return m
			})), i.d(t, "g", (function() {
				return h
			})), i.d(t, "c", (function() {
				return p
			})), i.d(t, "d", (function() {
				return g
			})), i.d(t, "a", (function() {
				return _
			})), i.d(t, "h", (function() {
				return w
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/lib/constants/index.ts"),
				s = i("./src/telemetry/helpers/sendTiming.ts"),
				r = i("./src/lib/performance.js");
			const o = "object" == typeof r.a && !!r.a.mark && !!r.a.measure && !!r.a.getEntriesByType;
			var d, l;
			! function(e) {
				e.ResponseStart = "responseStart", e.FetchStart = "fetchStart", e.HeadTagStart = "head_tag_start", e.AppHTMLStart = "app_html_start", e.AdsDotJSFetchStart = "ads_dot_js_fetch_start", e.ReduxJSONStart = "redux_json_start", e.JSDepsFetchStart = "js_deps_fetch_start", e.EntryPointStart = "entry_point_start", e.InitClientStart = "init_client_start", e.CreateRouteCompsStart = "create_route_components_start", e.ReactHydrateStart = "react_hydrate_start", e.ReactHydrateEnd = "react_hydrate_end", e.InitClientEnd = "init_client_end", e.FirstPostTitleImageLoaded = "first_post_title_image_loaded"
			}(d || (d = {})),
			function(e) {
				e.TimeToFirstByte = "Time_To_First_Byte", e.HeadTagParse = "Head_Tag_Parse", e.AppHTMLParse = "App_HTML_Parse", e.AdsDotJSFetchParse = "Ads_Dot_JS_Fetch_Parse", e.ReduxBootstrapJSONParse = "Redux_Bootstrap_JSON_Parse", e.JSDepsFetchToEntryPoint = "JS_Fetch_To_Entry_Point", e.EntryPointToInitClient = "Entry_To_Init_Client", e.InitClientPreamble = "Initailize_Client_Preamble", e.CreateRouteComponents = "Creat_Route_Components", e.ReactHydrate = "React_Hydrate", e.InitClientPostamble = "Initailize_Client_Postamble", e.NavigationToFirstPostTitleVisible = "NavigationStart_To_FirstPostTitleVisible", e.NavigationToInitClientFinished = "NavigationStart_To_InitClientFinished"
			}(l || (l = {}));
			const a = Object.keys(l).reduce((e, t) => (e[l[t]] = !0, e), {}),
				u = e => {
					o && r.a.mark(e)
				},
				c = [{
					name: l.TimeToFirstByte,
					start: d.FetchStart,
					end: d.ResponseStart
				}, {
					name: l.HeadTagParse,
					start: d.HeadTagStart,
					end: d.AppHTMLStart
				}, {
					name: l.AppHTMLParse,
					start: d.AppHTMLStart,
					end: d.AdsDotJSFetchStart
				}, {
					name: l.AdsDotJSFetchParse,
					start: d.AdsDotJSFetchStart,
					end: d.ReduxJSONStart
				}, {
					name: l.ReduxBootstrapJSONParse,
					start: d.ReduxJSONStart,
					end: d.JSDepsFetchStart
				}, {
					name: l.JSDepsFetchToEntryPoint,
					start: d.JSDepsFetchStart,
					end: d.EntryPointStart
				}, {
					name: l.EntryPointToInitClient,
					start: d.EntryPointStart,
					end: d.InitClientStart
				}, {
					name: l.InitClientPreamble,
					start: d.InitClientStart,
					end: d.CreateRouteCompsStart
				}, {
					name: l.CreateRouteComponents,
					start: d.CreateRouteCompsStart,
					end: d.ReactHydrateStart
				}, {
					name: l.ReactHydrate,
					start: d.ReactHydrateStart,
					end: d.ReactHydrateEnd
				}, {
					name: l.InitClientPostamble,
					start: d.ReactHydrateEnd,
					end: d.InitClientEnd
				}, {
					name: l.NavigationToFirstPostTitleVisible,
					start: d.FetchStart,
					end: d.FirstPostTitleImageLoaded
				}, {
					name: l.NavigationToInitClientFinished,
					start: d.FetchStart,
					end: d.InitClientEnd
				}],
				m = e => {
					if (!o) return null;
					c.forEach(e => (e => {
						if (o) try {
							const {
								name: t,
								start: i,
								end: n
							} = e;
							r.a.measure(t, i, n)
						} catch (t) {
							0
						}
					})(e));
					const t = r.a.getEntriesByType("measure").filter(e => !!a[e.name]).reduce((e, t) => {
						const {
							name: i,
							duration: n
						} = t;
						return e[i] = Math.floor(n), e
					}, {});
					return "number" == typeof e && (t.serverDocumentLength = e), Object.keys(t).length ? t : null
				},
				h = (e, t) => {
					t && Object(s.a)(n.l.Redesign, {
						meta: e,
						data: t,
						type: "perf"
					})
				};
			var p, _;

			function g(e, t) {
				const i = function() {
					if (!r.a || !r.a.timing) return null;
					const e = r.a.timing,
						t = {
							timeToFirstByte: e.responseStart - e.requestStart,
							timeToInteractive: e.domInteractive - e.requestStart
						};
					if (r.a.getEntriesByType) {
						const e = r.a.getEntriesByType("paint");
						if (e.length) {
							const i = e.find(e => "first-contentful-paint" === e.name);
							i && (t.timeToFirstContentfulPaint = i.startTime)
						}
					}
					return t
				}();
				if (!i) return;
				const o = {
					name: e,
					isLoggedIn: t
				};
				Object(s.a)(n.l.Redesign, {
					data: i,
					meta: o,
					type: "perf"
				})
			}

			function w(e, t, i) {
				0
			}! function(e) {
				e.CommentsPage = "comments-page", e.FrontPage = "frontpage", e.Subreddit = "subreddit"
			}(p || (p = {})),
			function(e) {
				e.apiTiming = "apiTiming", e.gqlFetchTiming = "gqlFetchTiming", e.gqlNormalizationTiming = "gqlNormalizationTiming", e.gqlExperimentFetch = "gqlExperimentFetchTiming", e.serverSideRender = "serverSideRender", e.setupTiming = "setupTiming"
			}(_ || (_ = {}))
		},
		"./src/lib/permanentCookieOptions.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/constants/index.ts");
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
				const t = new Date;
				return t.setFullYear(t.getFullYear() + e), Object.assign({}, n.x, {
					expires: t
				})
			}
		},
		"./src/lib/redditId/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "b", (function() {
				return o
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			const n = /(?:t(\d+)_)?([a-z0-9]+)/;

			function s(e) {
				return parseInt(r(e), 36)
			}

			function r(e) {
				const t = n.exec(e);
				return t ? t[2] : ""
			}

			function o(e, t) {
				return "number" == typeof e ? "".concat(t, "_").concat(e.toString(36)) : "".concat(t, "_").concat(r(e))
			}
		},
		"./src/lib/reducers/addAuthentication/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/reddit/actions/session.ts");
			t.a = (e, t) => (function() {
				let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
					s = arguments.length > 1 ? arguments[1] : void 0;
				switch (s.type) {
					case n.c:
					case n.d:
						return t;
					default:
						return e(i, s)
				}
			})
		},
		"./src/lib/safeJSONParse/index.ts": function(e, t, i) {
			"use strict";

			function n(e) {
				try {
					return JSON.parse(e)
				} catch (t) {}
			}
			i.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/sample/index.ts": function(e, t, i) {
			"use strict";

			function n(e) {
				return !(e <= 0) && (e >= 100 || 100 * Math.random() <= e)
			}
			i.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/scheduler/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			})), i.d(t, "b", (function() {
				return r
			}));
			var n = i("./node_modules/request-idle-callback/index.js");
			class s {
				constructor(e) {
					let {
						cb: t,
						args: i
					} = e;
					this.cb = t, this.args = i, this.next = null
				}
				execute() {
					this.cb.apply(null, this.args)
				}
			}

			function r() {
				let e = null,
					t = null,
					i = null;
				const s = () => {
						null === i && (i = Object(n.requestIdleCallback)(r))
					},
					r = t => {
						let n = 0;
						for (;
							(t.timeRemaining() > n || t.didTimeout) && null !== e;) {
							const i = t.timeRemaining();
							e.execute(), e = e.next, n = i - t.timeRemaining()
						}
						i = null, null !== e && s()
					};
				return {
					enqueue(i) {
						null === e ? (e = i, t = i) : (null !== t && (t.next = i), t = i), s()
					},
					clear() {
						Object(n.cancelIdleCallback)(i), i = null, e = null
					},
					flush() {
						for (null !== i && (Object(n.cancelIdleCallback)(i), i = null); null !== e;) e.execute(), e = e.next
					}
				}
			}
		},
		"./src/lib/sentry/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			})), i.d(t, "b", (function() {
				return l
			})), i.d(t, "d", (function() {
				return a
			}));
			i("./node_modules/core-js/modules/es6.regexp.replace.js"), i("./node_modules/core-js/modules/es6.symbol.js");
			var n = i("./node_modules/@sentry/integrations/esm/dedupe.js"),
				s = i("./node_modules/@sentry/integrations/esm/rewriteframes.js"),
				r = function(e, t) {
					var i = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (i[n[s]] = e[n[s]])
					}
					return i
				};
			let o;

			function d(e, t) {
				e.addEventProcessor(e => (e.settings = t, e))
			}

			function l(e) {
				const {
					settings: t
				} = e, i = r(e, ["settings"]);
				return JSON.parse(JSON.stringify(i))
			}

			function a() {
				const e = /^webpack(-internal)?\:\/\/\//;
				return [new n.a, new s.a({
					iteratee: t => (t.filename && (t.filename = t.filename.replace(e, "")), t.abs_path && (t.abs_path = t.abs_path.replace(e, "")), t)
				})]
			}
			o = i("./node_modules/@sentry/browser/esm/index.js"), t.c = o
		},
		"./src/lib/stringInterpolate/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			i("./node_modules/core-js/modules/es6.regexp.replace.js");

			function n(e, t) {
				return e && t ? e.replace(/%\{(\w+)\}/g, (e, i) => {
					const n = t[i];
					return null == n ? i : String(n)
				}) : e
			}
		},
		"./src/lib/timeAgo/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return m
			})), i.d(t, "e", (function() {
				return h
			})), i.d(t, "c", (function() {
				return p
			})), i.d(t, "a", (function() {
				return _
			})), i.d(t, "b", (function() {
				return g
			}));
			var n = i("./src/app/strings/index.ts"),
				s = i("./src/reddit/i18n/utils.ts"),
				r = i("./src/lib/constants/index.ts");
			const o = {
					[r.cb]: r.Bb,
					[r.I]: r.cb,
					[r.w]: r.I,
					[r.db]: r.w,
					[r.Wb]: r.db
				},
				d = {
					[r.Bb]: "time.seconds",
					[r.cb]: "time.minutes",
					[r.I]: "time.hours",
					[r.w]: "time.days",
					[r.db]: "time.months",
					[r.Wb]: "time.years"
				},
				l = {
					[r.Bb]: "time.ago.seconds",
					[r.cb]: "time.ago.minutes",
					[r.I]: "time.ago.hours",
					[r.w]: "time.ago.days",
					[r.db]: "time.ago.months",
					[r.Wb]: "time.ago.years"
				},
				a = {
					[r.Bb]: "time.short.seconds",
					[r.cb]: "time.short.minutes",
					[r.I]: "time.short.hours",
					[r.w]: "time.short.days",
					[r.db]: "time.short.months",
					[r.Wb]: "time.short.years"
				},
				u = (r.Bb, r.cb, r.I, r.w, r.db, r.Wb, {
					[r.Bb]: "s",
					[r.cb]: "m",
					[r.I]: "h",
					[r.w]: "d"
				}),
				c = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

			function m(e, t, i, s) {
				const u = Date.now(),
					c = "number" == typeof t ? t : new Date(t).valueOf(),
					m = Math.abs(u - 1e3 * c);
				if (m < r.cb) return Object(n.a)(e, "time.justNow");
				const h = i ? d : l;
				for (const d of [r.I, r.w, r.db, r.Wb])
					if (m < d) {
						const t = Math.floor(m / o[d]);
						return s ? "".concat(t).concat(Object(n.a)(e, a[o[d]])) : Object(n.c)(e, h[o[d]], t)
					} const p = Math.floor(m / r.Wb);
				return s ? "".concat(p).concat(Object(n.a)(e, a[r.Wb])) : Object(n.c)(e, h[r.Wb], p)
			}

			function h(e) {
				const t = Date.now(),
					i = "number" == typeof e ? e : new Date(e).valueOf();
				return Math.trunc(Math.abs(t - i) / r.I)
			}

			function p(e) {
				const t = Date.now(),
					i = "number" == typeof e ? e : new Date(e).valueOf(),
					n = Math.abs(t - 1e3 * i);
				return Math.floor(n / r.w)
			}

			function _(e) {
				const t = Date.now(),
					i = Math.abs(t - 1e3 * e),
					n = new Date(1e3 * e),
					d = new Date(t);
				if (i < r.cb) return Object(s.c)("now");
				if (i < r.Vb)
					for (const c of [r.I, r.w, r.db])
						if (i < c) {
							const e = Math.floor(i / o[c]),
								t = Object(s.b)("count", e),
								n = u[o[c]],
								r = Object(s.b)("interval", n);
							return Object(s.c)("".concat(t).concat(r))
						} if (n.getFullYear() !== d.getFullYear()) return n.toLocaleDateString();
				const l = c[n.getMonth()],
					a = n.getDate();
				return Object(s.c)("".concat(Object(s.b)("month", l), " ").concat(Object(s.b)("date", a)))
			}

			function g(e) {
				const t = Date.now(),
					i = Math.abs(1e3 * e - t),
					n = new Date(1e3 * e),
					d = new Date(t);
				if (i < r.db)
					for (const c of [r.I, r.w, r.db])
						if (i < c) {
							const e = Math.floor(i / o[c]),
								t = Object(s.b)("count", e),
								n = u[o[c]],
								r = Object(s.b)("interval", n);
							return Object(s.c)("".concat(t).concat(r, " left"))
						} if (n.getFullYear() !== d.getFullYear()) {
					const e = n.toLocaleDateString();
					return Object(s.c)("Expires ".concat(Object(s.b)("expiration-date", e)))
				}
				const l = c[n.getMonth()],
					a = n.getDate();
				return Object(s.c)("Expires ".concat(Object(s.b)("month", l), " ").concat(Object(s.b)("date", a)))
			}
		},
		"./src/polyfill.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/uuid/v4.js"),
				s = i.n(n);
			const r = {},
				o = 6,
				d = s()().slice(-o);
			class l {
				constructor(e) {
					e = String(e);
					const t = "$BroadcastChannel$".concat(e, "$");
					r[t] = r[t] || [], r[t].push(this), this.name = e, this._id = t, this._closed = !1, this._mc = new MessageChannel, this._mc.port1.start(), this._mc.port2.start(), window.addEventListener("storage", e => {
						if (e.storageArea !== window.localStorage) return;
						if (!e.key || !e.newValue) return;
						if (e.key.substring(0, t.length) !== t) return;
						if (e.key.substring(t.length, t.length + o) === d) return;
						const i = JSON.parse(e.newValue);
						this._mc.port2.postMessage(i)
					})
				}
				postMessage(e) {
					if (this._closed) {
						const e = new Error;
						throw e.name = "InvalidStateError", e
					}
					const t = JSON.stringify(e),
						i = "".concat(this._id).concat(d, "$").concat(s()());
					window.localStorage.setItem(i, t), setTimeout(() => {
						window.localStorage.removeItem(i)
					}, 100), r[this._id].forEach(e => {
						e !== this && e._mc.port2.postMessage(JSON.parse(t))
					})
				}
				close() {
					if (this._closed) return;
					this._closed = !0, this._mc.port1.close(), this._mc.port2.close();
					const e = r[this._id].indexOf(this);
					r[this._id].splice(e, 1)
				}
				get onmessage() {
					return this._mc.port1.onmessage
				}
				set onmessage(e) {
					this._mc.port1.onmessage = e
				}
				get onmessageerror() {
					return () => {}
				}
				set onmessageerror(e) {}
				addEventListener(e, t, i) {
					return this._mc.port1.addEventListener(e, t, i)
				}
				removeEventListener(e, t, i) {
					return this._mc.port1.removeEventListener(e, t, i)
				}
				dispatchEvent(e) {
					return this._mc.port1.dispatchEvent(e)
				}
			}
			"undefined" != typeof window && (window.BroadcastChannel = window.BroadcastChannel || l)
		},
		"./src/reddit/actions/focusedVerticals/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return n
			})), i.d(t, "f", (function() {
				return s
			})), i.d(t, "d", (function() {
				return r
			})), i.d(t, "h", (function() {
				return o
			})), i.d(t, "g", (function() {
				return d
			})), i.d(t, "c", (function() {
				return l
			})), i.d(t, "a", (function() {
				return a
			})), i.d(t, "b", (function() {
				return u
			}));
			const n = "FOCUSED_VERTICAL_LOADED",
				s = "FOCUSED_VERTICAL_PENDING",
				r = "FOCUSED_VERTICAL_FAILED",
				o = "SHOW_DU",
				d = "HIDE_DU",
				l = 345,
				a = "community_desc_with_posts",
				u = "community_desc_with_posts"
		},
		"./src/reddit/actions/overlayEvents.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return s
			})), i.d(t, "a", (function() {
				return r
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "d", (function() {
				return d
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "f", (function() {
				return a
			}));
			var n = i("./src/lib/makeActionCreator/index.ts");
			const s = "OVERLAY_EVENTS__MOUSE_CLICK",
				r = "OVERLAY_EVENTS__ESCAPE_PRESSED",
				o = "OVERLAY_EVENTS__WINDOW_RESIZED",
				d = Object(n.a)(r),
				l = Object(n.a)(s),
				a = Object(n.a)(o)
		},
		"./src/reddit/actions/session.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return r
			})), i.d(t, "d", (function() {
				return o
			})), i.d(t, "e", (function() {
				return d
			})), i.d(t, "f", (function() {
				return l
			})), i.d(t, "a", (function() {
				return a
			})), i.d(t, "b", (function() {
				return u
			})), i.d(t, "g", (function() {
				return h
			}));
			var n = i("./src/lib/makeActionCreator/index.ts"),
				s = i("./src/reddit/endpoints/session/index.ts");
			const r = "SESSION__USER_AUTHENTICATED",
				o = "SESSION__USER_LOGGED_OUT",
				d = "SESSION__USER_REAUTHENTICATED",
				l = "SESSION__USER_REFRESH_FAILED",
				a = "SESSION__LOAT_RECEIVED",
				u = "SESSION__LOAT_REFRESHED",
				c = (Object(n.a)(r), Object(n.a)(d)),
				m = Object(n.a)(o),
				h = (Object(n.a)(l), () => async (e, t, i) => {
					let {
						apiContext: n
					} = i;
					const r = t().user.session;
					if (r) {
						const t = await Object(s.a)(n(), r);
						if (t.ok) {
							const i = t.body;
							i.unsafeLoggedOut ? (r.unsafeLoggedOut || e(m()), e(p(i))) : e(c(i))
						}
					}
				}),
				p = (Object(n.a)(a), Object(n.a)(u))
		},
		"./src/reddit/components/HiddenDiv.m.less": function(e, t, i) {
			e.exports = {
				Component: "_1VhYfuKTAdUU_3j4cMjkr5",
				component: "_1VhYfuKTAdUU_3j4cMjkr5"
			}
		},
		"./src/reddit/components/Portal/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var n = i("./node_modules/react/index.js"),
				s = i("./src/lib/CSSVariableProvider/index.tsx");
			class r extends n.PureComponent {
				render() {
					const {
						children: e,
						container: t
					} = this.props;
					return Object(s.d)(e, t || document.body)
				}
			}
		},
		"./src/reddit/constants/colors.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			})), i.d(t, "b", (function() {
				return r
			}));
			var n = i("./node_modules/polished/dist/polished.es.js");
			const s = {
					admin: "#EA0027",
					adminEmeritus: "#BE1337",
					alienblue: "#0079D3",
					approved: "#46D160",
					black: "#000000",
					chat: "#000000",
					dayModeActionIcon: "#878A8C",
					defaultFlair: "#DADADA",
					downvote: "#7193FF",
					gold: "#DDBD37",
					info: "#FFF7E6",
					locked: "#FFD635",
					lightboxHeaderBg: "#030303",
					lightboxHeaderText: "#D7DADC",
					moderator: "#75D377",
					notice: "#FF8617",
					nsfw: "#FF585B",
					op: "#24A0ED",
					orangered: "#FF4500",
					overlayBackground: Object(n.j)("#1c1c1c", .9),
					overlayReportFlow: Object(n.j)("#1a1a1b", .6),
					quarantine: "#FFB000",
					removed: "#FF585B",
					reported: "#FFB000",
					restricted: "#0DD3BB",
					snoo: "#FF4500",
					spoiler: "#000000",
					tooltip: "#373C3F",
					transparent: "#00000000",
					twitter: "#1DA1F2",
					upvote: "#FF4500",
					warning: "#EA0027",
					white: "#FFFFFF"
				},
				r = "transparent"
		},
		"./src/reddit/constants/headers.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			const n = "reddit-user_id"
		},
		"./src/reddit/constants/localStorage.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return s
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "d", (function() {
				return o
			})), i.d(t, "e", (function() {
				return d
			})), i.d(t, "f", (function() {
				return l
			})), i.d(t, "g", (function() {
				return a
			})), i.d(t, "h", (function() {
				return u
			})), i.d(t, "i", (function() {
				return c
			})), i.d(t, "j", (function() {
				return m
			})), i.d(t, "k", (function() {
				return h
			})), i.d(t, "l", (function() {
				return p
			})), i.d(t, "p", (function() {
				return _
			})), i.d(t, "m", (function() {
				return g
			})), i.d(t, "n", (function() {
				return w
			})), i.d(t, "o", (function() {
				return y
			})), i.d(t, "q", (function() {
				return v
			})), i.d(t, "t", (function() {
				return f
			})), i.d(t, "s", (function() {
				return b
			})), i.d(t, "u", (function() {
				return T
			})), i.d(t, "v", (function() {
				return S
			})), i.d(t, "w", (function() {
				return F
			})), i.d(t, "x", (function() {
				return E
			})), i.d(t, "y", (function() {
				return I
			})), i.d(t, "z", (function() {
				return B
			})), i.d(t, "A", (function() {
				return R
			})), i.d(t, "r", (function() {
				return x
			}));
			const n = "announcement-banner-seen-store",
				s = "banner_dismissed_store",
				r = "breaking_news_disabled_store",
				o = "categories-ranking-store",
				d = "create_polls_painted_door_dismissed_store",
				l = "desktop-notifications",
				a = "disclaimer_store",
				u = "editor-mode-hint",
				c = "email-collection-reprompt-store",
				m = "feature-throttling-store",
				h = "FOCUS_VERTICAL_VARIANT",
				p = "gild_defaults_store",
				_ = "inline-edit-id-card-edu-tooltip-store",
				g = "inline-edit-edu-tooltip-store",
				w = "layers-saved-colors",
				y = "layers-saved-surfaces",
				v = "local_persisted_experiments_store",
				f = "mod-onboarding-store",
				b = "modal_dismissed_store",
				T = "m2m",
				S = "post-chain-dismissal-store",
				F = "post-chain-store",
				E = "post-creation-edu-tooltip-store",
				I = "profile-pinned-posts-store",
				B = "recent_searches",
				R = "rpan-user-settings-store",
				x = "low-activity-call-to-action-store"
		},
		"./src/reddit/constants/postLayout.ts": function(e, t, i) {
			"use strict";
			var n, s;
			i.d(t, "g", (function() {
					return n
				})), i.d(t, "d", (function() {
					return s
				})), i.d(t, "e", (function() {
					return r
				})), i.d(t, "b", (function() {
					return o
				})), i.d(t, "f", (function() {
					return d
				})), i.d(t, "c", (function() {
					return l
				})), i.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.Large = "LARGE", e.Medium = "MEDIUM", e.Classic = "CLASSIC", e.Compact = "COMPACT"
				}(n || (n = {})),
				function(e) {
					e.Card = "card", e.Classic = "classic", e.Compact = "compact"
				}(s || (s = {}));
			const r = {
					[n.Large]: s.Card,
					[n.Medium]: s.Card,
					[n.Classic]: s.Classic,
					[n.Compact]: s.Compact
				},
				o = {
					[s.Card]: n.Large,
					[s.Classic]: n.Classic,
					[s.Compact]: n.Compact
				},
				d = 8,
				l = {
					[s.Card]: d,
					[s.Classic]: 16,
					[s.Compact]: 25
				},
				a = 25
		},
		"./src/reddit/constants/posts.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return s
			})), i.d(t, "c", (function() {
				return r
			}));
			const n = {
					SUBREDDIT: "subreddit",
					PROFILE: "profile"
				},
				s = {
					r: n.SUBREDDIT,
					user: n.PROFILE
				},
				r = 5
		},
		"./src/reddit/constants/theme.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "a", (function() {
				return s
			}));
			const n = {
					REDDIT: "REDDIT",
					NIGHT: "NIGHT"
				},
				s = n.REDDIT
		},
		"./src/reddit/constants/tooltips.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			const n = "editable-subreddit-icon"
		},
		"./src/reddit/endpoints/session/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var n = i("./src/lib/constants/index.ts"),
				s = i("./src/lib/makeApiRequest/index.ts");
			const r = (e, t) => Object(s.b)(e, {
				data: t,
				endpoint: "/refreshproxy",
				method: n.bb.POST
			}, s.c)
		},
		"./src/reddit/helpers/imagePreview/index.ts": function(e, t, i) {
			"use strict";

			function n(e) {
				if ("string" == typeof e) return e;
				if (e && window.URL && window.URL.createObjectURL) try {
					return window.URL.createObjectURL(e)
				} catch (t) {}
				return ""
			}

			function s(e) {
				e && window.URL && window.URL.revokeObjectURL && window.URL.revokeObjectURL(e)
			}
			async function r(e) {
				return new Promise((t, i) => {
					const n = new Image;
					n.onload = () => {
						t({
							width: n.width,
							height: n.height
						})
					}, n.onerror = e => i(e), n.src = e
				})
			}
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return s
			})), i.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/localStorage/index.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/lib/localStorageAvailable/index.ts"),
				s = i("./src/lib/timeAgo/index.ts"),
				r = i("./node_modules/lodash/isEqual.js"),
				o = i.n(r),
				d = i("./node_modules/lodash/isObjectLike.js"),
				l = i.n(d),
				a = i("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = i("./src/reddit/constants/localStorage.ts"),
				c = i("./src/reddit/constants/tooltips.ts");
			const m = [u.d, u.q];
			var h = i("./src/reddit/models/Search/index.ts"),
				p = i("./node_modules/uuid/v4.js"),
				_ = i.n(p);
			i.d(t, "Q", (function() {
				return y
			})), i.d(t, "n", (function() {
				return v
			})), i.d(t, "o", (function() {
				return f
			})), i.d(t, "B", (function() {
				return b
			})), i.d(t, "T", (function() {
				return I
			})), i.d(t, "C", (function() {
				return B
			})), i.d(t, "r", (function() {
				return R
			})), i.d(t, "F", (function() {
				return x
			})), i.d(t, "e", (function() {
				return C
			})), i.d(t, "w", (function() {
				return k
			})), i.d(t, "Y", (function() {
				return O
			})), i.d(t, "D", (function() {
				return N
			})), i.d(t, "J", (function() {
				return j
			})), i.d(t, "g", (function() {
				return P
			})), i.d(t, "k", (function() {
				return D
			})), i.d(t, "N", (function() {
				return G
			})), i.d(t, "v", (function() {
				return q
			})), i.d(t, "X", (function() {
				return W
			})), i.d(t, "W", (function() {
				return V
			})), i.d(t, "u", (function() {
				return Y
			})), i.d(t, "V", (function() {
				return K
			})), i.d(t, "t", (function() {
				return Q
			})), i.d(t, "d", (function() {
				return J
			})), i.d(t, "E", (function() {
				return X
			})), i.d(t, "z", (function() {
				return Z
			})), i.d(t, "I", (function() {
				return $
			})), i.d(t, "h", (function() {
				return ee
			})), i.d(t, "K", (function() {
				return te
			})), i.d(t, "S", (function() {
				return ie
			})), i.d(t, "q", (function() {
				return ne
			})), i.d(t, "s", (function() {
				return se
			})), i.d(t, "a", (function() {
				return re
			})), i.d(t, "A", (function() {
				return oe
			})), i.d(t, "U", (function() {
				return de
			})), i.d(t, "i", (function() {
				return le
			})), i.d(t, "b", (function() {
				return ae
			})), i.d(t, "c", (function() {
				return ue
			})), i.d(t, "y", (function() {
				return ce
			})), i.d(t, "M", (function() {
				return me
			})), i.d(t, "G", (function() {
				return he
			})), i.d(t, "l", (function() {
				return _e
			})), i.d(t, "O", (function() {
				return ge
			})), i.d(t, "ab", (function() {
				return we
			})), i.d(t, "m", (function() {
				return ye
			})), i.d(t, "P", (function() {
				return ve
			})), i.d(t, "x", (function() {
				return fe
			})), i.d(t, "Z", (function() {
				return be
			})), i.d(t, "j", (function() {
				return Te
			})), i.d(t, "L", (function() {
				return Se
			})), i.d(t, "f", (function() {
				return Fe
			})), i.d(t, "H", (function() {
				return Ee
			})), i.d(t, "p", (function() {
				return Be
			})), i.d(t, "R", (function() {
				return Re
			}));
			const g = (e, t) => {
					const i = e.getItem(t);
					if (i) return JSON.parse(i)
				},
				w = (e, t, i) => e.setItem(t, JSON.stringify(i)),
				y = (e, t) => {
					window.localStorage && w(window.localStorage, e, t)
				},
				v = e => g(localStorage, e),
				f = () => {
					const e = {};
					for (const i of m) {
						const n = localStorage.getItem(i);
						if (n) try {
							const t = JSON.parse(n);
							e[i] = t
						} catch (t) {}
					}
					return e
				},
				b = e => {
					const t = /(t2_\w+)/;
					let i = [];
					try {
						i = Object.keys(localStorage)
					} catch (s) {
						return
					}
					const n = i.filter((function(i) {
						const n = t.exec(i);
						if (n && n[1] !== e) return !0
					}));
					try {
						for (let e = 0, t = n.length; e < t; e++) localStorage.removeItem(n[e])
					} catch (s) {
						return
					}
				},
				T = (e, t, i, n) => {
					const s = g(e, t) || {};
					return s[i] = n, w(e, t, s)
				},
				S = (e, t, i, n, s) => {
					const r = g(e, t) || {};
					return l()(r[i]) || (r[i] = {}), r[i][s] = n, w(e, t, r)
				},
				F = (e, t, i) => {
					const n = g(e, t);
					return !!n && !0 === n[i]
				},
				E = (e, t, i, n) => {
					const s = g(e, t);
					return !(!s || !s[i]) && !0 === s[i][n]
				},
				I = (e, t) => T(localStorage, u.s, e, t),
				B = e => ((e, t, i) => {
					const n = g(e, t) || {};
					return delete n[i], w(e, t, n)
				})(localStorage, u.s, e),
				R = e => F(localStorage, u.s, e),
				x = (e, t, i) => S(localStorage, u.b, e, t, i),
				C = (e, t) => E(localStorage, u.b, e, t),
				k = e => ((e, t, i) => {
					const n = g(e, i);
					let s = n ? n[t] : [];
					return s = s.map(e => e.id && e.section ? e : Object.assign({}, e, {
						section: h.c.recent,
						id: _()()
					}))
				})(localStorage, u.z, e),
				O = (e, t) => ((e, t, i, n) => {
					let s = (g(e, n) || {})[t] || [],
						r = -1;
					s = s.map((e, t) => {
						const n = e.id === i.id || e.searchQuery === i.searchQuery && e.subredditOrProfileRestrictedName === i.subredditOrProfileRestrictedName;
						return -1 === r && n && (r = t), e.id && e.section ? e : Object.assign({}, e, {
							id: _()(),
							section: h.c.recent
						})
					}), -1 !== r && s.splice(r, 1), s.length >= 5 && (s = s.slice(0, 4));
					const o = {
						[u.z]: s
					};
					return s.unshift(i), w(e, n, o), s
				})(localStorage, u.z, e, t),
				N = (e, t) => ((e, t, i, n) => {
					const s = g(e, n);
					let r = [];
					if (s && s[t]) {
						r = s[t].filter(e => !o()(e, i));
						const d = {
							[u.z]: r
						};
						w(e, n, d)
					}
					return r
				})(localStorage, u.z, e, t),
				j = (e, t) => ((e, t, i, n) => {
					const s = g(e, t) || {};
					return s[i] = n, w(e, t, s)
				})(localStorage, u.g, e, t),
				P = e => ((e, t, i) => {
					const n = g(e, t);
					return !!n && !0 === n[i]
				})(localStorage, u.g, e),
				A = e => !!M(e),
				L = e => {
					U(e, "1")
				},
				D = () => {
					const e = v(u.l);
					return !(!e || !0 !== e.anonymous)
				},
				G = e => {
					y(u.l, {
						anonymous: e
					})
				},
				M = e => Object(n.a)() && localStorage.getItem(e) || "",
				U = (e, t) => {
					Object(n.a)() && localStorage.setItem(e, t)
				},
				q = () => A(u.y),
				W = () => L(u.y),
				z = e => y(u.x, e),
				H = () => {
					const e = v(u.x);
					if (e) return e;
					const t = A("post-creation-event-tooltip-store");
					t && localStorage.removeItem("post-creation-event-tooltip-store");
					const i = A("post-creation-collection-tooltip-store");
					i && localStorage.removeItem("post-creation-collection-tooltip-store");
					const n = {
						collectionShowTimesLeft: i ? 0 : 3,
						eventShowTimesLeft: t ? 0 : 3
					};
					return z(n), n
				},
				V = e => {
					const t = H();
					z(Object.assign({}, t, {
						eventShowTimesLeft: e
					}))
				},
				Y = () => H().eventShowTimesLeft,
				K = e => {
					const t = H();
					z(Object.assign({}, t, {
						collectionShowTimesLeft: e
					}))
				},
				Q = () => H().collectionShowTimesLeft,
				J = e => {
					const t = v(u.a);
					return t && t.id === e ? t.count : 0
				},
				X = (e, t) => {
					y(u.a, {
						id: e,
						count: t
					})
				},
				Z = () => {
					const e = M(u.f);
					return e ? "1" === e : void 0
				},
				$ = e => {
					U(u.f, e ? "1" : "0")
				},
				ee = () => parseInt(M(u.h)) || 0,
				te = e => U(u.h, String(e)),
				ie = (e, t, i) => S(localStorage, u.t, e, t, i),
				ne = (e, t) => E(localStorage, u.t, e, t),
				se = () => {
					try {
						return v(u.w) || {}
					} catch (e) {
						return {}
					}
				},
				re = (e, t) => {
					const i = Object.assign({}, se(), {
						[e]: {
							postId: e,
							subredditId: t,
							when: Date.now()
						}
					});
					y(u.w, i)
				},
				oe = () => 1 === v(u.v),
				de = e => y(u.v, e ? 1 : 0),
				le = () => v(u.i) || 0,
				ae = () => {
					y(u.i, 3)
				},
				ue = () => {
					const e = le();
					0 !== e && y(u.i, e - 1)
				},
				ce = () => () => {
					const e = Date.now(),
						t = v("".concat(u.k, "_").concat(a.a));
					return !!t && (t < e && e < t + 2592e6)
				},
				me = () => () => {
					const e = Date.now();
					y("".concat(u.k, "_").concat(a.a), e)
				},
				he = e => {
					y(u.d, e)
				},
				pe = {
					dismissed: !1,
					seen: 0
				},
				_e = e => {
					if (!Object(n.a)()) return !1;
					const t = E(localStorage, u.p, c.a, e);
					localStorage.removeItem(u.p), t && ge(e, t);
					const i = v(u.m);
					return !!i && (i.dismissed || i.seen >= 5)
				},
				ge = function(e) {
					!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					Object(n.a)() && y(u.m, {
						dismissed: !0,
						seen: 0
					})
				},
				we = () => {
					const e = v(u.m) || pe;
					y(u.m, Object.assign({}, e, {
						seen: Math.min(e.seen + 1, 5)
					}))
				},
				ye = () => v(u.n) || [],
				ve = e => y(u.n, e),
				fe = () => v(u.o) || {},
				be = e => y(u.o, e),
				Te = () => v(u.j),
				Se = e => {
					y(u.j, e)
				},
				Fe = () => A(u.e),
				Ee = () => L(u.e),
				Ie = () => {
					try {
						return v(u.r)
					} catch (e) {
						return
					}
				},
				Be = () => {
					const e = Ie();
					if (!e) return !1;
					const t = Object(s.c)(Math.floor(new Date(e.dismissedAt).valueOf() / 1e3));
					return 3 === e.dismissedTimes || 1 === e.dismissedTimes && t <= 3 || 2 === e.dismissedTimes && t <= 7
				},
				Re = () => {
					const e = Ie(),
						t = e ? e.dismissedTimes + 1 : 1;
					y(u.r, {
						dismissedTimes: t,
						dismissedAt: (new Date).toISOString()
					})
				}
		},
		"./src/reddit/i18n/utils.ts": function(e, t, i) {
			"use strict";

			function n(e) {
				return e
			}

			function s(e, t) {
				return t
			}

			function r(e, t, i) {
				return t[(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o)(i)]
			}

			function o(e) {
				return 1 === e ? 0 : 1
			}
			i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return s
			})), i.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/models/Image/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return l
			})), i.d(t, "a", (function() {
				return a
			})), i.d(t, "j", (function() {
				return u
			})), i.d(t, "i", (function() {
				return c
			})), i.d(t, "h", (function() {
				return m
			})), i.d(t, "f", (function() {
				return p
			})), i.d(t, "e", (function() {
				return _
			})), i.d(t, "g", (function() {
				return g
			})), i.d(t, "l", (function() {
				return w
			})), i.d(t, "m", (function() {
				return y
			})), i.d(t, "n", (function() {
				return v
			})), i.d(t, "o", (function() {
				return f
			})), i.d(t, "k", (function() {
				return b
			})), i.d(t, "d", (function() {
				return T
			}));
			var n, s = i("./node_modules/uuid/v4.js"),
				r = i.n(s),
				o = i("./src/config.ts"),
				d = i("./src/reddit/helpers/imagePreview/index.ts");
			! function(e) {
				e.Pending = "pending", e.NotUploaded = "not-uploaded", e.TempUploaded = "temp-uploaded", e.Uploaded = "uploaded", e.FailedToUpload = "failed-to-upload", e.Saved = "saved", e.Invalid = "invalid"
			}(n || (n = {}));
			const l = o.a.processingImageUrl;
			var a;

			function u(e) {
				return e.kind === n.Uploaded
			}

			function c(e) {
				switch (e.kind) {
					case n.Pending:
					case n.Saved:
					case n.Invalid:
						return !1;
					default:
						return !0
				}
			}

			function m(e) {
				switch (e.kind) {
					case n.TempUploaded:
					case n.Uploaded:
					case n.Saved:
						return !0;
					default:
						return !1
				}
			}
			async function h(e) {
				const t = Object(d.b)(e),
					i = r()();
				let n = 0,
					s = 0;
				if (t) {
					const e = await Object(d.a)(t);
					n = e.width, s = e.height
				}
				return {
					file: e,
					height: s,
					id: i,
					url: t,
					width: n
				}
			}
			async function p(e) {
				const t = await h(e);
				return Object.assign({}, t, {
					kind: n.Pending
				})
			}
			async function _(e) {
				const t = await h(e);
				return Object.assign({}, t, {
					kind: n.NotUploaded
				})
			}

			function g(e) {
				return Object.assign({}, e, {
					kind: n.Saved,
					id: r()()
				})
			}

			function w(e, t) {
				return {
					kind: n.Invalid,
					file: e.file,
					height: e.height,
					id: e.id,
					url: e.url,
					width: e.width,
					errorString: t
				}
			}

			function y(e) {
				return Object.assign({}, e, {
					kind: n.NotUploaded
				})
			}

			function v(e, t, i, s) {
				return {
					kind: n.TempUploaded,
					file: e.file,
					width: e.width,
					height: e.height,
					id: e.id,
					url: t,
					websocketUrl: i,
					context: s
				}
			}

			function f(e, t) {
				return Object(d.c)(e.url), {
					kind: n.Uploaded,
					width: e.width,
					height: e.height,
					id: e.id,
					url: t
				}
			}

			function b(e, t) {
				return {
					error: t,
					file: e.file,
					height: e.height,
					id: e.id,
					kind: n.FailedToUpload,
					url: e.url,
					width: e.width
				}
			}

			function T(e) {
				Object(d.c)(e.url)
			}! function(e) {
				e[e.StructuredStyles = 0] = "StructuredStyles", e[e.Widgets = 1] = "Widgets", e[e.FlairTemplates = 2] = "FlairTemplates"
			}(a || (a = {}))
		},
		"./src/reddit/models/NewStructuredStyles/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return u
			})), i.d(t, "c", (function() {
				return f
			})), i.d(t, "a", (function() {
				return S
			})), i.d(t, "b", (function() {
				return F
			}));
			var n = i("./node_modules/polished/dist/polished.es.js"),
				s = i("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				r = i("./src/reddit/constants/colors.ts");
			const o = {
					borderRadius: "24",
					customSize: "32",
					padding: "6",
					size: "24"
				},
				d = {
					highlight: "#E9F5FD",
					metaText: "#787C7E",
					metaTextAlpha50: Object(n.j)("#787C7E", .5),
					metaTextShaded80: Object(n.l)(.8, "#787C7E"),
					placeholder: "#D3D6DA",
					postIcon: "#878A8C",
					postLine: "#D3D6DA",
					report: "#FFF7E5"
				},
				l = {
					body: "#FFFFFF",
					bodyFade: "#FFFFFF00",
					bodyText: "#1A1A1B",
					actionIcon: "#878A8C",
					navIcon: "#1A1A1B",
					errorText: "#FF0000",
					field: "#F6F7F8",
					fieldFade: "#F6F7F800",
					flair: "#EDEFF1",
					inactive: "#EDEFF1",
					line: "#EDEFF1",
					lightText: "#FFFFFF",
					linkText: "#0079D3",
					monospaceColor: "#FF006D",
					pageHeader: "#0079D3",
					postFlairText: "#1A1A1B"
				},
				a = (e, t, i) => Object(n.d)(i, (e => e ? "#FFFFFF" : "#000000")(t), e),
				u = (e, t) => a(e, t, .2),
				c = Object.assign({}, l, {
					actionIconAlpha50: Object(n.j)(l.actionIcon, .5),
					actionIconShaded80: Object(n.l)(.8, l.actionIcon),
					bodyAlpha50: Object(n.j)(l.body, .5),
					bodyAlpha80: Object(n.j)(l.body, .8),
					bodyShaded80: Object(n.l)(.8, l.body),
					bodyTinted50: Object(n.m)(.5, l.body),
					bodyTinted80: Object(n.m)(.8, l.body),
					bodyText: l.bodyText,
					bodyTextAlpha03: Object(n.j)(l.bodyText, .03),
					bodyTextAlpha20: Object(n.j)(l.bodyText, .2),
					bodyTextShaded20: Object(n.l)(.2, l.bodyText),
					bodyTextTinted20: Object(n.m)(.2, l.bodyText),
					lightTextAlpha75: Object(n.j)(l.lightText, .75),
					linkTextAlpha80: Object(n.j)(l.linkText, .5),
					linkTextShaded80: Object(n.l)(.8, l.linkText),
					linkTextTinted80: Object(n.m)(.8, l.linkText),
					linkTextWithBody: Object(n.d)(.75, l.linkText, l.body),
					navIconFaded10: Object(n.j)(l.navIcon, .1)
				}),
				m = {
					downvote: r.a.downvote,
					downvoteShaded80: Object(n.l)(.8, r.a.downvote),
					downvoteTinted80: Object(n.m)(.8, r.a.downvote),
					upvote: r.a.upvote,
					upvoteShaded80: Object(n.l)(.8, r.a.upvote),
					upvoteTinted80: Object(n.m)(.8, r.a.upvote)
				},
				h = {
					active: "#24A0ED",
					banner: {
						backgroundColor: "#24A0ED",
						backgroundImage: void 0,
						backgroundImagePosition: "cover",
						communityNameFormat: "slashtag",
						iconColor: "#24A0ED",
						iconImage: void 0,
						iconDimensions: o,
						lineHeight: "38",
						height: 64,
						positionedImage: void 0,
						positionedImageHeight: 48,
						positionedImageAlignment: "cover",
						secondaryBannerPositionedImage: void 0,
						showCommunityIcon: !0
					},
					button: "#0079D3",
					buttonShaded80: Object(n.l)(.8, "#0079D3"),
					canvas: "#DAE0E6",
					menu: "#FFFFFF",
					menuActiveText: "#0079D3",
					menuInactiveText: "#0079D3",
					metaText: d.metaText,
					metaTextAlpha50: d.metaTextAlpha50,
					metaTextShaded80: d.metaTextShaded80,
					navBar: {
						activeLink: d.highlight,
						activeSubmenuCaret: "#24A0ED",
						activeSubmenuLink: "#24A0ED",
						backgroundColor: "#24A0ED",
						backgroundImage: void 0,
						hoverLink: d.highlight,
						inactiveLink: c.inactive,
						inactiveSubmenuCaret: Object(n.k)(.6, "#24A0ED"),
						inactiveSubmenuLink: Object(n.k)(.6, "#24A0ED"),
						submenuBackgroundColor: Object(n.k)(.93, "#24A0ED"),
						useOverlay: !1
					},
					post: "#FFFFFF",
					postFlairText: "#1A1A1B",
					titleText: "#1A1A1B",
					voteText: Object.assign({}, m, {
						base: "#878A8C"
					}),
					voteIcons: {
						upvoteActive: void 0,
						upvoteInactive: void 0,
						downvoteActive: void 0,
						downvoteInactive: void 0
					},
					widgetColors: {
						sidebarWidgetBackgroundColor: "#FFFFFF",
						sidebarWidgetBorderColor: u("#FFFFFF", !1),
						sidebarWidgetHeaderColor: "#FFFFFF",
						sidebarWidgetHeaderColorAlpha60: Object(n.j)("#FFFFFF", .6),
						sidebarWidgetTextColor: "#1A1A1B",
						sidebarWidgetTextColorShaded80: Object(n.l)(.8, "#1A1A1B"),
						sidebarWidgetTitleColor: "#1A1A1B",
						lineColor: Object(s.b)("#1A1A1B")
					}
				},
				p = Object.assign({}, h, {
					postTransparent20: Object(n.o)(.2, h.post),
					postError: Object(n.d)(.1, "#FF0000", h.post),
					activeAlpha10: Object(n.j)(h.active, .1),
					activeAlpha50: Object(n.j)(h.active, .5),
					activeLight60: Object(n.k)(.6, h.active),
					activeTinted05: Object(n.m)(.05, h.active),
					buttonAlpha05: Object(n.j)(h.button, .05),
					buttonAlpha10: Object(n.j)(h.button, .1),
					buttonAlpha20: Object(n.j)(h.button, .2),
					buttonAlpha40: Object(n.j)(h.button, .4),
					buttonAlpha50: Object(n.j)(h.button, .5),
					buttonAlpha80: Object(n.j)(h.button, .8),
					buttonShaded80: Object(n.l)(.8, h.button),
					buttonTinted20: Object(n.m)(.2, h.button),
					buttonTinted50: Object(n.m)(.5, h.button),
					buttonTinted80: Object(n.m)(.8, h.button),
					postTinted20: Object(n.m)(.2, h.post)
				}),
				_ = {
					actionIcon: "#818384",
					body: "#1A1A1B",
					bodyFade: "#1A1A1B00",
					bodyText: "#D7DADC",
					button: "#D7DADC",
					buttonShaded80: Object(n.l)(.8, "#D7DADC"),
					canvas: "#030303",
					errorText: "#FF0000",
					field: "#272729",
					fieldFade: "#27272900",
					highlight: "#17232D",
					inactive: "#343536",
					lightText: "#FFFFFF",
					line: "#343536",
					linkText: "#4FBCFF",
					menu: "#030303",
					menuActiveText: "#D7DADC",
					menuInactiveText: "#D7DADC",
					metaText: "#818384",
					metaTextAlpha50: Object(n.j)("#818384", .5),
					metaTextShaded80: Object(n.l)(.8, "#818384"),
					monospaceColor: "#5291f8",
					navIcon: "#D7DADC",
					pageHeader: "#818384",
					placeholder: "#3A3A3C",
					post: "#1A1A1B",
					postFlairText: "#FFFFFF",
					postIcon: "#818384",
					postLine: "#343536",
					report: "#1C1402",
					titleText: "#D7DADC",
					voteText: Object.assign({}, m, {
						base: "#818384"
					}),
					voteIcons: {
						upvoteActive: void 0,
						upvoteInactive: void 0,
						downvoteActive: void 0,
						downvoteInactive: void 0
					},
					widgetColors: {
						sidebarWidgetBackgroundColor: "#1A1A1B",
						sidebarWidgetBorderColor: u("#1A1A1B", !0),
						sidebarWidgetHeaderColor: "#1A1A1B",
						sidebarWidgetHeaderColorAlpha60: Object(n.j)("#1A1A1B", .6),
						sidebarWidgetTextColor: "#D7DADC",
						sidebarWidgetTextColorShaded80: Object(n.l)(.8, "#D7DADC"),
						sidebarWidgetTitleColor: "#818384",
						lineColor: "#343536"
					}
				},
				g = Object.assign({}, _, {
					actionIconAlpha50: Object(n.j)(_.actionIcon, .5),
					actionIconShaded80: Object(n.l)(.8, _.actionIcon),
					bodyAlpha50: Object(n.j)(_.body, .5),
					bodyAlpha80: Object(n.j)(_.body, .8),
					bodyShaded80: Object(n.l)(.8, _.body),
					bodyTinted50: Object(n.m)(.5, _.body),
					bodyTinted80: Object(n.m)(.8, _.body),
					bodyTextAlpha03: Object(n.j)(_.bodyText, .03),
					bodyTextAlpha20: Object(n.j)(_.bodyText, .2),
					bodyTextShaded20: Object(n.l)(.2, _.bodyText),
					bodyTextTinted20: Object(n.m)(.2, _.bodyText),
					buttonAlpha05: Object(n.j)(_.button, .05),
					buttonAlpha10: Object(n.j)(_.button, .1),
					buttonAlpha20: Object(n.j)(_.button, .2),
					buttonAlpha40: Object(n.j)(_.button, .4),
					buttonAlpha50: Object(n.j)(_.button, .5),
					buttonAlpha80: Object(n.j)(_.button, .8),
					buttonShaded80: Object(n.l)(.8, _.button),
					buttonTinted20: Object(n.m)(.2, _.button),
					buttonTinted50: Object(n.m)(.5, _.button),
					buttonTinted80: Object(n.m)(.8, _.button),
					lightTextAlpha75: Object(n.j)("#FFFFFF", .75),
					navIconFaded10: Object(n.j)(_.navIcon, .1),
					linkTextAlpha80: Object(n.j)(_.linkText, .5),
					linkTextShaded80: Object(n.l)(.8, _.linkText),
					linkTextTinted80: Object(n.m)(.8, _.linkText),
					linkTextWithBody: Object(n.d)(.75, _.linkText, _.body),
					postTransparent20: Object(n.o)(.2, _.post),
					postError: Object(n.d)(.1, "#FF0000", _.post),
					postTinted20: Object(n.m)(.2, _.post)
				}),
				w = {
					lineShadedNinety: Object(n.l)(.9, g.line),
					primaryButtonShadedEighty: Object(n.l)(.8, g.button),
					primaryButtonTintedEighty: Object(n.m)(.8, g.button),
					primaryButtonTintedSixty: Object(n.m)(.6, g.button),
					primaryButtonTintedFifty: Object(n.m)(.5, g.button)
				},
				y = {
					active: "#0079D3",
					banner: {
						backgroundColor: "#24A0ED",
						backgroundImage: void 0,
						backgroundImagePosition: "cover",
						communityNameFormat: "slashtag",
						iconColor: "#24A0ED",
						iconImage: void 0,
						iconDimensions: o,
						lineHeight: "38",
						height: 64,
						positionedImage: void 0,
						positionedImageHeight: 48,
						positionedImageAlignment: "cover",
						secondaryBannerPositionedImage: void 0,
						showCommunityIcon: !0
					},
					flair: "#343536",
					navBar: {
						activeLink: d.highlight,
						activeSubmenuCaret: "#D7DADC",
						activeSubmenuLink: "#D7DADC",
						backgroundColor: "#030303",
						backgroundImage: void 0,
						hoverLink: "#D7DADC",
						inactiveLink: "#D7DADC",
						inactiveSubmenuCaret: "#D7DADC",
						inactiveSubmenuLink: "#D7DADC",
						submenuBackgroundColor: "#1A1A1B",
						useOverlay: !1
					}
				},
				v = Object.assign({}, y, {
					activeAlpha10: Object(n.j)(y.active, .1),
					activeAlpha50: Object(n.j)(y.active, .1),
					activeLight60: Object(n.k)(.6, y.active),
					activeTinted05: Object(n.m)(.05, y.active)
				}),
				f = (e, t, i) => i ? b(e) : T(e, t),
				b = e => Object.assign({}, F, {
					activeAlpha10: e.active ? Object(n.j)(e.active, .1) : v.activeAlpha10,
					activeAlpha50: e.active ? Object(n.j)(e.active, .5) : v.activeAlpha50,
					activeLight60: e.active ? Object(n.k)(.6, e.active) : v.activeLight60,
					activeTinted05: e.active ? Object(n.m)(.05, e.active) : v.activeTinted05,
					banner: e.banner || v.banner,
					navBar: e.navBar || v.navBar
				}),
				T = (e, t) => {
					let i;
					if (e.post) {
						const s = a(e.post, !1, .89);
						(i = Object.assign({}, c, t, e, {
							bodyText: s,
							bodyTextAlpha03: Object(n.j)(s, .03),
							bodyTextAlpha20: Object(n.j)(s, .2),
							bodyTextShaded20: Object(n.l)(.2, s),
							bodyTextTinted20: Object(n.m)(.2, s),
							activeAlpha10: e.active ? Object(n.j)(e.active, .1) : p.activeAlpha10,
							activeAlpha50: e.active ? Object(n.j)(e.active, .5) : p.activeAlpha50,
							activeLight60: e.active ? Object(n.k)(.6, e.active) : p.activeLight60,
							activeTinted05: e.active ? Object(n.m)(.05, e.active) : p.activeTinted05,
							buttonAlpha05: e.button ? Object(n.j)(e.button, .05) : p.buttonAlpha05,
							buttonAlpha10: e.button ? Object(n.j)(e.button, .1) : p.buttonAlpha10,
							buttonAlpha20: e.button ? Object(n.j)(e.button, .2) : p.buttonAlpha20,
							buttonAlpha40: e.button ? Object(n.j)(e.button, .4) : p.buttonAlpha40,
							buttonAlpha50: e.button ? Object(n.j)(e.button, .5) : p.buttonAlpha50,
							buttonAlpha80: e.button ? Object(n.j)(e.button, .8) : p.buttonAlpha80,
							buttonShaded80: e.button ? Object(n.l)(.8, e.button) : p.buttonShaded80,
							buttonTinted20: e.button ? Object(n.m)(.2, e.button) : h.button,
							buttonTinted50: e.button ? Object(n.m)(.5, e.button) : p.buttonTinted50,
							buttonTinted80: e.button ? Object(n.m)(.8, e.button) : p.buttonTinted80,
							metaText: a(e.post, !1, .51),
							placeholder: a(e.post, !1, .16),
							postError: Object(n.d)(.1, "#FF0000", e.post),
							postIcon: a(e.post, !1, .46),
							postLine: a(e.post, !1, .2),
							postTransparent20: Object(n.o)(.2, e.post),
							postTinted20: Object(n.m)(.2, e.post),
							report: Object(n.d)(.1, "#FFB000", e.post)
						})).voteText.base = a(e.post, !1, .46), e.active ? i.highlight = Object(n.d)(.1, e.active, e.post) : i.highlight = a(e.post, !1, .1)
					} else(i = Object.assign({}, e, c, {
						active: p.active,
						postTransparent20: Object(n.o)(.2, p.post),
						postError: Object(n.d)(.1, "#FF0000", p.post),
						activeAlpha10: p.activeAlpha10,
						activeAlpha50: p.activeAlpha50,
						activeLight60: p.activeLight60,
						activeTinted05: p.activeTinted05
					})).voteText.base = p.voteText.base;
					return i
				},
				S = Object.assign({}, p, d, c),
				F = Object.assign({}, v, w, g)
		},
		"./src/reddit/models/Search/index.ts": function(e, t, i) {
			"use strict";
			var n, s;
			i.d(t, "c", (function() {
					return n
				})), i.d(t, "b", (function() {
					return s
				})), i.d(t, "a", (function() {
					return r
				})), i.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.trending = "trending", e.typeahead = "typeahead", e.recent = "recent"
				}(n || (n = {})),
				function(e) {
					e.subredditOrProfile = "subredditOrProfile", e.text = "text"
				}(s || (s = {}));
			const r = {
					searchQuery: "",
					section: n.recent,
					type: s.text
				},
				o = e => ({
					displayInfo: {
						iconUrl: e.icon.url,
						isNSFW: e.isNSFW,
						subredditOrProfileName: e.name,
						subscribers: e.subscribers
					},
					id: e.id,
					isProfile: e.displayText.startsWith("u/"),
					isSubreddit: e.displayText.startsWith("r/"),
					isTypeaheadSuggestion: !0,
					searchQuery: e.displayText,
					section: n.typeahead,
					type: s.subredditOrProfile
				})
		},
		"./src/reddit/models/StructuredStyles/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "g", (function() {
				return r
			})), i.d(t, "a", (function() {
				return l
			})), i.d(t, "l", (function() {
				return u
			})), i.d(t, "j", (function() {
				return y
			})), i.d(t, "i", (function() {
				return v
			})), i.d(t, "h", (function() {
				return b
			})), i.d(t, "c", (function() {
				return T
			})), i.d(t, "k", (function() {
				return S
			})), i.d(t, "b", (function() {
				return F
			})), i.d(t, "d", (function() {
				return E
			})), i.d(t, "e", (function() {
				return I
			})), i.d(t, "f", (function() {
				return B
			}));
			var n = i("./node_modules/polished/dist/polished.es.js"),
				s = i("./src/reddit/models/Image/index.tsx");
			const r = "reddit-user_id",
				o = {
					primaryColor: "#0079D3",
					highlightColor: "#0079D3",
					postTitleColor: "#222222",
					backgroundColor: "#DAE0E6",
					postBackgroundColor: "#FFFFFF",
					postDownvoteCountColor: "#7193FF",
					postUpvoteCountColor: "#FF4500"
				},
				d = {
					bannerBackgroundColor: void 0,
					bannerOverlayColor: void 0,
					menuBackgroundColor: void 0,
					menuLinkColorActive: void 0,
					menuLinkColorInactive: void 0,
					menuLinkColorHover: void 0,
					mobileKeyColor: void 0,
					sidebarWidgetBackgroundColor: void 0,
					sidebarWidgetHeaderColor: void 0,
					submenuBackgroundColor: void 0
				};
			var l;
			! function(e) {
				e.ButtonWidgetButtonColor = "buttonWidgetButtonColor", e.ButtonWidgetTextColor = "buttonWidgetTextColor", e.ButtonWidgetFillColor = "buttonWidgetFillColor", e.ButtonWidgetHoverColor = "buttonWidgetHoverButtonColor", e.ButtonWidgetHoverTextColor = "buttonWidgetHoverTextColor", e.ButtonWidgetHoverFillColor = "buttonWidgetHoverFillColor"
			}(l || (l = {}));
			const a = {
				backgroundImage: void 0,
				bannerBackgroundImage: void 0,
				bannerPositionedImage: void 0,
				communityIcon: void 0,
				menuBackgroundImage: void 0,
				mobileBannerImage: void 0,
				postBackgroundImage: void 0,
				postDownvoteIconActive: void 0,
				postDownvoteIconInactive: void 0,
				postPlaceholderImage: void 0,
				postUpvoteIconActive: void 0,
				postUpvoteIconInactive: void 0,
				secondaryBannerPositionedImage: void 0
			};

			function u(e) {
				return e in a
			}
			const c = {
				menuBackgroundOpacity: 70
			};
			const m = {
				backgroundImagePosition: "cover",
				bannerBackgroundImagePosition: "cover",
				bannerPositionedImagePosition: "left",
				postBackgroundImagePosition: "cover",
				postPlaceholderImagePosition: "cover"
			};
			const h = {
				postVoteIcons: "default",
				submenuBackgroundStyle: "default"
			};
			const p = {
				bannerHeight: "small"
			};
			const _ = {
				bannerShowCommunityIcon: "show"
			};
			const g = {
				bannerCommunityNameFormat: "slashtag"
			};
			const w = {
				menuPosition: "default"
			};
			const y = e => {
					const t = Object.assign({}, T);
					for (const i in t) t[i] = i in e ? e[i] : null;
					return t
				},
				v = e => e.primaryColor || e.mobileKeyColor || o.primaryColor,
				f = {
					highlightColor: e => e.highlightColor ? e.highlightColor : e.mobileKeyColor ? Object(n.a)(.2, e.mobileKeyColor) : o.highlightColor,
					primaryColor: v,
					sidebarWidgetHeaderColor: e => e.sidebarWidgetHeaderColor || e.primaryColor || e.mobileKeyColor || o.primaryColor,
					sidebarWidgetBackgroundColor: e => e.sidebarWidgetBackgroundColor || o.postBackgroundColor
				},
				b = (e, t) => {
					const i = {};
					for (const n in T) {
						if (t && n in t) {
							if (null != t[n]) {
								i[n] = t[n];
								continue
							}
						} else if (n in f) {
							const t = f[n](e);
							if (null != t) {
								i[n] = t;
								continue
							}
						}
						n in e && null != e[n] && e[n] !== s.c ? i[n] = e[n] : i[n] = T[n]
					}
					return i
				},
				T = Object.assign({}, d, o, a, c, m, h, p, _, g, w),
				S = e => Object.assign({}, e, {
					bannerBackgroundColor: e.bannerBackgroundColor || Object(n.k)(.6, e.primaryColor),
					menuLinkColorActive: e.menuLinkColorActive || e.highlightColor,
					menuLinkColorInactive: e.menuLinkColorInactive || e.primaryColor,
					menuLinkColorHover: e.menuLinkColorHover || e.highlightColor,
					menuBackgroundColor: e.menuBackgroundColor || Object(n.k)(.93, e.primaryColor),
					submenuBackgroundColor: e.submenuBackgroundColor || Object(n.k)(.93, e.primaryColor),
					bannerOverlayColor: e.bannerOverlayColor || e.primaryColor
				}),
				F = ["#EA0027", "#FF4500", "#FFB000", "#FFD635", "#94E044", "#46D160", "#0DD3BB", "#00A6A5", "#B8001F", "#CC3600", "#CC8B00", "#CCAC2B", "#73AD34", "#349E48", "#0AA18F", "#007373", "#0079D3", "#014980", "#7193FF", "#FF66AC", "#9E8D49", "#DDBD37", "#EDEFF1", "#373C3F", "#005BA1", "#0266B3", "#5A74CC", "#CC5289", "#6B6031", "#AB912B", "#BBBDBF", "#646D73"],
				E = "#EDEFF1",
				I = "postBackgroundImage",
				B = "postPlaceholderImage"
		},
		"./src/reddit/models/Theme/NewColorSystem/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return r
			})), i.d(t, "b", (function() {
				return o
			})), i.d(t, "c", (function() {
				return d
			})), i.d(t, "a", (function() {
				return l
			}));
			var n = i("./node_modules/polished/dist/polished.es.js"),
				s = i("./src/reddit/models/NewStructuredStyles/index.ts");
			const r = {
				borderRadius: "32",
				customSize: "52",
				padding: "10",
				size: "36"
			};

			function o(e) {
				return Object(n.o)(.93, e)
			}

			function d(e, t, i) {
				return Object(s.c)(e, t, i)
			}

			function l(e) {
				return e.redditStyle || e["data-redditstyle"] ? e.theme.newRedditTheme : e.theme.newCommunityTheme
			}
		},
		"./src/reddit/models/Theme/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/polished/dist/polished.es.js"),
				s = i("./src/reddit/constants/theme.ts"),
				r = i("./src/reddit/models/NewStructuredStyles/index.ts"),
				o = i("./src/reddit/models/StructuredStyles/index.ts");
			var d = i("./src/reddit/models/Theme/NewColorSystem/index.ts");
			i.d(t, "a", (function() {
				return l
			})), i.d(t, "e", (function() {
				return u
			})), i.d(t, "g", (function() {
				return p
			})), i.d(t, "f", (function() {
				return S
			})), i.d(t, "c", (function() {
				return B
			})), i.d(t, "h", (function() {
				return x
			})), i.d(t, "j", (function() {
				return C
			})), i.d(t, "i", (function() {
				return k
			})), i.d(t, "b", (function() {
				return O
			})), i.d(t, "d", (function() {
				return N
			}));
			const l = {
					small: 64,
					medium: 128,
					large: 192
				},
				a = {
					show: !0,
					hide: !1
				};

			function u(e, t, i) {
				if ("pretty" === i) return [e];
				if ("slashtag" === i) {
					if (t) {
						const e = t.indexOf("/");
						return [t.slice(0, e + 1), t.slice(e + 1)]
					}
					return ["r/", e]
				}
				return null
			}
			const c = e => {
					switch (e) {
						case "cover":
							return "no-repeat center / cover";
						case "tiled":
							return "repeat center top";
						case "centered":
							return "no-repeat center top";
						default:
							return ""
					}
				},
				m = (e, t) => {
					const i = t / 100,
						s = Object(n.g)(e);
					return s.alpha = i, Object(n.n)(s)
				},
				h = (e, t) => Object(n.k)(e, t),
				p = (e, t, i) => t ? [e, "url(".concat(t, ")"), c(i)].filter(Boolean).join(" ") : e,
				_ = (o.c, {}),
				g = {
					borderRadius: "24",
					customSize: "32",
					padding: "6",
					size: "24"
				},
				w = e => "overlay" === e.menuPosition ? e.bannerOverlayColor ? m(e.bannerOverlayColor, e.menuBackgroundOpacity) : m(e.primaryColor, e.menuBackgroundOpacity) : "default" === e.menuPosition ? e.menuBackgroundColor || h(.93, e.primaryColor) : void 0,
				y = e => "custom" === e.submenuBackgroundStyle ? e.submenuBackgroundColor || h(.93, e.primaryColor) : e.menuBackgroundColor || h(.93, e.primaryColor),
				v = e => {
					let t = l[e.bannerHeight];
					return "overlay" === e.menuPosition && (t += 36), t
				},
				f = e => parseInt(l[e]) - 16,
				b = {
					shouldShowNSFWContent: !1,
					emojiWidth: void 0,
					emojiHeight: void 0
				},
				T = (e, t) => Object(n.l)(e, t),
				S = e => e && Object(n.b)(e) < .5 ? r.a.body : r.a.bodyText,
				F = (e, t) => Object(n.m)(e, t),
				E = (e, t) => Object(n.o)(e, t),
				I = e => {
					return Object(n.b)(e) > .9 ? Object(n.a)(.1, e) : e
				},
				B = C(o.c, b);

			function R(e) {
				return e.bannerBackgroundColor || h(.6, e.primaryColor) || r.a.banner.backgroundColor
			}

			function x(e, t, i) {
				return e || t && h(.6, t) || i && h(.6, i) || r.a.banner.backgroundColor
			}

			function C(e, t) {
				const i = e.highlightColor ? I(e.highlightColor) : r.a.linkText,
					s = S(e.sidebarWidgetBackgroundColor || r.a.widgetColors.sidebarWidgetBackgroundColor),
					o = e.sidebarWidgetBackgroundColor || r.a.widgetColors.sidebarWidgetBackgroundColor,
					l = i,
					u = Object.assign({}, r.a.voteText);
				if (e.postUpvoteCountColor) {
					const t = e.postUpvoteCountColor;
					u.upvote = t, u.upvoteShaded80 = Object(n.l)(.8, t), u.upvoteTinted80 = Object(n.m)(.8, t)
				}
				if (e.postDownvoteCountColor) {
					const t = e.postDownvoteCountColor;
					u.downvote = t, u.downvoteShaded80 = Object(n.l)(.8, t), u.downvoteTinted80 = Object(n.m)(.8, t)
				}
				return {
					subredditContext: t,
					communityTheme: {},
					newCommunityTheme: Object(d.c)({
						active: e.primaryColor,
						banner: {
							backgroundColor: R(e),
							backgroundImage: e.bannerBackgroundImage,
							backgroundImagePosition: e.bannerBackgroundImagePosition,
							communityNameFormat: e.bannerCommunityNameFormat,
							iconColor: e.primaryColor,
							iconImage: e.communityIcon,
							iconDimensions: "small" === e.bannerHeight ? g : d.d,
							lineHeight: "small" === e.bannerHeight ? "38" : "60",
							height: v(e),
							positionedImage: e.bannerPositionedImage,
							positionedImageHeight: f(e.bannerHeight),
							positionedImageAlignment: e.bannerPositionedImagePosition,
							secondaryBannerPositionedImage: e.secondaryBannerPositionedImage,
							showCommunityIcon: a[e.bannerShowCommunityIcon]
						},
						button: i,
						buttonShaded80: T(.8, i),
						canvas: e.backgroundColor || r.a.canvas,
						canvasImgUrl: e.backgroundImage,
						canvasImgPosition: e.backgroundImagePosition,
						lineShadedNinety: T(.9, r.a.line),
						linkText: l,
						linkTextAlpha80: Object(n.j)(l, .5),
						linkTextShaded80: T(.8, l),
						linkTextTinted80: F(.8, l),
						menu: e.menuBackgroundColor || r.a.menu,
						menuActiveText: e.menuLinkColorActive || r.a.menuActiveText,
						menuInactiveText: e.menuLinkColorInactive || r.a.menuInactiveText,
						navBar: {
							activeLink: e.menuLinkColorActive || e.highlightColor,
							activeSubmenuCaret: e.primaryColor,
							activeSubmenuLink: e.primaryColor,
							backgroundColor: w(e) || "",
							backgroundImage: "overlay" !== e.menuPosition ? e.menuBackgroundImage : void 0,
							hoverLink: e.menuLinkColorHover || e.highlightColor,
							inactiveLink: e.menuLinkColorInactive || e.primaryColor,
							inactiveSubmenuCaret: h(.6, e.primaryColor),
							inactiveSubmenuLink: h(.6, e.primaryColor),
							submenuBackgroundColor: y(e),
							useOverlay: "overlay" === e.menuPosition
						},
						post: !e.postBackgroundColor || t.isOverlay || t.isCommentsPage ? r.a.post : e.postBackgroundColor,
						primaryButtonShadedEighty: T(.8, e.primaryColor || r.a.button),
						primaryButtonTintedEighty: F(.8, e.primaryColor || r.a.button),
						primaryButtonTintedSixty: F(.6, e.primaryColor || r.a.button),
						primaryButtonTintedFifty: F(.5, e.primaryColor || r.a.button),
						titleText: e.postTitleColor && !t.isOverlay ? e.postTitleColor : r.a.titleText,
						textTransparentizedEighty: E(.8, r.a.bodyText),
						voteText: u,
						voteIcons: {
							upvoteActive: "custom" === e.postVoteIcons ? e.postUpvoteIconActive : void 0,
							upvoteInactive: "custom" === e.postVoteIcons ? e.postUpvoteIconInactive : void 0,
							downvoteActive: "custom" === e.postVoteIcons ? e.postDownvoteIconActive : void 0,
							downvoteInactive: "custom" === e.postVoteIcons ? e.postDownvoteIconInactive : void 0
						},
						widgetColors: {
							sidebarWidgetBackgroundColor: o,
							sidebarWidgetBorderColor: Object(r.d)(o, !1),
							sidebarWidgetHeaderColor: e.sidebarWidgetHeaderColor || r.a.widgetColors.sidebarWidgetHeaderColor,
							sidebarWidgetHeaderColorAlpha60: e.sidebarWidgetHeaderColor && Object(n.j)(e.sidebarWidgetHeaderColor, .6) || Object(n.j)(r.a.widgetColors.sidebarWidgetHeaderColor, .6),
							sidebarWidgetTextColor: s,
							sidebarWidgetTextColorShaded80: Object(n.l)(.8, s),
							sidebarWidgetTitleColor: S(e.sidebarWidgetHeaderColor || r.a.widgetColors.sidebarWidgetHeaderColor),
							lineColor: Object(d.b)(S(o))
						}
					}, {
						backgroundImage: t.isOverlay ? void 0 : e.postBackgroundImage,
						backgroundImagePosition: e.postBackgroundImagePosition,
						placeholderImage: e.postPlaceholderImage,
						placeholderImagePosition: e.postPlaceholderImagePosition
					}, !1),
					redditTheme: _,
					newRedditTheme: Object(d.c)(r.a, {}, !1)
				}
			}

			function k(e, t) {
				return {
					subredditContext: t,
					communityTheme: {},
					newCommunityTheme: Object(d.c)({
						banner: {
							backgroundColor: Object(n.l)(.9, e.bannerBackgroundColor || h(.6, e.primaryColor) || r.b.banner.backgroundColor),
							backgroundImage: e.bannerBackgroundImage,
							backgroundImagePosition: e.bannerBackgroundImagePosition,
							communityNameFormat: e.bannerCommunityNameFormat,
							iconColor: e.primaryColor,
							iconImage: e.communityIcon,
							iconDimensions: "small" === e.bannerHeight ? g : d.d,
							lineHeight: "small" === e.bannerHeight ? "38" : "60",
							height: v(e),
							positionedImage: e.bannerPositionedImage,
							positionedImageHeight: f(e.bannerHeight),
							positionedImageAlignment: e.bannerPositionedImagePosition,
							secondaryBannerPositionedImage: e.secondaryBannerPositionedImage,
							showCommunityIcon: a[e.bannerShowCommunityIcon]
						},
						voteIcons: {
							upvoteActive: "custom" === e.postVoteIcons ? e.postUpvoteIconActive : void 0,
							upvoteInactive: "custom" === e.postVoteIcons ? e.postUpvoteIconInactive : void 0,
							downvoteActive: "custom" === e.postVoteIcons ? e.postDownvoteIconActive : void 0,
							downvoteInactive: "custom" === e.postVoteIcons ? e.postDownvoteIconInactive : void 0
						},
						widgetColors: r.b.widgetColors
					}, {
						backgroundImage: void 0,
						backgroundImagePosition: void 0,
						placeholderImage: e.postPlaceholderImage,
						placeholderImagePosition: e.postPlaceholderImagePosition
					}, !0),
					redditTheme: _,
					newRedditTheme: Object(d.c)(r.b, {}, !0)
				}
			}
			const O = k(o.c, b),
				N = {
					[s.b.REDDIT]: B,
					[s.b.NIGHT]: O
				}
		},
		"./src/reddit/singleton/tracing/index.ts": function(e, t, i) {
			"use strict";
			var n, s;
			! function(e) {
				e.HttpMethod = "http.method", e.HttpUrl = "http.url", e.HttpStatusCode = "http.status_code"
			}(n || (n = {})),
			function(e) {
				e.TraceId = "X-Trace", e.SpanId = "X-Span", e.ParentSpanId = "X-Parent", e.Sampled = "X-Sampled", e.Flags = "X-Flags", e.Hmac = "X-Trace-Hmac"
			}(s || (s = {}));
			let r = new class {
				constructor() {
					this.isEnabled = !1, this.serviceName = "", this.shouldRecordTrace = !1
				}
				enableTracing() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					this.isEnabled = e
				}
				getTracingHeaders() {
					return {}
				}
				getCurrentTraceId() {
					return null
				}
				setParent(e) {}
				recordLocalSpan(e, t) {
					return t()
				}
				async recordAsyncSpan(e, t) {
					arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return t()
				}
				async recordLocalSpanAsync(e, t) {
					return await this.recordAsyncSpan(e, t)
				}
				async recordRpcSpanAsync(e, t) {
					return await this.recordAsyncSpan(e, t, !0)
				}
				async recordRequest(e, t, i) {
					return await this.recordAsyncSpan(e, i, !0)
				}
			};
			t.a = r
		},
		"./src/reduxMiddleware/apiContext.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/lodash/omit.js"),
				s = i.n(n),
				r = i("./node_modules/set-cookie-parser/lib/set-cookie.js"),
				o = i.n(r),
				d = (i("./src/lib/constants/index.ts"), i("./src/lib/constants/cookie.ts")),
				l = i("./src/lib/constants/headers.ts");
			i("./node_modules/core-js/modules/es6.regexp.split.js");
			const a = e => e.version < 1 ? e.loid : "".concat(e.loid, ".").concat(e.version, ".").concat(e.loidCreated, ".").concat(e.blob),
				u = (e, t) => {
					if (e.includes(".")) {
						const [t, i, n, s] = e.split(".");
						return {
							blob: s,
							loid: t,
							loidCreated: n,
							version: parseInt(i, 10)
						}
					}
					return {
						blob: "",
						loid: e,
						loidCreated: t || (new Date).toISOString(),
						version: 0
					}
				};
			var c = i("./src/lib/permanentCookieOptions.ts"),
				m = i("./src/lib/sample/index.ts"),
				h = i("./src/lib/sentry/index.ts"),
				p = i("./src/config.ts");
			const _ = () => {},
				g = () => {},
				w = (e, t, i, n) => {
					e.set(t, i, n)
				};

			function y(e, t, i) {
				return (n, s) => {
					const r = {
							domain: p.a.cookieDomain
						},
						_ = t.getState(),
						g = a(_.user.loid),
						y = _.user.sessionTracker,
						v = _.user.reddaid,
						f = l.a in n.headers || l.c in n.headers || l.b in n.headers;
					let b = e.get(d.b);
					const T = c.a;
					if (f) {
						if (s.allowSetEmptyLoid && l.a in n.headers) {
							const s = u(n.headers[l.a], b),
								r = T();
							w(e, d.a, n.headers[l.a], r), t.dispatch(i.loidReceived(s))
						}
						if (l.c in n.headers) {
							const s = n.headers[l.c],
								o = r;
							w(e, d.f, s, o), t.dispatch(i.sessionTrackerReceived(s))
						}
						if (l.b in n.headers) {
							const s = n.headers[l.b];
							w(e, d.e, s, r), t.dispatch(i.reddaidReceived(s))
						}
					} else if (l.d in n.headers) {
						const a = o()(n.headers[l.d]).map(e => ({
							[e.name]: e.value
						})).reduce((e, t) => Object.assign({}, e, t), {});
						if (d.b in a && (b = a[d.b]), d.a in a)
							if (s.allowSetEmptyLoid && !g) {
								const n = a[d.a],
									s = u(n, b),
									r = T();
								w(e, d.a, n, r), t.dispatch(i.loidReceived(s))
							} else g || Object(m.a)(p.a.logSample.failToSetLOID) && h.c.captureMessage("LOID failing to be set on user without LOID");
						if (d.f in a) {
							const n = a[d.f];
							if (n !== y) {
								const s = r;
								w(e, d.f, n, s), t.dispatch(i.sessionTrackerReceived(n))
							}
						}
						if (d.e in a) {
							const n = a[d.e];
							n !== v && (w(e, d.e, n, r), t.dispatch(i.reddaidReceived(n)))
						}
					}
				}
			}
			t.a = e => {
				let {
					actionDispatchers: t,
					authHeaders: i = {},
					cookies: n,
					onBeforeRequestFactory: r,
					customApiContextGenerator: o,
					receivedActions: d,
					statsAppName: u
				} = e, c = {
					apiUrl: p.a.apiUrl,
					headers: {},
					onBeforeRequest: _,
					onResponse: g,
					statsAppName: u
				};
				return {
					apiContext: o ? o(c, n) : () => c,
					middleware: e => {
						c.onResponse === g && (c = Object.assign({}, c, {
							onResponse: y(n, e, t)
						})), r && (c = Object.assign({}, c, {
							onBeforeRequest: r(e)
						}));
						const o = e.getState(),
							u = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								const i = Object.keys(t);
								return (n, r) => {
									switch (r.type) {
										case e.loidReceived:
											return Object.assign({}, n, {
												headers: Object.assign({}, n.headers, {
													[l.a]: a(r.payload)
												})
											});
										case e.sessionTrackerReceived:
											return Object.assign({}, n, {
												headers: Object.assign({}, n.headers, {
													[l.c]: r.payload
												})
											});
										case e.reddaidReceived:
											return Object.assign({}, n, {
												headers: Object.assign({}, n.headers, {
													[l.b]: r.payload
												})
											});
										case e.userAuthenticated:
										case e.userReauthenticated:
											return Object.assign({}, n, {
												apiUrl: p.a.oauthUrl,
												headers: Object.assign({}, t, n.headers, {
													Authorization: "Bearer ".concat(r.payload.accessToken)
												})
											});
										case e.userLoggedOut:
											return Object.assign({}, n, {
												apiUrl: p.a.apiUrl,
												headers: s()(n.headers, [...i, "Authorization"])
											});
										case e.headersReceived:
											return Object.assign({}, n, {
												headers: Object.assign({}, n.headers, r.payload.headers)
											});
										default:
											return n
									}
								}
							}(d, i);
						return o.user.account && (c = u(c, {
							type: d.userAuthenticated,
							payload: o.user.session
						})), o.user.loid && (c = u(c, {
							type: d.loidReceived,
							payload: o.user.loid
						})), o.user.sessionTracker && (c = u(c, {
							type: d.sessionTrackerReceived,
							payload: o.user.sessionTracker
						})), o.user.reddaid && (c = u(c, {
							type: d.reddaidReceived,
							payload: o.user.reddaid
						})), e => t => (c = u(c, t), e(t))
					}
				}
			}
		},
		"./src/telemetry/eventSchemas/action_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.ActionInfo = function(e) {
					this.page_type = null, this.pane_name = null, this.position = null, this.success = null, this.count = null, this.retried = null, this.reason = null, this.setting_value = null, this.type = null, this.relative_position = null, e && (void 0 !== e.page_type && null !== e.page_type && (this.page_type = e.page_type), void 0 !== e.pane_name && null !== e.pane_name && (this.pane_name = e.pane_name), void 0 !== e.position && null !== e.position && (this.position = e.position), void 0 !== e.success && null !== e.success && (this.success = e.success), void 0 !== e.count && null !== e.count && (this.count = e.count), void 0 !== e.retried && null !== e.retried && (this.retried = e.retried), void 0 !== e.reason && null !== e.reason && (this.reason = e.reason), void 0 !== e.setting_value && null !== e.setting_value && (this.setting_value = e.setting_value), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.relative_position && null !== e.relative_position && (this.relative_position = e.relative_position))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("ActionInfo"), null !== this.page_type && void 0 !== this.page_type && (e.writeFieldBegin("page_type", s.Type.STRING, 1), e.writeString(this.page_type), e.writeFieldEnd()), null !== this.pane_name && void 0 !== this.pane_name && (e.writeFieldBegin("pane_name", s.Type.STRING, 2), e.writeString(this.pane_name), e.writeFieldEnd()), null !== this.position && void 0 !== this.position && (e.writeFieldBegin("position", s.Type.I64, 3), e.writeI64(this.position), e.writeFieldEnd()), null !== this.success && void 0 !== this.success && (e.writeFieldBegin("success", s.Type.BOOL, 4), e.writeBool(this.success), e.writeFieldEnd()), null !== this.count && void 0 !== this.count && (e.writeFieldBegin("count", s.Type.I64, 5), e.writeI64(this.count), e.writeFieldEnd()), null !== this.retried && void 0 !== this.retried && (e.writeFieldBegin("retried", s.Type.BOOL, 6), e.writeBool(this.retried), e.writeFieldEnd()), null !== this.reason && void 0 !== this.reason && (e.writeFieldBegin("reason", s.Type.STRING, 7), e.writeString(this.reason), e.writeFieldEnd()), null !== this.setting_value && void 0 !== this.setting_value && (e.writeFieldBegin("setting_value", s.Type.STRING, 8), e.writeString(this.setting_value), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 9), e.writeString(this.type), e.writeFieldEnd()), null !== this.relative_position && void 0 !== this.relative_position && (e.writeFieldBegin("relative_position", s.Type.I64, 10), e.writeI64(this.relative_position), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Expand = function(e) {
				this.provider = null, e && void 0 !== e.provider && null !== e.provider && (this.provider = e.provider)
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("Expand"), null !== this.provider && void 0 !== this.provider && (e.writeFieldBegin("provider", s.Type.STRING, 1), e.writeString(this.provider), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.Widget = function(e) {
				this.target_subreddit_name = null, this.target_subreddit_id = null, this.type = null, e && (void 0 !== e.target_subreddit_name && null !== e.target_subreddit_name && (this.target_subreddit_name = e.target_subreddit_name), void 0 !== e.target_subreddit_id && null !== e.target_subreddit_id && (this.target_subreddit_id = e.target_subreddit_id), void 0 !== e.type && null !== e.type && (this.type = e.type))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("Widget"), null !== this.target_subreddit_name && void 0 !== this.target_subreddit_name && (e.writeFieldBegin("target_subreddit_name", s.Type.STRING, 1), e.writeString(this.target_subreddit_name), e.writeFieldEnd()), null !== this.target_subreddit_id && void 0 !== this.target_subreddit_id && (e.writeFieldBegin("target_subreddit_id", s.Type.STRING, 2), e.writeString(this.target_subreddit_id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 3), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var l = e.exports.Share = function(e) {
				this.target = null, this.id = null, e && (void 0 !== e.target && null !== e.target && (this.target = e.target), void 0 !== e.id && null !== e.id && (this.id = e.id))
			};
			l.prototype = {}, l.prototype.write = function(e) {
				e.writeStructBegin("Share"), null !== this.target && void 0 !== this.target && (e.writeFieldBegin("target", s.Type.STRING, 1), e.writeString(this.target), e.writeFieldEnd()), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 2), e.writeString(this.id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/ad_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/adtypedefs_types.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Ad = function(e) {
					this.id = null, this.name = null, this.click_url = null, this.third_party_trackers = null, this.configured_status = null, this.effective_status = null, this.admin_approval = null, this.click_trackers = null, this.classifications = null, this.rejection_reason = null, this.preview_expiry_timestamp = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.click_url && null !== e.click_url && (this.click_url = e.click_url), void 0 !== e.third_party_trackers && null !== e.third_party_trackers && (this.third_party_trackers = s.copyList(e.third_party_trackers, [null])), void 0 !== e.configured_status && null !== e.configured_status && (this.configured_status = e.configured_status), void 0 !== e.effective_status && null !== e.effective_status && (this.effective_status = e.effective_status), void 0 !== e.admin_approval && null !== e.admin_approval && (this.admin_approval = e.admin_approval), void 0 !== e.click_trackers && null !== e.click_trackers && (this.click_trackers = s.copyList(e.click_trackers, [null])), void 0 !== e.classifications && null !== e.classifications && (this.classifications = s.copyList(e.classifications, [null])), void 0 !== e.rejection_reason && null !== e.rejection_reason && (this.rejection_reason = e.rejection_reason), void 0 !== e.preview_expiry_timestamp && null !== e.preview_expiry_timestamp && (this.preview_expiry_timestamp = e.preview_expiry_timestamp))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("Ad"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.click_url && void 0 !== this.click_url && (e.writeFieldBegin("click_url", s.Type.STRING, 3), e.writeString(this.click_url), e.writeFieldEnd()), null !== this.third_party_trackers && void 0 !== this.third_party_trackers) {
					for (var t in e.writeFieldBegin("third_party_trackers", s.Type.LIST, 4), e.writeListBegin(s.Type.STRING, this.third_party_trackers.length), this.third_party_trackers) this.third_party_trackers.hasOwnProperty(t) && (t = this.third_party_trackers[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.configured_status && void 0 !== this.configured_status && (e.writeFieldBegin("configured_status", s.Type.STRING, 5), e.writeString(this.configured_status), e.writeFieldEnd()), null !== this.effective_status && void 0 !== this.effective_status && (e.writeFieldBegin("effective_status", s.Type.STRING, 6), e.writeString(this.effective_status), e.writeFieldEnd()), null !== this.admin_approval && void 0 !== this.admin_approval && (e.writeFieldBegin("admin_approval", s.Type.STRING, 7), e.writeString(this.admin_approval), e.writeFieldEnd()), null !== this.click_trackers && void 0 !== this.click_trackers) {
					for (var i in e.writeFieldBegin("click_trackers", s.Type.LIST, 8), e.writeListBegin(s.Type.STRING, this.click_trackers.length), this.click_trackers) this.click_trackers.hasOwnProperty(i) && (i = this.click_trackers[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.classifications && void 0 !== this.classifications) {
					for (var n in e.writeFieldBegin("classifications", s.Type.LIST, 9), e.writeListBegin(s.Type.STRING, this.classifications.length), this.classifications) this.classifications.hasOwnProperty(n) && (n = this.classifications[n], e.writeString(n));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.rejection_reason && void 0 !== this.rejection_reason && (e.writeFieldBegin("rejection_reason", s.Type.STRING, 10), e.writeString(this.rejection_reason), e.writeFieldEnd()), null !== this.preview_expiry_timestamp && void 0 !== this.preview_expiry_timestamp && (e.writeFieldBegin("preview_expiry_timestamp", s.Type.I64, 11), e.writeI64(this.preview_expiry_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/adblock_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Adblock = function(e) {
					this.enabled = null, this.acceptable_ads = null, e && (void 0 !== e.enabled && null !== e.enabled && (this.enabled = e.enabled), void 0 !== e.acceptable_ads && null !== e.acceptable_ads && (this.acceptable_ads = e.acceptable_ads))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Adblock"), null !== this.enabled && void 0 !== this.enabled && (e.writeFieldBegin("enabled", s.Type.BOOL, 1), e.writeBool(this.enabled), e.writeFieldEnd()), null !== this.acceptable_ads && void 0 !== this.acceptable_ads && (e.writeFieldBegin("acceptable_ads", s.Type.BOOL, 2), e.writeBool(this.acceptable_ads), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/adcampaign_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/adtypedefs_types.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.AdCampaign = function(e) {
					this.id = null, this.name = null, this.objective = null, this.configured_status = null, this.effective_status = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.objective && null !== e.objective && (this.objective = e.objective), void 0 !== e.configured_status && null !== e.configured_status && (this.configured_status = e.configured_status), void 0 !== e.effective_status && null !== e.effective_status && (this.effective_status = e.effective_status))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("AdCampaign"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.objective && void 0 !== this.objective && (e.writeFieldBegin("objective", s.Type.STRING, 3), e.writeString(this.objective), e.writeFieldEnd()), null !== this.configured_status && void 0 !== this.configured_status && (e.writeFieldBegin("configured_status", s.Type.STRING, 4), e.writeString(this.configured_status), e.writeFieldEnd()), null !== this.effective_status && void 0 !== this.effective_status && (e.writeFieldBegin("effective_status", s.Type.STRING, 5), e.writeString(this.effective_status), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/adevent_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.AdRequest = function(e) {
					this.number_min_distance = null, this.first_chunk = null, this.post_links = null, this.placement = null, this.platform = null, this.slots = null, e && (void 0 !== e.number_min_distance && null !== e.number_min_distance && (this.number_min_distance = e.number_min_distance), void 0 !== e.first_chunk && null !== e.first_chunk && (this.first_chunk = e.first_chunk), void 0 !== e.post_links && null !== e.post_links && (this.post_links = s.copyList(e.post_links, [null])), void 0 !== e.placement && null !== e.placement && (this.placement = e.placement), void 0 !== e.platform && null !== e.platform && (this.platform = e.platform), void 0 !== e.slots && null !== e.slots && (this.slots = s.copyList(e.slots, [null])))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("AdRequest"), null !== this.number_min_distance && void 0 !== this.number_min_distance && (e.writeFieldBegin("number_min_distance", s.Type.I64, 1), e.writeI64(this.number_min_distance), e.writeFieldEnd()), null !== this.first_chunk && void 0 !== this.first_chunk && (e.writeFieldBegin("first_chunk", s.Type.BOOL, 2), e.writeBool(this.first_chunk), e.writeFieldEnd()), null !== this.post_links && void 0 !== this.post_links) {
					for (var t in e.writeFieldBegin("post_links", s.Type.LIST, 3), e.writeListBegin(s.Type.STRING, this.post_links.length), this.post_links) this.post_links.hasOwnProperty(t) && (t = this.post_links[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.placement && void 0 !== this.placement && (e.writeFieldBegin("placement", s.Type.STRING, 4), e.writeString(this.placement), e.writeFieldEnd()), null !== this.platform && void 0 !== this.platform && (e.writeFieldBegin("platform", s.Type.STRING, 5), e.writeString(this.platform), e.writeFieldEnd()), null !== this.slots && void 0 !== this.slots) {
					for (var i in e.writeFieldBegin("slots", s.Type.LIST, 6), e.writeListBegin(s.Type.STRING, this.slots.length), this.slots) this.slots.hasOwnProperty(i) && (i = this.slots[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.AdDecision = function(e) {
				this.hide_gold = null, this.hide_mod = null, this.hide_news = null, this.hide_whitelist = null, this.hide_sort = null, this.hide_experiment = null, this.hide_other = null, this.hide_source_post = null, e && (void 0 !== e.hide_gold && null !== e.hide_gold && (this.hide_gold = e.hide_gold), void 0 !== e.hide_mod && null !== e.hide_mod && (this.hide_mod = e.hide_mod), void 0 !== e.hide_news && null !== e.hide_news && (this.hide_news = e.hide_news), void 0 !== e.hide_whitelist && null !== e.hide_whitelist && (this.hide_whitelist = e.hide_whitelist), void 0 !== e.hide_sort && null !== e.hide_sort && (this.hide_sort = e.hide_sort), void 0 !== e.hide_experiment && null !== e.hide_experiment && (this.hide_experiment = e.hide_experiment), void 0 !== e.hide_other && null !== e.hide_other && (this.hide_other = e.hide_other), void 0 !== e.hide_source_post && null !== e.hide_source_post && (this.hide_source_post = e.hide_source_post))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("AdDecision"), null !== this.hide_gold && void 0 !== this.hide_gold && (e.writeFieldBegin("hide_gold", s.Type.BOOL, 1), e.writeBool(this.hide_gold), e.writeFieldEnd()), null !== this.hide_mod && void 0 !== this.hide_mod && (e.writeFieldBegin("hide_mod", s.Type.BOOL, 2), e.writeBool(this.hide_mod), e.writeFieldEnd()), null !== this.hide_news && void 0 !== this.hide_news && (e.writeFieldBegin("hide_news", s.Type.BOOL, 3), e.writeBool(this.hide_news), e.writeFieldEnd()), null !== this.hide_whitelist && void 0 !== this.hide_whitelist && (e.writeFieldBegin("hide_whitelist", s.Type.BOOL, 4), e.writeBool(this.hide_whitelist), e.writeFieldEnd()), null !== this.hide_sort && void 0 !== this.hide_sort && (e.writeFieldBegin("hide_sort", s.Type.BOOL, 5), e.writeBool(this.hide_sort), e.writeFieldEnd()), null !== this.hide_experiment && void 0 !== this.hide_experiment && (e.writeFieldBegin("hide_experiment", s.Type.BOOL, 6), e.writeBool(this.hide_experiment), e.writeFieldEnd()), null !== this.hide_other && void 0 !== this.hide_other && (e.writeFieldBegin("hide_other", s.Type.BOOL, 7), e.writeBool(this.hide_other), e.writeFieldEnd()), null !== this.hide_source_post && void 0 !== this.hide_source_post && (e.writeFieldBegin("hide_source_post", s.Type.BOOL, 8), e.writeBool(this.hide_source_post), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.AdPush = function(e) {
				this.push_whitelist = null, this.push_nsfw = null, this.push_keyword = null, this.push_other = null, this.direction = null, this.first_ad = null, e && (void 0 !== e.push_whitelist && null !== e.push_whitelist && (this.push_whitelist = e.push_whitelist), void 0 !== e.push_nsfw && null !== e.push_nsfw && (this.push_nsfw = e.push_nsfw), void 0 !== e.push_keyword && null !== e.push_keyword && (this.push_keyword = e.push_keyword), void 0 !== e.push_other && null !== e.push_other && (this.push_other = e.push_other), void 0 !== e.direction && null !== e.direction && (this.direction = e.direction), void 0 !== e.first_ad && null !== e.first_ad && (this.first_ad = e.first_ad))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("AdPush"), null !== this.push_whitelist && void 0 !== this.push_whitelist && (e.writeFieldBegin("push_whitelist", s.Type.BOOL, 1), e.writeBool(this.push_whitelist), e.writeFieldEnd()), null !== this.push_nsfw && void 0 !== this.push_nsfw && (e.writeFieldBegin("push_nsfw", s.Type.BOOL, 2), e.writeBool(this.push_nsfw), e.writeFieldEnd()), null !== this.push_keyword && void 0 !== this.push_keyword && (e.writeFieldBegin("push_keyword", s.Type.STRING, 3), e.writeString(this.push_keyword), e.writeFieldEnd()), null !== this.push_other && void 0 !== this.push_other && (e.writeFieldBegin("push_other", s.Type.BOOL, 4), e.writeBool(this.push_other), e.writeFieldEnd()), null !== this.direction && void 0 !== this.direction && (e.writeFieldBegin("direction", s.Type.STRING, 5), e.writeString(this.direction), e.writeFieldEnd()), null !== this.first_ad && void 0 !== this.first_ad && (e.writeFieldBegin("first_ad", s.Type.BOOL, 6), e.writeBool(this.first_ad), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/adgroup_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/adtypedefs_types.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.AdGroup = function(e) {
					this.id = null, this.start_timestamp = null, this.end_timestamp = null, this.priority = null, this.bid_type = null, this.bid_value = null, this.goal_type = null, this.goal_value = null, this.schedule_json = null, this.cap_type = null, this.lifetime_cap_value = null, this.daily_cap_value = null, this.frequeny_caps_json = null, this.use_default_frequency_cap = null, this.configured_status = null, this.effective_status = null, this.name = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.start_timestamp && null !== e.start_timestamp && (this.start_timestamp = e.start_timestamp), void 0 !== e.end_timestamp && null !== e.end_timestamp && (this.end_timestamp = e.end_timestamp), void 0 !== e.priority && null !== e.priority && (this.priority = e.priority), void 0 !== e.bid_type && null !== e.bid_type && (this.bid_type = e.bid_type), void 0 !== e.bid_value && null !== e.bid_value && (this.bid_value = e.bid_value), void 0 !== e.goal_type && null !== e.goal_type && (this.goal_type = e.goal_type), void 0 !== e.goal_value && null !== e.goal_value && (this.goal_value = e.goal_value), void 0 !== e.schedule_json && null !== e.schedule_json && (this.schedule_json = s.copyList(e.schedule_json, [null])), void 0 !== e.cap_type && null !== e.cap_type && (this.cap_type = e.cap_type), void 0 !== e.lifetime_cap_value && null !== e.lifetime_cap_value && (this.lifetime_cap_value = e.lifetime_cap_value), void 0 !== e.daily_cap_value && null !== e.daily_cap_value && (this.daily_cap_value = e.daily_cap_value), void 0 !== e.frequeny_caps_json && null !== e.frequeny_caps_json && (this.frequeny_caps_json = s.copyList(e.frequeny_caps_json, [null])), void 0 !== e.use_default_frequency_cap && null !== e.use_default_frequency_cap && (this.use_default_frequency_cap = e.use_default_frequency_cap), void 0 !== e.configured_status && null !== e.configured_status && (this.configured_status = e.configured_status), void 0 !== e.effective_status && null !== e.effective_status && (this.effective_status = e.effective_status), void 0 !== e.name && null !== e.name && (this.name = e.name))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("AdGroup"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.start_timestamp && void 0 !== this.start_timestamp && (e.writeFieldBegin("start_timestamp", s.Type.I64, 2), e.writeI64(this.start_timestamp), e.writeFieldEnd()), null !== this.end_timestamp && void 0 !== this.end_timestamp && (e.writeFieldBegin("end_timestamp", s.Type.I64, 3), e.writeI64(this.end_timestamp), e.writeFieldEnd()), null !== this.priority && void 0 !== this.priority && (e.writeFieldBegin("priority", s.Type.STRING, 4), e.writeString(this.priority), e.writeFieldEnd()), null !== this.bid_type && void 0 !== this.bid_type && (e.writeFieldBegin("bid_type", s.Type.STRING, 5), e.writeString(this.bid_type), e.writeFieldEnd()), null !== this.bid_value && void 0 !== this.bid_value && (e.writeFieldBegin("bid_value", s.Type.I64, 6), e.writeI64(this.bid_value), e.writeFieldEnd()), null !== this.goal_type && void 0 !== this.goal_type && (e.writeFieldBegin("goal_type", s.Type.STRING, 7), e.writeString(this.goal_type), e.writeFieldEnd()), null !== this.goal_value && void 0 !== this.goal_value && (e.writeFieldBegin("goal_value", s.Type.I64, 8), e.writeI64(this.goal_value), e.writeFieldEnd()), null !== this.schedule_json && void 0 !== this.schedule_json) {
					for (var t in e.writeFieldBegin("schedule_json", s.Type.LIST, 9), e.writeListBegin(s.Type.STRING, this.schedule_json.length), this.schedule_json) this.schedule_json.hasOwnProperty(t) && (t = this.schedule_json[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.cap_type && void 0 !== this.cap_type && (e.writeFieldBegin("cap_type", s.Type.STRING, 10), e.writeString(this.cap_type), e.writeFieldEnd()), null !== this.lifetime_cap_value && void 0 !== this.lifetime_cap_value && (e.writeFieldBegin("lifetime_cap_value", s.Type.I64, 11), e.writeI64(this.lifetime_cap_value), e.writeFieldEnd()), null !== this.daily_cap_value && void 0 !== this.daily_cap_value && (e.writeFieldBegin("daily_cap_value", s.Type.I64, 12), e.writeI64(this.daily_cap_value), e.writeFieldEnd()), null !== this.frequeny_caps_json && void 0 !== this.frequeny_caps_json) {
					for (var i in e.writeFieldBegin("frequeny_caps_json", s.Type.LIST, 13), e.writeListBegin(s.Type.STRING, this.frequeny_caps_json.length), this.frequeny_caps_json) this.frequeny_caps_json.hasOwnProperty(i) && (i = this.frequeny_caps_json[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.use_default_frequency_cap && void 0 !== this.use_default_frequency_cap && (e.writeFieldBegin("use_default_frequency_cap", s.Type.BOOL, 14), e.writeBool(this.use_default_frequency_cap), e.writeFieldEnd()), null !== this.configured_status && void 0 !== this.configured_status && (e.writeFieldBegin("configured_status", s.Type.STRING, 15), e.writeString(this.configured_status), e.writeFieldEnd()), null !== this.effective_status && void 0 !== this.effective_status && (e.writeFieldBegin("effective_status", s.Type.STRING, 16), e.writeString(this.effective_status), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 17), e.writeString(this.name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/admin_action_types.js": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.AdminAction = function(e) {
					this.password_dump_id = null, this.number_password_dump_credentials = null, this.takedown_id = null, this.removal_type = null, this.removal_is_restorable = null, this.notes = null, this.process_notes = null, this.timeout_duration = null, this.template_type = null, e && (void 0 !== e.password_dump_id && null !== e.password_dump_id && (this.password_dump_id = e.password_dump_id), void 0 !== e.number_password_dump_credentials && null !== e.number_password_dump_credentials && (this.number_password_dump_credentials = e.number_password_dump_credentials), void 0 !== e.takedown_id && null !== e.takedown_id && (this.takedown_id = e.takedown_id), void 0 !== e.removal_type && null !== e.removal_type && (this.removal_type = e.removal_type), void 0 !== e.removal_is_restorable && null !== e.removal_is_restorable && (this.removal_is_restorable = e.removal_is_restorable), void 0 !== e.notes && null !== e.notes && (this.notes = e.notes), void 0 !== e.process_notes && null !== e.process_notes && (this.process_notes = e.process_notes), void 0 !== e.timeout_duration && null !== e.timeout_duration && (this.timeout_duration = e.timeout_duration), void 0 !== e.template_type && null !== e.template_type && (this.template_type = e.template_type))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("AdminAction"), null !== this.password_dump_id && void 0 !== this.password_dump_id && (e.writeFieldBegin("password_dump_id", s.Type.STRING, 1), e.writeString(this.password_dump_id), e.writeFieldEnd()), null !== this.number_password_dump_credentials && void 0 !== this.number_password_dump_credentials && (e.writeFieldBegin("number_password_dump_credentials", s.Type.I32, 2), e.writeI32(this.number_password_dump_credentials), e.writeFieldEnd()), null !== this.takedown_id && void 0 !== this.takedown_id && (e.writeFieldBegin("takedown_id", s.Type.STRING, 3), e.writeString(this.takedown_id), e.writeFieldEnd()), null !== this.removal_type && void 0 !== this.removal_type && (e.writeFieldBegin("removal_type", s.Type.STRING, 4), e.writeString(this.removal_type), e.writeFieldEnd()), null !== this.removal_is_restorable && void 0 !== this.removal_is_restorable && (e.writeFieldBegin("removal_is_restorable", s.Type.BOOL, 5), e.writeBool(this.removal_is_restorable), e.writeFieldEnd()), null !== this.notes && void 0 !== this.notes && (e.writeFieldBegin("notes", s.Type.STRING, 6), e.writeString(this.notes), e.writeFieldEnd()), null !== this.process_notes && void 0 !== this.process_notes && (e.writeFieldBegin("process_notes", s.Type.STRING, 7), e.writeString(this.process_notes), e.writeFieldEnd()), null !== this.timeout_duration && void 0 !== this.timeout_duration && (e.writeFieldBegin("timeout_duration", s.Type.I32, 8), e.writeI32(this.timeout_duration), e.writeFieldEnd()), null !== this.template_type && void 0 !== this.template_type && (e.writeFieldBegin("template_type", s.Type.STRING, 9), e.writeString(this.template_type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.NCMECReport = function(e) {
				this.id = null, this.classification_type = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.classification_type && null !== e.classification_type && (this.classification_type = e.classification_type))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("NCMECReport"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.I32, 1), e.writeI32(this.id), e.writeFieldEnd()), null !== this.classification_type && void 0 !== this.classification_type && (e.writeFieldBegin("classification_type", s.Type.STRING, 2), e.writeString(this.classification_type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.CSAIMedia = function(e) {
				this.tracking_id = null, this.match = null, this.violation_types = null, this.violation_source = null, this.error_message = null, this.error_code = null, this.destination_queue_name = null, this.origin_queue_name = null, this.media_url = null, this.retry_media_url = null, e && (void 0 !== e.tracking_id && null !== e.tracking_id && (this.tracking_id = e.tracking_id), void 0 !== e.match && null !== e.match && (this.match = e.match), void 0 !== e.violation_types && null !== e.violation_types && (this.violation_types = s.copyList(e.violation_types, [null])), void 0 !== e.violation_source && null !== e.violation_source && (this.violation_source = e.violation_source), void 0 !== e.error_message && null !== e.error_message && (this.error_message = e.error_message), void 0 !== e.error_code && null !== e.error_code && (this.error_code = e.error_code), void 0 !== e.destination_queue_name && null !== e.destination_queue_name && (this.destination_queue_name = e.destination_queue_name), void 0 !== e.origin_queue_name && null !== e.origin_queue_name && (this.origin_queue_name = e.origin_queue_name), void 0 !== e.media_url && null !== e.media_url && (this.media_url = e.media_url), void 0 !== e.retry_media_url && null !== e.retry_media_url && (this.retry_media_url = e.retry_media_url))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				if (e.writeStructBegin("CSAIMedia"), null !== this.tracking_id && void 0 !== this.tracking_id && (e.writeFieldBegin("tracking_id", s.Type.STRING, 1), e.writeString(this.tracking_id), e.writeFieldEnd()), null !== this.match && void 0 !== this.match && (e.writeFieldBegin("match", s.Type.BOOL, 2), e.writeBool(this.match), e.writeFieldEnd()), null !== this.violation_types && void 0 !== this.violation_types) {
					for (var t in e.writeFieldBegin("violation_types", s.Type.LIST, 3), e.writeListBegin(s.Type.STRING, this.violation_types.length), this.violation_types) this.violation_types.hasOwnProperty(t) && (t = this.violation_types[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.violation_source && void 0 !== this.violation_source && (e.writeFieldBegin("violation_source", s.Type.STRING, 4), e.writeString(this.violation_source), e.writeFieldEnd()), null !== this.error_message && void 0 !== this.error_message && (e.writeFieldBegin("error_message", s.Type.STRING, 5), e.writeString(this.error_message), e.writeFieldEnd()), null !== this.error_code && void 0 !== this.error_code && (e.writeFieldBegin("error_code", s.Type.I32, 6), e.writeI32(this.error_code), e.writeFieldEnd()), null !== this.destination_queue_name && void 0 !== this.destination_queue_name && (e.writeFieldBegin("destination_queue_name", s.Type.STRING, 7), e.writeString(this.destination_queue_name), e.writeFieldEnd()), null !== this.origin_queue_name && void 0 !== this.origin_queue_name && (e.writeFieldBegin("origin_queue_name", s.Type.STRING, 8), e.writeString(this.origin_queue_name), e.writeFieldEnd()), null !== this.media_url && void 0 !== this.media_url && (e.writeFieldBegin("media_url", s.Type.STRING, 9), e.writeString(this.media_url), e.writeFieldEnd()), null !== this.retry_media_url && void 0 !== this.retry_media_url && (e.writeFieldBegin("retry_media_url", s.Type.STRING, 10), e.writeString(this.retry_media_url), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/admin_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Admin = function(e) {
					if (this.id = null, e) {
						if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Admin"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/adtargeting_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/adtypedefs_types.js"), e.exports = {}, e.exports.AdTargeting = function(e) {
					this.geolocations = null, this.excluded_geolocations = null, this.excluded_keywords = null, this.interests = null, this.excluded_interests = null, this.communities = null, this.excluded_communities = null, this.devices_json = null, this.placements_json = null, this.advanced = null, this.custom_audience_ids = null, this.excluded_custom_audience_ids = null, this.expand_targeting = null, e && (void 0 !== e.geolocations && null !== e.geolocations && (this.geolocations = s.copyList(e.geolocations, [null])), void 0 !== e.excluded_geolocations && null !== e.excluded_geolocations && (this.excluded_geolocations = s.copyList(e.excluded_geolocations, [null])), void 0 !== e.excluded_keywords && null !== e.excluded_keywords && (this.excluded_keywords = s.copyList(e.excluded_keywords, [null])), void 0 !== e.interests && null !== e.interests && (this.interests = s.copyList(e.interests, [null])), void 0 !== e.excluded_interests && null !== e.excluded_interests && (this.excluded_interests = s.copyList(e.excluded_interests, [null])), void 0 !== e.communities && null !== e.communities && (this.communities = s.copyList(e.communities, [null])), void 0 !== e.excluded_communities && null !== e.excluded_communities && (this.excluded_communities = s.copyList(e.excluded_communities, [null])), void 0 !== e.devices_json && null !== e.devices_json && (this.devices_json = s.copyList(e.devices_json, [null])), void 0 !== e.placements_json && null !== e.placements_json && (this.placements_json = s.copyList(e.placements_json, [null])), void 0 !== e.advanced && null !== e.advanced && (this.advanced = e.advanced), void 0 !== e.custom_audience_ids && null !== e.custom_audience_ids && (this.custom_audience_ids = s.copyList(e.custom_audience_ids, [null])), void 0 !== e.excluded_custom_audience_ids && null !== e.excluded_custom_audience_ids && (this.excluded_custom_audience_ids = s.copyList(e.excluded_custom_audience_ids, [null])), void 0 !== e.expand_targeting && null !== e.expand_targeting && (this.expand_targeting = e.expand_targeting))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("AdTargeting"), null !== this.geolocations && void 0 !== this.geolocations) {
					for (var t in e.writeFieldBegin("geolocations", s.Type.LIST, 1), e.writeListBegin(s.Type.STRING, this.geolocations.length), this.geolocations) this.geolocations.hasOwnProperty(t) && (t = this.geolocations[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.excluded_geolocations && void 0 !== this.excluded_geolocations) {
					for (var i in e.writeFieldBegin("excluded_geolocations", s.Type.LIST, 2), e.writeListBegin(s.Type.STRING, this.excluded_geolocations.length), this.excluded_geolocations) this.excluded_geolocations.hasOwnProperty(i) && (i = this.excluded_geolocations[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.excluded_keywords && void 0 !== this.excluded_keywords) {
					for (var n in e.writeFieldBegin("excluded_keywords", s.Type.LIST, 3), e.writeListBegin(s.Type.STRING, this.excluded_keywords.length), this.excluded_keywords) this.excluded_keywords.hasOwnProperty(n) && (n = this.excluded_keywords[n], e.writeString(n));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.interests && void 0 !== this.interests) {
					for (var r in e.writeFieldBegin("interests", s.Type.LIST, 4), e.writeListBegin(s.Type.STRING, this.interests.length), this.interests) this.interests.hasOwnProperty(r) && (r = this.interests[r], e.writeString(r));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.excluded_interests && void 0 !== this.excluded_interests) {
					for (var o in e.writeFieldBegin("excluded_interests", s.Type.LIST, 5), e.writeListBegin(s.Type.STRING, this.excluded_interests.length), this.excluded_interests) this.excluded_interests.hasOwnProperty(o) && (o = this.excluded_interests[o], e.writeString(o));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.communities && void 0 !== this.communities) {
					for (var d in e.writeFieldBegin("communities", s.Type.LIST, 6), e.writeListBegin(s.Type.STRING, this.communities.length), this.communities) this.communities.hasOwnProperty(d) && (d = this.communities[d], e.writeString(d));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.excluded_communities && void 0 !== this.excluded_communities) {
					for (var l in e.writeFieldBegin("excluded_communities", s.Type.LIST, 7), e.writeListBegin(s.Type.STRING, this.excluded_communities.length), this.excluded_communities) this.excluded_communities.hasOwnProperty(l) && (l = this.excluded_communities[l], e.writeString(l));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.devices_json && void 0 !== this.devices_json) {
					for (var a in e.writeFieldBegin("devices_json", s.Type.LIST, 8), e.writeListBegin(s.Type.STRING, this.devices_json.length), this.devices_json) this.devices_json.hasOwnProperty(a) && (a = this.devices_json[a], e.writeString(a));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.placements_json && void 0 !== this.placements_json) {
					for (var u in e.writeFieldBegin("placements_json", s.Type.LIST, 9), e.writeListBegin(s.Type.STRING, this.placements_json.length), this.placements_json) this.placements_json.hasOwnProperty(u) && (u = this.placements_json[u], e.writeString(u));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.advanced && void 0 !== this.advanced && (e.writeFieldBegin("advanced", s.Type.STRING, 10), e.writeString(this.advanced), e.writeFieldEnd()), null !== this.custom_audience_ids && void 0 !== this.custom_audience_ids) {
					for (var c in e.writeFieldBegin("custom_audience_ids", s.Type.LIST, 11), e.writeListBegin(s.Type.STRING, this.custom_audience_ids.length), this.custom_audience_ids) this.custom_audience_ids.hasOwnProperty(c) && (c = this.custom_audience_ids[c], e.writeString(c));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.excluded_custom_audience_ids && void 0 !== this.excluded_custom_audience_ids) {
					for (var m in e.writeFieldBegin("excluded_custom_audience_ids", s.Type.LIST, 12), e.writeListBegin(s.Type.STRING, this.excluded_custom_audience_ids.length), this.excluded_custom_audience_ids) this.excluded_custom_audience_ids.hasOwnProperty(m) && (m = this.excluded_custom_audience_ids[m], e.writeString(m));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.expand_targeting && void 0 !== this.expand_targeting && (e.writeFieldBegin("expand_targeting", s.Type.BOOL, 13), e.writeBool(this.expand_targeting), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/adtypedefs_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js");
			n.Thrift, n.Q, e.exports = {}
		},
		"./src/telemetry/eventSchemas/audit_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.ReddarAudit = function(e) {
					this.id = null, this.auditor_id = null, this.ticket_ids = null, this.included_queues = null, this.included_agent_ids = null, this.included_range_start_timestamp = null, this.included_range_end_timestamp = null, this.percent_tickets_included = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.auditor_id && null !== e.auditor_id && (this.auditor_id = e.auditor_id), void 0 !== e.ticket_ids && null !== e.ticket_ids && (this.ticket_ids = s.copyList(e.ticket_ids, [null])), void 0 !== e.included_queues && null !== e.included_queues && (this.included_queues = s.copyList(e.included_queues, [null])), void 0 !== e.included_agent_ids && null !== e.included_agent_ids && (this.included_agent_ids = s.copyList(e.included_agent_ids, [null])), void 0 !== e.included_range_start_timestamp && null !== e.included_range_start_timestamp && (this.included_range_start_timestamp = e.included_range_start_timestamp), void 0 !== e.included_range_end_timestamp && null !== e.included_range_end_timestamp && (this.included_range_end_timestamp = e.included_range_end_timestamp), void 0 !== e.percent_tickets_included && null !== e.percent_tickets_included && (this.percent_tickets_included = e.percent_tickets_included))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("ReddarAudit"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.auditor_id && void 0 !== this.auditor_id && (e.writeFieldBegin("auditor_id", s.Type.STRING, 2), e.writeString(this.auditor_id), e.writeFieldEnd()), null !== this.ticket_ids && void 0 !== this.ticket_ids) {
					for (var t in e.writeFieldBegin("ticket_ids", s.Type.LIST, 3), e.writeListBegin(s.Type.STRING, this.ticket_ids.length), this.ticket_ids) this.ticket_ids.hasOwnProperty(t) && (t = this.ticket_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.included_queues && void 0 !== this.included_queues) {
					for (var i in e.writeFieldBegin("included_queues", s.Type.LIST, 4), e.writeListBegin(s.Type.STRING, this.included_queues.length), this.included_queues) this.included_queues.hasOwnProperty(i) && (i = this.included_queues[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.included_agent_ids && void 0 !== this.included_agent_ids) {
					for (var n in e.writeFieldBegin("included_agent_ids", s.Type.LIST, 5), e.writeListBegin(s.Type.STRING, this.included_agent_ids.length), this.included_agent_ids) this.included_agent_ids.hasOwnProperty(n) && (n = this.included_agent_ids[n], e.writeString(n));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.included_range_start_timestamp && void 0 !== this.included_range_start_timestamp && (e.writeFieldBegin("included_range_start_timestamp", s.Type.I64, 6), e.writeI64(this.included_range_start_timestamp), e.writeFieldEnd()), null !== this.included_range_end_timestamp && void 0 !== this.included_range_end_timestamp && (e.writeFieldBegin("included_range_end_timestamp", s.Type.I64, 7), e.writeI64(this.included_range_end_timestamp), e.writeFieldEnd()), null !== this.percent_tickets_included && void 0 !== this.percent_tickets_included && (e.writeFieldBegin("percent_tickets_included", s.Type.DOUBLE, 8), e.writeDouble(this.percent_tickets_included), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.ReddarAuditTicket = function(e) {
				this.id = null, this.audit_id = null, this.auditor_id = null, this.ticket_id = null, this.agent_id = null, this.qa_user_action = null, this.qa_content_action = null, this.qa_policy = null, this.qa_message = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.audit_id && null !== e.audit_id && (this.audit_id = e.audit_id), void 0 !== e.auditor_id && null !== e.auditor_id && (this.auditor_id = e.auditor_id), void 0 !== e.ticket_id && null !== e.ticket_id && (this.ticket_id = e.ticket_id), void 0 !== e.agent_id && null !== e.agent_id && (this.agent_id = e.agent_id), void 0 !== e.qa_user_action && null !== e.qa_user_action && (this.qa_user_action = e.qa_user_action), void 0 !== e.qa_content_action && null !== e.qa_content_action && (this.qa_content_action = e.qa_content_action), void 0 !== e.qa_policy && null !== e.qa_policy && (this.qa_policy = e.qa_policy), void 0 !== e.qa_message && null !== e.qa_message && (this.qa_message = e.qa_message))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("ReddarAuditTicket"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.audit_id && void 0 !== this.audit_id && (e.writeFieldBegin("audit_id", s.Type.STRING, 2), e.writeString(this.audit_id), e.writeFieldEnd()), null !== this.auditor_id && void 0 !== this.auditor_id && (e.writeFieldBegin("auditor_id", s.Type.STRING, 3), e.writeString(this.auditor_id), e.writeFieldEnd()), null !== this.ticket_id && void 0 !== this.ticket_id && (e.writeFieldBegin("ticket_id", s.Type.STRING, 4), e.writeString(this.ticket_id), e.writeFieldEnd()), null !== this.agent_id && void 0 !== this.agent_id && (e.writeFieldBegin("agent_id", s.Type.STRING, 5), e.writeString(this.agent_id), e.writeFieldEnd()), null !== this.qa_user_action && void 0 !== this.qa_user_action && (e.writeFieldBegin("qa_user_action", s.Type.STRING, 6), e.writeString(this.qa_user_action), e.writeFieldEnd()), null !== this.qa_content_action && void 0 !== this.qa_content_action && (e.writeFieldBegin("qa_content_action", s.Type.STRING, 7), e.writeString(this.qa_content_action), e.writeFieldEnd()), null !== this.qa_policy && void 0 !== this.qa_policy && (e.writeFieldBegin("qa_policy", s.Type.STRING, 8), e.writeString(this.qa_policy), e.writeFieldEnd()), null !== this.qa_message && void 0 !== this.qa_message && (e.writeFieldBegin("qa_message", s.Type.STRING, 9), e.writeString(this.qa_message), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/banner_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Banner = function(e) {
					if (this.id = null, this.button_text = null, e) {
						if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id, void 0 !== e.button_text && null !== e.button_text && (this.button_text = e.button_text)
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Banner"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.button_text && void 0 !== this.button_text && (e.writeFieldBegin("button_text", s.Type.STRING, 2), e.writeString(this.button_text), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/billinginfo_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/adtypedefs_types.js"), e.exports = {}, e.exports.BillingInfo = function(e) {
					this.balance = null, this.billing_threshold = null, this.credit = null, this.max_billing_threshold = null, this.total_refund_pennies = null, this.available_freebies = null, this.spent_freebies = null, e && (void 0 !== e.balance && null !== e.balance && (this.balance = e.balance), void 0 !== e.billing_threshold && null !== e.billing_threshold && (this.billing_threshold = e.billing_threshold), void 0 !== e.credit && null !== e.credit && (this.credit = e.credit), void 0 !== e.max_billing_threshold && null !== e.max_billing_threshold && (this.max_billing_threshold = e.max_billing_threshold), void 0 !== e.total_refund_pennies && null !== e.total_refund_pennies && (this.total_refund_pennies = e.total_refund_pennies), void 0 !== e.available_freebies && null !== e.available_freebies && (this.available_freebies = e.available_freebies), void 0 !== e.spent_freebies && null !== e.spent_freebies && (this.spent_freebies = e.spent_freebies))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("BillingInfo"), null !== this.balance && void 0 !== this.balance && (e.writeFieldBegin("balance", s.Type.I64, 1), e.writeI64(this.balance), e.writeFieldEnd()), null !== this.billing_threshold && void 0 !== this.billing_threshold && (e.writeFieldBegin("billing_threshold", s.Type.I64, 2), e.writeI64(this.billing_threshold), e.writeFieldEnd()), null !== this.credit && void 0 !== this.credit && (e.writeFieldBegin("credit", s.Type.I64, 3), e.writeI64(this.credit), e.writeFieldEnd()), null !== this.max_billing_threshold && void 0 !== this.max_billing_threshold && (e.writeFieldBegin("max_billing_threshold", s.Type.I64, 4), e.writeI64(this.max_billing_threshold), e.writeFieldEnd()), null !== this.total_refund_pennies && void 0 !== this.total_refund_pennies && (e.writeFieldBegin("total_refund_pennies", s.Type.I64, 5), e.writeI64(this.total_refund_pennies), e.writeFieldEnd()), null !== this.available_freebies && void 0 !== this.available_freebies && (e.writeFieldBegin("available_freebies", s.Type.I64, 6), e.writeI64(this.available_freebies), e.writeFieldEnd()), null !== this.spent_freebies && void 0 !== this.spent_freebies && (e.writeFieldBegin("spent_freebies", s.Type.I64, 7), e.writeI64(this.spent_freebies), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/brand_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Brand = function(e) {
					if (this.id = null, this.status = null, this.created_timestamp = null, this.click_attribution_window = null, this.view_attribution_window = null, this.attribution_type = null, this.default_payment_profile_id = null, this.payment_profile_ids = null, this.admin_approval = null, this.account_type = null, this.pay_by_invoice = null, this.feature_flags = null, e) {
						if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id, void 0 !== e.status && null !== e.status && (this.status = e.status), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.click_attribution_window && null !== e.click_attribution_window && (this.click_attribution_window = e.click_attribution_window), void 0 !== e.view_attribution_window && null !== e.view_attribution_window && (this.view_attribution_window = e.view_attribution_window), void 0 !== e.attribution_type && null !== e.attribution_type && (this.attribution_type = e.attribution_type), void 0 !== e.default_payment_profile_id && null !== e.default_payment_profile_id && (this.default_payment_profile_id = e.default_payment_profile_id), void 0 !== e.payment_profile_ids && null !== e.payment_profile_ids && (this.payment_profile_ids = s.copyList(e.payment_profile_ids, [null])), void 0 !== e.admin_approval && null !== e.admin_approval && (this.admin_approval = e.admin_approval), void 0 !== e.account_type && null !== e.account_type && (this.account_type = e.account_type), void 0 !== e.pay_by_invoice && null !== e.pay_by_invoice && (this.pay_by_invoice = e.pay_by_invoice), void 0 !== e.feature_flags && null !== e.feature_flags && (this.feature_flags = s.copyList(e.feature_flags, [null]))
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("Brand"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", s.Type.STRING, 2), e.writeString(this.status), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", s.Type.I64, 3), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.click_attribution_window && void 0 !== this.click_attribution_window && (e.writeFieldBegin("click_attribution_window", s.Type.STRING, 4), e.writeString(this.click_attribution_window), e.writeFieldEnd()), null !== this.view_attribution_window && void 0 !== this.view_attribution_window && (e.writeFieldBegin("view_attribution_window", s.Type.STRING, 5), e.writeString(this.view_attribution_window), e.writeFieldEnd()), null !== this.attribution_type && void 0 !== this.attribution_type && (e.writeFieldBegin("attribution_type", s.Type.STRING, 6), e.writeString(this.attribution_type), e.writeFieldEnd()), null !== this.default_payment_profile_id && void 0 !== this.default_payment_profile_id && (e.writeFieldBegin("default_payment_profile_id", s.Type.STRING, 7), e.writeString(this.default_payment_profile_id), e.writeFieldEnd()), null !== this.payment_profile_ids && void 0 !== this.payment_profile_ids) {
					for (var t in e.writeFieldBegin("payment_profile_ids", s.Type.LIST, 8), e.writeListBegin(s.Type.STRING, this.payment_profile_ids.length), this.payment_profile_ids) this.payment_profile_ids.hasOwnProperty(t) && (t = this.payment_profile_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.admin_approval && void 0 !== this.admin_approval && (e.writeFieldBegin("admin_approval", s.Type.STRING, 9), e.writeString(this.admin_approval), e.writeFieldEnd()), null !== this.account_type && void 0 !== this.account_type && (e.writeFieldBegin("account_type", s.Type.STRING, 10), e.writeString(this.account_type), e.writeFieldEnd()), null !== this.pay_by_invoice && void 0 !== this.pay_by_invoice && (e.writeFieldBegin("pay_by_invoice", s.Type.BOOL, 11), e.writeBool(this.pay_by_invoice), e.writeFieldEnd()), null !== this.feature_flags && void 0 !== this.feature_flags) {
					for (var i in e.writeFieldBegin("feature_flags", s.Type.LIST, 12), e.writeListBegin(s.Type.STRING, this.feature_flags.length), this.feature_flags) this.feature_flags.hasOwnProperty(i) && (i = this.feature_flags[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/businessinfo_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, e.exports = {}, e.exports.BusinessInfo = function(e) {
					this.name = null, this.industry = null, this.subvertical = null, this.country = null, e && (void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.industry && null !== e.industry && (this.industry = e.industry), void 0 !== e.subvertical && null !== e.subvertical && (this.subvertical = e.subvertical), void 0 !== e.country && null !== e.country && (this.country = e.country))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("BusinessInfo"), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 1), e.writeString(this.name), e.writeFieldEnd()), null !== this.industry && void 0 !== this.industry && (e.writeFieldBegin("industry", s.Type.STRING, 2), e.writeString(this.industry), e.writeFieldEnd()), null !== this.subvertical && void 0 !== this.subvertical && (e.writeFieldBegin("subvertical", s.Type.STRING, 3), e.writeString(this.subvertical), e.writeFieldEnd()), null !== this.country && void 0 !== this.country && (e.writeFieldBegin("country", s.Type.STRING, 4), e.writeString(this.country), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/carousel_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Carousel = function(e) {
					if (this.id = null, this.type = null, e) {
						if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						if (this.id = e.id, void 0 === e.type || null === e.type) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field type is unset!");
						this.type = e.type
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Carousel"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/category_header_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.CategoryHeader = function(e) {
					if (this.id = null, this.name = null, this.subreddit_ids = null, this.subreddit_names = null, e) {
						if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						if (this.id = e.id, void 0 === e.name || null === e.name) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field name is unset!");
						this.name = e.name, void 0 !== e.subreddit_ids && null !== e.subreddit_ids && (this.subreddit_ids = s.copyList(e.subreddit_ids, [null])), void 0 !== e.subreddit_names && null !== e.subreddit_names && (this.subreddit_names = s.copyList(e.subreddit_names, [null]))
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("CategoryHeader"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.subreddit_ids && void 0 !== this.subreddit_ids) {
					for (var t in e.writeFieldBegin("subreddit_ids", s.Type.LIST, 3), e.writeListBegin(s.Type.STRING, this.subreddit_ids.length), this.subreddit_ids) this.subreddit_ids.hasOwnProperty(t) && (t = this.subreddit_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.subreddit_names && void 0 !== this.subreddit_names) {
					for (var i in e.writeFieldBegin("subreddit_names", s.Type.LIST, 4), e.writeListBegin(s.Type.STRING, this.subreddit_names.length), this.subreddit_names) this.subreddit_names.hasOwnProperty(i) && (i = this.subreddit_names[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/chat_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Chat = function(e) {
					this.blocked_user_id = null, this.id = null, this.type = null, this.existing_channel = null, this.image_upload_method = null, this.user_added_method = null, this.invitation_id = null, this.invitation_type = null, this.members = null, this.invitation_preview_type = null, this.message_type = null, this.number_channels = null, this.number_pending_invites = null, this.number_members = null, this.number_unreads = null, this.reported_user_id = null, this.sender_user_id = null, this.invitation_timestamp = null, this.message_length = null, this.recipient_user_id = null, this.number_blocked_users = null, this.request_name = null, this.is_member = null, this.shown_history = null, this.message_id = null, this.report_reason = null, this.message_body = null, this.channel_name = null, e && (void 0 !== e.blocked_user_id && null !== e.blocked_user_id && (this.blocked_user_id = e.blocked_user_id), void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.existing_channel && null !== e.existing_channel && (this.existing_channel = e.existing_channel), void 0 !== e.image_upload_method && null !== e.image_upload_method && (this.image_upload_method = e.image_upload_method), void 0 !== e.user_added_method && null !== e.user_added_method && (this.user_added_method = e.user_added_method), void 0 !== e.invitation_id && null !== e.invitation_id && (this.invitation_id = e.invitation_id), void 0 !== e.invitation_type && null !== e.invitation_type && (this.invitation_type = e.invitation_type), void 0 !== e.members && null !== e.members && (this.members = s.copyList(e.members, [null])), void 0 !== e.invitation_preview_type && null !== e.invitation_preview_type && (this.invitation_preview_type = e.invitation_preview_type), void 0 !== e.message_type && null !== e.message_type && (this.message_type = e.message_type), void 0 !== e.number_channels && null !== e.number_channels && (this.number_channels = e.number_channels), void 0 !== e.number_pending_invites && null !== e.number_pending_invites && (this.number_pending_invites = e.number_pending_invites), void 0 !== e.number_members && null !== e.number_members && (this.number_members = e.number_members), void 0 !== e.number_unreads && null !== e.number_unreads && (this.number_unreads = e.number_unreads), void 0 !== e.reported_user_id && null !== e.reported_user_id && (this.reported_user_id = e.reported_user_id), void 0 !== e.sender_user_id && null !== e.sender_user_id && (this.sender_user_id = e.sender_user_id), void 0 !== e.invitation_timestamp && null !== e.invitation_timestamp && (this.invitation_timestamp = e.invitation_timestamp), void 0 !== e.message_length && null !== e.message_length && (this.message_length = e.message_length), void 0 !== e.recipient_user_id && null !== e.recipient_user_id && (this.recipient_user_id = e.recipient_user_id), void 0 !== e.number_blocked_users && null !== e.number_blocked_users && (this.number_blocked_users = e.number_blocked_users), void 0 !== e.request_name && null !== e.request_name && (this.request_name = e.request_name), void 0 !== e.is_member && null !== e.is_member && (this.is_member = e.is_member), void 0 !== e.shown_history && null !== e.shown_history && (this.shown_history = e.shown_history), void 0 !== e.message_id && null !== e.message_id && (this.message_id = e.message_id), void 0 !== e.report_reason && null !== e.report_reason && (this.report_reason = e.report_reason), void 0 !== e.message_body && null !== e.message_body && (this.message_body = e.message_body), void 0 !== e.channel_name && null !== e.channel_name && (this.channel_name = e.channel_name))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("Chat"), null !== this.blocked_user_id && void 0 !== this.blocked_user_id && (e.writeFieldBegin("blocked_user_id", s.Type.STRING, 1), e.writeString(this.blocked_user_id), e.writeFieldEnd()), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 2), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 3), e.writeString(this.type), e.writeFieldEnd()), null !== this.existing_channel && void 0 !== this.existing_channel && (e.writeFieldBegin("existing_channel", s.Type.BOOL, 4), e.writeBool(this.existing_channel), e.writeFieldEnd()), null !== this.image_upload_method && void 0 !== this.image_upload_method && (e.writeFieldBegin("image_upload_method", s.Type.STRING, 5), e.writeString(this.image_upload_method), e.writeFieldEnd()), null !== this.user_added_method && void 0 !== this.user_added_method && (e.writeFieldBegin("user_added_method", s.Type.STRING, 6), e.writeString(this.user_added_method), e.writeFieldEnd()), null !== this.invitation_id && void 0 !== this.invitation_id && (e.writeFieldBegin("invitation_id", s.Type.STRING, 7), e.writeString(this.invitation_id), e.writeFieldEnd()), null !== this.invitation_type && void 0 !== this.invitation_type && (e.writeFieldBegin("invitation_type", s.Type.STRING, 8), e.writeString(this.invitation_type), e.writeFieldEnd()), null !== this.members && void 0 !== this.members) {
					for (var t in e.writeFieldBegin("members", s.Type.LIST, 9), e.writeListBegin(s.Type.STRING, this.members.length), this.members) this.members.hasOwnProperty(t) && (t = this.members[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.invitation_preview_type && void 0 !== this.invitation_preview_type && (e.writeFieldBegin("invitation_preview_type", s.Type.STRING, 10), e.writeString(this.invitation_preview_type), e.writeFieldEnd()), null !== this.message_type && void 0 !== this.message_type && (e.writeFieldBegin("message_type", s.Type.STRING, 11), e.writeString(this.message_type), e.writeFieldEnd()), null !== this.number_channels && void 0 !== this.number_channels && (e.writeFieldBegin("number_channels", s.Type.I64, 12), e.writeI64(this.number_channels), e.writeFieldEnd()), null !== this.number_pending_invites && void 0 !== this.number_pending_invites && (e.writeFieldBegin("number_pending_invites", s.Type.I64, 13), e.writeI64(this.number_pending_invites), e.writeFieldEnd()), null !== this.number_members && void 0 !== this.number_members && (e.writeFieldBegin("number_members", s.Type.I64, 14), e.writeI64(this.number_members), e.writeFieldEnd()), null !== this.number_unreads && void 0 !== this.number_unreads && (e.writeFieldBegin("number_unreads", s.Type.I64, 15), e.writeI64(this.number_unreads), e.writeFieldEnd()), null !== this.reported_user_id && void 0 !== this.reported_user_id && (e.writeFieldBegin("reported_user_id", s.Type.STRING, 16), e.writeString(this.reported_user_id), e.writeFieldEnd()), null !== this.sender_user_id && void 0 !== this.sender_user_id && (e.writeFieldBegin("sender_user_id", s.Type.STRING, 17), e.writeString(this.sender_user_id), e.writeFieldEnd()), null !== this.invitation_timestamp && void 0 !== this.invitation_timestamp && (e.writeFieldBegin("invitation_timestamp", s.Type.I64, 18), e.writeI64(this.invitation_timestamp), e.writeFieldEnd()), null !== this.message_length && void 0 !== this.message_length && (e.writeFieldBegin("message_length", s.Type.I64, 19), e.writeI64(this.message_length), e.writeFieldEnd()), null !== this.recipient_user_id && void 0 !== this.recipient_user_id && (e.writeFieldBegin("recipient_user_id", s.Type.STRING, 20), e.writeString(this.recipient_user_id), e.writeFieldEnd()), null !== this.number_blocked_users && void 0 !== this.number_blocked_users && (e.writeFieldBegin("number_blocked_users", s.Type.I64, 21), e.writeI64(this.number_blocked_users), e.writeFieldEnd()), null !== this.request_name && void 0 !== this.request_name && (e.writeFieldBegin("request_name", s.Type.STRING, 22), e.writeString(this.request_name), e.writeFieldEnd()), null !== this.is_member && void 0 !== this.is_member && (e.writeFieldBegin("is_member", s.Type.BOOL, 23), e.writeBool(this.is_member), e.writeFieldEnd()), null !== this.shown_history && void 0 !== this.shown_history && (e.writeFieldBegin("shown_history", s.Type.BOOL, 24), e.writeBool(this.shown_history), e.writeFieldEnd()), null !== this.message_id && void 0 !== this.message_id && (e.writeFieldBegin("message_id", s.Type.I64, 25), e.writeI64(this.message_id), e.writeFieldEnd()), null !== this.report_reason && void 0 !== this.report_reason && (e.writeFieldBegin("report_reason", s.Type.STRING, 26), e.writeString(this.report_reason), e.writeFieldEnd()), null !== this.message_body && void 0 !== this.message_body && (e.writeFieldBegin("message_body", s.Type.STRING, 27), e.writeString(this.message_body), e.writeFieldEnd()), null !== this.channel_name && void 0 !== this.channel_name && (e.writeFieldBegin("channel_name", s.Type.STRING, 28), e.writeString(this.channel_name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.ChatHomeFeedBoosting = function(e) {
				this.subreddit_ids = null, this.post_ids = null, this.positions = null, this.original_positions = null, e && (void 0 !== e.subreddit_ids && null !== e.subreddit_ids && (this.subreddit_ids = s.copyList(e.subreddit_ids, [null])), void 0 !== e.post_ids && null !== e.post_ids && (this.post_ids = s.copyList(e.post_ids, [null])), void 0 !== e.positions && null !== e.positions && (this.positions = s.copyList(e.positions, [null])), void 0 !== e.original_positions && null !== e.original_positions && (this.original_positions = s.copyList(e.original_positions, [null])))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				if (e.writeStructBegin("ChatHomeFeedBoosting"), null !== this.subreddit_ids && void 0 !== this.subreddit_ids) {
					for (var t in e.writeFieldBegin("subreddit_ids", s.Type.LIST, 1), e.writeListBegin(s.Type.STRING, this.subreddit_ids.length), this.subreddit_ids) this.subreddit_ids.hasOwnProperty(t) && (t = this.subreddit_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.post_ids && void 0 !== this.post_ids) {
					for (var i in e.writeFieldBegin("post_ids", s.Type.LIST, 2), e.writeListBegin(s.Type.STRING, this.post_ids.length), this.post_ids) this.post_ids.hasOwnProperty(i) && (i = this.post_ids[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.positions && void 0 !== this.positions) {
					for (var n in e.writeFieldBegin("positions", s.Type.LIST, 3), e.writeListBegin(s.Type.I32, this.positions.length), this.positions) this.positions.hasOwnProperty(n) && (n = this.positions[n], e.writeI32(n));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.original_positions && void 0 !== this.original_positions) {
					for (var r in e.writeFieldBegin("original_positions", s.Type.LIST, 4), e.writeListBegin(s.Type.I32, this.original_positions.length), this.original_positions) this.original_positions.hasOwnProperty(r) && (r = this.original_positions[r], e.writeI32(r));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/comment_draft_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.CommentDraft = function(e) {
					this.body_text = null, e && void 0 !== e.body_text && null !== e.body_text && (this.body_text = e.body_text)
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("CommentDraft"), null !== this.body_text && void 0 !== this.body_text && (e.writeFieldBegin("body_text", s.Type.STRING, 1), e.writeString(this.body_text), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/content_types.js": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.array.sort.js");
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Post = function(e) {
					this.id = null, this.type = null, this.title = null, this.nsfw = null, this.spoiler = null, this.url = null, this.domain = null, this.body_text = null, this.created_timestamp = null, this.promoted = null, this.author_id = null, this.content_duration = null, this.archived = null, this.crosspost_root_id = null, this.number_gildings = null, this.original_content = null, this.flair = null, this.score = null, this.upvote_ratio = null, this.impression_id = null, this.number_posts_from_ad = null, this.is_event = null, this.is_scheduled = null, this.submit_scheduled_timestamp = null, this.is_automated = null, this.comment_type = null, this.number_comments = null, this.subreddit_id = null, this.subreddit_name = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.title && null !== e.title && (this.title = e.title), void 0 !== e.nsfw && null !== e.nsfw && (this.nsfw = e.nsfw), void 0 !== e.spoiler && null !== e.spoiler && (this.spoiler = e.spoiler), void 0 !== e.url && null !== e.url && (this.url = e.url), void 0 !== e.domain && null !== e.domain && (this.domain = e.domain), void 0 !== e.body_text && null !== e.body_text && (this.body_text = e.body_text), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.promoted && null !== e.promoted && (this.promoted = e.promoted), void 0 !== e.author_id && null !== e.author_id && (this.author_id = e.author_id), void 0 !== e.content_duration && null !== e.content_duration && (this.content_duration = e.content_duration), void 0 !== e.archived && null !== e.archived && (this.archived = e.archived), void 0 !== e.crosspost_root_id && null !== e.crosspost_root_id && (this.crosspost_root_id = e.crosspost_root_id), void 0 !== e.number_gildings && null !== e.number_gildings && (this.number_gildings = e.number_gildings), void 0 !== e.original_content && null !== e.original_content && (this.original_content = e.original_content), void 0 !== e.flair && null !== e.flair && (this.flair = e.flair), void 0 !== e.score && null !== e.score && (this.score = e.score), void 0 !== e.upvote_ratio && null !== e.upvote_ratio && (this.upvote_ratio = e.upvote_ratio), void 0 !== e.impression_id && null !== e.impression_id && (this.impression_id = e.impression_id), void 0 !== e.number_posts_from_ad && null !== e.number_posts_from_ad && (this.number_posts_from_ad = e.number_posts_from_ad), void 0 !== e.is_event && null !== e.is_event && (this.is_event = e.is_event), void 0 !== e.is_scheduled && null !== e.is_scheduled && (this.is_scheduled = e.is_scheduled), void 0 !== e.submit_scheduled_timestamp && null !== e.submit_scheduled_timestamp && (this.submit_scheduled_timestamp = e.submit_scheduled_timestamp), void 0 !== e.is_automated && null !== e.is_automated && (this.is_automated = e.is_automated), void 0 !== e.comment_type && null !== e.comment_type && (this.comment_type = e.comment_type), void 0 !== e.number_comments && null !== e.number_comments && (this.number_comments = e.number_comments), void 0 !== e.subreddit_id && null !== e.subreddit_id && (this.subreddit_id = e.subreddit_id), void 0 !== e.subreddit_name && null !== e.subreddit_name && (this.subreddit_name = e.subreddit_name))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Post"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", s.Type.STRING, 3), e.writeString(this.title), e.writeFieldEnd()), null !== this.nsfw && void 0 !== this.nsfw && (e.writeFieldBegin("nsfw", s.Type.BOOL, 4), e.writeBool(this.nsfw), e.writeFieldEnd()), null !== this.spoiler && void 0 !== this.spoiler && (e.writeFieldBegin("spoiler", s.Type.BOOL, 5), e.writeBool(this.spoiler), e.writeFieldEnd()), null !== this.url && void 0 !== this.url && (e.writeFieldBegin("url", s.Type.STRING, 6), e.writeString(this.url), e.writeFieldEnd()), null !== this.domain && void 0 !== this.domain && (e.writeFieldBegin("domain", s.Type.STRING, 7), e.writeString(this.domain), e.writeFieldEnd()), null !== this.body_text && void 0 !== this.body_text && (e.writeFieldBegin("body_text", s.Type.STRING, 8), e.writeString(this.body_text), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", s.Type.I64, 9), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.promoted && void 0 !== this.promoted && (e.writeFieldBegin("promoted", s.Type.BOOL, 10), e.writeBool(this.promoted), e.writeFieldEnd()), null !== this.author_id && void 0 !== this.author_id && (e.writeFieldBegin("author_id", s.Type.STRING, 11), e.writeString(this.author_id), e.writeFieldEnd()), null !== this.content_duration && void 0 !== this.content_duration && (e.writeFieldBegin("content_duration", s.Type.I64, 12), e.writeI64(this.content_duration), e.writeFieldEnd()), null !== this.archived && void 0 !== this.archived && (e.writeFieldBegin("archived", s.Type.BOOL, 13), e.writeBool(this.archived), e.writeFieldEnd()), null !== this.crosspost_root_id && void 0 !== this.crosspost_root_id && (e.writeFieldBegin("crosspost_root_id", s.Type.STRING, 14), e.writeString(this.crosspost_root_id), e.writeFieldEnd()), null !== this.number_gildings && void 0 !== this.number_gildings && (e.writeFieldBegin("number_gildings", s.Type.I64, 15), e.writeI64(this.number_gildings), e.writeFieldEnd()), null !== this.original_content && void 0 !== this.original_content && (e.writeFieldBegin("original_content", s.Type.BOOL, 16), e.writeBool(this.original_content), e.writeFieldEnd()), null !== this.flair && void 0 !== this.flair && (e.writeFieldBegin("flair", s.Type.STRING, 17), e.writeString(this.flair), e.writeFieldEnd()), null !== this.score && void 0 !== this.score && (e.writeFieldBegin("score", s.Type.I64, 18), e.writeI64(this.score), e.writeFieldEnd()), null !== this.upvote_ratio && void 0 !== this.upvote_ratio && (e.writeFieldBegin("upvote_ratio", s.Type.DOUBLE, 19), e.writeDouble(this.upvote_ratio), e.writeFieldEnd()), null !== this.impression_id && void 0 !== this.impression_id && (e.writeFieldBegin("impression_id", s.Type.STRING, 20), e.writeString(this.impression_id), e.writeFieldEnd()), null !== this.number_posts_from_ad && void 0 !== this.number_posts_from_ad && (e.writeFieldBegin("number_posts_from_ad", s.Type.I64, 21), e.writeI64(this.number_posts_from_ad), e.writeFieldEnd()), null !== this.is_event && void 0 !== this.is_event && (e.writeFieldBegin("is_event", s.Type.BOOL, 22), e.writeBool(this.is_event), e.writeFieldEnd()), null !== this.is_scheduled && void 0 !== this.is_scheduled && (e.writeFieldBegin("is_scheduled", s.Type.BOOL, 23), e.writeBool(this.is_scheduled), e.writeFieldEnd()), null !== this.submit_scheduled_timestamp && void 0 !== this.submit_scheduled_timestamp && (e.writeFieldBegin("submit_scheduled_timestamp", s.Type.I64, 24), e.writeI64(this.submit_scheduled_timestamp), e.writeFieldEnd()), null !== this.is_automated && void 0 !== this.is_automated && (e.writeFieldBegin("is_automated", s.Type.BOOL, 25), e.writeBool(this.is_automated), e.writeFieldEnd()), null !== this.comment_type && void 0 !== this.comment_type && (e.writeFieldBegin("comment_type", s.Type.STRING, 26), e.writeString(this.comment_type), e.writeFieldEnd()), null !== this.number_comments && void 0 !== this.number_comments && (e.writeFieldBegin("number_comments", s.Type.I64, 27), e.writeI64(this.number_comments), e.writeFieldEnd()), null !== this.subreddit_id && void 0 !== this.subreddit_id && (e.writeFieldBegin("subreddit_id", s.Type.STRING, 28), e.writeString(this.subreddit_id), e.writeFieldEnd()), null !== this.subreddit_name && void 0 !== this.subreddit_name && (e.writeFieldBegin("subreddit_name", s.Type.STRING, 29), e.writeString(this.subreddit_name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Listing = function(e) {
				this.length = null, this.links = null, this.sort = null, this.sort_time_filter = null, this.min_rank = null, this.max_rank = null, this.geo_filter = null, this.source = null, this.old_sort = null, this.depth = null, this.cursor = null, this.cursor_returned = null, this.aggregator = null, this.metadata = null, e && (void 0 !== e.length && null !== e.length && (this.length = e.length), void 0 !== e.links && null !== e.links && (this.links = s.copyList(e.links, [null])), void 0 !== e.sort && null !== e.sort && (this.sort = e.sort), void 0 !== e.sort_time_filter && null !== e.sort_time_filter && (this.sort_time_filter = e.sort_time_filter), void 0 !== e.min_rank && null !== e.min_rank && (this.min_rank = e.min_rank), void 0 !== e.max_rank && null !== e.max_rank && (this.max_rank = e.max_rank), void 0 !== e.geo_filter && null !== e.geo_filter && (this.geo_filter = e.geo_filter), void 0 !== e.source && null !== e.source && (this.source = e.source), void 0 !== e.old_sort && null !== e.old_sort && (this.old_sort = e.old_sort), void 0 !== e.depth && null !== e.depth && (this.depth = e.depth), void 0 !== e.cursor && null !== e.cursor && (this.cursor = e.cursor), void 0 !== e.cursor_returned && null !== e.cursor_returned && (this.cursor_returned = e.cursor_returned), void 0 !== e.aggregator && null !== e.aggregator && (this.aggregator = e.aggregator), void 0 !== e.metadata && null !== e.metadata && (this.metadata = e.metadata))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				if (e.writeStructBegin("Listing"), null !== this.length && void 0 !== this.length && (e.writeFieldBegin("length", s.Type.I64, 1), e.writeI64(this.length), e.writeFieldEnd()), null !== this.links && void 0 !== this.links) {
					for (var t in e.writeFieldBegin("links", s.Type.LIST, 2), e.writeListBegin(s.Type.STRING, this.links.length), this.links) this.links.hasOwnProperty(t) && (t = this.links[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.sort && void 0 !== this.sort && (e.writeFieldBegin("sort", s.Type.STRING, 3), e.writeString(this.sort), e.writeFieldEnd()), null !== this.sort_time_filter && void 0 !== this.sort_time_filter && (e.writeFieldBegin("sort_time_filter", s.Type.STRING, 4), e.writeString(this.sort_time_filter), e.writeFieldEnd()), null !== this.min_rank && void 0 !== this.min_rank && (e.writeFieldBegin("min_rank", s.Type.I64, 5), e.writeI64(this.min_rank), e.writeFieldEnd()), null !== this.max_rank && void 0 !== this.max_rank && (e.writeFieldBegin("max_rank", s.Type.I64, 6), e.writeI64(this.max_rank), e.writeFieldEnd()), null !== this.geo_filter && void 0 !== this.geo_filter && (e.writeFieldBegin("geo_filter", s.Type.STRING, 7), e.writeString(this.geo_filter), e.writeFieldEnd()), null !== this.source && void 0 !== this.source && (e.writeFieldBegin("source", s.Type.STRING, 8), e.writeString(this.source), e.writeFieldEnd()), null !== this.old_sort && void 0 !== this.old_sort && (e.writeFieldBegin("old_sort", s.Type.STRING, 9), e.writeString(this.old_sort), e.writeFieldEnd()), null !== this.depth && void 0 !== this.depth && (e.writeFieldBegin("depth", s.Type.I64, 10), e.writeI64(this.depth), e.writeFieldEnd()), null !== this.cursor && void 0 !== this.cursor && (e.writeFieldBegin("cursor", s.Type.STRING, 11), e.writeString(this.cursor), e.writeFieldEnd()), null !== this.cursor_returned && void 0 !== this.cursor_returned && (e.writeFieldBegin("cursor_returned", s.Type.STRING, 12), e.writeString(this.cursor_returned), e.writeFieldEnd()), null !== this.aggregator && void 0 !== this.aggregator && (e.writeFieldBegin("aggregator", s.Type.STRING, 13), e.writeString(this.aggregator), e.writeFieldEnd()), null !== this.metadata && void 0 !== this.metadata && (e.writeFieldBegin("metadata", s.Type.STRING, 14), e.writeString(this.metadata), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.Comment = function(e) {
				if (this.id = null, this.post_id = null, this.parent_id = null, this.body_text = null, this.author_id = null, this.number_gildings = null, this.score = null, this.upvote_ratio = null, this.created_timestamp = null, this.type = null, e) {
					if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
					this.id = e.id, void 0 !== e.post_id && null !== e.post_id && (this.post_id = e.post_id), void 0 !== e.parent_id && null !== e.parent_id && (this.parent_id = e.parent_id), void 0 !== e.body_text && null !== e.body_text && (this.body_text = e.body_text), void 0 !== e.author_id && null !== e.author_id && (this.author_id = e.author_id), void 0 !== e.number_gildings && null !== e.number_gildings && (this.number_gildings = e.number_gildings), void 0 !== e.score && null !== e.score && (this.score = e.score), void 0 !== e.upvote_ratio && null !== e.upvote_ratio && (this.upvote_ratio = e.upvote_ratio), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.type && null !== e.type && (this.type = e.type)
				}
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("Comment"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.post_id && void 0 !== this.post_id && (e.writeFieldBegin("post_id", s.Type.STRING, 2), e.writeString(this.post_id), e.writeFieldEnd()), null !== this.parent_id && void 0 !== this.parent_id && (e.writeFieldBegin("parent_id", s.Type.STRING, 3), e.writeString(this.parent_id), e.writeFieldEnd()), null !== this.body_text && void 0 !== this.body_text && (e.writeFieldBegin("body_text", s.Type.STRING, 4), e.writeString(this.body_text), e.writeFieldEnd()), null !== this.author_id && void 0 !== this.author_id && (e.writeFieldBegin("author_id", s.Type.STRING, 5), e.writeString(this.author_id), e.writeFieldEnd()), null !== this.number_gildings && void 0 !== this.number_gildings && (e.writeFieldBegin("number_gildings", s.Type.I64, 6), e.writeI64(this.number_gildings), e.writeFieldEnd()), null !== this.score && void 0 !== this.score && (e.writeFieldBegin("score", s.Type.I64, 7), e.writeI64(this.score), e.writeFieldEnd()), null !== this.upvote_ratio && void 0 !== this.upvote_ratio && (e.writeFieldBegin("upvote_ratio", s.Type.DOUBLE, 8), e.writeDouble(this.upvote_ratio), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", s.Type.I64, 9), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 10), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var l = e.exports.CommentComposer = function(e) {
				this.editor_mode = null, e && void 0 !== e.editor_mode && null !== e.editor_mode && (this.editor_mode = e.editor_mode)
			};
			l.prototype = {}, l.prototype.write = function(e) {
				e.writeStructBegin("CommentComposer"), null !== this.editor_mode && void 0 !== this.editor_mode && (e.writeFieldBegin("editor_mode", s.Type.STRING, 1), e.writeString(this.editor_mode), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var a = e.exports.Notification = function(e) {
				if (this.id = null, this.process_notes = null, this.dropped = null, this.type = null, this.title = null, this.body = null, e) {
					if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
					this.id = e.id, void 0 !== e.process_notes && null !== e.process_notes && (this.process_notes = e.process_notes), void 0 !== e.dropped && null !== e.dropped && (this.dropped = e.dropped), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.title && null !== e.title && (this.title = e.title), void 0 !== e.body && null !== e.body && (this.body = e.body)
				}
			};
			a.prototype = {}, a.prototype.write = function(e) {
				e.writeStructBegin("Notification"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.process_notes && void 0 !== this.process_notes && (e.writeFieldBegin("process_notes", s.Type.STRING, 2), e.writeString(this.process_notes), e.writeFieldEnd()), null !== this.dropped && void 0 !== this.dropped && (e.writeFieldBegin("dropped", s.Type.BOOL, 3), e.writeBool(this.dropped), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 4), e.writeString(this.type), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", s.Type.STRING, 5), e.writeString(this.title), e.writeFieldEnd()), null !== this.body && void 0 !== this.body && (e.writeFieldBegin("body", s.Type.STRING, 6), e.writeString(this.body), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var u = e.exports.Media = function(e) {
				this.width = null, this.height = null, this.load_time = null, this.id = null, this.orientation = null, this.duration = null, this.time = null, this.pinned = null, this.max_time_served = null, this.mimetype = null, this.size = null, this.url = null, this.source = null, this.upload_duration = null, this.file_name = null, this.type = null, this.thumbnail_url = null, this.cdn_name = null, this.cdn_region = null, this.destination_region = null, this.preview_url = null, this.stream_public_id = null, this.stream_private_id = null, this.stream_ended_timestamp = null, this.md5 = null, e && (void 0 !== e.width && null !== e.width && (this.width = e.width), void 0 !== e.height && null !== e.height && (this.height = e.height), void 0 !== e.load_time && null !== e.load_time && (this.load_time = e.load_time), void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.orientation && null !== e.orientation && (this.orientation = e.orientation), void 0 !== e.duration && null !== e.duration && (this.duration = e.duration), void 0 !== e.time && null !== e.time && (this.time = e.time), void 0 !== e.pinned && null !== e.pinned && (this.pinned = e.pinned), void 0 !== e.max_time_served && null !== e.max_time_served && (this.max_time_served = e.max_time_served), void 0 !== e.mimetype && null !== e.mimetype && (this.mimetype = e.mimetype), void 0 !== e.size && null !== e.size && (this.size = e.size), void 0 !== e.url && null !== e.url && (this.url = e.url), void 0 !== e.source && null !== e.source && (this.source = e.source), void 0 !== e.upload_duration && null !== e.upload_duration && (this.upload_duration = e.upload_duration), void 0 !== e.file_name && null !== e.file_name && (this.file_name = e.file_name), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.thumbnail_url && null !== e.thumbnail_url && (this.thumbnail_url = e.thumbnail_url), void 0 !== e.cdn_name && null !== e.cdn_name && (this.cdn_name = e.cdn_name), void 0 !== e.cdn_region && null !== e.cdn_region && (this.cdn_region = e.cdn_region), void 0 !== e.destination_region && null !== e.destination_region && (this.destination_region = e.destination_region), void 0 !== e.preview_url && null !== e.preview_url && (this.preview_url = e.preview_url), void 0 !== e.stream_public_id && null !== e.stream_public_id && (this.stream_public_id = e.stream_public_id), void 0 !== e.stream_private_id && null !== e.stream_private_id && (this.stream_private_id = e.stream_private_id), void 0 !== e.stream_ended_timestamp && null !== e.stream_ended_timestamp && (this.stream_ended_timestamp = e.stream_ended_timestamp), void 0 !== e.md5 && null !== e.md5 && (this.md5 = e.md5))
			};
			u.prototype = {}, u.prototype.write = function(e) {
				e.writeStructBegin("Media"), null !== this.width && void 0 !== this.width && (e.writeFieldBegin("width", s.Type.I64, 1), e.writeI64(this.width), e.writeFieldEnd()), null !== this.height && void 0 !== this.height && (e.writeFieldBegin("height", s.Type.I64, 2), e.writeI64(this.height), e.writeFieldEnd()), null !== this.load_time && void 0 !== this.load_time && (e.writeFieldBegin("load_time", s.Type.I64, 3), e.writeI64(this.load_time), e.writeFieldEnd()), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 4), e.writeString(this.id), e.writeFieldEnd()), null !== this.orientation && void 0 !== this.orientation && (e.writeFieldBegin("orientation", s.Type.STRING, 5), e.writeString(this.orientation), e.writeFieldEnd()), null !== this.duration && void 0 !== this.duration && (e.writeFieldBegin("duration", s.Type.I64, 6), e.writeI64(this.duration), e.writeFieldEnd()), null !== this.time && void 0 !== this.time && (e.writeFieldBegin("time", s.Type.I64, 7), e.writeI64(this.time), e.writeFieldEnd()), null !== this.pinned && void 0 !== this.pinned && (e.writeFieldBegin("pinned", s.Type.BOOL, 8), e.writeBool(this.pinned), e.writeFieldEnd()), null !== this.max_time_served && void 0 !== this.max_time_served && (e.writeFieldBegin("max_time_served", s.Type.I64, 9), e.writeI64(this.max_time_served), e.writeFieldEnd()), null !== this.mimetype && void 0 !== this.mimetype && (e.writeFieldBegin("mimetype", s.Type.STRING, 10), e.writeString(this.mimetype), e.writeFieldEnd()), null !== this.size && void 0 !== this.size && (e.writeFieldBegin("size", s.Type.I64, 11), e.writeI64(this.size), e.writeFieldEnd()), null !== this.url && void 0 !== this.url && (e.writeFieldBegin("url", s.Type.STRING, 12), e.writeString(this.url), e.writeFieldEnd()), null !== this.source && void 0 !== this.source && (e.writeFieldBegin("source", s.Type.STRING, 13), e.writeString(this.source), e.writeFieldEnd()), null !== this.upload_duration && void 0 !== this.upload_duration && (e.writeFieldBegin("upload_duration", s.Type.I64, 14), e.writeI64(this.upload_duration), e.writeFieldEnd()), null !== this.file_name && void 0 !== this.file_name && (e.writeFieldBegin("file_name", s.Type.STRING, 15), e.writeString(this.file_name), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 16), e.writeString(this.type), e.writeFieldEnd()), null !== this.thumbnail_url && void 0 !== this.thumbnail_url && (e.writeFieldBegin("thumbnail_url", s.Type.STRING, 17), e.writeString(this.thumbnail_url), e.writeFieldEnd()), null !== this.cdn_name && void 0 !== this.cdn_name && (e.writeFieldBegin("cdn_name", s.Type.STRING, 18), e.writeString(this.cdn_name), e.writeFieldEnd()), null !== this.cdn_region && void 0 !== this.cdn_region && (e.writeFieldBegin("cdn_region", s.Type.STRING, 19), e.writeString(this.cdn_region), e.writeFieldEnd()), null !== this.destination_region && void 0 !== this.destination_region && (e.writeFieldBegin("destination_region", s.Type.STRING, 20), e.writeString(this.destination_region), e.writeFieldEnd()), null !== this.preview_url && void 0 !== this.preview_url && (e.writeFieldBegin("preview_url", s.Type.STRING, 21), e.writeString(this.preview_url), e.writeFieldEnd()), null !== this.stream_public_id && void 0 !== this.stream_public_id && (e.writeFieldBegin("stream_public_id", s.Type.STRING, 22), e.writeString(this.stream_public_id), e.writeFieldEnd()), null !== this.stream_private_id && void 0 !== this.stream_private_id && (e.writeFieldBegin("stream_private_id", s.Type.STRING, 23), e.writeString(this.stream_private_id), e.writeFieldEnd()), null !== this.stream_ended_timestamp && void 0 !== this.stream_ended_timestamp && (e.writeFieldBegin("stream_ended_timestamp", s.Type.I64, 24), e.writeI64(this.stream_ended_timestamp), e.writeFieldEnd()), null !== this.md5 && void 0 !== this.md5 && (e.writeFieldBegin("md5", s.Type.STRING, 25), e.writeString(this.md5), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var c = e.exports.PostComposer = function(e) {
				this.type = null, this.input_type = null, this.text_type = null, this.final_status = null, this.editor_mode = null, this.post_scheduled = null, this.submit_scheduled_timestamp = null, e && (void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.input_type && null !== e.input_type && (this.input_type = e.input_type), void 0 !== e.text_type && null !== e.text_type && (this.text_type = e.text_type), void 0 !== e.final_status && null !== e.final_status && (this.final_status = e.final_status), void 0 !== e.editor_mode && null !== e.editor_mode && (this.editor_mode = e.editor_mode), void 0 !== e.post_scheduled && null !== e.post_scheduled && (this.post_scheduled = e.post_scheduled), void 0 !== e.submit_scheduled_timestamp && null !== e.submit_scheduled_timestamp && (this.submit_scheduled_timestamp = e.submit_scheduled_timestamp))
			};
			c.prototype = {}, c.prototype.write = function(e) {
				e.writeStructBegin("PostComposer"), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 1), e.writeString(this.type), e.writeFieldEnd()), null !== this.input_type && void 0 !== this.input_type && (e.writeFieldBegin("input_type", s.Type.STRING, 2), e.writeString(this.input_type), e.writeFieldEnd()), null !== this.text_type && void 0 !== this.text_type && (e.writeFieldBegin("text_type", s.Type.STRING, 3), e.writeString(this.text_type), e.writeFieldEnd()), null !== this.final_status && void 0 !== this.final_status && (e.writeFieldBegin("final_status", s.Type.STRING, 4), e.writeString(this.final_status), e.writeFieldEnd()), null !== this.editor_mode && void 0 !== this.editor_mode && (e.writeFieldBegin("editor_mode", s.Type.STRING, 5), e.writeString(this.editor_mode), e.writeFieldEnd()), null !== this.post_scheduled && void 0 !== this.post_scheduled && (e.writeFieldBegin("post_scheduled", s.Type.BOOL, 6), e.writeBool(this.post_scheduled), e.writeFieldEnd()), null !== this.submit_scheduled_timestamp && void 0 !== this.submit_scheduled_timestamp && (e.writeFieldBegin("submit_scheduled_timestamp", s.Type.I64, 7), e.writeI64(this.submit_scheduled_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var m = e.exports.Onboarding = function(e) {
				this.id = null, this.action_source = null, this.process_notes = null, this.number_subreddits_selected = null, this.subreddits_selected = null, this.user_name = null, this.recommended_user_name = null, this.start_timestamp = null, this.end_timestamp = null, this.category_position = null, this.category_name = null, this.subreddit_name = null, this.subreddit_position = null, this.subreddit_is_selected = null, this.subreddits_already_selected = null, this.successful = null, this.semantic_version = null, this.landing_page = null, this.valid_email_submitted = null, this.pre_selected = null, this.passed_captcha = null, this.captcha_num_screens = null, this.personalized_subreddits = null, this.similar_subreddits = null, this.number_subreddits = null, this.is_similar_subreddit = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.action_source && null !== e.action_source && (this.action_source = e.action_source), void 0 !== e.process_notes && null !== e.process_notes && (this.process_notes = e.process_notes), void 0 !== e.number_subreddits_selected && null !== e.number_subreddits_selected && (this.number_subreddits_selected = e.number_subreddits_selected), void 0 !== e.subreddits_selected && null !== e.subreddits_selected && (this.subreddits_selected = s.copyList(e.subreddits_selected, [null])), void 0 !== e.user_name && null !== e.user_name && (this.user_name = e.user_name), void 0 !== e.recommended_user_name && null !== e.recommended_user_name && (this.recommended_user_name = e.recommended_user_name), void 0 !== e.start_timestamp && null !== e.start_timestamp && (this.start_timestamp = e.start_timestamp), void 0 !== e.end_timestamp && null !== e.end_timestamp && (this.end_timestamp = e.end_timestamp), void 0 !== e.category_position && null !== e.category_position && (this.category_position = e.category_position), void 0 !== e.category_name && null !== e.category_name && (this.category_name = e.category_name), void 0 !== e.subreddit_name && null !== e.subreddit_name && (this.subreddit_name = e.subreddit_name), void 0 !== e.subreddit_position && null !== e.subreddit_position && (this.subreddit_position = e.subreddit_position), void 0 !== e.subreddit_is_selected && null !== e.subreddit_is_selected && (this.subreddit_is_selected = e.subreddit_is_selected), void 0 !== e.subreddits_already_selected && null !== e.subreddits_already_selected && (this.subreddits_already_selected = e.subreddits_already_selected), void 0 !== e.successful && null !== e.successful && (this.successful = e.successful), void 0 !== e.semantic_version && null !== e.semantic_version && (this.semantic_version = e.semantic_version), void 0 !== e.landing_page && null !== e.landing_page && (this.landing_page = e.landing_page), void 0 !== e.valid_email_submitted && null !== e.valid_email_submitted && (this.valid_email_submitted = e.valid_email_submitted), void 0 !== e.pre_selected && null !== e.pre_selected && (this.pre_selected = e.pre_selected), void 0 !== e.passed_captcha && null !== e.passed_captcha && (this.passed_captcha = e.passed_captcha), void 0 !== e.captcha_num_screens && null !== e.captcha_num_screens && (this.captcha_num_screens = e.captcha_num_screens), void 0 !== e.personalized_subreddits && null !== e.personalized_subreddits && (this.personalized_subreddits = e.personalized_subreddits), void 0 !== e.similar_subreddits && null !== e.similar_subreddits && (this.similar_subreddits = s.copyList(e.similar_subreddits, [null])), void 0 !== e.number_subreddits && null !== e.number_subreddits && (this.number_subreddits = e.number_subreddits), void 0 !== e.is_similar_subreddit && null !== e.is_similar_subreddit && (this.is_similar_subreddit = e.is_similar_subreddit))
			};
			m.prototype = {}, m.prototype.write = function(e) {
				if (e.writeStructBegin("Onboarding"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.action_source && void 0 !== this.action_source && (e.writeFieldBegin("action_source", s.Type.STRING, 6), e.writeString(this.action_source), e.writeFieldEnd()), null !== this.process_notes && void 0 !== this.process_notes && (e.writeFieldBegin("process_notes", s.Type.STRING, 7), e.writeString(this.process_notes), e.writeFieldEnd()), null !== this.number_subreddits_selected && void 0 !== this.number_subreddits_selected && (e.writeFieldBegin("number_subreddits_selected", s.Type.I64, 8), e.writeI64(this.number_subreddits_selected), e.writeFieldEnd()), null !== this.subreddits_selected && void 0 !== this.subreddits_selected) {
					for (var t in e.writeFieldBegin("subreddits_selected", s.Type.LIST, 9), e.writeListBegin(s.Type.STRING, this.subreddits_selected.length), this.subreddits_selected) this.subreddits_selected.hasOwnProperty(t) && (t = this.subreddits_selected[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.user_name && void 0 !== this.user_name && (e.writeFieldBegin("user_name", s.Type.STRING, 10), e.writeString(this.user_name), e.writeFieldEnd()), null !== this.recommended_user_name && void 0 !== this.recommended_user_name && (e.writeFieldBegin("recommended_user_name", s.Type.BOOL, 11), e.writeBool(this.recommended_user_name), e.writeFieldEnd()), null !== this.start_timestamp && void 0 !== this.start_timestamp && (e.writeFieldBegin("start_timestamp", s.Type.I64, 12), e.writeI64(this.start_timestamp), e.writeFieldEnd()), null !== this.end_timestamp && void 0 !== this.end_timestamp && (e.writeFieldBegin("end_timestamp", s.Type.I64, 13), e.writeI64(this.end_timestamp), e.writeFieldEnd()), null !== this.category_position && void 0 !== this.category_position && (e.writeFieldBegin("category_position", s.Type.I64, 14), e.writeI64(this.category_position), e.writeFieldEnd()), null !== this.category_name && void 0 !== this.category_name && (e.writeFieldBegin("category_name", s.Type.STRING, 15), e.writeString(this.category_name), e.writeFieldEnd()), null !== this.subreddit_name && void 0 !== this.subreddit_name && (e.writeFieldBegin("subreddit_name", s.Type.STRING, 16), e.writeString(this.subreddit_name), e.writeFieldEnd()), null !== this.subreddit_position && void 0 !== this.subreddit_position && (e.writeFieldBegin("subreddit_position", s.Type.I64, 17), e.writeI64(this.subreddit_position), e.writeFieldEnd()), null !== this.subreddit_is_selected && void 0 !== this.subreddit_is_selected && (e.writeFieldBegin("subreddit_is_selected", s.Type.BOOL, 18), e.writeBool(this.subreddit_is_selected), e.writeFieldEnd()), null !== this.subreddits_already_selected && void 0 !== this.subreddits_already_selected && (e.writeFieldBegin("subreddits_already_selected", s.Type.I64, 19), e.writeI64(this.subreddits_already_selected), e.writeFieldEnd()), null !== this.successful && void 0 !== this.successful && (e.writeFieldBegin("successful", s.Type.BOOL, 20), e.writeBool(this.successful), e.writeFieldEnd()), null !== this.semantic_version && void 0 !== this.semantic_version && (e.writeFieldBegin("semantic_version", s.Type.STRING, 21), e.writeString(this.semantic_version), e.writeFieldEnd()), null !== this.landing_page && void 0 !== this.landing_page && (e.writeFieldBegin("landing_page", s.Type.STRING, 22), e.writeString(this.landing_page), e.writeFieldEnd()), null !== this.valid_email_submitted && void 0 !== this.valid_email_submitted && (e.writeFieldBegin("valid_email_submitted", s.Type.BOOL, 23), e.writeBool(this.valid_email_submitted), e.writeFieldEnd()), null !== this.pre_selected && void 0 !== this.pre_selected && (e.writeFieldBegin("pre_selected", s.Type.BOOL, 24), e.writeBool(this.pre_selected), e.writeFieldEnd()), null !== this.passed_captcha && void 0 !== this.passed_captcha && (e.writeFieldBegin("passed_captcha", s.Type.BOOL, 25), e.writeBool(this.passed_captcha), e.writeFieldEnd()), null !== this.captcha_num_screens && void 0 !== this.captcha_num_screens && (e.writeFieldBegin("captcha_num_screens", s.Type.I64, 26), e.writeI64(this.captcha_num_screens), e.writeFieldEnd()), null !== this.personalized_subreddits && void 0 !== this.personalized_subreddits && (e.writeFieldBegin("personalized_subreddits", s.Type.I64, 27), e.writeI64(this.personalized_subreddits), e.writeFieldEnd()), null !== this.similar_subreddits && void 0 !== this.similar_subreddits) {
					for (var i in e.writeFieldBegin("similar_subreddits", s.Type.LIST, 28), e.writeListBegin(s.Type.STRING, this.similar_subreddits.length), this.similar_subreddits) this.similar_subreddits.hasOwnProperty(i) && (i = this.similar_subreddits[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.number_subreddits && void 0 !== this.number_subreddits && (e.writeFieldBegin("number_subreddits", s.Type.I64, 29), e.writeI64(this.number_subreddits), e.writeFieldEnd()), null !== this.is_similar_subreddit && void 0 !== this.is_similar_subreddit && (e.writeFieldBegin("is_similar_subreddit", s.Type.BOOL, 30), e.writeBool(this.is_similar_subreddit), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var h = e.exports.DiscoveryUnit = function(e) {
				if (this.type = null, this.id = null, this.title = null, this.name = null, this.items = null, e) {
					if (void 0 === e.type || null === e.type) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field type is unset!");
					if (this.type = e.type, void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
					if (this.id = e.id, void 0 !== e.title && null !== e.title && (this.title = e.title), void 0 === e.name || null === e.name) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field name is unset!");
					this.name = e.name, void 0 !== e.items && null !== e.items && (this.items = s.copyList(e.items, [null]))
				}
			};
			h.prototype = {}, h.prototype.write = function(e) {
				if (e.writeStructBegin("DiscoveryUnit"), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 9), e.writeString(this.id), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", s.Type.STRING, 10), e.writeString(this.title), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 11), e.writeString(this.name), e.writeFieldEnd()), null !== this.items && void 0 !== this.items) {
					for (var t in e.writeFieldBegin("items", s.Type.LIST, 12), e.writeListBegin(s.Type.STRING, this.items.length), this.items) this.items.hasOwnProperty(t) && (t = this.items[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			};
			var p = e.exports.Message = function(e) {
				if (this.id = null, this.recipient_id = null, this.recipient_type = null, this.sender_type = null, this.body = null, this.subject = null, this.created_timestamp = null, this.first_message_id = null, this.parent_message_id = null, this.source_page = null, this.filtered_by_recipient = null, this.type = null, e) {
					if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
					this.id = e.id, void 0 !== e.recipient_id && null !== e.recipient_id && (this.recipient_id = e.recipient_id), void 0 !== e.recipient_type && null !== e.recipient_type && (this.recipient_type = e.recipient_type), void 0 !== e.sender_type && null !== e.sender_type && (this.sender_type = e.sender_type), void 0 !== e.body && null !== e.body && (this.body = e.body), void 0 !== e.subject && null !== e.subject && (this.subject = e.subject), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.first_message_id && null !== e.first_message_id && (this.first_message_id = e.first_message_id), void 0 !== e.parent_message_id && null !== e.parent_message_id && (this.parent_message_id = e.parent_message_id), void 0 !== e.source_page && null !== e.source_page && (this.source_page = e.source_page), void 0 !== e.filtered_by_recipient && null !== e.filtered_by_recipient && (this.filtered_by_recipient = e.filtered_by_recipient), void 0 !== e.type && null !== e.type && (this.type = e.type)
				}
			};
			p.prototype = {}, p.prototype.write = function(e) {
				e.writeStructBegin("Message"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.recipient_id && void 0 !== this.recipient_id && (e.writeFieldBegin("recipient_id", s.Type.STRING, 2), e.writeString(this.recipient_id), e.writeFieldEnd()), null !== this.recipient_type && void 0 !== this.recipient_type && (e.writeFieldBegin("recipient_type", s.Type.STRING, 3), e.writeString(this.recipient_type), e.writeFieldEnd()), null !== this.sender_type && void 0 !== this.sender_type && (e.writeFieldBegin("sender_type", s.Type.STRING, 4), e.writeString(this.sender_type), e.writeFieldEnd()), null !== this.body && void 0 !== this.body && (e.writeFieldBegin("body", s.Type.STRING, 5), e.writeString(this.body), e.writeFieldEnd()), null !== this.subject && void 0 !== this.subject && (e.writeFieldBegin("subject", s.Type.STRING, 6), e.writeString(this.subject), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", s.Type.I64, 7), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.first_message_id && void 0 !== this.first_message_id && (e.writeFieldBegin("first_message_id", s.Type.STRING, 8), e.writeString(this.first_message_id), e.writeFieldEnd()), null !== this.parent_message_id && void 0 !== this.parent_message_id && (e.writeFieldBegin("parent_message_id", s.Type.STRING, 9), e.writeString(this.parent_message_id), e.writeFieldEnd()), null !== this.source_page && void 0 !== this.source_page && (e.writeFieldBegin("source_page", s.Type.STRING, 10), e.writeString(this.source_page), e.writeFieldEnd()), null !== this.filtered_by_recipient && void 0 !== this.filtered_by_recipient && (e.writeFieldBegin("filtered_by_recipient", s.Type.BOOL, 11), e.writeBool(this.filtered_by_recipient), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 12), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var _ = e.exports.News = function(e) {
				this.topic_id = null, this.topic_name = null, this.subtopic_id = null, this.subtopic_name = null, e && (void 0 !== e.topic_id && null !== e.topic_id && (this.topic_id = e.topic_id), void 0 !== e.topic_name && null !== e.topic_name && (this.topic_name = e.topic_name), void 0 !== e.subtopic_id && null !== e.subtopic_id && (this.subtopic_id = e.subtopic_id), void 0 !== e.subtopic_name && null !== e.subtopic_name && (this.subtopic_name = e.subtopic_name))
			};
			_.prototype = {}, _.prototype.write = function(e) {
				e.writeStructBegin("News"), null !== this.topic_id && void 0 !== this.topic_id && (e.writeFieldBegin("topic_id", s.Type.STRING, 1), e.writeString(this.topic_id), e.writeFieldEnd()), null !== this.topic_name && void 0 !== this.topic_name && (e.writeFieldBegin("topic_name", s.Type.STRING, 2), e.writeString(this.topic_name), e.writeFieldEnd()), null !== this.subtopic_id && void 0 !== this.subtopic_id && (e.writeFieldBegin("subtopic_id", s.Type.STRING, 3), e.writeString(this.subtopic_id), e.writeFieldEnd()), null !== this.subtopic_name && void 0 !== this.subtopic_name && (e.writeFieldBegin("subtopic_name", s.Type.STRING, 4), e.writeString(this.subtopic_name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var g = e.exports.Edit = function(e) {
				this.previous_body_text = null, e && void 0 !== e.previous_body_text && null !== e.previous_body_text && (this.previous_body_text = e.previous_body_text)
			};
			g.prototype = {}, g.prototype.write = function(e) {
				e.writeStructBegin("Edit"), null !== this.previous_body_text && void 0 !== this.previous_body_text && (e.writeFieldBegin("previous_body_text", s.Type.STRING, 1), e.writeString(this.previous_body_text), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var w = e.exports.PostEvent = function(e) {
				this.type = null, this.event_state = null, this.event_start_timestamp = null, this.event_end_timestamp = null, e && (void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.event_state && null !== e.event_state && (this.event_state = e.event_state), void 0 !== e.event_start_timestamp && null !== e.event_start_timestamp && (this.event_start_timestamp = e.event_start_timestamp), void 0 !== e.event_end_timestamp && null !== e.event_end_timestamp && (this.event_end_timestamp = e.event_end_timestamp))
			};
			w.prototype = {}, w.prototype.write = function(e) {
				e.writeStructBegin("PostEvent"), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 1), e.writeString(this.type), e.writeFieldEnd()), null !== this.event_state && void 0 !== this.event_state && (e.writeFieldBegin("event_state", s.Type.STRING, 2), e.writeString(this.event_state), e.writeFieldEnd()), null !== this.event_start_timestamp && void 0 !== this.event_start_timestamp && (e.writeFieldBegin("event_start_timestamp", s.Type.I64, 3), e.writeI64(this.event_start_timestamp), e.writeFieldEnd()), null !== this.event_end_timestamp && void 0 !== this.event_end_timestamp && (e.writeFieldBegin("event_end_timestamp", s.Type.I64, 4), e.writeI64(this.event_end_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var y = e.exports.PostCollection = function(e) {
				this.id = null, this.title = null, this.author_id = null, this.post_ids = null, this.display_layout = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.title && null !== e.title && (this.title = e.title), void 0 !== e.author_id && null !== e.author_id && (this.author_id = e.author_id), void 0 !== e.post_ids && null !== e.post_ids && (this.post_ids = s.copyList(e.post_ids, [null])), void 0 !== e.display_layout && null !== e.display_layout && (this.display_layout = e.display_layout))
			};
			y.prototype = {}, y.prototype.write = function(e) {
				if (e.writeStructBegin("PostCollection"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", s.Type.STRING, 2), e.writeString(this.title), e.writeFieldEnd()), null !== this.author_id && void 0 !== this.author_id && (e.writeFieldBegin("author_id", s.Type.STRING, 4), e.writeString(this.author_id), e.writeFieldEnd()), null !== this.post_ids && void 0 !== this.post_ids) {
					for (var t in e.writeFieldBegin("post_ids", s.Type.LIST, 5), e.writeListBegin(s.Type.STRING, this.post_ids.length), this.post_ids) this.post_ids.hasOwnProperty(t) && (t = this.post_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.display_layout && void 0 !== this.display_layout && (e.writeFieldBegin("display_layout", s.Type.STRING, 6), e.writeString(this.display_layout), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var v = e.exports.Vote = function(e) {
				this.affects_karma = null, this.affects_score = null, e && (void 0 !== e.affects_karma && null !== e.affects_karma && (this.affects_karma = e.affects_karma), void 0 !== e.affects_score && null !== e.affects_score && (this.affects_score = e.affects_score))
			};
			v.prototype = {}, v.prototype.write = function(e) {
				e.writeStructBegin("Vote"), null !== this.affects_karma && void 0 !== this.affects_karma && (e.writeFieldBegin("affects_karma", s.Type.BOOL, 1), e.writeBool(this.affects_karma), e.writeFieldEnd()), null !== this.affects_score && void 0 !== this.affects_score && (e.writeFieldBegin("affects_score", s.Type.BOOL, 2), e.writeBool(this.affects_score), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/crawler_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Crawler = function(e) {
					this.name = null, e && void 0 !== e.name && null !== e.name && (this.name = e.name)
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Crawler"), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 1), e.writeString(this.name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/crowd_control_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.CrowdControl = function(e) {
					this.collapse_reasons = null, this.rating_threshold = null, e && (void 0 !== e.collapse_reasons && null !== e.collapse_reasons && (this.collapse_reasons = s.copyList(e.collapse_reasons, [null])), void 0 !== e.rating_threshold && null !== e.rating_threshold && (this.rating_threshold = e.rating_threshold))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("CrowdControl"), null !== this.collapse_reasons && void 0 !== this.collapse_reasons) {
					for (var t in e.writeFieldBegin("collapse_reasons", s.Type.LIST, 1), e.writeListBegin(s.Type.STRING, this.collapse_reasons.length), this.collapse_reasons) this.collapse_reasons.hasOwnProperty(t) && (t = this.collapse_reasons[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.rating_threshold && void 0 !== this.rating_threshold && (e.writeFieldBegin("rating_threshold", s.Type.STRING, 2), e.writeString(this.rating_threshold), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/custom_feed_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.CustomFeed = function(e) {
					this.id = null, this.owner_id = null, this.number_subreddits = null, this.number_followers = null, this.is_nsfw = null, this.cover_art_url = null, this.visibility = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.owner_id && null !== e.owner_id && (this.owner_id = e.owner_id), void 0 !== e.number_subreddits && null !== e.number_subreddits && (this.number_subreddits = e.number_subreddits), void 0 !== e.number_followers && null !== e.number_followers && (this.number_followers = e.number_followers), void 0 !== e.is_nsfw && null !== e.is_nsfw && (this.is_nsfw = e.is_nsfw), void 0 !== e.cover_art_url && null !== e.cover_art_url && (this.cover_art_url = e.cover_art_url), void 0 !== e.visibility && null !== e.visibility && (this.visibility = e.visibility))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("CustomFeed"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.owner_id && void 0 !== this.owner_id && (e.writeFieldBegin("owner_id", s.Type.STRING, 2), e.writeString(this.owner_id), e.writeFieldEnd()), null !== this.number_subreddits && void 0 !== this.number_subreddits && (e.writeFieldBegin("number_subreddits", s.Type.I32, 3), e.writeI32(this.number_subreddits), e.writeFieldEnd()), null !== this.number_followers && void 0 !== this.number_followers && (e.writeFieldBegin("number_followers", s.Type.I32, 4), e.writeI32(this.number_followers), e.writeFieldEnd()), null !== this.is_nsfw && void 0 !== this.is_nsfw && (e.writeFieldBegin("is_nsfw", s.Type.BOOL, 5), e.writeBool(this.is_nsfw), e.writeFieldEnd()), null !== this.cover_art_url && void 0 !== this.cover_art_url && (e.writeFieldBegin("cover_art_url", s.Type.STRING, 6), e.writeString(this.cover_art_url), e.writeFieldEnd()), null !== this.visibility && void 0 !== this.visibility && (e.writeFieldBegin("visibility", s.Type.STRING, 7), e.writeString(this.visibility), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/device_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Screen = function(e) {
					this.width = null, this.height = null, this.viewport_width = null, this.viewport_height = null, this.view_type = null, this.theme = null, this.in_focus = null, this.browser_tab_id = null, this.scroll_position = null, this.app_font_size_delta = null, this.ios_font_size = null, this.android_font_size = null, this.auto_dark_mode = null, e && (void 0 !== e.width && null !== e.width && (this.width = e.width), void 0 !== e.height && null !== e.height && (this.height = e.height), void 0 !== e.viewport_width && null !== e.viewport_width && (this.viewport_width = e.viewport_width), void 0 !== e.viewport_height && null !== e.viewport_height && (this.viewport_height = e.viewport_height), void 0 !== e.view_type && null !== e.view_type && (this.view_type = e.view_type), void 0 !== e.theme && null !== e.theme && (this.theme = e.theme), void 0 !== e.in_focus && null !== e.in_focus && (this.in_focus = e.in_focus), void 0 !== e.browser_tab_id && null !== e.browser_tab_id && (this.browser_tab_id = e.browser_tab_id), void 0 !== e.scroll_position && null !== e.scroll_position && (this.scroll_position = e.scroll_position), void 0 !== e.app_font_size_delta && null !== e.app_font_size_delta && (this.app_font_size_delta = e.app_font_size_delta), void 0 !== e.ios_font_size && null !== e.ios_font_size && (this.ios_font_size = e.ios_font_size), void 0 !== e.android_font_size && null !== e.android_font_size && (this.android_font_size = e.android_font_size), void 0 !== e.auto_dark_mode && null !== e.auto_dark_mode && (this.auto_dark_mode = e.auto_dark_mode))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Screen"), null !== this.width && void 0 !== this.width && (e.writeFieldBegin("width", s.Type.I32, 1), e.writeI32(this.width), e.writeFieldEnd()), null !== this.height && void 0 !== this.height && (e.writeFieldBegin("height", s.Type.I32, 2), e.writeI32(this.height), e.writeFieldEnd()), null !== this.viewport_width && void 0 !== this.viewport_width && (e.writeFieldBegin("viewport_width", s.Type.I32, 3), e.writeI32(this.viewport_width), e.writeFieldEnd()), null !== this.viewport_height && void 0 !== this.viewport_height && (e.writeFieldBegin("viewport_height", s.Type.I32, 4), e.writeI32(this.viewport_height), e.writeFieldEnd()), null !== this.view_type && void 0 !== this.view_type && (e.writeFieldBegin("view_type", s.Type.STRING, 5), e.writeString(this.view_type), e.writeFieldEnd()), null !== this.theme && void 0 !== this.theme && (e.writeFieldBegin("theme", s.Type.STRING, 6), e.writeString(this.theme), e.writeFieldEnd()), null !== this.in_focus && void 0 !== this.in_focus && (e.writeFieldBegin("in_focus", s.Type.BOOL, 7), e.writeBool(this.in_focus), e.writeFieldEnd()), null !== this.browser_tab_id && void 0 !== this.browser_tab_id && (e.writeFieldBegin("browser_tab_id", s.Type.STRING, 8), e.writeString(this.browser_tab_id), e.writeFieldEnd()), null !== this.scroll_position && void 0 !== this.scroll_position && (e.writeFieldBegin("scroll_position", s.Type.I32, 9), e.writeI32(this.scroll_position), e.writeFieldEnd()), null !== this.app_font_size_delta && void 0 !== this.app_font_size_delta && (e.writeFieldBegin("app_font_size_delta", s.Type.I32, 10), e.writeI32(this.app_font_size_delta), e.writeFieldEnd()), null !== this.ios_font_size && void 0 !== this.ios_font_size && (e.writeFieldBegin("ios_font_size", s.Type.STRING, 11), e.writeString(this.ios_font_size), e.writeFieldEnd()), null !== this.android_font_size && void 0 !== this.android_font_size && (e.writeFieldBegin("android_font_size", s.Type.DOUBLE, 12), e.writeDouble(this.android_font_size), e.writeFieldEnd()), null !== this.auto_dark_mode && void 0 !== this.auto_dark_mode && (e.writeFieldBegin("auto_dark_mode", s.Type.STRING, 13), e.writeString(this.auto_dark_mode), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Platform = function(e) {
				this.name = null, this.device_id = null, this.device_name = null, this.os_name = null, this.os_version = null, this.browser_name = null, this.browser_version = null, this.fingerprint = null, this.fingerprint_created_timestamp = null, e && (void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.device_id && null !== e.device_id && (this.device_id = e.device_id), void 0 !== e.device_name && null !== e.device_name && (this.device_name = e.device_name), void 0 !== e.os_name && null !== e.os_name && (this.os_name = e.os_name), void 0 !== e.os_version && null !== e.os_version && (this.os_version = e.os_version), void 0 !== e.browser_name && null !== e.browser_name && (this.browser_name = e.browser_name), void 0 !== e.browser_version && null !== e.browser_version && (this.browser_version = e.browser_version), void 0 !== e.fingerprint && null !== e.fingerprint && (this.fingerprint = e.fingerprint), void 0 !== e.fingerprint_created_timestamp && null !== e.fingerprint_created_timestamp && (this.fingerprint_created_timestamp = e.fingerprint_created_timestamp))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("Platform"), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 1), e.writeString(this.name), e.writeFieldEnd()), null !== this.device_id && void 0 !== this.device_id && (e.writeFieldBegin("device_id", s.Type.STRING, 2), e.writeString(this.device_id), e.writeFieldEnd()), null !== this.device_name && void 0 !== this.device_name && (e.writeFieldBegin("device_name", s.Type.STRING, 3), e.writeString(this.device_name), e.writeFieldEnd()), null !== this.os_name && void 0 !== this.os_name && (e.writeFieldBegin("os_name", s.Type.STRING, 4), e.writeString(this.os_name), e.writeFieldEnd()), null !== this.os_version && void 0 !== this.os_version && (e.writeFieldBegin("os_version", s.Type.STRING, 5), e.writeString(this.os_version), e.writeFieldEnd()), null !== this.browser_name && void 0 !== this.browser_name && (e.writeFieldBegin("browser_name", s.Type.STRING, 6), e.writeString(this.browser_name), e.writeFieldEnd()), null !== this.browser_version && void 0 !== this.browser_version && (e.writeFieldBegin("browser_version", s.Type.STRING, 7), e.writeString(this.browser_version), e.writeFieldEnd()), null !== this.fingerprint && void 0 !== this.fingerprint && (e.writeFieldBegin("fingerprint", s.Type.STRING, 8), e.writeString(this.fingerprint), e.writeFieldEnd()), null !== this.fingerprint_created_timestamp && void 0 !== this.fingerprint_created_timestamp && (e.writeFieldBegin("fingerprint_created_timestamp", s.Type.I64, 9), e.writeI64(this.fingerprint_created_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.App = function(e) {
				if (this.version = null, this.name = null, this.install_timestamp = null, e) {
					if (void 0 !== e.version && null !== e.version && (this.version = e.version), void 0 === e.name || null === e.name) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field name is unset!");
					this.name = e.name, void 0 !== e.install_timestamp && null !== e.install_timestamp && (this.install_timestamp = e.install_timestamp)
				}
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("App"), null !== this.version && void 0 !== this.version && (e.writeFieldBegin("version", s.Type.STRING, 1), e.writeString(this.version), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.install_timestamp && void 0 !== this.install_timestamp && (e.writeFieldBegin("install_timestamp", s.Type.I64, 3), e.writeI64(this.install_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/domain_ban_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.DomainBan = function(e) {
					this.url = null, this.markdown = null, this.no_email = null, this.shame = null, this.disable_approve = null, this.ban_message = null, this.shame_message = null, this.regex = null, this.inspector_exempt_regex = null, this.submit_banned = null, e && (void 0 !== e.url && null !== e.url && (this.url = e.url), void 0 !== e.markdown && null !== e.markdown && (this.markdown = e.markdown), void 0 !== e.no_email && null !== e.no_email && (this.no_email = e.no_email), void 0 !== e.shame && null !== e.shame && (this.shame = e.shame), void 0 !== e.disable_approve && null !== e.disable_approve && (this.disable_approve = e.disable_approve), void 0 !== e.ban_message && null !== e.ban_message && (this.ban_message = e.ban_message), void 0 !== e.shame_message && null !== e.shame_message && (this.shame_message = e.shame_message), void 0 !== e.regex && null !== e.regex && (this.regex = e.regex), void 0 !== e.inspector_exempt_regex && null !== e.inspector_exempt_regex && (this.inspector_exempt_regex = e.inspector_exempt_regex), void 0 !== e.submit_banned && null !== e.submit_banned && (this.submit_banned = e.submit_banned))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("DomainBan"), null !== this.url && void 0 !== this.url && (e.writeFieldBegin("url", s.Type.STRING, 1), e.writeString(this.url), e.writeFieldEnd()), null !== this.markdown && void 0 !== this.markdown && (e.writeFieldBegin("markdown", s.Type.BOOL, 2), e.writeBool(this.markdown), e.writeFieldEnd()), null !== this.no_email && void 0 !== this.no_email && (e.writeFieldBegin("no_email", s.Type.BOOL, 3), e.writeBool(this.no_email), e.writeFieldEnd()), null !== this.shame && void 0 !== this.shame && (e.writeFieldBegin("shame", s.Type.BOOL, 4), e.writeBool(this.shame), e.writeFieldEnd()), null !== this.disable_approve && void 0 !== this.disable_approve && (e.writeFieldBegin("disable_approve", s.Type.BOOL, 5), e.writeBool(this.disable_approve), e.writeFieldEnd()), null !== this.ban_message && void 0 !== this.ban_message && (e.writeFieldBegin("ban_message", s.Type.STRING, 6), e.writeString(this.ban_message), e.writeFieldEnd()), null !== this.shame_message && void 0 !== this.shame_message && (e.writeFieldBegin("shame_message", s.Type.STRING, 7), e.writeString(this.shame_message), e.writeFieldEnd()), null !== this.regex && void 0 !== this.regex && (e.writeFieldBegin("regex", s.Type.STRING, 8), e.writeString(this.regex), e.writeFieldEnd()), null !== this.inspector_exempt_regex && void 0 !== this.inspector_exempt_regex && (e.writeFieldBegin("inspector_exempt_regex", s.Type.STRING, 9), e.writeString(this.inspector_exempt_regex), e.writeFieldEnd()), null !== this.submit_banned && void 0 !== this.submit_banned && (e.writeFieldBegin("submit_banned", s.Type.BOOL, 10), e.writeBool(this.submit_banned), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/email_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Email = function(e) {
					this.subject_line = null, this.preview_text = null, this.type = null, this.header_text = null, this.post_has_thumbnail = null, this.listing_source = null, e && (void 0 !== e.subject_line && null !== e.subject_line && (this.subject_line = e.subject_line), void 0 !== e.preview_text && null !== e.preview_text && (this.preview_text = e.preview_text), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.header_text && null !== e.header_text && (this.header_text = e.header_text), void 0 !== e.post_has_thumbnail && null !== e.post_has_thumbnail && (this.post_has_thumbnail = e.post_has_thumbnail), void 0 !== e.listing_source && null !== e.listing_source && (this.listing_source = e.listing_source))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Email"), null !== this.subject_line && void 0 !== this.subject_line && (e.writeFieldBegin("subject_line", s.Type.STRING, 1), e.writeString(this.subject_line), e.writeFieldEnd()), null !== this.preview_text && void 0 !== this.preview_text && (e.writeFieldBegin("preview_text", s.Type.STRING, 2), e.writeString(this.preview_text), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 3), e.writeString(this.type), e.writeFieldEnd()), null !== this.header_text && void 0 !== this.header_text && (e.writeFieldBegin("header_text", s.Type.STRING, 4), e.writeString(this.header_text), e.writeFieldEnd()), null !== this.post_has_thumbnail && void 0 !== this.post_has_thumbnail && (e.writeFieldBegin("post_has_thumbnail", s.Type.BOOL, 5), e.writeBool(this.post_has_thumbnail), e.writeFieldEnd()), null !== this.listing_source && void 0 !== this.listing_source && (e.writeFieldBegin("listing_source", s.Type.STRING, 6), e.writeString(this.listing_source), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/event_types.js": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/action_types.js")),
				o = i("./src/telemetry/eventSchemas/adevent_types.js"),
				d = i("./src/telemetry/eventSchemas/brand_types.js"),
				l = i("./src/telemetry/eventSchemas/category_header_types.js"),
				a = i("./src/telemetry/eventSchemas/content_types.js"),
				u = i("./src/telemetry/eventSchemas/device_types.js"),
				c = i("./src/telemetry/eventSchemas/request_types.js"),
				m = i("./src/telemetry/eventSchemas/session_types.js"),
				h = i("./src/telemetry/eventSchemas/subreddit_types.js"),
				p = i("./src/telemetry/eventSchemas/timer_types.js"),
				_ = (i("./src/telemetry/eventSchemas/typedefs_types.js"), i("./src/telemetry/eventSchemas/user_types.js")),
				g = i("./src/telemetry/eventSchemas/chat_types.js"),
				w = i("./src/telemetry/eventSchemas/security_types.js"),
				y = i("./src/telemetry/eventSchemas/midas_types.js"),
				v = i("./src/telemetry/eventSchemas/experiment_types.js"),
				f = i("./src/telemetry/eventSchemas/notification_types.js"),
				b = i("./src/telemetry/eventSchemas/search_types.js"),
				T = i("./src/telemetry/eventSchemas/admin_types.js"),
				S = i("./src/telemetry/eventSchemas/admin_action_types.js"),
				F = i("./src/telemetry/eventSchemas/ticket_types.js"),
				E = i("./src/telemetry/eventSchemas/gold_types.js"),
				I = i("./src/telemetry/eventSchemas/payment_types.js"),
				B = i("./src/telemetry/eventSchemas/outbound_types.js"),
				R = i("./src/telemetry/eventSchemas/carousel_types.js"),
				x = i("./src/telemetry/eventSchemas/adblock_types.js"),
				C = i("./src/telemetry/eventSchemas/email_types.js"),
				k = i("./src/telemetry/eventSchemas/metaflair_types.js"),
				O = i("./src/telemetry/eventSchemas/grapeshot_classification_types.js"),
				N = i("./src/telemetry/eventSchemas/post_draft_types.js"),
				j = i("./src/telemetry/eventSchemas/setting_types.js"),
				P = i("./src/telemetry/eventSchemas/visibility_types.js"),
				A = i("./src/telemetry/eventSchemas/webhook_types.js"),
				L = i("./src/telemetry/eventSchemas/relevance_types.js"),
				D = i("./src/telemetry/eventSchemas/report_types.js"),
				G = i("./src/telemetry/eventSchemas/metasearch_types.js"),
				M = i("./src/telemetry/eventSchemas/postflair_types.js"),
				U = i("./src/telemetry/eventSchemas/thirdpartybadge_types.js"),
				q = i("./src/telemetry/eventSchemas/banner_types.js"),
				W = i("./src/telemetry/eventSchemas/tooltip_types.js"),
				z = i("./src/telemetry/eventSchemas/upload_types.js"),
				H = i("./src/telemetry/eventSchemas/live_thread_types.js"),
				V = i("./src/telemetry/eventSchemas/popup_types.js"),
				Y = i("./src/telemetry/eventSchemas/moderator_types.js"),
				K = i("./src/telemetry/eventSchemas/userflair_types.js"),
				Q = i("./src/telemetry/eventSchemas/topic_tag_types.js"),
				J = i("./src/telemetry/eventSchemas/res_types.js"),
				X = (i("./src/telemetry/eventSchemas/adtypedefs_types.js"), i("./src/telemetry/eventSchemas/adcampaign_types.js")),
				Z = i("./src/telemetry/eventSchemas/ad_types.js"),
				$ = i("./src/telemetry/eventSchemas/adgroup_types.js"),
				ee = i("./src/telemetry/eventSchemas/adtargeting_types.js"),
				te = i("./src/telemetry/eventSchemas/businessinfo_types.js"),
				ie = i("./src/telemetry/eventSchemas/billinginfo_types.js"),
				ne = i("./src/telemetry/eventSchemas/crawler_types.js"),
				se = i("./src/telemetry/eventSchemas/custom_feed_types.js"),
				re = i("./src/telemetry/eventSchemas/pwa_types.js"),
				oe = i("./src/telemetry/eventSchemas/seo_types.js"),
				de = i("./src/telemetry/eventSchemas/funding_instrument_types.js"),
				le = i("./src/telemetry/eventSchemas/perspective_types.js"),
				ae = i("./src/telemetry/eventSchemas/comment_draft_types.js"),
				ue = i("./src/telemetry/eventSchemas/ml_model_types.js"),
				ce = i("./src/telemetry/eventSchemas/topic_metadata_types.js"),
				me = i("./src/telemetry/eventSchemas/domain_ban_types.js"),
				he = i("./src/telemetry/eventSchemas/legal_export_request_types.js"),
				pe = i("./src/telemetry/eventSchemas/post_requirement_types.js"),
				_e = i("./src/telemetry/eventSchemas/target_ip_types.js"),
				ge = i("./src/telemetry/eventSchemas/crowd_control_types.js"),
				we = i("./src/telemetry/eventSchemas/scheduled_post_types.js"),
				ye = i("./src/telemetry/eventSchemas/poll_types.js"),
				ve = i("./src/telemetry/eventSchemas/audit_types.js"),
				fe = e.exports = {},
				be = e.exports.Event = function(e) {
					if (this.source = null, this.action = null, this.noun = null, this.endpoint_timestamp = null, this.client_timestamp = null, this.uuid = null, this.utc_offset = null, this.correlation_id = null, this.screenview_id = null, this.post = null, this.listing = null, this.comment = null, this.notification = null, this.oauth = null, this.screen = null, this.app = null, this.platform = null, this.request = null, this.referrer = null, this.dom_timer = null, this.user = null, this.user_preferences = null, this.subreddit = null, this.session = null, this.action_info = null, this.expand = null, this.media = null, this.chat = null, this.post_composer = null, this.widget = null, this.profile = null, this.onboarding = null, this.timer = null, this.tfa = null, this.api_response = null, this.api = null, this.discovery_unit = null, this.experiment = null, this.share = null, this.user_subreddit = null, this.notification_request = null, this.search = null, this.message = null, this.admin = null, this.ticket = null, this.mailroom_request = null, this.comment_composer = null, this.gold_purchase = null, this.payment = null, this.news = null, this.outbound = null, this.click_test = null, this.carousel = null, this.adblock = null, this.email = null, this.metaflair = null, this.post_draft = null, this.setting = null, this.visibility = null, this.webhook = null, this.relevance_model = null, this.meta_search = null, this.post_flair = null, this.admin_action = null, this.zipkin = null, this.edit = null, this.post_event = null, this.post_collection = null, this.third_party_badge = null, this.brand = null, this.messenger_request = null, this.banner = null, this.tooltip = null, this.upload = null, this.csai_media = null, this.category_header = null, this.report = null, this.live_thread = null, this.ad_request = null, this.ad_decision = null, this.ad_push = null, this.vote = null, this.popup = null, this.mod_action = null, this.user_flair = null, this.topic_tag = null, this.res = null, this.ad = null, this.ad_campaign = null, this.ad_group = null, this.ad_targeting = null, this.business_info = null, this.billing_info = null, this.reddar_ticket = null, this.zendesk_ticket = null, this.target_user = null, this.crawler = null, this.response = null, this.custom_feed = null, this.pwa = null, this.seo = null, this.ncmec_report = null, this.funding_instrument = null, this.grapeshot_classification = null, this.perspective = null, this.comment_draft = null, this.target_post = null, this.ml_model = null, this.topic_metadata = null, this.chat_home_feed_boosting = null, this.domain_ban = null, this.legal_export_request = null, this.post_requirement = null, this.target_ip = null, this.crowd_control = null, this.reddar_ticket_content = null, this.scheduled_post = null, this.poll = null, this.reddar_audit = null, this.reddar_audit_ticket = null, this.target_subreddit = null, this.geo = null, this.user_legacy_id = null, this.content_metadata = null, this.url_parsed = null, this.link_sharing = null, this.create_request_timestamp = null, this.inferred = null, this.event_hmac_key = null, e) {
						if (void 0 === e.source || null === e.source) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field source is unset!");
						if (this.source = e.source, void 0 === e.action || null === e.action) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field action is unset!");
						if (this.action = e.action, void 0 === e.noun || null === e.noun) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field noun is unset!");
						if (this.noun = e.noun, void 0 !== e.endpoint_timestamp && null !== e.endpoint_timestamp && (this.endpoint_timestamp = e.endpoint_timestamp), void 0 === e.client_timestamp || null === e.client_timestamp) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field client_timestamp is unset!");
						if (this.client_timestamp = e.client_timestamp, void 0 === e.uuid || null === e.uuid) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field uuid is unset!");
						this.uuid = e.uuid, void 0 !== e.utc_offset && null !== e.utc_offset && (this.utc_offset = e.utc_offset), void 0 !== e.correlation_id && null !== e.correlation_id && (this.correlation_id = e.correlation_id), void 0 !== e.screenview_id && null !== e.screenview_id && (this.screenview_id = e.screenview_id), void 0 !== e.post && null !== e.post && (this.post = new a.Post(e.post)), void 0 !== e.listing && null !== e.listing && (this.listing = new a.Listing(e.listing)), void 0 !== e.comment && null !== e.comment && (this.comment = new a.Comment(e.comment)), void 0 !== e.notification && null !== e.notification && (this.notification = new a.Notification(e.notification)), void 0 !== e.oauth && null !== e.oauth && (this.oauth = new c.Oauth(e.oauth)), void 0 !== e.screen && null !== e.screen && (this.screen = new u.Screen(e.screen)), void 0 !== e.app && null !== e.app && (this.app = new u.App(e.app)), void 0 !== e.platform && null !== e.platform && (this.platform = new u.Platform(e.platform)), void 0 !== e.request && null !== e.request && (this.request = new c.Request(e.request)), void 0 !== e.referrer && null !== e.referrer && (this.referrer = new c.Referrer(e.referrer)), void 0 !== e.dom_timer && null !== e.dom_timer && (this.dom_timer = new p.DOMTimers(e.dom_timer)), void 0 !== e.user && null !== e.user && (this.user = new _.User(e.user)), void 0 !== e.user_preferences && null !== e.user_preferences && (this.user_preferences = new _.UserPreferences(e.user_preferences)), void 0 !== e.subreddit && null !== e.subreddit && (this.subreddit = new h.Subreddit(e.subreddit)), void 0 !== e.session && null !== e.session && (this.session = new m.Session(e.session)), void 0 !== e.action_info && null !== e.action_info && (this.action_info = new r.ActionInfo(e.action_info)), void 0 !== e.expand && null !== e.expand && (this.expand = new r.Expand(e.expand)), void 0 !== e.media && null !== e.media && (this.media = new a.Media(e.media)), void 0 !== e.chat && null !== e.chat && (this.chat = new g.Chat(e.chat)), void 0 !== e.post_composer && null !== e.post_composer && (this.post_composer = new a.PostComposer(e.post_composer)), void 0 !== e.widget && null !== e.widget && (this.widget = new r.Widget(e.widget)), void 0 !== e.profile && null !== e.profile && (this.profile = new h.Profile(e.profile)), void 0 !== e.onboarding && null !== e.onboarding && (this.onboarding = new a.Onboarding(e.onboarding)), void 0 !== e.timer && null !== e.timer && (this.timer = new p.Timer(e.timer)), void 0 !== e.tfa && null !== e.tfa && (this.tfa = new w.TwoFactorAuth(e.tfa)), void 0 !== e.api_response && null !== e.api_response && (this.api_response = new c.ApiResponse(e.api_response)), void 0 !== e.api && null !== e.api && (this.api = new c.Api(e.api)), void 0 !== e.discovery_unit && null !== e.discovery_unit && (this.discovery_unit = new a.DiscoveryUnit(e.discovery_unit)), void 0 !== e.experiment && null !== e.experiment && (this.experiment = new v.Experiment(e.experiment)), void 0 !== e.share && null !== e.share && (this.share = new r.Share(e.share)), void 0 !== e.user_subreddit && null !== e.user_subreddit && (this.user_subreddit = new _.UserSubreddit(e.user_subreddit)), void 0 !== e.notification_request && null !== e.notification_request && (this.notification_request = new f.NotificationRequest(e.notification_request)), void 0 !== e.search && null !== e.search && (this.search = new b.Search(e.search)), void 0 !== e.message && null !== e.message && (this.message = new a.Message(e.message)), void 0 !== e.admin && null !== e.admin && (this.admin = new T.Admin(e.admin)), void 0 !== e.ticket && null !== e.ticket && (this.ticket = new F.Ticket(e.ticket)), void 0 !== e.mailroom_request && null !== e.mailroom_request && (this.mailroom_request = new f.MailroomRequest(e.mailroom_request)), void 0 !== e.comment_composer && null !== e.comment_composer && (this.comment_composer = new a.CommentComposer(e.comment_composer)), void 0 !== e.gold_purchase && null !== e.gold_purchase && (this.gold_purchase = new E.GoldPurchase(e.gold_purchase)), void 0 !== e.payment && null !== e.payment && (this.payment = new I.Payment(e.payment)), void 0 !== e.news && null !== e.news && (this.news = new a.News(e.news)), void 0 !== e.outbound && null !== e.outbound && (this.outbound = new B.Outbound(e.outbound)), void 0 !== e.click_test && null !== e.click_test && (this.click_test = new v.ClickTest(e.click_test)), void 0 !== e.carousel && null !== e.carousel && (this.carousel = new R.Carousel(e.carousel)), void 0 !== e.adblock && null !== e.adblock && (this.adblock = new x.Adblock(e.adblock)), void 0 !== e.email && null !== e.email && (this.email = new C.Email(e.email)), void 0 !== e.metaflair && null !== e.metaflair && (this.metaflair = new k.MetaFlair(e.metaflair)), void 0 !== e.post_draft && null !== e.post_draft && (this.post_draft = new N.PostDraft(e.post_draft)), void 0 !== e.setting && null !== e.setting && (this.setting = new j.Setting(e.setting)), void 0 !== e.visibility && null !== e.visibility && (this.visibility = new P.Visibility(e.visibility)), void 0 !== e.webhook && null !== e.webhook && (this.webhook = new A.Webhook(e.webhook)), void 0 !== e.relevance_model && null !== e.relevance_model && (this.relevance_model = new L.RelevanceModel(e.relevance_model)), void 0 !== e.meta_search && null !== e.meta_search && (this.meta_search = new G.MetaSearch(e.meta_search)), void 0 !== e.post_flair && null !== e.post_flair && (this.post_flair = new M.PostFlair(e.post_flair)), void 0 !== e.admin_action && null !== e.admin_action && (this.admin_action = new S.AdminAction(e.admin_action)), void 0 !== e.zipkin && null !== e.zipkin && (this.zipkin = new c.Zipkin(e.zipkin)), void 0 !== e.edit && null !== e.edit && (this.edit = new a.Edit(e.edit)), void 0 !== e.post_event && null !== e.post_event && (this.post_event = new a.PostEvent(e.post_event)), void 0 !== e.post_collection && null !== e.post_collection && (this.post_collection = new a.PostCollection(e.post_collection)), void 0 !== e.third_party_badge && null !== e.third_party_badge && (this.third_party_badge = new U.ThirdPartyBadge(e.third_party_badge)), void 0 !== e.brand && null !== e.brand && (this.brand = new d.Brand(e.brand)), void 0 !== e.messenger_request && null !== e.messenger_request && (this.messenger_request = new f.MessengerRequest(e.messenger_request)), void 0 !== e.banner && null !== e.banner && (this.banner = new q.Banner(e.banner)), void 0 !== e.tooltip && null !== e.tooltip && (this.tooltip = new W.Tooltip(e.tooltip)), void 0 !== e.upload && null !== e.upload && (this.upload = new z.Upload(e.upload)), void 0 !== e.csai_media && null !== e.csai_media && (this.csai_media = new S.CSAIMedia(e.csai_media)), void 0 !== e.category_header && null !== e.category_header && (this.category_header = new l.CategoryHeader(e.category_header)), void 0 !== e.report && null !== e.report && (this.report = new D.Report(e.report)), void 0 !== e.live_thread && null !== e.live_thread && (this.live_thread = new H.LiveThread(e.live_thread)), void 0 !== e.ad_request && null !== e.ad_request && (this.ad_request = new o.AdRequest(e.ad_request)), void 0 !== e.ad_decision && null !== e.ad_decision && (this.ad_decision = new o.AdDecision(e.ad_decision)), void 0 !== e.ad_push && null !== e.ad_push && (this.ad_push = new o.AdPush(e.ad_push)), void 0 !== e.vote && null !== e.vote && (this.vote = new a.Vote(e.vote)), void 0 !== e.popup && null !== e.popup && (this.popup = new V.Popup(e.popup)), void 0 !== e.mod_action && null !== e.mod_action && (this.mod_action = new Y.ModAction(e.mod_action)), void 0 !== e.user_flair && null !== e.user_flair && (this.user_flair = new K.UserFlair(e.user_flair)), void 0 !== e.topic_tag && null !== e.topic_tag && (this.topic_tag = new Q.TopicTag(e.topic_tag)), void 0 !== e.res && null !== e.res && (this.res = new J.RES(e.res)), void 0 !== e.ad && null !== e.ad && (this.ad = new Z.Ad(e.ad)), void 0 !== e.ad_campaign && null !== e.ad_campaign && (this.ad_campaign = new X.AdCampaign(e.ad_campaign)), void 0 !== e.ad_group && null !== e.ad_group && (this.ad_group = new $.AdGroup(e.ad_group)), void 0 !== e.ad_targeting && null !== e.ad_targeting && (this.ad_targeting = new ee.AdTargeting(e.ad_targeting)), void 0 !== e.business_info && null !== e.business_info && (this.business_info = new te.BusinessInfo(e.business_info)), void 0 !== e.billing_info && null !== e.billing_info && (this.billing_info = new ie.BillingInfo(e.billing_info)), void 0 !== e.reddar_ticket && null !== e.reddar_ticket && (this.reddar_ticket = new F.ReddarTicket(e.reddar_ticket)), void 0 !== e.zendesk_ticket && null !== e.zendesk_ticket && (this.zendesk_ticket = new F.ZendeskTicket(e.zendesk_ticket)), void 0 !== e.target_user && null !== e.target_user && (this.target_user = new _.User(e.target_user)), void 0 !== e.crawler && null !== e.crawler && (this.crawler = new ne.Crawler(e.crawler)), void 0 !== e.response && null !== e.response && (this.response = new c.Response(e.response)), void 0 !== e.custom_feed && null !== e.custom_feed && (this.custom_feed = new se.CustomFeed(e.custom_feed)), void 0 !== e.pwa && null !== e.pwa && (this.pwa = new re.PWA(e.pwa)), void 0 !== e.seo && null !== e.seo && (this.seo = new oe.SEO(e.seo)), void 0 !== e.ncmec_report && null !== e.ncmec_report && (this.ncmec_report = new S.NCMECReport(e.ncmec_report)), void 0 !== e.funding_instrument && null !== e.funding_instrument && (this.funding_instrument = new de.FundingInstrument(e.funding_instrument)), void 0 !== e.grapeshot_classification && null !== e.grapeshot_classification && (this.grapeshot_classification = new O.GrapeshotClassification(e.grapeshot_classification)), void 0 !== e.perspective && null !== e.perspective && (this.perspective = new le.Perspective(e.perspective)), void 0 !== e.comment_draft && null !== e.comment_draft && (this.comment_draft = new ae.CommentDraft(e.comment_draft)), void 0 !== e.target_post && null !== e.target_post && (this.target_post = new a.Post(e.target_post)), void 0 !== e.ml_model && null !== e.ml_model && (this.ml_model = new ue.MLModel(e.ml_model)), void 0 !== e.topic_metadata && null !== e.topic_metadata && (this.topic_metadata = new ce.TopicMetadata(e.topic_metadata)), void 0 !== e.chat_home_feed_boosting && null !== e.chat_home_feed_boosting && (this.chat_home_feed_boosting = new g.ChatHomeFeedBoosting(e.chat_home_feed_boosting)), void 0 !== e.domain_ban && null !== e.domain_ban && (this.domain_ban = new me.DomainBan(e.domain_ban)), void 0 !== e.legal_export_request && null !== e.legal_export_request && (this.legal_export_request = new he.LegalExportRequest(e.legal_export_request)), void 0 !== e.post_requirement && null !== e.post_requirement && (this.post_requirement = new pe.PostRequirement(e.post_requirement)), void 0 !== e.target_ip && null !== e.target_ip && (this.target_ip = new _e.TargetIP(e.target_ip)), void 0 !== e.crowd_control && null !== e.crowd_control && (this.crowd_control = new ge.CrowdControl(e.crowd_control)), void 0 !== e.reddar_ticket_content && null !== e.reddar_ticket_content && (this.reddar_ticket_content = new F.ReddarTicketContent(e.reddar_ticket_content)), void 0 !== e.scheduled_post && null !== e.scheduled_post && (this.scheduled_post = new we.ScheduledPost(e.scheduled_post)), void 0 !== e.poll && null !== e.poll && (this.poll = new ye.Poll(e.poll)), void 0 !== e.reddar_audit && null !== e.reddar_audit && (this.reddar_audit = new ve.ReddarAudit(e.reddar_audit)), void 0 !== e.reddar_audit_ticket && null !== e.reddar_audit_ticket && (this.reddar_audit_ticket = new ve.ReddarAuditTicket(e.reddar_audit_ticket)), void 0 !== e.target_subreddit && null !== e.target_subreddit && (this.target_subreddit = new h.Subreddit(e.target_subreddit)), void 0 !== e.geo && null !== e.geo && (this.geo = new y.Geo(e.geo)), void 0 !== e.user_legacy_id && null !== e.user_legacy_id && (this.user_legacy_id = e.user_legacy_id), void 0 !== e.content_metadata && null !== e.content_metadata && (this.content_metadata = new y.ContentMetadata(e.content_metadata)), void 0 !== e.url_parsed && null !== e.url_parsed && (this.url_parsed = new y.UrlParsed(e.url_parsed)), void 0 !== e.link_sharing && null !== e.link_sharing && (this.link_sharing = new y.LinkSharing(e.link_sharing)), void 0 !== e.create_request_timestamp && null !== e.create_request_timestamp && (this.create_request_timestamp = e.create_request_timestamp), void 0 !== e.inferred && null !== e.inferred && (this.inferred = new y.Inferred(e.inferred)), void 0 !== e.event_hmac_key && null !== e.event_hmac_key && (this.event_hmac_key = e.event_hmac_key)
					}
				};
			be.prototype = {}, be.prototype.write = function(e) {
				e.writeStructBegin("Event"), null !== this.source && void 0 !== this.source && (e.writeFieldBegin("source", s.Type.STRING, 1), e.writeString(this.source), e.writeFieldEnd()), null !== this.action && void 0 !== this.action && (e.writeFieldBegin("action", s.Type.STRING, 2), e.writeString(this.action), e.writeFieldEnd()), null !== this.noun && void 0 !== this.noun && (e.writeFieldBegin("noun", s.Type.STRING, 3), e.writeString(this.noun), e.writeFieldEnd()), null !== this.endpoint_timestamp && void 0 !== this.endpoint_timestamp && (e.writeFieldBegin("endpoint_timestamp", s.Type.I64, 4), e.writeI64(this.endpoint_timestamp), e.writeFieldEnd()), null !== this.client_timestamp && void 0 !== this.client_timestamp && (e.writeFieldBegin("client_timestamp", s.Type.I64, 5), e.writeI64(this.client_timestamp), e.writeFieldEnd()), null !== this.uuid && void 0 !== this.uuid && (e.writeFieldBegin("uuid", s.Type.STRING, 6), e.writeString(this.uuid), e.writeFieldEnd()), null !== this.utc_offset && void 0 !== this.utc_offset && (e.writeFieldBegin("utc_offset", s.Type.DOUBLE, 7), e.writeDouble(this.utc_offset), e.writeFieldEnd()), null !== this.correlation_id && void 0 !== this.correlation_id && (e.writeFieldBegin("correlation_id", s.Type.STRING, 8), e.writeString(this.correlation_id), e.writeFieldEnd()), null !== this.screenview_id && void 0 !== this.screenview_id && (e.writeFieldBegin("screenview_id", s.Type.STRING, 9), e.writeString(this.screenview_id), e.writeFieldEnd()), null !== this.post && void 0 !== this.post && (e.writeFieldBegin("post", s.Type.STRUCT, 100), this.post.write(e), e.writeFieldEnd()), null !== this.listing && void 0 !== this.listing && (e.writeFieldBegin("listing", s.Type.STRUCT, 101), this.listing.write(e), e.writeFieldEnd()), null !== this.comment && void 0 !== this.comment && (e.writeFieldBegin("comment", s.Type.STRUCT, 102), this.comment.write(e), e.writeFieldEnd()), null !== this.notification && void 0 !== this.notification && (e.writeFieldBegin("notification", s.Type.STRUCT, 103), this.notification.write(e), e.writeFieldEnd()), null !== this.oauth && void 0 !== this.oauth && (e.writeFieldBegin("oauth", s.Type.STRUCT, 104), this.oauth.write(e), e.writeFieldEnd()), null !== this.screen && void 0 !== this.screen && (e.writeFieldBegin("screen", s.Type.STRUCT, 106), this.screen.write(e), e.writeFieldEnd()), null !== this.app && void 0 !== this.app && (e.writeFieldBegin("app", s.Type.STRUCT, 107), this.app.write(e), e.writeFieldEnd()), null !== this.platform && void 0 !== this.platform && (e.writeFieldBegin("platform", s.Type.STRUCT, 108), this.platform.write(e), e.writeFieldEnd()), null !== this.request && void 0 !== this.request && (e.writeFieldBegin("request", s.Type.STRUCT, 109), this.request.write(e), e.writeFieldEnd()), null !== this.referrer && void 0 !== this.referrer && (e.writeFieldBegin("referrer", s.Type.STRUCT, 110), this.referrer.write(e), e.writeFieldEnd()), null !== this.dom_timer && void 0 !== this.dom_timer && (e.writeFieldBegin("dom_timer", s.Type.STRUCT, 111), this.dom_timer.write(e), e.writeFieldEnd()), null !== this.user && void 0 !== this.user && (e.writeFieldBegin("user", s.Type.STRUCT, 112), this.user.write(e), e.writeFieldEnd()), null !== this.user_preferences && void 0 !== this.user_preferences && (e.writeFieldBegin("user_preferences", s.Type.STRUCT, 113), this.user_preferences.write(e), e.writeFieldEnd()), null !== this.subreddit && void 0 !== this.subreddit && (e.writeFieldBegin("subreddit", s.Type.STRUCT, 114), this.subreddit.write(e), e.writeFieldEnd()), null !== this.session && void 0 !== this.session && (e.writeFieldBegin("session", s.Type.STRUCT, 115), this.session.write(e), e.writeFieldEnd()), null !== this.action_info && void 0 !== this.action_info && (e.writeFieldBegin("action_info", s.Type.STRUCT, 116), this.action_info.write(e), e.writeFieldEnd()), null !== this.expand && void 0 !== this.expand && (e.writeFieldBegin("expand", s.Type.STRUCT, 117), this.expand.write(e), e.writeFieldEnd()), null !== this.media && void 0 !== this.media && (e.writeFieldBegin("media", s.Type.STRUCT, 118), this.media.write(e), e.writeFieldEnd()), null !== this.chat && void 0 !== this.chat && (e.writeFieldBegin("chat", s.Type.STRUCT, 119), this.chat.write(e), e.writeFieldEnd()), null !== this.post_composer && void 0 !== this.post_composer && (e.writeFieldBegin("post_composer", s.Type.STRUCT, 120), this.post_composer.write(e), e.writeFieldEnd()), null !== this.widget && void 0 !== this.widget && (e.writeFieldBegin("widget", s.Type.STRUCT, 121), this.widget.write(e), e.writeFieldEnd()), null !== this.profile && void 0 !== this.profile && (e.writeFieldBegin("profile", s.Type.STRUCT, 122), this.profile.write(e), e.writeFieldEnd()), null !== this.onboarding && void 0 !== this.onboarding && (e.writeFieldBegin("onboarding", s.Type.STRUCT, 123), this.onboarding.write(e), e.writeFieldEnd()), null !== this.timer && void 0 !== this.timer && (e.writeFieldBegin("timer", s.Type.STRUCT, 124), this.timer.write(e), e.writeFieldEnd()), null !== this.tfa && void 0 !== this.tfa && (e.writeFieldBegin("tfa", s.Type.STRUCT, 125), this.tfa.write(e), e.writeFieldEnd()), null !== this.api_response && void 0 !== this.api_response && (e.writeFieldBegin("api_response", s.Type.STRUCT, 126), this.api_response.write(e), e.writeFieldEnd()), null !== this.api && void 0 !== this.api && (e.writeFieldBegin("api", s.Type.STRUCT, 127), this.api.write(e), e.writeFieldEnd()), null !== this.discovery_unit && void 0 !== this.discovery_unit && (e.writeFieldBegin("discovery_unit", s.Type.STRUCT, 128), this.discovery_unit.write(e), e.writeFieldEnd()), null !== this.experiment && void 0 !== this.experiment && (e.writeFieldBegin("experiment", s.Type.STRUCT, 129), this.experiment.write(e), e.writeFieldEnd()), null !== this.share && void 0 !== this.share && (e.writeFieldBegin("share", s.Type.STRUCT, 130), this.share.write(e), e.writeFieldEnd()), null !== this.user_subreddit && void 0 !== this.user_subreddit && (e.writeFieldBegin("user_subreddit", s.Type.STRUCT, 131), this.user_subreddit.write(e), e.writeFieldEnd()), null !== this.notification_request && void 0 !== this.notification_request && (e.writeFieldBegin("notification_request", s.Type.STRUCT, 132), this.notification_request.write(e), e.writeFieldEnd()), null !== this.search && void 0 !== this.search && (e.writeFieldBegin("search", s.Type.STRUCT, 133), this.search.write(e), e.writeFieldEnd()), null !== this.message && void 0 !== this.message && (e.writeFieldBegin("message", s.Type.STRUCT, 134), this.message.write(e), e.writeFieldEnd()), null !== this.admin && void 0 !== this.admin && (e.writeFieldBegin("admin", s.Type.STRUCT, 135), this.admin.write(e), e.writeFieldEnd()), null !== this.ticket && void 0 !== this.ticket && (e.writeFieldBegin("ticket", s.Type.STRUCT, 136), this.ticket.write(e), e.writeFieldEnd()), null !== this.mailroom_request && void 0 !== this.mailroom_request && (e.writeFieldBegin("mailroom_request", s.Type.STRUCT, 137), this.mailroom_request.write(e), e.writeFieldEnd()), null !== this.comment_composer && void 0 !== this.comment_composer && (e.writeFieldBegin("comment_composer", s.Type.STRUCT, 138), this.comment_composer.write(e), e.writeFieldEnd()), null !== this.gold_purchase && void 0 !== this.gold_purchase && (e.writeFieldBegin("gold_purchase", s.Type.STRUCT, 139), this.gold_purchase.write(e), e.writeFieldEnd()), null !== this.payment && void 0 !== this.payment && (e.writeFieldBegin("payment", s.Type.STRUCT, 140), this.payment.write(e), e.writeFieldEnd()), null !== this.news && void 0 !== this.news && (e.writeFieldBegin("news", s.Type.STRUCT, 141), this.news.write(e), e.writeFieldEnd()), null !== this.outbound && void 0 !== this.outbound && (e.writeFieldBegin("outbound", s.Type.STRUCT, 142), this.outbound.write(e), e.writeFieldEnd()), null !== this.click_test && void 0 !== this.click_test && (e.writeFieldBegin("click_test", s.Type.STRUCT, 143), this.click_test.write(e), e.writeFieldEnd()), null !== this.carousel && void 0 !== this.carousel && (e.writeFieldBegin("carousel", s.Type.STRUCT, 144), this.carousel.write(e), e.writeFieldEnd()), null !== this.adblock && void 0 !== this.adblock && (e.writeFieldBegin("adblock", s.Type.STRUCT, 145), this.adblock.write(e), e.writeFieldEnd()), null !== this.email && void 0 !== this.email && (e.writeFieldBegin("email", s.Type.STRUCT, 146), this.email.write(e), e.writeFieldEnd()), null !== this.metaflair && void 0 !== this.metaflair && (e.writeFieldBegin("metaflair", s.Type.STRUCT, 147), this.metaflair.write(e), e.writeFieldEnd()), null !== this.post_draft && void 0 !== this.post_draft && (e.writeFieldBegin("post_draft", s.Type.STRUCT, 148), this.post_draft.write(e), e.writeFieldEnd()), null !== this.setting && void 0 !== this.setting && (e.writeFieldBegin("setting", s.Type.STRUCT, 149), this.setting.write(e), e.writeFieldEnd()), null !== this.visibility && void 0 !== this.visibility && (e.writeFieldBegin("visibility", s.Type.STRUCT, 150), this.visibility.write(e), e.writeFieldEnd()), null !== this.webhook && void 0 !== this.webhook && (e.writeFieldBegin("webhook", s.Type.STRUCT, 151), this.webhook.write(e), e.writeFieldEnd()), null !== this.relevance_model && void 0 !== this.relevance_model && (e.writeFieldBegin("relevance_model", s.Type.STRUCT, 152), this.relevance_model.write(e), e.writeFieldEnd()), null !== this.meta_search && void 0 !== this.meta_search && (e.writeFieldBegin("meta_search", s.Type.STRUCT, 153), this.meta_search.write(e), e.writeFieldEnd()), null !== this.post_flair && void 0 !== this.post_flair && (e.writeFieldBegin("post_flair", s.Type.STRUCT, 154), this.post_flair.write(e), e.writeFieldEnd()), null !== this.admin_action && void 0 !== this.admin_action && (e.writeFieldBegin("admin_action", s.Type.STRUCT, 155), this.admin_action.write(e), e.writeFieldEnd()), null !== this.zipkin && void 0 !== this.zipkin && (e.writeFieldBegin("zipkin", s.Type.STRUCT, 156), this.zipkin.write(e), e.writeFieldEnd()), null !== this.edit && void 0 !== this.edit && (e.writeFieldBegin("edit", s.Type.STRUCT, 157), this.edit.write(e), e.writeFieldEnd()), null !== this.post_event && void 0 !== this.post_event && (e.writeFieldBegin("post_event", s.Type.STRUCT, 158), this.post_event.write(e), e.writeFieldEnd()), null !== this.post_collection && void 0 !== this.post_collection && (e.writeFieldBegin("post_collection", s.Type.STRUCT, 159), this.post_collection.write(e), e.writeFieldEnd()), null !== this.third_party_badge && void 0 !== this.third_party_badge && (e.writeFieldBegin("third_party_badge", s.Type.STRUCT, 160), this.third_party_badge.write(e), e.writeFieldEnd()), null !== this.brand && void 0 !== this.brand && (e.writeFieldBegin("brand", s.Type.STRUCT, 161), this.brand.write(e), e.writeFieldEnd()), null !== this.messenger_request && void 0 !== this.messenger_request && (e.writeFieldBegin("messenger_request", s.Type.STRUCT, 162), this.messenger_request.write(e), e.writeFieldEnd()), null !== this.banner && void 0 !== this.banner && (e.writeFieldBegin("banner", s.Type.STRUCT, 163), this.banner.write(e), e.writeFieldEnd()), null !== this.tooltip && void 0 !== this.tooltip && (e.writeFieldBegin("tooltip", s.Type.STRUCT, 164), this.tooltip.write(e), e.writeFieldEnd()), null !== this.upload && void 0 !== this.upload && (e.writeFieldBegin("upload", s.Type.STRUCT, 165), this.upload.write(e), e.writeFieldEnd()), null !== this.csai_media && void 0 !== this.csai_media && (e.writeFieldBegin("csai_media", s.Type.STRUCT, 166), this.csai_media.write(e), e.writeFieldEnd()), null !== this.category_header && void 0 !== this.category_header && (e.writeFieldBegin("category_header", s.Type.STRUCT, 167), this.category_header.write(e), e.writeFieldEnd()), null !== this.report && void 0 !== this.report && (e.writeFieldBegin("report", s.Type.STRUCT, 168), this.report.write(e), e.writeFieldEnd()), null !== this.live_thread && void 0 !== this.live_thread && (e.writeFieldBegin("live_thread", s.Type.STRUCT, 169), this.live_thread.write(e), e.writeFieldEnd()), null !== this.ad_request && void 0 !== this.ad_request && (e.writeFieldBegin("ad_request", s.Type.STRUCT, 170), this.ad_request.write(e), e.writeFieldEnd()), null !== this.ad_decision && void 0 !== this.ad_decision && (e.writeFieldBegin("ad_decision", s.Type.STRUCT, 171), this.ad_decision.write(e), e.writeFieldEnd()), null !== this.ad_push && void 0 !== this.ad_push && (e.writeFieldBegin("ad_push", s.Type.STRUCT, 172), this.ad_push.write(e), e.writeFieldEnd()), null !== this.vote && void 0 !== this.vote && (e.writeFieldBegin("vote", s.Type.STRUCT, 173), this.vote.write(e), e.writeFieldEnd()), null !== this.popup && void 0 !== this.popup && (e.writeFieldBegin("popup", s.Type.STRUCT, 174), this.popup.write(e), e.writeFieldEnd()), null !== this.mod_action && void 0 !== this.mod_action && (e.writeFieldBegin("mod_action", s.Type.STRUCT, 175), this.mod_action.write(e), e.writeFieldEnd()), null !== this.user_flair && void 0 !== this.user_flair && (e.writeFieldBegin("user_flair", s.Type.STRUCT, 176), this.user_flair.write(e), e.writeFieldEnd()), null !== this.topic_tag && void 0 !== this.topic_tag && (e.writeFieldBegin("topic_tag", s.Type.STRUCT, 177), this.topic_tag.write(e), e.writeFieldEnd()), null !== this.res && void 0 !== this.res && (e.writeFieldBegin("res", s.Type.STRUCT, 178), this.res.write(e), e.writeFieldEnd()), null !== this.ad && void 0 !== this.ad && (e.writeFieldBegin("ad", s.Type.STRUCT, 179), this.ad.write(e), e.writeFieldEnd()), null !== this.ad_campaign && void 0 !== this.ad_campaign && (e.writeFieldBegin("ad_campaign", s.Type.STRUCT, 180), this.ad_campaign.write(e), e.writeFieldEnd()), null !== this.ad_group && void 0 !== this.ad_group && (e.writeFieldBegin("ad_group", s.Type.STRUCT, 181), this.ad_group.write(e), e.writeFieldEnd()), null !== this.ad_targeting && void 0 !== this.ad_targeting && (e.writeFieldBegin("ad_targeting", s.Type.STRUCT, 182), this.ad_targeting.write(e), e.writeFieldEnd()), null !== this.business_info && void 0 !== this.business_info && (e.writeFieldBegin("business_info", s.Type.STRUCT, 183), this.business_info.write(e), e.writeFieldEnd()), null !== this.billing_info && void 0 !== this.billing_info && (e.writeFieldBegin("billing_info", s.Type.STRUCT, 184), this.billing_info.write(e), e.writeFieldEnd()), null !== this.reddar_ticket && void 0 !== this.reddar_ticket && (e.writeFieldBegin("reddar_ticket", s.Type.STRUCT, 185), this.reddar_ticket.write(e), e.writeFieldEnd()), null !== this.zendesk_ticket && void 0 !== this.zendesk_ticket && (e.writeFieldBegin("zendesk_ticket", s.Type.STRUCT, 186), this.zendesk_ticket.write(e), e.writeFieldEnd()), null !== this.target_user && void 0 !== this.target_user && (e.writeFieldBegin("target_user", s.Type.STRUCT, 187), this.target_user.write(e), e.writeFieldEnd()), null !== this.crawler && void 0 !== this.crawler && (e.writeFieldBegin("crawler", s.Type.STRUCT, 188), this.crawler.write(e), e.writeFieldEnd()), null !== this.response && void 0 !== this.response && (e.writeFieldBegin("response", s.Type.STRUCT, 189), this.response.write(e), e.writeFieldEnd()), null !== this.custom_feed && void 0 !== this.custom_feed && (e.writeFieldBegin("custom_feed", s.Type.STRUCT, 190), this.custom_feed.write(e), e.writeFieldEnd()), null !== this.pwa && void 0 !== this.pwa && (e.writeFieldBegin("pwa", s.Type.STRUCT, 191), this.pwa.write(e), e.writeFieldEnd()), null !== this.seo && void 0 !== this.seo && (e.writeFieldBegin("seo", s.Type.STRUCT, 192), this.seo.write(e), e.writeFieldEnd()), null !== this.ncmec_report && void 0 !== this.ncmec_report && (e.writeFieldBegin("ncmec_report", s.Type.STRUCT, 193), this.ncmec_report.write(e), e.writeFieldEnd()), null !== this.funding_instrument && void 0 !== this.funding_instrument && (e.writeFieldBegin("funding_instrument", s.Type.STRUCT, 194), this.funding_instrument.write(e), e.writeFieldEnd()), null !== this.grapeshot_classification && void 0 !== this.grapeshot_classification && (e.writeFieldBegin("grapeshot_classification", s.Type.STRUCT, 195), this.grapeshot_classification.write(e), e.writeFieldEnd()), null !== this.perspective && void 0 !== this.perspective && (e.writeFieldBegin("perspective", s.Type.STRUCT, 196), this.perspective.write(e), e.writeFieldEnd()), null !== this.comment_draft && void 0 !== this.comment_draft && (e.writeFieldBegin("comment_draft", s.Type.STRUCT, 197), this.comment_draft.write(e), e.writeFieldEnd()), null !== this.target_post && void 0 !== this.target_post && (e.writeFieldBegin("target_post", s.Type.STRUCT, 198), this.target_post.write(e), e.writeFieldEnd()), null !== this.ml_model && void 0 !== this.ml_model && (e.writeFieldBegin("ml_model", s.Type.STRUCT, 199), this.ml_model.write(e), e.writeFieldEnd()), null !== this.topic_metadata && void 0 !== this.topic_metadata && (e.writeFieldBegin("topic_metadata", s.Type.STRUCT, 200), this.topic_metadata.write(e), e.writeFieldEnd()), null !== this.chat_home_feed_boosting && void 0 !== this.chat_home_feed_boosting && (e.writeFieldBegin("chat_home_feed_boosting", s.Type.STRUCT, 201), this.chat_home_feed_boosting.write(e), e.writeFieldEnd()), null !== this.domain_ban && void 0 !== this.domain_ban && (e.writeFieldBegin("domain_ban", s.Type.STRUCT, 202), this.domain_ban.write(e), e.writeFieldEnd()), null !== this.legal_export_request && void 0 !== this.legal_export_request && (e.writeFieldBegin("legal_export_request", s.Type.STRUCT, 203), this.legal_export_request.write(e), e.writeFieldEnd()), null !== this.post_requirement && void 0 !== this.post_requirement && (e.writeFieldBegin("post_requirement", s.Type.STRUCT, 204), this.post_requirement.write(e), e.writeFieldEnd()), null !== this.target_ip && void 0 !== this.target_ip && (e.writeFieldBegin("target_ip", s.Type.STRUCT, 205), this.target_ip.write(e), e.writeFieldEnd()), null !== this.crowd_control && void 0 !== this.crowd_control && (e.writeFieldBegin("crowd_control", s.Type.STRUCT, 206), this.crowd_control.write(e), e.writeFieldEnd()), null !== this.reddar_ticket_content && void 0 !== this.reddar_ticket_content && (e.writeFieldBegin("reddar_ticket_content", s.Type.STRUCT, 207), this.reddar_ticket_content.write(e), e.writeFieldEnd()), null !== this.scheduled_post && void 0 !== this.scheduled_post && (e.writeFieldBegin("scheduled_post", s.Type.STRUCT, 208), this.scheduled_post.write(e), e.writeFieldEnd()), null !== this.poll && void 0 !== this.poll && (e.writeFieldBegin("poll", s.Type.STRUCT, 209), this.poll.write(e), e.writeFieldEnd()), null !== this.reddar_audit && void 0 !== this.reddar_audit && (e.writeFieldBegin("reddar_audit", s.Type.STRUCT, 210), this.reddar_audit.write(e), e.writeFieldEnd()), null !== this.reddar_audit_ticket && void 0 !== this.reddar_audit_ticket && (e.writeFieldBegin("reddar_audit_ticket", s.Type.STRUCT, 211), this.reddar_audit_ticket.write(e), e.writeFieldEnd()), null !== this.target_subreddit && void 0 !== this.target_subreddit && (e.writeFieldBegin("target_subreddit", s.Type.STRUCT, 212), this.target_subreddit.write(e), e.writeFieldEnd()), null !== this.geo && void 0 !== this.geo && (e.writeFieldBegin("geo", s.Type.STRUCT, 500), this.geo.write(e), e.writeFieldEnd()), null !== this.user_legacy_id && void 0 !== this.user_legacy_id && (e.writeFieldBegin("user_legacy_id", s.Type.STRING, 502), e.writeString(this.user_legacy_id), e.writeFieldEnd()), null !== this.content_metadata && void 0 !== this.content_metadata && (e.writeFieldBegin("content_metadata", s.Type.STRUCT, 503), this.content_metadata.write(e), e.writeFieldEnd()), null !== this.url_parsed && void 0 !== this.url_parsed && (e.writeFieldBegin("url_parsed", s.Type.STRUCT, 504), this.url_parsed.write(e), e.writeFieldEnd()), null !== this.link_sharing && void 0 !== this.link_sharing && (e.writeFieldBegin("link_sharing", s.Type.STRUCT, 505), this.link_sharing.write(e), e.writeFieldEnd()), null !== this.create_request_timestamp && void 0 !== this.create_request_timestamp && (e.writeFieldBegin("create_request_timestamp", s.Type.I64, 506), e.writeI64(this.create_request_timestamp), e.writeFieldEnd()), null !== this.inferred && void 0 !== this.inferred && (e.writeFieldBegin("inferred", s.Type.STRUCT, 507), this.inferred.write(e), e.writeFieldEnd()), null !== this.event_hmac_key && void 0 !== this.event_hmac_key && (e.writeFieldBegin("event_hmac_key", s.Type.STRING, 508), e.writeString(this.event_hmac_key), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var Te = e.exports.EventBatch = function(e) {
				if (this.events = null, e) {
					if (void 0 === e.events || null === e.events) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field events is unset!");
					this.events = s.copyList(e.events, [fe.Event])
				}
			};
			Te.prototype = {}, Te.prototype.write = function(e) {
				if (e.writeStructBegin("EventBatch"), null !== this.events && void 0 !== this.events) {
					for (var t in e.writeFieldBegin("events", s.Type.LIST, 1), e.writeListBegin(s.Type.STRUCT, this.events.length), this.events) this.events.hasOwnProperty(t) && (t = this.events[t]).write(e);
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/experiment_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Experiment = function(e) {
					if (this.id = null, this.name = null, this.owner = null, this.variant = null, this.start_timestamp = null, this.end_timestamp = null, this.bucketing_key = null, this.version = null, this.bucketing_value = null, this.is_override = null, this.variant_names = null, this.variant_percentages = null, this.active = null, this.github_link = null, this.info = null, this.qa_proxy_event = null, this.bucketing_type = null, e) {
						if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id, void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.owner && null !== e.owner && (this.owner = e.owner), void 0 !== e.variant && null !== e.variant && (this.variant = e.variant), void 0 !== e.start_timestamp && null !== e.start_timestamp && (this.start_timestamp = e.start_timestamp), void 0 !== e.end_timestamp && null !== e.end_timestamp && (this.end_timestamp = e.end_timestamp), void 0 !== e.bucketing_key && null !== e.bucketing_key && (this.bucketing_key = e.bucketing_key), void 0 !== e.version && null !== e.version && (this.version = e.version), void 0 !== e.bucketing_value && null !== e.bucketing_value && (this.bucketing_value = e.bucketing_value), void 0 !== e.is_override && null !== e.is_override && (this.is_override = e.is_override), void 0 !== e.variant_names && null !== e.variant_names && (this.variant_names = s.copyList(e.variant_names, [null])), void 0 !== e.variant_percentages && null !== e.variant_percentages && (this.variant_percentages = s.copyList(e.variant_percentages, [null])), void 0 !== e.active && null !== e.active && (this.active = e.active), void 0 !== e.github_link && null !== e.github_link && (this.github_link = e.github_link), void 0 !== e.info && null !== e.info && (this.info = e.info), void 0 !== e.qa_proxy_event && null !== e.qa_proxy_event && (this.qa_proxy_event = e.qa_proxy_event), void 0 !== e.bucketing_type && null !== e.bucketing_type && (this.bucketing_type = e.bucketing_type)
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("Experiment"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.I64, 1), e.writeI64(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.owner && void 0 !== this.owner && (e.writeFieldBegin("owner", s.Type.STRING, 3), e.writeString(this.owner), e.writeFieldEnd()), null !== this.variant && void 0 !== this.variant && (e.writeFieldBegin("variant", s.Type.STRING, 4), e.writeString(this.variant), e.writeFieldEnd()), null !== this.start_timestamp && void 0 !== this.start_timestamp && (e.writeFieldBegin("start_timestamp", s.Type.I64, 5), e.writeI64(this.start_timestamp), e.writeFieldEnd()), null !== this.end_timestamp && void 0 !== this.end_timestamp && (e.writeFieldBegin("end_timestamp", s.Type.I64, 6), e.writeI64(this.end_timestamp), e.writeFieldEnd()), null !== this.bucketing_key && void 0 !== this.bucketing_key && (e.writeFieldBegin("bucketing_key", s.Type.STRING, 7), e.writeString(this.bucketing_key), e.writeFieldEnd()), null !== this.version && void 0 !== this.version && (e.writeFieldBegin("version", s.Type.STRING, 8), e.writeString(this.version), e.writeFieldEnd()), null !== this.bucketing_value && void 0 !== this.bucketing_value && (e.writeFieldBegin("bucketing_value", s.Type.STRING, 9), e.writeString(this.bucketing_value), e.writeFieldEnd()), null !== this.is_override && void 0 !== this.is_override && (e.writeFieldBegin("is_override", s.Type.BOOL, 10), e.writeBool(this.is_override), e.writeFieldEnd()), null !== this.variant_names && void 0 !== this.variant_names) {
					for (var t in e.writeFieldBegin("variant_names", s.Type.LIST, 11), e.writeListBegin(s.Type.STRING, this.variant_names.length), this.variant_names) this.variant_names.hasOwnProperty(t) && (t = this.variant_names[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.variant_percentages && void 0 !== this.variant_percentages) {
					for (var i in e.writeFieldBegin("variant_percentages", s.Type.LIST, 12), e.writeListBegin(s.Type.DOUBLE, this.variant_percentages.length), this.variant_percentages) this.variant_percentages.hasOwnProperty(i) && (i = this.variant_percentages[i], e.writeDouble(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.active && void 0 !== this.active && (e.writeFieldBegin("active", s.Type.BOOL, 13), e.writeBool(this.active), e.writeFieldEnd()), null !== this.github_link && void 0 !== this.github_link && (e.writeFieldBegin("github_link", s.Type.STRING, 15), e.writeString(this.github_link), e.writeFieldEnd()), null !== this.info && void 0 !== this.info && (e.writeFieldBegin("info", s.Type.STRING, 16), e.writeString(this.info), e.writeFieldEnd()), null !== this.qa_proxy_event && void 0 !== this.qa_proxy_event && (e.writeFieldBegin("qa_proxy_event", s.Type.STRING, 17), e.writeString(this.qa_proxy_event), e.writeFieldEnd()), null !== this.bucketing_type && void 0 !== this.bucketing_type && (e.writeFieldBegin("bucketing_type", s.Type.STRING, 18), e.writeString(this.bucketing_type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.ClickTest = function(e) {
				if (this.id = null, this.name = null, this.owner = null, this.variant = null, this.prompt = null, this.response = null, this.page_type = null, e) {
					if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
					this.id = e.id, void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.owner && null !== e.owner && (this.owner = e.owner), void 0 !== e.variant && null !== e.variant && (this.variant = e.variant), void 0 !== e.prompt && null !== e.prompt && (this.prompt = e.prompt), void 0 !== e.response && null !== e.response && (this.response = e.response), void 0 !== e.page_type && null !== e.page_type && (this.page_type = e.page_type)
				}
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("ClickTest"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.I64, 1), e.writeI64(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.owner && void 0 !== this.owner && (e.writeFieldBegin("owner", s.Type.STRING, 3), e.writeString(this.owner), e.writeFieldEnd()), null !== this.variant && void 0 !== this.variant && (e.writeFieldBegin("variant", s.Type.STRING, 4), e.writeString(this.variant), e.writeFieldEnd()), null !== this.prompt && void 0 !== this.prompt && (e.writeFieldBegin("prompt", s.Type.STRING, 5), e.writeString(this.prompt), e.writeFieldEnd()), null !== this.response && void 0 !== this.response && (e.writeFieldBegin("response", s.Type.STRING, 6), e.writeString(this.response), e.writeFieldEnd()), null !== this.page_type && void 0 !== this.page_type && (e.writeFieldBegin("page_type", s.Type.STRING, 7), e.writeString(this.page_type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/funding_instrument_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/adtypedefs_types.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.FundingInstrument = function(e) {
					this.id = null, this.created_timestamp = null, this.last_modified_timestamp = null, this.user_id = null, this.type = null, this.start_timestamp = null, this.end_timestamp = null, this.name = null, this.line_item_id = null, this.authorize_payment_profile_id = null, this.authorize_profile_id = null, this.servable = null, this.admin_id = null, this.credit_line_micros = null, this.balance_micros = null, this.billing_threshold_micros = null, this.total_spending_micros = null, this.total_payment_micros = null, this.spent_freebies_micros = null, this.available_freebies_micros = null, this.overdelivery_micros = null, this.total_refund_micros = null, this.overwrite = null, this.payment_id = null, this.original_payment_id = null, this.legacy_transaction_id = null, this.active = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.last_modified_timestamp && null !== e.last_modified_timestamp && (this.last_modified_timestamp = e.last_modified_timestamp), void 0 !== e.user_id && null !== e.user_id && (this.user_id = e.user_id), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.start_timestamp && null !== e.start_timestamp && (this.start_timestamp = e.start_timestamp), void 0 !== e.end_timestamp && null !== e.end_timestamp && (this.end_timestamp = e.end_timestamp), void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.line_item_id && null !== e.line_item_id && (this.line_item_id = e.line_item_id), void 0 !== e.authorize_payment_profile_id && null !== e.authorize_payment_profile_id && (this.authorize_payment_profile_id = e.authorize_payment_profile_id), void 0 !== e.authorize_profile_id && null !== e.authorize_profile_id && (this.authorize_profile_id = e.authorize_profile_id), void 0 !== e.servable && null !== e.servable && (this.servable = e.servable), void 0 !== e.admin_id && null !== e.admin_id && (this.admin_id = e.admin_id), void 0 !== e.credit_line_micros && null !== e.credit_line_micros && (this.credit_line_micros = e.credit_line_micros), void 0 !== e.balance_micros && null !== e.balance_micros && (this.balance_micros = e.balance_micros), void 0 !== e.billing_threshold_micros && null !== e.billing_threshold_micros && (this.billing_threshold_micros = e.billing_threshold_micros), void 0 !== e.total_spending_micros && null !== e.total_spending_micros && (this.total_spending_micros = e.total_spending_micros), void 0 !== e.total_payment_micros && null !== e.total_payment_micros && (this.total_payment_micros = e.total_payment_micros), void 0 !== e.spent_freebies_micros && null !== e.spent_freebies_micros && (this.spent_freebies_micros = e.spent_freebies_micros), void 0 !== e.available_freebies_micros && null !== e.available_freebies_micros && (this.available_freebies_micros = e.available_freebies_micros), void 0 !== e.overdelivery_micros && null !== e.overdelivery_micros && (this.overdelivery_micros = e.overdelivery_micros), void 0 !== e.total_refund_micros && null !== e.total_refund_micros && (this.total_refund_micros = e.total_refund_micros), void 0 !== e.overwrite && null !== e.overwrite && (this.overwrite = e.overwrite), void 0 !== e.payment_id && null !== e.payment_id && (this.payment_id = e.payment_id), void 0 !== e.original_payment_id && null !== e.original_payment_id && (this.original_payment_id = e.original_payment_id), void 0 !== e.legacy_transaction_id && null !== e.legacy_transaction_id && (this.legacy_transaction_id = e.legacy_transaction_id), void 0 !== e.active && null !== e.active && (this.active = e.active))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("FundingInstrument"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.I64, 1), e.writeI64(this.id), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", s.Type.I64, 2), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.last_modified_timestamp && void 0 !== this.last_modified_timestamp && (e.writeFieldBegin("last_modified_timestamp", s.Type.I64, 3), e.writeI64(this.last_modified_timestamp), e.writeFieldEnd()), null !== this.user_id && void 0 !== this.user_id && (e.writeFieldBegin("user_id", s.Type.STRING, 4), e.writeString(this.user_id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 5), e.writeString(this.type), e.writeFieldEnd()), null !== this.start_timestamp && void 0 !== this.start_timestamp && (e.writeFieldBegin("start_timestamp", s.Type.I64, 6), e.writeI64(this.start_timestamp), e.writeFieldEnd()), null !== this.end_timestamp && void 0 !== this.end_timestamp && (e.writeFieldBegin("end_timestamp", s.Type.I64, 7), e.writeI64(this.end_timestamp), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 8), e.writeString(this.name), e.writeFieldEnd()), null !== this.line_item_id && void 0 !== this.line_item_id && (e.writeFieldBegin("line_item_id", s.Type.STRING, 9), e.writeString(this.line_item_id), e.writeFieldEnd()), null !== this.authorize_payment_profile_id && void 0 !== this.authorize_payment_profile_id && (e.writeFieldBegin("authorize_payment_profile_id", s.Type.STRING, 10), e.writeString(this.authorize_payment_profile_id), e.writeFieldEnd()), null !== this.authorize_profile_id && void 0 !== this.authorize_profile_id && (e.writeFieldBegin("authorize_profile_id", s.Type.STRING, 11), e.writeString(this.authorize_profile_id), e.writeFieldEnd()), null !== this.servable && void 0 !== this.servable && (e.writeFieldBegin("servable", s.Type.BOOL, 12), e.writeBool(this.servable), e.writeFieldEnd()), null !== this.admin_id && void 0 !== this.admin_id && (e.writeFieldBegin("admin_id", s.Type.STRING, 13), e.writeString(this.admin_id), e.writeFieldEnd()), null !== this.credit_line_micros && void 0 !== this.credit_line_micros && (e.writeFieldBegin("credit_line_micros", s.Type.I64, 14), e.writeI64(this.credit_line_micros), e.writeFieldEnd()), null !== this.balance_micros && void 0 !== this.balance_micros && (e.writeFieldBegin("balance_micros", s.Type.I64, 15), e.writeI64(this.balance_micros), e.writeFieldEnd()), null !== this.billing_threshold_micros && void 0 !== this.billing_threshold_micros && (e.writeFieldBegin("billing_threshold_micros", s.Type.I64, 16), e.writeI64(this.billing_threshold_micros), e.writeFieldEnd()), null !== this.total_spending_micros && void 0 !== this.total_spending_micros && (e.writeFieldBegin("total_spending_micros", s.Type.I64, 17), e.writeI64(this.total_spending_micros), e.writeFieldEnd()), null !== this.total_payment_micros && void 0 !== this.total_payment_micros && (e.writeFieldBegin("total_payment_micros", s.Type.I64, 18), e.writeI64(this.total_payment_micros), e.writeFieldEnd()), null !== this.spent_freebies_micros && void 0 !== this.spent_freebies_micros && (e.writeFieldBegin("spent_freebies_micros", s.Type.I64, 19), e.writeI64(this.spent_freebies_micros), e.writeFieldEnd()), null !== this.available_freebies_micros && void 0 !== this.available_freebies_micros && (e.writeFieldBegin("available_freebies_micros", s.Type.I64, 20), e.writeI64(this.available_freebies_micros), e.writeFieldEnd()), null !== this.overdelivery_micros && void 0 !== this.overdelivery_micros && (e.writeFieldBegin("overdelivery_micros", s.Type.I64, 21), e.writeI64(this.overdelivery_micros), e.writeFieldEnd()), null !== this.total_refund_micros && void 0 !== this.total_refund_micros && (e.writeFieldBegin("total_refund_micros", s.Type.I64, 22), e.writeI64(this.total_refund_micros), e.writeFieldEnd()), null !== this.overwrite && void 0 !== this.overwrite && (e.writeFieldBegin("overwrite", s.Type.BOOL, 23), e.writeBool(this.overwrite), e.writeFieldEnd()), null !== this.payment_id && void 0 !== this.payment_id && (e.writeFieldBegin("payment_id", s.Type.STRING, 24), e.writeString(this.payment_id), e.writeFieldEnd()), null !== this.original_payment_id && void 0 !== this.original_payment_id && (e.writeFieldBegin("original_payment_id", s.Type.STRING, 25), e.writeString(this.original_payment_id), e.writeFieldEnd()), null !== this.legacy_transaction_id && void 0 !== this.legacy_transaction_id && (e.writeFieldBegin("legacy_transaction_id", s.Type.STRING, 26), e.writeString(this.legacy_transaction_id), e.writeFieldEnd()), null !== this.active && void 0 !== this.active && (e.writeFieldBegin("active", s.Type.BOOL, 27), e.writeBool(this.active), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/gold_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.GoldPurchase = function(e) {
					this.type = null, this.number_months = null, this.one_time_type = null, this.gift_user_id = null, this.gift_anonymous = null, this.gift_message = null, this.gift_message_length = null, this.number_creddits = null, this.subscription_type = null, this.gilded_content = null, this.source = null, this.number_coins = null, this.number_coins_monthly = null, this.number_coins_bonus = null, this.transaction_id = null, this.content_type = null, this.default_option = null, this.default_anonymous = null, this.purchased_coins = null, this.proxy_for_user_id = null, this.award_id = null, this.award_name = null, this.is_mod_award = null, this.available_award_ids = null, this.number_coins_to_recipient = null, this.number_coins_to_community = null, this.start_timestamp = null, this.end_timestamp = null, this.gift_public = null, this.number_free_coins = null, this.number_paid_coins = null, this.paid_coins_revenue_pennies = null, this.coin_package_id = null, this.is_temporary_award = null, e && (void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.number_months && null !== e.number_months && (this.number_months = e.number_months), void 0 !== e.one_time_type && null !== e.one_time_type && (this.one_time_type = e.one_time_type), void 0 !== e.gift_user_id && null !== e.gift_user_id && (this.gift_user_id = e.gift_user_id), void 0 !== e.gift_anonymous && null !== e.gift_anonymous && (this.gift_anonymous = e.gift_anonymous), void 0 !== e.gift_message && null !== e.gift_message && (this.gift_message = e.gift_message), void 0 !== e.gift_message_length && null !== e.gift_message_length && (this.gift_message_length = e.gift_message_length), void 0 !== e.number_creddits && null !== e.number_creddits && (this.number_creddits = e.number_creddits), void 0 !== e.subscription_type && null !== e.subscription_type && (this.subscription_type = e.subscription_type), void 0 !== e.gilded_content && null !== e.gilded_content && (this.gilded_content = e.gilded_content), void 0 !== e.source && null !== e.source && (this.source = e.source), void 0 !== e.number_coins && null !== e.number_coins && (this.number_coins = e.number_coins), void 0 !== e.number_coins_monthly && null !== e.number_coins_monthly && (this.number_coins_monthly = e.number_coins_monthly), void 0 !== e.number_coins_bonus && null !== e.number_coins_bonus && (this.number_coins_bonus = e.number_coins_bonus), void 0 !== e.transaction_id && null !== e.transaction_id && (this.transaction_id = e.transaction_id), void 0 !== e.content_type && null !== e.content_type && (this.content_type = e.content_type), void 0 !== e.default_option && null !== e.default_option && (this.default_option = e.default_option), void 0 !== e.default_anonymous && null !== e.default_anonymous && (this.default_anonymous = e.default_anonymous), void 0 !== e.purchased_coins && null !== e.purchased_coins && (this.purchased_coins = e.purchased_coins), void 0 !== e.proxy_for_user_id && null !== e.proxy_for_user_id && (this.proxy_for_user_id = e.proxy_for_user_id), void 0 !== e.award_id && null !== e.award_id && (this.award_id = e.award_id), void 0 !== e.award_name && null !== e.award_name && (this.award_name = e.award_name), void 0 !== e.is_mod_award && null !== e.is_mod_award && (this.is_mod_award = e.is_mod_award), void 0 !== e.available_award_ids && null !== e.available_award_ids && (this.available_award_ids = s.copyList(e.available_award_ids, [null])), void 0 !== e.number_coins_to_recipient && null !== e.number_coins_to_recipient && (this.number_coins_to_recipient = e.number_coins_to_recipient), void 0 !== e.number_coins_to_community && null !== e.number_coins_to_community && (this.number_coins_to_community = e.number_coins_to_community), void 0 !== e.start_timestamp && null !== e.start_timestamp && (this.start_timestamp = e.start_timestamp), void 0 !== e.end_timestamp && null !== e.end_timestamp && (this.end_timestamp = e.end_timestamp), void 0 !== e.gift_public && null !== e.gift_public && (this.gift_public = e.gift_public), void 0 !== e.number_free_coins && null !== e.number_free_coins && (this.number_free_coins = e.number_free_coins), void 0 !== e.number_paid_coins && null !== e.number_paid_coins && (this.number_paid_coins = e.number_paid_coins), void 0 !== e.paid_coins_revenue_pennies && null !== e.paid_coins_revenue_pennies && (this.paid_coins_revenue_pennies = e.paid_coins_revenue_pennies), void 0 !== e.coin_package_id && null !== e.coin_package_id && (this.coin_package_id = e.coin_package_id), void 0 !== e.is_temporary_award && null !== e.is_temporary_award && (this.is_temporary_award = e.is_temporary_award))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("GoldPurchase"), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 1), e.writeString(this.type), e.writeFieldEnd()), null !== this.number_months && void 0 !== this.number_months && (e.writeFieldBegin("number_months", s.Type.I32, 2), e.writeI32(this.number_months), e.writeFieldEnd()), null !== this.one_time_type && void 0 !== this.one_time_type && (e.writeFieldBegin("one_time_type", s.Type.STRING, 3), e.writeString(this.one_time_type), e.writeFieldEnd()), null !== this.gift_user_id && void 0 !== this.gift_user_id && (e.writeFieldBegin("gift_user_id", s.Type.STRING, 4), e.writeString(this.gift_user_id), e.writeFieldEnd()), null !== this.gift_anonymous && void 0 !== this.gift_anonymous && (e.writeFieldBegin("gift_anonymous", s.Type.BOOL, 5), e.writeBool(this.gift_anonymous), e.writeFieldEnd()), null !== this.gift_message && void 0 !== this.gift_message && (e.writeFieldBegin("gift_message", s.Type.BOOL, 6), e.writeBool(this.gift_message), e.writeFieldEnd()), null !== this.gift_message_length && void 0 !== this.gift_message_length && (e.writeFieldBegin("gift_message_length", s.Type.I32, 7), e.writeI32(this.gift_message_length), e.writeFieldEnd()), null !== this.number_creddits && void 0 !== this.number_creddits && (e.writeFieldBegin("number_creddits", s.Type.I32, 8), e.writeI32(this.number_creddits), e.writeFieldEnd()), null !== this.subscription_type && void 0 !== this.subscription_type && (e.writeFieldBegin("subscription_type", s.Type.STRING, 9), e.writeString(this.subscription_type), e.writeFieldEnd()), null !== this.gilded_content && void 0 !== this.gilded_content && (e.writeFieldBegin("gilded_content", s.Type.BOOL, 10), e.writeBool(this.gilded_content), e.writeFieldEnd()), null !== this.source && void 0 !== this.source && (e.writeFieldBegin("source", s.Type.STRING, 11), e.writeString(this.source), e.writeFieldEnd()), null !== this.number_coins && void 0 !== this.number_coins && (e.writeFieldBegin("number_coins", s.Type.I32, 12), e.writeI32(this.number_coins), e.writeFieldEnd()), null !== this.number_coins_monthly && void 0 !== this.number_coins_monthly && (e.writeFieldBegin("number_coins_monthly", s.Type.I32, 13), e.writeI32(this.number_coins_monthly), e.writeFieldEnd()), null !== this.number_coins_bonus && void 0 !== this.number_coins_bonus && (e.writeFieldBegin("number_coins_bonus", s.Type.I32, 14), e.writeI32(this.number_coins_bonus), e.writeFieldEnd()), null !== this.transaction_id && void 0 !== this.transaction_id && (e.writeFieldBegin("transaction_id", s.Type.STRING, 15), e.writeString(this.transaction_id), e.writeFieldEnd()), null !== this.content_type && void 0 !== this.content_type && (e.writeFieldBegin("content_type", s.Type.STRING, 16), e.writeString(this.content_type), e.writeFieldEnd()), null !== this.default_option && void 0 !== this.default_option && (e.writeFieldBegin("default_option", s.Type.STRING, 17), e.writeString(this.default_option), e.writeFieldEnd()), null !== this.default_anonymous && void 0 !== this.default_anonymous && (e.writeFieldBegin("default_anonymous", s.Type.BOOL, 18), e.writeBool(this.default_anonymous), e.writeFieldEnd()), null !== this.purchased_coins && void 0 !== this.purchased_coins && (e.writeFieldBegin("purchased_coins", s.Type.BOOL, 19), e.writeBool(this.purchased_coins), e.writeFieldEnd()), null !== this.proxy_for_user_id && void 0 !== this.proxy_for_user_id && (e.writeFieldBegin("proxy_for_user_id", s.Type.STRING, 20), e.writeString(this.proxy_for_user_id), e.writeFieldEnd()), null !== this.award_id && void 0 !== this.award_id && (e.writeFieldBegin("award_id", s.Type.STRING, 21), e.writeString(this.award_id), e.writeFieldEnd()), null !== this.award_name && void 0 !== this.award_name && (e.writeFieldBegin("award_name", s.Type.STRING, 22), e.writeString(this.award_name), e.writeFieldEnd()), null !== this.is_mod_award && void 0 !== this.is_mod_award && (e.writeFieldBegin("is_mod_award", s.Type.BOOL, 23), e.writeBool(this.is_mod_award), e.writeFieldEnd()), null !== this.available_award_ids && void 0 !== this.available_award_ids) {
					for (var t in e.writeFieldBegin("available_award_ids", s.Type.LIST, 24), e.writeListBegin(s.Type.STRING, this.available_award_ids.length), this.available_award_ids) this.available_award_ids.hasOwnProperty(t) && (t = this.available_award_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.number_coins_to_recipient && void 0 !== this.number_coins_to_recipient && (e.writeFieldBegin("number_coins_to_recipient", s.Type.I32, 25), e.writeI32(this.number_coins_to_recipient), e.writeFieldEnd()), null !== this.number_coins_to_community && void 0 !== this.number_coins_to_community && (e.writeFieldBegin("number_coins_to_community", s.Type.I32, 26), e.writeI32(this.number_coins_to_community), e.writeFieldEnd()), null !== this.start_timestamp && void 0 !== this.start_timestamp && (e.writeFieldBegin("start_timestamp", s.Type.I64, 27), e.writeI64(this.start_timestamp), e.writeFieldEnd()), null !== this.end_timestamp && void 0 !== this.end_timestamp && (e.writeFieldBegin("end_timestamp", s.Type.I64, 28), e.writeI64(this.end_timestamp), e.writeFieldEnd()), null !== this.gift_public && void 0 !== this.gift_public && (e.writeFieldBegin("gift_public", s.Type.BOOL, 29), e.writeBool(this.gift_public), e.writeFieldEnd()), null !== this.number_free_coins && void 0 !== this.number_free_coins && (e.writeFieldBegin("number_free_coins", s.Type.I32, 30), e.writeI32(this.number_free_coins), e.writeFieldEnd()), null !== this.number_paid_coins && void 0 !== this.number_paid_coins && (e.writeFieldBegin("number_paid_coins", s.Type.I32, 31), e.writeI32(this.number_paid_coins), e.writeFieldEnd()), null !== this.paid_coins_revenue_pennies && void 0 !== this.paid_coins_revenue_pennies && (e.writeFieldBegin("paid_coins_revenue_pennies", s.Type.I32, 32), e.writeI32(this.paid_coins_revenue_pennies), e.writeFieldEnd()), null !== this.coin_package_id && void 0 !== this.coin_package_id && (e.writeFieldBegin("coin_package_id", s.Type.STRING, 33), e.writeString(this.coin_package_id), e.writeFieldEnd()), null !== this.is_temporary_award && void 0 !== this.is_temporary_award && (e.writeFieldBegin("is_temporary_award", s.Type.BOOL, 34), e.writeBool(this.is_temporary_award), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/grapeshot_classification_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.GrapeshotClassification = function(e) {
					this.categories = null, e && void 0 !== e.categories && null !== e.categories && (this.categories = s.copyList(e.categories, [null]))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("GrapeshotClassification"), null !== this.categories && void 0 !== this.categories) {
					for (var t in e.writeFieldBegin("categories", s.Type.LIST, 1), e.writeListBegin(s.Type.STRING, this.categories.length), this.categories) this.categories.hasOwnProperty(t) && (t = this.categories[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/legal_export_request_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.LegalExportRequest = function(e) {
					this.user_ids = null, this.type = null, this.requested_information = null, this.status = null, this.due_timestamp = null, this.received_timestamp = null, this.started_timestamp = null, this.ended_timestamp = null, this.ads_data_status = null, this.gifts_data_status = null, this.has_ndo = null, e && (void 0 !== e.user_ids && null !== e.user_ids && (this.user_ids = s.copyList(e.user_ids, [null])), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.requested_information && null !== e.requested_information && (this.requested_information = s.copyList(e.requested_information, [null])), void 0 !== e.status && null !== e.status && (this.status = e.status), void 0 !== e.due_timestamp && null !== e.due_timestamp && (this.due_timestamp = e.due_timestamp), void 0 !== e.received_timestamp && null !== e.received_timestamp && (this.received_timestamp = e.received_timestamp), void 0 !== e.started_timestamp && null !== e.started_timestamp && (this.started_timestamp = e.started_timestamp), void 0 !== e.ended_timestamp && null !== e.ended_timestamp && (this.ended_timestamp = e.ended_timestamp), void 0 !== e.ads_data_status && null !== e.ads_data_status && (this.ads_data_status = e.ads_data_status), void 0 !== e.gifts_data_status && null !== e.gifts_data_status && (this.gifts_data_status = e.gifts_data_status), void 0 !== e.has_ndo && null !== e.has_ndo && (this.has_ndo = e.has_ndo))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("LegalExportRequest"), null !== this.user_ids && void 0 !== this.user_ids) {
					for (var t in e.writeFieldBegin("user_ids", s.Type.LIST, 1), e.writeListBegin(s.Type.STRING, this.user_ids.length), this.user_ids) this.user_ids.hasOwnProperty(t) && (t = this.user_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), null !== this.requested_information && void 0 !== this.requested_information) {
					for (var i in e.writeFieldBegin("requested_information", s.Type.LIST, 3), e.writeListBegin(s.Type.STRING, this.requested_information.length), this.requested_information) this.requested_information.hasOwnProperty(i) && (i = this.requested_information[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", s.Type.STRING, 4), e.writeString(this.status), e.writeFieldEnd()), null !== this.due_timestamp && void 0 !== this.due_timestamp && (e.writeFieldBegin("due_timestamp", s.Type.I64, 5), e.writeI64(this.due_timestamp), e.writeFieldEnd()), null !== this.received_timestamp && void 0 !== this.received_timestamp && (e.writeFieldBegin("received_timestamp", s.Type.I64, 6), e.writeI64(this.received_timestamp), e.writeFieldEnd()), null !== this.started_timestamp && void 0 !== this.started_timestamp && (e.writeFieldBegin("started_timestamp", s.Type.I64, 7), e.writeI64(this.started_timestamp), e.writeFieldEnd()), null !== this.ended_timestamp && void 0 !== this.ended_timestamp && (e.writeFieldBegin("ended_timestamp", s.Type.I64, 8), e.writeI64(this.ended_timestamp), e.writeFieldEnd()), null !== this.ads_data_status && void 0 !== this.ads_data_status && (e.writeFieldBegin("ads_data_status", s.Type.STRING, 9), e.writeString(this.ads_data_status), e.writeFieldEnd()), null !== this.gifts_data_status && void 0 !== this.gifts_data_status && (e.writeFieldBegin("gifts_data_status", s.Type.STRING, 10), e.writeString(this.gifts_data_status), e.writeFieldEnd()), null !== this.has_ndo && void 0 !== this.has_ndo && (e.writeFieldBegin("has_ndo", s.Type.BOOL, 11), e.writeBool(this.has_ndo), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/live_thread_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.LiveThread = function(e) {
					this.id = null, this.is_announcement = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.is_announcement && null !== e.is_announcement && (this.is_announcement = e.is_announcement))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("LiveThread"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.is_announcement && void 0 !== this.is_announcement && (e.writeFieldBegin("is_announcement", s.Type.BOOL, 2), e.writeBool(this.is_announcement), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/metaflair_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.MetaFlair = function(e) {
					if (this.id = null, this.title = null, e) {
						if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id, void 0 !== e.title && null !== e.title && (this.title = e.title)
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("MetaFlair"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", s.Type.STRING, 2), e.writeString(this.title), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/metasearch_types.js": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.array.sort.js");
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.MetaSearch = function(e) {
					if (this.display_query = null, this.raw_query = null, this.structure_type = null, this.sort = null, this.range = null, this.subreddit_id = null, this.subreddit_name = null, this.post_flair_name = null, this.meta_flair_id = null, this.meta_flair_name = null, e) {
						if (void 0 !== e.display_query && null !== e.display_query && (this.display_query = e.display_query), void 0 !== e.raw_query && null !== e.raw_query && (this.raw_query = e.raw_query), void 0 === e.structure_type || null === e.structure_type) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field structure_type is unset!");
						this.structure_type = e.structure_type, void 0 !== e.sort && null !== e.sort && (this.sort = e.sort), void 0 !== e.range && null !== e.range && (this.range = e.range), void 0 !== e.subreddit_id && null !== e.subreddit_id && (this.subreddit_id = e.subreddit_id), void 0 !== e.subreddit_name && null !== e.subreddit_name && (this.subreddit_name = e.subreddit_name), void 0 !== e.post_flair_name && null !== e.post_flair_name && (this.post_flair_name = e.post_flair_name), void 0 !== e.meta_flair_id && null !== e.meta_flair_id && (this.meta_flair_id = e.meta_flair_id), void 0 !== e.meta_flair_name && null !== e.meta_flair_name && (this.meta_flair_name = e.meta_flair_name)
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("MetaSearch"), null !== this.display_query && void 0 !== this.display_query && (e.writeFieldBegin("display_query", s.Type.STRING, 1), e.writeString(this.display_query), e.writeFieldEnd()), null !== this.raw_query && void 0 !== this.raw_query && (e.writeFieldBegin("raw_query", s.Type.STRING, 2), e.writeString(this.raw_query), e.writeFieldEnd()), null !== this.structure_type && void 0 !== this.structure_type && (e.writeFieldBegin("structure_type", s.Type.STRING, 3), e.writeString(this.structure_type), e.writeFieldEnd()), null !== this.sort && void 0 !== this.sort && (e.writeFieldBegin("sort", s.Type.STRING, 4), e.writeString(this.sort), e.writeFieldEnd()), null !== this.range && void 0 !== this.range && (e.writeFieldBegin("range", s.Type.STRING, 5), e.writeString(this.range), e.writeFieldEnd()), null !== this.subreddit_id && void 0 !== this.subreddit_id && (e.writeFieldBegin("subreddit_id", s.Type.STRING, 6), e.writeString(this.subreddit_id), e.writeFieldEnd()), null !== this.subreddit_name && void 0 !== this.subreddit_name && (e.writeFieldBegin("subreddit_name", s.Type.STRING, 7), e.writeString(this.subreddit_name), e.writeFieldEnd()), null !== this.post_flair_name && void 0 !== this.post_flair_name && (e.writeFieldBegin("post_flair_name", s.Type.STRING, 8), e.writeString(this.post_flair_name), e.writeFieldEnd()), null !== this.meta_flair_id && void 0 !== this.meta_flair_id && (e.writeFieldBegin("meta_flair_id", s.Type.STRING, 9), e.writeString(this.meta_flair_id), e.writeFieldEnd()), null !== this.meta_flair_name && void 0 !== this.meta_flair_name && (e.writeFieldBegin("meta_flair_name", s.Type.STRING, 10), e.writeString(this.meta_flair_name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/midas_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.ContentMetadata = function(e) {
					this.is_quarantined = null, this.is_nsfw = null, this.categories = null, e && (void 0 !== e.is_quarantined && null !== e.is_quarantined && (this.is_quarantined = e.is_quarantined), void 0 !== e.is_nsfw && null !== e.is_nsfw && (this.is_nsfw = e.is_nsfw), void 0 !== e.categories && null !== e.categories && (this.categories = s.copyList(e.categories, [null])))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("ContentMetadata"), null !== this.is_quarantined && void 0 !== this.is_quarantined && (e.writeFieldBegin("is_quarantined", s.Type.BOOL, 1), e.writeBool(this.is_quarantined), e.writeFieldEnd()), null !== this.is_nsfw && void 0 !== this.is_nsfw && (e.writeFieldBegin("is_nsfw", s.Type.BOOL, 2), e.writeBool(this.is_nsfw), e.writeFieldEnd()), null !== this.categories && void 0 !== this.categories) {
					for (var t in e.writeFieldBegin("categories", s.Type.LIST, 3), e.writeListBegin(s.Type.STRING, this.categories.length), this.categories) this.categories.hasOwnProperty(t) && (t = this.categories[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Geo = function(e) {
				this.country_code = null, this.region = null, this.city = null, this.time_zone = null, this.anonymous = null, this.anonymous_vpn = null, this.hosting_provider = null, this.public_proxy = null, this.tor_exit_node = null, this.metro_code = null, e && (void 0 !== e.country_code && null !== e.country_code && (this.country_code = e.country_code), void 0 !== e.region && null !== e.region && (this.region = e.region), void 0 !== e.city && null !== e.city && (this.city = e.city), void 0 !== e.time_zone && null !== e.time_zone && (this.time_zone = e.time_zone), void 0 !== e.anonymous && null !== e.anonymous && (this.anonymous = e.anonymous), void 0 !== e.anonymous_vpn && null !== e.anonymous_vpn && (this.anonymous_vpn = e.anonymous_vpn), void 0 !== e.hosting_provider && null !== e.hosting_provider && (this.hosting_provider = e.hosting_provider), void 0 !== e.public_proxy && null !== e.public_proxy && (this.public_proxy = e.public_proxy), void 0 !== e.tor_exit_node && null !== e.tor_exit_node && (this.tor_exit_node = e.tor_exit_node), void 0 !== e.metro_code && null !== e.metro_code && (this.metro_code = e.metro_code))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("Geo"), null !== this.country_code && void 0 !== this.country_code && (e.writeFieldBegin("country_code", s.Type.STRING, 1), e.writeString(this.country_code), e.writeFieldEnd()), null !== this.region && void 0 !== this.region && (e.writeFieldBegin("region", s.Type.STRING, 2), e.writeString(this.region), e.writeFieldEnd()), null !== this.city && void 0 !== this.city && (e.writeFieldBegin("city", s.Type.STRING, 3), e.writeString(this.city), e.writeFieldEnd()), null !== this.time_zone && void 0 !== this.time_zone && (e.writeFieldBegin("time_zone", s.Type.STRING, 4), e.writeString(this.time_zone), e.writeFieldEnd()), null !== this.anonymous && void 0 !== this.anonymous && (e.writeFieldBegin("anonymous", s.Type.BOOL, 5), e.writeBool(this.anonymous), e.writeFieldEnd()), null !== this.anonymous_vpn && void 0 !== this.anonymous_vpn && (e.writeFieldBegin("anonymous_vpn", s.Type.BOOL, 6), e.writeBool(this.anonymous_vpn), e.writeFieldEnd()), null !== this.hosting_provider && void 0 !== this.hosting_provider && (e.writeFieldBegin("hosting_provider", s.Type.BOOL, 7), e.writeBool(this.hosting_provider), e.writeFieldEnd()), null !== this.public_proxy && void 0 !== this.public_proxy && (e.writeFieldBegin("public_proxy", s.Type.BOOL, 8), e.writeBool(this.public_proxy), e.writeFieldEnd()), null !== this.tor_exit_node && void 0 !== this.tor_exit_node && (e.writeFieldBegin("tor_exit_node", s.Type.BOOL, 9), e.writeBool(this.tor_exit_node), e.writeFieldEnd()), null !== this.metro_code && void 0 !== this.metro_code && (e.writeFieldBegin("metro_code", s.Type.I64, 10), e.writeI64(this.metro_code), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.UrlParsed = function(e) {
				this.shared_timestamp = null, this.utm_source = null, this.utm_name = null, this.shared_hash = null, this.utm_campaign = null, this.utm_content = null, this.utm_medium = null, this.utm_term = null, e && (void 0 !== e.shared_timestamp && null !== e.shared_timestamp && (this.shared_timestamp = e.shared_timestamp), void 0 !== e.utm_source && null !== e.utm_source && (this.utm_source = e.utm_source), void 0 !== e.utm_name && null !== e.utm_name && (this.utm_name = e.utm_name), void 0 !== e.shared_hash && null !== e.shared_hash && (this.shared_hash = e.shared_hash), void 0 !== e.utm_campaign && null !== e.utm_campaign && (this.utm_campaign = e.utm_campaign), void 0 !== e.utm_content && null !== e.utm_content && (this.utm_content = e.utm_content), void 0 !== e.utm_medium && null !== e.utm_medium && (this.utm_medium = e.utm_medium), void 0 !== e.utm_term && null !== e.utm_term && (this.utm_term = e.utm_term))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("UrlParsed"), null !== this.shared_timestamp && void 0 !== this.shared_timestamp && (e.writeFieldBegin("shared_timestamp", s.Type.I64, 1), e.writeI64(this.shared_timestamp), e.writeFieldEnd()), null !== this.utm_source && void 0 !== this.utm_source && (e.writeFieldBegin("utm_source", s.Type.STRING, 2), e.writeString(this.utm_source), e.writeFieldEnd()), null !== this.utm_name && void 0 !== this.utm_name && (e.writeFieldBegin("utm_name", s.Type.STRING, 3), e.writeString(this.utm_name), e.writeFieldEnd()), null !== this.shared_hash && void 0 !== this.shared_hash && (e.writeFieldBegin("shared_hash", s.Type.STRING, 4), e.writeString(this.shared_hash), e.writeFieldEnd()), null !== this.utm_campaign && void 0 !== this.utm_campaign && (e.writeFieldBegin("utm_campaign", s.Type.STRING, 5), e.writeString(this.utm_campaign), e.writeFieldEnd()), null !== this.utm_content && void 0 !== this.utm_content && (e.writeFieldBegin("utm_content", s.Type.STRING, 6), e.writeString(this.utm_content), e.writeFieldEnd()), null !== this.utm_medium && void 0 !== this.utm_medium && (e.writeFieldBegin("utm_medium", s.Type.STRING, 7), e.writeString(this.utm_medium), e.writeFieldEnd()), null !== this.utm_term && void 0 !== this.utm_term && (e.writeFieldBegin("utm_term", s.Type.STRING, 8), e.writeString(this.utm_term), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var l = e.exports.LinkSharing = function(e) {
				this.shared_at_timestamp = null, e && void 0 !== e.shared_at_timestamp && null !== e.shared_at_timestamp && (this.shared_at_timestamp = e.shared_at_timestamp)
			};
			l.prototype = {}, l.prototype.write = function(e) {
				e.writeStructBegin("LinkSharing"), null !== this.shared_at_timestamp && void 0 !== this.shared_at_timestamp && (e.writeFieldBegin("shared_at_timestamp", s.Type.I64, 1), e.writeI64(this.shared_at_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var a = e.exports.Inferred = function(e) {
				this.app_name = null, this.client_ip = null, this.user_agent_web_crawler = null, this.post_impression_id = null, this.json_byte_size = null, this.isp_organization = null, e && (void 0 !== e.app_name && null !== e.app_name && (this.app_name = e.app_name), void 0 !== e.client_ip && null !== e.client_ip && (this.client_ip = e.client_ip), void 0 !== e.user_agent_web_crawler && null !== e.user_agent_web_crawler && (this.user_agent_web_crawler = e.user_agent_web_crawler), void 0 !== e.post_impression_id && null !== e.post_impression_id && (this.post_impression_id = e.post_impression_id), void 0 !== e.json_byte_size && null !== e.json_byte_size && (this.json_byte_size = e.json_byte_size), void 0 !== e.isp_organization && null !== e.isp_organization && (this.isp_organization = e.isp_organization))
			};
			a.prototype = {}, a.prototype.write = function(e) {
				e.writeStructBegin("Inferred"), null !== this.app_name && void 0 !== this.app_name && (e.writeFieldBegin("app_name", s.Type.STRING, 1), e.writeString(this.app_name), e.writeFieldEnd()), null !== this.client_ip && void 0 !== this.client_ip && (e.writeFieldBegin("client_ip", s.Type.STRING, 2), e.writeString(this.client_ip), e.writeFieldEnd()), null !== this.user_agent_web_crawler && void 0 !== this.user_agent_web_crawler && (e.writeFieldBegin("user_agent_web_crawler", s.Type.BOOL, 3), e.writeBool(this.user_agent_web_crawler), e.writeFieldEnd()), null !== this.post_impression_id && void 0 !== this.post_impression_id && (e.writeFieldBegin("post_impression_id", s.Type.I64, 4), e.writeI64(this.post_impression_id), e.writeFieldEnd()), null !== this.json_byte_size && void 0 !== this.json_byte_size && (e.writeFieldBegin("json_byte_size", s.Type.I64, 5), e.writeI64(this.json_byte_size), e.writeFieldEnd()), null !== this.isp_organization && void 0 !== this.isp_organization && (e.writeFieldBegin("isp_organization", s.Type.STRING, 6), e.writeString(this.isp_organization), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/ml_model_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.MLModel = function(e) {
					this.name = null, this.version = null, this.owner = null, this.prediction = null, this.features = null, this.prediction_id = null, this.client_name = null, this.prediction_scores = null, this.type = null, e && (void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.version && null !== e.version && (this.version = e.version), void 0 !== e.owner && null !== e.owner && (this.owner = e.owner), void 0 !== e.prediction && null !== e.prediction && (this.prediction = e.prediction), void 0 !== e.features && null !== e.features && (this.features = e.features), void 0 !== e.prediction_id && null !== e.prediction_id && (this.prediction_id = e.prediction_id), void 0 !== e.client_name && null !== e.client_name && (this.client_name = e.client_name), void 0 !== e.prediction_scores && null !== e.prediction_scores && (this.prediction_scores = e.prediction_scores), void 0 !== e.type && null !== e.type && (this.type = e.type))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("MLModel"), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 1), e.writeString(this.name), e.writeFieldEnd()), null !== this.version && void 0 !== this.version && (e.writeFieldBegin("version", s.Type.STRING, 2), e.writeString(this.version), e.writeFieldEnd()), null !== this.owner && void 0 !== this.owner && (e.writeFieldBegin("owner", s.Type.STRING, 3), e.writeString(this.owner), e.writeFieldEnd()), null !== this.prediction && void 0 !== this.prediction && (e.writeFieldBegin("prediction", s.Type.STRING, 4), e.writeString(this.prediction), e.writeFieldEnd()), null !== this.features && void 0 !== this.features && (e.writeFieldBegin("features", s.Type.STRING, 5), e.writeString(this.features), e.writeFieldEnd()), null !== this.prediction_id && void 0 !== this.prediction_id && (e.writeFieldBegin("prediction_id", s.Type.STRING, 6), e.writeString(this.prediction_id), e.writeFieldEnd()), null !== this.client_name && void 0 !== this.client_name && (e.writeFieldBegin("client_name", s.Type.STRING, 7), e.writeString(this.client_name), e.writeFieldEnd()), null !== this.prediction_scores && void 0 !== this.prediction_scores && (e.writeFieldBegin("prediction_scores", s.Type.STRING, 8), e.writeString(this.prediction_scores), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 9), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/moderator_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.ModAction = function(e) {
					this.target_user_id = null, this.is_automoderator = null, this.is_target_removed_by_steward = null, e && (void 0 !== e.target_user_id && null !== e.target_user_id && (this.target_user_id = e.target_user_id), void 0 !== e.is_automoderator && null !== e.is_automoderator && (this.is_automoderator = e.is_automoderator), void 0 !== e.is_target_removed_by_steward && null !== e.is_target_removed_by_steward && (this.is_target_removed_by_steward = e.is_target_removed_by_steward))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("ModAction"), null !== this.target_user_id && void 0 !== this.target_user_id && (e.writeFieldBegin("target_user_id", s.Type.STRING, 1), e.writeString(this.target_user_id), e.writeFieldEnd()), null !== this.is_automoderator && void 0 !== this.is_automoderator && (e.writeFieldBegin("is_automoderator", s.Type.BOOL, 2), e.writeBool(this.is_automoderator), e.writeFieldEnd()), null !== this.is_target_removed_by_steward && void 0 !== this.is_target_removed_by_steward && (e.writeFieldBegin("is_target_removed_by_steward", s.Type.BOOL, 3), e.writeBool(this.is_target_removed_by_steward), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/notification_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.MailroomRequest = function(e) {
					this.message_id = null, this.message_type = null, this.dropped_by = null, this.delivery_queue_name = null, this.notification_transport = null, this.notification_target = null, this.message_variant = null, this.region = null, this.region_num = null, e && (void 0 !== e.message_id && null !== e.message_id && (this.message_id = e.message_id), void 0 !== e.message_type && null !== e.message_type && (this.message_type = e.message_type), void 0 !== e.dropped_by && null !== e.dropped_by && (this.dropped_by = e.dropped_by), void 0 !== e.delivery_queue_name && null !== e.delivery_queue_name && (this.delivery_queue_name = e.delivery_queue_name), void 0 !== e.notification_transport && null !== e.notification_transport && (this.notification_transport = e.notification_transport), void 0 !== e.notification_target && null !== e.notification_target && (this.notification_target = e.notification_target), void 0 !== e.message_variant && null !== e.message_variant && (this.message_variant = e.message_variant), void 0 !== e.region && null !== e.region && (this.region = e.region), void 0 !== e.region_num && null !== e.region_num && (this.region_num = e.region_num))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("MailroomRequest"), null !== this.message_id && void 0 !== this.message_id && (e.writeFieldBegin("message_id", s.Type.STRING, 1), e.writeString(this.message_id), e.writeFieldEnd()), null !== this.message_type && void 0 !== this.message_type && (e.writeFieldBegin("message_type", s.Type.STRING, 2), e.writeString(this.message_type), e.writeFieldEnd()), null !== this.dropped_by && void 0 !== this.dropped_by && (e.writeFieldBegin("dropped_by", s.Type.STRING, 3), e.writeString(this.dropped_by), e.writeFieldEnd()), null !== this.delivery_queue_name && void 0 !== this.delivery_queue_name && (e.writeFieldBegin("delivery_queue_name", s.Type.STRING, 4), e.writeString(this.delivery_queue_name), e.writeFieldEnd()), null !== this.notification_transport && void 0 !== this.notification_transport && (e.writeFieldBegin("notification_transport", s.Type.STRING, 5), e.writeString(this.notification_transport), e.writeFieldEnd()), null !== this.notification_target && void 0 !== this.notification_target && (e.writeFieldBegin("notification_target", s.Type.STRING, 6), e.writeString(this.notification_target), e.writeFieldEnd()), null !== this.message_variant && void 0 !== this.message_variant && (e.writeFieldBegin("message_variant", s.Type.STRING, 7), e.writeString(this.message_variant), e.writeFieldEnd()), null !== this.region && void 0 !== this.region && (e.writeFieldBegin("region", s.Type.STRING, 8), e.writeString(this.region), e.writeFieldEnd()), null !== this.region_num && void 0 !== this.region_num && (e.writeFieldBegin("region_num", s.Type.I32, 9), e.writeI32(this.region_num), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.MessengerRequest = function(e) {
				this.message_type = null, this.dropped_reason = null, this.queue_name = null, e && (void 0 !== e.message_type && null !== e.message_type && (this.message_type = e.message_type), void 0 !== e.dropped_reason && null !== e.dropped_reason && (this.dropped_reason = e.dropped_reason), void 0 !== e.queue_name && null !== e.queue_name && (this.queue_name = e.queue_name))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("MessengerRequest"), null !== this.message_type && void 0 !== this.message_type && (e.writeFieldBegin("message_type", s.Type.STRING, 1), e.writeString(this.message_type), e.writeFieldEnd()), null !== this.dropped_reason && void 0 !== this.dropped_reason && (e.writeFieldBegin("dropped_reason", s.Type.STRING, 2), e.writeString(this.dropped_reason), e.writeFieldEnd()), null !== this.queue_name && void 0 !== this.queue_name && (e.writeFieldBegin("queue_name", s.Type.STRING, 3), e.writeString(this.queue_name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.NotificationRequest = function(e) {
				this.message_id = null, this.status = null, this.platform = null, this.failure_reason = null, this.source_queue_name = null, this.recipient_app_name = null, this.recipient_device_id = null, e && (void 0 !== e.message_id && null !== e.message_id && (this.message_id = e.message_id), void 0 !== e.status && null !== e.status && (this.status = e.status), void 0 !== e.platform && null !== e.platform && (this.platform = e.platform), void 0 !== e.failure_reason && null !== e.failure_reason && (this.failure_reason = e.failure_reason), void 0 !== e.source_queue_name && null !== e.source_queue_name && (this.source_queue_name = e.source_queue_name), void 0 !== e.recipient_app_name && null !== e.recipient_app_name && (this.recipient_app_name = e.recipient_app_name), void 0 !== e.recipient_device_id && null !== e.recipient_device_id && (this.recipient_device_id = e.recipient_device_id))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("NotificationRequest"), null !== this.message_id && void 0 !== this.message_id && (e.writeFieldBegin("message_id", s.Type.STRING, 1), e.writeString(this.message_id), e.writeFieldEnd()), null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", s.Type.STRING, 2), e.writeString(this.status), e.writeFieldEnd()), null !== this.platform && void 0 !== this.platform && (e.writeFieldBegin("platform", s.Type.STRING, 3), e.writeString(this.platform), e.writeFieldEnd()), null !== this.failure_reason && void 0 !== this.failure_reason && (e.writeFieldBegin("failure_reason", s.Type.STRING, 4), e.writeString(this.failure_reason), e.writeFieldEnd()), null !== this.source_queue_name && void 0 !== this.source_queue_name && (e.writeFieldBegin("source_queue_name", s.Type.STRING, 5), e.writeString(this.source_queue_name), e.writeFieldEnd()), null !== this.recipient_app_name && void 0 !== this.recipient_app_name && (e.writeFieldBegin("recipient_app_name", s.Type.STRING, 6), e.writeString(this.recipient_app_name), e.writeFieldEnd()), null !== this.recipient_device_id && void 0 !== this.recipient_device_id && (e.writeFieldBegin("recipient_device_id", s.Type.STRING, 7), e.writeString(this.recipient_device_id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/outbound_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Outbound = function(e) {
					if (this.url = null, this.post_id = null, this.subreddit_id = null, this.comment_id = null, this.subreddit_name = null, this.source_element = null, e) {
						if (void 0 === e.url || null === e.url) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field url is unset!");
						this.url = e.url, void 0 !== e.post_id && null !== e.post_id && (this.post_id = e.post_id), void 0 !== e.subreddit_id && null !== e.subreddit_id && (this.subreddit_id = e.subreddit_id), void 0 !== e.comment_id && null !== e.comment_id && (this.comment_id = e.comment_id), void 0 !== e.subreddit_name && null !== e.subreddit_name && (this.subreddit_name = e.subreddit_name), void 0 !== e.source_element && null !== e.source_element && (this.source_element = e.source_element)
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Outbound"), null !== this.url && void 0 !== this.url && (e.writeFieldBegin("url", s.Type.STRING, 1), e.writeString(this.url), e.writeFieldEnd()), null !== this.post_id && void 0 !== this.post_id && (e.writeFieldBegin("post_id", s.Type.STRING, 2), e.writeString(this.post_id), e.writeFieldEnd()), null !== this.subreddit_id && void 0 !== this.subreddit_id && (e.writeFieldBegin("subreddit_id", s.Type.STRING, 3), e.writeString(this.subreddit_id), e.writeFieldEnd()), null !== this.comment_id && void 0 !== this.comment_id && (e.writeFieldBegin("comment_id", s.Type.STRING, 4), e.writeString(this.comment_id), e.writeFieldEnd()), null !== this.subreddit_name && void 0 !== this.subreddit_name && (e.writeFieldBegin("subreddit_name", s.Type.STRING, 5), e.writeString(this.subreddit_name), e.writeFieldEnd()), null !== this.source_element && void 0 !== this.source_element && (e.writeFieldBegin("source_element", s.Type.STRING, 6), e.writeString(this.source_element), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/payment_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Payment = function(e) {
					this.method = null, this.currency = null, this.amount_in_smallest_denom = null, this.default_option = null, this.stored_credit_card_state = null, e && (void 0 !== e.method && null !== e.method && (this.method = e.method), void 0 !== e.currency && null !== e.currency && (this.currency = e.currency), void 0 !== e.amount_in_smallest_denom && null !== e.amount_in_smallest_denom && (this.amount_in_smallest_denom = e.amount_in_smallest_denom), void 0 !== e.default_option && null !== e.default_option && (this.default_option = e.default_option), void 0 !== e.stored_credit_card_state && null !== e.stored_credit_card_state && (this.stored_credit_card_state = e.stored_credit_card_state))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Payment"), null !== this.method && void 0 !== this.method && (e.writeFieldBegin("method", s.Type.STRING, 1), e.writeString(this.method), e.writeFieldEnd()), null !== this.currency && void 0 !== this.currency && (e.writeFieldBegin("currency", s.Type.STRING, 2), e.writeString(this.currency), e.writeFieldEnd()), null !== this.amount_in_smallest_denom && void 0 !== this.amount_in_smallest_denom && (e.writeFieldBegin("amount_in_smallest_denom", s.Type.I64, 3), e.writeI64(this.amount_in_smallest_denom), e.writeFieldEnd()), null !== this.default_option && void 0 !== this.default_option && (e.writeFieldBegin("default_option", s.Type.STRING, 4), e.writeString(this.default_option), e.writeFieldEnd()), null !== this.stored_credit_card_state && void 0 !== this.stored_credit_card_state && (e.writeFieldBegin("stored_credit_card_state", s.Type.STRING, 5), e.writeString(this.stored_credit_card_state), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/perspective_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Perspective = function(e) {
					this.collapse_reasons = null, this.toxicity = null, this.severe_toxicity = null, this.insult = null, this.profanity = null, this.sexually_explicit = null, this.threat = null, this.flirtation = null, this.attack_on_author = null, this.attack_on_commenter = null, this.incoherent = null, this.inflammatory = null, this.likely_to_reject = null, this.obscene = null, this.spam = null, this.unsubstantial = null, this.identity_attack = null, e && (void 0 !== e.collapse_reasons && null !== e.collapse_reasons && (this.collapse_reasons = s.copyList(e.collapse_reasons, [null])), void 0 !== e.toxicity && null !== e.toxicity && (this.toxicity = e.toxicity), void 0 !== e.severe_toxicity && null !== e.severe_toxicity && (this.severe_toxicity = e.severe_toxicity), void 0 !== e.insult && null !== e.insult && (this.insult = e.insult), void 0 !== e.profanity && null !== e.profanity && (this.profanity = e.profanity), void 0 !== e.sexually_explicit && null !== e.sexually_explicit && (this.sexually_explicit = e.sexually_explicit), void 0 !== e.threat && null !== e.threat && (this.threat = e.threat), void 0 !== e.flirtation && null !== e.flirtation && (this.flirtation = e.flirtation), void 0 !== e.attack_on_author && null !== e.attack_on_author && (this.attack_on_author = e.attack_on_author), void 0 !== e.attack_on_commenter && null !== e.attack_on_commenter && (this.attack_on_commenter = e.attack_on_commenter), void 0 !== e.incoherent && null !== e.incoherent && (this.incoherent = e.incoherent), void 0 !== e.inflammatory && null !== e.inflammatory && (this.inflammatory = e.inflammatory), void 0 !== e.likely_to_reject && null !== e.likely_to_reject && (this.likely_to_reject = e.likely_to_reject), void 0 !== e.obscene && null !== e.obscene && (this.obscene = e.obscene), void 0 !== e.spam && null !== e.spam && (this.spam = e.spam), void 0 !== e.unsubstantial && null !== e.unsubstantial && (this.unsubstantial = e.unsubstantial), void 0 !== e.identity_attack && null !== e.identity_attack && (this.identity_attack = e.identity_attack))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("Perspective"), null !== this.collapse_reasons && void 0 !== this.collapse_reasons) {
					for (var t in e.writeFieldBegin("collapse_reasons", s.Type.LIST, 1), e.writeListBegin(s.Type.STRING, this.collapse_reasons.length), this.collapse_reasons) this.collapse_reasons.hasOwnProperty(t) && (t = this.collapse_reasons[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.toxicity && void 0 !== this.toxicity && (e.writeFieldBegin("toxicity", s.Type.DOUBLE, 50), e.writeDouble(this.toxicity), e.writeFieldEnd()), null !== this.severe_toxicity && void 0 !== this.severe_toxicity && (e.writeFieldBegin("severe_toxicity", s.Type.DOUBLE, 51), e.writeDouble(this.severe_toxicity), e.writeFieldEnd()), null !== this.insult && void 0 !== this.insult && (e.writeFieldBegin("insult", s.Type.DOUBLE, 53), e.writeDouble(this.insult), e.writeFieldEnd()), null !== this.profanity && void 0 !== this.profanity && (e.writeFieldBegin("profanity", s.Type.DOUBLE, 54), e.writeDouble(this.profanity), e.writeFieldEnd()), null !== this.sexually_explicit && void 0 !== this.sexually_explicit && (e.writeFieldBegin("sexually_explicit", s.Type.DOUBLE, 55), e.writeDouble(this.sexually_explicit), e.writeFieldEnd()), null !== this.threat && void 0 !== this.threat && (e.writeFieldBegin("threat", s.Type.DOUBLE, 56), e.writeDouble(this.threat), e.writeFieldEnd()), null !== this.flirtation && void 0 !== this.flirtation && (e.writeFieldBegin("flirtation", s.Type.DOUBLE, 57), e.writeDouble(this.flirtation), e.writeFieldEnd()), null !== this.attack_on_author && void 0 !== this.attack_on_author && (e.writeFieldBegin("attack_on_author", s.Type.DOUBLE, 58), e.writeDouble(this.attack_on_author), e.writeFieldEnd()), null !== this.attack_on_commenter && void 0 !== this.attack_on_commenter && (e.writeFieldBegin("attack_on_commenter", s.Type.DOUBLE, 59), e.writeDouble(this.attack_on_commenter), e.writeFieldEnd()), null !== this.incoherent && void 0 !== this.incoherent && (e.writeFieldBegin("incoherent", s.Type.DOUBLE, 60), e.writeDouble(this.incoherent), e.writeFieldEnd()), null !== this.inflammatory && void 0 !== this.inflammatory && (e.writeFieldBegin("inflammatory", s.Type.DOUBLE, 61), e.writeDouble(this.inflammatory), e.writeFieldEnd()), null !== this.likely_to_reject && void 0 !== this.likely_to_reject && (e.writeFieldBegin("likely_to_reject", s.Type.DOUBLE, 62), e.writeDouble(this.likely_to_reject), e.writeFieldEnd()), null !== this.obscene && void 0 !== this.obscene && (e.writeFieldBegin("obscene", s.Type.DOUBLE, 63), e.writeDouble(this.obscene), e.writeFieldEnd()), null !== this.spam && void 0 !== this.spam && (e.writeFieldBegin("spam", s.Type.DOUBLE, 64), e.writeDouble(this.spam), e.writeFieldEnd()), null !== this.unsubstantial && void 0 !== this.unsubstantial && (e.writeFieldBegin("unsubstantial", s.Type.DOUBLE, 65), e.writeDouble(this.unsubstantial), e.writeFieldEnd()), null !== this.identity_attack && void 0 !== this.identity_attack && (e.writeFieldBegin("identity_attack", s.Type.DOUBLE, 66), e.writeDouble(this.identity_attack), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/poll_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, e.exports = {}, e.exports.Poll = function(e) {
					this.options_length = null, this.options = null, this.user_vote = null, e && (void 0 !== e.options_length && null !== e.options_length && (this.options_length = e.options_length), void 0 !== e.options && null !== e.options && (this.options = s.copyList(e.options, [null])), void 0 !== e.user_vote && null !== e.user_vote && (this.user_vote = e.user_vote))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("Poll"), null !== this.options_length && void 0 !== this.options_length && (e.writeFieldBegin("options_length", s.Type.I32, 1), e.writeI32(this.options_length), e.writeFieldEnd()), null !== this.options && void 0 !== this.options) {
					for (var t in e.writeFieldBegin("options", s.Type.LIST, 2), e.writeListBegin(s.Type.STRING, this.options.length), this.options) this.options.hasOwnProperty(t) && (t = this.options[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.user_vote && void 0 !== this.user_vote && (e.writeFieldBegin("user_vote", s.Type.I32, 3), e.writeI32(this.user_vote), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/popup_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Popup = function(e) {
					this.id = null, this.button_text = null, this.text = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.button_text && null !== e.button_text && (this.button_text = e.button_text), void 0 !== e.text && null !== e.text && (this.text = e.text))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Popup"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.button_text && void 0 !== this.button_text && (e.writeFieldBegin("button_text", s.Type.STRING, 2), e.writeString(this.button_text), e.writeFieldEnd()), null !== this.text && void 0 !== this.text && (e.writeFieldBegin("text", s.Type.STRING, 3), e.writeString(this.text), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/post_draft_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.PostDraft = function(e) {
					this.id = null, this.type = null, this.author_id = null, this.created_timestamp = null, this.title_length = null, this.url_length = null, this.body_text_length = null, this.nsfw = null, this.spoiler = null, this.original_content = null, this.flair = null, this.number_rte_images = null, this.number_rte_videos = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.author_id && null !== e.author_id && (this.author_id = e.author_id), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.title_length && null !== e.title_length && (this.title_length = e.title_length), void 0 !== e.url_length && null !== e.url_length && (this.url_length = e.url_length), void 0 !== e.body_text_length && null !== e.body_text_length && (this.body_text_length = e.body_text_length), void 0 !== e.nsfw && null !== e.nsfw && (this.nsfw = e.nsfw), void 0 !== e.spoiler && null !== e.spoiler && (this.spoiler = e.spoiler), void 0 !== e.original_content && null !== e.original_content && (this.original_content = e.original_content), void 0 !== e.flair && null !== e.flair && (this.flair = e.flair), void 0 !== e.number_rte_images && null !== e.number_rte_images && (this.number_rte_images = e.number_rte_images), void 0 !== e.number_rte_videos && null !== e.number_rte_videos && (this.number_rte_videos = e.number_rte_videos))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("PostDraft"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), null !== this.author_id && void 0 !== this.author_id && (e.writeFieldBegin("author_id", s.Type.STRING, 3), e.writeString(this.author_id), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", s.Type.I64, 4), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.title_length && void 0 !== this.title_length && (e.writeFieldBegin("title_length", s.Type.I32, 5), e.writeI32(this.title_length), e.writeFieldEnd()), null !== this.url_length && void 0 !== this.url_length && (e.writeFieldBegin("url_length", s.Type.I32, 6), e.writeI32(this.url_length), e.writeFieldEnd()), null !== this.body_text_length && void 0 !== this.body_text_length && (e.writeFieldBegin("body_text_length", s.Type.I32, 7), e.writeI32(this.body_text_length), e.writeFieldEnd()), null !== this.nsfw && void 0 !== this.nsfw && (e.writeFieldBegin("nsfw", s.Type.BOOL, 8), e.writeBool(this.nsfw), e.writeFieldEnd()), null !== this.spoiler && void 0 !== this.spoiler && (e.writeFieldBegin("spoiler", s.Type.BOOL, 9), e.writeBool(this.spoiler), e.writeFieldEnd()), null !== this.original_content && void 0 !== this.original_content && (e.writeFieldBegin("original_content", s.Type.BOOL, 10), e.writeBool(this.original_content), e.writeFieldEnd()), null !== this.flair && void 0 !== this.flair && (e.writeFieldBegin("flair", s.Type.STRING, 11), e.writeString(this.flair), e.writeFieldEnd()), null !== this.number_rte_images && void 0 !== this.number_rte_images && (e.writeFieldBegin("number_rte_images", s.Type.I32, 12), e.writeI32(this.number_rte_images), e.writeFieldEnd()), null !== this.number_rte_videos && void 0 !== this.number_rte_videos && (e.writeFieldBegin("number_rte_videos", s.Type.I32, 13), e.writeI32(this.number_rte_videos), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/post_requirement_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.PostRequirement = function(e) {
					this.title_required_strings = null, this.title_blacklisted_strings = null, this.title_text_min_length = null, this.title_text_max_length = null, this.body_restriction_policy = null, this.body_required_strings = null, this.body_blacklisted_strings = null, this.link_whitelisted_domains_length = null, this.link_blacklisted_domains_length = null, this.number_repost_frequency_days = null, this.require_post_flair = null, this.title_regex_patterns = null, this.body_regex_patterns = null, e && (void 0 !== e.title_required_strings && null !== e.title_required_strings && (this.title_required_strings = s.copyList(e.title_required_strings, [null])), void 0 !== e.title_blacklisted_strings && null !== e.title_blacklisted_strings && (this.title_blacklisted_strings = s.copyList(e.title_blacklisted_strings, [null])), void 0 !== e.title_text_min_length && null !== e.title_text_min_length && (this.title_text_min_length = e.title_text_min_length), void 0 !== e.title_text_max_length && null !== e.title_text_max_length && (this.title_text_max_length = e.title_text_max_length), void 0 !== e.body_restriction_policy && null !== e.body_restriction_policy && (this.body_restriction_policy = e.body_restriction_policy), void 0 !== e.body_required_strings && null !== e.body_required_strings && (this.body_required_strings = s.copyList(e.body_required_strings, [null])), void 0 !== e.body_blacklisted_strings && null !== e.body_blacklisted_strings && (this.body_blacklisted_strings = s.copyList(e.body_blacklisted_strings, [null])), void 0 !== e.link_whitelisted_domains_length && null !== e.link_whitelisted_domains_length && (this.link_whitelisted_domains_length = e.link_whitelisted_domains_length), void 0 !== e.link_blacklisted_domains_length && null !== e.link_blacklisted_domains_length && (this.link_blacklisted_domains_length = e.link_blacklisted_domains_length), void 0 !== e.number_repost_frequency_days && null !== e.number_repost_frequency_days && (this.number_repost_frequency_days = e.number_repost_frequency_days), void 0 !== e.require_post_flair && null !== e.require_post_flair && (this.require_post_flair = e.require_post_flair), void 0 !== e.title_regex_patterns && null !== e.title_regex_patterns && (this.title_regex_patterns = s.copyList(e.title_regex_patterns, [null])), void 0 !== e.body_regex_patterns && null !== e.body_regex_patterns && (this.body_regex_patterns = s.copyList(e.body_regex_patterns, [null])))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("PostRequirement"), null !== this.title_required_strings && void 0 !== this.title_required_strings) {
					for (var t in e.writeFieldBegin("title_required_strings", s.Type.LIST, 1), e.writeListBegin(s.Type.STRING, this.title_required_strings.length), this.title_required_strings) this.title_required_strings.hasOwnProperty(t) && (t = this.title_required_strings[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.title_blacklisted_strings && void 0 !== this.title_blacklisted_strings) {
					for (var i in e.writeFieldBegin("title_blacklisted_strings", s.Type.LIST, 2), e.writeListBegin(s.Type.STRING, this.title_blacklisted_strings.length), this.title_blacklisted_strings) this.title_blacklisted_strings.hasOwnProperty(i) && (i = this.title_blacklisted_strings[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.title_text_min_length && void 0 !== this.title_text_min_length && (e.writeFieldBegin("title_text_min_length", s.Type.I32, 3), e.writeI32(this.title_text_min_length), e.writeFieldEnd()), null !== this.title_text_max_length && void 0 !== this.title_text_max_length && (e.writeFieldBegin("title_text_max_length", s.Type.I32, 4), e.writeI32(this.title_text_max_length), e.writeFieldEnd()), null !== this.body_restriction_policy && void 0 !== this.body_restriction_policy && (e.writeFieldBegin("body_restriction_policy", s.Type.STRING, 5), e.writeString(this.body_restriction_policy), e.writeFieldEnd()), null !== this.body_required_strings && void 0 !== this.body_required_strings) {
					for (var n in e.writeFieldBegin("body_required_strings", s.Type.LIST, 6), e.writeListBegin(s.Type.STRING, this.body_required_strings.length), this.body_required_strings) this.body_required_strings.hasOwnProperty(n) && (n = this.body_required_strings[n], e.writeString(n));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.body_blacklisted_strings && void 0 !== this.body_blacklisted_strings) {
					for (var r in e.writeFieldBegin("body_blacklisted_strings", s.Type.LIST, 7), e.writeListBegin(s.Type.STRING, this.body_blacklisted_strings.length), this.body_blacklisted_strings) this.body_blacklisted_strings.hasOwnProperty(r) && (r = this.body_blacklisted_strings[r], e.writeString(r));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.link_whitelisted_domains_length && void 0 !== this.link_whitelisted_domains_length && (e.writeFieldBegin("link_whitelisted_domains_length", s.Type.I32, 8), e.writeI32(this.link_whitelisted_domains_length), e.writeFieldEnd()), null !== this.link_blacklisted_domains_length && void 0 !== this.link_blacklisted_domains_length && (e.writeFieldBegin("link_blacklisted_domains_length", s.Type.I32, 9), e.writeI32(this.link_blacklisted_domains_length), e.writeFieldEnd()), null !== this.number_repost_frequency_days && void 0 !== this.number_repost_frequency_days && (e.writeFieldBegin("number_repost_frequency_days", s.Type.I32, 10), e.writeI32(this.number_repost_frequency_days), e.writeFieldEnd()), null !== this.require_post_flair && void 0 !== this.require_post_flair && (e.writeFieldBegin("require_post_flair", s.Type.BOOL, 11), e.writeBool(this.require_post_flair), e.writeFieldEnd()), null !== this.title_regex_patterns && void 0 !== this.title_regex_patterns) {
					for (var o in e.writeFieldBegin("title_regex_patterns", s.Type.LIST, 12), e.writeListBegin(s.Type.STRING, this.title_regex_patterns.length), this.title_regex_patterns) this.title_regex_patterns.hasOwnProperty(o) && (o = this.title_regex_patterns[o], e.writeString(o));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.body_regex_patterns && void 0 !== this.body_regex_patterns) {
					for (var d in e.writeFieldBegin("body_regex_patterns", s.Type.LIST, 13), e.writeListBegin(s.Type.STRING, this.body_regex_patterns.length), this.body_regex_patterns) this.body_regex_patterns.hasOwnProperty(d) && (d = this.body_regex_patterns[d], e.writeString(d));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/postflair_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.PostFlair = function(e) {
					this.id = null, this.title = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.title && null !== e.title && (this.title = e.title))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("PostFlair"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", s.Type.STRING, 2), e.writeString(this.title), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/pwa_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.PWA = function(e) {
					this.installable = null, this.installed = null, this.install_timestamp = null, e && (void 0 !== e.installable && null !== e.installable && (this.installable = e.installable), void 0 !== e.installed && null !== e.installed && (this.installed = e.installed), void 0 !== e.install_timestamp && null !== e.install_timestamp && (this.install_timestamp = e.install_timestamp))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("PWA"), null !== this.installable && void 0 !== this.installable && (e.writeFieldBegin("installable", s.Type.BOOL, 1), e.writeBool(this.installable), e.writeFieldEnd()), null !== this.installed && void 0 !== this.installed && (e.writeFieldBegin("installed", s.Type.BOOL, 2), e.writeBool(this.installed), e.writeFieldEnd()), null !== this.install_timestamp && void 0 !== this.install_timestamp && (e.writeFieldBegin("install_timestamp", s.Type.I64, 3), e.writeI64(this.install_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/relevance_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, e.exports = {}, e.exports.RelevanceModel = function(e) {
					this.number_max_recommendations = null, this.feature_blob = null, this.result_blob = null, this.result_duration = null, this.version = null, this.family = null, this.identifier = null, e && (void 0 !== e.number_max_recommendations && null !== e.number_max_recommendations && (this.number_max_recommendations = e.number_max_recommendations), void 0 !== e.feature_blob && null !== e.feature_blob && (this.feature_blob = e.feature_blob), void 0 !== e.result_blob && null !== e.result_blob && (this.result_blob = e.result_blob), void 0 !== e.result_duration && null !== e.result_duration && (this.result_duration = e.result_duration), void 0 !== e.version && null !== e.version && (this.version = e.version), void 0 !== e.family && null !== e.family && (this.family = e.family), void 0 !== e.identifier && null !== e.identifier && (this.identifier = e.identifier))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("RelevanceModel"), null !== this.number_max_recommendations && void 0 !== this.number_max_recommendations && (e.writeFieldBegin("number_max_recommendations", s.Type.I32, 3), e.writeI32(this.number_max_recommendations), e.writeFieldEnd()), null !== this.feature_blob && void 0 !== this.feature_blob && (e.writeFieldBegin("feature_blob", s.Type.STRING, 5), e.writeString(this.feature_blob), e.writeFieldEnd()), null !== this.result_blob && void 0 !== this.result_blob && (e.writeFieldBegin("result_blob", s.Type.STRING, 6), e.writeString(this.result_blob), e.writeFieldEnd()), null !== this.result_duration && void 0 !== this.result_duration && (e.writeFieldBegin("result_duration", s.Type.I64, 7), e.writeI64(this.result_duration), e.writeFieldEnd()), null !== this.version && void 0 !== this.version && (e.writeFieldBegin("version", s.Type.STRING, 9), e.writeString(this.version), e.writeFieldEnd()), null !== this.family && void 0 !== this.family && (e.writeFieldBegin("family", s.Type.STRING, 10), e.writeString(this.family), e.writeFieldEnd()), null !== this.identifier && void 0 !== this.identifier && (e.writeFieldBegin("identifier", s.Type.STRING, 11), e.writeString(this.identifier), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/report_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Report = function(e) {
					this.reason_code = null, e && void 0 !== e.reason_code && null !== e.reason_code && (this.reason_code = e.reason_code)
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Report"), null !== this.reason_code && void 0 !== this.reason_code && (e.writeFieldBegin("reason_code", s.Type.STRING, 1), e.writeString(this.reason_code), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/request_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Request = function(e) {
					this.user_agent = null, this.domain = null, this.base_url = null, this.client_ip = null, this.known_bot = null, this.header_signature = null, this.cookies_present = null, this.accept_encoding = null, this.accept_language = null, this.reddaid = null, this.google_aaid = null, this.amazon_aid = null, this.apple_ios_aid = null, this.isp_organization = null, this.accept_language_header = null, this.parameters = null, this.canonical_url = null, this.loginbot = null, this.robots_meta_tag = null, e && (void 0 !== e.user_agent && null !== e.user_agent && (this.user_agent = e.user_agent), void 0 !== e.domain && null !== e.domain && (this.domain = e.domain), void 0 !== e.base_url && null !== e.base_url && (this.base_url = e.base_url), void 0 !== e.client_ip && null !== e.client_ip && (this.client_ip = e.client_ip), void 0 !== e.known_bot && null !== e.known_bot && (this.known_bot = e.known_bot), void 0 !== e.header_signature && null !== e.header_signature && (this.header_signature = e.header_signature), void 0 !== e.cookies_present && null !== e.cookies_present && (this.cookies_present = e.cookies_present), void 0 !== e.accept_encoding && null !== e.accept_encoding && (this.accept_encoding = e.accept_encoding), void 0 !== e.accept_language && null !== e.accept_language && (this.accept_language = e.accept_language), void 0 !== e.reddaid && null !== e.reddaid && (this.reddaid = e.reddaid), void 0 !== e.google_aaid && null !== e.google_aaid && (this.google_aaid = e.google_aaid), void 0 !== e.amazon_aid && null !== e.amazon_aid && (this.amazon_aid = e.amazon_aid), void 0 !== e.apple_ios_aid && null !== e.apple_ios_aid && (this.apple_ios_aid = e.apple_ios_aid), void 0 !== e.isp_organization && null !== e.isp_organization && (this.isp_organization = e.isp_organization), void 0 !== e.accept_language_header && null !== e.accept_language_header && (this.accept_language_header = e.accept_language_header), void 0 !== e.parameters && null !== e.parameters && (this.parameters = e.parameters), void 0 !== e.canonical_url && null !== e.canonical_url && (this.canonical_url = e.canonical_url), void 0 !== e.loginbot && null !== e.loginbot && (this.loginbot = e.loginbot), void 0 !== e.robots_meta_tag && null !== e.robots_meta_tag && (this.robots_meta_tag = e.robots_meta_tag))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Request"), null !== this.user_agent && void 0 !== this.user_agent && (e.writeFieldBegin("user_agent", s.Type.STRING, 1), e.writeString(this.user_agent), e.writeFieldEnd()), null !== this.domain && void 0 !== this.domain && (e.writeFieldBegin("domain", s.Type.STRING, 2), e.writeString(this.domain), e.writeFieldEnd()), null !== this.base_url && void 0 !== this.base_url && (e.writeFieldBegin("base_url", s.Type.STRING, 3), e.writeString(this.base_url), e.writeFieldEnd()), null !== this.client_ip && void 0 !== this.client_ip && (e.writeFieldBegin("client_ip", s.Type.STRING, 4), e.writeString(this.client_ip), e.writeFieldEnd()), null !== this.known_bot && void 0 !== this.known_bot && (e.writeFieldBegin("known_bot", s.Type.STRING, 5), e.writeString(this.known_bot), e.writeFieldEnd()), null !== this.header_signature && void 0 !== this.header_signature && (e.writeFieldBegin("header_signature", s.Type.STRING, 6), e.writeString(this.header_signature), e.writeFieldEnd()), null !== this.cookies_present && void 0 !== this.cookies_present && (e.writeFieldBegin("cookies_present", s.Type.BOOL, 7), e.writeBool(this.cookies_present), e.writeFieldEnd()), null !== this.accept_encoding && void 0 !== this.accept_encoding && (e.writeFieldBegin("accept_encoding", s.Type.BOOL, 8), e.writeBool(this.accept_encoding), e.writeFieldEnd()), null !== this.accept_language && void 0 !== this.accept_language && (e.writeFieldBegin("accept_language", s.Type.BOOL, 9), e.writeBool(this.accept_language), e.writeFieldEnd()), null !== this.reddaid && void 0 !== this.reddaid && (e.writeFieldBegin("reddaid", s.Type.STRING, 10), e.writeString(this.reddaid), e.writeFieldEnd()), null !== this.google_aaid && void 0 !== this.google_aaid && (e.writeFieldBegin("google_aaid", s.Type.STRING, 11), e.writeString(this.google_aaid), e.writeFieldEnd()), null !== this.amazon_aid && void 0 !== this.amazon_aid && (e.writeFieldBegin("amazon_aid", s.Type.STRING, 12), e.writeString(this.amazon_aid), e.writeFieldEnd()), null !== this.apple_ios_aid && void 0 !== this.apple_ios_aid && (e.writeFieldBegin("apple_ios_aid", s.Type.STRING, 13), e.writeString(this.apple_ios_aid), e.writeFieldEnd()), null !== this.isp_organization && void 0 !== this.isp_organization && (e.writeFieldBegin("isp_organization", s.Type.STRING, 14), e.writeString(this.isp_organization), e.writeFieldEnd()), null !== this.accept_language_header && void 0 !== this.accept_language_header && (e.writeFieldBegin("accept_language_header", s.Type.STRING, 15), e.writeString(this.accept_language_header), e.writeFieldEnd()), null !== this.parameters && void 0 !== this.parameters && (e.writeFieldBegin("parameters", s.Type.STRING, 16), e.writeString(this.parameters), e.writeFieldEnd()), null !== this.canonical_url && void 0 !== this.canonical_url && (e.writeFieldBegin("canonical_url", s.Type.STRING, 17), e.writeString(this.canonical_url), e.writeFieldEnd()), null !== this.loginbot && void 0 !== this.loginbot && (e.writeFieldBegin("loginbot", s.Type.BOOL, 18), e.writeBool(this.loginbot), e.writeFieldEnd()), null !== this.robots_meta_tag && void 0 !== this.robots_meta_tag && (e.writeFieldBegin("robots_meta_tag", s.Type.STRING, 19), e.writeString(this.robots_meta_tag), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Referrer = function(e) {
				this.domain = null, this.url = null, this.element = null, e && (void 0 !== e.domain && null !== e.domain && (this.domain = e.domain), void 0 !== e.url && null !== e.url && (this.url = e.url), void 0 !== e.element && null !== e.element && (this.element = e.element))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("Referrer"), null !== this.domain && void 0 !== this.domain && (e.writeFieldBegin("domain", s.Type.STRING, 1), e.writeString(this.domain), e.writeFieldEnd()), null !== this.url && void 0 !== this.url && (e.writeFieldBegin("url", s.Type.STRING, 2), e.writeString(this.url), e.writeFieldEnd()), null !== this.element && void 0 !== this.element && (e.writeFieldBegin("element", s.Type.STRING, 3), e.writeString(this.element), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.Oauth = function(e) {
				this.client_app_type = null, this.client_name = null, this.client_id = null, e && (void 0 !== e.client_app_type && null !== e.client_app_type && (this.client_app_type = e.client_app_type), void 0 !== e.client_name && null !== e.client_name && (this.client_name = e.client_name), void 0 !== e.client_id && null !== e.client_id && (this.client_id = e.client_id))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("Oauth"), null !== this.client_app_type && void 0 !== this.client_app_type && (e.writeFieldBegin("client_app_type", s.Type.STRING, 1), e.writeString(this.client_app_type), e.writeFieldEnd()), null !== this.client_name && void 0 !== this.client_name && (e.writeFieldBegin("client_name", s.Type.STRING, 2), e.writeString(this.client_name), e.writeFieldEnd()), null !== this.client_id && void 0 !== this.client_id && (e.writeFieldBegin("client_id", s.Type.STRING, 3), e.writeString(this.client_id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var l = e.exports.Api = function(e) {
				this.name = null, this.address = null, this.endpoint = null, e && (void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.address && null !== e.address && (this.address = e.address), void 0 !== e.endpoint && null !== e.endpoint && (this.endpoint = e.endpoint))
			};
			l.prototype = {}, l.prototype.write = function(e) {
				e.writeStructBegin("Api"), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 1), e.writeString(this.name), e.writeFieldEnd()), null !== this.address && void 0 !== this.address && (e.writeFieldBegin("address", s.Type.STRING, 2), e.writeString(this.address), e.writeFieldEnd()), null !== this.endpoint && void 0 !== this.endpoint && (e.writeFieldBegin("endpoint", s.Type.STRING, 3), e.writeString(this.endpoint), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var a = e.exports.ApiResponse = function(e) {
				this.response_code = null, this.error_name = null, this.error = null, this.content = null, e && (void 0 !== e.response_code && null !== e.response_code && (this.response_code = e.response_code), void 0 !== e.error_name && null !== e.error_name && (this.error_name = e.error_name), void 0 !== e.error && null !== e.error && (this.error = e.error), void 0 !== e.content && null !== e.content && (this.content = e.content))
			};
			a.prototype = {}, a.prototype.write = function(e) {
				e.writeStructBegin("ApiResponse"), null !== this.response_code && void 0 !== this.response_code && (e.writeFieldBegin("response_code", s.Type.I32, 1), e.writeI32(this.response_code), e.writeFieldEnd()), null !== this.error_name && void 0 !== this.error_name && (e.writeFieldBegin("error_name", s.Type.STRING, 2), e.writeString(this.error_name), e.writeFieldEnd()), null !== this.error && void 0 !== this.error && (e.writeFieldBegin("error", s.Type.STRING, 3), e.writeString(this.error), e.writeFieldEnd()), null !== this.content && void 0 !== this.content && (e.writeFieldBegin("content", s.Type.STRING, 4), e.writeString(this.content), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var u = e.exports.Response = function(e) {
				this.last_modified_timestamp = null, this.code = null, e && (void 0 !== e.last_modified_timestamp && null !== e.last_modified_timestamp && (this.last_modified_timestamp = e.last_modified_timestamp), void 0 !== e.code && null !== e.code && (this.code = e.code))
			};
			u.prototype = {}, u.prototype.write = function(e) {
				e.writeStructBegin("Response"), null !== this.last_modified_timestamp && void 0 !== this.last_modified_timestamp && (e.writeFieldBegin("last_modified_timestamp", s.Type.I64, 1), e.writeI64(this.last_modified_timestamp), e.writeFieldEnd()), null !== this.code && void 0 !== this.code && (e.writeFieldBegin("code", s.Type.I32, 2), e.writeI32(this.code), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var c = e.exports.Zipkin = function(e) {
				this.trace_id = null, e && void 0 !== e.trace_id && null !== e.trace_id && (this.trace_id = e.trace_id)
			};
			c.prototype = {}, c.prototype.write = function(e) {
				e.writeStructBegin("Zipkin"), null !== this.trace_id && void 0 !== this.trace_id && (e.writeFieldBegin("trace_id", s.Type.STRING, 1), e.writeString(this.trace_id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/res_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.RES = function(e) {
					this.version = null, this.night_mode = null, e && (void 0 !== e.version && null !== e.version && (this.version = e.version), void 0 !== e.night_mode && null !== e.night_mode && (this.night_mode = e.night_mode))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("RES"), null !== this.version && void 0 !== this.version && (e.writeFieldBegin("version", s.Type.STRING, 1), e.writeString(this.version), e.writeFieldEnd()), null !== this.night_mode && void 0 !== this.night_mode && (e.writeFieldBegin("night_mode", s.Type.BOOL, 2), e.writeBool(this.night_mode), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/scheduled_post_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.ScheduledPost = function(e) {
					this.id = null, this.creator_user_id = null, this.last_modified_user_id = null, this.created_timestamp = null, this.submission_timestamp = null, this.timezone = null, this.is_recurring = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.creator_user_id && null !== e.creator_user_id && (this.creator_user_id = e.creator_user_id), void 0 !== e.last_modified_user_id && null !== e.last_modified_user_id && (this.last_modified_user_id = e.last_modified_user_id), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.submission_timestamp && null !== e.submission_timestamp && (this.submission_timestamp = e.submission_timestamp), void 0 !== e.timezone && null !== e.timezone && (this.timezone = e.timezone), void 0 !== e.is_recurring && null !== e.is_recurring && (this.is_recurring = e.is_recurring))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("ScheduledPost"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.I64, 1), e.writeI64(this.id), e.writeFieldEnd()), null !== this.creator_user_id && void 0 !== this.creator_user_id && (e.writeFieldBegin("creator_user_id", s.Type.STRING, 2), e.writeString(this.creator_user_id), e.writeFieldEnd()), null !== this.last_modified_user_id && void 0 !== this.last_modified_user_id && (e.writeFieldBegin("last_modified_user_id", s.Type.STRING, 3), e.writeString(this.last_modified_user_id), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", s.Type.I64, 4), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.submission_timestamp && void 0 !== this.submission_timestamp && (e.writeFieldBegin("submission_timestamp", s.Type.I64, 5), e.writeI64(this.submission_timestamp), e.writeFieldEnd()), null !== this.timezone && void 0 !== this.timezone && (e.writeFieldBegin("timezone", s.Type.STRING, 6), e.writeString(this.timezone), e.writeFieldEnd()), null !== this.is_recurring && void 0 !== this.is_recurring && (e.writeFieldBegin("is_recurring", s.Type.BOOL, 7), e.writeBool(this.is_recurring), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/search_types.js": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.array.sort.js");
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Search = function(e) {
					this.query = null, this.sort = null, this.range = null, this.typeahead_active = null, this.subreddit_id = null, this.subreddit_name = null, this.post_flair_name = null, this.meta_flair_id = null, this.meta_flair_name = null, this.origin_page_type = null, this.origin_element = null, this.number_links = null, this.links = null, this.nsfw_reason = null, this.structure_type = null, this.query_id = null, this.subreddit_ids = null, this.number_subreddits = null, e && (void 0 !== e.query && null !== e.query && (this.query = e.query), void 0 !== e.sort && null !== e.sort && (this.sort = e.sort), void 0 !== e.range && null !== e.range && (this.range = e.range), void 0 !== e.typeahead_active && null !== e.typeahead_active && (this.typeahead_active = e.typeahead_active), void 0 !== e.subreddit_id && null !== e.subreddit_id && (this.subreddit_id = e.subreddit_id), void 0 !== e.subreddit_name && null !== e.subreddit_name && (this.subreddit_name = e.subreddit_name), void 0 !== e.post_flair_name && null !== e.post_flair_name && (this.post_flair_name = e.post_flair_name), void 0 !== e.meta_flair_id && null !== e.meta_flair_id && (this.meta_flair_id = e.meta_flair_id), void 0 !== e.meta_flair_name && null !== e.meta_flair_name && (this.meta_flair_name = e.meta_flair_name), void 0 !== e.origin_page_type && null !== e.origin_page_type && (this.origin_page_type = e.origin_page_type), void 0 !== e.origin_element && null !== e.origin_element && (this.origin_element = e.origin_element), void 0 !== e.number_links && null !== e.number_links && (this.number_links = e.number_links), void 0 !== e.links && null !== e.links && (this.links = s.copyList(e.links, [null])), void 0 !== e.nsfw_reason && null !== e.nsfw_reason && (this.nsfw_reason = e.nsfw_reason), void 0 !== e.structure_type && null !== e.structure_type && (this.structure_type = e.structure_type), void 0 !== e.query_id && null !== e.query_id && (this.query_id = e.query_id), void 0 !== e.subreddit_ids && null !== e.subreddit_ids && (this.subreddit_ids = s.copyList(e.subreddit_ids, [null])), void 0 !== e.number_subreddits && null !== e.number_subreddits && (this.number_subreddits = e.number_subreddits))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("Search"), null !== this.query && void 0 !== this.query && (e.writeFieldBegin("query", s.Type.STRING, 1), e.writeString(this.query), e.writeFieldEnd()), null !== this.sort && void 0 !== this.sort && (e.writeFieldBegin("sort", s.Type.STRING, 2), e.writeString(this.sort), e.writeFieldEnd()), null !== this.range && void 0 !== this.range && (e.writeFieldBegin("range", s.Type.STRING, 3), e.writeString(this.range), e.writeFieldEnd()), null !== this.typeahead_active && void 0 !== this.typeahead_active && (e.writeFieldBegin("typeahead_active", s.Type.BOOL, 4), e.writeBool(this.typeahead_active), e.writeFieldEnd()), null !== this.subreddit_id && void 0 !== this.subreddit_id && (e.writeFieldBegin("subreddit_id", s.Type.STRING, 5), e.writeString(this.subreddit_id), e.writeFieldEnd()), null !== this.subreddit_name && void 0 !== this.subreddit_name && (e.writeFieldBegin("subreddit_name", s.Type.STRING, 6), e.writeString(this.subreddit_name), e.writeFieldEnd()), null !== this.post_flair_name && void 0 !== this.post_flair_name && (e.writeFieldBegin("post_flair_name", s.Type.STRING, 7), e.writeString(this.post_flair_name), e.writeFieldEnd()), null !== this.meta_flair_id && void 0 !== this.meta_flair_id && (e.writeFieldBegin("meta_flair_id", s.Type.STRING, 8), e.writeString(this.meta_flair_id), e.writeFieldEnd()), null !== this.meta_flair_name && void 0 !== this.meta_flair_name && (e.writeFieldBegin("meta_flair_name", s.Type.STRING, 9), e.writeString(this.meta_flair_name), e.writeFieldEnd()), null !== this.origin_page_type && void 0 !== this.origin_page_type && (e.writeFieldBegin("origin_page_type", s.Type.STRING, 10), e.writeString(this.origin_page_type), e.writeFieldEnd()), null !== this.origin_element && void 0 !== this.origin_element && (e.writeFieldBegin("origin_element", s.Type.STRING, 11), e.writeString(this.origin_element), e.writeFieldEnd()), null !== this.number_links && void 0 !== this.number_links && (e.writeFieldBegin("number_links", s.Type.I64, 12), e.writeI64(this.number_links), e.writeFieldEnd()), null !== this.links && void 0 !== this.links) {
					for (var t in e.writeFieldBegin("links", s.Type.LIST, 13), e.writeListBegin(s.Type.STRING, this.links.length), this.links) this.links.hasOwnProperty(t) && (t = this.links[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.nsfw_reason && void 0 !== this.nsfw_reason && (e.writeFieldBegin("nsfw_reason", s.Type.STRING, 14), e.writeString(this.nsfw_reason), e.writeFieldEnd()), null !== this.structure_type && void 0 !== this.structure_type && (e.writeFieldBegin("structure_type", s.Type.STRING, 15), e.writeString(this.structure_type), e.writeFieldEnd()), null !== this.query_id && void 0 !== this.query_id && (e.writeFieldBegin("query_id", s.Type.STRING, 16), e.writeString(this.query_id), e.writeFieldEnd()), null !== this.subreddit_ids && void 0 !== this.subreddit_ids) {
					for (var i in e.writeFieldBegin("subreddit_ids", s.Type.LIST, 17), e.writeListBegin(s.Type.STRING, this.subreddit_ids.length), this.subreddit_ids) this.subreddit_ids.hasOwnProperty(i) && (i = this.subreddit_ids[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.number_subreddits && void 0 !== this.number_subreddits && (e.writeFieldBegin("number_subreddits", s.Type.I64, 18), e.writeI64(this.number_subreddits), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/security_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.TwoFactorAuth = function(e) {
					this.device_previous_remaining_backup_codes = null, this.device_name = null, this.device_exists = null, this.device_algorithm = null, this.device_backup_codes_remaining = null, this.backup_code_used = null, this.otp_embedded_in_password = null, e && (void 0 !== e.device_previous_remaining_backup_codes && null !== e.device_previous_remaining_backup_codes && (this.device_previous_remaining_backup_codes = e.device_previous_remaining_backup_codes), void 0 !== e.device_name && null !== e.device_name && (this.device_name = e.device_name), void 0 !== e.device_exists && null !== e.device_exists && (this.device_exists = e.device_exists), void 0 !== e.device_algorithm && null !== e.device_algorithm && (this.device_algorithm = e.device_algorithm), void 0 !== e.device_backup_codes_remaining && null !== e.device_backup_codes_remaining && (this.device_backup_codes_remaining = e.device_backup_codes_remaining), void 0 !== e.backup_code_used && null !== e.backup_code_used && (this.backup_code_used = e.backup_code_used), void 0 !== e.otp_embedded_in_password && null !== e.otp_embedded_in_password && (this.otp_embedded_in_password = e.otp_embedded_in_password))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("TwoFactorAuth"), null !== this.device_previous_remaining_backup_codes && void 0 !== this.device_previous_remaining_backup_codes && (e.writeFieldBegin("device_previous_remaining_backup_codes", s.Type.I64, 1), e.writeI64(this.device_previous_remaining_backup_codes), e.writeFieldEnd()), null !== this.device_name && void 0 !== this.device_name && (e.writeFieldBegin("device_name", s.Type.STRING, 2), e.writeString(this.device_name), e.writeFieldEnd()), null !== this.device_exists && void 0 !== this.device_exists && (e.writeFieldBegin("device_exists", s.Type.BOOL, 3), e.writeBool(this.device_exists), e.writeFieldEnd()), null !== this.device_algorithm && void 0 !== this.device_algorithm && (e.writeFieldBegin("device_algorithm", s.Type.STRING, 4), e.writeString(this.device_algorithm), e.writeFieldEnd()), null !== this.device_backup_codes_remaining && void 0 !== this.device_backup_codes_remaining && (e.writeFieldBegin("device_backup_codes_remaining", s.Type.I32, 5), e.writeI32(this.device_backup_codes_remaining), e.writeFieldEnd()), null !== this.backup_code_used && void 0 !== this.backup_code_used && (e.writeFieldBegin("backup_code_used", s.Type.BOOL, 6), e.writeBool(this.backup_code_used), e.writeFieldEnd()), null !== this.otp_embedded_in_password && void 0 !== this.otp_embedded_in_password && (e.writeFieldBegin("otp_embedded_in_password", s.Type.BOOL, 7), e.writeBool(this.otp_embedded_in_password), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/seo_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.SEO = function(e) {
					this.internal_link_url = null, e && void 0 !== e.internal_link_url && null !== e.internal_link_url && (this.internal_link_url = e.internal_link_url)
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("SEO"), null !== this.internal_link_url && void 0 !== this.internal_link_url && (e.writeFieldBegin("internal_link_url", s.Type.STRING, 1), e.writeString(this.internal_link_url), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/session_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Session = function(e) {
					if (this.id = null, this.referrer_url = null, this.referrer_domain = null, this.version = null, this.type = null, this.created_timestamp = null, e) {
						if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id, void 0 !== e.referrer_url && null !== e.referrer_url && (this.referrer_url = e.referrer_url), void 0 !== e.referrer_domain && null !== e.referrer_domain && (this.referrer_domain = e.referrer_domain), void 0 !== e.version && null !== e.version && (this.version = e.version), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp)
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Session"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.referrer_url && void 0 !== this.referrer_url && (e.writeFieldBegin("referrer_url", s.Type.STRING, 2), e.writeString(this.referrer_url), e.writeFieldEnd()), null !== this.referrer_domain && void 0 !== this.referrer_domain && (e.writeFieldBegin("referrer_domain", s.Type.STRING, 3), e.writeString(this.referrer_domain), e.writeFieldEnd()), null !== this.version && void 0 !== this.version && (e.writeFieldBegin("version", s.Type.STRING, 4), e.writeString(this.version), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 5), e.writeString(this.type), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", s.Type.I64, 6), e.writeI64(this.created_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/setting_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Setting = function(e) {
					if (this.value = null, this.old_value = null, this.scope = null, e) {
						if (void 0 === e.value || null === e.value) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field value is unset!");
						this.value = e.value, void 0 !== e.old_value && null !== e.old_value && (this.old_value = e.old_value), void 0 !== e.scope && null !== e.scope && (this.scope = e.scope)
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Setting"), null !== this.value && void 0 !== this.value && (e.writeFieldBegin("value", s.Type.STRING, 1), e.writeString(this.value), e.writeFieldEnd()), null !== this.old_value && void 0 !== this.old_value && (e.writeFieldBegin("old_value", s.Type.STRING, 2), e.writeString(this.old_value), e.writeFieldEnd()), null !== this.scope && void 0 !== this.scope && (e.writeFieldBegin("scope", s.Type.STRING, 3), e.writeString(this.scope), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/subreddit_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Subreddit = function(e) {
					this.id = null, this.name = null, this.category_name = null, this.whitelist_status = null, this.access_type = null, this.quarantined = null, this.nsfw = null, this.topic_tag_ids = null, this.topic_tag_contents = null, this.topic_tag_types = null, this.number_coins = null, this.public_description = null, this.post_difficulty_rating = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.category_name && null !== e.category_name && (this.category_name = e.category_name), void 0 !== e.whitelist_status && null !== e.whitelist_status && (this.whitelist_status = e.whitelist_status), void 0 !== e.access_type && null !== e.access_type && (this.access_type = e.access_type), void 0 !== e.quarantined && null !== e.quarantined && (this.quarantined = e.quarantined), void 0 !== e.nsfw && null !== e.nsfw && (this.nsfw = e.nsfw), void 0 !== e.topic_tag_ids && null !== e.topic_tag_ids && (this.topic_tag_ids = s.copyList(e.topic_tag_ids, [null])), void 0 !== e.topic_tag_contents && null !== e.topic_tag_contents && (this.topic_tag_contents = s.copyList(e.topic_tag_contents, [null])), void 0 !== e.topic_tag_types && null !== e.topic_tag_types && (this.topic_tag_types = s.copyList(e.topic_tag_types, [null])), void 0 !== e.number_coins && null !== e.number_coins && (this.number_coins = e.number_coins), void 0 !== e.public_description && null !== e.public_description && (this.public_description = e.public_description), void 0 !== e.post_difficulty_rating && null !== e.post_difficulty_rating && (this.post_difficulty_rating = e.post_difficulty_rating))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("Subreddit"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.category_name && void 0 !== this.category_name && (e.writeFieldBegin("category_name", s.Type.STRING, 3), e.writeString(this.category_name), e.writeFieldEnd()), null !== this.whitelist_status && void 0 !== this.whitelist_status && (e.writeFieldBegin("whitelist_status", s.Type.STRING, 4), e.writeString(this.whitelist_status), e.writeFieldEnd()), null !== this.access_type && void 0 !== this.access_type && (e.writeFieldBegin("access_type", s.Type.STRING, 5), e.writeString(this.access_type), e.writeFieldEnd()), null !== this.quarantined && void 0 !== this.quarantined && (e.writeFieldBegin("quarantined", s.Type.BOOL, 6), e.writeBool(this.quarantined), e.writeFieldEnd()), null !== this.nsfw && void 0 !== this.nsfw && (e.writeFieldBegin("nsfw", s.Type.BOOL, 7), e.writeBool(this.nsfw), e.writeFieldEnd()), null !== this.topic_tag_ids && void 0 !== this.topic_tag_ids) {
					for (var t in e.writeFieldBegin("topic_tag_ids", s.Type.LIST, 8), e.writeListBegin(s.Type.STRING, this.topic_tag_ids.length), this.topic_tag_ids) this.topic_tag_ids.hasOwnProperty(t) && (t = this.topic_tag_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.topic_tag_contents && void 0 !== this.topic_tag_contents) {
					for (var i in e.writeFieldBegin("topic_tag_contents", s.Type.LIST, 9), e.writeListBegin(s.Type.STRING, this.topic_tag_contents.length), this.topic_tag_contents) this.topic_tag_contents.hasOwnProperty(i) && (i = this.topic_tag_contents[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.topic_tag_types && void 0 !== this.topic_tag_types) {
					for (var n in e.writeFieldBegin("topic_tag_types", s.Type.LIST, 10), e.writeListBegin(s.Type.STRING, this.topic_tag_types.length), this.topic_tag_types) this.topic_tag_types.hasOwnProperty(n) && (n = this.topic_tag_types[n], e.writeString(n));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.number_coins && void 0 !== this.number_coins && (e.writeFieldBegin("number_coins", s.Type.I32, 11), e.writeI32(this.number_coins), e.writeFieldEnd()), null !== this.public_description && void 0 !== this.public_description && (e.writeFieldBegin("public_description", s.Type.STRING, 12), e.writeString(this.public_description), e.writeFieldEnd()), null !== this.post_difficulty_rating && void 0 !== this.post_difficulty_rating && (e.writeFieldBegin("post_difficulty_rating", s.Type.STRING, 13), e.writeString(this.post_difficulty_rating), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Profile = function(e) {
				if (this.id = null, this.name = null, this.type = null, this.display_name = null, this.about = null, this.avatar_url = null, this.cover_url = null, this.nsfw = null, this.content_visible = null, this.communities_visible = null, e) {
					if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
					if (this.id = e.id, void 0 === e.name || null === e.name) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field name is unset!");
					this.name = e.name, void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.display_name && null !== e.display_name && (this.display_name = e.display_name), void 0 !== e.about && null !== e.about && (this.about = e.about), void 0 !== e.avatar_url && null !== e.avatar_url && (this.avatar_url = e.avatar_url), void 0 !== e.cover_url && null !== e.cover_url && (this.cover_url = e.cover_url), void 0 !== e.nsfw && null !== e.nsfw && (this.nsfw = e.nsfw), void 0 !== e.content_visible && null !== e.content_visible && (this.content_visible = e.content_visible), void 0 !== e.communities_visible && null !== e.communities_visible && (this.communities_visible = e.communities_visible)
				}
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("Profile"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 3), e.writeString(this.type), e.writeFieldEnd()), null !== this.display_name && void 0 !== this.display_name && (e.writeFieldBegin("display_name", s.Type.STRING, 4), e.writeString(this.display_name), e.writeFieldEnd()), null !== this.about && void 0 !== this.about && (e.writeFieldBegin("about", s.Type.STRING, 5), e.writeString(this.about), e.writeFieldEnd()), null !== this.avatar_url && void 0 !== this.avatar_url && (e.writeFieldBegin("avatar_url", s.Type.STRING, 6), e.writeString(this.avatar_url), e.writeFieldEnd()), null !== this.cover_url && void 0 !== this.cover_url && (e.writeFieldBegin("cover_url", s.Type.STRING, 7), e.writeString(this.cover_url), e.writeFieldEnd()), null !== this.nsfw && void 0 !== this.nsfw && (e.writeFieldBegin("nsfw", s.Type.BOOL, 8), e.writeBool(this.nsfw), e.writeFieldEnd()), null !== this.content_visible && void 0 !== this.content_visible && (e.writeFieldBegin("content_visible", s.Type.BOOL, 9), e.writeBool(this.content_visible), e.writeFieldEnd()), null !== this.communities_visible && void 0 !== this.communities_visible && (e.writeFieldBegin("communities_visible", s.Type.BOOL, 11), e.writeBool(this.communities_visible), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/target_ip_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.TargetIP = function(e) {
					this.address = null, e && void 0 !== e.address && null !== e.address && (this.address = e.address)
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("TargetIP"), null !== this.address && void 0 !== this.address && (e.writeFieldBegin("address", s.Type.STRING, 1), e.writeString(this.address), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/thirdpartybadge_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.ThirdPartyBadge = function(e) {
					this.id = null, this.title = null, this.target_user_id = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.title && null !== e.title && (this.title = e.title), void 0 !== e.target_user_id && null !== e.target_user_id && (this.target_user_id = e.target_user_id))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("ThirdPartyBadge"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", s.Type.STRING, 2), e.writeString(this.title), e.writeFieldEnd()), null !== this.target_user_id && void 0 !== this.target_user_id && (e.writeFieldBegin("target_user_id", s.Type.STRING, 3), e.writeString(this.target_user_id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/ticket_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Ticket = function(e) {
					if (this.id = null, this.type = null, this.queue_id = null, this.status = null, e) {
						if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id, void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.queue_id && null !== e.queue_id && (this.queue_id = e.queue_id), void 0 !== e.status && null !== e.status && (this.status = e.status)
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Ticket"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), null !== this.queue_id && void 0 !== this.queue_id && (e.writeFieldBegin("queue_id", s.Type.STRING, 3), e.writeString(this.queue_id), e.writeFieldEnd()), null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", s.Type.STRING, 4), e.writeString(this.status), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.ReddarTicket = function(e) {
				this.id = null, this.type = null, this.queue_id = null, this.status = null, this.report_source = null, this.requestor_id = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.queue_id && null !== e.queue_id && (this.queue_id = e.queue_id), void 0 !== e.status && null !== e.status && (this.status = e.status), void 0 !== e.report_source && null !== e.report_source && (this.report_source = e.report_source), void 0 !== e.requestor_id && null !== e.requestor_id && (this.requestor_id = e.requestor_id))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("ReddarTicket"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), null !== this.queue_id && void 0 !== this.queue_id && (e.writeFieldBegin("queue_id", s.Type.STRING, 3), e.writeString(this.queue_id), e.writeFieldEnd()), null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", s.Type.STRING, 4), e.writeString(this.status), e.writeFieldEnd()), null !== this.report_source && void 0 !== this.report_source && (e.writeFieldBegin("report_source", s.Type.STRING, 5), e.writeString(this.report_source), e.writeFieldEnd()), null !== this.requestor_id && void 0 !== this.requestor_id && (e.writeFieldBegin("requestor_id", s.Type.STRING, 6), e.writeString(this.requestor_id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.ReddarTicketContent = function(e) {
				this.id = null, this.reported_url = null, this.target_id = null, this.target_type = null, this.status = null, this.status_reason = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.reported_url && null !== e.reported_url && (this.reported_url = e.reported_url), void 0 !== e.target_id && null !== e.target_id && (this.target_id = e.target_id), void 0 !== e.target_type && null !== e.target_type && (this.target_type = e.target_type), void 0 !== e.status && null !== e.status && (this.status = e.status), void 0 !== e.status_reason && null !== e.status_reason && (this.status_reason = e.status_reason))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("ReddarTicketContent"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.reported_url && void 0 !== this.reported_url && (e.writeFieldBegin("reported_url", s.Type.STRING, 2), e.writeString(this.reported_url), e.writeFieldEnd()), null !== this.target_id && void 0 !== this.target_id && (e.writeFieldBegin("target_id", s.Type.STRING, 3), e.writeString(this.target_id), e.writeFieldEnd()), null !== this.target_type && void 0 !== this.target_type && (e.writeFieldBegin("target_type", s.Type.STRING, 4), e.writeString(this.target_type), e.writeFieldEnd()), null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", s.Type.STRING, 5), e.writeString(this.status), e.writeFieldEnd()), null !== this.status_reason && void 0 !== this.status_reason && (e.writeFieldBegin("status_reason", s.Type.STRING, 6), e.writeString(this.status_reason), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var l = e.exports.ZendeskTicket = function(e) {
				this.id = null, this.source = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.source && null !== e.source && (this.source = e.source))
			};
			l.prototype = {}, l.prototype.write = function(e) {
				e.writeStructBegin("ZendeskTicket"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.I64, 1), e.writeI64(this.id), e.writeFieldEnd()), null !== this.source && void 0 !== this.source && (e.writeFieldBegin("source", s.Type.STRING, 2), e.writeString(this.source), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/timer_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.DOMTimers = function(e) {
					this.request = null, this.loading = null, this.loaded = null, e && (void 0 !== e.request && null !== e.request && (this.request = e.request), void 0 !== e.loading && null !== e.loading && (this.loading = e.loading), void 0 !== e.loaded && null !== e.loaded && (this.loaded = e.loaded))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("DOMTimers"), null !== this.request && void 0 !== this.request && (e.writeFieldBegin("request", s.Type.I64, 1), e.writeI64(this.request), e.writeFieldEnd()), null !== this.loading && void 0 !== this.loading && (e.writeFieldBegin("loading", s.Type.I64, 2), e.writeI64(this.loading), e.writeFieldEnd()), null !== this.loaded && void 0 !== this.loaded && (e.writeFieldBegin("loaded", s.Type.I64, 3), e.writeI64(this.loaded), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Timer = function(e) {
				this.type = null, this.millis = null, this.time_to_first_byte = null, this.first_contentful_paint = null, this.first_meaningful_paint = null, this.first_input_delay = null, e && (void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.millis && null !== e.millis && (this.millis = e.millis), void 0 !== e.time_to_first_byte && null !== e.time_to_first_byte && (this.time_to_first_byte = e.time_to_first_byte), void 0 !== e.first_contentful_paint && null !== e.first_contentful_paint && (this.first_contentful_paint = e.first_contentful_paint), void 0 !== e.first_meaningful_paint && null !== e.first_meaningful_paint && (this.first_meaningful_paint = e.first_meaningful_paint), void 0 !== e.first_input_delay && null !== e.first_input_delay && (this.first_input_delay = e.first_input_delay))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("Timer"), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 1), e.writeString(this.type), e.writeFieldEnd()), null !== this.millis && void 0 !== this.millis && (e.writeFieldBegin("millis", s.Type.I64, 2), e.writeI64(this.millis), e.writeFieldEnd()), null !== this.time_to_first_byte && void 0 !== this.time_to_first_byte && (e.writeFieldBegin("time_to_first_byte", s.Type.I64, 3), e.writeI64(this.time_to_first_byte), e.writeFieldEnd()), null !== this.first_contentful_paint && void 0 !== this.first_contentful_paint && (e.writeFieldBegin("first_contentful_paint", s.Type.I64, 4), e.writeI64(this.first_contentful_paint), e.writeFieldEnd()), null !== this.first_meaningful_paint && void 0 !== this.first_meaningful_paint && (e.writeFieldBegin("first_meaningful_paint", s.Type.I64, 5), e.writeI64(this.first_meaningful_paint), e.writeFieldEnd()), null !== this.first_input_delay && void 0 !== this.first_input_delay && (e.writeFieldBegin("first_input_delay", s.Type.I64, 6), e.writeI64(this.first_input_delay), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/tooltip_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Tooltip = function(e) {
					if (this.id = null, this.text = null, e) {
						if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						if (this.id = e.id, void 0 === e.text || null === e.text) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field text is unset!");
						this.text = e.text
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Tooltip"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.text && void 0 !== this.text && (e.writeFieldBegin("text", s.Type.STRING, 2), e.writeString(this.text), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/topic_metadata_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.TopicMetadata = function(e) {
					this.id = null, this.display_name = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.display_name && null !== e.display_name && (this.display_name = e.display_name))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("TopicMetadata"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.display_name && void 0 !== this.display_name && (e.writeFieldBegin("display_name", s.Type.STRING, 2), e.writeString(this.display_name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/topic_tag_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.TopicTag = function(e) {
					this.id = null, this.content = null, this.type = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.content && null !== e.content && (this.content = e.content), void 0 !== e.type && null !== e.type && (this.type = e.type))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("TopicTag"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.content && void 0 !== this.content && (e.writeFieldBegin("content", s.Type.STRING, 2), e.writeString(this.content), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 3), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/typedefs_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js");
			n.Thrift, n.Q, e.exports = {}
		},
		"./src/telemetry/eventSchemas/upload_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Upload = function(e) {
					this.file_size = null, this.category = null, this.optimization_type = null, e && (void 0 !== e.file_size && null !== e.file_size && (this.file_size = e.file_size), void 0 !== e.category && null !== e.category && (this.category = e.category), void 0 !== e.optimization_type && null !== e.optimization_type && (this.optimization_type = e.optimization_type))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Upload"), null !== this.file_size && void 0 !== this.file_size && (e.writeFieldBegin("file_size", s.Type.I64, 1), e.writeI64(this.file_size), e.writeFieldEnd()), null !== this.category && void 0 !== this.category && (e.writeFieldBegin("category", s.Type.STRING, 2), e.writeString(this.category), e.writeFieldEnd()), null !== this.optimization_type && void 0 !== this.optimization_type && (e.writeFieldBegin("optimization_type", s.Type.STRING, 3), e.writeString(this.optimization_type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/user_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.User = function(e) {
					this.id = null, this.created_timestamp = null, this.logged_in = null, this.cookie_created_timestamp = null, this.has_gold = null, this.suspect = null, this.disenfranchised = null, this.in_timeout = null, this.neutered = null, this.number_creddits = null, this.is_admin = null, this.has_premium = null, this.number_coins = null, this.number_premium_days_remaining = null, this.is_employee = null, this.is_premium_subscriber = null, this.post_karma = null, this.comment_karma = null, this.name = null, this.email = null, this.previous_id = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.logged_in && null !== e.logged_in && (this.logged_in = e.logged_in), void 0 !== e.cookie_created_timestamp && null !== e.cookie_created_timestamp && (this.cookie_created_timestamp = e.cookie_created_timestamp), void 0 !== e.has_gold && null !== e.has_gold && (this.has_gold = e.has_gold), void 0 !== e.suspect && null !== e.suspect && (this.suspect = e.suspect), void 0 !== e.disenfranchised && null !== e.disenfranchised && (this.disenfranchised = e.disenfranchised), void 0 !== e.in_timeout && null !== e.in_timeout && (this.in_timeout = e.in_timeout), void 0 !== e.neutered && null !== e.neutered && (this.neutered = e.neutered), void 0 !== e.number_creddits && null !== e.number_creddits && (this.number_creddits = e.number_creddits), void 0 !== e.is_admin && null !== e.is_admin && (this.is_admin = e.is_admin), void 0 !== e.has_premium && null !== e.has_premium && (this.has_premium = e.has_premium), void 0 !== e.number_coins && null !== e.number_coins && (this.number_coins = e.number_coins), void 0 !== e.number_premium_days_remaining && null !== e.number_premium_days_remaining && (this.number_premium_days_remaining = e.number_premium_days_remaining), void 0 !== e.is_employee && null !== e.is_employee && (this.is_employee = e.is_employee), void 0 !== e.is_premium_subscriber && null !== e.is_premium_subscriber && (this.is_premium_subscriber = e.is_premium_subscriber), void 0 !== e.post_karma && null !== e.post_karma && (this.post_karma = e.post_karma), void 0 !== e.comment_karma && null !== e.comment_karma && (this.comment_karma = e.comment_karma), void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.email && null !== e.email && (this.email = e.email), void 0 !== e.previous_id && null !== e.previous_id && (this.previous_id = e.previous_id))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("User"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", s.Type.I64, 2), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.logged_in && void 0 !== this.logged_in && (e.writeFieldBegin("logged_in", s.Type.BOOL, 3), e.writeBool(this.logged_in), e.writeFieldEnd()), null !== this.cookie_created_timestamp && void 0 !== this.cookie_created_timestamp && (e.writeFieldBegin("cookie_created_timestamp", s.Type.I64, 4), e.writeI64(this.cookie_created_timestamp), e.writeFieldEnd()), null !== this.has_gold && void 0 !== this.has_gold && (e.writeFieldBegin("has_gold", s.Type.BOOL, 5), e.writeBool(this.has_gold), e.writeFieldEnd()), null !== this.suspect && void 0 !== this.suspect && (e.writeFieldBegin("suspect", s.Type.BOOL, 6), e.writeBool(this.suspect), e.writeFieldEnd()), null !== this.disenfranchised && void 0 !== this.disenfranchised && (e.writeFieldBegin("disenfranchised", s.Type.BOOL, 8), e.writeBool(this.disenfranchised), e.writeFieldEnd()), null !== this.in_timeout && void 0 !== this.in_timeout && (e.writeFieldBegin("in_timeout", s.Type.BOOL, 9), e.writeBool(this.in_timeout), e.writeFieldEnd()), null !== this.neutered && void 0 !== this.neutered && (e.writeFieldBegin("neutered", s.Type.BOOL, 10), e.writeBool(this.neutered), e.writeFieldEnd()), null !== this.number_creddits && void 0 !== this.number_creddits && (e.writeFieldBegin("number_creddits", s.Type.I64, 11), e.writeI64(this.number_creddits), e.writeFieldEnd()), null !== this.is_admin && void 0 !== this.is_admin && (e.writeFieldBegin("is_admin", s.Type.BOOL, 12), e.writeBool(this.is_admin), e.writeFieldEnd()), null !== this.has_premium && void 0 !== this.has_premium && (e.writeFieldBegin("has_premium", s.Type.BOOL, 13), e.writeBool(this.has_premium), e.writeFieldEnd()), null !== this.number_coins && void 0 !== this.number_coins && (e.writeFieldBegin("number_coins", s.Type.I64, 14), e.writeI64(this.number_coins), e.writeFieldEnd()), null !== this.number_premium_days_remaining && void 0 !== this.number_premium_days_remaining && (e.writeFieldBegin("number_premium_days_remaining", s.Type.I64, 15), e.writeI64(this.number_premium_days_remaining), e.writeFieldEnd()), null !== this.is_employee && void 0 !== this.is_employee && (e.writeFieldBegin("is_employee", s.Type.BOOL, 16), e.writeBool(this.is_employee), e.writeFieldEnd()), null !== this.is_premium_subscriber && void 0 !== this.is_premium_subscriber && (e.writeFieldBegin("is_premium_subscriber", s.Type.BOOL, 17), e.writeBool(this.is_premium_subscriber), e.writeFieldEnd()), null !== this.post_karma && void 0 !== this.post_karma && (e.writeFieldBegin("post_karma", s.Type.I64, 18), e.writeI64(this.post_karma), e.writeFieldEnd()), null !== this.comment_karma && void 0 !== this.comment_karma && (e.writeFieldBegin("comment_karma", s.Type.I64, 19), e.writeI64(this.comment_karma), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", s.Type.STRING, 20), e.writeString(this.name), e.writeFieldEnd()), null !== this.email && void 0 !== this.email && (e.writeFieldBegin("email", s.Type.STRING, 21), e.writeString(this.email), e.writeFieldEnd()), null !== this.previous_id && void 0 !== this.previous_id && (e.writeFieldBegin("previous_id", s.Type.STRING, 22), e.writeString(this.previous_id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.UserPreferences = function(e) {
				this.in_beta = null, this.language = null, this.hide_nsfw = null, this.expando = null, this.hide_previously_seen_posts = null, e && (void 0 !== e.in_beta && null !== e.in_beta && (this.in_beta = e.in_beta), void 0 !== e.language && null !== e.language && (this.language = e.language), void 0 !== e.hide_nsfw && null !== e.hide_nsfw && (this.hide_nsfw = e.hide_nsfw), void 0 !== e.expando && null !== e.expando && (this.expando = e.expando), void 0 !== e.hide_previously_seen_posts && null !== e.hide_previously_seen_posts && (this.hide_previously_seen_posts = e.hide_previously_seen_posts))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("UserPreferences"), null !== this.in_beta && void 0 !== this.in_beta && (e.writeFieldBegin("in_beta", s.Type.BOOL, 1), e.writeBool(this.in_beta), e.writeFieldEnd()), null !== this.language && void 0 !== this.language && (e.writeFieldBegin("language", s.Type.STRING, 2), e.writeString(this.language), e.writeFieldEnd()), null !== this.hide_nsfw && void 0 !== this.hide_nsfw && (e.writeFieldBegin("hide_nsfw", s.Type.BOOL, 3), e.writeBool(this.hide_nsfw), e.writeFieldEnd()), null !== this.expando && void 0 !== this.expando && (e.writeFieldBegin("expando", s.Type.STRING, 4), e.writeString(this.expando), e.writeFieldEnd()), null !== this.hide_previously_seen_posts && void 0 !== this.hide_previously_seen_posts && (e.writeFieldBegin("hide_previously_seen_posts", s.Type.BOOL, 5), e.writeBool(this.hide_previously_seen_posts), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.UserSubreddit = function(e) {
				this.is_mod = null, this.mod_full = null, this.mod_access = null, this.mod_config = null, this.mod_flair = null, this.mod_mail = null, this.mod_post = null, this.mod_wiki = null, this.mod_none = null, this.is_favorite = null, this.is_subscriber = null, this.post_karma = null, this.comment_karma = null, this.is_steward = null, e && (void 0 !== e.is_mod && null !== e.is_mod && (this.is_mod = e.is_mod), void 0 !== e.mod_full && null !== e.mod_full && (this.mod_full = e.mod_full), void 0 !== e.mod_access && null !== e.mod_access && (this.mod_access = e.mod_access), void 0 !== e.mod_config && null !== e.mod_config && (this.mod_config = e.mod_config), void 0 !== e.mod_flair && null !== e.mod_flair && (this.mod_flair = e.mod_flair), void 0 !== e.mod_mail && null !== e.mod_mail && (this.mod_mail = e.mod_mail), void 0 !== e.mod_post && null !== e.mod_post && (this.mod_post = e.mod_post), void 0 !== e.mod_wiki && null !== e.mod_wiki && (this.mod_wiki = e.mod_wiki), void 0 !== e.mod_none && null !== e.mod_none && (this.mod_none = e.mod_none), void 0 !== e.is_favorite && null !== e.is_favorite && (this.is_favorite = e.is_favorite), void 0 !== e.is_subscriber && null !== e.is_subscriber && (this.is_subscriber = e.is_subscriber), void 0 !== e.post_karma && null !== e.post_karma && (this.post_karma = e.post_karma), void 0 !== e.comment_karma && null !== e.comment_karma && (this.comment_karma = e.comment_karma), void 0 !== e.is_steward && null !== e.is_steward && (this.is_steward = e.is_steward))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("UserSubreddit"), null !== this.is_mod && void 0 !== this.is_mod && (e.writeFieldBegin("is_mod", s.Type.BOOL, 1), e.writeBool(this.is_mod), e.writeFieldEnd()), null !== this.mod_full && void 0 !== this.mod_full && (e.writeFieldBegin("mod_full", s.Type.BOOL, 2), e.writeBool(this.mod_full), e.writeFieldEnd()), null !== this.mod_access && void 0 !== this.mod_access && (e.writeFieldBegin("mod_access", s.Type.BOOL, 3), e.writeBool(this.mod_access), e.writeFieldEnd()), null !== this.mod_config && void 0 !== this.mod_config && (e.writeFieldBegin("mod_config", s.Type.BOOL, 4), e.writeBool(this.mod_config), e.writeFieldEnd()), null !== this.mod_flair && void 0 !== this.mod_flair && (e.writeFieldBegin("mod_flair", s.Type.BOOL, 5), e.writeBool(this.mod_flair), e.writeFieldEnd()), null !== this.mod_mail && void 0 !== this.mod_mail && (e.writeFieldBegin("mod_mail", s.Type.BOOL, 6), e.writeBool(this.mod_mail), e.writeFieldEnd()), null !== this.mod_post && void 0 !== this.mod_post && (e.writeFieldBegin("mod_post", s.Type.BOOL, 7), e.writeBool(this.mod_post), e.writeFieldEnd()), null !== this.mod_wiki && void 0 !== this.mod_wiki && (e.writeFieldBegin("mod_wiki", s.Type.BOOL, 8), e.writeBool(this.mod_wiki), e.writeFieldEnd()), null !== this.mod_none && void 0 !== this.mod_none && (e.writeFieldBegin("mod_none", s.Type.BOOL, 9), e.writeBool(this.mod_none), e.writeFieldEnd()), null !== this.is_favorite && void 0 !== this.is_favorite && (e.writeFieldBegin("is_favorite", s.Type.BOOL, 10), e.writeBool(this.is_favorite), e.writeFieldEnd()), null !== this.is_subscriber && void 0 !== this.is_subscriber && (e.writeFieldBegin("is_subscriber", s.Type.BOOL, 11), e.writeBool(this.is_subscriber), e.writeFieldEnd()), null !== this.post_karma && void 0 !== this.post_karma && (e.writeFieldBegin("post_karma", s.Type.I64, 12), e.writeI64(this.post_karma), e.writeFieldEnd()), null !== this.comment_karma && void 0 !== this.comment_karma && (e.writeFieldBegin("comment_karma", s.Type.I64, 13), e.writeI64(this.comment_karma), e.writeFieldEnd()), null !== this.is_steward && void 0 !== this.is_steward && (e.writeFieldBegin("is_steward", s.Type.BOOL, 14), e.writeBool(this.is_steward), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/userflair_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.UserFlair = function(e) {
					this.id = null, this.title = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.title && null !== e.title && (this.title = e.title))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("UserFlair"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", s.Type.STRING, 2), e.writeString(this.title), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/visibility_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Visibility = function(e) {
					this.seen = null, this.seen_items = null, this.number_items = null, this.number_seen_items = null, this.number_scrolled_pages = null, this.on_screen_timestamp = null, this.off_screen_timestamp = null, e && (void 0 !== e.seen && null !== e.seen && (this.seen = e.seen), void 0 !== e.seen_items && null !== e.seen_items && (this.seen_items = s.copyList(e.seen_items, [null])), void 0 !== e.number_items && null !== e.number_items && (this.number_items = e.number_items), void 0 !== e.number_seen_items && null !== e.number_seen_items && (this.number_seen_items = e.number_seen_items), void 0 !== e.number_scrolled_pages && null !== e.number_scrolled_pages && (this.number_scrolled_pages = e.number_scrolled_pages), void 0 !== e.on_screen_timestamp && null !== e.on_screen_timestamp && (this.on_screen_timestamp = e.on_screen_timestamp), void 0 !== e.off_screen_timestamp && null !== e.off_screen_timestamp && (this.off_screen_timestamp = e.off_screen_timestamp))
				});
			r.prototype = {}, r.prototype.write = function(e) {
				if (e.writeStructBegin("Visibility"), null !== this.seen && void 0 !== this.seen && (e.writeFieldBegin("seen", s.Type.BOOL, 1), e.writeBool(this.seen), e.writeFieldEnd()), null !== this.seen_items && void 0 !== this.seen_items) {
					for (var t in e.writeFieldBegin("seen_items", s.Type.LIST, 4), e.writeListBegin(s.Type.STRING, this.seen_items.length), this.seen_items) this.seen_items.hasOwnProperty(t) && (t = this.seen_items[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.number_items && void 0 !== this.number_items && (e.writeFieldBegin("number_items", s.Type.I64, 5), e.writeI64(this.number_items), e.writeFieldEnd()), null !== this.number_seen_items && void 0 !== this.number_seen_items && (e.writeFieldBegin("number_seen_items", s.Type.I64, 6), e.writeI64(this.number_seen_items), e.writeFieldEnd()), null !== this.number_scrolled_pages && void 0 !== this.number_scrolled_pages && (e.writeFieldBegin("number_scrolled_pages", s.Type.I64, 7), e.writeI64(this.number_scrolled_pages), e.writeFieldEnd()), null !== this.on_screen_timestamp && void 0 !== this.on_screen_timestamp && (e.writeFieldBegin("on_screen_timestamp", s.Type.I64, 8), e.writeI64(this.on_screen_timestamp), e.writeFieldEnd()), null !== this.off_screen_timestamp && void 0 !== this.off_screen_timestamp && (e.writeFieldBegin("off_screen_timestamp", s.Type.I64, 9), e.writeI64(this.off_screen_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/webhook_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				s = n.Thrift,
				r = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Webhook = function(e) {
					if (this.id = null, this.type = null, e) {
						if (void 0 === e.id || null === e.id) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						if (this.id = e.id, void 0 === e.type || null === e.type) throw new s.TProtocolException(s.TProtocolExceptionType.UNKNOWN, "Required field type is unset!");
						this.type = e.type
					}
				});
			r.prototype = {}, r.prototype.write = function(e) {
				e.writeStructBegin("Webhook"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", s.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", s.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/helpers/ThriftSerializer.ts": function(e, t, i) {
			"use strict";
			(function(e) {
				i.d(t, "a", (function() {
					return a
				}));
				i("./node_modules/core-js/modules/es6.regexp.to-string.js");
				var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/int64_util.js"),
					s = i.n(n),
					r = i("./node_modules/node-int64/Int64.js"),
					o = i.n(r),
					d = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js");
				const l = {
					[d.Thrift.Type.BOOL]: "tf",
					[d.Thrift.Type.BYTE]: "i8",
					[d.Thrift.Type.I16]: "i16",
					[d.Thrift.Type.I32]: "i32",
					[d.Thrift.Type.I64]: "i64",
					[d.Thrift.Type.DOUBLE]: "dbl",
					[d.Thrift.Type.STRUCT]: "rec",
					[d.Thrift.Type.STRING]: "str",
					[d.Thrift.Type.MAP]: "map",
					[d.Thrift.Type.LIST]: "lst",
					[d.Thrift.Type.SET]: "set"
				};
				class a {
					constructor() {
						this.stack = []
					}
					writeFieldBegin(e, t, i) {
						this.stack.push(e => ({
							[i]: {
								[l[t]]: e
							}
						}))
					}
					writeFieldEnd() {
						const e = this.stack.pop(),
							t = this.stack.pop();
						this.stack.push(t(e))
					}
					writeFieldStop() {}
					writeStructBegin(e) {
						this.stack.push("structStart")
					}
					writeStructEnd() {
						let e = {};
						for (;;) {
							const t = this.stack.pop();
							if ("structStart" === t) break;
							e = Object.assign({}, e, t)
						}
						this.stack.push(e)
					}
					writeListBegin() {
						this.stack.push("listStart")
					}
					writeListEnd() {
						const e = [];
						for (;;) {
							const t = this.stack.pop();
							if ("listStart" === t) break;
							e.push(t)
						}
						this.stack.push(["rec", e.length, ...e])
					}
					writeSetBegin() {
						this.stack.push("setStart")
					}
					writeSetEnd() {
						const e = [];
						for (;;) {
							const t = this.stack.pop();
							if ("setStart" === t) break;
							e.push(t)
						}
						this.stack.push(["rec", e.length, ...e])
					}
					writeMapStart() {
						throw new Error("Maps not implemented. Contact Niranjan Ramadas")
					}
					writeMapEnd() {
						throw new Error("Maps not implemented. Contact Niranjan Ramadas")
					}
					writeBool(e) {
						this.stack.push(e ? 1 : 0)
					}
					writeByte(e) {
						this.stack.push(e)
					}
					writeI16(e) {
						this.stack.push(e)
					}
					writeI32(e) {
						this.stack.push(e)
					}
					writeI64(e) {
						e instanceof o.a ? this.stack.push(s.a.toDecimalString(e)) : this.stack.push(e)
					}
					writeDouble(e) {
						this.stack.push(e)
					}
					writeString(e) {
						null === e ? this.stack.push(null) : this.stack.push(JSON.stringify(e).slice(1, -1))
					}
					writeBinary(t) {
						let i;
						if ("string" == typeof t) i = e.from(t, "binary");
						else {
							if (!(t instanceof e || "[object Uint8Array]" === Object.prototype.toString.call(t))) throw new Error("writeBinary called without a string/Buffer argument: " + t);
							i = t
						}
						this.stack.push(i.toString("base64"))
					}
					getString() {
						if (this.stack.length > 1) throw new Error("Did not correctly serialize Thrift Event");
						return JSON.stringify(this.stack.pop())
					}
				}
			}).call(this, i("./node_modules/buffer/index.js").Buffer)
		},
		"./src/telemetry/helpers/sendEvent.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return _
			})), i.d(t, "b", (function() {
				return v
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = i("./node_modules/Base64/base64.js"),
				s = i("./node_modules/crypto-js/hmac-sha256.js"),
				r = i.n(s),
				o = i("./node_modules/lodash/throttle.js"),
				d = i.n(o),
				l = i("./src/lib/constants/index.ts"),
				a = i("./src/lib/makeRequest/index.ts"),
				u = i("./src/lib/scheduler/index.ts"),
				c = i("./src/telemetry/eventSchemas/event_types.js"),
				m = i("./src/telemetry/models/Event.ts"),
				h = i("./src/telemetry/helpers/ThriftSerializer.ts");
			let p;
			const _ = e => {
				p = e
			};
			let g = [],
				w = !1,
				y = !1;
			const v = Object(u.b)();
			t.a = e => {
				y || (window.addEventListener("beforeunload", () => {
					v.flush(), w || f(!0)
				}), y = !0);
				const t = m.f(e);
				if (g = g.concat([t]), p) {
					const e = p.getState();
					e.push(t);
					const {
						length: i
					} = e;
					i > 250 && e.splice(0, 250 - i), p.setState(e)
				}
				w || b()
			};
			const f = e => {
					if (!g.length) return;
					const t = [...g],
						i = new c.EventBatch({
							events: t
						}),
						s = new h.a,
						o = Object(n.atob)("YWVjYWltMnNlaTlzZXNoNmVpQ2hhZXJ1dW03dHU4");
					g = [], w = !0, i.write(s);
					const d = s.getString(),
						u = r()(d, o).toString();
					Object(a.b)({
						data: d,
						endpoint: "https://www.reddit.com",
						sync: e,
						method: l.bb.POST,
						type: "text/plain",
						headers: {
							"X-Signature-v2": "key=".concat("Desktop2x3", ", mac=").concat(u)
						}
					}).then(t => {
						g.length ? e ? f() : b() : w = !1
					})
				},
				b = d()(f, 1e3, {
					leading: !1,
					trailing: !0
				})
		},
		"./src/telemetry/helpers/sendTiming.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			}));
			var n = i("./node_modules/Base64/base64.js"),
				s = i("./src/lib/logs/timing.js"),
				r = i("./src/lib/makeRequest/index.ts");
			const o = e => {
					switch (e.type) {
						case "rum":
							return "/timings/rum";
						case "route":
							return "/timings/route";
						case "mount":
							return "/timings/mount";
						case "gql":
							return "/timings/gql";
						case "perf":
							return "/timings/perf";
						case "scrollfps":
							return "/timings/scrollfps"
					}
				},
				d = e => {
					switch (e.type) {
						case "rum":
							return {
								page: e.page, timings: Object(s.a)()
							};
						case "route":
							return {
								page: e.page, duration: e.duration
							};
						case "mount":
							return {
								component: e.component, duration: e.duration
							};
						case "gql":
							return {
								responseName: e.responseName, duration: e.duration
							};
						case "perf":
						case "scrollfps":
							return {
								meta: e.meta, data: e.data
							}
					}
				},
				l = .25;

			function a(e, t) {
				if (!(Math.random() > l)) return Object(r.b)({
					method: "post",
					type: "json",
					endpoint: o(t),
					data: {
						time: Object(n.btoa)(JSON.stringify(Object.assign({
							appName: e
						}, d(t))))
					}
				})
			}
		},
		"./src/telemetry/index.ts": function(e, t, i) {
			"use strict";
			var n = {};
			i.r(n), i.d(n, "start", (function() {
				return c
			})), i.d(n, "end", (function() {
				return m
			})), i.d(n, "cancel", (function() {
				return h
			})), i.d(n, "has", (function() {
				return p
			}));
			var s = i("./src/telemetry/helpers/sendEvent.ts"),
				r = i("./src/telemetry/helpers/sendTiming.ts");
			const o = {},
				d = "timer - too many created. is there a memory leak?",
				l = e => "timer - none found with id: ".concat(e, ".\n    Make sure you check for its existence before trying to stop.");
			let a = 0,
				u = 0;
			const c = e => {
					const t = e || a++;
					return u > 100 && console.error(d), o[t] = Date.now(), u++, t
				},
				m = e => {
					const t = o[e];
					if (!t) return console.error(l(e)), -1;
					const i = Date.now() - t;
					return delete o[e], u--, i
				},
				h = e => !!o[e] && (delete o[e], u--, !0),
				p = e => !!o[e];
			i.d(t, "a", (function() {
				return s.a
			})), i.d(t, "b", (function() {
				return r.a
			})), i.d(t, "c", (function() {
				return n
			}))
		},
		"./src/telemetry/models/App.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "TelemetryAppName", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return r
			}));
			var n, s = i("./src/telemetry/eventSchemas/device_types.js");
			! function(e) {
				e.desktop2x = "desktop2x", e.desktop2xDev = "desktop2x_dev", e.web = "web", e.webDev = "web_dev", e.web2x = "web2x", e.web2xDev = "web2x_dev"
			}(n || (n = {}));
			const r = e => new s.App({
				version: e.version,
				name: e.name,
				install_timestamp: e.installTimestamp
			})
		},
		"./src/telemetry/models/Event.ts": function(e, t, i) {
			"use strict";
			var n = {};
			i.r(n), i.d(n, "toThrift", (function() {
				return Y
			}));
			var s = {};
			i.r(s), i.d(s, "toThrift", (function() {
				return Q
			}));
			var r = {};
			i.r(r), i.d(r, "toThrift", (function() {
				return Z
			}));
			var o = {};
			i.r(o), i.d(o, "toThrift", (function() {
				return ee
			}));
			var d = {};
			i.r(d), i.d(d, "toThrift", (function() {
				return ie
			}));
			var l = {};
			i.r(l), i.d(l, "toThrift", (function() {
				return se
			}));
			var a = {};
			i.r(a), i.d(a, "toThrift", (function() {
				return re
			}));
			var u = {};
			i.r(u), i.d(u, "toThrift", (function() {
				return de
			}));
			var c = {};
			i.r(c), i.d(c, "toThrift", (function() {
				return ae
			}));
			var m = {};
			i.r(m), i.d(m, "toThrift", (function() {
				return ue
			}));
			var h = {};
			i.r(h), i.d(h, "toThrift", (function() {
				return he
			}));
			var p = {};
			i.r(p), i.d(p, "toThrift", (function() {
				return pe
			}));
			var _ = {};
			i.r(_), i.d(_, "toThrift", (function() {
				return ge
			}));
			var g = {};
			i.r(g), i.d(g, "toThrift", (function() {
				return ye
			}));
			var w = {};
			i.r(w), i.d(w, "toThrift", (function() {
				return be
			}));
			var y = {};
			i.r(y), i.d(y, "toThrift", (function() {
				return Te
			}));
			var v = {};
			i.r(v), i.d(v, "toThrift", (function() {
				return Fe
			}));
			var f = {};
			i.r(f), i.d(f, "toThrift", (function() {
				return Ee
			}));
			var b = {};
			i.r(b), i.d(b, "toThrift", (function() {
				return xe
			}));
			var T = {};
			i.r(T), i.d(T, "toThrift", (function() {
				return Ce
			}));
			var S = {};
			i.r(S), i.d(S, "toThrift", (function() {
				return ke
			}));
			var F = {};
			i.r(F), i.d(F, "toThrift", (function() {
				return je
			}));
			var E = {};
			i.r(E), i.d(E, "toThrift", (function() {
				return Ae
			}));
			var I = {};
			i.r(I), i.d(I, "toThrift", (function() {
				return Ge
			}));
			var B = {};
			i.r(B), i.d(B, "toThrift", (function() {
				return Ue
			}));
			var R = {};
			i.r(R), i.d(R, "toThrift", (function() {
				return qe
			}));
			var x = {};
			i.r(x), i.d(x, "toThrift", (function() {
				return We
			}));
			var C = {};
			i.r(C), i.d(C, "toThrift", (function() {
				return ze
			}));
			var k = {};
			i.r(k), i.d(k, "toThrift", (function() {
				return Ve
			}));
			var O = {};
			i.r(O), i.d(O, "toThrift", (function() {
				return Xe
			}));
			var N = {};
			i.r(N), i.d(N, "toThrift", (function() {
				return $e
			}));
			var j = {};
			i.r(j), i.d(j, "toThrift", (function() {
				return tt
			}));
			var P = {};
			i.r(P), i.d(P, "toThrift", (function() {
				return nt
			}));
			var A = {};
			i.r(A), i.d(A, "toThrift", (function() {
				return rt
			}));
			var L = {};
			i.r(L), i.d(L, "toThrift", (function() {
				return at
			}));
			var D = {};
			i.r(D), i.d(D, "toThrift", (function() {
				return ct
			}));
			var G = {};
			i.r(G), i.d(G, "toThrift", (function() {
				return ht
			}));
			var M = {};
			i.r(M), i.d(M, "toThrift", (function() {
				return pt
			}));
			var U = {};
			i.r(U), i.d(U, "toThrift", (function() {
				return _t
			}));
			var q = {};
			i.r(q), i.d(q, "toThrift", (function() {
				return gt
			}));
			i("./node_modules/core-js/modules/es6.regexp.search.js");
			var W = i("./node_modules/uuid/v4.js"),
				z = i.n(W),
				H = i("./src/telemetry/eventSchemas/event_types.js"),
				V = i("./src/telemetry/eventSchemas/action_types.js");
			const Y = e => new V.ActionInfo({
				count: e.count,
				page_type: e.pageType,
				pane_name: e.paneName,
				position: e.position,
				reason: e.reason,
				setting_value: e.settingValue,
				success: e.success,
				relative_position: e.relativePosition,
				type: e.type
			});
			var K = i("./src/telemetry/eventSchemas/adblock_types.js");
			const Q = e => new K.Adblock({
				enabled: e.enabled,
				acceptable_ads: e.acceptableAds
			});
			var J = i("./src/telemetry/models/App.ts"),
				X = i("./src/telemetry/eventSchemas/banner_types.js");
			const Z = e => new X.Banner({
				button_text: e.buttonText,
				id: e.id
			});
			var $ = i("./src/telemetry/eventSchemas/chat_types.js");
			const ee = e => new $.Chat({
				blocked_user_id: e.blocked_user_id,
				id: e.id,
				type: e.type,
				existing_channel: e.existing_channel,
				image_upload_method: e.image_upload_method,
				user_added_method: e.user_added_method,
				invitation_id: e.invitation_id,
				invitation_type: e.invitation_type,
				members: e.members,
				invitation_preview_type: e.invitation_preview_type,
				message_type: e.message_type,
				number_channels: e.number_channels,
				number_pending_invites: e.number_pending_invites,
				number_members: e.number_members,
				number_unreads: e.number_unreads,
				reported_user_id: e.reported_user_id,
				sender_user_id: e.sender_user_id,
				invitation_timestamp: e.invitation_timestamp,
				blocked_members: e.blocked_members,
				recipient_user_id: e.recipient_user_id,
				number_blocked_users: e.number_blocked_users,
				is_member: e.is_member,
				shown_history: e.shown_history,
				message_id: e.message_id,
				report_reason: e.report_reason
			});
			var te = i("./src/telemetry/eventSchemas/experiment_types.js");
			const ie = e => new te.ClickTest({
				id: e.id,
				name: e.name,
				owner: e.owner,
				variant: e.variant,
				prompt: e.prompt,
				response: e.response,
				page_type: e.pageType
			});
			var ne = i("./src/telemetry/eventSchemas/content_types.js");
			const se = e => new ne.Comment({
					id: e.id,
					post_id: e.postId,
					parent_id: e.parentId,
					body_text: e.bodyText,
					author_id: e.authorId,
					number_gildings: e.numberGildings,
					score: e.score,
					upvote_ratio: e.upvoteRatio,
					created_timestamp: e.created,
					type: e.type
				}),
				re = e => new ne.CommentComposer({
					editor_mode: e.editorMode
				});
			var oe = i("./src/telemetry/eventSchemas/crawler_types.js");
			const de = e => new oe.Crawler({
				name: e.name
			});
			var le = i("./src/telemetry/eventSchemas/custom_feed_types.js");
			const ae = e => new le.CustomFeed({
					id: e.id,
					is_nsfw: e.isNsfw,
					number_followers: e.numberFollowers,
					number_subreddits: e.numberSubreddits,
					owner_id: e.ownerId,
					visibility: e.visibility
				}),
				ue = e => new ne.DiscoveryUnit({
					id: e.id,
					type: e.type,
					title: e.title,
					name: e.name,
					items: e.items
				});
			var ce = i("./src/telemetry/eventSchemas/timer_types.js");
			const me = (e, t) => e && t ? t - e == 0 ? null : t - e : null,
				he = e => {
					if (!performance || !performance.timing) return null;
					const t = performance.timing;
					return new ce.DOMTimers({
						request: me(t.requestStart, t.responseStart),
						loading: me(t.domLoading, t.domInteractive),
						loaded: me(t.domContentLoadedEventStart, t.domContentLoadedEventEnd)
					})
				},
				pe = e => new te.Experiment({
					id: e.id,
					is_override: e.isOverride,
					name: e.name,
					variant: e.variant,
					version: e.version
				});
			var _e = i("./src/telemetry/models/GoldPurchase.ts");
			i("./node_modules/core-js/modules/es6.array.sort.js");
			const ge = e => new ne.Listing({
				length: e.length,
				links: e.links,
				sort: e.sort,
				sort_time_filter: e.sortTime,
				source: e.source,
				old_sort: e.oldSort,
				depth: e.depth
			});
			var we = i("./src/telemetry/eventSchemas/live_thread_types.js");
			const ye = e => new we.LiveThread({
				id: e.id,
				is_announcement: e.isAnnouncement
			});
			var ve = i("./src/telemetry/models/Media.ts"),
				fe = i("./src/telemetry/eventSchemas/metasearch_types.js");
			const be = e => new fe.MetaSearch({
					display_query: e.displayQuery,
					raw_query: e.rawQuery,
					structure_type: e.structureType,
					sort: e.sort,
					range: e.range,
					subreddit_id: e.subredditId,
					subreddit_name: e.subredditName,
					post_flair_name: e.postFlairName,
					meta_flair_id: e.metaFlairId,
					meta_flair_name: e.metaFlairName
				}),
				Te = e => new ne.Notification({
					id: e.id,
					type: e.type
				});
			var Se = i("./src/telemetry/eventSchemas/request_types.js");
			const Fe = e => new Se.Oauth({
					client_app_type: "web"
				}),
				Ee = e => new ne.Onboarding({
					id: e.id,
					action_source: e.actionSource,
					process_notes: e.processNotes,
					number_subreddits_selected: e.numberSubredditsSelected,
					subreddits_selected: e.subredditsSelected,
					user_name: e.userName,
					recommended_user_name: e.recommendedUserName,
					start_timestamp: e.startTimestamp,
					end_timestamp: e.endTimestamp,
					category_position: e.categoryPosition,
					category_name: e.categoryName,
					subreddit_name: e.subredditName,
					subreddit_position: e.subredditPosition,
					subreddit_is_selected: e.subredditIsSelected,
					subreddits_already_selected: e.subredditsAlreadySelected,
					successful: e.successful,
					semantic_version: e.semanticVersion,
					valid_email_submitted: e.validEmailSubmitted,
					pre_selected: e.preSelected,
					passed_captcha: e.passedCaptcha,
					captcha_num_screens: e.captchaNumScreens,
					personalized_subreddits: e.personalizedSubreddits,
					similar_subreddits: e.similarSubreddits,
					number_subreddits: e.numberSubreddits,
					is_similar_subreddit: e.isSimilarSubreddit
				});
			var Ie = i("./src/telemetry/models/Outbound.ts"),
				Be = i("./src/telemetry/models/Payment.ts"),
				Re = i("./src/telemetry/eventSchemas/poll_types.js");
			const xe = e => new Re.Poll({
					options: e.options,
					options_length: e.optionsLength,
					user_vote: e.userVote
				}),
				Ce = e => new ne.Post({
					comment_type: e.commentType,
					content_duration: e.contentDuration,
					created_timestamp: e.createdTimestamp,
					domain: e.domain,
					id: e.id,
					impression_id: e.impressionId,
					nsfw: e.nsfw,
					number_posts_from_ad: e.numberPostsFromAd,
					score: e.score,
					spoiler: e.spoiler,
					title: e.title,
					type: e.type,
					upvote_ratio: e.upvoteRatio,
					url: e.url,
					promoted: e.promoted
				}),
				ke = e => new ne.PostCollection({
					id: e.id,
					title: e.title,
					author_id: e.authorId,
					post_ids: e.postIds,
					display_layout: e.displayLayout
				});
			var Oe = i("./src/telemetry/models/PostComposer.ts"),
				Ne = i("./src/telemetry/models/PostDraft.ts");
			const je = e => new ne.PostEvent({
				type: e.type,
				event_state: e.eventState,
				event_start_timestamp: e.eventStartTimestamp,
				event_end_timestamp: e.eventEndTimestamp
			});
			var Pe = i("./src/telemetry/eventSchemas/postflair_types.js");
			const Ae = e => new Pe.PostFlair({
				id: e.id,
				title: e.title
			});
			var Le = i("./src/telemetry/models/PostRequirement.ts"),
				De = i("./src/telemetry/eventSchemas/subreddit_types.js");
			const Ge = e => new De.Profile({
				id: e.id,
				name: e.name,
				type: e.type || "default",
				display_name: e.display_name,
				about: e.about,
				avatar_url: e.avatar_url,
				cover_url: e.cover_url,
				nsfw: e.nsfw,
				content_visible: e.content_visible,
				communities_visible: e.communities_visible
			});
			var Me = i("./src/telemetry/eventSchemas/pwa_types.js");
			const Ue = e => new Me.PWA({
					installable: e.installable,
					installed: e.installed,
					install_timestamp: e.installTimestamp
				}),
				qe = e => new Se.Referrer({
					domain: e.domain,
					element: e.element,
					url: e.url
				}),
				We = e => new Se.Request({
					base_url: e.base_url,
					domain: e.domain,
					reddaid: e.reddaid,
					parameters: e.parameters,
					user_agent: e.user_agent,
					canonical_url: e.canonical_url,
					robots_meta_tag: e.robots_meta_tag
				}),
				ze = e => new Se.Response({
					last_modified_timestamp: e.lastModifiedTimestamp,
					code: e.code
				});
			var He = i("./src/telemetry/eventSchemas/scheduled_post_types.js");
			const Ve = e => new He.ScheduledPost({
				id: e.id,
				creator_user_id: e.owner,
				last_modified_user_id: e.lastModifiedUserId,
				created_timestamp: e.createdTimestamp,
				submission_timestamp: e.publishAt,
				timezone: e.clientTimezone,
				is_recurring: e.isRecurring
			});
			var Ye = i("./src/reddit/constants/postLayout.ts"),
				Ke = i("./src/telemetry/eventSchemas/device_types.js");
			const Qe = z()(),
				Je = e => e ? Ye.e[e] : void 0,
				Xe = e => new Ke.Screen({
					browser_tab_id: Qe,
					in_focus: "undefined" != typeof window && document.hasFocus ? document.hasFocus() : null,
					theme: e.theme,
					width: "undefined" != typeof window ? window.screen.width : null,
					height: "undefined" != typeof window ? window.screen.height : null,
					scroll_position: e.scrollPosition,
					viewport_width: "undefined" != typeof window ? window.innerWidth : null,
					viewport_height: "undefined" != typeof window ? window.innerHeight : null,
					view_type: e.viewType || Je(e.layout)
				});
			var Ze = i("./src/telemetry/eventSchemas/search_types.js");
			const $e = e => new Ze.Search({
				origin_element: e.originElement,
				origin_page_type: e.originPageType,
				post_flair_name: e.postFlairName,
				query: e.query,
				range: e.range,
				sort: e.sort,
				structure_type: e.structureType,
				subreddit_name: e.subredditName,
				subreddit_id: e.subredditId,
				typeahead_active: e.typeaheadActive
			});
			var et = i("./src/telemetry/eventSchemas/seo_types.js");
			const tt = e => new et.SEO({
				internal_link_url: e.internalLinkUrl
			});
			var it = i("./src/telemetry/eventSchemas/session_types.js");
			const nt = e => new it.Session({
				id: e.id,
				referrer_url: e.referrerUrl,
				referrer_domain: e.referrerDomain,
				version: e.version,
				type: e.type,
				created_timestamp: e.createdTimestamp
			});
			var st = i("./src/telemetry/eventSchemas/setting_types.js");
			const rt = e => new st.Setting({
				value: e.value,
				old_value: e.oldValue
			});
			var ot = i("./src/telemetry/models/Subreddit.ts"),
				dt = i("./src/telemetry/models/Timer.ts"),
				lt = i("./src/telemetry/eventSchemas/tooltip_types.js");
			const at = e => new lt.Tooltip({
				id: e.id,
				text: e.text
			});
			var ut = i("./src/telemetry/eventSchemas/topic_tag_types.js");
			const ct = e => new ut.TopicTag({
				id: e.id,
				content: e.content,
				type: e.type ? e.type.toLowerCase() : e.type
			});
			var mt = i("./src/telemetry/eventSchemas/user_types.js");
			const ht = e => new mt.User({
					id: e.id,
					is_admin: e.isAdmin,
					created_timestamp: e.createdTimestamp,
					logged_in: e.isLoggedIn,
					cookie_created_timestamp: e.cookieCreatedTimestamp,
					has_gold: e.hasGold,
					has_premium: e.hasPremium,
					is_premium_subscriber: e.isPremiumSubscriber,
					number_coins: e.numberCoins,
					number_premium_days_remaining: e.numberPremiumDaysRemaining
				}),
				pt = e => new mt.UserPreferences({
					in_beta: e.inBeta,
					language: e.language,
					hide_nsfw: e.hideNsfw,
					expando: e.expando
				}),
				_t = e => new mt.UserSubreddit({
					is_mod: e.isMod,
					mod_access: e.modAccess,
					mod_config: e.modConfig,
					mod_flair: e.modFlair,
					mod_full: e.modFull,
					mod_mail: e.modMail,
					mod_none: e.modNone,
					mod_post: e.modPost,
					mod_wiki: e.modWiki,
					is_subscriber: e.isSubscriber
				}),
				gt = e => new V.Widget({
					type: e.type,
					target_subreddit_name: e.targetSubredditName,
					target_subreddit_id: e.targetSubredditId
				});
			var wt, yt, vt, ft, bt;
			i.d(t, "a", (function() {
					return wt
				})), i.d(t, "e", (function() {
					return yt
				})), i.d(t, "c", (function() {
					return vt
				})), i.d(t, "d", (function() {
					return ft
				})), i.d(t, "b", (function() {
					return bt
				})), i.d(t, "f", (function() {
					return Tt
				})),
				function(e) {
					e.Ban = "ban", e.Click = "click", e.Heartbeat = "heartbeat", e.Kick = "kick", e.Load = "load", e.ModDelete = "mod_delete", e.Submit = "submit", e.View = "view"
				}(wt || (wt = {})),
				function(e) {
					e.Experiment = "experiment", e.Page = "page"
				}(yt || (yt = {})),
				function(e) {
					e.Expose = "expose", e.Load = "load"
				}(vt || (vt = {})),
				function(e) {
					e.UserId = "user_id", e.CanonicalUrl = "canonical_url"
				}(ft || (ft = {})),
				function(e) {
					e.ChatKeyboard = "chat_keyboard", e.ChatPerformance = "chat_performance", e.ChatPreview = "chat_preview", e.ChatSettings = "chat_settings", e.ChatSetup = "chat_setup", e.ChatSidebarModal = "chat_sidebar_modal", e.ChatSidebarWidget = "chat_sidebar_widget", e.ChatView = "chat_view", e.ContactsList = "contacts_list", e.Global = "global", e.InvitationInbox = "invitation_inbox", e.MessageInbox = "messages_inbox", e.Nav = "nav", e.UserHovercard = "user_hovercard"
				}(bt || (bt = {}));
			const Tt = e => new H.Event({
					action: e.action,
					source: e.source,
					noun: e.noun,
					client_timestamp: Date.now(),
					uuid: z()(),
					correlation_id: e.correlationId || null,
					action_info: St(e.actionInfo, n),
					app: St(e.app, J),
					banner: St(e.banner, r),
					chat: St(e.chat, o),
					click_test: St(e.clickTest, d),
					comment: St(e.comment, l),
					comment_composer: St(e.commentComposer, a),
					crawler: St(e.crawler, u),
					custom_feed: St(e.customFeed, c),
					dom_timer: St(e.domTimer, h),
					experiment: St(e.experiment, p),
					gold_purchase: St(e.goldPurchase, _e),
					listing: St(e.listing, _),
					live_thread: St(e.liveThread, g),
					media: St(e.media, ve),
					meta_search: St(e.metaSearch, w),
					notification: St(e.notification, y),
					oauth: St(e.oauth, v),
					onboarding: St(e.onboarding, f),
					outbound: St(e.outbound, Ie),
					payment: St(e.payment, Be),
					poll: St(e.poll, b),
					post: St(e.post, T),
					post_draft: St(e.postDraft, Ne),
					post_collection: St(e.postCollection, S),
					post_composer: St(e.postComposer, Oe),
					post_event: St(e.postEvent, F),
					post_flair: St(e.postFlair, E),
					post_requirement: St(e.postRequirement, Le),
					profile: St(e.profile, I),
					pwa: St(e.pwa, B),
					referrer: St(e.referrer, R),
					request: St(e.request, x),
					response: St(e.response, C),
					scheduled_post: St(e.scheduledPost, k),
					screen: St(e.screen, O),
					search: St(e.search, N),
					seo: St(e.seo, j),
					session: St(e.session, P),
					setting: St(e.setting, A),
					subreddit: St(e.subreddit, ot),
					target_post: St(e.targetPost, T),
					target_subreddit: St(e.targetSubreddit, ot),
					timer: St(e.timer, dt),
					tooltip: St(e.tooltip, L),
					topic_tag: St(e.topicTag, D),
					user: St(e.user, G),
					user_preferences: St(e.userPreferences, M),
					user_subreddit: St(e.userSubreddit, U),
					widget: St(e.widget, q),
					adblock: St(e.adblock, s),
					discovery_unit: St(e.discoveryUnit, m)
				}),
				St = (e, t) => e ? t.toThrift(e) : null
		},
		"./src/telemetry/models/GoldPurchase.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "New", (function() {
				return s
			})), i.d(t, "Renew", (function() {
				return r
			})), i.d(t, "GiftCode", (function() {
				return o
			})), i.d(t, "GetPremium", (function() {
				return d
			})), i.d(t, "Cancel", (function() {
				return l
			})), i.d(t, "Gid1", (function() {
				return a
			})), i.d(t, "Gid2", (function() {
				return u
			})), i.d(t, "Gid3", (function() {
				return c
			})), i.d(t, "GidAppreciation", (function() {
				return m
			})), i.d(t, "GidCommunity", (function() {
				return h
			})), i.d(t, "GidMod", (function() {
				return p
			})), i.d(t, "CoinsGid1", (function() {
				return _
			})), i.d(t, "CoinsGid2", (function() {
				return g
			})), i.d(t, "CoinsGid3", (function() {
				return w
			})), i.d(t, "CoinsGidCommunity", (function() {
				return y
			})), i.d(t, "CoinsGidMod", (function() {
				return v
			})), i.d(t, "Premium", (function() {
				return f
			})), i.d(t, "Coins", (function() {
				return b
			})), i.d(t, "HideAds", (function() {
				return T
			})), i.d(t, "PremiumMarketing", (function() {
				return S
			})), i.d(t, "CoinsMarketing", (function() {
				return F
			})), i.d(t, "GiveGold", (function() {
				return E
			})), i.d(t, "toThrift", (function() {
				return I
			}));
			var n = i("./src/telemetry/eventSchemas/gold_types.js");
			const s = "new",
				r = "renew",
				o = "gift_code",
				d = "get_premium",
				l = "cancel",
				a = "gid_1",
				u = "gid_2",
				c = "gid_3",
				m = "gid_appreciation",
				h = "gid_community",
				p = "gid_mod",
				_ = "coins_gid_1",
				g = "coins_gid_2",
				w = "coins_gid_3",
				y = "coins_gid_community",
				v = "coins_gid_mod",
				f = "premium",
				b = "coins",
				T = "hide_ads",
				S = "premium_marketing",
				F = "coins_marketing",
				E = "give_gold",
				I = e => new n.GoldPurchase({
					default_option: e.defaultOption,
					default_anonymous: e.defaultAnonymous,
					gilded_content: e.gildedContent,
					number_coins: e.numberCoins,
					source: e.source,
					transaction_id: e.transactionId,
					type: e.type,
					content_type: e.contentType,
					award_id: e.awardId,
					award_name: e.awardName,
					is_mod_award: e.isModAward,
					number_coins_to_community: e.numberCoinsToCommunity,
					number_coins_to_recipient: e.numberCoinsToRecipient,
					number_months: e.numberMonths
				})
		},
		"./src/telemetry/models/Media.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "FileSource", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return r
			}));
			var n, s = i("./src/telemetry/eventSchemas/content_types.js");
			! function(e) {
				e.FileSelector = "fileselector", e.Clipboard = "clipboard", e.DragAndDrop = "drag_and_drop"
			}(n || (n = {}));
			const r = e => new s.Media({
				height: e.height,
				load_time: e.loadTime,
				width: e.width,
				id: e.id,
				duration: e.duration,
				mimetype: e.mimetype,
				size: e.size,
				url: e.url,
				source: e.source,
				upload_duration: e.uploadDuration,
				file_name: e.fileName,
				sound: e.sound,
				type: e.type,
				thumbnail_url: e.thumbnailUrl,
				time: e.time,
				orientation: e.orientation,
				max_time_served: e.maxTimeServed,
				cdn_name: e.cdnName,
				cdn_region: e.cdnRegion,
				destination_region: e.destinationRegion,
				stream_public_id: e.streamPublicId,
				stream_private_id: e.streamPrivateId,
				stream_ended_timestamp: e.streamEndedTimestamp
			})
		},
		"./src/telemetry/models/Outbound.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "SourceElement", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return r
			}));
			var n, s = i("./src/telemetry/eventSchemas/outbound_types.js");
			! function(e) {
				e.ListingPostImage = "listing_post_image", e.ListingPostLink = "listing_post_link", e.ListingPostDetail = "listing_post_detail", e.PostImage = "post_image", e.PostLink = "post_link", e.PostDetail = "post_detail", e.Comment = "comment"
			}(n || (n = {}));
			const r = e => new s.Outbound({
				url: e.url,
				post_id: e.postId,
				subreddit_id: e.subredditId,
				comment_id: e.commentId,
				subreddit_name: e.subredditName,
				source_element: e.sourceElement
			})
		},
		"./src/telemetry/models/Payment.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "PaymentMethod", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return r
			}));
			var n, s = i("./src/telemetry/eventSchemas/payment_types.js");
			! function(e) {
				e.CreditCard = "credit_card", e.Paypal = "paypal"
			}(n || (n = {}));
			const r = e => new s.Payment({
				amount_in_smallest_denom: e.amountInSmallestDenom,
				currency: e.currency,
				default_option: e.defaultOption,
				method: e.method
			})
		},
		"./src/telemetry/models/PostComposer.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "toThrift", (function() {
				return s
			})), i.d(t, "ToggleAction", (function() {
				return r
			})), i.d(t, "getToggleAction", (function() {
				return o
			})), i.d(t, "ToggleNoun", (function() {
				return d
			}));
			var n = i("./src/telemetry/eventSchemas/content_types.js");
			const s = e => new n.PostComposer({
				editor_mode: e.editorMode,
				final_status: e.finalStatus,
				input_type: e.inputType,
				text_type: e.textType,
				type: e.type,
				post_scheduled: e.postScheduled,
				submit_scheduled_timestamp: e.submitScheduledTime
			});
			var r;
			! function(e) {
				e.DESELECT = "deselect", e.SELECT = "select"
			}(r || (r = {}));
			const o = e => e ? r.SELECT : r.DESELECT;
			var d;
			! function(e) {
				e.NSFW = "nsfw", e.ORIGINAL_CONTENT = "original_content", e.SPOILER = "spoiler", e.CHAT = "chat"
			}(d || (d = {}))
		},
		"./src/telemetry/models/PostDraft.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "DraftType", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return r
			}));
			var n, s = i("./src/telemetry/eventSchemas/post_draft_types.js");
			! function(e) {
				e.Self = "self", e.RichText = "multi_media", e.Link = "link", e.Image = "image", e.Video = "video"
			}(n || (n = {}));
			const r = e => new s.PostDraft({
				author_id: e.authorId,
				body_text_length: e.bodyTextLength,
				created_timestamp: e.createdTimestamp,
				flair: e.flair,
				id: e.id,
				nsfw: e.nsfw,
				number_rte_images: e.numberRteImages,
				number_rte_videos: e.numberRteVideos,
				original_content: e.originalContent,
				spoiler: e.spoiler,
				title_length: e.titleLength,
				type: e.type,
				url_length: e.urlLength
			})
		},
		"./src/telemetry/models/PostRequirement.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "BodyRestrictionPolicy", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return a
			}));
			var n, s = i("./node_modules/lodash/mapKeys.js"),
				r = i.n(s),
				o = i("./node_modules/lodash/snakeCase.js"),
				d = i.n(o),
				l = i("./src/telemetry/eventSchemas/post_requirement_types.js");
			! function(e) {
				e.Optional = "optional", e.Required = "required", e.Disabled = "disabled"
			}(n || (n = {}));
			const a = e => new l.PostRequirement(r()(e, (e, t) => d()(t)))
		},
		"./src/telemetry/models/Subreddit.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "toThrift", (function() {
				return r
			})), i.d(t, "getSubscribeEventNoun", (function() {
				return o
			}));
			var n = i("./src/reddit/constants/posts.ts"),
				s = i("./src/telemetry/eventSchemas/subreddit_types.js");
			const r = e => new s.Subreddit({
					access_type: e.accessType,
					nsfw: e.nsfw,
					public_description: e.publicDescription,
					number_coins: e.numberCoins,
					id: e.id,
					name: e.name,
					category_name: e.categoryName,
					post_difficulty_rating: e.postDifficultyRating,
					topic_tag_ids: e.topicTagIds,
					topic_tag_contents: e.topicTagContents,
					topic_tag_types: e.topicTagTypes
				}),
				o = (e, t) => e === n.a.PROFILE ? t ? "unfollow" : "follow" : t ? "unsubscribe" : "subscribe"
		},
		"./src/telemetry/models/Timer.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "TimerType", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return r
			}));
			var n, s = i("./src/telemetry/eventSchemas/timer_types.js");
			! function(e) {
				e.Initial = "initial_page_load", e.InApp = "in_app_navigation", e.UserCancelled = "user_cancelled", e.HeartbeatIdleTime = "heartbeat_idle_time", e.ChatLoadInboxNew = "chat_performance_load_inbox_new", e.ChatLoadInboxCached = "chat_performance_load_inbox_cached", e.ChatLoadChannelNew = "chat_performance_load_channel_new", e.ChatLoadChannelCached = "chat_performance_load_channel_cached", e.VideoFirstFrame = "video_first_frame", e.LayerCreationTime = "layer_creation_time"
			}(n || (n = {}));
			const r = e => new s.Timer({
				type: e.type,
				millis: e.millis,
				time_to_first_byte: e.timeToFirstByte,
				first_contentful_paint: e.firstContentfulPaint,
				first_meaningful_paint: e.firstMeaningfulPaint,
				first_input_delay: e.firstInputDelay
			})
		}
	}
]);
//# sourceMappingURL=Chat~Governance~Reddit.a208f63048e1abef93df.js.map
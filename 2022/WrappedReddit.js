// https://www.redditstatic.com/desktop2x/WrappedReddit.320ed5a557bfe1236516.js
// Retrieved at 2/2/2022, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["WrappedReddit"], {
		"./assets/fonts/RedditSans/font.less": function(a, e, c) {},
		"./src/reddit/actions/wrappedReddit/constants.ts": function(a, e, c) {
			"use strict";
			c.d(e, "c", (function() {
				return l
			})), c.d(e, "b", (function() {
				return t
			})), c.d(e, "a", (function() {
				return r
			})), c.d(e, "f", (function() {
				return n
			})), c.d(e, "h", (function() {
				return s
			})), c.d(e, "g", (function() {
				return i
			})), c.d(e, "i", (function() {
				return d
			})), c.d(e, "e", (function() {
				return m
			})), c.d(e, "d", (function() {
				return o
			}));
			const l = "WRAPPED_REDDIT_CARDS_PENDING",
				t = "WRAPPED_REDDIT_CARDS_LOADED",
				r = "WRAPPED_REDDIT_CARDS_FAILED",
				n = "WRAPPED_REDDIT_RESET",
				s = "WRAPPED_REDDIT_SHARE_CARD_WAS_OPENED",
				i = "WRAPPED_REDDIT_SET_CARD_INDEX",
				d = "WRAPPED_REDDIT_SUBREDDIT_CHANGED",
				m = "WRAPPED_REDDIT_IMAGE_PENDING",
				o = "WRAPPED_REDDIT_IMAGE_LOADED"
		},
		"./src/reddit/components/Media/LoadingIcon/index.m.less": function(a, e, c) {
			a.exports = {
				image: "_1Wd26c2ichqUxeZVJStEJT"
			}
		},
		"./src/reddit/components/Media/LoadingIcon/index.tsx": function(a, e, c) {
			"use strict";
			var l = c("./node_modules/react/index.js"),
				t = c.n(l),
				r = c("./src/config.ts"),
				n = c("./src/reddit/components/Media/LoadingIcon/index.m.less"),
				s = c.n(n);
			e.a = () => t.a.createElement("img", {
				className: s.a.image,
				src: `${r.a.assetPath}/img/loading.gif`
			})
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(a, e, c) {
			a.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				redditStyle: "_3kUvbpMbR21zJBboDdBH7D",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(a, e, c) {
			"use strict";
			var l = c("./node_modules/react/index.js"),
				t = c.n(l),
				r = c("./src/lib/classNames/index.ts"),
				n = c("./src/reddit/controls/Button/index.tsx"),
				s = c("./src/reddit/controls/ToggleSwitch/index.m.less"),
				i = c.n(s);
			e.a = Object(l.memo)(Object(l.forwardRef)((a, e) => {
				const c = a.size || n.d.XS;
				return t.a.createElement("button", {
					"aria-checked": a.on,
					className: Object(r.a)(i.a.toggleSwitch, a.className, i.a[c], {
						[i.a.mActive]: a.on && !a.disabled || a.forceOn && a.on,
						[i.a.mDisabled]: a.disabled,
						[i.a.redditStyle]: a.redditStyle
					}),
					style: a.on && !a.disabled && a.activeColorOverride ? {
						backgroundColor: a.activeColorOverride
					} : void 0,
					id: a.id,
					role: "switch",
					tabIndex: a.tabIndex,
					type: "button",
					onClick: () => !a.disabled && a.onToggle && a.onToggle(),
					ref: e
				}, t.a.createElement("div", {
					className: i.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(a, e, c) {
			"use strict";
			var l = c("./node_modules/react/index.js"),
				t = c.n(l);
			e.a = a => t.a.createElement("svg", {
				className: a.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, t.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Download/index.tsx": function(a, e, c) {
			"use strict";
			var l = c("./node_modules/react/index.js"),
				t = c.n(l);

			function r() {
				return (r = Object.assign || function(a) {
					for (var e = 1; e < arguments.length; e++) {
						var c = arguments[e];
						for (var l in c) Object.prototype.hasOwnProperty.call(c, l) && (a[l] = c[l])
					}
					return a
				}).apply(this, arguments)
			}
			e.a = a => t.a.createElement("svg", r({
				viewBox: "0 0 23 23",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, a), t.a.createElement("path", {
				d: "M20.7386 12.7V19.2999C20.7386 19.7391 20.5641 20.1604 20.2535 20.4709C19.943 20.7815 19.5218 20.9559 19.0826 20.9559H3.48256C3.04336 20.9559 2.62215 20.7815 2.31159 20.4709C2.00103 20.1604 1.82656 19.7391 1.82656 19.2999V12.7H0.338562V19.2999C0.338562 19.7128 0.419884 20.1217 0.577885 20.5031C0.735886 20.8846 0.967471 21.2311 1.25942 21.5231C1.55137 21.815 1.89796 22.0466 2.27941 22.2046C2.66085 22.3626 3.06969 22.444 3.48256 22.444H19.0826C19.4954 22.444 19.9043 22.3626 20.2857 22.2046C20.6672 22.0466 21.0138 21.815 21.3057 21.5231C21.5977 21.2311 21.8292 20.8846 21.9872 20.5031C22.1452 20.1217 22.2266 19.7128 22.2266 19.2999V12.7H20.7386Z"
			}), t.a.createElement("path", {
				d: "M10.9706 16.996H11.2826L11.6786 16.9599L16.6106 12.028L15.5546 10.972L12.0386 14.488V0.699951H10.5386V14.488L7.01056 10.972L5.95456 12.028L10.6706 16.7439L10.9706 16.996Z"
			}))
		},
		"./src/reddit/icons/svgs/EditPencil/index.tsx": function(a, e, c) {
			"use strict";
			var l = c("./node_modules/react/index.js"),
				t = c.n(l);
			e.a = a => t.a.createElement("svg", {
				className: a.className,
				viewBox: "0 0 14 14",
				xmlns: "http://www.w3.org/2000/svg",
				version: "1.1"
			}, t.a.createElement("title", {
				id: `${a.title}-title`
			}, a.title), t.a.createElement("g", null, t.a.createElement("path", {
				fill: "inherit",
				d: "M8.1168,3.0832 L10.9168,5.8832 C11.0728,6.0392 11.0728,6.2928 10.9168,6.4488 L4.0824,13.2832 C4.0072,13.3584 3.9056,13.4 3.8,13.4 L1,13.4 C0.7784,13.4 0.6,13.2216 0.6,13 L0.6,10.2 C0.6,10.0944 0.6416,9.9928 0.7168,9.9176 L7.5512,3.0832 C7.7072,2.9272 7.9608,2.9272 8.1168,3.0832 Z M13.5168,2.152 C13.9848,2.62 13.9848,3.3808 13.5168,3.8488 L12.048,5.3176 C11.9696,5.396 11.8672,5.4352 11.7656,5.4352 C11.6632,5.4352 11.5608,5.396 11.4824,5.3176 L8.6824,2.5176 C8.5264,2.3616 8.5264,2.108 8.6824,1.952 L10.1512,0.4832 C10.6192,0.0152 11.38,0.0152 11.848,0.4832 L13.5168,2.152 Z"
			})))
		},
		"./src/reddit/icons/svgs/InfoRedditRecap/index.tsx": function(a, e, c) {
			"use strict";
			var l = c("./node_modules/react/index.js"),
				t = c.n(l);
			e.a = a => t.a.createElement("svg", {
				fill: "none",
				className: a.className,
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			}, t.a.createElement("g", {
				fill: "#000"
			}, t.a.createElement("path", {
				d: "m22.008 8.07598-6.084-6.084c-.5142-.51738-1.1255-.92798-1.799-1.208171-.6734-.280189-1.3956-.424434-2.125-.424434s-1.4516.144245-2.12506.424434c-.67344.280191-1.28482.690791-1.79896 1.208171l-6.084 6.084c-.51738.51414-.92798 1.12552-1.208171 1.79896-.280189.67346-.424434 1.39566-.424434 2.12506s.144245 1.4516.424434 2.125c.280191.6735.690791 1.2848 1.208171 1.799l6.084 6.084c.51414.5174 1.12552.928 1.79896 1.2082.67346.2802 1.39566.4244 2.12506.4244s1.4516-.1442 2.125-.4244c.6735-.2802 1.2848-.6908 1.799-1.2082l6.084-6.084c.5174-.5142.928-1.1255 1.2082-1.799.2802-.6734.4244-1.3956.4244-2.125s-.1442-1.4516-.4244-2.12506c-.2802-.67344-.6908-1.28482-1.2082-1.79896zm-1.056 6.79202-6.084 6.084c-.7739.7352-1.8006 1.1451-2.868 1.1451-1.0675 0-2.09413-.4099-2.86802-1.1451l-6.084-6.084c-.76063-.7607-1.18795-1.7923-1.18795-2.868s.42732-2.10737 1.18795-2.86802l6.084-6.084c.76065-.76063 1.79232-1.18795 2.86802-1.18795s2.1073.42732 2.868 1.18795l6.084 6.084c.7606.76065 1.1879 1.79232 1.1879 2.86802s-.4273 2.1073-1.1879 2.868z"
			}), t.a.createElement("path", {
				d: "m11.352 18.588c-.1921-.11-.3531-.2669-.468-.456-.1163-.1957-.1746-.4205-.168-.648-.0119-.238.0421-.4747.156-.684.1058-.1952.2636-.3572.456-.468.1944-.1206.4192-.183.648-.18.2306 0 .4575.0577.66.168.1899.1179.3501.278.468.468.1103.1981.1682.4212.1682.648s-.0579.4498-.1682.648c-.1091.1968-.2712.3589-.468.468-.196.1104-.4171.1684-.642.1684s-.4461-.058-.642-.1684zm-.144-4.008-.252-8.05202h2.088l-.252 8.05202z"
			})))
		},
		"./src/reddit/icons/svgs/PlusCircle/index.tsx": function(a, e, c) {
			"use strict";
			var l = c("./node_modules/react/index.js"),
				t = c.n(l);
			e.a = a => t.a.createElement("svg", {
				className: a.className,
				viewBox: "0 0 36 36",
				version: "1.1"
			}, t.a.createElement("circle", {
				cx: "18",
				cy: "18",
				fill: "#fff",
				r: "17.5",
				stroke: "inherit"
			}), t.a.createElement("path", {
				clipRule: "evenodd",
				d: "m25.2 16.8001h-6v-6c0-.6624-.5364-1.2-1.2-1.2s-1.2.5376-1.2 1.2v6h-6c-.6636 0-1.20002.5376-1.20002 1.2s.53642 1.2 1.20002 1.2h6v6c0 .6624.5364 1.2 1.2 1.2s1.2-.5376 1.2-1.2v-6h6c.6636 0 1.2-.5376 1.2-1.2s-.5364-1.2-1.2-1.2z",
				fill: "inherit",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(a, e, c) {
			"use strict";
			var l = c("./node_modules/react/index.js"),
				t = c.n(l);

			function r() {
				return (r = Object.assign || function(a) {
					for (var e = 1; e < arguments.length; e++) {
						var c = arguments[e];
						for (var l in c) Object.prototype.hasOwnProperty.call(c, l) && (a[l] = c[l])
					}
					return a
				}).apply(this, arguments)
			}
			e.a = a => t.a.createElement("svg", r({}, a, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), t.a.createElement("g", null, t.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/pages/WrappedReddit/CardTemplates/ShareCard/index.m.less": function(a, e, c) {
			a.exports = {
				forText: "_3NENBEtCbg67MAYSNMZiVZ",
				shareCardImage: "_1TS51iCvSVd-d9_gD4FmR3",
				cardContainer: "o3R6cGmUSQKjhtEXN9OCe",
				cardWrapper: "_28wMMzHb3kg85AlzpDv2FB",
				card: "_3qlrCLHmhwJORlc9eQSr72",
				flipCard: "j5fxvWacCEwhokarEVJDy",
				front: "_1hTNxOhOFgqhff1g_tj0mv",
				textTop: "_3w4DJWcfzOB1pWo15bDnq6",
				textBottom: "_2tkQYNW1r5hgCV0CXIch2K",
				logo: "KAOXo4ZOySb0w7Hn1i3-S",
				backgroundCircle: "_3FRrygpmRfNFG75MjwTgsS",
				dog: "_2TBwst1_zYEpBPjFgFjD-W",
				popcorn: "_311cv0Rb9HixyL8hnrRmkS",
				diamond: "_37jdGs33BokQUoMLCgjDoQ",
				dolphin: "_1EO5q1bxQLKALfyuMIP4ob",
				back: "_R4QfwReNhOWnlVII1PV_",
				editAvatarWrapper: "BfOsgXPXzKhQiDPgNPALU",
				editAvatar: "_2TKA6msDL1xJcqwyNhcKWW",
				hideWrapper: "_1FxusKtLOZoVEo1PMRyKlt",
				titleWrapper: "_2xo94Zs5f3Ec7r2uAcmoqi",
				infoRedditRecap: "_2Z19AP1bUCguKWdF2QFRUb",
				title: "_3Pbe1JrgzKsTOO1uXXk5Li",
				toggle: "_1OKHxCPT4QNjFMM_s_hSrr",
				shareCardImageWrrapper: "_11mAT-KtfDQnh49BKrNeuY",
				isPremium: "_2XqYiUy2viXUuB_MkvMyyY",
				whiteBackground: "_2c9eo6291gOgf_NAcXSJox",
				backgroundWithGradient: "_2GRqkIyZ4Yt8UnHxg0zPDE",
				forFrontPage: "hgUg2CUN6KmezI63jO15q",
				isEpicLevel: "_2Y8F65_FqmmZFuIDtPZGJC",
				isLegendaryLevel: "_1BicOTZcm92MOTsPEreCPh",
				isRareLevel: "Ek6bPpn0avVM4uaM-Iz9j",
				isCommonLevel: "_3Rr-lPeCSZh6-YCcCU1gKj",
				infoWrapper: "jIWTAYHlx8SvK5UN1QU__",
				headerWrapper: "_2W1hkHEy9OL_aLfGp88ia2",
				user: "_2ev16MiAH7fPDkm65NkotZ",
				userName: "_1A4Pc01QwCQahfMKgUZjFF",
				userLevel: "_16kCFnr1lFnAOUCdQ9QZyU",
				userKarma: "_3UiYJ9taUEV7059LAKY16a",
				countKarma: "_1J57JU2rz93gZXzldeHw3E",
				karma: "_1WqeqimBm5DvkiyIdTrkp6",
				bottomWrapper: "_3ymoLShiOUY1RrTBLOuGur",
				abilityRow: "_2roJjTG8r-oUHdfswpEz2x",
				abilityValue: "_3MuYFC6TReuvvNMtGvTRtd",
				abilityTitle: "TOZAlOw2NfAtCtr7Icgj8",
				cardLinesWrapper: "_3taPFQHS9D3zo3maA7uWpb",
				subredditListWrapper: "_1eMetQtkk7o8D67BcPULwL",
				subreddit: "bZt3IiHTeh5K-Y0cA8COL",
				year: "_1oRYpsJptwFiMzIVRwDmZF"
			}
		},
		"./src/reddit/pages/WrappedReddit/CardTemplates/index.m.less": function(a, e, c) {
			a.exports = {
				headingWrapper: "_18S6IdNay3SgMX7GQb0rM5",
				headingSection: "_1xC63cnY2qhjcYGIDQr7hS",
				headingContent: "NWNkhjewZJ2Q9XFqF2xlz",
				headingArt: "_1xKv7jpijv-5V_BZwrB8Mj",
				headingText: "_3ptfBsE_93gCuF4-52fpgf",
				defaultCardImage: "_3RM4uvqqBD52Fqs3_XLQ5I",
				imageDataWrapper: "_1ZpWx2bEBGU4dIy5w_h8nj",
				plusText: "_3wN4JPXMZwZzhMdfSolGyc",
				singleStatScoreWrapper: "_1SqgsAQwlYb9_h91-px85o",
				valueText: "_2R2mdVEyuuUlidllioYj3j",
				unitText: "_1Zb0qsuAre2xPGS6DrrNVi",
				hiddenPlusText: "_1zmrWYAmY-wKd0rieqK7Ne",
				fallbackStaticImage: "_4etB0gRP4CKmxUYekZpJP",
				logoSvg: "_1MkxWn2AIcZOUmHMtqG5Lk",
				heading: "_3ER-k3B79GQfzEIsBNj98o",
				subheading: "_2ew6PsvBNfoRlK5tQpjgPu",
				subredditLink: "_42Lq-ymewUWKmMvF_0XgC",
				isSingleStatSubreddit: "_27uJ5XJbuWMt7zys4AFCr4",
				isPostCard: "_294-3KMZgcOkz1x3mUJF6P",
				subredditLinkR: "_2vsqnexkR03Fp1H6fe-8HR",
				subredditLinkName: "_19dfU5Buxa1F47TloUw_Ae",
				icon: "_1Dt9EZh5oqAwZahqSY25KX",
				iconPlus: "_1OMm-evc9on4ENCzRVLR3I",
				subredditLinkWrapper: "_10MUGyr3r5IF0igOxcKb5f",
				introLogo: "_23V0Q5WE2qVFhWsvOgoDGp",
				introLogoTxt: "_3IHrxKplRN8y81E1U6U9y-",
				subredditListSection: "_3axVoFkpPzPJfv-NNbP2zd",
				subredditSection: "siHTla9cpu7IcTiyYLY3r",
				subredditCircle: "_1RA6WTvia8Oxp_ijsbzRkU",
				subredditCircleValue: "_2ibe3BH0I97pO6BXb2NHdp",
				subredditCircleUnit: "_1PU7Q796VrZ_VONgjN3jyE",
				singleStatWrapper: "_1PfCwo_7qWJRI3xv2jNzI5",
				singleStatSubredditCircle: "_3OvkdVPHBd8b86w62UYg0f",
				singleStatSubredditCircleValue: "_1twk7iLNEPfvR01c8zcrgu",
				singleStatSubredditCircleUnit: "_2BM7AdCOl4gM5v3sBVX1am",
				postCardCircle: "_2qAW-U2-fytSh-DL1YbJKo",
				postCardCircleValue: "_1K-GWWKWZYwEsbq_KGzWku",
				postCardCircleUnit: "_2AvQ3XgIMtesexOxUgMYwD",
				commentPostTitle: "_1mi0t2pwj86Xa9jSzTx9pp",
				isEmptyImage: "_1yOJZ_L54EDkUGS5fFapfC",
				postImageWrapper: "NCD7Lg1hov9wHF0H0I_lD",
				postImage: "-VKrxE-D9IjBEgAe-xbG2",
				postImageLink: "_2j3w-omVBG-PxpHZgByYeo",
				postEmptyImage: "tZ6F5HhO-em1_BXUKoNOC",
				isComment: "dWIpi9eGG7WMH-dcMQkGY",
				endWrapper: "_2PFqLWzOOhKdAlQo-KXjqt",
				endTitle: "T7r5-H8FGZ4OnKbMlLLfP",
				forOneColumn: "_34Gxzzzdmk5X0T3P8fbBlQ",
				forSecondColumns: "_1Vf1bOr7EyExV8PJQd7qRM",
				asLink: "_1USiMcV0p-9oW4yO-4DN3E"
			}
		},
		"./src/reddit/pages/WrappedReddit/Carousel/index.m.less": function(a, e, c) {
			a.exports = {
				carousel: "sLLDRdg6QdhlK0LqJvfi7",
				buttonsWrapper: "KpMLEPYvCluY4sZ6rhE7",
				ctaButton: "_2FYxW2MvghHNY6Up6fywCR",
				shareBtn: "IlnOSn8Z4snk2UZPWSxqA",
				pager: "_3awt0Ajh4khxxmGRRupQ6t",
				progressDot: "_3gi75d2lmY2lSAkpTt6aJO",
				active: "_1VXJhfgd81c7po-cIzGKjc",
				nextDot: "_2R2s6ELkzFG2L3Erje7d6y",
				background: "_11m516p1kLIP5fDoSFoB6c",
				contentWrapper: "_2Dhe9KrHuRwlsqqn88Zhkv",
				errorLogo: "_2rrrjqRbJDkq99piHf7HKC",
				errorTitle: "_2P0H3pU6oU5D-7_6ti2GUU",
				errorSubTitle: "_21CghEaA-Ilq1qbQqtHicv",
				retryButton: "_2SdBPEg1ClCfy5bYH4M245",
				errorText: "_233NC14AqjwsEthl0fLrl",
				downloadIconWrapper: "zlw9b2eEOs859TCMkXqsv",
				downloadIcon: "_19XymTvdXr_7JJtmEL7k1e",
				loadingIconWrapper: "_2XAbQ6OYwPVu7Ce_T3XMFC",
				orangedBackground: "_3KBL3Dkxm0af18wOBNzmGD",
				orangedBackgroundCircle: "sYw7GLTIx7RfjECrgnIao"
			}
		},
		"./src/reddit/pages/WrappedReddit/index.tsx": function(a, e, c) {
			"use strict";
			c.r(e);
			var l = c("./node_modules/react/index.js"),
				t = c.n(l),
				r = (c("./assets/fonts/RedditSans/font.less"), c("./node_modules/react-redux/es/index.js")),
				n = c("./src/lib/classNames/index.ts"),
				s = c("./src/reddit/actions/toaster.ts"),
				i = c("./src/lib/makeActionCreator/index.ts"),
				d = c("./src/reddit/actions/wrappedReddit/constants.ts"),
				m = c("./src/lib/makeGqlRequest/index.ts"),
				o = c("./src/redditGQL/operations/PersonalizedYearInReview.json");
			var p, u = c("./src/reddit/helpers/pageActionLoginRedirect.ts");
			! function(a) {
				a.Common = "COMMON", a.Rare = "RARE", a.Epic = "EPIC", a.Legendary = "LEGENDARY"
			}(p || (p = {}));
			const f = "PersonalizedYearInReviewCommentCard",
				h = "PersonalizedYearInReviewEndCard",
				E = "PersonalizedYearInReviewGenericCard",
				b = "PersonalizedYearInReviewIntroCard",
				g = "PersonalizedYearInReviewPostCard",
				_ = "PersonalizedYearInReviewShareCard",
				v = "PersonalizedYearInReviewSingleStatCard",
				Z = "PersonalizedYearInReviewSubredditCard",
				C = "PersonalizedYearInReviewSubredditListCard",
				M = "PersonalizedYearInReviewSingleStatSubredditListCard",
				N = a => a.__typename === h,
				k = a => a.__typename === b,
				L = a => a.__typename === _;
			var x = c("./src/reddit/selectors/user.ts");
			const w = Object(i.a)(d.c),
				O = Object(i.a)(d.b),
				I = Object(i.a)(d.a),
				S = Object(i.a)(d.h),
				R = Object(i.a)(d.g),
				j = Object(i.a)(d.f),
				A = Object(i.a)(d.i),
				D = Object(i.a)(d.e),
				F = Object(i.a)(d.d),
				y = a => {
					const e = a.find(N);
					return e ? e.subredditList.map(a => ({
						...a,
						subscribe: !1
					})) : []
				},
				P = () => async (a, e, {
					gqlContext: c
				}) => {
					var l, t;
					const r = e();
					if (!Object(x.J)(r)) return Object(u.a)(a, r);
					a(w());
					const n = await (async (a, e) => {
						return await Object(m.a)(a, {
							...o,
							variables: e
						})
					})(c(), {});
					if (!n.ok) {
						const e = n.error;
						return void a(I({
							error: e
						}))
					}
					const s = n.body,
						i = ((null === (t = null === (l = null == s ? void 0 : s.data) || void 0 === l ? void 0 : l.personalizedYearInReview) || void 0 === t ? void 0 : t.cards) || []).map((a, e) => ({
							...a,
							id: `wrapped_reddit${e}`
						}));
					a(O({
						cards: i,
						subreddits: y(i)
					}))
				};
			var T = c("./src/reddit/constants/modals.ts"),
				W = c("./src/reddit/selectors/telemetry.ts");
			const U = a => e => ({
					...W.m(e),
					noun: "subreddit",
					source: "recap",
					action: "click",
					recap: W.U(e),
					subreddit: {
						id: a
					}
				}),
				B = a => e => ({
					...W.m(e),
					noun: "post",
					source: "recap",
					action: "click",
					recap: W.U(e),
					post: {
						id: a
					}
				});
			var V = c("./src/reddit/hooks/useTracking.ts"),
				Y = c("./src/reddit/icons/svgs/Download/index.tsx"),
				H = c("./src/reddit/models/Toast/index.ts"),
				G = c("./src/reddit/controls/Button/index.tsx"),
				z = c("./src/reddit/icons/svgs/Replay/index.tsx"),
				K = c("./src/config.ts"),
				q = c("./src/lib/notifications/index.ts"),
				Q = c("./src/lib/notifications/constants.ts"),
				J = c("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				X = c("./src/reddit/controls/InternalLink/index.tsx"),
				$ = c("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				aa = c("./src/reddit/icons/svgs/PlusCircle/index.tsx");
			var ea = a => t.a.createElement("svg", {
				className: a.className,
				viewBox: "0 0 75 64",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, t.a.createElement("path", {
				d: "M74.149 30.165c.095-.745-.305-1.291-1.008-2.838l-5.7-12.55c-1.097-2.416-1.023-2.848-3.524-3.982C56.455 7.413 48.72 4.44 41.142 1.272l-21.52 3.243c-1.782.268-4.088.27-5.47 1.154-2.567 1.64-4.615 5.78-6.42 8.039-1.474 1.845-5.628 5.258-6 7.512-.007.1-.007.2 0 .301-.933 1.486.022 6.681.113 8.313.123 2.223.618 2.754 2.105 4.73C8 39.938 11.64 46.438 16.534 51.266c1.773 1.748 4.365 3.162 6.427 4.648 2.576 1.855 6.656 6.21 9.829 7.081 1.81.497 3.86-.855 5.752-1.605 3.984-1.58 7.985-3.13 11.951-4.74 5.427-2.203 9.616-6.846 13.953-10.338 2.123-1.713 5.566-3.599 7.13-5.742 1.43-1.96 1.723-5.273 2.415-7.54.546-1.791.767-2.333.158-2.866Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M74.162 30.15a.887.887 0 0 1 .42.517 2.64 2.64 0 0 1-.092 1.274c-.126.487-.275 1.056-.441 1.7-.151.641-.29 1.37-.45 2.163a26.13 26.13 0 0 1-.623 2.563 8.023 8.023 0 0 1-1.355 2.718c-1.364 1.665-3.266 2.906-5.122 4.239a55.696 55.696 0 0 0-5.364 4.462 69.116 69.116 0 0 1-5.368 4.487 25.121 25.121 0 0 1-5.606 3.153l-4.745 1.968-7.179 3.024a15.745 15.745 0 0 1-3.94 1.526 4.801 4.801 0 0 1-1.254.025 6.267 6.267 0 0 1-1.18-.313 12.497 12.497 0 0 1-1.968-.992c-2.423-1.513-4.447-3.427-6.541-5.114-2.01-1.638-4.533-2.866-6.812-4.751a14.8 14.8 0 0 1-.836-.754l-.757-.76a38.857 38.857 0 0 1-1.444-1.573 55.664 55.664 0 0 1-2.669-3.294c-1.7-2.241-3.257-4.547-4.818-6.798a156.146 156.146 0 0 0-2.36-3.325l-1.22-1.618a11.41 11.41 0 0 1-1.255-1.92 6.86 6.86 0 0 1-.603-2.39l-.04-.534-.043-.453L.38 28.4c-.164-1.332-.332-2.686-.377-4.1-.022-.614 0-1.228.07-1.838l.083-.51.161-.566a.906.906 0 0 0 .083-.205v-.143a1.62 1.62 0 0 1 .053-.258c.17-.682.464-1.328.865-1.907.328-.501.688-.982 1.075-1.44.745-.882 1.52-1.682 2.281-2.462a29.528 29.528 0 0 0 2.094-2.262c1.205-1.585 2.292-3.513 3.675-5.295a13.615 13.615 0 0 1 2.481-2.557c.273-.206.56-.391.86-.555.304-.154.62-.284.946-.387.58-.181 1.174-.313 1.776-.396 1.14-.167 2.17-.223 3.15-.38l3.117-.46 6.169-.902L41.292.004 53.744 5.26c1.962.837 3.888 1.675 5.776 2.513l2.795 1.268c.93.436 1.806.823 2.755 1.314.515.258.991.586 1.415.975.42.42.754.915.985 1.46l1.138 2.658 2.177 5.091 2.05 4.838.978 2.31c.163.376.336.742.496 1.144.198.434.275.913.221 1.387a2.32 2.32 0 0 0-.286-1.17c-.172-.342-.368-.649-.559-.973-.387-.642-.763-1.332-1.16-2.042a325.097 325.097 0 0 1-2.467-4.538l-2.586-4.915c-.43-.83-.878-1.686-1.294-2.531a6.39 6.39 0 0 0-.63-1.075 2.474 2.474 0 0 0-.803-.648 25.918 25.918 0 0 0-2.433-1.054l-2.518-1.003-4.714-1.85c-2.956-1.158-5.465-2.161-7.173-2.91l-3.681-1.615-1.792-.79-.878-.39-.434-.193a.45.45 0 0 1-.099-.048l-.034-.02-9.996 1.29-10.006 1.345-1.23.168c-.427.058-.849.1-1.26.137-.825.077-1.62.147-2.37.29-.36.067-.714.165-1.058.294a3.684 3.684 0 0 0-.903.506 9.943 9.943 0 0 0-1.632 1.564 41.172 41.172 0 0 0-2.758 3.81 39.85 39.85 0 0 1-1.388 1.962 19.69 19.69 0 0 1-1.62 1.79c-1.1 1.113-2.2 2.183-3.145 3.336a8.221 8.221 0 0 0-1.17 1.782c-.14.323-.222.668-.242 1.019-.044.1-.1.211-.134.3l-.064.224c-.047.147-.06.328-.094.489a21.208 21.208 0 0 0 .158 4.357c.084.74.168 1.478.25 2.213.022.702.114 1.4.276 2.083.21.637.533 1.23.955 1.753l1.298 1.737a127.849 127.849 0 0 1 2.494 3.516c1.613 2.341 3.169 4.657 4.813 6.841a44.586 44.586 0 0 0 5.269 6.015c1.942 1.69 4.284 2.89 6.418 4.495 2.078 1.635 3.905 3.382 5.894 4.798a11.323 11.323 0 0 0 3.052 1.674c.918.343 1.977-.007 3.046-.459.534-.228 1.073-.49 1.632-.745.275-.126.57-.252.857-.368l.831-.333 3.293-1.317 6.429-2.557c4.247-1.458 7.577-4.191 10.782-6.954a67.067 67.067 0 0 1 5.642-4.578c1.089-.74 2.21-1.44 3.267-2.193a12.53 12.53 0 0 0 2.782-2.51 10.503 10.503 0 0 0 1.412-3.202c.318-1.087.557-2.124.819-3.046.26-.92.576-1.702.77-2.36a2.22 2.22 0 0 0 .126-.89 1 1 0 0 0-.322-.58Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "m41.143 1.272-21.52 3.242c-1.783.27-4.089.275-5.471 1.155-2.566 1.64-4.616 5.78-6.42 8.039-1.474 1.845-5.628 5.258-5.999 7.512-.253 1.535 1.737 4.294 2.423 5.803 1.994 4.387 3.209 11.961 8.369 14.12l11.938 4.99c3.002 1.256 6.715 3.55 9.964 4.167 1.72.327 3.568-.21 5.345-.48l13.594-2.046c2.111-.318 6.483-.226 8.303-1.252 1.872-1.054 3.468-4.314 4.72-5.883 2.28-2.855 5.53-5.846 7.202-9.017 1.01-1.92.614-1.958-.448-4.296l-5.7-12.55c-1.097-2.414-1.023-2.847-3.525-3.981-7.462-3.382-15.196-6.354-22.775-9.523Z",
				fill: "#00CCC0"
			}), t.a.createElement("path", {
				d: "M41.15 1.254c.397.049 2.292.754 5.08 1.823 2.786 1.07 6.463 2.5 10.39 4.097 1.962.8 3.985 1.645 5.982 2.51 1.027.413 2.028.888 2.997 1.422a3.84 3.84 0 0 1 1.282 1.271c.272.471.515.959.727 1.46 1.723 3.729 3.319 7.11 4.475 9.512l1.544 3.211c.26.549.51 1.053.792 1.602.157.298.294.605.412.92.153.41.2.852.138 1.286a6.775 6.775 0 0 1-.782 1.956 17.964 17.964 0 0 1-1.008 1.65 37.346 37.346 0 0 1-2.338 3.008l-2.453 2.84a44.97 44.97 0 0 0-1.169 1.425c-.344.44-.672.957-1.009 1.483a28.253 28.253 0 0 1-2.26 3.24 7.08 7.08 0 0 1-1.697 1.495c-.67.36-1.393.612-2.142.748-2.715.543-5.252.428-7.662.903l-7.55 1.19-3.748.587c-.624.1-1.25.19-1.83.296-.6.11-1.222.238-1.883.343-.69.116-1.39.17-2.09.164a7.694 7.694 0 0 1-1.127-.11 13.455 13.455 0 0 1-1.007-.229c-1.255-.35-2.48-.8-3.661-1.345-2.01-.895-3.887-1.916-5.762-2.689l-5.88-2.442-5.83-2.435a9.923 9.923 0 0 1-3.026-2.044 14.482 14.482 0 0 1-2.068-2.772 35.024 35.024 0 0 1-2.503-5.895c-.337-.97-.656-1.926-1.001-2.838-.168-.463-.355-.896-.537-1.331a18.094 18.094 0 0 0-.648-1.234 24.768 24.768 0 0 1-1.423-2.826 5.78 5.78 0 0 1-.441-1.868 4.038 4.038 0 0 1 .553-2.03c.54-.939 1.19-1.811 1.935-2.599.684-.754 1.384-1.449 2.063-2.128.68-.68 1.364-1.342 1.886-1.988.546-.685 1.068-1.453 1.593-2.225a31.365 31.365 0 0 1 3.507-4.555c.36-.358.746-.69 1.154-.993.44-.33.927-.594 1.444-.78.928-.295 1.888-.48 2.859-.548l1.314-.12c.424-.038.825-.09 1.265-.15l2.556-.334A1400.07 1400.07 0 0 1 41.08.892c-4.852 1.302-12.014 2.87-18.816 4.215l-2.532.493c-.894.164-1.719.256-2.494.387a8.265 8.265 0 0 0-2.002.537c-.526.283-1 .654-1.4 1.096a22.054 22.054 0 0 0-2.289 2.965c-.655.969-1.23 1.85-1.751 2.568-.263.36-.53.721-.825 1.083a13.43 13.43 0 0 1-.935 1.051c-.63.645-1.251 1.226-1.856 1.813a19.238 19.238 0 0 0-3.106 3.561c-.149.24-.255.505-.315.78-.015.275.022.55.11.81.243.724.551 1.424.921 2.093.37.72.781 1.412 1.16 2.241.337.795.628 1.576.89 2.355 1.056 3.085 1.902 6.159 3.58 8.643a8.116 8.116 0 0 0 3.163 2.86c1.375.628 2.824 1.226 4.216 1.83l8.305 3.545c2.738 1.234 5.248 2.713 7.907 3.575.64.22 1.302.373 1.973.46a8.517 8.517 0 0 0 1.994-.08c.677-.096 1.36-.234 2.058-.359.709-.124 1.391-.218 2.079-.325l8.1-1.245 3.951-.614c1.368-.205 2.671-.24 3.955-.363a16.415 16.415 0 0 0 3.653-.623c1.031-.328 1.801-1.261 2.526-2.23.72-.981 1.344-2.041 2.056-3.093a35.19 35.19 0 0 1 2.372-2.906 51.257 51.257 0 0 0 4.457-5.465c.306-.464.586-.945.838-1.44.236-.372.372-.798.394-1.238a5.404 5.404 0 0 0-.55-1.346c-.257-.52-.499-1.054-.732-1.563l-2.773-6.082-2.654-5.886c-.454-.974-.778-2.006-1.333-2.503a10.465 10.465 0 0 0-2.49-1.384c-7.033-3.242-19.37-8.67-21.735-9.854Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M14.945 44.982 32.11 60.263l.248-8.127-17.413-7.154Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M14.954 44.962c.538-.244 7.284 2.546 9.98 3.387 1.261.393 2.56.827 3.877 1.287l1.986.707.998.366 1.733.67-.024 1.74v.947l-.01 1.886-.03 2.29-.072 3.61-.028 1.318-4.607-4.059-2.391-2.148a206.22 206.22 0 0 1-4.486-4.21c-2.83-2.741-5.302-5.309-7.19-7.48 2.716.9 7.033 3.674 8.246 5.022a130.66 130.66 0 0 0 4.866 5.115c.797.794 1.585 1.561 2.366 2.302l.733.711.708.667.053-1.283.045-1.753.035-2 .012-.976v-.549l-.465-.169-.772-.295-1.575-.604-3.008-1.165c-1.941-.763-3.755-1.508-5.436-2.284a55.132 55.132 0 0 1-5.545-3.05ZM14.854 38.342l11.47-6.23 5.697 13.693-17.168-7.463Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M14.861 38.322c.519-.245 6.76 2.487 9.266 3.307 1.343.44 2.732.933 4.136 1.456l1.053.396.225.044c.085.018.172.026.259.025a4.052 4.052 0 0 0-.24-.37l-.02-.026c0-.004 0 0-.006-.01l-.037-.084-.073-.165-.293-.66-.576-1.303a191.903 191.903 0 0 1-1.806-4.218l-.843-2.072-.207-.512c-.048-.12-.036-.1-.036-.1v-.009a.304.304 0 0 0 0-.06.085.085 0 0 0-.039-.008h-.04l-.1.049-.206.103-1.631.802c-1.073.52-2.115 1.01-3.12 1.467a92.157 92.157 0 0 1-5.492 2.31c1.609-2.164 5.383-5.122 6.96-5.75l1.981-.813.481-.205.806-.384 1.513-.722.598 1.639.28.766.163.48.662 1.872c.445 1.227.895 2.415 1.351 3.564.456 1.15.91 2.26 1.364 3.334L33.09 46.9l-4.578-1.898-3.063-1.253c-1.977-.816-3.813-1.607-5.502-2.433a48.106 48.106 0 0 1-5.085-2.995ZM30.845 32.541l5.037 10.994 8.395-9.33-13.432-1.663Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M30.848 32.52c.36-.389 5.9.314 8.066.334.876.008 1.779.037 2.698.081l.174.01.292.023.597.05 1.234.107 2.604.245-5.652 6.614c-.657.772-1.322 1.533-1.987 2.277l-3.364 3.701-1.394-3.153-.307-.704-.162-.392-.315-.776a103.273 103.273 0 0 1-1.15-2.99c-.703-1.927-1.277-3.702-1.693-5.246 1.869 1.35 4.207 4.537 4.6 5.872.238.815.485 1.608.74 2.38l.087.27.01.096c.007.069.02.143.036.224.033.163.08.35.138.553 1.435-1.036 6.483-6.777 6.911-7.423l-1.306-.087-.153-.01-.283-.027-.562-.055-1.1-.112a57.192 57.192 0 0 1-4.085-.561 32.844 32.844 0 0 1-4.674-1.3ZM4.947 22.261s9.008.797 8.76 1.263c-.25.466-3.652 9.322-3.652 9.322L4.947 22.261Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M4.966 22.252c.497.037 2.427 4.077 3.4 5.524.237.352.471.714.704 1.084l.344.562.086.142a.31.31 0 0 0 .043.053l.069.069c.17.174.264.239.322.248.029-.14.05-.282.06-.425v-.094l.05-.127.354-1.016c.27-.768.55-1.53.838-2.278.147-.373.293-.744.44-1.113l.188-.457c.006 0 .011-.003.015-.006.013-.005.056-.036.044-.054a.073.073 0 0 0-.017-.036l-.02-.021a.048.048 0 0 0-.014-.012l-.158-.035-2.49-.526c-1.607-.348-3.072-.708-4.309-1.086 1.703-.99 4.917-1.451 6.02-1.096l.997.31.249.078.062.019.107.026.216.055c.284.074.557.15.812.235.436.11.82.368 1.086.729.05.08.069.176.054.27a1.774 1.774 0 0 1-.035.293 2.152 2.152 0 0 1-.06.31l-.147.342-.715 1.49-.519 1.109c-.331.734-.639 1.455-.923 2.163l-.413 1.051-.535 1.417-1.05 2.879-2.554-4.94c-.602-1.17-1.14-2.28-1.572-3.359a21.398 21.398 0 0 1-1.03-3.777Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M17.905 25.422c-.06.484-3.261 7.95-3.261 7.95l9.011-3.96-5.75-3.99Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M17.917 25.405c.206-.118 1.073.356 2.05.936l1.484.891.74.433c.298.178.58.343.833.48.735.401 1.556.878 2.488 1.446-.661.359-1.425.754-2.253 1.166l-1.286.63-.768.394c-.977.497-1.918.955-2.902 1.434a234.342 234.342 0 0 1-6.273 2.796c.682-1.553 1.38-3.09 2.032-4.494l.48-1.028.235-.497.116-.243.069-.13.533-.983c.356-.637.711-1.239 1.057-1.795l.512-.8.245-.372.116-.175a.392.392 0 0 1 .047-.06l.02-.025.013-.013.005-.006.237.022c-.336-.035-.186-.012-.21-.008l.02.023.038.053a.486.486 0 0 1 .06.145c.035.107.07.22.092.336.052.24.09.484.114.728.05.502.058 1.006.026 1.508a5.044 5.044 0 0 1-.534 2.233l-.143.206-.036.051c-.006.006-.01 0-.015 0h-.028a.347.347 0 0 0-.123.049 1.362 1.362 0 0 0-.29.262 7.056 7.056 0 0 0-.668.95c.394-.036.78-.136 1.141-.297l.364-.142.564-.24 1.142-.511 1.091-.515.528-.257.26-.127.152-.081.902-.507a13.255 13.255 0 0 1-.816-.508l-.539-.392a21.624 21.624 0 0 1-.705-.552 15.096 15.096 0 0 1-2.217-2.414Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M7.151 18.313s10.994-5.198 10.283-5.285c-.71-.088-2.597-4.257-2.597-4.257l-7.686 9.542Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M7.136 18.3c-.19-.452 2.475-3.732 3.3-5.154a44.3 44.3 0 0 1 1.645-2.589l.447-.648.128-.18.214-.286.435-.58c.61-.798 1.218-1.593 1.822-2.386l1.257 2.58.326.63.275.504.349.584.206.329.102.159c.031 0 0 .107-.011.18l-.045.232c.206.066.408.143.606.23l.369.374c.053.062.143.126.166.186l.048.18c.038.106.06.217.064.33 0 .08 0 .19-.007.205l-.007.055a1.37 1.37 0 0 1-.32.723 5.238 5.238 0 0 1-1.4.954l-.628.33-.408.206c-1.084.53-2.148.994-3.176 1.408a38.7 38.7 0 0 1-5.576 1.812c.893-1.674 3.178-3.664 4.2-3.945 1.24-.336 2.46-.74 3.657-1.21l.42-.171c.138-.059.16-.054.248-.089.158-.055.313-.119.464-.19a.87.87 0 0 0 .226-.137c0-.03-.055-.034-.08-.053l-.08-.08a3.274 3.274 0 0 1-.265-.404 34.67 34.67 0 0 1-.876-1.6c-.172-.331-.34-.655-.502-.971a5.551 5.551 0 0 0-.44.575l-.434.617-1.332 1.796a38.193 38.193 0 0 1-2.548 3.118 19.342 19.342 0 0 1-2.84 2.376Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "m16.395 20.323.567-3.465-6.864 2.441 6.297 1.024Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M16.392 20.343c-.16.411-3.17-.096-4.95-.137l-.175-.005a1.79 1.79 0 0 1-1.45-.877 3.002 3.002 0 0 0-.073-1.302c.751-.293 1.543-.59 2.344-.88l1.204-.43 1.1-.38 2.196-.718c.673-.21 1.307-.395 1.877-.552a53.27 53.27 0 0 1-.91 3.54l-.218.677-.18.39c-.121.254-.247.494-.375.718a4.684 4.684 0 0 1-.64-.916 5.068 5.068 0 0 0-.25-.47.67.67 0 0 0-.244-.162c-.304-.104-.506.2-.38.051.034-.039.069-.082.103-.128.138-.184.103-.285.061-.365a.105.105 0 0 0-.018-.122c-.016 0 0-.02-.045-.011l-.146.025c-.08.018-.161.031-.243.038a4.583 4.583 0 0 0-1.214.234c-.435.126-.855.3-1.25.521.783.069 1.41.088 1.8.134.288.027.57.094.84.2.215.108.411.252.577.427.232.195.547.416.66.5Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "m23.843 5.954 6.963.42 3.547-1.802-10.51 1.382Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M23.839 5.933c.117-.449 3.24-.843 4.412-1.245a41.422 41.422 0 0 1 5.933-1.394l.756 2.427-.653.37c-.477.275-.956.532-1.435.78l-.718.364-1.042.51-.868-.069-.495-.054-.966-.125a32.408 32.408 0 0 1-1.831-.31 21.678 21.678 0 0 1-3.114-.841c1.2-1.063 3.431-1.727 4.195-1.48.492.157.975.297 1.449.418l.702.17.327.076.148.059a4.23 4.23 0 0 0 .796-.27c.321-.126.634-.256.937-.388.61-.266 1.188-.543 1.74-.823l.308.988c-3.053.406-5.57 1.128-7.802 1.2a11.252 11.252 0 0 1-2.779-.363Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "m18.453 8.573 6.95.192-6.363 1.726-.587-1.918Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M18.473 8.566c.147 0 .316.232.491.566.151.253.287.536.407.76.266-.095.516-.23.742-.398a23.669 23.669 0 0 1 4.542-1.899l.393-.13.317 2.646a17.275 17.275 0 0 1-6.923-1.149c.848-1.11 2.448-1.863 3.005-1.645 1.272.493 2.61.796 3.97.902l.13 1.078c-1.17.272-2.32.623-3.442 1.05-.518.185-1.01.36-1.488.504l-.504.144-.541.137c-.355.088-.697.163-1.008.217l-.02-.09a7.729 7.729 0 0 1-.195-1.761 5.23 5.23 0 0 1 .123-.932ZM57.879 43.686l-9.511-8.763-8.81 11.786 18.32-3.023Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M57.882 43.706c-.298.486-6.968 1.57-9.497 2.237-1.355.358-2.777.695-4.227 1.016l-1.119.242-1.994.378-4.194.774 5.102-7.066c.889-1.246 1.788-2.477 2.688-3.673l3.544-4.643 1.332 1.262 1.066 1.024 1.272 1.272c.83.84 1.62 1.659 2.371 2.457a91.97 91.97 0 0 1 3.92 4.413c-2.557-.813-6.547-3.404-7.639-4.681l-1.392-1.599-.344-.385a1.08 1.08 0 0 0-.069-.127 4.141 4.141 0 0 0-.206-.31c-.086.06-.168.125-.245.196l-.144.134-.324.378-1.264 1.508c-.825 1-1.611 1.985-2.358 2.954-.748.964-1.474 1.928-2.15 2.841-.422.575-.81 1.124-1.14 1.601l2.036-.421 3.232-.612c2.086-.386 4.042-.716 5.892-.934a47.496 47.496 0 0 1 5.851-.236Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M72.14 29.945s-10.2-1.626-10.053-1.041c.145.585 1.43 11.339 1.43 11.339l8.622-10.299Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M72.157 29.958c.15.493-3.148 4.406-4.224 6.076-.262.406-.534.815-.816 1.227l-.429.616-.218.31-.11.156-.154.205a283.113 283.113 0 0 1-3.519 4.486l-.646-4.585-.164-1.186-.095-.625-.184-1.212c-.143-.94-.275-1.878-.394-2.804l-.422-3.381a1.334 1.334 0 0 1-.024-.371l.072-.3.073-.295.127-.193a1.465 1.465 0 0 1 .991-.553c.48-.05.965-.048 1.444.01l.366.035.221.027.388.055c1.023.154 1.988.343 2.907.548 1.644.358 3.266.81 4.858 1.355-2.007.822-5.618 1.117-6.827.785-.36-.101-.717-.197-1.07-.283l-.524-.123c-.116-.022-.107-.033-.13-.046l-.069-.039a1.328 1.328 0 0 0-.39-.124c-.108-.025-.089.052-.1.096l-.025.176a2.437 2.437 0 0 0-.016.343l.041.725.098 1.415c.069.93.158 1.833.254 2.71l.151 1.298.129.978c.069.499.147.954.217 1.342a70.012 70.012 0 0 1 4.835-5.939 27.778 27.778 0 0 1 3.378-2.915ZM57.938 28.754c-.076.611 1.53 10.735 1.53 10.735l-9.805-7.623 8.275-3.112Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M57.945 28.774c-.046.247-1.169.78-2.481 1.36l-2 .874-.898.407-.387.186a1.946 1.946 0 0 0-.16.107 4.153 4.153 0 0 0-.511.438c.298.152.51.252.666.318l.056.023.026.01c.022.01.042.022.06.037l.42.29.84.589 3.283 2.369.444.325.22.163c.053.04.038.026.041.028a.015.015 0 0 0 .007-.005.015.015 0 0 0 .003-.008c0-.007-.006-.008.014.021.019.029.06.062.1-.01l.014-.032-.032-.35-.063-.727-.1-1.412a47.022 47.022 0 0 1-.083-2.64c0-.417.006-.823.021-1.213l.032-.581.024-.287a4.41 4.41 0 0 1 .045-.346c.13.26.283.508.457.741.16.237.312.487.464.749.306.53.581 1.078.825 1.64a8.1 8.1 0 0 1 .778 2.758l-.011 1.244.145 2.017.283 3.359a193.349 193.349 0 0 0-4.076-3.4 78.258 78.258 0 0 0-2.535-1.992L48.21 31.65c1.163-.467 2.396-.952 3.514-1.37a34.437 34.437 0 0 1 2.183-.75 23.611 23.611 0 0 1 4.037-.756ZM69.381 25.015s-7.367-6.062-6.808-5.993c.56.07 2.798-2.741 2.798-2.741l4.01 8.734Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M69.362 25.023c-.47.012-1.837-3.007-2.596-4.064a27.839 27.839 0 0 1-1.314-2.039l-.151-.257-.053-.047a.9.9 0 0 0-.086-.069c-.05-.029-.084-.053-.111-.035-.026.055-.05.112-.069.17a.286.286 0 0 0-.012.053.078.078 0 0 1 0 .022c-.011.02-.115.137-.17.199l-.138.156-.028.039c-.026.031-.018.028-.016.032a.023.023 0 0 0 .014.008c.01 0 0 0 0 .006 0 0-.013-.007.049.05l.262.249.518.496 1 .99a29.487 29.487 0 0 1 3.178 3.726c-1.645.117-3.936-.759-4.437-1.448a33.45 33.45 0 0 0-1.517-1.926l-.382-.446-.096-.11-.152-.16-.292-.313a3.024 3.024 0 0 1-.801-1.161.497.497 0 0 1-.026-.148c.02-.037.055-.03.082-.048a.95.95 0 0 0 .183-.186c.15-.19.33-.355.532-.488a2.73 2.73 0 0 0 .577-.456c.131-.13.218-.212.372-.378.638-.686 1.216-1.43 1.8-2.183l2.047 3.987c.497.933.93 1.9 1.297 2.892a12.3 12.3 0 0 1 .536 2.887ZM57.95 10.39l-7.946-1.497-3.476-3.027L57.95 10.39Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M57.941 10.41c-.344.326-3.733-1.034-5.132-1.322a55.608 55.608 0 0 1-6.76-2.024l1.33-2.168.678.544c.495.397.98.8 1.456 1.209l.702.613.344.307c.08.072.058.054.06.058v.016l.061.013.142.033.56.13 1.096.274c.718.188 1.409.387 2.063.593 1.186.364 2.347.805 3.476 1.319-1.501.87-4.141 1.183-4.992.822a32.22 32.22 0 0 0-1.614-.642l-.787-.278-.388-.129-.591-.162-.34-.343c-.124-.123-.154-.162-.236-.247l-.412-.435a37.273 37.273 0 0 0-.832-.828A38.2 38.2 0 0 0 46.18 6.26l.541-.883c3.32 1.31 6.258 2.056 8.566 3.208.95.51 1.84 1.122 2.654 1.826Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "m54.477 11.628 8.579 1.463s-2.77 2.464-2.824 2.324c-.054-.14-5.755-3.787-5.755-3.787Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M54.488 11.61c.365-.279 2.723 1.257 3.768 1.645.462.172.925.369 1.392.592.232.11.464.227.701.353.121.069.232.122.37.21l.101.06.013.008.063.052a1.477 1.477 0 0 1 .33.398l.04.072.004.01c.225-.082-1.945.757-1.025.4l.005-.004a.01.01 0 0 0 0-.012c-.008-.012-.008-.096-.034-.134a2.01 2.01 0 0 1-.1-.206 2.54 2.54 0 0 0-.131-.235c-.34-.573-.224-.347-.23-.408.095-.092.39-.358.335-.338a.248.248 0 0 0 .018-.082c0-.04-.02-.059-.061-.059-.097.007-.108.034-.09.011a.028.028 0 0 0 .003-.01c0-.004 0-.008-.002-.01-.006 0 .013 0-.016-.011l-.151-.034-.3-.068a30.58 30.58 0 0 1-1.17-.3 19.913 19.913 0 0 1-3.912-1.497c1.19-.946 3.253-1.403 3.906-1.089.63.303 1.274.573 1.93.81.94.283 1.889.52 2.647.714.393.098.772.187 1.15.268l.141.031c.019.007.057.007.06.018l-.062.053-.244.206-.467.401-1.72 1.533-.775.685c-.125.114-.26.217-.404.305l-.066.033a.83.83 0 0 1-.192.052h-.037a.643.643 0 0 1-.591-.33c-.534.143.655-.351.509-.28l-.122.049a2.05 2.05 0 0 0-.232.12l-.11.068c-.042.028-.073.052-.057.048.017.069.142.161.078.116l-.144-.09-1.26-.74a17.722 17.722 0 0 1-2.217-1.478 9.294 9.294 0 0 1-1.642-1.906ZM36.506 6.75l4.443-2.684 4.17 3.75-8.613-1.066Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M36.509 6.729c.206-.411 3.032-.041 4.152-.151.082-.005.164-.014.245-.029l.12-.04c.062-.022.123-.047.182-.076a.524.524 0 0 0 .188-.133c.062-.08.029-.143-.038-.198a4.891 4.891 0 0 0-.356-.205c-.123-.061-.16-.075-.179-.099-.02-.024-.012-.053-.027-.127a.109.109 0 0 0-.056-.035l-.023-.007h-.014l-.077.036-.327.15c-.433.198-.859.377-1.272.538-.754.299-1.529.544-2.318.732.287-1.498 1.563-3.201 2.27-3.394l.38-.108c.035-.011.055-.014.101-.032l.162-.068.315-.137 1.126-.486c1.287 1.44 2.159 2.388 3.038 3.262a51.45 51.45 0 0 0 2.656 2.442c-1.535-.155-2.968-.244-4.513-.38a24.032 24.032 0 0 1-3.393-.44 9.4 9.4 0 0 1-2.342-1.015ZM61.118 25.886l1.078-3.318 4.149 3.628-5.227-.31Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M61.12 25.865c.181-.42 1.782-.308 1.894-.548.053-.142.09-.29.108-.44a6.987 6.987 0 0 0-.407-.206l-.125-.05-.049-.016a1.579 1.579 0 0 0 .226.278l.06.058.03.027-.068-.056-.307-.274-.037-.035-.02-.017.022.018.096.08.19.157c.181.15.114.082.123.078a.815.815 0 0 0-.05-.137c-.051-.082-.157-.122-.35-.005-.027.022-.044.013-.082.068l-.123.184-.25.35c-.169.226-.34.435-.513.625-.42-.53-.71-1.15-.85-1.811a6.16 6.16 0 0 1 .426-2.498l.618-.99c.799.913 1.28 1.489 2.121 2.336l.237.281.12.137.194.197c.269.269.525.516.778.754l.744.677.7.6c.482.4.984.804 1.509 1.22-.714.01-1.421.028-2.182.01a17.591 17.591 0 0 1-2.342-.188 7.15 7.15 0 0 1-1.56-.422 4.115 4.115 0 0 1-.882-.442Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M40.226 9.452 35.851 17.3l-16.928-.417 16.516 3.723 2.316 8.677 4.374-7.849 16.929.418L42.54 18.13l-2.315-8.677Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M40.245 9.447c.42.886.754 1.81.996 2.76l.795 2.66.845 2.909 12.471 2.632c.717.23 1.325.433 1.807.6.683.228 1.346.514 1.98.854a3.896 3.896 0 0 0-1.857.972l-14.459-.184-.03.068a.426.426 0 0 1-.025.056l-.138.251-.543 1.002c-.361.667-.72 1.33-1.078 1.988l-3.687 6.712-1.403-5.153c-.534-1.948-1.067-3.89-1.594-5.817l-15.588-3.532c.122-.441.142-.905.057-1.355.299-.509.768-.897 1.324-1.097l8.714.355 3.882.177 1.812.088.44.022c.036 0 .072.003.108.008l.055.007.236.03c.077-.074.636-1.012 1.022-1.634l1.215-1.96 2.278-3.604a60.846 60.846 0 0 1-1.416 3.949 110.02 110.02 0 0 1-.901 2.221c-.344.812-.525 1.307-1.225 2.723l-1.17.038-.15.004a.354.354 0 0 0-.063.006l-.087.014-.164.027-.538.1a8.393 8.393 0 0 0-.644.157 1.735 1.735 0 0 1-.801.088l-.138-.028c-.68-.13-1.81-.258-3.152-.377-.439 0-.217.137.35.333.688.205 1.538.44 2.48.685l1.477.38.775.195 1.4.333 2.013 7.777 3.873-7.027 4.005.05 2.957.016h2.833c-1.27-.267-2.301-.489-3.232-.705-1.13-.26-2.164-.514-3.242-.798-.328-.08-.676-.174-1.076-.286l-.64-.182-.174-.05-.373-.096-.782-.2-.221-.97-.158-.741-.284-1.385-.52-2.62a5675.5 5675.5 0 0 1-.647-3.446Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "m49.642 15.652-10.36 1.379-9.707-3.863 4.685 5.614-5.921 4.301 10.36-1.378 9.707 3.862-4.686-5.614 5.922-4.3Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M49.653 15.669a9.33 9.33 0 0 1-1.8 1.645l-1.788 1.404-1.696 1.317.534.597.818.939 2.089 2.411c.278.545.52 1.107.726 1.683l-.187.006a4.597 4.597 0 0 0-1.272.245l-8.522-3.08-.046.012-.026.007-.12.02-.482.075-.963.151-1.921.298-2.613.383-3.661.52a10.52 10.52 0 0 1-.688-1.097 11.228 11.228 0 0 0-.288-.867l-.146-.373 3.678-2.7.777-.57.207-.152-.18-.215-.635-.764-2.905-3.5c.27-.36.53-.718.764-1.08.277-.334.58-.645.908-.93 2.371.974 5.324 2.185 6.014 2.503l1.747.765.852.378.42.187.092.042.023.014.049.03 5.323-.42c1.742-.123 3.36-.216 4.852-.28a38.95 38.95 0 0 1-4.833 1.714c-.908.267-1.835.518-2.734.742l-1.323.316-.636.14-.155.033-.201.04-.591.1-1.187-.417-.779-.281a14.768 14.768 0 0 1-1.219-.515l-1.078-.526-.535-.259-.133-.064c-.045-.022-.02-.016-.035-.025l-.035-.036a3.346 3.346 0 0 0-.536-.374c-.303-.18-.7-.391-1.14-.613.115.227.246.447.392.656.167.248.374.536.604.849l.24.315.454.568 1.016 1.26-3.439 2.412-1.375.985 1.67-.228 6.782-.997 3.865 1.467 1.371.514.785.287 1.087.41-.75-.911-.924-1.197-1.429-1.797c1.98-1.344 3.043-1.945 4.308-2.698 1.193-.707 2.19-1.273 2.559-1.474Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "m50.063 23.569 7.558.715-5.212 3.985-2.346-4.7Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M50.082 23.559c.228-.025.655.596 1.112 1.333l.688 1.125.321.499c.053.067.114.128.182.18.107.078.222.144.344.195.099-.134.19-.273.275-.417l.038-.068c.012-.015 0-.01.03-.042l.115-.107.467-.422.447-.397a.231.231 0 0 0 .017-.06c0-.034-.007-.052-.032-.06a.158.158 0 0 0-.079 0 .106.106 0 0 0 .061-.052.086.086 0 0 0-.017-.08c-.016-.018.017-.032-.207-.069l-.481-.105c-1.142-.247-2.26-.6-3.337-1.052 1.124-1.032 3.163-1.64 3.841-1.375l.25.095.125.047.223.054.877.206 1.502.342c.91.206 1.673.359 2.413.48a57.76 57.76 0 0 0-4.077 3.028l-1.277 1.08-1.75 1.45a59.616 59.616 0 0 1-1.032-1.969l-.206-.415-.142-.312c-.091-.206-.176-.411-.252-.617a9.26 9.26 0 0 1-.439-2.495ZM43.224 9.933l.907 3.971 7.976-1.626-8.883-2.345Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M43.23 9.913c.137-.186.962-.075 1.906.09l1.433.26c.632.126 1.252.243 1.755.311.937.13 2.015.318 3.185.549a1.805 1.805 0 0 1 .877 1.16c-.071.306-.095.621-.069.934l.035.394c-1.723.376-3.54.74-5.246 1.054l-.556.099-.32.048-.735.109c-.798.13-1.551.246-2.24.342-.128-.748-.24-1.45-.33-2.09l-.035-.239-.015-.116-.006-.069-.017-.27-.026-.53c-.027-.642-.02-1.286.02-1.928a6.71 6.71 0 0 1 1.816 1.804c.12.172.23.342.327.51a.227.227 0 0 0 .138-.007c.06-.026.064-.063.028 0v.005c-.069.137-.052.24.13.293a8.47 8.47 0 0 1 1.1.007c.524.027 1.05 0 1.569-.08a13.46 13.46 0 0 0 1.745-.342 46.654 46.654 0 0 0-2.04-.386c-.388-.069-.692-.119-.95-.182a3.743 3.743 0 0 1-.37-.109l-.687-.239a11.066 11.066 0 0 1-2.423-1.382Z",
				fill: "#02315C"
			}));
			var ca = a => t.a.createElement("svg", {
				className: a.className,
				viewBox: "0 0 130 121",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, t.a.createElement("path", {
				d: "M35.444 26.263c15.964-10.254 25.939 1.423 21.258-7.674a68.003 68.003 0 0 1-4.31-15.766c-.775-5.159-13.68 5.752-15.566 9.195a19.286 19.286 0 0 0-2.942 12.14c.022.962.223 2.6 1.56 2.105Z",
				fill: "#FFA800"
			}), t.a.createElement("path", {
				d: "M35.453 26.287a.795.795 0 0 1-.772.213 1.088 1.088 0 0 1-.671-.484 2.667 2.667 0 0 1-.363-.886 4.962 4.962 0 0 1-.093-.512l-.03-.27-.012-.136-.013-.106c-.047-.363-.101-.75-.124-1.154a16.526 16.526 0 0 1 .015-2.6c.156-1.85.569-3.668 1.225-5.403a21.92 21.92 0 0 1 1.01-2.307c.17-.353.347-.656.503-.954.077-.148.158-.306.248-.458.09-.152.173-.284.255-.411a21.094 21.094 0 0 1 1.945-2.474c.701-.781 1.442-1.539 2.221-2.272a37.303 37.303 0 0 1 5.118-4.096 15.317 15.317 0 0 1 3.128-1.62 6.68 6.68 0 0 1 .97-.268 4.6 4.6 0 0 1 .57-.078 4.02 4.02 0 0 1 .737.014c.494.054.966.232 1.373.518.4.293.717.688.916 1.144.1.23.177.47.228.717l.034.169.018.1.035.199.141.797c.099.506.19 1.013.298 1.514.207 1.004.435 1.993.678 2.964.428 1.699.901 3.38 1.431 5.025.26.824.543 1.635.83 2.437.148.4.294.799.449 1.191l.232.588.206.512.282.574c.103.212.19.4.3.647l.19.443.225.593c.134.377.222.768.263 1.165.04.35.006.703-.099 1.04a2.138 2.138 0 0 1-.536.878 2.65 2.65 0 0 1-1.943.675 9 9 0 0 1-1.204-.091l-.437-.062-.315-.05-1.213-.196c-.79-.124-1.56-.224-2.322-.292a25.19 25.19 0 0 0-8.608.687 34.34 34.34 0 0 0-7.078 2.749 19.364 19.364 0 0 1 10.753-6.287c1.04-.22 2.104-.309 3.166-.265 1.491.106 2.974.31 4.439.61l1.04.213.506.103.185.041c.05.012.057.018.088.027.114.038.23.064.349.08.12.018.289.009.347-.109a.59.59 0 0 0 .022-.358 3.704 3.704 0 0 0-.041-.193l-.029-.1-.015-.051-.032-.085-.066-.177-.093-.221-.192-.444-.217-.474-.187-.5a66.464 66.464 0 0 1-1.255-3.755 90.39 90.39 0 0 1-2.544-10.787l-.14-.85a2.567 2.567 0 0 0-.061-.31 1.023 1.023 0 0 0-.1-.24.747.747 0 0 0-.383-.33 1.173 1.173 0 0 0-.502-.063 4.842 4.842 0 0 0-1.384.37c-.479.2-.945.43-1.396.686-.9.52-1.769 1.093-2.6 1.717A46.1 46.1 0 0 0 40.799 8.8a34.667 34.667 0 0 0-1.949 2.04c-.297.344-.584.69-.834 1.034a6.366 6.366 0 0 0-.338.511c-.115.195-.23.389-.346.582a21.843 21.843 0 0 0-2.056 4.653 23.221 23.221 0 0 0-1.023 5.503c-.02.24-.016.474-.023.704l-.008.37-.02.323c-.024.383.013.768.11 1.14a.853.853 0 0 0 .54.625c.197.05.403.05.6.002Z",
				fill: "#FFA800"
			}), t.a.createElement("path", {
				d: "M111.863 49.833C90.608 19.53 42.819 7.43 19.866 34.013c-79.3 91.844 127.645 120.075 91.997 15.82Z",
				fill: "#FFA800"
			}), t.a.createElement("path", {
				d: "M111.888 49.824c.31.606 1.64 3.931 2.88 9.063a66.518 66.518 0 0 1 1.491 8.923c.131 1.67.253 3.413.229 5.21.017.9-.044 1.81-.073 2.732-.077.92-.127 1.852-.255 2.786a40.95 40.95 0 0 1-2.898 11.147 38.28 38.28 0 0 1-5.96 9.719 39.248 39.248 0 0 1-3.733 3.876 42.48 42.48 0 0 1-3.885 3.155 51.94 51.94 0 0 1-7.212 4.349c-7.541 3.766-16.16 5.884-25.007 6.556a85.519 85.519 0 0 1-26.842-2.276 75.871 75.871 0 0 1-12.945-4.472 60.126 60.126 0 0 1-11.809-7.002 44.594 44.594 0 0 1-9.512-9.866A35.259 35.259 0 0 1 .864 81.312a35.659 35.659 0 0 1-.815-5.843 39.025 39.025 0 0 1 .15-5.868c.19-1.936.517-3.856.978-5.745a48.36 48.36 0 0 1 1.668-5.532c2.637-7.22 6.631-13.718 11.104-19.607a84.032 84.032 0 0 1 7.218-8.43 41.854 41.854 0 0 1 8.916-6.58l1.203-.662c.397-.228.826-.392 1.235-.59l1.242-.568.62-.283c.206-.09.422-.162.633-.244.85-.314 1.693-.639 2.541-.94l2.581-.764a54.017 54.017 0 0 1 10.431-1.648 60.92 60.92 0 0 1 10.253.33l2.497.328 2.459.446c.819.134 1.622.328 2.422.52.798.198 1.604.352 2.386.587l2.342.674c.78.217 1.532.506 2.294.755 1.53.485 2.994 1.11 4.463 1.676a77.131 77.131 0 0 1 8.317 4.087 73.494 73.494 0 0 1 14.024 10.247 67.77 67.77 0 0 1 10.222 11.903 77.458 77.458 0 0 0-11.095-11.002 80.132 80.132 0 0 0-7.215-5.23C92.64 32.55 91.378 31.71 90.04 31c-.663-.365-1.316-.745-1.981-1.097l-2.015-1.014c-.336-.165-.665-.343-1.004-.496l-1.018-.458-2.016-.908-2.023-.81-.998-.403-1.005-.355-1.976-.698c-.654-.22-1.312-.404-1.953-.605-.645-.187-1.27-.413-1.904-.561l-1.86-.48a75.948 75.948 0 0 0-12.046-1.99c-1.47-.166-2.94-.19-4.405-.243-.733-.024-1.462.023-2.192.03l-1.094.024c-.364.008-.725.054-1.087.079l-2.17.178-2.144.311c-.356.057-.716.093-1.068.166l-1.054.224c-.7.16-1.41.274-2.098.469l-2.06.585-.515.146-.501.181-1.003.362c-1.354.44-2.621 1.07-3.915 1.632-.632.31-1.242.663-1.864.99l-.931.497-.885.566c-.587.38-1.18.75-1.76 1.137l-1.666 1.264c-.274.214-.561.414-.825.639l-.777.693c-.514.465-1.043.914-1.543 1.391l-1.432 1.498-.712.75-.685.794a100.528 100.528 0 0 0-5.2 6.478 74.176 74.176 0 0 0-8.26 13.904c-2.15 4.845-3.633 9.925-4.014 15.035-.197 2.531-.12 5.076.23 7.59a33.152 33.152 0 0 0 1.914 7.214 34.744 34.744 0 0 0 3.432 6.503 40.215 40.215 0 0 0 4.605 5.604 51.066 51.066 0 0 0 11.339 8.498 68.53 68.53 0 0 0 12.654 5.417 81.333 81.333 0 0 0 13.002 2.959 82.45 82.45 0 0 0 25.265-.235c8.036-1.355 15.595-4.016 21.99-8.069a42.712 42.712 0 0 0 8.533-7.095 37.76 37.76 0 0 0 6.019-8.844 41.14 41.14 0 0 0 3.435-10.89c.674-4.14.842-8.349.5-12.53a70.77 70.77 0 0 0-1.699-10.83c-.34-1.505-.707-2.814-.991-3.896-.311-1.076-.558-1.921-.721-2.478Z",
				fill: "#FFA800"
			}), t.a.createElement("path", {
				d: "M107.603 67.694c6.138 1.204 10.947-3.717 13.332-8.94 3.517-7.291 7.306-25.016 4.256-28.45-4.358-4.905-21.918 6.548-27.323 8.12",
				fill: "#FFA800"
			}), t.a.createElement("path", {
				d: "M97.862 38.401c.113-.173.842-.493 1.899-1.046l3.955-2.073a373.085 373.085 0 0 1 8.395-4.32 38 38 0 0 1 5.52-2.348 18.421 18.421 0 0 1 3.153-.73 7.66 7.66 0 0 1 3.635.298c.164.057.324.123.481.198l.468.275c.077.048.156.092.229.146l.211.181c.14.123.278.248.413.376a5.325 5.325 0 0 1 1.032 1.873 13.68 13.68 0 0 1 .537 3.41 38.81 38.81 0 0 1-.312 6.265 67.641 67.641 0 0 1-2.082 10.19 45.189 45.189 0 0 1-3.643 9.302c-1.616 2.88-3.818 5.308-6.427 6.77a10.54 10.54 0 0 1-4.046 1.324 10.054 10.054 0 0 1-3.764-.334 14.12 14.12 0 0 0 3.55-.903 11.551 11.551 0 0 0 3.248-2.097c1.898-1.7 3.129-3.777 3.906-4.775a21.335 21.335 0 0 0 2.051-3.287 38.168 38.168 0 0 0 1.585-3.546 59.858 59.858 0 0 0 2.265-7.166 55.88 55.88 0 0 0 1.296-6.946c.306-2.156.33-4.343.069-6.505a6.738 6.738 0 0 0-.376-1.402 1.564 1.564 0 0 0-.14-.3 1.418 1.418 0 0 0-.158-.263 1.978 1.978 0 0 0-.181-.223l-.227-.2a.935.935 0 0 0-.248-.172l-.262-.155a4.827 4.827 0 0 0-.6-.203 3.914 3.914 0 0 0-.648-.11 4.45 4.45 0 0 0-.676-.032c-1.842.023-3.693.597-5.42 1.195-3.472 1.254-6.612 2.799-9.604 4.129-1.41.657-3.393 1.457-5.176 2.091-1.267.488-2.575.86-3.908 1.113Z",
				fill: "#FFA800"
			}), t.a.createElement("path", {
				d: "M37.096 28.746c15.963-10.254 25.938 1.423 21.257-7.674a67.997 67.997 0 0 1-4.31-15.766c-.774-5.159-13.68 5.751-15.565 9.195a19.286 19.286 0 0 0-2.942 12.14c.021.962.222 2.6 1.56 2.105Z",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M37.104 28.77a.795.795 0 0 1-.771.213 1.088 1.088 0 0 1-.672-.484 2.671 2.671 0 0 1-.363-.887 5.016 5.016 0 0 1-.093-.511l-.03-.27-.011-.136-.014-.106c-.047-.363-.1-.75-.123-1.154a16.513 16.513 0 0 1 .014-2.6c.157-1.85.569-3.668 1.226-5.404.292-.787.63-1.557 1.01-2.306.17-.354.346-.656.503-.954.076-.148.158-.306.247-.458.09-.152.173-.284.255-.411a21.103 21.103 0 0 1 1.946-2.474c.7-.781 1.44-1.539 2.22-2.272a37.303 37.303 0 0 1 5.119-4.097 15.317 15.317 0 0 1 3.128-1.619c.316-.113.64-.203.968-.268.189-.038.38-.064.57-.079a4.02 4.02 0 0 1 .739.015c.493.054.965.232 1.372.518.401.293.717.688.916 1.144.1.23.177.47.228.716l.035.17.018.1.035.199.14.796c.1.507.19 1.013.298 1.515.207 1.004.435 1.993.679 2.964.428 1.699.9 3.38 1.43 5.025.261.824.543 1.635.83 2.437.148.4.294.799.45 1.19l.231.588.206.513.282.574c.103.212.19.4.3.646l.19.444.226.593c.133.377.221.768.262 1.165.04.35.006.703-.098 1.039a2.139 2.139 0 0 1-.537.879 2.65 2.65 0 0 1-1.943.675 9.004 9.004 0 0 1-1.204-.092l-.436-.061-.316-.05-1.212-.196c-.79-.124-1.56-.224-2.322-.292a25.189 25.189 0 0 0-8.608.687 34.34 34.34 0 0 0-7.079 2.749A19.363 19.363 0 0 1 48.1 22.856a12.76 12.76 0 0 1 3.165-.265c1.491.106 2.974.31 4.44.61l1.04.212.505.104.185.041c.051.012.057.018.089.027a1.9 1.9 0 0 0 .348.08c.12.018.29.008.347-.109a.59.59 0 0 0 .022-.358 3.704 3.704 0 0 0-.041-.193l-.028-.1-.015-.051-.033-.086-.066-.176-.093-.221-.191-.444-.218-.474-.187-.5a66.462 66.462 0 0 1-1.255-3.755A90.347 90.347 0 0 1 53.57 6.41l-.14-.85a2.568 2.568 0 0 0-.062-.31 1.019 1.019 0 0 0-.1-.24.747.747 0 0 0-.382-.331 1.173 1.173 0 0 0-.503-.062 4.843 4.843 0 0 0-1.384.37c-.479.2-.945.43-1.396.686-.9.52-1.768 1.093-2.6 1.717a46.116 46.116 0 0 0-4.553 3.892 34.661 34.661 0 0 0-1.948 2.04c-.298.344-.584.69-.834 1.034a6.357 6.357 0 0 0-.338.51l-.346.583a21.845 21.845 0 0 0-2.057 4.653 23.221 23.221 0 0 0-1.023 5.503c-.02.24-.016.474-.023.704l-.008.37-.019.323c-.024.383.012.768.109 1.14a.853.853 0 0 0 .54.625c.197.05.404.05.601.002Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M113.514 52.315C92.26 22.013 44.47 9.912 21.517 36.495c-79.3 91.844 127.645 120.076 91.997 15.82Z",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M113.55 52.303c.371.584 1.749 3.895 3.028 9.03a65.55 65.55 0 0 1 1.544 8.942c.139 1.674.268 3.424.251 5.23.019.904-.038 1.82-.064 2.746-.074.925-.122 1.862-.248 2.802a41.21 41.21 0 0 1-2.885 11.23 38.615 38.615 0 0 1-5.98 9.814 39.688 39.688 0 0 1-3.751 3.92 42.97 42.97 0 0 1-3.902 3.197 53.384 53.384 0 0 1-7.244 4.424c-7.57 3.851-16.242 6.038-25.147 6.758a85.635 85.635 0 0 1-27.047-2.19 76.355 76.355 0 0 1-13.076-4.478 60.749 60.749 0 0 1-11.968-7.063A45.299 45.299 0 0 1 7.37 96.646 35.936 35.936 0 0 1 .893 77.994 39.74 39.74 0 0 1 1.039 72c.191-1.972.522-3.929.99-5.854a49.225 49.225 0 0 1 1.693-5.622c2.674-7.329 6.712-13.89 11.224-19.822a84.33 84.33 0 0 1 7.309-8.513 42.55 42.55 0 0 1 9.094-6.689l1.227-.672c.405-.23.84-.397 1.258-.598l1.265-.575.632-.287c.211-.091.43-.165.646-.248.864-.319 1.722-.646 2.586-.952l2.624-.769a54.604 54.604 0 0 1 10.586-1.64 61.355 61.355 0 0 1 10.372.372l2.522.342 2.48.46c.826.14 1.637.34 2.444.538.804.207 1.617.365 2.405.606l2.359.69c.784.224 1.543.52 2.311.774 1.54.497 3.014 1.136 4.49 1.715a77.124 77.124 0 0 1 8.351 4.17 73.378 73.378 0 0 1 14.034 10.417 67.346 67.346 0 0 1 10.152 12.062A83.956 83.956 0 0 0 95.347 36.16c-1.307-.749-2.575-1.56-3.922-2.241-.665-.351-1.32-.717-1.988-1.056l-2.018-.973c-.336-.159-.665-.33-1.004-.478l-1.017-.44-2.014-.869-2.018-.775-.994-.385-1-.34-1.966-.667c-.65-.212-1.303-.386-1.94-.58-.64-.177-1.26-.394-1.89-.537l-1.842-.46a83.885 83.885 0 0 0-11.9-1.95c-1.45-.18-2.898-.215-4.344-.283-.723-.032-1.442.008-2.163.007l-1.08.014c-.36.003-.715.046-1.073.067l-2.142.155-2.116.288c-.351.052-.708.084-1.055.154l-1.04.211c-.692.151-1.395.258-2.074.444l-2.036.56-.509.14-.495.174-.99.35c-1.34.42-2.593 1.034-3.874 1.577-.625.302-1.23.643-1.844.962l-.919.485-.876.552c-.582.372-1.17.732-1.745 1.11l-1.651 1.235c-.272.21-.558.402-.818.626l-.77.679c-.51.455-1.036.896-1.533 1.366l-1.423 1.47-.71.738-.686.787a98.665 98.665 0 0 0-5.21 6.425A73.245 73.245 0 0 0 8.388 58.5c-2.152 4.808-3.633 9.848-4.02 14.91-.2 2.507-.127 5.028.218 7.519a32.738 32.738 0 0 0 1.89 7.144 34.325 34.325 0 0 0 3.399 6.442 39.847 39.847 0 0 0 4.568 5.558 50.62 50.62 0 0 0 11.276 8.43 67.915 67.915 0 0 0 12.6 5.369 80.866 80.866 0 0 0 12.95 2.918 82.193 82.193 0 0 0 25.137-.286c7.987-1.362 15.484-4.014 21.815-8.028a42.533 42.533 0 0 0 8.447-7.009 37.603 37.603 0 0 0 5.972-8.722 41.65 41.65 0 0 0 3.468-10.762 52.07 52.07 0 0 0 .626-12.455 71.54 71.54 0 0 0-1.559-10.831c-.319-1.509-.668-2.822-.936-3.91-.3-1.077-.534-1.925-.689-2.485Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M109.254 70.177c6.139 1.204 10.947-3.717 13.333-8.94 3.516-7.291 7.306-25.017 4.255-28.45-4.358-4.906-21.918 6.548-27.323 8.12",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M99.513 40.884c.112-.173.842-.493 1.898-1.046l3.956-2.073a368.817 368.817 0 0 1 8.395-4.32 37.99 37.99 0 0 1 5.519-2.348 18.41 18.41 0 0 1 3.154-.73 7.656 7.656 0 0 1 3.634.298c.164.057.324.123.481.198l.468.275c.077.048.156.092.23.146l.211.181c.14.123.277.248.412.376a5.293 5.293 0 0 1 1.032 1.873c.323 1.11.503 2.256.537 3.41a38.696 38.696 0 0 1-.311 6.265 67.644 67.644 0 0 1-2.083 10.19 45.183 45.183 0 0 1-3.642 9.302c-1.616 2.88-3.818 5.308-6.428 6.77a10.538 10.538 0 0 1-4.045 1.324 10.06 10.06 0 0 1-3.765-.334 14.113 14.113 0 0 0 3.55-.903 11.523 11.523 0 0 0 3.248-2.097c1.899-1.7 3.129-3.777 3.907-4.776a21.33 21.33 0 0 0 2.05-3.286 37.647 37.647 0 0 0 1.585-3.546 59.857 59.857 0 0 0 2.266-7.166 55.878 55.878 0 0 0 1.295-6.946c.307-2.156.33-4.343.069-6.505-.074-.48-.2-.95-.376-1.402a1.506 1.506 0 0 0-.14-.3 2.095 2.095 0 0 0-.338-.487l-.227-.198a.951.951 0 0 0-.248-.173l-.262-.155a4.924 4.924 0 0 0-.6-.203 3.95 3.95 0 0 0-.648-.11 4.456 4.456 0 0 0-.676-.032c-1.843.023-3.694.597-5.421 1.194-3.471 1.255-6.612 2.8-9.603 4.13-1.411.657-3.394 1.456-5.176 2.091-1.267.487-2.575.86-3.908 1.113Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M110.889 68.547a20.886 20.886 0 0 1-2.06-4.206l6.677.712c-4.295-3.842-8.609-8.778-9.854-14.52 1.617-5.153 7.213-10.207 11.702-12.968 18.415-12.69 10.224 29.085-5.04 32.522",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M112.311 70.078a21.297 21.297 0 0 0 2.488-1.095c.746-.42 1.454-.905 2.117-1.448a19.353 19.353 0 0 0 2.177-2.122 28.865 28.865 0 0 0 3.667-5.346 35.766 35.766 0 0 0 2.168-4.858 43.263 43.263 0 0 0 1.89-7.096 24.61 24.61 0 0 0 .293-7.495 7.782 7.782 0 0 0-1.177-3.337 3.261 3.261 0 0 0-1.187-1.04 3.204 3.204 0 0 0-1.537-.31 7.896 7.896 0 0 0-3.317 1.012c-1.066.544-2.082 1.282-3.122 1.95a35.528 35.528 0 0 0-6.7 5.88 21.701 21.701 0 0 0-2.527 3.506 13.853 13.853 0 0 0-.899 1.888l-.149.402c-.005.012-.004.005-.003.013l.038.156c.082.338.157.677.271 1.006a23.28 23.28 0 0 0 3.843 7.186 40.022 40.022 0 0 0 2.545 3.003c.219.237.438.47.661.698l.362.372c.199.202.406.394.61.589l2.353 2.212-2.683-.316-2.119-.263-1.483-.197-.725-.098-.365-.06-.186-.03-.097-.016-.049-.008c-.017-.004-.036-.008-.024.012l.102.33c.037.116.076.227.133.379a20.995 20.995 0 0 0 1.406 2.885 16.013 16.013 0 0 1-1.445-2.013 13.104 13.104 0 0 1-.728-1.344 25.06 25.06 0 0 1-.397-.883c-.016-.038-.037-.083-.049-.117l.107.003.219.006.459.013 1.011.05.763.027 1.539.064.385.018c.054 0 .153.008.168.006l.064-.004c.083-.006.15-.013.207-.02.107-.018.182-.031.19-.06a3.003 3.003 0 0 0-.392-.24h-.003l-.041-.037-.092-.085-.361-.337c-.238-.22-.457-.447-.673-.66a23.803 23.803 0 0 1-1.997-2.24c-2.187-2.847-3.957-5.975-4.724-9.321l-.072-.312a3.204 3.204 0 0 1-.091-.456l.272-.717c.153-.396.326-.784.517-1.162.18-.381.403-.735.601-1.1.217-.353.444-.697.668-1.041a27.347 27.347 0 0 1 3.09-3.683 38.61 38.61 0 0 1 7.141-5.635 15.17 15.17 0 0 1 3.912-1.97 6.328 6.328 0 0 1 2.175-.312 4.17 4.17 0 0 1 2.117.656 4.752 4.752 0 0 1 1.463 1.608c.344.61.604 1.263.772 1.942.322 1.3.474 2.635.454 3.973a32.002 32.002 0 0 1-.991 7.455 38.349 38.349 0 0 1-5.411 12.384 20.733 20.733 0 0 1-4.931 5.154 12.804 12.804 0 0 1-2.829 1.533c-.365.139-.737.258-1.114.36l-.728.153Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M120.701 48.07c.077.11-.145.707-.487 1.356-.334.655-.794 1.352-1.018 1.768a13.344 13.344 0 0 1-3.515 3.96 11.506 11.506 0 0 1-3.935 1.995 8.436 8.436 0 0 1-3.597.243c.222-.2.461-.38.714-.538.259-.16.525-.35.784-.486.26-.137.499-.29.717-.38a2.51 2.51 0 0 1 .541-.176 8.16 8.16 0 0 0 3.068-.934 10.35 10.35 0 0 0 2.328-1.672c1.324-1.229 2.18-2.54 3.017-3.613.239-.312.497-.609.772-.89.267-.298.521-.552.611-.634Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M82.557 115.135c2.137-.798 13.635-3.518 19.01-11.207 11.488-16.437-2.784-33.952-23.28-27.314-28.407 9.2-24.261-6.713-37.749-14.69-11.204-6.627-28.077 3.496-23.717-10.952 1.651-5.468 5.434-15.035-2.534-3.285-36.47 53.776 31.197 78.852 68.27 67.448Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M21.548 66.947c-1.258 2.296-2.77 6.429.117 7.853 2.485-.351 4.473-2.669 6.509-4.06a12.91 12.91 0 0 0 .44 3.682c3.092.895 6.546-2.206 4.297-5.474-2.94-4.272-7.361-6.432-10.497-6.815-3.083-.375-4.643 4.49-4.232 7.068.554-.47 2.01-1.206 3.257-2.015",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M21.446 67.198c-.276.284-.59.528-.932.727-.27.18-.592.384-.946.607-.181.114-.441.274-.68.436-.247.174-.52.379-.79.593-.145.1-.127-.214-.161-.407-.033-.214-.038-.428-.054-.647a5.004 5.004 0 0 1 0-.678c.005-.11.004-.242.014-.338l.033-.282c.09-.752.266-1.492.525-2.204.516-1.388 1.419-2.593 2.395-3.026.176-.096.363-.167.558-.213.196-.059.398-.092.602-.098.386-.013.772.013 1.152.078.74.118 1.47.3 2.178.544a16.164 16.164 0 0 1 4.075 2.1 17.361 17.361 0 0 1 3.39 3.166c.25.295.468.614.701.919.246.352.45.732.608 1.131.339.838.382 1.767.124 2.633a4.41 4.41 0 0 1-1.799 2.343 4.89 4.89 0 0 1-2.748.819l-.363-.02a1.924 1.924 0 0 1-.433-.057l-.575-.125c-.18-.053-.437-.024-.429-.281l-.152-.57-.063-.264-.037-.172a13.518 13.518 0 0 1-.195-1.248l-.029-.285v-.025l.01-.037c0-.01-.014-.003-.028 0l-.012.004c-.016.011.026-.025-.083.062l-.458.363c-.613.487-1.239.979-1.909 1.417a8.698 8.698 0 0 1-2.173 1.067c-.201.05-.394.113-.597.146l-.451.078-.118.02a.267.267 0 0 1-.058.008l-.052-.033-.206-.128-.35-.22a1.182 1.182 0 0 1-.253-.2 2.962 2.962 0 0 1-.447-.466 3.714 3.714 0 0 1-.743-2.26c-.004-.7.102-1.396.313-2.063.36-1.158.877-2.261 1.536-3.278-.205.73-.448 1.614-.623 2.558a8.198 8.198 0 0 0-.108 2.839c.075.392.227.765.448 1.098.198.266.454.483.75.633-.008-.006.019-.014-.003-.02.148-.025.306-.09.446-.127.283-.097.531-.197.738-.282.889-.4 1.727-.904 2.497-1.502l1.327-.99c.335-.244.66-.484.975-.692l.473-.32.235-.16.116-.078a.33.33 0 0 1 .083-.025c-.02.723-.052 1.464-.028 2.105l.025.437.023.292c.016.195.041.388.065.58.024.191.058.382.094.57.026.141.041.221.066.327l.3.078.526.043a3.59 3.59 0 0 0 3.327-2.076c.25-.613.278-1.294.08-1.925a5.785 5.785 0 0 0-1.013-1.725 15.722 15.722 0 0 0-2.806-2.819 14.871 14.871 0 0 0-6.526-3.002l-.413-.06c-.135-.016-.246-.003-.369-.01a1.211 1.211 0 0 0-.178 0l-.174.037a1.216 1.216 0 0 0-.34.09 2.822 2.822 0 0 0-1.16.84 6.969 6.969 0 0 0-1.363 2.656c-.134.47-.238.95-.312 1.433-.025.169-.053.354-.062.542-.009.101-.012.203-.008.304l.002.163c0 .011-.002.035.004.035l.025-.016.052-.034c.2-.118.447-.23.714-.355l.956-.462a40.01 40.01 0 0 0 1.249-.616ZM14.826 75.02c.065.024.114.143.153.314.038.17.067.394.121.63.04.24.097.478.17.71.049.193.122.379.218.553a8.354 8.354 0 0 0 1.888 2.514 5.52 5.52 0 0 0 2.14 1.052c.725.156 1.46.26 2.199.312a2.26 2.26 0 0 1-.409.559 2.078 2.078 0 0 1-.583.445 3.079 3.079 0 0 1-.623.245 1.064 1.064 0 0 1-.479-.013 7.826 7.826 0 0 1-3.81-2.673 5.942 5.942 0 0 1-1.33-3.192 2.743 2.743 0 0 1 .115-.86c.064-.204.14-.403.23-.597Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M57.647 90.958c-.4.242-.827.433-1.273.57l-1.243.455c-.458.173-.979.276-1.506.425-.532.134-1.077.293-1.629.414l-1.638.282-.772.136c-.251.03-.495.046-.726.069l-1.227.124a24.428 24.428 0 0 1-7.766-.598 33.834 33.834 0 0 1-7.4-2.86c-1.01-.488-1.956-1.064-2.918-1.603-.933-.578-1.873-1.136-2.765-1.73-1.803-1.168-3.509-2.36-5.136-3.492l-.308-.218-.353-.29c-.117-.099-.222-.21-.316-.331a1.992 1.992 0 0 1-.271-.366 3.672 3.672 0 0 1-.544-1.633 7.34 7.34 0 0 1 .417-2.921 20.376 20.376 0 0 1 2.186-4.378c-.303 1.3-.894 3.125-1.147 4.816a7.152 7.152 0 0 0-.041 2.242c.07.446.248.868.517 1.23.044.066.092.129.145.188l.18.168c.072.07.15.133.233.19l.262.2 1.045.784 2.055 1.508a84.238 84.238 0 0 0 4.008 2.734 39.233 39.233 0 0 0 7.829 3.95 26.918 26.918 0 0 0 7.467 1.531l1.751.039c.574.01 1.137-.062 1.69-.083l.826-.046c.273-.008.536-.069.805-.099l1.569-.207a7.35 7.35 0 0 0 .788-.133l.873-.163.915-.156.459-.074.442-.104c1.162-.28 2.18-.502 2.517-.57Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M22.005 81.517c-1.564.29-3.558 1.125-3.576.63 1.486 4.635 5.937 9.365 17.515 8.723-2.981.165-12.053-4.602-13.939-9.353Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M22.016 81.512c.1.087.184.191.248.308l.187.304c.071.131.154.256.248.372.468.668.999 1.29 1.584 1.857a19.89 19.89 0 0 0 4.103 3.077c1.19.66 2.42 1.25 3.68 1.763l.974.364c.33.1.657.216.985.305.322.09.648.162.978.215.156.03.314.05.472.062l.433.01.08 1.44c-1.671.12-3.348.118-5.018-.01a20.948 20.948 0 0 1-4.28-.766 15.325 15.325 0 0 1-3.897-1.788 11.309 11.309 0 0 1-2.98-2.81 8.025 8.025 0 0 1-.544-.814 7.15 7.15 0 0 1-.462-.835l-.209-.419-.17-.428-.096-.236c-.045-.11-.093-.218-.128-.33l-.216-.656.017-.334.007-.165.002-.083v-.063c-.372-.258.507.35.416.29v.014c.032.12.09.101.175.098.086-.003.186-.02.286-.035l.15-.025.076-.013c0-.06-.02-.156-.03-.231-.063-.223.06-.159.121-.186l.178-.033.528-.103a19.99 19.99 0 0 1 2.047-.352c-.537.274-1.148.614-1.83.952-.171.083-.347.168-.53.248a1.045 1.045 0 0 0-.18.093l-.115.068c-.059.033-.138.083-.124.028l.165.224a.869.869 0 0 0 .124.134c.013.015.013.002.034.041l.067.113.13.224c.17.295.37.554.525.81l.854 1.183a10.164 10.164 0 0 0 3.19 2.98c.155.093.306.19.462.28l.484.236c.315.165.64.31.973.435l.99.366 1.006.275c.33.094.664.167 1.003.22l.996.18c.667.067 1.321.152 1.971.188.65.015 1.288.051 1.917.042l1.854-.07.037.68a6.715 6.715 0 0 1-1.77-.225c-.542-.136-1.076-.3-1.601-.49a25.467 25.467 0 0 1-2.88-1.292 22.05 22.05 0 0 1-4.706-3.233 12.168 12.168 0 0 1-2.042-2.403 6.177 6.177 0 0 1-.377-.665 4.323 4.323 0 0 1-.29-.594l-.282-.792ZM63.8 35.407c-.035.142-.75.467-1.597.767-.847.31-1.817.616-2.333.851-1.833.804-3.921 1.607-5.427 2.803a12.172 12.172 0 0 0-3.087 3.683l-.277.503a3.65 3.65 0 0 0-.254.502c-.15.34-.302.669-.455.987-.278.645-.5 1.265-.756 1.807a4.95 4.95 0 0 1-.236-1.017 8.7 8.7 0 0 1-.058-.585 2.915 2.915 0 0 1 .004-.591c.065-.776.203-1.511.446-1.83a14.641 14.641 0 0 1 5.832-5.471c.96-.502 1.958-.93 2.983-1.283a23.471 23.471 0 0 1 2.685-.783c.48-.108.965-.186 1.454-.233.493-.064.932-.102 1.076-.11Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M37.467 36.14a20.16 20.16 0 0 0-12.316 8.249c-1.538 2.234 8.443-9.14 9.32 5.48.143 2.384 7.57-2.344 8.44-5.37.74-2.57-.147-9.474-5.444-8.36Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M37.464 36.127a3 3 0 0 1 1.545-.246 3.651 3.651 0 0 1 1.471.384 4.3 4.3 0 0 1 1.396 1.152 7.846 7.846 0 0 1 1.448 3.49c.188 1.028.226 2.078.112 3.116-.04.377-.132.745-.275 1.096a5.34 5.34 0 0 1-.54.99c-.418.61-.898 1.176-1.43 1.689a16.266 16.266 0 0 1-3.605 2.674 9.29 9.29 0 0 1-1.075.49 5.582 5.582 0 0 1-.602.185c-.107.025-.223.041-.335.063a3.364 3.364 0 0 1-.418.021 1.63 1.63 0 0 1-.928-.317 1.438 1.438 0 0 1-.466-.853l-.12-1.184a13.04 13.04 0 0 0-.95-3.89 4.201 4.201 0 0 0-.849-1.256 2.181 2.181 0 0 0-1.155-.6c-.877-.155-1.933.207-2.886.72-.487.266-.959.56-1.412.88l-.725.507-.118.077-.086.049-.075.037a.962.962 0 0 1-.362.086.821.821 0 0 1-.802-.612.874.874 0 0 1 .002-.42l.02-.06a1.246 1.246 0 0 1 .143-.287c.107-.168.188-.27.279-.393a19.766 19.766 0 0 1 7.576-6.256 18.266 18.266 0 0 1 5.177-1.55 35.132 35.132 0 0 0-4.806 2.62 45.227 45.227 0 0 0-3.686 2.822 17.518 17.518 0 0 0-2.079 1.888c-.314.339-.623.681-.904 1.041-.135.174-.299.37-.41.524l-.028.041-.005.005c-.002 0 .014.01-.048-.02a.784.784 0 0 1-.09-.048.906.906 0 0 0-.16-.07.71.71 0 0 1-.135-.042c-.078-.017-.056.047-.06-.064a.167.167 0 0 0-.017-.051.212.212 0 0 1-.03-.07 1.466 1.466 0 0 0-.08-.19l-.049-.09c-.017-.03-.01-.005-.011-.014l.008-.004.02-.01c.073-.04.172-.106.265-.168a17.646 17.646 0 0 1 2.418-1.43 6.341 6.341 0 0 1 2.724-.682 3.383 3.383 0 0 1 2.523 1.15c.569.671.993 1.453 1.247 2.296.25.785.434 1.59.55 2.406.06.398.11.794.147 1.187.022.202.036.382.05.56l.021.268a.658.658 0 0 0 .037.18.331.331 0 0 0 .248.209.69.69 0 0 0 .165.022c.068-.005.133-.006.21-.017.339-.059.669-.159.983-.299a11.567 11.567 0 0 0 1.85-1.022 15.53 15.53 0 0 0 3.054-2.635 6.08 6.08 0 0 0 1.016-1.52 5.185 5.185 0 0 0 .31-1.707 10.37 10.37 0 0 0-.435-3.42 7.026 7.026 0 0 0-.73-1.621 3.914 3.914 0 0 0-1.346-1.341 3.817 3.817 0 0 0-1.63-.486 6.626 6.626 0 0 0-1.062.02ZM75.45 49.603c-5.242-5.74-16.817-3.641-19.129-.225-2.07 3.06-1.387 15.114 6.92 11.95 9.884-3.765 14.966 9.09 16.467 8.225 6.238-3.602 2.242-11.926-4.258-19.95Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M75.462 49.594c.295.184 2.397 2.572 4.372 5.683a27.011 27.011 0 0 1 2.55 5.007c.583 1.465.863 3.033.824 4.61a5.938 5.938 0 0 1-1.825 4.071l-.289.276-.314.248a3.473 3.473 0 0 1-.324.241l-.428.28a1.028 1.028 0 0 1-.467.147 1.121 1.121 0 0 1-.482-.113 2.068 2.068 0 0 1-.436-.28 4.037 4.037 0 0 1-.268-.237c-.33-.317-.606-.638-.883-.96-.55-.643-1.076-1.287-1.626-1.912a21.178 21.178 0 0 0-3.595-3.371 9.725 9.725 0 0 0-4.337-1.808 8.193 8.193 0 0 0-2.296.024c-.763.123-1.51.329-2.229.614a7.546 7.546 0 0 1-3.013.544 5.213 5.213 0 0 1-3.005-1.118 6.846 6.846 0 0 1-1.848-2.47 11.298 11.298 0 0 1-.823-2.795 13.605 13.605 0 0 1 .215-5.605c.13-.476.31-.937.536-1.374.254-.452.584-.855.977-1.192a8.687 8.687 0 0 1 2.359-1.418 16.745 16.745 0 0 1 4.912-1.178 18.39 18.39 0 0 1 4.7.152c1.44.229 2.835.683 4.133 1.347a10.115 10.115 0 0 1 3.075 2.436 11.738 11.738 0 0 0-3.356-1.875 14.88 14.88 0 0 0-4.246-.828 20.454 20.454 0 0 0-4.042.183c-.97.143-1.931.334-2.881.574-.98.223-1.924.575-2.81 1.048-.413.22-.794.495-1.133.818a3.005 3.005 0 0 0-.715 1.093 9.316 9.316 0 0 0-.588 2.826c-.069.966-.027 1.936.124 2.892.132.93.406 1.834.813 2.681a5.01 5.01 0 0 0 1.696 2.024 4.125 4.125 0 0 0 2.465.63 6.4 6.4 0 0 0 1.29-.203c.428-.112.82-.256 1.27-.414a9.7 9.7 0 0 1 5.375-.337 11.702 11.702 0 0 1 4.592 2.317 24.66 24.66 0 0 1 3.45 3.435l1.483 1.779c.231.279.478.545.738.798.081.084.175.155.277.21a.21.21 0 0 0 .251-.029l.271-.175c.115-.07.213-.161.32-.24.208-.16.406-.333.592-.518.356-.366.66-.78.901-1.23.446-.9.652-1.9.6-2.902a10.989 10.989 0 0 0-.529-2.921 21.186 21.186 0 0 0-1.062-2.716 47.884 47.884 0 0 0-2.89-5.184c-1.076-1.7-2.098-3.112-2.421-3.585Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M74.92 63.93c-3.461-6.949-9.669-4.17-13.797-.786-2.337 2.952 3.634 10.974 6.386 11.687 3.726.821 7.736.402 9.773-3.424.19-2.713-.927-5.301-2.361-7.476ZM26.218 45.436c-2.568.455-3.626 3.649-2.209 7.593.726 2.018 2.677 2.16 4.35 1.898 9.48-5.34 6.721-13.72-2.14-9.491Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M60.69 63.866a.998.998 0 0 1 .183-.776 3.551 3.551 0 0 1 1.17-1.142 12.484 12.484 0 0 1 3.1-1.31 11.92 11.92 0 0 1 4.285-.547 6.637 6.637 0 0 1 2.32.527l.288.146.284.18c.172.118.3.22.45.33.294.214.568.451.845.674.95.805 1.792 1.73 2.503 2.754a16.58 16.58 0 0 1 1.636 3.09c.425.993.764 1.896 1.346 2.339.577.472 1.467.544 2.219.574a3.585 3.585 0 0 1-1.23.505c-.56.12-1.143.054-1.664-.185a3.346 3.346 0 0 1-1.254-1.068 3.782 3.782 0 0 1-.529-.939 21.907 21.907 0 0 0-1.007-2.594 11.742 11.742 0 0 0-1.373-2.166 12.932 12.932 0 0 0-1.695-1.738c-.292-.259-.612-.501-.904-.717-.29-.194-.61-.34-.946-.432a10.087 10.087 0 0 0-4.027-.13 17.112 17.112 0 0 0-3.44.849 9.124 9.124 0 0 0-1.666.775 2.907 2.907 0 0 0-.626.55c-.105.14-.195.291-.267.45ZM23.685 46.394c.013-.145.596-.463 1.292-.791.695-.328 1.507-.651 1.95-.872.833-.418 1.715-.73 2.625-.93.496-.104 1-.159 1.507-.163a4.028 4.028 0 0 1 1.624.33 2.75 2.75 0 0 1 1.192 1.049c.252.424.409.9.459 1.391a6.61 6.61 0 0 1-.239 2.412 11.668 11.668 0 0 1-1.59 3.428 7.175 7.175 0 0 1-.179-1.902 4.279 4.279 0 0 1 .19-1.466 6.627 6.627 0 0 0 .519-1.623 2.721 2.721 0 0 0-.107-1.484 1.573 1.573 0 0 0-.95-.894 3.489 3.489 0 0 0-1.362-.163c-.874.084-1.734.272-2.564.56-.79.253-1.52.516-2.222.719a13.86 13.86 0 0 1-2.145.4Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M29.831 45.75c-3.504.612-5.31 7.297-4.39 8.226 1.085 1.092 2.495.625 4.395-.083 3.832-2.026 6.178-8.579-.005-8.143Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M29.83 45.737c.24-.12.507-.176.775-.165.559-.041 1.12.033 1.649.218.322.118.62.292.88.516.26.232.47.517.613.836.213.524.304 1.09.267 1.655a6.96 6.96 0 0 1-1.846 4.139 7.604 7.604 0 0 1-1.836 1.535l-.154.092c-.079.041-.165.067-.194.08l-.255.101-.518.196c-.356.135-.72.25-1.088.344-.352.09-.712.142-1.075.154a2.988 2.988 0 0 1-1.206-.216 2.594 2.594 0 0 1-.554-.304 2.019 2.019 0 0 1-.243-.188 1.56 1.56 0 0 1-.264-.271 1.65 1.65 0 0 1-.34-.756 3.332 3.332 0 0 1-.055-.59 7.243 7.243 0 0 1 .291-1.943c.162-.58.37-1.147.623-1.694a8.873 8.873 0 0 1 1.903-2.73 4.152 4.152 0 0 1 2.588-1.228c-.375.251-.716.55-1.015.89-.305.354-.574.739-.802 1.148-.454.8-.767 1.598-1.019 1.98a8.899 8.899 0 0 0-1.12 2.468 4.72 4.72 0 0 0-.192 1.236c0 .089.006.178.02.266.008.061.026.12.055.174.014.027.033.051.056.071l.096.096c.068.059.14.114.214.166.599.406 1.434.294 2.185.08.381-.108.755-.24 1.124-.377l.273-.104c.073-.034.143-.074.21-.117.163-.089.31-.201.461-.302a7.55 7.55 0 0 0 2.474-3.21c.472-1.155.531-2.386-.094-3.092a3.144 3.144 0 0 0-1.493-.881 8.971 8.971 0 0 0-1.394-.273ZM78.71 70.798c-.976-5.66-8.838-7.5-12.153-3.913-2.108 2.28-1.797 5.022-.158 6.711 1.427 1.47 12.03 2.464 12.312-2.798Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M78.723 70.798c.08.363.054.742-.077 1.09a3.552 3.552 0 0 1-1.38 1.816 7.195 7.195 0 0 1-2.394 1.056c-.688.173-1.386.301-2.09.385-.977.128-1.964.158-2.947.09a10.339 10.339 0 0 1-3.101-.629 2.776 2.776 0 0 1-.852-.538 5.404 5.404 0 0 1-1.34-2.2 5.297 5.297 0 0 1 .084-3.38c.331-.9.86-1.716 1.547-2.385.68-.659 1.5-1.156 2.397-1.454a8.365 8.365 0 0 1 5.119.02 8.086 8.086 0 0 1 3.815 2.53 6.41 6.41 0 0 1 1.437 3.56 11.38 11.38 0 0 0-.97-1.518 7.757 7.757 0 0 0-1.362-1.361 13.425 13.425 0 0 0-2.605-1.48c-2.179-1.135-4.957-1.086-6.724.314-.432.35-.81.761-1.12 1.222a4.793 4.793 0 0 0-.647 1.463 4.061 4.061 0 0 0 .382 2.944 4.545 4.545 0 0 0 .638.878l.12.13.106.085c.394.232.823.4 1.269.497.901.213 1.821.336 2.746.369 1.662.099 3.328-.09 4.925-.558a5.211 5.211 0 0 0 2.18-1.255c.43-.475.722-1.06.844-1.69Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M70.122 68.005c-4.4-.4-1.835-6.9 1.114-5.29 3.01 1.646 1.505 5.529-1.114 5.29ZM28.26 48.301c-2.67-.458.066-3.742 2.182-2.75 1.85.867-.794 2.988-2.181 2.75Z",
				fill: "#fff"
			}));
			var la = a => t.a.createElement("svg", {
				className: a.className,
				viewBox: "0 0 112 183",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, t.a.createElement("path", {
				d: "M103.096 55.197c-1.768-12.933-10.193-22.858-22.31-26.806-14.36-4.68-32-.24-47.166 9.021C9.122 52.372-2.003 80.109 4.172 107.907c2.614 11.769 8.846 24.306 18.055 32.311 7.207 6.266 18.131 11.499 28.137 10.679-.666 4.61-.105 11.437 2.228 16.108 2.532 5.067 6.562 9.043 11.91 10.922 1.398.492 2.334-.918 1.92-2.139-2.845-8.416 6.691-11.425 8.854-17.824a13.469 13.469 0 0 0-.234-9.82c11.373-3.563 10.824-18.736 16.939-26.976.761-1.025-.09-2.215-1.16-2.424-10.07-1.957-22.145.752-26.496 6.852-1.584-5.681-.303-20.216 2.805-25.348 8.763-3.14 15.728-6.737 25.55-15.911a20.06 20.06 0 0 0 8.687-2.143c2.633-1.343 5.045-3.223 6.212-5.776 2.95-6.456.412-10.519-4.417-14.732-.029-1.59.16-4.839-.066-6.49Z",
				fill: "#FFA800"
			}), t.a.createElement("path", {
				d: "M103.127 55.192c.16.456.305 1.94.308 4.202l.017 1.77.006.212.004.108c0 .036-.005.075.036.095l.354.304.361.311.406.373a17.875 17.875 0 0 1 3.283 3.882c.508.849.89 1.767 1.134 2.725a9.287 9.287 0 0 1 .214 3.169 12.813 12.813 0 0 1-.776 3.246 17.154 17.154 0 0 1-.694 1.595 9.996 9.996 0 0 1-.993 1.506 16.4 16.4 0 0 1-5.916 4.398c-1.17.546-2.393.975-3.648 1.28a20.55 20.55 0 0 1-1.934.375c-.326.052-.654.087-.982.122l-.494.046-.454.033-.336.019-.083.005-.062.057-.123.115-.627.582c-.48.447-.963.893-1.46 1.327-.981.882-1.996 1.74-3.023 2.59a68.74 68.74 0 0 1-6.497 4.752 60.266 60.266 0 0 1-7.031 3.868 76.209 76.209 0 0 1-3.618 1.568c-.607.235-1.207.481-1.81.704l-.757.284c-.083.044-.202.046-.253.125l-.13.255-.157.309c-.07.13-.13.265-.18.405l-.334.829a32.772 32.772 0 0 0-.55 1.71 40.095 40.095 0 0 0-.791 3.469 59.48 59.48 0 0 0-.822 6.724 52.895 52.895 0 0 0-.017 6.735l.04.374c.026.244.052.481.094.707.032.22.076.437.133.652l.078.303c.004.01.005.032.011.031l.027-.034.052-.066.105-.13.095-.122c.204-.257.426-.497.666-.721.116-.113.238-.198.366-.308l.332-.262c.132-.109.272-.209.418-.298a19.702 19.702 0 0 1 1.742-1.066l.9-.478c.302-.157.617-.278.925-.418a31.877 31.877 0 0 1 7.785-2.236 38.461 38.461 0 0 1 8.163-.418c.688.018 1.373.117 2.061.172.345.026.687.082 1.03.135l1.262.198a3.281 3.281 0 0 1 2.422 1.801c.224.469.305.992.233 1.506a2.8 2.8 0 0 1-.209.736c-.119.237-.268.471-.4.706l-.419.607-.242.398c-.166.261-.321.532-.47.809-.15.278-.3.552-.438.837-.14.284-.28.569-.412.862a46.321 46.321 0 0 0-1.446 3.621c-.892 2.486-1.679 5.077-2.663 7.677a28.81 28.81 0 0 1-4.017 7.596 15.583 15.583 0 0 1-3.272 3.149c-.321.209-.636.433-.967.627-.337.185-.67.382-1.014.552l-.37.171-.191.075.078.206.04.125.023.071.061.244c.614 2.33.636 4.778.063 7.119-.09.382-.19.762-.306 1.133-.06.187-.11.366-.178.56l-.223.597c-.319.76-.71 1.487-1.167 2.173a26.434 26.434 0 0 1-2.909 3.507c-.993 1.049-1.967 2.034-2.785 3.042A9.766 9.766 0 0 0 68 170.982a6.054 6.054 0 0 0-.11 3.256l.047.209.023.104.056.223.238.941a3.37 3.37 0 0 1-.075 1.789 3.51 3.51 0 0 1-.917 1.486 3.155 3.155 0 0 1-1.533.804 3.337 3.337 0 0 1-.863.062 7.607 7.607 0 0 1-.915-.244l-.922-.273a2.77 2.77 0 0 1-.429-.168l-.265-.116a14.312 14.312 0 0 1-1.05-.493c-.349-.169-.69-.35-1.023-.548a22.038 22.038 0 0 1-3.744-2.704 25.042 25.042 0 0 1-5.508-7.214 26.541 26.541 0 0 1-2.538-8.633 36.35 36.35 0 0 1-.313-4.391c-.01-.366 0-.732.006-1.102.002-.183.004-.366.015-.551l.017-.359.005-.121-.12.01h.01-.026l-.272-.006-.544-.013c-.36-.014-.724-.003-1.078-.045-.71-.073-1.424-.105-2.117-.214-.694-.109-1.39-.188-2.065-.339a41.374 41.374 0 0 1-7.758-2.352 48.969 48.969 0 0 1-13.836-8.643 46.646 46.646 0 0 1-5.595-5.935 59.69 59.69 0 0 1-4.6-6.638A70.394 70.394 0 0 1 .687 98.708a67.595 67.595 0 0 1 4.406-30.426 65.427 65.427 0 0 1 16.859-24.37A68.823 68.823 0 0 1 33.55 35.45a83.21 83.21 0 0 1 12.53-6.01c8.535-3.228 17.503-4.892 26.1-4.09a37.62 37.62 0 0 1 12.214 3.188 35.38 35.38 0 0 1 5.349 2.997 33.854 33.854 0 0 1 4.58 3.849c.72.674 1.339 1.436 1.98 2.165.332.356.597.765.894 1.144.285.39.59.762.854 1.162l.776 1.202.383.599.341.622.676 1.236c.218.414.397.847.595 1.267a34.612 34.612 0 0 1 2.87 10.35 35.834 35.834 0 0 0-3.438-9.616 31.832 31.832 0 0 0-7.088-9.046 32.651 32.651 0 0 0-10.457-6.212 38.612 38.612 0 0 0-12.146-2.169 51.092 51.092 0 0 0-11.97 1.23 69.334 69.334 0 0 0-10.644 3.287c-1.633.623-3.161 1.334-4.63 1.986-1.437.72-2.829 1.356-4.085 2.062l-1.84.99-1.684.977c-1.094.607-2.039 1.232-2.915 1.759a63.104 63.104 0 0 0-14.693 12.813 61.329 61.329 0 0 0-9.826 16.373A63.238 63.238 0 0 0 3.92 87.768a67.607 67.607 0 0 0 6.615 35.305 55.007 55.007 0 0 0 9.923 14.298 45.256 45.256 0 0 0 13.904 9.585 39.266 39.266 0 0 0 7.878 2.578c1.335.282 2.687.475 4.047.579.337.041.676.038 1.013.049l1.108.028c.96-.022 1.942-.096 2.875-.108-.126 1.029-.264 2.076-.322 3.106a26.949 26.949 0 0 0-.038 2.18c.024 1.442.142 2.881.353 4.308a22.474 22.474 0 0 0 2.603 8.009 21.691 21.691 0 0 0 5.309 6.346 19.028 19.028 0 0 0 3.443 2.198c.3.161.615.288.924.427.179.079.238.105.346.145l.296.112c.19.092.4.133.61.119.21-.028.4-.136.534-.3a1.162 1.162 0 0 0 .122-1.187l-.092-.302-.124-.557a9.707 9.707 0 0 1-.168-1.138 8.679 8.679 0 0 1 .832-4.506 15.476 15.476 0 0 1 2.5-3.603c.94-1.062 1.923-2.032 2.832-3.019a18.32 18.32 0 0 0 2.39-3.066 9.375 9.375 0 0 0 .775-1.666c.2-.606.366-1.222.499-1.846.254-1.221.314-2.475.176-3.715a12.68 12.68 0 0 0-.346-1.829 4.003 4.003 0 0 0-.087-.301l-.104-.339a11.669 11.669 0 0 0-.229-.691l-.5-1.389 1.452-.523c.24-.091.488-.186.72-.283l.575-.261c.286-.148.565-.31.847-.462l.804-.527a13.25 13.25 0 0 0 2.75-2.686 27.055 27.055 0 0 0 3.638-6.963c.947-2.487 1.736-5.05 2.665-7.583.464-1.267.961-2.528 1.538-3.764.14-.31.291-.617.45-.921.157-.304.313-.609.483-.908.163-.302.338-.598.523-.888l.272-.437.176-.255c.103-.127.185-.27.24-.423a.64.64 0 0 0-.06-.47.958.958 0 0 0-.802-.471l-.816-.129a10.235 10.235 0 0 0-.973-.129c-.651-.056-1.297-.157-1.95-.169a36.35 36.35 0 0 0-7.736.373 29.55 29.55 0 0 0-7.256 2.063c-.582.223-1.105.542-1.654.812-.538.288-1.034.633-1.546.951l-.92.709-.58.523c-.192.191-.384.431-.574.645l-1.15 1.316-1.05 1.275-.152-.157-.075-.079c-.012-.015-.025-.021-.037-.043l-.026-.116-.21-.922c-.147-.623-.26-1.213-.382-1.808-.056-.302-.13-.585-.17-.902l-.11-.964-.107-.963c-.045-.314-.05-.684-.06-.856a50.593 50.593 0 0 1 .01-5.155 58.92 58.92 0 0 1 1.33-10.009c.353-1.66.863-3.282 1.523-4.846.078-.205.17-.403.277-.595l.422-.793.216-.41c.137-.07.279-.129.425-.174l.828-.301c.75-.266 1.485-.553 2.223-.833a62.892 62.892 0 0 0 8.416-3.973 78.258 78.258 0 0 0 12.916-9.526l1.001-.894c.164-.247.465-.164.719-.192l.696-.03a21.038 21.038 0 0 0 2.135-.214 18.59 18.59 0 0 0 4.138-1.12c2.64-1.086 5.18-2.67 6.695-4.91.188-.278.357-.566.508-.864.153-.296.279-.622.418-.93a8.89 8.89 0 0 0 .36-.945l.166-.473.121-.48a9.119 9.119 0 0 0 .209-3.792 9.5 9.5 0 0 0-1.28-3.348 16.039 16.039 0 0 0-2.038-2.663c-.352-.403-.732-.754-1.083-1.118l-.572-.539-.275-.261c-.031-.018-.034-.048-.03-.082v-.096l.003-.19c.011-.511.033-.966.052-1.392l.055-1.231c.076-1.203.072-2.41-.011-3.612Z",
				fill: "#FFA800"
			}), t.a.createElement("path", {
				d: "M78.615 46.922c-2.918 1.397-5.965 1.376-8.515-.956-4.045-3.703-2.682-9.758-1.05-12.212 2.942-4.431 25.587-30.307 30.515-32.665 1.115-.534 1.809-.121 2.123.173.899.84 4.425-1.978-18.573 40.526-1.036 2.043-2.749 4.298-4.5 5.134Z",
				fill: "#FFA800"
			}), t.a.createElement("path", {
				d: "M78.602 46.893a17.98 17.98 0 0 0 2.305-2.463c.63-.856 1.18-1.768 1.643-2.725l1.752-3.466c2.47-4.837 5.28-10.318 6.694-13.442 2.486-5.512 5.315-11.376 7.833-17.32a38.752 38.752 0 0 0 1.601-4.376c.077-.266.128-.54.153-.815a.103.103 0 0 1 0-.035v-.008c.043-.005.083.003.125 0 .084.002.168-.001.252-.009a2.44 2.44 0 0 0 .8-.192l.031-.02.007-.006-1.018.734c0 .003.012.016.003.01a.177.177 0 0 0-.034-.015.242.242 0 0 0-.123-.043.597.597 0 0 0-.22.079l-.314.185c-.123.08-.267.19-.4.282-.274.2-.567.439-.852.673a43.99 43.99 0 0 0-1.716 1.536 100.262 100.262 0 0 0-3.318 3.28c-3.77 3.889-7.43 7.904-10.983 11.824-3.544 3.928-7 7.783-10.173 11.5a89.86 89.86 0 0 0-1.156 1.385c-.372.457-.74.918-1.03 1.323a8.637 8.637 0 0 0-1.165 2.698 8.744 8.744 0 0 0 .294 5.666 6.71 6.71 0 0 0 3.758 3.549 7.436 7.436 0 0 0 5.005-.3 7.677 7.677 0 0 1-2.251 1.387 6.628 6.628 0 0 1-3.178.44c-2.374-.249-4.704-1.882-6.034-4.182a10.03 10.03 0 0 1-1.223-3.644c-.15-1.162-.134-2.34.048-3.497.152-1.007.433-1.99.836-2.924.189-.416.407-.818.655-1.202.102-.16.212-.316.33-.466.104-.141.206-.27.3-.379 1.52-1.783 3.014-3.352 4.5-4.945l4.387-4.638 8.406-8.795c2.729-2.827 5.376-5.56 8.033-8.138 1.332-1.286 2.657-2.537 4.07-3.7.367-.285.72-.576 1.121-.84.202-.144.413-.275.631-.391.235-.14.485-.25.745-.332.58-.194 1.21-.18 1.781.04.279.124.541.284.778.478a2.7 2.7 0 0 1 .382.244c.141.098.259.225.345.373.188.332.273.713.243 1.093a2.916 2.916 0 0 1-.035.407 3.303 3.303 0 0 1-.062.37c-.092.45-.21.893-.354 1.33a38.053 38.053 0 0 1-.888 2.43 109.158 109.158 0 0 1-1.967 4.558 287.79 287.79 0 0 1-4.039 8.477C93.233 25.35 90.62 30.334 88.021 34.9c-1.211 2.195-3.018 5.062-4.652 7.602a14.758 14.758 0 0 1-2.694 3.118 6.754 6.754 0 0 1-2.073 1.272Z",
				fill: "#FFA800"
			}), t.a.createElement("path", {
				d: "M105.187 58.333C103.419 45.4 94.994 35.475 82.876 31.527c-14.36-4.68-31.999-.24-47.165 9.021C11.213 55.508.088 83.245 6.263 111.043c2.613 11.77 8.846 24.306 18.055 32.311 7.207 6.266 18.13 11.5 28.136 10.679-.665 4.61-.104 11.437 2.229 16.109 2.532 5.066 6.562 9.042 11.91 10.922 1.398.491 2.334-.919 1.92-2.14-2.846-8.415 6.691-11.425 8.854-17.824a13.47 13.47 0 0 0-.235-9.82c11.374-3.562 10.825-18.736 16.94-26.975.76-1.026-.09-2.216-1.16-2.425-10.07-1.956-22.146.752-26.497 6.852-1.583-5.681-.302-20.216 2.806-25.348 8.762-3.14 15.727-6.736 25.55-15.91 3.02-.052 5.99-.785 8.687-2.144 2.632-1.343 5.045-3.223 6.212-5.776 2.95-6.455.412-10.518-4.418-14.731-.028-1.591.16-4.84-.065-6.49Z",
				fill: "#00CCC0"
			}), t.a.createElement("path", {
				d: "M105.218 58.328c.16.456.304 1.94.308 4.202l.017 1.77.006.212.004.108c0 .036-.005.074.036.095l.354.303.361.314.406.373a17.872 17.872 0 0 1 3.283 3.883c.508.848.889 1.766 1.134 2.724a9.287 9.287 0 0 1 .214 3.169 12.773 12.773 0 0 1-.777 3.246 17.146 17.146 0 0 1-.693 1.595 9.996 9.996 0 0 1-.993 1.506 16.402 16.402 0 0 1-5.916 4.398 19.59 19.59 0 0 1-3.648 1.28c-.635.158-1.28.278-1.934.375-.326.052-.654.087-.983.122l-.493.046-.455.033-.335.019-.083.005-.062.057-.123.115-.628.583c-.479.446-.962.892-1.46 1.326-.98.882-1.995 1.74-3.022 2.59a68.721 68.721 0 0 1-6.498 4.752 60.297 60.297 0 0 1-7.03 3.868 76.357 76.357 0 0 1-3.619 1.568c-.606.235-1.207.481-1.81.704l-.756.284c-.083.044-.202.046-.253.125l-.13.255-.157.309c-.07.13-.13.265-.18.405l-.334.829a32.867 32.867 0 0 0-.55 1.71 40.095 40.095 0 0 0-.791 3.469 59.48 59.48 0 0 0-.822 6.724 52.873 52.873 0 0 0-.053 6.108l.035.627.04.374c.027.244.052.482.095.707.032.22.076.437.132.652l.079.303c.004.01.005.032.011.031l.026-.034.053-.066.104-.13.096-.122c.204-.256.426-.497.666-.72.115-.114.238-.199.366-.309l.332-.262c.132-.109.272-.209.418-.298a19.472 19.472 0 0 1 1.742-1.065l.9-.479c.302-.156.616-.278.925-.418a31.876 31.876 0 0 1 7.784-2.235 38.462 38.462 0 0 1 8.164-.419c.687.018 1.373.117 2.061.172.345.026.687.082 1.03.135l1.262.198c.518.084 1.009.292 1.43.606.422.313.762.723.992 1.196.224.468.305.992.233 1.506a2.822 2.822 0 0 1-.21.736c-.118.236-.267.47-.4.705l-.418.608-.242.397c-.166.261-.321.532-.47.809-.15.278-.3.552-.439.837-.139.284-.28.569-.411.862a46.36 46.36 0 0 0-1.446 3.621c-.892 2.486-1.679 5.078-2.663 7.677a28.832 28.832 0 0 1-4.017 7.597 15.605 15.605 0 0 1-3.272 3.148c-.322.209-.636.433-.967.628-.337.184-.67.381-1.014.551l-.37.171-.192.075.079.206.04.125.023.071.061.244c.614 2.331.636 4.778.063 7.119-.091.383-.19.763-.306 1.133-.06.187-.11.366-.178.56l-.223.597c-.319.76-.71 1.487-1.168 2.173a26.426 26.426 0 0 1-2.908 3.507c-.993 1.049-1.967 2.035-2.785 3.042a9.78 9.78 0 0 0-1.806 3.084 6.055 6.055 0 0 0-.11 3.256l.047.209.023.104.056.224.238.94c.137.593.11 1.211-.075 1.79a3.513 3.513 0 0 1-.917 1.485 3.156 3.156 0 0 1-2.396.866 7.6 7.6 0 0 1-.915-.244l-.922-.273a2.87 2.87 0 0 1-.429-.167l-.265-.117a14.747 14.747 0 0 1-1.051-.492c-.348-.17-.69-.351-1.022-.549a22.038 22.038 0 0 1-3.744-2.704 25.042 25.042 0 0 1-5.508-7.214 26.544 26.544 0 0 1-2.538-8.633 36.37 36.37 0 0 1-.314-4.391c-.01-.366 0-.732.007-1.102.002-.183.004-.366.015-.551l.017-.359.005-.121-.12.011h.01-.026l-.272-.007-.544-.012c-.36-.015-.724-.003-1.079-.046-.71-.072-1.423-.104-2.117-.214-.693-.109-1.39-.188-2.064-.339a41.373 41.373 0 0 1-7.759-2.352 48.969 48.969 0 0 1-13.835-8.643 46.646 46.646 0 0 1-5.595-5.935 59.676 59.676 0 0 1-4.6-6.638 70.393 70.393 0 0 1-9.513-30.056 67.594 67.594 0 0 1 4.406-30.425 65.426 65.426 0 0 1 16.858-24.37 68.813 68.813 0 0 1 11.6-8.463 83.215 83.215 0 0 1 12.528-6.01c8.536-3.227 17.503-4.892 26.101-4.09a37.62 37.62 0 0 1 12.213 3.188 35.403 35.403 0 0 1 5.35 2.997 33.874 33.874 0 0 1 4.58 3.849c.72.674 1.338 1.436 1.98 2.165.332.356.597.765.894 1.144.285.39.59.762.854 1.162l.776 1.202.383.599.341.622.676 1.237c.218.414.396.846.594 1.266a34.614 34.614 0 0 1 2.871 10.35 35.836 35.836 0 0 0-3.439-9.616 31.82 31.82 0 0 0-7.087-9.045A32.651 32.651 0 0 0 84.8 33.395a38.608 38.608 0 0 0-12.146-2.168 51.087 51.087 0 0 0-11.97 1.23 69.336 69.336 0 0 0-10.644 3.286c-1.633.623-3.162 1.334-4.63 1.987-1.437.72-2.829 1.355-4.085 2.061l-1.84.99-1.684.978c-1.095.606-2.039 1.231-2.915 1.758A63.106 63.106 0 0 0 20.193 56.33a61.328 61.328 0 0 0-9.827 16.373 63.24 63.24 0 0 0-4.355 18.204 67.607 67.607 0 0 0 6.615 35.304 54.988 54.988 0 0 0 9.923 14.298 45.275 45.275 0 0 0 13.904 9.586 39.394 39.394 0 0 0 7.878 2.578c1.335.282 2.686.475 4.047.578.337.042.675.038 1.013.049l1.108.028c.96-.022 1.941-.096 2.875-.108-.126 1.03-.264 2.076-.322 3.106a27.02 27.02 0 0 0-.039 2.181c.025 1.441.143 2.88.354 4.307a22.47 22.47 0 0 0 2.603 8.009 21.693 21.693 0 0 0 5.308 6.346 19.032 19.032 0 0 0 3.444 2.198c.3.161.615.288.924.427.178.079.238.105.346.146l.295.111c.19.092.4.133.611.12.21-.029.4-.136.534-.3a1.168 1.168 0 0 0 .122-1.187l-.092-.303-.124-.557a9.707 9.707 0 0 1-.169-1.138 8.677 8.677 0 0 1 .832-4.505 15.46 15.46 0 0 1 2.5-3.604c.941-1.062 1.924-2.032 2.833-3.019a18.32 18.32 0 0 0 2.39-3.066 9.342 9.342 0 0 0 .775-1.666c.2-.606.366-1.222.499-1.845.254-1.222.313-2.476.175-3.716a12.68 12.68 0 0 0-.345-1.829 4.143 4.143 0 0 0-.087-.301l-.104-.339a11.408 11.408 0 0 0-.229-.69l-.5-1.39 1.451-.523c.24-.09.489-.186.721-.283l.575-.261c.286-.148.564-.31.846-.462l.805-.527a13.25 13.25 0 0 0 2.749-2.686 27.04 27.04 0 0 0 3.638-6.963c.948-2.487 1.737-5.05 2.666-7.583.464-1.267.961-2.528 1.538-3.764.14-.31.291-.616.45-.921.157-.304.313-.609.483-.908.163-.302.337-.598.523-.888l.272-.437.176-.255c.103-.127.185-.269.24-.423a.64.64 0 0 0-.06-.47.968.968 0 0 0-.802-.471l-.817-.129a10.233 10.233 0 0 0-.972-.129c-.651-.056-1.297-.157-1.95-.169a36.285 36.285 0 0 0-7.736.374 29.502 29.502 0 0 0-7.256 2.062c-.582.223-1.105.542-1.654.813-.539.287-1.034.633-1.546.95l-.92.709-.58.523c-.192.191-.384.432-.575.645l-1.15 1.316-1.05 1.275-.15-.157-.076-.078c-.012-.015-.025-.022-.037-.044l-.026-.116-.21-.922c-.147-.623-.26-1.212-.382-1.808-.056-.301-.13-.585-.17-.902l-.11-.964-.108-.963c-.045-.313-.049-.684-.06-.856a50.573 50.573 0 0 1 .012-5.154c.155-3.369.6-6.717 1.329-10.01.353-1.66.862-3.282 1.522-4.846.079-.204.171-.403.278-.594l.421-.794.217-.41a2.7 2.7 0 0 1 .425-.174l.828-.301c.75-.265 1.485-.553 2.223-.833a62.949 62.949 0 0 0 8.415-3.973 78.258 78.258 0 0 0 12.916-9.526l1.002-.894c.164-.246.465-.164.719-.192l.696-.03a21.04 21.04 0 0 0 2.135-.214 18.6 18.6 0 0 0 4.138-1.12c2.64-1.086 5.179-2.67 6.695-4.91a7.99 7.99 0 0 0 .508-.864c.152-.296.279-.622.418-.93.137-.308.258-.623.36-.945l.166-.473.121-.48a9.12 9.12 0 0 0 .209-3.792 9.52 9.52 0 0 0-1.28-3.348 15.987 15.987 0 0 0-2.039-2.663c-.351-.402-.731-.754-1.083-1.118l-.571-.539-.275-.261c-.031-.018-.034-.048-.03-.082v-.096l.003-.19c.01-.51.032-.966.052-1.392l.055-1.231c.076-1.204.072-2.411-.011-3.614Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M68.564 140.763c-2.817-6.407-6.717-19.307-2.186-35.591-2.855.823-5.436.799-8.288 1.255-.639 2.493-.803 6.185-2.222 9.276-.798 2.764-2.026 5.367-4.27 7.318-1.338 1.732-2.767 3.087-4.233 3.743-7.036 3.149-12.364-2.934-15.308-10.001.463 4.543 2.346 11.742 8.245 19.164 6.156 7.744 15.25 11.855 26.449 12.801 1.173.1 2.527-.209 3.17-1.193.614-.941.301-2.188-.056-3.255a105.861 105.861 0 0 0-1.301-3.517Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M68.58 140.759a34.032 34.032 0 0 1 1.65 3.984c.225.637.309 1.315.244 1.987a2.468 2.468 0 0 1-1.359 1.856 4.524 4.524 0 0 1-2.429.431c-.806-.082-1.638-.136-2.478-.249-3.429-.4-6.799-1.2-10.041-2.383a38.02 38.02 0 0 1-4.287-1.892 90.48 90.48 0 0 1-1.783-.999l-1.501-.947a30.992 30.992 0 0 1-5.641-4.833 40.779 40.779 0 0 1-4.58-6.144 36.165 36.165 0 0 1-5.219-14.719l-.685-6.035 2.43 5.593a23.665 23.665 0 0 0 4.557 7.213c.92.975 2.013 1.77 3.223 2.346a6.847 6.847 0 0 0 3.685.575c.334-.029.665-.089.988-.182.163-.041.33-.062.491-.119l.48-.184a5.874 5.874 0 0 0 1.754-.91 11.322 11.322 0 0 0 1.535-1.391c.242-.257.475-.528.704-.801l.337-.419.095-.121c.057-.08.124-.152.2-.214l.209-.189a11.616 11.616 0 0 0 2.442-3.299c.315-.627.59-1.273.825-1.934.12-.333.231-.669.335-1.008l.077-.255.024-.079a.946.946 0 0 1 .046-.135l.075-.175c.066-.157.138-.314.2-.47a22.08 22.08 0 0 0 1.086-4.052c.126-.714.25-1.425.373-2.134l.2-1.088.132-.637.246-1.029.031-.128.016-.064.066-.01.26-.039.524-.079.813-.113 1.084-.122 2.112-.209a32.72 32.72 0 0 0 2.026-.269l.247-.044c.093-.019.125-.018.33-.064l.993-.227 1.987-.53a5744.15 5744.15 0 0 0-1.037 4.063c-.224.82-.354 1.656-.534 2.474-.181.818-.298 1.642-.423 2.456l-.188 1.22c-.04.407-.082.812-.124 1.216a54.213 54.213 0 0 0-.18 9.397 53.328 53.328 0 0 0 3.622 15.995 38.774 38.774 0 0 1-2.912-6.47 46.495 46.495 0 0 1-2.014-8.072 44.282 44.282 0 0 1-.077-13.639c.195-1.32.497-2.61.778-3.875.125-.637.317-1.251.48-1.862l.027-.094.008-.02.016-.04.034-.087c.025-.062.047-.126.064-.19l-.543.078c-.627.104-1.248.182-1.865.246-1.232.125-2.434.202-3.606.33l-.532.057c-.074-.014-.072.056-.09.105l-.043.163a41.131 41.131 0 0 0-.345 1.719c-.213 1.16-.418 2.332-.703 3.488a18.339 18.339 0 0 1-1.142 3.377l-.25.771c-.091.278-.194.552-.294.826a18.557 18.557 0 0 1-.695 1.607 13.953 13.953 0 0 1-1.889 2.924c-.372.442-.776.855-1.21 1.237l-.075.068a.248.248 0 0 0-.04.038l-.114.142-.266.328c-.18.217-.364.43-.553.639a12.45 12.45 0 0 1-2.553 2.22 7.442 7.442 0 0 1-.753.412c-.262.125-.523.203-.785.305-.26.093-.52.204-.788.279l-.819.18-.408.089-.419.032-.833.057c-.278-.012-.555-.041-.832-.061l-.413-.034c-.136-.026-.27-.06-.405-.09l-.804-.188-.767-.294-.38-.15-.358-.192-.712-.387a16.155 16.155 0 0 1-4.42-4.409 28.666 28.666 0 0 1-2.871-5.285l.826-.209a34.089 34.089 0 0 0 3.32 11.144 41.131 41.131 0 0 0 6.073 9.069 33.616 33.616 0 0 0 3.776 3.542 32.194 32.194 0 0 0 4.16 2.79 38.354 38.354 0 0 0 8.843 3.575c1.481.38 3.244.803 5.115 1.097.931.173 1.892.279 2.846.409.872.161 1.773.01 2.545-.427.341-.218.605-.538.753-.915.134-.38.18-.786.134-1.186a9.758 9.758 0 0 0-.548-2.212l-.938-2.837ZM93.452 64.251c-10.924 2.536-27.734 14.005-38.314 30.412.803 2.762 1.685 6.615 1.468 9.649.97-.165 3.948.339 4.888.153 20.371-4.866 34.945-14.135 41.62-30.626.585-4.586-2.356-11.283-9.662-9.588Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M93.449 64.235c.389-.134.788-.238 1.193-.31.327-.06.722-.065 1.165-.1.236-.01.471 0 .705.031.26.013.519.044.775.091a6.78 6.78 0 0 1 3.315 1.656 8.643 8.643 0 0 1 2.356 3.702c.126.37.231.745.314 1.126l.12.578c.031.195.049.392.073.589.048.395.071.793.07 1.192.003.2-.005.4-.024.6l-.021.3a.795.795 0 0 1-.071.362l-.933 2.14c-.294.694-.624 1.371-.99 2.03-.349.65-.66 1.303-1.015 1.902l-1.055 1.709-.49.796-.512.715-.913 1.281a45.294 45.294 0 0 1-7.192 7.61 54.783 54.783 0 0 1-9.08 6.028c-.817.414-1.62.87-2.452 1.251l-2.503 1.143c-.84.366-1.698.687-2.544 1.031-.425.166-.846.346-1.275.499l-1.288.449c-.861.29-1.708.619-2.574.872l-2.58.784c-.854.266-1.729.467-2.585.702l-1.287.338c-.25.076-.508.131-.768.163a7.275 7.275 0 0 1-.767.017c-.732-.019-1.404-.085-2.068-.133a26.215 26.215 0 0 0-.976-.062 13.648 13.648 0 0 0-2.05.146l.05-1.066.028-.982.006-.241-.003-.136-.009-.251c-.003-.168-.015-.336-.026-.505a23.582 23.582 0 0 0-.227-2.03 39.567 39.567 0 0 0-.857-4.039l-.135-.5-.209-.735-.135-.475a3.22 3.22 0 0 1 .276-.436l.422-.62 1.2-1.757c.388-.592.822-1.147 1.245-1.708.424-.56.848-1.117 1.27-1.672A80.45 80.45 0 0 1 69.68 76.754a73.368 73.368 0 0 1 12.03-8.294 43.937 43.937 0 0 1 11.675-4.497 58.9 58.9 0 0 0-12.014 6.324c-4.054 2.687-7.57 5.616-9.468 7.088a76.832 76.832 0 0 0-12.51 12.341c-.861 1.119-1.755 2.199-2.524 3.35l-1.117 1.593c-.018.039-.07.068-.06.115l.037.144.105.397.253 1.005c.326 1.327.582 2.67.768 4.025.087.672.157 1.344.187 2.019.012.168.011.337.017.506l.006.252v.171c-.003.105 0 .232-.009.323l-.008.147-.004.074c0 .022-.013.059.022.045.228-.02.457-.02.685 0 .366.021.725.052 1.082.082.71.059 1.42.133 2.088.136a3 3 0 0 0 .455-.026c.149-.028.333-.083.497-.122l1.011-.262 2.005-.514c1.322-.374 2.623-.771 3.909-1.157 1.268-.444 2.532-.853 3.76-1.314 4.7-1.73 9.181-4.007 13.35-6.784a46.639 46.639 0 0 0 10.054-9.104 44.602 44.602 0 0 0 6.377-10.547l.216-.47a.316.316 0 0 0 .048-.146l.021-.235c.013-.176.039-.353.045-.535v-.557c.013-.377-.052-.761-.076-1.155-.081-.385-.11-.793-.231-1.181a9.92 9.92 0 0 0-.884-2.3l-.329-.523-.165-.261-.192-.237-.384-.47c-.142-.142-.292-.275-.435-.412a6.452 6.452 0 0 0-.927-.71c-.324-.203-.672-.345-.994-.513-.346-.104-.68-.22-1.006-.313l-.959-.15c-.304-.032-.595-.013-.864-.023a3.736 3.736 0 0 0-.74.031l-1.034.125ZM48.092 56.587c-8.444 4.324-3.266 17.255 4.998 14.247 9.208-3.35 3.823-18.763-4.998-14.247Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M48.085 56.574c.093-.114.21-.206.34-.272a3.92 3.92 0 0 1 .826-.407 5.777 5.777 0 0 1 2.8-.39 6.252 6.252 0 0 1 3.056 1.267 8.946 8.946 0 0 1 1.864 1.986 9.38 9.38 0 0 1 1.446 7.512 7.616 7.616 0 0 1-2.051 3.641 8.67 8.67 0 0 1-3.544 2.06 7.45 7.45 0 0 1-3.57.213 7.32 7.32 0 0 1-3.198-1.538 8.913 8.913 0 0 1-3.069-5.692 8.293 8.293 0 0 1 1.222-5.65 7.979 7.979 0 0 1 3.75-2.983 16.536 16.536 0 0 0-1.464 1.708 8.838 8.838 0 0 0-1.133 2.09 11.769 11.769 0 0 0-.556 3.584 7.353 7.353 0 0 0 1.056 4.26 5.723 5.723 0 0 0 7.227 2.431 6.593 6.593 0 0 0 3.036-2.268 6.729 6.729 0 0 0 1.21-3.328 8.628 8.628 0 0 0-.343-3.328 7.76 7.76 0 0 0-3.517-4.644 6.073 6.073 0 0 0-3.024-.724c-.27.029-.542.033-.79.074l-.692.133-.882.265Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M84.454 39.575c-6.215 3.039 3.21 15.225 8.694 11.439 4.156-2.868-4.352-13.562-8.694-11.439Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M84.447 39.563c.273-.281.595-.51.95-.677l.216-.124.028-.016.007-.004c.09.182-.197-.408.2.407h-.003l-.014.008-.058.033-.118.066-.506.28-.552.3-.144.077-.018.01h-.005l-.008.004c-.517-1.098-.14-.306-.256-.55l.01-.006.036-.02.073-.038c.105-.053.225-.1.34-.149a4.155 4.155 0 0 1 2.938.132c.736.29 1.439.654 2.098 1.09a13.68 13.68 0 0 1 4.503 4.864 7.83 7.83 0 0 1 1.039 3.518c.019.72-.168 1.43-.538 2.048a3.249 3.249 0 0 1-.728.837l-.209.174c-.07.048-.138.088-.209.132l-.418.252a5.252 5.252 0 0 1-3.28.478 7.847 7.847 0 0 1-2.852-1.115 12.111 12.111 0 0 1-3.859-3.972 8.326 8.326 0 0 1-1.366-4.878 3.815 3.815 0 0 1 2.577-3.417 5.003 5.003 0 0 0-1.063 1.642 3.643 3.643 0 0 0-.1 1.919c.271 1.02.655 2.007 1.145 2.943.25.625.567 1.22.946 1.777.367.555.79 1.07 1.261 1.538.45.462.954.87 1.498 1.216a6.034 6.034 0 0 0 1.673.773 4.3 4.3 0 0 0 1.73.15 3.773 3.773 0 0 0 1.541-.613c.889-.6 1.027-1.77.793-2.8a8.925 8.925 0 0 0-1.28-2.88 14.198 14.198 0 0 0-1.889-2.331c-1.359-1.355-2.88-2.435-4.386-2.77a3.783 3.783 0 0 0-1.198-.03l-.314.083c-.06.016-.12.036-.178.06l-.022.008H84.469c-.142-.314.317.7-.313-.703-.053.023-.009.004-.017.008l.046-.017.092-.033.727-.258.349-.12.168-.058.083-.028.041-.013.02-.007c-.037-.076.324.659.17.348h-.004l-.01.003-.596.197-.778.252Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M27.238 122.838c.604 3.204 0 7.325-2.03 7.708-2.03.384-5.049-4.628-5.654-7.832-.604-3.204 2.017-5.733 4.05-6.116 2.034-.383 3.029 3.037 3.634 6.24Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M27.223 122.841c-.197-.104-.491-1.411-.99-2.847a8.668 8.668 0 0 0-.968-2.027 2.67 2.67 0 0 0-.627-.664 1.017 1.017 0 0 0-.575-.194.477.477 0 0 0-.212.021 1.054 1.054 0 0 0-.228.059c-.177.059-.35.132-.516.218a5.31 5.31 0 0 0-2.366 2.582 4.096 4.096 0 0 0-.296 2.242c.144.811.391 1.6.735 2.349a16.665 16.665 0 0 0 2.184 3.697c.358.479.803.887 1.311 1.202.078.042.16.075.244.097.072.006.074.032.15 0a.918.918 0 0 0 .46-.246c.365-.411.638-.894.8-1.419a9.651 9.651 0 0 0 .426-1.737c.171-1.086.234-2.187.189-3.285a7.357 7.357 0 0 1 1.212 3.502c.148 1.35-.125 2.732-.596 3.392a4.273 4.273 0 0 1-.823.926c-.17.147-.358.27-.561.366a2.207 2.207 0 0 1-.65.224 1.855 1.855 0 0 1-.724.029 2.433 2.433 0 0 1-.63-.185 3.733 3.733 0 0 1-.92-.608 11.448 11.448 0 0 1-2.195-2.924 20.872 20.872 0 0 1-1.386-3.019 13.364 13.364 0 0 1-.459-1.53 6.365 6.365 0 0 1-.159-1.597 5.759 5.759 0 0 1 .962-2.901 6.283 6.283 0 0 1 2.082-1.986 4.791 4.791 0 0 1 1.328-.53 2.18 2.18 0 0 1 1.592.261c.404.258.743.605.993 1.014.223.349.408.722.552 1.11.61 1.407.673 3.923.66 4.408ZM32.57 134.075c.619 1.293.083 1.974-1.433 2.412-1.24.358-3.29-.864-3.908-2.156-.618-1.292.505-1.967 1.668-2.524 1.163-.556 3.055.976 3.673 2.268Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M32.557 134.083c-.18.01-.51-.485-1.042-.926a3.297 3.297 0 0 0-1.583-.851.957.957 0 0 0-.732.16c-.323.201-.63.428-.916.68-.1.086-.184.189-.248.304a.258.258 0 0 0-.032.167c.052.192.148.37.28.519.362.425.798.78 1.287 1.048.386.243.826.388 1.28.425.129-.012.256-.034.38-.066.134-.027.256-.059.367-.092.172-.048.338-.118.493-.209a.522.522 0 0 0 .22-.376c.028-.22.026-.442-.008-.661.317.094.595.287.794.551a1.364 1.364 0 0 1 .142 1.307 2.256 2.256 0 0 1-.787.985c-.203.16-.442.269-.696.317a4.052 4.052 0 0 1-1.215 0 3.982 3.982 0 0 1-1.005-.353 6.788 6.788 0 0 1-1.49-1.029 5.173 5.173 0 0 1-1.075-1.288 2.424 2.424 0 0 1-.3-.817 1.591 1.591 0 0 1 .117-.919 2.928 2.928 0 0 1 1.073-1.15c.195-.134.388-.246.575-.356.099-.058.2-.11.305-.157a1.61 1.61 0 0 1 .418-.13 2.452 2.452 0 0 1 1.454.234c.372.177.712.414 1.006.703.312.306.556.675.714 1.082.12.286.196.589.224.898ZM55.486 82.825c1.306-.593 1.975-.044 2.383 1.48.334 1.246-.928 3.272-2.231 3.866-1.304.593-1.957-.544-2.49-1.717-.535-1.173 1.034-3.036 2.338-3.629Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M55.492 82.84c.007.179-.494.5-.946 1.024-.433.43-.738.971-.881 1.565a.953.953 0 0 0 .146.734c.194.328.414.639.659.93.084.1.186.187.299.254.05.03.11.043.167.035.193-.049.372-.142.523-.27a4.555 4.555 0 0 0 1.073-1.267 2.84 2.84 0 0 0 .45-1.272 2.638 2.638 0 0 0-.059-.382 3.514 3.514 0 0 0-.085-.365 2.073 2.073 0 0 0-.198-.498.528.528 0 0 0-.372-.228 2.393 2.393 0 0 0-.66-.004c.1-.315.298-.59.566-.784a1.364 1.364 0 0 1 1.31-.117c.393.171.73.45.97.806.156.206.26.447.303.702.053.404.044.813-.025 1.215a3.95 3.95 0 0 1-.372.998 6.77 6.77 0 0 1-1.057 1.47 5.171 5.171 0 0 1-1.307 1.05c-.255.143-.534.24-.824.284-.311.047-.63 0-.916-.135a2.932 2.932 0 0 1-1.129-1.097 8.477 8.477 0 0 1-.344-.583 3.015 3.015 0 0 1-.154-.308c-.06-.135-.1-.277-.122-.422a2.443 2.443 0 0 1 .262-1.45 3.68 3.68 0 0 1 .722-.992 3.057 3.057 0 0 1 1.098-.694c.289-.113.594-.18.903-.2ZM80.706 50.058c-2.919 1.397-5.966 1.376-8.515-.956-4.046-3.702-2.682-9.757-1.05-12.212 2.942-4.431 25.587-30.306 30.515-32.665 1.115-.534 1.809-.121 2.123.174.898.84 4.425-1.979-18.573 40.525-1.036 2.043-2.749 4.298-4.5 5.134Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M80.7 50.043c.09-.096.422-.285.868-.666a11.174 11.174 0 0 0 1.589-1.68 16.563 16.563 0 0 0 1.72-2.73l1.798-3.44c2.523-4.81 5.372-10.271 6.872-13.354 1.85-3.789 3.799-7.766 5.716-11.829.955-2.032 1.901-4.088 2.77-6.159.431-1.034.852-2.077 1.182-3.108.164-.477.285-.969.362-1.468.024-.215.012-.203 0-.236a.076.076 0 0 0-.038-.03l-.01-.006-.059-.03a2.372 2.372 0 0 1-.328-.233.691.691 0 0 0-.633-.148 1.807 1.807 0 0 0-.458.162c-.178.115-.345.18-.535.325a21.809 21.809 0 0 0-2.203 1.777c-1.434 1.282-2.8 2.631-4.126 3.973-3.818 3.888-7.491 7.905-11.043 11.846-3.541 3.949-6.97 7.833-10.115 11.612-.772.94-1.566 1.897-2.2 2.813a9.476 9.476 0 0 0-1.227 3 9.36 9.36 0 0 0 .491 6.143 7.214 7.214 0 0 0 4.226 3.724c1.76.447 3.62.266 5.261-.513a8.613 8.613 0 0 1-2.382 1.105 6.812 6.812 0 0 1-3.1.169 8.005 8.005 0 0 1-5.436-4.206 9.462 9.462 0 0 1-1.001-3.394 11.904 11.904 0 0 1 .133-3.24c.16-.926.43-1.828.806-2.689.17-.372.366-.731.584-1.076.178-.276.37-.543.575-.799 1.396-1.747 2.815-3.34 4.22-4.932l4.181-4.647a796.523 796.523 0 0 1 8.103-8.76c2.644-2.808 5.233-5.504 7.819-8.05 1.297-1.27 2.588-2.504 3.939-3.65a15.915 15.915 0 0 1 2.152-1.597c.416-.268.891-.43 1.383-.47a2.032 2.032 0 0 1 1.474.507.933.933 0 0 0 .228.138 1.15 1.15 0 0 1 .674 1.104c.001.258-.022.516-.07.77a7.735 7.735 0 0 1-.156.669 26.316 26.316 0 0 1-.854 2.491c-.635 1.602-1.322 3.142-2.01 4.649a297.102 297.102 0 0 1-4.174 8.632 451.72 451.72 0 0 1-8.025 15.274c-1.192 2.196-2.905 5.13-4.432 7.717a14.921 14.921 0 0 1-2.523 3.18 6.906 6.906 0 0 1-1.989 1.36Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M86.539 40.99c-6.647 1.58-8.956-6.758-7.654-12.419-1.792 1.738-4.454 5.27-6.038 6.832-.582 6.095 2.928 12.68 10.513 10.877.151-.043.3-.098.442-.164",
				fill: "#00CCC0"
			}), t.a.createElement("path", {
				d: "M83.808 46.13c-.1.108-.223.192-.358.248a6.569 6.569 0 0 1-.855.246l-.57.135-.658.062c-.23.016-.47.046-.719.052l-.765-.048-.395-.027a7.262 7.262 0 0 1-.394-.083l-.793-.178c-.508-.168-.999-.384-1.466-.645a8.782 8.782 0 0 1-2.084-1.635 10.067 10.067 0 0 1-1.962-3.112 13.049 13.049 0 0 1-.836-3.73c-.015-.323-.044-.646-.046-.97l.04-1.156c-.065-.327.221-.46.382-.665l.221-.237.145-.163.575-.668c.762-.905 1.504-1.839 2.243-2.743l.38-.462.628-.74.714-.808c.238-.264.47-.499.708-.75l2.675-2.691-.673 3.236c-.084.48-.203 1.003-.258 1.443-.035.418-.088.846-.11 1.25-.006.1-.005.2-.007.3l-.003.18c0 .093-.005.187 0 .28.006.186 0 .372.014.557.015.37.043.737.084 1.098.136 1.385.52 2.735 1.131 3.986a5.577 5.577 0 0 0 2.463 2.568c.505.24 1.045.395 1.6.458a7.556 7.556 0 0 0 1.614-.018 4.81 4.81 0 0 1-3.39.727 5.194 5.194 0 0 1-1.342-.428 5.941 5.941 0 0 1-2.069-1.645 5.641 5.641 0 0 1-.956-1.632 15.124 15.124 0 0 1-.8-4.545 20.945 20.945 0 0 1 .013-1.36c.006-.09.01-.19.015-.205l.032-.233c.047-.325.112-.703.204-1.098l.063-.261c.027-.074-.024-.003-.042.005l-.075.065c-.101.09-.205.188-.309.292-.209.209-.418.434-.646.686-.203.225-.61.698-.94 1.088L75.22 33.36l-.993 1.172-.502.57-.418.455a.102.102 0 0 0-.035.1l-.003.11-.01.314a6.234 6.234 0 0 0-.007.699c.01.456.046.91.11 1.362a10.72 10.72 0 0 0 1.712 4.704 7.532 7.532 0 0 0 3.345 2.77 9.27 9.27 0 0 0 3.042.65c.489.034.98.029 1.469-.014.296-.005.591-.045.878-.12Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M88.663 17.99c-1.818 1.81-3.495 3.835-5.29 5.649.037 4.617 2.687 9.042 7.475 9.443.447-.72 1.638-3.097 2.079-3.809-4.473-1.378-6.002-7.734-4.264-11.283Z",
				fill: "#00CCC0"
			}), t.a.createElement("path", {
				d: "M88.678 17.997a.82.82 0 0 1-.034.366c-.043.183-.118.418-.164.715a9.127 9.127 0 0 0-.189 2.193 9.45 9.45 0 0 0 .407 2.494 7.32 7.32 0 0 0 .837 1.864 7.545 7.545 0 0 0 1.847 1.987c.18.135.37.256.57.362l.3.151.074.038c.057.035.117.064.179.089l.329.123.664.244.337.124.17.063.085.031c.03.01.067.018.035.049-.224.4-.474.822-.696 1.238-.8 1.524-.849 1.768-1.68 3.289l-.37.636c-.019.081-.096.025-.148.032l-.17-.02-.341-.04a10.344 10.344 0 0 1-1.203-.173 8.27 8.27 0 0 1-5.764-4.489c-.431-.81-.753-1.672-.958-2.566-.102-.429-.182-.863-.24-1.3-.031-.435-.09-.861-.08-1.286l-.008-.493-.006-.272-.003-.135c-.004-.046.052-.066.077-.1l.656-.635.811-.773 1.557-1.493c1.011-.96 1.98-1.825 2.893-2.532a25.355 25.355 0 0 1-1.927 3.57 20.807 20.807 0 0 1-1.16 1.651c-.187.239-.369.453-.538.637a6.743 6.743 0 0 1-.245.252l-.113.104c-.04.037-.02.01-.034.02a.219.219 0 0 0-.08.012.102.102 0 0 0-.025.019c-.007.027-.01.146-.017.215-.022.323 0 .643 0 .965.04.63.14 1.257.299 1.869a8.157 8.157 0 0 0 1.628 3.221 6.686 6.686 0 0 0 2.763 1.946c.255.1.519.18.787.237.209.058.422.097.638.117l.139.017c.021 0 .049.011.066.004l.032-.056.124-.225.348-.664.732-1.444.238-.478.094-.184c.011-.028.043-.063.036-.084l-.104-.036c-.134-.05-.27-.084-.387-.141-.026-.014.008.008-.037-.017l-.09-.05-.18-.096-.356-.197-.643-.477c-.206-.164-.383-.358-.575-.535a8.598 8.598 0 0 1-1.635-2.471 10.078 10.078 0 0 1-.693-2.647 7.935 7.935 0 0 1 .256-2.94 7.63 7.63 0 0 1 .47-1.231c.196-.317.342-.55.415-.664Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M98.206 7.887a489.85 489.85 0 0 0-5.411 5.6c.157 3.01.796 6.817 4.468 7.446 0 0 1.538-2.98 1.993-3.878-2.445-1.862-1.806-6.282-1.05-9.168Z",
				fill: "#00CCC0"
			}), t.a.createElement("path", {
				d: "M98.221 7.893c.134.166-.117 1.345-.235 2.715a9.465 9.465 0 0 0 .239 3.69c.206.67.568 1.281 1.055 1.784.222.23.523.462.791.703l.105.09.025.023a.16.16 0 0 1-.012.03l-.028.059-.114.241-.232.49-.346.742-.262.575-.537 1.15-.337.703c-.174.362-.358.706-.544 1.052-.024.136-.152.042-.24.038l-.286-.062-.575-.128a3.374 3.374 0 0 1-.565-.153l-.394-.142a6.747 6.747 0 0 1-.676-.333c-.219-.123-.418-.282-.62-.424a5.872 5.872 0 0 1-1.557-1.976 9.14 9.14 0 0 1-.744-2.2 14.356 14.356 0 0 1-.268-2.138l-.034-.68-.018-.432c.007-.069-.029-.149.014-.209l.168-.167c.532-.532.647-.631.905-.876a65.931 65.931 0 0 1 5.097-4.378c-.53 1.793-2.297 4.495-3.192 5.203l-.667.534-.327.267-.077.063-.024.008-.052.02c-.046.003-.047.063-.06.112l-.016.08-.007.045v.099c-.004.261-.006.527.004.784.011.992.186 1.976.52 2.91.3.85.857 1.586 1.594 2.107.184.107.369.215.56.303l.28.105c.065.028.133.05.202.064l.204.044.1.022c.03 0 .035-.052.052-.077l.176-.366c.384-.793.754-1.562 1.113-2.306l.174-.377.061-.14c.02-.044-.067-.07-.093-.104l-.12-.095a.308.308 0 0 1-.025-.027c-.008-.01-.005-.005 0 .005l-.028-.032-.11-.128c-.073-.085-.149-.17-.217-.258l-.179-.278a5.894 5.894 0 0 1-.8-2.323 8.756 8.756 0 0 1-.022-2.206 9.775 9.775 0 0 1 .545-2.29c.187-.531.407-1.05.656-1.555ZM64.282 64.536c-2.083.464 1.123 2.224 3.345 2.734 9.513 2.183 16.58-1.35 18.902-8.658.529-1.665 1.027-4.24-.266-3.067",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M86.25 55.533a.492.492 0 0 1 .177-.276.673.673 0 0 1 .304-.173c.1-.02.203-.001.289.052a.523.523 0 0 1 .189.227c.11.315.15.651.112.983a8.61 8.61 0 0 1-.138 1.074 20.366 20.366 0 0 1-1.272 3.966 11.694 11.694 0 0 1-3.241 4.339 13.54 13.54 0 0 1-4.944 2.581 17.933 17.933 0 0 1-8.914.135 19.478 19.478 0 0 1-1.978-.541 11.069 11.069 0 0 1-1.768-.837 6.28 6.28 0 0 1-1.481-1.143 1.95 1.95 0 0 1-.304-.453.994.994 0 0 1-.092-.348.717.717 0 0 1 .099-.422.886.886 0 0 1 .5-.37c.14-.043.283-.07.429-.082-.241.145-.432.36-.547.617-.03.274.239.37.464.486.529.205 1.074.367 1.629.483.558.127 1.098.232 1.55.318l.616.116c.171.028.34.068.504.121a16.353 16.353 0 0 0 6.462.941 12.51 12.51 0 0 0 5.5-1.637 11.53 11.53 0 0 0 3.65-3.392 18.264 18.264 0 0 0 1.987-3.885c.209-.614.553-1.455.75-2.207.046-.173.078-.35.095-.53.008-.162-.008-.292-.072-.317a.49.49 0 0 0-.327.056c-.1.043-.176.09-.228.118Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M57.221 37.971c-.845.325-1.714.583-2.599.771-.732.161-1.55.448-2.45.732l-1.401.44c-.484.145-.96.361-1.455.543a47.867 47.867 0 0 0-10.356 5.326 60.208 60.208 0 0 0-11 9.798 61.76 61.76 0 0 0-8.405 12.356l-1.384 2.846c-.45.95-.825 1.934-1.242 2.893a59.702 59.702 0 0 0-2.105 5.849c-.623 1.954-1.097 3.924-1.538 5.864-.186.977-.41 1.939-.553 2.904l-.239 1.437-.187 1.428c-.848 6.67-.67 13.429.529 20.045a38.824 38.824 0 0 1-2.441-9.429 36.667 36.667 0 0 1-.224-8.601c.788-6.569 2.456-13.001 4.96-19.125a71.143 71.143 0 0 1 8.467-15.145c6.454-8.76 14.322-14.663 21.98-17.866.454-.194.941-.418 1.474-.618l1.68-.562c.578-.183 1.16-.395 1.755-.553l1.766-.43c.575-.132 1.123-.281 1.647-.378l1.453-.235 1.868-.29Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M28.48 94.98c.096.258.136.534.118.81v.74c0 .28.013.592.02.93a37.536 37.536 0 0 0 1.725 10.687 30.841 30.841 0 0 0 1.72 4.422 47.063 47.063 0 0 0 3.24 5.635 25.907 25.907 0 0 0 4.257 4.922c.764.658 1.61 1.214 2.518 1.654.77.387 1.628.562 2.488.506a4.25 4.25 0 0 0 2.174-.883l.507-.409.53-.523c.182-.165.333-.369.5-.55a6.94 6.94 0 0 0 .475-.572c2.152-2.734 3.435-6.206 4.2-9.692a45.777 45.777 0 0 0 .937-10.493 63.596 63.596 0 0 0-3.003-17.87c1.717 1.706 3.596 4.682 4.838 7.755 1.258 3.062 1.902 6.164 1.893 7.811.015 3.2-.23 6.396-.732 9.557a39.486 39.486 0 0 1-2.363 8.647 22.784 22.784 0 0 1-4.528 7.141 9.371 9.371 0 0 1-3.465 2.408 6.791 6.791 0 0 1-4.2.104 10.914 10.914 0 0 1-3.51-1.797 19.362 19.362 0 0 1-2.722-2.514 30.451 30.451 0 0 1-3.992-5.658 37.373 37.373 0 0 1-4.193-11.648 25.567 25.567 0 0 1-.295-6.522c.125-1.559.414-3.1.863-4.599Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M57.11 105.168c.934-.255 1.886-.44 2.849-.554l2.69-.534c.985-.233 2.054-.476 3.15-.757a66.7 66.7 0 0 0 6.56-2.11 45.374 45.374 0 0 0 2.88-1.177c.882-.365 1.646-.754 2.285-1.072 1.138-.543 2.248-1.186 3.392-1.802.564-.322 1.12-.666 1.687-1l.848-.507.832-.542a60.146 60.146 0 0 0 6.49-4.77 46.85 46.85 0 0 0 5.755-5.641 32.346 32.346 0 0 0 4.171-6.59 37.574 37.574 0 0 0 3.45-12.725c.378-4.193.011-8.42-1.086-12.484a29.302 29.302 0 0 0-2.109-5.488 26.867 26.867 0 0 0-2.95-4.687 26.36 26.36 0 0 0-3.529-3.743 30.5 30.5 0 0 0-3.759-2.818c.616.261 1.322.535 2.045.902.768.393 1.512.831 2.227 1.312.78.518 1.53 1.08 2.245 1.685a25.303 25.303 0 0 1 2.063 2.013 23.236 23.236 0 0 1 4.852 7.971c.325.905.548 1.83.795 2.74.198.922.411 1.83.539 2.746.168.909.236 1.824.339 2.725.05.906.128 1.801.119 2.693a40.076 40.076 0 0 1-1.202 10.23c-1.647 6.442-4.75 12.092-8.877 16.261a53.556 53.556 0 0 1-6.347 5.588c-1.071.846-2.195 1.581-3.277 2.336-1.117.7-2.199 1.42-3.317 2.034a60.302 60.302 0 0 1-13.096 5.661 50.08 50.08 0 0 1-7.333 1.605c-2.501.357-4.673.45-5.382.499Z",
				fill: "#02315C"
			}));
			var ta = a => t.a.createElement("svg", {
				className: a.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, t.a.createElement("path", {
				d: "M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18Z",
				fill: "#FF4500"
			}), t.a.createElement("path", {
				d: "M29.997 18a2.622 2.622 0 0 0-4.447-1.888 12.851 12.851 0 0 0-7.019-2.226l1.196-5.626 3.907.829a1.878 1.878 0 1 0 .192-.918l-4.363-.927a.465.465 0 0 0-.352.065.47.47 0 0 0-.204.296l-1.335 6.278c-2.541.023-5.02.796-7.122 2.223a2.623 2.623 0 1 0-2.889 4.288 5.142 5.142 0 0 0-.062.794c0 4.038 4.7 7.31 10.5 7.31 5.798 0 10.5-3.274 10.5-7.31a5.17 5.17 0 0 0-.062-.79A2.623 2.623 0 0 0 29.997 18ZM12 19.875a1.874 1.874 0 1 1 3.749-.002 1.874 1.874 0 0 1-3.749.002Zm10.455 4.955c-1.281 1.278-3.73 1.377-4.453 1.377-.722 0-3.174-.1-4.451-1.377a.485.485 0 1 1 .687-.687c.806.806 2.532 1.092 3.764 1.092 1.233 0 2.958-.286 3.766-1.092a.485.485 0 1 1 .687.687Zm-.33-3.08a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M58.913 28.295H54.24l-3.68-6.456c-.353.017-.623.026-.808.025h-1.541v6.431h-4.146V9.673h6.722a7.852 7.852 0 0 1 3.322.675 5.33 5.33 0 0 1 2.3 1.965c.572.92.863 1.987.833 3.07a6.274 6.274 0 0 1-.739 3.026 5.998 5.998 0 0 1-2.116 2.243l4.526 7.643ZM48.21 18.491h2.087a3.43 3.43 0 0 0 1.504-.316c.42-.195.774-.507 1.02-.898a2.48 2.48 0 0 0 .367-1.352 2.361 2.361 0 0 0-1.434-2.249 3.835 3.835 0 0 0-1.61-.316H48.21l-.001 5.131ZM71.496 22.787H62.35a3.508 3.508 0 0 0 1.295 1.863c.647.46 1.425.697 2.218.676a6.154 6.154 0 0 0 1.832-.29 4.585 4.585 0 0 0 1.44-.683l1.238 2.982a6.473 6.473 0 0 1-1.96.846 9.56 9.56 0 0 1-2.487.316 7.848 7.848 0 0 1-3.803-.884 6.207 6.207 0 0 1-2.514-2.464 7.266 7.266 0 0 1-.885-3.613 7.316 7.316 0 0 1 .91-3.683 6.439 6.439 0 0 1 2.445-2.47 6.677 6.677 0 0 1 3.354-.872 6.4 6.4 0 0 1 3.177.803 5.853 5.853 0 0 1 2.262 2.255 6.572 6.572 0 0 1 .827 3.31 9.14 9.14 0 0 1-.201 1.908Zm-3.474-2.502a2.556 2.556 0 0 0-.726-1.92 2.625 2.625 0 0 0-1.915-.708 2.95 2.95 0 0 0-2.015.714 3.455 3.455 0 0 0-1.08 1.914h5.736ZM83.423 8.838h3.992v19.457h-3.804v-1.63h-.063a5.344 5.344 0 0 1-4.119 1.832 6.087 6.087 0 0 1-5.42-3.253 7.63 7.63 0 0 1-.871-3.734 7.522 7.522 0 0 1 .904-3.783 6.201 6.201 0 0 1 2.369-2.407 6.332 6.332 0 0 1 3.146-.822 5.532 5.532 0 0 1 2.09.386c.63.253 1.204.629 1.688 1.105h.088V8.84Zm-1.46 15.78c.507-.307.92-.746 1.196-1.27.3-.57.453-1.206.44-1.85a3.89 3.89 0 0 0-.423-1.832 3.156 3.156 0 0 0-1.174-1.264 3.22 3.22 0 0 0-1.7-.455 3.254 3.254 0 0 0-1.699.449c-.502.3-.91.733-1.181 1.25a3.807 3.807 0 0 0-.43 1.826c-.01.64.135 1.273.423 1.845.267.53.676.977 1.182 1.288a3.303 3.303 0 0 0 3.367.013ZM99.318 8.838h3.992v19.457h-3.803v-1.63h-.063a5.344 5.344 0 0 1-4.119 1.832 6.088 6.088 0 0 1-5.42-3.253 7.63 7.63 0 0 1-.871-3.734 7.523 7.523 0 0 1 .904-3.783 6.2 6.2 0 0 1 2.37-2.407 6.332 6.332 0 0 1 3.145-.822 5.533 5.533 0 0 1 2.092.386 5.12 5.12 0 0 1 1.686 1.105h.089l-.002-7.15Zm-1.46 15.78a3.271 3.271 0 0 0 1.193-1.27c.302-.569.454-1.206.443-1.85a3.895 3.895 0 0 0-.424-1.832 3.155 3.155 0 0 0-1.174-1.264 3.22 3.22 0 0 0-1.7-.454 3.254 3.254 0 0 0-1.699.448c-.502.3-.91.733-1.181 1.251a3.805 3.805 0 0 0-.43 1.826c-.01.64.136 1.272.424 1.844a3.2 3.2 0 0 0 1.18 1.289 3.305 3.305 0 0 0 3.367.012ZM106.671 12.806a2.48 2.48 0 0 1-.878-3.348c.209-.364.512-.666.878-.872.378-.212.805-.32 1.238-.315a2.443 2.443 0 0 1 2.426 2.436 2.431 2.431 0 0 1-1.2 2.1 2.477 2.477 0 0 1-2.464 0Zm3.221 15.49H105.9V14.7h3.992v13.594ZM118.284 14.702h2.918v3.399h-2.918v10.195h-3.995V18.101h-2.906v-3.399h2.906V10.81h3.995v3.892ZM143.148 28.295h-4.673l-3.677-6.456c-.353.017-.623.026-.808.025h-1.542v6.431h-4.145V9.673h6.721a7.85 7.85 0 0 1 3.323.675 5.334 5.334 0 0 1 2.299 1.965c.573.92.863 1.987.833 3.07a6.259 6.259 0 0 1-.739 3.026 5.988 5.988 0 0 1-2.116 2.243l4.524 7.643Zm-10.703-9.804h2.085a3.43 3.43 0 0 0 1.503-.316 2.414 2.414 0 0 0 1.025-.898c.249-.406.377-.875.366-1.352a2.45 2.45 0 0 0-.373-1.35 2.43 2.43 0 0 0-1.061-.898 3.838 3.838 0 0 0-1.611-.315h-1.933l-.001 5.13ZM155.731 22.787h-9.146a3.507 3.507 0 0 0 1.295 1.863c.646.46 1.425.696 2.218.676a6.153 6.153 0 0 0 1.831-.29 4.571 4.571 0 0 0 1.44-.683l1.239 2.982a6.472 6.472 0 0 1-1.96.846 9.562 9.562 0 0 1-2.489.316 7.849 7.849 0 0 1-3.803-.884 6.213 6.213 0 0 1-2.514-2.464 7.267 7.267 0 0 1-.884-3.613 7.302 7.302 0 0 1 .909-3.683 6.435 6.435 0 0 1 2.445-2.47 6.676 6.676 0 0 1 3.354-.872 6.394 6.394 0 0 1 3.177.803 5.848 5.848 0 0 1 2.262 2.255 6.57 6.57 0 0 1 .829 3.31 9.2 9.2 0 0 1-.203 1.908Zm-3.474-2.502a2.56 2.56 0 0 0-.727-1.92 2.615 2.615 0 0 0-1.914-.708 2.95 2.95 0 0 0-2.013.712 3.452 3.452 0 0 0-1.08 1.915h5.734ZM161.081 27.525A7.068 7.068 0 0 1 158.422 25a6.868 6.868 0 0 1-.985-3.528 6.867 6.867 0 0 1 .966-3.534 7.003 7.003 0 0 1 2.616-2.514 7.232 7.232 0 0 1 3.594-.923 7.688 7.688 0 0 1 2.236.327 7.312 7.312 0 0 1 1.971.922l-1.466 3.21a3.718 3.718 0 0 0-1.2-.752 3.96 3.96 0 0 0-1.44-.26 3.503 3.503 0 0 0-1.838.474 3.223 3.223 0 0 0-1.213 1.27 3.826 3.826 0 0 0 .019 3.531 3.355 3.355 0 0 0 3.019 1.775 4.493 4.493 0 0 0 1.548-.277 3.382 3.382 0 0 0 1.156-.645l1.428 3.272a7.553 7.553 0 0 1-1.851.79 7.97 7.97 0 0 1-2.23.31 7.483 7.483 0 0 1-3.671-.923ZM179.724 14.689h3.802v13.607h-3.802v-1.63h-.088a5.343 5.343 0 0 1-4.119 1.832 6.083 6.083 0 0 1-5.42-3.254 7.648 7.648 0 0 1-.872-3.733 7.532 7.532 0 0 1 .898-3.771 6.186 6.186 0 0 1 2.368-2.412 6.354 6.354 0 0 1 3.166-.829 5.483 5.483 0 0 1 2.248.448c.673.299 1.272.74 1.756 1.295h.064l-.001-1.553Zm-1.674 9.93a3.267 3.267 0 0 0 1.193-1.27c.302-.57.454-1.206.443-1.85a3.885 3.885 0 0 0-.424-1.832 3.15 3.15 0 0 0-1.174-1.264 3.223 3.223 0 0 0-1.7-.455 3.252 3.252 0 0 0-1.699.449c-.502.3-.911.733-1.181 1.25a3.813 3.813 0 0 0-.43 1.826c-.01.64.135 1.273.423 1.845.267.53.676.976 1.181 1.288a3.307 3.307 0 0 0 3.368.013ZM199.635 25.206a6.18 6.18 0 0 1-2.299 2.438 6.06 6.06 0 0 1-3.146.853 5.503 5.503 0 0 1-2.198-.43 5.284 5.284 0 0 1-1.756-1.225h-.101v6.797l-3.992-.038v-18.9h3.789v1.604h.076a5.084 5.084 0 0 1 1.769-1.34 5.436 5.436 0 0 1 2.286-.467 6.312 6.312 0 0 1 3.178.84 6.226 6.226 0 0 1 2.362 2.432 7.52 7.52 0 0 1 .891 3.74 7.635 7.635 0 0 1-.859 3.696Zm-4.598-.607a3.125 3.125 0 0 0 1.176-1.276c.284-.57.427-1.2.416-1.838a3.885 3.885 0 0 0-.423-1.832 3.103 3.103 0 0 0-1.174-1.257 3.28 3.28 0 0 0-1.716-.449 3.22 3.22 0 0 0-1.693.449 3.119 3.119 0 0 0-1.168 1.257 4.225 4.225 0 0 0 0 3.69c.265.52.67.957 1.168 1.262a3.27 3.27 0 0 0 1.693.468 3.316 3.316 0 0 0 1.72-.474h.001Z",
				fill: "#FF4500"
			}));
			var ra = a => t.a.createElement("svg", {
				className: a.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, t.a.createElement("path", {
				d: "M30.719 41h-9.344l-7.363-12.95c-.745.035-1.304.052-1.676.052H9.289V41H.961V3.549h13.457c2.471 0 4.689.457 6.652 1.37 1.964.898 3.513 2.218 4.647 3.962 1.134 1.743 1.701 3.817 1.701 6.22 0 2.218-.5 4.25-1.498 6.094-.999 1.828-2.42 3.318-4.266 4.47L30.72 41ZM9.289 21.297h4.164c1.134 0 2.141-.212 3.022-.635.88-.44 1.565-1.05 2.056-1.828.508-.779.762-1.667.762-2.666 0-1.033-.262-1.938-.787-2.717-.525-.795-1.253-1.405-2.184-1.828-.914-.423-1.972-.635-3.174-.635H9.29v10.309Zm46.708 5.18c0 1.066-.127 2.217-.381 3.453H37.208c.474 1.574 1.337 2.818 2.59 3.732 1.252.897 2.75 1.346 4.494 1.346a12.88 12.88 0 0 0 3.681-.559c1.253-.372 2.226-.83 2.92-1.37l2.488 5.991c-1.1.728-2.437 1.304-4.011 1.727-1.558.406-3.2.61-4.926.61-2.945 0-5.518-.602-7.719-1.803-2.2-1.22-3.885-2.878-5.053-4.977-1.168-2.116-1.752-4.494-1.752-7.135 0-2.59.56-4.968 1.676-7.135 1.134-2.166 2.726-3.884 4.774-5.154 2.048-1.286 4.392-1.93 7.033-1.93 2.454 0 4.63.559 6.525 1.676 1.913 1.117 3.403 2.675 4.469 4.672 1.066 1.998 1.6 4.283 1.6 6.856Zm-7.389-1.625c.017-1.625-.465-2.912-1.447-3.86s-2.277-1.422-3.885-1.422c-1.591 0-2.928.483-4.012 1.448-1.083.964-1.811 2.242-2.183 3.834h11.527ZM79.04 1.898h8.024V41h-7.668v-3.148h-.102a10.691 10.691 0 0 1-3.605 2.64c-1.388.61-2.912.914-4.57.914-2.32 0-4.444-.584-6.374-1.752-1.93-1.168-3.461-2.81-4.596-4.926-1.117-2.132-1.675-4.587-1.675-7.363 0-2.827.575-5.306 1.726-7.44 1.168-2.149 2.734-3.8 4.698-4.95 1.963-1.168 4.104-1.752 6.423-1.752 1.524 0 2.92.254 4.19.761a10.068 10.068 0 0 1 3.351 2.184h.178V1.898ZM72.87 34.5c1.219 0 2.328-.288 3.326-.863 1-.593 1.786-1.422 2.362-2.489.592-1.083.888-2.344.888-3.783s-.287-2.7-.863-3.783c-.575-1.1-1.371-1.947-2.387-2.539-.998-.61-2.107-.914-3.326-.914-1.27 0-2.412.313-3.428.94-.998.626-1.785 1.489-2.36 2.59-.56 1.082-.839 2.293-.839 3.63 0 1.32.271 2.53.813 3.63.558 1.101 1.337 1.973 2.336 2.616 1.015.643 2.175.965 3.478.965Zm38.075-32.602h8.023V41H111.3v-3.148h-.101a10.696 10.696 0 0 1-3.606 2.64c-1.388.61-2.911.914-4.57.914-2.319 0-4.443-.584-6.373-1.752-1.93-1.168-3.462-2.81-4.596-4.926-1.117-2.132-1.675-4.587-1.675-7.363 0-2.827.575-5.306 1.726-7.44 1.168-2.149 2.734-3.8 4.697-4.95 1.964-1.168 4.105-1.752 6.424-1.752 1.524 0 2.92.254 4.19.761a10.073 10.073 0 0 1 3.351 2.184h.178V1.898Zm-6.17 32.602c1.219 0 2.328-.288 3.326-.863.999-.593 1.786-1.422 2.362-2.489.592-1.083.888-2.344.888-3.783s-.288-2.7-.863-3.783c-.576-1.1-1.371-1.947-2.387-2.539-.998-.61-2.107-.914-3.326-.914-1.269 0-2.412.313-3.428.94-.998.626-1.785 1.489-2.361 2.59-.559 1.082-.838 2.293-.838 3.63 0 1.32.271 2.53.813 3.63.558 1.101 1.337 1.973 2.336 2.616 1.015.643 2.175.965 3.478.965ZM132.44 41h-8.075V13.68h8.075V41Zm-4.012-30.469a4.9 4.9 0 0 1-2.463-.635 4.965 4.965 0 0 1-1.777-1.777 4.9 4.9 0 0 1-.635-2.463 4.9 4.9 0 0 1 .635-2.463 4.767 4.767 0 0 1 1.777-1.752 4.753 4.753 0 0 1 2.463-.66c.897 0 1.718.22 2.463.66a4.582 4.582 0 0 1 1.752 1.752c.44.745.66 1.566.66 2.463s-.22 1.718-.66 2.463a4.767 4.767 0 0 1-1.752 1.777 4.9 4.9 0 0 1-2.463.635Zm20.581 3.149h5.789v6.855h-5.789V41h-8.024V20.535h-5.89V13.68h5.89V5.86h8.024v7.82ZM30.719 93h-9.344l-7.363-12.95c-.745.035-1.304.052-1.676.052H9.289V93H.961V55.549h13.457c2.471 0 4.689.457 6.652 1.37 1.964.898 3.513 2.218 4.647 3.962 1.134 1.743 1.701 3.817 1.701 6.22 0 2.218-.5 4.25-1.498 6.094-.999 1.828-2.42 3.318-4.266 4.47L30.72 93ZM9.289 73.297h4.164c1.134 0 2.141-.212 3.022-.635.88-.44 1.565-1.05 2.056-1.828.508-.779.762-1.667.762-2.666 0-1.033-.262-1.938-.787-2.717-.525-.795-1.253-1.405-2.184-1.828-.914-.423-1.972-.635-3.174-.635H9.29v10.309Zm46.708 5.18c0 1.066-.127 2.217-.381 3.453H37.208c.474 1.574 1.337 2.818 2.59 3.732 1.252.897 2.75 1.346 4.494 1.346a12.88 12.88 0 0 0 3.681-.559c1.253-.372 2.226-.83 2.92-1.37l2.488 5.991c-1.1.728-2.437 1.304-4.011 1.727-1.558.406-3.2.61-4.926.61-2.945 0-5.518-.602-7.719-1.803-2.2-1.22-3.885-2.878-5.053-4.977-1.168-2.116-1.752-4.494-1.752-7.135 0-2.59.56-4.968 1.676-7.135 1.134-2.166 2.726-3.884 4.774-5.154 2.048-1.286 4.392-1.93 7.033-1.93 2.454 0 4.63.559 6.525 1.676 1.913 1.117 3.403 2.675 4.469 4.672 1.066 1.998 1.6 4.283 1.6 6.856Zm-7.389-1.625c.017-1.625-.465-2.912-1.447-3.86s-2.277-1.422-3.885-1.422c-1.591 0-2.928.483-4.012 1.448-1.083.964-1.811 2.242-2.183 3.834h11.527Zm24.643 16.453c-2.691 0-5.163-.618-7.414-1.854-2.234-1.235-4.012-2.928-5.332-5.078-1.32-2.15-1.98-4.528-1.98-7.135 0-2.64.66-5.027 1.98-7.16a14.135 14.135 0 0 1 5.307-5.027 14.485 14.485 0 0 1 7.084-1.828c1.54 0 3.046.228 4.52.685 1.472.44 2.81 1.058 4.01 1.854l-2.995 6.449a7.245 7.245 0 0 0-2.438-1.523 7.725 7.725 0 0 0-2.894-.56 7.044 7.044 0 0 0-3.479.89c-1.05.592-1.887 1.43-2.513 2.513-.61 1.067-.915 2.294-.915 3.682 0 1.337.288 2.556.864 3.656a6.64 6.64 0 0 0 2.437 2.59c1.05.626 2.252.94 3.606.94a9.28 9.28 0 0 0 3.047-.508c.981-.356 1.777-.813 2.386-1.372l2.895 6.602c-1.05.643-2.285 1.168-3.707 1.574-1.422.407-2.912.61-4.469.61Zm29.874-27.676h7.566V93h-7.566v-3.3h-.102a10.655 10.655 0 0 1-3.681 2.741c-1.406.644-2.954.965-4.647.965-2.336 0-4.469-.584-6.398-1.752-1.913-1.168-3.437-2.818-4.57-4.95-1.118-2.134-1.677-4.58-1.677-7.339 0-2.827.576-5.306 1.727-7.44 1.168-2.149 2.734-3.8 4.697-4.95 1.964-1.168 4.114-1.752 6.45-1.752 1.658 0 3.173.304 4.544.914 1.372.61 2.556 1.49 3.555 2.64h.102V65.63ZM96.447 86.5c1.219 0 2.327-.288 3.326-.863.999-.593 1.786-1.422 2.361-2.489.593-1.083.889-2.344.889-3.783s-.288-2.7-.863-3.783c-.576-1.1-1.371-1.947-2.387-2.539-.999-.61-2.107-.914-3.326-.914-1.27 0-2.412.313-3.428.94-.999.626-1.786 1.489-2.361 2.59-.559 1.082-.838 2.293-.838 3.63 0 1.32.27 2.53.813 3.63.558 1.101 1.337 1.973 2.335 2.616 1.016.643 2.176.965 3.479.965Zm48.231-7.135c0 2.776-.567 5.23-1.701 7.364-1.117 2.115-2.641 3.757-4.571 4.925-1.929 1.168-4.054 1.752-6.373 1.752-1.608 0-3.089-.288-4.443-.863a10.408 10.408 0 0 1-3.555-2.488h-.076v13.761l-8.023-.101V65.68h7.617v3.199h.051a10.254 10.254 0 0 1 3.605-2.717c1.388-.626 2.929-.94 4.621-.94 2.319 0 4.461.585 6.424 1.753 1.964 1.15 3.521 2.801 4.672 4.95 1.168 2.134 1.752 4.613 1.752 7.44ZM130.281 86.5c1.304 0 2.455-.322 3.454-.965a6.36 6.36 0 0 0 2.336-2.615c.558-1.1.837-2.31.837-3.63 0-1.338-.287-2.549-.863-3.632a6.353 6.353 0 0 0-2.361-2.59c-.999-.626-2.133-.94-3.403-.94a6.393 6.393 0 0 0-3.351.915c-.999.592-1.786 1.439-2.361 2.539-.576 1.083-.864 2.344-.864 3.783s.288 2.7.864 3.783c.592 1.067 1.388 1.896 2.386 2.489.999.575 2.108.863 3.326.863Z",
				fill: "#FF4500"
			}));
			var na = a => t.a.createElement("svg", {
				className: a.className,
				viewBox: "0 0 182 185",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, t.a.createElement("path", {
				d: "M50.328 118.791c-1.814 3.822-.918 7.139-4.264 7.367-5.434.37-5.274-2.649-5.2-4.936.055-1.749 2.41-6.775 8.038-3.973",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M48.888 117.28c-.259.273-1.291-.109-2.438-.143l-.427-.012-.42.054c-.266.036-.526.1-.777.193a3.723 3.723 0 0 0-.618.339 2.012 2.012 0 0 0-.411.393 5.485 5.485 0 0 0-.835 1.512c-.103.27-.186.548-.248.83-.059.242-.087.49-.084.739a.7.7 0 0 1 .011.115l.017.283.036.533c.022.292.065.582.131.868.039.188.109.369.207.534.046.039.065.103.11.118a.24.24 0 0 1 .045.044 2.983 2.983 0 0 0 .838.281c.465.071.936.104 1.406.101.321.011.643 0 .962-.035.022-.005.063.009.071-.004.017-.003.05.01.073-.018a.218.218 0 0 0 .108-.077.64.64 0 0 0 .137-.158c.25-.379.458-.783.622-1.207.21-.48.431-.998.671-1.487a10.186 10.186 0 0 1 1.707-2.545c.447 1.095.8 2.225 1.054 3.379.114.508.167 1.027.157 1.546a3.063 3.063 0 0 1-.09.672c-.041.187-.113.365-.212.528a7.182 7.182 0 0 1-1.448 1.78 4 4 0 0 1-2.18.927c-.32.027-.642.033-.962.016l-.788-.081c-.254-.015-.524-.077-.78-.111a6.38 6.38 0 0 1-.774-.154l-.384-.09-.385-.132c-.127-.047-.253-.082-.38-.137l-.372-.183a4.54 4.54 0 0 1-.71-.451 3.931 3.931 0 0 1-1.303-2.055 7.46 7.46 0 0 1-.232-1.399 26.12 26.12 0 0 1-.049-1.253l-.003-.152.01-.195c.003-.126.014-.252.032-.377.03-.229.076-.455.135-.678a7.077 7.077 0 0 1 1.075-2.329 4.988 4.988 0 0 1 4.167-2.238c.404-.002.805.071 1.183.216.201.072.399.154.592.245.183.11.36.223.525.334.296.192.568.418.808.676.205.201.351.362.42.445Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M46.505 118.432c.007.172-.28.321-.594.491-.295.134-.563.32-.79.55a5.132 5.132 0 0 0-.567.88 1.473 1.473 0 0 0-.122.733.072.072 0 0 1 .016.025c-.003.002.027.021-.059.022a.526.526 0 0 0-.157.033l-.064.029h-.008c.003-.002-.038.023-.01.004a.318.318 0 0 0 .077-.081c-.003-.009.09-.109.122-.173.009-.007-.013.001.004.005.22.103.448.185.682.245a3.279 3.279 0 0 1 1.771 1.038c-.372.229-.73.48-1.072.752-.281.199-.562.294-.701.201-.29-.187-.601-.338-.923-.506a2.255 2.255 0 0 1-.935-.764 1.68 1.68 0 0 1-.13-.295 5.285 5.285 0 0 1-.058-.29 3.28 3.28 0 0 1 .248-1.324c.206-.482.527-.907.935-1.237a2.6 2.6 0 0 1 1.145-.559c.41-.038.821.039 1.19.221Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M55.74 106.627c-5.124 2.76-9.052-.952-9.29-3.34-.238-2.389 1.825-4.96 4.413-5.502-1.669-1.028-1.648-3.608-.18-5.1a5.699 5.699 0 0 1 2.74-1.404 5.73 5.73 0 0 1 3.078.226 5.301 5.301 0 0 1 3.486 4.337 6.19 6.19 0 0 1-.547 2.987 6.158 6.158 0 0 1-1.902 2.362 2.462 2.462 0 0 1 1.606 2.834 3.227 3.227 0 0 1-2.771 2.324",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M56.37 106.318c.058-.129.313-.232.646-.441.42-.251.787-.58 1.083-.969a2.026 2.026 0 0 0 .423-1.591 1.685 1.685 0 0 0-.231-.594.613.613 0 0 0-.059-.09.832.832 0 0 0-.098-.119 10.46 10.46 0 0 0-1.9-.987.403.403 0 0 0-.017-.199c0-.03-.035-.051-.006-.087l.133-.119c.178-.156.356-.321.534-.49.347-.321.676-.661.985-1.02l.176-.249.086-.123c.025-.037.032-.058.05-.088.056-.113.117-.217.16-.325a3.73 3.73 0 0 0 .21-.592 4.304 4.304 0 0 0-.172-2.916 3.952 3.952 0 0 0-1.967-1.937 3.773 3.773 0 0 0-1.326-.321 4.265 4.265 0 0 0-1.388.142 3.36 3.36 0 0 0-1.156.544c-.15.11-.289.236-.413.376a1.819 1.819 0 0 0-.24.381c-.145.293-.204.62-.17.946.007.063.018.126.035.188l.015.037a.519.519 0 0 0 .118.235c.18.143.443.32.66.478l3.253 2.32-3.107.806-.842.216-.419.108-.36.129c-.237.089-.487.167-.71.265l-.153.086-.119.082-.094.062c-.49.337-.903.777-1.208 1.289-.26.414-.405.889-.42 1.378.054.481.245.937.55 1.314a4.949 4.949 0 0 0 2.962 1.88 7.191 7.191 0 0 0 3.577-.233 6.344 6.344 0 0 1-.698 1.021 5.456 5.456 0 0 1-1.096.918c-.219.145-.45.272-.689.381-.247.102-.506.2-.775.293-.27.068-.552.121-.84.171-.29.038-.583.055-.875.052a6.404 6.404 0 0 1-3.242-.932 4.828 4.828 0 0 1-1.812-1.828l-.209-.417-.174-.45a6.058 6.058 0 0 1-.27-.949 5.246 5.246 0 0 1-.094-1.043c.007-.311.04-.621.101-.926a6.655 6.655 0 0 1 1.427-2.963c.32-.387.679-.742 1.07-1.059.184-.163.392-.296.588-.439.098-.07.207-.128.309-.192a.48.48 0 0 1 .109-.06 4.13 4.13 0 0 1 1.016-.294c.023-.006.072-.008.075-.018l-.051-.043a.65.65 0 0 1-.102-.092 1.327 1.327 0 0 1-.252-.384 2.176 2.176 0 0 1-.081-.235l-.049-.19a4.538 4.538 0 0 1 .122-2.417c.215-.66.57-1.264 1.04-1.773a5.668 5.668 0 0 1 1.552-1.165 6.964 6.964 0 0 1 3.551-.735 6.473 6.473 0 0 1 3.342 1.138 6.352 6.352 0 0 1 2.204 2.645 5.974 5.974 0 0 1 .443 3.317 6.96 6.96 0 0 1-1.13 2.891l-.095.143-.055.071c-.036.047-.075.099-.104.129a2.628 2.628 0 0 1-.435.394l-.063.046-.03.024.027.014a.848.848 0 0 1 .326.256.7.7 0 0 1 .114.158l.026.048a.23.23 0 0 0 .03.06 3.183 3.183 0 0 1 .396 1.552 3.002 3.002 0 0 1-.293 1.277 3.196 3.196 0 0 1-.711.951 3.54 3.54 0 0 1-1.665.86 2.88 2.88 0 0 1-1.059.022Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M52.248 101.776c.035.169-.105.304-.204.478a.742.742 0 0 0-.137.523c.089.398.235.781.435 1.137.195.308.363.633.501.97.172.396.279.817.317 1.246-.813.438-1.684.434-1.727.144a23.133 23.133 0 0 0-.616-2.527 2.902 2.902 0 0 1-.037-1.077c.048-.34.221-.65.487-.868a.8.8 0 0 1 .558-.151.987.987 0 0 1 .423.125ZM55.052 94.901c.037.175-.074.285-.158.42a.767.767 0 0 0-.113.201.294.294 0 0 0-.026.198c.101.42.125.672.202.925.066.178.08.37.042.556-.06.264-.07.537-.03.806a1.381 1.381 0 0 1-.984.598c-.348.033-.594-.121-.605-.263a8.828 8.828 0 0 1 .096-1.324l.076-.91c.015-.281.073-.558.173-.821.093-.252.28-.457.52-.576a.676.676 0 0 1 .47.004c.122.042.236.105.337.186Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M69.51 42.453c-6.533-1.987-8.82-8.44-8.308-11.737a8.12 8.12 0 0 1 4.155-5.518c2.112-1.018 5.313-.754 5.645 1.327.058.363.035.784.317 1.025.282.241.737.19 1.139.178 3.002-.089 4.845 3.65 2.931 5.948a4.344 4.344 0 0 1 1.708 2.481 4.316 4.316 0 0 1-.318 2.988 5.763 5.763 0 0 1-5.527 3.02",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M71.259 42.132c.124-.166.67-.21 1.402-.455a6.233 6.233 0 0 0 2.407-1.402 3.959 3.959 0 0 0 1.3-2.636 3.031 3.031 0 0 0-.677-2.152 2.022 2.022 0 0 0-.22-.228 2.94 2.94 0 0 0-.513-.425c-.397-.293-.851-.588-1.302-.884l.526-.865.274-.471a2.104 2.104 0 0 0 .228-.484 2.52 2.52 0 0 1 .03-.184l-.005-.19a2.329 2.329 0 0 0-.035-.38 2.547 2.547 0 0 0-.746-1.34 1.749 1.749 0 0 0-1.208-.484c-.122.011-.15-.003-.439.025a3.404 3.404 0 0 1-1.326-.135c-.399-.131-.76-.359-1.051-.663a2.689 2.689 0 0 1-.593-1.008 3.968 3.968 0 0 1-.149-.658l-.028-.19c-.006-.04-.006-.02-.01-.032a.182.182 0 0 0-.074-.077c-.041-.024-.023.006-.163-.055a3.172 3.172 0 0 0-1.21-.075 4.27 4.27 0 0 0-1.13.29c-.352.15-.682.348-.98.59a7.107 7.107 0 0 0-1.708 1.96 5.521 5.521 0 0 0-.498 1.094 3.776 3.776 0 0 0-.182 1.096 8.783 8.783 0 0 0 .335 2.598 11.744 11.744 0 0 0 2.448 4.6 12.65 12.65 0 0 0 3.729 2.952 8.067 8.067 0 0 1-1.263.218c-.49.018-.98-.002-1.468-.059a8.818 8.818 0 0 1-3.056-1.095 9.389 9.389 0 0 1-1.347-.938 10.356 10.356 0 0 1-1.076-1.076 6.203 6.203 0 0 1-1.175-1.991 13.108 13.108 0 0 1-.49-6.145 7.94 7.94 0 0 1 1.144-2.766 10.705 10.705 0 0 1 1.766-2.085 8.715 8.715 0 0 1 2.2-1.503 7.345 7.345 0 0 1 2.538-.62c.878-.068 1.76.07 2.578.402.455.196.86.493 1.186.868.317.386.529.847.615 1.34l.054.39a.608.608 0 0 0 .037.157c-.006.004.013-.004-.01.007l-.073.035a.757.757 0 0 0-.088.048c-.048.034-.042.033-.036.029a.464.464 0 0 0 .06-.104c.018-.039.033-.079.046-.12.004-.01.005-.003.008-.006.151.01.302.006.452-.01.239-.02.562.001.838.01a4.578 4.578 0 0 1 2.924 1.57 4.924 4.924 0 0 1 1.201 2.96 4.583 4.583 0 0 1-.207 1.613.42.42 0 0 1-.035.096l-.054.128c-.04.08-.093.153-.139.226.107.069.208.147.301.233.043.045.089.086.126.133a.21.21 0 0 1 .005.006l.04.051.08.102a5.32 5.32 0 0 1 1.022 2.946 5.285 5.285 0 0 1-.674 2.783 4.89 4.89 0 0 1-1.472 1.62 5.819 5.819 0 0 1-2.056.925 5.097 5.097 0 0 1-2.934-.11Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M69.38 28.855c.066-.167.884-.417 1.917-.494a4.977 4.977 0 0 1 1.61.152c.452.128.883.325 1.276.583a2.76 2.76 0 0 1 1.22 1.695c.161.75.052 1.533-.307 2.209-.154.312-.34.607-.554.882a7.93 7.93 0 0 1-.317.386c-.055.06-.106.123-.165.181l-.084.088a.288.288 0 0 0-.047.051c-.015.054-.048.083.016.082l.011.001.024.001c.007.001.002-.009.04.023.09.09.176.185.255.285a3.803 3.803 0 0 1 .807 2.348 3.59 3.59 0 0 1-.528 1.875c-.31.502-.72.933-1.204 1.269a5.003 5.003 0 0 1-2.83.872 8.178 8.178 0 0 1-2.271-.384c.606-.403 1.496-.717 2.153-1.056.648-.329 1.106-.691 1.405-.78a2.192 2.192 0 0 0 1.649-1.81 2.19 2.19 0 0 0-.264-1.247 1.513 1.513 0 0 0-.508-.557c-.42-.184-.85-.34-1.29-.468.031-.088-.025-.117.002-.185l.36-.268c.239-.181.471-.363.698-.547.115-.09.217-.188.326-.28a4.58 4.58 0 0 0 .27-.258c.133-.133.259-.272.376-.418.446-.478.71-1.098.747-1.752-.01-1.143-1.122-1.805-2.114-2.043a17.414 17.414 0 0 0-1.5-.279c-.543-.07-1.02-.128-1.18-.157Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M68.717 28.135c-.01.18-.442.358-.887.642-.416.239-.781.559-1.073.94a5.966 5.966 0 0 0-.714 1.505 2.686 2.686 0 0 0-.117.733c-.009.217.021.434.088.641.369.862.811 1.69 1.323 2.477a7.995 7.995 0 0 1 1.007 2.606c-1.094-.157-2.276-.745-2.428-1.205-.286-.914-.695-1.727-1.01-2.546a5.732 5.732 0 0 1-.338-1.258 3.809 3.809 0 0 1 .033-1.24 4.346 4.346 0 0 1 2.391-3.195c.313-.134.65-.2.99-.19.248 0 .494.03.735.09Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M105.319 34.077c-1.803-.849-3.942 1.405-4.126 3.353-.299 3.15 2.305 6.076 5.649 6.347 3.344.27 5.769-.67 6.629-3.777.243-.882.401-1.95 1.276-2.393.629-.32 1.364-.16 2.058-.214a3.333 3.333 0 0 0 2.973-2.71 2.627 2.627 0 0 0-2.361-2.797c-6.001-7.187-12.721-2.847-11.613 1.028",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M105.774 32.922c-.168-.05-.518-.628-.436-1.59a4.318 4.318 0 0 1 1.796-2.943 6.277 6.277 0 0 1 3.835-1.18 9.63 9.63 0 0 1 3.247.682c.826.312 1.61.728 2.332 1.24.358.265.726.537 1.063.844l.26.228.147.123c.071.063.147.122.226.176.109.006.029-.056.528.116.37.139.719.327 1.039.559a4.293 4.293 0 0 1 1.48 1.93 4.11 4.11 0 0 1 .103 2.585 4.903 4.903 0 0 1-1.206 2.049 5.399 5.399 0 0 1-1.91 1.277 5.054 5.054 0 0 1-1.185.3 8.212 8.212 0 0 1-.984.053l-.298.01-.024.013a.077.077 0 0 0-.033.036.079.079 0 0 0-.013.036.073.073 0 0 0 .005.039c-.047.15-.101.38-.167.667-.057.282-.179.686-.296 1.05a7.295 7.295 0 0 1-1.195 2.181 6.376 6.376 0 0 1-2.013 1.641 7.689 7.689 0 0 1-2.269.73 10.24 10.24 0 0 1-2.117.123c-.341-.003-.662-.042-.989-.068a8.788 8.788 0 0 1-1.105-.199 8.015 8.015 0 0 1-3.748-2.107 7.508 7.508 0 0 1-2.005-3.528 6.073 6.073 0 0 1 .253-3.856 5.525 5.525 0 0 1 2.3-2.536 3.678 3.678 0 0 1 1.606-.484 2.647 2.647 0 0 1 1.553.396 2.593 2.593 0 0 0-1.361.43 2.86 2.86 0 0 0-.862.98 4.243 4.243 0 0 0-.551 2.271c.015.141.045.28.09.415.058.166.077.321.14.469.047.142.102.281.166.417.051.127.111.251.179.37.242.468.491.823.606 1.13a4.1 4.1 0 0 0 1.927 2.024c.107.06.219.111.334.152.113.05.229.092.347.126l.358.099.418.073c.54.09 1.088.127 1.635.112a3.884 3.884 0 0 0 2.634-1.01c.34-.334.61-.732.795-1.171.101-.229.189-.463.262-.702l.24-.835c.05-.154.094-.291.166-.47.072-.18.158-.354.255-.521.192-.329.451-.612.761-.832.311-.21.665-.35 1.036-.41.184-.03.37-.048.557-.053l.449-.002c.424.037.85-.024 1.245-.18.363-.155.688-.388.951-.683.241-.264.411-.585.493-.934a1.355 1.355 0 0 0-.1-.873 1.703 1.703 0 0 0-.98-.876L117.64 33c-.029-.012-.155-.03-.228-.044-.168-.034-.347-.055-.523-.08-.214-.198-.4-.422-.6-.632-.091-.096-.215-.239-.278-.296l-.211-.198c-.273-.272-.565-.507-.847-.746a9.891 9.891 0 0 0-1.777-1.13 6.376 6.376 0 0 0-3.578-.671 5.07 5.07 0 0 0-2.879 1.329 3.23 3.23 0 0 0-.813 1.352c-.096.337-.14.688-.132 1.039Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M111.577 34.003c.167.004.439.556.534 1.256.07.653.073 1.31.007 1.963a5.762 5.762 0 0 1-2.724 4.41c-.174.099-.343.201-.527.29-.56.26-1.165.407-1.782.432a4.871 4.871 0 0 1-2.235-.421 3.72 3.72 0 0 1-1.61-1.363 2.564 2.564 0 0 1-.396-1.709c.443.358.952.626 1.497.787.439.126.792.163.936.322a2.852 2.852 0 0 0 2.425.74 2.973 2.973 0 0 0 1.16-.44 4.07 4.07 0 0 0 .915-.766 5.349 5.349 0 0 0 1.053-1.872c.189-.59.33-1.194.421-1.807.032-.272.14-.65.2-1.01.082-.363.094-.694.126-.812Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M114.343 33.027c-.175.04-.475-.333-.889-.685a3.64 3.64 0 0 0-1.244-.772 5.7 5.7 0 0 0-1.678-.24 3.112 3.112 0 0 0-.744.126 1.31 1.31 0 0 0-.494.285c-.448.398-.734 1.282-.888 2.184-.155.903-.235 1.825-.363 2.6a3.139 3.139 0 0 1-1.263-1.127 1.763 1.763 0 0 1-.357-1.224 9.48 9.48 0 0 1 1.195-2.768 3.243 3.243 0 0 1 1.009-.958 3.513 3.513 0 0 1 1.221-.419 4.545 4.545 0 0 1 2.251.248 3.93 3.93 0 0 1 1.615 1.096c.226.265.393.575.49.91.076.242.123.492.139.744Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M79.772 119.785s5.787-2.182 7.313-2.371c1.672-.205 4.228.771 4.53-.96.39 1.616 2.565 2.057 3.91 1.431 1.343-.626 2.365-1.867 3.82-2.224.978-.24 2.059-.052 3.047-.26.987-.207 1.94-1.055 1.704-2.144a3.168 3.168 0 0 0 3.222 1.502c1.171-.181 2.139-.894 3.067-1.591 4.141-3.105 8.325-6.254 11.501-10.423a3.995 3.995 0 0 1 1.269-1.256c.607-.304 1.347-.259 2.025-.389a3.949 3.949 0 0 0 3.076-3.747c1.719.412 3.5.823 5.134.452 1.634-.372 3.079-1.762 2.981-3.578-.046-.84-.41-1.72-.227-2.51.158-.678 3.231-2.796 3.733-3.22 2.229-1.865 3.292-1.429 4.387-4.575 1.136-3.265-5.066-7.215-5.066-7.215s3.074-4.784-1.226-10.085c-2.723-3.357-8.625-.235-8.625-.235s1.066-2.57-2.078-5.292c-2.585-2.235-6.203.01-6.203.01l-4.972-3.282s-1.113-3.665-4.982-3.824c-3.869-.159-6.736-.697-8.237 2.854-7.991-5.347-9.176 3.39-9.176 3.39l-2.957.512s-2.503-3.672-7.2-1.21c-3.881 2.032-1.262 5.82-1.262 5.82l-.717 2.068s-7.061-2.51-9.766 2.372c-2.502 4.516 1.7 7.956 1.7 7.956s-8.079-.155-9.627 5.538c-1.914 7.047 5.792 9.734 5.792 9.734l-1.108 5.103s-3.75.732-4.003 3.086c-.475 4.416 2.547 4.899 2.547 4.899s-3.076 2.65-1.682 5.49c1.228 2.501 5.035 3.65 5.035 3.65s2.098 3.383 3.008 4.307c.762.775 6.313.217 6.313.217Z",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M79.776 119.818a15.9 15.9 0 0 1-3.692.469c-.567.029-1.134.017-1.699-.036a2.56 2.56 0 0 1-1.025-.287c-.16-.1-.302-.227-.42-.373l-.193-.22-.164-.201a32.098 32.098 0 0 1-1.272-1.725l-1.204-1.771c-.154-.045-.306-.099-.457-.15a17.84 17.84 0 0 1-.607-.244 12.392 12.392 0 0 1-1.223-.605 8.451 8.451 0 0 1-2.283-1.816 4.378 4.378 0 0 1-1.086-3.036 4.669 4.669 0 0 1 .379-1.625c.104-.252.223-.496.357-.733a5.384 5.384 0 0 1 .829-1.089l.098-.094c-.032-.013-.089-.02-.13-.034a2.226 2.226 0 0 1-.869-.495l-.121-.125a3.873 3.873 0 0 1-.507-.686 4.582 4.582 0 0 1-.443-1.023 6.578 6.578 0 0 1-.25-2.11c.004-.372.044-.742.122-1.105.053-.202.125-.398.213-.588a4.193 4.193 0 0 1 2.033-1.915c.307-.162.623-.306.948-.43l.324-.115c.096-.033.192-.061.288-.087l.144-.038c.053-.006.032-.087.051-.126l.06-.296.144-.706.376-1.822.116-.58.055-.273.028-.136c0-.04.045-.104-.024-.107a6.757 6.757 0 0 1-.772-.344l-.206-.11c-.172-.089-.336-.193-.502-.293a11.67 11.67 0 0 1-1.836-1.383 8.492 8.492 0 0 1-2.405-3.748 8.029 8.029 0 0 1-.14-4.048l.084-.46c.033-.152.096-.303.143-.453.106-.294.188-.597.32-.871l.427-.789c.15-.242.316-.474.497-.694a8.85 8.85 0 0 1 3.22-2.455c.298-.147.606-.276.92-.387.31-.12.625-.225.945-.313l.453-.13.214-.055c.148-.041.265-.061.39-.089.14-.026.278-.05.414-.066l.202-.023.1-.008.05-.002c.02 0-.022-.022-.03-.032a3.633 3.633 0 0 1-.585-.64c-.044-.055-.077-.116-.115-.173-.018-.03-.038-.057-.053-.087-.02-.044-.02-.03-.062-.12a4.424 4.424 0 0 1-.253-.594 5.09 5.09 0 0 1-.206-.621 6.773 6.773 0 0 1-.215-2.665l.102-.67c.05-.217.12-.428.181-.643.129-.42.294-.829.493-1.22.212-.397.447-.78.706-1.146.29-.358.603-.696.937-1.011a8.199 8.199 0 0 1 4.937-1.872 13.151 13.151 0 0 1 2.502.093l.713.104c.092.017.18.034.265.057.029.028-.024.08-.034.123l-.029.066.03-.104c.005-.038.036-.08.02-.117a1.201 1.201 0 0 1-.066-.105l-.022-.037-.11-.243c-.072-.165-.13-.337-.196-.505l-.16-.531c-.044-.183-.08-.373-.116-.56a5.133 5.133 0 0 1 .187-2.461c.14-.41.332-.801.572-1.163.123-.17.258-.326.393-.486l.205-.235.22-.195.451-.382c.153-.112.309-.202.467-.3.158-.099.316-.201.47-.283l.457-.216a7.975 7.975 0 0 1 4.198-.797c.764.09 1.508.305 2.203.635.34.168.667.362.978.58.159.101.3.224.449.34l.11.09.04.035.077.07a.73.73 0 0 1 .073.071c.023.021.067-.008.099-.01.071-.015-.02-.002.371-.072l.177-.033.032-.008.062-.015c.032-.012.078-.009.097-.032l.017-.11c.12-.422.27-.836.449-1.238.253-.578.57-1.126.945-1.633a6.338 6.338 0 0 1 1.48-1.44 5.447 5.447 0 0 1 2.012-.856 7.157 7.157 0 0 1 3.9.384c.278.105.561.207.816.334l.274.127c.044.015.09.054.123.053a.65.65 0 0 1 .061-.123l.069-.09.07-.089c.03-.034.062-.067.095-.098l.133-.13a5.883 5.883 0 0 1 2.51-1.467 9.345 9.345 0 0 1 2.451-.348 29.62 29.62 0 0 1 2.106.04l.971.043.474.019.639.057a7.033 7.033 0 0 1 2.543.775 7.42 7.42 0 0 1 2.071 1.639c.283.317.54.657.768 1.017.117.176.217.36.321.542l.145.282.065.135.01.017c.004.005.011.007.016.01l3.457 2.247c.007.002.014.009.021.006l.019-.014c-.007.001.026-.012-.012.002l.334-.129c.245-.088.491-.175.747-.244a8.588 8.588 0 0 1 1.61-.3 6.416 6.416 0 0 1 3.544.676l.418.228.382.273.374.284.282.26a9.78 9.78 0 0 1 1.074 1.143c.349.436.653.907.905 1.405.135.26.251.529.347.805l.076.212.009.026a.052.052 0 0 1 .005.013l.013-.01c.002-.003 0 0 .006-.005l.074-.023.562-.132c.208-.053.429-.087.648-.123a9.106 9.106 0 0 1 2.805-.072 7.216 7.216 0 0 1 1.515.362c.255.107.506.22.755.338.248.131.486.281.711.448l.343.246c.107.09.203.191.303.288.195.195.398.402.572.599l.761 1.038a11.376 11.376 0 0 1 1.9 4.938c.114.897.115 1.804.002 2.7-.061.444-.147.883-.259 1.317-.047.218-.122.43-.188.643l-.026.08.008-.028-.004.004.002.002c-.27-.212.688.536 1.207 1.02.61.55 1.177 1.147 1.695 1.785a8.721 8.721 0 0 1 1.414 2.41c.2.534.316 1.095.346 1.664a4.73 4.73 0 0 1-.056.943c-.021.16-.055.318-.101.472-.04.144-.097.344-.128.413a9.059 9.059 0 0 1-1.222 2.406 5.781 5.781 0 0 1-1.091 1.127c-.338.263-.693.505-1.062.724-.524.306-1.026.646-1.504 1.02-.638.51-1.169.868-1.702 1.275-.519.389-1.054.804-1.438 1.152a.085.085 0 0 0-.042.035.09.09 0 0 0-.011.054c.182.799.252 1.619.207 2.436a5.218 5.218 0 0 1-1.301 2.915 6.023 6.023 0 0 1-2.443 1.647 6.205 6.205 0 0 1-1.372.329 8.105 8.105 0 0 1-1.281.073 10.73 10.73 0 0 1-1.196-.085c-.193-.022-.38-.052-.565-.082l-.275-.047-.088-.018a1.116 1.116 0 0 1-.115-.035c-.026 0-.086-.048-.087-.01a.368.368 0 0 1-.032.096l-.053.11c-.11.217-.232.427-.366.63a5.731 5.731 0 0 1-2.165 1.956 5.482 5.482 0 0 1-1.418.491c-.485.094-.862.11-1.136.139a5.403 5.403 0 0 0-.326.042.941.941 0 0 0-.13.029c-.052.021-.06.011-.192.137-.223.224-.716.885-1.136 1.386-.44.519-.888 1.023-1.346 1.51a41.524 41.524 0 0 1-2.846 2.726c-1.944 1.7-3.944 3.192-5.894 4.609l-1.458 1.053c-.537.399-1.104.756-1.697 1.067a5.802 5.802 0 0 1-2.252.643 4.668 4.668 0 0 1-1.242-.095 5.057 5.057 0 0 1-.868-.271l-.061-.032a1.072 1.072 0 0 1-.403-.39l-.023-.042c-.008-.016-.017-.032-.011-.009a.482.482 0 0 1-.089.366.65.65 0 0 1-.11.118l-.115.092c-.096.067-.191.139-.29.199-.386.239-.812.41-1.257.504-.361.07-.727.109-1.094.115-.663.018-1.207-.015-1.633.028a2.79 2.79 0 0 0-1.132.349c-.795.406-1.639 1.192-2.839 1.734a4.302 4.302 0 0 1-2.084.326 4.09 4.09 0 0 1-1.987-.678 1.064 1.064 0 0 1-.427-.59c-.011-.025-.023-.106-.034-.084l-.028.098a.537.537 0 0 1-.313.315l-.113.038-.295.062c-.185.03-.371.047-.558.052a14.726 14.726 0 0 1-1.805-.128 5.471 5.471 0 0 0-1.394-.019c-.456.077-.962.209-1.444.335-1.947.537-3.781 1.13-5.545 1.712a68.888 68.888 0 0 1 5.265-2.506c.49-.199.987-.402 1.522-.561a6.398 6.398 0 0 1 1.705-.189c.548.012 1.097-.01 1.642-.064.063-.007.122-.024.183-.035a.239.239 0 0 1 .095-.016c.032.002.064.01.094.025.068.018.13.067.205.062l.236-.072c.266-.079.491-.258.628-.5l.057-.157c.024.004.054.084.08.122a.946.946 0 0 0 .247.262c.295.195.63.321.979.369.375.153.779.224 1.183.206.206-.012.408-.049.605-.109.091-.028.18-.062.267-.103.077-.041.159-.081.261-.147.785-.465 1.52-1.314 2.717-2.015a5.302 5.302 0 0 1 2.05-.657c.657-.078 1.223-.088 1.665-.158.301-.013.588-.129.812-.329-.034-.044.165.024.306.064l.111.032a.323.323 0 0 0 .072-.03l.138-.069c.181-.091.335-.176.47-.257.179-.087.333-.219.447-.383a.152.152 0 0 0 .017-.081c.01-.016.061.014.089.019.042.007.09.011.137.015.065-.004.116-.002.184-.009a8.108 8.108 0 0 0 1.386-.323c.087.094.191.171.307.227a.325.325 0 0 0 .048.018l.012.003.024.007a1.748 1.748 0 0 0 .251.05 1.675 1.675 0 0 0 .566-.03c.07-.018.14-.038.211-.062.153-.055.301-.121.444-.198a16.434 16.434 0 0 0 2.154-1.605c1.559-1.257 3.023-2.447 4.33-3.581a49.685 49.685 0 0 0 5.856-5.884c.235-.262.466-.592.872-1.023a4.418 4.418 0 0 1 1.775-1.178 6.314 6.314 0 0 1 1.632-.279c.187-.012.335-.024.443-.039.088-.011.175-.028.26-.052.369-.108.695-.328.932-.631.065-.08.124-.164.176-.253l.042-.066a.301.301 0 0 0 .03-.082l.041-.12c.063-.16.109-.325.137-.495.095-.76.184-1.619.259-2.337 1.182.232 2.622.67 3.775.893l.266.053.229.041c.153.028.301.047.448.067.28.036.562.054.844.055.257.003.513-.017.766-.06.213-.038.421-.1.62-.186.38-.166.709-.43.955-.764.211-.296.316-.656.297-1.021-.027-.3-.069-.6-.126-.896l-.045-.298a5.822 5.822 0 0 1-.047-.435 4.168 4.168 0 0 1 .021-.872c.019-.142.05-.282.091-.42.063-.127.106-.265.177-.388.132-.254.305-.486.51-.685.309-.32.642-.615.994-.886.578-.456 1.148-.87 1.712-1.272l.805-.576.408-.313c.148-.117.306-.221.46-.332.616-.435 1.282-.788 1.743-1.09.411-.258.753-.613.994-1.034.138-.246.263-.5.374-.758l.167-.421c.033-.086.058-.174.074-.264a2.077 2.077 0 0 0-.223-1.24 6.462 6.462 0 0 0-.915-1.41 13.48 13.48 0 0 0-1.263-1.317c-.227-.21-.463-.414-.702-.612l-.181-.148-.283-.223a19.395 19.395 0 0 0-.605-.444 12.351 12.351 0 0 0-.295-.59l-.135-.243c-.032-.077-.12-.138-.083-.218a7.06 7.06 0 0 0 .044-.545c.002-.22.015-.404.007-.636l.172-.39a2.44 2.44 0 0 0 .08-.194l.054-.16c.051-.155.106-.309.141-.468a8.37 8.37 0 0 0 .196-.953c.079-.644.08-1.295.002-1.94a8.484 8.484 0 0 0-1.434-3.624c-.196-.258-.389-.578-.584-.785l-.286-.3a2.969 2.969 0 0 0-.329-.245 3.381 3.381 0 0 0-1.6-.563 6.406 6.406 0 0 0-1.872.063c-.161.02-.32.05-.477.089l-.239.053a2.528 2.528 0 0 0-.285.073l-.694.209-.722.28c-.189-.06-.346-.087-.519-.13a3.364 3.364 0 0 0-.444-.06 3.21 3.21 0 0 0-.376.007l-.087.008-.041.006.007-.038c.007-.053.01-.106.009-.16a3.237 3.237 0 0 0-.604-1.552c-.011-.158-.048-.296-.07-.445l-.04-.218-.046-.122a3.156 3.156 0 0 0-.206-.483 5.412 5.412 0 0 0-.585-.913 7.343 7.343 0 0 0-.772-.82 3.035 3.035 0 0 0-.404-.332 2.19 2.19 0 0 0-.417-.257 3.464 3.464 0 0 0-1.948-.335 5.587 5.587 0 0 0-1.042.194 7.21 7.21 0 0 0-.514.166l-.276.108-.381.175c-.295.055-.572.112-.801.174-.06.032-.129.003-.197-.018l-.201-.06-.39-.115-4.489-2.97a2.578 2.578 0 0 1-.347-.368c-.08-.147-.167-.297-.253-.44-.09-.212-.152-.326-.217-.456-.075-.125-.14-.257-.224-.376a4.957 4.957 0 0 0-.526-.688 4.414 4.414 0 0 0-1.331-1.015 4.2 4.2 0 0 0-1.604-.434c-.257-.036-.635-.039-.952-.057l-.976-.046a10.655 10.655 0 0 0-3.566.233 2.95 2.95 0 0 0-1.28.797 10.44 10.44 0 0 0-1.292 2.259c-.03-.002-.051.02-.09-.001l-.111-.07-.223-.14-.447-.281c-.294-.191-.606-.36-.909-.541a6.998 6.998 0 0 0-.819-.426c-.205-.105-.416-.17-.625-.255a4.314 4.314 0 0 0-2.415-.246 3.133 3.133 0 0 0-1.84 1.29c-.245.342-.452.708-.617 1.094a7.68 7.68 0 0 0-.468 1.458c-.18.293-.335.565-.454.803-.015.074-.101.101-.166.143l-.203.117-.397.231-2.238.398-.428-.066c-.132-.032-.303-.01-.386-.112a10.177 10.177 0 0 0-.708-.468l-.197-.191-.097-.093-.071-.056a4.485 4.485 0 0 0-.899-.575 4.118 4.118 0 0 0-1.334-.37 5.36 5.36 0 0 0-2.787.587c-.899.42-1.59.99-1.795 1.709-.113.38-.135.782-.065 1.173.039.216.093.428.164.636.041.103.076.212.123.316l.071.156c.046.103.093.184.143.276.065.25.133.487.2.696.024.239.026.479.005.718l-.472 1.382-.254.745-.126.37c-.04.12-.079.267-.143.291-.548-.18-1.11-.347-1.663-.505l-.822-.183-.527-.08a10.75 10.75 0 0 0-2.023-.083 5.647 5.647 0 0 0-3.397 1.243 5.21 5.21 0 0 0-1.569 3.075 4.338 4.338 0 0 0 .133 1.69c.035.14.08.278.135.412.044.14.1.276.169.406.107.25.245.486.412.702.164.249.347.485.547.706a3.31 3.31 0 0 0 .253 1.753c.003.02.045.05.018.06a.723.723 0 0 0-.074.035 1.405 1.405 0 0 0-.15.082 2.164 2.164 0 0 0-.319.222c-.126.094-.242.2-.346.317-.128.143-.24.242-.378.42-.39.043-.807.064-1.174.125l-1.062.2c-.424.106-.843.234-1.255.383a8.184 8.184 0 0 0-2.195 1.176c-.157.12-.305.25-.444.391l-.216.198c-.067.07-.12.15-.181.225-.115.152-.248.292-.353.45l-.278.496a2.32 2.32 0 0 0-.221.524c-.072.178-.134.36-.185.546l-.115.595c-.051.194-.081.392-.09.592a5.695 5.695 0 0 0 1.332 4.272 8.451 8.451 0 0 0 1.761 1.608c.162.12.34.22.51.333.084.057.171.108.26.158l.354.196c.624.308 1.296.58 1.958.836.035.081-.021.22-.04.333l-.08.357-.157.71-.301 1.352-.413 1.823-.277 1.24-.159.68-.04.17-.01.041c-.01.008-.026.01-.039.014l-.082.022-.334.091-.675.193c-.112.03-.228.062-.338.099l-.267.09c-.247.09-.489.193-.724.31a3.695 3.695 0 0 0-1.034.734 1.3 1.3 0 0 0-.173.216.875.875 0 0 0-.126.224l-.055.111-.025.121c-.008.043-.023.072-.033.129l-.016.206a5.648 5.648 0 0 0 .05 1.661c.051.266.136.524.252.767.054.121.12.236.198.343a.995.995 0 0 0 .118.158l.031.039c.021.027.044.052.07.074.048.05.11.089.162.136.199.482.509.909.906 1.246.038.03.084.052.116.074l-.067.142a3.553 3.553 0 0 0-.22.721c-.024.161-.056.3-.073.477l-.338.393-.267.379c-.116.176-.22.359-.311.55-.178.345-.295.72-.346 1.106a2.918 2.918 0 0 0 .604 2.15 7.001 7.001 0 0 0 1.877 1.691 12.375 12.375 0 0 0 1.682.903c.245.101.49.199.731.284l1.122 1.885c.34.561.674 1.101 1.012 1.606.164.244.349.513.497.709.076.103.157.202.243.297l.155.111.171.069c.484.144.984.23 1.488.254 1.445.089 2.894.098 4.339.03Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "m145.012 85.895 8.693 41.196-17.974 17.346s-38.318 5.899-38.112 5.039c.207-.86-26.232-33.092-26.232-33.092l46.276-11.323 27.349-19.166Z",
				fill: "#FF4500"
			}), t.a.createElement("path", {
				d: "M145.033 85.921c-.405.577-4.176 3.404-9.324 7.15l-8.505 6.137-9.198 6.6-8.022 2.078a477.861 477.861 0 0 0-6.33 1.694c-5.037 1.391-10.248 2.8-15.577 4.215l-8.074 2.126-4.088 1.065-.888.233-.21.065-.38.122.338.366.078.083.055.063.2.238.799.955 3.19 3.831 6.344 7.685c4.2 5.138 8.352 10.188 12.288 15.316l.674.904.338.471.077.109.004.006c.006.007.012.015.023.01l.013-.003.005-.004c.003-.002-.002.002.01-.001l.126-.011c1.369-.117 2.805-.293 4.222-.468a625.65 625.65 0 0 0 8.522-1.148l16.787-2.412 4.116-.599 2.043-.298.056-.009.005.001.008.001.008-.001a.03.03 0 0 0 .008-.004l.007-.005.012-.01.093-.088.371-.353 5.879-5.574 5.748-5.416 2.817-2.641 1.392-1.303.347-.324.173-.162.16-.126-2.003-10.557-2.002-10.79a1241.978 1241.978 0 0 1-3.347-19.125c1.999 5.43 4.408 13.365 6.532 21.054a412.216 412.216 0 0 1 2.885 11.007c.417 1.69.794 3.278 1.121 4.723.354 1.573.496 2.234 1.062 5.006l-1.196 1.134-.499.468-.239.216a1641.29 1641.29 0 0 0-10.988 9.919l-5.312 4.858-.683.63-.533.498-.132.124-.066.062c-.029.007-.06.009-.09.014l-.361.05-2.01.265-3.493.452c-9.274 1.188-18.181 2.401-26.801 3.415-1.079.123-2.154.241-3.232.342l-.811.07-.409.03-.53.032a4.616 4.616 0 0 1-1.083-.046 1.555 1.555 0 0 1-.25-.069.277.277 0 0 1-.11-.063.492.492 0 0 0-.055-.088 4.705 4.705 0 0 1-.317-.417c-.3-.514-.63-1.01-.99-1.483l-.937-1.262-1.909-2.489a657.212 657.212 0 0 0-7.646-9.602l-7.467-9.142-8.206-9.92 25.737-6.492 11.26-2.788 5.428-1.315 5.091-1.208 3.693-2.52c7.701-5.303 21.439-13.896 24.158-15.557Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "m117.664 105.061 17.85 38.934 6.087-5.52-15.208-39.31-8.729 5.896Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M117.655 105.047a24.553 24.553 0 0 1 2.768-2.123l2.67-1.885 3.465-2.406 2.482 6.195c.735 1.822 1.4 3.453 1.912 4.653 1.902 4.47 3.867 9.276 5.826 14.138l2.921 7.304 3.1 7.839-1.93 1.77-5.712 5.223-3.158-6.887-2.474-5.463c-1.62-3.596-3.17-7.097-4.633-10.443-2.925-6.691-5.491-12.767-7.505-17.777 3.073 4.593 8.026 13.912 9.449 17.387a683.437 683.437 0 0 0 4.624 11.026l2.256 5.204 1.951 4.434 2.654-2.362 2.797-2.517-3.975-10.172-3.803-9.585c-2.431-6.125-4.644-11.737-6.563-16.942l-.388-1.049-.235-.686-.341.201-.185.108-.274.168-1.374.848-2.696 1.639-3.629 2.16Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "m132.068 94.824 14.157 39.495 3.94-4.201-10.78-40.025-7.317 4.731Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M132.06 94.81c.713-.628 1.476-1.2 2.28-1.709l2.226-1.517 3.017-2.012 1.901 6.721c.57 2.01 1.097 3.821 1.495 5.118a734.279 734.279 0 0 1 4.135 14.062l2.046 7.256c.722 2.595 1.436 5.166 2.133 7.678l-1.311 1.413-4.169 4.485-2.613-7.267-1.96-5.536a973.601 973.601 0 0 1-3.65-10.59c-2.295-6.786-4.285-12.943-5.809-17.982 2.566 4.55 6.501 13.697 7.55 17.081a595.588 595.588 0 0 0 3.698 11.543l1.82 5.425 1.545 4.516 1.517-1.586 1.798-1.902-1.367-5.057-1.392-5.056-2.647-9.488c-1.693-6.059-3.228-11.604-4.516-16.73l-.398-1.591-.106-.441-.054-.253-.122-.575-.677.37-1.145.663-2.251 1.29-2.974 1.672Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "m107.381 107.86 18.858 37.718-8.564 1.753-20.35-37.055 10.056-2.416Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M107.384 107.876a23.868 23.868 0 0 1-3.27 1l-6.273 1.63 2.895 5.104a297.918 297.918 0 0 0 2.548 4.422 816.224 816.224 0 0 1 7.645 13.227l7.272 12.926.023-.008.01-.004.178-.038.904-.193 5.354-1.13c-.697-1.397-1.389-2.783-2.077-4.157a7482.51 7482.51 0 0 0-2.612-5.292 1065.829 1065.829 0 0 1-4.899-10.119c-3.097-6.485-5.822-12.377-7.972-17.248 3.221 4.477 8.474 13.602 10.01 17.02a664.798 664.798 0 0 0 4.851 10.561l2.364 4.992 1.165 2.425 1.421 2.917-9.458 1.882-2.9-5.267-2.664-4.789a22702.6 22702.6 0 0 1-5.035-8.985c-3.22-5.741-6.153-11.003-8.743-15.901l-1.537-2.903 2.13-.456 1.56-.307 3.041-.577 4.069-.732Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "m88.698 112.542 22.325 34.799-6.903 1.299-24.158-33.986 8.736-2.112Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M88.7 112.558c-.91.366-1.85.661-2.807.883l-5.379 1.422 3.565 4.867c1.23 1.678 2.347 3.19 3.17 4.267a744.621 744.621 0 0 1 8.839 11.857l8.479 11.665.017-.006.007-.005c.002-.002-.013.002.07-.014l.704-.138 2.749-.537 1.16-.225c.002-.001.004-.002.006-.005l-.007-.004-.75-1.166-1.587-2.478-3.102-4.886c-2.032-3.22-3.99-6.357-5.838-9.36-3.7-6.005-6.968-11.472-9.557-15.989 3.553 3.909 9.503 12.039 11.307 15.137a596.306 596.306 0 0 0 5.959 10.027l2.883 4.713 1.416 2.284 1.757 2.797-7.823 1.43-3.352-4.708-3.09-4.296c-2.029-2.799-3.972-5.483-5.832-8.052-3.728-5.145-7.129-9.859-10.15-14.264l-2.32-3.403 1.95-.413 1.446-.283 2.633-.493 3.478-.624Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M71.237 108.522c-1.282.178-1.972 1.568-2.032 2.79a3.824 3.824 0 0 0 1.452 3.384c1.08.749 2.86.6 3.533-.504a1.894 1.894 0 0 0-.075 1.445c.168.474.516.862.968 1.081a2.15 2.15 0 0 0 1.5.069 2.135 2.135 0 0 0 1.175-.931c-.21.928.918 1.656 1.918 1.707a3.65 3.65 0 0 0 3.425-1.897c.284-.609.341-1.3.16-1.948a2.835 2.835 0 0 0-1.145-1.589 4.404 4.404 0 0 0 .954-1.921 1.515 1.515 0 0 0-1.023-1.695",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M82.049 108.498c.05-.039.254-.055.519.091.342.203.594.529.703.911.078.243.108.499.088.752a2.812 2.812 0 0 1-.187.776 4.26 4.26 0 0 1-.165.368l-.157.293-.124.209-.062.1-.03.048-.013.024.026.017c.139.082.266.182.378.299a3.4 3.4 0 0 1 .45.639c.209.393.347.818.409 1.258a3.207 3.207 0 0 1-.399 2.091 4.026 4.026 0 0 1-1.588 1.522 4.547 4.547 0 0 1-2.178.557 3.492 3.492 0 0 1-1.803-.512 3.76 3.76 0 0 1-.276-.195 2.42 2.42 0 0 1-.224-.198.07.07 0 0 1-.028-.02.086.086 0 0 1-.017-.031c-.002-.002-.035.065-.047.073-.012.009.015-.001-.032.025a3.16 3.16 0 0 1-1.028.307 2.867 2.867 0 0 1-1.57-.21 2.887 2.887 0 0 1-1.223-1.012 3.14 3.14 0 0 1-.262-.458l-.046-.111.004-.007c.004-.004.005-.011-.002-.016l-.003-.003c-.007-.001.017-.006-.058.012a3.866 3.866 0 0 1-2.403-.262 3.652 3.652 0 0 1-.817-.531 4.364 4.364 0 0 1-1.423-2.981 4.524 4.524 0 0 1 .628-2.776 2.59 2.59 0 0 1 2.11-1.325 2.385 2.385 0 0 0-1.019 1.252 3.713 3.713 0 0 0-.18 1.558c.05.457.154.905.314 1.336.133.371.277.638.35.835.154.449.473.822.892 1.045a2.029 2.029 0 0 0 1.077.202.97.97 0 0 0 .628-.272c.132.052.267.095.404.129.084.018.17.024.257.018a.386.386 0 0 0 .281-.144c-.095.196-.04.498.351.931.004.137-.026.293.027.397.06.181.156.348.28.492.156.186.361.324.592.398.237.075.489.095.734.057a1.81 1.81 0 0 0 .544-.167 1.04 1.04 0 0 1 .831-.31c.06-.03.114-.07.162-.117.017-.014.05-.064.053-.047l-.006.086c.007.204.219.434.598.654.281.267.633.445 1.014.512.38.058.767.039 1.14-.056a3.157 3.157 0 0 0 1.803-1.147 2.262 2.262 0 0 0 .415-1.786 2.442 2.442 0 0 0-.447-1.019 1.722 1.722 0 0 0-.254-.255c-.215-.193-.46-.37-.674-.532-.001-.043.043-.093.081-.143l.111-.145.504-.669.206-.284c.053-.074.104-.15.154-.227.204-.29.33-.628.367-.981a1.49 1.49 0 0 0-.25-.919 1.253 1.253 0 0 0-.49-.406Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M75.083 103.137a3.44 3.44 0 0 1-2.338-.692 3.456 3.456 0 0 1-1.297-2.07 3.388 3.388 0 0 1 .696-2.326 3.374 3.374 0 0 1 2.072-1.258c-1.13-.736-1.182-2.469-.255-3.436a3.562 3.562 0 0 1 1.808-.878 3.585 3.585 0 0 1 2.001.24 3.946 3.946 0 0 1 2.417 3.01 3.874 3.874 0 0 1-.27 1.964 3.852 3.852 0 0 1-1.207 1.57 1.814 1.814 0 0 1 1.134 1.951 1.929 1.929 0 0 1-1.767 1.489",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M78.08 102.683a2.29 2.29 0 0 1 .472-.255c.307-.16.569-.395.76-.684a1.326 1.326 0 0 0 .161-1.169 1.422 1.422 0 0 0-.347-.562A4.913 4.913 0 0 0 78 99.4l-.007-.091.127-.114.254-.232c.167-.159.337-.316.475-.476l.199-.249.09-.15a3.34 3.34 0 0 0 .322-2.22 3.154 3.154 0 0 0-.98-1.646 3.044 3.044 0 0 0-1.702-.783 2.674 2.674 0 0 0-1.696.34 1.412 1.412 0 0 0-.63 1.67.582.582 0 0 0 .091.152l.138.202c.18.156.403.313.62.482.453.345.906.688 1.359 1.028l-1.638.361-.847.192a2.72 2.72 0 0 0-.32.131c-.093.041-.228.097-.284.127-.291.174-.55.4-.76.667a2.17 2.17 0 0 0-.49 1.758 2.751 2.751 0 0 0 1.02 1.583c.494.395 1.09.64 1.719.705-.441.293-.968.427-1.496.382a3.455 3.455 0 0 1-1.878-.704 3.472 3.472 0 0 1-1.174-1.63 2.799 2.799 0 0 1-.06-1.585 4.49 4.49 0 0 1 2.086-2.586c.042-.023.1-.06.127-.072l.058-.018a.81.81 0 0 1 .113-.034c.07-.017.147-.031.23-.045l.13-.015c.013-.005.067-.001.047-.013l-.03-.029a.773.773 0 0 1-.139-.197c-.018-.045-.036-.074-.059-.144l-.034-.094-.05-.178a3.003 3.003 0 0 1 .547-2.617c.28-.33.621-.6 1.007-.794a4.336 4.336 0 0 1 2.263-.42c.779.067 1.527.342 2.165.797a4.298 4.298 0 0 1 1.868 3.675 4.35 4.35 0 0 1-.56 1.904 4.637 4.637 0 0 1-.312.47l-.028.036a1.595 1.595 0 0 1-.196.197c-.033.037-.154.085-.055.103a.68.68 0 0 1 .23.198l.104.146c.267.383.396.846.367 1.311a1.906 1.906 0 0 1-.62 1.274 2.083 2.083 0 0 1-.993.512 1.78 1.78 0 0 1-.639.016Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M75.367 90.362a2.317 2.317 0 0 1-1.376-.528c-1.362-.906-2.867-2.06-2.863-3.64a3.104 3.104 0 0 1 1.55-2.488 6.21 6.21 0 0 1 3.015-.822c-.54-.995-.987-2.16-.574-3.216.412-1.055 2.078-1.64 2.815-.77.166.279.359.54.575.783.425.34 1.057.223 1.617.23 2.006.03 3.512 2.367 2.627 4.075",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M82.736 83.98c-.057-.092.03-.37.038-.768a2.856 2.856 0 0 0-1.523-2.556 2.091 2.091 0 0 0-1.247-.214c-.39.082-.79.106-1.187.071a1.697 1.697 0 0 1-.794-.335 1.812 1.812 0 0 1-.313-.317c-.078-.1-.14-.189-.192-.262a.621.621 0 0 0-.217-.232.396.396 0 0 0-.176-.051 1.065 1.065 0 0 0-.558.118c-.194.09-.36.23-.485.403a.663.663 0 0 0-.1.225c-.03.106-.047.215-.053.325a2.3 2.3 0 0 0 .106.748c.02.066.04.135.067.202.001.008.046.13.079.205l.102.248c.153.329.338.665.524 1.007l.566 1.039-1.886.128c-.3.022-.597.064-.89.126a4.859 4.859 0 0 0-.363.092c-.435.12-.846.313-1.216.572-.32.23-.582.534-.765.884-.157.3-.207.645-.144.979.11.69.74 1.434 1.382 2.047.322.31.67.615.982.89.24.244.54.42.871.507-.252.26-.829.276-1.342.14a7.588 7.588 0 0 1-1.538-.528 4.971 4.971 0 0 1-1.345-.921 2.812 2.812 0 0 1-.727-1.117 3.484 3.484 0 0 1 .172-2.578 4.17 4.17 0 0 1 1.491-1.645 5.606 5.606 0 0 1 1.83-.74l.23-.046a2.42 2.42 0 0 1 .195-.034l.25-.027c.168-.015.348-.021.519-.028a4.83 4.83 0 0 1-.422-1.127 3.24 3.24 0 0 1 .042-1.84 2.416 2.416 0 0 1 1.277-1.347 2.158 2.158 0 0 1 1.864-.049c.294.158.542.39.717.675.073.111.13.204.181.27a.533.533 0 0 0 .123.123.65.65 0 0 0 .346.095c.197.007.395.004.592-.01.253-.013.506-.004.757.029a3.274 3.274 0 0 1 1.928 1.06c.527.58.81 1.34.789 2.122a2.368 2.368 0 0 1-.537 1.442Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M114.694 95.124c-.794.258-1.649.559-2.105 1.228a2.42 2.42 0 0 0-.335 1.602 3.165 3.165 0 0 0 1.53 2.488c.46.256.99.354 1.509.279.52-.076.999-.32 1.364-.697-.264.674.318 1.425 1.035 1.656.742.17 1.513.153 2.245-.05a7.183 7.183 0 0 0 2.736-.919c.792-.54 1.336-1.526 1.021-2.395-.128-.355-.39-.692-.333-1.063.095-.296.259-.565.48-.783a2.385 2.385 0 0 0 .389-2.122",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M124.244 94.344c.114.024.35.456.296 1.119-.033.37-.147.727-.334 1.046-.102.178-.231.337-.322.469a.733.733 0 0 0-.135.33.641.641 0 0 0 .097.353c.068.132.179.308.267.51.147.37.196.77.144 1.162-.116.799-.543 1.519-1.187 2.003a5.929 5.929 0 0 1-2.037.963 14.87 14.87 0 0 1-2.087.454 4.11 4.11 0 0 1-1.276-.046 2.89 2.89 0 0 1-.705-.239 2.826 2.826 0 0 1-.912-.732l-.044-.056-.033-.042.012.015c-.011-.001-.014.001-.017.005l-.004.011.041-.011-.008.002-.014.004-.029.008-.118.03a3.174 3.174 0 0 1-.473.078 3.44 3.44 0 0 1-.934-.032 3.395 3.395 0 0 1-1.663-.776 4.018 4.018 0 0 1-1.362-2.849 3.517 3.517 0 0 1 .217-1.476c.179-.467.494-.869.905-1.154a4.49 4.49 0 0 1 2.071-.658c-.241.312-.569.633-.854.97a2.102 2.102 0 0 0-.535.985c.004.486.052.972.146 1.45a2.035 2.035 0 0 0 .71 1.56c.225.183.493.303.778.349.146.027.295.036.442.026.073-.003.146-.012.217-.025a.241.241 0 0 0 .08-.02l.096-.044c.066-.026.129-.058.19-.095.187.064.386.086.583.066a.623.623 0 0 0 .17-.067c.017-.004.067-.052.053-.018a.432.432 0 0 0-.014.079 1.12 1.12 0 0 0 .479.739c.465.684 1.398.674 2.259.498.835-.137 1.65-.375 2.428-.708.314-.149.6-.354.842-.604.208-.22.365-.486.457-.776a1.119 1.119 0 0 0-.005-.719l-.219-.523a1.46 1.46 0 0 1-.085-.795l.018-.075c.053-.197.15-.38.283-.536a3.21 3.21 0 0 1 .352-.353c.2-.183.367-.399.493-.639.195-.374.291-.793.28-1.216Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M95.347 68.313a4.807 4.807 0 0 1 .347-2.552 4.78 4.78 0 0 1 1.613-2.001 5.404 5.404 0 0 1 2.504-.933c.901-.096 1.812.034 2.651.38-.614-1.157-.024-2.62.966-3.525 1.943-1.776 5.244-1.835 7.448-.384a7.222 7.222 0 0 1 2.436 2.93 7.188 7.188 0 0 1 .602 3.758 2.528 2.528 0 0 1 2.565-1.45 2.16 2.16 0 0 1 1.895 2.101 2.046 2.046 0 0 1-2.138 1.828",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M116.237 68.449c.303-.102.599-.222.887-.36a1.83 1.83 0 0 0 .935-1.475 1.797 1.797 0 0 0-2.147-1.629c-.146.03-.288.077-.423.137-.241.103-.449.27-.601.482-.171.015-.34.049-.503.102a.97.97 0 0 0-.438.265.266.266 0 0 0-.049.072c-.008.006-.014.033-.021.026l-.02-.043a2.752 2.752 0 0 0-.089-.168 4.103 4.103 0 0 0-.196-.18l-.054-.045-.094-.053-.192-.105c0-.364-.025-.729-.074-1.09a4.098 4.098 0 0 0-.16-.717 7.348 7.348 0 0 0-.414-1.062 6.344 6.344 0 0 0-1.326-1.82c-.53-.51-1.162-.9-1.853-1.147a5.628 5.628 0 0 0-2.119-.33 4.95 4.95 0 0 0-3.023 1.071c-.468.36-.805.862-.961 1.432l-.031.148a1.405 1.405 0 0 0-.011.35c.046.18.131.38.194.57l.307.692.663 1.476c-.448-.167-.97-.384-1.553-.616a11.276 11.276 0 0 0-1.608-.573 1.52 1.52 0 0 0-.184-.043c-.057-.014-.15-.018-.153-.023l-.155-.024-.313-.026a5.009 5.009 0 0 0-.626.008 4.611 4.611 0 0 0-2.253.766 4.495 4.495 0 0 0-1.926 3.753 3.32 3.32 0 0 1-.49-1.868c.02-.817.259-1.613.69-2.305a4.817 4.817 0 0 1 1.716-1.67 4.152 4.152 0 0 1 1.67-.565 6.866 6.866 0 0 1 1.513.038c.082.01.164.02.244.038.064.013.21.035.173.038.05.033.119.07.202.118.067.029.238.162.18.063a.706.706 0 0 1 .004-.178c.006-.036.01-.073.023-.114.005-.013.033-.194.066-.312.126-.49.342-.954.637-1.365a5.365 5.365 0 0 1 2.136-1.721 7.248 7.248 0 0 1 4.899-.315 6.885 6.885 0 0 1 3.713 2.611 7.81 7.81 0 0 1 1.012 1.91c.121.328.219.664.294 1.006l.042.188c.01.038.014.076.021.113.013.074.027.147.032.219.013.113.02.227.021.34l-.007.164-.002.04c-.001.017.011-.019.016-.026a1.105 1.105 0 0 1 .582-.553l.051-.02.1-.036a2.904 2.904 0 0 1 1.117-.164 2.728 2.728 0 0 1 1.622.66c.446.372.745.89.844 1.462a2.042 2.042 0 0 1-.509 1.694 2.27 2.27 0 0 1-1.221.706 1.878 1.878 0 0 1-.807-.017Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M106.258 73.382a2.718 2.718 0 0 1-.91-2.862 3.827 3.827 0 0 1 2.128-2.329c1.142-.526 2.912-.306 3.141.871.04.205.037.441.198.583.161.142.41.123.631.125 1.653.016 2.752 2.158 1.748 3.407a2.592 2.592 0 0 1 .887 3.103 2.89 2.89 0 0 1-2.98 1.575",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M111.103 77.839c.059-.081.301-.099.631-.18a3.301 3.301 0 0 0 1.126-.5c.373-.255.663-.615.834-1.035.123-.329.14-.688.05-1.028a2.337 2.337 0 0 0-.381-.756 2.158 2.158 0 0 0-.361-.364c-.246-.219-.573-.421-.854-.633l.285-.473.148-.253a.72.72 0 0 0 .103-.205.846.846 0 0 0 .023-.4 1.574 1.574 0 0 0-.305-.72 1.31 1.31 0 0 0-.579-.444.805.805 0 0 0-.3-.058l-.207-.004a3.256 3.256 0 0 1-.31-.013 1.486 1.486 0 0 1-1.377-1.256l-.043-.226c-.012-.068-.006-.024-.009-.04l-.004-.004c.002-.01-.007-.013-.012-.015s-.003-.01-.011-.014a.048.048 0 0 0-.008-.012 1.218 1.218 0 0 0-.708-.219 2.317 2.317 0 0 0-.976.154 3.705 3.705 0 0 0-.951.57 2.563 2.563 0 0 0-.974 1.676 2.386 2.386 0 0 0 .506 1.757 1.69 1.69 0 0 1-1.139-.444 2.617 2.617 0 0 1-.808-1.33 2.951 2.951 0 0 1 .027-1.571c.099-.37.286-.71.546-.99a5.424 5.424 0 0 1 1.719-1.127c.304-.13.622-.227.948-.288.315-.052.635-.07.953-.052.64.017 1.258.237 1.767.627.264.223.455.52.548.852a.572.572 0 0 1 .029.142l.012.11a.342.342 0 0 0 .081.205c.107.11.282.086.41.09.272.015.541.076.793.18.499.209.926.56 1.227 1.01.295.43.468.933.5 1.453.014.252-.013.505-.079.748a.93.93 0 0 1-.126.304c.078.055.153.115.224.18.061.061.117.128.169.198.069.088.129.184.19.277.225.376.37.794.427 1.228a2.78 2.78 0 0 1-.736 2.275 2.73 2.73 0 0 1-1.731.817 2.525 2.525 0 0 1-1.287-.2Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M130.914 77.7c-.442-1.208.632-2.573 1.948-2.882a4.992 4.992 0 0 1 3.803.934 5.547 5.547 0 0 1 2.143 2.458 3.13 3.13 0 0 1-.37 3.091c.832-.41 1.838.26 2.252 1.051.357.75.439 1.6.232 2.4a3.496 3.496 0 0 1-1.363 1.982 1.512 1.512 0 0 0-.642.625c-.043.18-.05.365-.021.547a3.36 3.36 0 0 1-.697 2.094 3.343 3.343 0 0 1-1.846 1.205 3.514 3.514 0 0 1-2.23-.21 3.536 3.536 0 0 1-1.657-1.514c-.149-.303-.142-.798.211-.832",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M132.677 88.666c-.029.048-.114.095-.133.207-.024.168.01.34.097.487.319.516.778.93 1.323 1.194.616.31 1.314.415 1.992.302a2.57 2.57 0 0 0 1.396-.745c.492-.5.778-1.168.8-1.872a1.625 1.625 0 0 0-.014-.241l-.017-.16a2.757 2.757 0 0 1-.018-.287c-.003-.391.147-.767.42-1.045.068-.071.14-.138.216-.2l.191-.151c.08-.057.156-.119.228-.185.129-.11.245-.232.346-.367a2.715 2.715 0 0 0 .569-1.883 2.222 2.222 0 0 0-.256-.882 1.373 1.373 0 0 0-.631-.576l-.008-.003-.039-.015c-.054-.012-.065.008-.1.011l-.176.04-.177.04c-.085.029-.17.062-.252.099l-3.081 1.275 1.732-2.367.441-.602.2-.282.117-.26a.962.962 0 0 0 .092-.259l.022-.11c.005-.059.019-.115.021-.174a2.53 2.53 0 0 0-.307-1.413 5.882 5.882 0 0 0-2.424-2.237 4.415 4.415 0 0 0-1.458-.474 2.866 2.866 0 0 0-.703-.006 2.212 2.212 0 0 0-.624.162c-.807.35-1.407 1.143-1.262 1.907a1.26 1.26 0 0 1-.391-.62 1.862 1.862 0 0 1-.001-.94 2.974 2.974 0 0 1 1.287-1.757 3.798 3.798 0 0 1 2.102-.548 3.657 3.657 0 0 1 1.489.342 8.575 8.575 0 0 1 2.075 1.514 6.474 6.474 0 0 1 1.43 1.992c.335.74.447 1.561.323 2.362a2.79 2.79 0 0 1-.059.287l-.043.132a1.894 1.894 0 0 1-.299.52c-.004.008-.025.028-.016.025l.032-.013a.536.536 0 0 1 .2-.046.831.831 0 0 1 .312.041l.076.029.026.01.073.035c.096.046.189.099.279.156.344.228.636.525.856.874.391.667.565 1.438.5 2.207a4.154 4.154 0 0 1-.721 2.023c-.2.293-.44.556-.714.782a5.66 5.66 0 0 1-.383.294.723.723 0 0 0-.168.171.347.347 0 0 0-.054.22l.011.112c.009.072.011.17.014.255.011.347-.032.694-.129 1.027a3.883 3.883 0 0 1-.993 1.672 3.698 3.698 0 0 1-3.362 1.038 3.567 3.567 0 0 1-2.265-1.478 2.96 2.96 0 0 1-.302-.573 1.252 1.252 0 0 1-.117-.569.643.643 0 0 1 .16-.418.292.292 0 0 1 .249-.086Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M80.792 79.822a3.964 3.964 0 0 1-2.148-2.932 3.874 3.874 0 0 1 1.273-3.375 2.805 2.805 0 0 1-2.502-2.41 4.034 4.034 0 0 1 1.353-3.32 6.183 6.183 0 0 1 3.014-1.504 6.218 6.218 0 0 1 3.362.297",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M85.14 66.594c-.148.13-.934-.114-1.863-.084a5.119 5.119 0 0 0-2.425.59 5.583 5.583 0 0 0-2.088 2.063 2.406 2.406 0 0 0-.15 2.363c.15.252.349.47.587.64.027.021.058.035.087.055.09.062.193.106.3.128.122.034.237.072.364.102l.467.051 1.888.21c-.549.523-1.308 1.213-1.89 1.78-.124.138-.24.283-.347.435l-.097.159c-.02.027-.033.057-.05.085a2.905 2.905 0 0 0-.173.355c-.2.47-.28.983-.23 1.493.133.99.636 1.895 1.408 2.532a2.741 2.741 0 0 1-2.39-.807 2.9 2.9 0 0 1-.963-2.209 5.119 5.119 0 0 1 .738-2.074c.047-.073.088-.146.14-.215a.3.3 0 0 1 .081-.085l.146-.125.177-.14.097-.076a.591.591 0 0 0 .047-.037l-.035-.01a2.283 2.283 0 0 1-.976-.671c-.441-.445-.755-1-.91-1.606a4.218 4.218 0 0 1 .644-3.216 5.724 5.724 0 0 1 4.684-2.625 4.176 4.176 0 0 1 1.683.329c.376.152.73.358 1.048.61Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M90.674 73.657a2.209 2.209 0 0 0-2.55.356 3.298 3.298 0 0 0-.957 2.404 3.932 3.932 0 0 0 1.618 3.346 3.097 3.097 0 0 0 1.894.526 3.074 3.074 0 0 0 1.822-.72",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M92.514 79.58c.084.142-.272.63-.9.878-.58.216-1.2.312-1.82.28a3.264 3.264 0 0 1-2.318-.98 4.648 4.648 0 0 1-1.245-2.289 4.563 4.563 0 0 1 .02-2.192 3.586 3.586 0 0 1 1.16-1.881c1.197-.985 2.778-.763 3.423.004a2.775 2.775 0 0 0-1.34.772c-.288.296-.42.524-.57.535a1.288 1.288 0 0 0-.846.532 2.35 2.35 0 0 0-.429 1.043c-.113.722.04 1.461.429 2.081.32.515.802.91 1.368 1.123.482.161.987.241 1.495.236.224-.01.548.024.864-.002a3.37 3.37 0 0 0 .709-.14Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M77.103 104.085a9.166 9.166 0 0 0-.342 5.61c.058.319.204.615.42.856.265.217.58.361.917.418 1.625.407 3.459.494 4.902-.335s2.207-2.816 1.21-4.094",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M84.223 106.529c.075-.017.267.09.433.352.206.331.32.712.327 1.102a4.118 4.118 0 0 1-.736 2.293 3.507 3.507 0 0 1-1.121 1.128 4.886 4.886 0 0 1-1.502.634 8.11 8.11 0 0 1-3.124.074 5.845 5.845 0 0 1-1.377-.347 2.242 2.242 0 0 1-.863-.65 2.56 2.56 0 0 1-.435-.855 6.438 6.438 0 0 1-.155-.656 8.262 8.262 0 0 1-.127-1.832 6.94 6.94 0 0 1 1.278-3.798c.228.638.41 1.291.546 1.954.143.462.194.947.15 1.427a5.492 5.492 0 0 0-.13 2.496.69.69 0 0 0 .246.449c.194.127.41.218.636.269.249.072.501.131.756.176.48.086.968.117 1.455.092a4.43 4.43 0 0 0 2.351-.767 3.697 3.697 0 0 0 1.2-1.582c.142-.337.24-.691.292-1.053a2.495 2.495 0 0 0-.1-.906ZM123.173 76.901c-.005.043-.142.096-.27-.021a.45.45 0 0 1-.129-.231.433.433 0 0 1 .08-.373.826.826 0 0 1 .745-.215c.239.026.476.068.709.125a2.69 2.69 0 0 1 1.441.822c.201.232.329.519.365.823.031.25.011.502-.059.743a1.136 1.136 0 0 0-.037.142.37.37 0 0 1-.025.072.144.144 0 0 1-.071.08.062.062 0 0 1-.061-.004c.053.01.105.022.156.039.08.025.156.061.226.107l.02.014c.017.021-.013-.03.024.02a2.433 2.433 0 0 1 .354.63 2.112 2.112 0 0 1-.306 2.058.373.373 0 0 0-.051.077.102.102 0 0 1-.017.026.045.045 0 0 1-.019.015l.06.024.05.018.018.005c.01.007-.017-.031.084.083.404.46.714.995.912 1.574.204.605.261 1.25.164 1.88a3.374 3.374 0 0 1-.818 1.754 3.094 3.094 0 0 1-1.626.925 4.23 4.23 0 0 1-2.905-.468 7.463 7.463 0 0 1-1.772-1.365c.714-.066 1.613.04 2.334.04.735.015 1.217-.1 1.485-.054a1.371 1.371 0 0 0 1.365-.42 2.05 2.05 0 0 0 .371-1.601 2.765 2.765 0 0 0-.284-.829 3.432 3.432 0 0 0-.229-.376c-.046-.058-.087-.12-.134-.175a2.599 2.599 0 0 0-.21-.231 8.275 8.275 0 0 0-1.151-.874c-.182-.13-.506-.298-.341-.276.03-.038.026-.115-.304-.411l.805-.016c.205-.011.434-.02.573-.038.175-.013.29-.033.412-.052.078-.004.074-.037.111-.055.024-.019.069-.047.074-.058a.788.788 0 0 0 .079-.79 1.079 1.079 0 0 0-.163-.28.93.93 0 0 0-.181-.163 1.208 1.208 0 0 0-.134-.657.34.34 0 0 0-.058-.073l-.007-.009-.093-.007-.193-.016-.192-.015-.097-.007-.048-.004h-.013l-.006-.001c-.508-.012.69.015.567.011.069.024.112.044.16.01a.93.93 0 0 0 .295-.566l-.119-.11-.057-.055.004-.02a.593.593 0 0 0 .026-.23.514.514 0 0 0-.107-.277 1.419 1.419 0 0 0-.286-.304 6.4 6.4 0 0 0-1.209-.683c-.211-.084-.343-.138-.406-.013-.069.144.021.305.119.306ZM110.429 97.566c.158-.04.647.35 1.103 1.008.247.36.411.771.48 1.202.048.437-.046.877-.267 1.256l-.028.076a.346.346 0 0 1-.126.195.033.033 0 0 1-.025.008.036.036 0 0 1-.024-.009l-.007-.009c.006 0 .034.008.049.011l.101.027c.099.028.195.063.288.107.016.008.029.012.046.023l.066.052c.048.048.092.1.133.156a4.107 4.107 0 0 1 .636 1.119c.329.838.342 1.765.038 2.609a3.675 3.675 0 0 1-1.691 1.978 4.12 4.12 0 0 1-2.779.493 4.832 4.832 0 0 1-2.162-.977 4.883 4.883 0 0 1-1.247-1.444c.656.049 1.389.167 1.997.214.438.003.874.066 1.296.187a2.3 2.3 0 0 0 2.571-.172c.235-.185.43-.414.576-.675a2.107 2.107 0 0 0 .152-1.621 2.726 2.726 0 0 0-.579-1.041l-.214-.211a3.05 3.05 0 0 0-.305-.197 1.07 1.07 0 0 0-.227-.683l-.01-.013a.563.563 0 0 0-.059-.014l-.135-.029-.268-.056-.135-.029-.068-.014-.017-.004-.009-.001-.002-.003.548.057.009.004.064.031a.195.195 0 0 0 .096.031.19.19 0 0 0 .097-.023 1.75 1.75 0 0 0 .514-.766c-.047-.08-.003-.089.009-.123.019-.028.029-.062.047-.091.026-.062.047-.125.063-.19.013-.063.02-.126.022-.19 0-.08-.005-.16-.015-.24a6.181 6.181 0 0 0-.272-1.114l-.33-.905ZM98.187 57.123c.004-.166.257-.28.571-.337.315-.056.68-.053.906-.099a2.462 2.462 0 0 1 2.45 1.103c.258.377.401.82.413 1.275.01.398-.077.791-.252 1.147a2.086 2.086 0 0 1-1.347 1.131c-.209-.436-.374-.839-.496-1.119-.122-.279-.183-.444-.085-.487a.963.963 0 0 0 .607-.85.906.906 0 0 0-.438-.766 2.081 2.081 0 0 0-.804-.286 4.212 4.212 0 0 1-.745-.171c-.28-.15-.542-.33-.78-.54ZM103.358 72.637c.154-.086.74.237 1.353.75.319.266.607.567.861.896.223.294.409.614.555.952a2.417 2.417 0 0 1 .032 1.947 2.622 2.622 0 0 1-.425.694c-.024.028-.076.083-.077.089.02-.016.002.007.002.007a.564.564 0 0 1-.055.095l-.011.013.055.025.086.037.03.011.013.004a5.96 5.96 0 0 1 .488.635 4.32 4.32 0 0 1 .729 2.802 3.441 3.441 0 0 1-1.442 2.52 2.663 2.663 0 0 1-1.371.456 2.825 2.825 0 0 1-1.238-.217 2.457 2.457 0 0 1-1.419-1.455 3.046 3.046 0 0 0 1.817.072c.49-.143.703-.35.845-.333a1.207 1.207 0 0 0 1.028-.757c.227-.471.28-1.009.149-1.517a3.073 3.073 0 0 0-.282-.735 3.7 3.7 0 0 0-.202-.334l-.114-.156a4.251 4.251 0 0 0-.144-.177c-.276-.3-.582-.57-.912-.808l-.504-.373c-.031-.026-.105-.068-.102-.082l-.002-.046c.011-.02-.039-.093-.063-.142.45-.088.943-.204 1.309-.315l.14-.043.1-.062.101-.062a.31.31 0 0 0 .053-.041l.018-.022a1.422 1.422 0 0 0 .361-.96 3.062 3.062 0 0 0-.612-1.558 108.258 108.258 0 0 1-1.15-1.81Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M94.136 108.784c-1.018-.517-2.149.704-2.208 1.798a3.735 3.735 0 0 0 3.265 3.703 3.939 3.939 0 0 0 4.194-2.792c.115-.492.179-1.089.651-1.319.342-.168.751-.06 1.132-.077a1.672 1.672 0 0 0 1.584-1.462 1.618 1.618 0 0 0-1.367-1.628c1.294-1.371.454-3.937-1.428-4.36",
				fill: "#FFD635"
			}), t.a.createElement("path", {
				d: "M99.965 102.631c.065-.057.368-.069.78.106.511.243.934.639 1.21 1.134a3.23 3.23 0 0 1 .431 1.938c-.019.16-.047.318-.084.475a2.985 2.985 0 0 1-.084.258.988.988 0 0 1-.079.168c-.013.042-.091.102.015.093a.873.873 0 0 1 .08.01c.229.059.276-.014.706.428.353.386.551.89.554 1.413a2.268 2.268 0 0 1-.584 1.478 2.518 2.518 0 0 1-1.365.805 3.113 3.113 0 0 1-.746.055l-.234.002-.033.013a.1.1 0 0 0-.046.043.102.102 0 0 0-.014.061c-.027.095-.053.243-.086.42a5.715 5.715 0 0 1-.161.647c-.15.432-.364.838-.634 1.205a4.927 4.927 0 0 1-3.906 1.984 4.598 4.598 0 0 1-3.722-1.937 4.217 4.217 0 0 1-.765-1.834 3.618 3.618 0 0 1-.027-.962c.032-.332.125-.655.275-.952a2.745 2.745 0 0 1 1.226-1.233 1.81 1.81 0 0 1 .836-.189c.274.013.538.102.766.255a1.5 1.5 0 0 0-.706.164 1.411 1.411 0 0 0-.47.459 2.155 2.155 0 0 0-.335 1.141c0 .081.008.161.022.24l.06.216c.039.151.089.299.15.442.11.267.213.484.27.654a2.71 2.71 0 0 0 1.15 1.493 2.738 2.738 0 0 0 1.86.398 3.236 3.236 0 0 0 2.713-2.318c.055-.378.166-.747.327-1.094a1.307 1.307 0 0 1 1.104-.672c.299.016.599.006.895-.032a1.23 1.23 0 0 0 .569-.316 1.11 1.11 0 0 0 .306-.514.82.82 0 0 0-.04-.508 1.123 1.123 0 0 0-.327-.435 2.11 2.11 0 0 0-.669-.248c-.267-.07-.553-.136-.793-.184.351-.46.676-.938.975-1.433.088-.264.13-.54.125-.819a4.276 4.276 0 0 0-.117-.778 3.111 3.111 0 0 0-.361-.83 2.756 2.756 0 0 0-1.017-.91Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M97.602 108.878c.163-.024.358.275.459.675.076.381.123.766.141 1.153a3.015 3.015 0 0 1-1.505 2.841 2.568 2.568 0 0 1-.75.321 2.868 2.868 0 0 1-2.171-.323 2.349 2.349 0 0 1-.917-.978 1.578 1.578 0 0 1-.12-1.107c.388.169.812.236 1.232.196.293-.037.45-.087.486.025a1.152 1.152 0 0 0 1.064.703 1.405 1.405 0 0 0 1.053-.559c.226-.293.38-.635.454-.999.076-.332.11-.631.181-.927.051-.187.119-.369.202-.544.096-.201.155-.403.191-.477ZM97.683 96.047c.124-.077.571.162.935.681.199.282.34.601.416.938.079.356.068.725-.03 1.076a1.895 1.895 0 0 1-1.683 1.305 1.869 1.869 0 0 1-1.668-.778l1.18-1.171a4.022 4.022 0 0 1 1.966 2.859 3.492 3.492 0 0 1-.738 2.738 3.24 3.24 0 0 1-2.403 1.208 4.437 4.437 0 0 1-2.08-.46 7.134 7.134 0 0 1-1.386-.878 7.572 7.572 0 0 1 1.803-.501 3.207 3.207 0 0 1 1.166-.112 1.517 1.517 0 0 0 1.41-.107 1.806 1.806 0 0 0 .782-1.24 2.447 2.447 0 0 0-1.245-2.383l.673-.667a.686.686 0 0 0 .716.191.77.77 0 0 0 .53-.397c.068-.176.102-.365.098-.554a4.342 4.342 0 0 0-.132-.966 4.015 4.015 0 0 0-.31-.782Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M76.418 86.233c-.104.139-.331.108-.57.142a.857.857 0 0 0-.582.243c-.347.465-.415.797-.34 1.018.07.277.155.55.254.82.12.35.299.679.528.971a1.31 1.31 0 0 1-1 .776c-.41.068-.753-.079-.824-.248a6 6 0 0 1-.405-1.779 3.03 3.03 0 0 1 .213-1.438 1.918 1.918 0 0 1 1.956-1.248.95.95 0 0 1 .539.332c.104.12.183.26.231.41ZM78.225 81.614c.076.159.014.28-.018.414a.456.456 0 0 0-.005.368c.213.338.299.532.412.726.225.31.03.562.082 1.27a1.553 1.553 0 0 1-.914.662c-.317.072-.541-.026-.557-.151-.023-.526.008-.88-.008-1.179a5.755 5.755 0 0 0-.083-.796 2.628 2.628 0 0 1-.021-.746.887.887 0 0 1 .335-.605.594.594 0 0 1 .428-.08c.122.017.24.057.349.117ZM82.064 73.908c.007.173-.193.292-.378.46-.183.134-.32.322-.391.538a3.217 3.217 0 0 0-.01 1.391c.211.734.466 1.455.765 2.158a1.613 1.613 0 0 1-1.137.542c-.388.014-.688-.142-.731-.307a12.137 12.137 0 0 1-.292-1.697 6.265 6.265 0 0 1-.017-1.355 2.229 2.229 0 0 1 1.159-1.896.95.95 0 0 1 .605-.022c.152.037.296.1.427.188ZM84.054 67.81c-.044.166-.29.221-.557.29-.25.05-.487.15-.696.295-.477.452-.948.784-1.283 1.18l-.42.49a1.663 1.663 0 0 1-.148.149c-.044.046-.088.102-.136.16-.087.117-.171.23-.25.319a.509.509 0 0 0-.048.446c-.186.153-.417.24-.658.246a.967.967 0 0 1-.664-.253.925.925 0 0 1-.355-.95c.183-.312.405-.597.662-.85.104-.101.216-.195.334-.28l.292-.231a33.72 33.72 0 0 1 1.043-.798 3.038 3.038 0 0 1 2.01-.775c.346.082.654.28.874.562ZM91.426 74.571c-.057.162-.253.2-.448.274a.826.826 0 0 0-.468.3c-.195.3-.314.643-.347 1 .015.442-.128 1.004-.139 1.806a1.587 1.587 0 0 1-1.192.205c-.35-.086-.57-.302-.548-.458.076-.51.19-1.013.34-1.506.107-.385.258-.755.45-1.104A1.859 1.859 0 0 1 90.68 74a.818.818 0 0 1 .484.236c.107.095.196.208.263.334ZM90.11 63.778c-.086.154-.41.167-.648.41a.987.987 0 0 0-.264.417.73.73 0 0 0-.022.309.73.73 0 0 0 .075.2c.187.388.55 1.079.847 1.587-.255-.016-.81-.123-1.292-.204l-.354-.062a.239.239 0 0 0-.215.023.963.963 0 0 0-.252.313c-.035.086-.06.177-.074.269a4.86 4.86 0 0 0 .145 1.757c.073.258.173.508.297.747a.858.858 0 0 0 .468.461.823.823 0 0 1-.445.602 1.391 1.391 0 0 1-.869.1A1.333 1.333 0 0 1 86.475 70a6.02 6.02 0 0 1-.18-1.899 5.148 5.148 0 0 1 .268-1.573c.174-.496.509-.919.952-1.201a2 2 0 0 1 .33-.168.86.86 0 0 1 .14-.056.934.934 0 0 1 .22-.025.551.551 0 0 1-.095-.38c.06-.339.227-.65.478-.884a1.184 1.184 0 0 1 .93-.32c.224.02.435.121.592.284ZM86.984 61.822c-.08.15-.259.164-.44.203a.71.71 0 0 0-.448.205c-.199.227-.338.5-.404.795-.016.315-.301.704-.51 1.435-.374.16-.796.169-1.178.025-.318-.131-.49-.363-.434-.504.178-.444.389-.873.63-1.286.174-.318.382-.616.62-.888a1.664 1.664 0 0 1 1.613-.666c.16.056.294.166.381.31.079.114.136.239.17.371ZM68.584 83.52c-.003.176-.242.294-.438.496a1.147 1.147 0 0 0-.366.663c-.046.61.025 1.224.209 1.809.44 1.025.716 2.113.817 3.223-.948.166-1.904-.182-1.92-.53-.054-1.348-.35-2.287-.414-3.271-.032-.466.02-.934.153-1.38a1.88 1.88 0 0 1 .763-1.03c.21-.129.457-.18.702-.146.174.02.343.077.494.167ZM70.652 94.433a.546.546 0 0 1-.158.365.392.392 0 0 0-.112.317c.106.38.207.465.286.516.16.078-.06.372.008 1.04a1.49 1.49 0 0 1-.853.73c-.302.088-.54.012-.552-.115-.046-.52-.029-.873-.035-1.18-.006-.307-.012-.57.008-.838a1.205 1.205 0 0 1 .73-1.18.544.544 0 0 1 .413.095.91.91 0 0 1 .265.25ZM68.203 100.896c.07.159-.1.37-.236.634a1.47 1.47 0 0 0-.22.769c.046.593.214 1.171.494 1.697a10.528 10.528 0 0 0 1.792 2.104 1.642 1.642 0 0 1-1.004.86c-.404.124-.773.049-.884-.105a11.578 11.578 0 0 1-.962-1.678 7.092 7.092 0 0 1-.522-1.448c-.215-.928-.123-1.911.436-2.485a1.13 1.13 0 0 1 .597-.317c.167-.04.339-.05.51-.031ZM75.237 99.517c.036.167-.036.276-.065.392a.376.376 0 0 0 .021.332c.153.202.32.393.5.571.148.172.248.381.289.604.077.32.094.65.05.976-.751.493-1.49.619-1.487.383a4.333 4.333 0 0 0-.338-1.87 2.265 2.265 0 0 1-.117-.787.912.912 0 0 1 .34-.684.57.57 0 0 1 .467-.086.726.726 0 0 1 .34.17ZM76.906 94.968a.634.634 0 0 1-.05.365.29.29 0 0 0 .005.271c.21.287.295.373.375.48.078.083.057.131-.023.244-.132.186-.21.405-.223.633a1.475 1.475 0 0 1-.875.667c-.304.069-.512-.03-.51-.148.043-.492.135-.787.162-1.038.03-.217.038-.438.024-.657-.014-.21.006-.422.06-.626a.68.68 0 0 1 .392-.458.49.49 0 0 1 .392.05.89.89 0 0 1 .271.216ZM87.38 89.414c-.066.166-.421.188-.758.36-.315.142-.57.388-.724.698a3.4 3.4 0 0 0-.116 2.326c.425 1.274 1.336 2.576 1.862 3.74-.468.178-.976.22-1.468.123a1.192 1.192 0 0 1-.872-.51c-.574-1.637-1.042-2.878-1.04-4.181.01-.61.162-1.21.444-1.75a2.35 2.35 0 0 1 1.221-1.1c.29-.103.605-.107.898-.01.203.063.39.166.553.304ZM101.59 92.402c-.133.326-.943.028-1.336-.013a2.31 2.31 0 0 1-1.858-1.345 2.133 2.133 0 0 1 .187-2.212c.216-.296.525-.512.878-.614a1.087 1.087 0 0 1 .869.115 1.53 1.53 0 0 0-.091 1.103c.099.236.202.295.12.282a.56.56 0 0 0-.64.476.802.802 0 0 0 .258.71c.382.38.867.451 1.182.75.18.227.325.479.431.748ZM109.058 78.312c.109.14.038.314-.015.514a1.007 1.007 0 0 0-.066.556c.161.496.203.897.316 1.27.174.657.216 1.34.122 2.013-.352.197-.758.28-1.16.235-.338-.043-.542-.204-.534-.339.128-.783.164-1.579.106-2.371-.03-.623-.018-1.279.373-1.666a.813.813 0 0 1 .448-.204c.136-.02.273-.023.41-.008ZM95.594 77.378c.02.177-.388.41-.797.706a1.764 1.764 0 0 0-.787.955c-.022.215-.006.432.049.642.052.237.13.526.193.884.097.467.066.95-.089 1.4a1.997 1.997 0 0 1-.513.752c-.197.176-.42.32-.662.427-.344.158-.619.233-.782.304-.153.065-.3.145-.438.237a3.081 3.081 0 0 0-.755.732 4.513 4.513 0 0 0-.794 1.997 1.924 1.924 0 0 1-1.161-1.193 1.601 1.601 0 0 1 .034-1.365 5.086 5.086 0 0 1 2.427-1.794c.356-.084.706-.19 1.05-.314a.614.614 0 0 0 .365-.532c.055-.52-.216-1.152-.153-1.916.035-.383.174-.75.403-1.058.198-.266.452-.485.744-.643a2.931 2.931 0 0 1 1.666-.22ZM105.493 62.108c-.021.177-.642.458-1.034 1.113-.103.16-.188.331-.256.51-.038.088-.059.182-.088.274l-.032.144a.945.945 0 0 0-.033.224c.008.709.098 1.414.267 2.103l-.08.044c-.248-.108-.589-.31-.961-.516-.184-.097-.382-.226-.576-.317-.195-.092-.394-.197-.603-.266l-.079-.026-.042-.011-.084-.022c-.055-.016-.112-.025-.167-.039a5.403 5.403 0 0 0-1.01-.133 3.41 3.41 0 0 0-2.3.67 3.367 3.367 0 0 0-1.068 1.592 3.203 3.203 0 0 0-.024 1.857c.17.652.49 1.376.72 2.059.231.683.432 1.318.571 1.903a6.537 6.537 0 0 1-1.873-1.292 3.682 3.682 0 0 1-1.08-1.51 6.509 6.509 0 0 1-.196-2.15 5.105 5.105 0 0 1 .578-1.892 4.81 4.81 0 0 1 2.571-2.283 5.592 5.592 0 0 1 3.05-.177c.235.049.467.111.694.187l.226.076.137.05c.083.035.164.075.243.119.038.02.072.045.108.068.013.004.047.04.042.018l-.011-.068a.932.932 0 0 1 .005-.337c.038-.165.096-.325.173-.477a2.572 2.572 0 0 1 1.122-1.206 2.337 2.337 0 0 1 1.09-.29Z",
				fill: "#fff"
			}), t.a.createElement("path", {
				d: "M122.296 90.771c.058-.066.351-.081.726.108.465.25.83.655 1.033 1.144a2.066 2.066 0 0 1-.122 1.874 2.32 2.32 0 0 1-.6.657c-.074.064-.154.12-.238.17a.399.399 0 0 1-.128.05c-.006.004-.022.002-.022.007l.053.04.095.076c.052.045.102.094.148.145.044.048.081.101.11.159.067.175.121.355.161.539.137.738.061 1.5-.219 2.194a9.752 9.752 0 0 1-.917 1.756 5.296 5.296 0 0 1-1.465 1.554 3.399 3.399 0 0 1-2.727.478 2.896 2.896 0 0 1-1.326-.757 2.862 2.862 0 0 1-.461-.632 2.869 2.869 0 0 1-.151-.341l-.051-.145.003-.003.03-.06c.067-.087.057-.092-.003-.11a.869.869 0 0 0-.102-.018c-.161.03-.414.087-.814.142a1.372 1.372 0 0 1-.975-.172 1.597 1.597 0 0 1-.557-.772 2.63 2.63 0 0 1-.14-.45 2.738 2.738 0 0 1-.004-1.044 2.3 2.3 0 0 1 .539-1.1c-.01.42.076.838.253 1.22.082.174.184.339.304.49a.397.397 0 0 0 .283.162.23.23 0 0 0 .245-.19l.201-.084.331-.126c.282-.102.532-.221.734-.307.122-.053.249-.124.36-.178.139.272.32.519.537.733.054.045.128.055.053.058a.139.139 0 0 0-.05.139c.057.322.169.632.331.917.005.138.029.275.072.407.028.087.066.17.114.247.1.154.237.282.399.37.362.194.781.25 1.18.157a3.21 3.21 0 0 0 1.88-1.62c.467-.65.765-1.406.866-2.2a2.212 2.212 0 0 0-.031-.501 1.956 1.956 0 0 0-.161-.526 4.74 4.74 0 0 0-.755-.87l-.457-.446a1.72 1.72 0 0 1-.331-.345c.434.015 1.046.02 1.521.006.209.003.417-.018.62-.061a.904.904 0 0 0 .14-.08l.079-.062c.202-.165.349-.387.422-.637a1.82 1.82 0 0 0 .037-.59 2.128 2.128 0 0 0-.224-.724 2.049 2.049 0 0 0-.829-.848ZM133.616 76.598c.033-.086.301-.22.741-.244a3.276 3.276 0 0 1 1.583.344 4 4 0 0 1 1.477 1.216c.32.444.555.943.693 1.472.152.562.172 1.152.058 1.723l-.023.122-.003.042a.767.767 0 0 1-.009.075c-.012.066-.029.13-.049.194a.894.894 0 0 1 .295-.066h.044c.012-.001.024 0 .035.005.052.014.102.033.153.052.202.072.398.164.584.272.368.213.7.485.981.805a4.82 4.82 0 0 1 1.078 2.121 1.963 1.963 0 0 1-.176 1.593c-.158.23-.366.423-.607.563l-.182.114-.124.07-.231.122c-.308.154-.63.28-.96.376l-.248.066c.003-.002 0 0 0 0l-.003-.005a.028.028 0 0 0-.027-.004.028.028 0 0 0-.011.008.02.02 0 0 0-.005.012l-.002.006a2.139 2.139 0 0 1 .087.544 2.258 2.258 0 0 1-.848 1.824 2.88 2.88 0 0 1-2.045.53 3.89 3.89 0 0 1-1.665-.534 3.368 3.368 0 0 1-1.156-1.096 2.181 2.181 0 0 1-.341-1.408 2.676 2.676 0 0 0 2.159 1.226c.332.03.667.018.996-.038.29-.043.466-.096.58-.095.105 0 .208-.014.308-.044a.417.417 0 0 0 .204-.207c.027-.123.137-.056-.153-.579a1.484 1.484 0 0 1-.149-.956.693.693 0 0 1 .278-.396c.129-.08.269-.138.416-.174.307-.095.791-.095 1.048-.163a4.04 4.04 0 0 0 .918-.287l.253-.123a.48.48 0 0 0 .288-.273.975.975 0 0 0-.023-.427 3.305 3.305 0 0 0-.43-1.089 2.776 2.776 0 0 0-.747-.804 2.31 2.31 0 0 0-.728-.343 1.201 1.201 0 0 0-.22-.037.757.757 0 0 0-.249.001c-.396-.33-.666-.396-.871-.363l-.021.003.01-.018.021-.037.041-.074a.96.96 0 0 0 .046-.19c.013-.195-.01-.39-.068-.576l.147-.202c.034-.066.059-.133.089-.199a2.6 2.6 0 0 0 .082-.191l.029-.12a3.06 3.06 0 0 0 .005-1.33 3.167 3.167 0 0 0-.757-1.448 4.721 4.721 0 0 0-1.32-1.02 3.32 3.32 0 0 0-1.276-.341ZM140.06 79.064c.254-.226.607.174.877.242a1.705 1.705 0 0 1 1.035.866c.2.31.274.684.206 1.045a1.42 1.42 0 0 1-.572.894c-.875-.233-1.515-.395-1.373-.498.563-.462.466-.932.256-1.195-.217-.285-.524-.407-.572-.686-.042-.11.112-.559.143-.668ZM124.571 64.607c.069-.162.939-.408 2.026-.293.568.06 1.116.25 1.601.553a3.606 3.606 0 0 1 1.256 1.465c.031.058.069.174.082.194.012.02.026.047.038.072a.45.45 0 0 1 .064.23c.001.038-.061.085.062-.007l.189-.144.097-.076.039-.03c.013-.01-.008-.002.032-.02l.125-.056c.342-.15.693-.28 1.049-.392a7.59 7.59 0 0 1 2.283-.361 5.5 5.5 0 0 1 3.431 1.15 6.064 6.064 0 0 1 1.936 2.759c.322.934.429 1.928.311 2.907a6.976 6.976 0 0 1-.669 2.278c-.27-.708-.51-1.601-.771-2.34a11.55 11.55 0 0 1-.547-1.682 4.188 4.188 0 0 0-.966-2.339 3.595 3.595 0 0 0-2.069-1.205 5.161 5.161 0 0 0-2.33.095 8.26 8.26 0 0 0-1.074.36l-.27.114-.378.167-.758.363c-.19-.075-.39-.12-.593-.134-.259.028-.05-.084-.064-.219a1.817 1.817 0 0 0-.313-.841c.01-.054.024-.11.031-.16a1.197 1.197 0 0 0-.068-.304 2.201 2.201 0 0 0-.388-.697 2.142 2.142 0 0 0-.355-.353 3.005 3.005 0 0 0-.441-.284 6.855 6.855 0 0 0-1.408-.53c-.531-.135-1.028-.207-1.19-.24ZM124.099 67.55c.084-.145.629-.133 1.242.11.321.128.619.311.879.54.234.21.433.455.591.726a2.309 2.309 0 0 1 .203.454l.024.08.015.024a.598.598 0 0 1 .097.196c.007.004-.017.013.011-.009.044-.03.078-.054.112-.072.065-.04.113-.062.148-.078.017-.008.023-.013.041-.02.141.011.28.032.418.063.272.06.537.146.792.26a3.493 3.493 0 0 1 1.744 1.695 3.102 3.102 0 0 1 .088 2.365 2.947 2.947 0 0 1-1.299 1.544 2.196 2.196 0 0 1-1.618.228 3.16 3.16 0 0 0 .736-1.373c.088-.404.089-.667.215-.77.253-.215.413-.52.448-.851a1.31 1.31 0 0 0-.26-.93 2.01 2.01 0 0 0-.783-.663 1.869 1.869 0 0 0-.471-.163 1.66 1.66 0 0 0-.262-.04 1.36 1.36 0 0 0-.421.047.863.863 0 0 0-.193-.117c-.058-.026-.121-.067-.174-.083a.868.868 0 0 0-.277-.044h-.061c-.015.005-.009-.011-.041.011l-.09.063-.368.253-.046.032-.011.009.377-.316.002-.001.005-.004.026-.014a.405.405 0 0 0 .047-.027.243.243 0 0 0 .061-.067c.095-.156.025-.459-.179-.913a1.179 1.179 0 0 1-.049-.203c-.015-.046-.024-.093-.041-.138a1.385 1.385 0 0 0-.114-.245 2.618 2.618 0 0 0-.361-.458c-.156-.149-.38-.4-.627-.623-.247-.223-.498-.406-.576-.477ZM130.56 81.959c.058-.058.235-.046.447.086.26.174.467.417.597.701.156.331.236.693.235 1.058-.005.32-.062.637-.171.938-.185.52-.534.964-.994 1.267-.08.05-.057.045-.072.062l-.024.033-.035.05c-.017.029-.031.047-.027.061l.141.093.021.012c.009.012.003-.018.056.097.074.171.137.346.189.524.242.791.209 1.64-.094 2.408a3.067 3.067 0 0 1-1.68 1.697 2.953 2.953 0 0 1-1.787.188 2.974 2.974 0 0 1-1.571-.881 6.24 6.24 0 0 0 1.504-.603c.384-.22.602-.412.77-.39a1.274 1.274 0 0 0 1.006-.313c.28-.27.454-.632.491-1.02.045-.39-.01-.785-.161-1.148a6.195 6.195 0 0 0-1.258-1.535 15.61 15.61 0 0 0 1.563-.322c.112-.043.22-.092.325-.15.057-.033.108-.072.159-.108.095-.072.183-.153.264-.24.272-.302.425-.693.429-1.1a3.96 3.96 0 0 0-.033-.814 1.791 1.791 0 0 0-.29-.651ZM109.772 70.328c.034-.163.481-.324 1.079-.368.319-.02.638.01.947.094.271.078.532.188.778.327.411.218.723.583.875 1.022.165.495.14 1.034-.071 1.51-.088.21-.2.412-.333.598l-.047.065c-.016.02-.04.053-.023.035.004-.003 0 .01.001.013v.027c.008.03.001.044.055.043h.037l.007-.002.042.054a2.649 2.649 0 0 1 .458 1.367c.023.447-.081.891-.3 1.28a2.51 2.51 0 0 1-.797.854c-.535.349-1.175.5-1.811.427a3.647 3.647 0 0 1-1.275-.429c.379-.357.777-.693 1.192-1.009.292-.276.421-.48.556-.47a.736.736 0 0 0 .804-.544c.037-.198.013-.401-.067-.585a.418.418 0 0 0-.114-.17c-.105-.059-.186-.115-.311-.174a8.238 8.238 0 0 0-.754-.33c.013-.048.046-.113.037-.142-.01-.028-.05-.05.054-.11l.408-.313c.265-.2.51-.425.731-.673a1.191 1.191 0 0 0 .313-.873 1.464 1.464 0 0 0-1.043-.978c-.183-.06-.47-.192-.767-.298-.296-.106-.57-.204-.661-.248ZM121.935 72.24c.142-.077.609.247.942.802.303.523.525 1.087.659 1.676a3.47 3.47 0 0 1 .082 1.575c-.025.14-.064.277-.098.418.014-.007.008.041.016.055.007.037.006.064.023.072l.124-.001.019-.002.007.002.047.031.093.063a3.593 3.593 0 0 1 1.527 2.37c.067.427.038.863-.084 1.276a2.584 2.584 0 0 1-2.588 1.832 2 2 0 0 1-1.484-.718 2.44 2.44 0 0 0 1.338-.716c.262-.285.344-.507.481-.516a.777.777 0 0 0 .654-.493 1.421 1.421 0 0 0-.034-1.019 2.127 2.127 0 0 0-.63-.864 2.08 2.08 0 0 0-.668-.35 8.69 8.69 0 0 0-.88-.258c.308-.41.58-.845.812-1.302.08-.268.126-.544.137-.824a6.574 6.574 0 0 0-.157-1.519c-.054-.228-.093-.56-.152-.883-.063-.311-.159-.602-.186-.707ZM95.275 89.291c.037-.165.658-.268 1.309.005.597.27 1.123.674 1.536 1.183a2.754 2.754 0 0 1 .671 2.161c-.05.418-.183.822-.393 1.186-.174.346-.627.784-.507.691-.002.02.002.029.016.035l.002.002a.252.252 0 0 0 .049.008l-.002.002c.004.005-.01-.012.006.015l.066.11c.409.668.594 1.448.527 2.226a2.679 2.679 0 0 1-.142.598 2.125 2.125 0 0 1-1.192 1.248 1.817 1.817 0 0 1-1.004.121 1.423 1.423 0 0 1-.774-.402c.288-.06.553-.2.764-.405a1.233 1.233 0 0 0 .327-.962c-.005-.092-.015-.105.034-.153.288-.272.285-.905.073-1.418l-.044-.102c-.017-.037-.057-.1-.085-.148-.125-.087.056-.248.103-.37a1.193 1.193 0 0 0-.199-.42c-.083-.106-.148-.183-.264-.186a.359.359 0 0 0-.11.014c-.018.005-.035.014-.052.02l-.004.003-.422-.045.003-.002h.02l.038.001h.077l.304.004c.093 0 .231.008.216-.01a.693.693 0 0 0 .344-.594.77.77 0 0 0 .228-.125.861.861 0 0 0 .17-.127 1.77 1.77 0 0 0 .433-.7c.108-.31.13-.645.063-.968a3.168 3.168 0 0 0-.9-1.484c-.173-.156-.39-.416-.648-.62a3.158 3.158 0 0 0-.637-.392ZM90.342 103.39c.051-.069.267-.091.562.002.366.129.697.342.965.623.32.328.567.721.723 1.152a3.3 3.3 0 0 1 .18 1.179c-.011.42-.13.83-.346 1.191a2.762 2.762 0 0 1-.401.521 1.117 1.117 0 0 0-.161.159l-.036.051a.523.523 0 0 1-.09.1c.085.018.167.045.245.083l.018.007.007.003c.006.008-.007-.018.028.036.1.151.188.308.265.472.218.47.348.977.385 1.493.019.239.021.479.007.718a4.7 4.7 0 0 1-.092.741 2.334 2.334 0 0 1-.42.935 2.295 2.295 0 0 1-.755.619 3.882 3.882 0 0 1-1.39.405 4.021 4.021 0 0 1-2.181-.386 4.05 4.05 0 0 1-1.652-1.482c.656.069 1.317.08 1.975.034a5.568 5.568 0 0 1 1.237-.091c.383.11.79.108 1.17-.007a.629.629 0 0 0 .325-.178 1.26 1.26 0 0 0 .184-.517c.086-.417.092-.846.017-1.266a2.401 2.401 0 0 0-.18-.559 1.808 1.808 0 0 0-.152-.266 1.048 1.048 0 0 0-.368-.341 1.31 1.31 0 0 0-.295-.645.67.67 0 0 0-.294-.19l-.056-.012-.458-.092.113.02.453.08.102-.012a.487.487 0 0 0 .195-.086c.175-.136.307-.319.38-.528a.912.912 0 0 0 .227-.037l.165-.081.084-.041a.259.259 0 0 0 .076-.05l.066-.059c.083-.079.159-.166.226-.259.124-.173.211-.37.258-.578.07-.408.024-.828-.133-1.212a4.71 4.71 0 0 0-.513-1 2.813 2.813 0 0 0-.665-.649Z",
				fill: "#02315C"
			}), t.a.createElement("path", {
				d: "M130.972 83.159c.072-.032.226.03.368.209.177.226.292.495.331.78.05.336.024.68-.078 1.004a2.643 2.643 0 0 1-.418.797c-.067.089-.143.17-.227.243-.034.043-.042.067-.063.092-.032.05-.063.076-.067.13.009.123.14.204.186.245.02.025.012-.014.065.069l.13.194.277.412c.21.31.395.637.555.976.166.357.266.742.294 1.135.03.437-.047.874-.225 1.273a3.04 3.04 0 0 1-1.587 1.525 2.958 2.958 0 0 1-1.869.189 1.82 1.82 0 0 1-1.273-.968c.279.006.556-.04.817-.135.203-.084.394-.197.564-.335.298-.235.48-.428.63-.404a1.265 1.265 0 0 0 1.401-.97c.096-.62-.307-1.284-.677-1.872-.248-.417-1.241-1.796-.364-2.264a4.33 4.33 0 0 1 .585-.297c.067-.05.127-.106.181-.169.113-.146.204-.308.27-.48.092-.23.164-.467.213-.71.032-.222.025-.449-.019-.67ZM129.321 65.86c.311-.128.455.234.683.32a1.251 1.251 0 0 1 .71.764 1.036 1.036 0 0 1-.665 1.372c-.862-.24-1.479-.427-1.325-.492.621-.294.629-.645.507-.87-.124-.243-.366-.378-.303-.602a2.11 2.11 0 0 1 .393-.493ZM106.098 90.247c.099-.14.603.011.957.48.184.24.314.516.382.81.057.266.071.539.04.808a1.682 1.682 0 0 1-.17.611c-.022.042-.025.055-.025.063l-.005.034c-.006.141-.048.174.009.183.083.009.164.027.242.055.004.005.002-.006.014.01l.072.115a3.057 3.057 0 0 1 .291.712 3.923 3.923 0 0 1-.022 1.86 3.95 3.95 0 0 1-.723 1.572 2.562 2.562 0 0 1-1.428.936 1.813 1.813 0 0 1-1.384-.2c.369-.292.648-.682.805-1.126.113-.33.118-.522.248-.558a1.821 1.821 0 0 0 .998-1.257 2.2 2.2 0 0 0 .115-.78 1.309 1.309 0 0 0-.125-.486 1.231 1.231 0 0 0-.111-.176c-.134-.493-.337-.73-.529-.765-.05-.003-.004-.01.021-.016a.347.347 0 0 0 .204-.165c.1-.186.162-.39.181-.602l.125-.099c.045-.035.028-.04.046-.06a1 1 0 0 0 .107-.314c.024-.15.026-.302.008-.452a5.214 5.214 0 0 0-.098-.645 1.973 1.973 0 0 0-.245-.548Z",
				fill: "#02315C"
			}));
			var sa = a => t.a.createElement("svg", {
					className: a.className,
					viewBox: "0 0 224 224",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, t.a.createElement("path", {
					d: "m0 112.465 111.58-.48v.039L.025 114.433A112.78 112.78 0 0 1 0 112.465Zm.023-2.803c.014-.667.034-1.333.06-1.997l111.498 4.284L.023 109.662Zm.097 7.57 111.461-5.178L.23 119.208c-.043-.657-.079-1.316-.11-1.976Zm.105-12.362c.042-.669.09-1.337.145-2.004l111.212 9.054L.225 104.87Zm.218 17.123 111.143-9.875L.639 123.997c-.072-.666-.137-1.334-.196-2.004Zm.188-21.909c.07-.661.146-1.32.228-1.977l109.935 13.662L1.242 95.31c.1-.672.207-1.342.32-2.01l109.563 18.51.44.055-.057-.016L2.062 90.548c.129-.66.263-1.319.403-1.975l108.987 23.262-108.367-26c.159-.66.323-1.318.493-1.973l107.944 27.988-.252-.084L4.32 81.14c.184-.644.374-1.285.57-1.924l106.158 32.476L5.752 76.517c.216-.644.436-1.285.663-1.924l104.858 37.168.185.056L7.386 71.957c.243-.635.492-1.268.747-1.899l103.352 41.767.036.011-102.3-44.378c.27-.62.545-1.239.825-1.854l101.484 46.235.059.018-.052-.015.051.022-.005-.001.002.001-.011-.003.011.005-.047-.012.049.013-.019-.002.016.006-.017-.006-.309-.033.326.055-.465-.07L.631 100.084Zm110.853 11.743-.12-.034.207.068-.087-.034Zm.046.013-.028-.008.081.031-.053-.023ZM.971 126.773l110.32-14.588.278-.05-.001.001-.19.037.144-.019-.002.001.006-.001-.02.006.004-.001-.174.058.068-.018-.171.053-105.46 35.293c-.21-.628-.415-1.26-.615-1.893l105.827-33.329L4.337 142.924a109.32 109.32 0 0 1-.535-1.932l107.43-28.747.238-.075L3.109 138.263c-.157-.652-.308-1.306-.454-1.962l108.839-24.139.017-.005-.222.033L2.074 133.514c-.126-.647-.247-1.297-.362-1.948l109.368-19.344L1.256 128.78a106.57 106.57 0 0 1-.285-2.007Zm5.72 23.407 101.963-36.926-101.24 38.862a106.36 106.36 0 0 1-.722-1.936Zm1.768 4.56 102.035-42.152.318-.115-101.58 44.092c-.263-.606-.52-1.214-.773-1.825Zm1.933 4.409 100.712-46.782.085-.031-99.946 48.603c-.289-.594-.572-1.191-.85-1.79Zm.853-96.093c.295-.605.595-1.208.9-1.808l99.424 50.592-98.117-53.084c.323-.596.65-1.19.984-1.78l97.155 54.876-.013-.007L11.245 63.056Zm1.277 100.431 98.679-51.155.184-.067.201-.115-.035.01-.3.146.296-.145-.037.011.068-.025-.044.012.019-.008-.019.002.052-.016-.024.01.027-.006-.032.008.031-.007-.008.004.009-.001-.034.013.035-.01v.001l.002.003-.002-.004.017.031-.004.003-.001-.002-.024.016.004-.002-.023.014-93.18 61.278c-.365-.554-.725-1.111-1.079-1.672l94.225-59.586-95.706 57.177c-.336-.562-.667-1.128-.993-1.696l95.916-55.074-97.303 52.585c-.31-.575-.616-1.153-.917-1.733Zm99.08-51.317-.095.051.095-.041-.003-.009.003-.001ZM15.846 54.551c.344-.575.693-1.148 1.048-1.717l94.702 58.989-93.187-61.355c.372-.567.75-1.13 1.133-1.689l92.062 63.048-.005-.003-95.753-57.273Zm4.105 121.263 91.672-63.612-90.519 65.243a104 104 0 0 1-1.153-1.631Zm1.19-129.31c.392-.544.79-1.085 1.192-1.621l89.297 66.904-90.49-65.282Zm1.62 133.18 88.555-67.189-.001-.071.093-.001.234-.194-.19.163.2-.152-.232.183.099-.001.162-.147-.157.147h.031l.137-.136-.132.135h.054l.103-.11-.099.11h.051l-.349.423-.001-.091-74.206 82.53c-.492-.442-.98-.889-1.465-1.34l75.671-81.206v-.069l-77.706 79.329c-.473-.463-.942-.931-1.406-1.403l79.111-77.939v-.039l-81.062 75.949c-.457-.488-.91-.98-1.358-1.476l82.42-74.485-.001-.095-84.26 72.492c-.431-.502-.86-1.009-1.283-1.519l85.404-70.868-87.181 68.669c-.417-.529-.829-1.062-1.236-1.599Zm1.283-137.027c.411-.521.827-1.039 1.248-1.553l86.364 70.651-87.612-69.098Zm3.06-3.712c.437-.507.878-1.01 1.323-1.51l83.238 74.309-84.56-72.8Zm3.211-3.573c.458-.487.92-.97 1.386-1.45l79.988 77.796-81.374-76.346Zm3.359-3.43c.482-.471.97-.94 1.46-1.402l76.566 81.166-78.026-79.764Zm3.505-3.285c.492-.442.989-.88 1.49-1.314l73.081 84.317-74.572-83.003ZM39.2 197.115l71.138-83.08-69.57 84.397c-.527-.434-1.05-.873-1.568-1.317Zm1.623-171.593c.512-.422 1.028-.838 1.547-1.25l69.397 87.373-70.944-86.123Zm2.115 174.656 68.383-87.23-.001-.06.4-.467h.015l.044-.057-.039.057h.027l.029-.045-.028.045h.029l.012-.029.02.008v-.002l.012.007.031.009-.009-.001.013.002-.001.005h.031v-.001l-.027-.004.039.003a.295.295 0 0 0 .042.002h.062l.053-.002h.008l.05.574-.054-.476 4.831 111.377c-.638.028-1.277.05-1.919.068l-2.913-108.437v52.686l-.003 55.79h.003c.202 0 .404-.002.605-.004L112 224c-.657 0-1.313-.006-1.968-.017l1.551-89.711-.124-10.138-4.225 99.766c-.678-.029-1.354-.064-2.029-.105l6.218-102.595-.032-2.608-8.972 105.001c-.645-.055-1.289-.116-1.93-.181l10.884-106.325-.01-.773-13.7 106.771c-.678-.088-1.355-.181-2.03-.28l15.728-106.682-.008-.674-18.486 106.914a111.08 111.08 0 0 1-1.919-.349l20.398-107.112-.001-.075-23.2 106.616c-.66-.144-1.319-.294-1.974-.449l25.172-106.352-.003-.264-27.902 105.933c-.636-.167-1.27-.34-1.902-.518l29.8-105.67v-.073l-32.56 104.925c-.634-.197-1.266-.4-1.896-.608l34.454-104.411v-.04l-37.158 103.52c-.635-.228-1.268-.461-1.897-.7l39.054-102.899-.002-.133-41.672 102c-.609-.248-1.214-.502-1.816-.76l43.111-100.556-45.763 99.376a99.298 99.298 0 0 1-1.814-.855l47.923-99.327.029-.068-.002-.136-50.47 98.277c-.592-.304-1.181-.614-1.768-.928l52.238-97.39v-.028l-54.742 96.032a105.33 105.33 0 0 1-1.726-1.004l56.467-95.064-.002-.145-58.863 93.745c-.56-.352-1.115-.708-1.668-1.069l60.531-92.704-.001-.073-62.875 91.203c-.548-.378-1.093-.761-1.635-1.149l64.51-90.078v-.033l-66.774 88.445c-.54-.407-1.077-.82-1.61-1.237Zm68.863-87.281-.234 1.825.155-1.051.079-.774Zm-.025-.529-.039.052h.002l.037-.052Zm-67.18-89.82c.529-.399 1.061-.793 1.597-1.182l65.597 90.262-67.193-89.08Zm3.908-2.817a112.93 112.93 0 0 1 1.642-1.11l61.659 92.997-63.301-91.887Zm4.01-2.638c.56-.35 1.121-.696 1.687-1.037l57.584 95.472-.176-.342-54.971-96.558c.576-.328 1.154-.65 1.736-.968l53.084 97.232-50.598-98.549c.602-.309 1.207-.613 1.815-.912l48.944 99.755.222.406-.034-.108-46.62-101.247a111.7 111.7 0 0 1 1.829-.822l44.777 102.032L69.624 8.31c.617-.252 1.236-.499 1.859-.74l40.312 103.871-.106-.338L74.127 6.581c.628-.225 1.258-.446 1.891-.66l35.564 104.837L78.716 5.044c.643-.2 1.288-.395 1.937-.583l31.046 106.641.122.359-.004-.024L83.37 3.707c.644-.17 1.29-.335 1.94-.494l26.5 108.183-.055-.313-23.68-108.51c.647-.141 1.297-.277 1.948-.407l21.671 108.562-18.89-109.08a114.88 114.88 0 0 1 2.004-.329l16.957 109.766.1.502-.077-.355.075.354-.022-.063.016.065-.021-.043.017.045-.015-.037.006.038-.03-.095.03.099-.002-.003-.163-.285.152.295-.03-.049.025.051-.031-.061-59.28-94.45Zm59.308 94.382-.083-.23.094.294-.011-.064Zm.012.068-.006-.012.006.016v-.004ZM97.577.926a112.79 112.79 0 0 1 1.98-.238l12.333 110.897L97.576.926Zm4.786-.514c.658-.056 1.317-.107 1.978-.152l7.582 111.322-9.56-111.17Zm4.792-.308c.647-.028 1.295-.05 1.945-.068l2.861 110.398V0H112c.639 0 1.276.005 1.912.016l-1.896 111.564-.08.001L107.155.104Zm4.428 112.03.003-.001-.005.002.002-.001Zm.476-.553L116.7.097c.669.028 1.336.062 2.002.101l-6.643 111.383Zm.024.001L121.489.399c.672.057 1.342.12 2.01.189l-11.416 110.994Zm.037.843.062.355 14.306 110.285c-.64.083-1.282.161-1.926.233l-12.365-109.747-.077-1.126Zm.027-.95L126.271.906c.662.085 1.321.175 1.979.271l-16.1 110.289-.003.009Zm.007.118.05-.123.192-.576-.179.544 42.057-103.17c.618.252 1.234.51 1.847.773l-43.914 102.43-.012.037 46.535-101.31c.604.278 1.206.561 1.805.85L112.191 111.52l-.025.076.021-.067-.032.065.043-.102-.044.101Zm.015-.176L131.042 1.621c.659.113 1.316.232 1.971.357L112.175 111.4l-.006.016Zm.007.188 50.9-99.295c.589.302 1.175.61 1.758.922l-52.658 98.373Zm.001-.15.045-.178-.013.035L135.791 2.544c.65.14 1.298.287 1.944.44l-25.511 108.284L140.493 3.671c.647.17 1.291.345 1.933.526l-30.181 107.018-.022.06-.046.18Zm.002.937.034-.022 63.345 91.856c-.535.369-1.074.734-1.616 1.095l-61.295-92.208-.444-.735-.024.014Zm.004-.782 55.146-97c.576.327 1.149.66 1.719.997l-56.865 96.003Zm.005.003.218-.316 59.069-94.21c.559.35 1.116.707 1.669 1.067l-60.586 92.922 62.932-91.35c.558.386 1.113.775 1.665 1.17l-64.745 90.408-.208.318.144-.228-.158.219Zm.028 1.017.059.152-.003-.015 42.173 102.895c-.609.249-1.221.494-1.835.733l-40.282-103.466 37.605 104.468c-.624.225-1.252.445-1.882.659l-35.765-105.221-.07-.205Zm.003-.995 67.188-89.084c.535.404 1.066.812 1.593 1.224l-68.781 87.86Zm.017.717.03-.026 74.613 82.965c-.488.438-.979.872-1.474 1.302l-72.916-83.949-.226-.311-.027.019Zm.014 1.972 9.479 109.256c-.677.059-1.355.111-2.035.158l-7.444-109.414Zm.003-1.652 46.616 101.064c-.599.276-1.201.548-1.806.814l-44.805-101.855-.005-.023Zm.003-1.007 70.916-86.147c.516.425 1.029.855 1.537 1.29l-72.453 84.857Zm.011.01 74.563-83.01c.497.447.99.898 1.479 1.353l-76.042 81.657Zm.006.645 78.108 79.684c-.473.463-.95.922-1.431 1.377l-76.677-81.061Zm.008-.634 78.051-79.737c.482.471.96.948 1.434 1.428l-79.485 78.309Zm.005.622.07-.077 87.648 69.052c-.408.517-.82 1.031-1.237 1.541l-85.789-70.041 83.957 72.227c-.425.494-.854.984-1.287 1.471l-82.783-73.709 80.86 75.813c-.444.474-.893.944-1.345 1.41l-80.094-77.687Zm.026.657 33.034 105.971c-.632.198-1.267.389-1.904.576l-31.107-106.431-.023-.116Zm.017-1.228 81.362-76.357c.453.482.902.97 1.347 1.46l-82.709 74.897Zm.007.007 84.568-72.79c.436.507.868 1.017 1.295 1.532l-85.863 71.258Zm.019 1.439 28.364 107.087c-.651.172-1.304.339-1.959.5l-26.341-107.264-.064-.323Zm.012-1.4 87.586-69.13c.412.522.819 1.047 1.221 1.576l-88.807 67.554Zm.002.431.023-.035 93.233 61.301c-.36.549-.725 1.093-1.095 1.635l-92.033-62.813 90.398 65.144c-.389.541-.783 1.077-1.182 1.611l-89.269-66.791-.075-.052Zm.012-.412 90.47-65.31c.389.539.772 1.08 1.151 1.625l-91.621 63.685Zm.012.376 95.808 57.194c-.345.578-.695 1.152-1.05 1.722l-94.758-58.916Zm.001-.001 98.184 53.011c-.314.582-.634 1.162-.959 1.738l-97.225-54.749Zm.003-.003.019-.071 110.961 11.748c-.069.652-.144 1.302-.224 1.951L113.28 112.254l109.488 16.375c-.098.65-.2 1.298-.309 1.945l-109.59-18.336 109.083 21.146c-.127.654-.26 1.305-.397 1.954l-108.876-23.132-.135-.022 108.386 25.917c-.155.65-.316 1.298-.483 1.943l-107.869-27.849.168.056 106.953 30.547a122 122 0 0 1-.561 1.9l-106.161-32.37 105.294 35.085c-.213.64-.431 1.276-.656 1.91l-104.873-37.067-.174-.053 104.073 39.771c-.241.631-.488 1.26-.74 1.885l-103.366-41.666-.029-.009 102.302 44.29c-.263.607-.531 1.211-.804 1.813l-100.475-45.599 99.254 48.199c-.293.602-.59 1.201-.893 1.798l-98.824-50.206-.669-.305Zm.091 0-.008-.002.034.012-.026-.01Zm.028.005-.021-.004.152.047-.131-.043Zm-.119-.351L205.58 50.45c.363.551.722 1.106 1.075 1.664l-94.258 59.714.231-.125L208.13 54.51c.343.573.681 1.148 1.014 1.727l-96.353 55.379 97.734-52.902c.312.575.618 1.152.919 1.733l-98.076 50.922 99.357-48.375c.285.586.566 1.175.842 1.768l-100.802 46.954.054-.018 101.92-44.331c.261.6.517 1.205.769 1.811l-102.537 42.466 103.592-39.82c.24.623.474 1.249.703 1.877l-104.022 37.855L218.199 76.37c.215.642.425 1.286.629 1.934l-105.931 33.378-.387.153 107.133-30.828c.182.635.36 1.273.532 1.913l-107.641 28.911.004-.001 108.339-26.156c.156.647.306 1.296.451 1.947l-108.699 24.191 109.278-21.421c.129.657.253 1.317.37 1.978l-109.738 19.463-.088.031 110.284-16.709c.1.66.194 1.32.282 1.982l-110.568 14.728-.028.013-.002-.005-.001.001-.001-.005-.002-.005h-.002v-.003h-.001v-.002l-.015-.03Zm.234-.049-.04.018.057-.024-.017.006Zm.086-.04-.031.015.064-.025-.033.01Zm-.313 1.114 55.023 96.482c-.572.326-1.147.647-1.726.964l-53.206-97.259-.091-.187Zm.011-.973 110.939-11.945c.07.648.134 1.299.193 1.951l-110.345 9.969 110.565-7.127c.042.648.078 1.297.109 1.948l-111.456 5.285-.005-.081Zm.002.215 111.363 6.969c-.041.661-.089 1.32-.142 1.978l-111.221-8.947Zm.003-.129 111.554-2.466c.014.655.023 1.311.026 1.969l-111.58.534v-.037Zm0 .07 111.558 2.236c-.013.668-.032 1.334-.058 1.999l-111.5-4.235Zm.031-1.363L145.138 4.998c.634.197 1.266.399 1.896.606l-34.446 104.707-.137.362Zm.101 4.225 18.735 107.438c-.674.118-1.349.229-2.026.334l-16.709-107.772Zm.052-2.095 70.631 85.626c-.511.422-1.026.839-1.545 1.252l-68.947-86.687-.139-.191Zm.235 2.811 23.175 105.794c-.672.147-1.347.288-2.025.423l-21.15-106.217Zm.049-6.093L149.74 6.533c.645.231 1.288.468 1.927.71l-38.779 102.278Zm.334 4.997 49.995 97.099c-.605.311-1.214.618-1.825.918l-48.17-98.017Zm.04-.386 58.307 92.722c-.576.362-1.155.719-1.737 1.07l-56.57-93.792Zm.832.723 65.374 86.548c-.547.413-1.098.821-1.652 1.224l-63.722-87.772Z",
					fill: "#fff"
				})),
				ia = c("./src/reddit/pages/WrappedReddit/CardTemplates/index.m.less"),
				da = c.n(ia);
			const {
				fbt: ma
			} = c("./node_modules/fbt/lib/FbtPublic.js"), oa = ({
				card: {
					title: a,
					subtitle: e,
					id: c
				},
				children: l
			}) => {
				const r = se();
				return t.a.createElement("div", {
					className: da.a.headingSection,
					id: c
				}, r, t.a.createElement("div", {
					className: Object(n.a)(da.a.headingWrapper, da.a.headingContent)
				}, t.a.createElement("div", {
					className: da.a.headingText
				}, t.a.createElement(ta, {
					className: da.a.logoSvg
				}), t.a.createElement("h2", {
					className: da.a.heading
				}, a), t.a.createElement("h3", {
					className: da.a.subheading
				}, e)), l))
			}, pa = ({
				link: a,
				subredditName: e,
				className: c,
				onClick: l,
				subscribe: r,
				onSuscribe: s
			}) => t.a.createElement("div", {
				className: Object(n.a)(da.a.subredditLink, c)
			}, s && t.a.createElement("button", {
				onClick: s,
				className: da.a.icon
			}, r ? t.a.createElement($.a, null) : t.a.createElement(aa.a, {
				className: da.a.iconPlus
			})), ma._("{=r/[subredditName]}", [ma._param("=r/[subredditName]", t.a.createElement(X.a, {
				to: a,
				onClick: l,
				target: "_blank",
				rel: "noopener noreferrer"
			}, ma._("{=r/}{=[subredditName]}", [ma._param("=r/", t.a.createElement("span", {
				className: da.a.subredditLinkR
			}, ma._("r/", null, {
				hk: "3iHcmO"
			}))), ma._param("=[subredditName]", t.a.createElement("span", {
				className: da.a.subredditLinkName
			}, ma._("{subredditName}", [ma._param("subredditName", e)], {
				hk: "2MKspf"
			})))], {
				hk: "x9Hc0"
			})))], {
				hk: "30rzWQ"
			})), ua = ({
				link: a,
				className: e,
				children: c,
				onClick: l
			}) => t.a.createElement(X.a, {
				className: Object(n.a)(da.a.link, e),
				to: a,
				onClick: l,
				target: "_blank",
				rel: "noopener noreferrer"
			}, c);

			function fa() {
				return (fa = Object.assign || function(a) {
					for (var e = 1; e < arguments.length; e++) {
						var c = arguments[e];
						for (var l in c) Object.prototype.hasOwnProperty.call(c, l) && (a[l] = c[l])
					}
					return a
				}).apply(this, arguments)
			}
			const {
				fbt: ha
			} = c("./node_modules/fbt/lib/FbtPublic.js"), Ea = a => new Promise(e => {
				const c = (a => a.replace(/https|http/i, "https"))(a),
					l = new XMLHttpRequest;
				l.onload = function() {
					const a = new FileReader;
					a.onloadend = function() {
						e(a.result)
					}, a.readAsDataURL(l.response)
				}, l.open("GET", c), l.responseType = "blob", l.send()
			});
			var ba = Object(l.memo)(({
				src: a,
				lowSrc: e = a,
				errorSrc: c = e,
				...n
			}) => {
				const s = Object(r.d)();
				if (!a) return null;
				const i = Object(l.createRef)();
				return s(D()), Ea(a).then(a => {
					i.current && a && (i.current.src = a)
				}).catch(() => {
					i.current && (i.current.src = c)
				}).finally(() => {
					s(F())
				}), t.a.createElement("img", fa({
					ref: i,
					src: e
				}, n))
			});
			const {
				fbt: ga
			} = c("./node_modules/fbt/lib/FbtPublic.js");
			var _a = ({
					card: a
				}) => {
					const {
						commentDeeplink: e,
						commentScore: c,
						commentText: l,
						postDeeplink: r,
						postImageUrl: s,
						subredditId: i,
						postId: d,
						commentId: m
					} = a, o = Object(V.a)(), {
						subredditName: p,
						subredditLink: u
					} = me(r), f = s ? Object(n.a)(da.a.postEmptyImage, da.a.isComment) : da.a.postEmptyImage, h = t.a.createElement("div", {
						className: f
					}, t.a.createElement(ua, {
						className: Object(n.a)(da.a.commentPostTitle, da.a.isEmptyImage),
						link: e,
						onClick: () => o(((a, e) => c => ({
							...W.m(c),
							noun: "comment unit",
							source: "recap",
							action: "click",
							recap: W.U(c),
							comment: {
								id: a,
								postId: e
							}
						}))(m, d))
					}, t.a.createElement("p", null, l)), c && t.a.createElement("h2", {
						className: da.a.postCardCircle
					}, ga._("{=[commentScore]}{=upvotes}", [ga._param("=[commentScore]", t.a.createElement("span", {
						className: da.a.postCardCircleValue
					}, ga._("{commentScore}", [ga._param("commentScore", c)], {
						hk: "3kgtbk"
					}))), ga._param("=upvotes", t.a.createElement("span", {
						className: da.a.postCardCircleUnit
					}, ga._("upvotes", null, {
						hk: "4GE43M"
					})))], {
						hk: "tFe3k"
					})), p && t.a.createElement(pa, {
						onClick: () => o(U(i)),
						link: u,
						subredditName: p,
						className: da.a.isPostCard
					}));
					return t.a.createElement(oa, {
						card: a
					}, t.a.createElement("div", {
						className: da.a.headingArt
					}, s ? t.a.createElement("div", {
						className: da.a.postImageWrapper
					}, t.a.createElement(ua, {
						className: da.a.postImageLink,
						link: r,
						onClick: () => o(B(d))
					}, t.a.createElement(ba, {
						src: s,
						alt: ga._("image of post", null, {
							hk: "2qDEYh"
						}),
						className: da.a.fallbackStaticImage
					})), h) : h))
				},
				va = c("./src/reddit/actions/modal.ts"),
				Za = c("./src/reddit/actions/notifications/index.ts"),
				Ca = c("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				Ma = c("./src/reddit/actions/subscription/index.ts"),
				Na = c("./src/reddit/components/Settings/modalIds.ts");
			const {
				fbt: ka
			} = c("./node_modules/fbt/lib/FbtPublic.js"), La = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
			var xa;
			! function(a) {
				a[a.VERIFY_EMAIL = 0] = "VERIFY_EMAIL", a[a.TURN_ON_DAYLY_DIGEST = 1] = "TURN_ON_DAYLY_DIGEST", a[a.TURN_ON_DN = 2] = "TURN_ON_DN", a[a.DONE = 3] = "DONE"
			}(xa || (xa = {}));
			var wa = ({
				card: a
			}) => {
				const e = Object(V.a)(),
					c = Object(r.d)(),
					i = a => () => e(U(a)),
					d = Object(r.e)(a => {
						var e;
						return null === (e = a.user.account) || void 0 === e ? void 0 : e.email
					}),
					m = Object(r.e)(a => a.wrappedReddit.subreddits),
					o = (a, e) => () => {
						c(async c => {
							await c(Object(Ma.d)([{
								name: a,
								type: "subreddit"
							}], !e)) && c(A({
								subredditName: a,
								subscribe: !e
							}))
						})
					},
					p = Object(r.e)(a => a.user.accountSettings.changeEmail.api.pending),
					{
						isEmailVerified: u,
						isDigestEnabled: f,
						id: h,
						title: E,
						subtitle: b
					} = a,
					[g, _] = Object(l.useState)(xa.VERIFY_EMAIL),
					v = Object(l.useRef)(d),
					Z = () => {
						oe() ? _(xa.DONE) : _(xa.TURN_ON_DN)
					},
					C = () => {
						f ? Z() : _(xa.TURN_ON_DAYLY_DIGEST)
					};
				Object(l.useEffect)(() => {
					u ? C() : _(xa.VERIFY_EMAIL)
				}, [a]), Object(l.useEffect)(() => {
					if (d !== v.current && g === xa.VERIFY_EMAIL) {
						const a = Object(s.e)(ka._("Email successfully updated!", null, {
							hk: "3iPlUp"
						}), H.b.SuccessCommunityGreen);
						c(Object(s.f)(a)), C()
					}
				}, [d, g]), Object(l.useEffect)(() => {
					p && c(Object(va.g)(Na.a))
				}, [p]);
				const M = async () => {
					e((() => a => ({
						...W.m(a),
						source: "recap",
						action: "click",
						noun: "PN_enable"
					}))()), await c(Object(Za.requestBrowserNotificationPermissionPromptByUser)(Na.f)), oe() && _(xa.DONE)
				}, N = () => {
					c(Object(va.h)(Na.a))
				}, k = () => {
					e((() => a => ({
						...W.m(a),
						source: "recap",
						action: "click",
						noun: "Email_enable"
					}))()), c(async (a, e) => {
						var c;
						await a(Object(Ca.d)({
							isEnabled: !0,
							messageType: "EMAIL_DIGEST"
						})), !!(null === (c = e().user.notificationPrefs.pushSettingsLayout.rows.byId.EMAIL_DIGEST) || void 0 === c ? void 0 : c.isEnabled) && Z()
					})
				}, L = () => e((() => a => ({
					...W.m(a),
					source: "recap",
					action: "click",
					noun: "learn_more"
				}))()), x = se(), w = (() => {
					switch (g) {
						case xa.TURN_ON_DN:
							return ka._("{=Learn more} about how we made your 2021 Reddit Recap, and {=turn on notifications} to stay in the loop.", [ka._param("=Learn more", t.a.createElement("a", {
								href: La,
								className: da.a.asLink,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: L
							}, ka._("Learn more", null, {
								hk: "JTiYQ"
							}))), ka._param("=turn on notifications", t.a.createElement("span", {
								className: da.a.asLink,
								onClick: M
							}, ka._("turn on notifications", null, {
								hk: "28vVZ4"
							})))], {
								hk: "47bjHU"
							});
						case xa.VERIFY_EMAIL:
						case xa.TURN_ON_DAYLY_DIGEST:
							return ka._("{=Learn more} about how we made your 2021 Reddit Recap, and {=turn on email digest} to stay in the loop.", [ka._param("=Learn more", t.a.createElement("a", {
								href: La,
								className: da.a.asLink,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: L
							}, ka._("Learn more", null, {
								hk: "20JB0Z"
							}))), ka._param("=turn on email digest", t.a.createElement("span", {
								className: da.a.asLink,
								onClick: g === xa.VERIFY_EMAIL ? N : k
							}, ka._("turn on email digest", null, {
								hk: "2jO5gi"
							})))], {
								hk: "1kIfGt"
							});
						case xa.DONE:
							return ka._("{=Learn more} about how we made your 2021 Reddit Recap.", [ka._param("=Learn more", t.a.createElement("a", {
								href: La,
								className: da.a.asLink,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: L
							}, ka._("Learn more", null, {
								hk: "4Dwarj"
							})))], {
								hk: "31HaEu"
							})
					}
				})();
				return t.a.createElement(t.a.Fragment, null, p && de(), t.a.createElement("div", {
					className: da.a.headingSection,
					id: h
				}, x, t.a.createElement("div", {
					className: Object(n.a)(da.a.headingWrapper, da.a.headingContent)
				}, t.a.createElement("div", {
					className: da.a.headingText
				}, t.a.createElement(ta, {
					className: da.a.logoSvg
				}), t.a.createElement("h2", {
					className: da.a.heading
				}, E), t.a.createElement("h3", {
					className: da.a.subheading
				}, b), t.a.createElement("p", {
					className: Object(n.a)(da.a.endTitle, da.a.forSecondColumns)
				}, w)), t.a.createElement("div", {
					className: da.a.headingArt
				}, t.a.createElement("div", {
					className: da.a.endWrapper
				}, m.map(a => {
					const {
						deeplink: e,
						subredditName: c,
						subredditId: l,
						subscribe: r
					} = a;
					return t.a.createElement(pa, {
						key: c,
						link: e,
						subredditName: c,
						className: da.a.isSingleStatSubreddit,
						onClick: i(l),
						onSuscribe: o(c, r),
						subscribe: r
					})
				}))), t.a.createElement("p", {
					className: Object(n.a)(da.a.endTitle, da.a.forOneColumn)
				}, w))))
			};
			const {
				fbt: Oa
			} = c("./node_modules/fbt/lib/FbtPublic.js");
			var Ia = ({
					card: a
				}) => t.a.createElement(oa, {
					card: a
				}, t.a.createElement("div", {
					className: da.a.headingArt
				}, t.a.createElement("div", {
					className: da.a.defaultCardImage
				}, t.a.createElement(ba, {
					src: a.templateImageUrl,
					alt: Oa._("descriptive image", null, {
						hk: "3D9r2N"
					}),
					className: da.a.fallbackStaticImage
				})))),
				Sa = c("./src/reddit/icons/svgs/Snoo/index.tsx");
			const {
				fbt: Ra
			} = c("./node_modules/fbt/lib/FbtPublic.js");
			var ja = ({
				card: {
					title: a,
					subtitle: e,
					id: c,
					templateImageUrl: l
				}
			}) => {
				const r = se(),
					s = Ra._("Any activity after 11/30/2021 won't be reflected in your recap.", null, {
						hk: "2AhiJj"
					});
				return t.a.createElement(t.a.Fragment, null, t.a.createElement("div", {
					id: c,
					className: da.a.headingSection
				}, r, t.a.createElement("div", {
					className: Object(n.a)(da.a.headingWrapper, da.a.headingContent)
				}, t.a.createElement("div", {
					className: da.a.headingText
				}, t.a.createElement(Sa.a, {
					className: da.a.introLogo
				}), t.a.createElement(ra, {
					className: da.a.introLogoTxt
				}), t.a.createElement("h2", {
					className: da.a.subheading
				}, e), t.a.createElement("p", {
					className: Object(n.a)(da.a.endTitle, da.a.forSecondColumns)
				}, s)), t.a.createElement("div", {
					className: da.a.headingArt
				}, t.a.createElement("div", {
					className: da.a.defaultCardImage
				}, t.a.createElement(ba, {
					src: l,
					alt: Ra._("descriptive image", null, {
						hk: "3D9r2N"
					}),
					className: da.a.fallbackStaticImage
				}))), t.a.createElement("p", {
					className: Object(n.a)(da.a.endTitle, da.a.forOneColumn)
				}, s))))
			};
			const {
				fbt: Aa
			} = c("./node_modules/fbt/lib/FbtPublic.js");
			var Da = ({
					card: a
				}) => {
					const e = Object(r.e)(a => a.wrappedReddit.isImageLoading),
						{
							postDeeplink: c,
							postImageUrl: l,
							postScore: s,
							postTitle: i,
							subredditName: d,
							postId: m,
							subredditId: o
						} = a,
						p = l ? da.a.commentPostTitle : Object(n.a)(da.a.commentPostTitle, da.a.isEmptyImage),
						{
							subredditLink: u
						} = me(c),
						f = Object(V.a)(),
						h = !l || !e;
					return t.a.createElement(oa, {
						card: a
					}, t.a.createElement("div", {
						className: da.a.headingArt
					}, t.a.createElement("div", {
						className: l ? da.a.postImageWrapper : da.a.postEmptyImage
					}, t.a.createElement(ba, {
						src: l,
						alt: Aa._("Image of post", null, {
							hk: "2wLC3D"
						}),
						className: Object(n.a)(da.a.fallbackStaticImage, da.a.postImage)
					}), h && t.a.createElement(ua, {
						link: c,
						className: p,
						onClick: () => f(B(m))
					}, t.a.createElement("p", null, i)), s && Aa._("{=[postScore]upvotes}", [Aa._param("=[postScore]upvotes", t.a.createElement("h2", {
						className: da.a.postCardCircle
					}, Aa._("{=[postScore]}{=upvotes}", [Aa._param("=[postScore]", t.a.createElement("span", {
						className: da.a.postCardCircleValue
					}, Aa._("{postScore}", [Aa._param("postScore", s)], {
						hk: "2qli1l"
					}))), Aa._param("=upvotes", t.a.createElement("span", {
						className: da.a.postCardCircleUnit
					}, Aa._("upvotes", null, {
						hk: "1HocBN"
					})))], {
						hk: "1QhOEN"
					})))], {
						hk: "3RERUS"
					}), t.a.createElement(pa, {
						link: u,
						subredditName: d,
						className: da.a.isPostCard,
						onClick: () => f(U(o))
					}))))
				},
				Fa = c("./src/reddit/controls/ToggleSwitch/index.tsx"),
				ya = c("./src/reddit/icons/svgs/InfoRedditRecap/index.tsx"),
				Pa = c("./src/reddit/actions/snoovatarModal.ts"),
				Ta = c("./src/reddit/icons/svgs/EditPencil/index.tsx"),
				Wa = c("./src/reddit/pages/WrappedReddit/CardTemplates/ShareCard/index.m.less"),
				Ua = c.n(Wa);
			const {
				fbt: Ba
			} = c("./node_modules/fbt/lib/FbtPublic.js");
			var Va = ({
				card: a,
				hideAvatar: e
			}) => {
				const {
					id: c,
					userAvatar: l,
					isPremium: s,
					userName: i,
					level: d,
					userKarma: m,
					title: o,
					subtitle: u,
					subredditListOptional: f
				} = a, h = Object(r.d)(), E = Object(V.a)(), b = a => () => E(U(a)), g = t.a.useMemo(() => l ? t.a.createElement(ba, {
					src: l,
					alt: Ba._("user avatar", null, {
						hk: "W5MAO"
					}),
					className: Ua.a.shareCardImage
				}) : t.a.createElement(t.a.Fragment, null), [l]), _ = e ? "Redditor" : i, v = e ? t.a.createElement("img", {
					src: `${K.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: Ba._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Ua.a.shareCardImage
				}) : g;
				return t.a.createElement("div", {
					className: Ua.a.back
				}, t.a.createElement("div", {
					className: Ua.a.editAvatarWrapper,
					onClick: () => h(Object(Pa.b)({
						clickSource: "recap"
					}))
				}, t.a.createElement(Ta.a, {
					className: Ua.a.editAvatar
				})), t.a.createElement("div", {
					id: c,
					className: Object(n.a)(Ua.a.shareCardImageWrrapper, {
						[Ua.a.isPremium]: s
					})
				}, t.a.createElement("div", {
					className: Ua.a.whiteBackground
				}, t.a.createElement("div", {
					className: Object(n.a)(Ua.a.backgroundWithGradient, {
						[Ua.a.isEpicLevel]: d === p.Epic,
						[Ua.a.isLegendaryLevel]: d === p.Legendary,
						[Ua.a.isCommonLevel]: d === p.Common,
						[Ua.a.isRareLevel]: d === p.Rare
					})
				}), t.a.createElement("div", {
					className: Ua.a.infoWrapper
				}, t.a.createElement("div", {
					className: Ua.a.headerWrapper
				}, t.a.createElement(Sa.a, {
					className: Ua.a.logo
				}), t.a.createElement("div", {
					className: Ua.a.user
				}, t.a.createElement("h1", {
					className: Ua.a.userName
				}, _), t.a.createElement("h2", {
					className: Ua.a.userLevel
				}, d)), t.a.createElement("div", {
					className: Ua.a.userKarma
				}, Ba._("{=[userKarma]}{=KARMA}", [Ba._param("=[userKarma]", t.a.createElement("span", {
					className: Ua.a.countKarma
				}, Ba._("{userKarma}", [Ba._param("userKarma", m)], {
					hk: "2TQ4ZC"
				}))), Ba._param("=KARMA", t.a.createElement("span", {
					className: Ua.a.karma
				}, Ba._("KARMA", null, {
					hk: "1hL9nO"
				})))], {
					hk: "2cU97Q"
				}))), v, t.a.createElement("div", {
					className: Ua.a.bottomWrapper
				}, t.a.createElement("h2", {
					className: Ua.a.abilityRow
				}, Ba._("{=ABILITY}{=[title]}", [Ba._param("=ABILITY", t.a.createElement("span", {
					className: Ua.a.abilityTitle
				}, Ba._("ABILITY", null, {
					hk: "qNm74"
				}))), Ba._param("=[title]", t.a.createElement("span", {
					className: Ua.a.abilityValue
				}, Ba._("{title}", [Ba._param("title", o)], {
					hk: "w7i10"
				})))], {
					hk: "3liwrD"
				})), t.a.createElement("div", {
					className: Ua.a.cardLinesWrapper,
					style: {
						background: `url(${K.a.assetPath}/img/wrappedreddit/card_lines.png)`
					}
				}, t.a.createElement("h1", {
					className: Ua.a.title
				}, u), t.a.createElement("div", {
					className: Ua.a.subredditListWrapper
				}, t.a.createElement("div", null, null == f ? void 0 : f.filter(a => a).map((a, e) => {
					const {
						deeplink: c,
						subredditName: l,
						subredditId: r
					} = a;
					return t.a.createElement(pa, {
						key: e,
						link: c,
						subredditName: l,
						className: Ua.a.subreddit,
						onClick: b(r)
					})
				})), t.a.createElement("p", {
					className: Ua.a.year
				}, 2021))))))))
			};
			const {
				fbt: Ya
			} = c("./node_modules/fbt/lib/FbtPublic.js"), Ha = {
				background: `url(${K.a.assetPath}/img/wrappedreddit/circle_for_oranged_bg.png) center center / 200% 200% `,
				position: "absolute"
			};
			var Ga = ({
				onClick: a
			}) => t.a.createElement("div", {
				onClick: a,
				className: Ua.a.front
			}, t.a.createElement("div", {
				className: Ua.a.shareCardImageWrrapper
			}, t.a.createElement("div", {
				className: Ua.a.whiteBackground
			}, t.a.createElement("div", {
				className: Object(n.a)(Ua.a.backgroundWithGradient, Ua.a.forFrontPage)
			}), t.a.createElement("div", {
				className: Object(n.a)(Ua.a.backgroundWithGradient, Ua.a.forFrontPage),
				style: Ha
			}), t.a.createElement("p", {
				className: Object(n.a)(Ua.a.textTop, Ua.a.forText)
			}, Ya._("What kind of redditor are you?", null, {
				hk: "3id33n"
			})), t.a.createElement(sa, {
				className: Ua.a.backgroundCircle
			}), t.a.createElement(na, {
				className: Ua.a.popcorn
			}), t.a.createElement(la, {
				className: Ua.a.dolphin
			}), t.a.createElement(ea, {
				className: Ua.a.diamond
			}), t.a.createElement(ca, {
				className: Ua.a.dog
			}), t.a.createElement(Sa.a, {
				className: Ua.a.logo
			}), t.a.createElement("p", {
				className: Object(n.a)(Ua.a.textBottom, Ua.a.forText)
			}, Ya._("Tap to reveal your secret ability", null, {
				hk: "ZBIdy"
			})))));
			const {
				fbt: za
			} = c("./node_modules/fbt/lib/FbtPublic.js");
			var Ka = ({
				card: a
			}) => {
				const e = Object(r.d)(),
					c = Object(r.e)(a => a.wrappedReddit.shareCardWasOpened),
					[l, s] = t.a.useState(!1),
					i = Object(V.a)(),
					d = a.level === p.Common,
					m = c && !d ? ie() : se(),
					o = c ? Object(n.a)(Ua.a.card, Ua.a.flipCard) : Ua.a.card,
					u = t.a.useCallback(() => {
						l || i((() => a => ({
							...W.m(a),
							source: "recap",
							action: "click",
							noun: "hide_username"
						}))()), s(!l)
					}, [i, l]);
				return t.a.createElement("div", {
					className: Ua.a.headingSection
				}, m, t.a.createElement("div", {
					className: Ua.a.cardWrapper
				}, t.a.createElement("div", {
					className: Ua.a.cardContainer
				}, t.a.createElement("div", {
					className: o
				}, t.a.createElement(Va, {
					card: a,
					hideAvatar: l
				}), t.a.createElement(Ga, {
					onClick: () => {
						e(S()), i((() => a => ({
							...W.m(a),
							source: "recap",
							action: "click",
							noun: "ability_card",
							recap: W.U(a)
						}))())
					}
				}))), c && t.a.createElement("div", {
					className: Ua.a.hideWrapper
				}, t.a.createElement("div", {
					className: Ua.a.titleWrapper
				}, t.a.createElement(ya.a, {
					className: Ua.a.infoRedditRecap
				}), t.a.createElement("p", {
					className: Ua.a.title
				}, za._("Hide my name & avatar", null, {
					hk: "2hHdO0"
				}))), t.a.createElement(Fa.a, {
					className: Ua.a.toggle,
					on: l,
					onToggle: u
				}))))
			};
			const {
				fbt: qa
			} = c("./node_modules/fbt/lib/FbtPublic.js");
			var Qa = ({
				card: a
			}) => {
				const e = Object(r.e)(a => a.wrappedReddit.isImageLoading),
					{
						templateImageUrl: c,
						isPlusText: l,
						unit: s,
						value: i
					} = a;
				return t.a.createElement(oa, {
					card: a
				}, t.a.createElement("div", {
					className: da.a.headingArt
				}, t.a.createElement("div", {
					className: da.a.defaultCardImage
				}, t.a.createElement(ba, {
					src: c,
					alt: qa._("descriptive image", null, {
						hk: "3D9r2N"
					}),
					className: da.a.fallbackStaticImage
				})), !e && t.a.createElement("div", {
					className: da.a.imageDataWrapper
				}, l && t.a.createElement("p", {
					className: da.a.plusText
				}, "+"), t.a.createElement("p", {
					className: Object(n.a)(da.a.singleStatScoreWrapper, {
						[da.a.hiddenPlusText]: !l
					})
				}, qa._("{=[value]}{=[unit]}", [qa._param("=[value]", t.a.createElement("span", {
					className: da.a.valueText
				}, qa._("{value}", [qa._param("value", i)], {
					hk: "3dsq37"
				}))), qa._param("=[unit]", t.a.createElement("span", {
					className: da.a.unitText
				}, qa._("{unit}", [qa._param("unit", s)], {
					hk: "3TDsLx"
				})))], {
					hk: "1IZwoH"
				})))))
			};
			const {
				fbt: Ja
			} = c("./node_modules/fbt/lib/FbtPublic.js");
			var Xa = ({
				card: a
			}) => {
				const e = Object(V.a)(),
					{
						subredditList: c,
						subredditCount: l,
						subredditCountSuffix: r
					} = a,
					n = Boolean(r),
					s = a => () => e(U(a));
				return t.a.createElement(oa, {
					card: a
				}, t.a.createElement("div", {
					className: da.a.headingArt
				}, t.a.createElement("div", {
					className: da.a.singleStatWrapper
				}, n && Ja._("{=[subredditCount][subredditCountSuffix]}", [Ja._param("=[subredditCount][subredditCountSuffix]", t.a.createElement("h2", {
					className: da.a.singleStatSubredditCircle
				}, Ja._("{=[subredditCount]}{=[subredditCountSuffix]}", [Ja._param("=[subredditCount]", t.a.createElement("span", {
					className: da.a.singleStatSubredditCircleValue
				}, Ja._("{subredditCount}", [Ja._param("subredditCount", l)], {
					hk: "1GEBfo"
				}))), Ja._param("=[subredditCountSuffix]", t.a.createElement("span", {
					className: da.a.singleStatSubredditCircleUnit
				}, Ja._("{subredditCountSuffix}", [Ja._param("subredditCountSuffix", r)], {
					hk: "3ZGqmH"
				})))], {
					hk: "38r358"
				})))], {
					hk: "yUpx1"
				}), c.map((a, e) => {
					const {
						deeplink: c,
						subredditName: l,
						subredditId: r
					} = a;
					return t.a.createElement(pa, {
						key: e,
						link: c,
						subredditName: l,
						className: da.a.isSingleStatSubreddit,
						onClick: s(r)
					})
				}))))
			};
			const {
				fbt: $a
			} = c("./node_modules/fbt/lib/FbtPublic.js");
			var ae = ({
				card: a
			}) => {
				const {
					templateImageUrl: e,
					subredditName: c,
					deeplink: l,
					subredditId: r
				} = a, n = Object(V.a)();
				return t.a.createElement(oa, {
					card: a
				}, t.a.createElement("div", {
					className: da.a.headingArt
				}, t.a.createElement("div", {
					className: da.a.defaultCardImage
				}, t.a.createElement(ba, {
					src: e,
					alt: $a._("descriptive image", null, {
						hk: "3D9r2N"
					}),
					className: da.a.fallbackStaticImage
				})), t.a.createElement("div", {
					className: da.a.subredditLinkWrapper
				}, t.a.createElement(pa, {
					link: l,
					subredditName: c,
					onClick: () => n(U(r))
				}))))
			};
			const {
				fbt: ee
			} = c("./node_modules/fbt/lib/FbtPublic.js");
			var ce = ({
					card: a
				}) => {
					const {
						subredditList: e
					} = a, c = Object(V.a)(), l = a => () => c(U(a));
					return t.a.createElement(oa, {
						card: a
					}, t.a.createElement("div", {
						className: da.a.headingArt
					}, t.a.createElement("div", {
						className: da.a.subredditListSection
					}, e.map((a, e) => {
						const {
							totalTimeOnSubreddit: c,
							timeUnit: r,
							deeplink: n,
							subredditName: s,
							subredditId: i
						} = a, d = Boolean(r);
						return t.a.createElement("div", {
							key: e,
							className: da.a.subredditSection
						}, d && ee._("{=[totalTimeOnSubreddit][timeUnit]}", [ee._param("=[totalTimeOnSubreddit][timeUnit]", t.a.createElement("h2", {
							className: da.a.subredditCircle
						}, ee._("{=[totalTimeOnSubreddit]}{=[timeUnit]}", [ee._param("=[totalTimeOnSubreddit]", t.a.createElement("span", {
							className: da.a.subredditCircleValue
						}, ee._("{totalTimeOnSubreddit}", [ee._param("totalTimeOnSubreddit", c)], {
							hk: "4nE9rz"
						}))), ee._param("=[timeUnit]", t.a.createElement("span", {
							className: da.a.subredditCircleUnit
						}, ee._("{timeUnit}", [ee._param("timeUnit", r)], {
							hk: "2UYL4D"
						})))], {
							hk: "48PO9L"
						})))], {
							hk: "2vAJvN"
						}), t.a.createElement(pa, {
							link: n,
							subredditName: s,
							onClick: l(i)
						}))
					}))))
				},
				le = c("./src/reddit/pages/WrappedReddit/Carousel/index.m.less"),
				te = c.n(le);
			const {
				fbt: re
			} = c("./node_modules/fbt/lib/FbtPublic.js"), ne = ({
				card: a
			}) => a ? k(a) ? t.a.createElement(ja, {
				card: a
			}) : (a => a.__typename === v)(a) ? t.a.createElement(Qa, {
				card: a
			}) : (a => a.__typename === Z)(a) ? t.a.createElement(ae, {
				card: a
			}) : (a => a.__typename === E)(a) ? t.a.createElement(Ia, {
				card: a
			}) : (a => a.__typename === C)(a) ? t.a.createElement(ce, {
				card: a
			}) : (a => a.__typename === M)(a) ? t.a.createElement(Xa, {
				card: a
			}) : (a => a.__typename === g)(a) ? t.a.createElement(Da, {
				card: a
			}) : L(a) ? t.a.createElement(Ka, {
				card: a
			}) : (a => a.__typename === f)(a) ? t.a.createElement(_a, {
				card: a
			}) : N(a) ? t.a.createElement(wa, {
				card: a
			}) : t.a.createElement(Ia, {
				card: a
			}) : null, se = a => t.a.createElement("div", {
				className: Object(n.a)(te.a.background, te.a.contentWrapper),
				style: {
					background: `url(${K.a.assetPath}${a||"/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png"}) center center / cover `
				}
			}), ie = () => t.a.createElement("div", {
				className: Object(n.a)(te.a.background, te.a.contentWrapper, te.a.orangedBackground)
			}, t.a.createElement("img", {
				src: `${K.a.assetPath}/img/wrappedreddit/circle_for_oranged_bg.png`,
				className: te.a.orangedBackgroundCircle,
				alt: re._("background circle", null, {
					hk: "3BQ4jR"
				})
			})), de = () => t.a.createElement("div", {
				className: te.a.loadingIconWrapper
			}, t.a.createElement(J.a, null)), me = a => {
				const e = a.match(/(\/r\/)(.+?)(\/.*)/i),
					c = null == e ? void 0 : e[2];
				return {
					subredditName: c,
					subredditLink: `/r/${c}/`
				}
			}, oe = () => Object(q.a)() === Q.a.Granted, {
				fbt: pe
			} = c("./node_modules/fbt/lib/FbtPublic.js");
			var ue = ({
					loadCardsAgain: a
				}) => t.a.createElement(t.a.Fragment, null, se(), t.a.createElement("div", {
					className: te.a.errorWrapper
				}, t.a.createElement(z.a, {
					className: te.a.errorLogo
				}), t.a.createElement("h1", {
					className: te.a.errorTitle
				}, pe._("Let’s try that again", null, {
					hk: "MQC5A"
				})), t.a.createElement("h2", {
					className: te.a.errorSubTitle
				}, pe._("Uh oh, something went wrong but we’re not sure what. Try that again.", null, {
					hk: "2bnXlB"
				})), t.a.createElement(G.k, {
					className: te.a.retryButton,
					priority: G.c.Primary,
					onClick: a
				}, pe._("Retry", null, {
					hk: "39xJSt"
				})))),
				fe = c("./src/reddit/selectors/activeModalId.ts");
			const {
				fbt: he
			} = c("./node_modules/fbt/lib/FbtPublic.js");
			var Ee = () => {
				const a = Object(V.a)(),
					e = Object(r.d)(),
					l = Object(r.e)(a => a.wrappedReddit.isCardsLoading),
					i = Object(r.e)(a => a.wrappedReddit.currentCardIndex),
					d = Object(r.e)(a => a.wrappedReddit.cards),
					m = Object(r.e)(a => a.wrappedReddit.shareCardWasOpened),
					o = Object(r.e)(a => a.wrappedReddit.cardsLoadingError),
					p = Object(r.e)(a => Object(fe.b)(T.a.SNOOVATAR_MODAL)(a)),
					u = d[i] && !k(d[i]),
					f = Math.ceil((i + 1) / 6),
					h = i - 6 * (f - 1),
					E = d.length > 6 && f > 1,
					b = 6 * (f - 1),
					g = b + 6,
					_ = 6 * f < d.length,
					v = i + 1 === d.length ? "Replay" : "Next",
					Z = t.a.useCallback(() => {
						e(j()), e(P())
					}, [e]);
				t.a.useEffect(() => {
					a((() => a => ({
						...W.m(a),
						source: "recap",
						action: "view",
						noun: "recap"
					}))()), Z()
				}, [Z]), t.a.useEffect(() => {
					p || e(P())
				}, [p, e]), t.a.useEffect(() => () => {
					a((() => a => ({
						...W.m(a),
						source: "recap",
						action: "click",
						noun: "dismiss",
						recap: W.U(a)
					}))())
				}, []), t.a.useEffect(() => {
					d.length && a((() => a => ({
						...W.m(a),
						source: "recap",
						action: "view",
						noun: "card",
						recap: W.U(a)
					}))())
				}, [d, i]);
				const C = a => () => {
						e(R({
							index: 6 * (f - 1) + a
						}))
					},
					M = a => () => {
						const c = 6 * f >= d.length ? 0 : 6 * f;
						e(R({
							index: a ? 6 * (f - 1) - 1 : c
						}))
					},
					N = Boolean(d[i] && L(d[i]) && !m),
					x = t.a.useCallback(async () => {
						var l;
						a((() => a => ({
							...W.m(a),
							source: "recap",
							action: "click",
							noun: "share",
							recap: W.U(a)
						}))());
						const t = (null === (l = d[i]) || void 0 === l ? void 0 : l.id) || "",
							r = document.getElementById(t);
						if (r) {
							const a = await (() => c.e(7).then(c.bind(null, "./node_modules/html-to-image/es/index.js")))(),
								l = await a.toPng(r);
							if (l) {
								const a = document.createElement("a");
								a.download = `card_${t}.png`, a.href = l, a.click();
								const c = Object(s.e)(he._("Nice! Get a new Reddit Recap accessory next time you style your avatar!", null, {
									hk: "2vA81x"
								}), H.b.SuccessCommunityGreen);
								e(Object(s.f)(c))
							}
						}
					}, [i, d]);
				return l ? (() => t.a.createElement(t.a.Fragment, null, se(), t.a.createElement(J.a, null)))() : o ? t.a.createElement(ue, {
					loadCardsAgain: Z
				}) : t.a.createElement(t.a.Fragment, null, d.length ? t.a.createElement(t.a.Fragment, null, t.a.createElement(ne, {
					card: d[i]
				}), t.a.createElement("div", {
					className: te.a.carousel
				}, t.a.createElement("div", {
					className: te.a.pager
				}, E && t.a.createElement("button", {
					onClick: M(!0)
				}, t.a.createElement("div", {
					className: te.a.nextDot
				})), d.slice(b, g).map((a, e) => t.a.createElement("button", {
					key: e,
					onClick: C(e)
				}, t.a.createElement("div", {
					className: Object(n.a)(te.a.progressDot, {
						[te.a.active]: e === h
					})
				}))), _ && t.a.createElement("button", {
					onClick: M()
				}, t.a.createElement("div", {
					className: te.a.nextDot
				}))), t.a.createElement("div", {
					className: te.a.buttonsWrapper
				}, t.a.createElement("button", {
					className: te.a.ctaButton,
					onClick: () => {
						i - 1 >= 0 && e(R({
							index: i - 1
						}))
					},
					disabled: !i
				}, he._("Back", null, {
					hk: "4mHvXx"
				})), u && t.a.createElement("button", {
					className: Object(n.a)(te.a.ctaButton, te.a.shareBtn),
					onClick: x
				}, t.a.createElement(Y.a, {
					className: te.a.downloadIcon
				}), he._("Share", null, {
					hk: "2JaG4S"
				})), t.a.createElement("button", {
					className: te.a.ctaButton,
					onClick: () => {
						e(N ? S() : R({
							index: i + 1 >= d.length ? 0 : i + 1
						}))
					}
				}, he._("{nextBtnText}", [he._param("nextBtnText", v)], {
					hk: "1yuQQG"
				}))))) : t.a.createElement(t.a.Fragment, null))
			};
			const {
				fbt: be
			} = c("./node_modules/fbt/lib/FbtPublic.js");
			e.default = () => t.a.createElement(Ee, null)
		},
		"./src/redditGQL/operations/PersonalizedYearInReview.json": function(a) {
			a.exports = JSON.parse('{"id":"df3c40ca7bfd"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/WrappedReddit.320ed5a557bfe1236516.js.map
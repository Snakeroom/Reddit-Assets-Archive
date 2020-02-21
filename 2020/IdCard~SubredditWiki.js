// https://www.redditstatic.com/desktop2x/IdCard~SubredditWiki.472c58149fc6040384d6.js
// Retrieved at 2/20/2020, 8:50:20 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["IdCard~SubredditWiki"], {
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./src/reddit/i18n/utils.ts");
			const i = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				r = (e, t) => t ? e.getUTCDate() : e.getDate(),
				a = (e, t, n) => {
					const r = t ? e.getUTCMonth() : e.getMonth(),
						a = n ? s : i;
					return Object(o.c)(a[r])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function d(e, t, n, o) {
				const i = new Date(1e3 * e),
					s = a(i, n, o),
					d = t ? r(i, n) + ", " : "";
				return "".concat(s, " ").concat(d).concat(c(i, n))
			}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return O
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				s = n("./src/reddit/actions/subreddit/constants.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/constants/blade.ts"),
				c = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				d = n("./src/reddit/i18n/utils.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				p = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/selectors/structuredStyles.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(o.a)(s.p),
				g = Object(o.a)(s.q),
				x = Object(o.a)(s.o),
				f = (e, t, n) => async (o, i, s) => {
					const r = Object(m.y)(i(), {
						subredditName: e
					});
					if (r) return O(r, t, n)(o, i, s)
				}, O = (e, t, n) => async (o, s, m) => {
					const f = await Object(l.e)(t);
					o(h());
					const O = s();
					try {
						await Object(i.g)("communityIcon", f, e.id)(o, s, m)
					} catch (T) {
						return Object(b.a)(Object(c.c)(O, "something went wrong with the uploading the image")), o(Object(r.e)({
							kind: p.b.Error,
							text: Object(d.c)("Error uploading image, please try again later")
						})), void o(x())
					}
					const y = Object(u.d)(s(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(c.c)(O, "image is null")), o(Object(r.e)({
						kind: p.b.Error,
						text: Object(d.c)("Error uploading image, please try again later")
					})), void o(x());
					await Object(i.k)(e.id, {
						communityIcon: y
					}, a.b.idCard, n)(o, s, m), o(Object(r.e)({
						kind: p.b.SuccessCommunity,
						text: Object(d.c)("Successfully updated Community Icon!")
					})), o(g())
				}
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				i = n("./node_modules/react/index.js"),
				s = n.n(i),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/lib/fastdom/index.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/selectors/tooltip.ts"),
				b = n("./src/reddit/components/ContentTooltip/index.m.less"),
				h = n.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (o = Object.getOwnPropertySymbols(e); i < o.length; i++) t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]])
				}
				return n
			};
			const f = {
					height: 200,
					width: 200
				},
				O = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				y = Object(l.a)(e => {
					const {
						children: t,
						className: n,
						style: o,
						caretPosition: i,
						caretColor: r
					} = e, a = x(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return s.a.createElement("div", g({
						className: Object(d.a)(n, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === i,
							[h.a.caretOnLeft]: "left" === i,
							[h.a.caretOnRight]: "right" === i,
							[h.a.caretOnBottom]: "bottom" === i
						}),
						style: Object.assign({}, o, {
							"--contentTooltip-caretColor": r && r[i] ? r[i] : Object(u.a)(e).body
						})
					}, a), t)
				}),
				T = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(m.b)(n)(e)
					}
				}),
				j = Object(c.a)(y, [o.a.Click, o.a.Keydown]),
				I = Object(r.b)(T);
			class _ extends s.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = f
						} = this.props;
						p.a.read(() => {
							const n = document.getElementById(e);
							if (!n) return;
							const o = n.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let i = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									i = window.innerHeight - o.bottom > t.height;
									break;
								case "left":
									i = o.left > t.width;
									break;
								case "right":
									i = o.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									i = o.top > t.height
							}
							this.setState({
								position: i ? this.props.defaultTooltipPosition : O(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: n,
						caretPosition: o
					} = this.getPositions(e);
					return s.a.createElement(j, g({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = I(_)
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				s = n("./src/reddit/components/IdCard/index.m.less"),
				r = n.n(s);
			const a = i.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return i.a.createElement("div", {
					className: r.a.Banner,
					style: t && t.length ? {
						backgroundImage: "url(".concat(t, ")")
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return p
			}));
			var o = n("./src/app/strings/index.ts"),
				i = n("./src/config.ts"),
				s = n("./src/reddit/constants/listings.ts"),
				r = n("./src/reddit/constants/page.ts");
			const a = e => e && e.toLowerCase() === s.b.Popular,
				c = e => e && e.toLowerCase() === s.b.All,
				d = e => e && e === r.b,
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				p = e => {
					let t, n, r, p, u, {
						language: m,
						listingName: b,
						subreddit: h,
						idCardWidget: g
					} = e;
					const x = g && g.subscribersText || Object(o.a)(m, "structuredStyles.widgets.id-card.subscribersText"),
						f = g && g.currentlyViewingText || Object(o.a)(m, "structuredStyles.widgets.id-card.currentlyViewingText");
					let O, y;
					if (d(b)) {
						t = "".concat(i.a.assetPath, "/img/id-cards/home-banner@2x.png"), r = l("url('".concat(i.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = s.c[s.b.Home]; {
							n = Object(o.a)(m, "listings.home.longDescription");
							const e = Object(o.a)(m, "listings.home.title");
							p = e.charAt(0).toUpperCase() + e.slice(1)
						}
					} else c(b) ? (t = "".concat(i.a.assetPath, "/img/id-cards/banner@2x.png"), n = Object(o.a)(m, "listings.all.longDescription"), r = l("url('".concat(i.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), p = "r/all", u = s.c[s.b.All]) : a(b) ? (t = "".concat(i.a.assetPath, "/img/id-cards/banner@2x.png"), n = Object(o.a)(m, "listings.popular.longDescription"), r = l("url('".concat(i.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), p = "r/popular", u = s.c[s.b.Popular]) : b && (n = g && g.description, r = l(""), p = h.displayText, u = h.url, y = g && g.subscribersCount, O = g && g.currentlyViewingCount);
					return Object.assign({
						snooBackground: r,
						description: n,
						titleText: p,
						url: u,
						subscribersCount: y,
						subscribersText: x,
						currentlyViewingText: f,
						currentlyViewingCount: O
					}, t ? {
						bannerBackgroundImage: t
					} : {})
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, n) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/IdCard/index.m.less"),
				a = n.n(r);
			const c = e => {
				let {
					snooBackground: t
				} = e;
				return i.a.createElement("div", {
					className: a.a.AdorableSnoo,
					style: {
						background: t.image,
						backgroundSize: "".concat(t.width, "px ").concat(t.height, "px"),
						height: t.height,
						width: t.width
					}
				})
			};
			t.a = e => {
				let {
					titleText: t,
					snooBackground: n
				} = e;
				return i.a.createElement("div", {
					className: Object(s.a)(a.a.Title, a.a.TitleShifted)
				}, i.a.createElement(c, {
					snooBackground: n
				}), i.a.createElement("div", {
					className: a.a.TitleTextShiftedContainer
				}, i.a.createElement("span", {
					className: a.a.TitleText
				}, t)))
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/localStorage/index.ts"),
				p = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				u = n("./src/reddit/i18n/components.tsx"),
				m = n("./src/reddit/selectors/widgets.ts"),
				b = n("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				h = n.n(b);
			const g = Object(r.c)({
					idCardWidget: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(m.d)(e, {
							subredditId: n
						})
					}
				}),
				x = e => e.includeIcon ? e.idCardWidget && e.idCardWidget.description ? i.a.createElement(u.c, null, "Edit your description and custom icon") : i.a.createElement(u.c, null, "Add a community description and custom icon") : e.idCardWidget && e.idCardWidget.description ? i.a.createElement(u.c, null, "Edit your description") : i.a.createElement(u.c, null, "Add a community description"),
				f = e => e.includeIcon ? i.a.createElement(u.c, null, "Tell us about your community and upload a custom avatar so users can easily identify your community") : i.a.createElement(u.c, null, "Tell us more about your community.");
			class O extends i.a.Component {
				componentDidMount() {
					this.props.sendEvent(p.e), this.props.onViewTooltip()
				}
				render() {
					const e = x(this.props),
						t = f(this.props);
					return i.a.createElement("div", {
						className: h.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, i.a.createElement("span", {
						className: h.a.topRow
					}, i.a.createElement("h3", {
						className: h.a.title
					}, e)), i.a.createElement("p", {
						className: h.a.tooltipBody
					}, t), i.a.createElement(d.f, {
						className: h.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, i.a.createElement(u.c, null, "Got it")))
				}
			}
			t.a = Object(s.b)(g, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					onDismissTooltip: () => {
						e(Object(a.i)()), Object(l.O)(n, !0)
					},
					onViewTooltip: () => {
						Object(l.ab)()
					}
				}
			})(Object(c.b)(O))
		},
		"./src/reddit/components/InlineSubredditEditing/index.m.less": function(e, t, n) {
			e.exports = {
				tooltipContent: "RrvkJ7ntzKYyaCOxMJ1RM",
				title: "BE2vGjFTJ80XkdBpRRr0p",
				tooltipBody: "_2yezzi8dgIemh3F2q_kvcp",
				topRow: "_1JfvdiRxYTSKf1IIe7DUvM",
				gotIt: "_1MHKCZd72tAgyoZWvIYM-G"
			}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/i18n/utils.ts"),
				p = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./src/reddit/components/OverflowMenu/index.m.less"),
				x = n.n(g);
			const f = c.a.wrapped(u.a, "_Dropdown", x.a),
				O = Object(p.a)(f),
				y = c.a.button("MenuButton", x.a),
				T = c.a.wrapped(b.a, "MenuIcon", x.a),
				j = c.a.wrapped(m.b, "DropdownRow", x.a),
				I = Object(r.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(h.b)(n)(e)
					}
				}),
				_ = Object(s.b)(I, (e, t) => {
					let {
						dropdownId: n
					} = t;
					return {
						toggleDropdown: () => e(Object(d.h)({
							tooltipId: n
						}))
					}
				}),
				C = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = _(e => i.a.createElement(y, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": Object(l.c)("more options"),
				className: Object(a.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: C(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : i.a.createElement(T, null), i.a.createElement(O, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/ContentTooltip/index.tsx"),
				p = n("./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/tooltips.ts"),
				b = n("./src/reddit/controls/ImageInput/index.tsx"),
				h = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				x = n("./src/reddit/helpers/localStorage/index.ts"),
				f = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				O = n("./src/reddit/i18n/components.tsx"),
				y = n("./src/reddit/i18n/utils.ts"),
				T = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				j = e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 17",
					version: "1.1"
				}, i.a.createElement("path", {
					d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
					id: "a"
				})),
				I = n("./src/reddit/models/ApiRequestState/index.ts"),
				_ = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				C = n("./src/reddit/components/SubredditIcon/index.m.less"),
				E = n.n(C);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (o = Object.getOwnPropertySymbols(e); i < o.length; i++) t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]])
				}
				return n
			};
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					this.setState({
						tooltipDismissed: Object(x.l)(this.props.subredditId)
					})
				}
				render() {
					const e = this.props,
						{
							subredditId: t,
							className: n,
							inTopBar: o,
							tooltipDisabled: s
						} = e,
						r = v(e, ["subredditId", "className", "inTopBar", "tooltipDisabled"]),
						c = [n, E.a.inTopBar, E.a.iconContainer];
					return o ? c.push(E.a.emptyEditableIconInTopBar) : c.push(E.a.editableIcon, E.a.emptyEditableIcon), i.a.createElement("span", w({}, r, {
						id: this.props.tooltipDisabled ? void 0 : m.a,
						className: Object(a.a)(...c)
					}), o ? i.a.createElement(j, {
						className: E.a.emptyUploadButton
					}) : i.a.createElement(T.a, {
						className: E.a.emptyPlusButton
					}), this.props.children, !this.state.tooltipDismissed && !this.props.tooltipDisabled && i.a.createElement(l.a, {
						className: E.a.tooltip,
						tooltipId: m.a,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, i.a.createElement(p.a, {
						includeIcon: !o,
						subredditId: t
					})))
				}
			}
			const P = e => {
					const {
						iconColor: t,
						className: n,
						alt: o,
						role: s,
						onClick: r,
						inTopBar: c,
						src: d
					} = e;
					return i.a.createElement("span", {
						className: E.a.iconContainer
					}, i.a.createElement("img", {
						onClick: r,
						role: s,
						alt: o,
						src: d,
						className: Object(a.a)(n, {
							[E.a.editableIcon]: !c
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				D = Object(r.c)({
					isLoading: _.b
				});
			class k extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(f.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(b.a, {
						className: E.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(I.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				componentDidMount() {
					this.props.inTopBar || this.props.onShowTooltip()
				}
				renderEditButton() {
					const {
						url: e
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? i.a.createElement("span", {
						className: E.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? i.a.createElement(O.c, null, "Update icon") : i.a.createElement(O.c, null, "Add icon")) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(P, w({
						src: e,
						alt: Object(y.c)("Subreddit icon"),
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, i.a.createElement(S, w({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(S, w({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [E.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(E.a.loadingIconInTopBar), t = 32), i.a.createElement(h.a, {
							className: Object(a.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? i.a.createElement("div", {
						className: E.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(s.b)(D, (e, t) => ({
				onFileSelected: (n, o) => {
					e(Object(c.a)(t.subreddit, n, o))
				},
				onShowTooltip: () => {
					e(Object(d.f)({
						tooltipId: m.a
					}))
				}
			}))(Object(u.b)(k))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/react/index.js"),
				i = n.n(o);
			class s extends i.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || ""
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", o = "object" == typeof t.value ? t.value : null, s = n || o;
					return i.a.createElement("div", {
						className: e.className
					}, n && i.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), !s && i.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var n = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (o = Object.getOwnPropertySymbols(e); i < o.length; i++) t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]])
					}
					return n
				};

			function d(e, t, n) {
				const o = Object(r.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(s.b)(o)(e => {
					const {
						featureEnabled: o,
						dispatch: s
					} = e, r = c(e, ["featureEnabled", "dispatch"]);
					return o ? i.a.createElement(t, r) : void 0 !== n ? i.a.createElement(n, r) : null
				})
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				i = n.n(o);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		}
	}
]);
//# sourceMappingURL=IdCard~SubredditWiki.472c58149fc6040384d6.js.map
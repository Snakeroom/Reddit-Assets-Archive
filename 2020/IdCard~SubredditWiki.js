// https://www.redditstatic.com/desktop2x/IdCard~SubredditWiki.8c7fcd957779a3fb8cd4.js
// Retrieved at 2/5/2020, 2:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["IdCard~SubredditWiki"], {
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/reddit/i18n/utils.ts");
			const i = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				o = (e, t) => t ? e.getUTCDate() : e.getDate(),
				a = (e, t, n) => {
					const o = t ? e.getUTCMonth() : e.getMonth(),
						a = n ? s : i;
					return Object(r.c)(a[o])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function d(e, t, n, r) {
				const i = new Date(1e3 * e),
					s = a(i, n, r),
					d = t ? o(i, n) + ", " : "";
				return "".concat(s, " ").concat(d).concat(c(i, n))
			}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return y
			})), n.d(t, "a", (function() {
				return f
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				s = n("./src/reddit/actions/subreddit/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/constants/blade.ts"),
				c = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				d = n("./src/reddit/i18n/utils.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const g = Object(r.a)(s.p),
				h = Object(r.a)(s.q),
				x = Object(r.a)(s.o),
				y = (e, t, n) => async (r, i, s) => {
					const o = Object(m.B)(i(), {
						subredditName: e
					});
					if (o) return f(o, t, n)(r, i, s)
				}, f = (e, t, n) => async (r, s, m) => {
					const y = await Object(l.e)(t);
					r(g());
					const f = s();
					try {
						await Object(i.g)("communityIcon", y, e.id)(r, s, m)
					} catch (T) {
						return Object(b.a)(Object(c.c)(f, "something went wrong with the uploading the image")), r(Object(o.e)({
							kind: u.b.Error,
							text: Object(d.c)("Error uploading image, please try again later")
						})), void r(x())
					}
					const E = Object(p.d)(s(), {
						name: "communityIcon"
					});
					if (!E) return Object(b.a)(Object(c.c)(f, "image is null")), r(Object(o.e)({
						kind: u.b.Error,
						text: Object(d.c)("Error uploading image, please try again later")
					})), void r(x());
					await Object(i.k)(e.id, {
						communityIcon: E
					}, a.b.idCard, n)(r, s, m), r(Object(o.e)({
						kind: u.b.SuccessCommunity,
						text: Object(d.c)("Successfully updated Community Icon!")
					})), r(h())
				}
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				s = n("./src/reddit/components/IdCard/index.m.less"),
				o = n.n(s);
			const a = i.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return i.a.createElement("div", {
					className: o.a.Banner,
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
				return u
			}));
			var r = n("./src/app/strings/index.ts"),
				i = n("./src/config.ts"),
				s = n("./src/reddit/constants/listings.ts"),
				o = n("./src/reddit/constants/page.ts");
			const a = e => e && e.toLowerCase() === s.b.Popular,
				c = e => e && e.toLowerCase() === s.b.All,
				d = e => e && e === o.b,
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				u = e => {
					let t, n, o, u, p, {
						language: m,
						listingName: b,
						subreddit: g,
						idCardWidget: h
					} = e;
					const x = h && h.subscribersText || Object(r.a)(m, "structuredStyles.widgets.id-card.subscribersText"),
						y = h && h.currentlyViewingText || Object(r.a)(m, "structuredStyles.widgets.id-card.currentlyViewingText");
					let f, E;
					if (d(b)) {
						t = "".concat(i.a.assetPath, "/img/id-cards/home-banner@2x.png"), o = l("url('".concat(i.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), p = s.c[s.b.Home]; {
							n = Object(r.a)(m, "listings.home.longDescription");
							const e = Object(r.a)(m, "listings.home.title");
							u = e.charAt(0).toUpperCase() + e.slice(1)
						}
					} else c(b) ? (t = "".concat(i.a.assetPath, "/img/id-cards/banner@2x.png"), n = Object(r.a)(m, "listings.all.longDescription"), o = l("url('".concat(i.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = "r/all", p = s.c[s.b.All]) : a(b) ? (t = "".concat(i.a.assetPath, "/img/id-cards/banner@2x.png"), n = Object(r.a)(m, "listings.popular.longDescription"), o = l("url('".concat(i.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = "r/popular", p = s.c[s.b.Popular]) : b && (n = h && h.description, o = l(""), u = g.displayText, p = g.url, E = h && h.subscribersCount, f = h && h.currentlyViewingCount);
					return Object.assign({
						snooBackground: o,
						description: n,
						titleText: u,
						url: p,
						subscribersCount: E,
						subscribersText: x,
						currentlyViewingText: y,
						currentlyViewingCount: f
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
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/IdCard/index.m.less"),
				a = n.n(o);
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
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				p = n("./src/reddit/i18n/components.tsx"),
				m = n("./src/reddit/selectors/widgets.ts"),
				b = n("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				g = n.n(b);
			const h = Object(o.c)({
					idCardWidget: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(m.d)(e, {
							subredditId: n
						})
					}
				}),
				x = e => e.includeIcon ? e.idCardWidget && e.idCardWidget.description ? i.a.createElement(p.c, null, "Edit your description and custom icon") : i.a.createElement(p.c, null, "Add a community description and custom icon") : e.idCardWidget && e.idCardWidget.description ? i.a.createElement(p.c, null, "Edit your description") : i.a.createElement(p.c, null, "Add a community description"),
				y = e => e.includeIcon ? i.a.createElement(p.c, null, "Tell us about your community and upload a custom avatar so users can easily identify your community") : i.a.createElement(p.c, null, "Tell us more about your community.");
			class f extends i.a.Component {
				componentDidMount() {
					this.props.sendEvent(u.e), this.props.onViewTooltip()
				}
				render() {
					const e = x(this.props),
						t = y(this.props);
					return i.a.createElement("div", {
						className: g.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, i.a.createElement("span", {
						className: g.a.topRow
					}, i.a.createElement("h3", {
						className: g.a.title
					}, e)), i.a.createElement("p", {
						className: g.a.tooltipBody
					}, t), i.a.createElement(d.f, {
						className: g.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, i.a.createElement(p.c, null, "Got it")))
				}
			}
			t.a = Object(s.b)(h, (e, t) => {
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
			})(Object(c.b)(f))
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
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/ContentTooltip/index.tsx"),
				u = n("./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/tooltips.ts"),
				b = n("./src/reddit/controls/ImageInput/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				x = n("./src/reddit/helpers/localStorage/index.ts"),
				y = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				f = n("./src/reddit/i18n/components.tsx"),
				E = n("./src/reddit/i18n/utils.ts"),
				T = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				I = e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 17",
					version: "1.1"
				}, i.a.createElement("path", {
					d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
					id: "a"
				})),
				_ = n("./src/reddit/models/ApiRequestState/index.ts"),
				j = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				O = n("./src/reddit/components/SubredditIcon/index.m.less"),
				C = n.n(O);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var S = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
				}
				return n
			};
			class w extends i.a.Component {
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
							inTopBar: r,
							tooltipDisabled: s
						} = e,
						o = S(e, ["subredditId", "className", "inTopBar", "tooltipDisabled"]),
						c = [n, C.a.inTopBar, C.a.iconContainer];
					return r ? c.push(C.a.emptyEditableIconInTopBar) : c.push(C.a.editableIcon, C.a.emptyEditableIcon), i.a.createElement("span", v({}, o, {
						id: this.props.tooltipDisabled ? void 0 : m.a,
						className: Object(a.a)(...c)
					}), r ? i.a.createElement(I, {
						className: C.a.emptyUploadButton
					}) : i.a.createElement(T.a, {
						className: C.a.emptyPlusButton
					}), this.props.children, !this.state.tooltipDismissed && !this.props.tooltipDisabled && i.a.createElement(l.a, {
						className: C.a.tooltip,
						tooltipId: m.a,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, i.a.createElement(u.a, {
						includeIcon: !r,
						subredditId: t
					})))
				}
			}
			const B = e => {
					const {
						iconColor: t,
						className: n,
						alt: r,
						role: s,
						onClick: o,
						inTopBar: c,
						src: d
					} = e;
					return i.a.createElement("span", {
						className: C.a.iconContainer
					}, i.a.createElement("img", {
						onClick: o,
						role: s,
						alt: r,
						src: d,
						className: Object(a.a)(n, {
							[C.a.editableIcon]: !c
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				k = Object(o.c)({
					isLoading: j.b
				});
			class N extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(y.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(b.a, {
						className: C.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(_.b)();
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
					} = Object(h.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? i.a.createElement("span", {
						className: C.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? i.a.createElement(f.c, null, "Update icon") : i.a.createElement(f.c, null, "Add icon")) : null
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
					} = Object(h.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(B, v({
						src: e,
						alt: Object(E.c)("Subreddit icon"),
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
					}, i.a.createElement(w, v({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(w, v({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [C.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(C.a.loadingIconInTopBar), t = 32), i.a.createElement(g.a, {
							className: Object(a.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(h.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? i.a.createElement("div", {
						className: C.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(s.b)(k, (e, t) => ({
				onFileSelected: (n, r) => {
					e(Object(c.a)(t.subreddit, n, r))
				},
				onShowTooltip: () => {
					e(Object(d.f)({
						tooltipId: m.a
					}))
				}
			}))(Object(p.b)(N))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(a),
				d = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
					}
					return n
				};
			const l = s.a.div("WidgetBackground", c.a),
				u = s.a.wrapped(e => {
					var {
						children: t
					} = e, n = d(e, ["children"]);
					return i.a.createElement("div", n, i.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => i.a.createElement("div", {
				className: e.className
			}, i.a.createElement(l, null, e.children))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				i = n.n(r);
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
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, s = n || r;
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
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
					}
					return n
				};

			function d(e, t, n) {
				const r = Object(o.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(s.b)(r)(e => {
					const {
						featureEnabled: r,
						dispatch: s
					} = e, o = c(e, ["featureEnabled", "dispatch"]);
					return r ? i.a.createElement(t, o) : void 0 !== n ? i.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				i = n.n(r);
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
//# sourceMappingURL=IdCard~SubredditWiki.8c7fcd957779a3fb8cd4.js.map
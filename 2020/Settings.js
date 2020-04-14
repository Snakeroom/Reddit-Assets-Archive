// https://www.redditstatic.com/desktop2x/Settings.90126d30677632e5a513.js
// Retrieved at 4/14/2020, 2:30:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Settings"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/currency/cleanNumber/index.ts");

			function a(e, t) {
				const n = Object(s.a)(e),
					a = parseInt(n) / 100;
				return Math.floor(a) !== a || t ? a.toFixed(2) : String(a)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js");

			function s(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/reddit/i18n/utils.ts");
			const a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				o = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, n) => {
					const o = t ? e.getUTCMonth() : e.getMonth(),
						i = n ? r : a;
					return Object(s.b)(i[o])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function l(e, t, n, s) {
				const a = new Date(1e3 * e),
					r = i(a, n, s),
					l = t ? o(a, n) + ", " : "";
				return "".concat(r, " ").concat(l).concat(c(a, n))
			}
		},
		"./src/lib/validateEmail/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => {
				if (!e && t) return !0;
				return /^.+\@.+\..+$/.test(e)
			}
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				a = n("./src/reddit/helpers/routeKey/index.ts"),
				r = n("./src/reddit/helpers/trackers/screenview.ts"),
				o = n("./src/telemetry/index.ts"),
				i = n("./src/telemetry/models/Timer.ts");
			const c = () => async (e, t) => {
				const n = t(),
					{
						currentPage: c
					} = n.platform;
				if (!c) return;
				const l = c.routeMatch,
					d = Object(s.a)(n),
					m = Object(a.b)(l, n, d);
				m && o.c.has(m) && Object(r.g)(l, n, i.TimerType.InApp, o.c.end(m))
			}
		},
		"./src/reddit/components/ConfirmModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3DhQ2s_h1XCiwltypHmlbp",
				close: "_2oxgXPm-tiPAEPsJoUw-ZD",
				headerText: "_2sDCzF6zlpNJ5cbVDRCPOS",
				text: "_3eWjwYvkDvPzyq4FlubrF9",
				buttonWrapper: "_6ZHRZ8Epefe887d7LL-q6",
				primaryButton: "Ch-0dFLxLOtcc6xCyQvsk",
				secondaryButton: "bgwHoiDoSwFVZKRTLRQMF"
			}
		},
		"./src/reddit/components/ConfirmModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/ConfirmModal/index.m.less"),
				c = n.n(i),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(r.a)(e => a.a.createElement("div", {
				className: c.a.container
			}, a.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: c.a.close
			}, a.a.createElement(l.b, null)), a.a.createElement(l.g, null, a.a.createElement("h2", {
				className: c.a.headerText
			}, e.headerText)), a.a.createElement(l.j, null, e.message && a.a.createElement("p", {
				className: c.a.text
			}, e.message), e.children && a.a.createElement("div", {
				className: c.a.text
			}, e.children), a.a.createElement("div", {
				className: c.a.buttonWrapper
			}, e.cancelText && a.a.createElement(o.i, {
				className: c.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), a.a.createElement(o.f, {
				className: c.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/Economics/Price/index.m.less": function(e, t, n) {
			e.exports = {
				price: "_2ZOGQHalmPN89FqiioxqoW",
				token: "_2PNHBi0pHlP4y_f4W9yfPw"
			}
		},
		"./src/reddit/components/Economics/Price/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/currency/centsToDollars/index.ts"),
				l = n("./src/reddit/components/Governance/Token/index.tsx"),
				d = n("./src/reddit/helpers/governance/tokens.ts"),
				m = n("./src/reddit/selectors/gov.ts"),
				u = n("./src/reddit/components/Economics/Price/strings.ts"),
				p = n("./src/reddit/components/Economics/Price/index.m.less"),
				b = n.n(p);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = e => {
				let {
					subredditId: t,
					pointPrice: n
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(l.a, {
					className: b.a.token,
					subredditId: t
				}), n)
			}, f = Object(o.c)({
				tokenDisplayConversion: m.o,
				tokenName: m.p
			});
			t.a = Object(r.b)(f)(e => {
				const {
					className: t,
					monthly: n,
					subredditId: s,
					tokenDisplayConversion: r,
					tokenName: o
				} = e, l = e.dollarPrice && "$".concat(Object(c.a)(e.dollarPrice, !0)), m = e.tokenPrice && Object(d.b)(e.tokenPrice, r) + " " + o;
				if (!l && !m) return null;
				const p = n ? u.a.Monthly : u.a.Once;
				return a.a.createElement("span", {
					className: Object(i.a)(t, b.a.price)
				}, l && m ? h._("{dollar-price} or {point-price}", [h._param("dollar-price", Object(u.c)(l, p)), h._param("point-price", a.a.createElement(g, {
					subredditId: s,
					pointPrice: Object(u.c)(m, p)
				}))], {
					hk: "2Gif0l"
				}) : l ? Object(u.b)(l, p) : m ? Object(u.b)(m, p) : null)
			})
		},
		"./src/reddit/components/Economics/Price/strings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s, a = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(s || (s = {}));
			const r = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
							return a.fbt._("{price} /mo", [a.fbt._param("price", e)], {
								hk: "4CwhpC"
							});
						default:
							return e
					}
				},
				o = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
							return a.fbt._("{price} / month", [a.fbt._param("price", e)], {
								hk: "4ugXuk"
							});
						default:
							return e
					}
				}
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.m.less": function(e, t, n) {
			e.exports = {
				benefit: "sgAzSfJ3cjofmRQShi_EG",
				benefitsTitle: "_3LDMgjJZ0criD5C6vkYGyG",
				benefits: "_3uGt177J_rZ6Xz6VzVrs7Z",
				benefitCircle: "_2jc7SMzkp0naDavfk2O28v",
				brand: "_3l53DizR_kkO_baf0os07b",
				checkmarkWrapper: "NN5iOi2K5sFG4C9YcGUIn",
				checkmark: "ZUu3aY57ejQ1NApIW8_Jq",
				container: "_23Y0-3FxDgPbvd5cJxfyS8",
				joined: "_2QYhI2fIKc9rPD-QKvqcxf",
				joinedText: "_1UqTSeE2qLQTQSMvmNlVYF",
				price: "_3EoQAq_DUikYdJTKGFrJdE",
				subTitle: "_1NWafiCzr-9q28pfaL-tDA",
				title: "_2axdI_1ILk9zDgceVsmJwZ",
				topLine: "ZcAgghBpd1Mtnj5tk5c93"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/currency/centsToDollars/index.ts"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/ApiContext.tsx"),
				m = n("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.m.less"),
				u = n.n(m);
			const p = [() => s.fbt._("Loyalty badge", null, {
					hk: "2xuuHW"
				}), () => s.fbt._("New style badges every month", null, {
					hk: "4figaI"
				}), () => s.fbt._("Distinguished username", null, {
					hk: "2X7IoJ"
				}), () => s.fbt._("Support new feature development", null, {
					hk: "4wnxbi"
				})],
				b = [() => s.fbt._("Emotes in comments", null, {
					hk: "3pBItU"
				}), () => s.fbt._("Achievement badges", null, {
					hk: "BcuB7"
				}), () => s.fbt._("Images & GIFs in comments", null, {
					hk: "4ASFBV"
				}), () => s.fbt._("Members lounge", null, {
					hk: "2iNFqG"
				})];

			function h(e) {
				let {
					benefit: t,
					color: n
				} = e;
				return i.a.createElement("li", {
					className: u.a.benefit
				}, i.a.createElement("div", {
					className: u.a.benefitCircle,
					style: {
						backgroundColor: n
					}
				}), t)
			}
			t.b = Object(d.b)(Object(l.c)((function(e) {
				const {
					className: t,
					price: n,
					subreddit: o
				} = e;
				return i.a.createElement("div", {
					className: Object(a.a)(u.a.container, t)
				}, i.a.createElement("div", {
					className: u.a.topLine
				}, i.a.createElement(c.a, {
					className: u.a.brand,
					subreddit: o
				}), i.a.createElement("div", {
					className: u.a.title
				}, s.fbt._("{community} Supporter Membership", [s.fbt._param("community", o.displayText)], {
					hk: "eZ8PH"
				}))), i.a.createElement("header", {
					className: u.a.subTitle
				}, s.fbt._("Support the {community} community and receive exclusive access to premium features.", [s.fbt._param("community", o.displayText)], {
					hk: "2pm4PV"
				})), i.a.createElement("article", null, i.a.createElement("div", {
					className: u.a.benefitsTitle
				}, s.fbt._("membership benefits", null, {
					hk: "Uqmbk"
				})), i.a.createElement("ul", {
					className: u.a.benefits
				}, p.map(e => i.a.createElement(h, {
					benefit: e(),
					key: e()
				}))), i.a.createElement("div", {
					className: u.a.benefitsTitle
				}, s.fbt._("coming soon (maybe)", null, {
					hk: "1wQhrn"
				})), i.a.createElement("ul", {
					className: u.a.benefits
				}, b.map(e => i.a.createElement(h, {
					benefit: e(),
					key: e()
				})))), i.a.createElement("footer", {
					className: u.a.price
				}, s.fbt._("${price}/month", [s.fbt._param("price", Object(r.a)(n))], {
					hk: "2ykEVh"
				})))
			})))
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less": function(e, t, n) {
			e.exports = {
				bling1: "_3bFpAdmzeju5Ql4apA72Mz",
				pulse: "_14AnDN_X0RSUfV9D1Pe9X9",
				bling2: "_-8SkYF0AWUhZMShvTAty8",
				bling3: "_33JifCWcX_crkurifB5pzo",
				container: "_3gI6KjxK9w-BF4adKznqm6",
				crown: "_2UUIJaaZ6FDtWk-CQ_bAJF",
				crownTilt: "m3mBh304aV8eRhpVYDtv",
				crownImg: "_3UjxD8eArSGPOK9ydFdB66",
				crownTiltImg: "_335XoNCIgdnw1NeVMSD3YB",
				defaultIcon: "_1UJ_7ZuaT1wJZzUY6CLslm",
				icon: "_27dkKf4zi-Ny4-FV0XKx0d",
				largeContainer: "_2vtPk3WzODfPV6T2uKOi9x",
				largeBling1: "tQV0dex-2wW9l95VW59ym",
				largeBling2: "_22o1BzEAX778WumBKRfDae",
				largeBling3: "MqH9i4M4OAiAmvS-AdBJx",
				largeCrown: "_30sWCOTB9B8ZfsCDuOoMvQ",
				largeCrownImg: "_1hUveqwJI6eda9EpmMvUJI",
				largeDefaultIcon: "_3_OgvcHTKNX0og_Fw-oHOc",
				largeIcon: "_18B8fdJn2VAl1XHi5AdcVc"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts");

			function o(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, a.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
			var i = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				c = n("./src/reddit/icons/svgs/Crown/index.tsx"),
				l = n("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				d = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less"),
				m = n.n(d);
			const u = {
				regular: {
					bling1: m.a.bling1,
					bling2: m.a.bling2,
					bling3: m.a.bling3,
					container: m.a.container,
					crown: m.a.crown,
					crownImg: m.a.crownImg,
					defaultIcon: m.a.defaultIcon,
					icon: m.a.icon
				},
				large: {
					bling1: m.a.largeBling1,
					bling2: m.a.largeBling2,
					bling3: m.a.largeBling3,
					container: m.a.largeContainer,
					crown: m.a.largeCrown,
					crownImg: m.a.largeCrownImg,
					defaultIcon: m.a.largeDefaultIcon,
					icon: m.a.largeIcon
				}
			};

			function p(e) {
				const t = e.subreddit && (e.subreddit.communityIcon || e.subreddit.icon.url),
					n = u[e.size || "regular"],
					s = e.subreddit && e.subreddit.primaryColor;
				return a.a.createElement("div", {
					className: Object(r.a)(n.container, e.className)
				}, e.subreddit ? a.a.createElement("img", {
					className: n.crownImg,
					src: Object(l.a)(e.subreddit, "Crown.gif")
				}) : a.a.createElement(c.a, {
					className: n.crown
				}), a.a.createElement(o, {
					className: n.bling1
				}), a.a.createElement(o, {
					className: n.bling2
				}), a.a.createElement(o, {
					className: n.bling3
				}), t ? a.a.createElement("img", {
					className: n.icon,
					src: t,
					style: {
						backgroundColor: s
					}
				}) : a.a.createElement(i.a, {
					className: n.defaultIcon,
					style: {
						backgroundColor: s
					}
				}))
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/reddit/selectors/gov.ts");
			const l = Object(o.c)({
				tokenSymbol: c.q
			});
			t.a = Object(r.b)(l)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return a.a.createElement("img", {
					className: e.className,
					src: "".concat(i.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				o = n.n(r);
			const i = e => a.a.createElement("div", {
				className: o.a.bullet
			}, a.a.createElement("div", {
				className: o.a.circle
			}, e.index), e.children)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/qrcode/lib/browser.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class l extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						dataURL: null
					}
				}
				componentDidMount() {
					this.updateDataURL()
				}
				componentDidUpdate(e) {
					e.url !== this.props.url && this.updateDataURL()
				}
				async updateDataURL() {
					const e = await a.a.toDataURL(this.props.url, {
						color: {
							dark: this.props.color || Object(c.a)(this.props).button,
							light: Object(c.a)(this.props).body
						},
						margin: 0,
						width: 176
					});
					this.setState({
						dataURL: e
					})
				}
				render() {
					const {
						dataURL: e
					} = this.state;
					return e ? o.a.createElement("img", {
						src: e
					}) : null
				}
			}
			t.a = Object(i.a)(l)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "zf2hn2CERT9hR1pMinJ8F",
				header: "_3Qbr92L8VyuinXjEu3tL3Z",
				title: "_3bzQcWx2T0t87zOlgxrRKU",
				closeButton: "_22lrdZNOZAr7T7zmwmjUvJ",
				body: "_3Gcx8rw4-_lVDd-C1xmCEi",
				leftSection: "_3YqVpshpU6XQk203i6QdDy",
				sectionHeader: "_1ubUpPIvDdZW-u31PFTQzQ",
				content: "_1vBcEJHUketYOZJIkZpJEH",
				bullet: "_1NkUPpb7srAhbim5_nyFUH",
				circle: "_3dmqOAtE4YgxGinHtv6QZs",
				rightSection: "_2KqtJ5hLjiAZnv3xLL4_M6",
				qrCode: "_14NzP1hK14fTKLhwIn2aDG",
				amount: "yAJDmHckBS4VSNkr7oGi4"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_1ujAdmx9p1ZtDs5hGNKqxa",
				leftSection: "_1HtpEFt_H9-TSPUAO40Z-e",
				sectionHeader: "_2kwF36BsSdAp4SHuoiGycG",
				content: "_1AoGRYkiuWDGUrnKhaEAsU",
				rightSection: "_2thtUlDB-iI-fgl_zwElV2",
				qrCode: "_2rbXdga6vMYV1aCAtGfPiv"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(i.c)(e => {
				const t = "".concat(e.tooltipId, "-hover-id");
				return a.a.createElement(r.a, {
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, a.a.createElement(o.a, {
					className: e.className,
					hoverId: t,
					sendEvent: e.sendEvent,
					subredditId: e.subredditId,
					tooltipId: e.tooltipId,
					tooltipType: e.tooltipType,
					userName: e.user
				}))
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts");
			const r = "UserInfoTooltip",
				o = () => null;
			t.b = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(a.a)(() => Promise.all([n.e("AuthorHovercard~Settings~SubredditWiki"), n.e("AuthorHovercard")]).then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return N
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/lodash/isNil.js")),
				c = n.n(i),
				l = n("./src/reddit/constants/jsapiEvents.ts");
			var d = n("./src/reddit/singleton/EventSystem.ts"),
				m = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
					}
					return n
				};
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class p extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: n,
								consumers: s
							} = t,
							a = m(t, ["className", "consumers"]);
						d.a.publish(l.a, a, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					c()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					c()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? a.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && a.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var b = Object(r.b)(u, {})(p),
				h = n("./src/reddit/selectors/comments.ts"),
				g = n("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const n = Object(h.n)(e, t),
					s = Object(g.G)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(r.b)(() => Object(o.a)(f, h.j, (e, t) => Object.assign({}, e, {
				depth: t
			})))(e => a.a.createElement(b, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const _ = (e, t) => {
				const n = Object(h.n)(e, t),
					s = Object(g.G)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var y = Object(r.b)(() => Object(o.a)(_, e => e))(e => a.a.createElement(b, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var C = Object(r.b)(() => Object(o.c)({
					subreddit: g.P
				}))(e => a.a.createElement(b, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				k = n("./src/reddit/selectors/posts.ts");
			var x = Object(r.b)(() => Object(o.c)({
				post: k.N,
				subredditOrProfile: k.Z,
				isModerator: (e, t) => {
					const n = Object(k.Z)(e, t);
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => a.a.createElement(b, {
				className: e.className,
				type: "post",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					created: e.post.created,
					numComments: e.post.numComments,
					distinguishType: e.post.distinguishType,
					domain: e.post.source && e.post.source.displayText,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					sourceUrl: e.post.source && e.post.source.url,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var E = Object(r.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(k.Z)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const n = Object(k.Z)(e, {
						postId: t.post.id
					});
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => a.a.createElement(b, {
				className: e.className,
				type: "postAuthor",
				data: {
					author: e.post.author,
					isModerator: e.isModerator,
					post: {
						id: e.post.id
					},
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {}
				}
			}));
			var w = Object(r.b)(() => Object(o.c)({
				post: k.N,
				subredditOrProfile: k.Z,
				isModerator: (e, t) => {
					const n = Object(k.Z)(e, t);
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => a.a.createElement(b, {
				className: e.className,
				type: "postModTools",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					distinguishType: e.post.distinguishType,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					numComments: e.post.numComments,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var S = Object(r.b)(() => Object(o.c)({
				subreddit: g.P
			}))(e => a.a.createElement(b, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var O = Object(r.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(g.J)(e, {
					identifier: t
				})
			}))(e => a.a.createElement(b, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var N = Object(r.b)(() => Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(g.P)(e, {
						subredditId: n
					}) : null
				}
			}))(e => a.a.createElement(b, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/svgs/Best/index.m.less"),
				c = n.n(i);
			var l = e => a.a.createElement("svg", {
					className: Object(r.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), a.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				d = n("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = n.n(d);
			var u = e => a.a.createElement("svg", {
					className: Object(r.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				p = n("./src/reddit/icons/svgs/Hot/index.m.less"),
				b = n.n(p);
			var h = e => a.a.createElement("svg", {
					className: Object(r.a)(b.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("title", null, "Hot"), a.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				g = n("./src/reddit/icons/svgs/New/index.m.less"),
				f = n.n(g);
			var v = e => a.a.createElement("svg", {
					className: Object(r.a)(f.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				_ = n("./src/reddit/icons/svgs/Rising/index.m.less"),
				y = n.n(_);
			var C = e => a.a.createElement("svg", {
					className: Object(r.a)(y.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				k = n("./src/reddit/icons/svgs/Top/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/index.m.less"),
				E = n.n(x);
			const w = {
				[o.N.BEST]: l,
				[o.N.HOT]: h,
				[o.N.NEW]: v,
				[o.N.CONTROVERSIAL]: u,
				[o.N.TOP]: k.a,
				[o.N.RISING]: C
			};
			t.a = e => {
				let {
					className: t,
					sort: n
				} = e;
				const s = w[n];
				return s ? a.a.createElement(s, {
					className: Object(r.a)(t, E.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/Loader/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_1Jx7v9Z1D1htyYeKixW2Gx"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlight.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2fN55zgax6VM7DyEl9pOmM",
				container: "_2fN55zgax6VM7DyEl9pOmM",
				Body: "_3KNaG9-PoXf4gcuy5_RCVy",
				body: "_3KNaG9-PoXf4gcuy5_RCVy",
				Title: "_26kBTuLE_sSZzRBwU7HLij",
				title: "_26kBTuLE_sSZzRBwU7HLij",
				Label: "_1hNyZSklmcC7R_IfCUcXmZ",
				label: "_1hNyZSklmcC7R_IfCUcXmZ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2fopwfsUIdZKFtFUEsud9r",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.m.less": function(e, t, n) {
			e.exports = {
				BannerWrapper: "_2xyDZKy2cesRk-qhNei4mr",
				bannerWrapper: "_2xyDZKy2cesRk-qhNei4mr",
				BannerImage: "_39u8lkB0jifV2dCyGxhTst",
				bannerImage: "_39u8lkB0jifV2dCyGxhTst",
				UserIcon: "M_wdt3XN_OW7h8RYbg38W",
				userIcon: "M_wdt3XN_OW7h8RYbg38W",
				Widget: "_27SH1SRzjtOk_2NB2YC-FR",
				widget: "_27SH1SRzjtOk_2NB2YC-FR",
				UserTitle: "_3W1eUu5jHdcamkzFiJDITJ",
				userTitle: "_3W1eUu5jHdcamkzFiJDITJ",
				PremiumIcon: "_2LDCmPsDet63TXFgOSOkkT",
				premiumIcon: "_2LDCmPsDet63TXFgOSOkkT",
				Description: "bVfceI5F_twrnRcVO1328",
				description: "bVfceI5F_twrnRcVO1328",
				userName: "_2hgZVu2K-pvoghsBGGbJ7P",
				Actions: "GQV0F7lQiMOV6EofzopdJ",
				actions: "GQV0F7lQiMOV6EofzopdJ",
				CloseIcon: "t8u6KWjSIjLFBXsDU3u5M",
				closeIcon: "t8u6KWjSIjLFBXsDU3u5M",
				LoadingIconStyled: "mtxpTbJWwD6VP05MIdrPa",
				loadingIconStyled: "mtxpTbJWwD6VP05MIdrPa",
				SettingsLink: "eRXQmg5IDQw75c_ZvuwJU",
				settingsLink: "eRXQmg5IDQw75c_ZvuwJU",
				SettingsIcon: "_3EDNoLotHx3GB6fuK5G7wo",
				settingsIcon: "_3EDNoLotHx3GB6fuK5G7wo"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return be
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/UserIcon/index.tsx"),
				d = n("./src/reddit/components/Widgets/Base/index.tsx"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				b = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				g = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				f = n("./src/reddit/layout/twoCol/Dynamic/index.tsx"),
				v = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				_ = n("./node_modules/react-redux/es/index.js"),
				y = n("./node_modules/reselect/es/index.js"),
				C = n("./src/lib/humanizeDate/index.ts"),
				k = n("./src/lib/prettyPrintNumber/index.ts"),
				x = n("./src/lib/timeAgo/index.ts"),
				E = n("./src/reddit/contexts/InsideOverlay.tsx"),
				w = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				S = n("./src/reddit/icons/svgs/Karma/index.tsx"),
				O = n("./src/reddit/icons/svgs/User/index.tsx"),
				N = n("./src/reddit/selectors/profile.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/actions/tooltip.ts"),
				I = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				T = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				M = n.n(T);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const B = Object(y.c)({
					language: j.O
				}),
				R = c.a.div("Container", M.a),
				D = c.a.div("Body", M.a),
				L = c.a.h5("Title", M.a),
				U = c.a.span("Label", M.a);
			class F extends o.a.Component {
				constructor() {
					super(...arguments), this.toggleTooltip = () => {
						const {
							toggleTooltip: e,
							tooltipId: t
						} = this.props;
						e && t && e(t)
					}
				}
				render() {
					const {
						icon: e,
						label: t,
						title: n,
						tooltip: s,
						tooltipId: a
					} = this.props, r = a && s ? {
						id: a,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return o.a.createElement(R, null, o.a.createElement(L, null, n), o.a.createElement(D, null, e, o.a.createElement(U, A({
						key: "label"
					}, r), t)), a && s && o.a.createElement(I.c, {
						caretOnTop: !0,
						tooltipId: a,
						text: s
					}))
				}
			}
			var W = Object(_.b)(B, e => ({
					toggleTooltip: t => e(Object(P.h)({
						tooltipId: t
					}))
				}))(Object(E.b)(F)),
				H = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				z = n.n(H);
			const G = Object(y.a)(N.j, (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(j.fb)(e, n)
				}, j.O, (e, t, n) => ({
					commentKarma: t ? t.commentKarma : 0,
					language: n,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t ? t.created : 0,
					subscribers: e && e.subscribers || 0
				})),
				V = c.a.div("Container", z.a);

			function J(e, t) {
				return "profile--id-card--highlight-tooltip-".concat(e ? "-overlay" : "", "-").concat(t)
			}
			var Z = Object(_.b)(G)(Object(E.b)(e => {
					const {
						profileCreated: t,
						isOverlay: n,
						language: s,
						commentKarma: r,
						postKarma: i,
						subscribers: c
					} = e, l = J(n, "karma"), d = J(n, "cakeday"), m = a.fbt._({
						"*": "{number} Post Karma",
						_1: "1 Post Karma"
					}, [a.fbt._plural(i, "number", Object(k.b)(i, !0))], {
						hk: "husfU"
					}), u = a.fbt._({
						"*": "{number} Comment Karma",
						_1: "1 Comment Karma"
					}, [a.fbt._plural(i, "number", Object(k.b)(r, !0))], {
						hk: "26iPTL"
					});
					return o.a.createElement(V, null, o.a.createElement(W, {
						icon: o.a.createElement(S.a, {
							className: z.a.icon,
							key: "karma"
						}),
						label: Object(k.b)(r + i, !0),
						title: a.fbt._("Karma", null, {
							hk: "RtSgN"
						}),
						tooltipId: l,
						tooltip: "".concat(m, "\n").concat(u)
					}), o.a.createElement(W, {
						icon: o.a.createElement(w.a, {
							className: z.a.icon,
							key: "cakeDay"
						}),
						label: Object(C.a)(t, !0),
						title: a.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: d,
						tooltip: Object(x.d)(s, t)
					}), c > 0 && o.a.createElement(W, {
						icon: o.a.createElement(O.a, {
							className: z.a.icon,
							key: "followers"
						}),
						title: a.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: Object(k.b)(c, !0)
					}))
				})),
				Q = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				Y = n.n(Q),
				K = n("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				q = n.n(K);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var $ = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
				}
				return n
			};
			const ee = c.a.div("BannerWrapper", q.a),
				te = c.a.div("BannerImage", q.a),
				ne = c.a.wrapped(l.a, "UserIcon", q.a),
				se = c.a.wrapped(d.b, "Widget", q.a),
				ae = c.a.h4("UserTitle", q.a),
				re = c.a.wrapped(h.a, "PremiumIcon", q.a),
				oe = c.a.div("Description", q.a),
				ie = e => {
					var {
						url: t
					} = e, n = $(e, ["url"]);
					return t ? o.a.createElement(m.a, X({}, n, {
						className: q.a.userName,
						to: t
					})) : o.a.createElement("span", X({}, n, {
						className: q.a.userName
					}))
				},
				ce = c.a.wrapped(f.a, "Actions", q.a),
				le = c.a.wrapped(b.a, "CloseIcon", q.a),
				de = c.a.wrapped(i.a, "SettingsLink", q.a),
				me = c.a.wrapped(g.a, "SettingsIcon", q.a),
				ue = c.a.wrapped(u.a, "LoadingIconStyled", q.a),
				pe = () => o.a.createElement(ue, {
					sizePx: 20
				});
			class be extends o.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						username: t
					} = this.props;
					return e ? o.a.createElement(v.a, {
						recentAwardings: e,
						username: t
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						className: n,
						footer: r,
						isEmployee: i,
						isGold: c,
						isNSFW: l,
						isOverlay: d,
						isOwnProfile: m,
						profileIcon: u,
						publicDescription: b,
						title: h,
						url: g,
						username: f,
						isDefaultIcon: v,
						isDeletingIcon: _,
						isDeletingBanner: y,
						onDeleteIcon: C,
						onDeleteBanner: k,
						editMode: x
					} = this.props;
					return o.a.createElement(se, {
						className: n
					}, o.a.createElement(ee, null, t && o.a.createElement(te, {
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}), x && t && (y ? o.a.createElement(pe, null) : o.a.createElement(le, {
						onClick: k
					}))), o.a.createElement("div", {
						className: Y.a.SnooIconWrapper
					}, o.a.createElement(ne, {
						isNSFW: l,
						iconUrl: u,
						userName: f
					}), x && !v && (_ ? o.a.createElement(pe, null) : o.a.createElement(le, {
						onClick: C
					}))), !x && m && o.a.createElement(de, {
						to: "/settings/profile"
					}, o.a.createElement(me, null)), h && o.a.createElement(ae, null, h), o.a.createElement(ie, {
						url: g
					}, "u/".concat(f)), i && o.a.createElement(p.a, {
						className: Y.a.adminIcon,
						title: a.fbt._("Reddit admin", null, {
							hk: "goUUb"
						})
					}), c && o.a.createElement("a", {
						title: a.fbt._("{username} has Reddit Premium", [a.fbt._param("username", f)], {
							hk: "3Fylv"
						}),
						href: "".concat(s.a.redditUrl, "/premium")
					}, o.a.createElement(re, null)), o.a.createElement(oe, null, b), o.a.createElement(Z, {
						profileName: f,
						isOverlay: d
					}), this.renderAwardedLastMonth(), o.a.createElement(ce, null, e), r)
				}
			}
		},
		"./src/reddit/components/Settings/AccountForm.m.less": function(e, t, n) {
			e.exports = {
				Trash: "_2UoJFO4kX93xqtJJK4wsZl",
				trash: "_2UoJFO4kX93xqtJJK4wsZl",
				DeactivateButton: "EBd2MhBQlQeZ13YeP0K8a",
				deactivateButton: "EBd2MhBQlQeZ13YeP0K8a",
				DeactivateWrapper: "_3VF_RMRPjwlO4Zr4WnpLym",
				deactivateWrapper: "_3VF_RMRPjwlO4Zr4WnpLym",
				BetaTestsHeading: "_2Y2Uj5LLPO97ua8VvJAejj",
				betaTestsHeading: "_2Y2Uj5LLPO97ua8VvJAejj",
				"m-responsive": "njsaYJtS0A-2XLGcAVIju",
				mResponsive: "njsaYJtS0A-2XLGcAVIju",
				InBetaToggle: "_1gdGmpEa4xqfXwItzFewwq",
				inBetaToggle: "_1gdGmpEa4xqfXwItzFewwq",
				InRedesignBetaToggle: "_2HkX3D1t3uo8khrlDewaew",
				inRedesignBetaToggle: "_2HkX3D1t3uo8khrlDewaew",
				ResponsiveOverlay: "_1MhsFh2a0lc8OAUe2A5s8F",
				responsiveOverlay: "_1MhsFh2a0lc8OAUe2A5s8F"
			}
		},
		"./src/reddit/components/Settings/AccountPrefsSection/index.m.less": function(e, t, n) {
			e.exports = {
				tertiaryBtn: "_3yDGs2XJxcsMFCZLDmw61k"
			}
		},
		"./src/reddit/components/Settings/ConnectedAccounts/index.m.less": function(e, t, n) {
			e.exports = {
				TwitterIcon: "y6CoOX8JxvJY0Kl9fvx8O",
				twitterIcon: "y6CoOX8JxvJY0Kl9fvx8O",
				GoogleIcon: "_2HGIcs7x1ojc1Moq_zjot8",
				googleIcon: "_2HGIcs7x1ojc1Moq_zjot8",
				AppleIcon: "_3KWqmZWrSf8rUGBzgw4zPr",
				appleIcon: "_3KWqmZWrSf8rUGBzgw4zPr",
				LoadingIcon: "PYTg-gbJiYylgL7Ep40Ez",
				loadingIcon: "PYTg-gbJiYylgL7Ep40Ez",
				ConnectApple: "TAF33bKwRX0N0jqZED4G5",
				connectApple: "TAF33bKwRX0N0jqZED4G5",
				"m-responsive": "_2CDbVOW43orfPYw-t-nPiq",
				mResponsive: "_2CDbVOW43orfPYw-t-nPiq",
				ConnectGoogle: "_15mHBcXEigFDBhqx4A5u7z",
				connectGoogle: "_15mHBcXEigFDBhqx4A5u7z",
				ConnectTwitter: "X3WnGWuTGeHRuSAUa5SvC",
				connectTwitter: "X3WnGWuTGeHRuSAUa5SvC",
				ConnectTwitterButton: "_3492mSfQUroLGCVlS9cxuC",
				connectTwitterButton: "_3492mSfQUroLGCVlS9cxuC",
				ConnectGoogleButton: "_3PZhYrOiAsgZIW2cezS6tI",
				connectGoogleButton: "_3PZhYrOiAsgZIW2cezS6tI",
				ConnectAppleButton: "_1oQRGKLqEtbGwWUMbhCDZj",
				connectAppleButton: "_1oQRGKLqEtbGwWUMbhCDZj",
				TextAndIconWrapper: "_1pLtFFacVWJa1d5e20ySJX",
				textAndIconWrapper: "_1pLtFFacVWJa1d5e20ySJX",
				DisconnectButton: "_3YGYMFQnmSavH2Yf3BYPQ1",
				disconnectButton: "_3YGYMFQnmSavH2Yf3BYPQ1",
				Username: "_1Na-ZHbt3YWbfBck8jEjd",
				username: "_1Na-ZHbt3YWbfBck8jEjd",
				ConnectionInfo: "_3IF4vw6Egg85g_ne634Hl_",
				connectionInfo: "_3IF4vw6Egg85g_ne634Hl_"
			}
		},
		"./src/reddit/components/Settings/Creator/Header/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1PL-vwvbwULAlKIw_-rp6o",
				tag: "AdxLJ-FF3A2DW8rpMjDNt",
				title: "XzPPDkPAIQWYbDf1sDeLq"
			}
		},
		"./src/reddit/components/Settings/Creator/StripeConnect/index.m.less": function(e, t, n) {
			e.exports = {
				button: "ldUISE1q75VkTpDCvw2QT",
				cta: "_135GEuWAf6THuO7EPL_lA1",
				disclaimer: "_2y2cexvCxDTDYNniIjPLpx",
				icon: "_2b7jOhtXSYQ5sHqTP2vlda",
				legal: "J3oHTng7rwXevhpG9krPI",
				legalLink: "_1cRLUcu6PFsJKj-BeYgYy0"
			}
		},
		"./src/reddit/components/Settings/Creator/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_2U2Xb0AtotCKvoU6HPwO2y"
			}
		},
		"./src/reddit/components/Settings/DeactivateModal.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2VsAK7m6JTJitCSeSvirtt",
				container: "_2VsAK7m6JTJitCSeSvirtt",
				HeaderText: "kAxpnDHCzK52N-knLlhM1",
				headerText: "kAxpnDHCzK52N-knLlhM1",
				Close: "_3BQ70VJHQaBkt1OQUrZgN",
				close: "_3BQ70VJHQaBkt1OQUrZgN",
				PrimaryButton: "_29VAKmRm7MJtgmyN_D683I",
				primaryButton: "_29VAKmRm7MJtgmyN_D683I",
				SecondaryButton: "_1B0iNMBj4pj9U0S9KchRfM",
				secondaryButton: "_1B0iNMBj4pj9U0S9KchRfM",
				ButtonWrapper: "_2LADJSHkUPSfABt8hQH7zK",
				buttonWrapper: "_2LADJSHkUPSfABt8hQH7zK",
				TextArea: "_3KUxPQl1bIbMalB1ElgkND",
				textArea: "_3KUxPQl1bIbMalB1ElgkND",
				SectionLabel: "NAjG1Q7fs7xPokS-On_vY",
				sectionLabel: "NAjG1Q7fs7xPokS-On_vY",
				H: "_33YDTJ9EBpPYIbuAhgieNI",
				h: "_33YDTJ9EBpPYIbuAhgieNI",
				P: "_2Jyci5nN37DUMdKXr2eRn",
				p: "_2Jyci5nN37DUMdKXr2eRn",
				Input: "_161WTqM53-R3b5XBxClmEs",
				input: "_161WTqM53-R3b5XBxClmEs",
				CheckBoxWrapper: "_2q3hqWI11yqJyNydIAsXyv",
				checkBoxWrapper: "_2q3hqWI11yqJyNydIAsXyv",
				UL: "HulKM8oqJogE46P-pLJi7",
				ul: "HulKM8oqJogE46P-pLJi7"
			}
		},
		"./src/reddit/components/Settings/DeactivateModal.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.tsx"),
				l = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/components/Settings/DeactivateModal.m.less"),
				u = n.n(m),
				p = n("./src/lib/lessComponent.tsx"),
				b = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
					}
					return n
				};
			const h = p.a.div("Container", u.a),
				g = p.a.h2("HeaderText", u.a),
				f = p.a.button("Close", u.a),
				v = p.a.wrapped(i.b, "PrimaryButton", u.a),
				_ = p.a.wrapped(i.i, "SecondaryButton", u.a),
				y = p.a.div("ButtonWrapper", u.a),
				C = p.a.textarea("TextArea", u.a),
				k = p.a.h3("SectionLabel", u.a),
				x = p.a.p("H", u.a),
				E = p.a.p("P", u.a),
				w = p.a.wrapped(l.a, "Input", u.a),
				S = p.a.div("CheckBoxWrapper", u.a),
				O = p.a.ul("UL", u.a),
				N = {
					paypal: "/settings/premium",
					stripe: "/settings/premium",
					ios: "https://finance-app.itunes.apple.com/account/subscriptions",
					android: "https://play.google.com/store/account/subscriptions"
				},
				j = {
					ios: () => s.fbt._("Apple Appstore", null, {
						hk: "1WaFta"
					}),
					android: () => s.fbt._("Google Play", null, {
						hk: "2VUF8k"
					}),
					stripe: () => s.fbt._("Stripe", null, {
						hk: "gEPf2"
					}),
					paypal: () => s.fbt._("Paypal", null, {
						hk: "1IWNjx"
					})
				};
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.showConfirm = () => {
						const e = this.state;
						e.password && e.username && e.checkbox && this.setState({
							showConfirm: !0
						})
					}, this.handleSubmit = () => {
						const e = this.state,
							{
								showConfirm: t
							} = e,
							n = b(e, ["showConfirm"]);
						this.props.onClick(n), this.props.exit()
					}, this.updateField = e => t => this.setState({
						[e]: t
					}), this.formIncomplete = () => !this.state.username || !this.state.password || !this.state.checkbox, this.renderMain = () => {
						const e = this.props;
						return r.a.createElement(d.j, null, r.a.createElement(x, null, s.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), r.a.createElement(O, null, r.a.createElement("li", null, s.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
							hk: "49AqfO"
						})), r.a.createElement("li", null, s.fbt._("Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually.", null, {
							hk: "4riIPw"
						})), e.user && e.user.isGold && e.user.hasGoldSubscription && r.a.createElement("li", null, s.fbt._("Just in case you didn't cancel your Premium subscription, here are all the links:", null, {
							hk: "poO6C"
						}), Object.keys(N).map((e, t) => r.a.createElement("span", {
							key: e
						}, !!t && ", ", r.a.createElement("a", {
							href: N[e],
							target: "_blank"
						}, j[e] && j[e]()))))), r.a.createElement(k, null, s.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), r.a.createElement(C, {
							placeholder: s.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), r.a.createElement(k, null, s.fbt._("account credentials for security purposes", null, {
							hk: "2YiOpO"
						})), r.a.createElement(w, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: s.fbt._("username", null, {
								hk: "2f1L4u"
							})
						}), r.a.createElement(w, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: s.fbt._("password", null, {
								hk: "23UmWl"
							}),
							type: "password"
						}), r.a.createElement(S, null, r.a.createElement(c.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), r.a.createElement("label", null, s.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), r.a.createElement(y, null, r.a.createElement(_, {
							onClick: e.exit
						}, s.fbt._("cancel", null, {
							hk: "2d8kYI"
						})), r.a.createElement(v, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, s.fbt._("deactivate", null, {
							hk: "3r52aW"
						}))))
					}, this.renderPremiumNotificationMessage = e => {
						let {
							platform: t,
							isMobile: n
						} = e;
						return s.fbt._("{text with URL}", [s.fbt._param("text with URL", n ? r.a.createElement(r.a.Fragment, null, "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for", r.a.createElement("a", {
							href: N[t],
							target: "_blank"
						}, " ", j[t] && j[t]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : r.a.createElement(r.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", r.a.createElement("a", {
							href: N[t],
							target: "_blank"
						}, " ", j[t] && j[t]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
							hk: "1lLr9b"
						})
					}, this.renderPremiumNotification = () => r.a.createElement(d.j, null, r.a.createElement(x, null, s.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), r.a.createElement(E, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
						platform: "android",
						isMobile: !0
					}), this.props.user && this.props.user.hasIOSSubscription && this.renderPremiumNotificationMessage({
						platform: "ios",
						isMobile: !0
					}), this.props.user && this.props.user.hasPaypalSubscription && this.renderPremiumNotificationMessage({
						platform: "paypal",
						isMobile: !1
					}), this.props.user && this.props.user.hasStripeSubscription && this.renderPremiumNotificationMessage({
						platform: "stripe",
						isMobile: !1
					})), r.a.createElement(y, null, r.a.createElement(v, {
						onClick: () => this.setState({
							showPremiumNotification: !1
						})
					}, s.fbt._("deactivate", null, {
						hk: "1ZQPu5"
					})))), this.renderConfirm = () => r.a.createElement(d.j, null, r.a.createElement(x, null, s.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), r.a.createElement(y, null, r.a.createElement(_, {
						onClick: () => this.setState({
							showConfirm: !1
						})
					}, s.fbt._("back", null, {
						hk: "tEs8T"
					})), r.a.createElement(v, {
						onClick: this.handleSubmit
					}, s.fbt._("deactivate", null, {
						hk: "3r52aW"
					})))), this.state = {
						password: "",
						username: "",
						checkbox: !1,
						feedback: "",
						showConfirm: !1,
						showPremiumNotification: !!e.user && e.user.isGold && e.user.hasGoldSubscription
					}
				}
				render() {
					const e = this.props;
					return r.a.createElement(h, null, r.a.createElement(f, {
						onClick: e.exit
					}, r.a.createElement(d.b, null)), r.a.createElement(d.g, null, r.a.createElement(g, null, s.fbt._("Feed settings", null, {
						hk: "4morrt"
					}))), this.state.showPremiumNotification ? this.renderPremiumNotification() : this.state.showConfirm ? this.renderConfirm() : this.renderMain())
				}
			}
			t.b = Object(o.a)(P)
		},
		"./src/reddit/components/Settings/DesktopNotifications/TurnOnDesktopNotificationsModal/index.m.less": function(e, t, n) {
			e.exports = {
				"m-responsive": "_15G7qQCEazg98Od6QzTXKW",
				mResponsive: "_15G7qQCEazg98Od6QzTXKW",
				row: "_2p7Y7z5wSBn5aCi7eK2pB2",
				stepNumber: "_10_kLYlr2P64gGtVuRmDIU",
				icon: "_5nI2F3HBs4WbXsJXozR2",
				notify: "_3L8va2Rx0PoIz4zyBzTJXN",
				text: "_3MBs-ro9yZMQKKKOcPDrEo",
				ModalText: "BjkPaG023MR6P-Jr4B9il",
				modalText: "BjkPaG023MR6P-Jr4B9il"
			}
		},
		"./src/reddit/components/Settings/DesktopNotifications/index.m.less": function(e, t, n) {
			e.exports = {
				ResponsiveOverlay: "y1f5g6WILztw-hqz3uOwa",
				responsiveOverlay: "y1f5g6WILztw-hqz3uOwa",
				ResponsiveTooltip: "_1CGsdbtchNFJvC6VaaIT_W",
				responsiveTooltip: "_1CGsdbtchNFJvC6VaaIT_W"
			}
		},
		"./src/reddit/components/Settings/FPRWarning/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3wX6ugmf6aIVCMSO5EBamI",
				header: "_1uO-ppIAy4G9hITe3aezOg",
				status: "_3StJsb37UVnMUDKcGg5mHg",
				statusText: "_247vhiDCQJRjOMCUvZ-mqZ",
				description: "_1tBD7BkJRBAC1gbtHq-Dyq",
				actionContainer: "_28xcfOINVo3MU8ysX5alBu",
				image: "OYNB2zTDsEUOySExl6VnM",
				error: "_1Kc1Z_c_GvBk26Xi_syDhP",
				success: "_2Rs219v7hWj_DClRZzJUzJ",
				emailContainer: "_1M2FGf5OZeqPmUFe50iTut",
				emailText: "_1mB8g4h7c9Xn8964Bc3tfp",
				emailAddress: "_31W5hFXts06EPszYoM6jq8",
				input: "DCF-EASL8JBNyY7zEddo_",
				inputIcon: "_1-rwArBHnhyhkZX-fy6axp",
				errorBorder: "_2V4wZcvO9aShV0B2nZi2nP",
				successBorder: "_2PlXkaRXoDbHSJMgwvn-tM",
				primaryBtn: "zD8zqnlttfX-II-HmEd_u",
				errorMsg: "_3zJvYSoQlWXh-VwUoInXm_"
			}
		},
		"./src/reddit/components/Settings/FeedForm.m.less": function(e, t, n) {
			e.exports = {
				"m-responsive": "bQQyYzcR_4xlvHaj1mE9u",
				mResponsive: "bQQyYzcR_4xlvHaj1mE9u"
			}
		},
		"./src/reddit/components/Settings/Payments/Header/index.m.less": function(e, t, n) {
			e.exports = {
				description: "_2KihMl7kCllYi4__28Q0O8",
				title: "_2z5qbZtDy2SEXxQHTL5uwO"
			}
		},
		"./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less": function(e, t, n) {
			e.exports = {
				lock: "Sfk4ELyMq0pDLynmPYqIH",
				noSavedPayment: "_2kaA57xLp2xlwvJJgGX_nf",
				payment: "_3Q9yKbarclxKg7XBqu5Aas",
				paymentDisplay: "_1u8k-iH7dy2tgyF89W2PW9"
			}
		},
		"./src/reddit/components/Settings/Payments/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_5wU4T-ZntmyHAO3Q-reeV"
			}
		},
		"./src/reddit/components/Settings/PremiumForm.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			}));
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/humanizeDate/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/ConfirmModal/index.tsx"),
				p = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				b = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				h = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				g = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				v = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/higherOrderComponents/makeAsync.tsx")),
				_ = n("./src/lib/loadWithRetries/index.ts"),
				y = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			var C = Object(v.a)({
					getComponent: () => Object(_.a)(() => Promise.all([Promise.all([n.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), n.e("UpdateCardModal")]).then(n.bind(null, "./src/reddit/components/UpdateCardModal/index.tsx")), Object(y.c)()])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				k = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				x = n("./src/reddit/selectors/activeModalId.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/components/Settings/index.m.less"),
				S = n.n(w);
			const O = "https://www.paypal.com/myaccount/autopay",
				N = "update_card_modal_id",
				j = Object(l.c)({
					cancelSubscriptionModalIsOpen: Object(x.b)("settings_optout_modal_id"),
					goldExpiration: E.n,
					hasAndroidSubscription: E.o,
					hasIOSSubscription: E.r,
					hasStripeSubscription: E.v,
					hasPaypalSubscription: E.t,
					isGold: E.p,
					isPremiumSubscriber: E.q,
					updateCardModalIsOpen: Object(x.b)(N)
				}),
				P = Object(i.b)(j, e => ({
					navigateToPurchasePremium: () => e(Object(c.b)("/premium")),
					toggleCancelSubscriptionModal: () => e(Object(m.i)("settings_optout_modal_id")),
					toggleUpdateCardModal: () => e(Object(m.i)(N))
				})),
				I = (e, t, n) => e && t ? a.fbt._("Your Premium subscription will automatically renew at the beginning of your next billing cycle. If your subscription ends, you will have Premium until {date}.", [a.fbt._param("date", Object(d.a)(n, !0))], {
					hk: "jOodQ"
				}) : e && !t ? a.fbt._("Your Premium membership is valid until {date}.", [a.fbt._param("date", Object(d.a)(n, !0))], {
					hk: "4m4zaE"
				}) : a.fbt._("Get Reddit Premium and help support Reddit.", null, {
					hk: "MOt6K"
				});
			class T extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onGoldLinkClick = e => {
						e.preventDefault();
						const {
							navigateToPurchasePremium: t,
							sendEvent: n
						} = this.props;
						n(Object(k.d)()), t()
					}, this.onCancelClick = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(k.a)()), t()
					}, this.onHideAdsToggle = () => {
						const {
							update: e,
							prefs: {
								hideAds: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(k.f)() : Object(k.h)()), e(!t, "hideAds")
					}, this.onHighlightCommentsToggle = () => {
						const {
							update: e,
							prefs: {
								highlightComments: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(k.g)() : Object(k.i)()), e(!t, "highlightComments")
					}, this.onYesCancelSubscription = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(k.c)()), this.navigateToCancel()
					}, this.onNoCancelSubscription = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(k.b)()), t()
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(k.j)())
				}
				navigateToCancel() {
					const {
						hasPaypalSubscription: e,
						hasStripeSubscription: t
					} = this.props;
					e ? window.location.href = O : t && (window.location.href = "".concat(s.a.redditUrl, "/gold/subscription"))
				}
				render() {
					const {
						cancelSubscriptionModalIsOpen: e,
						goldExpiration: t,
						hasAndroidSubscription: n,
						hasIOSSubscription: s,
						hasPaypalSubscription: r,
						hasStripeSubscription: i,
						isGold: c,
						isPremiumSubscriber: l,
						isResponsiveSettingsEnabled: d,
						toggleUpdateCardModal: m,
						updateCardModalIsOpen: f,
						prefs: {
							highlightComments: v,
							hideAds: _
						}
					} = this.props, y = n || s;
					return o.a.createElement(b.a, null, o.a.createElement(p.b, {
						className: S.a.premiumHeading,
						isResponsiveSettingsEnabled: d
					}, a.fbt._("Reddit Premium", null, {
						hk: "34acNx"
					})), o.a.createElement(p.a, {
						className: S.a.premiumSubtext
					}, a.fbt._("Reddit Premium is a subscription membership that upgrades your account with extra features.", null, {
						hk: "2UySlA"
					})), o.a.createElement(h.a, null, a.fbt._("subscription status", null, {
						hk: "1tsk15"
					})), o.a.createElement(p.a, {
						className: S.a.premiumSubtext
					}, I(c, l, t || 0)), !l && o.a.createElement(g.f, {
						label: c ? a.fbt._("Subscribe", null, {
							hk: "4d4vP7"
						}) : a.fbt._("Get Premium", null, {
							hk: "2JiZgZ"
						}),
						link: "/premium",
						onClick: this.onGoldLinkClick,
						last: !0
					}), i && o.a.createElement(g.a, {
						label: a.fbt._("Update payment information", null, {
							hk: "1Fgfxv"
						}),
						onClick: m
					}), r && o.a.createElement(g.f, {
						label: a.fbt._("Update payment information", null, {
							hk: "140EzB"
						}),
						link: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=912@reddit.com"
					}), l && !y && o.a.createElement(g.a, {
						label: a.fbt._("Cancel subscription", null, {
							hk: "iGZ0U"
						}),
						onClick: this.onCancelClick,
						last: !0
					}), c && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.a, null, a.fbt._("premium features", null, {
						hk: "20MX2a"
					})), o.a.createElement(g.n, {
						on: _,
						disabled: !c,
						onClick: this.onHideAdsToggle,
						label: a.fbt._("Hide advertisements", null, {
							hk: "1aogtp"
						}),
						subtext: a.fbt._("Enable an ads-free experience on desktop", null, {
							hk: "YQWdf"
						})
					}), o.a.createElement(g.n, {
						on: v,
						disabled: !c,
						onClick: this.onHighlightCommentsToggle,
						label: a.fbt._("Highlight new comments", null, {
							hk: "48yw98"
						}),
						subtext: a.fbt._("Enable highlighting of new comments you haven't seen", null, {
							hk: "3XqeQ1"
						}),
						last: !0
					})), f && o.a.createElement(C, null), e && o.a.createElement(u.a, {
						headerText: a.fbt._("Cancel your membership", null, {
							hk: "1WT1nw"
						}),
						message: a.fbt._("Are you sure you want to cancel your membership? Reddit really appreciates your support!", null, {
							hk: "1JeeDn"
						}),
						cancelText: a.fbt._("Back", null, {
							hk: "4ms6iN"
						}),
						acceptText: a.fbt._("Yes, Cancel", null, {
							hk: "3lz0A2"
						}),
						onAccept: this.onYesCancelSubscription,
						onCancel: this.onNoCancelSubscription,
						onOverlayClick: this.onNoCancelSubscription,
						withOverlay: !0
					}))
				}
			}
			t.b = P(Object(f.c)(T))
		},
		"./src/reddit/components/Settings/PrivacyForm.m.less": function(e, t, n) {
			e.exports = {
				ListsWrapper: "_1el3NPZn6qsGupLNWd_uTE",
				listsWrapper: "_1el3NPZn6qsGupLNWd_uTE",
				GenerateBackupCodesButton: "kLUeYesCcX7szHNBR8OZZ",
				generateBackupCodesButton: "kLUeYesCcX7szHNBR8OZZ",
				SubheaderLink: "_2SoL5Q_2U0LQC1BPaNletZ",
				subheaderLink: "_2SoL5Q_2U0LQC1BPaNletZ",
				ThirdPartyAuth: "_1GtysZnibU-p4KasVaXCT_",
				thirdPartyAuth: "_1GtysZnibU-p4KasVaXCT_",
				"m-responsive": "_1K1eSlv_SCeNBQRglVFRHo",
				mResponsive: "_1K1eSlv_SCeNBQRglVFRHo"
			}
		},
		"./src/reddit/components/Settings/ProfileForm.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_1eYdOjwOMPgWEBUvBUaXVK",
				rawHtmlDisplay: "_1eYdOjwOMPgWEBUvBUaXVK",
				ImageUploaderLayout: "_2UkVCdCS7jDS13coUav5oC",
				imageUploaderLayout: "_2UkVCdCS7jDS13coUav5oC",
				"m-responsive": "_3qAj0Ei4qJEkWGPxmDF4VE",
				mResponsive: "_3qAj0Ei4qJEkWGPxmDF4VE",
				Label: "_13ua4iQuXbXY7Lw2azcfDP",
				label: "_13ua4iQuXbXY7Lw2azcfDP",
				IconImageUploader: "_2kvG3QudGNH1b_hbipcXwO",
				iconImageUploader: "_2kvG3QudGNH1b_hbipcXwO",
				BannerImageUploader: "_2tWHV_FWMxyBDr_Buc80WV",
				bannerImageUploader: "_2tWHV_FWMxyBDr_Buc80WV",
				DummyBanner: "_20K7NkpV6o6A7B6SOc7V03",
				dummyBanner: "_20K7NkpV6o6A7B6SOc7V03",
				Preview: "_2TAJM8DsUslS0NXRNj4kJj",
				preview: "_2TAJM8DsUslS0NXRNj4kJj",
				Link: "_2rNu4t73lS9limUPAAKtkN",
				link: "_2rNu4t73lS9limUPAAKtkN",
				ResponsiveOverlay: "_5Y7pdSoBpBx_1X08U19nH",
				responsiveOverlay: "_5Y7pdSoBpBx_1X08U19nH"
			}
		},
		"./src/reddit/components/Settings/SortSetting/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2gyG4Nl0mMXg9j65G_cVwp",
				Separator: "_1IJCWpm5hdHFEoHFC4K7wC",
				separator: "_1IJCWpm5hdHFEoHFC4K7wC"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Header/index.m.less": function(e, t, n) {
			e.exports = {
				subtitle: "_2K1zfRnW-eaoEdnfpyRcmh",
				title: "_3oLMEvh1HrW0gnI4GnF4hs"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less": function(e, t, n) {
			e.exports = {
				benefitsTitle: "_1zvZz9V9qmzvphLNN26xFE",
				benefits: "kEoeW9SoyEhD4ExnmlGkS",
				brand: "_2w4yco0tluzPa4WeuhhiQb",
				card: "_2R-NHwcb-sLMDCsOETfzyP",
				cardTitle: "_1nw8o42QAXA_zG3Z3GGgZD",
				close: "By4TuAW9x-mG-GkTGFgEr",
				container: "_3t78XrDe02RPhvHEki73Lo",
				footer: "_2CujVKP63iAaJw_UV0yOR4",
				header: "_3UN6Nqg_UKbM9bayL0RMJF",
				membershipMsg: "_1ap7TUKnaO0x1z3ghuHpsI",
				pointsContainer: "ofZxk5Su7_2KVkgn_5nvx",
				pointsHeader: "_3jOoW94C-FdpLMCCsfn_fA",
				price: "_2YC-HnD_R95hjAqA95ObnS",
				warning: "_1DMG--ENBA93KSauQNMsTI"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less": function(e, t, n) {
			e.exports = {
				textOverflow: "_1cJfM1Loi1IW6h-Gvd5tHM",
				button: "_1pqGWiE4CZF0y478Lzawc7",
				cancelled: "_2SaAnyYncaEeqGv38ngjw",
				joinDate: "_2R_qBER1OZsfaxvAv-57vk",
				container: "_2HZuIxJNdTH2UzaarZ_2_K",
				membershipName: "_1SOtSjbR4ugPAPrTgPSB8k"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less": function(e, t, n) {
			e.exports = {
				empty: "_3KZ9x8iqbtVhgYU5aZK96i",
				loading: "_18AXwLWTkHAhpgyT2m7kii",
				title: "_22W0HCOIPB2NC_q2PuiXQ8"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/index.m.less": function(e, t, n) {
			e.exports = {
				header: "RBCMMCYwCum0i_wuk50dM"
			}
		},
		"./src/reddit/components/Settings/ViewSetting/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "YpPJkfznV3Pha9pNUbPR7"
			}
		},
		"./src/reddit/components/Settings/index.m.less": function(e, t, n) {
			e.exports = {
				bulletedList: "vxL7rNBEiV-X9jWEV--zw",
				premiumHeading: "yBOjy8Ssm6dCzStP0YSks",
				premiumSubtext: "_2D4kg4-iMxeubZ4vWU0cXG"
			}
		},
		"./src/reddit/components/Settings/shared/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2OI2GNt8U_hqISJzbsrb0Y",
				labelWrapper: "Mw10gImD3M_Xbm-yM9eyH",
				dropdownRow: "_183U1ds639-b2Av2n7Mdt_"
			}
		},
		"./src/reddit/components/Settings/shared/FatInput.m.less": function(e, t, n) {
			e.exports = {
				Input: "_1Vnaj3fBuYrmHKEPQD_zWW",
				input: "_1Vnaj3fBuYrmHKEPQD_zWW",
				Label: "_1niwHyFzfJ2EBfsTxotmOo",
				label: "_1niwHyFzfJ2EBfsTxotmOo",
				Button: "Dtg-R0LPsUrNfymGbPg_G",
				button: "Dtg-R0LPsUrNfymGbPg_G",
				Wrapper: "_1gw9QnHhIreAAaTWBI3fUH",
				wrapper: "_1gw9QnHhIreAAaTWBI3fUH",
				mFocused: "_3_AGLaBQJiLQvGX_bkEmlQ"
			}
		},
		"./src/reddit/components/Settings/shared/FatInput.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Settings/shared/FatInput.m.less"),
				i = n.n(o),
				c = n("./src/lib/lessComponent.tsx");
			const l = c.a.input("Input", i.a),
				d = c.a.label("Label", i.a),
				m = c.a.button("Button", i.a),
				u = c.a.div("Wrapper", i.a);
			class p extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						focused: !1
					}
				}
				render() {
					const {
						buttonText: e,
						className: t,
						disabled: n,
						label: s,
						onClick: o,
						onChange: c,
						type: p = "text",
						value: b
					} = this.props;
					return a.a.createElement(u, {
						className: Object(r.a)(t, {
							[i.a.mFocused]: this.state.focused
						})
					}, a.a.createElement(l, {
						value: b,
						type: p,
						onChange: e => c(e.currentTarget.value),
						onFocus: e => this.setState({
							focused: !0
						}),
						onBlur: e => this.setState({
							focused: !1
						}),
						required: !0
					}), a.a.createElement(d, null, s), o && a.a.createElement(m, {
						disabled: !!n,
						onClick: o
					}, e))
				}
			}
		},
		"./src/reddit/components/Settings/shared/Heading.m.less": function(e, t, n) {
			e.exports = {
				Heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				"m-responsive": "_1zFj2WkkmV422Jul4b3LUb",
				mResponsive: "_1zFj2WkkmV422Jul4b3LUb",
				HeadingSubtext: "_3yr8kdlxh51P-SJDaWVzJD",
				headingSubtext: "_3yr8kdlxh51P-SJDaWVzJD"
			}
		},
		"./src/reddit/components/Settings/shared/Heading.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Settings/shared/Heading.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
				}
				return n
			};
			const m = o.a.h2("Heading", c.a);
			t.b = e => {
				const {
					children: t,
					isResponsiveSettingsEnabled: n
				} = e, s = d(e, ["children", "isResponsiveSettingsEnabled"]);
				return a.a.createElement(m, l({}, s, {
					className: Object(r.a)({
						[c.a["m-responsive"]]: n
					})
				}), t)
			};
			const u = o.a.p("HeadingSubtext", c.a)
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				o = n("./src/reddit/models/Image/index.tsx");
			class i extends a.a.Component {
				constructor() {
					super(...arguments), this.onChange = async e => {
						if (!e) return;
						const t = Array.isArray(e) && e.length > 0 ? e[0] : e,
							n = await Object(o.e)(t);
						this.props.onChange(n)
					}
				}
				render() {
					const {
						className: e,
						label: t,
						labelClassName: n,
						value: s,
						controlName: o,
						isUploading: i,
						tabIndex: c
					} = this.props;
					return i ? a.a.createElement(r.a, {
						className: e
					}) : a.a.createElement(r.b, {
						className: e,
						name: o,
						label: t,
						labelClassName: n,
						multiple: !1,
						tabIndex: c,
						value: s,
						onChange: this.onChange
					})
				}
			}
			t.a = i
		},
		"./src/reddit/components/Settings/shared/Layout.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1OrNGmpfcSuSebbZM5vYq4",
				container: "_1OrNGmpfcSuSebbZM5vYq4",
				Content: "_3FVpvZ7OLbS_68QzaxplxT",
				content: "_3FVpvZ7OLbS_68QzaxplxT",
				Sidebar: "_6hkUCjcaRoPRm1710RzSl",
				sidebar: "_6hkUCjcaRoPRm1710RzSl",
				defaultLayout: "jrocDu3YgcEScGB_zdT4I",
				"m-collectionLayout": "_1LF62vb6GTug21RCMM47iK",
				mCollectionLayout: "_1LF62vb6GTug21RCMM47iK"
			}
		},
		"./src/reddit/components/Settings/shared/Layout.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/Settings/shared/Layout.m.less"),
				o = n.n(r),
				i = n("./src/lib/lessComponent.tsx");
			const c = i.a.div("Container", o.a),
				l = i.a.div("Content", o.a),
				d = i.a.div("Sidebar", o.a);
			t.a = e => a.a.createElement(c, {
				className: e.className
			}, a.a.createElement(l, null, e.children), a.a.createElement(d, null, e.sidebar))
		},
		"./src/reddit/components/Settings/shared/ListWidget.m.less": function(e, t, n) {
			e.exports = {
				ListHeading: "_2azG8CbfCeoSIy45LO_LxO",
				listHeading: "_2azG8CbfCeoSIy45LO_LxO",
				Subtext: "_11aCg0w5mcSGMuqdRWGIjQ",
				subtext: "_11aCg0w5mcSGMuqdRWGIjQ",
				ListBox: "_2eHU8lgBkQJt6_fDIm7X_p",
				listBox: "_2eHU8lgBkQJt6_fDIm7X_p",
				MoreWrapper: "R8wezXw6KmosgQsJ3q6f0",
				moreWrapper: "R8wezXw6KmosgQsJ3q6f0",
				MoreButton: "j_y-f-J8aR9FLAGuMbzbw",
				moreButton: "j_y-f-J8aR9FLAGuMbzbw",
				container: "_2F1i1Khed3wdSoVrS2LBcR",
				mPadBottom: "_10-uajD9xoOsukhhALA723"
			}
		},
		"./src/reddit/components/Settings/shared/SectionHeading.m.less": function(e, t, n) {
			e.exports = {
				Component: "BotIImuktRA9aFAPP0O4Z",
				component: "BotIImuktRA9aFAPP0O4Z"
			}
		},
		"./src/reddit/components/Settings/shared/SectionHeading.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/Settings/shared/SectionHeading.m.less"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.h3("Component", a.a)
		},
		"./src/reddit/components/Settings/shared/UserRow.m.less": function(e, t, n) {
			e.exports = {
				Date: "_3uOVAEvDusyBq_RJI_I3BT",
				date: "_3uOVAEvDusyBq_RJI_I3BT",
				UserNameAndIcon: "Q7PZ7pn1RDCZoAZ4RHEV8",
				userNameAndIcon: "Q7PZ7pn1RDCZoAZ4RHEV8",
				Button: "_2YM_OHv4TJuebM7ape7vWl",
				button: "_2YM_OHv4TJuebM7ape7vWl",
				ButtonWrapper: "_8qynupuY9i0kBJmG4L-Oc",
				buttonWrapper: "_8qynupuY9i0kBJmG4L-Oc",
				Component: "_3GLYJXdo6w63LbbFq2PrWG",
				component: "_3GLYJXdo6w63LbbFq2PrWG"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				ImageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				imageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				ImageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				imageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				ImageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				imageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				FileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				fileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				ContainerUploading: "rOyNUbZnjJvWxtyInd1T8",
				containerUploading: "rOyNUbZnjJvWxtyInd1T8",
				Label: "_2ZFG2IQMaso9iA14qjicA_",
				label: "_2ZFG2IQMaso9iA14qjicA_",
				isOver: "_1B5UKMPaEBX3HOKKEBfp7o",
				ImageInput: "_362HLUlCiz7UbtVPniNjjW",
				imageInput: "_362HLUlCiz7UbtVPniNjjW"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/FileDrop/index.tsx"),
				c = n("./src/reddit/controls/ImageInput/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				m = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				u = n.n(m);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.wrapped(d.a, "ImageUploadIcon", u.a), h = o.a.div("ImageIconRow", u.a), g = o.a.div("ImageUploadText", u.a), f = o.a.wrapped(i.a, "FileDrop", u.a), v = o.a.div("ContainerUploading", u.a), _ = e => a.a.createElement(v, {
				className: e.className
			}, a.a.createElement(h, null, a.a.createElement(l.a, {
				sizePx: 40,
				center: !0
			})), a.a.createElement(g, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), y = o.a.label("Label", u.a);
			t.b = e => a.a.createElement(f, {
				className: e.className,
				onDrop: e.onChange,
				render: t => a.a.createElement(y, {
					className: Object(r.a)({
						[u.a.isOver]: t
					})
				}, a.a.createElement(h, null, a.a.createElement(b, null)), a.a.createElement(g, null, e.label), a.a.createElement(c.a, {
					className: u.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/constants/elementClassNames.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				u = n.n(m),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
				}
				return n
			};
			const f = b.a.button("IconButton", u.a),
				v = b.a.wrapped(l.a, "SubscribeIcon", u.a),
				_ = b.a.wrapped(c.a, "UnsubscribeIcon", u.a),
				y = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = g(e, ["border", "small"]);
					return r.a.createElement(f, s, r.a.createElement(v, {
						className: Object(p.a)(s.className, {
							[u.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", u.a),
				C = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = g(e, ["border", "small"]);
					return t ? r.a.createElement(i.f, h({}, s, {
						className: Object(p.a)(s.className, {
							[u.a.isSmall]: n
						})
					})) : r.a.createElement(i.n, h({}, s, {
						className: Object(p.a)(s.className, {
							[u.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", u.a),
				k = e => {
					var {
						icon: t
					} = e, n = g(e, ["icon"]);
					return t ? r.a.createElement(y, h({}, n, {
						className: Object(p.a)(n.className, {
							[u.a.isSmall]: n.small
						})
					})) : r.a.createElement(C, h({}, n, {
						className: Object(p.a)(n.className, {
							[u.a.isSmall]: n.small
						})
					}))
				},
				x = b.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: s,
						type: a
					} = e, i = g(e, ["border", "language", "small", "type"]);
					return r.a.createElement(f, i, r.a.createElement(_, {
						className: Object(p.a)(o.n, i.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "UnsubscribeIconButton", u.a),
				E = b.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: a,
						type: o
					} = e, c = g(e, ["border", "language", "small", "type"]);
					const l = r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
							className: u.a.UnsubscribeButtonDefault
						}, "subreddit" === o ? s.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : s.fbt._("Following", null, {
							hk: "1wQlVR"
						})), r.a.createElement("span", {
							className: u.a.UnsubscribeButtonHover
						}, "subreddit" === o ? s.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : s.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						d = Object(p.a)(c.className, {
							[u.a.isSmall]: a
						});
					return t ? r.a.createElement(i.i, h({}, c, {
						className: d,
						children: l
					})) : r.a.createElement(i.n, h({}, c, {
						className: d,
						children: l
					}))
				}, "UnsubscribeButton", u.a),
				w = e => {
					var {
						icon: t
					} = e, n = g(e, ["icon"]);
					return t ? r.a.createElement(x, h({}, n, {
						className: Object(p.a)(n.className, {
							[u.a.isSmall]: n.small
						})
					})) : r.a.createElement(E, h({}, n, {
						className: Object(p.a)(n.className, {
							[u.a.isSmall]: n.small
						})
					}))
				};
			class S extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: n = !1,
						id: s,
						language: a,
						small: o = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: o
					};
					return this.props.userIsSubscriber ? r.a.createElement(w, h({}, i, {
						language: a,
						type: this.props.identifier.type
					})) : r.a.createElement(k, h({}, i, {
						id: s
					}), this.props.children, Object(d.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const a = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = e => {
					let {
						type: t,
						key: n
					} = e;
					return r[a({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(a.a)(Object(s.c)(r.a))
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, n) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
				mResponsive: "_28QD3wRQT74vkz8KPzFC43",
				TabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				tabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				Tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				Tab: "_1PoD47oSHsBQ37RfRPY-G-",
				tab: "_1PoD47oSHsBQ37RfRPY-G-",
				mIsActive: "_1Ico4fvlryEwDknLqa0-lP",
				mIsEnabled: "_3ZTJ0aNoM983-ysCWCpmrA"
			}
		},
		"./src/reddit/components/TabNav/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/lodash/throttle.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/constants/zIndex.ts"),
				u = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				b = n("./src/reddit/components/TabNav/index.m.less"),
				h = n.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f, v = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
				}
				return n
			};
			! function(e) {
				e.GEAR = "gear"
			}(f || (f = {}));
			const _ = l.a.wrapped(p.a, "Gear", h.a),
				y = l.a.h3("Title", h.a),
				C = l.a.div("TabNavContainer", h.a),
				k = l.a.div("Tabs", h.a),
				x = l.a.wrapped(e => {
					var {
						active: t,
						children: n,
						enabled: s
					} = e, a = v(e, ["active", "children", "enabled"]);
					return o.a.createElement(u.a, g({}, a, {
						"aria-selected": t,
						className: Object(i.a)(a.className, {
							[h.a.mIsActive]: t,
							[h.a.mIsEnabled]: !1 !== s
						}),
						role: "tab"
					}), n)
				}, "Tab", h.a),
				E = e => {
					switch (e) {
						case f.GEAR:
							return o.a.createElement(_, null);
						default:
							return null
					}
				},
				w = () => window.pageYOffset || window.scrollY,
				S = 75,
				O = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: d.f,
					willChange: "transform",
					zIndex: m.g
				};
			class N extends o.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = a()(() => {
						this.state.sticky || this.forceUnsticky ? w() < S && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : w() >= S && this.setState({
							sticky: !0
						})
					}, c.F), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
						sticky: !1
					}
				}
				componentDidMount() {
					this.props.isCategoryPage && (this.toggleSticky(), window.addEventListener("orientationchange", this.toggleSticky), window.addEventListener("resize", this.toggleSticky), window.addEventListener("scroll", this.toggleSticky))
				}
				componentWillUnmount() {
					this.props.isCategoryPage && (window.removeEventListener("orientationchange", this.toggleSticky), window.removeEventListener("resize", this.toggleSticky), window.removeEventListener("scroll", this.toggleSticky))
				}
				render() {
					const {
						innerRef: e,
						isResponsiveSettingsEnabled: t,
						onTouchMove: n
					} = this.props, s = Object(i.a)({
						[h.a.mResponsive]: t
					});
					return o.a.createElement(C, {
						className: Object(i.a)(s, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, o.a.createElement(y, {
						className: Object(i.a)(s, {
							[h.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, E(this.props.icon), this.props.title), o.a.createElement(k, {
						className: Object(i.a)(s, {
							[h.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? O : void 0
					}, this.props.children))
				}
			}
			t.c = N
		},
		"./src/reddit/components/UserNameAndIcon/index.m.less": function(e, t, n) {
			e.exports = {
				UserIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				userIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				UserIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				userIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				UserLink: "_2Q3rLIRb_ij54AEsabVm9L",
				userLink: "_2Q3rLIRb_ij54AEsabVm9L"
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/components/UserNameAndIcon/index.m.less"),
				m = n.n(d);
			const u = o.a.span("UserIconContainer", m.a),
				p = o.a.wrapped(c.a, "UserIcon", m.a),
				b = o.a.wrapped(l.a, "UserLink", m.a);
			t.a = e => r.a.createElement(b, {
				className: e.className,
				to: "".concat(s.a.redditUrl, "/user/").concat(e.username)
			}, r.a.createElement(i.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, r.a.createElement(u, {
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}, r.a.createElement(p, {
				iconUrl: e.userIcon,
				isNSFW: !1,
				userName: e.username
			})), e.username))
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
				return m
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i),
				l = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
					}
					return n
				};
			const d = r.a.div("WidgetBackground", c.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, n = l(e, ["children"]);
					return a.a.createElement("div", n, a.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => a.a.createElement("div", {
				className: e.className
			}, a.a.createElement(d, null, e.children))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = Object(s.b)(() => Object(a.c)({
				language: i.O,
				userIsSubscriber: o.Z
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(r.d([n], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([n], !1))
				}
			})
		},
		"./src/reddit/constants/disclaimers.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
				}(s || (s = {}));
			const a = "https://www.redditinc.com/policies/beta-terms-of-service"
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts");
			const r = {
					[a.N.BEST]: () => s.fbt._("best", null, {
						hk: "4tcUbl"
					}),
					[a.N.HOT]: () => s.fbt._("hot", null, {
						hk: "44QCEp"
					}),
					[a.N.NEW]: () => s.fbt._("new", null, {
						hk: "3VBhPb"
					}),
					[a.N.CONTROVERSIAL]: () => s.fbt._("controversial", null, {
						hk: "4jWP0T"
					}),
					[a.N.RISING]: () => s.fbt._("rising", null, {
						hk: "1KmbkT"
					}),
					[a.N.TOP]: () => s.fbt._("top", null, {
						hk: "4pcLmp"
					})
				},
				o = e => {
					const t = r[e];
					return t && t() || ""
				},
				i = {
					[a.Qb.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[a.Qb.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[a.Qb.WEEK]: () => s.fbt._("This week", null, {
						hk: "3Y5JkE"
					}),
					[a.Qb.MONTH]: () => s.fbt._("This month", null, {
						hk: "3NWWQf"
					}),
					[a.Qb.YEAR]: () => s.fbt._("This year", null, {
						hk: "3jD0mx"
					}),
					[a.Qb.ALL]: () => s.fbt._("All time", null, {
						hk: "2cL1Yf"
					})
				},
				c = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var c = e => a.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), a.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, a.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, a.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				l = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.m.less"),
				m = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
				}
				return n
			};
			const b = e => t => {
					const {
						className: n,
						disabled: s,
						redditStyle: o,
						"data-redditstyle": i
					} = t, c = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), l = ((e, t, n) => {
						const s = !(!t && !n);
						let a = "";
						return a = e ? s ? m.a.mDisabledRedditStyle : m.a.mDisabled : s ? m.a.mActiveRedditStyle : m.a.mActive
					})(s, o, i);
					return a.a.createElement(e, u({
						className: Object(r.a)(m.a.Checkbox, l, n)
					}, c))
				},
				h = b(l.a),
				g = b(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? h : o.a;
				return a.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, a.a.createElement(t, {
					className: Object(r.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/flow.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-dnd/lib/index.js"),
				c = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = n("./src/reddit/helpers/dragDropContext/index.ts");
			const d = c.NativeTypes.FILE,
				m = a()(Object(i.DropTarget)(d, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), l.a);
			class u extends o.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(o.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = m(u)
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			class r extends a.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, r = n || s;
					return a.a.createElement("div", {
						className: e.className
					}, n && a.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), !r && a.a.createElement("input", {
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
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-dnd/lib/index.js"),
				a = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				r = n.n(a);
			t.a = Object(s.DragDropContext)(r.a)
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				a = n("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const n = new s.BigNumber(e),
					a = new s.BigNumber(t);
				return n.dividedBy(a).decimalPlaces(2).toString()
			}

			function o(e, t) {
				return Object(a.b)(parseInt(r(e, t), 10))
			}

			function i(e, t) {
				const n = new s.BigNumber(e),
					a = new s.BigNumber(t);
				return n.multipliedBy(a).toFixed(0)
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			}));
			var s = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts");
			const r = e => Object.assign({}, s.defaults(e), {
					noun: "desktop_notification_permissions"
				}),
				o = e => e ? "enable" : "disable",
				i = e => {
					Object(a.a)(Object.assign({}, r(e), {
						action: "view",
						source: "popup"
					}))
				},
				c = e => {
					Object(a.a)(Object.assign({}, r(e), {
						action: "allow",
						source: "popup"
					}))
				},
				l = e => {
					Object(a.a)(Object.assign({}, r(e), {
						action: "block",
						source: "popup"
					}))
				},
				d = e => {
					Object(a.a)(Object.assign({}, r(e), {
						action: "close",
						source: "popup"
					}))
				},
				m = (e, t, n) => Object.assign({}, s.defaults(e), {
					actionInfo: s.actionInfo(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				u = e => {
					Object(a.a)(Object.assign({}, m(e, !0), {
						action: "request",
						source: "notification"
					}))
				},
				p = e => {
					Object(a.a)(Object.assign({}, m(e, !0), {
						action: "register",
						source: "notification"
					}))
				},
				b = (e, t) => {
					Object(a.a)(Object.assign({}, m(e, !1, t), {
						action: "bail",
						source: "notification"
					}))
				},
				h = e => Object.assign({}, (e => Object.assign({}, s.defaults(e), {
					noun: "push_notification"
				}))(e), {
					notification: s.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				g = (e, t) => n => Object.assign({}, s.defaults(n), {
					action: o(t),
					noun: e,
					source: "notification"
				})
		},
		"./src/reddit/helpers/trackers/premiumSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return c
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "g", (function() {
				return f
			}));
			var s = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				r = n("./src/telemetry/models/GoldPurchase.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts");
			const i = e => Object.assign({}, s.defaults(e), {
					correlationId: Object(o.c)(o.a.PremiumSettings),
					screen: s.screen(e)
				}),
				c = () => e => Object.assign({}, i(e), {
					source: "user_settings",
					action: "click",
					noun: "premium"
				}),
				l = () => e => Object.assign({}, i(e), {
					source: "premium_settings",
					action: "view",
					noun: "page",
					goldPurchase: {
						type: Object(a.q)(e) ? r.Cancel : r.GetPremium
					}
				}),
				d = () => e => Object.assign({}, i(e), {
					source: "premium_settings",
					action: "click",
					noun: "get_premium"
				}),
				m = () => e => Object.assign({}, i(e), {
					source: "premium_settings",
					action: "click",
					noun: "cancel"
				}),
				u = () => e => Object.assign({}, i(e), {
					source: "premium_settings",
					action: "click",
					noun: "cancel_yes"
				}),
				p = () => e => Object.assign({}, i(e), {
					source: "premium_settings",
					action: "click",
					noun: "cancel_no"
				}),
				b = () => e => Object.assign({}, i(e), {
					source: "premium_settings",
					action: "select",
					noun: "hide_ads"
				}),
				h = () => e => Object.assign({}, i(e), {
					source: "premium_settings",
					action: "deselect",
					noun: "hide_ads"
				}),
				g = () => e => Object.assign({}, i(e), {
					source: "premium_settings",
					action: "select",
					noun: "highlight_comments"
				}),
				f = () => e => Object.assign({}, i(e), {
					source: "premium_settings",
					action: "deselect",
					noun: "highlight_comments"
				})
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, n) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), a.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), a.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), a.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, n) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, a.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), a.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, a.a.createElement("g", null, a.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), a.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/Notify/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_7fz7O_5kpe94rgtJU-zES"
			}
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return a.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					fillRule: "evenodd"
				}, a.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), a.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Top/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r(e) {
				return a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, n) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/layout/twoCol/Dynamic/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				r = n.n(a);
			t.a = s.a.div("dynamicTwoCol", r.a)
		},
		"./src/reddit/pages/Settings/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "aq7Z-V1l4XpWUOsbbPQed",
				container: "aq7Z-V1l4XpWUOsbbPQed",
				"m-responsive": "_1DEuTh5wc7zh0WaUee6OMw",
				mResponsive: "_1DEuTh5wc7zh0WaUee6OMw",
				CreatorTab: "_3QlgI2skRdNb0rUrRitQd3",
				creatorTab: "_3QlgI2skRdNb0rUrRitQd3",
				MessagingTab: "_3wCJvTvi_ME2B15BCVuMDo",
				messagingTab: "_3wCJvTvi_ME2B15BCVuMDo",
				PaymentsTab: "_2WMQ9c71jnOmx4epThzaxA",
				paymentsTab: "_2WMQ9c71jnOmx4epThzaxA",
				SpecialMembershipTab: "_33ITA9Gf4yLExGG5x52N6E",
				specialMembershipTab: "_33ITA9Gf4yLExGG5x52N6E"
			}
		},
		"./src/reddit/pages/Settings/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.search.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./node_modules/uuid/v4.js"),
				d = n.n(l),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/extractQueryParams/index.ts"),
				b = n("./src/lib/fastdom/index.ts"),
				h = n("./src/reddit/actions/pages/shared.ts"),
				g = n("./node_modules/js-cookie/src/js.cookie.js"),
				f = n.n(g),
				v = n("./src/reddit/actions/alpha.ts"),
				_ = n("./src/reddit/actions/login.ts"),
				y = n("./src/reddit/actions/modal.ts"),
				C = n("./src/reddit/actions/users.ts"),
				k = n("./src/reddit/components/ConfirmModal/index.tsx"),
				x = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/reddit/controls/Button/index.tsx")),
				E = n("./src/reddit/selectors/user.ts"),
				w = n("./src/lib/validateEmail/index.ts"),
				S = n("./src/reddit/actions/toaster.ts"),
				O = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				N = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				j = n("./src/reddit/icons/svgs/Info/index.tsx"),
				P = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				I = n("./src/reddit/models/Toast/index.ts"),
				T = n("./src/reddit/models/User/index.ts"),
				M = n("./src/reddit/components/Settings/FPRWarning/index.m.less"),
				A = n.n(M);
			const B = Object(c.c)({
					emailSent: e => e.user.accountSettings.sendResetEmail.api.emailSent,
					username: e => {
						const t = Object(E.i)(e);
						return t && Object(T.f)(t) || ""
					}
				}),
				R = Object(o.b)(B, e => ({
					changeEmail: t => e(Object(C.w)(t)),
					sendResetEmail: t => e(Object(C.z)(t)),
					showErrorToast: t => e(Object(S.e)({
						duration: S.a,
						kind: I.b.Error,
						text: t
					}))
				})),
				D = e => e ? r.a.createElement(N.a, {
					className: Object(m.a)(A.a.image, A.a.success)
				}) : r.a.createElement(P.a, {
					className: Object(m.a)(A.a.image, A.a.error)
				}),
				L = e => e ? s.fbt._("Check your email. Please allow some time for the email to arrive. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
					hk: "3Y172d"
				}) : s.fbt._("We have detected suspicious activity on your account. For your safety we have suspended your account until you reset your password to confirm your identity.", null, {
					hk: "YIzQQ"
				}),
				U = e => e ? s.fbt._("Reset password email sent", null, {
					hk: "cLjlN"
				}) : s.fbt._("Send a reset password email to access your account", null, {
					hk: "4jgOhY"
				}),
				F = e => e ? s.fbt._("Email was sent to:", null, {
					hk: "3Z4iz1"
				}) : s.fbt._("Email will be sent to:", null, {
					hk: "2CTyJh"
				}),
				W = e => {
					const {
						errorMsg: t,
						inputChecked: n
					} = e;
					return n ? t ? r.a.createElement(j.a, {
						className: Object(m.a)(A.a.inputIcon, A.a.error)
					}) : r.a.createElement(N.a, {
						className: Object(m.a)(A.a.inputIcon, A.a.success)
					}) : null
				};
			class H extends r.a.Component {
				constructor(e) {
					super(e), this.onEmailChange = e => this.setState({
						enteredEmail: e,
						errorMsg: "",
						inputChecked: !1
					}), this.onSendResetEmail = () => {
						const {
							changeEmail: e,
							email: t,
							sendResetEmail: n
						} = this.props, {
							enteredEmail: a
						} = this.state, r = Object(w.a)(a, !1), o = r ? "" : s.fbt._("Please fix your email to continue.", null, {
							hk: "f4LWI"
						});
						this.setState({
							errorMsg: o,
							inputChecked: !0
						}), r && (t ? n({
							curEmail: a,
							name: this.props.username
						}) : e({
							newEmail: a
						}))
					}, this.state = {
						enteredEmail: e.email || "",
						errorMsg: "",
						inputChecked: !1
					}
				}
				render() {
					const {
						emailSent: e
					} = this.props, {
						enteredEmail: t,
						errorMsg: n
					} = this.state, a = !this.props.email && !e, o = a && this.state.inputChecked && (n ? "errorBorder" : "successBorder") || "";
					return r.a.createElement("div", {
						className: A.a.container
					}, r.a.createElement("h3", {
						className: A.a.header
					}, s.fbt._("Account suspended", null, {
						hk: "DTXMF"
					})), r.a.createElement("div", {
						className: A.a.status
					}, D(e), r.a.createElement("h3", {
						className: A.a.statusText
					}, U(e))), r.a.createElement("p", {
						className: A.a.description
					}, L(e)), r.a.createElement("div", {
						className: A.a.actionContainer
					}, r.a.createElement("div", {
						className: A.a.emailContainer
					}, a ? r.a.createElement(r.a.Fragment, null, r.a.createElement(O.a, {
						className: Object(m.a)(A.a.input, A.a[o]),
						label: s.fbt._("Enter email", null, {
							hk: "1rakz1"
						}),
						onChange: this.onEmailChange,
						value: t
					}), W(this.state), r.a.createElement("h6", {
						className: A.a.errorMsg
					}, n)) : r.a.createElement("p", {
						className: A.a.emailText
					}, F(e), r.a.createElement("span", {
						className: A.a.emailAddress
					}, t))), r.a.createElement(x.f, {
						className: A.a.primaryBtn,
						onClick: this.onSendResetEmail
					}, e ? s.fbt._("Resend", null, {
						hk: "2jGEmt"
					}) : s.fbt._("Send", null, {
						hk: "3rKRVv"
					}))))
				}
			}
			var z = R(H),
				G = n("./src/reddit/components/Settings/modalIds.ts"),
				V = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				J = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				Z = n("./src/reddit/components/Settings/AccountPrefsSection/index.m.less"),
				Q = n.n(Z),
				Y = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
					}
					return n
				};
			const K = Object(c.c)({
					hasVerifiedEmail: E.w,
					isFPR: E.E
				}),
				q = Object(o.b)(K, e => ({
					openChangeEmailModal: () => e(Object(y.i)(G.a)),
					resendEmail: () => e(Object(C.y)())
				})),
				X = e => {
					let {
						email: t,
						hasVerifiedEmail: n,
						resendEmail: a
					} = e;
					return t ? n ? t : r.a.createElement(r.a.Fragment, null, s.fbt._("{email} not verified!", [s.fbt._param("email", t)], {
						hk: "3PanQN"
					}), r.a.createElement(x.d, {
						className: Q.a.tertiaryBtn,
						onClick: a
					}, s.fbt._("Click to resend", null, {
						hk: "3LDVAB"
					}))) : s.fbt._("Missing email, please update to secure your account", null, {
						hk: "3dtA7o"
					})
				};
			var $ = q(e => {
					var {
						isFPR: t,
						openChangeEmailModal: n,
						toggleChangePasswordModal: a
					} = e, o = Y(e, ["isFPR", "openChangeEmailModal", "toggleChangePasswordModal"]);
					return t ? r.a.createElement(z, {
						email: o.email
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement(V.a, null, s.fbt._("Account preferences", null, {
						hk: "344jzn"
					})), r.a.createElement(J.b, {
						actionText: s.fbt._("Change", null, {
							hk: "47lrdl"
						}),
						label: s.fbt._("Email address", null, {
							hk: "yLzuv"
						}),
						onClick: n,
						subtext: X(o)
					}), r.a.createElement(J.b, {
						actionText: s.fbt._("Change", null, {
							hk: "1gYWUc"
						}),
						label: s.fbt._("Change password", null, {
							hk: "2YAYIw"
						}),
						last: !0,
						onClick: a,
						subtext: s.fbt._("Password must be at least 6 characters long", null, {
							hk: "2enXPC"
						})
					}))
				}),
				ee = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				te = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				ne = n("./src/reddit/constants/accountManager.ts"),
				se = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ae = n("./src/reddit/selectors/accountManager.ts"),
				re = n("./src/reddit/selectors/activeModalId.ts"),
				oe = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ie = n("./src/config.ts"),
				ce = n("./src/reddit/components/Settings/ConnectedAccounts/index.m.less"),
				le = n.n(ce),
				de = n("./src/lib/lessComponent.tsx");
			const me = de.a.wrapped(J.c, "ConnectApple", le.a),
				ue = de.a.wrapped(x.f, "ConnectAppleButton", le.a),
				pe = de.a.div("ConnectionInfo", le.a),
				be = de.a.wrapped(x.j, "DisconnectButton", le.a),
				he = de.a.span("Username", le.a),
				ge = de.a.wrapped(e => r.a.createElement("svg", {
					className: e.className,
					height: "18",
					viewBox: "0 0 18 18",
					width: "18",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M8.8162 4.15385C9.60444 4.15385 10.5925 3.60458 11.1809 2.87222C11.7138 2.20852 12.1024 1.28163 12.1024 0.354736C12.1024 0.228861 12.0913 0.102988 12.0691 0C11.192 0.0343293 10.1373 0.606484 9.50452 1.37317C9.00493 1.95677 8.54975 2.87222 8.54975 3.81055C8.54975 3.94787 8.57196 4.08519 8.58306 4.13096C8.63857 4.1424 8.72739 4.15385 8.8162 4.15385ZM6.04071 18C7.1176 18 7.59498 17.2562 8.93832 17.2562C10.3039 17.2562 10.6036 17.9771 11.8026 17.9771C12.9794 17.9771 13.7677 16.8557 14.5115 15.7572C15.3442 14.4984 15.6883 13.2626 15.7105 13.2053C15.6328 13.1825 13.3791 12.2327 13.3791 9.56643C13.3791 7.25493 15.1554 6.2136 15.2553 6.1335C14.0785 4.39415 12.2911 4.34838 11.8026 4.34838C10.4815 4.34838 9.40461 5.17228 8.72739 5.17228C7.99465 5.17228 7.02878 4.39415 5.88528 4.39415C3.70929 4.39415 1.5 6.24793 1.5 9.74952C1.5 11.9237 2.32155 14.2238 3.33183 15.7114C4.19778 16.9701 4.95271 18 6.04071 18Z"
				})), "AppleIcon", le.a),
				fe = de.a.span("TextAndIconWrapper", le.a);
			var ve = e => {
				const {
					appleAccount: t,
					isResponsiveSettingsEnabled: n,
					onConnectClick: a,
					onDisconnectClick: o
				} = e, i = t && t.email, c = Object(m.a)({
					[le.a["m-responsive"]]: n
				});
				return e.appleAccount ? (() => r.a.createElement(J.c, {
					label: s.fbt._("Connected to Apple", null, {
						hk: "1oCedt"
					}),
					subtext: s.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, r.a.createElement(pe, null, r.a.createElement("div", null, r.a.createElement(he, null, i)), r.a.createElement(be, {
					onClick: o
				}, "(", s.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => r.a.createElement(me, {
					className: c,
					label: s.fbt._("Connect to Apple", null, {
						hk: "4yrUwb"
					}),
					subtext: s.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, r.a.createElement(ue, {
					className: c,
					onClick: a
				}, r.a.createElement(fe, null, r.a.createElement(ge, null), s.fbt._("Connect to Apple", null, {
					hk: "15AzyF"
				})))))()
			};
			class _e extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						appleAccount: null
					}, this.onConnectClick = () => {
						this.setState({
							appleAccount: {
								email: "user@gmail.com"
							}
						})
					}, this.onDisconnectClick = () => {
						this.setState({
							appleAccount: null
						})
					}
				}
				render() {
					return r.a.createElement(ve, {
						appleAccount: this.state.appleAccount,
						isResponsiveSettingsEnabled: this.props.isResponsiveSettingsEnabled,
						onConnectClick: this.onConnectClick,
						onDisconnectClick: this.onDisconnectClick
					})
				}
			}
			var ye = _e;
			const Ce = de.a.wrapped(J.c, "ConnectGoogle", le.a),
				ke = de.a.wrapped(x.f, "ConnectGoogleButton", le.a),
				xe = de.a.div("ConnectionInfo", le.a),
				Ee = de.a.wrapped(x.j, "DisconnectButton", le.a),
				we = de.a.span("Username", le.a),
				Se = de.a.wrapped(e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456V9.20456Z",
					fill: "#4285F4"
				}), r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M9 18C11.43 18 13.4673 17.1941 14.9564 15.8196L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18V18Z",
					fill: "#34A853"
				}), r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409 7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774 0 9.00001C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71V10.71Z",
					fill: "#FBBC05"
				}), r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955V3.57955Z",
					fill: "#EA4335"
				})), "GoogleIcon", le.a),
				Oe = de.a.span("TextAndIconWrapper", le.a);
			var Ne = e => {
				const {
					googleAccount: t,
					isResponsiveSettingsEnabled: n,
					onConnectClick: a,
					onDisconnectClick: o
				} = e, i = t && t.email, c = Object(m.a)({
					[le.a["m-responsive"]]: n
				});
				return e.googleAccount ? (() => r.a.createElement(J.c, {
					label: s.fbt._("Connected to Google", null, {
						hk: "2jPsFn"
					}),
					subtext: s.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, r.a.createElement(xe, null, r.a.createElement("div", null, r.a.createElement(we, null, i)), r.a.createElement(Ee, {
					onClick: o
				}, "(", s.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => r.a.createElement(Ce, {
					className: c,
					label: s.fbt._("Connect to Google", null, {
						hk: "7yvud"
					}),
					subtext: s.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, r.a.createElement(ke, {
					className: c,
					onClick: a
				}, r.a.createElement(Oe, null, r.a.createElement(Se, null), s.fbt._("Connect to Google", null, {
					hk: "2IcOIA"
				})))))()
			};
			class je extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleAccount: null
					}, this.onConnectClick = () => {
						this.setState({
							googleAccount: {
								email: "user@gmail.com"
							}
						})
					}, this.onDisconnectClick = () => {
						this.setState({
							googleAccount: null
						})
					}
				}
				render() {
					return r.a.createElement(Ne, {
						googleAccount: this.state.googleAccount,
						isResponsiveSettingsEnabled: this.props.isResponsiveSettingsEnabled,
						onConnectClick: this.onConnectClick,
						onDisconnectClick: this.onDisconnectClick
					})
				}
			}
			var Pe = n("./src/reddit/actions/externalAccount.ts"),
				Ie = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				Te = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				Me = n("./src/reddit/models/ExternalAccount/index.ts");
			const Ae = de.a.wrapped(Te.a, "TwitterIcon", le.a),
				Be = de.a.wrapped(Ie.a, "LoadingIcon", le.a),
				Re = de.a.wrapped(J.c, "ConnectTwitter", le.a),
				De = de.a.wrapped(x.f, "ConnectTwitterButton", le.a),
				Le = de.a.span("TextAndIconWrapper", le.a),
				Ue = de.a.wrapped(x.j, "DisconnectButton", le.a),
				Fe = de.a.span("Username", le.a),
				We = de.a.div("ConnectionInfo", le.a);
			var He = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				ze = n("./src/reddit/selectors/externalAccount.ts");
			const Ge = Object(c.c)({
					twitterAccount: ze.a,
					isTwitterConnectionPending: ze.b
				}),
				Ve = Object(o.b)(Ge, e => ({
					onConnectAccount: t => {
						e(Pe.m(t)), t === Me.a.Twitter && e((e, t) => He.b(t()))
					},
					onDisconnectAccount: t => {
						e(Pe.n(t)), t === Me.a.Twitter && e((e, t) => He.d(t()))
					},
					trackDisplayLinkOnProfileToggled: t => e((e, n) => He.e(n(), t))
				}));
			var Je = Object(se.t)()(Ve(e => {
				const t = t => {
						t.preventDefault(), e.onConnectAccount(Me.a.Twitter)
					},
					n = t => {
						t.preventDefault(), e.onDisconnectAccount(Me.a.Twitter)
					};
				return r.a.createElement(a.Fragment, null, e.twitterAccount ? (() => {
					const t = e.twitterAccount;
					return r.a.createElement(J.c, {
						label: s.fbt._("Connected to Twitter", null, {
							hk: "4jBH4V"
						}),
						subtext: s.fbt._("You can now choose to share your posts to Twitter from the new post composer.", null, {
							hk: "2Wawns"
						})
					}, r.a.createElement(We, null, r.a.createElement("div", null, r.a.createElement(Fe, null, "@", t.username)), r.a.createElement(Ue, {
						onClick: n
					}, "(", s.fbt._("Disconnect", null, {
						hk: "1dQQ2u"
					}), ")")))
				})() : (() => {
					const {
						isResponsiveSettingsEnabled: n,
						isTwitterConnectionPending: a
					} = e, o = Object(m.a)({
						[le.a["m-responsive"]]: n
					});
					return r.a.createElement(Re, {
						className: o,
						label: s.fbt._("Connect to Twitter", null, {
							hk: "4rhAYG"
						}),
						subtext: s.fbt._("Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.", null, {
							hk: "3TueXf"
						})
					}, r.a.createElement(De, {
						className: o,
						onClick: t
					}, a ? r.a.createElement(Be, {
						sizePx: 15
					}) : r.a.createElement(Le, null, r.a.createElement(Ae, null), s.fbt._("Connect to Twitter", null, {
						hk: "3r8ltg"
					}))))
				})(), r.a.createElement(J.n, {
					disabled: !e.twitterAccount,
					indent: !0,
					label: s.fbt._("Show link on profile", null, {
						hk: "2GORbe"
					}),
					on: !!e.prefs.showTwitter,
					onClick: () => {
						e.update(!e.prefs.showTwitter, "showTwitter"), e.trackDisplayLinkOnProfileToggled(!e.prefs.showTwitter)
					},
					subtext: s.fbt._("You can show a link to your Twitter account on your profile", null, {
						hk: "WQ9Sy"
					})
				}))
			}));
			var Ze = e => {
				const {
					isResponsiveSettingsEnabled: t
				} = e;
				return r.a.createElement(a.Fragment, null, r.a.createElement(V.a, {
					id: "connected-accounts"
				}, s.fbt._("Connected accounts", null, {
					hk: "1whjzI"
				})), r.a.createElement(Je, e), (() => {
					if (e.isSSOAccount) return r.a.createElement(a.Fragment, null, r.a.createElement(ye, {
						isResponsiveSettingsEnabled: t
					}), r.a.createElement(je, {
						isResponsiveSettingsEnabled: t
					}))
				})())
			};
			const Qe = Object(c.c)({
				isSSOAccount: () => !1
			});
			var Ye = Object(o.b)(Qe)(Ze),
				Ke = n("./src/reddit/components/Settings/DeactivateModal.tsx"),
				qe = n("./src/reddit/components/Settings/AccountForm.m.less"),
				Xe = n.n(qe);
			const $e = de.a.wrapped(oe.b, "Trash", Xe.a),
				et = de.a.wrapped(V.a, "BetaTestsHeading", Xe.a),
				tt = de.a.wrapped(J.n, "InBetaToggle", Xe.a),
				nt = de.a.wrapped(J.n, "InRedesignBetaToggle", Xe.a),
				st = de.a.button("DeactivateButton", Xe.a),
				at = de.a.div("DeactivateWrapper", Xe.a),
				rt = Object(c.c)({
					changePasswordHref: (e, t) => Object(ae.c)(e, {
						pageLayer: t.pageLayer,
						path: ne.b.ChangePassword
					}),
					deactivateModalOpen: Object(re.b)("deactivate_modal_id"),
					email: E.l,
					inRedesignBeta: E.A,
					optoutModalOpen: Object(re.b)("settins_optout_modal_id"),
					user: E.i
				}),
				ot = Object(o.b)(rt, (e, t) => ({
					deactivate: t => {
						e(Object(C.x)(t))
					},
					optOut: async () => {
						if ("new.reddit.com" === window.location.host) return window.location.assign("https://old.reddit.com/prefs");
						f.a.get("rseor3") && f.a.remove("rseor3", {
							domain: ie.a.cookieDomain
						}), await e(Object(v.b)()), window.location.href = "".concat(ie.a.redditUrl, "/prefs")
					},
					resendEmail: () => e(Object(C.y)()),
					toggleChangePasswordModal: () => e(Object(_.b)()),
					toggleDeactivateModal: () => e(Object(y.i)("deactivate_modal_id")),
					toggleOptoutModal: () => e(Object(y.i)("settins_optout_modal_id"))
				}));
			class it extends r.a.Component {
				constructor() {
					super(...arguments), this.launchChangePasswordFlow = () => {
						const {
							changePasswordHref: e,
							isResponsiveSettingsEnabled: t,
							toggleChangePasswordModal: n
						} = this.props;
						t ? window.location.href = e : n()
					}
				}
				render() {
					const {
						deactivate: e,
						deactivateModalOpen: t,
						email: n,
						inRedesignBeta: a,
						isResponsiveSettingsEnabled: o,
						optOut: i,
						optoutModalOpen: c,
						prefs: l,
						toggleDeactivateModal: d,
						toggleOptoutModal: u,
						update: p,
						user: b
					} = this.props, h = Object(m.a)({
						[Xe.a["m-responsive"]]: o
					}), g = Object(m.a)({
						[Xe.a.ResponsiveOverlay]: o
					});
					return r.a.createElement(te.a, null, r.a.createElement(ee.b, {
						isResponsiveSettingsEnabled: o
					}, s.fbt._("Account settings", null, {
						hk: "2faClM"
					})), r.a.createElement($, {
						email: n,
						toggleChangePasswordModal: this.launchChangePasswordFlow
					}), r.a.createElement(Ye, this.props), r.a.createElement(et, {
						className: h
					}, s.fbt._("beta tests", null, {
						hk: "3Zy092"
					})), r.a.createElement(tt, {
						className: h,
						on: l.inBeta,
						onClick: () => p(!l.inBeta, "inBeta"),
						label: s.fbt._("Opt into beta tests", null, {
							hk: "4lexek"
						}),
						subtext: s.fbt._("See the newest features from Reddit and join the r/beta community", null, {
							hk: "4syr2"
						})
					}), r.a.createElement(nt, {
						className: h,
						on: !a,
						onClick: u,
						label: s.fbt._("Opt out of the redesign", null, {
							hk: "4895Wr"
						}),
						subtext: s.fbt._("Revert back to old Reddit for the time being", null, {
							hk: "2xbG6u"
						}),
						last: !0
					}), r.a.createElement(V.a, null, s.fbt._("deactivate account", null, {
						hk: "3SK4xO"
					})), r.a.createElement(at, null, r.a.createElement(st, {
						onClick: d
					}, r.a.createElement($e, null), s.fbt._("deactivate account", null, {
						hk: "2KkyTV"
					}))), c && r.a.createElement(k.a, {
						headerText: s.fbt._("Opt out of the redesign", null, {
							hk: "ToHJM"
						}),
						message: s.fbt._("There is an opt in to redesign setting in Preferences (in old Reddit) if you'd like to opt back in.", null, {
							hk: "11HYYa"
						}),
						cancelText: s.fbt._("Cancel", null, {
							hk: "2fKSEm"
						}),
						acceptText: s.fbt._("opt out", null, {
							hk: "2Abiox"
						}),
						onAccept: i,
						onCancel: u,
						onOverlayClick: u,
						overlayClassName: g,
						withOverlay: !0
					}), t && r.a.createElement(Ke.b, {
						onClick: e,
						exit: d,
						onOverlayClick: d,
						overlayClassName: g,
						user: b,
						withOverlay: !0
					}))
				}
			}
			var ct = Object(se.t)()(ot(it)),
				lt = n("./src/reddit/reducers/user/prefs/index.ts"),
				dt = n("./src/reddit/actions/chat/constants.ts"),
				mt = n("./src/reddit/actions/chat/userSettings.ts"),
				ut = n("./src/reddit/actions/userBlocks.ts"),
				pt = n("./src/reddit/actions/userWhitelist.ts"),
				bt = n("./src/lib/timeAgo/index.ts"),
				ht = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				gt = n("./src/reddit/components/Hovercards/helpers.ts"),
				ft = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				vt = n("./src/reddit/components/Settings/shared/UserRow.m.less"),
				_t = n.n(vt);
			const yt = de.a.p("Date", _t.a),
				Ct = de.a.wrapped(ft.a, "UserNameAndIcon", _t.a),
				kt = de.a.button("Button", _t.a),
				xt = de.a.div("ButtonWrapper", _t.a);
			var Et = de.a.wrapped(e => r.a.createElement("div", {
					className: e.className
				}, r.a.createElement(Ct, {
					username: e.name,
					userIcon: e.img,
					tooltipId: Object(gt.b)({
						author: e.name,
						tooltipIdPrefix: ht.a
					}),
					sendHoverCardEvent: () => {},
					iconSize: 24
				}), r.a.createElement(yt, null, Object(bt.d)(e.language, e.date / 1e3)), r.a.createElement(xt, null, r.a.createElement(kt, {
					disabled: !!e.disabled,
					onClick: e.onClick
				}, "Remove"))), "Component", _t.a),
				wt = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				St = n("./src/reddit/components/Settings/shared/ListWidget.m.less"),
				Ot = n.n(St);
			const Nt = 5,
				jt = de.a.h4("ListHeading", Ot.a),
				Pt = de.a.div("ListBox", Ot.a),
				It = de.a.div("MoreWrapper", Ot.a),
				Tt = de.a.button("MoreButton", Ot.a),
				Mt = de.a.wrapped(J.l, "Subtext", Ot.a);
			class At extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						showAll: !1,
						value: ""
					}
				}
				componentDidUpdate(e, t) {
					e.api.new === wt.a.pending && this.props.api.new === wt.a.waitingForRequest && this.setState({
						value: ""
					})
				}
				render() {
					const {
						showAll: e,
						value: t
					} = this.state, {
						className: n,
						api: s,
						add: a,
						padBottom: o,
						remove: i,
						list: c,
						language: l,
						label: d,
						title: u,
						subtext: p
					} = this.props, b = e ? c.length : 5;
					return r.a.createElement("div", {
						className: Object(m.a)(Ot.a.container, n, {
							[Ot.a.mPadBottom]: !!o
						})
					}, r.a.createElement(jt, null, u), void 0 !== p && r.a.createElement(Mt, null, p), r.a.createElement(O.a, {
						buttonText: "add",
						disabled: s.new === wt.a.pending,
						label: d,
						onClick: () => t && a(t),
						onChange: e => this.setState({
							value: e
						}),
						value: t
					}), r.a.createElement(Pt, null, c.slice(0, b).map(e => r.a.createElement(Et, {
						disabled: s[e.name] === wt.a.pending,
						key: e.name,
						name: e.name,
						onClick: () => i(e.name),
						img: e.icon_img,
						date: 1e3 * e.date,
						language: l
					})), c.length > Nt && !e ? r.a.createElement(It, null, r.a.createElement(Tt, {
						onClick: () => this.setState({
							showAll: !0
						})
					}, "SHOW ALL")) : null))
				}
			}
			var Bt = n("./src/reddit/components/Settings/PrivacyForm.m.less"),
				Rt = n.n(Bt);
			const Dt = de.a.div("ListsWrapper", Rt.a),
				Lt = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var Ut = Object(o.b)(Lt, (e, t) => ({
					addBlocked: t => e(Object(ut.h)(t)),
					addWhitelisted: t => e(Object(pt.g)(t)),
					removeWhitelisted: t => e(Object(pt.h)(t)),
					removeBlocked: t => e(Object(ut.g)(t)),
					saveChatSettings: t => e(Object(mt.c)(t))
				}))(e => {
					let {
						addBlocked: t,
						addWhitelisted: n,
						blocked: a,
						blockedApi: o,
						chatSettings: i,
						language: c,
						prefs: {
							acceptPrivateMessages: l
						},
						removeBlocked: d,
						removeWhitelisted: m,
						saveChatSettings: u,
						update: p,
						whitelist: b,
						whitelistApi: h
					} = e;
					return r.a.createElement(te.a, null, r.a.createElement(ee.b, {
						isResponsiveSettingsEnabled: !1
					}, s.fbt._("Chat & Messaging", null, {
						hk: "1hQy2z"
					})), r.a.createElement(At, {
						title: s.fbt._("People You’ve Blocked", null, {
							hk: "gHecT"
						}),
						subtext: s.fbt._("Blocked people can’t send you chat requests or private messages.", null, {
							hk: "1T35vT"
						}),
						label: s.fbt._("Block new user", null, {
							hk: "2Nv3pc"
						}),
						add: t,
						remove: d,
						list: a,
						language: c,
						api: o,
						padBottom: !0
					}), r.a.createElement(J.d, {
						label: s.fbt._("Who can send you chat requests", null, {
							hk: "4pTJIe"
						}),
						items: [dt.a.anybody, dt.a.account_age_30_days, dt.a.nobody],
						selected: i.invitePolicy,
						onClick: e => {
							u({
								invitePolicy: e
							})
						},
						id: "chatUserSettingsInvitePolicy"
					}), r.a.createElement(J.d, {
						label: s.fbt._("Who can send you private messages", null, {
							hk: "V2HXb"
						}),
						subtext: s.fbt._("Heads up—Reddit admins and moderators of communities you’ve joined can message you even if they’re not whitelisted.", null, {
							hk: "3fmM1O"
						}),
						items: [lt.a.Everyone, lt.a.Whitelisted],
						selected: l,
						onClick: e => p(e, "acceptPrivateMessages"),
						id: "acceptPrivateMessages"
					}), r.a.createElement(Dt, null, r.a.createElement(At, {
						title: s.fbt._("People You’ve Whitelisted", null, {
							hk: "22S3xn"
						}),
						subtext: s.fbt._("Whitelisted people can always send you private messages.", null, {
							hk: "3MTRrt"
						}),
						label: s.fbt._("ADD NEW USER TO WHITELIST", null, {
							hk: "1lqyIL"
						}),
						add: n,
						remove: m,
						list: b,
						language: c,
						api: h
					})))
				}),
				Ft = n("./src/reddit/components/Translated/index.tsx"),
				Wt = n("./src/reddit/components/Settings/Creator/Header/index.m.less"),
				Ht = n.n(Wt);
			const zt = e => "economy.settings.creator.header.".concat(e);

			function Gt(e) {
				return r.a.createElement("header", {
					className: Object(m.a)(Ht.a.container, e.className)
				}, r.a.createElement("div", {
					className: Ht.a.title
				}, r.a.createElement(Ft.a, {
					msgId: zt("title")
				})), r.a.createElement("div", {
					className: Ht.a.tag
				}, r.a.createElement(Ft.a, {
					msgId: zt("tag")
				})))
			}
			var Vt = n("./src/reddit/constants/disclaimers.ts"),
				Jt = n("./src/reddit/contexts/ApiContext.tsx"),
				Zt = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				Qt = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				Yt = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				Kt = n("./src/reddit/selectors/economics.ts"),
				qt = n("./src/reddit/components/Settings/Creator/StripeConnect/index.m.less"),
				Xt = n.n(qt);
			const {
				fbt: $t
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var en;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected"
			}(en || (en = {}));
			class tn extends r.a.Component {
				constructor(e) {
					super(e), this.initiateStripeConnect = async () => {
						const e = await Object(Zt.e)(this.props.apiContext());
						e.ok ? window.location.href = e.body.connectUrl : this.props.onError(e.error)
					};
					let t = en.Default;
					e.connectCode && e.connectStateToken && (t = en.Connecting), e.stripeConnected && (t = en.Connected), this.state = {
						buttonState: t
					}
				}
				async componentDidMount() {
					if (this.props.connectCode && this.props.connectStateToken && this.state.buttonState !== en.Connected) {
						const e = await Object(Zt.a)(this.props.apiContext(), {
							code: this.props.connectCode,
							stateToken: this.props.connectStateToken
						});
						e.ok ? this.setState({
							buttonState: en.Connected
						}) : (this.props.onError(e.error), this.setState({
							buttonState: en.Default
						}))
					}
				}
				render() {
					const {
						className: e
					} = this.props, {
						buttonState: t
					} = this.state;
					let n = $t._("connect stripe account", null, {
						hk: "4h2d0M"
					});
					return t === en.Connected && (n = $t._("connect", null, {
						hk: "22jQRU"
					})), t === en.Connecting && (n = $t._("connecting...", null, {
						hk: "3ccNPc"
					})), r.a.createElement("div", {
						className: e
					}, r.a.createElement(V.a, null, $t._("accept tips", null, {
						hk: "1kEl0R"
					})), r.a.createElement(J.j, {
						direction: "row",
						label: $t._("Stripe Account", null, {
							hk: "2WMbeu"
						}),
						subtext: $t._("Connect your Stripe account to Reddit to get paid directly to your bank account. If you don't have a Strip account, it'll only take a couple of minutes to create one.", null, {
							hk: "2VhQWE"
						})
					}, r.a.createElement("div", {
						className: Xt.a.cta
					}, r.a.createElement(x.f, {
						className: Xt.a.button,
						disabled: t !== en.Default,
						onClick: this.initiateStripeConnect
					}, n), r.a.createElement("div", {
						className: Xt.a.legal
					}, $t._("By connecting to Stripe, you agree to our {link}", [$t._param("link", r.a.createElement("a", {
						className: Xt.a.legalLink,
						href: Vt.a,
						target: "_blank"
					}, "Beta Terms of Service"))], {
						hk: "1TG2Ys"
					})))), r.a.createElement("div", {
						className: Xt.a.disclaimer
					}, r.a.createElement(Yt.a, {
						className: Xt.a.icon
					}), $t._("Reddit doesn't store personal data collected by Stripe.", null, {
						hk: "FTUAi"
					})))
				}
			}
			const nn = Object(c.c)({
					language: e => e.user.language,
					stripeConnected: Kt.B
				}),
				sn = Object(o.b)(nn, e => ({
					onError: t => e(Object(S.e)({
						duration: 5e3,
						kind: I.b.Error,
						text: Object(Qt.a)(t)
					}))
				}));
			var an = Object(Jt.b)(sn(tn)),
				rn = n("./src/reddit/components/Settings/Creator/index.m.less"),
				on = n.n(rn),
				cn = function(e) {
					return r.a.createElement(te.a, null, r.a.createElement("div", null, r.a.createElement(Gt, {
						className: on.a.header
					}), r.a.createElement(an, {
						connectCode: e.stripeConnectCode,
						connectStateToken: e.stripeConnectStateToken
					})))
				},
				ln = (n("./node_modules/core-js/modules/es6.array.sort.js"), n("./src/lib/listingSort/index.ts")),
				dn = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				mn = n("./src/higherOrderComponents/asTooltip.tsx"),
				un = n("./src/reddit/actions/tooltip.ts"),
				pn = n("./src/reddit/controls/Dropdown/index.tsx"),
				bn = n("./src/reddit/controls/Dropdown/Row.tsx"),
				hn = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				gn = n("./src/reddit/selectors/tooltip.ts"),
				fn = n("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				vn = n.n(fn);
			const _n = Object(mn.a)(pn.a),
				yn = Object(c.c)({
					isDropdownOpen: (e, t) => Object(gn.b)(t.dropdownId)(e)
				});
			class Cn extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => r.a.createElement(bn.b, {
						children: e.contentJsx || e.icon,
						className: vn.a.dropdownRow,
						displayText: e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}), this.renderDropdownItem = (e, t) => r.a.createElement(bn.b, {
						children: e.contentJsx || e.icon,
						displayText: e.displayText,
						isSelected: t,
						key: e.key,
						noIcon: !e.icon,
						onClick: () => this.props.onSelect(e)
					})
				}
				render() {
					const {
						props: e
					} = this, {
						items: t,
						renderLabel: n = this.renderLabel,
						renderItem: s = this.renderDropdownItem,
						selectedKey: a
					} = this.props, o = t.find(e => e.key === a) || t[0];
					return r.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(m.a)(vn.a.container, e.className),
						onClick: this.onToggleDropdown
					}, r.a.createElement("div", {
						className: vn.a.labelWrapper
					}, n(o), r.a.createElement(hn.b, null)), r.a.createElement(_n, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => s(e, a === e.key))))
				}
			}
			var kn = Object(o.b)(yn, (e, t) => ({
					openDropdown: () => {
						e(Object(un.h)({
							tooltipId: t.dropdownId
						}))
					}
				}))(Cn),
				xn = n("./src/reddit/constants/listingSorts.ts");
			const En = [u.N.HOT, u.N.NEW, u.N.TOP, u.N.RISING];
			var wn = e => {
				const {
					dropdownId: t
				} = e, n = En.map(e => ({
					key: e,
					displayText: Object(xn.a)(e),
					icon: r.a.createElement(dn.a, {
						sort: e
					})
				}));
				return r.a.createElement(kn, {
					dropdownId: t,
					items: n,
					onSelect: t => e.onChange(t.key),
					selectedKey: e.sort
				})
			};
			const Sn = [u.Qb.HOUR, u.Qb.DAY, u.Qb.WEEK, u.Qb.MONTH, u.Qb.YEAR, u.Qb.ALL];
			var On = e => {
					const {
						dropdownId: t
					} = e, n = Sn.map(e => ({
						key: e,
						displayText: Object(xn.b)(e)
					}));
					return r.a.createElement(kn, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.sort
					})
				},
				Nn = n("./src/reddit/components/Settings/SortSetting/index.m.less"),
				jn = n.n(Nn);
			const Pn = de.a.div("Separator", jn.a);
			class In extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onListingSortChange = e => {
						const {
							timeSort: t
						} = Object(ln.d)(this.props.fullSort);
						this.props.onChange(Object(ln.c)({
							sort: e,
							timeSort: t
						}))
					}, this.onTimeSortChange = e => {
						const {
							sort: t
						} = Object(ln.d)(this.props.fullSort);
						this.props.onChange(Object(ln.c)({
							sort: t,
							timeSort: e
						}))
					}
				}
				render() {
					const {
						className: e,
						fullSort: t,
						language: n,
						dropdownPrefix: a
					} = this.props, {
						sort: o,
						timeSort: i
					} = Object(ln.d)(t);
					return r.a.createElement(J.c, {
						className: e,
						label: s.fbt._("Community content sort", null, {
							hk: "Ubmt1"
						}),
						subtext: s.fbt._("Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.", null, {
							hk: "2a2SDC"
						})
					}, r.a.createElement("div", {
						className: jn.a.wrapper
					}, r.a.createElement(wn, {
						onChange: this.onListingSortChange,
						dropdownId: a + "-listing",
						sort: o,
						language: n
					}), i && r.a.createElement(r.a.Fragment, null, r.a.createElement(Pn, null), r.a.createElement(On, {
						onChange: this.onTimeSortChange,
						dropdownId: a + "-time",
						sort: i,
						language: n
					}))))
				}
			}
			var Tn = n("./src/reddit/constants/postLayout.ts"),
				Mn = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				An = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				Bn = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				Rn = n("./src/reddit/controls/Dropdown/index.m.less"),
				Dn = n.n(Rn);
			const Ln = {
				[Tn.d.Card]: Bn.a,
				[Tn.d.Classic]: Mn.a,
				[Tn.d.Compact]: An.a
			};
			var Un = e => {
				const t = Ln[e.layout];
				return r.a.createElement(t, {
					className: Dn.a.iconStyles
				})
			};
			const Fn = [Tn.d.Card, Tn.d.Classic, Tn.d.Compact];
			var Wn = e => {
					const {
						dropdownId: t
					} = e, n = Fn.map(e => ({
						key: e,
						displayText: e,
						icon: r.a.createElement(Un, {
							layout: e
						})
					}));
					return r.a.createElement(kn, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.layout
					})
				},
				Hn = n("./src/reddit/components/Settings/ViewSetting/index.m.less"),
				zn = n.n(Hn);
			class Gn extends r.a.PureComponent {
				render() {
					const {
						className: e,
						dropdownPrefix: t,
						label: n,
						subtext: s,
						layout: a
					} = this.props;
					return r.a.createElement(J.c, {
						className: e,
						label: n,
						subtext: s
					}, r.a.createElement("div", {
						className: zn.a.wrapper
					}, r.a.createElement(Wn, {
						onChange: this.props.onChange,
						dropdownId: t + "-listing",
						layout: a
					})))
				}
			}
			var Vn = n("./src/reddit/components/Settings/FeedForm.m.less"),
				Jn = n.n(Vn),
				Zn = e => {
					let {
						isResponsiveSettingsEnabled: t,
						language: n,
						prefs: {
							autoplayVideo: a,
							hideNSFW: o,
							openPostInNewTab: i,
							over18: c,
							privateFeeds: l,
							rememberCommunitySort: d,
							sort: u,
							stylesEnabled: p,
							useMarkdown: b,
							layout: h,
							rememberCommunityLayout: g
						},
						update: f
					} = e;
					const v = Object(m.a)({
						[Jn.a["m-responsive"]]: t
					});
					return r.a.createElement(te.a, null, r.a.createElement(ee.b, {
						isResponsiveSettingsEnabled: t
					}, s.fbt._("Feed settings", null, {
						hk: "2R5BB"
					})), r.a.createElement(V.a, null, s.fbt._("Content Preferences", null, {
						hk: "76osn"
					})), r.a.createElement(J.n, {
						on: c,
						onClick: () => f(!c, "over18"),
						label: s.fbt._("Adult content", null, {
							hk: "4les43"
						}),
						subtext: s.fbt._("Enable to view adult and NSFW (not safe for work) content in your feed and search results", null, {
							hk: "Ni5mW"
						})
					}), r.a.createElement(J.n, {
						disabled: !c,
						label: s.fbt._("Safe browsing mode", null, {
							hk: "CeEkN"
						}),
						on: !!c && o,
						onClick: () => f(!o, "hideNSFW"),
						subtext: s.fbt._("Blur thumbnails and media preview for anything labeled NSFW (not safe for work)", null, {
							hk: "403VoR"
						})
					}), r.a.createElement(J.n, {
						on: a,
						onClick: () => f(!a, "autoplayVideo"),
						label: s.fbt._("Autoplay media", null, {
							hk: "4huarG"
						}),
						subtext: s.fbt._("Play videos and gifs automatically when in the viewport", null, {
							hk: "1YYoIq"
						})
					}), r.a.createElement(J.n, {
						on: !!p,
						onClick: () => f(!p, "stylesEnabled"),
						label: s.fbt._("Community themes", null, {
							hk: "8TpCA"
						}),
						subtext: s.fbt._("Use custom themes for all communities. You can also turn this off on a per community basis.", null, {
							hk: "2EVyTQ"
						})
					}), r.a.createElement(In, {
						className: v,
						dropdownPrefix: "subreddit-sort-setting",
						language: n,
						fullSort: u,
						onChange: e => {
							u !== e && f(e, "sort")
						}
					}), r.a.createElement(J.n, {
						className: v,
						indent: !0,
						on: !!d,
						onClick: () => f(!d, "rememberCommunitySort"),
						label: s.fbt._("Remember per community", null, {
							hk: "44RHeL"
						}),
						subtext: s.fbt._("Enable if you would like each community to remember and use the last content sort you selected for that community.", null, {
							hk: "2zgrQz"
						})
					}), r.a.createElement(Gn, {
						className: v,
						dropdownPrefix: "subreddit-view-setting",
						label: s.fbt._("Global content view", null, {
							hk: "1tWTJK"
						}),
						layout: h,
						onChange: e => f(e, "layout"),
						subtext: s.fbt._("Choose how you would like content displayed in feeds. This control is also found above your feed.", null, {
							hk: "1NyVGg"
						})
					}), r.a.createElement(J.n, {
						className: v,
						on: !!g,
						onClick: () => f(!g, "rememberCommunityLayout"),
						label: s.fbt._("Remember per community", null, {
							hk: "42Ianh"
						}),
						subtext: s.fbt._("Enable if you would like each community to remember and use the last content view you selected for that community.", null, {
							hk: "3fxqrV"
						}),
						indent: !0
					}), r.a.createElement(J.n, {
						className: v,
						on: !!i,
						onClick: () => f(!i, "openPostInNewTab"),
						label: s.fbt._("Open posts in new tab", null, {
							hk: "eOvQi"
						}),
						subtext: s.fbt._("Enable to always open posts in a new tab", null, {
							hk: "l3HZX"
						})
					}), r.a.createElement(V.a, {
						className: v
					}, s.fbt._("Post Preferences", null, {
						hk: "35wQ1I"
					})), r.a.createElement(J.n, {
						className: v,
						on: !!b,
						onClick: () => f(!b, "useMarkdown"),
						label: s.fbt._("Default to markdown", null, {
							hk: "1gcz1a"
						}),
						subtext: s.fbt._("When posting, your input will default to markdown text instead of fancy pants", null, {
							hk: "3kF1IP"
						})
					}), l && r.a.createElement(r.a.Fragment, null, r.a.createElement(V.a, null, s.fbt._("RSS Feeds", null, {
						hk: "2xkYfd"
					})), r.a.createElement(J.f, {
						label: s.fbt._("List of your RSS feeds", null, {
							hk: "PR8PD"
						}),
						subtext: s.fbt._("List of links to private RSS feeds so that you can get listings of your content", null, {
							hk: "2M02AZ"
						}),
						link: "".concat(ie.a.redditUrl, "/prefs/feeds"),
						last: !0
					})))
				},
				Qn = n("./src/reddit/actions/notifications/constants.ts"),
				Yn = n("./src/reddit/actions/notifications/loader.ts"),
				Kn = n("./src/reddit/actions/notifications/preferences.ts"),
				qn = n("./src/reddit/actions/notifications/state.ts"),
				Xn = n("./src/reddit/actions/notifications/utils.ts"),
				$n = n("./src/reddit/components/TrackingHelper/index.tsx"),
				es = n("./src/reddit/helpers/localStorage/index.ts"),
				ts = n("./src/reddit/helpers/trackers/notifications.ts"),
				ns = n("./src/reddit/selectors/experiments/responsiveSettings.ts"),
				ss = n("./src/reddit/selectors/meta.ts"),
				as = n("./src/reddit/selectors/notificationPrefs.ts"),
				rs = n("./src/higherOrderComponents/asModal/index.tsx"),
				os = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				is = n("./src/reddit/constants/keycodes.ts"),
				cs = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				ls = n("./src/reddit/constants/colors.ts"),
				ds = n("./src/reddit/icons/svgs/Notify/index.m.less"),
				ms = n.n(ds);
			var us = e => r.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 -1 23 20",
					className: Object(m.a)(ms.a.icon, e.className)
				}, r.a.createElement("g", {
					fillRule: "evenodd"
				}, r.a.createElement("polygon", {
					fill: "none",
					points: "0 20 20 20 20 .001 0 .001"
				}), r.a.createElement("path", {
					fill: "inherit",
					d: "M17.0066821,15.4208756 C17.3661858,15.7881442 17.1117467,16.4167476 16.6028685,16.4167476 L3.3720345,16.4167476 C2.86361308,16.4167476 2.60871716,15.7881442 2.9682209,15.4208756 L2.99106104,15.3975421 C3.81467634,14.5561376 4.27741749,13.4146649 4.27741749,12.2246585 L4.27741749,8.19170369 C4.27741749,5.37768868 6.24806442,3.03500952 8.85595115,2.52214012 C8.85275353,2.48713993 8.84544468,2.45307308 8.84544468,2.41667289 C8.84544468,1.77266945 9.35660693,1.25 9.98745148,1.25 C10.618296,1.25 11.1294583,1.77266945 11.1294583,2.41667289 C11.1294583,2.45307308 11.1221494,2.48713993 11.1189518,2.52214012 C13.7268385,3.03500952 15.6974855,5.37768868 15.6974855,8.19170369 L15.6974855,12.2246585 C15.6974855,13.4146649 16.1602266,14.5561376 16.9838419,15.3975421 L17.0066821,15.4208756 Z M9.98754284,18.75 C9.05109727,18.75 8.24758128,18.1736636 7.89492959,17.3499925 L12.0801561,17.3499925 C11.7275044,18.1736636 10.9239884,18.75 9.98754284,18.75 Z"
				}), r.a.createElement("circle", {
					cx: "18",
					cy: "3",
					r: "5",
					fill: e.isUnread ? "white" : "none"
				}), r.a.createElement("circle", {
					cx: "18",
					cy: "3",
					r: "4",
					fill: e.isUnread ? ls.a.orangered : "none"
				}))),
				ps = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				bs = n("./src/reddit/layout/row/Inline/index.tsx"),
				hs = n("./src/reddit/components/Settings/DesktopNotifications/TurnOnDesktopNotificationsModal/index.m.less"),
				gs = n.n(hs);
			const {
				fbt: fs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), vs = de.a.wrapped(os.m, "ModalText", gs.a);
			class _s extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === is.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						isResponsiveSettingsEnabled: e
					} = this.props, t = Object(m.a)({
						[gs.a["m-responsive"]]: e
					});
					return r.a.createElement(os.c, {
						className: t
					}, r.a.createElement(os.g, null, r.a.createElement(os.n, null, fs._("Turn on Desktop Notifications", null, {
						hk: "dbEX1"
					}))), r.a.createElement(os.j, null, r.a.createElement(vs, null, r.a.createElement(bs.a, {
						className: gs.a.row
					}, r.a.createElement("div", {
						className: gs.a.stepNumber
					}, "1"), fs._("Click on{lockIcon}in your Chrome browser address bar", [fs._param("lockIcon", r.a.createElement(cs.a, {
						className: gs.a.icon
					}))], {
						hk: "1fzz4J"
					})), r.a.createElement(bs.a, {
						className: gs.a.row
					}, r.a.createElement("div", {
						className: gs.a.stepNumber
					}, "2"), fs._("Select{settingsIcon}site settings", [fs._param("settingsIcon", r.a.createElement(ps.a, {
						className: gs.a.icon
					}))], {
						hk: "46Cjhq"
					})), r.a.createElement(bs.a, {
						className: gs.a.row
					}, r.a.createElement("div", {
						className: gs.a.stepNumber
					}, "3"), fs._("Change{notifyIcon}notifications to 'Allow'", [fs._param("notifyIcon", r.a.createElement(us, {
						className: gs.a.notify
					}))], {
						hk: "1nkJPj"
					})))), r.a.createElement(os.e, null, r.a.createElement(x.f, {
						onClick: this.props.onClose
					}, fs._("Got it", null, {
						hk: "2PWXZB"
					}))))
				}
			}
			var ys = Object(rs.a)(_s),
				Cs = n("./src/reddit/components/Settings/DesktopNotifications/index.m.less"),
				ks = n.n(Cs);
			const {
				fbt: xs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Es = Object(c.c)({
				areNotificationsAvailable: e => {
					return Object(Xn.a)(e) === Qn.f.NotificationsSupported
				},
				isChrome: ss.d,
				isFirefox: ss.f,
				isMobileDevice: ss.g,
				isOpera: ss.h,
				isResponsiveSettingsEnabled: ns.a,
				preferences: as.d
			}), ws = Object(o.b)(Es, e => ({
				requestNotificationPermission: () => Object(Yn.a)().then(t => e(t.requestNotificationsPermissions(!0, !0))),
				setPreferences: t => e(Object(Kn.b)(t)),
				subscribeForPNs: () => Object(Yn.a)().then(t => e(t.subscribeForPNs(!0))),
				unsubscribeFromPNs: () => Object(Yn.a)().then(t => e(t.unsubscribeFromPNs(!0)))
			}));
			class Ss extends r.a.Component {
				constructor(e) {
					super(e), this.lastNotificationsState = qn.a, this.onNotificationsStateChange = e => {
						const {
							isEnabled: t,
							permission: n
						} = e;
						let s = !1;
						t !== this.lastNotificationsState.isEnabled && (s = t !== this.state.desktopNotifications, t && es.F(t)), this.setState(e => ({
							desktopNotifications: s ? t : e.desktopNotifications,
							notificationPermission: n
						})), this.lastNotificationsState = e
					}, this.trackPreferenceToggled = (e, t) => {
						this.props.sendEvent(Object(ts.e)(e, t))
					}, this.setDesktopNotificationsLocalValue = e => {
						this.setState({
							desktopNotifications: e
						}, () => {
							this.trackPreferenceToggled("desktop_notification_permissions", e), es.F(e)
						})
					}, this.handleDesktopNotificationsClick = () => {
						const {
							isMobileDevice: e,
							isResponsiveSettingsEnabled: t
						} = this.props;
						if (this.state.desktopNotifications) this.setDesktopNotificationsLocalValue(!1), this.props.unsubscribeFromPNs();
						else switch (this.state.notificationPermission) {
							case Qn.a.Denied:
								t && e || this.setState({
									showTurnOnDesktopNotificationsModal: !0
								});
								break;
							case Qn.a.Granted:
								this.setDesktopNotificationsLocalValue(!0), this.props.subscribeForPNs();
								break;
							default:
								this.props.requestNotificationPermission()
						}
					}, this.handlePrivateMessagesClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							privateMessages: !e.privateMessages
						}), this.trackPreferenceToggled("private_messages", !e.privateMessages)
					}, this.handlePostRepliesClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							postReplies: !e.postReplies
						}), this.trackPreferenceToggled("post_replies", !e.postReplies)
					}, this.handleCommentRepliesClick = () => {
						const {
							preferences: e
						} = this.props, t = !e.commentReplies;
						this.updatePreferences({
							commentReplies: t,
							threadReplies: !!t && e.threadReplies,
							topLevelComment: !!t && e.topLevelComment
						}), this.trackPreferenceToggled("comment_replies", !e.commentReplies)
					}, this.handleUsernameMentionsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							usernameMentions: !e.usernameMentions
						}), this.trackPreferenceToggled("username_mention", !e.usernameMentions)
					}, this.handleThreadRepliesClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							threadReplies: !e.threadReplies
						}), this.trackPreferenceToggled("thread_replies", !e.threadReplies)
					}, this.handleTopLevelCommentClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							topLevelComment: !e.topLevelComment
						}), this.trackPreferenceToggled("top_level_comment", !e.topLevelComment)
					}, this.handleChatMessagesClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							chatMessages: !e.chatMessages
						}), this.trackPreferenceToggled("chat_messages", !e.chatMessages)
					}, this.handleChatRequestsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							chatRequests: !e.chatRequests
						}), this.trackPreferenceToggled("chat_requests", !e.chatRequests)
					}, this.handleTrendingPostsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							trendingPosts: !e.trendingPosts
						}), this.trackPreferenceToggled("trending_posts", !e.trendingPosts)
					}, this.handleUpvotedPostsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							upvotedPosts: !e.upvotedPosts
						}), this.trackPreferenceToggled("upvotes_post", !e.upvotedPosts)
					}, this.handleUpvotedCommentsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							upvotedComments: !e.upvotedComments
						}), this.trackPreferenceToggled("upvotes_comment", !e.upvotedComments)
					}, this.handleCommunityRecommendationsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							communityRecommendations: !e.communityRecommendations
						}), this.trackPreferenceToggled("community_recs", !e.communityRecommendations)
					}, this.handleLiveEventClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							liveEvent: !e.liveEvent
						}), this.trackPreferenceToggled("live_event", !e.liveEvent)
					}, this.handleUserNewFollowersClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							userNewFollowers: !e.userNewFollowers
						}), this.trackPreferenceToggled("user_new_followers", !e.userNewFollowers)
					}, this.handleTurnOnDesktopNotificationsModalClose = () => {
						this.setState({
							showTurnOnDesktopNotificationsModal: !1
						})
					}, this.state = {
						areNotificationsAvailable: !1,
						desktopNotifications: !1,
						notificationPermission: Qn.a.Denied,
						showTurnOnDesktopNotificationsModal: !1
					}
				}
				componentDidMount() {
					this.setState({
						areNotificationsAvailable: this.props.areNotificationsAvailable
					}), Object(qn.d)(this.onNotificationsStateChange)
				}
				componentWillUnmount() {
					Object(qn.e)(this.onNotificationsStateChange)
				}
				async updatePreferences(e) {
					this.props.setPreferences(Object.assign({}, this.props.preferences, e))
				}
				render() {
					const {
						isChrome: e,
						isFirefox: t,
						isOpera: n,
						isResponsiveSettingsEnabled: s,
						preferences: o
					} = this.props, i = Object(m.a)({
						[ks.a.ResponsiveTooltip]: s
					});
					return r.a.createElement(a.Fragment, null, r.a.createElement(V.a, null, s ? xs._("Browser notifications", null, {
						hk: "YkSBM"
					}) : xs._("Desktop notifications", null, {
						hk: "1Omom4"
					})), r.a.createElement(J.n, {
						disabled: !(e || t || n) || !this.state.areNotificationsAvailable,
						label: s ? xs._("Browser notifications", null, {
							hk: "4wdcLl"
						}) : xs._("Desktop notifications", null, {
							hk: "4ameFp"
						}),
						last: !0,
						on: this.state.desktopNotifications,
						onClick: this.handleDesktopNotificationsClick,
						subtext: xs._("See your notifications on the corner of your computer screen, even when Reddit is closed", null, {
							hk: "1PbYt7"
						}),
						tooltip: e || t || n ? "" : xs._("Only available with Chrome, Firefox, and Opera", null, {
							hk: "1TLRmK"
						}),
						tooltipContentClassName: i
					}), r.a.createElement(V.a, null, xs._("Push notifications", null, {
						hk: "3cyZhe"
					})), r.a.createElement(J.n, {
						label: xs._("Private messages", null, {
							hk: "2oRGiA"
						}),
						on: o.privateMessages,
						onClick: this.handlePrivateMessagesClick,
						subtext: xs._("Receive notifications for private messages", null, {
							hk: "1zstrl"
						})
					}), r.a.createElement(J.n, {
						label: xs._("Comments on your posts", null, {
							hk: "peb1V"
						}),
						on: o.postReplies,
						onClick: this.handlePostRepliesClick,
						subtext: xs._("Receive notifications for comments to your posts", null, {
							hk: "2Ovke1"
						})
					}), r.a.createElement(J.n, {
						label: xs._("Replies to your comments", null, {
							hk: "38GGYX"
						}),
						on: o.commentReplies,
						onClick: this.handleCommentRepliesClick,
						subtext: xs._("Receive notifications for replies to your comments", null, {
							hk: "erzOR"
						})
					}), r.a.createElement(J.n, {
						label: xs._("Threaded comment replies", null, {
							hk: "3TFG1U"
						}),
						on: o.threadReplies,
						onClick: this.handleThreadRepliesClick,
						subtext: xs._("Receive notifications for comment replies that aren't directly to you, but within comments chains that you participated in", null, {
							hk: "3fiCzE"
						})
					}), r.a.createElement(J.n, {
						label: xs._("New Comment Activity", null, {
							hk: "4n1f2M"
						}),
						on: o.topLevelComment,
						onClick: this.handleTopLevelCommentClick,
						subtext: xs._("Receive notifications for new comments on posts you've been active in", null, {
							hk: "2jO6KJ"
						})
					}), r.a.createElement(J.n, {
						label: xs._("Mentions of u/username", null, {
							hk: "Ti1Kh"
						}),
						on: o.usernameMentions,
						onClick: this.handleUsernameMentionsClick,
						subtext: xs._("Receive notifications for mentions of your username", null, {
							hk: "2KcTCV"
						})
					}), r.a.createElement(J.n, {
						label: xs._("Chat messages", null, {
							hk: "3daNg7"
						}),
						on: o.chatMessages,
						onClick: this.handleChatMessagesClick,
						subtext: xs._("Receive notifications when a user chats with you", null, {
							hk: "YLNTD"
						})
					}), r.a.createElement(J.n, {
						label: xs._("Chat requests", null, {
							hk: "1VYdRU"
						}),
						on: o.chatRequests,
						onClick: this.handleChatRequestsClick,
						subtext: xs._("Receive notifications when a user sends a chat request to you", null, {
							hk: "Bdtpo"
						})
					}), r.a.createElement(J.n, {
						label: xs._("Trending posts", null, {
							hk: "4nMMXP"
						}),
						on: o.trendingPosts,
						onClick: this.handleTrendingPostsClick,
						subtext: xs._("Receive notifications for trending posts from your favorite communities", null, {
							hk: "g79tj"
						})
					}), r.a.createElement(J.n, {
						label: xs._("Community recommendations", null, {
							hk: "SBOr5"
						}),
						on: o.communityRecommendations,
						onClick: this.handleCommunityRecommendationsClick,
						subtext: xs._("Send me recommendations based on my activity", null, {
							hk: "2KDRYz"
						})
					}), r.a.createElement(J.n, {
						label: xs._("Upvotes on your posts", null, {
							hk: "14XZUW"
						}),
						on: o.upvotedPosts,
						onClick: this.handleUpvotedPostsClick,
						subtext: xs._("Notify me when my post is upvoted", null, {
							hk: "24mEWd"
						})
					}), r.a.createElement(J.n, {
						label: xs._("Upvotes on your comments", null, {
							hk: "2OoH8o"
						}),
						on: o.upvotedComments,
						onClick: this.handleUpvotedCommentsClick,
						subtext: xs._("Notify me when my comment is upvoted", null, {
							hk: "94wwQ"
						})
					}), r.a.createElement(J.n, {
						label: xs._("Relevant Live Events", null, {
							hk: "3o21Vp"
						}),
						on: o.liveEvent,
						onClick: this.handleLiveEventClick,
						subtext: xs._("Notify me during live events", null, {
							hk: "1h0OF3"
						})
					}), r.a.createElement(J.n, {
						label: xs._("New followers", null, {
							hk: "32VNj1"
						}),
						last: !0,
						on: o.userNewFollowers,
						onClick: this.handleUserNewFollowersClick,
						subtext: xs._("Notify me when another user follows me", null, {
							hk: "26um8p"
						})
					}), this.state.showTurnOnDesktopNotificationsModal && r.a.createElement(ys, {
						isResponsiveSettingsEnabled: s,
						onClose: this.handleTurnOnDesktopNotificationsModalClose,
						overlayClassName: Object(m.a)({
							[ks.a.ResponsiveOverlay]: s
						})
					}))
				}
			}
			var Os = Object(se.t)()(ws(Object($n.c)(Ss))),
				Ns = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
					}
					return n
				},
				js = e => {
					var {
						isResponsiveSettingsEnabled: t,
						language: n,
						prefs: {
							collapseReadMessages: a,
							emailUnsubscribe: o,
							emailDigests: i,
							emailUnreadMessages: c,
							markMessagesRead: l,
							sendWelcomeMessages: d,
							showMessagesInInbox: m,
							showUsernameMentionNotifications: u
						},
						update: p
					} = e;
					Ns(e, ["isResponsiveSettingsEnabled", "language", "prefs", "update"]);
					return r.a.createElement(te.a, null, r.a.createElement(ee.b, {
						isResponsiveSettingsEnabled: t
					}, s.fbt._("Notifications settings", null, {
						hk: "rYOeb"
					})), r.a.createElement(V.a, null, s.fbt._("inbox notification", null, {
						hk: "4a0OKQ"
					})), r.a.createElement(J.n, {
						on: m,
						onClick: () => p(!m, "showMessagesInInbox"),
						label: s.fbt._("Conversations in inbox", null, {
							hk: "4b2411"
						}),
						subtext: s.fbt._("Display conversations within the messages section of your inbox", null, {
							hk: "3BrrbD"
						})
					}), r.a.createElement(J.n, {
						on: l,
						onClick: () => p(!l, "markMessagesRead"),
						label: s.fbt._("Mark as read in inbox", null, {
							hk: "265UNW"
						}),
						subtext: s.fbt._("Mark messages as read when I open my inbox", null, {
							hk: "ER5dS"
						})
					}), r.a.createElement(J.n, {
						on: a,
						onClick: () => p(!a, "collapseReadMessages"),
						label: s.fbt._("Collapse read messages", null, {
							hk: "2AJOGy"
						}),
						subtext: s.fbt._("Read messages will automatically be collapsed", null, {
							hk: "JKb22"
						})
					}), r.a.createElement(J.n, {
						on: !!u,
						onClick: () => p(!u, "showUsernameMentionNotifications"),
						label: s.fbt._("Username mentions", null, {
							hk: "3enoZY"
						}),
						subtext: s.fbt._("Notify me when my username is mentioned in comment", null, {
							hk: "Qn9c"
						})
					}), r.a.createElement(J.n, {
						on: !!d,
						onClick: () => p(!d, "sendWelcomeMessages"),
						label: s.fbt._("Mod welcome messages", null, {
							hk: "3T7aG9"
						}),
						subtext: s.fbt._("Receive welcome messages from moderators when I join their community", null, {
							hk: "1HKTXz"
						}),
						last: !0
					}), r.a.createElement(V.a, null, s.fbt._("email notification", null, {
						hk: "4oynG5"
					})), r.a.createElement(J.n, {
						on: !o,
						onClick: () => p(!o, "emailUnsubscribe"),
						label: s.fbt._("Email notifications", null, {
							hk: "2KF2g2"
						}),
						subtext: s.fbt._("If turned off, you will still receive administrative emails", null, {
							hk: "3eP8Pj"
						})
					}), r.a.createElement(J.n, {
						disabled: o,
						on: !o && c,
						onClick: () => p(!c, "emailUnreadMessages"),
						label: s.fbt._("Unread messages", null, {
							hk: "2HW2aS"
						}),
						subtext: s.fbt._("Receive unread messages via email", null, {
							hk: "15wibQ"
						}),
						indent: !0
					}), r.a.createElement(J.n, {
						disabled: o,
						on: !o && !!i,
						onClick: () => p(!i, "emailDigests"),
						label: s.fbt._("Email digests", null, {
							hk: "1vedUs"
						}),
						subtext: s.fbt._("Receive periodic emails with the top posts from your favorite communities", null, {
							hk: "2gOxhp"
						}),
						indent: !0,
						last: !0
					}), r.a.createElement(Os, {
						isResponsiveSettingsEnabled: t
					}))
				},
				Ps = n("./src/reddit/components/Settings/Payments/Header/index.m.less"),
				Is = n.n(Ps);
			const Ts = e => "economy.settings.payments.header.".concat(e);

			function Ms(e) {
				return r.a.createElement("header", {
					className: Object(m.a)(Is.a.container, e.className)
				}, r.a.createElement("div", {
					className: Is.a.title
				}, r.a.createElement(Ft.a, {
					msgId: Ts("title")
				})), r.a.createElement("div", {
					className: Is.a.description
				}, r.a.createElement(Ft.a, {
					msgId: Ts("description")
				})))
			}
			var As = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts"),
				Bs = n("./src/reddit/models/Payments/index.ts"),
				Rs = n("./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less"),
				Ds = n.n(Rs);
			class Ls extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						paymentsBeingRemoved: {}
					}, this.removePayment = async e => {
						this.setState(t => ({
							paymentsBeingRemoved: Object.assign({}, t.paymentsBeingRemoved, {
								[e.id]: !0
							})
						}));
						const t = e.type === Bs.b.SavedStripe ? await Object(Zt.b)(this.props.apiContext(), e.id) : await Object(Zt.c)(this.props.apiContext(), e.id);
						t.ok ? this.props.onRemovePayment(e) : this.props.onError(t.error), this.setState(t => ({
							paymentsBeingRemoved: Object.assign({}, t.paymentsBeingRemoved, {
								[e.id]: !1
							})
						}))
					}
				}
				render() {
					return r.a.createElement("div", {
						className: this.props.className
					}, r.a.createElement(V.a, null, s.fbt._("payment methods", null, {
						hk: "1RSNNo"
					})), this.props.savedPayments.map(e => {
						const t = !!this.state.paymentsBeingRemoved[e.id];
						return r.a.createElement("div", {
							className: Ds.a.payment,
							key: e.id
						}, r.a.createElement("div", {
							className: Ds.a.paymentDisplay
						}, r.a.createElement(cs.a, {
							className: Ds.a.lock
						}), e.display), r.a.createElement(x.n, {
							disabled: t,
							onClick: () => this.removePayment(e)
						}, t ? s.fbt._("removing", null, {
							hk: "46e3Zi"
						}) : s.fbt._("remove", null, {
							hk: "2j7wjS"
						})))
					}), !this.props.savedPayments.length && r.a.createElement("div", {
						className: Ds.a.noSavedPayment
					}, s.fbt._("You have no saved payment methods", null, {
						hk: "3JiSmk"
					})))
				}
			}
			const Us = Object(c.c)({
					savedPayments: Kt.t
				}),
				Fs = Object(o.b)(Us, e => ({
					onError: t => e(Object(S.e)({
						duration: 5e3,
						kind: I.b.Error,
						text: Object(Qt.a)(t)
					})),
					onRemovePayment: t => {
						t.type === Bs.b.SavedStripe && e(Object(As.a)({
							cardId: t.id
						})), t.type === Bs.b.SavedPayPal && e(Object(As.e)({
							sourceId: t.id
						}))
					}
				}));
			var Ws = Object(Jt.b)(Fs(Ls)),
				Hs = n("./src/reddit/components/Settings/Payments/index.m.less"),
				zs = n.n(Hs),
				Gs = () => r.a.createElement(te.a, null, r.a.createElement(Ms, {
					className: zs.a.header
				}), r.a.createElement(Ws, null)),
				Vs = n("./src/reddit/components/Settings/PremiumForm.tsx");
			const Js = de.a.span("SubheaderLink", Rt.a),
				Zs = de.a.button("GenerateBackupCodesButton", Rt.a),
				Qs = de.a.wrapped(J.f, "ThirdPartyAuth", Rt.a),
				Ys = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var Ks = Object(o.b)(Ys, (e, t) => ({
					addBlocked: t => e(Object(ut.h)(t)),
					addWhitelisted: t => e(Object(pt.g)(t)),
					removeWhitelisted: t => e(Object(pt.h)(t)),
					removeBlocked: t => e(Object(ut.g)(t)),
					saveChatSettings: t => e(Object(mt.c)(t)),
					enable2FA: () => e(Object(_.d)()),
					disable2FA: () => e(Object(_.c)()),
					generateBackupCodes: () => e(Object(_.a)())
				}))(e => {
					let {
						addBlocked: t,
						addWhitelisted: n,
						blocked: a,
						blockedApi: o,
						chatSettings: i,
						prefs: {
							acceptPrivateMessages: c,
							allowClickTracking: l,
							hideFromRobots: d,
							activityRelevantAds: u,
							loginOtpEnabled: p,
							thirdPartyDataPersonalizedAds: b,
							thirdPartySiteDataPersonalizedAds: h,
							thirdPartySiteDataPersonalizedContent: g
						},
						enable2FA: f,
						disable2FA: v,
						generateBackupCodes: _,
						isResponsiveSettingsEnabled: y,
						removeBlocked: C,
						removeWhitelisted: k,
						saveChatSettings: x,
						update: E,
						whitelist: w,
						whitelistApi: S
					} = e;
					return r.a.createElement(te.a, null, r.a.createElement(ee.b, {
						isResponsiveSettingsEnabled: y
					}, s.fbt._("Privacy & Security", null, {
						hk: "2az3xN"
					})), r.a.createElement(ee.a, null, s.fbt._("Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you. To learn more, visit our {=Privacy & Security FAQs} .", [s.fbt._param("=Privacy & Security FAQs", r.a.createElement(Js, null, s.fbt._("{=Privacy & Security FAQs}", [s.fbt._param("=Privacy & Security FAQs", r.a.createElement("a", {
						href: ie.a.redditHelpUrl.privacyQuestions,
						rel: "noopener noreferrer",
						target: "_blank"
					}, s.fbt._("Privacy & Security FAQs", null, {
						hk: "4qvhC1"
					})))], {
						hk: "2rwJJE"
					})))], {
						hk: "3appHO"
					})), r.a.createElement(V.a, null, s.fbt._("Privacy", null, {
						hk: "30eaw9"
					})), r.a.createElement(J.n, {
						on: !d,
						onClick: () => E(!d, "hideFromRobots"),
						label: s.fbt._("Show up in search results", null, {
							hk: "3TWi4z"
						}),
						subtext: s.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
							hk: "4tnz3n"
						})
					}), r.a.createElement(J.n, {
						on: l,
						onClick: () => E(!l, "allowClickTracking"),
						label: s.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
							hk: "21vbvn"
						}),
						subtext: s.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
							hk: "DnCX0"
						})
					}), r.a.createElement(J.n, {
						on: u,
						onClick: () => E(!u, "activityRelevantAds"),
						label: s.fbt._("Personalize ads based on your Reddit activity", null, {
							hk: "OqV13"
						}),
						subtext: s.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
							hk: "4C7zO1"
						})
					}), r.a.createElement(J.n, {
						on: b,
						onClick: () => E(!b, "thirdPartyDataPersonalizedAds"),
						label: s.fbt._("Personalize ads based on information from our partners", null, {
							hk: "4pLCAq"
						}),
						subtext: s.fbt._("Allow us to use information that our advertising partners send us to show you better ads.", null, {
							hk: "37eGRC"
						})
					}), r.a.createElement(J.n, {
						on: h,
						onClick: () => E(!h, "thirdPartySiteDataPersonalizedAds"),
						label: s.fbt._("Personalize ads based on your activity with our partners", null, {
							hk: "3uQVuS"
						}),
						subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with to show you better ads.", null, {
							hk: "2T8SXc"
						})
					}), r.a.createElement(J.n, {
						on: g,
						onClick: () => E(!g, "thirdPartySiteDataPersonalizedContent"),
						label: s.fbt._("Personalize recommendations based on your activity with our partners", null, {
							hk: "2D9ITr"
						}),
						subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
							hk: "1e91Vl"
						}),
						last: !0
					}), r.a.createElement(V.a, null, s.fbt._("Advanced security", null, {
						hk: "3H7FJN"
					})), r.a.createElement(J.n, {
						on: p,
						onClick: () => p ? v() : f(),
						label: s.fbt._("Use two-factor authentication", null, {
							hk: "2OxNGe"
						}),
						subtext: r.a.createElement(r.a.Fragment, null, s.fbt._("Help protect your account (even if someone gets your password) by requiring a verification code and a password to log in.", null, {
							hk: "1LLqPh"
						}), p && r.a.createElement(r.a.Fragment, null, " ", s.fbt._("Lost access to your authenticator app?", null, {
							hk: "2x6g0Y"
						}), " ", r.a.createElement(Zs, {
							type: "button",
							onClick: () => _()
						}, s.fbt._("Get your backup codes", null, {
							hk: "4fp3Xg"
						})), "."))
					}), r.a.createElement(Qs, {
						className: Object(m.a)({
							[Rt.a["m-responsive"]]: y
						}),
						label: s.fbt._("Manage third-party app authorization", null, {
							hk: "3J65so"
						}),
						link: "".concat(ie.a.redditUrl, "/prefs/apps"),
						last: !0
					}))
				}),
				qs = n("./src/reddit/actions/preferences.ts"),
				Xs = n("./src/reddit/components/Loader/index.m.less"),
				$s = n.n(Xs);
			class ea extends r.a.Component {
				render() {
					const {
						isLoading: e,
						render: t,
						renderLoading: n,
						loaderSize: s
					} = this.props;
					return e ? n ? n() : r.a.createElement(Ie.a, {
						center: !0,
						className: $s.a.loadingIcon,
						sizePx: s || 10
					}) : t()
				}
			}
			var ta = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				na = n("./src/reddit/selectors/structuredStyles.ts"),
				sa = n("./src/reddit/selectors/subredditSettings.ts"),
				aa = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				ra = n("./src/reddit/components/Settings/ProfileForm.m.less"),
				oa = n.n(ra);
			const {
				fbt: ia
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ca = 30, la = 200, da = Object(c.a)(E.O, E.i, sa.a, E.gb, na.o, re.a, (e, t, n, s, a, r) => {
				const o = t && t.profileId,
					i = o && a[o] ? a[o].bannerBackgroundImage : void 0;
				return {
					awardedLastMonth: t.awardedLastMonth,
					contentVisible: n.contentVisible,
					currentUserName: Object(T.f)(t),
					currentUserUrl: t.url,
					isEmployee: t.isEmployee,
					isGold: t.isGold,
					language: e,
					over18: n.over18,
					profileBanner: i,
					profileIcon: t.accountIcon,
					publicDescription: n.publicDescription,
					showActiveCommunities: s.showActiveCommunities,
					title: n.title,
					isNSFWModalOpen: "ProfileForm_NSFWConfirmDialogID" === r
				}
			}), ma = de.a.div("ImageUploaderLayout", oa.a), ua = de.a.wrapped(aa.a, "IconImageUploader", oa.a), pa = de.a.wrapped(aa.a, "BannerImageUploader", oa.a), ba = de.a.a("Link", oa.a), ha = de.a.img("DummyBanner", oa.a), ga = de.a.wrapped(ta.a, "Preview", oa.a);
			class fa extends r.a.Component {
				constructor(e) {
					super(e), this.onTitleChange = e => this.setState({
						title: e.target.value
					}), this.onDescriptionChange = e => this.setState({
						publicDescription: e.target.value
					}), this.switchNSFW = () => {
						this.updateProfile(!0, "over18"), this.props.sendEvent(Object(He.h)(this.props.over18))
					}, this.switchSFW = () => {
						this.updateProfile(!1, "over18"), this.props.toggleNSFWModal(), this.props.sendEvent(Object(He.h)(this.props.over18))
					}, this.onNSFWToggled = () => this.props.over18 ? this.props.toggleNSFWModal() : this.switchNSFW(), this.onContentVisibleChange = () => {
						this.updateProfile(!this.props.contentVisible, "contentVisible"), this.props.sendEvent(Object(He.c)(this.props.contentVisible))
					}, this.onIconChange = async e => {
						this.setState({
							profileIconUploading: !0
						}), await this.props.imagesUpdateRequested(e, "profileIcon"), this.setState({
							profileIconUploading: !1
						})
					}, this.onBannerChange = async e => {
						this.setState({
							profileBannerUploading: !0
						}), await this.props.imagesUpdateRequested(e, "profileBanner"), this.setState({
							profileBannerUploading: !1
						})
					}, this.onDeleteBanner = async () => {
						this.setState({
							isDeletingBanner: !0
						}), await this.props.imageDeleteRequested("profileBanner"), this.setState({
							isDeletingBanner: !1
						})
					}, this.onDeleteIcon = async () => {
						this.setState({
							isDeletingIcon: !0
						}), await this.props.imageDeleteRequested("profileIcon"), this.setState({
							isDeletingIcon: !1
						})
					}, this.onShowActiveCommunitiesChange = () => {
						this.props.save(this.props, {
							showActiveCommunities: !this.props.showActiveCommunities,
							prevShowActiveCommunities: this.props.showActiveCommunities
						}), this.props.sendEvent(Object(He.a)(this.props.showActiveCommunities))
					}, this.updateProfile = async (e, t) => {
						this.props.save(Object.assign({}, this.props, {
							[t]: e
						}), {
							showActiveCommunities: this.props.showActiveCommunities,
							prevShowActiveCommunities: this.props.showActiveCommunities
						})
					}, this.state = {
						contentVisible: e.contentVisible,
						isDeletingBanner: !1,
						isDeletingIcon: !1,
						over18: e.over18,
						profileBannerUploading: !1,
						profileIconUploading: !1,
						publicDescription: e.publicDescription,
						title: e.title,
						isSaving: !1
					}
				}
				render() {
					const {
						awardedLastMonth: e,
						contentVisible: t,
						currentUserName: n,
						currentUserUrl: s,
						isEmployee: a,
						isGold: o,
						isNSFWModalOpen: i,
						isResponsiveSettingsEnabled: c,
						over18: l,
						profileBanner: d,
						profileIcon: u,
						showActiveCommunities: p,
						toggleNSFWModal: b
					} = this.props, {
						isDeletingBanner: h,
						isDeletingIcon: g,
						profileBannerUploading: f,
						profileIconUploading: v,
						publicDescription: _,
						title: y
					} = this.state, C = Object(m.a)({
						[oa.a["m-responsive"]]: c
					});
					return r.a.createElement(te.a, {
						sidebar: r.a.createElement(ga, {
							bannerBackgroundImage: d,
							editMode: !0,
							isEmployee: a,
							isDefaultIcon: !u || u.indexOf("avatar_default") > -1,
							isDeletingBanner: h,
							isDeletingIcon: g,
							isGold: o,
							isNSFW: l,
							isOverlay: !1,
							onDeleteBanner: this.onDeleteBanner,
							onDeleteIcon: this.onDeleteIcon,
							profileIcon: u,
							publicDescription: _,
							recentAwardings: e,
							title: y,
							url: s,
							username: n
						})
					}, r.a.createElement(ee.b, {
						isResponsiveSettingsEnabled: c
					}, ia._("Customize profile", null, {
						hk: "1fenXK"
					})), r.a.createElement(V.a, null, ia._("Profile Information", null, {
						hk: "3vzAUk"
					})), r.a.createElement(J.e, {
						label: ia._("Display name (optional)", null, {
							hk: "DKmS8"
						}),
						onChange: this.onTitleChange,
						onBlur: () => {
							y !== this.props.title && this.updateProfile(y, "title")
						},
						placeholder: ia._("Display name (optional)", null, {
							hk: "2BOHwt"
						}),
						maxChars: ca,
						subtext: ia._("Set a display name. This does not change your username.", null, {
							hk: "3xfh9M"
						}),
						value: y
					}), r.a.createElement(J.g, {
						label: ia._("About (optional)", null, {
							hk: "1W7xvB"
						}),
						onChange: this.onDescriptionChange,
						onBlur: () => {
							_ !== this.props.publicDescription && this.updateProfile(_, "publicDescription")
						},
						placeholder: ia._("About (optional)", null, {
							hk: "3wFdhi"
						}),
						maxChars: la,
						subtext: ia._("A brief description of yourself shown on your profile.", null, {
							hk: "3gGUDy"
						}),
						value: _
					}), r.a.createElement(V.a, null, ia._("Images", null, {
						hk: "38DOkf"
					})), r.a.createElement(J.j, {
						label: ia._("Avatar and banner image", null, {
							hk: "16dJ39"
						}),
						subtext: ia._("Images must be .png or .jpg format", null, {
							hk: "2YKVT5"
						}),
						direction: "column"
					}, r.a.createElement(ma, {
						className: C
					}, r.a.createElement(ua, {
						className: C,
						controlName: "profileIcon",
						isUploading: v,
						label: ia._("Drag and Drop or Upload Avatar Image", null, {
							hk: "1il1jn"
						}),
						labelClassName: oa.a.Label,
						onChange: this.onIconChange
					}), r.a.createElement(pa, {
						className: C,
						controlName: "profileBanner",
						isUploading: f,
						label: ia._("Drag and Drop or Upload Banner Image", null, {
							hk: "1Mpj73"
						}),
						labelClassName: oa.a.Label,
						onChange: this.onBannerChange
					}))), r.a.createElement(V.a, null, ia._("Profile category", null, {
						hk: "1YRE6p"
					})), r.a.createElement(J.n, {
						label: ia._("NSFW", null, {
							hk: "XPmIh"
						}),
						on: l,
						subtext: ia._("This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)", null, {
							hk: "2l9M6G"
						}),
						onClick: this.onNSFWToggled
					}), r.a.createElement(V.a, null, ia._("Advanced", null, {
						hk: "1US2Ur"
					})), r.a.createElement(J.n, {
						label: ia._("Content visibility", null, {
							hk: "3RQ2dW"
						}),
						subtext: ia._("Posts to this profile can appear in {profileForm: r/all link} and your profile can be discovered in {profileForm: /users link}", [ia._param("profileForm: r/all link", r.a.createElement(ba, {
							href: "/r/all"
						}, "r/all")), ia._param("profileForm: /users link", r.a.createElement(ba, {
							href: "/users"
						}, "/users"))], {
							hk: "16m9kL"
						}),
						on: t,
						onClick: this.onContentVisibleChange
					}), r.a.createElement(J.n, {
						label: ia._("Active in communities visibility", null, {
							hk: "3GUmB5"
						}),
						subtext: ia._("Show which communities I am active in on my profile.", null, {
							hk: "3jFDfF"
						}),
						on: p,
						onClick: this.onShowActiveCommunitiesChange
					}), r.a.createElement(V.a, null, ia._("Profile moderation", null, {
						hk: "3vDS8h"
					})), ia._("For moderation tools please visit our {ProfileForm: mod page link}", [ia._param("ProfileForm: mod page link", r.a.createElement(ba, {
						href: "/user/".concat(n, "/about/edit/moderation")
					}, "Profile Moderation page"))], {
						hk: "3pih6f"
					}), i && r.a.createElement(k.a, {
						headerText: ia._("SWITCH ACCOUNT TO SFW", null, {
							hk: "2rDUbc"
						}),
						message: ia._("If your account contains {NSFWConfirm: nsfw policy link} (contains nudity, pornography, profanity or inappropriate content for those under 18) and it’s not set to NSFW, this will result in actions up to and including suspension of your account.", [ia._param("NSFWConfirm: nsfw policy link", r.a.createElement(ba, {
							href: "https://www.redditinc.com/policies/content-policy#text-content3"
						}, "NSFW content"))], {
							hk: "3u1P0O"
						}),
						cancelText: ia._("Cancel", null, {
							hk: "2IjNhv"
						}),
						acceptText: ia._("I UNDERSTAND", null, {
							hk: "3wiM7r"
						}),
						onAccept: this.switchSFW,
						onCancel: b,
						onOverlayClick: b,
						overlayClassName: Object(m.a)({
							[oa.a.ResponsiveOverlay]: c
						}),
						withOverlay: !0
					}), r.a.createElement(ha, {
						src: d
					}))
				}
			}
			const va = Object(o.b)(da, e => ({
					imageDeleteRequested: t => e(Object(qs.y)(t)),
					imagesUpdateRequested: (t, n) => e(Object(qs.z)(t, n)),
					save: (t, n) => e(Object(qs.E)(t, n)),
					toggleNSFWModal: () => e(Object(y.i)("ProfileForm_NSFWConfirmDialogID"))
				}))(Object($n.c)(fa)),
				_a = Object(c.c)({
					isLoading: e => !Object(sa.a)(e)
				}),
				ya = Object(o.b)(_a)(ea);
			var Ca = class extends r.a.Component {
					render() {
						return r.a.createElement(ya, {
							loaderSize: 50,
							render: () => r.a.createElement(va, this.props)
						})
					}
				},
				ka = n("./src/reddit/components/Settings/SpecialMembership/Header/index.m.less"),
				xa = n.n(ka);

			function Ea(e) {
				return r.a.createElement("header", {
					className: e.className
				}, r.a.createElement("div", {
					className: xa.a.title
				}, s.fbt._("Special Memberships", null, {
					hk: "3eWAHi"
				})), r.a.createElement("div", {
					className: xa.a.subtitle
				}, s.fbt._("View and manage your Special Membership subscriptions.", null, {
					hk: "rHjy"
				})))
			}
			var wa = n("./src/lib/addQueryParams/index.ts"),
				Sa = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx"),
				Oa = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx"),
				Na = n("./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less"),
				ja = n.n(Na);
			const {
				fbt: Pa
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Ia = Object(c.c)({
				userId: e => {
					const t = Object(E.i)(e);
					return t ? t.id : ""
				}
			});
			var Ta = Object(o.b)(Ia)((function(e) {
					const {
						subreddit: t,
						userId: n
					} = e, s = Object(wa.a)("http://www.reddit.com/wallet/unsubscribe", {
						u: n,
						s: t.id
					});
					return r.a.createElement("div", {
						className: ja.a.body
					}, r.a.createElement("section", {
						className: ja.a.leftSection
					}, r.a.createElement("div", {
						className: ja.a.sectionHeader
					}, "Cancel your subscription with your mobile device"), r.a.createElement("div", {
						className: ja.a.content
					}, r.a.createElement(Sa.a, {
						index: "1"
					}, Pa._("Scan the QR code with your Camera app", null, {
						hk: "3rbMTX"
					})), r.a.createElement(Sa.a, {
						index: "2"
					}, Pa._("Use that link to open the Reddit app", null, {
						hk: "1MKSkG"
					})), r.a.createElement(Sa.a, {
						index: "3"
					}, Pa._("Approve your subscription cancellation", null, {
						hk: "2oJWUP"
					})))), r.a.createElement("section", {
						className: ja.a.rightSection
					}, r.a.createElement("div", {
						className: ja.a.qrCode
					}, r.a.createElement(Oa.a, {
						url: s,
						color: t.primaryColor
					}))))
				})),
				Ma = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				Aa = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Ba = n("./src/reddit/components/Economics/Price/index.tsx"),
				Ra = n("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.tsx"),
				Da = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				La = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less"),
				Ua = n.n(La);
			const {
				fbt: Fa
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Wa = e => Fa._("You've been supporting the community and the development of new features since {joinDate}.", [Fa._param("joinDate", e)], {
				hk: "37ImIl"
			}), Ha = [Fa._("Loyalty badge", null, {
				hk: "15DctX"
			}), Fa._("New style badges every month", null, {
				hk: "2uZZ0d"
			}), Fa._("Distinguished username", null, {
				hk: "4vsJEd"
			}), Fa._("Support new feature development", null, {
				hk: "RItPm"
			})];
			var za = function(e) {
				const {
					joinDate: t,
					membership: n,
					subreddit: s,
					title: a
				} = e, o = s.primaryColor;
				return r.a.createElement("div", {
					className: Ua.a.card,
					style: {
						borderColor: o
					}
				}, r.a.createElement(Da.a, {
					className: Ua.a.brand,
					subreddit: s
				}), r.a.createElement("div", {
					className: Ua.a.cardContent
				}, r.a.createElement("div", {
					className: Ua.a.cardTitle
				}, a), r.a.createElement(Ba.a, {
					className: Ua.a.price,
					dollarPrice: "usd" === n.currency ? n.price : void 0,
					monthly: !0,
					subredditId: s.id,
					tokenPrice: "points" === n.currency ? n.price : void 0
				}), r.a.createElement("div", {
					className: Ua.a.membershipMsg
				}, Wa(t)), r.a.createElement("div", {
					className: Ua.a.benefitsTitle
				}, Fa._("Membership Benefits", null, {
					hk: "3FGRZ0"
				})), r.a.createElement("ul", {
					className: Ua.a.benefits
				}, Ha.map(e => r.a.createElement(Ra.a, {
					benefit: e,
					color: o,
					key: e
				})))))
			};
			const {
				fbt: Ga
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Va = function(e) {
					const {
						className: t,
						joinDate: n,
						membership: s,
						onClose: a,
						subreddit: o,
						title: i
					} = e, c = o ? o.primaryColor : "", l = c && Object(Ma.a)(c, void 0, ls.a.white);
					return r.a.createElement("div", {
						className: Object(m.a)(t, Ua.a.pointsContainer)
					}, r.a.createElement("header", {
						className: Ua.a.pointsHeader,
						style: {
							backgroundColor: c,
							color: l
						}
					}, Ga._("Special Membership Cancellation Confirmation", null, {
						hk: "1uyrDO"
					}), r.a.createElement(Aa.a, {
						className: Ua.a.close,
						onClick: a,
						style: {
							fill: l
						}
					})), r.a.createElement("article", {
						className: Ua.a.content
					}, o && r.a.createElement(r.a.Fragment, null, r.a.createElement(Ta, {
						subreddit: o
					}), r.a.createElement(za, {
						joinDate: n,
						membership: s,
						subreddit: o,
						title: i
					}))))
				},
				Ja = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Za = n("./src/reddit/actions/governance/errorToast.ts"),
				Qa = n("./src/reddit/endpoints/economics/specialMembership.ts");
			const {
				fbt: Ya
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Ka = Object(o.b)(void 0, (e, t) => {
				let {
					subredditId: n,
					onClose: s
				} = t;
				return {
					onCancelMembership: () => {
						e(Object(Ja.g)({
							subredditId: n
						})), s()
					},
					onError: t => Object(Za.a)(e, t)
				}
			});
			var qa = Object(Jt.b)(Ka((function(e) {
				const {
					apiContext: t,
					className: n,
					endDate: s,
					joinDate: o,
					membership: i,
					onCancelMembership: c,
					onClose: l,
					onError: d,
					subreddit: u,
					subredditId: p,
					title: b
				} = e, [h, g] = Object(a.useState)(!1), f = u ? u.displayText : "";
				return r.a.createElement("div", {
					className: Object(m.a)(n, Ua.a.container)
				}, r.a.createElement("header", {
					className: Ua.a.header
				}, Ya._("Special Membership Cancellation Confirmation", null, {
					hk: "1uyrDO"
				}), r.a.createElement(Aa.a, {
					className: Ua.a.close,
					onClick: l
				})), r.a.createElement("article", {
					className: Ua.a.content
				}, r.a.createElement("div", {
					className: Ua.a.warning
				}, Ya._("Canceling your Special Membership in the {subredditName} community will stop your monthly payments, disable your access to special features, and end your support of new feature development. You will also lose access to all badges that were included in the subscription. You can keep accessing features till the end of your subscription billing cycle on {endDate}. Do you want to continue and cancel your Special Membership?", [Ya._param("subredditName", f), Ya._param("endDate", s)], {
					hk: "1POMMH"
				})), u && r.a.createElement(za, {
					joinDate: o,
					membership: i,
					subreddit: u,
					title: b
				})), r.a.createElement("footer", {
					className: Ua.a.footer
				}, r.a.createElement(x.i, {
					disabled: h,
					onClick: async () => {
						g(!0);
						const e = await Object(Qa.a)(t(), {
							subredditId: p
						});
						e.ok ? c() : (g(!1), d(e.error))
					}
				}, h ? Ya._("canceling...", null, {
					hk: "1Ggy36"
				}) : Ya._("cancel membership", null, {
					hk: "C9ZhO"
				})), r.a.createElement(x.f, {
					onClick: l
				}, Ya._("Dismiss", null, {
					hk: "EKJpC"
				}))))
			})));
			const Xa = Object(c.c)({
					subreddit: (e, t) => {
						let {
							subredditId: n
						} = t;
						return e.subreddits.models[n]
					}
				}),
				$a = Object(o.b)(Xa);
			var er = Object(rs.a)($a((function(e) {
					return "points" === e.membership.currency ? r.a.createElement(Va, e) : r.a.createElement(qa, e)
				}))),
				tr = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less"),
				nr = n.n(tr);

			function sr(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			class ar extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						modalOpen: !1
					}
				}
				render() {
					const {
						className: e,
						membership: t,
						subreddit: n
					} = this.props, a = sr(t.active.membership.endsAt), o = sr(t.active.membership.publishAt), i = !t.settings.renew, c = n ? n.displayText : "", l = a ? s.fbt._("Cancelled. Will expire on {date}", [s.fbt._param("date", a)], {
						hk: "3jHzuz"
					}) : "", d = o ? s.fbt._("Joined {date}", [s.fbt._param("date", o)], {
						hk: "1ta8Vp"
					}) : "";
					return r.a.createElement("div", {
						className: Object(m.a)(e, nr.a.container)
					}, r.a.createElement("div", {
						className: nr.a.membershipName
					}, s.fbt._("{subredditName} {title}", [s.fbt._param("subredditName", c), s.fbt._param("title", t.active.membership.title)], {
						hk: "2NdAdN"
					})), !i && r.a.createElement("div", {
						className: nr.a.joinDate,
						title: d
					}, d), i && r.a.createElement("div", {
						className: nr.a.cancelled,
						title: l
					}, l), r.a.createElement(x.n, {
						className: nr.a.button,
						disabled: i,
						onClick: () => this.setState({
							modalOpen: !0
						})
					}, s.fbt._("cancel", null, {
						hk: "1l5WHQ"
					})), this.state.modalOpen && r.a.createElement(er, {
						withOverlay: !0,
						endDate: a,
						joinDate: o,
						subredditId: t.active.membership.subredditId,
						membership: t.active.membership,
						title: c + " " + t.active.membership.title,
						onClose: () => this.setState({
							modalOpen: !1
						})
					}))
				}
			}
			const rr = Object(c.c)({
				subreddit: (e, t) => {
					let {
						membership: n
					} = t;
					return e.subreddits.models[n.active.membership.subredditId]
				}
			});
			var or = Object(o.b)(rr)(ar),
				ir = n("./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less"),
				cr = n.n(ir);

			function lr(e) {
				const t = Date.now();
				return !!e.active && !!e.active.membership && t < e.active.membership.endsAt
			}
			const dr = Object(c.c)({
				membershipsLoading: e => !e.economics.me.fetched,
				memberships: e => e.economics.me.data.specialMemberships || {}
			});
			var mr = Object(o.b)(dr)((function(e) {
					const {
						className: t,
						membershipsLoading: n,
						memberships: a
					} = e, o = Object.keys(a).map(e => a[e]).filter(lr).sort((e, t) => e.active.membership.endsAt - t.active.membership.endsAt), i = !!o.length;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement("div", {
						className: cr.a.title
					}, s.fbt._("Communities", null, {
						hk: "pF5xn"
					})), n && Array.from({
						length: 3
					}).map((e, t) => r.a.createElement("div", {
						className: cr.a.loading,
						key: t
					})), i && o.map(e => r.a.createElement(or, {
						key: e.active.membership.subredditId,
						className: cr.a.membership,
						membership: e
					})), !n && !i && r.a.createElement("div", {
						className: cr.a.empty
					}, s.fbt._("You are not subscribed to any Special Memberships", null, {
						hk: "738ir"
					})))
				})),
				ur = n("./src/reddit/components/Settings/SpecialMembership/index.m.less"),
				pr = n.n(ur);

			function br(e) {
				return r.a.createElement(te.a, {
					className: e.className
				}, r.a.createElement(Ea, {
					className: pr.a.header
				}), r.a.createElement(mr, null))
			}
			var hr = n("./src/reddit/components/TabNav/index.tsx"),
				gr = n("./src/reddit/helpers/correlationIdTracker.ts"),
				fr = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				vr = n("./src/reddit/selectors/platform.ts"),
				_r = n("./src/reddit/pages/Settings/index.m.less"),
				yr = n.n(_r);
			const Cr = (e, t, n, a) => [{
					key: u.Mb.Account,
					title: s.fbt._("Account", null, {
						hk: "kL0Ow"
					})
				}, {
					key: u.Mb.Profile,
					title: s.fbt._("Profile", null, {
						hk: "4AiObW"
					})
				}, {
					key: u.Mb.Privacy,
					title: s.fbt._("Privacy & Security", null, {
						hk: "1ENMtm"
					})
				}, {
					key: u.Mb.Feed,
					title: s.fbt._("Feed Settings", null, {
						hk: "4Giq2p"
					})
				}, {
					key: u.Mb.Notifications,
					title: s.fbt._("Notifications", null, {
						hk: "fklVW"
					})
				}, {
					key: u.Mb.Premium,
					title: s.fbt._("Reddit Premium", null, {
						hk: "3mygAP"
					})
				}, {
					className: yr.a.CreatorTab,
					key: u.Mb.Creator,
					title: s.fbt._("Reddit Creator", null, {
						hk: "45BriY"
					}),
					disabled: !t
				}, {
					className: yr.a.PaymentsTab,
					key: u.Mb.Payments,
					title: s.fbt._("Payments", null, {
						hk: "31LCer"
					}),
					disabled: !a.length
				}, {
					className: yr.a.SpecialMembershipTab,
					key: u.Mb.SpecialMembership,
					title: s.fbt._("Special Memberships", null, {
						hk: "3ZoNj3"
					}),
					disabled: !n
				}, {
					className: yr.a.MessagingTab,
					key: u.Mb.Messaging,
					title: s.fbt._("Chat & Messaging", null, {
						hk: "3uLoYZ"
					})
				}],
				kr = Object(c.c)({
					savedPayments: Kt.t,
					userIsWhitelistedCreator: Kt.E,
					allowNavigationCallback: vr.a,
					isResponsiveSettingsEnabled: ns.a,
					language: E.O,
					prefs: e => e.user.prefs,
					userHasSpecialMembership: e => {
						if (e.economics.me.fetched) {
							const t = e.economics.me.data.specialMemberships || {};
							return !!Object.keys(t).length
						}
						return !1
					}
				}),
				xr = Object(se.t)(),
				Er = Object(o.b)(kr, (e, t) => ({
					changeTab: t => e(Object(i.b)("/settings/".concat(t))),
					updatePrefs: t => e(Object(qs.F)(t)),
					onPageViewed: () => e(Object(h.a)())
				})),
				wr = {
					activityRelevantAds: "personalization_activity_relevant_ads",
					acceptPrivateMessages: "recieve_messages",
					allowClickTracking: "privacy_log_outbound_clicks",
					autoplayVideo: "video_autoplay",
					collapseReadMessages: "collapse_messages",
					defaultCommentSort: "default_comment_sort",
					emailDigests: "email_digests",
					emailUnreadMessages: "email_unread",
					emailUnsubscribe: "email_notifications",
					geopopular: "geopopular",
					hasSeenCustomizeFlyout: "has_seen_customize_flyout",
					hideAds: "hide_advertisements",
					hideFromRobots: "privacy_search_indexing",
					hideNSFW: "no_profanity",
					highlightComments: "highlight_new_comments",
					ignoreSuggestedSort: "ignore_suggested_sort",
					inBeta: "basic_beta",
					labelNSFW: "safe_browsing_mode",
					markMessagesRead: "mark_as_read",
					nightmode: "nightmode",
					openPostInNewTab: "posts_in_new_tab",
					over18: "adult_content",
					privateFeeds: "private_feeds",
					rememberCommunitySort: "remember_community_sort",
					rpanDuDismissalTime: "rpan_du_dismissal_time",
					sendWelcomeMessages: "welcome_message",
					showActiveCommunities: "top_karma_subreddits",
					showMessagesInInbox: "threaded_messages",
					showNotifications: "live_orangereds",
					showRpanDu: "show_rpan_du",
					showTwitter: "show_twitter",
					showUsernameMentionNotifications: "monitor_mentions",
					sort: "community_sort",
					stylesEnabled: "community_styles",
					useMarkdown: "default_markdown",
					rememberCommunityLayout: "remember_community_view",
					layout: "default_community_view",
					thirdPartyDataPersonalizedAds: "personalization_third_party_data_personalized_ads",
					thirdPartySiteDataPersonalizedAds: "personalization_third_party_site_data_personalized_ads",
					thirdPartySiteDataPersonalizedContent: "personalization_third_party_site_data_personalized_content",
					topContentDismissalTime: "top_content_dismissal_time",
					topContentTimesDismissed: "top_content_times_dismissed"
				};
			class Sr extends r.a.Component {
				constructor() {
					var e;
					super(...arguments), e = this, this.tabNavRef = r.a.createRef(), this.update = (e, t) => {
						const {
							prefs: n
						} = this.props;
						this.sendEvent(e, t), n.acceptPrivateMessages && (n.acceptPrivateMessages = n.acceptPrivateMessages.toLowerCase()), this.props.updatePrefs(Object.assign({}, n, {
							[t]: e
						}))
					}, this.sendEvent = (e, t) => {
						const n = d()();
						wr.hasOwnProperty(t) && this.props.sendEvent(s => ({
							source: this.getSource(),
							action: "save",
							noun: wr[t],
							correlationId: n,
							setting: {
								value: this.getTrackingValue(t, e),
								oldValue: this.getTrackingValue(t, e, !0)
							}
						}))
					}, this.getSource = () => {
						const e = this.props.match.params.page;
						return e && e !== u.Mb.Account ? "".concat("settings", "_").concat(e) : "settings"
					}, this.getTrackingValue = function(t, n) {
						let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						const a = s ? e.props.prefs[t] : n;
						return "boolean" == typeof a ? ["emailUnsubscribe", "hideFromRobots"].includes(t) ? !0 === a ? "off" : "on" : !0 === a ? "on" : "off" : a
					}, this.renderForm = e => {
						const {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							language: s,
							location: a,
							userIsWhitelistedCreator: o,
							userHasSpecialMembership: i
						} = this.props, c = {
							isResponsiveSettingsEnabled: t,
							language: s,
							prefs: n,
							update: this.update
						};
						switch (e) {
							case u.Mb.Account:
								return r.a.createElement(ct, c);
							case u.Mb.Profile:
								return r.a.createElement(Ca, c);
							case u.Mb.Premium:
								return r.a.createElement(Vs.b, c);
							case u.Mb.Notifications:
								return r.a.createElement(js, c);
							case u.Mb.Privacy:
								return r.a.createElement(Ks, c);
							case u.Mb.Messaging:
								return r.a.createElement(Ut, c);
							case u.Mb.Feed:
								return r.a.createElement(Zn, c);
							case u.Mb.Payments:
								return r.a.createElement(Gs, null);
							case u.Mb.Creator: {
								const e = Object(p.a)(a.search);
								return o ? r.a.createElement(cn, {
									stripeConnectCode: e.get("code"),
									stripeConnectStateToken: e.get("state")
								}) : null
							}
							case u.Mb.SpecialMembership:
								return i ? r.a.createElement(br, null) : null;
							default:
								return r.a.createElement(ct, c)
						}
					}, this.preventTabClickEvent = e => {
						e.preventDefault()
					}, this.onPremiumTabClick = () => {
						this.props.sendEvent(Object(fr.e)())
					}, this.getTabClickHandler = e => this.props.isResponsiveSettingsEnabled ? this.preventTabClickEvent : e === u.Mb.Premium ? this.onPremiumTabClick : void 0, this.isScrolling = !1, this.resetScrolling = () => {
						this.isScrolling = !1
					}, this.startScrolling = () => {
						this.isScrolling = !0
					}, this.tabTouchEndHandlerCache = {}, this.getTabTouchEndHandler = e => (this.tabTouchEndHandlerCache[e] || (this.tabTouchEndHandlerCache[e] = () => {
						this.isScrolling || (e === u.Mb.Premium && this.onPremiumTabClick(), this.props.changeTab(e))
					}), this.tabTouchEndHandlerCache[e]), this.tabRefCache = {}, this.getTabRef = e => (this.tabRefCache[e] || (this.tabRefCache[e] = r.a.createRef()), this.tabRefCache[e]), this.renderTab = (e, t) => {
						const {
							match: {
								params: {
									page: n
								}
							}
						} = this.props;
						return r.a.createElement(hr.a, {
							to: "/settings/".concat(e.key),
							active: !n && 0 === t || e.key === n,
							className: e.className,
							innerRef: this.getTabRef(e.key),
							key: e.key,
							onClick: this.getTabClickHandler(e.key),
							onTouchEnd: this.getTabTouchEndHandler(e.key),
							onTouchStart: this.resetScrolling
						}, e.title)
					}
				}
				componentDidMount() {
					Object(gr.d)(gr.a.PremiumSettings), this.props.onPageViewed(), this.props.isResponsiveSettingsEnabled && this.scrollToActivePage()
				}
				scrollToActivePage() {
					b.a.read(() => {
						if (!this.tabNavRef.current) return;
						const {
							match: {
								params: {
									page: e = u.Mb.Account
								}
							}
						} = this.props, t = this.tabRefCache[e];
						t && t.current && this.tabNavRef.current.scrollTo({
							behavior: "smooth",
							left: t.current.offsetLeft - 8
						})
					})
				}
				componentWillUnmount() {
					Object(gr.b)(gr.a.PremiumSettings)
				}
				componentDidUpdate(e, t, n) {
					e.match.params.page !== this.props.match.params.page && this.props.onPageViewed()
				}
				render() {
					const {
						match: e,
						isResponsiveSettingsEnabled: t,
						language: n,
						userIsWhitelistedCreator: a,
						userHasSpecialMembership: o,
						savedPayments: i
					} = this.props;
					return r.a.createElement("div", {
						className: Object(m.a)(yr.a.Container, {
							[yr.a["m-responsive"]]: t
						})
					}, r.a.createElement(hr.c, {
						constrainWidth: !0,
						innerRef: this.tabNavRef,
						isResponsiveSettingsEnabled: t,
						title: s.fbt._("User settings", null, {
							hk: "4fP8lg"
						}),
						icon: hr.b.GEAR,
						onTouchMove: this.startScrolling
					}, Cr(n, a, o, i).filter(e => !e.disabled).map(this.renderTab)), this.renderForm(e.params.page))
				}
			}
			t.default = xr(Er(Object($n.c)(Sr)))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/config.ts");
			const a = (e, t) => "".concat(s.a.assetPath, "/img/memberships/paywall/").concat(e.name.toLowerCase(), "/").concat(t)
		}
	}
]);
//# sourceMappingURL=Settings.90126d30677632e5a513.js.map
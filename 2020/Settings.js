// https://www.redditstatic.com/desktop2x/Settings.85955bd140abfd2abc9f.js
// Retrieved at 4/1/2020, 7:20:05 PM by Reddit Dataminer v1.0.0
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
					return Object(s.c)(i[o])
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/currency/centsToDollars/index.ts"),
				i = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/ApiContext.tsx"),
				d = n("./src/reddit/i18n/utils.ts"),
				m = n("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.m.less"),
				u = n.n(m);
			const p = ["Loyalty badge", "New style badges every month", "Distinguished username", "Support new feature development"].map(d.c),
				b = ["Emotes in comments", "Achievement badges", "Images & GIFs in comments", "Members lounge"].map(d.c);

			function h(e) {
				let {
					benefit: t,
					color: n
				} = e;
				return a.a.createElement("li", {
					className: u.a.benefit
				}, a.a.createElement("div", {
					className: u.a.benefitCircle,
					style: {
						backgroundColor: n
					}
				}), t)
			}
			t.b = Object(l.b)(Object(c.c)((function(e) {
				const {
					className: t,
					price: n,
					subreddit: s
				} = e;
				return a.a.createElement("div", {
					className: Object(r.a)(u.a.container, t)
				}, a.a.createElement("div", {
					className: u.a.topLine
				}, a.a.createElement(i.a, {
					className: u.a.brand,
					subreddit: s
				}), a.a.createElement("div", {
					className: u.a.title
				}, Object(d.c)("".concat(Object(d.b)("community", s.displayText), " Supporter Membership")))), a.a.createElement("header", {
					className: u.a.subTitle
				}, Object(d.c)("Support the ".concat(Object(d.b)("community", s.displayText), " community and receive exclusive access to premium features."))), a.a.createElement("article", null, a.a.createElement("div", {
					className: u.a.benefitsTitle
				}, Object(d.c)("membership benefits")), a.a.createElement("ul", {
					className: u.a.benefits
				}, p.map(e => a.a.createElement(h, {
					benefit: e,
					key: e
				}))), a.a.createElement("div", {
					className: u.a.benefitsTitle
				}, Object(d.c)("coming soon (maybe)")), a.a.createElement("ul", {
					className: u.a.benefits
				}, b.map(e => a.a.createElement(h, {
					benefit: e,
					key: e
				})))), a.a.createElement("footer", {
					className: u.a.price
				}, Object(d.c)("$".concat(Object(d.b)("price", Object(o.a)(n)), "/month"))))
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
			n.d(t, "a", (function() {
				return p
			}));
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
			const C = (e, t) => {
				const n = Object(h.n)(e, t),
					s = Object(g.G)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var x = Object(r.b)(() => Object(o.a)(C, e => e))(e => a.a.createElement(b, {
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
			var y = Object(r.b)(() => Object(o.c)({
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
				_ = n("./src/reddit/selectors/posts.ts");
			var E = Object(r.b)(() => Object(o.c)({
				post: _.N,
				subredditOrProfile: _.Z,
				isModerator: (e, t) => {
					const n = Object(_.Z)(e, t);
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
			var k = Object(r.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(_.Z)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const n = Object(_.Z)(e, {
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
				post: _.N,
				subredditOrProfile: _.Z,
				isModerator: (e, t) => {
					const n = Object(_.Z)(e, t);
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
			var O = Object(r.b)(() => Object(o.c)({
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
			var S = Object(r.b)(() => Object(o.c)({
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
			var j = Object(r.b)(() => Object(o.c)({
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
			}));
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "i", (function() {
				return j
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
				C = n("./src/reddit/icons/svgs/Rising/index.m.less"),
				x = n.n(C);
			var y = e => a.a.createElement("svg", {
					className: Object(r.a)(x.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				_ = n("./src/reddit/icons/svgs/Top/index.tsx"),
				E = n("./src/reddit/controls/Dropdown/index.m.less"),
				k = n.n(E);
			const w = {
				[o.O.BEST]: l,
				[o.O.HOT]: h,
				[o.O.NEW]: v,
				[o.O.CONTROVERSIAL]: u,
				[o.O.TOP]: _.a,
				[o.O.RISING]: y
			};
			t.a = e => {
				let {
					className: t,
					sort: n
				} = e;
				const s = w[n];
				return s ? a.a.createElement(s, {
					className: Object(r.a)(t, k.a.iconStyles)
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
				SnooIcon: "_39rt5SOMKEB5MI0D3j7M5S",
				snooIcon: "_39rt5SOMKEB5MI0D3j7M5S",
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/Widgets/Base/index.tsx"),
				d = n("./src/reddit/controls/InternalLink/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				p = n("./src/reddit/icons/svgs/Close/index.tsx"),
				b = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				h = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				g = n("./src/reddit/layout/twoCol/Dynamic/index.tsx"),
				f = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				v = n("./node_modules/react-redux/es/index.js"),
				C = n("./node_modules/reselect/es/index.js"),
				x = n("./src/lib/humanizeDate/index.ts"),
				y = n("./src/lib/prettyPrintNumber/index.ts"),
				_ = n("./src/lib/timeAgo/index.ts"),
				E = n("./src/reddit/contexts/InsideOverlay.tsx"),
				k = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				w = n("./src/reddit/icons/svgs/Karma/index.tsx"),
				O = n("./src/reddit/icons/svgs/User/index.tsx"),
				S = n("./src/reddit/selectors/profile.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/actions/tooltip.ts"),
				P = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				I = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				T = n.n(I);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const A = Object(C.c)({
					language: j.O
				}),
				B = c.a.div("Container", T.a),
				D = c.a.div("Body", T.a),
				R = c.a.h5("Title", T.a),
				L = c.a.span("Label", T.a);
			class U extends o.a.Component {
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
					return o.a.createElement(B, null, o.a.createElement(R, null, n), o.a.createElement(D, null, e, o.a.createElement(L, M({
						key: "label"
					}, r), t)), a && s && o.a.createElement(P.c, {
						caretOnTop: !0,
						tooltipId: a,
						text: s
					}))
				}
			}
			var F = Object(v.b)(A, e => ({
					toggleTooltip: t => e(Object(N.h)({
						tooltipId: t
					}))
				}))(Object(E.b)(U)),
				W = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				H = n.n(W);
			const z = Object(C.a)(S.j, (e, t) => {
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
				G = c.a.div("Container", H.a);

			function V(e, t) {
				return "profile--id-card--highlight-tooltip-".concat(e ? "-overlay" : "", "-").concat(t)
			}
			var J = Object(v.b)(z)(Object(E.b)(e => {
					const {
						profileCreated: t,
						isOverlay: n,
						language: s,
						commentKarma: r,
						postKarma: i,
						subscribers: c
					} = e, l = V(n, "karma"), d = V(n, "cakeday"), m = a.fbt._({
						"*": "{number} Post Karma",
						_1: "1 Post Karma"
					}, [a.fbt._plural(i, "number", Object(y.b)(i, !0))], {
						hk: "husfU"
					}), u = a.fbt._({
						"*": "{number} Comment Karma",
						_1: "1 Comment Karma"
					}, [a.fbt._plural(i, "number", Object(y.b)(r, !0))], {
						hk: "26iPTL"
					});
					return o.a.createElement(G, null, o.a.createElement(F, {
						icon: o.a.createElement(w.a, {
							className: H.a.icon,
							key: "karma"
						}),
						label: Object(y.b)(r + i, !0),
						title: a.fbt._("Karma", null, {
							hk: "RtSgN"
						}),
						tooltipId: l,
						tooltip: "".concat(m, "\n").concat(u)
					}), o.a.createElement(F, {
						icon: o.a.createElement(k.a, {
							className: H.a.icon,
							key: "cakeDay"
						}),
						label: Object(x.a)(t, !0),
						title: a.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: d,
						tooltip: Object(_.d)(s, t)
					}), c > 0 && o.a.createElement(F, {
						icon: o.a.createElement(O.a, {
							className: H.a.icon,
							key: "followers"
						}),
						title: a.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: Object(y.b)(c, !0)
					}))
				})),
				Z = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				K = n.n(Z),
				Q = n("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				q = n.n(Q);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			n.d(t, "a", (function() {
				return pe
			}));
			var X = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
				}
				return n
			};
			const $ = c.a.div("BannerWrapper", q.a),
				ee = c.a.div("BannerImage", q.a),
				te = c.a.div("SnooIcon", q.a),
				ne = c.a.wrapped(l.b, "Widget", q.a),
				se = c.a.h4("UserTitle", q.a),
				ae = c.a.wrapped(b.a, "PremiumIcon", q.a),
				re = c.a.div("Description", q.a),
				oe = e => {
					var {
						url: t
					} = e, n = X(e, ["url"]);
					return t ? o.a.createElement(d.a, Y({}, n, {
						className: q.a.userName,
						to: t
					})) : o.a.createElement("span", Y({}, n, {
						className: q.a.userName
					}))
				},
				ie = c.a.wrapped(g.a, "Actions", q.a),
				ce = c.a.wrapped(p.a, "CloseIcon", q.a),
				le = c.a.wrapped(i.a, "SettingsLink", q.a),
				de = c.a.wrapped(h.a, "SettingsIcon", q.a),
				me = c.a.wrapped(m.a, "LoadingIconStyled", q.a),
				ue = () => o.a.createElement(me, {
					sizePx: 20
				});
			class pe extends o.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						username: t
					} = this.props;
					return e ? o.a.createElement(f.a, {
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
						isOverlay: l,
						isOwnProfile: d,
						profileIcon: m,
						publicDescription: p,
						title: b,
						url: h,
						username: g,
						isDefaultIcon: f,
						isDeletingIcon: v,
						isDeletingBanner: C,
						onDeleteIcon: x,
						onDeleteBanner: y,
						editMode: _
					} = this.props;
					return o.a.createElement(ne, {
						className: n
					}, o.a.createElement($, null, t && o.a.createElement(ee, {
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}), _ && t && (C ? o.a.createElement(ue, null) : o.a.createElement(ce, {
						onClick: y
					}))), o.a.createElement("div", {
						className: K.a.SnooIconWrapper
					}, o.a.createElement(te, {
						style: {
							backgroundImage: "url(".concat(m, ")")
						}
					}), _ && !f && (v ? o.a.createElement(ue, null) : o.a.createElement(ce, {
						onClick: x
					}))), !_ && d && o.a.createElement(le, {
						to: "/settings/profile"
					}, o.a.createElement(de, null)), b && o.a.createElement(se, null, b), o.a.createElement(oe, {
						url: h
					}, "u/".concat(g)), i && o.a.createElement(u.a, {
						className: K.a.adminIcon,
						title: a.fbt._("Reddit admin", null, {
							hk: "goUUb"
						})
					}), c && o.a.createElement("a", {
						title: a.fbt._("{username} has Reddit Premium", [a.fbt._param("username", g)], {
							hk: "3Fylv"
						}),
						href: "".concat(s.a.redditUrl, "/premium")
					}, o.a.createElement(ae, null)), o.a.createElement(re, null, p), o.a.createElement(J, {
						profileName: g,
						isOverlay: l
					}), this.renderAwardedLastMonth(), o.a.createElement(ie, null, e), r)
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
				ConnectTwitter: "X3WnGWuTGeHRuSAUa5SvC",
				connectTwitter: "X3WnGWuTGeHRuSAUa5SvC",
				"m-responsive": "_2CDbVOW43orfPYw-t-nPiq",
				mResponsive: "_2CDbVOW43orfPYw-t-nPiq",
				ConnectGoogle: "_15mHBcXEigFDBhqx4A5u7z",
				connectGoogle: "_15mHBcXEigFDBhqx4A5u7z",
				ConnectApple: "TAF33bKwRX0N0jqZED4G5",
				connectApple: "TAF33bKwRX0N0jqZED4G5",
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
				return O
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
				C = p.a.wrapped(i.i, "SecondaryButton", u.a),
				x = p.a.div("ButtonWrapper", u.a),
				y = p.a.textarea("TextArea", u.a),
				_ = p.a.h3("SectionLabel", u.a),
				E = p.a.p("H", u.a),
				k = p.a.p("P", u.a),
				w = p.a.wrapped(l.a, "Input", u.a),
				O = p.a.div("CheckBoxWrapper", u.a),
				S = p.a.ul("UL", u.a),
				j = {
					paypal: "/settings/premium",
					stripe: "/settings/premium",
					ios: "https://finance-app.itunes.apple.com/account/subscriptions",
					android: "https://play.google.com/store/account/subscriptions"
				},
				N = {
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
						return r.a.createElement(d.j, null, r.a.createElement(E, null, s.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), r.a.createElement(S, null, r.a.createElement("li", null, s.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
							hk: "49AqfO"
						})), r.a.createElement("li", null, s.fbt._("Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually.", null, {
							hk: "4riIPw"
						})), e.user && e.user.isGold && e.user.hasGoldSubscription && r.a.createElement("li", null, s.fbt._("Just in case you didn't cancel your Premium subscription, here are all the links:", null, {
							hk: "poO6C"
						}), Object.keys(j).map((e, t) => r.a.createElement("span", {
							key: e
						}, !!t && ", ", r.a.createElement("a", {
							href: j[e],
							target: "_blank"
						}, N[e] && N[e]()))))), r.a.createElement(_, null, s.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), r.a.createElement(y, {
							placeholder: s.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), r.a.createElement(_, null, s.fbt._("account credentials for security purposes", null, {
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
						}), r.a.createElement(O, null, r.a.createElement(c.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), r.a.createElement("label", null, s.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), r.a.createElement(x, null, r.a.createElement(C, {
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
							href: j[t],
							target: "_blank"
						}, " ", N[t] && N[t]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : r.a.createElement(r.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", r.a.createElement("a", {
							href: j[t],
							target: "_blank"
						}, " ", N[t] && N[t]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
							hk: "1lLr9b"
						})
					}, this.renderPremiumNotification = () => r.a.createElement(d.j, null, r.a.createElement(E, null, s.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), r.a.createElement(k, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
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
					})), r.a.createElement(x, null, r.a.createElement(v, {
						onClick: () => this.setState({
							showPremiumNotification: !1
						})
					}, s.fbt._("deactivate", null, {
						hk: "1ZQPu5"
					})))), this.renderConfirm = () => r.a.createElement(d.j, null, r.a.createElement(E, null, s.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), r.a.createElement(x, null, r.a.createElement(C, {
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
				"m-mobile": "_2xAeiH0SIAeUqUJCxHQRCv",
				mMobile: "_2xAeiH0SIAeUqUJCxHQRCv",
				"m-desktop": "_1ptcbZZLzjfqLx30i1gcSh",
				mDesktop: "_1ptcbZZLzjfqLx30i1gcSh",
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
			var s = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/humanizeDate/index.ts"),
				d = n("./src/app/strings/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/ConfirmModal/index.tsx"),
				p = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				b = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				h = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				g = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				v = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/higherOrderComponents/makeAsync.tsx")),
				C = n("./src/lib/loadWithRetries/index.ts"),
				x = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			var y = Object(v.a)({
					getComponent: () => Object(C.a)(() => Promise.all([Promise.all([n.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), n.e("UpdateCardModal")]).then(n.bind(null, "./src/reddit/components/UpdateCardModal/index.tsx")), Object(x.c)()])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				_ = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				E = n("./src/reddit/selectors/activeModalId.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/components/Settings/index.m.less"),
				O = n.n(w);
			n.d(t, "a", (function() {
				return N
			}));
			const S = "settings.premiumForm",
				j = "https://www.paypal.com/myaccount/autopay",
				N = "update_card_modal_id",
				P = Object(c.c)({
					cancelSubscriptionModalIsOpen: Object(E.b)("settings_optout_modal_id"),
					goldExpiration: k.n,
					hasAndroidSubscription: k.o,
					hasIOSSubscription: k.r,
					hasStripeSubscription: k.v,
					hasPaypalSubscription: k.t,
					isGold: k.p,
					isPremiumSubscriber: k.q,
					language: k.O,
					updateCardModalIsOpen: Object(E.b)(N)
				}),
				I = Object(o.b)(P, e => ({
					navigateToPurchasePremium: () => e(Object(i.b)("/premium")),
					toggleCancelSubscriptionModal: () => e(Object(m.i)("settings_optout_modal_id")),
					toggleUpdateCardModal: () => e(Object(m.i)(N))
				})),
				T = (e, t, n, s) => t && n ? Object(d.a)(e, "".concat(S, ".premium.subtext"), {
					date: Object(l.a)(s, !0)
				}) : t && !n ? Object(d.a)(e, "".concat(S, ".premium.subscribeSubtext"), {
					date: Object(l.a)(s, !0)
				}) : Object(d.a)(e, "".concat(S, ".premium.altSubtext"));
			class M extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onGoldLinkClick = e => {
						e.preventDefault();
						const {
							navigateToPurchasePremium: t,
							sendEvent: n
						} = this.props;
						n(Object(_.d)()), t()
					}, this.onCancelClick = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(_.a)()), t()
					}, this.onHideAdsToggle = () => {
						const {
							update: e,
							prefs: {
								hideAds: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(_.f)() : Object(_.h)()), e(!t, "hideAds")
					}, this.onHighlightCommentsToggle = () => {
						const {
							update: e,
							prefs: {
								highlightComments: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(_.g)() : Object(_.i)()), e(!t, "highlightComments")
					}, this.onYesCancelSubscription = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(_.c)()), this.navigateToCancel()
					}, this.onNoCancelSubscription = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(_.b)()), t()
					}
				}
				componentWillMount() {
					this.props.sendEvent(Object(_.j)())
				}
				navigateToCancel() {
					const {
						hasPaypalSubscription: e,
						hasStripeSubscription: t
					} = this.props;
					e ? window.location.href = j : t && (window.location.href = "".concat(s.a.redditUrl, "/gold/subscription"))
				}
				render() {
					const {
						cancelSubscriptionModalIsOpen: e,
						goldExpiration: t,
						hasAndroidSubscription: n,
						hasIOSSubscription: s,
						hasPaypalSubscription: a,
						hasStripeSubscription: o,
						isGold: i,
						isPremiumSubscriber: c,
						language: l,
						toggleUpdateCardModal: m,
						updateCardModalIsOpen: f,
						prefs: {
							highlightComments: v,
							hideAds: C
						}
					} = this.props, x = n || s;
					return r.a.createElement(b.a, null, r.a.createElement(p.b, {
						className: O.a.premiumHeading
					}, Object(d.a)(l, "".concat(S, ".headings.main"))), r.a.createElement(p.a, {
						className: O.a.premiumSubtext
					}, Object(d.a)(l, "".concat(S, ".headings.subtext.main"))), r.a.createElement(h.a, null, Object(d.a)(l, "".concat(S, ".headings.subscriptionStatus"))), r.a.createElement(p.a, {
						className: O.a.premiumSubtext
					}, T(l, i, c, t || 0)), !c && r.a.createElement(g.f, {
						label: i ? Object(d.a)(l, "".concat(S, ".premium.subscribeLinkMessage")) : Object(d.a)(l, "".concat(S, ".premium.linkMessage")),
						link: "/premium",
						onClick: this.onGoldLinkClick,
						last: !0
					}), o && r.a.createElement(g.a, {
						label: Object(d.a)(l, "".concat(S, ".updatePaymentInfo")),
						onClick: m
					}), a && r.a.createElement(g.f, {
						label: Object(d.a)(l, "".concat(S, ".updatePaymentInfo")),
						link: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=912@reddit.com"
					}), c && !x && r.a.createElement(g.a, {
						label: Object(d.a)(l, "".concat(S, ".cancelSubscription")),
						onClick: this.onCancelClick,
						last: !0
					}), i && r.a.createElement(r.a.Fragment, null, r.a.createElement(h.a, null, Object(d.a)(l, "".concat(S, ".headings.premiumFeatures"))), r.a.createElement(g.n, {
						on: C,
						disabled: !i,
						onClick: this.onHideAdsToggle,
						label: Object(d.a)(l, "".concat(S, ".hideAdvertisements.label")),
						subtext: Object(d.a)(l, "".concat(S, ".hideAdvertisements.subtext"))
					}), r.a.createElement(g.n, {
						on: v,
						disabled: !i,
						onClick: this.onHighlightCommentsToggle,
						label: Object(d.a)(l, "".concat(S, ".highlightComments.label")),
						subtext: Object(d.a)(l, "".concat(S, ".highlightComments.subtext")),
						last: !0
					})), f && r.a.createElement(y, null), e && r.a.createElement(u.a, {
						headerText: Object(d.a)(l, "".concat(S, ".cancelSubscriptionModal.headerText")),
						message: Object(d.a)(l, "".concat(S, ".cancelSubscriptionModal.message")),
						cancelText: Object(d.a)(l, "".concat(S, ".cancelSubscriptionModal.cancelText")),
						acceptText: Object(d.a)(l, "".concat(S, ".cancelSubscriptionModal.acceptText")),
						onAccept: this.onYesCancelSubscription,
						onCancel: this.onNoCancelSubscription,
						onOverlayClick: this.onNoCancelSubscription,
						withOverlay: !0
					}))
				}
			}
			t.b = I(Object(f.c)(M))
		},
		"./src/reddit/components/Settings/PrivacyForm.m.less": function(e, t, n) {
			e.exports = {
				ListsWrapper: "_1el3NPZn6qsGupLNWd_uTE",
				listsWrapper: "_1el3NPZn6qsGupLNWd_uTE",
				SubheaderLink: "_2SoL5Q_2U0LQC1BPaNletZ",
				subheaderLink: "_2SoL5Q_2U0LQC1BPaNletZ",
				GenerateBackupCodesButton: "kLUeYesCcX7szHNBR8OZZ",
				generateBackupCodesButton: "kLUeYesCcX7szHNBR8OZZ",
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
				HeadingSubtext: "_3yr8kdlxh51P-SJDaWVzJD",
				headingSubtext: "_3yr8kdlxh51P-SJDaWVzJD"
			}
		},
		"./src/reddit/components/Settings/shared/Heading.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Settings/shared/Heading.m.less"),
				r = n.n(a);
			t.b = s.a.h2("Heading", r.a);
			const o = s.a.p("HeadingSubtext", r.a)
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
				return C
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.wrapped(d.a, "ImageUploadIcon", u.a), h = o.a.div("ImageIconRow", u.a), g = o.a.div("ImageUploadText", u.a), f = o.a.wrapped(i.a, "FileDrop", u.a), v = o.a.div("ContainerUploading", u.a), C = e => a.a.createElement(v, {
				className: e.className
			}, a.a.createElement(h, null, a.a.createElement(l.a, {
				sizePx: 40,
				center: !0
			})), a.a.createElement(g, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), x = o.a.label("Label", u.a);
			t.b = e => a.a.createElement(f, {
				className: e.className,
				onDrop: e.onChange,
				render: t => a.a.createElement(x, {
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
				return O
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
				C = b.a.wrapped(c.a, "UnsubscribeIcon", u.a),
				x = b.a.wrapped(e => {
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
				y = b.a.wrapped(e => {
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
				_ = e => {
					var {
						icon: t
					} = e, n = g(e, ["icon"]);
					return t ? r.a.createElement(x, h({}, n, {
						className: Object(p.a)(n.className, {
							[u.a.isSmall]: n.small
						})
					})) : r.a.createElement(y, h({}, n, {
						className: Object(p.a)(n.className, {
							[u.a.isSmall]: n.small
						})
					}))
				},
				E = b.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: s,
						type: a
					} = e, i = g(e, ["border", "language", "small", "type"]);
					return r.a.createElement(f, i, r.a.createElement(C, {
						className: Object(p.a)(o.n, i.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "UnsubscribeIconButton", u.a),
				k = b.a.wrapped(e => {
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
					return t ? r.a.createElement(E, h({}, n, {
						className: Object(p.a)(n.className, {
							[u.a.isSmall]: n.small
						})
					})) : r.a.createElement(k, h({}, n, {
						className: Object(p.a)(n.className, {
							[u.a.isSmall]: n.small
						})
					}))
				};
			class O extends r.a.Component {
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
					})) : r.a.createElement(_, h({}, i, {
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
				return s
			})), n.d(t, "a", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s, a = n("./node_modules/lodash/throttle.js"),
				r = n.n(a),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/constants/componentSizes.ts"),
				u = n("./src/reddit/constants/zIndex.ts"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				h = n("./src/reddit/components/TabNav/index.m.less"),
				g = n.n(h),
				f = function(e, t) {
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
			}(s || (s = {}));
			const v = d.a.wrapped(b.a, "Gear", g.a),
				C = d.a.h3("Title", g.a),
				x = d.a.div("TabNavContainer", g.a),
				y = d.a.div("Tabs", g.a),
				_ = d.a.wrapped(e => {
					var {
						active: t,
						enabled: n,
						innerRef: s
					} = e, a = f(e, ["active", "enabled", "innerRef"]);
					return i.a.createElement(p.a, {
						"aria-selected": t,
						className: Object(c.a)(a.className, {
							[g.a.mIsActive]: t,
							[g.a.mIsEnabled]: !1 !== n
						}),
						innerRef: s,
						role: "tab",
						to: a.to
					}, a.children)
				}, "Tab", g.a),
				E = e => {
					switch (e) {
						case s.GEAR:
							return i.a.createElement(v, null);
						default:
							return null
					}
				},
				k = () => window.pageYOffset || window.scrollY,
				w = 75,
				O = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: m.f,
					willChange: "transform",
					zIndex: u.g
				};
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = r()(() => {
						this.state.sticky || this.forceUnsticky ? k() < w && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : k() >= w && this.setState({
							sticky: !0
						})
					}, l.G), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
						isResponsiveSettingsEnabled: t
					} = this.props, n = Object(c.a)({
						[g.a.mResponsive]: t
					});
					return i.a.createElement(x, {
						className: Object(c.a)(n, this.props.className),
						innerRef: e
					}, i.a.createElement(C, {
						className: Object(c.a)(n, {
							[g.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, E(this.props.icon), this.props.title), i.a.createElement(y, {
						className: Object(c.a)(n, {
							[g.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? O : void 0
					}, this.props.children))
				}
			}
			t.c = S
		},
		"./src/reddit/components/UserNameAndIcon/index.m.less": function(e, t, n) {
			e.exports = {
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
				c = n("./src/reddit/controls/InternalLink/index.tsx"),
				l = n("./src/reddit/components/UserNameAndIcon/index.m.less"),
				d = n.n(l);
			const m = o.a.img("UserIcon", d.a),
				u = o.a.wrapped(c.a, "UserLink", d.a);
			t.a = e => r.a.createElement(u, {
				className: e.className,
				to: "".concat(s.a.redditUrl, "/user/").concat(e.username)
			}, r.a.createElement(i.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, r.a.createElement(m, {
				src: e.userIcon || "".concat(s.a.assetPath, "/img/placeholder_gradient_light-280.png"),
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}), e.username))
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
					[a.O.BEST]: () => s.fbt._("best", null, {
						hk: "4tcUbl"
					}),
					[a.O.HOT]: () => s.fbt._("hot", null, {
						hk: "44QCEp"
					}),
					[a.O.NEW]: () => s.fbt._("new", null, {
						hk: "3VBhPb"
					}),
					[a.O.CONTROVERSIAL]: () => s.fbt._("controversial", null, {
						hk: "4jWP0T"
					}),
					[a.O.RISING]: () => s.fbt._("rising", null, {
						hk: "1KmbkT"
					}),
					[a.O.TOP]: () => s.fbt._("top", null, {
						hk: "4pcLmp"
					})
				},
				o = e => {
					const t = r[e];
					return t && t() || ""
				},
				i = {
					[a.Rb.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[a.Rb.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[a.Rb.WEEK]: () => s.fbt._("This week", null, {
						hk: "3Y5JkE"
					}),
					[a.Rb.MONTH]: () => s.fbt._("This month", null, {
						hk: "3NWWQf"
					}),
					[a.Rb.YEAR]: () => s.fbt._("This year", null, {
						hk: "3jD0mx"
					}),
					[a.Rb.ALL]: () => s.fbt._("All time", null, {
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
				MessagingTab: "_3wCJvTvi_ME2B15BCVuMDo",
				messagingTab: "_3wCJvTvi_ME2B15BCVuMDo"
			}
		},
		"./src/reddit/pages/Settings/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.search.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/uuid/v4.js"),
				c = n.n(i),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/fastdom/index.ts"),
				p = n("./src/reddit/actions/pages/shared.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./node_modules/js-cookie/src/js.cookie.js"),
				g = n.n(h),
				f = n("./src/reddit/actions/alpha.ts"),
				v = n("./src/reddit/actions/login.ts"),
				C = n("./src/reddit/actions/modal.ts"),
				x = n("./src/reddit/actions/users.ts"),
				y = n("./src/reddit/components/ConfirmModal/index.tsx"),
				_ = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/reddit/controls/Button/index.tsx")),
				E = n("./src/reddit/selectors/user.ts"),
				k = n("./src/lib/validateEmail/index.ts"),
				w = n("./src/reddit/actions/toaster.ts"),
				O = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				S = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				j = n("./src/reddit/icons/svgs/Info/index.tsx"),
				N = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				P = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/models/User/index.ts"),
				T = n("./src/reddit/components/Settings/FPRWarning/index.m.less"),
				M = n.n(T);
			const A = Object(o.c)({
					emailSent: e => e.user.accountSettings.sendResetEmail.api.emailSent,
					username: e => {
						const t = Object(E.i)(e);
						return t && Object(I.f)(t) || ""
					}
				}),
				B = Object(r.b)(A, e => ({
					changeEmail: t => e(Object(x.w)(t)),
					sendResetEmail: t => e(Object(x.z)(t)),
					showErrorToast: t => e(Object(w.e)({
						duration: w.a,
						kind: P.b.Error,
						text: t
					}))
				})),
				D = e => e ? a.a.createElement(S.a, {
					className: Object(l.a)(M.a.image, M.a.success)
				}) : a.a.createElement(N.a, {
					className: Object(l.a)(M.a.image, M.a.error)
				}),
				R = e => e ? b.fbt._("Check your email. Please allow some time for the email to arrive. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
					hk: "3Y172d"
				}) : b.fbt._("We have detected suspicious activity on your account. For your safety we have suspended your account until you reset your password to confirm your identity.", null, {
					hk: "YIzQQ"
				}),
				L = e => e ? b.fbt._("Reset password email sent", null, {
					hk: "cLjlN"
				}) : b.fbt._("Send a reset password email to access your account", null, {
					hk: "4jgOhY"
				}),
				U = e => e ? b.fbt._("Email was sent to:", null, {
					hk: "3Z4iz1"
				}) : b.fbt._("Email will be sent to:", null, {
					hk: "2CTyJh"
				}),
				F = e => {
					const {
						errorMsg: t,
						inputChecked: n
					} = e;
					return n ? t ? a.a.createElement(j.a, {
						className: Object(l.a)(M.a.inputIcon, M.a.error)
					}) : a.a.createElement(S.a, {
						className: Object(l.a)(M.a.inputIcon, M.a.success)
					}) : null
				};
			class W extends a.a.Component {
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
							enteredEmail: s
						} = this.state, a = Object(k.a)(s, !1), r = a ? "" : b.fbt._("Please fix your email to continue.", null, {
							hk: "f4LWI"
						});
						this.setState({
							errorMsg: r,
							inputChecked: !0
						}), a && (t ? n({
							curEmail: s,
							name: this.props.username
						}) : e({
							newEmail: s
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
					} = this.state, s = !this.props.email && !e, r = s && this.state.inputChecked && (n ? "errorBorder" : "successBorder") || "";
					return a.a.createElement("div", {
						className: M.a.container
					}, a.a.createElement("h3", {
						className: M.a.header
					}, b.fbt._("Account suspended", null, {
						hk: "DTXMF"
					})), a.a.createElement("div", {
						className: M.a.status
					}, D(e), a.a.createElement("h3", {
						className: M.a.statusText
					}, L(e))), a.a.createElement("p", {
						className: M.a.description
					}, R(e)), a.a.createElement("div", {
						className: M.a.actionContainer
					}, a.a.createElement("div", {
						className: M.a.emailContainer
					}, s ? a.a.createElement(a.a.Fragment, null, a.a.createElement(O.a, {
						className: Object(l.a)(M.a.input, M.a[r]),
						label: b.fbt._("Enter email", null, {
							hk: "1rakz1"
						}),
						onChange: this.onEmailChange,
						value: t
					}), F(this.state), a.a.createElement("h6", {
						className: M.a.errorMsg
					}, n)) : a.a.createElement("p", {
						className: M.a.emailText
					}, U(e), a.a.createElement("span", {
						className: M.a.emailAddress
					}, t))), a.a.createElement(_.f, {
						className: M.a.primaryBtn,
						onClick: this.onSendResetEmail
					}, e ? b.fbt._("Resend", null, {
						hk: "2jGEmt"
					}) : b.fbt._("Send", null, {
						hk: "3rKRVv"
					}))))
				}
			}
			var H = B(W),
				z = n("./src/reddit/components/Settings/modalIds.ts"),
				G = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				V = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				J = n("./src/reddit/i18n/components.tsx"),
				Z = n("./src/reddit/i18n/utils.ts"),
				K = n("./src/reddit/components/Settings/AccountPrefsSection/index.m.less"),
				Q = n.n(K),
				q = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
					}
					return n
				};
			const Y = Object(o.c)({
					hasVerifiedEmail: E.w,
					isFPR: E.E
				}),
				X = Object(r.b)(Y, e => ({
					openChangeEmailModal: () => e(Object(C.i)(z.a)),
					resendEmail: () => e(Object(x.y)())
				})),
				$ = e => {
					let {
						email: t,
						hasVerifiedEmail: n,
						resendEmail: s
					} = e;
					return t ? n ? t : a.a.createElement(a.a.Fragment, null, Object(Z.c)("".concat(Object(Z.b)("email", t), " not verified! ")), a.a.createElement(_.d, {
						className: Q.a.tertiaryBtn,
						onClick: s
					}, a.a.createElement(J.c, null, "Click to resend"))) : Object(Z.c)("Missing email, please update to secure your account")
				};
			var ee = X(e => {
					var {
						isFPR: t,
						openChangeEmailModal: n,
						toggleChangePasswordModal: s
					} = e, r = q(e, ["isFPR", "openChangeEmailModal", "toggleChangePasswordModal"]);
					return t ? a.a.createElement(H, {
						email: r.email
					}) : a.a.createElement(a.a.Fragment, null, a.a.createElement(G.a, null, a.a.createElement(J.c, null, "Account preferences")), a.a.createElement(V.b, {
						actionText: Object(Z.c)("Change"),
						label: Object(Z.c)("Email address"),
						onClick: n,
						subtext: $(r)
					}), a.a.createElement(V.b, {
						actionText: Object(Z.c)("Change"),
						label: Object(Z.c)("Change password"),
						last: !0,
						onClick: s,
						subtext: Object(Z.c)("Password must be at least 6 characters long")
					}))
				}),
				te = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				ne = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				se = n("./src/reddit/constants/accountManager.ts"),
				ae = n("./src/reddit/constants/screenWidths.ts"),
				re = n("./src/reddit/contexts/PageLayer/index.tsx"),
				oe = n("./src/reddit/selectors/accountManager.ts"),
				ie = n("./src/reddit/selectors/activeModalId.ts"),
				ce = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				le = n("./src/config.ts"),
				de = n("./src/reddit/components/Settings/ConnectedAccounts/index.m.less"),
				me = n.n(de),
				ue = n("./src/lib/lessComponent.tsx");
			const pe = ue.a.wrapped(V.c, "ConnectApple", me.a),
				be = ue.a.wrapped(_.f, "ConnectAppleButton", me.a),
				he = ue.a.div("ConnectionInfo", me.a),
				ge = ue.a.wrapped(_.j, "DisconnectButton", me.a),
				fe = ue.a.span("Username", me.a),
				ve = ue.a.wrapped(e => a.a.createElement("svg", {
					className: e.className,
					height: "18",
					viewBox: "0 0 18 18",
					width: "18",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M8.8162 4.15385C9.60444 4.15385 10.5925 3.60458 11.1809 2.87222C11.7138 2.20852 12.1024 1.28163 12.1024 0.354736C12.1024 0.228861 12.0913 0.102988 12.0691 0C11.192 0.0343293 10.1373 0.606484 9.50452 1.37317C9.00493 1.95677 8.54975 2.87222 8.54975 3.81055C8.54975 3.94787 8.57196 4.08519 8.58306 4.13096C8.63857 4.1424 8.72739 4.15385 8.8162 4.15385ZM6.04071 18C7.1176 18 7.59498 17.2562 8.93832 17.2562C10.3039 17.2562 10.6036 17.9771 11.8026 17.9771C12.9794 17.9771 13.7677 16.8557 14.5115 15.7572C15.3442 14.4984 15.6883 13.2626 15.7105 13.2053C15.6328 13.1825 13.3791 12.2327 13.3791 9.56643C13.3791 7.25493 15.1554 6.2136 15.2553 6.1335C14.0785 4.39415 12.2911 4.34838 11.8026 4.34838C10.4815 4.34838 9.40461 5.17228 8.72739 5.17228C7.99465 5.17228 7.02878 4.39415 5.88528 4.39415C3.70929 4.39415 1.5 6.24793 1.5 9.74952C1.5 11.9237 2.32155 14.2238 3.33183 15.7114C4.19778 16.9701 4.95271 18 6.04071 18Z"
				})), "AppleIcon", me.a),
				Ce = ue.a.span("TextAndIconWrapper", me.a);
			var xe = e => {
				const {
					appleAccount: t,
					isResponsiveSettingsEnabled: n,
					onConnectClick: s,
					onDisconnectClick: r
				} = e, o = t && t.email, i = Object(l.a)({
					[me.a["m-responsive"]]: n
				});
				return e.appleAccount ? (() => a.a.createElement(V.c, {
					label: b.fbt._("Connected to Apple", null, {
						hk: "1oCedt"
					}),
					subtext: b.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, a.a.createElement(he, null, a.a.createElement("div", null, a.a.createElement(fe, null, o)), a.a.createElement(ge, {
					onClick: r
				}, "(", b.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => a.a.createElement(pe, {
					className: i,
					label: b.fbt._("Connect to Apple", null, {
						hk: "4yrUwb"
					}),
					subtext: b.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, a.a.createElement(be, {
					className: i,
					onClick: s
				}, a.a.createElement(Ce, null, a.a.createElement(ve, null), b.fbt._("Connect to Apple", null, {
					hk: "15AzyF"
				})))))()
			};
			class ye extends a.a.Component {
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
					return a.a.createElement(xe, {
						appleAccount: this.state.appleAccount,
						isResponsiveSettingsEnabled: this.props.isResponsiveSettingsEnabled,
						onConnectClick: this.onConnectClick,
						onDisconnectClick: this.onDisconnectClick
					})
				}
			}
			var _e = ye;
			const Ee = ue.a.wrapped(V.c, "ConnectGoogle", me.a),
				ke = ue.a.wrapped(_.f, "ConnectGoogleButton", me.a),
				we = ue.a.div("ConnectionInfo", me.a),
				Oe = ue.a.wrapped(_.j, "DisconnectButton", me.a),
				Se = ue.a.span("Username", me.a),
				je = ue.a.wrapped(e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456V9.20456Z",
					fill: "#4285F4"
				}), a.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M9 18C11.43 18 13.4673 17.1941 14.9564 15.8196L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18V18Z",
					fill: "#34A853"
				}), a.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409 7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774 0 9.00001C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71V10.71Z",
					fill: "#FBBC05"
				}), a.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955V3.57955Z",
					fill: "#EA4335"
				})), "GoogleIcon", me.a),
				Ne = ue.a.span("TextAndIconWrapper", me.a);
			var Pe = e => {
				const {
					googleAccount: t,
					isResponsiveSettingsEnabled: n,
					onConnectClick: s,
					onDisconnectClick: r
				} = e, o = t && t.email, i = Object(l.a)({
					[me.a["m-responsive"]]: n
				});
				return e.googleAccount ? (() => a.a.createElement(V.c, {
					label: b.fbt._("Connected to Google", null, {
						hk: "2jPsFn"
					}),
					subtext: b.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, a.a.createElement(we, null, a.a.createElement("div", null, a.a.createElement(Se, null, o)), a.a.createElement(Oe, {
					onClick: r
				}, "(", b.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => a.a.createElement(Ee, {
					className: i,
					label: b.fbt._("Connect to Google", null, {
						hk: "7yvud"
					}),
					subtext: b.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, a.a.createElement(ke, {
					className: i,
					onClick: s
				}, a.a.createElement(Ne, null, a.a.createElement(je, null), b.fbt._("Connect to Google", null, {
					hk: "2IcOIA"
				})))))()
			};
			class Ie extends a.a.Component {
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
					return a.a.createElement(Pe, {
						googleAccount: this.state.googleAccount,
						isResponsiveSettingsEnabled: this.props.isResponsiveSettingsEnabled,
						onConnectClick: this.onConnectClick,
						onDisconnectClick: this.onDisconnectClick
					})
				}
			}
			var Te = n("./src/reddit/actions/externalAccount.ts"),
				Me = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				Ae = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				Be = n("./src/reddit/models/ExternalAccount/index.ts");
			const De = ue.a.wrapped(Ae.a, "TwitterIcon", me.a),
				Re = ue.a.wrapped(Me.a, "LoadingIcon", me.a),
				Le = ue.a.wrapped(V.c, "ConnectTwitter", me.a),
				Ue = ue.a.wrapped(_.f, "ConnectTwitterButton", me.a),
				Fe = ue.a.span("TextAndIconWrapper", me.a),
				We = ue.a.wrapped(_.j, "DisconnectButton", me.a),
				He = ue.a.span("Username", me.a),
				ze = ue.a.div("ConnectionInfo", me.a);
			var Ge = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				Ve = n("./src/reddit/selectors/externalAccount.ts");
			const Je = Object(o.c)({
					twitterAccount: Ve.a,
					isTwitterConnectionPending: Ve.b
				}),
				Ze = Object(r.b)(Je, e => ({
					onConnectAccount: t => {
						e(Te.m(t)), t === Be.a.Twitter && e((e, t) => Ge.b(t()))
					},
					onDisconnectAccount: t => {
						e(Te.n(t)), t === Be.a.Twitter && e((e, t) => Ge.d(t()))
					},
					trackDisplayLinkOnProfileToggled: t => e((e, n) => Ge.e(n(), t))
				}));
			var Ke = Object(re.t)()(Ze(e => {
				const t = t => {
						t.preventDefault(), e.onConnectAccount(Be.a.Twitter)
					},
					n = t => {
						t.preventDefault(), e.onDisconnectAccount(Be.a.Twitter)
					};
				return a.a.createElement(s.Fragment, null, e.twitterAccount ? (() => {
					const t = e.twitterAccount;
					return a.a.createElement(V.c, {
						label: b.fbt._("Connected to Twitter", null, {
							hk: "4jBH4V"
						}),
						subtext: b.fbt._("You can now choose to share your posts to Twitter from the new post composer.", null, {
							hk: "2Wawns"
						})
					}, a.a.createElement(ze, null, a.a.createElement("div", null, a.a.createElement(He, null, "@", t.username)), a.a.createElement(We, {
						onClick: n
					}, "(", b.fbt._("Disconnect", null, {
						hk: "1dQQ2u"
					}), ")")))
				})() : (() => {
					const {
						isResponsiveSettingsEnabled: n,
						isTwitterConnectionPending: s
					} = e, r = Object(l.a)({
						[me.a["m-responsive"]]: n
					});
					return a.a.createElement(Le, {
						className: r,
						label: b.fbt._("Connect to Twitter", null, {
							hk: "4rhAYG"
						}),
						subtext: b.fbt._("Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.", null, {
							hk: "3TueXf"
						})
					}, a.a.createElement(Ue, {
						className: r,
						onClick: t
					}, s ? a.a.createElement(Re, {
						sizePx: 15
					}) : a.a.createElement(Fe, null, a.a.createElement(De, null), b.fbt._("Connect to Twitter", null, {
						hk: "3r8ltg"
					}))))
				})(), a.a.createElement(V.n, {
					disabled: !e.twitterAccount,
					indent: !0,
					label: b.fbt._("Show link on profile", null, {
						hk: "2GORbe"
					}),
					on: !!e.prefs.showTwitter,
					onClick: () => {
						e.update(!e.prefs.showTwitter, "showTwitter"), e.trackDisplayLinkOnProfileToggled(!e.prefs.showTwitter)
					},
					subtext: b.fbt._("You can show a link to your Twitter account on your profile", null, {
						hk: "WQ9Sy"
					})
				}))
			}));
			var Qe = e => {
				const {
					isResponsiveSettingsEnabled: t
				} = e;
				return a.a.createElement(s.Fragment, null, a.a.createElement(G.a, {
					id: "connected-accounts"
				}, b.fbt._("Connected accounts", null, {
					hk: "1whjzI"
				})), a.a.createElement(Ke, e), (() => {
					if (e.isSSOAccount) return a.a.createElement(s.Fragment, null, a.a.createElement(_e, {
						isResponsiveSettingsEnabled: t
					}), a.a.createElement(Ie, {
						isResponsiveSettingsEnabled: t
					}))
				})())
			};
			const qe = Object(o.c)({
				isSSOAccount: () => !1
			});
			var Ye = Object(r.b)(qe)(Qe),
				Xe = n("./src/reddit/components/Settings/DeactivateModal.tsx"),
				$e = n("./src/reddit/components/Settings/AccountForm.m.less"),
				et = n.n($e);
			const tt = ue.a.wrapped(ce.b, "Trash", et.a),
				nt = ue.a.wrapped(G.a, "BetaTestsHeading", et.a),
				st = ue.a.wrapped(V.n, "InBetaToggle", et.a),
				at = ue.a.wrapped(V.n, "InRedesignBetaToggle", et.a),
				rt = ue.a.button("DeactivateButton", et.a),
				ot = ue.a.div("DeactivateWrapper", et.a),
				it = Object(o.c)({
					changePasswordHref: (e, t) => Object(oe.c)(e, {
						pageLayer: t.pageLayer,
						path: se.b.ChangePassword
					}),
					deactivateModalOpen: Object(ie.b)("deactivate_modal_id"),
					email: E.l,
					inRedesignBeta: E.A,
					optoutModalOpen: Object(ie.b)("settins_optout_modal_id"),
					user: E.i
				}),
				ct = Object(r.b)(it, (e, t) => ({
					deactivate: t => {
						e(Object(x.x)(t))
					},
					optOut: async () => {
						if ("new.reddit.com" === window.location.host) return window.location.assign("https://old.reddit.com/prefs");
						g.a.get("rseor3") && g.a.remove("rseor3", {
							domain: le.a.cookieDomain
						}), await e(Object(f.b)()), window.location.href = "".concat(le.a.redditUrl, "/prefs")
					},
					resendEmail: () => e(Object(x.y)()),
					toggleChangePasswordModal: () => e(Object(v.b)()),
					toggleDeactivateModal: () => e(Object(C.i)("deactivate_modal_id")),
					toggleOptoutModal: () => e(Object(C.i)("settins_optout_modal_id"))
				}));
			class lt extends a.a.Component {
				constructor() {
					super(...arguments), this.launchChangePasswordFlow = () => {
						const {
							changePasswordHref: e,
							isResponsiveSettingsEnabled: t,
							toggleChangePasswordModal: n
						} = this.props;
						t && window.innerWidth < ae.c ? window.location.href = e : n()
					}
				}
				render() {
					const {
						deactivate: e,
						deactivateModalOpen: t,
						email: n,
						inRedesignBeta: s,
						isResponsiveSettingsEnabled: r,
						optOut: o,
						optoutModalOpen: i,
						prefs: c,
						toggleDeactivateModal: d,
						toggleOptoutModal: m,
						update: u,
						user: p
					} = this.props, h = Object(l.a)({
						[et.a["m-responsive"]]: r
					}), g = Object(l.a)({
						[et.a.ResponsiveOverlay]: r
					});
					return a.a.createElement(ne.a, null, a.a.createElement(te.b, null, b.fbt._("Account settings", null, {
						hk: "2faClM"
					})), a.a.createElement(ee, {
						email: n,
						toggleChangePasswordModal: this.launchChangePasswordFlow
					}), a.a.createElement(Ye, this.props), a.a.createElement(nt, {
						className: h
					}, b.fbt._("beta tests", null, {
						hk: "3Zy092"
					})), a.a.createElement(st, {
						className: h,
						on: c.inBeta,
						onClick: () => u(!c.inBeta, "inBeta"),
						label: b.fbt._("Opt into beta tests", null, {
							hk: "4lexek"
						}),
						subtext: b.fbt._("See the newest features from Reddit and join the r/beta community", null, {
							hk: "4syr2"
						})
					}), a.a.createElement(at, {
						className: h,
						on: !s,
						onClick: m,
						label: b.fbt._("Opt out of the redesign", null, {
							hk: "4895Wr"
						}),
						subtext: b.fbt._("Revert back to old Reddit for the time being", null, {
							hk: "2xbG6u"
						}),
						last: !0
					}), a.a.createElement(G.a, null, b.fbt._("deactivate account", null, {
						hk: "3SK4xO"
					})), a.a.createElement(ot, null, a.a.createElement(rt, {
						onClick: d
					}, a.a.createElement(tt, null), b.fbt._("deactivate account", null, {
						hk: "2KkyTV"
					}))), i && a.a.createElement(y.a, {
						headerText: b.fbt._("Opt out of the redesign", null, {
							hk: "ToHJM"
						}),
						message: b.fbt._("There is an opt in to redesign setting in Preferences (in old Reddit) if you'd like to opt back in.", null, {
							hk: "11HYYa"
						}),
						cancelText: b.fbt._("Cancel", null, {
							hk: "2fKSEm"
						}),
						acceptText: b.fbt._("opt out", null, {
							hk: "2Abiox"
						}),
						onAccept: o,
						onCancel: m,
						onOverlayClick: m,
						overlayClassName: g,
						withOverlay: !0
					}), t && a.a.createElement(Xe.b, {
						onClick: e,
						exit: d,
						onOverlayClick: d,
						overlayClassName: g,
						user: p,
						withOverlay: !0
					}))
				}
			}
			var dt = Object(re.t)()(ct(lt)),
				mt = n("./src/reddit/reducers/user/prefs/index.ts"),
				ut = n("./src/reddit/actions/chat/constants.ts"),
				pt = n("./src/reddit/actions/chat/userSettings.ts"),
				bt = n("./src/reddit/actions/userBlocks.ts"),
				ht = n("./src/reddit/actions/userWhitelist.ts"),
				gt = n("./src/lib/timeAgo/index.ts"),
				ft = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				vt = n("./src/reddit/components/Hovercards/helpers.ts"),
				Ct = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				xt = n("./src/reddit/components/Settings/shared/UserRow.m.less"),
				yt = n.n(xt);
			const _t = ue.a.p("Date", yt.a),
				Et = ue.a.wrapped(Ct.a, "UserNameAndIcon", yt.a),
				kt = ue.a.button("Button", yt.a),
				wt = ue.a.div("ButtonWrapper", yt.a);
			var Ot = ue.a.wrapped(e => a.a.createElement("div", {
					className: e.className
				}, a.a.createElement(Et, {
					username: e.name,
					userIcon: e.img,
					tooltipId: Object(vt.b)({
						author: e.name,
						tooltipIdPrefix: ft.a
					}),
					sendHoverCardEvent: () => {},
					iconSize: 24
				}), a.a.createElement(_t, null, Object(gt.d)(e.language, e.date / 1e3)), a.a.createElement(wt, null, a.a.createElement(kt, {
					disabled: !!e.disabled,
					onClick: e.onClick
				}, "Remove"))), "Component", yt.a),
				St = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				jt = n("./src/reddit/components/Settings/shared/ListWidget.m.less"),
				Nt = n.n(jt);
			const Pt = 5,
				It = ue.a.h4("ListHeading", Nt.a),
				Tt = ue.a.div("ListBox", Nt.a),
				Mt = ue.a.div("MoreWrapper", Nt.a),
				At = ue.a.button("MoreButton", Nt.a),
				Bt = ue.a.wrapped(V.l, "Subtext", Nt.a);
			class Dt extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						showAll: !1,
						value: ""
					}
				}
				componentDidUpdate(e, t) {
					e.api.new === St.a.pending && this.props.api.new === St.a.waitingForRequest && this.setState({
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
						add: r,
						padBottom: o,
						remove: i,
						list: c,
						language: d,
						label: m,
						title: u,
						subtext: p
					} = this.props, b = e ? c.length : 5;
					return a.a.createElement("div", {
						className: Object(l.a)(Nt.a.container, n, {
							[Nt.a.mPadBottom]: !!o
						})
					}, a.a.createElement(It, null, u), void 0 !== p && a.a.createElement(Bt, null, p), a.a.createElement(O.a, {
						buttonText: "add",
						disabled: s.new === St.a.pending,
						label: m,
						onClick: () => t && r(t),
						onChange: e => this.setState({
							value: e
						}),
						value: t
					}), a.a.createElement(Tt, null, c.slice(0, b).map(e => a.a.createElement(Ot, {
						disabled: s[e.name] === St.a.pending,
						key: e.name,
						name: e.name,
						onClick: () => i(e.name),
						img: e.icon_img,
						date: 1e3 * e.date,
						language: d
					})), c.length > Pt && !e ? a.a.createElement(Mt, null, a.a.createElement(At, {
						onClick: () => this.setState({
							showAll: !0
						})
					}, "SHOW ALL")) : null))
				}
			}
			var Rt = n("./src/reddit/components/Settings/PrivacyForm.m.less"),
				Lt = n.n(Rt);
			const Ut = ue.a.div("ListsWrapper", Lt.a),
				Ft = Object(o.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var Wt = Object(r.b)(Ft, (e, t) => ({
					addBlocked: t => e(Object(bt.h)(t)),
					addWhitelisted: t => e(Object(ht.g)(t)),
					removeWhitelisted: t => e(Object(ht.h)(t)),
					removeBlocked: t => e(Object(bt.g)(t)),
					saveChatSettings: t => e(Object(pt.c)(t))
				}))(e => {
					let {
						addBlocked: t,
						addWhitelisted: n,
						blocked: s,
						blockedApi: r,
						chatSettings: o,
						language: i,
						prefs: {
							acceptPrivateMessages: c
						},
						removeBlocked: l,
						removeWhitelisted: d,
						saveChatSettings: m,
						update: u,
						whitelist: p,
						whitelistApi: h
					} = e;
					return a.a.createElement(ne.a, null, a.a.createElement(te.b, null, b.fbt._("Chat & Messaging", null, {
						hk: "1hQy2z"
					})), a.a.createElement(Dt, {
						title: b.fbt._("People You’ve Blocked", null, {
							hk: "gHecT"
						}),
						subtext: b.fbt._("Blocked people can’t send you chat requests or private messages.", null, {
							hk: "1T35vT"
						}),
						label: b.fbt._("Block new user", null, {
							hk: "2Nv3pc"
						}),
						add: t,
						remove: l,
						list: s,
						language: i,
						api: r,
						padBottom: !0
					}), a.a.createElement(V.d, {
						label: b.fbt._("Who can send you chat requests", null, {
							hk: "4pTJIe"
						}),
						items: [ut.a.anybody, ut.a.account_age_30_days, ut.a.nobody],
						selected: o.invitePolicy,
						onClick: e => {
							m({
								invitePolicy: e
							})
						},
						id: "chatUserSettingsInvitePolicy"
					}), a.a.createElement(V.d, {
						label: b.fbt._("Who can send you private messages", null, {
							hk: "V2HXb"
						}),
						subtext: b.fbt._("Heads up—Reddit admins and moderators of communities you’ve joined can message you even if they’re not whitelisted.", null, {
							hk: "3fmM1O"
						}),
						items: [mt.a.Everyone, mt.a.Whitelisted],
						selected: c,
						onClick: e => u(e, "acceptPrivateMessages"),
						id: "acceptPrivateMessages"
					}), a.a.createElement(Ut, null, a.a.createElement(Dt, {
						title: b.fbt._("People You’ve Whitelisted", null, {
							hk: "22S3xn"
						}),
						subtext: b.fbt._("Whitelisted people can always send you private messages.", null, {
							hk: "3MTRrt"
						}),
						label: b.fbt._("ADD NEW USER TO WHITELIST", null, {
							hk: "1lqyIL"
						}),
						add: n,
						remove: d,
						list: p,
						language: i,
						api: h
					})))
				}),
				Ht = n("./src/reddit/components/Translated/index.tsx"),
				zt = n("./src/reddit/components/Settings/Creator/Header/index.m.less"),
				Gt = n.n(zt);
			const Vt = e => "economy.settings.creator.header.".concat(e);

			function Jt(e) {
				return a.a.createElement("header", {
					className: Object(l.a)(Gt.a.container, e.className)
				}, a.a.createElement("div", {
					className: Gt.a.title
				}, a.a.createElement(Ht.a, {
					msgId: Vt("title")
				})), a.a.createElement("div", {
					className: Gt.a.tag
				}, a.a.createElement(Ht.a, {
					msgId: Vt("tag")
				})))
			}
			var Zt = n("./src/app/strings/index.ts"),
				Kt = n("./src/reddit/constants/disclaimers.ts"),
				Qt = n("./src/reddit/contexts/ApiContext.tsx"),
				qt = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				Yt = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				Xt = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				$t = n("./src/reddit/selectors/economics.ts"),
				en = n("./src/reddit/components/Settings/Creator/StripeConnect/index.m.less"),
				tn = n.n(en);
			const nn = e => "economy.settings.creator.stripeConnect.".concat(e);
			var sn;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected"
			}(sn || (sn = {}));
			class an extends a.a.Component {
				constructor(e) {
					super(e), this.initiateStripeConnect = async () => {
						const e = await Object(qt.e)(this.props.apiContext());
						e.ok ? window.location.href = e.body.connectUrl : this.props.onError(e.error)
					};
					let t = sn.Default;
					e.connectCode && e.connectStateToken && (t = sn.Connecting), e.stripeConnected && (t = sn.Connected), this.state = {
						buttonState: t
					}
				}
				async componentDidMount() {
					if (this.props.connectCode && this.props.connectStateToken && this.state.buttonState !== sn.Connected) {
						const e = await Object(qt.a)(this.props.apiContext(), {
							code: this.props.connectCode,
							stateToken: this.props.connectStateToken
						});
						e.ok ? this.setState({
							buttonState: sn.Connected
						}) : (this.props.onError(e.error), this.setState({
							buttonState: sn.Default
						}))
					}
				}
				render() {
					const {
						className: e,
						language: t
					} = this.props, {
						buttonState: n
					} = this.state;
					let s = Object(Zt.a)(this.props.language, nn("cta"));
					return n === sn.Connected && (s = Object(Zt.a)(t, nn("connected"))), n === sn.Connecting && (s = Object(Zt.a)(t, nn("connecting"))), a.a.createElement("div", {
						className: e
					}, a.a.createElement(G.a, null, Object(Zt.a)(t, nn("header"))), a.a.createElement(V.j, {
						direction: "row",
						label: Object(Zt.a)(t, nn("title")),
						subtext: Object(Zt.a)(t, nn("description"))
					}, a.a.createElement("div", {
						className: tn.a.cta
					}, a.a.createElement(_.f, {
						className: tn.a.button,
						disabled: n !== sn.Default,
						onClick: this.initiateStripeConnect
					}, s), a.a.createElement("div", {
						className: tn.a.legal
					}, Object(Zt.a)(t, nn("legal")), a.a.createElement("a", {
						className: tn.a.legalLink,
						href: Kt.a,
						target: "_blank"
					}, Object(Zt.a)(t, nn("legalLink")))))), a.a.createElement("div", {
						className: tn.a.disclaimer
					}, a.a.createElement(Xt.a, {
						className: tn.a.icon
					}), Object(Zt.a)(t, nn("disclaimer"))))
				}
			}
			const rn = Object(o.c)({
					language: e => e.user.language,
					stripeConnected: $t.B
				}),
				on = Object(r.b)(rn, e => ({
					onError: t => e(Object(w.e)({
						duration: 5e3,
						kind: P.b.Error,
						text: Object(Yt.a)(t)
					}))
				}));
			var cn = Object(Qt.b)(on(an)),
				ln = n("./src/reddit/components/Settings/Creator/index.m.less"),
				dn = n.n(ln),
				mn = function(e) {
					return a.a.createElement(ne.a, null, a.a.createElement("div", null, a.a.createElement(Jt, {
						className: dn.a.header
					}), a.a.createElement(cn, {
						connectCode: e.stripeConnectCode,
						connectStateToken: e.stripeConnectStateToken
					})))
				},
				un = (n("./node_modules/core-js/modules/es6.array.sort.js"), n("./src/lib/listingSort/index.ts")),
				pn = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				bn = n("./src/higherOrderComponents/asTooltip.tsx"),
				hn = n("./src/reddit/actions/tooltip.ts"),
				gn = n("./src/reddit/controls/Dropdown/index.tsx"),
				fn = n("./src/reddit/controls/Dropdown/Row.tsx"),
				vn = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Cn = n("./src/reddit/selectors/tooltip.ts"),
				xn = n("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				yn = n.n(xn);
			const _n = Object(bn.a)(gn.a),
				En = Object(o.c)({
					isDropdownOpen: (e, t) => Object(Cn.b)(t.dropdownId)(e)
				});
			class kn extends a.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => a.a.createElement(fn.b, {
						children: e.contentJsx || e.icon,
						className: yn.a.dropdownRow,
						displayText: e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}), this.renderDropdownItem = (e, t) => a.a.createElement(fn.b, {
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
						selectedKey: r
					} = this.props, o = t.find(e => e.key === r) || t[0];
					return a.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(l.a)(yn.a.container, e.className),
						onClick: this.onToggleDropdown
					}, a.a.createElement("div", {
						className: yn.a.labelWrapper
					}, n(o), a.a.createElement(vn.b, null)), a.a.createElement(_n, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => s(e, r === e.key))))
				}
			}
			var wn = Object(r.b)(En, (e, t) => ({
					openDropdown: () => {
						e(Object(hn.h)({
							tooltipId: t.dropdownId
						}))
					}
				}))(kn),
				On = n("./src/reddit/constants/listingSorts.ts");
			const Sn = [d.O.HOT, d.O.NEW, d.O.TOP, d.O.RISING];
			var jn = e => {
				const {
					dropdownId: t
				} = e, n = Sn.map(e => ({
					key: e,
					displayText: Object(On.a)(e),
					icon: a.a.createElement(pn.a, {
						sort: e
					})
				}));
				return a.a.createElement(wn, {
					dropdownId: t,
					items: n,
					onSelect: t => e.onChange(t.key),
					selectedKey: e.sort
				})
			};
			const Nn = [d.Rb.HOUR, d.Rb.DAY, d.Rb.WEEK, d.Rb.MONTH, d.Rb.YEAR, d.Rb.ALL];
			var Pn = e => {
					const {
						dropdownId: t
					} = e, n = Nn.map(e => ({
						key: e,
						displayText: Object(On.b)(e)
					}));
					return a.a.createElement(wn, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.sort
					})
				},
				In = n("./src/reddit/components/Settings/SortSetting/index.m.less"),
				Tn = n.n(In);
			const Mn = ue.a.div("Separator", Tn.a);
			class An extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onListingSortChange = e => {
						const {
							timeSort: t
						} = Object(un.d)(this.props.fullSort);
						this.props.onChange(Object(un.c)({
							sort: e,
							timeSort: t
						}))
					}, this.onTimeSortChange = e => {
						const {
							sort: t
						} = Object(un.d)(this.props.fullSort);
						this.props.onChange(Object(un.c)({
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
						dropdownPrefix: s
					} = this.props, {
						sort: r,
						timeSort: o
					} = Object(un.d)(t);
					return a.a.createElement(V.c, {
						className: e,
						label: b.fbt._("Community content sort", null, {
							hk: "Ubmt1"
						}),
						subtext: b.fbt._("Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.", null, {
							hk: "2a2SDC"
						})
					}, a.a.createElement("div", {
						className: Tn.a.wrapper
					}, a.a.createElement(jn, {
						onChange: this.onListingSortChange,
						dropdownId: s + "-listing",
						sort: r,
						language: n
					}), o && a.a.createElement(a.a.Fragment, null, a.a.createElement(Mn, null), a.a.createElement(Pn, {
						onChange: this.onTimeSortChange,
						dropdownId: s + "-time",
						sort: o,
						language: n
					}))))
				}
			}
			var Bn = n("./src/reddit/constants/postLayout.ts"),
				Dn = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				Rn = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				Ln = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				Un = n("./src/reddit/controls/Dropdown/index.m.less"),
				Fn = n.n(Un);
			const Wn = {
				[Bn.d.Card]: Ln.a,
				[Bn.d.Classic]: Dn.a,
				[Bn.d.Compact]: Rn.a
			};
			var Hn = e => {
				const t = Wn[e.layout];
				return a.a.createElement(t, {
					className: Fn.a.iconStyles
				})
			};
			const zn = [Bn.d.Card, Bn.d.Classic, Bn.d.Compact];
			var Gn = e => {
					const {
						dropdownId: t
					} = e, n = zn.map(e => ({
						key: e,
						displayText: e,
						icon: a.a.createElement(Hn, {
							layout: e
						})
					}));
					return a.a.createElement(wn, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.layout
					})
				},
				Vn = n("./src/reddit/components/Settings/ViewSetting/index.m.less"),
				Jn = n.n(Vn);
			class Zn extends a.a.PureComponent {
				render() {
					const {
						className: e,
						dropdownPrefix: t,
						label: n,
						subtext: s,
						layout: r
					} = this.props;
					return a.a.createElement(V.c, {
						className: e,
						label: n,
						subtext: s
					}, a.a.createElement("div", {
						className: Jn.a.wrapper
					}, a.a.createElement(Gn, {
						onChange: this.props.onChange,
						dropdownId: t + "-listing",
						layout: r
					})))
				}
			}
			var Kn = n("./src/reddit/components/Settings/FeedForm.m.less"),
				Qn = n.n(Kn),
				qn = e => {
					let {
						isResponsiveSettingsEnabled: t,
						language: n,
						prefs: {
							autoplayVideo: s,
							hideNSFW: r,
							openPostInNewTab: o,
							over18: i,
							privateFeeds: c,
							rememberCommunitySort: d,
							sort: m,
							stylesEnabled: u,
							useMarkdown: p,
							layout: h,
							rememberCommunityLayout: g
						},
						update: f
					} = e;
					const v = Object(l.a)({
						[Qn.a["m-responsive"]]: t
					});
					return a.a.createElement(ne.a, null, a.a.createElement(te.b, null, b.fbt._("Feed settings", null, {
						hk: "2R5BB"
					})), a.a.createElement(G.a, null, b.fbt._("Content Preferences", null, {
						hk: "76osn"
					})), a.a.createElement(V.n, {
						on: i,
						onClick: () => f(!i, "over18"),
						label: b.fbt._("Adult content", null, {
							hk: "4les43"
						}),
						subtext: b.fbt._("Enable to view adult and NSFW (not safe for work) content in your feed and search results", null, {
							hk: "Ni5mW"
						})
					}), a.a.createElement(V.n, {
						disabled: !i,
						label: b.fbt._("Safe browsing mode", null, {
							hk: "CeEkN"
						}),
						on: !!i && r,
						onClick: () => f(!r, "hideNSFW"),
						subtext: b.fbt._("Blur thumbnails and media preview for anything labeled NSFW (not safe for work)", null, {
							hk: "403VoR"
						})
					}), a.a.createElement(V.n, {
						on: s,
						onClick: () => f(!s, "autoplayVideo"),
						label: b.fbt._("Autoplay media", null, {
							hk: "4huarG"
						}),
						subtext: b.fbt._("Play videos and gifs automatically when in the viewport", null, {
							hk: "1YYoIq"
						})
					}), a.a.createElement(V.n, {
						on: !!u,
						onClick: () => f(!u, "stylesEnabled"),
						label: b.fbt._("Community themes", null, {
							hk: "8TpCA"
						}),
						subtext: b.fbt._("Use custom themes for all communities. You can also turn this off on a per community basis.", null, {
							hk: "2EVyTQ"
						})
					}), a.a.createElement(An, {
						className: v,
						dropdownPrefix: "subreddit-sort-setting",
						language: n,
						fullSort: m,
						onChange: e => {
							m !== e && f(e, "sort")
						}
					}), a.a.createElement(V.n, {
						className: v,
						indent: !0,
						on: !!d,
						onClick: () => f(!d, "rememberCommunitySort"),
						label: b.fbt._("Remember per community", null, {
							hk: "44RHeL"
						}),
						subtext: b.fbt._("Enable if you would like each community to remember and use the last content sort you selected for that community.", null, {
							hk: "2zgrQz"
						})
					}), a.a.createElement(Zn, {
						className: v,
						dropdownPrefix: "subreddit-view-setting",
						label: b.fbt._("Global content view", null, {
							hk: "1tWTJK"
						}),
						layout: h,
						onChange: e => f(e, "layout"),
						subtext: b.fbt._("Choose how you would like content displayed in feeds. This control is also found above your feed.", null, {
							hk: "1NyVGg"
						})
					}), a.a.createElement(V.n, {
						className: v,
						on: !!g,
						onClick: () => f(!g, "rememberCommunityLayout"),
						label: b.fbt._("Remember per community", null, {
							hk: "42Ianh"
						}),
						subtext: b.fbt._("Enable if you would like each community to remember and use the last content view you selected for that community.", null, {
							hk: "3fxqrV"
						}),
						indent: !0
					}), a.a.createElement(V.n, {
						className: v,
						on: !!o,
						onClick: () => f(!o, "openPostInNewTab"),
						label: b.fbt._("Open posts in new tab", null, {
							hk: "eOvQi"
						}),
						subtext: b.fbt._("Enable to always open posts in a new tab", null, {
							hk: "l3HZX"
						})
					}), a.a.createElement(G.a, {
						className: v
					}, b.fbt._("Post Preferences", null, {
						hk: "35wQ1I"
					})), a.a.createElement(V.n, {
						className: v,
						on: !!p,
						onClick: () => f(!p, "useMarkdown"),
						label: b.fbt._("Default to markdown", null, {
							hk: "1gcz1a"
						}),
						subtext: b.fbt._("When posting, your input will default to markdown text instead of fancy pants", null, {
							hk: "3kF1IP"
						})
					}), c && a.a.createElement(a.a.Fragment, null, a.a.createElement(G.a, null, b.fbt._("RSS Feeds", null, {
						hk: "2xkYfd"
					})), a.a.createElement(V.f, {
						label: b.fbt._("List of your RSS feeds", null, {
							hk: "PR8PD"
						}),
						subtext: b.fbt._("List of links to private RSS feeds so that you can get listings of your content", null, {
							hk: "2M02AZ"
						}),
						link: "".concat(le.a.redditUrl, "/prefs/feeds"),
						last: !0
					})))
				},
				Yn = n("./src/reddit/actions/notifications/constants.ts"),
				Xn = n("./src/reddit/actions/notifications/loader.ts"),
				$n = n("./src/reddit/actions/notifications/preferences.ts"),
				es = n("./src/reddit/actions/notifications/state.ts"),
				ts = n("./src/reddit/actions/notifications/utils.ts"),
				ns = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ss = n("./src/reddit/helpers/localStorage/index.ts"),
				as = n("./src/reddit/helpers/trackers/notifications.ts"),
				rs = n("./src/reddit/selectors/meta.ts"),
				os = n("./src/reddit/selectors/notificationPrefs.ts"),
				is = n("./src/higherOrderComponents/asModal/index.tsx"),
				cs = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ls = n("./src/reddit/constants/keycodes.ts"),
				ds = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				ms = n("./src/reddit/constants/colors.ts"),
				us = n("./src/reddit/icons/svgs/Notify/index.m.less"),
				ps = n.n(us);
			var bs = e => a.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 -1 23 20",
					className: Object(l.a)(ps.a.icon, e.className)
				}, a.a.createElement("g", {
					fillRule: "evenodd"
				}, a.a.createElement("polygon", {
					fill: "none",
					points: "0 20 20 20 20 .001 0 .001"
				}), a.a.createElement("path", {
					fill: "inherit",
					d: "M17.0066821,15.4208756 C17.3661858,15.7881442 17.1117467,16.4167476 16.6028685,16.4167476 L3.3720345,16.4167476 C2.86361308,16.4167476 2.60871716,15.7881442 2.9682209,15.4208756 L2.99106104,15.3975421 C3.81467634,14.5561376 4.27741749,13.4146649 4.27741749,12.2246585 L4.27741749,8.19170369 C4.27741749,5.37768868 6.24806442,3.03500952 8.85595115,2.52214012 C8.85275353,2.48713993 8.84544468,2.45307308 8.84544468,2.41667289 C8.84544468,1.77266945 9.35660693,1.25 9.98745148,1.25 C10.618296,1.25 11.1294583,1.77266945 11.1294583,2.41667289 C11.1294583,2.45307308 11.1221494,2.48713993 11.1189518,2.52214012 C13.7268385,3.03500952 15.6974855,5.37768868 15.6974855,8.19170369 L15.6974855,12.2246585 C15.6974855,13.4146649 16.1602266,14.5561376 16.9838419,15.3975421 L17.0066821,15.4208756 Z M9.98754284,18.75 C9.05109727,18.75 8.24758128,18.1736636 7.89492959,17.3499925 L12.0801561,17.3499925 C11.7275044,18.1736636 10.9239884,18.75 9.98754284,18.75 Z"
				}), a.a.createElement("circle", {
					cx: "18",
					cy: "3",
					r: "5",
					fill: e.isUnread ? "white" : "none"
				}), a.a.createElement("circle", {
					cx: "18",
					cy: "3",
					r: "4",
					fill: e.isUnread ? ms.a.orangered : "none"
				}))),
				hs = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				gs = n("./src/reddit/layout/row/Inline/index.tsx"),
				fs = n("./src/reddit/components/Settings/DesktopNotifications/TurnOnDesktopNotificationsModal/index.m.less"),
				vs = n.n(fs);
			const {
				fbt: Cs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), xs = ue.a.wrapped(cs.m, "ModalText", vs.a);
			class ys extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === ls.a.Escape && this.props.onClose()
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
					} = this.props, t = Object(l.a)({
						[vs.a["m-responsive"]]: e
					});
					return a.a.createElement(cs.c, {
						className: t
					}, a.a.createElement(cs.g, null, a.a.createElement(cs.n, null, Cs._("Turn on Desktop Notifications", null, {
						hk: "dbEX1"
					}))), a.a.createElement(cs.j, null, a.a.createElement(xs, null, a.a.createElement(gs.a, {
						className: vs.a.row
					}, a.a.createElement("div", {
						className: vs.a.stepNumber
					}, "1"), Cs._("Click on{lockIcon}in your Chrome browser address bar", [Cs._param("lockIcon", a.a.createElement(ds.a, {
						className: vs.a.icon
					}))], {
						hk: "1fzz4J"
					})), a.a.createElement(gs.a, {
						className: vs.a.row
					}, a.a.createElement("div", {
						className: vs.a.stepNumber
					}, "2"), Cs._("Select{settingsIcon}site settings", [Cs._param("settingsIcon", a.a.createElement(hs.a, {
						className: vs.a.icon
					}))], {
						hk: "46Cjhq"
					})), a.a.createElement(gs.a, {
						className: vs.a.row
					}, a.a.createElement("div", {
						className: vs.a.stepNumber
					}, "3"), Cs._("Change{notifyIcon}notifications to 'Allow'", [Cs._param("notifyIcon", a.a.createElement(bs, {
						className: vs.a.notify
					}))], {
						hk: "1nkJPj"
					})))), a.a.createElement(cs.e, null, a.a.createElement(_.f, {
						onClick: this.props.onClose
					}, Cs._("Got it", null, {
						hk: "2PWXZB"
					}))))
				}
			}
			var _s = Object(is.a)(ys),
				Es = n("./src/reddit/components/Settings/DesktopNotifications/index.m.less"),
				ks = n.n(Es);
			const {
				fbt: ws
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Os = Object(o.c)({
				areNotificationsAvailable: e => {
					return Object(ts.a)(e) === Yn.f.NotificationsSupported
				},
				isChrome: rs.d,
				isFirefox: rs.f,
				isOpera: rs.g,
				preferences: os.d
			});
			class Ss extends a.a.Component {
				constructor(e) {
					super(e), this.lastNotificationsState = es.a, this.onNotificationsStateChange = e => {
						const {
							isEnabled: t,
							permission: n
						} = e;
						let s = !1;
						t !== this.lastNotificationsState.isEnabled && (s = t !== this.state.desktopNotifications, t && ss.F(t)), this.setState(e => ({
							desktopNotifications: s ? t : e.desktopNotifications,
							notificationPermission: n
						})), this.lastNotificationsState = e
					}, this.trackPreferenceToggled = (e, t) => {
						this.props.sendEvent(Object(as.e)(e, t))
					}, this.setDesktopNotificationsLocalValue = e => {
						this.setState({
							desktopNotifications: e
						}, () => {
							this.trackPreferenceToggled("desktop_notification_permissions", e), ss.F(e)
						})
					}, this.handleDesktopNotificationsClick = () => {
						if (this.state.desktopNotifications) this.setDesktopNotificationsLocalValue(!1), this.props.unsubscribeFromPNs();
						else switch (this.state.notificationPermission) {
							case Yn.a.Denied:
								this.setState({
									showTurnOnDesktopNotificationsModal: !0
								});
								break;
							case Yn.a.Granted:
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
						notificationPermission: Yn.a.Denied,
						showTurnOnDesktopNotificationsModal: !1
					}
				}
				componentDidMount() {
					this.setState({
						areNotificationsAvailable: this.props.areNotificationsAvailable
					}), Object(es.d)(this.onNotificationsStateChange)
				}
				componentWillUnmount() {
					Object(es.e)(this.onNotificationsStateChange)
				}
				async updatePreferences(e) {
					this.props.setPreferences(Object.assign({}, this.props.preferences, e))
				}
				render() {
					const {
						isChrome: e,
						isFirefox: t,
						isOpera: n,
						isResponsiveSettingsEnabled: r,
						preferences: o
					} = this.props, i = Object(l.a)({
						[ks.a["m-desktop"]]: r
					}), c = Object(l.a)({
						[ks.a["m-mobile"]]: r
					}), d = Object(l.a)({
						[ks.a.ResponsiveTooltip]: r
					});
					return a.a.createElement(s.Fragment, null, a.a.createElement(G.a, null, ws._("Desktop notifications", null, {
						hk: "157bCi"
					})), a.a.createElement(V.n, {
						disabled: !(e || t || n) || !this.state.areNotificationsAvailable,
						label: a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
							className: i
						}, ws._("Desktop notifications", null, {
							hk: "4ameFp"
						})), r && a.a.createElement("span", {
							className: c
						}, ws._("Browser notifications", null, {
							hk: "4wdcLl"
						}))),
						last: !0,
						on: this.state.desktopNotifications,
						onClick: this.handleDesktopNotificationsClick,
						subtext: ws._("See your notifications on the corner of your computer screen, even when Reddit is closed", null, {
							hk: "1PbYt7"
						}),
						tooltip: e || t || n ? "" : ws._("Only available with Chrome, Firefox, and Opera", null, {
							hk: "1TLRmK"
						}),
						tooltipContentClassName: d
					}), a.a.createElement(G.a, null, ws._("Push notifications", null, {
						hk: "3cyZhe"
					})), a.a.createElement(V.n, {
						label: ws._("Private messages", null, {
							hk: "2oRGiA"
						}),
						on: o.privateMessages,
						onClick: this.handlePrivateMessagesClick,
						subtext: ws._("Receive notifications for private messages", null, {
							hk: "1zstrl"
						})
					}), a.a.createElement(V.n, {
						label: ws._("Comments on your posts", null, {
							hk: "peb1V"
						}),
						on: o.postReplies,
						onClick: this.handlePostRepliesClick,
						subtext: ws._("Receive notifications for comments to your posts", null, {
							hk: "2Ovke1"
						})
					}), a.a.createElement(V.n, {
						label: ws._("Replies to your comments", null, {
							hk: "38GGYX"
						}),
						on: o.commentReplies,
						onClick: this.handleCommentRepliesClick,
						subtext: ws._("Receive notifications for replies to your comments", null, {
							hk: "erzOR"
						})
					}), a.a.createElement(V.n, {
						label: ws._("Threaded comment replies", null, {
							hk: "3TFG1U"
						}),
						on: o.threadReplies,
						onClick: this.handleThreadRepliesClick,
						subtext: ws._("Receive notifications for comment replies that aren't directly to you, but within comments chains that you participated in", null, {
							hk: "3fiCzE"
						})
					}), a.a.createElement(V.n, {
						label: ws._("New Comment Activity", null, {
							hk: "4n1f2M"
						}),
						on: o.topLevelComment,
						onClick: this.handleTopLevelCommentClick,
						subtext: ws._("Receive notifications for new comments on posts you've been active in", null, {
							hk: "2jO6KJ"
						})
					}), a.a.createElement(V.n, {
						label: ws._("Mentions of u/username", null, {
							hk: "Ti1Kh"
						}),
						on: o.usernameMentions,
						onClick: this.handleUsernameMentionsClick,
						subtext: ws._("Receive notifications for mentions of your username", null, {
							hk: "2KcTCV"
						})
					}), a.a.createElement(V.n, {
						label: ws._("Chat messages", null, {
							hk: "3daNg7"
						}),
						on: o.chatMessages,
						onClick: this.handleChatMessagesClick,
						subtext: ws._("Receive notifications when a user chats with you", null, {
							hk: "YLNTD"
						})
					}), a.a.createElement(V.n, {
						label: ws._("Chat requests", null, {
							hk: "1VYdRU"
						}),
						on: o.chatRequests,
						onClick: this.handleChatRequestsClick,
						subtext: ws._("Receive notifications when a user sends a chat request to you", null, {
							hk: "Bdtpo"
						})
					}), a.a.createElement(V.n, {
						label: ws._("Trending posts", null, {
							hk: "4nMMXP"
						}),
						on: o.trendingPosts,
						onClick: this.handleTrendingPostsClick,
						subtext: ws._("Receive notifications for trending posts from your favorite communities", null, {
							hk: "g79tj"
						})
					}), a.a.createElement(V.n, {
						label: ws._("Community recommendations", null, {
							hk: "SBOr5"
						}),
						on: o.communityRecommendations,
						onClick: this.handleCommunityRecommendationsClick,
						subtext: ws._("Send me recommendations based on my activity", null, {
							hk: "2KDRYz"
						})
					}), a.a.createElement(V.n, {
						label: ws._("Upvotes on your posts", null, {
							hk: "14XZUW"
						}),
						on: o.upvotedPosts,
						onClick: this.handleUpvotedPostsClick,
						subtext: ws._("Notify me when my post is upvoted", null, {
							hk: "24mEWd"
						})
					}), a.a.createElement(V.n, {
						label: ws._("Upvotes on your comments", null, {
							hk: "2OoH8o"
						}),
						on: o.upvotedComments,
						onClick: this.handleUpvotedCommentsClick,
						subtext: ws._("Notify me when my comment is upvoted", null, {
							hk: "94wwQ"
						})
					}), a.a.createElement(V.n, {
						label: ws._("Relevant Live Events", null, {
							hk: "3o21Vp"
						}),
						on: o.liveEvent,
						onClick: this.handleLiveEventClick,
						subtext: ws._("Notify me during live events", null, {
							hk: "1h0OF3"
						})
					}), a.a.createElement(V.n, {
						label: ws._("New followers", null, {
							hk: "32VNj1"
						}),
						last: !0,
						on: o.userNewFollowers,
						onClick: this.handleUserNewFollowersClick,
						subtext: ws._("Notify me when another user follows me", null, {
							hk: "26um8p"
						})
					}), this.state.showTurnOnDesktopNotificationsModal && a.a.createElement(_s, {
						isResponsiveSettingsEnabled: r,
						onClose: this.handleTurnOnDesktopNotificationsModalClose,
						overlayClassName: Object(l.a)({
							[ks.a.ResponsiveOverlay]: r
						})
					}))
				}
			}
			var js = Object(r.b)(Os, e => ({
					requestNotificationPermission: () => Object(Xn.a)().then(t => e(t.requestNotificationsPermissions(!0, !0))),
					setPreferences: t => e(Object($n.b)(t)),
					subscribeForPNs: () => Object(Xn.a)().then(t => e(t.subscribeForPNs(!0))),
					unsubscribeFromPNs: () => Object(Xn.a)().then(t => e(t.unsubscribeFromPNs(!0)))
				}))(Object(ns.c)(Ss)),
				Ns = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
					}
					return n
				},
				Ps = e => {
					var {
						isResponsiveSettingsEnabled: t,
						language: n,
						prefs: {
							collapseReadMessages: s,
							emailUnsubscribe: r,
							emailDigests: o,
							emailUnreadMessages: i,
							markMessagesRead: c,
							sendWelcomeMessages: l,
							showMessagesInInbox: d,
							showUsernameMentionNotifications: m
						},
						update: u
					} = e;
					Ns(e, ["isResponsiveSettingsEnabled", "language", "prefs", "update"]);
					return a.a.createElement(ne.a, null, a.a.createElement(te.b, null, b.fbt._("Notifications settings", null, {
						hk: "rYOeb"
					})), a.a.createElement(G.a, null, b.fbt._("inbox notification", null, {
						hk: "4a0OKQ"
					})), a.a.createElement(V.n, {
						on: d,
						onClick: () => u(!d, "showMessagesInInbox"),
						label: b.fbt._("Conversations in inbox", null, {
							hk: "4b2411"
						}),
						subtext: b.fbt._("Display conversations within the messages section of your inbox", null, {
							hk: "3BrrbD"
						})
					}), a.a.createElement(V.n, {
						on: c,
						onClick: () => u(!c, "markMessagesRead"),
						label: b.fbt._("Mark as read in inbox", null, {
							hk: "265UNW"
						}),
						subtext: b.fbt._("Mark messages as read when I open my inbox", null, {
							hk: "ER5dS"
						})
					}), a.a.createElement(V.n, {
						on: s,
						onClick: () => u(!s, "collapseReadMessages"),
						label: b.fbt._("Collapse read messages", null, {
							hk: "2AJOGy"
						}),
						subtext: b.fbt._("Read messages will automatically be collapsed", null, {
							hk: "JKb22"
						})
					}), a.a.createElement(V.n, {
						on: !!m,
						onClick: () => u(!m, "showUsernameMentionNotifications"),
						label: b.fbt._("Username mentions", null, {
							hk: "3enoZY"
						}),
						subtext: b.fbt._("Notify me when my username is mentioned in comment", null, {
							hk: "Qn9c"
						})
					}), a.a.createElement(V.n, {
						on: !!l,
						onClick: () => u(!l, "sendWelcomeMessages"),
						label: b.fbt._("Mod welcome messages", null, {
							hk: "3T7aG9"
						}),
						subtext: b.fbt._("Receive welcome messages from moderators when I join their community", null, {
							hk: "1HKTXz"
						}),
						last: !0
					}), a.a.createElement(G.a, null, b.fbt._("email notification", null, {
						hk: "4oynG5"
					})), a.a.createElement(V.n, {
						on: !r,
						onClick: () => u(!r, "emailUnsubscribe"),
						label: b.fbt._("Email notifications", null, {
							hk: "2KF2g2"
						}),
						subtext: b.fbt._("If turned off, you will still receive administrative emails", null, {
							hk: "3eP8Pj"
						})
					}), a.a.createElement(V.n, {
						disabled: r,
						on: !r && i,
						onClick: () => u(!i, "emailUnreadMessages"),
						label: b.fbt._("Unread messages", null, {
							hk: "2HW2aS"
						}),
						subtext: b.fbt._("Receive unread messages via email", null, {
							hk: "15wibQ"
						}),
						indent: !0
					}), a.a.createElement(V.n, {
						disabled: r,
						on: !r && !!o,
						onClick: () => u(!o, "emailDigests"),
						label: b.fbt._("Email digests", null, {
							hk: "1vedUs"
						}),
						subtext: b.fbt._("Receive periodic emails with the top posts from your favorite communities", null, {
							hk: "2gOxhp"
						}),
						indent: !0,
						last: !0
					}), a.a.createElement(js, {
						isResponsiveSettingsEnabled: t
					}))
				},
				Is = n("./src/reddit/components/Settings/Payments/Header/index.m.less"),
				Ts = n.n(Is);
			const Ms = e => "economy.settings.payments.header.".concat(e);

			function As(e) {
				return a.a.createElement("header", {
					className: Object(l.a)(Ts.a.container, e.className)
				}, a.a.createElement("div", {
					className: Ts.a.title
				}, a.a.createElement(Ht.a, {
					msgId: Ms("title")
				})), a.a.createElement("div", {
					className: Ts.a.description
				}, a.a.createElement(Ht.a, {
					msgId: Ms("description")
				})))
			}
			var Bs = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts"),
				Ds = n("./src/reddit/models/Payments/index.ts"),
				Rs = n("./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less"),
				Ls = n.n(Rs);
			const Us = e => "economy.settings.payments.paymentMethods.".concat(e);
			class Fs extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						paymentsBeingRemoved: {}
					}, this.removePayment = async e => {
						this.setState(t => ({
							paymentsBeingRemoved: Object.assign({}, t.paymentsBeingRemoved, {
								[e.id]: !0
							})
						}));
						const t = e.type === Ds.b.SavedStripe ? await Object(qt.b)(this.props.apiContext(), e.id) : await Object(qt.c)(this.props.apiContext(), e.id);
						t.ok ? this.props.onRemovePayment(e) : this.props.onError(t.error), this.setState(t => ({
							paymentsBeingRemoved: Object.assign({}, t.paymentsBeingRemoved, {
								[e.id]: !1
							})
						}))
					}
				}
				render() {
					return a.a.createElement("div", {
						className: this.props.className
					}, a.a.createElement(G.a, null, Object(Zt.a)(this.props.language, Us("title"))), this.props.savedPayments.map(e => {
						const t = !!this.state.paymentsBeingRemoved[e.id];
						return a.a.createElement("div", {
							className: Ls.a.payment
						}, a.a.createElement("div", {
							className: Ls.a.paymentDisplay
						}, a.a.createElement(ds.a, {
							className: Ls.a.lock
						}), e.display), a.a.createElement(_.n, {
							disabled: t,
							onClick: () => this.removePayment(e)
						}, Object(Zt.a)(this.props.language, Us(t ? "removing" : "remove"))))
					}), !this.props.savedPayments.length && a.a.createElement("div", {
						className: Ls.a.noSavedPayment
					}, Object(Zt.a)(this.props.language, Us("none"))))
				}
			}
			const Ws = Object(o.c)({
					savedPayments: $t.t,
					language: e => e.user.language
				}),
				Hs = Object(r.b)(Ws, e => ({
					onError: t => e(Object(w.e)({
						duration: 5e3,
						kind: P.b.Error,
						text: Object(Yt.a)(t)
					})),
					onRemovePayment: t => {
						t.type === Ds.b.SavedStripe && e(Object(Bs.a)({
							cardId: t.id
						})), t.type === Ds.b.SavedPayPal && e(Object(Bs.e)({
							sourceId: t.id
						}))
					}
				}));
			var zs = Object(Qt.b)(Hs(Fs)),
				Gs = n("./src/reddit/components/Settings/Payments/index.m.less"),
				Vs = n.n(Gs),
				Js = () => a.a.createElement(ne.a, null, a.a.createElement(As, {
					className: Vs.a.header
				}), a.a.createElement(zs, null)),
				Zs = n("./src/reddit/components/Settings/PremiumForm.tsx");
			const Ks = ue.a.span("SubheaderLink", Lt.a),
				Qs = ue.a.button("GenerateBackupCodesButton", Lt.a),
				qs = ue.a.wrapped(V.f, "ThirdPartyAuth", Lt.a),
				Ys = Object(o.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var Xs = Object(r.b)(Ys, (e, t) => ({
					addBlocked: t => e(Object(bt.h)(t)),
					addWhitelisted: t => e(Object(ht.g)(t)),
					removeWhitelisted: t => e(Object(ht.h)(t)),
					removeBlocked: t => e(Object(bt.g)(t)),
					saveChatSettings: t => e(Object(pt.c)(t)),
					enable2FA: () => e(Object(v.d)()),
					disable2FA: () => e(Object(v.c)()),
					generateBackupCodes: () => e(Object(v.a)())
				}))(e => {
					let {
						addBlocked: t,
						addWhitelisted: n,
						blocked: s,
						blockedApi: r,
						chatSettings: o,
						prefs: {
							acceptPrivateMessages: i,
							allowClickTracking: c,
							hideFromRobots: d,
							activityRelevantAds: m,
							loginOtpEnabled: u,
							thirdPartyDataPersonalizedAds: p,
							thirdPartySiteDataPersonalizedAds: h,
							thirdPartySiteDataPersonalizedContent: g
						},
						enable2FA: f,
						disable2FA: v,
						generateBackupCodes: C,
						isResponsiveSettingsEnabled: x,
						removeBlocked: y,
						removeWhitelisted: _,
						saveChatSettings: E,
						update: k,
						whitelist: w,
						whitelistApi: O
					} = e;
					return a.a.createElement(ne.a, null, a.a.createElement(te.b, null, b.fbt._("Privacy & Security", null, {
						hk: "2az3xN"
					})), a.a.createElement(te.a, null, b.fbt._("Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you. To learn more, visit our {=Privacy & Security FAQs} .", [b.fbt._param("=Privacy & Security FAQs", a.a.createElement(Ks, null, b.fbt._("{=Privacy & Security FAQs}", [b.fbt._param("=Privacy & Security FAQs", a.a.createElement("a", {
						href: le.a.redditHelpUrl.privacyQuestions,
						rel: "noopener noreferrer",
						target: "_blank"
					}, b.fbt._("Privacy & Security FAQs", null, {
						hk: "4qvhC1"
					})))], {
						hk: "2rwJJE"
					})))], {
						hk: "3appHO"
					})), a.a.createElement(G.a, null, b.fbt._("Privacy", null, {
						hk: "30eaw9"
					})), a.a.createElement(V.n, {
						on: !d,
						onClick: () => k(!d, "hideFromRobots"),
						label: b.fbt._("Show up in search results", null, {
							hk: "3TWi4z"
						}),
						subtext: b.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
							hk: "4tnz3n"
						})
					}), a.a.createElement(V.n, {
						on: c,
						onClick: () => k(!c, "allowClickTracking"),
						label: b.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
							hk: "21vbvn"
						}),
						subtext: b.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
							hk: "DnCX0"
						})
					}), a.a.createElement(V.n, {
						on: m,
						onClick: () => k(!m, "activityRelevantAds"),
						label: b.fbt._("Personalize ads based on your Reddit activity", null, {
							hk: "OqV13"
						}),
						subtext: b.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
							hk: "4C7zO1"
						})
					}), a.a.createElement(V.n, {
						on: p,
						onClick: () => k(!p, "thirdPartyDataPersonalizedAds"),
						label: b.fbt._("Personalize ads based on information from our partners", null, {
							hk: "4pLCAq"
						}),
						subtext: b.fbt._("Allow us to use information that our advertising partners send us to show you better ads.", null, {
							hk: "37eGRC"
						})
					}), a.a.createElement(V.n, {
						on: h,
						onClick: () => k(!h, "thirdPartySiteDataPersonalizedAds"),
						label: b.fbt._("Personalize ads based on your activity with our partners", null, {
							hk: "3uQVuS"
						}),
						subtext: b.fbt._("Allow us to use your interactions with sites and apps we partner with to show you better ads.", null, {
							hk: "2T8SXc"
						})
					}), a.a.createElement(V.n, {
						on: g,
						onClick: () => k(!g, "thirdPartySiteDataPersonalizedContent"),
						label: b.fbt._("Personalize recommendations based on your activity with our partners", null, {
							hk: "2D9ITr"
						}),
						subtext: b.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
							hk: "1e91Vl"
						}),
						last: !0
					}), a.a.createElement(G.a, null, b.fbt._("Advanced security", null, {
						hk: "3H7FJN"
					})), a.a.createElement(V.n, {
						on: u,
						onClick: () => u ? v() : f(),
						label: b.fbt._("Use two-factor authentication", null, {
							hk: "2OxNGe"
						}),
						subtext: a.a.createElement(a.a.Fragment, null, b.fbt._("Help protect your account (even if someone gets your password) by requiring a verification code and a password to log in.", null, {
							hk: "1LLqPh"
						}), u && a.a.createElement(a.a.Fragment, null, " ", b.fbt._("Lost access to your authenticator app?", null, {
							hk: "2x6g0Y"
						}), " ", a.a.createElement(Qs, {
							type: "button",
							onClick: () => C()
						}, b.fbt._("Get your backup codes", null, {
							hk: "4fp3Xg"
						})), "."))
					}), a.a.createElement(qs, {
						className: Object(l.a)({
							[Lt.a["m-responsive"]]: x
						}),
						label: b.fbt._("Manage third-party app authorization", null, {
							hk: "3J65so"
						}),
						link: "".concat(le.a.redditUrl, "/prefs/apps"),
						last: !0
					}))
				}),
				$s = n("./src/reddit/actions/preferences.ts"),
				ea = n("./src/reddit/components/Loader/index.m.less"),
				ta = n.n(ea);
			class na extends a.a.Component {
				render() {
					const {
						isLoading: e,
						render: t,
						renderLoading: n,
						loaderSize: s
					} = this.props;
					return e ? n ? n() : a.a.createElement(Me.a, {
						center: !0,
						className: ta.a.loadingIcon,
						sizePx: s || 10
					}) : t()
				}
			}
			var sa = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				aa = n("./src/reddit/selectors/structuredStyles.ts"),
				ra = n("./src/reddit/selectors/subredditSettings.ts"),
				oa = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				ia = n("./src/reddit/components/Settings/ProfileForm.m.less"),
				ca = n.n(ia);
			const {
				fbt: la
			} = n("./node_modules/fbt/lib/FbtPublic.js"), da = 30, ma = 200, ua = Object(o.a)(E.O, E.i, ra.a, E.gb, aa.o, ie.a, (e, t, n, s, a, r) => {
				const o = t && t.profileId,
					i = o && a[o] ? a[o].bannerBackgroundImage : void 0;
				return {
					awardedLastMonth: t.awardedLastMonth,
					contentVisible: n.contentVisible,
					currentUserName: Object(I.f)(t),
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
			}), pa = ue.a.div("ImageUploaderLayout", ca.a), ba = ue.a.wrapped(oa.a, "IconImageUploader", ca.a), ha = ue.a.wrapped(oa.a, "BannerImageUploader", ca.a), ga = ue.a.a("Link", ca.a), fa = ue.a.img("DummyBanner", ca.a), va = ue.a.wrapped(sa.a, "Preview", ca.a);
			class Ca extends a.a.Component {
				constructor(e) {
					super(e), this.onTitleChange = e => this.setState({
						title: e.target.value
					}), this.onDescriptionChange = e => this.setState({
						publicDescription: e.target.value
					}), this.switchNSFW = () => {
						this.updateProfile(!0, "over18"), this.props.sendEvent(Object(Ge.h)(this.props.over18))
					}, this.switchSFW = () => {
						this.updateProfile(!1, "over18"), this.props.toggleNSFWModal(), this.props.sendEvent(Object(Ge.h)(this.props.over18))
					}, this.onNSFWToggled = () => this.props.over18 ? this.props.toggleNSFWModal() : this.switchNSFW(), this.onContentVisibleChange = () => {
						this.updateProfile(!this.props.contentVisible, "contentVisible"), this.props.sendEvent(Object(Ge.c)(this.props.contentVisible))
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
						}), this.props.sendEvent(Object(Ge.a)(this.props.showActiveCommunities))
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
						isEmployee: r,
						isGold: o,
						isNSFWModalOpen: i,
						isResponsiveSettingsEnabled: c,
						over18: d,
						profileBanner: m,
						profileIcon: u,
						showActiveCommunities: p,
						toggleNSFWModal: b
					} = this.props, {
						isDeletingBanner: h,
						isDeletingIcon: g,
						profileBannerUploading: f,
						profileIconUploading: v,
						publicDescription: C,
						title: x
					} = this.state, _ = Object(l.a)({
						[ca.a["m-responsive"]]: c
					});
					return a.a.createElement(ne.a, {
						sidebar: a.a.createElement(va, {
							bannerBackgroundImage: m,
							editMode: !0,
							isEmployee: r,
							isDefaultIcon: !u || u.indexOf("avatar_default") > -1,
							isDeletingBanner: h,
							isDeletingIcon: g,
							isGold: o,
							isOverlay: !1,
							onDeleteBanner: this.onDeleteBanner,
							onDeleteIcon: this.onDeleteIcon,
							profileIcon: u,
							publicDescription: C,
							recentAwardings: e,
							title: x,
							url: s,
							username: n
						})
					}, a.a.createElement(te.b, null, la._("Customize profile", null, {
						hk: "1fenXK"
					})), a.a.createElement(G.a, null, la._("Profile Information", null, {
						hk: "3vzAUk"
					})), a.a.createElement(V.e, {
						label: la._("Display name (optional)", null, {
							hk: "DKmS8"
						}),
						onChange: this.onTitleChange,
						onBlur: () => {
							x !== this.props.title && this.updateProfile(x, "title")
						},
						placeholder: la._("Display name (optional)", null, {
							hk: "2BOHwt"
						}),
						maxChars: da,
						subtext: la._("Set a display name. This does not change your username.", null, {
							hk: "3xfh9M"
						}),
						value: x
					}), a.a.createElement(V.g, {
						label: la._("About (optional)", null, {
							hk: "1W7xvB"
						}),
						onChange: this.onDescriptionChange,
						onBlur: () => {
							C !== this.props.publicDescription && this.updateProfile(C, "publicDescription")
						},
						placeholder: la._("About (optional)", null, {
							hk: "3wFdhi"
						}),
						maxChars: ma,
						subtext: la._("A brief description of yourself shown on your profile.", null, {
							hk: "3gGUDy"
						}),
						value: C
					}), a.a.createElement(G.a, null, la._("Images", null, {
						hk: "38DOkf"
					})), a.a.createElement(V.j, {
						label: la._("Avatar and banner image", null, {
							hk: "16dJ39"
						}),
						subtext: la._("Images must be .png or .jpg format", null, {
							hk: "2YKVT5"
						}),
						direction: "column"
					}, a.a.createElement(pa, {
						className: _
					}, a.a.createElement(ba, {
						className: _,
						controlName: "profileIcon",
						isUploading: v,
						label: la._("Drag and Drop or Upload Avatar Image", null, {
							hk: "1il1jn"
						}),
						labelClassName: ca.a.Label,
						onChange: this.onIconChange
					}), a.a.createElement(ha, {
						className: _,
						controlName: "profileBanner",
						isUploading: f,
						label: la._("Drag and Drop or Upload Banner Image", null, {
							hk: "1Mpj73"
						}),
						labelClassName: ca.a.Label,
						onChange: this.onBannerChange
					}))), a.a.createElement(G.a, null, la._("Profile category", null, {
						hk: "1YRE6p"
					})), a.a.createElement(V.n, {
						label: la._("NSFW", null, {
							hk: "XPmIh"
						}),
						on: d,
						subtext: la._("This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)", null, {
							hk: "2l9M6G"
						}),
						onClick: this.onNSFWToggled
					}), a.a.createElement(G.a, null, la._("Advanced", null, {
						hk: "1US2Ur"
					})), a.a.createElement(V.n, {
						label: la._("Content visibility", null, {
							hk: "3RQ2dW"
						}),
						subtext: la._("Posts to this profile can appear in {profileForm: r/all link} and your profile can be discovered in {profileForm: /users link}", [la._param("profileForm: r/all link", a.a.createElement(ga, {
							href: "/r/all"
						}, "r/all")), la._param("profileForm: /users link", a.a.createElement(ga, {
							href: "/users"
						}, "/users"))], {
							hk: "16m9kL"
						}),
						on: t,
						onClick: this.onContentVisibleChange
					}), a.a.createElement(V.n, {
						label: la._("Active in communities visibility", null, {
							hk: "3GUmB5"
						}),
						subtext: la._("Show which communities I am active in on my profile.", null, {
							hk: "3jFDfF"
						}),
						on: p,
						onClick: this.onShowActiveCommunitiesChange
					}), a.a.createElement(G.a, null, la._("Profile moderation", null, {
						hk: "3vDS8h"
					})), la._("For moderation tools please visit our {ProfileForm: mod page link}", [la._param("ProfileForm: mod page link", a.a.createElement(ga, {
						href: "/user/".concat(n, "/about/edit/moderation")
					}, "Profile Moderation page"))], {
						hk: "3pih6f"
					}), i && a.a.createElement(y.a, {
						headerText: la._("SWITCH ACCOUNT TO SFW", null, {
							hk: "2rDUbc"
						}),
						message: la._("If your account contains {NSFWConfirm: nsfw policy link} (contains nudity, pornography, profanity or inappropriate content for those under 18) and it’s not set to NSFW, this will result in actions up to and including suspension of your account.", [la._param("NSFWConfirm: nsfw policy link", a.a.createElement(ga, {
							href: "https://www.redditinc.com/policies/content-policy#text-content3"
						}, "NSFW content"))], {
							hk: "3u1P0O"
						}),
						cancelText: la._("Cancel", null, {
							hk: "2IjNhv"
						}),
						acceptText: la._("I UNDERSTAND", null, {
							hk: "3wiM7r"
						}),
						onAccept: this.switchSFW,
						onCancel: b,
						onOverlayClick: b,
						overlayClassName: Object(l.a)({
							[ca.a.ResponsiveOverlay]: c
						}),
						withOverlay: !0
					}), a.a.createElement(fa, {
						src: m
					}))
				}
			}
			const xa = Object(r.b)(ua, e => ({
					imageDeleteRequested: t => e(Object($s.y)(t)),
					imagesUpdateRequested: (t, n) => e(Object($s.z)(t, n)),
					save: (t, n) => e(Object($s.E)(t, n)),
					toggleNSFWModal: () => e(Object(C.i)("ProfileForm_NSFWConfirmDialogID"))
				}))(Object(ns.c)(Ca)),
				ya = Object(o.c)({
					isLoading: e => !Object(ra.a)(e)
				}),
				_a = Object(r.b)(ya)(na);
			var Ea = class extends a.a.Component {
					render() {
						return a.a.createElement(_a, {
							loaderSize: 50,
							render: () => a.a.createElement(xa, this.props)
						})
					}
				},
				ka = n("./src/reddit/components/Settings/SpecialMembership/Header/index.m.less"),
				wa = n.n(ka);

			function Oa(e) {
				return a.a.createElement("header", {
					className: e.className
				}, a.a.createElement("div", {
					className: wa.a.title
				}, Object(Z.c)("Special Memberships")), a.a.createElement("div", {
					className: wa.a.subtitle
				}, Object(Z.c)("View and manage your Special Membership subscriptions.")))
			}
			var Sa = n("./src/lib/addQueryParams/index.ts"),
				ja = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx"),
				Na = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx"),
				Pa = n("./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less"),
				Ia = n.n(Pa);
			const {
				fbt: Ta
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Ma = Object(o.c)({
				username: e => {
					const t = Object(E.i)(e);
					return t ? Object(I.f)(t) : ""
				}
			});
			var Aa = Object(r.b)(Ma)((function(e) {
					const {
						subreddit: t,
						username: n
					} = e, s = Object(Sa.a)("http://www.reddit.com/wallet/unsubscribe", {
						u: n,
						s: t.id
					});
					return a.a.createElement("div", {
						className: Ia.a.body
					}, a.a.createElement("section", {
						className: Ia.a.leftSection
					}, a.a.createElement("div", {
						className: Ia.a.sectionHeader
					}, "Cancel your subscription with your mobile device"), a.a.createElement("div", {
						className: Ia.a.content
					}, a.a.createElement(ja.a, {
						index: "1"
					}, Ta._("Scan the QR code with your Camera app", null, {
						hk: "3rbMTX"
					})), a.a.createElement(ja.a, {
						index: "2"
					}, Ta._("Use that link to open the Reddit app", null, {
						hk: "1MKSkG"
					})), a.a.createElement(ja.a, {
						index: "3"
					}, Ta._("Approve your subscription cancellation", null, {
						hk: "2oJWUP"
					})))), a.a.createElement("section", {
						className: Ia.a.rightSection
					}, a.a.createElement("div", {
						className: Ia.a.qrCode
					}, a.a.createElement(Na.a, {
						url: s,
						color: t.primaryColor
					}))))
				})),
				Ba = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				Da = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Ra = n("./src/reddit/components/Economics/Price/index.tsx"),
				La = n("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.tsx"),
				Ua = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				Fa = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less"),
				Wa = n.n(Fa);
			const {
				fbt: Ha
			} = n("./node_modules/fbt/lib/FbtPublic.js"), za = e => Ha._("You've been supporting the community and the development of new features since {joinDate}.", [Ha._param("joinDate", e)], {
				hk: "37ImIl"
			}), Ga = [Ha._("Loyalty badge", null, {
				hk: "15DctX"
			}), Ha._("New style badges every month", null, {
				hk: "2uZZ0d"
			}), Ha._("Distinguished username", null, {
				hk: "4vsJEd"
			}), Ha._("Support new feature development", null, {
				hk: "RItPm"
			})];
			var Va = function(e) {
				const {
					joinDate: t,
					membership: n,
					subreddit: s,
					title: r
				} = e, o = s.primaryColor;
				return a.a.createElement("div", {
					className: Wa.a.card,
					style: {
						borderColor: o
					}
				}, a.a.createElement(Ua.a, {
					className: Wa.a.brand,
					subreddit: s
				}), a.a.createElement("div", {
					className: Wa.a.cardContent
				}, a.a.createElement("div", {
					className: Wa.a.cardTitle
				}, r), a.a.createElement(Ra.a, {
					className: Wa.a.price,
					dollarPrice: "usd" === n.currency ? n.price : void 0,
					monthly: !0,
					subredditId: s.id,
					tokenPrice: "points" === n.currency ? n.price : void 0
				}), a.a.createElement("div", {
					className: Wa.a.membershipMsg
				}, za(t)), a.a.createElement("div", {
					className: Wa.a.benefitsTitle
				}, Ha._("Membership Benefits", null, {
					hk: "3FGRZ0"
				})), a.a.createElement("ul", {
					className: Wa.a.benefits
				}, Ga.map(e => a.a.createElement(La.a, {
					benefit: e,
					color: o,
					key: e
				})))))
			};
			const {
				fbt: Ja
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Za = function(e) {
					const {
						className: t,
						joinDate: n,
						membership: s,
						onClose: r,
						subreddit: o,
						title: i
					} = e, c = o ? o.primaryColor : "", d = c && Object(Ba.a)(c, void 0, ms.a.white);
					return a.a.createElement("div", {
						className: Object(l.a)(t, Wa.a.pointsContainer)
					}, a.a.createElement("header", {
						className: Wa.a.pointsHeader,
						style: {
							backgroundColor: c,
							color: d
						}
					}, Ja._("Special Membership Cancellation Confirmation", null, {
						hk: "1uyrDO"
					}), a.a.createElement(Da.a, {
						className: Wa.a.close,
						onClick: r,
						style: {
							fill: d
						}
					})), a.a.createElement("article", {
						className: Wa.a.content
					}, o && a.a.createElement(a.a.Fragment, null, a.a.createElement(Aa, {
						subreddit: o
					}), a.a.createElement(Va, {
						joinDate: n,
						membership: s,
						subreddit: o,
						title: i
					}))))
				},
				Ka = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Qa = n("./src/reddit/actions/governance/errorToast.ts"),
				qa = n("./src/reddit/endpoints/economics/specialMembership.ts");
			const {
				fbt: Ya
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Xa = Object(r.b)(void 0, (e, t) => {
				let {
					subredditId: n,
					onClose: s
				} = t;
				return {
					onCancelMembership: () => {
						e(Object(Ka.g)({
							subredditId: n
						})), s()
					},
					onError: t => Object(Qa.a)(e, t)
				}
			});
			var $a = Object(Qt.b)(Xa((function(e) {
				const {
					apiContext: t,
					className: n,
					endDate: r,
					joinDate: o,
					membership: i,
					onCancelMembership: c,
					onClose: d,
					onError: m,
					subreddit: u,
					subredditId: p,
					title: b
				} = e, [h, g] = Object(s.useState)(!1), f = u ? u.displayText : "";
				return a.a.createElement("div", {
					className: Object(l.a)(n, Wa.a.container)
				}, a.a.createElement("header", {
					className: Wa.a.header
				}, Ya._("Special Membership Cancellation Confirmation", null, {
					hk: "1uyrDO"
				}), a.a.createElement(Da.a, {
					className: Wa.a.close,
					onClick: d
				})), a.a.createElement("article", {
					className: Wa.a.content
				}, a.a.createElement("div", {
					className: Wa.a.warning
				}, Ya._("Canceling your Special Membership in the {subredditName} community will stop your monthly payments, disable your access to special features, and end your support of new feature development. You will also lose access to all badges that were included in the subscription. You can keep accessing features till the end of your subscription billing cycle on {endDate}. Do you want to continue and cancel your Special Membership?", [Ya._param("subredditName", f), Ya._param("endDate", r)], {
					hk: "1POMMH"
				})), u && a.a.createElement(Va, {
					joinDate: o,
					membership: i,
					subreddit: u,
					title: b
				})), a.a.createElement("footer", {
					className: Wa.a.footer
				}, a.a.createElement(_.i, {
					disabled: h,
					onClick: async () => {
						g(!0);
						const e = await Object(qa.a)(t(), {
							subredditId: p
						});
						e.ok ? c() : (g(!1), m(e.error))
					}
				}, h ? Ya._("canceling...", null, {
					hk: "1Ggy36"
				}) : Ya._("cancel membership", null, {
					hk: "C9ZhO"
				})), a.a.createElement(_.f, {
					onClick: d
				}, Ya._("Dismiss", null, {
					hk: "EKJpC"
				}))))
			})));
			const er = Object(o.c)({
					subreddit: (e, t) => {
						let {
							subredditId: n
						} = t;
						return e.subreddits.models[n]
					}
				}),
				tr = Object(r.b)(er);
			var nr = Object(is.a)(tr((function(e) {
					return "points" === e.membership.currency ? a.a.createElement(Za, e) : a.a.createElement($a, e)
				}))),
				sr = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less"),
				ar = n.n(sr);

			function rr(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			class or extends a.a.Component {
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
					} = this.props, s = rr(t.active.membership.endsAt), r = rr(t.active.membership.publishAt), o = !t.settings.renew, i = n ? n.displayText : "", c = s ? Object(Z.c)("Cancelled. Will expire on ".concat(Object(Z.b)("date", s))) : "", d = r ? Object(Z.c)("Joined ".concat(Object(Z.b)("date", r))) : "";
					return a.a.createElement("div", {
						className: Object(l.a)(e, ar.a.container)
					}, a.a.createElement("div", {
						className: ar.a.membershipName
					}, Object(Z.c)("".concat(Object(Z.b)("subredditName", i), " ").concat(Object(Z.b)("title", t.active.membership.title)))), !o && a.a.createElement("div", {
						className: ar.a.joinDate,
						title: d
					}, d), o && a.a.createElement("div", {
						className: ar.a.cancelled,
						title: c
					}, c), a.a.createElement(_.n, {
						className: ar.a.button,
						disabled: o,
						onClick: () => this.setState({
							modalOpen: !0
						})
					}, Object(Z.c)("cancel")), this.state.modalOpen && a.a.createElement(nr, {
						withOverlay: !0,
						endDate: s,
						joinDate: r,
						subredditId: t.active.membership.subredditId,
						membership: t.active.membership,
						title: i + " " + t.active.membership.title,
						onClose: () => this.setState({
							modalOpen: !1
						})
					}))
				}
			}
			const ir = Object(o.c)({
				subreddit: (e, t) => {
					let {
						membership: n
					} = t;
					return e.subreddits.models[n.active.membership.subredditId]
				}
			});
			var cr = Object(r.b)(ir)(or),
				lr = n("./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less"),
				dr = n.n(lr);

			function mr(e) {
				const t = Date.now();
				return !!e.active && !!e.active.membership && t < e.active.membership.endsAt
			}
			const ur = Object(o.c)({
				membershipsLoading: e => !e.economics.me.fetched,
				memberships: e => e.economics.me.data.specialMemberships || {}
			});
			var pr = Object(r.b)(ur)((function(e) {
					const {
						className: t,
						membershipsLoading: n,
						memberships: s
					} = e, r = Object.keys(s).map(e => s[e]).filter(mr).sort((e, t) => e.active.membership.endsAt - t.active.membership.endsAt), o = !!r.length;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement("div", {
						className: dr.a.title
					}, Object(Z.c)("Communities")), n && Array.from({
						length: 3
					}).map((e, t) => a.a.createElement("div", {
						className: dr.a.loading,
						key: t
					})), o && r.map(e => a.a.createElement(cr, {
						key: e.active.membership.subredditId,
						className: dr.a.membership,
						membership: e
					})), !n && !o && a.a.createElement("div", {
						className: dr.a.empty
					}, Object(Z.c)("You are not subscribed to any Special Memberships")))
				})),
				br = n("./src/reddit/components/Settings/SpecialMembership/index.m.less"),
				hr = n.n(br);

			function gr(e) {
				return a.a.createElement(ne.a, {
					className: e.className
				}, a.a.createElement(Oa, {
					className: hr.a.header
				}), a.a.createElement(pr, null))
			}
			var fr = n("./src/reddit/components/TabNav/index.tsx"),
				vr = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Cr = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				xr = n("./src/reddit/selectors/experiments/responsiveSettings.ts"),
				yr = n("./src/reddit/selectors/platform.ts"),
				_r = n("./src/reddit/pages/Settings/index.m.less"),
				Er = n.n(_r);
			const kr = (e, t, n, s, r, o, i) => ((e, t, n, s) => [{
					key: d.Nb.Account,
					title: Object(Z.c)("Account")
				}, {
					key: d.Nb.Profile,
					title: Object(Z.c)("Profile")
				}, {
					key: d.Nb.Privacy,
					title: Object(Z.c)("Privacy & Security")
				}, {
					key: d.Nb.Feed,
					title: Object(Z.c)("Feed Settings")
				}, {
					key: d.Nb.Notifications,
					title: Object(Z.c)("Notifications")
				}, {
					key: d.Nb.Premium,
					title: Object(Z.c)("Reddit Premium")
				}, {
					key: d.Nb.Creator,
					title: Object(Z.c)("Reddit Creator"),
					disabled: !t
				}, {
					key: d.Nb.Payments,
					title: Object(Z.c)("Payments"),
					disabled: !s.length
				}, {
					key: d.Nb.SpecialMembership,
					title: Object(Z.c)("Special Memberships"),
					disabled: !n
				}, {
					className: Er.a.MessagingTab,
					key: d.Nb.Messaging,
					title: Object(Z.c)("Chat & Messaging")
				}])(0, s, r, o).filter(e => !e.disabled).map((t, s) => a.a.createElement(fr.a, {
					to: "/settings/".concat(t.key),
					active: !e && 0 === s || t.key === e,
					className: t.className,
					innerRef: i(t.key),
					key: t.key,
					onClick: n[t.key]
				}, t.title)),
				wr = Object(o.c)({
					savedPayments: $t.t,
					userIsWhitelistedCreator: $t.E,
					allowNavigationCallback: yr.a,
					isResponsiveSettingsEnabled: xr.a,
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
				Or = Object(re.t)(),
				Sr = Object(r.b)(wr, (e, t) => ({
					updatePrefs: t => e(Object($s.F)(t)),
					onPageViewed: () => e(Object(p.a)())
				})),
				jr = {
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
			class Nr extends a.a.Component {
				constructor() {
					var e;
					super(...arguments), e = this, this.tabNavRef = a.a.createRef(), this.update = (e, t) => {
						const {
							prefs: n
						} = this.props;
						this.sendEvent(e, t), n.acceptPrivateMessages && (n.acceptPrivateMessages = n.acceptPrivateMessages.toLowerCase()), this.props.updatePrefs(Object.assign({}, n, {
							[t]: e
						}))
					}, this.sendEvent = (e, t) => {
						const n = c()();
						jr.hasOwnProperty(t) && this.props.sendEvent(s => ({
							source: this.getSource(),
							action: "save",
							noun: jr[t],
							correlationId: n,
							setting: {
								value: this.getTrackingValue(t, e),
								oldValue: this.getTrackingValue(t, e, !0)
							}
						}))
					}, this.getSource = () => {
						const e = this.props.match.params.page;
						return e && e !== d.Nb.Account ? "".concat("settings", "_").concat(e) : "settings"
					}, this.getTrackingValue = function(t, n) {
						let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						const a = s ? e.props.prefs[t] : n;
						return "boolean" == typeof a ? ["emailUnsubscribe", "hideFromRobots"].includes(t) ? !0 === a ? "off" : "on" : !0 === a ? "on" : "off" : a
					}, this.renderForm = e => {
						const {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							language: s,
							location: r,
							userIsWhitelistedCreator: o,
							userHasSpecialMembership: i
						} = this.props, c = {
							isResponsiveSettingsEnabled: t,
							language: s,
							prefs: n,
							update: this.update
						};
						switch (e) {
							case d.Nb.Account:
								return a.a.createElement(dt, c);
							case d.Nb.Profile:
								return a.a.createElement(Ea, c);
							case d.Nb.Premium:
								return a.a.createElement(Zs.b, c);
							case d.Nb.Notifications:
								return a.a.createElement(Ps, c);
							case d.Nb.Privacy:
								return a.a.createElement(Xs, c);
							case d.Nb.Messaging:
								return a.a.createElement(Wt, c);
							case d.Nb.Feed:
								return a.a.createElement(qn, c);
							case d.Nb.Payments:
								return a.a.createElement(Js, null);
							case d.Nb.Creator: {
								const e = Object(m.a)(r.search);
								return o ? a.a.createElement(mn, {
									stripeConnectCode: e.get("code"),
									stripeConnectStateToken: e.get("state")
								}) : null
							}
							case d.Nb.SpecialMembership:
								return i ? a.a.createElement(gr, null) : null;
							default:
								return a.a.createElement(dt, c)
						}
					}, this.onPremiumTabClick = () => {
						this.props.sendEvent(Object(Cr.e)())
					}, this.tabRefCache = {}, this.getTabRef = e => (this.tabRefCache[e] || (this.tabRefCache[e] = a.a.createRef()), this.tabRefCache[e])
				}
				componentDidMount() {
					Object(vr.d)(vr.a.PremiumSettings), this.props.onPageViewed(), this.props.isResponsiveSettingsEnabled && this.scrollToActivePage()
				}
				scrollToActivePage() {
					u.a.read(() => {
						if (!this.tabNavRef.current) return;
						const {
							match: {
								params: {
									page: e = d.Nb.Account
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
					Object(vr.b)(vr.a.PremiumSettings)
				}
				componentDidUpdate(e, t, n) {
					e.match.params.page !== this.props.match.params.page && this.props.onPageViewed()
				}
				render() {
					const {
						match: e,
						isResponsiveSettingsEnabled: t,
						language: n,
						userIsWhitelistedCreator: s,
						userHasSpecialMembership: r,
						savedPayments: o
					} = this.props;
					return a.a.createElement("div", {
						className: Object(l.a)(Er.a.Container, {
							[Er.a["m-responsive"]]: t
						})
					}, a.a.createElement(fr.c, {
						constrainWidth: !0,
						innerRef: this.tabNavRef,
						isResponsiveSettingsEnabled: t,
						title: Object(Z.c)("User settings"),
						icon: fr.b.GEAR
					}, kr(e.params.page, n, {
						[d.Nb.Premium]: this.onPremiumTabClick
					}, s, r, o, this.getTabRef)), this.renderForm(e.params.page))
				}
			}
			t.default = Or(Sr(Object(ns.c)(Nr)))
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
//# sourceMappingURL=Settings.85955bd140abfd2abc9f.js.map
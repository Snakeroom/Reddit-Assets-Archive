// https://www.redditstatic.com/desktop2x/Settings.a73bded0e18feb3299ea.js
// Retrieved at 1/28/2020, 3:50:13 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Settings"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var s = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, a, r) {
				for (var o = -1, i = n(s((t - e) / (a || 1)), 0), c = Array(i); i--;) c[r ? i : ++o] = e, e += a;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRange.js"),
				a = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, s, o) {
					return o && "number" != typeof o && a(t, s, o) && (s = o = void 0), t = r(t), void 0 === s ? (s = t, t = 0) : s = r(s), o = void 0 === o ? t < s ? 1 : -1 : r(o), n(t, s, o, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return n(e) + t
			}
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/currency/cleanNumber/index.ts");

			function a(e, t) {
				const s = Object(n.a)(e),
					a = parseInt(s) / 100;
				return Math.floor(a) !== a || t ? a.toFixed(2) : String(a)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/i18n/utils.ts");
			const a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				o = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, s) => {
					const o = t ? e.getUTCMonth() : e.getMonth(),
						i = s ? r : a;
					return Object(n.c)(i[o])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function l(e, t, s, n) {
				const a = new Date(1e3 * e),
					r = i(a, s, n),
					l = t ? o(a, s) + ", " : "";
				return "".concat(r, " ").concat(l).concat(c(a, s))
			}
		},
		"./src/lib/validateEmail/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				if (!e && t) return !0;
				return /^.+\@.+\..+$/.test(e)
			}
		},
		"./src/reddit/components/ConfirmModal/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ConfirmModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/components/ConfirmModal/index.m.less"),
				c = s.n(i),
				l = s("./src/reddit/components/ModalStyledComponents/index.tsx");
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
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/currency/centsToDollars/index.ts"),
				i = s("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/ApiContext.tsx"),
				d = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.m.less"),
				u = s.n(m);
			const p = ["Loyalty badge", "New style badges every month", "Distinguished username", "Support new feature development"].map(d.c),
				b = ["Emotes in comments", "Achievement badges", "Images & GIFs in comments", "Members lounge"].map(d.c);

			function h(e) {
				let {
					benefit: t,
					color: s
				} = e;
				return a.a.createElement("li", {
					className: u.a.benefit
				}, a.a.createElement("div", {
					className: u.a.benefitCircle,
					style: {
						backgroundColor: s
					}
				}), t)
			}
			t.b = Object(l.b)(Object(c.b)((function(e) {
				const {
					className: t,
					price: s,
					subreddit: n
				} = e;
				return a.a.createElement("div", {
					className: Object(r.a)(u.a.container, t)
				}, a.a.createElement("div", {
					className: u.a.topLine
				}, a.a.createElement(i.a, {
					className: u.a.brand,
					subreddit: n
				}), a.a.createElement("div", {
					className: u.a.title
				}, Object(d.c)("".concat(Object(d.b)("community", n.displayText), " Supporter Membership")))), a.a.createElement("header", {
					className: u.a.subTitle
				}, Object(d.c)("Support the ".concat(Object(d.b)("community", n.displayText), " community and receive exclusive access to premium features."))), a.a.createElement("article", null, a.a.createElement("div", {
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
				}, Object(d.c)("$".concat(Object(d.b)("price", Object(o.a)(s)), "/month"))))
			})))
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts");

			function o(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, a.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
			var i = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				c = s("./src/reddit/icons/svgs/Crown/index.tsx"),
				l = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				d = s("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less"),
				m = s.n(d);
			s.d(t, "a", (function() {
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
					s = u[e.size || "regular"];
				return a.a.createElement("div", {
					className: Object(r.a)(s.container, e.className)
				}, e.subreddit ? a.a.createElement("img", {
					className: s.crownImg,
					src: Object(l.a)(e.subreddit, "Crown.gif")
				}) : a.a.createElement(c.a, {
					className: s.crown
				}), a.a.createElement(o, {
					className: s.bling1
				}), a.a.createElement(o, {
					className: s.bling2
				}), a.a.createElement(o, {
					className: s.bling3
				}), t ? a.a.createElement("img", {
					className: s.icon,
					src: t
				}) : a.a.createElement(i.a, {
					className: s.defaultIcon,
					style: {
						backgroundColor: e.subreddit && e.subreddit.primaryColor
					}
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = s("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(i.b)(e => {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const r = "UserInfoTooltip",
				o = () => null;
			t.b = Object(n.a)({
				ErrorComponent: o,
				getComponent: () => Object(a.a)(() => Promise.all([s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("AuthorHovercard")]).then(s.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				c = s.n(i),
				l = s("./src/reddit/constants/jsapiEvents.ts");
			var d = s("./src/reddit/singleton/EventSystem.ts"),
				m = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class p extends n.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: n
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
				h = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const s = Object(h.n)(e, t),
					n = Object(g.J)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var x = Object(r.b)(() => Object(o.a)(f, h.j, (e, t) => Object.assign({}, e, {
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
			const v = (e, t) => {
				const s = Object(h.n)(e, t),
					n = Object(g.J)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var y = Object(r.b)(() => Object(o.a)(v, e => e))(e => a.a.createElement(b, {
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
			var O = Object(r.b)(() => Object(o.c)({
					subreddit: g.S
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
				C = s("./src/reddit/selectors/posts.ts");
			var E = Object(r.b)(() => Object(o.c)({
				post: C.I,
				subredditOrProfile: C.U,
				isModerator: (e, t) => {
					const s = Object(C.U)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
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
			var j = Object(r.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(C.U)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(C.U)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
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
				post: C.I,
				subredditOrProfile: C.U,
				isModerator: (e, t) => {
					const s = Object(C.U)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
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
			var _ = Object(r.b)(() => Object(o.c)({
				subreddit: g.S
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
			var k = Object(r.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(g.M)(e, {
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
			var S = Object(r.b)(() => Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(g.S)(e, {
						subredditId: s
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
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "f", (function() {
				return w
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "i", (function() {
				return S
			}))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/svgs/Best/index.m.less"),
				c = s.n(i);
			var l = e => a.a.createElement("svg", {
					className: Object(r.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), a.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				d = s("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = s.n(d);
			var u = e => a.a.createElement("svg", {
					className: Object(r.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				p = s("./src/reddit/icons/svgs/Hot/index.m.less"),
				b = s.n(p);
			var h = e => a.a.createElement("svg", {
					className: Object(r.a)(b.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("title", null, "Hot"), a.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				g = s("./src/reddit/icons/svgs/New/index.m.less"),
				f = s.n(g);
			var x = e => a.a.createElement("svg", {
					className: Object(r.a)(f.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				v = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				y = s.n(v);
			var O = e => a.a.createElement("svg", {
					className: Object(r.a)(y.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				C = s("./src/reddit/icons/svgs/Top/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/index.m.less"),
				j = s.n(E);
			const w = {
				[o.N.BEST]: l,
				[o.N.HOT]: h,
				[o.N.NEW]: x,
				[o.N.CONTROVERSIAL]: u,
				[o.N.TOP]: C.a,
				[o.N.RISING]: O
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const n = w[s];
				return n ? a.a.createElement(n, {
					className: Object(r.a)(t, j.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/Loader/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_1Jx7v9Z1D1htyYeKixW2Gx"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlight.m.less": function(e, t, s) {
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
		"./src/reddit/components/ProfileIdCard/Highlights.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2fopwfsUIdZKFtFUEsud9r",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.m.less": function(e, t, s) {
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
				loadingIconStyled: "mtxpTbJWwD6VP05MIdrPa"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/config.ts"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.tsx"),
				c = s("./src/reddit/controls/InternalLink/index.tsx"),
				l = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				u = s("./src/reddit/icons/svgs/Close/index.tsx"),
				p = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				b = s("./src/reddit/layout/twoCol/Dynamic/index.tsx"),
				h = s("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				g = s("./node_modules/react-redux/es/index.js"),
				f = s("./node_modules/reselect/es/index.js"),
				x = s("./src/lib/humanizeDate/index.ts"),
				v = s("./src/lib/prettyPrintNumber/index.ts"),
				y = s("./src/lib/timeAgo/index.ts"),
				O = s("./src/reddit/contexts/InsideOverlay.tsx"),
				C = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				E = s("./src/reddit/icons/svgs/Karma/index.tsx"),
				j = s("./src/reddit/icons/svgs/User/index.tsx"),
				w = s("./src/reddit/selectors/profile.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/actions/tooltip.ts"),
				S = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				N = s("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				P = s.n(N);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const M = Object(f.c)({
					language: _.T
				}),
				T = o.a.div("Container", P.a),
				L = o.a.div("Body", P.a),
				D = o.a.h5("Title", P.a),
				B = o.a.span("Label", P.a);
			class A extends r.a.Component {
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
						title: s,
						tooltip: n,
						tooltipId: a
					} = this.props, o = a && n ? {
						id: a,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return r.a.createElement(T, null, r.a.createElement(D, null, s), r.a.createElement(L, null, e, r.a.createElement(B, I({
						key: "label"
					}, o), t)), a && n && r.a.createElement(S.c, {
						caretOnTop: !0,
						tooltipId: a,
						text: n
					}))
				}
			}
			var U = Object(g.b)(M, e => ({
					toggleTooltip: t => e(Object(k.g)({
						tooltipId: t
					}))
				}))(Object(O.b)(A)),
				F = s("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				R = s.n(F);
			const W = Object(f.a)(w.j, (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(_.lb)(e, s)
				}, _.T, (e, t, s) => ({
					commentKarma: t ? t.commentKarma : 0,
					language: s,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t ? t.created : 0,
					subscribers: e && e.subscribers || 0
				})),
				H = o.a.div("Container", R.a);

			function z(e, t) {
				return "profile--id-card--highlight-tooltip-".concat(e ? "-overlay" : "", "-").concat(t)
			}
			var V = Object(g.b)(W)(Object(O.b)(e => {
					const {
						profileCreated: t,
						isOverlay: s,
						language: n,
						commentKarma: a,
						postKarma: o,
						subscribers: i
					} = e, c = z(s, "karma"), l = z(s, "cakeday"), m = Object(d.c)("".concat(Object(d.b)("postKarmaNumber", Object(v.b)(o, !0)), " Post Karma")), u = Object(d.c)("".concat(Object(d.b)("commentKarmaNumber", Object(v.b)(a, !0)), " Comment Karma"));
					return r.a.createElement(H, null, r.a.createElement(U, {
						icon: r.a.createElement(E.a, {
							className: R.a.icon,
							key: "karma"
						}),
						label: Object(v.b)(a + o, !0),
						title: Object(d.c)("Karma"),
						tooltipId: c,
						tooltip: "".concat(m, "\n").concat(u)
					}), r.a.createElement(U, {
						icon: r.a.createElement(C.a, {
							className: R.a.icon,
							key: "cakeDay"
						}),
						label: Object(x.a)(t, !0),
						title: Object(d.c)("Cake day"),
						tooltipId: l,
						tooltip: Object(y.d)(n, t)
					}), i > 0 && r.a.createElement(U, {
						icon: r.a.createElement(j.a, {
							className: R.a.icon,
							key: "followers"
						}),
						title: Object(d.c)("Followers"),
						label: Object(v.b)(i, !0)
					}))
				})),
				J = s("./src/reddit/components/ProfileIdCard/index.m.less"),
				G = s.n(J),
				K = s("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				Z = s.n(K);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return le
			}));
			var X = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const Y = o.a.div("BannerWrapper", Z.a),
				Q = o.a.div("BannerImage", Z.a),
				$ = o.a.div("SnooIcon", Z.a),
				ee = o.a.wrapped(i.b, "Widget", Z.a),
				te = o.a.h4("UserTitle", Z.a),
				se = o.a.wrapped(p.a, "PremiumIcon", Z.a),
				ne = o.a.div("Description", Z.a),
				ae = e => {
					var {
						url: t
					} = e, s = X(e, ["url"]);
					return t ? r.a.createElement(c.a, q({}, s, {
						className: Z.a.userName,
						to: t
					})) : r.a.createElement("span", q({}, s, {
						className: Z.a.userName
					}))
				},
				re = o.a.wrapped(b.a, "Actions", Z.a),
				oe = o.a.wrapped(u.a, "CloseIcon", Z.a),
				ie = o.a.wrapped(l.a, "LoadingIconStyled", Z.a),
				ce = () => r.a.createElement(ie, {
					sizePx: 20
				});
			class le extends r.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						username: t
					} = this.props;
					return e ? r.a.createElement(h.a, {
						recentAwardings: e,
						username: t
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						className: s,
						footer: a,
						isEmployee: o,
						isGold: i,
						isOverlay: c,
						profileIcon: l,
						publicDescription: u,
						title: p,
						url: b,
						username: h,
						isDefaultIcon: g,
						isDeletingIcon: f,
						isDeletingBanner: x,
						onDeleteIcon: v,
						onDeleteBanner: y,
						editMode: O
					} = this.props;
					return r.a.createElement(ee, {
						className: s
					}, r.a.createElement(Y, null, t && r.a.createElement(Q, {
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}), O && t && (x ? r.a.createElement(ce, null) : r.a.createElement(oe, {
						onClick: y
					}))), r.a.createElement("div", {
						className: G.a.SnooIconWrapper
					}, r.a.createElement($, {
						style: {
							backgroundImage: "url(".concat(l, ")")
						}
					}), O && !g && (f ? r.a.createElement(ce, null) : r.a.createElement(oe, {
						onClick: v
					}))), p && r.a.createElement(te, null, p), r.a.createElement(ae, {
						url: b
					}, "u/".concat(h)), o && r.a.createElement(m.a, {
						className: G.a.adminIcon,
						title: Object(d.c)("Reddit admin")
					}), i && r.a.createElement("a", {
						title: Object(d.c)("".concat(Object(d.b)("username", h), " has Reddit Premium")),
						href: "".concat(n.a.redditUrl, "/premium")
					}, r.a.createElement(se, null)), r.a.createElement(ne, null, u), r.a.createElement(V, {
						profileName: h,
						isOverlay: c
					}), this.renderAwardedLastMonth(), r.a.createElement(re, null, e), a)
				}
			}
		},
		"./src/reddit/components/Settings/AccountForm.m.less": function(e, t, s) {
			e.exports = {
				Trash: "_2UoJFO4kX93xqtJJK4wsZl",
				trash: "_2UoJFO4kX93xqtJJK4wsZl",
				DeactivateButton: "EBd2MhBQlQeZ13YeP0K8a",
				deactivateButton: "EBd2MhBQlQeZ13YeP0K8a",
				DeactivateWrapper: "_3VF_RMRPjwlO4Zr4WnpLym",
				deactivateWrapper: "_3VF_RMRPjwlO4Zr4WnpLym"
			}
		},
		"./src/reddit/components/Settings/AccountPrefsSection/index.m.less": function(e, t, s) {
			e.exports = {
				tertiaryBtn: "_3yDGs2XJxcsMFCZLDmw61k"
			}
		},
		"./src/reddit/components/Settings/ConnectedAccounts.m.less": function(e, t, s) {
			e.exports = {
				TwitterIcon: "wFG6joUUDZWBmCdVoFtX1",
				twitterIcon: "wFG6joUUDZWBmCdVoFtX1",
				LoadingIcon: "_2PFDGY8oD1IqPJ6x0ksOLL",
				loadingIcon: "_2PFDGY8oD1IqPJ6x0ksOLL",
				ConnectTwitterButton: "_3_C0yY7yiWtDypxbX2VZxB",
				connectTwitterButton: "_3_C0yY7yiWtDypxbX2VZxB",
				TextAndIconWrapper: "_1BrzurjtqQgk04Tg6ashAl",
				textAndIconWrapper: "_1BrzurjtqQgk04Tg6ashAl",
				DisconnectButton: "_21vrmGMVCliCwKm6zhyHbN",
				disconnectButton: "_21vrmGMVCliCwKm6zhyHbN",
				Username: "LWHrkSKS3nhHm20323-2M",
				username: "LWHrkSKS3nhHm20323-2M",
				ConnectionInfo: "_1s5kBpvOzdQk_dCbsVEkP5",
				connectionInfo: "_1s5kBpvOzdQk_dCbsVEkP5"
			}
		},
		"./src/reddit/components/Settings/Creator/Header/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1PL-vwvbwULAlKIw_-rp6o",
				tag: "AdxLJ-FF3A2DW8rpMjDNt",
				title: "XzPPDkPAIQWYbDf1sDeLq"
			}
		},
		"./src/reddit/components/Settings/Creator/StripeConnect/index.m.less": function(e, t, s) {
			e.exports = {
				button: "ldUISE1q75VkTpDCvw2QT",
				cta: "_135GEuWAf6THuO7EPL_lA1",
				disclaimer: "_2y2cexvCxDTDYNniIjPLpx",
				icon: "_2b7jOhtXSYQ5sHqTP2vlda",
				legal: "J3oHTng7rwXevhpG9krPI",
				legalLink: "_1cRLUcu6PFsJKj-BeYgYy0"
			}
		},
		"./src/reddit/components/Settings/Creator/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_2U2Xb0AtotCKvoU6HPwO2y"
			}
		},
		"./src/reddit/components/Settings/DeactivateModal.m.less": function(e, t, s) {
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
		"./src/reddit/components/Settings/DeactivateModal.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				l = s("./src/reddit/components/Settings/shared/FatInput.tsx"),
				d = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = s("./src/reddit/components/Settings/DeactivateModal.m.less"),
				u = s.n(m),
				p = s("./src/lib/lessComponent.tsx"),
				b = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const h = p.a.div("Container", u.a),
				g = p.a.h2("HeaderText", u.a),
				f = p.a.button("Close", u.a),
				x = p.a.wrapped(i.b, "PrimaryButton", u.a),
				v = p.a.wrapped(i.i, "SecondaryButton", u.a),
				y = p.a.div("ButtonWrapper", u.a),
				O = p.a.textarea("TextArea", u.a),
				C = p.a.h3("SectionLabel", u.a),
				E = p.a.p("H", u.a),
				j = p.a.p("P", u.a),
				w = p.a.wrapped(l.a, "Input", u.a),
				_ = p.a.div("CheckBoxWrapper", u.a),
				k = p.a.ul("UL", u.a),
				S = {
					paypal: "/settings/premium",
					stripe: "/settings/premium",
					ios: "https://finance-app.itunes.apple.com/account/subscriptions",
					android: "https://play.google.com/store/account/subscriptions"
				},
				N = {
					ios: () => n.fbt._("Apple Appstore", null, {
						hk: "1WaFta"
					}),
					android: () => n.fbt._("Google Play", null, {
						hk: "2VUF8k"
					}),
					stripe: () => n.fbt._("Stripe", null, {
						hk: "gEPf2"
					}),
					paypal: () => n.fbt._("Paypal", null, {
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
							s = b(e, ["showConfirm"]);
						this.props.onClick(s), this.props.exit()
					}, this.updateField = e => t => this.setState({
						[e]: t
					}), this.formIncomplete = () => !this.state.username || !this.state.password || !this.state.checkbox, this.renderMain = () => {
						const e = this.props;
						return r.a.createElement(d.j, null, r.a.createElement(E, null, n.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), r.a.createElement(k, null, r.a.createElement("li", null, n.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
							hk: "49AqfO"
						})), r.a.createElement("li", null, n.fbt._("Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually.", null, {
							hk: "4riIPw"
						})), e.user && e.user.isGold && e.user.hasGoldSubscription && r.a.createElement("li", null, n.fbt._("Just in case you didn't cancel your Premium subscription, here are all the links:", null, {
							hk: "poO6C"
						}), Object.keys(S).map((e, t) => r.a.createElement("span", {
							key: e
						}, !!t && ", ", r.a.createElement("a", {
							href: S[e],
							target: "_blank"
						}, N[e] && N[e]()))))), r.a.createElement(C, null, n.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), r.a.createElement(O, {
							placeholder: n.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), r.a.createElement(C, null, n.fbt._("account credentials for security purposes", null, {
							hk: "2YiOpO"
						})), r.a.createElement(w, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: n.fbt._("username", null, {
								hk: "2f1L4u"
							})
						}), r.a.createElement(w, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: n.fbt._("password", null, {
								hk: "23UmWl"
							}),
							type: "password"
						}), r.a.createElement(_, null, r.a.createElement(c.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), r.a.createElement("label", null, n.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), r.a.createElement(y, null, r.a.createElement(v, {
							onClick: e.exit
						}, n.fbt._("cancel", null, {
							hk: "2d8kYI"
						})), r.a.createElement(x, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, n.fbt._("deactivate", null, {
							hk: "3r52aW"
						}))))
					}, this.renderPremiumNotificationMessage = e => {
						let {
							platform: t,
							isMobile: s
						} = e;
						return n.fbt._("{text with URL}", [n.fbt._param("text with URL", s ? r.a.createElement(r.a.Fragment, null, "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for", r.a.createElement("a", {
							href: S[t],
							target: "_blank"
						}, " ", N[t] && N[t]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : r.a.createElement(r.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", r.a.createElement("a", {
							href: S[t],
							target: "_blank"
						}, " ", N[t] && N[t]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
							hk: "1lLr9b"
						})
					}, this.renderPremiumNotification = () => r.a.createElement(d.j, null, r.a.createElement(E, null, n.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), r.a.createElement(j, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
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
					})), r.a.createElement(y, null, r.a.createElement(x, {
						onClick: () => this.setState({
							showPremiumNotification: !1
						})
					}, n.fbt._("deactivate", null, {
						hk: "1ZQPu5"
					})))), this.renderConfirm = () => r.a.createElement(d.j, null, r.a.createElement(E, null, n.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), r.a.createElement(y, null, r.a.createElement(v, {
						onClick: () => this.setState({
							showConfirm: !1
						})
					}, n.fbt._("back", null, {
						hk: "tEs8T"
					})), r.a.createElement(x, {
						onClick: this.handleSubmit
					}, n.fbt._("deactivate", null, {
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
					}, r.a.createElement(d.b, null)), r.a.createElement(d.g, null, r.a.createElement(g, null, n.fbt._("Feed settings", null, {
						hk: "4morrt"
					}))), this.state.showPremiumNotification ? this.renderPremiumNotification() : this.state.showConfirm ? this.renderConfirm() : this.renderMain())
				}
			}
			t.b = Object(o.a)(P)
		},
		"./src/reddit/components/Settings/DesktopNotifications/TurnOnDesktopNotificationsModal/index.m.less": function(e, t, s) {
			e.exports = {
				row: "_2p7Y7z5wSBn5aCi7eK2pB2",
				stepNumber: "_10_kLYlr2P64gGtVuRmDIU",
				icon: "_5nI2F3HBs4WbXsJXozR2",
				notify: "_3L8va2Rx0PoIz4zyBzTJXN",
				text: "_3MBs-ro9yZMQKKKOcPDrEo",
				ModalText: "BjkPaG023MR6P-Jr4B9il",
				modalText: "BjkPaG023MR6P-Jr4B9il"
			}
		},
		"./src/reddit/components/Settings/FPRWarning/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Settings/Payments/Header/index.m.less": function(e, t, s) {
			e.exports = {
				description: "_2KihMl7kCllYi4__28Q0O8",
				title: "_2z5qbZtDy2SEXxQHTL5uwO"
			}
		},
		"./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less": function(e, t, s) {
			e.exports = {
				lock: "Sfk4ELyMq0pDLynmPYqIH",
				noSavedPayment: "_2kaA57xLp2xlwvJJgGX_nf",
				payment: "_3Q9yKbarclxKg7XBqu5Aas",
				paymentDisplay: "_1u8k-iH7dy2tgyF89W2PW9"
			}
		},
		"./src/reddit/components/Settings/Payments/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_5wU4T-ZntmyHAO3Q-reeV"
			}
		},
		"./src/reddit/components/Settings/PremiumForm.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/humanizeDate/index.ts"),
				d = s("./src/app/strings/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/components/ConfirmModal/index.tsx"),
				p = s("./src/reddit/components/Settings/shared/Heading.tsx"),
				b = s("./src/reddit/components/Settings/shared/Layout.tsx"),
				h = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				g = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/makeAsync.tsx")),
				v = s("./src/lib/loadWithRetries/index.ts"),
				y = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			var O = Object(x.a)({
					getComponent: () => Object(v.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("UpdateCardModal")]).then(s.bind(null, "./src/reddit/components/UpdateCardModal/index.tsx")), Object(y.c)()])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				C = s("./src/reddit/helpers/trackers/premiumSettings.ts"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/Settings/index.m.less"),
				_ = s.n(w);
			s.d(t, "a", (function() {
				return N
			}));
			const k = "settings.premiumForm",
				S = "https://www.paypal.com/myaccount/autopay",
				N = "update_card_modal_id",
				P = Object(c.c)({
					cancelSubscriptionModalIsOpen: Object(E.b)("settings_optout_modal_id"),
					goldExpiration: j.o,
					hasAndroidSubscription: j.p,
					hasIOSSubscription: j.s,
					hasStripeSubscription: j.w,
					hasPaypalSubscription: j.u,
					isGold: j.q,
					isPremiumSubscriber: j.r,
					language: j.T,
					updateCardModalIsOpen: Object(E.b)(N)
				}),
				I = Object(o.b)(P, e => ({
					navigateToPurchasePremium: () => e(Object(i.b)("/premium")),
					toggleCancelSubscriptionModal: () => e(Object(m.i)("settings_optout_modal_id")),
					toggleUpdateCardModal: () => e(Object(m.i)(N))
				})),
				M = (e, t, s, n) => t && s ? Object(d.a)(e, "".concat(k, ".premium.subtext"), {
					date: Object(l.a)(n, !0)
				}) : t && !s ? Object(d.a)(e, "".concat(k, ".premium.subscribeSubtext"), {
					date: Object(l.a)(n, !0)
				}) : Object(d.a)(e, "".concat(k, ".premium.altSubtext"));
			class T extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onGoldLinkClick = e => {
						e.preventDefault();
						const {
							navigateToPurchasePremium: t,
							sendEvent: s
						} = this.props;
						s(Object(C.d)()), t()
					}, this.onCancelClick = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(C.a)()), t()
					}, this.onHideAdsToggle = () => {
						const {
							update: e,
							prefs: {
								hideAds: t
							},
							sendEvent: s
						} = this.props;
						s(t ? Object(C.f)() : Object(C.h)()), e(!t, "hideAds")
					}, this.onHighlightCommentsToggle = () => {
						const {
							update: e,
							prefs: {
								highlightComments: t
							},
							sendEvent: s
						} = this.props;
						s(t ? Object(C.g)() : Object(C.i)()), e(!t, "highlightComments")
					}, this.onYesCancelSubscription = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(C.c)()), this.navigateToCancel()
					}, this.onNoCancelSubscription = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(C.b)()), t()
					}
				}
				componentWillMount() {
					this.props.sendEvent(Object(C.j)())
				}
				navigateToCancel() {
					const {
						hasPaypalSubscription: e,
						hasStripeSubscription: t
					} = this.props;
					e ? window.location.href = S : t && (window.location.href = "".concat(n.a.redditUrl, "/gold/subscription"))
				}
				render() {
					const {
						cancelSubscriptionModalIsOpen: e,
						goldExpiration: t,
						hasAndroidSubscription: s,
						hasIOSSubscription: n,
						hasPaypalSubscription: a,
						hasStripeSubscription: o,
						isGold: i,
						isPremiumSubscriber: c,
						language: l,
						toggleUpdateCardModal: m,
						updateCardModalIsOpen: f,
						prefs: {
							highlightComments: x,
							hideAds: v
						}
					} = this.props, y = s || n;
					return r.a.createElement(b.a, null, r.a.createElement(p.b, {
						className: _.a.premiumHeading
					}, Object(d.a)(l, "".concat(k, ".headings.main"))), r.a.createElement(p.a, {
						className: _.a.premiumSubtext
					}, Object(d.a)(l, "".concat(k, ".headings.subtext.main"))), r.a.createElement(h.a, null, Object(d.a)(l, "".concat(k, ".headings.subscriptionStatus"))), r.a.createElement(p.a, {
						className: _.a.premiumSubtext
					}, M(l, i, c, t || 0)), !c && r.a.createElement(g.f, {
						label: i ? Object(d.a)(l, "".concat(k, ".premium.subscribeLinkMessage")) : Object(d.a)(l, "".concat(k, ".premium.linkMessage")),
						link: "/premium",
						onClick: this.onGoldLinkClick,
						last: !0
					}), o && r.a.createElement(g.a, {
						label: Object(d.a)(l, "".concat(k, ".updatePaymentInfo")),
						onClick: m
					}), a && r.a.createElement(g.f, {
						label: Object(d.a)(l, "".concat(k, ".updatePaymentInfo")),
						link: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=912@reddit.com"
					}), c && !y && r.a.createElement(g.a, {
						label: Object(d.a)(l, "".concat(k, ".cancelSubscription")),
						onClick: this.onCancelClick,
						last: !0
					}), i && r.a.createElement(r.a.Fragment, null, r.a.createElement(h.a, null, Object(d.a)(l, "".concat(k, ".headings.premiumFeatures"))), r.a.createElement(g.n, {
						on: v,
						disabled: !i,
						onClick: this.onHideAdsToggle,
						label: Object(d.a)(l, "".concat(k, ".hideAdvertisements.label")),
						subtext: Object(d.a)(l, "".concat(k, ".hideAdvertisements.subtext"))
					}), r.a.createElement(g.n, {
						on: x,
						disabled: !i,
						onClick: this.onHighlightCommentsToggle,
						label: Object(d.a)(l, "".concat(k, ".highlightComments.label")),
						subtext: Object(d.a)(l, "".concat(k, ".highlightComments.subtext")),
						last: !0
					})), f && r.a.createElement(O, null), e && r.a.createElement(u.a, {
						headerText: Object(d.a)(l, "".concat(k, ".cancelSubscriptionModal.headerText")),
						message: Object(d.a)(l, "".concat(k, ".cancelSubscriptionModal.message")),
						cancelText: Object(d.a)(l, "".concat(k, ".cancelSubscriptionModal.cancelText")),
						acceptText: Object(d.a)(l, "".concat(k, ".cancelSubscriptionModal.acceptText")),
						onAccept: this.onYesCancelSubscription,
						onCancel: this.onNoCancelSubscription,
						onOverlayClick: this.onNoCancelSubscription,
						withOverlay: !0
					}))
				}
			}
			t.b = I(Object(f.b)(T))
		},
		"./src/reddit/components/Settings/PrivacyForm.m.less": function(e, t, s) {
			e.exports = {
				ListsWrapper: "_1el3NPZn6qsGupLNWd_uTE",
				listsWrapper: "_1el3NPZn6qsGupLNWd_uTE",
				SubheaderLink: "_2SoL5Q_2U0LQC1BPaNletZ",
				subheaderLink: "_2SoL5Q_2U0LQC1BPaNletZ",
				GenerateBackupCodesButton: "kLUeYesCcX7szHNBR8OZZ",
				generateBackupCodesButton: "kLUeYesCcX7szHNBR8OZZ"
			}
		},
		"./src/reddit/components/Settings/ProfileForm.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_1eYdOjwOMPgWEBUvBUaXVK",
				rawHtmlDisplay: "_1eYdOjwOMPgWEBUvBUaXVK",
				ImageUploaderLayout: "_2UkVCdCS7jDS13coUav5oC",
				imageUploaderLayout: "_2UkVCdCS7jDS13coUav5oC",
				Label: "_13ua4iQuXbXY7Lw2azcfDP",
				label: "_13ua4iQuXbXY7Lw2azcfDP",
				IconImageUploader: "_2kvG3QudGNH1b_hbipcXwO",
				iconImageUploader: "_2kvG3QudGNH1b_hbipcXwO",
				BannerImageUploader: "_2tWHV_FWMxyBDr_Buc80WV",
				bannerImageUploader: "_2tWHV_FWMxyBDr_Buc80WV",
				DummyBanner: "_20K7NkpV6o6A7B6SOc7V03",
				dummyBanner: "_20K7NkpV6o6A7B6SOc7V03",
				Preview: "_2TAJM8DsUslS0NXRNj4kJj",
				preview: "_2TAJM8DsUslS0NXRNj4kJj"
			}
		},
		"./src/reddit/components/Settings/SortSetting/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2gyG4Nl0mMXg9j65G_cVwp",
				Separator: "_1IJCWpm5hdHFEoHFC4K7wC",
				separator: "_1IJCWpm5hdHFEoHFC4K7wC"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Header/index.m.less": function(e, t, s) {
			e.exports = {
				subtitle: "_2K1zfRnW-eaoEdnfpyRcmh",
				title: "_3oLMEvh1HrW0gnI4GnF4hs"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less": function(e, t, s) {
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
				warning: "_1DMG--ENBA93KSauQNMsTI"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less": function(e, t, s) {
			e.exports = {
				textOverflow: "_1cJfM1Loi1IW6h-Gvd5tHM",
				button: "_1pqGWiE4CZF0y478Lzawc7",
				cancelled: "_2SaAnyYncaEeqGv38ngjw",
				joinDate: "_2R_qBER1OZsfaxvAv-57vk",
				container: "_2HZuIxJNdTH2UzaarZ_2_K",
				membershipName: "_1SOtSjbR4ugPAPrTgPSB8k"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less": function(e, t, s) {
			e.exports = {
				empty: "_3KZ9x8iqbtVhgYU5aZK96i",
				loading: "_18AXwLWTkHAhpgyT2m7kii",
				title: "_22W0HCOIPB2NC_q2PuiXQ8"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/index.m.less": function(e, t, s) {
			e.exports = {
				header: "RBCMMCYwCum0i_wuk50dM"
			}
		},
		"./src/reddit/components/Settings/ViewSetting/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "YpPJkfznV3Pha9pNUbPR7"
			}
		},
		"./src/reddit/components/Settings/index.m.less": function(e, t, s) {
			e.exports = {
				bulletedList: "vxL7rNBEiV-X9jWEV--zw",
				premiumHeading: "yBOjy8Ssm6dCzStP0YSks",
				premiumSubtext: "_2D4kg4-iMxeubZ4vWU0cXG"
			}
		},
		"./src/reddit/components/Settings/shared/Dropdown/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2OI2GNt8U_hqISJzbsrb0Y",
				labelWrapper: "Mw10gImD3M_Xbm-yM9eyH",
				dropdownRow: "_183U1ds639-b2Av2n7Mdt_"
			}
		},
		"./src/reddit/components/Settings/shared/FatInput.m.less": function(e, t, s) {
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
		"./src/reddit/components/Settings/shared/FatInput.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Settings/shared/FatInput.m.less"),
				i = s.n(o),
				c = s("./src/lib/lessComponent.tsx");
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
						disabled: s,
						label: n,
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
					}), a.a.createElement(d, null, n), o && a.a.createElement(m, {
						disabled: !!s,
						onClick: o
					}, e))
				}
			}
		},
		"./src/reddit/components/Settings/shared/Heading.m.less": function(e, t, s) {
			e.exports = {
				Heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				HeadingSubtext: "_3yr8kdlxh51P-SJDaWVzJD",
				headingSubtext: "_3yr8kdlxh51P-SJDaWVzJD"
			}
		},
		"./src/reddit/components/Settings/shared/Heading.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Settings/shared/Heading.m.less"),
				r = s.n(a);
			t.b = n.a.h2("Heading", r.a);
			const o = n.a.p("HeadingSubtext", r.a)
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				o = s("./src/reddit/models/Image/index.tsx");
			class i extends a.a.Component {
				constructor() {
					super(...arguments), this.onChange = async e => {
						if (!e) return;
						const t = Array.isArray(e) && e.length > 0 ? e[0] : e,
							s = await Object(o.e)(t);
						this.props.onChange(s)
					}
				}
				render() {
					const {
						className: e,
						label: t,
						labelClassName: s,
						value: n,
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
						labelClassName: s,
						multiple: !1,
						tabIndex: c,
						value: n,
						onChange: this.onChange
					})
				}
			}
			t.a = i
		},
		"./src/reddit/components/Settings/shared/Layout.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1OrNGmpfcSuSebbZM5vYq4",
				container: "_1OrNGmpfcSuSebbZM5vYq4",
				Content: "_3FVpvZ7OLbS_68QzaxplxT",
				content: "_3FVpvZ7OLbS_68QzaxplxT",
				Sidebar: "_6hkUCjcaRoPRm1710RzSl",
				sidebar: "_6hkUCjcaRoPRm1710RzSl",
				"m-collectionLayout": "_1LF62vb6GTug21RCMM47iK",
				mCollectionLayout: "_1LF62vb6GTug21RCMM47iK"
			}
		},
		"./src/reddit/components/Settings/shared/Layout.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/components/Settings/shared/Layout.m.less"),
				o = s.n(r),
				i = s("./src/lib/lessComponent.tsx");
			const c = i.a.div("Container", o.a),
				l = i.a.div("Content", o.a),
				d = i.a.div("Sidebar", o.a);
			t.a = e => a.a.createElement(c, {
				className: e.className
			}, a.a.createElement(l, null, e.children), a.a.createElement(d, null, e.sidebar))
		},
		"./src/reddit/components/Settings/shared/ListWidget.m.less": function(e, t, s) {
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
		"./src/reddit/components/Settings/shared/SectionHeading.m.less": function(e, t, s) {
			e.exports = {
				Component: "BotIImuktRA9aFAPP0O4Z",
				component: "BotIImuktRA9aFAPP0O4Z"
			}
		},
		"./src/reddit/components/Settings/shared/SectionHeading.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/Settings/shared/SectionHeading.m.less"),
				a = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.h3("Component", a.a)
		},
		"./src/reddit/components/Settings/shared/UserRow.m.less": function(e, t, s) {
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
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/connectors/connectToLanguage.ts"),
				c = s("./src/reddit/controls/FileDrop/index.tsx"),
				l = s("./src/reddit/controls/ImageInput/index.tsx"),
				d = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = s("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				u = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				b = s.n(p);
			const h = o.a.wrapped(m.a, "ImageUploadIcon", b.a),
				g = o.a.div("ImageIconRow", b.a),
				f = o.a.div("ImageUploadText", b.a),
				x = o.a.wrapped(c.a, "FileDrop", b.a),
				v = o.a.div("ContainerUploading", b.a),
				y = Object(i.a)(e => a.a.createElement(v, {
					className: e.className
				}, a.a.createElement(g, null, a.a.createElement(d.a, {
					sizePx: 40,
					center: !0
				})), a.a.createElement(f, null, a.a.createElement(u.c, null, "Uploading...")))),
				O = o.a.label("Label", b.a);
			t.b = e => a.a.createElement(x, {
				className: e.className,
				onDrop: e.onChange,
				render: t => a.a.createElement(O, {
					className: Object(r.a)({
						[b.a.isOver]: t
					})
				}, a.a.createElement(g, null, a.a.createElement(h, null)), a.a.createElement(f, null, e.label), a.a.createElement(l.a, {
					className: b.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				let {
					type: t
				} = e;
				return "subreddit" === t ? "subredditActions" : "profileActions"
			}
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, s) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
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
		"./src/reddit/components/TabNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n, a = s("./node_modules/lodash/throttle.js"),
				r = s.n(a),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/constants/componentSizes.ts"),
				u = s("./src/reddit/constants/zIndex.ts"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				h = s("./src/reddit/components/TabNav/index.m.less"),
				g = s.n(h),
				f = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			! function(e) {
				e.GEAR = "gear"
			}(n || (n = {}));
			const x = d.a.wrapped(b.a, "Gear", g.a),
				v = d.a.h3("Title", g.a),
				y = d.a.div("TabNavContainer", g.a),
				O = d.a.div("Tabs", g.a),
				C = d.a.wrapped(e => {
					var {
						active: t,
						enabled: s
					} = e, n = f(e, ["active", "enabled"]);
					return i.a.createElement(p.a, {
						"aria-selected": t,
						className: Object(c.a)(n.className, {
							[g.a.mIsActive]: t,
							[g.a.mIsEnabled]: !1 !== s
						}),
						role: "tab",
						to: n.to
					}, n.children)
				}, "Tab", g.a),
				E = e => {
					switch (e) {
						case n.GEAR:
							return i.a.createElement(x, null);
						default:
							return null
					}
				},
				j = () => window.pageYOffset || window.scrollY,
				w = 75,
				_ = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: m.g,
					willChange: "transform",
					zIndex: u.f
				};
			class k extends i.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = r()(() => {
						this.state.sticky || this.forceUnsticky ? j() < w && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : j() >= w && this.setState({
							sticky: !0
						})
					}, l.F), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
					return i.a.createElement(y, {
						className: this.props.className
					}, i.a.createElement(v, {
						className: Object(c.a)({
							[g.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, E(this.props.icon), this.props.title), i.a.createElement(O, {
						className: Object(c.a)({
							[g.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? _ : void 0
					}, this.props.children))
				}
			}
			t.c = k
		},
		"./src/reddit/components/UserNameAndIcon/index.m.less": function(e, t, s) {
			e.exports = {
				UserIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				userIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				UserLink: "_2Q3rLIRb_ij54AEsabVm9L",
				userLink: "_2Q3rLIRb_ij54AEsabVm9L"
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				c = s("./src/reddit/controls/InternalLink/index.tsx"),
				l = s("./src/reddit/components/UserNameAndIcon/index.m.less"),
				d = s.n(l);
			const m = o.a.img("UserIcon", d.a),
				u = o.a.wrapped(c.a, "UserLink", d.a);
			t.a = e => r.a.createElement(u, {
				className: e.className,
				to: "".concat(n.a.redditUrl, "/user/").concat(e.username)
			}, r.a.createElement(i.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, r.a.createElement(m, {
				src: e.userIcon || "".concat(n.a.assetPath, "/img/placeholder_gradient_light-280.png"),
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}), e.username))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i),
				l = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const d = r.a.div("WidgetBackground", c.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, s = l(e, ["children"]);
					return a.a.createElement("div", s, a.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => a.a.createElement("div", {
				className: e.className
			}, a.a.createElement(d, null, e.children))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/monthsToMinutes.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				c = s("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(a.c)({
				language: c.T,
				subscribeReminderTooltipId: o.C,
				subscribeTooltipId: o.D,
				userIsSubscriber: i.cb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(r.d([s], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([s], !1))
				}
			})
		},
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/user.ts");
			const o = Object(a.c)({
				language: r.T
			});

			function i(e) {
				return Object(n.b)(o)(e)
			}
		},
		"./src/reddit/constants/disclaimers.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
				}(n || (n = {}));
			const a = "https://www.redditinc.com/policies/beta-terms-of-service"
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/i18n/utils.ts");
			const r = {
					[n.N.BEST]: Object(a.c)("best"),
					[n.N.HOT]: Object(a.c)("hot"),
					[n.N.NEW]: Object(a.c)("new"),
					[n.N.CONTROVERSIAL]: Object(a.c)("controversial"),
					[n.N.RISING]: Object(a.c)("rising"),
					[n.N.TOP]: Object(a.c)("top")
				},
				o = {
					[n.Pb.HOUR]: Object(a.c)("Now"),
					[n.Pb.DAY]: Object(a.c)("Today"),
					[n.Pb.WEEK]: Object(a.c)("This week"),
					[n.Pb.MONTH]: Object(a.c)("This month"),
					[n.Pb.YEAR]: Object(a.c)("This year"),
					[n.Pb.ALL]: Object(a.c)("All time")
				}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
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
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
				l = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.m.less"),
				m = s.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const b = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: o,
						"data-redditstyle": i
					} = t, c = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), l = ((e, t, s) => {
						const n = !(!t && !s);
						let a = "";
						return a = e ? n ? m.a.mDisabledRedditStyle : m.a.mDisabled : n ? m.a.mActiveRedditStyle : m.a.mActive
					})(n, o, i);
					return a.a.createElement(e, u({
						className: Object(r.a)(m.a.Checkbox, l, s)
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/throttle.js"),
				a = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				u = s.n(m),
				p = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = a()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(i.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(c.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && o.a.createElement("span", {
						className: s
					}, e.children), o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(d.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: a()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showDropdownTriangle && o.a.createElement(l.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = g(e, ["className"]);
				const n = Object(i.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !s.noHover,
					[b.a.mIsSelected]: s.isSelected
				});
				return o.a.createElement(f, h({
					className: n
				}, s))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/uniqueId.js"),
				a = s.n(n),
				r = s("./node_modules/raf/index.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/selectors/activeModalId.ts"),
				h = s("./src/higherOrderComponents/asModal/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				x = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				v = s.n(x);
			var y = Object(h.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return c.a.createElement("div", {
						className: v.a.wrapper
					}, c.a.createElement(f.a, {
						className: v.a.titleRow
					}, s), c.a.createElement("div", {
						className: v.a.detailsContainer
					}, t), c.a.createElement(f.a, {
						className: v.a.buttonRow
					}, c.a.createElement(g.f, {
						className: v.a.confirmButton,
						onClick: e.onConfirmed
					}, Object(p.c)("Ok"))))
				}),
				O = s("./src/reddit/controls/ErrorText/index.m.less"),
				C = s.n(O);
			s.d(t, "a", (function() {
				return _
			})), s.d(t, "c", (function() {
				return k
			}));
			const E = Object(d.c)({
				activeModalId: b.a
			});
			class j extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(a()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					o()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: s,
						errorModalBody: n,
						errorModalTitle: a = Object(p.c)("Error"),
						moreText: r = Object(p.c)("More")
					} = this.props, {
						modalId: o,
						textHasOverflowed: i
					} = this.state;
					return c.a.createElement("div", {
						className: Object(m.a)(C.a.wrapper, s)
					}, c.a.createElement("span", {
						className: C.a.description,
						ref: this.spanRef
					}, e), i && c.a.createElement("span", {
						className: C.a.moreText,
						onClick: this.toggleModal
					}, r), t === o && c.a.createElement(y, {
						onConfirmed: this.toggleModal,
						title: a
					}, n || e))
				}
			}
			const w = Object(l.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(j),
				_ = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: a,
						messages: r = []
					} = e, o = r.length ? r : a ? [a] : [];
					return o.length ? c.a.createElement("div", {
						className: t
					}, o.map((e, t) => c.a.createElement(w, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				k = e => c.a.createElement(_, {
					fallbackMessage: Object(p.c)("Something went wrong"),
					messages: e
				});
			t.b = w
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/flow.js"),
				a = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-dnd/lib/index.js"),
				c = s("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = s("./src/reddit/helpers/dragDropContext/index.ts");
			const d = c.NativeTypes.FILE,
				m = a()(Object(i.DropTarget)(d, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const s = t.getItem();
						s.files && e.onDrop(s.files)
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
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			class r extends a.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							s = this.props.multiple ? [...t] : t[0];
						this.props.onChange(s), this.setState(() => ({
							value: s
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
					} = this, s = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, r = s || n;
					return a.a.createElement("div", {
						className: e.className
					}, s && a.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: s,
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
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = s.n(o);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: n
				} = e;
				return a.a.createElement("div", {
					className: Object(r.a)(i.a.loadingIcon, s, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(n, "px")
					}
				})
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = s.n(r);
			t.a = n.a.wrapped(a.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			}));
			var n, a = s("./src/config.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case n.Ethereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function i(e, t, s) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function c(e, t, s) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: s
				})
			}
			async function l(e, t, s) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(s)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(n || (n = {}))
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-dnd/lib/index.js"),
				a = s("./node_modules/react-dnd-html5-backend/lib/index.js"),
				r = s.n(a);
			t.a = Object(n.DragDropContext)(r.a)
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "i", (function() {
				return p
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "f", (function() {
				return P
			}));
			var n = s("./src/reddit/models/PushNotification/index.ts"),
				a = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/telemetry/index.ts");
			const o = e => Object.assign({}, a.defaults(e), {
					noun: "desktop_notification_permissions"
				}),
				i = e => e ? "enable" : "disable",
				c = e => {
					Object(r.a)(Object.assign({}, o(e), {
						action: "view",
						source: "popup"
					}))
				},
				l = e => {
					Object(r.a)(Object.assign({}, o(e), {
						action: "allow",
						source: "popup"
					}))
				},
				d = e => {
					Object(r.a)(Object.assign({}, o(e), {
						action: "block",
						source: "popup"
					}))
				},
				m = e => {
					Object(r.a)(Object.assign({}, o(e), {
						action: "close",
						source: "popup"
					}))
				},
				u = (e, t, s) => Object.assign({}, a.defaults(e), {
					actionInfo: a.actionInfo(e, {
						success: t,
						reason: s
					}),
					noun: "push_token"
				}),
				p = e => {
					Object(r.a)(Object.assign({}, u(e, !0), {
						action: "request",
						source: "notification"
					}))
				},
				b = e => {
					Object(r.a)(Object.assign({}, u(e, !0), {
						action: "register",
						source: "notification"
					}))
				},
				h = (e, t) => {
					Object(r.a)(Object.assign({}, u(e, !1, t), {
						action: "bail",
						source: "notification"
					}))
				},
				g = e => Object.assign({}, (e => Object.assign({}, a.defaults(e), {
					noun: "push_notification"
				}))(e), {
					notification: a.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				f = e => (t, s) => {
					Object(r.a)(Object.assign({}, a.defaults(t), {
						action: i(s),
						noun: e,
						source: "notification"
					}))
				},
				x = f("chat_messages"),
				v = f("chat_requests"),
				y = f("comment_replies"),
				O = f("community_recs"),
				C = f("desktop_notification_permissions"),
				E = f("live_event"),
				j = f("post_replies"),
				w = f("private_messages"),
				_ = f("trending_posts"),
				k = f("username_mention"),
				S = f("upvotes_comment"),
				N = f("upvotes_post"),
				P = (e, t, s) => {
					switch (t) {
						case n.a.ChatMessages:
							x(e, s), v(e, s);
							break;
						case n.a.CommunityRecommendations:
							O(e, s);
							break;
						case n.a.LiveEvent:
							E(e, s);
							break;
						case n.a.TrendingPosts:
							_(e, s);
							break;
						case n.a.UpvotedComments:
							S(e, s);
							break;
						case n.a.UpvotedPosts:
							N(e, s);
							break;
						case n.a.UnreadMessages:
							y(e, s), j(e, s), w(e, s), k(e, s)
					}
				}
		},
		"./src/reddit/helpers/trackers/premiumSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return c
			})), s.d(t, "j", (function() {
				return l
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "g", (function() {
				return f
			}));
			var n = s("./src/reddit/selectors/telemetry.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				r = s("./src/telemetry/models/GoldPurchase.ts"),
				o = s("./src/reddit/helpers/correlationIdTracker.ts");
			const i = e => Object.assign({}, n.defaults(e), {
					correlationId: Object(o.c)(o.a.PremiumSettings),
					screen: n.screen(e)
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
						type: Object(a.r)(e) ? r.Cancel : r.GetPremium
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
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(r.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", i.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, s) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, s) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

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
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = s.n(o);
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
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
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
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
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
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/Notify/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_7fz7O_5kpe94rgtJU-zES"
			}
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
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
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
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
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Top/index.m.less"),
				i = s.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(o);
			const c = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

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
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, s) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/layout/twoCol/Dynamic/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				r = s.n(a);
			t.a = n.a.div("dynamicTwoCol", r.a)
		},
		"./src/reddit/models/PushNotification/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.ChatMessages = "chatMessages", e.CommunityRecommendations = "communityRecommendations", e.LiveEvent = "liveEvent", e.TrendingPosts = "trendingPosts", e.UnreadMessages = "unreadMessages", e.UpvotedComments = "upvotedComments", e.UpvotedPosts = "upvotedPosts"
				}(n || (n = {}))
		},
		"./src/reddit/pages/Settings/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./node_modules/uuid/v4.js"),
				c = s.n(i),
				l = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/reddit/actions/pages/shared.ts"),
				u = s("./node_modules/js-cookie/src/js.cookie.js"),
				p = s.n(u),
				b = s("./src/app/strings/index.ts"),
				h = s("./src/reddit/actions/alpha.ts"),
				g = s("./src/reddit/actions/login.ts"),
				f = s("./src/reddit/actions/modal.ts"),
				x = s("./src/reddit/actions/users.ts"),
				v = s("./src/reddit/components/ConfirmModal/index.tsx"),
				y = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/controls/Button/index.tsx")),
				O = s("./src/reddit/selectors/user.ts"),
				C = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/validateEmail/index.ts"),
				j = s("./src/reddit/actions/toaster.ts"),
				w = s("./src/reddit/components/Settings/shared/FatInput.tsx"),
				_ = s("./src/reddit/i18n/components.tsx"),
				k = s("./src/reddit/i18n/utils.ts"),
				S = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				N = s("./src/reddit/icons/svgs/Info/index.tsx"),
				P = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				I = s("./src/reddit/models/Toast/index.ts"),
				M = s("./src/reddit/models/User/index.ts"),
				T = s("./src/reddit/components/Settings/FPRWarning/index.m.less"),
				L = s.n(T);
			const D = Object(o.c)({
					emailSent: e => e.user.accountSettings.sendResetEmail.api.emailSent,
					username: e => {
						const t = Object(O.i)(e);
						return t && Object(M.f)(t) || ""
					}
				}),
				B = Object(r.b)(D, e => ({
					changeEmail: t => e(Object(x.w)(t)),
					sendResetEmail: t => e(Object(x.z)(t)),
					showErrorToast: t => e(Object(j.e)({
						duration: j.a,
						kind: I.b.Error,
						text: t
					}))
				})),
				A = e => e ? a.a.createElement(S.a, {
					className: Object(C.a)(L.a.image, L.a.success)
				}) : a.a.createElement(P.a, {
					className: Object(C.a)(L.a.image, L.a.error)
				}),
				U = e => e ? Object(k.c)("\n    Check your email. Please allow some time for the email\n    to arrive. If you do not receive it, please check it was\n    not flagged as spam or try resending the email below.\n  ") : Object(k.c)("\n    We have detected suspicious activity on your account.\n    For your safety we have suspended your account until\n    you reset your password to confirm your identity.\n  "),
				F = e => e ? Object(k.c)("Reset password email sent") : Object(k.c)("Send a reset password email to access your account"),
				R = e => e ? Object(k.c)("Email was sent to: ") : Object(k.c)("Email will be sent to: "),
				W = e => {
					const {
						errorMsg: t,
						inputChecked: s
					} = e;
					return s ? t ? a.a.createElement(N.a, {
						className: Object(C.a)(L.a.inputIcon, L.a.error)
					}) : a.a.createElement(S.a, {
						className: Object(C.a)(L.a.inputIcon, L.a.success)
					}) : null
				};
			class H extends a.a.Component {
				constructor(e) {
					super(e), this.onEmailChange = e => this.setState({
						enteredEmail: e,
						errorMsg: "",
						inputChecked: !1
					}), this.onSendResetEmail = () => {
						const {
							changeEmail: e,
							email: t,
							sendResetEmail: s
						} = this.props, {
							enteredEmail: n
						} = this.state, a = Object(E.a)(n, !1), r = a ? "" : Object(k.c)("Please fix your email to continue.");
						this.setState({
							errorMsg: r,
							inputChecked: !0
						}), a && (t ? s({
							curEmail: n,
							name: this.props.username
						}) : e({
							newEmail: n
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
						errorMsg: s
					} = this.state, n = !this.props.email && !e, r = n && this.state.inputChecked && (s ? "errorBorder" : "successBorder") || "";
					return a.a.createElement("div", {
						className: L.a.container
					}, a.a.createElement("h3", {
						className: L.a.header
					}, a.a.createElement(_.c, null, "Account suspended")), a.a.createElement("div", {
						className: L.a.status
					}, A(e), a.a.createElement("h3", {
						className: L.a.statusText
					}, F(e))), a.a.createElement("p", {
						className: L.a.description
					}, U(e)), a.a.createElement("div", {
						className: L.a.actionContainer
					}, a.a.createElement("div", {
						className: L.a.emailContainer
					}, n ? a.a.createElement(a.a.Fragment, null, a.a.createElement(w.a, {
						className: Object(C.a)(L.a.input, L.a[r]),
						label: Object(k.c)("Enter email"),
						onChange: this.onEmailChange,
						value: t
					}), W(this.state), a.a.createElement("h6", {
						className: L.a.errorMsg
					}, s)) : a.a.createElement("p", {
						className: L.a.emailText
					}, R(e), a.a.createElement("span", {
						className: L.a.emailAddress
					}, t))), a.a.createElement(y.f, {
						className: L.a.primaryBtn,
						onClick: this.onSendResetEmail
					}, e ? Object(k.c)("Resend") : Object(k.c)("Send"))))
				}
			}
			var z = B(H),
				V = s("./src/reddit/components/Settings/modalIds.ts"),
				J = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				G = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				K = s("./src/reddit/components/Settings/AccountPrefsSection/index.m.less"),
				Z = s.n(K),
				q = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const X = Object(o.c)({
					hasVerifiedEmail: O.x,
					isFPR: O.I
				}),
				Y = Object(r.b)(X, e => ({
					openChangeEmailModal: () => e(Object(f.i)(V.a)),
					resendEmail: () => e(Object(x.y)())
				})),
				Q = e => {
					let {
						email: t,
						hasVerifiedEmail: s,
						resendEmail: n
					} = e;
					return t ? s ? t : a.a.createElement(a.a.Fragment, null, Object(k.c)("".concat(Object(k.b)("email", t), " not verified! ")), a.a.createElement(y.d, {
						className: Z.a.tertiaryBtn,
						onClick: n
					}, a.a.createElement(_.c, null, "Click to resend"))) : Object(k.c)("Missing email, please update to secure your account")
				};
			var $ = Y(e => {
					var {
						isFPR: t,
						openChangeEmailModal: s,
						toggleChangePasswordModal: n
					} = e, r = q(e, ["isFPR", "openChangeEmailModal", "toggleChangePasswordModal"]);
					return t ? a.a.createElement(z, {
						email: r.email
					}) : a.a.createElement(a.a.Fragment, null, a.a.createElement(J.a, null, a.a.createElement(_.c, null, "Account preferences")), a.a.createElement(G.b, {
						actionText: Object(k.c)("Change"),
						label: Object(k.c)("Email address"),
						onClick: s,
						subtext: Q(r)
					}), a.a.createElement(G.b, {
						actionText: Object(k.c)("Change"),
						label: Object(k.c)("Change password"),
						last: !0,
						onClick: n,
						subtext: Object(k.c)("Password must be at least 6 characters long")
					}))
				}),
				ee = s("./src/reddit/components/Settings/shared/Heading.tsx"),
				te = s("./src/reddit/components/Settings/shared/Layout.tsx"),
				se = s("./src/reddit/selectors/activeModalId.ts"),
				ne = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ae = s("./src/config.ts"),
				re = s("./src/reddit/actions/externalAccount.ts"),
				oe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				ce = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				le = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				de = s("./src/reddit/models/ExternalAccount/index.ts"),
				me = s("./src/reddit/selectors/externalAccount.ts"),
				ue = s("./src/reddit/components/Settings/ConnectedAccounts.m.less"),
				pe = s.n(ue),
				be = s("./src/lib/lessComponent.tsx");
			const he = "settings.accountForm.connectedAccounts",
				ge = be.a.wrapped(le.a, "TwitterIcon", pe.a),
				fe = 15,
				xe = be.a.wrapped(ie.a, "LoadingIcon", pe.a),
				ve = be.a.wrapped(y.f, "ConnectTwitterButton", pe.a),
				ye = be.a.span("TextAndIconWrapper", pe.a),
				Oe = be.a.wrapped(y.j, "DisconnectButton", pe.a),
				Ce = be.a.span("Username", pe.a),
				Ee = be.a.div("ConnectionInfo", pe.a),
				je = Object(o.c)({
					twitterAccount: me.a,
					isTwitterConnectionPending: me.b,
					language: O.T
				}),
				we = Object(r.b)(je, e => ({
					onConnectAccount: t => {
						e(re.m(t)), t === de.a.Twitter && e((e, t) => ce.b(t()))
					},
					onDisconnectAccount: t => {
						e(re.n(t)), t === de.a.Twitter && e((e, t) => ce.d(t()))
					},
					trackDisplayLinkOnProfileToggled: t => e((e, s) => ce.e(s(), t))
				}));
			class _e extends a.a.Component {
				constructor() {
					super(...arguments), this.onConnectTwitterClicked = e => {
						e.preventDefault(), this.props.onConnectAccount(de.a.Twitter)
					}, this.onDisconnectTwitterClicked = e => {
						e.preventDefault(), this.props.onDisconnectAccount(de.a.Twitter)
					}, this.onShowTwitterLinkClicked = () => {
						this.props.update(!this.props.prefs.showTwitter, "showTwitter"), this.props.trackDisplayLinkOnProfileToggled(!this.props.prefs.showTwitter)
					}, this.updateTwitterPref = () => {
						this.props.update(!this.props.prefs.showTwitter, "showTwitter"), this.props.trackDisplayLinkOnProfileToggled(!this.props.prefs.showTwitter)
					}
				}
				renderTwitterConnectionLink() {
					const {
						language: e,
						isTwitterConnectionPending: t
					} = this.props;
					return a.a.createElement(G.c, {
						label: Object(b.a)(e, "".concat(he, ".connectToTwitter.label")),
						subtext: Object(b.a)(e, "".concat(he, ".connectToTwitter.subtext"))
					}, a.a.createElement(ve, {
						onClick: this.onConnectTwitterClicked
					}, t ? a.a.createElement(xe, {
						sizePx: fe
					}) : a.a.createElement(ye, null, a.a.createElement(ge, null), Object(b.a)(e, "".concat(he, ".connectToTwitter.label")))))
				}
				renderTwitterConnectionStatus() {
					const {
						language: e
					} = this.props, t = this.props.twitterAccount;
					return a.a.createElement(G.c, {
						label: Object(b.a)(e, "".concat(he, ".twitterConnected.label")),
						subtext: Object(b.a)(e, "".concat(he, ".twitterConnected.subtext"))
					}, a.a.createElement(Ee, null, a.a.createElement("div", null, a.a.createElement(Ce, null, "@", t.username)), a.a.createElement(Oe, {
						onClick: this.onDisconnectTwitterClicked
					}, "(", Object(b.a)(e, "".concat(he, ".disconnect")), ")")))
				}
				render() {
					const {
						language: e,
						prefs: t,
						twitterAccount: s
					} = this.props;
					return a.a.createElement(n.Fragment, null, a.a.createElement(J.a, {
						id: "connected-accounts"
					}, a.a.createElement(_.c, null, "Connected accounts")), s ? this.renderTwitterConnectionStatus() : this.renderTwitterConnectionLink(), a.a.createElement(G.n, {
						disabled: !s,
						indent: !0,
						label: Object(b.a)(e, "".concat(he, ".showTwitterLink")),
						on: !!t.showTwitter,
						onClick: this.updateTwitterPref,
						subtext: Object(b.a)(e, "".concat(he, ".showTwitterLinkDescription"))
					}))
				}
			}
			var ke = Object(oe.t)()(we(_e)),
				Se = s("./src/reddit/components/Settings/DeactivateModal.tsx"),
				Ne = s("./src/reddit/components/Settings/AccountForm.m.less"),
				Pe = s.n(Ne);
			const Ie = be.a.wrapped(ne.b, "Trash", Pe.a),
				Me = be.a.button("DeactivateButton", Pe.a),
				Te = be.a.div("DeactivateWrapper", Pe.a),
				Le = Object(o.c)({
					deactivateModalOpen: Object(se.b)("deactivate_modal_id"),
					email: O.l,
					inRedesignBeta: O.D,
					language: O.T,
					optoutModalOpen: Object(se.b)("settins_optout_modal_id"),
					user: O.i
				});
			var De = Object(r.b)(Le, (e, t) => ({
					deactivate: t => {
						e(Object(x.x)(t))
					},
					optOut: async () => {
						if ("new.reddit.com" === window.location.host) return window.location.assign("https://old.reddit.com/prefs");
						p.a.get("rseor3") && p.a.remove("rseor3", {
							domain: ae.a.cookieDomain
						}), await e(Object(h.b)()), window.location.href = "".concat(ae.a.redditUrl, "/prefs")
					},
					resendEmail: () => e(Object(x.y)()),
					toggleChangePasswordModal: () => e(Object(g.b)()),
					toggleDeactivateModal: () => e(Object(f.i)("deactivate_modal_id")),
					toggleOptoutModal: () => e(Object(f.i)("settins_optout_modal_id"))
				}))(e => a.a.createElement(te.a, null, a.a.createElement(ee.b, null, Object(b.a)(e.language, "".concat("settings.accountForm", ".headings.main"))), a.a.createElement($, {
					email: e.email,
					toggleChangePasswordModal: e.toggleChangePasswordModal
				}), a.a.createElement(ke, e), a.a.createElement(J.a, null, Object(b.a)(e.language, "".concat("settings.accountForm", ".headings.betaTests"))), a.a.createElement(G.n, {
					on: e.prefs.inBeta,
					onClick: () => e.update(!e.prefs.inBeta, "inBeta"),
					label: Object(b.a)(e.language, "".concat("settings.accountForm", ".beta.label")),
					subtext: Object(b.a)(e.language, "".concat("settings.accountForm", ".beta.subtext"))
				}), a.a.createElement(G.n, {
					on: !e.inRedesignBeta,
					onClick: e.toggleOptoutModal,
					label: Object(b.a)(e.language, "".concat("settings.accountForm", ".inRedesignBeta.label")),
					subtext: Object(b.a)(e.language, "".concat("settings.accountForm", ".inRedesignBeta.subtext")),
					last: !0
				}), a.a.createElement(J.a, null, Object(b.a)(e.language, "".concat("settings.accountForm", ".headings.deactivate"))), a.a.createElement(Te, null, a.a.createElement(Me, {
					onClick: e.toggleDeactivateModal
				}, a.a.createElement(Ie, null), Object(b.a)(e.language, "".concat("settings.accountForm", ".deactivateModal.labels.deactivateModalToggle")))), e.optoutModalOpen && a.a.createElement(v.a, {
					headerText: Object(b.a)(e.language, "".concat("settings.accountForm", ".optOutModal.headerText")),
					message: Object(b.a)(e.language, "".concat("settings.accountForm", ".optOutModal.message")),
					cancelText: Object(b.a)(e.language, "".concat("settings.accountForm", ".optOutModal.cancelText")),
					acceptText: Object(b.a)(e.language, "".concat("settings.accountForm", ".optOutModal.acceptText")),
					onAccept: e.optOut,
					onCancel: e.toggleOptoutModal,
					onOverlayClick: e.toggleOptoutModal,
					withOverlay: !0
				}), e.deactivateModalOpen && a.a.createElement(Se.b, {
					onClick: e.deactivate,
					exit: e.toggleDeactivateModal,
					onOverlayClick: e.toggleDeactivateModal,
					user: e.user,
					withOverlay: !0
				}))),
				Be = s("./src/reddit/featureFlags/index.ts"),
				Ae = s("./src/reddit/reducers/user/prefs/index.ts"),
				Ue = s("./src/reddit/actions/chat/constants.ts"),
				Fe = s("./src/reddit/actions/chat/userSettings.ts"),
				Re = s("./src/reddit/actions/userBlocks.ts"),
				We = s("./src/reddit/actions/userWhitelist.ts"),
				He = s("./src/lib/timeAgo/index.ts"),
				ze = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Ve = s("./src/reddit/components/Hovercards/helpers.ts"),
				Je = s("./src/reddit/components/UserNameAndIcon/index.tsx"),
				Ge = s("./src/reddit/components/Settings/shared/UserRow.m.less"),
				Ke = s.n(Ge);
			const Ze = be.a.p("Date", Ke.a),
				qe = be.a.wrapped(Je.a, "UserNameAndIcon", Ke.a),
				Xe = be.a.button("Button", Ke.a),
				Ye = be.a.div("ButtonWrapper", Ke.a);
			var Qe = be.a.wrapped(e => a.a.createElement("div", {
					className: e.className
				}, a.a.createElement(qe, {
					username: e.name,
					userIcon: e.img,
					tooltipId: Object(Ve.b)({
						author: e.name,
						tooltipIdPrefix: ze.a
					}),
					sendHoverCardEvent: () => {},
					iconSize: 24
				}), a.a.createElement(Ze, null, Object(He.d)(e.language, e.date / 1e3)), a.a.createElement(Ye, null, a.a.createElement(Xe, {
					disabled: !!e.disabled,
					onClick: e.onClick
				}, "Remove"))), "Component", Ke.a),
				$e = s("./src/reddit/models/WhitelistAndBlocked.ts"),
				et = s("./src/reddit/components/Settings/shared/ListWidget.m.less"),
				tt = s.n(et);
			const st = 5,
				nt = be.a.h4("ListHeading", tt.a),
				at = be.a.div("ListBox", tt.a),
				rt = be.a.div("MoreWrapper", tt.a),
				ot = be.a.button("MoreButton", tt.a),
				it = be.a.wrapped(G.l, "Subtext", tt.a);
			class ct extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						showAll: !1,
						value: ""
					}
				}
				componentDidUpdate(e, t) {
					e.api.new === $e.a.pending && this.props.api.new === $e.a.waitingForRequest && this.setState({
						value: ""
					})
				}
				render() {
					const {
						showAll: e,
						value: t
					} = this.state, {
						className: s,
						api: n,
						add: r,
						padBottom: o,
						remove: i,
						list: c,
						language: l,
						label: d,
						title: m,
						subtext: u
					} = this.props, p = e ? c.length : 5;
					return a.a.createElement("div", {
						className: Object(C.a)(tt.a.container, s, {
							[tt.a.mPadBottom]: !!o
						})
					}, a.a.createElement(nt, null, m), void 0 !== u && a.a.createElement(it, null, u), a.a.createElement(w.a, {
						buttonText: "add",
						disabled: n.new === $e.a.pending,
						label: d,
						onClick: () => t && r(t),
						onChange: e => this.setState({
							value: e
						}),
						value: t
					}), a.a.createElement(at, null, c.slice(0, p).map(e => a.a.createElement(Qe, {
						disabled: n[e.name] === $e.a.pending,
						key: e.name,
						name: e.name,
						onClick: () => i(e.name),
						img: e.icon_img,
						date: 1e3 * e.date,
						language: l
					})), c.length > st && !e ? a.a.createElement(rt, null, a.a.createElement(ot, {
						onClick: () => this.setState({
							showAll: !0
						})
					}, "SHOW ALL")) : null))
				}
			}
			var lt = s("./src/reddit/components/Settings/PrivacyForm.m.less"),
				dt = s.n(lt);
			const mt = be.a.div("ListsWrapper", dt.a),
				ut = Object(o.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					userInChatUserSettings: e => Be.d.userInChatUserSettings(e),
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var pt = Object(r.b)(ut, (e, t) => ({
					addBlocked: t => e(Object(Re.h)(t)),
					addWhitelisted: t => e(Object(We.g)(t)),
					removeWhitelisted: t => e(Object(We.h)(t)),
					removeBlocked: t => e(Object(Re.g)(t)),
					saveChatSettings: t => e(Object(Fe.c)(t))
				}))(e => {
					let {
						addBlocked: t,
						addWhitelisted: s,
						blocked: n,
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
						userInChatUserSettings: p,
						whitelist: b,
						whitelistApi: h
					} = e;
					return a.a.createElement(te.a, null, a.a.createElement(ee.b, null, a.a.createElement(_.c, null, "Chat & Messaging")), a.a.createElement(ct, {
						title: Object(k.c)("People You’ve Blocked"),
						subtext: Object(k.c)("Blocked people can’t send you chat requests or private messages."),
						label: Object(k.c)("Block new user"),
						add: t,
						remove: l,
						list: n,
						language: i,
						api: r,
						padBottom: !0
					}), p && a.a.createElement(G.d, {
						label: Object(k.c)("Who can send you chat requests"),
						items: [Ue.a.anybody, Ue.a.account_age_30_days, Ue.a.nobody],
						selected: o.invitePolicy,
						onClick: e => {
							m({
								invitePolicy: e
							})
						},
						id: "chatUserSettingsInvitePolicy"
					}), a.a.createElement(G.d, {
						label: Object(k.c)("Who can send you private messages"),
						subtext: Object(k.c)("Heads up—Reddit admins and moderators of communities you’ve joined can message you even if they’re not whitelisted."),
						items: [Ae.a.Everyone, Ae.a.Whitelisted],
						selected: c,
						onClick: e => u(e, "acceptPrivateMessages"),
						id: "acceptPrivateMessages"
					}), a.a.createElement(mt, null, a.a.createElement(ct, {
						title: Object(k.c)("People You’ve Whitelisted"),
						subtext: Object(k.c)("Whitelisted people can always send you private messages."),
						label: Object(k.c)("ADD NEW USER TO WHITELIST"),
						add: s,
						remove: d,
						list: b,
						language: i,
						api: h
					})))
				}),
				bt = s("./src/reddit/components/Translated/index.tsx"),
				ht = s("./src/reddit/components/Settings/Creator/Header/index.m.less"),
				gt = s.n(ht);
			const ft = e => "economy.settings.creator.header.".concat(e);

			function xt(e) {
				return a.a.createElement("header", {
					className: Object(C.a)(gt.a.container, e.className)
				}, a.a.createElement("div", {
					className: gt.a.title
				}, a.a.createElement(bt.a, {
					msgId: ft("title")
				})), a.a.createElement("div", {
					className: gt.a.tag
				}, a.a.createElement(bt.a, {
					msgId: ft("tag")
				})))
			}
			var vt = s("./src/reddit/constants/disclaimers.ts"),
				yt = s("./src/reddit/contexts/ApiContext.tsx"),
				Ot = s("./src/reddit/endpoints/economics/paymentSystems.ts"),
				Ct = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				Et = s("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				jt = s("./src/reddit/selectors/economics.ts"),
				wt = s("./src/reddit/components/Settings/Creator/StripeConnect/index.m.less"),
				_t = s.n(wt);
			const kt = e => "economy.settings.creator.stripeConnect.".concat(e);
			var St;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected"
			}(St || (St = {}));
			class Nt extends a.a.Component {
				constructor(e) {
					super(e), this.initiateStripeConnect = async () => {
						const e = await Object(Ot.e)(this.props.apiContext());
						e.ok ? window.location.href = e.body.connectUrl : this.props.onError(e.error)
					};
					let t = St.Default;
					e.connectCode && e.connectStateToken && (t = St.Connecting), e.stripeConnected && (t = St.Connected), this.state = {
						buttonState: t
					}
				}
				async componentDidMount() {
					if (this.props.connectCode && this.props.connectStateToken && this.state.buttonState !== St.Connected) {
						const e = await Object(Ot.a)(this.props.apiContext(), {
							code: this.props.connectCode,
							stateToken: this.props.connectStateToken
						});
						e.ok ? this.setState({
							buttonState: St.Connected
						}) : (this.props.onError(e.error), this.setState({
							buttonState: St.Default
						}))
					}
				}
				render() {
					const {
						className: e,
						language: t
					} = this.props, {
						buttonState: s
					} = this.state;
					let n = Object(b.a)(this.props.language, kt("cta"));
					return s === St.Connected && (n = Object(b.a)(t, kt("connected"))), s === St.Connecting && (n = Object(b.a)(t, kt("connecting"))), a.a.createElement("div", {
						className: e
					}, a.a.createElement(J.a, null, Object(b.a)(t, kt("header"))), a.a.createElement(G.j, {
						direction: "row",
						label: Object(b.a)(t, kt("title")),
						subtext: Object(b.a)(t, kt("description"))
					}, a.a.createElement("div", {
						className: _t.a.cta
					}, a.a.createElement(y.f, {
						className: _t.a.button,
						disabled: s !== St.Default,
						onClick: this.initiateStripeConnect
					}, n), a.a.createElement("div", {
						className: _t.a.legal
					}, Object(b.a)(t, kt("legal")), a.a.createElement("a", {
						className: _t.a.legalLink,
						href: vt.a,
						target: "_blank"
					}, Object(b.a)(t, kt("legalLink")))))), a.a.createElement("div", {
						className: _t.a.disclaimer
					}, a.a.createElement(Et.a, {
						className: _t.a.icon
					}), Object(b.a)(t, kt("disclaimer"))))
				}
			}
			const Pt = Object(o.c)({
					language: e => e.user.language,
					stripeConnected: jt.w
				}),
				It = Object(r.b)(Pt, e => ({
					onError: t => e(Object(j.e)({
						duration: 5e3,
						kind: I.b.Error,
						text: Object(Ct.a)(t)
					}))
				}));
			var Mt = Object(yt.b)(It(Nt)),
				Tt = s("./src/reddit/components/Settings/Creator/index.m.less"),
				Lt = s.n(Tt),
				Dt = function(e) {
					return a.a.createElement(te.a, null, a.a.createElement("div", null, a.a.createElement(xt, {
						className: Lt.a.header
					}), a.a.createElement(Mt, {
						connectCode: e.stripeConnectCode,
						connectStateToken: e.stripeConnectStateToken
					})))
				},
				Bt = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				At = s("./src/lib/listingSort/index.ts"),
				Ut = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				Ft = s("./src/higherOrderComponents/asTooltip.tsx"),
				Rt = s("./src/reddit/actions/tooltip.ts"),
				Wt = s("./src/reddit/controls/Dropdown/index.tsx"),
				Ht = s("./src/reddit/controls/Dropdown/Row.tsx"),
				zt = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Vt = s("./src/reddit/selectors/tooltip.ts"),
				Jt = s("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				Gt = s.n(Jt);
			const Kt = Object(Ft.a)(Wt.a),
				Zt = Object(o.c)({
					isDropdownOpen: (e, t) => Object(Vt.b)(t.dropdownId)(e)
				});
			class qt extends a.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => a.a.createElement(Ht.b, {
						children: e.contentJsx || e.icon,
						className: Gt.a.dropdownRow,
						displayText: e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}), this.renderDropdownItem = (e, t) => a.a.createElement(Ht.b, {
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
						renderLabel: s = this.renderLabel,
						renderItem: n = this.renderDropdownItem,
						selectedKey: r
					} = this.props, o = t.find(e => e.key === r) || t[0];
					return a.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(C.a)(Gt.a.container, e.className),
						onClick: this.onToggleDropdown
					}, a.a.createElement("div", {
						className: Gt.a.labelWrapper
					}, s(o), a.a.createElement(zt.b, null)), a.a.createElement(Kt, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => n(e, r === e.key))))
				}
			}
			var Xt = Object(r.b)(Zt, (e, t) => ({
					openDropdown: () => {
						e(Object(Rt.g)({
							tooltipId: t.dropdownId
						}))
					}
				}))(qt),
				Yt = s("./src/reddit/constants/listingSorts.ts");
			const Qt = [l.N.HOT, l.N.NEW, l.N.TOP, l.N.RISING];
			var $t = e => {
				const {
					dropdownId: t
				} = e, s = Qt.map(e => ({
					key: e,
					displayText: Yt.a[e],
					icon: a.a.createElement(Ut.a, {
						sort: e
					})
				}));
				return a.a.createElement(Xt, {
					dropdownId: t,
					items: s,
					onSelect: t => e.onChange(t.key),
					selectedKey: e.sort
				})
			};
			const es = [l.Pb.HOUR, l.Pb.DAY, l.Pb.WEEK, l.Pb.MONTH, l.Pb.YEAR, l.Pb.ALL];
			var ts = e => {
					const {
						dropdownId: t
					} = e, s = es.map(e => ({
						key: e,
						displayText: Yt.b[e]
					}));
					return a.a.createElement(Xt, {
						dropdownId: t,
						items: s,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.sort
					})
				},
				ss = s("./src/reddit/components/Settings/SortSetting/index.m.less"),
				ns = s.n(ss);
			const as = be.a.div("Separator", ns.a);
			class rs extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onListingSortChange = e => {
						const {
							timeSort: t
						} = Object(At.d)(this.props.fullSort);
						this.props.onChange(Object(At.c)({
							sort: e,
							timeSort: t
						}))
					}, this.onTimeSortChange = e => {
						const {
							sort: t
						} = Object(At.d)(this.props.fullSort);
						this.props.onChange(Object(At.c)({
							sort: t,
							timeSort: e
						}))
					}
				}
				render() {
					const {
						fullSort: e,
						language: t,
						dropdownPrefix: s
					} = this.props, {
						sort: n,
						timeSort: r
					} = Object(At.d)(e);
					return a.a.createElement(G.c, {
						label: Bt.fbt._("Community content sort", null, {
							hk: "Ubmt1"
						}),
						subtext: Bt.fbt._("Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.", null, {
							hk: "2a2SDC"
						})
					}, a.a.createElement("div", {
						className: ns.a.wrapper
					}, a.a.createElement($t, {
						onChange: this.onListingSortChange,
						dropdownId: s + "-listing",
						sort: n,
						language: t
					}), r && a.a.createElement(a.a.Fragment, null, a.a.createElement(as, null), a.a.createElement(ts, {
						onChange: this.onTimeSortChange,
						dropdownId: s + "-time",
						sort: r,
						language: t
					}))))
				}
			}
			var os = s("./src/reddit/constants/postLayout.ts"),
				is = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				cs = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				ls = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				ds = s("./src/reddit/controls/Dropdown/index.m.less"),
				ms = s.n(ds);
			const us = {
				[os.d.Card]: ls.a,
				[os.d.Classic]: is.a,
				[os.d.Compact]: cs.a
			};
			var ps = e => {
				const t = us[e.layout];
				return a.a.createElement(t, {
					className: ms.a.iconStyles
				})
			};
			const bs = [os.d.Card, os.d.Classic, os.d.Compact];
			var hs = e => {
					const {
						dropdownId: t
					} = e, s = bs.map(e => ({
						key: e,
						displayText: e,
						icon: a.a.createElement(ps, {
							layout: e
						})
					}));
					return a.a.createElement(Xt, {
						dropdownId: t,
						items: s,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.layout
					})
				},
				gs = s("./src/reddit/components/Settings/ViewSetting/index.m.less"),
				fs = s.n(gs);
			class xs extends a.a.PureComponent {
				render() {
					const {
						dropdownPrefix: e,
						label: t,
						subtext: s,
						layout: n
					} = this.props;
					return a.a.createElement(G.c, {
						label: t,
						subtext: s
					}, a.a.createElement("div", {
						className: fs.a.wrapper
					}, a.a.createElement(hs, {
						onChange: this.props.onChange,
						dropdownId: e + "-listing",
						layout: n
					})))
				}
			}
			var vs = e => {
					let {
						language: t,
						prefs: {
							autoplayVideo: s,
							hideNSFW: n,
							openPostInNewTab: r,
							over18: o,
							privateFeeds: i,
							rememberCommunitySort: c,
							sort: l,
							stylesEnabled: d,
							useMarkdown: m,
							layout: u,
							rememberCommunityLayout: p
						},
						update: h
					} = e;
					return a.a.createElement(te.a, null, a.a.createElement(ee.b, null, Object(b.a)(t, "".concat("settings.feedForm", ".headings.main"))), a.a.createElement(J.a, null, Object(b.a)(t, "".concat("settings.feedForm", ".headings.contentPrefs"))), a.a.createElement(G.n, {
						on: o,
						onClick: () => h(!o, "over18"),
						label: Object(b.a)(t, "".concat("settings.feedForm", ".adultContent.label")),
						subtext: Object(b.a)(t, "".concat("settings.feedForm", ".adultContent.subtext"))
					}), a.a.createElement(G.n, {
						disabled: !o,
						label: Object(b.a)(t, "".concat("settings.feedForm", ".hideNSFW.label")),
						on: !!o && n,
						onClick: () => h(!n, "hideNSFW"),
						subtext: Object(b.a)(t, "".concat("settings.feedForm", ".hideNSFW.subtext"))
					}), a.a.createElement(G.n, {
						on: s,
						onClick: () => h(!s, "autoplayVideo"),
						label: Object(b.a)(t, "".concat("settings.feedForm", ".autoplayVideo.label")),
						subtext: Object(b.a)(t, "".concat("settings.feedForm", ".autoplayVideo.subtext"))
					}), a.a.createElement(G.n, {
						on: !!d,
						onClick: () => h(!d, "stylesEnabled"),
						label: Object(b.a)(t, "".concat("settings.feedForm", ".subredditStyling.label")),
						subtext: Object(b.a)(t, "".concat("settings.feedForm", ".subredditStyling.subtext"))
					}), a.a.createElement(rs, {
						dropdownPrefix: "subreddit-sort-setting",
						language: t,
						fullSort: l,
						onChange: e => {
							l !== e && h(e, "sort")
						}
					}), a.a.createElement(G.n, {
						indent: !0,
						on: !!c,
						onClick: () => h(!c, "rememberCommunitySort"),
						label: Object(b.a)(t, "".concat("settings.feedForm", ".rememberCommunitySort.label")),
						subtext: Object(b.a)(t, "".concat("settings.feedForm", ".rememberCommunitySort.subtext"))
					}), a.a.createElement(xs, {
						dropdownPrefix: "subreddit-view-setting",
						label: Object(b.a)(t, "".concat("settings.feedForm", ".layout.label")),
						layout: u,
						onChange: e => h(e, "layout"),
						subtext: Object(b.a)(t, "".concat("settings.feedForm", ".layout.subtext"))
					}), a.a.createElement(G.n, {
						on: !!p,
						onClick: () => h(!p, "rememberCommunityLayout"),
						label: Object(b.a)(t, "".concat("settings.feedForm", ".rememberCommunityLayout.label")),
						subtext: Object(b.a)(t, "".concat("settings.feedForm", ".rememberCommunityLayout.subtext")),
						indent: !0
					}), a.a.createElement(G.n, {
						on: !!r,
						onClick: () => h(!r, "openPostInNewTab"),
						label: Object(b.a)(t, "".concat("settings.feedForm", ".openPostInNewTab.label")),
						subtext: Object(b.a)(t, "".concat("settings.feedForm", ".openPostInNewTab.subtext"))
					}), a.a.createElement(J.a, null, Object(b.a)(t, "".concat("settings.feedForm", ".headings.postPrefs"))), a.a.createElement(G.n, {
						on: !!m,
						onClick: () => h(!m, "useMarkdown"),
						label: Object(b.a)(t, "".concat("settings.feedForm", ".useMarkdown.label")),
						subtext: Object(b.a)(t, "".concat("settings.feedForm", ".useMarkdown.subtext"))
					}), i && [a.a.createElement(J.a, null, Object(b.a)(t, "".concat("settings.feedForm", ".headings.rss"))), a.a.createElement(G.f, {
						label: Object(b.a)(t, "".concat("settings.feedForm", ".rss.label")),
						subtext: Object(b.a)(t, "".concat("settings.feedForm", ".rss.subtext")),
						link: "".concat(ae.a.redditUrl, "/prefs/feeds"),
						last: !0
					})])
				},
				ys = s("./src/reddit/actions/notifications/constants.ts"),
				Os = s("./src/reddit/actions/notifications/loader.ts"),
				Cs = s("./src/reddit/actions/notifications/preferences.ts"),
				Es = s("./src/reddit/actions/notifications/state.ts"),
				js = s("./src/reddit/actions/notifications/utils.ts"),
				ws = s("./src/reddit/helpers/localStorage/index.ts"),
				_s = s("./src/reddit/helpers/trackers/notifications.ts"),
				ks = s("./src/reddit/models/PushNotification/index.ts"),
				Ss = s("./src/reddit/selectors/meta.ts"),
				Ns = s("./src/reddit/selectors/notificationPrefs.ts"),
				Ps = s("./src/higherOrderComponents/asModal/index.tsx"),
				Is = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Ms = s("./src/reddit/constants/keycodes.ts"),
				Ts = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				Ls = s("./src/reddit/constants/colors.ts"),
				Ds = s("./src/reddit/icons/svgs/Notify/index.m.less"),
				Bs = s.n(Ds);
			var As = e => a.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 -1 23 20",
					className: Object(C.a)(Bs.a.icon, e.className)
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
					fill: e.isUnread ? Ls.a.orangered : "none"
				}))),
				Us = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				Fs = s("./src/reddit/layout/row/Inline/index.tsx"),
				Rs = s("./src/reddit/components/Settings/DesktopNotifications/TurnOnDesktopNotificationsModal/index.m.less"),
				Ws = s.n(Rs);
			const Hs = "settings.notificationsForm.desktopNotifications.turnOnModal",
				zs = be.a.wrapped(Is.m, "ModalText", Ws.a);
			class Vs extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === Ms.a.Escape && this.props.onClose()
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
						language: e
					} = this.props;
					return a.a.createElement(Is.c, null, a.a.createElement(Is.g, null, a.a.createElement(Is.n, null, Object(b.a)(e, "".concat(Hs, ".title")))), a.a.createElement(Is.j, null, a.a.createElement(zs, null, a.a.createElement(Fs.a, {
						className: Ws.a.row
					}, a.a.createElement("div", {
						className: Ws.a.stepNumber
					}, "1"), Object(b.a)(e, "".concat(Hs, ".clickOn")), a.a.createElement(Ts.a, {
						className: Ws.a.icon
					}), Object(b.a)(e, "".concat(Hs, ".inYourAddressBar"))), a.a.createElement(Fs.a, {
						className: Ws.a.row
					}, a.a.createElement("div", {
						className: Ws.a.stepNumber
					}, "2"), Object(b.a)(e, "".concat(Hs, ".select")), a.a.createElement(Us.a, {
						className: Ws.a.icon
					}), Object(b.a)(e, "".concat(Hs, ".siteSettings"))), a.a.createElement(Fs.a, {
						className: Ws.a.row
					}, a.a.createElement("div", {
						className: Ws.a.stepNumber
					}, "3"), Object(b.a)(e, "".concat(Hs, ".change")), a.a.createElement(As, {
						className: Ws.a.notify
					}), Object(b.a)(e, "".concat(Hs, ".notificationsToAllow"))))), a.a.createElement(Is.e, null, a.a.createElement(y.f, {
						onClick: this.props.onClose
					}, Object(b.a)(e, "".concat(Hs, ".gotIt")))))
				}
			}
			var Js = Object(Ps.a)(Vs);
			const Gs = "settings.notificationsForm",
				Ks = Object(o.c)({
					areNotificationsAvailable: e => {
						return Object(js.a)(e) === ys.f.NotificationsSupported
					},
					isChrome: Ss.d,
					isFirefox: Ss.e,
					isOpera: Ss.f,
					language: O.T,
					preferences: Ns.d
				});
			class Zs extends a.a.Component {
				constructor(e) {
					super(e), this.lastNotificationsState = Es.a, this.onNotificationsStateChange = e => {
						const {
							isEnabled: t,
							permission: s
						} = e;
						let n = !1;
						t !== this.lastNotificationsState.isEnabled && (n = t !== this.state.desktopNotifications, t && ws.I(t)), this.setState(e => ({
							desktopNotifications: n ? t : e.desktopNotifications,
							notificationPermission: s
						})), this.lastNotificationsState = e
					}, this.setDesktopNotificationsLocalValue = e => {
						this.setState({
							desktopNotifications: e
						}, () => {
							this.props.trackDesktopNotificationsToggled(e), ws.I(e)
						})
					}, this.handleDesktopNotificationsClick = () => {
						if (this.state.desktopNotifications) this.setDesktopNotificationsLocalValue(!1), this.props.unsubscribeFromPNs();
						else switch (this.state.notificationPermission) {
							case ys.a.Denied:
								this.setState({
									showTurnOnDesktopNotificationsModal: !0
								});
								break;
							case ys.a.Granted:
								this.setDesktopNotificationsLocalValue(!0), this.props.subscribeForPNs();
								break;
							default:
								this.props.requestNotificationPermission()
						}
					}, this.handleUnreadMessagesClick = () => {
						this.updatePreferences(!this.props.preferences.unreadMessages, "unreadMessages"), this.props.trackNotificationGroupToggled(ks.a.UnreadMessages, this.props.preferences.unreadMessages)
					}, this.handleChatMessagesClick = () => {
						this.updatePreferences(!this.props.preferences.chatMessages, "chatMessages"), this.props.trackNotificationGroupToggled(ks.a.ChatMessages, this.props.preferences.chatMessages)
					}, this.handleTrendingPostsClick = () => {
						this.updatePreferences(!this.props.preferences.trendingPosts, "trendingPosts"), this.props.trackNotificationGroupToggled(ks.a.TrendingPosts, this.props.preferences.trendingPosts)
					}, this.handleUpvotedPostsClick = () => {
						this.updatePreferences(!this.props.preferences.upvotedPosts, "upvotedPosts"), this.props.trackNotificationGroupToggled(ks.a.UpvotedPosts, this.props.preferences.upvotedPosts)
					}, this.handleUpvotedCommentsClick = () => {
						this.updatePreferences(!this.props.preferences.upvotedComments, "upvotedComments"), this.props.trackNotificationGroupToggled(ks.a.UpvotedComments, this.props.preferences.upvotedComments)
					}, this.handleCommunityRecommendationsClick = () => {
						this.updatePreferences(!this.props.preferences.communityRecommendations, "communityRecommendations"), this.props.trackNotificationGroupToggled(ks.a.CommunityRecommendations, this.props.preferences.communityRecommendations)
					}, this.handleLiveEventClick = () => {
						this.updatePreferences(!this.props.preferences.liveEvent, "liveEvent"), this.props.trackNotificationGroupToggled(ks.a.LiveEvent, this.props.preferences.liveEvent)
					}, this.handleTurnOnDesktopNotificationsModalClose = () => {
						this.setState({
							showTurnOnDesktopNotificationsModal: !1
						})
					}, this.state = {
						areNotificationsAvailable: !1,
						desktopNotifications: !1,
						notificationPermission: ys.a.Denied,
						showTurnOnDesktopNotificationsModal: !1
					}
				}
				componentDidMount() {
					this.setState({
						areNotificationsAvailable: this.props.areNotificationsAvailable
					}), Object(Es.d)(this.onNotificationsStateChange)
				}
				componentWillUnmount() {
					Object(Es.e)(this.onNotificationsStateChange)
				}
				async updatePreferences(e, t) {
					this.props.setPreferences(Object.assign({}, this.props.preferences, {
						[t]: e
					}))
				}
				render() {
					const {
						isChrome: e,
						isFirefox: t,
						isOpera: s,
						language: r,
						preferences: {
							chatMessages: o,
							communityRecommendations: i,
							liveEvent: c,
							trendingPosts: l,
							unreadMessages: d,
							upvotedComments: m,
							upvotedPosts: u
						}
					} = this.props;
					return a.a.createElement(n.Fragment, null, a.a.createElement(J.a, null, Object(b.a)(r, "".concat(Gs, ".headings.desktopNotif"))), a.a.createElement(G.n, {
						disabled: !(e || t || s) || !this.state.areNotificationsAvailable,
						label: Object(b.a)(r, "".concat(Gs, ".desktopNotifications.main.label")),
						last: !0,
						on: this.state.desktopNotifications,
						onClick: this.handleDesktopNotificationsClick,
						subtext: Object(b.a)(r, "".concat(Gs, ".desktopNotifications.main.subtext")),
						tooltip: e || t || s ? "" : Object(b.a)(r, "".concat(Gs, ".desktopNotifications.onlyAvailableWithChromeFirefoxOpera"))
					}), a.a.createElement(J.a, null, Object(b.a)(r, "".concat(Gs, ".headings.pushNotif"))), a.a.createElement(G.n, {
						label: Object(b.a)(r, "".concat(Gs, ".pushNotifications.unreadMessages.label")),
						on: d,
						onClick: this.handleUnreadMessagesClick,
						subtext: Object(b.a)(r, "".concat(Gs, ".pushNotifications.unreadMessages.subtext"))
					}), a.a.createElement(G.n, {
						label: Object(b.a)(r, "".concat(Gs, ".pushNotifications.chatMessages.label")),
						on: o,
						onClick: this.handleChatMessagesClick,
						subtext: Object(b.a)(r, "".concat(Gs, ".pushNotifications.chatMessages.subtext"))
					}), a.a.createElement(G.n, {
						label: Object(b.a)(r, "".concat(Gs, ".pushNotifications.trendingPosts.label")),
						on: l,
						onClick: this.handleTrendingPostsClick,
						subtext: Object(b.a)(r, "".concat(Gs, ".pushNotifications.trendingPosts.subtext"))
					}), a.a.createElement(G.n, {
						label: Object(k.c)("Community recommendations"),
						on: i,
						onClick: this.handleCommunityRecommendationsClick,
						subtext: Object(k.c)("Send me recommendations based on my activity")
					}), a.a.createElement(G.n, {
						label: Object(k.c)("Upvotes on your posts"),
						on: u,
						onClick: this.handleUpvotedPostsClick,
						subtext: Object(k.c)("Notify me when my post is upvoted")
					}), a.a.createElement(G.n, {
						label: Object(k.c)("Upvotes on your comments"),
						on: m,
						onClick: this.handleUpvotedCommentsClick,
						subtext: Object(k.c)("Notify me when my comment is upvoted")
					}), a.a.createElement(G.n, {
						label: Object(k.c)("Live Events"),
						last: !0,
						on: c,
						onClick: this.handleLiveEventClick,
						subtext: Object(k.c)("Notify me during live events")
					}), this.state.showTurnOnDesktopNotificationsModal && a.a.createElement(Js, {
						language: r,
						onClose: this.handleTurnOnDesktopNotificationsModalClose
					}))
				}
			}
			var qs = Object(r.b)(Ks, e => ({
					requestNotificationPermission: () => Object(Os.a)().then(t => e(t.requestNotificationsPermissions(!0, !0))),
					setPreferences: t => e(Object(Cs.b)(t)),
					subscribeForPNs: () => Object(Os.a)().then(t => e(t.subscribeForPNs(!0))),
					trackDesktopNotificationsToggled: t => e((e, s) => {
						_s.a(s(), t), t || (_s.f(s(), ks.a.ChatMessages, t), _s.f(s(), ks.a.CommunityRecommendations, t), _s.f(s(), ks.a.LiveEvent, t), _s.f(s(), ks.a.TrendingPosts, t), _s.f(s(), ks.a.UnreadMessages, t), _s.f(s(), ks.a.UpvotedComments, t), _s.f(s(), ks.a.UpvotedPosts, t))
					}),
					trackNotificationGroupToggled: (t, s) => e((e, n) => _s.f(n(), t, s)),
					unsubscribeFromPNs: () => Object(Os.a)().then(t => e(t.unsubscribeFromPNs(!0)))
				}))(Zs),
				Xs = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			var Ys = e => {
					var {
						language: t,
						prefs: {
							collapseReadMessages: s,
							emailUnsubscribe: n,
							emailDigests: r,
							emailUnreadMessages: o,
							markMessagesRead: i,
							sendWelcomeMessages: c,
							showMessagesInInbox: l,
							showUsernameMentionNotifications: d
						},
						update: m
					} = e;
					Xs(e, ["language", "prefs", "update"]);
					return a.a.createElement(te.a, null, a.a.createElement(ee.b, null, a.a.createElement(_.c, null, "Notifications settings")), a.a.createElement(J.a, null, Object(b.a)(t, "".concat("settings.notificationsForm", ".headings.inboxNotif"))), a.a.createElement(G.n, {
						on: l,
						onClick: () => m(!l, "showMessagesInInbox"),
						label: Object(b.a)(t, "".concat("settings.notificationsForm", ".messageInInbox.label")),
						subtext: Object(b.a)(t, "".concat("settings.notificationsForm", ".messageInInbox.subtext"))
					}), a.a.createElement(G.n, {
						on: i,
						onClick: () => m(!i, "markMessagesRead"),
						label: Object(b.a)(t, "".concat("settings.notificationsForm", ".markReadInInbox.label")),
						subtext: Object(b.a)(t, "".concat("settings.notificationsForm", ".markReadInInbox.subtext"))
					}), a.a.createElement(G.n, {
						on: s,
						onClick: () => m(!s, "collapseReadMessages"),
						label: Object(b.a)(t, "".concat("settings.notificationsForm", ".collapseRead.label")),
						subtext: Object(b.a)(t, "".concat("settings.notificationsForm", ".collapseRead.subtext"))
					}), a.a.createElement(G.n, {
						on: !!d,
						onClick: () => m(!d, "showUsernameMentionNotifications"),
						label: Object(b.a)(t, "".concat("settings.notificationsForm", ".usernameMentions.label")),
						subtext: Object(b.a)(t, "".concat("settings.notificationsForm", ".usernameMentions.subtext"))
					}), a.a.createElement(G.n, {
						on: !!c,
						onClick: () => m(!c, "sendWelcomeMessages"),
						label: Object(b.a)(t, "".concat("settings.notificationsForm", ".sendWelcomeMessages.label")),
						subtext: Object(b.a)(t, "".concat("settings.notificationsForm", ".sendWelcomeMessages.subtext")),
						last: !0
					}), a.a.createElement(J.a, null, Object(b.a)(t, "".concat("settings.notificationsForm", ".headings.emailNotif"))), a.a.createElement(G.n, {
						on: !n,
						onClick: () => m(!n, "emailUnsubscribe"),
						label: Object(b.a)(t, "".concat("settings.notificationsForm", ".emailNotifications.label")),
						subtext: Object(b.a)(t, "".concat("settings.notificationsForm", ".emailNotifications.subtext"))
					}), a.a.createElement(G.n, {
						disabled: n,
						on: !n && o,
						onClick: () => m(!o, "emailUnreadMessages"),
						label: Object(b.a)(t, "".concat("settings.notificationsForm", ".unreadMessages.label")),
						subtext: Object(b.a)(t, "".concat("settings.notificationsForm", ".unreadMessages.subtext")),
						indent: !0
					}), a.a.createElement(G.n, {
						disabled: n,
						on: !n && !!r,
						onClick: () => m(!r, "emailDigests"),
						label: Object(b.a)(t, "".concat("settings.notificationsForm", ".digests.label")),
						subtext: Object(b.a)(t, "".concat("settings.notificationsForm", ".digests.subtext")),
						indent: !0,
						last: !0
					}), a.a.createElement(qs, null))
				},
				Qs = s("./src/reddit/components/Settings/Payments/Header/index.m.less"),
				$s = s.n(Qs);
			const en = e => "economy.settings.payments.header.".concat(e);

			function tn(e) {
				return a.a.createElement("header", {
					className: Object(C.a)($s.a.container, e.className)
				}, a.a.createElement("div", {
					className: $s.a.title
				}, a.a.createElement(bt.a, {
					msgId: en("title")
				})), a.a.createElement("div", {
					className: $s.a.description
				}, a.a.createElement(bt.a, {
					msgId: en("description")
				})))
			}
			var sn = s("./src/reddit/actions/economics/paymentSystems/actionCreators.ts"),
				nn = s("./src/reddit/models/Payments/index.ts"),
				an = s("./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less"),
				rn = s.n(an);
			const on = e => "economy.settings.payments.paymentMethods.".concat(e);
			class cn extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						paymentsBeingRemoved: {}
					}, this.removePayment = async e => {
						this.setState(t => ({
							paymentsBeingRemoved: Object.assign({}, t.paymentsBeingRemoved, {
								[e.id]: !0
							})
						}));
						const t = e.type === nn.b.SavedStripe ? await Object(Ot.b)(this.props.apiContext(), e.id) : await Object(Ot.c)(this.props.apiContext(), e.id);
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
					}, a.a.createElement(J.a, null, Object(b.a)(this.props.language, on("title"))), this.props.savedPayments.map(e => {
						const t = !!this.state.paymentsBeingRemoved[e.id];
						return a.a.createElement("div", {
							className: rn.a.payment
						}, a.a.createElement("div", {
							className: rn.a.paymentDisplay
						}, a.a.createElement(Ts.a, {
							className: rn.a.lock
						}), e.display), a.a.createElement(y.n, {
							disabled: t,
							onClick: () => this.removePayment(e)
						}, Object(b.a)(this.props.language, on(t ? "removing" : "remove"))))
					}), !this.props.savedPayments.length && a.a.createElement("div", {
						className: rn.a.noSavedPayment
					}, Object(b.a)(this.props.language, on("none"))))
				}
			}
			const ln = Object(o.c)({
					savedPayments: jt.o,
					language: e => e.user.language
				}),
				dn = Object(r.b)(ln, e => ({
					onError: t => e(Object(j.e)({
						duration: 5e3,
						kind: I.b.Error,
						text: Object(Ct.a)(t)
					})),
					onRemovePayment: t => {
						t.type === nn.b.SavedStripe && e(Object(sn.a)({
							cardId: t.id
						})), t.type === nn.b.SavedPayPal && e(Object(sn.e)({
							sourceId: t.id
						}))
					}
				}));
			var mn = Object(yt.b)(dn(cn)),
				un = s("./src/reddit/components/Settings/Payments/index.m.less"),
				pn = s.n(un),
				bn = () => a.a.createElement(te.a, null, a.a.createElement(tn, {
					className: pn.a.header
				}), a.a.createElement(mn, null)),
				hn = s("./src/reddit/components/Settings/PremiumForm.tsx");
			const gn = be.a.span("SubheaderLink", dt.a),
				fn = be.a.button("GenerateBackupCodesButton", dt.a),
				xn = Object(o.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					userInChatUserSettings: e => Be.d.userInChatUserSettings(e),
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var vn = Object(r.b)(xn, (e, t) => ({
					addBlocked: t => e(Object(Re.h)(t)),
					addWhitelisted: t => e(Object(We.g)(t)),
					removeWhitelisted: t => e(Object(We.h)(t)),
					removeBlocked: t => e(Object(Re.g)(t)),
					saveChatSettings: t => e(Object(Fe.c)(t)),
					enable2FA: () => e(Object(g.d)()),
					disable2FA: () => e(Object(g.c)()),
					generateBackupCodes: () => e(Object(g.a)())
				}))(e => {
					let {
						addBlocked: t,
						addWhitelisted: s,
						blocked: n,
						blockedApi: r,
						chatSettings: o,
						prefs: {
							acceptPrivateMessages: i,
							allowClickTracking: c,
							hideFromRobots: l,
							activityRelevantAds: d,
							loginOtpEnabled: m,
							thirdPartyDataPersonalizedAds: u,
							thirdPartySiteDataPersonalizedAds: p,
							thirdPartySiteDataPersonalizedContent: b
						},
						enable2FA: h,
						disable2FA: g,
						generateBackupCodes: f,
						removeBlocked: x,
						removeWhitelisted: v,
						saveChatSettings: y,
						update: O,
						userInChatUserSettings: C,
						whitelist: E,
						whitelistApi: j
					} = e;
					return a.a.createElement(te.a, null, a.a.createElement(ee.b, null, Bt.fbt._("Privacy & Security", null, {
						hk: "2az3xN"
					})), a.a.createElement(ee.a, null, Bt.fbt._("Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you. To learn more, visit our {=Privacy & Security FAQs}.", [Bt.fbt._param("=Privacy & Security FAQs", a.a.createElement(gn, null, Bt.fbt._("{=Privacy & Security FAQs}", [Bt.fbt._param("=Privacy & Security FAQs", a.a.createElement("a", {
						href: ae.a.redditHelpUrl.privacyQuestions,
						target: "_blank"
					}, Bt.fbt._("Privacy & Security FAQs", null, {
						hk: "3yNiXS"
					})))], {
						hk: "2J1omY"
					})))], {
						hk: "4pFE8T"
					})), a.a.createElement(J.a, null, Bt.fbt._("Privacy", null, {
						hk: "30eaw9"
					})), a.a.createElement(G.n, {
						on: !l,
						onClick: () => O(!l, "hideFromRobots"),
						label: Bt.fbt._("Show up in search results", null, {
							hk: "3TWi4z"
						}),
						subtext: Bt.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
							hk: "4tnz3n"
						})
					}), a.a.createElement(G.n, {
						on: c,
						onClick: () => O(!c, "allowClickTracking"),
						label: Bt.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
							hk: "21vbvn"
						}),
						subtext: Bt.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
							hk: "DnCX0"
						})
					}), a.a.createElement(G.n, {
						on: d,
						onClick: () => O(!d, "activityRelevantAds"),
						label: Bt.fbt._("Personalize ads based on your Reddit activity", null, {
							hk: "OqV13"
						}),
						subtext: Bt.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
							hk: "4C7zO1"
						})
					}), a.a.createElement(G.n, {
						on: u,
						onClick: () => O(!u, "thirdPartyDataPersonalizedAds"),
						label: Bt.fbt._("Personalize ads based on information from our partners", null, {
							hk: "4pLCAq"
						}),
						subtext: Bt.fbt._("Allow us to use information that our advertising partners send us to show you better ads.", null, {
							hk: "37eGRC"
						})
					}), a.a.createElement(G.n, {
						on: p,
						onClick: () => O(!p, "thirdPartySiteDataPersonalizedAds"),
						label: Bt.fbt._("Personalize ads based on your activity with our partners", null, {
							hk: "3uQVuS"
						}),
						subtext: Bt.fbt._("Allow us to use your interactions with sites and apps we partner with to show you better ads.", null, {
							hk: "2T8SXc"
						})
					}), a.a.createElement(G.n, {
						on: b,
						onClick: () => O(!b, "thirdPartySiteDataPersonalizedContent"),
						label: Bt.fbt._("Personalize recommendations based on your activity with our partners", null, {
							hk: "2D9ITr"
						}),
						subtext: Bt.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
							hk: "1e91Vl"
						}),
						last: !0
					}), a.a.createElement(J.a, null, Bt.fbt._("Advanced security", null, {
						hk: "3H7FJN"
					})), a.a.createElement(G.n, {
						on: m,
						onClick: () => m ? g() : h(),
						label: Bt.fbt._("Use two-factor authentication", null, {
							hk: "2OxNGe"
						}),
						subtext: a.a.createElement(a.a.Fragment, null, Bt.fbt._("Help protect your account (even if someone gets your password) by requiring a verification code and a password to log in.", null, {
							hk: "1LLqPh"
						}), m && a.a.createElement(a.a.Fragment, null, " ", Bt.fbt._("Lost access to your authenticator app?", null, {
							hk: "2x6g0Y"
						}), " ", a.a.createElement(fn, {
							type: "button",
							onClick: () => f()
						}, Bt.fbt._("Get your backup codes", null, {
							hk: "4fp3Xg"
						})), "."))
					}), a.a.createElement(G.f, {
						label: Bt.fbt._("Manage third-party app authorization", null, {
							hk: "3J65so"
						}),
						link: "".concat(ae.a.redditUrl, "/prefs/apps"),
						last: !0
					}))
				}),
				yn = s("./src/reddit/actions/preferences.ts"),
				On = s("./src/reddit/components/Loader/index.m.less"),
				Cn = s.n(On);
			class En extends a.a.Component {
				render() {
					const {
						isLoading: e,
						render: t,
						renderLoading: s,
						loaderSize: n
					} = this.props;
					return e ? s ? s() : a.a.createElement(ie.a, {
						center: !0,
						className: Cn.a.loadingIcon,
						sizePx: n || 10
					}) : t()
				}
			}
			var jn = s("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				wn = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				_n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				kn = s("./src/reddit/selectors/structuredStyles.ts"),
				Sn = s("./src/reddit/selectors/subredditSettings.ts"),
				Nn = s("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				Pn = s("./src/reddit/components/Settings/ProfileForm.m.less"),
				In = s.n(Pn);
			const Mn = 30,
				Tn = 200,
				Ln = Object(o.a)(O.T, O.i, Sn.a, O.mb, kn.o, se.a, (e, t, s, n, a, r) => {
					const o = t && t.profileId,
						i = o && a[o] ? a[o].bannerBackgroundImage : void 0;
					return {
						awardedLastMonth: t.awardedLastMonth,
						contentVisible: s.contentVisible,
						currentUserName: Object(M.f)(t),
						currentUserUrl: t.url,
						isEmployee: t.isEmployee,
						isGold: t.isGold,
						language: e,
						over18: s.over18,
						profileBanner: i,
						profileIcon: t.accountIcon,
						publicDescription: s.publicDescription,
						showActiveCommunities: n.showActiveCommunities,
						title: s.title,
						isNSFWModalOpen: "ProfileForm_NSFWConfirmDialogID" === r
					}
				}),
				Dn = be.a.wrapped(wn.a, "RawHTMLDisplay", In.a),
				Bn = be.a.div("ImageUploaderLayout", In.a),
				An = be.a.wrapped(Nn.a, "IconImageUploader", In.a),
				Un = be.a.wrapped(Nn.a, "BannerImageUploader", In.a),
				Fn = be.a.img("DummyBanner", In.a),
				Rn = be.a.wrapped(jn.a, "Preview", In.a);
			class Wn extends a.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.str = function(e) {
						let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						return Object(b.a)(t.props.language, "settings.profileForm.".concat(e)) + (s ? Object(b.a)(t.props.language, "settings.page.optional") : "")
					}, this.onTitleChange = e => this.setState({
						title: e.target.value
					}), this.onDescriptionChange = e => this.setState({
						publicDescription: e.target.value
					}), this.switchNSFW = () => {
						this.updateProfile(!0, "over18"), this.props.sendEvent(Object(ce.h)(this.props.over18))
					}, this.switchSFW = () => {
						this.updateProfile(!1, "over18"), this.props.toggleNSFWModal(), this.props.sendEvent(Object(ce.h)(this.props.over18))
					}, this.onNSFWToggled = () => this.props.over18 ? this.props.toggleNSFWModal() : this.switchNSFW(), this.onContentVisibleChange = () => {
						this.updateProfile(!this.props.contentVisible, "contentVisible"), this.props.sendEvent(Object(ce.c)(this.props.contentVisible))
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
						}), this.props.sendEvent(Object(ce.a)(this.props.showActiveCommunities))
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
						currentUserName: s,
						currentUserUrl: n,
						isEmployee: r,
						isGold: o,
						isNSFWModalOpen: i,
						language: c,
						over18: l,
						profileBanner: d,
						profileIcon: m,
						showActiveCommunities: u,
						toggleNSFWModal: p
					} = this.props, {
						isDeletingBanner: h,
						isDeletingIcon: g,
						profileBannerUploading: f,
						profileIconUploading: x,
						publicDescription: y,
						title: O
					} = this.state, C = this.str;
					return a.a.createElement(te.a, {
						sidebar: a.a.createElement(Rn, {
							bannerBackgroundImage: d,
							editMode: !0,
							isEmployee: r,
							isDefaultIcon: !m || m.indexOf("avatar_default") > -1,
							isDeletingBanner: h,
							isDeletingIcon: g,
							isGold: o,
							isOverlay: !1,
							onDeleteBanner: this.onDeleteBanner,
							onDeleteIcon: this.onDeleteIcon,
							profileIcon: m,
							publicDescription: y,
							recentAwardings: e,
							title: O,
							url: n,
							username: s
						})
					}, a.a.createElement(ee.b, null, C("headings.main")), a.a.createElement(J.a, null, C("headings.information")), a.a.createElement(G.e, {
						label: C("displayName.label", !0),
						onChange: this.onTitleChange,
						onBlur: () => {
							O !== this.props.title && this.updateProfile(O, "title")
						},
						placeholder: C("displayName.placeholder", !0),
						maxChars: Mn,
						subtext: C("displayName.subtext"),
						value: O
					}), a.a.createElement(G.g, {
						label: C("about.label", !0),
						onChange: this.onDescriptionChange,
						onBlur: () => {
							y !== this.props.publicDescription && this.updateProfile(y, "publicDescription")
						},
						placeholder: C("about.placeholder", !0),
						maxChars: Tn,
						subtext: C("about.subtext"),
						value: y
					}), a.a.createElement(J.a, null, C("headings.images")), a.a.createElement(G.j, {
						label: C("images.label"),
						subtext: C("images.subtext"),
						direction: "column"
					}, a.a.createElement(Bn, null, a.a.createElement(An, {
						controlName: "profileIcon",
						isUploading: x,
						label: C("images.iconUploader"),
						labelClassName: In.a.Label,
						onChange: this.onIconChange
					}), a.a.createElement(Un, {
						controlName: "profileBanner",
						isUploading: f,
						label: C("images.bannerUploader"),
						labelClassName: In.a.Label,
						onChange: this.onBannerChange
					}))), a.a.createElement(J.a, null, C("headings.category")), a.a.createElement(G.n, {
						label: C("nsfw.label"),
						on: l,
						subtext: C("nsfw.subtext"),
						onClick: this.onNSFWToggled
					}), a.a.createElement(J.a, null, C("headings.advanced")), a.a.createElement(G.n, {
						label: C("contentVisible.label"),
						subtext: a.a.createElement(Dn, {
							html: C("contentVisible.subtext")
						}),
						on: t,
						onClick: this.onContentVisibleChange
					}), a.a.createElement(G.n, {
						label: C("showActiveCommunities.label"),
						subtext: C("showActiveCommunities.subtext"),
						on: u,
						onClick: this.onShowActiveCommunitiesChange
					}), a.a.createElement(J.a, null, C("headings.moderation")), a.a.createElement(Dn, {
						html: Object(b.a)(c, "settings.profileForm.modLink", {
							userName: s
						})
					}), i && a.a.createElement(v.a, {
						headerText: C("toSFWConfirm.title"),
						message: a.a.createElement(Dn, {
							html: C("toSFWConfirm.message")
						}),
						cancelText: C("toSFWConfirm.cancel"),
						acceptText: C("toSFWConfirm.ok"),
						onAccept: this.switchSFW,
						onCancel: p,
						onOverlayClick: p,
						withOverlay: !0
					}), a.a.createElement(Fn, {
						src: d
					}))
				}
			}
			const Hn = Object(r.b)(Ln, e => ({
					imageDeleteRequested: t => e(Object(yn.y)(t)),
					imagesUpdateRequested: (t, s) => e(Object(yn.z)(t, s)),
					save: (t, s) => e(Object(yn.E)(t, s)),
					toggleNSFWModal: () => e(Object(f.i)("ProfileForm_NSFWConfirmDialogID"))
				}))(Object(_n.b)(Wn)),
				zn = Object(o.c)({
					isLoading: e => !Object(Sn.a)(e)
				}),
				Vn = Object(r.b)(zn)(En);
			var Jn = class extends a.a.Component {
					render() {
						return a.a.createElement(Vn, {
							loaderSize: 50,
							render: () => a.a.createElement(Hn, null)
						})
					}
				},
				Gn = s("./src/reddit/components/Settings/SpecialMembership/Header/index.m.less"),
				Kn = s.n(Gn);

			function Zn(e) {
				return a.a.createElement("header", {
					className: e.className
				}, a.a.createElement("div", {
					className: Kn.a.title
				}, Object(k.c)("Special Memberships")), a.a.createElement("div", {
					className: Kn.a.subtitle
				}, Object(k.c)("View and manage your Special Membership subscriptions.")))
			}
			var qn = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Xn = s("./src/reddit/actions/governance/errorToast.ts"),
				Yn = s("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.tsx"),
				Qn = s("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				$n = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				ea = s("./src/reddit/icons/svgs/Close/index.tsx"),
				ta = s("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less"),
				sa = s.n(ta);
			const na = ["Loyalty badge", "New style badges every month", "Distinguished username", "Support new feature development"].map(k.c),
				aa = (e, t) => Object(k.c)("\n  Canceling your Special Membership in the ".concat(Object(k.b)("subredditName", t), "\n  community will stop your monthly payments, disable your access to special\n  features, and end your support of new feature development. You will also lose\n  access to all badges that were included in the subscription. You can keep\n  accessing features till the end of your subscription billing cycle on\n  ").concat(Object(k.b)("endDate", e), ". Do you want to continue and cancel your\n  Special Membership?\n")),
				ra = e => Object(k.c)("\n  You've been supporting the community and the development of new features\n  since ".concat(Object(k.b)("joinDate", e), ".\n"));
			class oa extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						canceling: !1
					}, this.handleCancel = async () => {
						const {
							apiContext: e,
							subredditId: t,
							onCancelMembership: s,
							onError: n
						} = this.props;
						this.setState({
							canceling: !0
						});
						const a = await Object($n.a)(e(), {
							subredditId: t
						});
						a.ok ? s() : (this.setState({
							canceling: !1
						}), n(a.error))
					}
				}
				render() {
					const e = this.props.subreddit && this.props.subreddit.primaryColor,
						t = this.props.subreddit ? this.props.subreddit.displayText : "";
					return a.a.createElement("div", {
						className: Object(C.a)(this.props.className, sa.a.container)
					}, a.a.createElement("header", {
						className: sa.a.header
					}, Object(k.c)("Special Membership Cancellation Confirmation"), a.a.createElement(ea.a, {
						className: sa.a.close,
						onClick: this.props.onClose
					})), a.a.createElement("article", {
						className: sa.a.content
					}, a.a.createElement("div", {
						className: sa.a.warning
					}, aa(this.props.endDate, t)), a.a.createElement("div", {
						className: sa.a.card,
						style: {
							borderColor: e
						}
					}, a.a.createElement(Qn.a, {
						className: sa.a.brand,
						subreddit: this.props.subreddit
					}), a.a.createElement("div", {
						className: sa.a.cardContent
					}, a.a.createElement("div", {
						className: sa.a.cardTitle
					}, this.props.title), a.a.createElement("div", {
						className: sa.a.membershipMsg
					}, ra(this.props.joinDate)), a.a.createElement("div", {
						className: sa.a.benefitsTitle
					}, Object(k.c)("membership benefits")), a.a.createElement("ul", {
						className: sa.a.benefits
					}, na.map(t => a.a.createElement(Yn.a, {
						benefit: t,
						color: e,
						key: t
					})))))), a.a.createElement("footer", {
						className: sa.a.footer
					}, a.a.createElement(y.i, {
						disabled: this.state.canceling,
						onClick: this.handleCancel
					}, this.state.canceling ? Object(k.c)("canceling...") : Object(k.c)("cancel membership")), a.a.createElement(y.f, {
						onClick: this.props.onClose
					}, Object(k.c)("dismiss"))))
				}
			}
			const ia = Object(o.c)({
					subreddit: (e, t) => {
						let {
							subredditId: s
						} = t;
						return e.subreddits.models[s]
					}
				}),
				ca = Object(r.b)(ia, (e, t) => {
					let {
						subredditId: s,
						onClose: n
					} = t;
					return {
						onCancelMembership: () => {
							e(Object(qn.h)({
								subredditId: s
							})), n()
						},
						onError: t => Object(Xn.a)(e, t)
					}
				});
			var la = Object(Ps.a)(Object(yt.b)(ca(oa))),
				da = s("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less"),
				ma = s.n(da);

			function ua(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			class pa extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						modalOpen: !1
					}
				}
				render() {
					const {
						className: e,
						membership: t,
						subreddit: s
					} = this.props, n = ua(t.active.membership.endsAt), r = ua(t.active.membership.publishAt), o = !t.settings.renew, i = s ? s.displayText : "", c = n ? Object(k.c)("Cancelled. Will expire on ".concat(Object(k.b)("date", n))) : "", l = r ? Object(k.c)("Joined ".concat(Object(k.b)("date", r))) : "";
					return a.a.createElement("div", {
						className: Object(C.a)(e, ma.a.container)
					}, a.a.createElement("div", {
						className: ma.a.membershipName
					}, Object(k.c)("".concat(Object(k.b)("subredditName", i), " ").concat(Object(k.b)("title", t.active.membership.title)))), !o && a.a.createElement("div", {
						className: ma.a.joinDate,
						title: l
					}, l), o && a.a.createElement("div", {
						className: ma.a.cancelled,
						title: c
					}, c), a.a.createElement(y.n, {
						className: ma.a.button,
						disabled: o,
						onClick: () => this.setState({
							modalOpen: !0
						})
					}, Object(k.c)("cancel")), this.state.modalOpen && a.a.createElement(la, {
						withOverlay: !0,
						endDate: n,
						joinDate: r,
						subredditId: t.active.membership.subredditId,
						title: t.active.membership.title,
						onClose: () => this.setState({
							modalOpen: !1
						})
					}))
				}
			}
			const ba = Object(o.c)({
				subreddit: (e, t) => {
					let {
						membership: s
					} = t;
					return e.subreddits.models[s.active.membership.subredditId]
				}
			});
			var ha = Object(r.b)(ba)(pa),
				ga = s("./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less"),
				fa = s.n(ga);

			function xa(e) {
				const t = Date.now();
				return !!e.active && t < e.active.membership.endsAt
			}
			const va = Object(o.c)({
				membershipsLoading: e => !e.economics.specialMemberships.allSubscriptionsFetched,
				memberships: e => e.economics.specialMemberships.data
			});
			var ya = Object(r.b)(va)((function(e) {
					const {
						className: t,
						membershipsLoading: s,
						memberships: n
					} = e, r = Object.keys(n).map(e => n[e]).filter(xa).sort((e, t) => e.active.membership.endsAt - t.active.membership.endsAt), o = !!r.length;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement("div", {
						className: fa.a.title
					}, Object(k.c)("Communities")), s && Array.from({
						length: 3
					}).map((e, t) => a.a.createElement("div", {
						className: fa.a.loading,
						key: t
					})), o && r.map(e => a.a.createElement(ha, {
						className: fa.a.membership,
						membership: e
					})), !s && !o && a.a.createElement("div", {
						className: fa.a.empty
					}, Object(k.c)("You are not subscribed to any Special Memberships")))
				})),
				Oa = s("./src/reddit/components/Settings/SpecialMembership/index.m.less"),
				Ca = s.n(Oa);

			function Ea(e) {
				return a.a.createElement(te.a, {
					className: e.className
				}, a.a.createElement(Zn, {
					className: Ca.a.header
				}), a.a.createElement(ya, null))
			}
			var ja = s("./src/reddit/components/TabNav/index.tsx"),
				wa = s("./src/reddit/helpers/correlationIdTracker.ts"),
				_a = s("./src/reddit/helpers/trackers/premiumSettings.ts"),
				ka = s("./src/reddit/selectors/platform.ts");
			const Sa = (e, t, s, n, r, o) => ((e, t, s, n) => [{
					key: l.Lb.Account,
					title: Object(k.c)("Account")
				}, {
					key: l.Lb.Profile,
					title: Object(k.c)("Profile")
				}, {
					key: l.Lb.Privacy,
					title: Object(k.c)("Privacy & Security")
				}, {
					key: l.Lb.Feed,
					title: Object(k.c)("Feed Settings")
				}, {
					key: l.Lb.Notifications,
					title: Object(k.c)("Notifications")
				}, {
					key: l.Lb.Premium,
					title: Object(k.c)("Reddit Premium")
				}, {
					key: l.Lb.Creator,
					title: Object(k.c)("Reddit Creator"),
					disabled: !t
				}, {
					key: l.Lb.Payments,
					title: Object(k.c)("Payments"),
					disabled: !n.length
				}, {
					key: l.Lb.SpecialMembership,
					title: Object(k.c)("Special Memberships"),
					disabled: !s
				}, {
					key: l.Lb.Messaging,
					title: Object(k.c)("Chat & Messaging")
				}])(0, n, r, o).filter(e => !e.disabled).map((t, n) => a.a.createElement(ja.a, {
					to: "/settings/".concat(t.key),
					active: !e && 0 === n || t.key === e,
					key: t.key,
					onClick: s[t.key]
				}, t.title)),
				Na = Object(o.c)({
					savedPayments: jt.o,
					userIsWhitelistedCreator: jt.z,
					allowNavigationCallback: ka.a,
					language: O.T,
					prefs: e => e.user.prefs,
					userHasSpecialMembership: e => {
						if (e.economics.specialMemberships.allSubscriptionsFetched) {
							const t = e.economics.specialMemberships.data;
							return !!Object.keys(t).length
						}
						return !1
					}
				}),
				Pa = Object(r.b)(Na, (e, t) => ({
					updatePrefs: t => e(Object(yn.F)(t)),
					onPageViewed: () => e(Object(m.a)())
				})),
				Ia = {
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
			class Ma extends a.a.Component {
				constructor() {
					var e;
					super(...arguments), e = this, this.update = (e, t) => {
						const {
							prefs: s
						} = this.props;
						this.sendEvent(e, t), s.acceptPrivateMessages && (s.acceptPrivateMessages = s.acceptPrivateMessages.toLowerCase()), this.props.updatePrefs(Object.assign({}, s, {
							[t]: e
						}))
					}, this.sendEvent = (e, t) => {
						const s = c()();
						Ia.hasOwnProperty(t) && this.props.sendEvent(n => ({
							source: this.getSource(),
							action: "save",
							noun: Ia[t],
							correlationId: s,
							setting: {
								value: this.getTrackingValue(t, e),
								oldValue: this.getTrackingValue(t, e, !0)
							}
						}))
					}, this.getSource = () => {
						const e = this.props.match.params.page;
						return e && e !== l.Lb.Account ? "".concat("settings", "_").concat(e) : "settings"
					}, this.getTrackingValue = function(t, s) {
						let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						const a = n ? e.props.prefs[t] : s;
						return "boolean" == typeof a ? ["emailUnsubscribe", "hideFromRobots"].includes(t) ? !0 === a ? "off" : "on" : !0 === a ? "on" : "off" : a
					}, this.renderForm = e => {
						const {
							prefs: t,
							language: s,
							location: n,
							userIsWhitelistedCreator: r,
							userHasSpecialMembership: o
						} = this.props, i = {
							language: s,
							prefs: t,
							update: this.update
						};
						switch (e) {
							case l.Lb.Account:
								return a.a.createElement(De, i);
							case l.Lb.Profile:
								return a.a.createElement(Jn, i);
							case l.Lb.Premium:
								return a.a.createElement(hn.b, i);
							case l.Lb.Notifications:
								return a.a.createElement(Ys, i);
							case l.Lb.Privacy:
								return a.a.createElement(vn, i);
							case l.Lb.Messaging:
								return a.a.createElement(pt, i);
							case l.Lb.Feed:
								return a.a.createElement(vs, i);
							case l.Lb.Payments:
								return a.a.createElement(bn, null);
							case l.Lb.Creator: {
								const e = Object(d.a)(n.search);
								return r ? a.a.createElement(Dt, {
									stripeConnectCode: e.get("code"),
									stripeConnectStateToken: e.get("state")
								}) : null
							}
							case l.Lb.SpecialMembership:
								return o ? a.a.createElement(Ea, null) : null;
							default:
								return a.a.createElement(De, i)
						}
					}, this.onPremiumTabClick = () => {
						this.props.sendEvent(Object(_a.e)())
					}
				}
				componentDidMount() {
					Object(wa.d)(wa.a.PremiumSettings), this.props.onPageViewed()
				}
				componentWillUnmount() {
					Object(wa.b)(wa.a.PremiumSettings)
				}
				componentDidUpdate(e, t, s) {
					e.match.params.page !== this.props.match.params.page && this.props.onPageViewed()
				}
				render() {
					const {
						match: e,
						language: t,
						userIsWhitelistedCreator: s,
						userHasSpecialMembership: n,
						savedPayments: r
					} = this.props;
					return a.a.createElement("div", null, a.a.createElement(ja.c, {
						constrainWidth: !0,
						title: Object(k.c)("User settings"),
						icon: ja.b.GEAR
					}, Sa(e.params.page, t, {
						[l.Lb.Premium]: this.onPremiumTabClick
					}, s, n, r)), this.renderForm(e.params.page))
				}
			}
			t.default = Pa(Object(_n.b)(Ma))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/config.ts");
			const a = (e, t) => "".concat(n.a.assetPath, "/img/memberships/paywall/").concat(e.name.toLowerCase(), "/").concat(t)
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/platform.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const i = new Set(["pollstest", "whatssnoo"]),
				c = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing"]),
				l = e => i.has(e.toLowerCase()) || c.has(e.toLowerCase()),
				d = e => i.has((Object(r.e)(e) || "").toLowerCase()) || c.has((Object(r.e)(e) || "").toLowerCase()) && Object(a.c)(e, {
					experimentEligibilitySelector: o.K,
					experimentName: n.gb
				}) === n.nb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "j", (function() {
				return x
			})), s.d(t, "o", (function() {
				return v
			})), s.d(t, "p", (function() {
				return y
			})), s.d(t, "n", (function() {
				return O
			})), s.d(t, "k", (function() {
				return C
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "s", (function() {
				return j
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "q", (function() {
				return k
			})), s.d(t, "m", (function() {
				return S
			})), s.d(t, "r", (function() {
				return N
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				a = s("./src/reddit/endpoints/governance/crypto.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = s("./src/reddit/selectors/postCreations.ts");
			const c = [],
				l = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				m = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = j(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				u = (e, t) => {
					const s = C(e, t);
					if (s) return s.mainHeader
				},
				p = (e, t) => {
					const s = C(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				b = (e, t) => {
					const s = C(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : l
				},
				h = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(o.b)(e)) {
						const t = Object(i.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const s = r.d.spPolls(e) || r.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return s && !e
					}
					return s
				},
				f = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				x = (e, t) => {
					const s = Object(n.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || c
				},
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || d,
				O = (e, t) => {
					const s = k(e, t);
					return s && s.decimals ? "1" + "0".repeat(s.decimals) : "1"
				},
				C = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				E = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				j = (e, t) => {
					const s = E(e, t);
					return s && s.walletProvider
				},
				w = (e, t) => {
					const s = j(e, t),
						n = E(e, t);
					return s && s.provider || n && n.provider
				},
				_ = (e, t) => {
					const s = w(e, t);
					return s === a.a.Ethereum || s === a.a.Rinkeby
				},
				k = (e, t) => {
					const s = j(e, t),
						n = w(e, t);
					if (s && !s.inTransition && n === a.a.Stellar) return {
						address: s.extra && s.extra.issuerAddress || "",
						decimals: s.extra && s.extra.decimals || 7,
						symbol: s.extra && s.extra.token || "PHOTON"
					};
					const r = s && s.extra && s.extra.contracts,
						o = r && r.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				S = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = j(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				N = (e, t) => {
					const s = E(e, t);
					return !!s && !!s.walletProvider && !s.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=Settings.a73bded0e18feb3299ea.js.map
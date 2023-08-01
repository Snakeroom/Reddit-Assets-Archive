// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.5da4a8bf23d90f3acf2c.js
// Retrieved at 8/1/2023, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
					if (!t(e[r], r, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var r = !0;
				return n(e, (function(e, n, s) {
					return r = !!t(e, n, s)
				})), r
			}
		},
		"./node_modules/lodash/every.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayEvery.js"),
				s = r("./node_modules/lodash/_baseEvery.js"),
				o = r("./node_modules/lodash/_baseIteratee.js"),
				i = r("./node_modules/lodash/isArray.js"),
				a = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, r) {
				var c = i(e) ? n : s;
				return r && a(e, t, r) && (t = void 0), c(e, o(t, 3))
			}
		},
		"./node_modules/lodash/map.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayMap.js"),
				s = r("./node_modules/lodash/_baseIteratee.js"),
				o = r("./node_modules/lodash/_baseMap.js"),
				i = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? n : o)(e, s(t, 3))
			}
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, t, r) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var n = r("./node_modules/ts-error/lib/helpers.js"),
				s = n.setPrototypeOf,
				o = n.getPrototypeOf,
				i = n.defineProperty,
				a = n.objectCreate,
				c = "[object Error]" === (new Error).toString(),
				d = "";

			function l(e) {
				var t, r = this.constructor,
					n = r.name || (null === (t = r.toString().match(/^function\s*([^\s(]+)/)) ? d || "Error" : t[1]),
					a = "Error" === n,
					u = a ? d : n,
					p = Error.apply(this, arguments);
				if (s(p, o(this)), !(p instanceof r && p instanceof l)) {
					p = this;
					Error.apply(this, arguments), i(p, "message", {
						configurable: !0,
						enumerable: !1,
						value: e,
						writable: !0
					})
				}
				if (i(p, "name", {
						configurable: !0,
						enumerable: !1,
						value: u,
						writable: !0
					}), Error.captureStackTrace && Error.captureStackTrace(p, a ? l : r), void 0 === p.stack) {
					var m = new Error(e);
					m.name = p.name, p.stack = m.stack
				}
				return c && i(p, "toString", {
					configurable: !0,
					enumerable: !1,
					value: function() {
						return (this.name || "Error") + (void 0 === this.message ? "" : ": " + this.message)
					},
					writable: !0
				}), p
			}
			d = l.name || "ExtendableError", l.prototype = a(Error.prototype, {
				constructor: {
					value: Error,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t.ExtendableError = l, t.default = t.ExtendableError
		},
		"./node_modules/ts-error/lib/helpers.js": function(e, t, r) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var n = "function" == typeof Object.setPrototypeOf,
				s = "function" == typeof Object.getPrototypeOf,
				o = "function" == typeof Object.defineProperty,
				i = "function" == typeof Object.create,
				a = "function" == typeof Object.prototype.hasOwnProperty;
			t.setPrototypeOf = function(e, t) {
				n ? Object.setPrototypeOf(e, t) : e.__proto__ = t
			};
			t.getPrototypeOf = function(e) {
				return s ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var c = !1;
			t.defineProperty = function e(t, r, n) {
				if (o && !c) try {
					Object.defineProperty(t, r, n)
				} catch (s) {
					c = !0, e(t, r, n)
				} else t[r] = n.value
			};
			var d = function(e, t) {
				return a ? e.hasOwnProperty(e, t) : void 0 === e[t]
			};
			t.hasOwnProperty = d;
			t.objectCreate = function(e, t) {
				if (i) return Object.create(e, t);
				var r = function() {};
				r.prototype = e;
				var n = new r;
				if (void 0 === t) return n;
				if ("null" == typeof t) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof t)
					for (var s in t) d(t, s) && (n[s] = t[s].value);
				return n
			}
		},
		"./src/lib/asyncActions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = e => `${e}_REQUESTED`,
				o = e => `${e}_SUCCEEDED`,
				i = e => `${e}_FAILED`;

			function a(e) {
				const t = s(e),
					r = o(e),
					a = i(e);
				return {
					requestedActionType: t,
					requested: Object(n.a)(t),
					succeededActionType: r,
					succeeded: Object(n.a)(r),
					failedActionType: a,
					failed: Object(n.a)(a)
				}
			}
			var c;
			! function(e) {
				e[e.New = 0] = "New", e[e.Pending = 1] = "Pending", e[e.Succeeded = 2] = "Succeeded", e[e.Failed = 3] = "Failed"
			}(c || (c = {}));
			const d = (e, t, r) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.New,
					s = arguments.length > 1 ? arguments[1] : void 0;
				switch (s.type) {
					case e:
						return n === c.New ? c.Pending : n;
					case t:
						return n === c.Pending ? c.Succeeded : n;
					case r:
						return n === c.Pending ? c.Failed : n;
					default:
						return n
				}
			})
		},
		"./src/lib/reCaptchaEnterprise/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			r("./src/lib/reCaptchaEnterprise/reCaptcha.css");
			var n = r("./src/config.ts"),
				s = r("./src/reddit/helpers/loadThirdPartyScript.ts");
			const o = e => "object" == typeof e && null !== e,
				i = () => "undefined" != typeof window && o(window) && o(window.grecaptcha) && o(window.grecaptcha.enterprise),
				a = () => i() ? window.grecaptcha.enterprise : void 0,
				c = e => `https://www.google.com/recaptcha/enterprise.js?render=${e}`,
				d = e => Object(s.a)(c(e), i),
				l = e => new Promise(t => e.ready(t));
			var u, p = r("./node_modules/ts-error/lib/cjs.js"),
				m = r.n(p);
			class MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError extends m.a {
				constructor() {
					super("reCaptcha Enterprise site key is not set")
				}
			}
			class ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError extends m.a {
				constructor() {
					super("reCaptcha Enterprise client is not ready")
				}
			}
			class ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError extends m.a {
				constructor() {
					super("reCaptcha Enterprise client is not available")
				}
			}! function(e) {
				e.PageLoad = "PAGE_LOAD", e.PostSubmit = "post_submit", e.CommentSubmit = "comment_submit"
			}(u || (u = {}));
			var h = u;
			const f = new class {
				constructor() {
					var e = this;
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.a.reCaptchaEnterprise.siteKey,
						r = arguments.length > 1 ? arguments[1] : void 0;
					this.siteKey = t, this.isReady = !1, this.hasSiteKey = () => !!this.siteKey, this.hasClient = () => !!this.instance, this.setInstance = e => {
						e && (this.instance = e, this.isReady = !1)
					}, this.scriptUrl = () => c(this.siteKey), this.ensureSiteKey = () => {
						if (!this.hasSiteKey) throw new MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError
					}, this.ensureClient = () => {
						const e = this.instance;
						if (!e) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
						return e
					}, this.waitUntilClientIsReady = async () => {
						const e = this.ensureClient();
						return await l(e), this.isReady = !0, e
					}, this.ensureClientIsReady = () => {
						const e = this.ensureClient();
						if (!this.isReady) throw new ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError;
						return e
					}, this.loadScript = async function() {
						let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						if (!e.instance || t) {
							e.ensureSiteKey(), await d(e.siteKey);
							const t = a();
							if (!t) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
							e.setInstance(t)
						}
						e.isReady || await e.waitUntilClientIsReady()
					}, this.execute = async e => {
						this.ensureSiteKey();
						const t = this.ensureClientIsReady(),
							r = await t.execute(this.siteKey, e);
						if (e.fast) {
							return JSON.parse(r)[1]
						}
						return r
					}, this.setInstance(r || a())
				}
			};
			t.b = f
		},
		"./src/lib/reCaptchaEnterprise/reCaptcha.css": function(e, t, r) {},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "e", (function() {
				return v
			}));
			var n = r("./src/lib/asyncActions/index.ts"),
				s = r("./src/lib/constants/euCookiePolicy.ts"),
				o = r("./src/lib/reCaptchaEnterprise/index.ts"),
				i = r("./src/lib/sentry/index.ts");

			function a(e) {
				return t => async (r, n, s) => {
					const o = n();
					if (e(o)) return t(r, n, s)
				}
			}
			var c = r("./node_modules/lodash/every.js"),
				d = r.n(c),
				l = r("./src/reddit/featureFlags/index.ts"),
				u = r("./src/reddit/featureFlags/utils.ts"),
				p = r("./src/reddit/helpers/chooseVariant/index.ts");
			const m = e => l.d.reCaptchaEnterprise(e),
				h = (e, t) => !!Object(p.c)(e, {
					experimentEligibilitySelector: Object(u.d)(Object(u.b)(...s.c)),
					experimentName: t
				}),
				f = Object(n.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				y = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return a(t => d()([m(t), h(t, e), e => e.tracking.reCaptchaEnterprise.load === n.a.New], Boolean))(async e => {
						e(f.requested());
						try {
							await o.b.loadScript(), e(f.succeeded())
						} catch (r) {
							if (e(f.failed()), !t) throw r;
							i.c.withScope(e => {
								Object(i.a)(e, {
									serverLogging: !1
								}), i.c.captureException(r)
							})
						}
					})
				},
				b = Object(n.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				_ = e => a(t => d()([m(t), h(t, e.experiment), e => e.tracking.reCaptchaEnterprise.load === n.a.Succeeded], Boolean))(async t => {
					t(b.requested());
					try {
						const r = await o.b.execute({
							action: e.action,
							fast: e.fast
						});
						return t(b.succeeded({
							token: r
						})), r
					} catch (r) {
						if (t(b.failed()), e.catchAndLogError) return i.c.withScope(e => {
							Object(i.a)(e, {
								serverLogging: !1
							}), i.c.captureException(r)
						}), "";
						throw r
					}
				}),
				v = Object(n.b)("SEND_RECAPTCHA_TOKEN")
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/actions/chat/toggle.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: r,
					className: s,
					sendEvent: i,
					contextId: a,
					priority: c,
					Icon: u,
					redditStyle: p,
					isFullWidth: m,
					eventSource: h,
					onClick: f,
					onAddUserToQuickReplyList: y,
					children: b,
					style: _,
					pageType: v,
					userId: E
				} = e;
				return o.a.createElement(d.t, {
					onClick: e => {
						if (f && f(e), t(v), h === n.awardNotification) return y();
						i(Object(l.b)(a))
					},
					className: s,
					text: r,
					priority: c,
					Icon: u,
					redditStyle: p,
					isFullWidth: m,
					style: _
				}, b)
			};
			u.displayName = "ChatButton";
			const p = Object(i.b)(null, (e, t) => {
				let {
					contextId: r,
					userId: n
				} = t;
				return {
					onStartChat: t => {
						e(Object(a.b)(n, r, t))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(a.a)(n))
					}
				}
			});
			t.b = p(Object(c.c)(u))
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return b
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = r.n(l),
				p = r("./src/lib/lessComponent.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = p.a.div("Text", u.a),
				f = p.a.div("BottomText", u.a),
				y = e => s.a.createElement(h, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				b = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				_ = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: r
						} = t;
						return Object(d.b)(r)(e)
					}
				}),
				v = Object(c.a)(b, [a.a.Click, a.a.Keydown]),
				E = Object(c.a)(y, [a.a.Click, a.a.Keydown]),
				w = Object(o.b)(_);
			t.c = w(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(v, m({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(E, m({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/makeCommentsPageKey/index.ts"),
				c = r("./src/reddit/actions/comment/authoring.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/components/ChatButton/index.tsx"),
				u = r("./src/reddit/constants/things.ts");
			const p = /^\/(r|user)\/(\w+)\/(?:(?:comments\/)(\w+)\/(?:(?:\w+\/)(\w+)\/?)?)?/;
			var m = r("./src/reddit/controls/Button/index.tsx"),
				h = r("./src/reddit/helpers/graphql/helpers.ts"),
				f = r("./src/reddit/helpers/trackers/inbox.ts"),
				y = r("./src/reddit/icons/fonts/index.tsx"),
				b = r("./src/reddit/models/NotificationInbox/index.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/components/NotificationUnit/index.m.less"),
				E = r.n(v);
			const {
				fbt: w
			} = r("./node_modules/fbt/lib/FbtPublic.js"), C = {
				kind: _.b.Error,
				text: w._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: d.a
			};
			t.default = e => {
				var t, r, n, _, v, x, j, O, g, R;
				const I = Object(o.d)(),
					{
						context: S,
						deeplinkUrl: N,
						isFullWidth: T,
						isUnread: A,
						isNightMode: P,
						notificationId: k,
						onEvent: D
					} = e,
					K = null == S ? void 0 : S.messageType,
					U = K === b.a.CommentReply,
					L = K === b.a.SubredditRecommendation,
					F = K === b.a.LifecyclePostSuggestions,
					M = null === (t = null == S ? void 0 : S.post) || void 0 === t ? void 0 : t.permalink;
				let B = null === (r = null == S ? void 0 : S.comment) || void 0 === r ? void 0 : r.id,
					V = (null === (n = null == S ? void 0 : S.post) || void 0 === n ? void 0 : n.id) || (null === (v = null === (_ = null == S ? void 0 : S.comment) || void 0 === _ ? void 0 : _.postInfo) || void 0 === v ? void 0 : v.id);
				const H = null === (x = null == S ? void 0 : S.subreddit) || void 0 === x ? void 0 : x.id,
					W = null === (O = null === (j = null == S ? void 0 : S.awarding) || void 0 === j ? void 0 : j.award) || void 0 === O ? void 0 : O.id,
					$ = null === (R = null === (g = null == S ? void 0 : S.awarding) || void 0 === g ? void 0 : g.awarder) || void 0 === R ? void 0 : R.id;
				if (K === b.a.CommentFollow || K === b.a.PostFollow) {
					const e = (e => {
						const t = {},
							{
								pathname: r
							} = new URL(e);
						if (!r) return t;
						const n = r.match(p);
						if (!n) return t;
						const [s, o, i, a] = n.slice(1);
						return o && "r" === s && (t.subredditName = o), i && (t.postId = `${u.b}${i}`), a && (t.commentId = `${u.a}${a}`), t
					})(N);
					V = e.postId, B = e.commentId
				} else K !== b.a.PostReply && K !== b.a.LifecyclePostSuggestions || (B = k);
				const J = e => {
					if (V && B) {
						const e = Object(a.a)(V, B, Object(h.c)(N)),
							t = {
								parentCommentId: B,
								commentsPageKey: e
							};
						I(Object(c.h)(t)), D({
							position: f.d.SECOND
						})
					} else e.preventDefault(), I(Object(d.f)(C))
				};
				return (() => {
					switch (K) {
						case b.a.HFNSubredditInterestingPost:
						case b.a.LifecyclePostSuggestions:
						case b.a.SubredditRecommendation: {
							const e = F;
							if (!L && !e) return null;
							const t = e => {
									M ? D({
										position: f.d.SECOND,
										postId: V,
										subredditId: H
									}) : (e.preventDefault(), I(Object(d.f)(C)))
								},
								r = w._("Check It Out", null, {
									hk: "3mzMCI"
								});
							return s.a.createElement(m.t, {
								onClick: t,
								isFullWidth: T,
								priority: m.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(E.a.notificationButton, {
									[E.a.isUnread]: A,
									[E.a.isNightMode]: P,
									[E.a.isFullWidth]: T
								})
							}, s.a.createElement(y.a, {
								name: "text_post",
								className: E.a.postIcon
							}), w._("{check out button}", [w._param("check out button", r)], {
								hk: "4DDMme"
							}))
						}
						case b.a.PostReply:
						case b.a.CommentReply:
						case b.a.PostFollow:
						case b.a.CommentFollow: {
							const e = U;
							return U || e ? s.a.createElement(m.t, {
								onClick: J,
								kind: m.b.InternalLink,
								to: N,
								isFullWidth: T,
								priority: m.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(E.a.notificationButton, {
									[E.a.isUnread]: A,
									[E.a.isNightMode]: P,
									[E.a.isFullWidth]: T
								})
							}, s.a.createElement(y.a, {
								name: "reply",
								className: E.a.replyIcon
							}), w._("Reply Back", null, {
								hk: "3JWTvx"
							})) : null
						}
						case b.a.AwardReceived: {
							if (!$) return null;
							const e = e => {
								e.preventDefault(), $ ? D({
									position: f.d.SECOND,
									awardId: W
								}) : I(Object(d.f)(C))
							};
							return s.a.createElement(l.b, {
								userId: $,
								contextId: $,
								onClick: e,
								isFullWidth: T,
								priority: m.c.Tertiary,
								redditStyle: !0,
								eventSource: l.a.awardNotification,
								className: Object(i.a)(E.a.notificationButton, {
									[E.a.isUnread]: A,
									[E.a.isNightMode]: P,
									[E.a.isFullWidth]: T
								}),
								pageType: "notification"
							}, s.a.createElement(y.a, {
								name: "chat_new",
								className: E.a.replyIcon
							}), w._("Say thanks", null, {
								hk: "2FzJoo"
							}))
						}
						case b.a.UpvotePost:
						case b.a.UpvoteComment:
						case b.a.UsernameMention:
						case b.a.PrivateMessage:
						case b.a.UserNewFollower:
						case b.a.ChatMessage:
						case b.a.CakeDay:
						case b.a.ChatRequest:
						case b.a.ChatAcceptInvite:
						case b.a.HFNSubredditInterestingPost:
						case b.a.OneOff:
						case b.a.ModeratedSrViralCommentPost:
						default:
							return null
					}
				})()
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/higherOrderComponents/asTooltip.tsx"),
				i = r("./src/reddit/constants/elementIds.ts"),
				a = r("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const r = Object(o.a)(e, t);
				class n extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(r, c({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(n)
			}
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/config.ts"),
				s = r("./src/lib/fastdom/index.ts");
			const o = "https://js.stripe.com/v3/",
				i = "https://www.paypalobjects.com/api/checkout.js",
				a = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${n.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function c(e, t) {
				return t() ? Promise.resolve() : new Promise((r, n) => s.a.write(() => {
					t() && r();
					const s = document.head;
					let o = s.querySelector(`script[src='${e}']`);

					function i() {
						this.removeEventListener("load", i), this.removeEventListener("error", a), r()
					}

					function a() {
						this.removeEventListener("load", i), this.removeEventListener("error", a), o && s.removeChild(o), n()
					}
					o || ((o = document.createElement("script")).src = e, s.appendChild(o)), o.addEventListener("load", i), o.addEventListener("error", a)
				}))
			}

			function d() {
				return c(o, () => "undefined" != typeof Stripe)
			}

			function l() {
				return c(i, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function u() {
				return Promise.all(Object.keys(a).map(e => {
					const t = "__" + e;
					return c(a[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/helpers/isComment.ts"),
				o = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				i = r("./src/reddit/models/Vote/index.ts"),
				a = e => !0 === e ? i.a.upvoted : !1 === e ? i.a.downvoted : i.a.notVoted,
				c = r("./src/reddit/models/Comment/index.ts");
			t.a = e => {
				const t = {
					approvedAtUTC: e.approved_at_utc,
					approvedBy: e.approved_by,
					author: e.author,
					authorId: e.author_fullname,
					bannedAtUTC: e.banned_at_utc,
					bannedBy: e.banned_by,
					body: e.body_html,
					bodyMD: e.body,
					collapsed: e.collapsed,
					collapsedReason: e.collapsed_reason,
					collapsedReasonCode: e.collapsed_reason_code,
					collapsedBecauseCrowdControl: e.collapsed_because_crowd_control,
					commentType: e.comment_type,
					created: e.created_utc,
					deletedBy: l(e),
					distinguishType: e.distinguished || "",
					editedAt: null,
					id: e.name,
					ignoreReports: e.ignore_reports,
					isAdmin: "admin" === e.distinguished,
					isAuthorPremium: !!e.author_premium,
					isApproved: e.approved,
					isDeleted: e.author === n.G,
					isGildable: e.can_gild,
					isLocked: e.locked,
					isMod: "moderator" === e.distinguished,
					isOp: e.is_submitter,
					isRemoved: e.removed,
					isScoreHidden: e.score_hidden,
					isSpam: e.spam,
					isStickied: e.stickied,
					isSaved: e.isSaved,
					isSystem: !1,
					subredditId: e.subreddit_id,
					markdown: e.body,
					media: {
						mediaMetadata: e.media_metadata,
						type: "rtjson",
						richtextContent: d(e.rtjson),
						rteMode: e.rte_mode
					},
					modReports: e.mod_reports,
					modReportsDismissed: e.mod_reports_dismissed,
					numReports: e.num_reports,
					parentId: Object(s.a)(e.parent_id) ? e.parent_id : null,
					permalink: e.permalink,
					postAuthor: e.link_author || null,
					postId: e.link_id,
					postTitle: e.link_title || null,
					sendReplies: e.send_replies,
					score: e.score,
					treatmentTags: e.treatment_tags,
					userReports: e.user_reports,
					userReportsDismissed: e.user_reports_dismissed,
					voteState: a(e.likes)
				};
				return e.all_awardings && (t.allAwardings = Object(o.a)(e.all_awardings)), e.awarders && (t.awarders = e.awarders), e.associated_award && (t.associatedAwardId = e.associated_award.id, t.associatedAward = Object(o.b)(e.associated_award)), t
			};
			const d = e => "string" == typeof e ? JSON.parse(e) : e,
				l = e => e.author !== n.G ? null : e.body === n.H ? c.c.User : e.body === n.Rb ? c.c.Moderator : null
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.K.NO_STRIPE_SUBSCRIPTION:
							case n.K.USER_DOESNT_EXIST:
							case n.K.USER_REQUIRED_ERROR:
							case n.K.VALIDATION_ERROR:
								return e;
							case n.K.NO_USER:
							case n.K.NO_TEXT:
							case n.K.NO_URL:
								return n.K.VALIDATION_ERROR;
							case n.K.CREDIT_CARD_FAILURE:
							case n.K.CREDIT_CARD_FAILURE_GENERIC:
								return n.K.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.K.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.K.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./node_modules/reselect/es/index.js");
			const i = Object(o.a)(e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: n.Bb
			}), e => ({
				bucketed: e === n.ed.ExpandedSearch || e === n.ed.CollapsedSearch,
				collapsed: e === n.ed.CollapsedSearch,
				expanded: e === n.ed.ExpandedSearch
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.5da4a8bf23d90f3acf2c.js.map
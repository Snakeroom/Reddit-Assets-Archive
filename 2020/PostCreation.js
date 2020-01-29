// https://www.redditstatic.com/desktop2x/PostCreation.a3cbb1cc0b0662d0cf9f.js
// Retrieved at 1/29/2020, 1:10:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation", "ChatMessageInput~MembershipPaywallPage~RichTextEditor"], {
		"./src/graphql/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"7e85bf548364"}')
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/graphql/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"fdef8ef65300"}')
		},
		"./src/graphql/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"cef08b94c057"}')
		},
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/FocusTrap/index.ts"),
				a = n("./src/reddit/actions/shortcuts.ts"),
				c = n("./src/reddit/components/Portal/index.tsx"),
				l = n("./src/reddit/constants/shortcuts.ts"),
				d = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
				p = n.n(u);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var h = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const b = e => {
				var {
					className: t,
					isVisible: n
				} = e, o = h(e, ["className", "isVisible"]);
				return s.a.createElement("div", m({
					className: Object(r.a)(p.a.overlay, t, {
						[p.a.mIsVisible]: n
					})
				}, o))
			};

			function g(e) {
				class t extends o.Component {
					constructor(e) {
						super(e), this.getRef = e => this.ref = e, this.onClick = e => e.stopPropagation(), this.onOverlayClick = e => {
							this.props.onOverlayClick && this.props.onOverlayClick(), e.stopPropagation()
						}, this.state = {
							mounted: !1
						}
					}
					componentDidMount() {
						this.props.ignoreDefaultFocus || this.ref && this.ref.focus(), this.setState({
							mounted: !0
						}), Object(d.a)(), this.ref && (this.focusTrap = new i.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(d.b)(), Object(a.r)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: o,
							onOverlayClick: i,
							overlayClassName: a,
							overlayCustomStyles: d,
							withOverlay: u
						} = t, m = h(t, ["className", "ignoreDefaultFocus", "onOverlayClick", "overlayClassName", "overlayCustomStyles", "withOverlay"]);
						return s.a.createElement(c.a, {
							container: document.getElementById(l.b)
						}, s.a.createElement(b, {
							className: a,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: d
						}, s.a.createElement("div", {
							"aria-modal": !0,
							className: Object(r.a)(p.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, s.a.createElement(e, m))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => s.a.createElement(e, t)
			}
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const n = new o.BigNumber(e),
					s = new o.BigNumber(t),
					r = new o.BigNumber(n.dividedBy(s)),
					i = new o.BigNumber("100").multipliedBy(r);
				return new o.BigNumber(i).toNumber()
			}
		},
		"./src/lib/convertToCamelCase/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = e => {
				const t = {};
				for (const n in e) {
					t[n.replace(/_\w/g, e => e[1].toUpperCase())] = e[n]
				}
				return t
			}
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const o = e => e;

			function s(e, t, n) {
				const [s, r] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: i = o
				} = t || {};
				let {
					start: a = 0,
					end: c = s
				} = t || {};
				if ((a = a < 0 ? 0 : a) >= (c = c > s ? s : c)) return;
				let l = r(a),
					d = i(l, a),
					u = a;
				for (let o = a + 1; o < c; o++) {
					const e = r(o),
						t = i(e, o);
					if (t !== d) {
						if (!1 === n(l, d, u, o)) return;
						d = t, u = o, l = e
					}
				}
				n(l, d, u, c)
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = n("./src/reddit/models/Media/index.ts"),
				s = n("./node_modules/url/url.js"),
				r = n.n(s);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: s
				} = e;
				let i = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = s || Object(o.A)(e)
				} else i = Object(o.A)(e);
				const a = r.a.parse(i),
					c = a.path || "",
					l = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (a.hostname ? a.hostname.replace("www.", "") : "") + l
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/lodash/every.js"),
				s = n.n(o);

			function r(e) {
				let t = null,
					n = null;
				return function() {
					for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
					return null !== t && r.length === t.length && s()(r, (e, n) => e === t[n]) || (t = r, n = e(...r)), n
				}
			}
		},
		"./src/lib/ntext/index.ts": function(e, t, n) {
			"use strict";

			function o(e, t, n) {
				return n || (n = "".concat(t, "s")), 1 === e ? "".concat(e, " ").concat(t) : "".concat(e, " ").concat(n)
			}
			n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/lib/prettyPrintNumber/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.split.js");
			const o = e => {
					const t = e.split(".");
					return [t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")].concat(t.slice(1)).join(".")
				},
				s = 1e3,
				r = 100 * s,
				i = 10 * r,
				a = 100 * i,
				c = 10 * a,
				l = 100 * c,
				d = 51;

			function u(e, t) {
				return t ? o(e.toString()) : e >= l - d ? "".concat(Math.floor(e / c), "b") : e >= c - d && e < l - d ? "".concat((e / c).toFixed(1), "b") : e >= a - d && e < c - d ? "".concat(Math.floor(e / i), "m") : e >= i - d && e < a - d ? "".concat((e / i).toFixed(1), "m") : e >= r - d && e < i - d ? "".concat(Math.floor(e / s), "k") : e >= s && e < r - d ? "".concat((e / s).toFixed(1), "k") : String(e)
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./src/app/strings/index.ts"),
				s = n("./src/lib/constants/index.ts");
			const r = [s.Xb, s.db, s.w, s.I, s.cb, s.Cb],
				i = {
					[s.Cb]: "time.seconds",
					[s.cb]: "time.minutes",
					[s.I]: "time.hours",
					[s.w]: "time.days",
					[s.db]: "time.months",
					[s.Xb]: "time.years"
				},
				a = {
					[s.Cb]: "time.short.seconds",
					[s.cb]: "time.short.minutes",
					[s.I]: "time.short.hours",
					[s.w]: "time.short.days",
					[s.db]: "time.short.months",
					[s.Xb]: "time.short.years"
				};

			function c(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					l = new Date(t).getTime(),
					d = {
						[s.Xb]: "",
						[s.db]: "",
						[s.w]: "",
						[s.I]: "",
						[s.cb]: "",
						[s.Cb]: ""
					};
				let u = l - c;
				if (u <= 0) return Object(o.a)(e, "time.soon");
				for (const s of r) {
					const t = Math.floor(u / s);
					t && (d[s] = n ? "".concat(t).concat(Object(o.a)(e, a[s])) : Object(o.c)(e, i[s], t)), u -= t * s
				}
				const p = r.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
				return n ? p : Object(o.a)(e, "time.timeLeft", {
					time: p
				})
			}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "j", (function() {
				return h
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const r = Object(o.a)(s.a),
				i = Object(o.a)(s.b),
				a = Object(o.a)(s.c),
				c = Object(o.a)(s.d),
				l = Object(o.a)(s.e),
				d = Object(o.a)(s.f),
				u = (Object(o.a)(s.g), Object(o.a)(s.h)),
				p = Object(o.a)(s.i),
				m = Object(o.a)(s.j),
				h = Object(o.a)(s.k)
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forOwn.js"),
				s = n.n(o),
				r = n("./src/reddit/actions/governance/errorToast.ts"),
				i = n("./src/reddit/endpoints/economics/emojis.ts"),
				a = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				l = n("./src/reddit/endpoints/governance/badges.ts"),
				d = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");

			function p(e, t, n) {
				return Object(u.a)(e, {
					method: "get",
					endpoint: "".concat(d.a.metaUrl, "/products/").concat(t, "?owners=").concat(n) + "&types=emotes_pack,giphy"
				})
			}
			var m = n("./src/reddit/models/Badge/index.ts"),
				h = n("./src/reddit/models/Badge/managementPage.ts"),
				b = n("./src/reddit/models/Product/index.ts"),
				g = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				f = n("./src/reddit/selectors/economics.ts"),
				x = n("./src/reddit/selectors/products.ts"),
				C = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function E(e) {
				return !!e && "removeBadge" === e.type
			}

			function y(e) {
				if (!E(e)) return e
			}
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "c", (function() {
				return k
			}));
			const v = () => async (e, t, n) => {
				let {
					apiContext: o
				} = n;
				const s = t().user.account,
					r = !t().economics.specialMemberships.allSubscriptionsFetched;
				if (s && r) {
					const t = await Object(a.b)(o());
					if (t.ok) {
						e(Object(C.a)(t.body));
						const n = Object.keys(t.body);
						if (n.length) {
							const t = await Object(a.e)(o(), n);
							t.ok && e(Object(C.g)(t.body))
						}
					}
				}
			}, O = (e, t) => async (n, o, s) => {
				let {
					apiContext: r
				} = s;
				const i = o().user.account,
					a = o().economics.subredditPremium[e],
					l = !a || a.status !== g.a.Fetched || t;
				if (i && l) {
					const t = await Object(c.a)(r(), e, i.id);
					n(Object(C.i)(t))
				}
			}, j = e => async (t, n, o) => {
				let {
					apiContext: s
				} = o;
				const i = n(),
					a = i.user.account,
					c = Object(f.f)(i, e.subredditId),
					d = Object.keys(c).map(e => c[e]).filter(Boolean);
				if (a && e.badge) {
					let n, o;
					n = e.placement === m.a.First ? c[h.a.Loyalty] : e.placement === m.a.Second ? c[h.a.Achievement] : c[h.a.Cosmetic], t(Object(C.b)(Object.assign({}, e, {
						badge: y(e.badge),
						currentAppliedBadges: d,
						userId: a.id
					}))), E(e.badge) && n ? o = await Object(l.a)(s(), e.subredditId, n.id, !1) : E(e.badge) || (o = await Object(l.a)(s(), e.subredditId, e.badge.id)), o && !o.ok && (t(Object(C.b)(Object.assign({}, e, {
						badge: n,
						currentAppliedBadges: d,
						userId: a.id
					}))), Object(r.a)(t, o.error))
				}
			}, S = (e, t) => async (n, o, s) => {
				let {
					apiContext: r
				} = s;
				await n(O(e, !0));
				const i = o().economics.subredditPremium[e];
				if (i && i.status === g.a.Fetched) {
					const o = i.data.userOwnedBadges.find(e => e.type === t.id);
					o && (n(j({
						badge: o,
						subredditId: e,
						placement: o.placement
					})), n(Object(C.e)(h.c.MyBadges)))
				}
			}, T = e => async (t, n, o) => {
				let {
					apiContext: a
				} = o;
				const c = n().user.account,
					l = !n().economics.emotes[e],
					d = !n().economics.gifs[e];
				if (c && (l || d)) {
					const [n, o] = await Promise.all([Object(i.b)(a(), e), p(a(), e, c.id)]);
					if (!o.ok) return void Object(r.a)(t, o.error);
					const l = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					s()(o.body, e => {
						e.type === b.a.EmotesPack ? l.emotes.push(e) : e.type === b.a.Giphy && l.giphy.push(e)
					}), t(Object(C.f)({
						subredditId: e,
						products: l
					}))
				}
			}, k = (e, t, n) => async (o, s, r) => {
				let {
					apiContext: i
				} = r;
				if (await o(O(e, !0)), n && t) {
					const n = s(),
						r = Object(f.f)(n, e),
						i = Object(x.a)(n, t);
					if (!r[Object(h.d)(i.placement)] && i) {
						const t = Object(f.l)(n, {
							subredditId: e,
							badge: i
						});
						t && await o(j({
							badge: t,
							subredditId: e
						}))
					}
					o(Object(C.d)({
						subredditId: e,
						initialView: h.c.MyBadges
					}))
				}
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/app/strings/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/config.ts"),
				d = n("./src/reddit/endpoints/governance/requester.ts");
			var u = n("./src/reddit/endpoints/governance/poll.ts");
			var p = n("./src/reddit/endpoints/governance/wallet.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/gov.ts"),
				f = n("./src/reddit/actions/governance/constants.ts"),
				x = n("./src/reddit/actions/governance/errorToast.ts");
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return L
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "c", (function() {
				return A
			}));
			const C = Object(s.a)(f.b),
				E = Object(s.a)(f.c),
				y = Object(s.a)(f.d),
				v = Object(s.a)(f.e),
				O = Object(s.a)(f.f),
				j = (Object(s.a)(f.g), Object(s.a)(f.h), Object(s.a)(f.i)),
				S = Object(s.a)(f.j),
				T = Object(s.a)(f.k),
				k = Object(s.a)(f.l),
				w = Object(s.a)(f.r),
				_ = Object(s.a)(f.s),
				I = Object(s.a)(f.t),
				P = Object(s.a)(f.u),
				M = Object(s.a)(f.v),
				R = Object(s.a)(f.w),
				N = Object(s.a)(f.x),
				L = Object(s.a)(f.y),
				D = (e, t) => async (n, o, s) => {
					let r, {
							apiContext: i,
							gqlContext: c
						} = s,
						l = o().polls.models[e];
					if (n(T({
							pollId: e
						})), (r = l.type === m.a.GA ? await Object(u.c)(c(), e, t) : await Object(u.b)(i(), l.subredditId, e, t)).ok) {
						if (l.type === m.a.GA) {
							const {
								options: e
							} = r.body.data.updatePostPollVoteState.poll;
							n(O({
								pollId: l.id,
								optionId: t,
								options: e
							}))
						} else n(k(r.body));
						const s = o();
						if ((l = s.polls.models[e]) && Object(m.d)(l)) {
							const {
								postId: e
							} = l, t = s.posts.models[e];
							t && t.voteState === b.a.notVoted && n(Object(a.N)(e))
						}
					} else n(S({
						pollId: e,
						error: r.error || r.errors[0].message
					})), Object(x.a)(n, r.error || r.errors[0].messsage)
				}, F = (e, t) => async (n, s, a) => {
					let {
						apiContext: u
					} = a;
					n(I());
					const p = s().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(d.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(l.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(u(), Object.assign({}, e, {
						contentId: p
					}));
					if (m.ok) {
						const a = s().user.language;
						n(P(Object.assign({}, m.body, {
							subredditId: e.subredditId
						}))), n(Object(c.e)({
							kind: h.b.SuccessCommunity,
							text: Object(o.a)(a, "gov.transferSuccess", {
								amount: Object(r.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(g.o)(s(), {
									subredditId: e.subredditId
								})
							})
						})), t && n(Object(i.f)())
					} else n(w({
						error: m.error
					})), Object(x.a)(n, m.error)
				}, B = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					t(R());
					const r = await Object(p.a)(s(), e);
					r.ok ? t(N(r.body)) : t(M({
						error: r.error
					}))
				}, A = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					n(y());
					const a = await
					function(e, t, n) {
						return Object(d.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(l.a.metaUrl, "/wallets/").concat(n, "/me")
						})
					}(i(), e, t);
					if (a.ok) {
						n(N({
							[t]: a.body
						}));
						const r = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						n(Object(c.e)({
							kind: h.b.SuccessCommunity,
							text: Object(o.a)(s().user.language, r, {
								tokenName: Object(g.o)(s(), {
									subredditId: t
								})
							})
						}))
					} else Object(x.a)(n, a.error)
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/uuid/v4.js"),
				s = n.n(o),
				r = n("./src/app/strings/index.ts"),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/formatApiError/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/actions/upload.ts"),
				u = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/helpers/correlationIdTracker.ts"),
				b = n("./src/reddit/helpers/imagePreview/index.ts"),
				g = n("./src/reddit/helpers/media/index.ts"),
				f = n("./src/reddit/models/Upload/index.ts"),
				x = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/telemetry/index.ts");
			const E = async e => {
				let {
					state: t,
					uploadKey: n,
					assetId: o,
					isCanceled: s,
					fileSource: r,
					uploadDuration: i,
					correlationId: a
				} = e;
				const c = t.uploads[n],
					l = s || c.status === f.a.CANCELED,
					{
						file: d,
						url: u,
						metadata: p,
						error: m
					} = c,
					h = p.mimetype || d.type,
					b = h.startsWith("video/"),
					g = c.status === f.a.SUCCESS;
				let E = "";
				m ? E = JSON.stringify(m) : l && (E = "canceled");
				const y = {
					width: p.width,
					height: p.height,
					duration: p.videoDuration && Math.round(1e3 * p.videoDuration)
				};
				Object(C.a)(Object.assign({
					source: b ? "videoupload" : "imageupload",
					action: "upload",
					correlationId: a,
					noun: b ? "video" : "image"
				}, (e => Object.assign({}, x.defaults(e), {
					screen: x.screen(e),
					profile: x.profile(e),
					subreddit: x.subreddit(e)
				}))(t), {
					actionInfo: Object.assign({}, x.actionInfo(t), {
						success: g
					}, E ? {
						reason: E
					} : {}),
					media: Object.assign({
						mimetype: h,
						uploadDuration: i,
						source: r,
						fileName: d.name,
						size: d.size,
						type: b ? "video" : "image"
					}, o ? {
						id: o
					} : {}, u ? {
						url: u
					} : {}, y)
				}))
			};
			var y = n("./src/reddit/helpers/trackers/postComposer.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/postCreations.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/actions/postCreation/constants.ts");
			n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return R
			}));
			const T = Object(c.a)(S.v),
				k = Object(c.a)(S.w),
				w = Object(c.a)(S.u),
				_ = e => async (t, n) => {
					t(T());
					const o = e.map(e => {
						let {
							url: n,
							uploadKey: o
						} = e;
						const s = Object(g.a)(Object(g.c)(n), "poster.png");
						return t(P(s, o))
					});
					await Promise.all(o);
					const s = n().uploads,
						r = e.map(e => {
							let {
								uploadKey: t
							} = e;
							return s[t]
						}).find(e => e.status !== f.a.SUCCESS);
					t(r ? w(r.error) : k())
				}, I = (e, t) => ({
					error: t ? {
						type: e,
						fields: [{
							field: "",
							msg: t
						}]
					} : {
						type: e
					}
				});
			const P = (e, t, n, o) => async (s, a, c) => {
				let {
					apiContext: l
				} = c;
				const x = Object(O.g)(a()),
					C = Date.now();
				let v = null,
					S = !1,
					T = !1,
					k = !1;
				const w = e => {
					if (!k && n && S) {
						k = !0;
						const o = a(),
							s = Date.now() - C,
							r = Object(h.c)(h.a.PostComposer);
						T ? E({
							state: o,
							uploadKey: t,
							assetId: v,
							isCanceled: e,
							fileSource: n,
							uploadDuration: s,
							correlationId: r
						}) : y.q(o, t)
					}
				};
				t.startsWith(f.b.RTE_MEDIA);
				await s(Object(d.k)(e, t, async c => {
					S = !0, Object(d.j)(c.id, () => {
						w(!0)
					});
					const {
						error: h,
						metadata: f
					} = await async function(e, t, n, o) {
						const s = Object(j.S)(e),
							a = n && n.allowedPostTypes,
							c = n && n.name,
							l = await Object(g.g)(t) || t.type,
							d = Object(g.b)(t) || void 0;
						if (!d) return I("UNSUPPORTED_BROWSER");
						const u = {
							localUrl: d,
							mimetype: l
						};
						if (!l || !Object(g.i)(l)) return {
							error: {
								type: i.L
							}
						};
						if (l.startsWith("image/")) {
							if (a && !a.images) {
								const e = Object(r.a)(s, "postCreation.mediaInput.imagesAreNotAllowed", {
									subredditName: c
								});
								return I(i.L, e)
							}
							if ("image/gif" === l) {
								if (t.size > i.Q) return I(i.G)
							} else if (t.size > i.S) return I(i.J);
							const e = await Object(b.a)(d);
							u.width = e.width, u.height = e.height
						} else if (l.startsWith("video/")) {
							if (t.size > i.X) return I(i.Vb);
							let e;
							try {
								e = await Object(g.h)(d, !0)
							} catch (p) {
								return I(i.L)
							}
							if (a) {
								const {
									videos: t,
									images: n
								} = a;
								if (n && !t && e.duration > i.Y) {
									const e = Object(r.a)(s, "postCreation.mediaInput.videoTooLongForImageOnlySubreddit", {
										subredditName: c
									});
									return I(i.L, e)
								}
								if (!n && !t) {
									const e = Object(r.a)(s, "postCreation.mediaInput.videosAreNotAllowed", {
										subredditName: c
									});
									return I(i.L, e)
								}
							}
							if (e.duration > i.W) {
								const e = Object(r.a)(s, "postCreation.mediaInput.videoTooLongInGeneral");
								return I(i.L, e)
							}
							u.height = e.height, u.width = e.width, u.videoDuration = e.duration, u.videoFirstFrameUrl = e.firstFrame.dataUrl
						}
						return {
							metadata: u
						}
					}(a(), e, x);
					if (h || !f) return {
						error: h
					};
					s(Object(d.l)({
						key: t,
						metadata: Object.assign({
							fileSource: n
						}, f)
					})), T = !0, o && o();
					const C = e.name,
						E = await (async (e, t, n) => Object(u.b)(Object(p.a)(e, [m.a]), {
							endpoint: "".concat(e.apiUrl, "/api/media/asset.json"),
							method: i.bb.POST,
							data: {
								filepath: t,
								mimetype: n
							}
						}))(l(), C, f.mimetype);
					if (!E.ok) return {
						error: E.error || void 0
					};
					v = E.body.asset.asset_id;
					const y = E.body.asset.websocket_url;
					return {
						uploadLease: E.body.args,
						websocketUrl: y
					}
				}, !0)), w(!1)
			}, M = e => async (t, n, o) => {
				let {
					apiContext: s
				} = o;
				const r = n().uploads[e];
				r && !Object(f.d)(r) && await t(P(r.file, r.key, r.metadata.fileSource))
			}, R = (e, t, n) => async (o, i) => {
				const c = e.map((e, r) => new Promise(async r => {
						const i = Object(f.e)(f.b.RTE_MEDIA, "".concat(n, "-").concat(s()().slice(-6)));
						await o(P(e, i, t, () => r(i))), r(i)
					})),
					d = await Promise.all(c);
				o(function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
					return async (n, o) => {
						const {
							uploads: s,
							user: {
								language: i
							}
						} = o(), c = e.map(e => s[e]).filter(e => e.status === f.a.FAILED && !e.metadata.mimetype).map(e => e.error), d = c.length > t ? t - 1 : c.length, u = c.length - d;
						c.slice(0, d).forEach(e => n(Object(l.e)({
							duration: l.a,
							kind: v.b.Error,
							text: Object(a.a)(i, e)
						}))), u > 0 && n(Object(l.e)({
							duration: l.a,
							kind: v.b.Error,
							text: Object(r.c)(i, "postCreation.cannotAddFiles", u)
						}))
					}
				}(d))
			}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/telemetry/index.ts"),
				i = n("./src/reddit/actions/governance/index.ts"),
				a = n("./src/reddit/actions/layers.ts"),
				c = n("./src/reddit/actions/page.ts"),
				l = n("./src/reddit/actions/postDraft.ts"),
				d = n("./src/reddit/actions/scheduledPosts/index.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				m = n("./src/config.ts"),
				h = n("./src/lib/convertToCamelCase/index.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				g = n("./src/reddit/endpoints/post/create.ts");
			var f = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				x = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				C = n("./src/reddit/featureFlags/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				y = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				v = n("./src/reddit/helpers/trackers/postComposer.ts"),
				O = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				j = n("./src/reddit/i18n/utils.ts"),
				S = n("./src/reddit/models/Poll/index.ts"),
				T = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				w = n("./src/reddit/models/User/index.ts"),
				_ = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				I = n("./src/reddit/selectors/layers.ts"),
				P = n("./src/reddit/selectors/postCreations.ts"),
				M = n("./src/reddit/selectors/postDraft.ts"),
				R = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/models/Post/index.ts"),
				D = n("./src/reddit/actions/postCreation/constants.ts"),
				F = n("./src/reddit/actions/postCreation/general.ts"),
				B = n("./src/reddit/actions/postCreation/mediaUpload.ts");
			n.d(t, "a", (function() {
				return U
			})), n.d(t, "c", (function() {
				return V
			})), n.d(t, "b", (function() {
				return Z
			}));
			const A = Object(s.a)(D.y),
				K = Object(s.a)(D.N),
				U = Object(s.a)(D.p),
				H = Object(s.a)(D.A),
				W = Object(s.a)(D.Y),
				V = Object(s.a)(D.H),
				z = Object(s.a)(D.a),
				q = Object(s.a)(D.D),
				G = (e, t) => {
					const n = t.creations.formData.govType,
						o = Object.assign({}, e);
					if (n && (o.type = n), o.type === S.a.ReplaceTopMod) o.params = {
						userName: t.creations.formData.newTopMod
					}, o.options = S.f[S.a.ReplaceTopMod]();
					else if (o.type === S.a.Spinoff) {
						const e = t.creations.formData.newSubreddit;
						o.params = {
							subreddit: e
						}, o.options = S.f[S.a.Spinoff](e)
					} else o.options = o.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text);
					return o
				},
				J = e => {
					const t = e.uploads,
						n = Object(P.K)(e),
						s = Object(P.a)(e),
						r = Object(P.V)(e);
					if (s === o.Gb.POST) return p.a.getPendingThumbnailUploads(r, t);
					if (s === o.Gb.MEDIA && n) {
						const {
							video: e
						} = n;
						if (e && e.thumbnail && !t[T.n]) return [Object.assign({}, e.thumbnail, {
							uploadKey: T.n
						})]
					}
				},
				Z = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r, a = s();
					const {
						pending: c
					} = a.creations.api.post.submit, d = Object(M.g)(a);
					if (c || d) return;
					n(q(e)), a = s();
					const u = Object(P.a)(a),
						p = C.d.rteVideoPoster(a),
						m = J(a),
						h = u === o.Gb.MEDIA;
					m && (p || h) && (await n(B.d(m)), J(s())) || (e === T.r.Draft ? await n(Object(l.r)(t.draftId)) : e === T.r.ScheduledPost && Object(R.j)(a) ? await n(Q(t)) : e === T.r.ScheduledPost ? await n(X(t)) : await n(Y(t)))
				}, Q = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const i = n(),
						a = Object(P.S)(i),
						l = Object(P.T)(i, e),
						u = Object(P.g)(i),
						p = Object(R.j)(i);
					if (!(l && u.id && a && Object(y.e)(p))) return;
					const m = u.id,
						h = Object(R.h)(n(), {
							subredditId: m,
							scheduledPostId: p
						});
					if (h && Object(r.a)(Object(O.l)(h)(i)), t(A(l)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(P.s)(n()))) return;
					const b = Object(f.d)({
							submission: l,
							schedule: a,
							subredditId: u.id,
							scheduledPostId: p
						}),
						g = await Object(x.a)(s(), b);
					if (g.ok) {
						t(Object(d.c)({
							subredditId: u.id
						}));
						const e = "/r/".concat(u.name, "/about/content");
						return void t(Object(c.I)(e, !1))
					}
					const C = g.error;
					t(U(C))
				}, X = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const i = n(),
						a = Object(P.S)(i),
						l = Object(P.T)(i, e),
						u = Object(P.g)(i);
					if (!l || !u.id || !a) return;
					if (t(A(l)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(P.s)(n()))) return;
					const p = await Object(f.a)(s(), Object(f.c)(l, a, u.id));
					if (p.ok) {
						t(Object(d.c)({
							subredditId: u.id
						}));
						const e = p.body.data.createScheduledPost.scheduledPost;
						e && Object(r.a)(Object(O.i)(Object(E.a)(e))(i));
						const n = "/r/".concat(u.name, "/about/content");
						return void t(Object(c.I)(n, !1))
					}
					const m = p.error;
					t(U(m))
				}, Y = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const l = n(),
						d = Object(P.T)(l, e),
						p = !!Object(I.a)(l),
						f = l.creations.formData.isPoll,
						x = l.creations.formData.polls ? G(l.creations.formData.polls, l) : G({
							duration: o.w,
							options: []
						}, l);
					if (!d) return;
					if (t(A(d)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(P.s)(n()))) return;
					let C;
					if ((C = f ? Object(_.b)(l) ? await Object(g.a)(r(), Object.assign({}, d, {
								kind: T.p.POLL,
								poll: x
							})) : await
							function(e, t, n) {
								const s = t.destSubreddit.id;
								return Object(b.b)(e, {
									method: o.bb.POST,
									endpoint: "".concat(m.a.metaUrl, "/polls/").concat(s),
									type: "json",
									data: Object.assign({
										poll: n,
										subredditId: s
									}, Object(h.a)(Object(g.c)(t)))
								}).then(async e => {
									const n = e.ok ? Object.assign({}, e, {
											body: {
												json: {
													data: e.body
												}
											}
										}) : e,
										o = await Object(g.d)(n, t);
									if (o.ok) {
										const t = o.body;
										return {
											body: Object.assign({}, t, {
												poll: e.body.poll
											}),
											ok: !0,
											status: e.status
										}
									}
									return {
										error: o.body,
										ok: !1,
										status: e.status
									}
								})
							}(r(), d, x) : await Object(g.b)(r(), d)).ok) {
						const e = Object(N.i)(l),
							n = C.body;
						if (t(K({
								draftId: d.draftId,
								response: n
							})), f && !Object(_.b)(l) && t(Object(i.e)({
								poll: n.poll
							})), !p) {
							const o = (n.path || "/user/".concat(Object(w.f)(e), "/posts")).replace(/^\/r\/u_/, "/user/");
							t(Object(c.I)(o, !1))
						}
					} else if (f) {
						const e = C.error;
						t(H(e))
					} else {
						const e = C.error;
						if (e.type === o.D.BAD_CAPTCHA_ERROR) t(z());
						else if (e.type === o.D.VALIDATION_ERROR) t(W(e));
						else if (e.type === o.D.SUBMIT_VALIDATION_ERROR) t(V(e));
						else if (e.type === o.D.RATELIMIT && p) {
							t(Object(a.i)());
							const n = e.fields && e.fields[0] && e.fields[0].msg || Object(j.c)("Layer creation has failed. You can create one layer per 60 minutes"),
								o = Object(u.d)(n, k.b.Error);
							t(Object(u.e)(o))
						} else t(U(e))
					}
					const E = Object(F.o)(d.kind),
						y = C.ok && C.body && C.body.id && Object(L.m)(C.body.id),
						O = n();
					v.o(O, E, y)
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return E
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/postCreation/submit.ts"),
				r = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				c = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				l = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const p = Object(o.a)(r.c),
				m = Object(o.a)(r.g),
				h = Object(o.a)(r.b),
				b = Object(o.a)(r.a),
				g = Object(o.a)(r.d),
				f = Object(o.a)(r.h),
				x = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					if (Object(u.b)(n(), {
							subredditId: e
						})) return;
					t(p());
					const c = await Object(a.b)(s(), {
						subredditId: e,
						first: 25
					});
					if (!c.ok || !c.body || !c.body.data.subredditInfoById.scheduledPosts) return t(b()), void t(Object(i.e)(Object(i.d)(r.l(), d.b.Error, r.m(), x(e))));
					t(h(Object(l.b)(c.body.data)))
				}, C = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const r = n();
					if (!Object(u.b)(r, {
							subredditId: e
						})) return t(x(e));
					if (!Object(u.c)(r, {
							subredditId: e
						})) return;
					const i = Object(u.a)(r, {
						subredditId: e
					});
					if (!i) return;
					t(p());
					const c = await Object(a.b)(s(), {
						subredditId: e,
						first: 25,
						after: i
					});
					c.ok ? t(h(Object(l.b)(c.body.data))) : t(b())
				}, E = (e, t) => async (n, o, r) => {
					let {
						gqlContext: i
					} = r;
					n(m(t));
					const a = {
						[e]: !t[e]
					};
					let l;
					if ((l = "isSticky" === e ? await Object(c.a)(i(), {
							id: t.id,
							sticky: t[e] ? "NONE" : "SECOND"
						}) : await Object(c.a)(i(), Object.assign({
							id: t.id
						}, a))).ok) {
						const e = Object.assign({}, t, a);
						return void n(f({
							scheduledPost: e
						}))
					}
					const d = l.error;
					n(Object(s.a)(d))
				}
		},
		"./src/reddit/components/CategoryTag/index.m.less": function(e, t, n) {
			e.exports = {
				metaFlair: "_7_d4sJjd2oYzaJuU_QpOI",
				"m-lightboxHeader": "_1rtoCmW_7bFJWYffSOwt4R",
				mLightboxHeader: "_1rtoCmW_7bFJWYffSOwt4R"
			}
		},
		"./src/reddit/components/CategoryTagList/index.m.less": function(e, t, n) {
			e.exports = {
				categoryTagWrapper: "_13jLUpnQtcA8FXyw5Kv06q"
			}
		},
		"./src/reddit/components/CategoryTagList/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				m = n("./src/lib/addQueryParams/index.ts");
			const h = (e, t, n, o, s) => {
				const r = s || "*:*",
					i = n || d.O;
				return Object(m.a)("/search", {
					q: r,
					sort: i,
					t: o,
					category_name: e,
					category: t
				})
			};
			var b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				g = n("./src/reddit/selectors/telemetry.ts");
			var f = n("./src/reddit/components/CategoryTag/index.m.less"),
				x = n.n(f);
			var C = class extends s.a.Component {
					constructor() {
						super(...arguments), this.onClick = () => {
							const e = {
								id: this.props.category.categoryId,
								title: this.props.category.categoryName,
								eventType: u.a.SUBREDDIT,
								originElement: "meta_flair"
							};
							this.props.sendEvent(((e, t) => n => Object.assign({
								source: "post",
								action: "click",
								noun: "meta_flair"
							}, g.defaults(n), {
								correlationId: Object(b.c)(b.a.SearchResults),
								post: g.post(n, e),
								search: g.postFlairClickToSearch(n, t),
								subreddit: g.subreddit(n)
							}))(this.props.postId, e))
						}
					}
					render() {
						const e = this.props.category,
							t = this.props.inLightboxHeader,
							n = e.categoryId,
							o = e.categoryName,
							r = s.a.createElement("span", null, o);
						return s.a.createElement("span", {
							className: Object(l.a)(x.a.metaFlair, {
								[x.a["m-lightboxHeader"]]: t
							})
						}, s.a.createElement(p.a, {
							onClick: this.onClick,
							to: h(o, n, d.Ib.Relevance, d.Pb.DAY),
							children: r
						}))
					}
				},
				E = n("./src/reddit/components/CategoryTagList/index.m.less"),
				y = n.n(E);
			const v = Object(r.b)(() => Object(i.c)({
				labelNSFW: c.R
			}));
			t.a = v(Object(a.b)(e => {
				let {
					postCategories: t,
					postId: n,
					inLightboxHeader: o,
					sendEvent: r
				} = e;
				return s.a.createElement("span", {
					className: o ? null : y.a.categoryTagWrapper
				}, t.map(e => s.a.createElement(C, {
					postId: n,
					category: e,
					key: e.categoryId,
					inLightboxHeader: o,
					sendEvent: r
				})))
			}))
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less": function(e, t, n) {
			e.exports = {
				breakout: "_1VBLErIxAjOke05q8yLOyf"
			}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const d = (e, t) => 21 * e + 33 + (t ? 10 : 0);
			t.a = e => {
				var {
					breakOut: t,
					depth: n,
					isEditing: o
				} = e, i = l(e, ["breakOut", "depth", "isEditing"]);
				return s.a.createElement("div", c({
					className: Object(r.a)({
						[a.a.breakout]: t
					}),
					style: {
						left: d(n, o)
					}
				}, i))
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.m.less": function(e, t, n) {
			e.exports = {
				SubmitButton: "_22S4OsoDdOqiM-hPTeOURa",
				submitButton: "_22S4OsoDdOqiM-hPTeOURa",
				LoadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				loadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				CancelButton: "cZz52cPDbNgzrR1Oo1k27",
				cancelButton: "cZz52cPDbNgzrR1Oo1k27",
				ButtonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				buttonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				FormFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				formFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				pending: "_5p2VqxvUAZTtPIXr7XU5p"
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/i18n/components.tsx"),
				d = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				u = n.n(d);
			const p = i.a.div("FormFooterWrapper", u.a),
				m = i.a.wrapped(a.f, "SubmitButton", u.a),
				h = i.a.wrapped(c.a, "LoadingIcon", u.a),
				b = i.a.wrapped(a.i, "CancelButton", u.a),
				g = i.a.div("ButtonWrapper", u.a),
				f = e => e.preventDefault();
			t.a = e => {
				let {
					pending: t,
					cancelButtonEnabled: n = !0,
					children: o,
					className: i,
					submitButtonText: a,
					canSubmit: c,
					onSubmit: d,
					onCancel: x
				} = e;
				return s.a.createElement(p, {
					className: Object(r.a)(i, {
						[u.a.pending]: t
					})
				}, s.a.createElement(g, null, s.a.createElement(m, {
					type: "submit",
					disabled: !c,
					onClick: d,
					onMouseDown: f
				}, t ? s.a.createElement(h, {
					sizePx: 10
				}) : a), n && s.a.createElement(b, {
					type: "reset",
					disabled: t,
					onClick: x,
					onMouseDown: f
				}, s.a.createElement(l.c, null, "cancel"))), o)
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "_2DZnviMjaD88Udr-5V3j38",
				loadingIcon: "_2DZnviMjaD88Udr-5V3j38",
				Wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				MarkdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				markdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				Button: "_1Q2Vq3gesOWZA73NbspEiQ",
				button: "_1Q2Vq3gesOWZA73NbspEiQ"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				loadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				CommentHeader: "PN-j_b1WdWATQha3fOgkV",
				commentHeader: "PN-j_b1WdWATQha3fOgkV",
				HelpButton: "MQruKnjMvMoDlmee_nF40",
				helpButton: "MQruKnjMvMoDlmee_nF40",
				SwitchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				switchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				FormHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				formHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				HelpIcon: "_3TI2tdRj3loY834ns393zu",
				helpIcon: "_3TI2tdRj3loY834ns393zu",
				Wrapper: "B0932G-wzdOKwoaSaKsKU",
				wrapper: "B0932G-wzdOKwoaSaKsKU",
				isTopLevelComment: "_3-O087Fe8Gpv51vkui03iG",
				FormWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				formWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				pending: "_1N53zdZlGyvjHMUoXkJa42",
				focused: "_2sPOgUISlhUYTMcHhUPCTP"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-dom/index.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/app/strings/index.ts"),
				l = n("./src/reddit/actions/comment/index.ts"),
				d = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				p = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				m = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				b = n("./src/reddit/controls/ErrorText/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = n("./src/reddit/i18n/utils.ts"),
				x = n("./src/reddit/icons/svgs/Help/index.tsx"),
				C = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				E = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				y = n("./src/lib/fastdom/index.ts"),
				v = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				O = n.n(v),
				j = n("./src/lib/lessComponent.tsx");
			const S = 310,
				T = j.a.div("Container", O.a);
			class k extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), n = t < S ? "compact" : "full";
						n !== this.state.toolbarType && y.a.write(() => {
							this.setState({
								toolbarType: n
							})
						})
					}
				}
				componentDidMount() {
					y.a.read(this.selectToolbar), window.addEventListener("resize", this.selectToolbar)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.selectToolbar)
				}
				render() {
					return s.a.createElement(T, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var w = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 208 128"
				}, s.a.createElement("rect", {
					width: "198",
					height: "118",
					x: "5",
					y: "5",
					ry: "10",
					stroke: "currentColor",
					strokeWidth: "10",
					fill: "none"
				}), s.a.createElement("path", {
					d: "M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
				})),
				_ = n("./src/reddit/components/PostCreationForm/DivButton/index.tsx"),
				I = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				P = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				M = n.n(P);
			const R = Object(c.e)("comment.switchToRTE"),
				N = j.a.wrapped(g.a, "LoadingIcon", M.a),
				L = j.a.div("Wrapper", M.a),
				D = j.a.wrapped(w, "MarkdownModeIcon", M.a),
				F = j.a.wrapped(_.a, "Button", M.a);
			var B = e => {
					const t = R(e.language);
					return s.a.createElement(L, null, s.a.createElement(F, {
						"aria-label": t,
						setRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick
					}, e.isConverting && s.a.createElement(N, {
						sizePx: 12
					}), s.a.createElement(I.a, {
						text: t
					}), !e.isConverting && s.a.createElement(D, null)))
				},
				A = n("./src/lib/classNames/index.ts"),
				K = n("./src/reddit/constants/keycodes.ts"),
				U = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				H = n("./src/reddit/components/CommentCreation/translations.ts"),
				W = n("./src/reddit/constants/componentSizes.ts"),
				V = n("./src/reddit/constants/componentTestIds.ts"),
				z = n("./src/reddit/selectors/activeModalId.ts"),
				q = n("./src/reddit/selectors/comments.ts"),
				G = n("./src/reddit/selectors/editorContent.ts"),
				J = n("./src/reddit/actions/modal.ts"),
				Z = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				Q = n("./src/reddit/models/PostCreationForm/index.ts"),
				X = n("./src/reddit/models/PostDraft/index.ts"),
				Y = n("./src/reddit/models/User/index.ts"),
				$ = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				ee = n.n($);
			n.d(t, "a", (function() {
				return ae
			}));
			const te = j.a.button("SwitchModeButton", ee.a),
				ne = j.a.wrapped(g.a, "LoadingIcon", ee.a),
				oe = j.a.div("CommentHeader", ee.a),
				se = j.a.span("FormHeaderText", ee.a),
				re = j.a.button("HelpButton", ee.a),
				ie = j.a.wrapped(x.a, "HelpIcon", ee.a),
				ae = e => s.a.createElement(re, {
					className: e.className,
					onClick: e.onClick
				}, s.a.createElement(ie, null)),
				ce = 8,
				le = 16,
				de = j.a.div("Wrapper", ee.a),
				ue = j.a.div("FormWrapper", ee.a),
				pe = Object(i.b)(() => Object(a.c)({
					activeModalId: z.a,
					userName: e => e.user.account ? Object(Y.f)(e.user.account) : "",
					pending: (e, t) => e.comments.submit.pending[t.draftKey],
					draft: q.i,
					isConverting: (e, t) => Object(G.a)(e, t.draftKey)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(J.i)(Object(U.a)(t.draftKey))),
					helpModalToggled: () => e(Object(J.i)(h.b))
				}));
			class me extends s.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < W.d,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.wrapperHeight || y.a.write(() => {
							this.setState({
								breakOut: e,
								wrapperHeight: t
							})
						})
					}, this.focus = () => {
						this.textAreaRef && this.textAreaRef.focus()
					}, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange && this.props.onChange({
							text: t,
							editorState: null
						}), this.setState(() => ({
							text: t,
							hasChanged: !0,
							showError: !1
						}), () => {
							y.a.read(this.detectBreakout)
						})
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === X.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onBlur = e => {
						(!e || e && e.relatedTarget !== this.switchModeBtn) && (this.textAreaRef && this.textAreaRef.blur(), this.props.onFocusChanged(!1))
					}, this.onFocus = () => {
						this.props.onFocus(), this.props.onFocusChanged(!0)
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === K.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: Q.h.MARKDOWN,
							draftType: this.props.draftType,
							editorState: null,
							text: this.getCurrentText(),
							validate: this.props.showWarningModal
						}), this.onBlur()
					}, this.userHasEnteredText = () => {
						const {
							text: e
						} = this.state;
						return !!e.trim()
					}, this.setWrapperRef = e => {
						this.wrapperEl = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setTextAreaRef = e => this.textAreaRef = e;
					const {
						draftType: t,
						hasError: n,
						initialText: o,
						language: s
					} = e;
					this.state = {
						text: o || "",
						autofocusDisabled: !1,
						hasChanged: !1,
						showError: n,
						breakOut: !1,
						wrapperHeight: void 0,
						formHeight: null,
						cancelModalText: t === X.c.edit ? Object(c.a)(s, "comment.confirmCancellation.edit") : Object(c.a)(s, "comment.confirmCancellation.creation")
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), y.a.read(this.detectBreakout), y.a.write(() => {
						this.props.draft.hasFocus && this.textAreaRef && this.textAreaRef.focus()
					}), this.props.instanceRef && this.props.instanceRef(this)
				}
				componentWillUnmount() {
					this.props.onUnmount({
						text: this.getCurrentText()
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null)
				}
				componentDidUpdate(e) {
					const t = e.pending,
						{
							hasError: n,
							pending: o
						} = this.props;
					t && !o && !n ? this.setState({
						text: "",
						showError: !1
					}) : e.hasError !== this.props.hasError && this.setState({
						showError: this.props.hasError
					})
				}
				getCurrentText() {
					const {
						draft: e
					} = this.props, t = e && e.text;
					return this.state.text || t
				}
				getWrapperHeight() {
					if (!this.textAreaRef) return;
					const e = Object(r.findDOMNode)(this.textAreaRef);
					return e instanceof Element ? e.getBoundingClientRect().height + ce + le + W.p : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: n,
						className: o,
						disableAutofocus: r,
						depth: i,
						draft: a,
						draftKey: c,
						draftType: g,
						errorMsgs: x,
						pending: y,
						language: v,
						modalSeen: O,
						submitButtonText: j,
						isTopLevelComment: S,
						onSwitchMode: T,
						userName: w
					} = this.props, {
						cancelModalText: _,
						showError: I,
						text: P,
						breakOut: M,
						wrapperHeight: R
					} = this.state, N = Object(U.a)(c), L = a.draftType === X.c.edit;
					return s.a.createElement(de, {
						"data-test-id": V.b,
						className: Object(A.a)(o, {
							[ee.a.isTopLevelComment]: S
						}),
						ref: this.setWrapperRef,
						style: {
							height: M ? R : void 0
						}
					}, S && s.a.createElement(oe, null, s.a.createElement(se, null, "Comment as"), s.a.createElement(d.a, {
						author: w,
						isAdmin: !1,
						isAdminEmeritus: !1,
						isAuthorDeleted: !1,
						isMod: !1,
						isOp: !1
					}, w)), s.a.createElement(C.a, {
						breakOut: M,
						depth: i,
						isEditing: L
					}, s.a.createElement(ue, {
						className: Object(A.a)({
							[ee.a.pending]: y,
							[ee.a.focused]: a.hasFocus
						})
					}, s.a.createElement(Z.a, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !r,
						disabled: y,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: Object(f.c)("What are your thoughts?"),
						value: P
					}), s.a.createElement(E.a, {
						cancelButtonEnabled: g !== X.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: y,
						submitButtonText: j,
						canSubmit: this.userHasEnteredText()
					}, s.a.createElement(k, null, e => "compact" === e ? s.a.createElement(B, {
						language: v,
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => T(Q.h.RICH_TEXT, P, c),
						isConverting: this.props.isConverting
					}) : s.a.createElement("div", null, s.a.createElement(te, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => T(Q.h.RICH_TEXT, P, c)
					}, "Switch to Fancy Pants Editor", this.props.isConverting && s.a.createElement(ne, {
						sizePx: 12
					})))), s.a.createElement(ae, {
						onClick: this.props.helpModalToggled
					})))), I && Object(b.c)(x), e === N && s.a.createElement(m.a, {
						actionText: Object(H.a)(v),
						cancelActionText: Object(H.b)(v),
						modalText: _,
						onConfirm: () => this.cancelForm(),
						toggleModal: n,
						trackClick: () => {}
					}), e === h.b && s.a.createElement(h.a, {
						language: v
					}), e === l.qb && s.a.createElement(p.a, {
						onSubmit: this.onSubmit,
						modalSeen: O,
						withOverlay: !0
					}), s.a.createElement(u.a, {
						language: v,
						editKey: c,
						hasValue: !!P
					}))
				}
			}
			t.b = pe(me)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/app/strings/index.ts");
			let a = null;
			class c extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						c.blockers.delete(e), c.blockers.size || (a && a(), a = null, window.removeEventListener("beforeunload", c.navigationBlocker))
					}
				}
				componentDidUpdate(e) {
					!e.hasValue && this.props.hasValue ? this.block(this.props.editKey) : e.hasValue && !this.props.hasValue && this.unblock(this.props.editKey)
				}
				componentWillUnmount() {
					this.unblock(this.props.editKey)
				}
				componentDidMount() {
					this.props.hasValue && this.block(this.props.editKey)
				}
				block(e) {
					c.blockers.add(e), a || (window.addEventListener("beforeunload", c.navigationBlocker), a = this.props.history.block(() => {
						const e = this.props.isPostEdit ? Object(i.a)(this.props.language, "posts.confirmNavigation") : Object(i.a)(this.props.language, "comment.confirmNavigation");
						return window.confirm(e) ? void 0 : "Are you sure you want to leave?"
					}))
				}
				render() {
					return null
				}
			}
			c.blockers = new Set, c.navigationBlocker = e => {
				const t = "Are you sure you want to leave?";
				return e.returnValue = t, t
			}, t.a = Object(r.i)(c)
		},
		"./src/reddit/components/CommentCreation/ToolbarSelector.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1XC-wMQsKPqfaPcfWQCZdW",
				container: "_1XC-wMQsKPqfaPcfWQCZdW"
			}
		},
		"./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/higherOrderComponents/asModal/index.tsx"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/uuid/v4.js"),
				c = n.n(a),
				l = n("./src/reddit/actions/comment/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/TextButton/index.tsx"),
				h = n("./src/reddit/constants/tracking.ts"),
				b = n("./src/reddit/selectors/telemetry.ts");
			const g = e => Object.assign({
					source: "toxicity_modal"
				}, b.defaults(e), {
					screen: b.screen(e),
					subreddit: b.subreddit(e)
				}),
				f = e => t => Object.assign({
					action: h.c.VIEW,
					noun: "modal",
					correlationId: e
				}, g(t)),
				x = e => t => Object.assign({
					action: h.c.CLICK,
					noun: "submit",
					correlationId: e
				}, g(t)),
				C = e => t => Object.assign({
					action: h.c.CLICK,
					noun: "edit",
					correlationId: e
				}, g(t)),
				E = e => t => Object.assign({
					action: h.c.CLICK,
					noun: "close",
					correlationId: e
				}, g(t));
			var y = n("./src/reddit/i18n/components.tsx"),
				v = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const O = Object(i.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(d.g)(l.qb))
				},
				continue: () => {
					t.onSubmit()
				}
			}));
			class j extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: c()()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(f(this.state.correlationId))
				}
				render() {
					return r.a.createElement(u.c, null, r.a.createElement(u.g, null, r.a.createElement(v.a, null, r.a.createElement(u.n, null, r.a.createElement(y.c, null, "Are you sure you want to post that?")), r.a.createElement(m.a, {
						onClick: () => {
							this.props.sendEvent(E(this.state.correlationId)), this.props.closeModal()
						}
					}, r.a.createElement(u.b, null)))), r.a.createElement(u.j, null, r.a.createElement(u.m, null, r.a.createElement(y.c, null, "A reminder from the mods: Please follow community rules when commenting."))), r.a.createElement(u.e, null, r.a.createElement(u.a, {
						onClick: () => {
							this.props.sendEvent(C(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, r.a.createElement(y.c, null, "Go back and edit")), r.a.createElement(u.o, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, r.a.createElement(y.c, null, "Comment"))))
				}
			}
			t.a = Object(o.a)(O(Object(p.b)(j)))
		},
		"./src/reddit/components/CommentCreation/getCancelModalId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = e => "Comment-cancelModal__".concat(e)
		},
		"./src/reddit/components/CommentCreation/translations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/app/strings/index.ts");
			const s = Object(o.e)("comment.keep"),
				r = Object(o.e)("postCreation.discard.button");
			Object(o.e)("comment.confirmCancellation.creation")
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				m = n("./src/reddit/i18n/utils.ts"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/components/ContributorRequestFlow/index.m.less"),
				f = n.n(g);
			const x = Object(i.c)({
				restrictions: b.o
			});
			class C extends s.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						this.props.sendEvent(Object(p.a)(this.props.eventSource)), this.props.openContributorRequestModal()
					}
				}
				render() {
					return s.a.createElement(u.f, {
						className: Object(a.a)(this.props.smallButton ? null : f.a.RequestButton, this.props.className),
						onClick: this.onRequest
					}, this.props.eventSource === h.b.Comment ? Object(m.c)("Request to comment") : Object(m.c)("Request to post"))
				}
			}
			t.a = Object(r.b)(x, e => ({
				openContributorRequestModal: () => e(Object(c.i)(d.a.CONTRIBUTOR_REQUEST))
			}))(Object(l.b)(C))
		},
		"./src/reddit/components/ContributorRequestFlow/index.m.less": function(e, t, n) {
			e.exports = {
				RequestButton: "_33axOHPa8DzNnTmwzen-wO",
				requestButton: "_33axOHPa8DzNnTmwzen-wO"
			}
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, n) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/app/strings/index.ts"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/components/Media/index.tsx"),
				p = n("./src/reddit/components/PostMeta/index.tsx"),
				m = n("./src/reddit/components/PostTitle/index.tsx"),
				h = n("./src/reddit/components/SourceLink/index.tsx"),
				b = n("./src/reddit/components/Thumbnail/index.tsx"),
				g = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/CrosspostBox/index.m.less"),
				C = n.n(x),
				E = n("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = E.a.div("Container", C.a),
				O = E.a.div("PostMetaWrapper", C.a),
				j = E.a.wrapped(m.c, "PostTitle", C.a),
				S = E.a.div("FlatList", C.a),
				T = E.a.div("FlatItem", C.a),
				k = E.a.span("FlatListDotSpacer", C.a),
				w = E.a.wrapped(v, "LinkContainer", C.a),
				_ = E.a.div("Content", C.a),
				I = E.a.div("ThumbnailContainer", C.a),
				P = Object(a.c)({
					isCurrentUserProfilePost: g.h,
					language: f.S,
					post: g.I,
					shouldOpenPostInNewTab: f.W,
					subreddit: g.U
				}),
				M = Object(r.b)(P);
			t.a = M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					mediaProps: o,
					post: r,
					subreddit: i,
					language: a
				} = e;
				if (!r) return null;
				const c = {
						post: r,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						language: a,
						tooltipType: "".concat("CrosspostBox", "--").concat(o.isListing)
					},
					l = t;
				return r && !r.media ? s.a.createElement(w, {
					className: l
				}, s.a.createElement(_, null, s.a.createElement(O, null, s.a.createElement(p.a, c)), R(r), r.source && s.a.createElement(h.a, {
					post: r
				}), L(e)), F(e)) : s.a.createElement(v, {
					className: l
				}, s.a.createElement(O, null, s.a.createElement(p.a, c)), R(r), N(e), L(e))
			});
			const R = e => s.a.createElement(j, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: m.b.Small
				}),
				N = e => {
					const {
						mediaProps: t,
						post: n
					} = e, o = Object.assign({}, t, {
						post: n,
						crosspost: t.post
					});
					return s.a.createElement("div", null, s.a.createElement(u.a, y({}, o, {
						className: C.a.mediaContainer
					})))
				},
				L = e => {
					const {
						language: t,
						post: n
					} = e, {
						score: o
					} = n;
					return s.a.createElement(S, null, s.a.createElement(T, null, Object(c.c)(t, "posts.points.noun", o, {
						count: Object(d.b)(o)
					})), s.a.createElement(k, null), s.a.createElement(T, null, D(e)))
				},
				D = e => {
					const {
						language: t,
						post: n,
						shouldOpenPostInNewTab: o
					} = e, {
						numComments: r
					} = n;
					return s.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(l.a)(n.permalink, !0),
						target: o ? "_blank" : void 0
					}, Object(c.c)(t, "posts.comments.noun", r, {
						count: Object(d.b)(r)
					}))
				},
				F = e => s.a.createElement(I, null, s.a.createElement(b.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, n) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, n) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/lodash/pick.js"),
				s = n.n(o),
				r = n("./node_modules/polished/dist/polished.es.js"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Emoji/index.m.less"),
				h = n.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const f = p.a.wrapped(e => {
				var {
					backgroundImage: t,
					style: n
				} = e, o = g(e, ["backgroundImage", "style"]);
				return a.a.createElement("div", b({
					style: Object.assign({}, n || {}, {
						backgroundImage: "url('".concat(t, "')")
					})
				}, o))
			}, "EmojiDisplay", h.a);
			var x = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				C = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				E = n("./src/reddit/constants/colors.ts"),
				y = n("./src/reddit/constants/parameters.ts"),
				v = n("./src/reddit/controls/InternalLink/index.tsx"),
				O = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				j = n("./src/reddit/i18n/utils.ts"),
				S = n("./src/reddit/icons/svgs/Close/index.tsx"),
				T = n("./src/reddit/models/Flair/index.ts"),
				k = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = n("./src/reddit/components/Flair/index.m.less"),
				_ = n.n(w);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			n.d(t, "c", (function() {
				return H
			})), n.d(t, "a", (function() {
				return W
			}));
			var P = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const M = Object(C.a)(x.b),
				R = p.a.div("FlairWrapper", _.a),
				N = p.a.wrapped(c.a, "CloseButton", _.a),
				L = p.a.wrapped(Object(u.a)(e => {
					var {
						forceSmallEmojis: t,
						theme: n
					} = e, o = P(e, ["forceSmallEmojis", "theme"]);
					const s = n;
					return a.a.createElement(f, I({
						style: Object.assign({}, D(!!t, s) || {})
					}, o))
				}), "FlairEmojiDisplay", _.a),
				D = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: "".concat(t.subredditContext.emojiHeight, "px"),
						width: "".concat(t.subredditContext.emojiWidth, "px")
					}
				},
				F = (e, t) => {
					const n = t ? "/r/".concat(t, "/search") : "/search",
						o = "".concat(t ? "flair_name" : "flair", ':"').concat(e, '"');
					return Object(l.a)(n, {
						[y.o]: o,
						[y.p]: t ? "1" : ""
					})
				},
				B = e => e.isFlairFilter ? a.a.createElement(v.a, {
					children: e.flair,
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}) : e.onClick ? a.a.createElement(v.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: F(e.searchableTerm, e.subredditName),
					children: e.flair
				}) : e.flair;
			class A extends a.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = a.a.createElement("span", {
						className: Object(d.a)(this.props.className, {
							[_.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(k.a)(this.props).flair,
							color: "".concat(H(this.props))
						}
					}, this.props.text, this.props.isSelected && a.a.createElement(N, {
						to: "./",
						onClick: this.props.onCloseClick
					}, a.a.createElement(S.a, {
						className: _.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(k.a)(this.props).flair
						}
					})), !!this.props.tooltip && a.a.createElement(M, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return a.a.createElement(B, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const K = Object(u.a)(A),
				U = Object(u.a)(e => {
					let t = "",
						n = !1;
					const o = e.richtext.map((o, s) => {
						if (o.e === T.c.Emoji) {
							const r = o;
							return t += r.a, n = !0, a.a.createElement(L, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: r.u,
								key: s,
								title: r.a
							})
						} {
							const e = o;
							return t += e.t, a.a.createElement("span", {
								key: s
							}, e.t)
						}
					});
					let s;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (s = {
						marginTop: "-".concat(e.theme.subredditContext.emojiHeight - 16, "px")
					});
					const r = a.a.createElement(R, {
						className: Object(d.a)(e.className, {
							[_.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: Object.assign({}, s, {
							backgroundColor: e.backgroundColor || Object(k.a)(e).flair,
							color: "".concat(H(e))
						})
					}, o, e.isSelected && a.a.createElement(N, {
						to: "./",
						onClick: e.onCloseClick
					}, a.a.createElement(S.a, {
						className: _.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(k.a)(e).flair
						}
					})));
					return a.a.createElement(B, {
						flair: r,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				H = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(k.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(O.a)(Object(k.a)(e).post, E.a.black, E.a.white) : e.textColor === T.e.Dark ? E.a.black : E.a.white,
				W = p.a.wrapped(K, "TextFlair", _.a),
				V = p.a.wrapped(U, "RichTextFlair", _.a),
				z = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(r.m)(.1, Object(k.a)(s()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				q = p.a.wrapped(e => {
					const t = z(e),
						n = a.a.createElement("span", {
							className: e.className,
							style: {
								border: "1px solid ".concat(t),
								color: t
							}
						}, e.text);
					return a.a.createElement(B, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", _.a);
			t.b = e => {
				const {
					className: t,
					disabled: n = !1,
					flair: o,
					isFlairFilter: s,
					isSelected: r,
					onClick: i,
					onCloseClick: c,
					onMouseDown: l,
					subredditName: u,
					usesCommunityStyles: p,
					forceSmallEmojis: m,
					to: h
				} = e, b = Object(d.a)({
					[_.a.flairVariant]: s,
					[_.a.small]: s && !e.large,
					[_.a.large]: s && e.large
				}, t);
				switch (o.type) {
					case T.f.Richtext:
						return n || !o.richtext ? null : a.a.createElement(V, {
							backgroundColor: o.backgroundColor,
							className: b,
							forceSmallEmojis: m,
							isFlairFilter: s,
							isSelected: r,
							onClick: i,
							onCloseClick: c,
							onMouseDown: l,
							redditStyle: !p,
							richtext: o.richtext,
							subredditName: u,
							textColor: o.textColor,
							to: h
						});
					case T.f.Text:
						return n || !o.text ? null : a.a.createElement(W, {
							backgroundColor: o.backgroundColor,
							className: b,
							isFlairFilter: s,
							isSelected: r,
							onClick: i,
							onCloseClick: c,
							onMouseDown: l,
							subredditName: u,
							text: o.text,
							textColor: o.textColor,
							redditStyle: !p,
							to: h
						});
					case T.f.Meta:
						return a.a.createElement(W, {
							backgroundColor: o.backgroundColor,
							className: t,
							isFlairFilter: s,
							subredditName: u,
							text: o.text,
							textColor: o.textColor,
							redditStyle: !p,
							to: h
						});
					case T.f.Nsfw:
					case T.f.Spoiler:
						return a.a.createElement(q, {
							className: t,
							text: o.text,
							type: o.type
						});
					case T.f.Quarantined:
						return null;
					case T.f.Oc:
						return a.a.createElement(W, {
							backgroundColor: E.a.alienblue,
							text: o.text,
							textColor: T.e.Light,
							tooltip: Object(j.c)("This post is marked as Original Content [OC]")
						});
					default:
						return o.text ? a.a.createElement(W, {
							backgroundColor: o.backgroundColor,
							className: b,
							isFlairFilter: s,
							onClick: i,
							onCloseClick: c,
							onMouseDown: l,
							subredditName: u,
							text: o.text,
							redditStyle: !p,
							to: h
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/noop.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				d = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const m = Object(c.c)({
					labelNSFW: p.R
				}),
				h = Object(a.b)(m),
				b = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return "".concat(e.type, "--").concat(t)
					}
					return "".concat(e.type, "--").concat(e.text)
				};
			t.a = h(e => {
				let {
					className: t,
					isFlairFilter: n,
					onClick: o,
					onMouseDown: r,
					disabled: a = !1,
					flair: c,
					labelNSFW: p,
					subredditName: m
				} = e;
				const h = !!c.find(e => e.type === u.f.Richtext),
					g = c.map(e => {
						if (e.type === u.f.Text && h) return null;
						if (!p && e.type === u.f.Nsfw) return null;
						const t = Object(d.j)(e),
							c = "/r/".concat(m, "/"),
							g = r ? () => r(e) : s.a;
						return i.a.createElement(l.b, {
							isFlairFilter: n,
							key: b(e),
							onClick: o,
							onMouseDown: g,
							disabled: a,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: m,
							to: Object(d.e)(c, t)
						})
					});
				return i.a.createElement("div", {
					className: t
				}, g)
			})
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/noop.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				d = n.n(l);
			t.a = e => i.a.createElement(a.g, {
				className: d.a.modalHeader
			}, i.a.createElement(a.n, null, e.title), i.a.createElement(c.a, {
				onClick: e.onClosePressed || s.a
			}, i.a.createElement(a.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				r = n.n(s);
			const i = o.a.div("Wrapper", r.a);
			t.a = i
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, n) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Flair/index.tsx"),
				a = n("./src/reddit/i18n/components.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				l = n.n(c);
			const d = r.a.span("Placeholder", l.a),
				u = r.a.div("SelectedFlair", l.a),
				p = r.a.wrapped(i.b, "FlairComponent", l.a);
			t.a = e => e.flair ? s.a.createElement(u, null, s.a.createElement(d, null, e.placeholderText), s.a.createElement(p, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : s.a.createElement(u, null, s.a.createElement(a.c, null, "No flair selected"))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, n) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				p = n.n(u);
			const m = l.a.wrapped(e => i.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[p.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", p.a),
				h = s()((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m;
					return Object(a.a)({
						getComponent: () => Object(d.a)(() => Promise.all([n.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
						ErrorComponent: e,
						LoadingComponent: e
					})
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/i18n/utils.ts"),
				p = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				h = n("./src/reddit/components/Flair/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/index.tsx"),
				g = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				f = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				x = n("./src/reddit/icons/svgs/Search/index.tsx"),
				C = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				E = n.n(C),
				y = class extends s.a.Component {
					constructor() {
						super(...arguments), this.state = {
							searchQuery: ""
						}, this.onSearchChange = e => {
							this.setState({
								searchQuery: e.target.value
							})
						}
					}
					render() {
						const {
							templates: e,
							templateIds: t,
							selectedTemplateId: n
						} = this.props, {
							searchQuery: o
						} = this.state, r = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(o)), i = !!n && r.some(e => e.id === n);
						return s.a.createElement("div", {
							className: E.a.container
						}, s.a.createElement("div", {
							className: E.a.searchBoxWrapper
						}, s.a.createElement("input", {
							className: E.a.searchInput,
							onChange: this.onSearchChange,
							type: "text",
							placeholder: Object(u.c)("Search for flair"),
							value: o
						}), s.a.createElement(x.a, {
							className: E.a.searchIcon
						})), s.a.createElement(b.a, {
							name: "flair_picker",
							onChange: this.props.onChange,
							value: n
						}, r.map((e, t) => {
							const o = Object(d.c)(e),
								r = n === e.id || !i && 0 === t;
							return s.a.createElement(g.a, {
								className: E.a.radioOption,
								key: e.id,
								showButton: !0,
								tabIndex: r ? 0 : -1,
								value: e.id
							}, s.a.createElement(h.b, {
								className: E.a.flairComponent,
								flair: o,
								forceSmallEmojis: !0
							}), e.textEditable && s.a.createElement(f.a, {
								className: E.a.pencil
							}))
						})))
					}
				},
				v = n("./src/reddit/components/FlairSearch/index.m.less"),
				O = n.n(v);
			const j = "FlairSearch-EmojiPicker-DropdownId",
				S = Object(c.a)(e => e && Object(d.c)(e)),
				T = Object(i.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: p.d
				}),
				k = Object(r.b)(T);
			class w extends s.a.Component {
				constructor() {
					super(...arguments), this.onFlairEdit = e => {
						const {
							templates: t
						} = this.props, n = t && e.templateId ? t[e.templateId] : void 0;
						let o = e;
						n && (o = Object(d.d)({
							flair: e,
							template: n,
							ignoreTextAllowance: !0
						})), this.props.onChange(o)
					}, this.onTemplateSelected = e => {
						const {
							templates: t
						} = this.props;
						if (t) {
							const n = t[e],
								o = Object(d.c)(n);
							this.props.onChange(o)
						}
					}
				}
				render() {
					const {
						props: e
					} = this, {
						isModerator: t,
						templates: n,
						templateIds: o,
						subredditId: r
					} = e, i = n && e.flair && e.flair.templateId && n[e.flair.templateId] || void 0, c = Object(m.a)(), l = e.flair || S(i);
					return s.a.createElement("div", {
						className: Object(a.a)(e.className, O.a.container)
					}, n && o && s.a.createElement(y, {
						flairTemplateType: e.flairTemplateType,
						onChange: this.onTemplateSelected,
						selectedTemplateId: i ? i.id : "",
						templateIds: o,
						templates: n
					}), l && i && (t || i.textEditable) ? s.a.createElement("div", {
						className: O.a.flairEditSection
					}, s.a.createElement("div", {
						className: O.a.editLabel
					}, Object(u.c)("Edit flair")), e.areFlairRestrictionsEnabled && s.a.createElement("div", {
						className: O.a.restrictionHintText
					}, Object(d.k)(i)), s.a.createElement(c, {
						autofocus: !0,
						emojiPickerId: j,
						flair: l,
						flairTemplate: i,
						flairTemplateType: e.flairTemplateType,
						isFlairModOnly: i.modOnly,
						onChange: this.onFlairEdit,
						subredditId: r
					})) : null)
				}
			}
			t.a = k(w)
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return v
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/CategoryTagList/index.tsx"),
				l = n("./src/reddit/components/FlairList/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/helpers/trackers/postFlair.ts"),
				h = n("./src/reddit/i18n/utils.ts"),
				b = n("./src/reddit/models/Flair/index.ts"),
				g = n("./src/reddit/selectors/postFlair.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/components/FlairWrapper/index.m.less"),
				E = n.n(C);
			const y = Object(r.b)(() => Object(i.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(d.p)(e, {
							pageLayer: n
						})
					},
					isMeta: (e, t) => {
						let {
							post: n
						} = t;
						return Object(f.o)(e, {
							postId: n.id
						})
					},
					isPostFlairEnabled: (e, t) => Object(g.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, t) => {
						let {
							post: n
						} = t;
						return Object(f.z)(e, n)
					},
					subredditName: (e, t) => {
						let {
							post: n
						} = t;
						return Object(x.S)(e, {
							subredditId: n.belongsTo.id
						}).name
					}
				})),
				v = (e, t) => {
					const n = [];
					return t.isOriginalContent && n.push({
						text: "OC",
						type: b.f.Oc
					}), e && n.push({
						text: Object(h.c)("Poll"),
						type: b.f.Meta
					}), n.push(...t.flair), n
				};
			t.a = y(e => {
				let {
					className: t,
					disableFlair: n,
					flairPosition: o,
					isFlairFilter: r,
					isPostFlairEnabled: i,
					isMeta: d,
					nowrap: h,
					post: g,
					postCategories: f,
					sendEvent: x,
					showCategoryTag: C,
					subredditName: y,
					titleFlair: O
				} = e;
				const j = o === b.b.Left,
					S = O || v(d, g),
					T = [];
				let k = [];
				j ? S.map(e => {
					Object(p.p)(e.type) ? T.push(e) : k.push(e)
				}) : k = S;
				const w = h ? E.a.flairNoWrap : T.length > 0 || k.length > 0 || f && C ? E.a.flairWrapper : null,
					_ = e => {
						const t = {
							id: g.belongsTo.id,
							eventType: g.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(u.d)(u.a.SearchResults), x && x(Object(m.a)(g.id, t))
					},
					I = e => {
						x && x(Object(m.e)(e))
					},
					P = !(n || !S || !S.length),
					M = !!(C && f && f.length);
				return P || M ? s.a.createElement("div", {
					className: Object(a.a)(w, t)
				}, P && T && s.a.createElement(l.a, {
					className: E.a.flairList,
					isFlairFilter: r,
					key: "leftFlair",
					onClick: _,
					onMouseDown: I,
					flair: T,
					disabled: !i,
					subredditName: y
				}), P && s.a.createElement(l.a, {
					className: E.a.flairList,
					isFlairFilter: r,
					key: "rightFlair",
					onClick: _,
					onMouseDown: I,
					flair: k,
					disabled: !i,
					subredditName: y
				}), M && s.a.createElement(c.a, {
					inLightboxHeader: h,
					postId: g.id,
					postCategories: f
				})) : null
			})
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, n) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/FocusableContent/index.m.less"),
				c = n.n(a);
			t.a = i.a.wrapped(e => s.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/Governance/PollHelpText/index.m.less": function(e, t, n) {
			e.exports = {
				decisionThreholdAmount: "_2c1NZvJKkI6yBivC77FPD4",
				decisionThresholdExplanation: "_1GSbrVpv76_yXM2VcUM3zK",
				decisionThresholdTitle: "_3awYIQIHL4ztIb5nZDL46P",
				token: "_1tH1qzK9P2ZqDx3iQ6Apge"
			}
		},
		"./src/reddit/components/Governance/PostPollMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_2uZcUQgumllsYgn5TxSizG",
				proposalMetaDataTime: "_1u5ghYiKbGasP3ORCsbasV"
			}
		},
		"./src/reddit/components/Governance/ProposalTemplates/Generic/index.m.less": function(e, t, n) {
			e.exports = {
				hintText: "_1iTDa11Wj-8Ogp0kHlXhus",
				text: "_3Q86vH6B2mMSV8rHtZq4H9",
				topline: "_12_7Q434C71LJVJC_6GX71"
			}
		},
		"./src/reddit/components/Governance/ProposalTemplates/Spinoff/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_2clkG943bEk_52p-4FBzwJ"
			}
		},
		"./src/reddit/components/Governance/ProposalTemplates/TopModReplacement/index.m.less": function(e, t, n) {
			e.exports = {
				input: "AyMlaMkumG28uV6ZIz9ed"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/config.ts"),
				c = n("./src/reddit/selectors/gov.ts");
			const l = Object(i.c)({
				tokenSymbol: c.p
			});
			t.a = Object(r.b)(l)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return s.a.createElement("img", {
					className: e.className,
					src: "".concat(a.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(o.a)({
				ErrorComponent: r,
				getComponent: () => Object(s.a)(() => n.e("SubredditHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx");
			const l = c.a.div("IconWrapper", a.a),
				d = c.a.div("TextWrapper", a.a);
			t.a = e => {
				const {
					className: t,
					color: n,
					icon: o,
					subtitle: i,
					title: c
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, s.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), o ? s.a.createElement(l, null, o) : s.a.createElement(l, null), s.a.createElement(d, null, s.a.createElement("div", {
					className: a.a.title
				}, c), i && s.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/constants/componentSizes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				l = n.n(c);
			const d = Object(s.createContext)(null),
				u = Object(s.createContext)(null);
			class p extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return r.a.createElement(d.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, r.a.createElement(u.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const m = i.g + 10,
				h = r.a.memo(() => r.a.createElement(d.Consumer, null, e => e && r.a.createElement("div", {
					className: l.a.wrapper
				}, r.a.createElement(a.n, {
					className: l.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -m)
					}
				}, o.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), r.a.createElement("div", {
					className: l.a.rightBorder
				})))),
				b = r.a.memo(() => r.a.createElement(u.Consumer, null, e => r.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = n("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
					var n = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
					}
					return n
				},
				d = e => {
					const {
						children: t,
						className: n,
						to: o
					} = e, r = l(e, ["children", "className", "to"]), d = Object(a.b)(o);
					return s.a.createElement(i.a, c({
						className: n,
						to: d
					}, r), t)
				};

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			t.a = e => {
				const {
					isOverlay: t
				} = e, n = p(e, ["isOverlay"]), o = t ? d : r.a;
				return s.a.createElement(o, u({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/MakeGifToggle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1iRy5EPCLqSx8I0k9OT0wW",
				content: "NfjQg3srQXRhyOxLBwXrS",
				toggleSwitch: "_1fUmirx6e9tUDs04TQq6A1",
				mCompactSwitch: "_3Cx_YBpXo1s1iy7oA-4s6R",
				mDisabled: "_1M5N6DrrQQCQJs3JctDSu8",
				hoverTooltip: "_9qS60cx9uxyt1k4eZF_0w",
				tooltipContentClass: "_21DP8j-B-UkVKGJONbrTmX"
			}
		},
		"./src/reddit/components/MakeGifToggle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				c = n("./src/reddit/i18n/utils.ts"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/MakeGifToggle/index.m.less"),
				u = n.n(d);
			t.a = e => s.a.createElement(l.a, {
				className: Object(r.a)(u.a.container, e.disabled ? u.a.mDisabled : null, e.isCompact ? u.a.mCompactSwitch : null),
				onMouseDown: e => e.preventDefault(),
				onClick: t => {
					t.stopPropagation(), !e.disabled && e.onClick()
				}
			}, s.a.createElement(l.a, {
				className: u.a.content
			}, s.a.createElement(a.a, {
				className: u.a.toggleSwitch,
				on: e.on
			}), s.a.createElement("label", null, Object(c.c)("Make GIF"))), e.tooltip ? s.a.createElement(i.a, {
				className: u.a.hoverTooltip,
				tooltipContentClass: u.a.tooltipContentClass,
				text: e.tooltip
			}) : null)
		},
		"./src/reddit/components/MarkdownHelp/index.m.less": function(e, t, n) {
			e.exports = {
				Section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				Container: "C8uCM4XqGMA6xiIu7zfJl",
				container: "C8uCM4XqGMA6xiIu7zfJl",
				helpTable: "_3E7k-M4lVIYGW6Z7QoiPc9",
				Table: "_1t5z5ubOp-UUzTGLJr43d0",
				table: "_1t5z5ubOp-UUzTGLJr43d0",
				P: "_3MhMubukVABghyvZNN2X65",
				p: "_3MhMubukVABghyvZNN2X65"
			}
		},
		"./src/reddit/components/MarkdownHelp/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				a = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/layout/row/Inline/index.tsx"),
				b = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				f = n.n(g),
				x = n("./src/lib/lessComponent.tsx");
			const C = "Markdown_Help__Modal",
				E = x.a.wrapped(h.a, "Section", f.a),
				y = x.a.div("Container", f.a),
				v = x.a.table("Table", f.a),
				O = x.a.p("P", f.a);
			class j extends s.a.Component {
				render() {
					return s.a.createElement(a.a, null, s.a.createElement(i.a, {
						onClosePressed: this.props.closeModal,
						title: "Markdown Help"
					}), s.a.createElement(y, null, s.a.createElement(v, {
						className: f.a.helpTable
					}, s.a.createElement("tr", null, s.a.createElement(c.s, null, s.a.createElement(c.j, null, "Type this:")), s.a.createElement(c.s, null, s.a.createElement(c.j, null, "to get this:"))), s.a.createElement("tr", null, s.a.createElement(c.p, null, s.a.createElement(c.j, null, "*italics*")), s.a.createElement(c.p, null, s.a.createElement(c.f, null, "italics"))), s.a.createElement("tr", null, s.a.createElement(c.p, null, s.a.createElement(c.j, null, "**bold**")), s.a.createElement(c.p, null, s.a.createElement(c.b, null, "bold"))), s.a.createElement("tr", null, s.a.createElement(c.p, null, s.a.createElement(c.j, null, "[reddit!](https://reddit.com)")), s.a.createElement(c.p, null, s.a.createElement(c.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), s.a.createElement("tr", null, s.a.createElement(c.p, null, s.a.createElement(c.j, null, "* item 1"), s.a.createElement(c.j, null, "* item 2"), s.a.createElement(c.j, null, "* item 3")), s.a.createElement(c.p, null, s.a.createElement(c.v, null, s.a.createElement(c.g, null, "item 1"), s.a.createElement(c.g, null, "item 2"), s.a.createElement(c.g, null, "item 3")))), s.a.createElement("tr", null, s.a.createElement(c.p, null, s.a.createElement(c.j, null, "> quoted text")), s.a.createElement(c.p, null, s.a.createElement(c.c, null, "quoted text"))), s.a.createElement("tr", null, s.a.createElement(c.p, null, s.a.createElement(c.j, null, "~~strikethrough~~")), s.a.createElement(c.p, null, s.a.createElement(c.d, null, "strikethrough"))), s.a.createElement("tr", null, s.a.createElement(c.p, null, s.a.createElement(c.j, null, "super^script")), s.a.createElement(c.p, null, "super", s.a.createElement(c.m, null, "script"))), s.a.createElement("tr", null, s.a.createElement(c.p, null, s.a.createElement(c.j, null, ">!spoilers!<")), s.a.createElement(c.p, null, s.a.createElement(l.a, null, "spoilers")))), s.a.createElement(O, null, "Check the", s.a.createElement(c.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, " commenting wiki page "), "for more help")), s.a.createElement(E, null, s.a.createElement(b.a, null, s.a.createElement(m.f, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, "Close"))))
				}
			}
			const S = Object(r.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(C))
			}))(j);
			t.a = Object(u.a)(Object(d.b)(S))
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "r", (function() {
				return O
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "p", (function() {
				return T
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				i = n("./src/reddit/icons/svgs/Close/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				c = n.n(a);
			const l = o.a.wrapped(i.a, "CloseIcon", c.a),
				d = o.a.section("ModalBody", c.a),
				u = o.a.p("ModalText", c.a),
				p = o.a.div("ModalSmallText", c.a),
				m = o.a.div("ModalDescriptionText", c.a),
				h = o.a.div("ModalMetaText", c.a),
				b = o.a.label("ModalFormItem", c.a),
				g = o.a.wrapped(r.a, "ModalInput", c.a),
				f = o.a.label("ModalInputLabel", c.a),
				x = o.a.footer("ModalFooter", c.a),
				C = o.a.header("ModalHeader", c.a),
				E = o.a.div("ModalTitle", c.a),
				y = o.a.div("ModalMain", c.a),
				v = o.a.textarea("TextArea", c.a),
				O = o.a.wrapped(s.f, "WarningButton", c.a),
				j = o.a.wrapped(s.f, "PrimaryButton", c.a),
				S = o.a.wrapped(s.i, "CancelButton", c.a),
				T = o.a.wrapped(s.n, "RemoveButton", c.a)
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/app/strings/index.ts"),
				i = n("./src/lib/timeAgo/index.ts"),
				a = n("./src/lib/timeUntil/index.ts");

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return s.a.createElement("span", {
					className: e.className
				}, t ? Object(r.a)(e.language, "polls.closed", {
					timeAgo: Object(i.d)(e.language, e.poll.endsAt / 1e3)
				}) : Object(a.a)(e.language, new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/PollCreator/DefaultHintText/index.m.less": function(e, t, n) {
			e.exports = {
				helpTextItem: "wYdL1V7fxOtMwgvL8gt4a",
				helpTextList: "_23_RY8_TK404O0hdN7zpNn",
				helpTitle: "_3qXjOYMFBOO47HoteguQiz",
				helpTitleText: "_1NjVVC7kcVvJTLxxbNEi0S",
				infoIcon: "_2EKnk91_WzE7ao5vX6K5cC"
			}
		},
		"./src/reddit/components/PollCreator/Option/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RbFYzRB1jybmSRJ1VD_3f",
				grapple: "_3uUTBg1zNH9BKBOP3vVw6R",
				input: "CdINWDy27JLWIBXz488aN",
				trash: "_3AvADfaxGi-rnV-WFuWxTA"
			}
		},
		"./src/reddit/components/PollCreator/index.m.less": function(e, t, n) {
			e.exports = {
				flexRow: "_2G4E6Ja1LjN3lvEFdvCAMM",
				addButton: "_1MW4m9_ojHA4AO_I1MhQf3",
				container: "_3S9C536IVs6t9fXO2fE_Yq",
				controls: "_2RaOqu97VZrV7eSMAd--Fj",
				help: "_1kYOBe87AO-Ly-PkWe8yd8",
				options: "_26J8Tm1n-2QR6K2VOyZvJk",
				votingLengthCaret: "ekKR9rTD5h3p7yQ4SaLoa",
				votingLengthDropdown: "_1Sbl_DKDMJM71lJ_1GQgbB",
				votingLengthDropdownContainer: "_24W8XLxQSgwVVFneYfHsJR",
				votingLengthSelector: "_3TH3dFaVjJ2OSx-B_N3pDU",
				votingLengthSelector__disabled: "_2Wc5VFPksdxez0HQRlpdeE",
				votingLengthSelectorDisabled: "_2Wc5VFPksdxez0HQRlpdeE",
				votingLengthTitleText: "_1-ozAll8fJXOJ9tr9TwS1r",
				votingLengthDisplay: "gj1NXudk861pHzMz3jvCj"
			}
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/i18n/components.tsx"),
				a = n("./src/reddit/i18n/utils.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/app/strings/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = n("./src/reddit/constants/posts.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/isRemoved.ts"),
				x = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				C = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				E = n("./src/reddit/models/Post/index.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				j = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				S = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				T = n("./src/reddit/icons/fonts/Report/index.tsx"),
				k = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				w = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				I = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				P = n("./src/reddit/components/PostBadges/index.m.less"),
				M = n.n(P);

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => s.a.createElement("span", R({
					className: M.a.removalReason
				}, e), e.children),
				L = Object(l.e)("posts.archived"),
				D = Object(l.e)("modTools.commentsLocked"),
				F = Object(l.e)("modTools.moderatorOf"),
				B = Object(l.e)("modTools.stickiedPost"),
				A = Object(l.e)("modTools.pinnedPost"),
				K = (e, t, n) => {
					const o = "PostBadges--".concat(e, "--").concat(t);
					return n ? "".concat(o, "--").concat(n) : o
				},
				U = Object(g.t)({
					isProfilePostListing: g.I,
					isSubreddit: g.J,
					pageLayer: e => e
				}),
				H = Object(c.c)({
					isPinned: (e, t) => {
						let {
							post: n
						} = t;
						return Object(y.r)(e, {
							postId: n.id
						})
					},
					modModeEnabled: g.O
				}),
				W = Object(r.b)(H, (e, t) => ({
					onHideTooltip: () => e(Object(p.h)()),
					onOpenRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(p.f)({
						tooltipId: t
					}))
				}));
			t.a = U(W(e => {
				let {
					className: t,
					displayText: n,
					isSubreddit: r,
					inSubredditOrProfile: c,
					isCompactPinnedPost: l,
					isPinned: p,
					isProfilePostListing: g,
					language: y,
					modModeEnabled: P,
					onHideTooltip: U,
					onOpenRemovalReasonModal: H,
					onShowTooltip: W,
					post: V,
					tooltipType: z
				} = e;
				const q = {
						caretOnTop: !1
					},
					G = V.isRemoved && !V.modRemovalReason && !V.modNote && V.belongsTo.type === b.a.SUBREDDIT,
					J = K("Approve", V.id, z),
					Z = K("Archived", V.id, z),
					Q = K("Automod", V.id, z),
					X = K("Lock", V.id, z),
					Y = K("Mod", V.id, z),
					$ = K("Remove", V.id, z),
					ee = K("Report", V.id, z),
					te = K("Spam", V.id, z),
					ne = K("Sticky", V.id, z),
					oe = K("Pinned", V.id, z);
				return s.a.createElement("div", {
					className: t
				}, c && n && V.distinguishType === u.B.MODERATOR && s.a.createElement(o.Fragment, null, s.a.createElement(I.a, {
					className: M.a.modIcon,
					desc: F(y, {
						displayText: n
					}),
					id: Y,
					onMouseEnter: W(Y),
					onMouseLeave: U
				}), s.a.createElement(m.c, R({
					tooltipId: Y,
					text: F(y, {
						displayText: n
					})
				}, q))), V.isArchived && s.a.createElement(o.Fragment, null, s.a.createElement(O.a, {
					className: M.a.archivedIcon,
					desc: L(y),
					id: Z,
					onMouseEnter: W(Z),
					onMouseLeave: U
				}), s.a.createElement(m.c, R({
					tooltipId: Z,
					text: L(y)
				}, q))), V.isLocked && s.a.createElement(o.Fragment, null, s.a.createElement(j.a, {
					className: M.a.lockIcon,
					desc: D(y),
					id: X,
					onMouseEnter: W(X),
					onMouseLeave: U
				}), s.a.createElement(m.c, R({
					tooltipId: X,
					text: D(y)
				}, q))), r && Object(E.k)(V) && !l && s.a.createElement(o.Fragment, null, s.a.createElement(w.a, {
					className: M.a.stickyIcon,
					desc: B(y),
					id: ne,
					onMouseEnter: W(ne),
					onMouseLeave: U
				}), s.a.createElement(m.c, R({
					tooltipId: ne,
					text: B(y)
				}, q))), g && p && s.a.createElement(o.Fragment, null, s.a.createElement(w.a, {
					className: M.a.stickyIcon,
					desc: A(y),
					id: oe,
					onMouseEnter: W(oe),
					onMouseLeave: U
				}), s.a.createElement(m.c, R({
					tooltipId: oe,
					text: A(y)
				}, q))), (V.isApproved || V.approvedBy) && s.a.createElement(o.Fragment, null, s.a.createElement(v.a, {
					className: M.a.approveIcon,
					desc: Object(x.a)(y, V),
					id: J,
					onMouseEnter: W(J),
					onMouseLeave: U
				}), s.a.createElement(m.c, R({
					tooltipId: J,
					text: Object(x.a)(y, V)
				}, q))), Object(f.a)(V) && s.a.createElement(o.Fragment, null, s.a.createElement(S.a, {
					className: M.a.removeIcon,
					desc: Object(x.c)(y, V),
					id: $,
					onMouseEnter: W($),
					onMouseLeave: U
				}), G && s.a.createElement(h.a, {
					className: M.a.addRemovalReason,
					onClick: H,
					text: Object(a.c)("Add a removal reason")
				}), (V.modRemovalReason || V.modNote) && s.a.createElement(N, {
					onMouseEnter: W($),
					onMouseLeave: U
				}, s.a.createElement(i.c, null, "Removal reason")), s.a.createElement(m.c, R({
					tooltipId: $,
					text: Object(x.c)(y, V)
				}, q))), V.bannedBy && V.isSpam && s.a.createElement(o.Fragment, null, s.a.createElement(k.a, {
					className: M.a.spamIcon,
					desc: Object(x.e)(y, V),
					id: te,
					onMouseEnter: W(te),
					onMouseLeave: U
				}), s.a.createElement(m.c, R({
					tooltipId: te,
					text: Object(x.e)(y, V)
				}, q))), ("AutoModerator" === V.approvedBy || "AutoModerator" === V.bannedBy) && s.a.createElement(o.Fragment, null, s.a.createElement(_.a, {
					className: Object(d.a)(M.a.automoderator, !!V.bannedBy && M.a.isRemoved),
					desc: Object(x.b)(y),
					id: Q,
					onMouseEnter: W(Q),
					onMouseLeave: U
				}), s.a.createElement(m.c, R({
					tooltipId: Q,
					text: Object(x.b)(y)
				}, q))), Object(C.a)(V) && !P && s.a.createElement(o.Fragment, null, s.a.createElement(T.a, {
					className: M.a.reportIcon,
					desc: Object(x.d)(y, V.numReports),
					id: ee,
					onMouseEnter: W(ee),
					onMouseLeave: U
				}), s.a.createElement(m.c, R({
					tooltipId: ee,
					text: Object(x.d)(y, V.numReports)
				}, q))))
			}))
		},
		"./src/reddit/components/PostCreationForm/Button/index.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_18Bo5Wuo3tMV-RDB8-kh8Z",
				primaryButton: "_18Bo5Wuo3tMV-RDB8-kh8Z",
				SecondaryButton: "lUsjLveKkZWUAgDDyU1rD",
				secondaryButton: "lUsjLveKkZWUAgDDyU1rD"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/OCDisclaimer/index.m.less": function(e, t, n) {
			e.exports = {
				DontShowButton: "_1GOEXFnWfJy7WEF43f7RJk",
				dontShowButton: "_1GOEXFnWfJy7WEF43f7RJk",
				Component: "w3m9FyPsy2phDlWxoznhq",
				component: "w3m9FyPsy2phDlWxoznhq"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/PostModifierButton/index.m.less": function(e, t, n) {
			e.exports = {
				PostModifierButton: "_5x1WjCc4HQF6tqnODOql0",
				postModifierButton: "_5x1WjCc4HQF6tqnODOql0",
				TintOverlay: "stbc2Exoq0W4ZkGltglct",
				tintOverlay: "stbc2Exoq0W4ZkGltglct",
				isDisabled: "_3rEHSruwAvICnPAngYiIW1",
				HoverTooltip: "zprH8YpG-gVpFuEr-eQJw",
				hoverTooltip: "zprH8YpG-gVpFuEr-eQJw",
				mShiftTooltipToTheRight: "gceWvjO6tPHW1sEDhwkGK"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/index.m.less": function(e, t, n) {
			e.exports = {
				CalendarIcon: "_2EMgBR7XXJPBqzlciwA5q-",
				calendarIcon: "_2EMgBR7XXJPBqzlciwA5q-",
				ChatIcon: "Tb5Juq1WzFvhLo_xE7E0U",
				chatIcon: "Tb5Juq1WzFvhLo_xE7E0U",
				PencilIcon: "_3fLEcC4lV7R4T0nWSix8gz",
				pencilIcon: "_3fLEcC4lV7R4T0nWSix8gz",
				CheckmarkIcon: "_1UzslKYEQzOzo6YjHnE2g",
				checkmarkIcon: "_1UzslKYEQzOzo6YjHnE2g",
				PlusIcon: "_3KTRWtVakNSggrbPPnHkHf",
				plusIcon: "_3KTRWtVakNSggrbPPnHkHf",
				FlairTextWrapper: "_1pXTTYLLHHqfgwyMuCqT6T",
				flairTextWrapper: "_1pXTTYLLHHqfgwyMuCqT6T",
				FlairComponent: "_2YM79GnDqrRjQQcFtEokkY",
				flairComponent: "_2YM79GnDqrRjQQcFtEokkY",
				ModifierRow: "_2_rA2mCdhHc1Lr7Ff1ygvH",
				modifierRow: "_2_rA2mCdhHc1Lr7Ff1ygvH",
				AddFlair: "_1LD2Xsr3fioSkWZ13vMORC",
				addFlair: "_1LD2Xsr3fioSkWZ13vMORC",
				TintOverlay: "_2vWD8kW1_iU4dc3CgY9_gH",
				tintOverlay: "_2vWD8kW1_iU4dc3CgY9_gH",
				FlairIcon: "_2U5dhGN1LkTGmvfDSXp7Pn",
				flairIcon: "_2U5dhGN1LkTGmvfDSXp7Pn",
				StyledCaretIcon: "MZjVSHyz_JYuVJV8JeezH",
				styledCaretIcon: "MZjVSHyz_JYuVJV8JeezH",
				mHasError: "_12W0J-fwDQQ6_tQ9fdpzqG",
				errorMessages: "_29DzChs2ytJ2zOxDSU_YZZ"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/ToggleDestCollectionButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1FASP6jHc95Gr8_JE5NtRM",
				disabled: "GOi-au9bPIVJ6WnD6RD6y",
				DivButton: "_1KdMCiMK7eff1VYAo9JUDh",
				divButton: "_1KdMCiMK7eff1VYAo9JUDh"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/index.m.less": function(e, t, n) {
			e.exports = {
				buttonLayoutStyles: "_1BOItL6vmZFDKOuaOKKJHf",
				ButtonLayout: "_1T0P_YQg7fOYLCRoKl_xxO",
				buttonLayout: "_1T0P_YQg7fOYLCRoKl_xxO",
				SaveDraftButtonLayout: "_2qdAvPbBMsK4TpwNnVe-pj",
				saveDraftButtonLayout: "_2qdAvPbBMsK4TpwNnVe-pj",
				Container: "_1d1--0DMy_jAIxCCoYMo1k",
				container: "_1d1--0DMy_jAIxCCoYMo1k",
				ButtonsAndErrors: "_2DHDj0dbS1TkKD3fMqSbHy",
				buttonsAndErrors: "_2DHDj0dbS1TkKD3fMqSbHy",
				ButtonRow: "_2RmKGBRP9puAMQITZ7HMaB",
				buttonRow: "_2RmKGBRP9puAMQITZ7HMaB",
				autoWidth: "_2lg9-dlsll34oz__8Kmxk7",
				errorMessages: "_2kLLxn1y9vaTeT0OAc-Ikc",
				PostLoadingIcon: "_2QZRXSFrX2qcSjZIV5mRzK",
				postLoadingIcon: "_2QZRXSFrX2qcSjZIV5mRzK",
				DraftLoadingIcon: "_4S5sqoV61IY7tpZqBwoKQ",
				draftLoadingIcon: "_4S5sqoV61IY7tpZqBwoKQ",
				Token: "_1TIes8fbwL-i8e6hUlw5jF",
				token: "_1TIes8fbwL-i8e6hUlw5jF",
				postModifiers: "_2pAQpGYEPAVsPmV5uVmGGU",
				clockIcon: "_1z-5BtMZ_1-gl9JLssX5SJ",
				postScheduleButton: "_2cMg4VsPGSoc_OwPOPRAie",
				active: "_2ByznvXusx6_MAg3UUI_qu",
				postScheduleButtonActive: "_3FUVGBj8TpTTCNKPpPbMZP",
				postScheduleIcon: "_1ND9PCHVFG_UrSPdlJqv5W",
				removeRightBorderRadius: "_1_Xn_Na9NfUSd_yoc1w2Eb"
			}
		},
		"./src/reddit/components/PostCreationForm/CreationControls/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditPicker: "k3D4EVssJ1w-8irx6jW6k",
				subredditPicker: "k3D4EVssJ1w-8irx6jW6k",
				ControlRow: "i0kJNtq5ma1uzbOX9_mM4",
				controlRow: "i0kJNtq5ma1uzbOX9_mM4"
			}
		},
		"./src/reddit/components/PostCreationForm/DivButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "ypAk-GyDXsczk_xkC7Eq_",
				disabled: "_3hBIa9WhGl-wxARDDgBvSE"
			}
		},
		"./src/reddit/components/PostCreationForm/DivButton/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/components/PostCreationForm/DivButton/index.m.less"),
				c = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const u = (e, t, n) => {
					!t && n && n(e)
				},
				p = (e, t, n) => {
					t || (n && n(e), e.defaultPrevented || e.which !== i.a.Enter && e.which !== i.a.Space || e.currentTarget.click())
				};
			t.a = e => {
				var {
					className: t,
					disabled: n,
					onClick: o,
					onKeyPress: i,
					setRef: a,
					tabIndex: m
				} = e, h = d(e, ["className", "disabled", "onClick", "onKeyPress", "setRef", "tabIndex"]);
				return s.a.createElement("div", l({
					"aria-disabled": !!n,
					className: Object(r.a)(t, c.a.button, n ? c.a.disabled : null),
					onClick: e => u(e, n, o),
					onKeyPress: e => p(e, n, i),
					role: "button",
					ref: a,
					tabIndex: m || 0
				}, h))
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Icon.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2zmE2mxeSGThXfrD20TENk",
				component: "_2zmE2mxeSGThXfrD20TENk"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Placeholder.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3s9TqP-_YHesViWXcd4cMj",
				container: "_3s9TqP-_YHesViWXcd4cMj",
				LeftBlock: "_3ZfLmI01IKam1zqUNiCCY6",
				leftBlock: "_3ZfLmI01IKam1zqUNiCCY6",
				Content: "_3GIbVaHf4QKOhABI3DhSMo",
				content: "_3GIbVaHf4QKOhABI3DhSMo",
				MediaIcon: "_31VuujawtoKX7A_ykq786h",
				mediaIcon: "_31VuujawtoKX7A_ykq786h",
				Title: "_24WZEeSSq6ekrxl4oZMhB3",
				title: "_24WZEeSSq6ekrxl4oZMhB3",
				Secondary: "_1a6BjjqFgWMfDd1GftKY3a",
				secondary: "_1a6BjjqFgWMfDd1GftKY3a"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2mGd4F9ksQ8wRlvFjnL0wz",
				container: "_2mGd4F9ksQ8wRlvFjnL0wz",
				LeftBlock: "_32kTNEqb0vEW5J0BmJdwnn",
				leftBlock: "_32kTNEqb0vEW5J0BmJdwnn",
				Content: "wrG0DeMFlU8RmFoT1gUDM",
				content: "wrG0DeMFlU8RmFoT1gUDM",
				RightBlock: "AnY3sJDM9Z2aUfyXs2Hfl",
				rightBlock: "AnY3sJDM9Z2aUfyXs2Hfl",
				PostTitle: "_25WWHqf4udQb0G9Wa_ar6s",
				postTitle: "_25WWHqf4udQb0G9Wa_ar6s",
				EditingPostTitle: "_3kH-PKnEjv45UIFAwY_XwK",
				editingPostTitle: "_3kH-PKnEjv45UIFAwY_XwK",
				MetaLine: "_1P65-c5DlnBqJL1jOa9TFr",
				metaLine: "_1P65-c5DlnBqJL1jOa9TFr",
				SubredditName: "_2cQKCpCLQTg1gPnnhEqZ6z",
				subredditName: "_2cQKCpCLQTg1gPnnhEqZ6z",
				DraftSavedTime: "Aegaj4-SLZNjFEolptURF",
				draftSavedTime: "Aegaj4-SLZNjFEolptURF",
				TrashIcon: "lWsFaDYxW8Sc4sqVTxVGv",
				trashIcon: "lWsFaDYxW8Sc4sqVTxVGv",
				InteractiveDiv: "_1nhwaUh9TlWeM5H9a_E18l",
				interactiveDiv: "_1nhwaUh9TlWeM5H9a_E18l",
				ConfirmDelete: "_3lIfF-MBpq24PJLxdGfIWQ",
				confirmDelete: "_3lIfF-MBpq24PJLxdGfIWQ"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_29SuZj4Q_M_-p6FwlKJw2V",
				wrapper: "_29SuZj4Q_M_-p6FwlKJw2V",
				TitleRow: "_1t9vurufwtvAZm6k-7T1N0",
				titleRow: "_1t9vurufwtvAZm6k-7T1N0",
				DraftsNumber: "VA7GC_5VP6Yx4VSLaCW7T",
				draftsNumber: "VA7GC_5VP6Yx4VSLaCW7T",
				DetailsContainer: "_2ffvzlYi6yd1I-j5ndDKFm",
				detailsContainer: "_2ffvzlYi6yd1I-j5ndDKFm",
				ButtonRow: "_3JS6XDYnB0zNhQRfV4rLl0",
				buttonRow: "_3JS6XDYnB0zNhQRfV4rLl0",
				CancelButton: "_2AHvxdRmdK6Dve6_MNs6YW",
				cancelButton: "_2AHvxdRmdK6Dve6_MNs6YW",
				CloseWrapper: "_2put2qtgUIjmVIlQlZxeTb",
				closeWrapper: "_2put2qtgUIjmVIlQlZxeTb",
				Close: "_1Ojj3n0SwnEevN0xKAhtFi",
				close: "_1Ojj3n0SwnEevN0xKAhtFi",
				Empty: "_3j6Qa8OS7J6clTSNxqrADq",
				empty: "_3j6Qa8OS7J6clTSNxqrADq",
				EmptyImage: "_13SmMRVwMLfOrhzEqQQXrJ",
				emptyImage: "_13SmMRVwMLfOrhzEqQQXrJ",
				EmptyText: "_2OF81CBhfbV9gjOU-5n9Dr",
				emptyText: "_2OF81CBhfbV9gjOU-5n9Dr",
				DraftListModal: "_2bMp7e8oHvukp1hKtlg1r-",
				draftListModal: "_2bMp7e8oHvukp1hKtlg1r-"
			}
		},
		"./src/reddit/components/PostCreationForm/EduTooltips/BaseEduTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1LVDV1pks4den73WWY46GI",
				contentContainer: "_3v3OHx0_DIBm8WcTKrQ_Vj",
				description: "_1ZyYR40qdR1KVaYW3JJnFF",
				gotIt: "_31UHkJmzR05A-oHijI9dsj",
				hero: "_3KJU9tTmfe-f0PGdg1hJ6O",
				icon: "_1TqYQFIF_2oaFDavvx7TEE",
				iconExplanation: "_2gaQgwvoc2dROc2Uramfat",
				iconsExplanations: "_1IKgmmXb6LA2blrkyfqnxx",
				title: "_1ZeryymPzBgAm7zK9oPs3l",
				Container: "_1LVDV1pks4den73WWY46GI",
				OuterContainer: "_3cH-rE_yhLIp3GscF-WShj",
				outerContainer: "_3cH-rE_yhLIp3GscF-WShj"
			}
		},
		"./src/reddit/components/PostCreationForm/EduTooltips/CollectionButtonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3zSOhojke1hMymIth30Ue"
			}
		},
		"./src/reddit/components/PostCreationForm/EduTooltips/EventButtonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_RsSSHM-K9MvWN3u6Jxnf"
			}
		},
		"./src/reddit/components/PostCreationForm/LinkEditor/index.m.less": function(e, t, n) {
			e.exports = {
				URLInput: "_3zY6b4QJpSz1067ahq73_K",
				urlInput: "_3zY6b4QJpSz1067ahq73_K",
				mHasError: "_1WipnslOO1oVfOEMxsrYU3"
			}
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "dyBWJSV5slC_6_q-avEAz",
				loadingIcon: "dyBWJSV5slC_6_q-avEAz",
				ModeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				modeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				ModeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				modeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				SwitchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				switchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				MarkdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				markdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				Toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa",
				toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa"
			}
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				l = n("./src/reddit/components/FocusableContent/index.tsx"),
				d = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				p = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				m = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = n("./src/reddit/models/PostCreationForm/index.ts"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				f = n("./src/reddit/selectors/editorContent.ts"),
				x = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				C = n.n(x),
				E = n("./src/lib/lessComponent.tsx");
			const y = E.a.wrapped(h.a, "LoadingIcon", C.a),
				v = E.a.span("ModeDescription", C.a),
				O = E.a.div("ModeWrapper", C.a),
				j = E.a.button("SwitchModeButton", C.a),
				S = E.a.wrapped(c.a, "MarkdownHelpButton", C.a),
				T = E.a.div("Toolbar", C.a),
				k = Object(i.c)({
					activeModalId: g.a,
					isConverting: e => Object(f.a)(e)
				}),
				w = Object(r.b)(k, (e, t) => ({
					onChange: n => {
						e(Object(a.c)(n)), t.onChange && t.onChange(n)
					},
					helpModalToggled: () => e(Object(a.y)(d.b)),
					switchToRTEModalToggled: () => e(Object(a.y)(u.c))
				}));
			class _ extends s.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange(t)
					}, this.onBlur = () => {
						this.setState({
							isFocused: !1
						}), this.props.onBlur && this.props.onBlur()
					}, this.onFocus = () => {
						const {
							onFocus: e
						} = this.props;
						e && e(), this.setState({
							isFocused: !0
						})
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === m.a.Enter && this.props.onSubmit()
					}, this.handleSwitchModeClick = () => {
						this.props.value ? this.props.switchToRTEModalToggled() : this.props.onSwitchEditorMode(b.h.RICH_TEXT, this.props.value)
					}, this.handleSwitchToRTEConfirm = () => {
						this.props.switchToRTEModalToggled(), this.props.onSwitchEditorMode(b.h.RICH_TEXT, this.props.value)
					}, this.setTextAreaRef = e => this.textAreaRef = e, this.state = {
						isFocused: !1
					}
				}
				componentDidMount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(this)
				}
				componentWillUnmount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(null)
				}
				focus() {
					this.textAreaRef && this.textAreaRef.focus()
				}
				render() {
					const {
						className: e,
						isConverting: t,
						placeholderText: n,
						focusableContentMarkdownClassName: o,
						value: r
					} = this.props, {
						isFocused: i
					} = this.state;
					return s.a.createElement("div", {
						className: e
					}, s.a.createElement(l.a, {
						className: o,
						isFocused: i
					}, s.a.createElement(T, null, s.a.createElement(O, null, s.a.createElement(v, null, "Markdown"), s.a.createElement(S, {
						onClick: this.props.helpModalToggled
					})), s.a.createElement(j, {
						onClick: this.handleSwitchModeClick
					}, t && s.a.createElement(y, {
						sizePx: 12
					}), "Switch to Fancy Pants Editor")), s.a.createElement(p.a, {
						disabled: !!this.props.disabled,
						initialHeight: this.props.initialHeight,
						innerRef: this.setTextAreaRef,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: n,
						value: r
					})), this.props.activeModalId === d.b && s.a.createElement(d.a, {
						language: this.props.language
					}), this.props.activeModalId === u.c && s.a.createElement(u.d, {
						modalId: u.c,
						onCancel: this.props.switchToRTEModalToggled,
						onConfirm: this.handleSwitchToRTEConfirm
					}))
				}
			}
			t.a = w(_)
		},
		"./src/reddit/components/PostCreationForm/MediaInput/DropArea/index.m.less": function(e, t, n) {
			e.exports = {
				HiddenInput: "sU2P34us34ODfjtvAFHEh",
				hiddenInput: "sU2P34us34ODfjtvAFHEh",
				UploadButton: "_3O09Fh0CTb1KXH9g--pyTm",
				uploadButton: "_3O09Fh0CTb1KXH9g--pyTm",
				HamsterSmall: "_2O_N8Ef-BG5Cfd4rpYn2gC",
				hamsterSmall: "_2O_N8Ef-BG5Cfd4rpYn2gC",
				HamsterLarge: "wV8IXIxvKm8PPZrR4ID63",
				hamsterLarge: "wV8IXIxvKm8PPZrR4ID63",
				Container: "_1Ts5GUNze2r03Hs4YNM7R7",
				container: "_1Ts5GUNze2r03Hs4YNM7R7",
				DropArea: "_1U5lLS9mQzBY-ItvbtGGLz",
				dropArea: "_1U5lLS9mQzBY-ItvbtGGLz",
				DropAreaActive: "_3dk8Anard_IzanCLoEOxwY",
				dropAreaActive: "_3dk8Anard_IzanCLoEOxwY",
				DropAreaOver: "_2u00X-QMmF0nCuc0JgGiPG",
				dropAreaOver: "_2u00X-QMmF0nCuc0JgGiPG",
				Paragraph: "_23Ktfv_B7IB6GfAwZ1n5KM",
				paragraph: "_23Ktfv_B7IB6GfAwZ1n5KM",
				ErrorMsg: "_1g07w9noInEjzrHqFqXu7p",
				errorMsg: "_1g07w9noInEjzrHqFqXu7p",
				Box: "_2bMJxWQqwzcVG4QCyh3UhG",
				box: "_2bMJxWQqwzcVG4QCyh3UhG"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/Preview/index.m.less": function(e, t, n) {
			e.exports = {
				Img: "_2CZpGuT-0gMB2CW-1Z4Rzr",
				img: "_2CZpGuT-0gMB2CW-1Z4Rzr",
				BlurImg: "_3lXopXY4SQ5xn1DGFU-6mv",
				blurImg: "_3lXopXY4SQ5xn1DGFU-6mv",
				ImagePreview: "_1x86R_C1SXWhk5Ta6ZwgCE",
				imagePreview: "_1x86R_C1SXWhk5Ta6ZwgCE",
				VideoPreview: "_1qFo28RpDjnwvvZFYuoYw1",
				videoPreview: "_1qFo28RpDjnwvvZFYuoYw1",
				Component: "_32O_ZBzCA0KWydc-ydD4Ut",
				component: "_32O_ZBzCA0KWydc-ydD4Ut"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/UploadStatusBar/index.m.less": function(e, t, n) {
			e.exports = {
				ControlRow: "_2UeBgPJSAh_VteJrmt29jr",
				controlRow: "_2UeBgPJSAh_VteJrmt29jr",
				Button: "mU3hHnDkWt1Fu4t0MzJ3D",
				button: "mU3hHnDkWt1Fu4t0MzJ3D",
				Status: "_2tgT4LseX3Xg9TNczoQt_8",
				status: "_2tgT4LseX3Xg9TNczoQt_8",
				Component: "_1ou_efVZQLBrztRrswvRdK",
				component: "_1ou_efVZQLBrztRrswvRdK"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_2WJ7xvGE_xrehqTKCrcVpN",
				wrapper: "_2WJ7xvGE_xrehqTKCrcVpN",
				UploadStatusBar: "_1cAEFWtInMytYP6NpKBxK7",
				uploadStatusBar: "_1cAEFWtInMytYP6NpKBxK7",
				Controls: "_2Hg3aAL1qjiKtlSICSWx59",
				controls: "_2Hg3aAL1qjiKtlSICSWx59",
				Trash: "_18Z2AbfCvCglpgZoyExSaS",
				trash: "_18Z2AbfCvCglpgZoyExSaS",
				ThumbnailSelect: "_3Beo1Ag8mmirgP8ObHTty9",
				thumbnailSelect: "_3Beo1Ag8mmirgP8ObHTty9"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/RemovePrompt/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "RbI4r-xLIZTGjyNNqMkc2",
				wrapper: "RbI4r-xLIZTGjyNNqMkc2",
				TitleRow: "_3KkK2UFvbWMkRb887z28Ay",
				titleRow: "_3KkK2UFvbWMkRb887z28Ay",
				DetailsContainer: "_3x1u7rU-TVemMtzZVifQk",
				detailsContainer: "_3x1u7rU-TVemMtzZVifQk",
				ButtonRow: "_1rR3d9OXZt1cL70vCFunZP",
				buttonRow: "_1rR3d9OXZt1cL70vCFunZP",
				CancelButton: "_2JpoeseNULOIs1m0HM_FkJ",
				cancelButton: "_2JpoeseNULOIs1m0HM_FkJ",
				ConfirmButton: "_1-56PBUj1A-mgJh4Uhz5Jd",
				confirmButton: "_1-56PBUj1A-mgJh4Uhz5Jd"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1UbcPNs4A8n5PIWX0H5sGt",
				container: "_1UbcPNs4A8n5PIWX0H5sGt"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/Hint/index.m.less": function(e, t, n) {
			e.exports = {
				Info: "_2kALbPZ2PwY7w-w3Mtrxpl",
				info: "_2kALbPZ2PwY7w-w3Mtrxpl",
				TooltipContent: "c_vthvCq93OKrS5BGZYdr",
				tooltipContent: "c_vthvCq93OKrS5BGZYdr",
				Hint: "_2yxSY9022XfAJtQVxxa1lL",
				hint: "_2yxSY9022XfAJtQVxxa1lL",
				HoverTooltip: "_3M5yvX2tFyuTet4AEPmVDL",
				hoverTooltip: "_3M5yvX2tFyuTet4AEPmVDL",
				tooltipContentClass: "_2AY8LM9XpfuTjCMB4PF1mj"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxInput: "rLLDF6zuY7gDPdOpDtryW",
				checkboxInput: "rLLDF6zuY7gDPdOpDtryW",
				ConnectAccountLink: "_2XixtsvkuzAkwuKe93t7Bd",
				connectAccountLink: "_2XixtsvkuzAkwuKe93t7Bd",
				Container: "_1WZBFo38dOAZ_-qyyA6sNh",
				container: "_1WZBFo38dOAZ_-qyyA6sNh",
				ContainerLeft: "ncWlnJtypP1_Mwohv06zd",
				containerLeft: "ncWlnJtypP1_Mwohv06zd",
				ContainerRight: "_1rdhEwGT1578MFV4zdgyXX",
				containerRight: "_1rdhEwGT1578MFV4zdgyXX",
				CheckboxText: "_1sBmqB8geWKIW5Nt8svFgc",
				checkboxText: "_1sBmqB8geWKIW5Nt8svFgc",
				Option: "_367d1mrPAvSzXPXQZfPXq5",
				option: "_367d1mrPAvSzXPXQZfPXq5",
				TextButton: "_5SJ8wEtj0ehde_UTuEUJL",
				textButton: "_5SJ8wEtj0ehde_UTuEUJL",
				TextBox: "_1TBGkOAQIuFnbqFv3ePDxT",
				textBox: "_1TBGkOAQIuFnbqFv3ePDxT",
				Wrapper: "_2CXYv7vwpCTLV6wKUwqkBz",
				wrapper: "_2CXYv7vwpCTLV6wKUwqkBz"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/ScheduledTimeInfo/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3iy2yiZt_m40oq7tdW_klw",
				container: "_3iy2yiZt_m40oq7tdW_klw",
				PencilIcon: "CtqHgCkmjjUmdmFk_2rZi",
				pencilIcon: "CtqHgCkmjjUmdmFk_2rZi",
				replayIcon: "_2ks2fE4UUmcEWL1vQnR7wp"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_22Te0a5VxZnLITkTavQh95",
				container: "_22Te0a5VxZnLITkTavQh95"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationHeader/index.m.less": function(e, t, n) {
			e.exports = {
				CreateLabel: "_3M6BmdyQcCEQZu-MylN14",
				createLabel: "_3M6BmdyQcCEQZu-MylN14",
				CountIndicator: "_3-lCASba1yl0jeRpeQ5jwm",
				countIndicator: "_3-lCASba1yl0jeRpeQ5jwm",
				LinkButton: "_3KQDVc4kBIwA5u7S9n99NQ",
				linkButton: "_3KQDVc4kBIwA5u7S9n99NQ",
				CreatePostHeader: "_1HWpiNu6dkOnZixxwDYTVJ",
				createPostHeader: "_1HWpiNu6dkOnZixxwDYTVJ"
			}
		},
		"./src/reddit/components/PostCreationForm/PostEditor/GovTypeSelector/index.m.less": function(e, t, n) {
			e.exports = {
				flexRow: "wIleinjtpdijasCWI_jCU",
				container: "_1kR_hX_PP5udhk-mtPuavx",
				currentSelection: "_1ZxmKr4SrkV__KWvI2gxKt",
				dropdownIcon: "oK9t9SNnOOCu-BraimNJE",
				newLabel: "_1pi_9nWsspppnkpr0Km1Hl",
				pollTypeIcon: "_1ZEeQaLhgbqgxX5zvvM2OO",
				text: "_3BIAW_hHKHgVyTnhczBT4A"
			}
		},
		"./src/reddit/components/PostCreationForm/PostEditor/index.m.less": function(e, t, n) {
			e.exports = {
				focusableContent: "Mb0x12Cu8JKRJRJCcf9_K",
				mPollBorder: "_3tqYz5xeUZo9em1LrxMZOB",
				mHasError: "_24RennTZzi_jyZ_kdBt9U2",
				govToggle: "_2VmXXwMxyQk230gkKvJTzF",
				pollCreator: "_3GqK73QyFc10CoXE2bReko"
			}
		},
		"./src/reddit/components/PostCreationForm/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3zkbHfhLbXp21FwGj_kNZV",
				inputWrapper: "_2wyvfFW3oNcCs5GVkmcJ8z",
				PostTitleInput: "_1ec_Oj5SWdypd8L-VELKg-",
				postTitleInput: "_1ec_Oj5SWdypd8L-VELKg-",
				mHasError: "_1dItJbdjTchVLwC0krCsr3",
				charsCounter: "_10vnCUi_uRLhIdKnPglWAw"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = n.n(u),
				m = n("./src/lib/lessComponent.tsx");
			const h = m.a.wrapped(c.f, "PrimaryButton", p.a),
				b = m.a.wrapped(i.m, "ModalText", p.a);
			class g extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === a.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					return s.a.createElement(i.c, null, s.a.createElement(i.g, null, s.a.createElement(d.a, null, s.a.createElement(i.n, null, this.props.titleText), s.a.createElement(l.a, {
						onClick: this.props.onClose
					}, s.a.createElement(i.b, null)))), s.a.createElement(i.j, null, s.a.createElement(b, null, this.props.bodyText)), s.a.createElement(i.e, null, s.a.createElement(i.a, {
						onClick: this.props.onSecondaryAction
					}, this.props.secondaryButtonText), s.a.createElement(h, {
						onClick: this.props.onPrimaryAction
					}, this.props.primaryButtonText)))
				}
			}
			t.a = Object(r.a)(g)
		},
		"./src/reddit/components/PostCreationForm/Prompt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/app/strings/index.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = "POST_CREATION__LOAD_DRAFT_MODAL_ID",
				p = "POST_CREATION__MAX_DRAFTS_MODAL_ID",
				m = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID",
				h = (e, t) => "postCreation.prompt.".concat(e, ".").concat(t),
				b = {
					body: h("default", "body"),
					cancel: "postCreation.cancel",
					confirm: h("default", "confirm"),
					title: h("default", "title")
				},
				g = Object.assign({}, b, {
					body: h("loadDraft", "body"),
					confirm: h("loadDraft", "confirm"),
					title: h("loadDraft", "title")
				}),
				f = Object.assign({}, b, {
					body: h("maxDrafts", "body"),
					confirm: h("maxDrafts", "confirm"),
					title: h("maxDrafts", "title")
				}),
				x = Object.assign({}, b, {
					body: h("switchToRTE", "body"),
					confirm: h("switchToRTE", "confirm"),
					title: h("switchToRTE", "title")
				}),
				C = {
					[u]: g,
					[p]: f,
					[m]: x
				},
				E = Object(i.c)({
					language: c.S
				}),
				y = Object(r.b)(E),
				v = (e, t) => ({
					bodyText: Object(a.a)(e, t.body),
					secondaryButtonText: Object(a.a)(e, t.cancel),
					primaryButtonText: Object(a.a)(e, t.confirm),
					titleText: Object(a.a)(e, t.title)
				});
			class O extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onCancel = () => {
						this.props.onCancel(this.props.modalId)
					}, this.onConfirm = () => {
						this.props.onConfirm(this.props.modalId)
					}
				}
				render() {
					const {
						language: e,
						modalId: t
					} = this.props;
					return s.a.createElement(l.a, d({}, v(e, C[t]), {
						onClose: this.onCancel,
						onPrimaryAction: this.onConfirm,
						onSecondaryAction: this.onCancel
					}))
				}
			}
			t.d = y(O)
		},
		"./src/reddit/components/PostCreationForm/RecaptchaOverlay/index.m.less": function(e, t, n) {
			e.exports = {
				OverlayWrapper: "_36HnnNoO8oBJDJnOgDiENG",
				overlayWrapper: "_36HnnNoO8oBJDJnOgDiENG",
				OverlayContent: "_3Ye_87oAzGPJr-7DymIhl0",
				overlayContent: "_3Ye_87oAzGPJr-7DymIhl0",
				ExplanationText: "_17qYQd3F9TbaKxu_Q0ssNq",
				explanationText: "_17qYQd3F9TbaKxu_Q0ssNq"
			}
		},
		"./src/reddit/components/PostCreationForm/SafeHarborText/index.m.less": function(e, t, n) {
			e.exports = {
				TextContainer: "_3sXblbCnnsbtHR0izSxX-Q",
				textContainer: "_3sXblbCnnsbtHR0izSxX-Q"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3A53iTDZ6H1L--Ky3qNCTO",
				container: "_3A53iTDZ6H1L--Ky3qNCTO",
				Select: "_2ryUqzbCnNhx8nbFXg9-c0",
				select: "_2ryUqzbCnNhx8nbFXg9-c0",
				Delimiter: "_1X2oFpzvpth9SVe2-xCR9D",
				delimiter: "_1X2oFpzvpth9SVe2-xCR9D"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less": function(e, t, n) {
			e.exports = {
				Input: "_1Css-vhkiry0RZJBBPrnRI",
				input: "_1Css-vhkiry0RZJBBPrnRI"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/lodash/range.js")),
				c = n.n(a),
				l = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less"),
				d = n.n(l),
				u = n("./src/lib/lessComponent.tsx");
			const p = u.a.div("Container", d.a),
				m = u.a.select("Select", d.a),
				h = u.a.span("Delimiter", d.a),
				b = 2018,
				g = e => {
					const t = new Date;
					return new Date(t.getFullYear(), e).toLocaleDateString([], {
						month: "short"
					})
				},
				f = e => {
					const [t, n, o] = e.split("-").map(Number);
					return {
						year: t,
						month: n - 1,
						day: o
					}
				};
			class x extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = Object.assign({}, f(this.props.value), e),
							{
								year: n,
								month: o,
								day: s
							} = t,
							r = new Date(Date.UTC(n, o, s)).toISOString().slice(0, 10);
						this.props.onChange(r)
					}, this.onChangeYear = e => {
						const t = +e.target.value;
						this.onChange({
							year: t
						})
					}, this.onChangeMonth = e => {
						const t = +e.target.value;
						this.onChange({
							month: t
						})
					}, this.onChangeDay = e => {
						const t = +e.target.value;
						this.onChange({
							day: t
						})
					}
				}
				render() {
					const {
						year: e,
						month: t,
						day: n
					} = f(this.props.value);
					return i.a.createElement(p, {
						className: this.props.className
					}, i.a.createElement(m, {
						onChange: this.onChangeMonth,
						value: t
					}, c()(12).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, g(e)))), i.a.createElement(h, null, "/"), i.a.createElement(m, {
						onChange: this.onChangeDay,
						value: n
					}, c()(1, 32).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), i.a.createElement(h, null, "/"), i.a.createElement(m, {
						onChange: this.onChangeYear,
						value: e
					}, c()(b, b + 10).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var C = x,
				E = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				y = n.n(E);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				j = u.a.input("Input", y.a);
			t.a = e => O() ? i.a.createElement(j, v({
				type: "date"
			}, e, {
				onChange: t => e.onChange(t.target.value)
			})) : i.a.createElement(C, e)
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "Q-u1MdpyF-DbsLmmseQmg",
				container: "Q-u1MdpyF-DbsLmmseQmg",
				Input: "_2UYlo-ZbVNGY329O9jwCzC",
				input: "_2UYlo-ZbVNGY329O9jwCzC",
				Delimiter: "_2a_r5Jp8FH3k8flNGKLy5f",
				delimiter: "_2a_r5Jp8FH3k8flNGKLy5f"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less": function(e, t, n) {
			e.exports = {
				TimeInput: "gRgwdQKTQf9yT3db3ACAy",
				timeInput: "gRgwdQKTQf9yT3db3ACAy"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/lodash/clamp.js")),
				c = n.n(a),
				l = n("./src/reddit/components/FocusableContent/index.tsx"),
				d = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less"),
				u = n.n(d),
				p = n("./src/lib/lessComponent.tsx");
			const m = p.a.wrapped(l.a, "Container", u.a),
				h = p.a.input("Input", u.a),
				b = p.a.span("Delimiter", u.a),
				g = e => ("0" + e).slice(-2),
				f = (e, t) => {
					const n = +e.slice(-2);
					if (Number.isInteger(n)) return n > t ? 0 : n
				};
			class x extends i.a.PureComponent {
				constructor(e) {
					super(e), this.callOnChange = () => {
						let e = c()(+this.state.hour, 0, 24);
						const t = c()(+this.state.minute, 0, 59);
						24 === e && t > 0 && (e = 0), this.setState({
							hour: e,
							minute: t
						});
						const n = "".concat(g(e), ":").concat(g(t));
						this.props.onChange(n)
					}, this.onChangeHour = e => {
						const t = f(e.target.value, 24);
						void 0 !== t && this.setState({
							hour: t
						}, this.callOnChange)
					}, this.onChangeMinute = e => {
						const t = f(e.target.value, 59);
						void 0 !== t && this.setState({
							minute: t
						}, this.callOnChange)
					}, this.onHourInputBlur = () => this.setState({
						isHourInputFocused: !1
					}), this.onHourInputFocus = () => this.setState({
						isHourInputFocused: !0
					}), this.onMinuteInputBlur = () => this.setState({
						isMinuteInputFocused: !1
					}), this.onMinuteInputFocus = () => this.setState({
						isMinuteInputFocused: !0
					});
					const [t, n] = e.value.split(":").map(Number);
					this.state = {
						hour: t,
						minute: n,
						isHourInputFocused: !1,
						isMinuteInputFocused: !1
					}
				}
				componentWillReceiveProps(e) {
					const [t, n] = e.value.split(":").map(Number);
					this.setState({
						hour: t,
						minute: n
					})
				}
				render() {
					const e = this.state.isHourInputFocused || this.state.isMinuteInputFocused;
					return i.a.createElement(m, {
						className: this.props.className,
						isFocused: e
					}, i.a.createElement(h, {
						type: "number",
						onChange: this.onChangeHour,
						onFocus: this.onHourInputFocus,
						onBlur: this.onHourInputBlur,
						value: g(this.state.hour)
					}), i.a.createElement(b, null, ":"), i.a.createElement(h, {
						type: "number",
						onChange: this.onChangeMinute,
						onFocus: this.onMinuteInputFocus,
						onBlur: this.onMinuteInputBlur,
						value: g(this.state.minute)
					}))
				}
			}
			var C = x,
				E = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				y = n.n(E);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				j = p.a.input("TimeInput", y.a);
			t.a = e => O() ? i.a.createElement(j, v({
				type: "time"
			}, e, {
				onChange: t => e.onChange(t.target.value)
			})) : i.a.createElement(C, e)
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less": function(e, t, n) {
			e.exports = {
				Select: "_2S5XmuuRvbmSh4foFxR-vB",
				select: "_2S5XmuuRvbmSh4foFxR-vB"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.array.sort.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				a = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less"),
				c = n.n(a),
				l = n("./src/lib/lessComponent.tsx");
			const d = e => {
					const t = e.map(i.d);
					return t.sort((e, t) => {
						const n = -1440,
							{
								offset: o = n
							} = e,
							{
								offset: s = n
							} = t;
						return s - o || (e.displayText < t.displayText ? -1 : 1) || 0
					}), t
				},
				u = l.a.select("Select", c.a);
			class p extends s.a.PureComponent {
				constructor(e) {
					super(e), this.onSelect = e => {
						const t = e.target.value;
						this.props.onChange(t)
					};
					const t = p.cachedTimezoneOptions || d([this.props.selectedTimezoneName]);
					this.state = {
						timezoneOptions: t
					}
				}
				async loadTimezones() {
					const e = (await Object(r.a)(() => n.e("TimezoneList").then(n.bind(null, "./src/lib/timezone/timezoneList.ts")))).default,
						t = d(e);
					this.setState({
						timezoneOptions: t
					}), p.cachedTimezoneOptions = t
				}
				componentDidMount() {
					p.cachedTimezoneOptions || this.loadTimezones()
				}
				render() {
					return s.a.createElement(u, {
						onChange: this.onSelect,
						value: this.props.selectedTimezoneName,
						className: this.props.className
					}, this.state.timezoneOptions.map(e => {
						let {
							name: t,
							displayText: n
						} = e;
						return s.a.createElement("option", {
							key: t,
							value: t
						}, n)
					}))
				}
			}
			t.a = p
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "ppLwDvFzc7jVTiV_5euUj",
				container: "ppLwDvFzc7jVTiV_5euUj",
				Content: "_3VbwtRsayHUBLVMtjkul4u",
				content: "_3VbwtRsayHUBLVMtjkul4u",
				TitleRow: "_2aRE3m6KuLAhRIDmdmFKaY",
				titleRow: "_2aRE3m6KuLAhRIDmdmFKaY",
				Hr: "_1aShcxrllO1loaDr49TUUo",
				hr: "_1aShcxrllO1loaDr49TUUo",
				TimeInput: "_1bu7h4vK0WEgtRzSz-_mbA",
				timeInput: "_1bu7h4vK0WEgtRzSz-_mbA",
				TimeSelectionRow: "BUT684iT0_upDm6a1x4q_",
				timeSelectionRow: "BUT684iT0_upDm6a1x4q_",
				RadioOptionContent: "_3Ry1zpEULyeAACzRNZgIHN",
				radioOptionContent: "_3Ry1zpEULyeAACzRNZgIHN",
				OptionDetails: "_3imVLMudY3hxD1tq8KO6MB",
				optionDetails: "_3imVLMudY3hxD1tq8KO6MB",
				RadioInput: "_3VPprBv9bGCEm-hzjVWKmd",
				radioInput: "_3VPprBv9bGCEm-hzjVWKmd",
				RadioOption: "V4Tm9i9X2Co6LU8ez1zlw",
				radioOption: "V4Tm9i9X2Co6LU8ez1zlw",
				Delimiter: "_2bajvlJVcTANoHFRcmq7lu",
				delimiter: "_2bajvlJVcTANoHFRcmq7lu",
				Footer: "_3KeMI-XaG-5bILTvrCkaGS",
				footer: "_3KeMI-XaG-5bILTvrCkaGS",
				CancelButton: "_2NvAutu3QQJ9DwGHa83msC",
				cancelButton: "_2NvAutu3QQJ9DwGHa83msC",
				DeleteButton: "_3mKiK6bFRKi6y6Wkk1xLyp",
				deleteButton: "_3mKiK6bFRKi6y6Wkk1xLyp",
				ErrorMessage: "ZK5-SDSIvd4eGlmmbaRoO",
				errorMessage: "ZK5-SDSIvd4eGlmmbaRoO",
				TrashIcon: "_2rZU2BjKngPFo_E6bCLhXM",
				trashIcon: "_2rZU2BjKngPFo_E6bCLhXM"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getMaxDate", (function() {
				return M
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/app/strings/index.ts"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/timezone/index.ts"),
				p = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/index.tsx"),
				g = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				f = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				x = n("./src/reddit/helpers/trackers/postEvent.ts"),
				C = n("./src/reddit/i18n/components.tsx"),
				E = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				y = n("./src/reddit/layout/row/Inline/index.tsx"),
				v = n("./src/reddit/models/PostCreationForm/index.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				S = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				T = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx"),
				k = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.m.less"),
				w = n.n(k);
			const _ = "postCreation.schedulePicker",
				I = 240,
				P = () => {
					const e = new Date;
					e.setMinutes(60);
					const t = Object(u.g)(e);
					return e.setMinutes(e.getMinutes() + I), {
						startDate: t,
						endDate: Object(u.g)(e),
						submitTime: v.i.Now,
						timezoneName: Object(u.b)() || u.a
					}
				},
				M = () => {
					const e = new Date;
					e.setFullYear(e.getFullYear() + 1);
					const [t] = Object(f.f)(Object(u.g)(e));
					return t
				},
				R = d.a.div("Container", w.a),
				N = d.a.div("Content", w.a),
				L = d.a.div("TitleRow", w.a),
				D = d.a.hr("Hr", w.a),
				F = d.a.wrapped(S.a, "TimeInput", w.a),
				B = d.a.div("TimeSelectionRow", w.a),
				A = d.a.div("RadioOptionContent", w.a),
				K = d.a.span("OptionDetails", w.a),
				U = d.a.wrapped(b.a, "RadioInput", w.a),
				H = d.a.wrapped(g.a, "RadioOption", w.a),
				W = d.a.span("Delimiter", w.a),
				V = d.a.wrapped(p.e, "Footer", w.a),
				z = d.a.wrapped(h.i, "CancelButton", w.a),
				q = d.a.wrapped(h.i, "DeleteButton", w.a),
				G = d.a.div("ErrorMessage", w.a),
				J = d.a.wrapped(E.b, "TrashIcon", w.a),
				Z = Object(i.c)({
					language: O.S
				}),
				Q = Object(r.b)(Z);
			class X extends s.a.PureComponent {
				constructor(e) {
					super(e), this.currentTimezone = Object(u.b)(), this.maxDate = M(), this.buildEventSchedule = () => ({
						startDate: Object(f.a)(this.state.startDate, this.state.startTime),
						endDate: Object(f.a)(this.state.endDate, this.state.endTime),
						timezoneName: this.state.timezoneName,
						submitTime: this.state.submitTime
					}), this.onStartDateChange = e => {
						this.setState({
							startDate: e
						}, this.updateEndDatetime)
					}, this.onStartTimeChange = e => {
						this.setState({
							startTime: e
						}, this.updateEndDatetime)
					}, this.updateEndDatetime = () => {
						if (this.state.isEndTimeTouched) return;
						const {
							startDate: e,
							startTime: t
						} = this.state;
						if (e && t) {
							const n = Object(u.f)(Object(f.a)(e, t));
							n.setMinutes(n.getMinutes() + I);
							const [o, s] = Object(f.f)(Object(u.g)(n));
							this.setState({
								endDate: o,
								endTime: s
							})
						}
					}, this.onEndDateChange = e => {
						this.setState({
							endDate: e,
							isEndTimeTouched: !0
						})
					}, this.onEndTimeChange = e => {
						this.setState({
							endTime: e,
							isEndTimeTouched: !0
						})
					}, this.onTimezoneChange = e => {
						this.setState({
							timezoneName: e
						})
					}, this.onSubmitTimeChange = e => {
						this.setState({
							submitTime: e
						})
					}, this.onApplyClick = () => {
						const e = this.buildEventSchedule();
						this.props.sendEvent(Object(x.b)(e)), this.props.onChange(e), this.props.onClose()
					}, this.onDeleteButtonClick = () => {
						const e = this.buildEventSchedule();
						this.props.sendEvent(Object(x.d)(e)), this.props.onChange(null), this.props.onClose()
					}, this.onCancelButtonClick = () => {
						this.props.sendEvent(Object(x.c)()), this.props.onClose()
					}, this.getValidationError = () => {
						const {
							endDate: e,
							endTime: t,
							startDate: n,
							startTime: o
						} = this.state, {
							language: s
						} = this.props;
						if (!(n && o && e && t)) return Object(a.a)(s, "".concat(_, ".enterValidTimeError"));
						const r = Object(u.f)(Object(f.a)(n, o)),
							i = Object(u.f)(Object(f.a)(e, t));
						return r < (this.currentTimezone === this.state.timezoneName ? new Date : new Date(Date.now() - l.w)) ? Object(a.a)(s, "".concat(_, ".startTimeMustBeInFutureError")) : i < r ? Object(a.a)(s, "".concat(_, ".endTimeMustBeAfterStartTimeError")) : null
					}, this.getSubmitAtLabel = () => {
						const {
							language: e
						} = this.props, {
							startDate: t,
							startTime: n
						} = this.state;
						return Object(f.b)(t, n, e)
					}, this.renderSubmitTimeRadio = () => {
						const {
							language: e
						} = this.props;
						return s.a.createElement(U, {
							value: this.state.submitTime,
							name: "submit_time",
							onChange: this.onSubmitTimeChange
						}, s.a.createElement(H, {
							showButton: !0,
							value: v.i.Now
						}, s.a.createElement(A, null, s.a.createElement("span", null, Object(a.a)(e, "".concat(_, ".submitNowOptionLabel"))), s.a.createElement(K, null, Object(a.a)(e, "".concat(_, ".submitNowOptionDetails"))))), s.a.createElement(H, {
							showButton: !0,
							value: v.i.AtEventTime
						}, s.a.createElement(A, null, s.a.createElement("span", null, this.getSubmitAtLabel()), s.a.createElement(K, null, Object(a.a)(e, "".concat(_, ".submitAtTimeOptionDetails"))))))
					};
					const t = e.schedule || P(),
						[n, o] = Object(f.f)(t.startDate),
						[r, i] = Object(f.f)(t.endDate);
					this.state = {
						startDate: n,
						startTime: o,
						endDate: r,
						endTime: i,
						timezoneName: t.timezoneName,
						submitTime: t.submitTime,
						isEndTimeTouched: !!e.schedule
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(x.e)())
				}
				render() {
					const {
						language: e,
						shouldShowSubmitTime: t
					} = this.props, n = this.getValidationError();
					return s.a.createElement(R, null, s.a.createElement(N, null, s.a.createElement(L, null, Object(a.a)(e, "".concat(_, ".title"))), s.a.createElement(B, null, s.a.createElement("fieldset", null, s.a.createElement("legend", null, Object(a.a)(e, "".concat(_, ".startTimeLabel"))), s.a.createElement(j.a, {
						max: this.maxDate,
						onChange: this.onStartDateChange,
						value: this.state.startDate
					}), s.a.createElement(F, {
						onChange: this.onStartTimeChange,
						value: this.state.startTime
					})), s.a.createElement(W, null, Object(a.a)(e, "".concat(_, ".to"))), s.a.createElement("fieldset", {
						style: {
							opacity: this.state.isEndTimeTouched ? 1 : .5
						}
					}, s.a.createElement("legend", null, Object(a.a)(e, "".concat(_, ".endTimeLabel"))), s.a.createElement(j.a, {
						max: this.maxDate,
						onChange: this.onEndDateChange,
						value: this.state.endDate
					}), s.a.createElement(F, {
						onChange: this.onEndTimeChange,
						value: this.state.endTime
					}))), s.a.createElement("div", null, s.a.createElement("label", null, Object(a.a)(e, "".concat(_, ".timezoneLabel")), ":", s.a.createElement(T.a, {
						selectedTimezoneName: this.state.timezoneName,
						onChange: this.onTimezoneChange
					}))), t && s.a.createElement(s.a.Fragment, null, s.a.createElement(D, null), s.a.createElement("fieldset", null, s.a.createElement("legend", null, Object(a.a)(e, "".concat(_, ".submitOptionsTitle"))), this.renderSubmitTimeRadio()))), s.a.createElement(V, null, s.a.createElement(y.a, null, this.props.schedule && this.props.shouldShowDeleteButton && s.a.createElement(q, {
						onClick: this.onDeleteButtonClick
					}, s.a.createElement(J, null), s.a.createElement(C.c, null, "Delete")), s.a.createElement(z, {
						onClick: this.onCancelButtonClick
					}, s.a.createElement(C.c, null, "Cancel")), s.a.createElement(h.f, {
						onClick: this.onApplyClick,
						disabled: !!n
					}, s.a.createElement(C.c, null, "Apply"))), n && s.a.createElement(G, null, n)))
				}
			}
			t.default = Object(c.a)(Q(Object(m.b)(X)))
		},
		"./src/reddit/components/PostCreationForm/SubredditChangePrompt/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_1elQqozWN8v7kNb3-2JJnv",
				wrapper: "_1elQqozWN8v7kNb3-2JJnv",
				TitleRow: "_21ZJQglqJoGvKPVrE1g6y4",
				titleRow: "_21ZJQglqJoGvKPVrE1g6y4",
				DetailsContainer: "_2BCyPW29meUC7c2ZvAIF6O",
				detailsContainer: "_2BCyPW29meUC7c2ZvAIF6O",
				ButtonRow: "_3-rBvo8wMI4G0IKFdRF5et",
				buttonRow: "_3-rBvo8wMI4G0IKFdRF5et",
				CancelButton: "_12whVTuRHmPsEJZdopRGQN",
				cancelButton: "_12whVTuRHmPsEJZdopRGQN",
				ConfirmButton: "ERUkO2xr-Jto7MQoScSJG",
				confirmButton: "ERUkO2xr-Jto7MQoScSJG"
			}
		},
		"./src/reddit/components/PostCreationForm/SubredditDifficultyWarning/index.m.less": function(e, t, n) {
			e.exports = {
				removalRateAlert: "_2wiqOhLIVc503t34PHc7o9",
				alertIcon: "_2O6aMzAjiI2NbW3_Vv2oVJ",
				hardColor: "_2QvC5dw4i9qG4CcXi758sg",
				navButton: "_31coiOIkOKBl8i-JIXhn8y",
				removalRateCard: "_27o87TMxJkLjc9BLtZNI-v",
				cardContainer: "_3r5CDU888ueqHzV8OSN2nQ",
				navLeft: "_14VS4vtxFSThPR0ylsB1j7",
				navRight: "_2J2RH0z7XL53Ljgj9M3L8r",
				chevronIcon: "W5LlRObSVg5n6jod7RMQ8",
				alertContainer: "_1e-vfm1XqjvsLEsn5p1qWC",
				similarString: "_35v1RROLwFyY7tv8o6e2Fy",
				SubredditCard: "_3L0yXWt85IeMzcAhrqL4gb",
				subredditCard: "_3L0yXWt85IeMzcAhrqL4gb",
				iconContainer: "_3V6H1ILCOtfitLH-928aBD",
				planetIcon: "_2CVjzam4JTZdx6PIwFS_Kw",
				subredditIcon: "_1kTMg_omm8D8d-BsD7oMwZ",
				subInfoContainer: "_3Ua65e6h4LHtpGsmLMSH3d",
				rateInfoContainer: "_2hoeof01q1GL9fz6iMfb_Q"
			}
		},
		"./src/reddit/components/PostCreationForm/Tabs/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2rS9BNjL3uxg61zOx2zyOH",
				component: "_2rS9BNjL3uxg61zOx2zyOH",
				Container: "_3vyt9N_0jfZuOwByiKDi9x",
				container: "_3vyt9N_0jfZuOwByiKDi9x",
				Tab: "Z1w8VkpQ23E1Wdq_My3U4",
				tab: "Z1w8VkpQ23E1Wdq_My3U4",
				isActive: "j1Q89sB76i7EBRDhnQhlr"
			}
		},
		"./src/reddit/components/PostCreationForm/index.m.less": function(e, t, n) {
			e.exports = {
				FormContent: "_3w_665DK_NH7yIsRMuZkqB",
				formContent: "_3w_665DK_NH7yIsRMuZkqB",
				CrosspostBox: "QQaE6143-4kvEuZSTBX7_",
				crosspostBox: "QQaE6143-4kvEuZSTBX7_",
				FormContainer: "HOFZo2X7Fr6JVBztpsByj",
				formContainer: "HOFZo2X7Fr6JVBztpsByj",
				TabContent: "_1zq6UabIEJJ-z9grsiCJY7",
				tabContent: "_1zq6UabIEJJ-z9grsiCJY7",
				PostingGuidelines: "_2vcPDTxC76PPQ70AdMkN0C",
				postingGuidelines: "_2vcPDTxC76PPQ70AdMkN0C"
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var o = n("./node_modules/lodash/isEqual.js"),
				s = n.n(o),
				r = n("./src/reddit/constants/flair.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === a.f.Text || e.type === a.f.Image || e.type === a.f.Richtext);
			var l;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(l || (l = {}));
			const d = (e, t, n) => {
				if (n && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: l.NotSelected
				};
				const o = e && t.templateId ? e[t.templateId] : void 0;
				if (!o) return {
					canSave: !1,
					reason: l.InvalidTemplate
				};
				const a = Object(i.g)(t).length;
				return 0 === a ? {
					canSave: !1,
					reason: l.TextIsEmpty
				} : a > r.g ? {
					canSave: !1,
					reason: l.TextIsTooLong
				} : Object(i.n)(t) && !Object(i.q)(o) ? {
					canSave: !1,
					reason: l.TextIsNotAllowed
				} : s()(n, t) ? {
					canSave: !1,
					reason: l.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				donationAmount: "_1x9gNS8wlrugqgwofOEcGq",
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/AwardBadges/index.tsx"),
				i = n("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				a = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = n("./src/reddit/components/PostBadges/index.tsx"),
				d = n("./src/reddit/components/PostTopMeta/index.tsx"),
				u = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/models/Subreddit/index.ts"),
				x = n("./src/reddit/components/PostMeta/index.m.less"),
				C = n.n(x);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: x,
					isOverlay: E,
					language: y,
					post: v,
					shouldShowSubscribeButton: O,
					subredditOrProfile: j,
					tooltipType: S
				} = e;
				return s.a.createElement("div", {
					className: C.a.metaContainer
				}, !o && !v.isSponsored && j && s.a.createElement(a.a, {
					postId: v.id,
					subredditName: j.name
				}, s.a.createElement(p.a, {
					className: C.a.subredditName,
					"data-click-id": "subreddit",
					to: j.url
				}, j.displayText)), j && j.isQuarantined && s.a.createElement(u.a, null), !o && !v.isSponsored && j && O && !x && s.a.createElement(m.a, {
					getEventFactory: e => Object(g.f)(v.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: j.name,
						type: Object(f.e)(j) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: v.id,
					small: !0
				}), !o && !v.isSponsored && s.a.createElement(b.b, null), !o && !v.isSponsored && s.a.createElement(c.h, {
					type: v.belongsTo.type,
					id: v.belongsTo.id
				}), s.a.createElement(d.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: t,
					language: y,
					post: v,
					tooltipType: S
				}), s.a.createElement(l.a, {
					displayText: j ? j.displayText : null,
					inSubredditOrProfile: !!o,
					language: y,
					post: v,
					tooltipType: S
				}), j && s.a.createElement(i.a, {
					className: C.a.donationAmount,
					contentId: v.id,
					subredditId: j.id
				}), s.a.createElement(r.a, {
					hideCta: n,
					isOverlay: E,
					thing: v,
					tooltipType: S
				}))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				b = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				g = n("./src/reddit/helpers/flair.ts"),
				f = n("./src/reddit/helpers/path/index.ts"),
				x = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				C = n("./src/reddit/models/Flair/index.ts"),
				E = n("./src/reddit/models/Media/index.ts"),
				y = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = n("./src/lib/getShortenedLink.ts"),
				O = n("./src/reddit/components/FlairWrapper/index.tsx"),
				j = n("./src/app/strings/index.ts"),
				S = n("./src/lib/prettyPrintNumber/index.ts"),
				T = n("./src/reddit/components/Poll/MetaData/index.tsx"),
				k = n("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				w = n.n(k);
			const _ = Object(c.c)({
				language: e => e.user.language,
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var I = Object(i.b)(_)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, o = n ? n.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(l.a)(e.className, w.a.proposalMetaData)
					}, r.a.createElement("span", null, Object(j.c)(e.language, "polls.numVotesCommas", parseInt(o), {
						count: Object(S.a)(o)
					})), t && r.a.createElement(T.a, {
						className: w.a.proposalMetaDataTime,
						language: e.language,
						poll: t
					}))
				})),
				P = n("./src/reddit/components/SEOTitle/index.tsx"),
				M = n("./src/reddit/selectors/posts.ts"),
				R = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/components/PostTitle/index.m.less"),
				D = n.n(L),
				F = n("./src/config.ts");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			n.d(t, "b", (function() {
				return A
			})), n.d(t, "a", (function() {
				return U
			}));
			var A, K = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(A || (A = {}));
			const U = u.a.wrapped(Object(d.a)(e => {
					var {
						size: t,
						titleColor: n,
						titleType: o,
						nowrap: s,
						children: i,
						className: a,
						redditStyle: c
					} = e, d = K(e, ["size", "titleColor", "titleType", "nowrap", "children", "className", "redditStyle"]);
					let u = "";
					switch (t) {
						case A.ExtraLarge:
							u = D.a.ExtraLarge;
							break;
						case A.Large:
							u = D.a.Large;
							break;
						case A.Medium:
							u = D.a.Medium;
							break;
						case A.Small:
							u = D.a.Small;
							break;
						case A.ExtraSmall:
							u = D.a.ExtraSmall
					}
					return r.a.createElement("div", B({
						className: Object(l.a)(a, u, {
							[D.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": n || Object(y.a)(Object.assign({
								redditStyle: c
							}, d)).titleText
						}
					}, d), o ? r.a.createElement(P.b, {
						type: o
					}, i) : i)
				}), "Title", D.a),
				H = e => {
					var {
						className: t,
						disableVisited: n,
						titleColor: o
					} = e, s = K(e, ["className", "disableVisited", "titleColor"]);
					return r.a.createElement(a.a, B({}, s, {
						className: Object(l.a)(t, D.a.styledLink, {
							[D.a.isVisitedEnabled]: !n
						})
					}), s.children)
				},
				W = e => {
					var {
						disableVisited: t,
						nowrap: n
					} = e, o = K(e, ["disableVisited", "nowrap"]);
					return r.a.createElement("div", B({}, o, {
						className: Object(l.a)(D.a.titleContainer, o.className, {
							[D.a.isNoWrap]: n,
							[D.a.isVisitedEnabled]: !t
						})
					}))
				},
				V = Object(m.t)({
					isCommentPermalink: m.v,
					pageLayer: e => e
				}),
				z = Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(m.p)(e, {
							pageLayer: n
						})
					},
					isMeta: (e, t) => {
						let {
							post: n
						} = t;
						return Object(M.o)(e, {
							postId: n.id
						})
					},
					subredditName: (e, t) => {
						let {
							post: n
						} = t;
						return Object(R.S)(e, {
							subredditId: n.belongsTo.id
						}).name
					},
					shouldOpenPostInNewTab: N.W
				}),
				q = Object(i.b)(z),
				G = e => {
					const {
						post: t
					} = e, {
						isSponsored: n
					} = t;
					if (!e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						const o = e.isCommentPermalink ? Object(f.b)(t.permalink) : Object(b.a)(t.permalink);
						return r.a.createElement(W, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? r.a.createElement(J, e) : r.a.createElement(H, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: o
						}, r.a.createElement(J, e)))
					}
					return r.a.createElement(W, {
						nowrap: e.nowrap
					}, r.a.createElement(J, e))
				},
				J = e => {
					const {
						leftFlair: t,
						post: n
					} = e, o = e.format ? e.format(n) : n.title, s = e.isCommentsPage ? P.a.PostComments : P.a.PostItem;
					return r.a.createElement(U, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: s
					}, t && r.a.createElement(O.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), o)
				},
				Z = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: o
					} = n, s = !t && !e.isCrosspost && e.size !== A.Large && !n.isSponsored && (n.source || n.media && (n.media.type === E.n.GIFVIDEO || n.media.type === E.n.IMAGE || n.media.type === E.n.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (s) return r.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(E.A)(n),
							isSponsored: o,
							source: n.source
						}, Object(v.a)(n), r.a.createElement(x.a, {
							className: D.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== A.Large && e.size !== A.ExtraLarge) return r.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: o,
						source: n.source
					}, Object(v.a)(n), r.a.createElement(x.a, null));
					return null
				};
			class Q extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n        .".concat(this.props.post.id, " .").concat(D.a.Component, " {\n          --postTitle-VisitedLinkColor: ").concat(Object(o.d)(.45, Object(y.a)(this.props).titleText, "#FFFFFF"), ";\n          --postTitleLink-VisitedLinkColor: ").concat(Object(o.d)(.45, this.props.titleColor || Object(y.a)(this.props).titleText, Object(y.a)(this.props).body), ";\n        }\n      ")
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: o,
						isM2MHomeRedirectEnabled: s,
						isMeta: i,
						isOverlay: a,
						poll: c,
						post: d,
						showNSFWSpoilerFlairsOnly: u
					} = this.props, p = n === C.b.Left, m = Object(O.b)(i, d), h = u ? m.filter(e => e.type === C.f.Nsfw || e.type === C.f.Spoiler) : p ? m.filter(e => Object(g.p)(e.type)) : [], b = u ? [] : p ? m.filter(e => !Object(g.p)(e.type)) : m, f = s || !a && !o, x = !t && h && h.length > 0 && f, E = !t && b && b.length > 0 && f;
					return r.a.createElement("div", {
						className: Object(l.a)(e, d.id)
					}, !u && x && r.a.createElement(O.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: d,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement(G, B({}, this.props, {
						leftFlair: u ? h : void 0
					})), c && r.a.createElement(I, {
						className: D.a.pollMeta,
						pollId: c.id
					}), r.a.createElement(Z, this.props), E && r.a.createElement(O.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: d,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement("div", {
						className: D.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: '\n              <img alt="" src="'.concat(F.a.assetPath, '/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            ')
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = u.a.wrapped(V(q(Object(d.a)(Object(p.b)(Q)))), "Component", D.a)
		},
		"./src/reddit/components/PostingSidebar/PolicyRow/index.m.less": function(e, t, n) {
			e.exports = {
				PolicyRow: "_2N9ShiilNyzdd0B_i9geBj",
				policyRow: "_2N9ShiilNyzdd0B_i9geBj"
			}
		},
		"./src/reddit/components/PostingSidebar/PolicyRow/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/app/strings/index.ts"),
				i = n("./src/config.ts");
			const {
				redditUrl: a
			} = i.a, c = "".concat(a, "/help/contentpolicy"), l = "".concat(a, "/wiki/reddiquette");
			var d = n("./src/reddit/components/PostingSidebar/PolicyRow/index.m.less"),
				u = n.n(d),
				p = n("./src/lib/lessComponent.tsx");
			const m = Object(r.e)("postCreation.contentPolicy"),
				h = Object(r.e)("postCreation.pleaseBeMindful"),
				b = Object(r.e)("postCreation.practiceReddiquette"),
				g = Object(r.e)("postCreation.reddiquette"),
				f = p.a.div("PolicyRow", u.a);
			t.a = e => s.a.createElement(f, null, h(e.language), " ", s.a.createElement("a", {
				href: c
			}, m(e.language)), " ", b(e.language), " ", s.a.createElement("a", {
				href: l
			}, g(e.language)), ".")
		},
		"./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less": function(e, t, n) {
			e.exports = {
				Snoo: "_1XXU14d6sjwsheKLMcy7ro",
				snoo: "_1XXU14d6sjwsheKLMcy7ro",
				Li: "_2aD4E5YdfsXR-e8kLRuTEp",
				li: "_2aD4E5YdfsXR-e8kLRuTEp",
				Ol: "a5fJMl2u0aujwukxWH3if",
				ol: "a5fJMl2u0aujwukxWH3if",
				Title: "_27SYzmGZdspPn9yA9voNCY",
				title: "_27SYzmGZdspPn9yA9voNCY",
				Component: "_1Zj2sAyYL2zB-kzZQcWiW",
				component: "_1Zj2sAyYL2zB-kzZQcWiW"
			}
		},
		"./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/app/strings/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				d = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less"),
				u = n.n(d),
				p = n("./src/lib/lessComponent.tsx");
			const m = Object(a.e)("postingReddiquette.title"),
				h = Object(a.e)("postingReddiquette.crosspostTitle"),
				b = p.a.wrapped(e => s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 45 43"
				}, s.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, s.a.createElement("g", {
					fill: "#0DD3BB",
					transform: "translate(0 4)"
				}, s.a.createElement("ellipse", {
					cx: "25.492",
					cy: "22.2631",
					transform: "rotate(5 25.492 22.263)",
					rx: "17.6396",
					ry: "13.9883"
				}), s.a.createElement("ellipse", {
					cx: "19.3519",
					cy: "17.9699",
					transform: "rotate(5 19.352 17.97)",
					rx: "14.7297",
					ry: "16.0688"
				}), s.a.createElement("ellipse", {
					cx: "14.0251",
					cy: "27.7862",
					transform: "rotate(5 14.025 27.786)",
					rx: "8.4751",
					ry: "8.9243"
				}), s.a.createElement("ellipse", {
					cx: "11.808",
					cy: "17.4531",
					transform: "rotate(5 11.808 17.453)",
					rx: "10.7695",
					ry: "10.8575"
				}), s.a.createElement("ellipse", {
					cx: "12.1168",
					cy: "22.4429",
					transform: "rotate(5 12.117 22.443)",
					rx: "8.4751",
					ry: "8.9243"
				})), s.a.createElement("path", {
					fill: "#FFF",
					d: "M35.6875 31.5625c-1.3275 1.8696-6.7017 5.0483-8.7188 6.0313-2.0174.983-13.478 2.1465-15.625-.6876-1.5625-2.0624-.9687-4.625 1-6.1562C9.6563 29.2812 8.125 27.8437 7 24.9062c-.0872-.2277-1.1015-1.763-.875-1.7812l.9375-4.0313c.8158-2.9308 4.2118-5.1638 6.7992-6.5715 2.3198-1.2615 4.9067-1.934 7.5113-2.1714 2.1052-.192 4.259-.101 6.277.554 2.0182.6552 4.2956 1.063 5.5063 2.8765 0 0 1.5532 3.6305 1.6736 5.5487.1204 1.9177-2.0402 6.1206-2.0402 6.1206"
				}), s.a.createElement("path", {
					fill: "#FFF",
					d: "M31.5665 34.5708c.6293 1.944.9 4.0143.794 6.0635 0 0-.473 1.3654-6.7204 1.3654-6.2478 0-7.6077-.7104-7.6077-.7104.047-1.224.0518-2.4493.014-3.6732-.0028-.097.0414-.2356.13-.2062l-.1555-7.319 12.5354-2.0634c.4433.252.8525.5696 1.211.9412l-.2007 5.6022z"
				}), s.a.createElement("path", {
					fill: "#FF0",
					d: "M34.0514 21.4676c-.3642.8707-.5738 1.8017-.8143 2.7188-.601 2.29-1.4044 4.5218-2.3967 6.658.1578.0357.3286.0014.4624-.0927.072.7567 1.0046 1.1686 1.678.8836.6734-.2846 1.071-1.0334 1.2235-1.777.0223-.1084.0407-.2198.0277-.33-.0202-.1737-.114-.3265-.1996-.477-.6817-1.2056-.9025-2.6877-.6033-4.0528.099-.4518.2715-.9186.6318-1.1878.2046-.1536.452-.2293.6975-.2872.6156-.146 1.2512-.198 1.8812-.154l.33-1.1467c.054-.1864.108-.3773.0993-.572-.0212-.4554-.393-.8263-.8058-.9727-.412-.1463-.8604-.115-1.2947-.0823"
				}), s.a.createElement("path", {
					fill: "#F15A24",
					d: "M12.322 21.7194c.061.3407.127.693.3168.977.3034.4517.85.6324 1.3573.785.3797.1136.7785.2284 1.165.141.2643-.0598.5012-.2104.725-.3697.61-.433 1.1792-.9615 1.5326-1.6395.3962-.7593.4926-1.684.2625-2.5148-.0912-.3294-.2458-.6615-.524-.843-.2292-.1494-.5564-.2205-.6293-.4927-.1057-.3946-1.938-.4537-2.25-.4202-.474.051-.939.1728-1.2797.5403-.9068.9784-.8953 2.613-.676 3.8366M24.194 19.0418c.0644.3482.1334.708.3344.998.3193.462.8963.6468 1.431.8023.4005.1164.8212.234 1.2286.1447.2793-.0614.529-.2154.7647-.3776.644-.443 1.244-.983 1.617-1.6756.4174-.776.5195-1.7205.2768-2.5694-.0964-.3366-.2596-.6762-.5526-.8614-.242-.1528-.587-.2255-.664-.5037-.1117-.4033-2.0443-.464-2.3736-.4297-.4998.052-.9902.1766-1.3498.5523-.9564 1-.9442 2.67-.7126 3.9202"
				}), s.a.createElement("path", {
					fill: "#CCC",
					d: "M35.9408 20.9708c.222.0064.4462.0053.6533.066.4068.1196.9188.5786.945-.1845.007-.1902.012-.3904-.0708-.56-.122-.251-.5983-.9602-.824-1.087-.1087-.061-.236-.0694-.359-.073-.3063-.0092-.613.0014-.9182.0315-.9906.0986-.7374 1.4513.01 1.725.177.0647.3693.0764.5638.082"
				}), s.a.createElement("path", {
					fill: "#FF7BAC",
					d: "M37.8215 19.8532c-.0306.0467-.0694.0968-.123.099-.0946.0034-.1258-.128-.1816-.2085-.0644-.0938-.1824-.1258-.29-.1506-.4784-.112-1.163-.1415-1.5974-.3738-.4688-.251-.4095-.3117-.2434-.8975.178-.6268.4606-1.3722 1.071-1.6617 2.0532-.9728 2.1506 1.9814 1.3643 3.1932"
				}), s.a.createElement("path", {
					fill: "#FF0",
					d: "M30.808 32.959c.0077.0694.0343.1556.1004.1593-.0834-.0335-.1158.1122-.095.203.429.0508.8583.1012 1.2877.152.263.0313.5674.0482.752-.151.1304-.141.16-.3512.1825-.5462.032-.274.064-.548.0964-.822.0082-.0724.0135-.1552-.0336-.2086-.034-.0388-.087-.051-.137-.0588-.219-.0327-.446-.0064-.6532.075-.6713.2642-.6634-.6747-1.1966-.4688-.4516.1747-.346 1.279-.3035 1.6663"
				}), s.a.createElement("path", {
					fill: "#FFF",
					d: "M31.9858 34.3613c.3538.146.738.196 1.1182.2014 2.1213.03 4.1668-1.396 5.0646-3.4086.8978-2.0117.661-4.4994-.4998-6.3584-.514-.8238-1.3235-1.5857-2.2608-1.5168-.594.0433-1.1344.429-1.4745.9404-.3405.5112-.499 1.1347-.552 1.7558-.1233 1.4442.3143 2.9324 1.1923 4.053"
				}), s.a.createElement("path", {
					fill: "#F7E1CB",
					d: "M11.2195 30.4984l9.4083-2.7606 1.318 7.9058-7.4904 2.7607"
				}), s.a.createElement("path", {
					fill: "#FFF",
					d: "M12.7516 37.7683c.2136.2304.5864.1393.8525-.0207 1.096-.6588 1.5454-2.1516 1.337-3.4564-.108-.6758-.3805-1.3463-.877-1.792-.4966-.446-1.243-.6212-1.827-.3125-.402.212-.682.6167-.8776 1.041-.4437.9637-.5192 2.107-.206 3.1258.1683.548.462 1.0782.9255 1.388.4637.3095 1.1184.3464 1.543-.0195"
				}), s.a.createElement("g", null, s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M27.37 11.0563c-2.068-.6386-4.2747-.727-6.4318-.54-2.669.2313-5.8933.8336-7.6967 2.1168-.6986.4972-3.0193 1.2145-3.5257 3.1977"
				}), s.a.createElement("path", {
					fill: "#FFF",
					d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.726 2.906-1.237 4.4356.5752 1.8004 1.926 3.0712 2.306 3.275"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.7258 2.906-1.237 4.4356.5756 1.8004 1.926 3.0712 2.306 3.275"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M11.823 29.9606c-2.7657-.9024-4.92-3.4455-5.3476-6.3126-.034-.2298.0103-.55.2428-.5677M33.1486 15.4973c.192.314.384.6286.576.9427.114.1872.2283.374.33.5677.5276 1.003.7084 2.182.5062 3.2958M35.8308 16.6844c-1.6376 4.9262-3.3644 9.8235-5.1785 14.688"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M35.671 17.0804c.2263-.288.586-.4587.9517-.4895.366-.0313.736.0692 1.0563.2483.2708.1508.515.364.6543.6404.1393.276.161.6202.0118.8913M38.3983 17.8874c-.6142 1.9982-1.3304 3.9652-2.145 5.891"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M37.245 21.08c.2485-.5347.1342-1.2158-.2747-1.641-.4093-.425-1.0872-.5678-1.6347-.3436-.1367.0562-.278.1512-.301.297"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M37.2275 21.501c.0044-.5535-.3094-1.0984-.791-1.374-.482-.2753-1.113-.2705-1.5904.012"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M34.2996 20.788c.7136-.389 1.6686-.2757 2.2706.269.2052.1856.376.4304.3964.706.006.0785-.0008.1578-.0196.2345M31.8127 33.921c.3626.1424.7564.1912 1.1458.1963 2.1737.0294 4.2697-1.3607 5.1896-3.3225.92-1.961.6773-4.386-.512-6.1982-.5268-.803-1.3562-1.5457-2.3166-1.4785-.6087.0423-1.1624.4184-1.511.9168-.3488.4983-.5113 1.106-.5655 1.7115-.1264 1.4077.322 2.8584 1.2216 3.9508M33.9912 29.3915l-1.467 4.0393M32.6352 33.0774c-.951.6286-1.8904 1.2738-2.8177 1.935"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M30.6496 31.0486l-.6455 4.1743c-.0058.0366-.0053.083.0385.099.044.0162.0833-.0547.0346-.0517"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M30.1422 33.367c.1982-.3278.4635-.6147.7748-.8386.078.1534.1257.3226.139.4943.287-.1218.5986-.183.9103-.1802-.3703.3692-.701.778-.9844 1.2173"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M31.195 33.0817c-.389.5013-.7464 1.0268-1.0695 1.5725.0302-.0257.0604-.0514.0902-.0775M30.7412 32.969c.0104.3634-.12.7275-.3766 1.0607M32.6658 33.0168c.1094-.676.1787-1.3585.2074-2.0422-.326.1956-.6525.3912-.979.5872-.1045.0627-.2386.1262-.3414.06-.063-.04-.091-.1166-.1135-.1874-.133-.4158-.2417-.8396-.3253-1.2682-.291.3247-.547.6807-.7626 1.0594"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M33.4372 28.176c-.177.4906-.354.9812-.5313 1.472-.285.7874-.5726 1.5822-1.0206 2.291M36.2456 21.1264c.048-.0176.0608-.0917.0218-.1244-.3043.6815-.5497 1.3883-.732 2.1112M30.4806 30.95c-.0843.2098-.1095.43-.074.6453M32.6366 25.235c-1.3602 1.8225-3.2855 3.1704-5.3524 4.1286-2.0672.958-4.284 1.55-6.5023 2.0763M30.348 27.747c.454.2455.8732.5552 1.24.9174M31.3832 34.1252c.6447 1.895.9225 3.913.8134 5.9105"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M20.2203 27.5033c.529 2.5225.9453 5.069 1.2474 7.6282.0048.042.0063.0925-.0276.1178-.0345.0253-.095-.029-.0603-.0536"
				}), s.a.createElement("path", {
					stroke: "#000",
					d: "M21.462 35.1753c-2.4317 1.1842-4.9882 2.113-7.614 2.7662-.0714.0177-.1587.031-.208-.023-.0494-.0544.038-.1667.0828-.1083",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}), s.a.createElement("path", {
					stroke: "#000",
					d: "M13.3965 36.9094l.6482 1.51c-.01-.0428-.0207-.086-.0312-.129",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}), s.a.createElement("path", {
					stroke: "#000",
					d: "M12.104 37.242c.219.2246.601.1358.8735-.0202 1.123-.6422 1.5835-2.0972 1.3698-3.369-.111-.659-.3898-1.3124-.8986-1.747-.5087-.4348-1.2736-.6054-1.872-.3045-.4118.2066-.6988.601-.8992 1.0147-.4546.9394-.532 2.054-.211 3.047.1723.5342.4733 1.051.9482 1.353.4753.3016 1.1462.3376 1.5813-.019M10.6766 30.3595c-.0715-.0158-.065.1064-.022.1655l.7927 1.0914c.011.0154.0276.0326.0457.0264.018-.006.0015-.0418-.01-.0268M10.6893 30.2222c3.1114-1.025 6.255-1.953 9.425-2.782.0814.1758.1628.352.2443.5274",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}), s.a.createElement("path", {
					stroke: "#000",
					d: "M17.6433 28.0588c-.2222-.2202-.246-.6037-.5073-.7755-.2244-.148-.522-.0737-.7792.0048-1.0368.3175-2.073.6346-3.11.952-.2287.07-.4843.163-.579.382-.1275.2944.111.6096.332.843M13.849 27.877c-.025-.1897.085-.3783.2402-.4906.1554-.1123.349-.1592.5393-.1816.302-.0364.678.0275.7848.3115M17.774 36.8926c-.1595-.0286-.2392.1064-.234.201.068 1.193.0596 2.3876-.0247 3.5806M27.3276 14.627c-1.155-.254-2.4348.1776-3.1982 1.0778-.763.9005-.975 2.23-.5294 3.3214.203.498.537.9487.9825 1.252.757.5157 1.7714.556 2.64.263.9157-.3095 1.7137-.983 2.115-1.8592.401-.8763.3797-1.9464-.108-2.7783-.4875-.8312-1.447-1.3828-2.412-1.3303",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeWidth: ".5",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M15.604 17.5287c-.993-.5754-2.3376-.3743-3.2093.371-.872.745-1.2777 1.9505-1.1753 3.0903.038.4224.1422.845.359 1.2103.4368.7372 1.309 1.1618 2.168 1.1684.8592.007 1.6937-.3673 2.346-.924.2724-.2316.518-.497.7086-.799.465-.738.5666-1.6924.2675-2.511-.2992-.8188-.993-1.485-1.8255-1.7524"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M25.8734 23.061c.019.8443.036 1.706-.2144 2.513-.3128 1.0058-1.0497 1.8733-1.9936 2.347-.9442.4738-2.0827.547-3.0803.1982"
				}), s.a.createElement("path", {
					fill: "#000",
					d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82z"
				}), s.a.createElement("path", {
					fill: "#FFF",
					d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033M19.0092 10.923c-.1602-.079-.1772-.2954-.172-.4733.078-2.7703.1672-5.5993 1.1384-8.1964 1.835.0793 3.6632.3303 5.4515.7494"
				}), s.a.createElement("path", {
					fill: "#FFF",
					d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
				}), s.a.createElement("path", {
					stroke: "#000",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
				})))), "Snoo", u.a),
				g = p.a.li("Li", u.a),
				f = p.a.ol("Ol", u.a),
				x = ["postingReddiquette.rememberTheHuman", "postingReddiquette.behaveLikeYouWouldInReal", "postingReddiquette.lookForOriginalSource", "postingReddiquette.searchForDuplicates", "postingReddiquette.readCommunityRules"].map(a.e),
				C = [...x, Object(a.e)("postingReddiquette.mustBeSubscribedToCrosspost")],
				E = p.a.div("Title", u.a),
				y = Object(i.c)({
					submissionType: l.ab
				});
			t.a = p.a.wrapped(Object(r.b)(y)(e => {
				const {
					className: t,
					language: n,
					submissionType: o
				} = e, r = o === c.Gb.CROSSPOST;
				return s.a.createElement("div", {
					className: t
				}, s.a.createElement(E, null, s.a.createElement(b, null), r ? h(n) : m(n)), s.a.createElement(f, null, (r ? C : x).map((e, t) => s.a.createElement(g, {
					key: t
				}, e(n)))))
			}), "Component", u.a)
		},
		"./src/reddit/components/PostingSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "itxZANPrH4AAYOj6VgfL9",
				container: "itxZANPrH4AAYOj6VgfL9"
			}
		},
		"./src/reddit/components/PostingSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				s = n.n(o),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/IdCard/async.tsx"),
				u = n("./src/reddit/components/SidebarFooter/index.tsx"),
				p = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = n("./src/reddit/components/Widgets/PostCollection/index.tsx"),
				h = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				f = n("./src/reddit/selectors/postCreations.ts"),
				x = n("./src/reddit/selectors/profile.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/selectors/widgets.ts"),
				v = n("./src/reddit/components/PostingSidebar/PolicyRow/index.tsx"),
				O = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx"),
				j = n("./src/reddit/components/PostingSidebar/index.m.less"),
				S = n.n(j),
				T = n("./src/lib/lessComponent.tsx");
			const k = Object(r.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				w = T.a.div("Container", S.a),
				_ = Object(b.t)(),
				I = new Set(["all", "post"]),
				P = Object(l.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const o = Object(b.q)(e, {
						pageLayer: n
					});
					return o && Object(C.R)(e, {
						subredditId: o.id
					})
				}, e => (e || []).filter(e => I.has(e.kind))),
				M = (e, t) => {
					let {
						pageLayer: n
					} = t;
					const o = Object(b.q)(e, {
						pageLayer: n
					});
					return !(!o || !Object(y.d)(e, {
						subredditName: o.name
					}))
				},
				R = Object(l.c)({
					hasIdCardWidgetData: M,
					isCreationPagePending: f.B,
					language: E.S,
					profile: (e, t) => {
						let {
							pageLayer: n,
							subredditOrProfileId: o
						} = t;
						return o ? Object(x.p)(e, {
							profileId: o
						}) : Object(b.j)(e, {
							pageLayer: n
						})
					},
					subreddit: b.q,
					subredditRules: P,
					currentPostCollection: b.f
				}),
				N = Object(c.b)(R),
				L = e => {
					const {
						className: t,
						currentPostCollection: n,
						hasIdCardWidgetData: o,
						isCreationPagePending: s,
						language: r,
						profile: i,
						subreddit: c,
						subredditRules: l
					} = e, b = o || s;
					return a.a.createElement(w, {
						className: t
					}, n && a.a.createElement(m.a, {
						collection: n
					}), c && b && a.a.createElement(p.a, null, a.a.createElement(d.a, {
						isSubmissionPage: !0,
						listingName: c.name
					})), i && !c && a.a.createElement(p.a, null, a.a.createElement(k, {
						profileName: i.name,
						isOverlay: !1,
						isSubmissionPage: !0
					})), c && l && a.a.createElement(p.a, null, a.a.createElement(h.a, {
						subredditName: c.name,
						display: g.e.COMPACT,
						rules: l,
						redditStyle: !0
					})), a.a.createElement(O.a, {
						language: r
					}), a.a.createElement(p.a, null), a.a.createElement(v.a, {
						language: r
					}), a.a.createElement(u.a, {
						redditStyle: !0
					}))
				};
			t.a = _(N(L))
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(e, t, n) {
			e.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/ProgressBar/index.m.less"),
				a = n.n(i);
			t.a = e => {
				let {
					className: t,
					innerBarClassName: n,
					percent: o
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(a.a.outerBar, t)
				}, s.a.createElement("div", {
					className: Object(r.a)(a.a.innerBar, n),
					style: {
						width: "".concat(o.toFixed(2), "%")
					}
				}))
			}
		},
		"./src/reddit/components/RequestPendingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				Subtitle: "_1ljRPHbvpC41amZF9_xBeb",
				subtitle: "_1ljRPHbvpC41amZF9_xBeb"
			}
		},
		"./src/reddit/components/RequestPendingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = n("./src/reddit/i18n/utils.ts"),
				d = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = n.n(m);
			const b = a.a.wrapped(c.a, "Banner", h.a),
				g = Object(r.b)(() => Object(i.c)({
					restrictions: p.o,
					subreddit: u.f
				}));
			t.a = g(e => {
				let {
					restrictions: t,
					subreddit: n
				} = e;
				if (!n) return null;
				const o = t === d.e.Comment ? d.a.Create : d.a.Draft;
				return s.a.createElement(b, {
					subtitle: s.a.createElement("span", {
						className: h.a.Subtitle
					}, Object(l.c)("Your request to ".concat(Object(l.b)("restrictions", d.d[t]), " in r/").concat(Object(l.b)("displayName", n.name), " was sent and is pending. In the meantime, you can ").concat(Object(l.b)("action", d.c[o]), " a post and ")), s.a.createElement("a", {
						href: "".concat(n.url)
					}, Object(l.c)("browse the community"))),
					title: Object(l.c)("Request to ".concat(Object(l.b)("restrictions", d.d[t]), " is pending..."))
				})
			})
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, n) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-autosize-textarea/lib/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				l = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const p = e => {
					let {
						className: t,
						children: n,
						editorWrapperRef: o,
						initialHeight: r
					} = e;
					return s.a.createElement("div", {
						className: Object(a.a)(l.a.editorWrapper, t),
						style: r ? {
							height: r
						} : void 0,
						ref: o
					}, n)
				},
				m = e => {
					var {
						isFullHeight: t,
						textAreaRef: n
					} = e, o = u(e, ["isFullHeight", "textAreaRef"]);
					return s.a.createElement(i.a, d({
						className: Object(a.a)(l.a.textareaAutosize, {
							[l.a.mIsFullHeight]: t
						}),
						innerRef: n
					}, o))
				};
			class h extends s.a.Component {
				constructor(e) {
					super(e), this.editorHeight = null, this.editorRef = null, this.editorStyleMutationObserver = null, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const {
							isResized: e
						} = this.state;
						e || this.setState({
							isResized: !0
						});
						const t = this.editorRef.style.height ? Number.parseInt(this.editorRef.style.height) : null;
						this.editorHeight !== t && (this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.setEditorWrapperRef = e => this.editorRef = e, this.state = {
						initialHeight: e.initialHeight,
						isResized: !!e.initialHeight
					}
				}
				componentDidMount() {
					this.editorRef && (this.editorStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorStyleMutationObserver.observe(this.editorRef, {
						attributes: !0,
						attributeFilter: ["style"]
					}))
				}
				componentWillUnmount() {
					this.editorStyleMutationObserver && (this.editorStyleMutationObserver.disconnect(), this.editorStyleMutationObserver = null)
				}
				render() {
					const e = this.props,
						{
							className: t,
							initialHeight: n,
							innerRef: o,
							onEditorResize: r
						} = e,
						i = u(e, ["className", "initialHeight", "innerRef", "onEditorResize"]),
						{
							isResized: a
						} = this.state;
					return s.a.createElement(p, {
						className: t,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: n
					}, s.a.createElement(m, d({}, i, {
						children: !0,
						isFullHeight: !!a,
						textAreaRef: o
					})))
				}
			}
			t.a = h
		},
		"./src/reddit/components/RichTextEditor/Blockquote/index.m.less": function(e, t, n) {
			e.exports = {
				BlockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6",
				blockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6"
			}
		},
		"./src/reddit/components/RichTextEditor/CodeBlock/index.m.less": function(e, t, n) {
			e.exports = {
				CodeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh",
				codeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh"
			}
		},
		"./src/reddit/components/RichTextEditor/DragController/helpers.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var o = n("./node_modules/lodash/includes.js"),
				s = n.n(o);
			var r = n("./src/reddit/helpers/dom/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			}));
			const a = e => e.className.indexOf("public-DraftEditor-content") >= 0,
				c = e => !!e.parentElement && !!e.parentElement.parentElement && a(e.parentElement.parentElement),
				l = e => !(!e.dataset.block || !e.dataset.offsetKey),
				d = e => {
					const {
						offsetKey: t
					} = e.dataset;
					return t ? (e => e.split("-")[0])(t) : ""
				},
				u = (e, t) => {
					return ((e, t) => {
						const n = function(e, t) {
							let n = 0,
								o = e.length - 1;
							for (; n <= o;) {
								const s = o + n >> 1,
									r = t(e[s]);
								if (r > 0) n = s + 1;
								else {
									if (!(r < 0)) return s;
									o = s - 1
								}
							}
							return n
						}(e, e => {
							const n = e.getBoundingClientRect();
							return t < n.top ? -1 : t > n.bottom ? 1 : 0
						});
						return e[Math.min(n, e.length - 1)]
					})(e.querySelectorAll("[data-block][data-offset-key]"), t)
				},
				p = (e, t) => {
					const n = Object(r.b)(e, l, a);
					return n || u(e, t)
				},
				m = (e, t) => {
					const n = (e => {
						const t = e.target;
						if (!(t instanceof HTMLElement)) return;
						const n = Object(r.b)(t, a);
						if (!n) return;
						const o = p(t, e.clientY);
						if (!o) return;
						const s = Object(r.b)(o, c);
						return s ? {
							editorContentElement: n,
							topLevelElement: s,
							blockElement: o
						} : void 0
					})(t);
					if (!n) return;
					const {
						topLevelElement: o,
						blockElement: s
					} = n, l = d(s), u = e.getCurrentContent(), m = u.getBlockForKey(l);
					if (!m) return;
					const {
						upperElement: h,
						lowerElement: b
					} = ((e, t, n, o) => {
						let s = n,
							r = n;
						if (e.getType() === i.b.UNSTYLED) s = r = t;
						else if (Object(i.o)(e.getType())) {
							s = r = t;
							const a = o.getBlockAfter(e.getKey());
							a && Object(i.u)(a.getType()) && (r = n.nextElementSibling)
						} else Object(i.u)(e.getType()) && (s = n.previousElementSibling, r = t);
						return {
							upperElement: s,
							lowerElement: r
						}
					})(m, s, o, u), {
						clientY: g,
						isBefore: f
					} = ((e, t, n) => {
						const o = e.getBoundingClientRect(),
							s = t.getBoundingClientRect();
						let i, c;
						if (n > (o.top + s.bottom) / 2) {
							i = s.bottom, c = !1;
							const e = Object(r.b)(t, e => !!e.nextElementSibling, a);
							if (e) {
								i = (e.nextElementSibling.getBoundingClientRect().top + s.bottom) / 2
							}
						} else {
							i = o.top, c = !0;
							const t = Object(r.b)(e, e => !!e.previousElementSibling, a);
							if (t) {
								i = (t.previousElementSibling.getBoundingClientRect().bottom + o.top) / 2
							}
						}
						return {
							clientY: i,
							isBefore: c
						}
					})(h, b, t.clientY);
					let x = l;
					if (m.getType() !== i.b.UNSTYLED) {
						const e = p(f ? h : b, g);
						e && (x = d(e))
					}
					return {
						clientY: g,
						isBefore: f,
						blockKey: x
					}
				},
				h = e => e.items ? !!Array.from(e.items).find(e => "file" === e.kind) : !(!e.files || !e.files.length) || s()(e.types, "Files"),
				b = e => e.items ? Array.from(e.items).map(e => "file" === e.kind ? e.getAsFile() : null).filter(Boolean) : e.files ? Array.from(e.files) : []
		},
		"./src/reddit/components/RichTextEditor/DragController/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_13Sj3UMDKkCCJTq88berCB",
				hideCaret: "_2BqK1CuzH2oWi2F9_cuFPQ",
				DropLine: "z5iuD3MVYcfS7tTihbvof",
				dropLine: "z5iuD3MVYcfS7tTihbvof",
				Tooltip: "_1z9S1KmnM79xn-UA0FnbP6",
				tooltip: "_1z9S1KmnM79xn-UA0FnbP6"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				c = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			t.a = i.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: o,
					text: i,
					tooltipContentClass: a
				} = e, u = d(e, ["children", "className", "renderBelow", "text", "tooltipContentClass"]);
				return s.a.createElement("div", l({}, u, {
					className: Object(r.a)(c.a.container, n)
				}), i ? s.a.createElement("div", {
					className: Object(r.a)(c.a.tooltip, a, o ? c.a.below : c.a.above)
				}, i) : null, t)
			}, "HoverTooltip", c.a)
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less": function(e, t, n) {
			e.exports = {
				LinkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				linkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				Link: "_3vJCj_aXdDc-UXA9fDK-z-",
				link: "_3vJCj_aXdDc-UXA9fDK-z-",
				LinkButton: "_1NtBcR7JgjxkWLJrk3ddD3",
				linkButton: "_1NtBcR7JgjxkWLJrk3ddD3"
			}
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less": function(e, t, n) {
			e.exports = {
				EditForm: "_1iFkUjPC4J8jzWrDthDpcv",
				editForm: "_1iFkUjPC4J8jzWrDthDpcv",
				LinkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				linkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				Input: "_2rXi0UvEKRcI3WdI52LAx1",
				input: "_2rXi0UvEKRcI3WdI52LAx1",
				Label: "_2olni9Ucr8-t8W62nTkY_",
				label: "_2olni9Ucr8-t8W62nTkY_",
				HintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				hintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				InvalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				invalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				SubmitButton: "_8a_rf-Al8VNnUQ42WlvF",
				submitButton: "_8a_rf-Al8VNnUQ42WlvF"
			}
		},
		"./src/reddit/components/RichTextEditor/OrderedList/index.m.less": function(e, t, n) {
			e.exports = {
				OrderedListWrapper: "_1QXegNe8bOemD558m-vc9t",
				orderedListWrapper: "_1QXegNe8bOemD558m-vc9t"
			}
		},
		"./src/reddit/components/RichTextEditor/Paragraph/index.m.less": function(e, t, n) {
			e.exports = {
				ParagraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O",
				paragraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O"
			}
		},
		"./src/reddit/components/RichTextEditor/TextRendering/index.m.less": function(e, t, n) {
			e.exports = {
				H1: "_15ThA3NFuzpQTnPu0I3QKj",
				h1: "_15ThA3NFuzpQTnPu0I3QKj",
				H2: "_3R5icAd6cRzwpq-yhvQUoW",
				h2: "_3R5icAd6cRzwpq-yhvQUoW",
				H3: "_3UxnA7bFPnKoS0rKMO1UYe",
				h3: "_3UxnA7bFPnKoS0rKMO1UYe",
				H4: "_10CFPbxVR0HQhyRBkeExmO",
				h4: "_10CFPbxVR0HQhyRBkeExmO",
				H5: "_3bidJE2WceaRjyBA8LLfp3",
				h5: "_3bidJE2WceaRjyBA8LLfp3",
				H6: "_27N6aQ0-d-ntRM1JkDwGg7",
				h6: "_27N6aQ0-d-ntRM1JkDwGg7"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less": function(e, t, n) {
			e.exports = {
				FormatterButton: "alPx0QCb4Fws5307SrGWu",
				formatterButton: "alPx0QCb4Fws5307SrGWu",
				enabled: "_1H0LLEwUP5ys6cgxr9KhMa",
				active: "_32EiQr-Px2GJvCfigwwmuK"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				c = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less"),
				l = n.n(c);
			const d = e => {
				e.preventDefault(), e.stopPropagation()
			};
			t.a = i.a.wrapped(e => {
				const {
					active: t,
					className: n,
					disabledTooltip: o,
					enabled: i = !0,
					tooltip: c,
					Icon: u,
					onClick: p,
					tooltipBelow: m,
					children: h
				} = e;
				return s.a.createElement("div", {
					"aria-label": c,
					"aria-selected": t,
					className: Object(r.a)(l.a.button, n, {
						[l.a.active]: !!t,
						[l.a.enabled]: i
					}),
					onMouseDown: d,
					onClick: function(e) {
						d(e), i && p && p(e)
					},
					role: "button",
					tabIndex: -1
				}, s.a.createElement(a.a, {
					text: (i ? c : o) || "",
					tooltipContentClass: e.tooltipContentClass,
					renderBelow: m
				}), u ? s.a.createElement(u, null) : null, h)
			}, "FormatterButton", l.a)
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				loadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				Text: "EVdFfF5K7kZFMaYpSHbLe",
				text: "EVdFfF5K7kZFMaYpSHbLe",
				Button: "_1Mg8ZhclDuQlkzEqVU21qu",
				button: "_1Mg8ZhclDuQlkzEqVU21qu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/app/strings/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/PostCreationForm/DivButton/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/selectors/editorContent.ts"),
				p = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				m = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less"),
				h = n.n(m);
			const b = Object(a.e)("postCreation.toolbar.markdownMode"),
				g = Object(a.e)("postCreation.toolbar.switchToMarkdown"),
				f = c.a.wrapped(d.a, "LoadingIcon", h.a),
				x = c.a.span("Text", h.a),
				C = c.a.wrapped(l.a, "Button", h.a),
				E = Object(i.c)({
					isConverting: (e, t) => Object(u.a)(e, t.draftKey)
				}),
				y = Object(r.b)(E);
			t.a = y(e => {
				const t = b(e.language);
				return s.a.createElement(C, {
					"aria-label": t,
					tabIndex: -1,
					className: e.className,
					onClick: e.onClick
				}, e.isConverting && s.a.createElement(f, {
					sizePx: 12
				}), !e.shouldHideTooltip && s.a.createElement(p.a, {
					text: t
				}), s.a.createElement(x, null, g(e.language)))
			})
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less": function(e, t, n) {
			e.exports = {
				ImageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				imageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				VideoIcon: "uo_2BSPFse-IQNQbclyKb",
				videoIcon: "uo_2BSPFse-IQNQbclyKb",
				HiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu",
				hiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_3UAl61hrkRAXX5JQ6m_q8R",
				icon: "_3UAl61hrkRAXX5JQ6m_q8R"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/app/strings/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/icons/svgs/FormattingBlockQuotes/index.m.less"),
				d = n.n(l);
			var u = e => s.a.createElement("svg", {
					className: Object(c.a)(d.a.icon, e.className),
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("polygon", {
					points: "8.63 4 5.36 4 2 9.8 2 16 9.2 16 9.2 9.24 6.75 9.24 8.63 4"
				}), s.a.createElement("polygon", {
					points: "15.56 9.24 17.39 4 14.16 4 10.8 9.8 10.8 16 18 16 18 9.24 15.56 9.24"
				})),
				p = n("./src/reddit/icons/svgs/FormattingBold/index.tsx"),
				m = n("./src/reddit/icons/svgs/FormattingCodeBlock/index.m.less"),
				h = n.n(m);
			var b = e => s.a.createElement("svg", {
					className: Object(c.a)(h.a.icon, e.className),
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "M15,2H13a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1V15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V5A3,3,0,0,0,15,2Z"
				}), s.a.createElement("path", {
					d: "M2.79,5a.71.71,0,0,0,.53-.2.74.74,0,0,0,.19-.54V4.08l0-.48H5.07V8.4H4.9a1,1,0,0,0-.69.18A.79.79,0,0,0,4,9.2a.79.79,0,0,0,.21.61A1,1,0,0,0,4.9,10H7.1a1,1,0,0,0,.69-.19A.79.79,0,0,0,8,9.2a.78.78,0,0,0-.21-.61A1,1,0,0,0,7.1,8.4H6.93V3.6H8.44l0,.48a1.19,1.19,0,0,0,.18.72.7.7,0,0,0,.56.2.75.75,0,0,0,.59-.2A1,1,0,0,0,10,4.14V4.08L9.93,2.9q0-.64-.18-.77A1.06,1.06,0,0,0,9.11,2H2.89a1.06,1.06,0,0,0-.63.13q-.16.13-.18.77L2,4.08v.06a.94.94,0,0,0,.19.65A.78.78,0,0,0,2.79,5Z"
				})),
				g = n("./src/reddit/icons/svgs/FormattingHeading/index.m.less"),
				f = n.n(g);
			var x = e => s.a.createElement("svg", {
					className: Object(c.a)(f.a.icon, e.className),
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("polygon", {
					points: "6.57 3 6.57 5.57 10.73 5.57 10.73 17 13.82 17 13.82 5.57 18 5.57 18 3 6.57 3"
				}), s.a.createElement("polygon", {
					points: "2 9.65 4.68 9.65 4.68 17 6.66 17 6.66 9.65 9.35 9.65 9.35 8 2 8 2 9.65"
				})),
				C = n("./src/reddit/icons/svgs/FormattingItalics/index.tsx"),
				E = n("./src/reddit/icons/svgs/FormattingMonospace/index.tsx"),
				y = n("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				v = n("./src/reddit/icons/svgs/FormattingSpoiler/index.tsx"),
				O = n("./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx"),
				j = n("./src/reddit/icons/svgs/FormattingSuperscript/index.tsx"),
				S = n("./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx"),
				T = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less"),
				k = n.n(T);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			n.d(t, "f", (function() {
				return I
			})), n.d(t, "b", (function() {
				return H
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "j", (function() {
				return V
			})), n.d(t, "g", (function() {
				return z
			})), n.d(t, "i", (function() {
				return q
			})), n.d(t, "k", (function() {
				return G
			})), n.d(t, "d", (function() {
				return J
			})), n.d(t, "l", (function() {
				return Z
			})), n.d(t, "h", (function() {
				return Q
			})), n.d(t, "a", (function() {
				return X
			})), n.d(t, "c", (function() {
				return Y
			}));
			const _ = e => i.a.wrapped(e, "Icon", k.a),
				I = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return n => {
						const o = _(e);
						return s.a.createElement(o, w({}, n, {
							style: {
								padding: t
							}
						}))
					}
				},
				P = I(u),
				M = I(p.a),
				R = I(b),
				N = I(x),
				L = I(C.a),
				D = I(E.a),
				F = I(y.a),
				B = I(v.a, 1),
				A = I(O.a),
				K = I(j.a),
				U = I(S.a),
				H = {
					type: "style",
					name: "bold",
					Icon: M,
					style: a.k.BOLD,
					tooltipTranslation: Object(r.e)("postCreation.toolbar.bold")
				},
				W = {
					type: "style",
					name: "italics",
					Icon: L,
					style: a.k.ITALIC,
					tooltipTranslation: Object(r.e)("postCreation.toolbar.italics")
				},
				V = {
					type: "style",
					name: "strikethrough",
					Icon: A,
					style: a.k.STRIKETHROUGH,
					tooltipTranslation: Object(r.e)("postCreation.toolbar.strikethrough")
				},
				z = {
					type: "style",
					name: "inline_code",
					Icon: D,
					style: a.k.MONOSPACE,
					tooltipTranslation: Object(r.e)("postCreation.toolbar.monospace")
				},
				q = {
					type: "style",
					name: "spoiler",
					Icon: B,
					style: a.k.SPOILER,
					tooltipTranslation: Object(r.e)("postCreation.toolbar.spoiler")
				},
				G = {
					type: "style",
					name: "superscript",
					Icon: K,
					style: a.k.SUPERSCRIPT,
					tooltipTranslation: Object(r.e)("postCreation.toolbar.superscript")
				},
				J = {
					type: "block",
					name: "heading",
					Icon: N,
					block: a.b.H1,
					tooltipTranslation: Object(r.e)("postCreation.toolbar.heading")
				},
				Z = {
					type: "block",
					name: "unordered_list",
					Icon: U,
					block: a.i.UNORDERED,
					tooltipTranslation: Object(r.e)("postCreation.toolbar.unorderedList")
				},
				Q = {
					type: "block",
					name: "ordered_list",
					Icon: F,
					block: a.i.ORDERED,
					tooltipTranslation: Object(r.e)("postCreation.toolbar.orderedList")
				},
				X = {
					type: "block",
					name: "block_quote",
					Icon: P,
					block: a.e,
					tooltipTranslation: Object(r.e)("postCreation.toolbar.blockQuote")
				},
				Y = {
					type: "block",
					name: "code_block",
					Icon: R,
					block: a.f,
					tooltipTranslation: Object(r.e)("postCreation.toolbar.codeBlock")
				}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.m.less": function(e, t, n) {
			e.exports = {
				toolbarContent: "_2vR2-7URvDAFSwQjhcvJ7m",
				isSticky: "r7zyyy152ZTdiHhea0cIj",
				tooltip: "dMXy0l6Saub8-fPDkQvGC",
				SectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				sectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				Spacer: "uoedn0efWwCxoQUIxsJY3",
				spacer: "uoedn0efWwCxoQUIxsJY3"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/app/strings/index.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				d = n("./src/reddit/icons/svgs/FormattingTable/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				m = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				h = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				b = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				g = n("./src/reddit/components/RichTextEditor/table/helpers.ts");
			var f = (e, t, n) => {
					if (Object(m.v)(o.RichUtils.getCurrentBlockType(e))) return e;
					const s = e.getCurrentContent(),
						r = e.getSelection().getEndKey(),
						i = Object(g.l)(t, n),
						a = Object(b.f)(s, r, i, b.a.after, !0),
						c = o.EditorState.push(e, a, h.e);
					return o.EditorState.forceSelection(c, o.SelectionState.createEmpty(i[0].getKey()))
				},
				x = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				C = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				E = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				y = n("./src/lib/constants/index.ts"),
				v = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				O = n("./src/reddit/icons/svgs/Video/index.tsx"),
				j = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less"),
				S = n.n(j);
			const T = Object(i.e)("postCreation.toolbar.image"),
				k = Object(i.e)("postCreation.toolbar.video"),
				w = c.a.wrapped(v.a, "ImageIcon", S.a),
				_ = c.a.wrapped(O.a, "VideoIcon", S.a),
				I = c.a.input("HiddenInput", S.a);
			class P extends s.Component {
				constructor() {
					super(...arguments), this.hiddenInputEl = null, this.onFileInputChange = e => {
						e.stopPropagation();
						const t = this.hiddenInputEl;
						t.files && t.files.length && (this.props.onFilesInput(Array.from(t.files)), t.value = "")
					}, this.onButtonClick = () => {
						this.hiddenInputEl && this.hiddenInputEl.click(), this.props.onClick()
					}, this.onHiddenInputClick = e => e.stopPropagation()
				}
				render() {
					const {
						controlsState: e,
						destSubreddit: t,
						language: n,
						type: o
					} = this.props, s = "image" === o, i = e.blocks[m.a];
					let a = !0;
					if (t && t.allowedPostTypes) {
						const {
							images: e,
							videos: n
						} = t.allowedPostTypes;
						a = s ? e : n
					}
					return r.a.createElement(x.a, {
						Icon: s ? w : _,
						active: i.isActive,
						enabled: i.isEnabled && a,
						tooltip: (s ? T : k)(n),
						onClick: this.onButtonClick
					}, r.a.createElement(I, {
						multiple: !0,
						innerRef: e => this.hiddenInputEl = e,
						onChange: this.onFileInputChange,
						onClick: this.onHiddenInputClick,
						type: "file",
						accept: Array.from(s ? y.a : y.b).join()
					}))
				}
			}
			var M = n("./src/reddit/components/RichTextEditor/Toolbar/index.m.less"),
				R = n.n(M);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			n.d(t, "c", (function() {
				return K
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "f", (function() {
				return V
			})), n.d(t, "h", (function() {
				return z
			})), n.d(t, "e", (function() {
				return q
			})), n.d(t, "a", (function() {
				return G
			})), n.d(t, "d", (function() {
				return J
			})), n.d(t, "b", (function() {
				return Z
			}));
			const L = Object(i.e)("postCreation.toolbar.table"),
				D = Object(i.e)("postCreation.toolbar.link"),
				F = Object(C.f)(l.a),
				B = Object(C.f)(d.a),
				A = e => r.a.createElement(x.a, N({}, e, {
					tooltipContentClass: R.a.tooltip
				})),
				K = c.a.div("SectionSpacer", R.a),
				U = c.a.div("Spacer", R.a),
				H = (e, t, n, s, i, a) => {
					const {
						name: c,
						Icon: l,
						tooltipTranslation: d
					} = e, p = d(a);
					if ("style" === e.type) {
						const {
							style: o
						} = e;
						return r.a.createElement(A, {
							Icon: l,
							active: t.styles[o].isActive,
							enabled: t.styles[o].isEnabled,
							key: c,
							tooltip: p,
							onClick: () => {
								const e = Object(u.c)(o, n);
								s(e), i(c, ((e, t) => e.getCurrentInlineStyle().contains(t))(e, o))
							}
						})
					} {
						const {
							block: a
						} = e;
						return r.a.createElement(A, {
							Icon: l,
							active: t.blocks[a].isActive,
							enabled: t.blocks[a].isEnabled,
							key: c,
							tooltip: p,
							onClick: () => {
								const e = Object(u.i)(a, n);
								s(e), i(c, ((e, t) => o.RichUtils.getCurrentBlockType(e) === t)(e, a))
							}
						})
					}
				},
				W = (e, t, n, o, s, r) => e.map(e => H(e, t, n, o, s, r)),
				V = [C.b, C.e],
				z = [C.j, C.g, C.k, C.i],
				q = [C.d, C.l, C.h, C.a, C.c],
				G = e => r.a.createElement(A, {
					Icon: F,
					active: e.controlsState.link.isActive,
					enabled: e.controlsState.link.isEnabled,
					tooltip: D(e.language),
					onClick: () => {
						e.onLinkButtonClick(), e.trackOnClick("link", !0)
					}
				}),
				J = e => r.a.createElement(A, {
					Icon: B,
					active: e.controlsState.blocks[m.l].isActive,
					enabled: e.controlsState.blocks[m.l].isEnabled,
					tooltip: L(e.language),
					onClick: () => {
						e.onChange(f(e.editorState, 3, 2)), e.trackOnClick("table", !0)
					}
				}),
				Z = e => {
					const {
						className: t,
						allowMediaUploads: n = !1,
						destSubreddit: o,
						editorState: s,
						isOverlay: i,
						language: c,
						onChange: l,
						onFilesSelect: d,
						readOnly: u,
						trackOnClick: m,
						onLinkButtonClick: h,
						onMarkdownButtonClick: b
					} = e, g = Object(p.a)(s);
					return u && Object(p.b)(g), r.a.createElement("div", {
						className: Object(a.a)(R.a.toolbarContent, t, {
							[R.a.isSticky]: !i
						})
					}, W(V, g, s, l, m, c), r.a.createElement(G, {
						language: c,
						controlsState: g,
						trackOnClick: m,
						onLinkButtonClick: h
					}), W(z, g, s, l, m, c), r.a.createElement(K, null), W(q, g, s, l, m, c), r.a.createElement(K, null), r.a.createElement(J, {
						language: c,
						controlsState: g,
						editorState: s,
						trackOnClick: m,
						onChange: l
					}), n && r.a.createElement(P, {
						destSubreddit: o,
						language: c,
						controlsState: g,
						onClick: () => m("image_upload"),
						onFilesInput: d,
						type: "image"
					}), n && r.a.createElement(P, {
						destSubreddit: o,
						language: c,
						controlsState: g,
						onClick: () => m("video_upload"),
						onFilesInput: d,
						type: "video"
					}), r.a.createElement(U, null), r.a.createElement(E.a, {
						language: c,
						onClick: b
					}))
				}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s() {
				const e = window.getSelection();
				if (!e.rangeCount) return null;
				const t = Object(o.getVisibleSelectionRect)(window);
				return t || (!t && e.focusNode && e.focusNode === e.anchorNode ? e.focusNode.getBoundingClientRect() : null)
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltipBox: "tVQ1dB4n0mAWdcQNxFq-K",
				dropdown: "_1akkpO3lymdoWGIc5tjIpm",
				triangle: "_2O2U-Vhc1mg9O7DOwp50Aa",
				triangleBack: "_3IfYYXUMUzn2OvoiMUNcaQ",
				triangleFront: "_3CtwSTtkmKXvzDo3TmCp9C",
				triangleBelow: "_1churYJpAwcb-tf0k1c46F"
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/index.tsx"),
				a = n("./src/reddit/helpers/dom/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/Tooltip/index.m.less"),
				l = n.n(c);
			const d = 8,
				u = 16,
				p = 15 + u / 2;
			var m;
			! function(e) {
				e[e.None = 0] = "None", e[e.Above = 1] = "Above", e[e.Below = 2] = "Below"
			}(m || (m = {}));
			const h = e => {
				let {
					isBelow: t = !1,
					style: n
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(l.a.triangle, {
						[l.a.triangleBelow]: t
					}),
					style: n
				}, s.a.createElement("div", {
					className: l.a.triangleBack
				}), s.a.createElement("div", {
					className: l.a.triangleFront
				}))
			};
			class b extends o.Component {
				constructor(e) {
					super(e), this.containerRef = null, this.updateContainerRef = e => this.containerRef = e, this.setTargetPosition = e => {
						e ? this.updatePositioning(e) : this.setState({
							positioning: null
						})
					}, this.state = {
						positioning: null
					}
				}
				updatePositioning(e) {
					if (!this.containerRef) return;
					const t = this.containerRef.offsetWidth,
						n = this.containerRef.offsetHeight,
						o = this.state.positioning;
					if (!e) {
						if (!o) return;
						if (o.tooltipWidth === t && o.tooltipHeight === n) return
					}
					const s = e ? e.bottom : o.target.bottom,
						r = e ? e.top : o.target.top,
						i = e ? e.left : o.target.left,
						c = Object(a.e)(this.containerRef);
					let l, d, u;
					if (c) {
						const e = c.getBoundingClientRect();
						l = e.bottom - (s || 0), d = i - e.left + c.scrollLeft, u = r - e.top + c.scrollTop
					} else {
						const e = document.documentElement,
							t = window.pageYOffset || e.scrollTop;
						d = i + (window.pageXOffset || e.scrollLeft), u = r + t
					}
					const p = {
						target: {
							top: r,
							left: i
						},
						tooltipWidth: t,
						tooltipHeight: n,
						tooltip: {
							top: u,
							left: d,
							bottom: l
						}
					};
					this.adjustPositionForTriangle(p, c), this.setState({
						positioning: p
					})
				}
				adjustPositionForTriangle(e, t) {
					const {
						trianglePlacement: n
					} = this.props;
					if (!n) return;
					const o = t ? t.offsetWidth : document.documentElement.offsetWidth,
						s = o ? Math.max(e.tooltip.left + e.tooltipWidth - o, 0) : 0;
					e.tooltip.left -= s + p;
					const r = s + p - u / 2;
					let i;
					n === m.Above ? (e.tooltip.top += d, i = -d) : (e.tooltip.top -= e.tooltipHeight + d, i = e.tooltipHeight), e.triangle = {
						top: i,
						left: r
					}
				}
				componentDidUpdate(e, t) {
					e.targetPosition !== this.props.targetPosition ? this.setTargetPosition(this.props.targetPosition || null) : this.updatePositioning()
				}
				componentDidMount() {
					this.setTargetPosition(this.props.targetPosition || null), this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(this.setTargetPosition)
				}
				componentWillUnmount() {
					this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(null)
				}
				render() {
					const {
						aboveParent: e,
						dropdown: t,
						trianglePlacement: n
					} = this.props, {
						positioning: o
					} = this.state, a = o && void 0 !== o.triangle && s.a.createElement(h, {
						isBelow: n === m.Below,
						style: {
							top: o.triangle.top + "px",
							left: o.triangle.left + "px"
						}
					});
					let c = s.a.createElement("div", {
						className: Object(r.a)(l.a.tooltipBox, this.props.className, {
							[l.a.dropdown]: t
						}),
						style: o ? Object.assign({
							left: o.tooltip.left
						}, e ? {
							bottom: o.tooltip.bottom
						} : {
							top: o.tooltip.top
						}) : {},
						ref: this.updateContainerRef
					}, o && this.props.children && s.a.createElement(s.a.Fragment, null, a, this.props.children));
					return this.props.usePortal && (c = Object(i.d)(c, this.props.portalContainer || document.body)), c
				}
			}
		},
		"./src/reddit/components/RichTextEditor/UnorderedList/index.m.less": function(e, t, n) {
			e.exports = {
				UnorderedListWrapper: "vXDC2CysyRNVq3lFirKDs",
				unorderedListWrapper: "vXDC2CysyRNVq3lFirKDs"
			}
		},
		"./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			const o = "bold",
				s = "italic",
				r = "underline",
				i = "undo",
				a = "backspace",
				c = "delete",
				l = "split-block",
				d = "adjust-depth"
		},
		"./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			}));
			const o = "backspace-character",
				s = "insert-fragment",
				r = "insert-characters",
				i = "change-block-data",
				a = "change-block-type",
				c = "remove-range"
		},
		"./src/reddit/components/RichTextEditor/editorStateTransforms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "a", (function() {
				return y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				c = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/styles.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const u = (e, t) => {
					return t.getSelection().isCollapsed() ? Object(l.a)(e, t) : Object(l.b)(e, t)
				},
				p = (e, t) => {
					const n = t.getCurrentContent(),
						s = t.getSelection(),
						r = s.getEndKey(),
						c = o.RichUtils.getCurrentBlockType(t) === e ? d.n : e;
					let u = t,
						p = o.Modifier.setBlockType(n, s, c);
					const m = n.getBlockForKey(r).getLength();
					if (Object(d.r)(c) || Object(d.q)(c)) {
						const e = o.SelectionState.createEmpty(s.getStartKey()).merge({
							focusKey: s.getEndKey(),
							focusOffset: m
						});
						u = Object(l.c)(u), p = ((e, t) => {
							const n = Object.keys(d.k).reduce((e, n) => o.Modifier.removeInlineStyle(e, t, d.k[n]), e);
							return Object(a.h)(n, t)
						})(p, e)
					}
					if (Object(d.q)(c) || Object(d.p)(c)) {
						const e = p.getBlockAfter(r);
						if (!e || e.getType() !== c && e.getType() !== d.n) {
							const e = o.SelectionState.createEmpty(r).merge({
								anchorOffset: m,
								focusOffset: m
							});
							p = o.Modifier.splitBlock(p, e), p = o.Modifier.setBlockType(p, p.getSelectionAfter(), d.n)
						}
					}
					return p = p.merge({
						selectionAfter: s
					}), o.EditorState.push(u, p, i.c)
				},
				m = (e, t) => {
					const n = o.Modifier.setBlockType(e, t, d.n);
					return o.Modifier.replaceText(n, t, "", Object(s.OrderedSet)([]))
				},
				h = (e, t) => o.EditorState.forceSelection(e, o.SelectionState.createEmpty(t)),
				b = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						r = c.d(t, n),
						a = r.getBlockAfter(n.getEndKey()),
						l = o.SelectionState.createEmpty(a.getKey()),
						u = o.Modifier.replaceText(o.Modifier.setBlockType(r, l, d.n), l, "", Object(s.OrderedSet)([])),
						p = o.EditorState.push(e, u, i.d);
					return h(p, a.getKey())
				},
				g = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						s = t.getBlockForKey(n.getEndKey()),
						i = s.set("depth", Math.max(s.getDepth() - 1, 0)),
						a = t.merge({
							blockMap: t.getBlockMap().merge({
								[s.getKey()]: i
							})
						});
					return o.EditorState.push(e, a, r.a)
				},
				f = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						s = t.getBlockForKey(n.getEndKey()).getKey(),
						r = o.EditorState.push(e, m(t, n), i.c);
					return h(r, s)
				},
				x = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						s = t.getBlockForKey(n.getEndKey()),
						r = s.getKey(),
						a = t.getBlockBefore(r).getKey(),
						c = o.SelectionState.createEmpty(r).merge({
							focusOffset: s.getText().length
						}),
						l = o.EditorState.push(e, m(((e, t) => {
							const n = e.getBlockMap().remove(t);
							return e.merge({
								blockMap: n
							})
						})(t, a), c), i.c);
					return h(l, r)
				},
				C = e => {
					const t = c.d(e.getCurrentContent(), e.getSelection());
					return o.EditorState.push(e, t, r.f)
				},
				E = e => {
					const t = c.a(e.getCurrentContent(), e.getSelection(), "\n");
					return o.EditorState.push(e, t, i.d)
				},
				y = e => {
					const t = e.getSelection(),
						n = c.a(e.getCurrentContent(), t, " ");
					return o.EditorState.push(e, n, i.d)
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/decorator.m.less": function(e, t, n) {
			e.exports = {
				emote: "Q7hqnjoPSXm7QyvW8qf57",
				sticker: "_1WD0TSe2_gY29FXmFjPCza"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "d", (function() {
				return E
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/lib/memoizeByReference/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				d = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = "⬛";

			function m(e, t) {
				return e.createEntity(a.a.EMOTE, "IMMUTABLE", t)
			}

			function h(e, t) {
				let n = t.getCurrentContent();
				const s = (n = m(n, e)).getLastCreatedEntityKey();
				n = Object(d.b)(n, t.getSelection(), p, void 0, s);
				const r = o.EditorState.push(t, n, i.d);
				return o.EditorState.forceSelection(r, r.getSelection())
			}

			function b(e, t) {
				if (t.getStartKey() !== t.getEndKey()) return !1;
				const n = e.getBlockForKey(t.getEndKey()).getType();
				return !(Object(u.q)(n) || Object(u.r)(n) || Object(u.t)(n))
			}

			function g(e, t) {
				const n = Object(c.a)(e, t, t => {
					const n = t.getEntity();
					return !!n && e.getEntity(n).getType() === a.a.EMOTE
				});
				let s;
				for (; s = n.pop();) {
					const t = o.SelectionState.createEmpty(s.blockKey).merge({
						anchorOffset: s.start,
						focusOffset: s.end
					});
					e = o.Modifier.removeRange(e, t, "backward")
				}
				return e
			}

			function f(e) {
				const t = e.getSelection();
				if (!t.isCollapsed()) return null;
				const n = e.getCurrentContent().getBlockForKey(t.getFocusKey()),
					o = n.getText(),
					s = n.getCharacterList();
				let r = t.getFocusOffset() - 1;
				const i = [];
				for (; r >= 0;) {
					const e = o[r],
						t = s.get(r),
						n = t && t.getEntity();
					if (!e.trim().length || n) return null;
					if (":" === e && i.length > 0) break;
					i.unshift(e), r--
				}
				return r >= 0 && i.length ? i.join("").toLowerCase() : null
			}

			function x(e, t, n) {
				e.findEntityRanges(e => {
					const t = e.getEntity();
					return !!t && n.getEntity(t).getType() === a.a.EMOTE
				}, t)
			}
			const C = Object(r.a)(e => {
				if (e.getBlockMap().size > 1) return !1;
				const t = e.getFirstBlock();
				let n = 0;
				return x(t, () => n++, e), n <= 3 && n === t.getLength()
			});

			function E(e, t) {
				if (C(e.getCurrentContent()) === C(t.getCurrentContent())) return e;
				const n = e.getCurrentContent(),
					r = n.getFirstBlock();
				return o.EditorState.set(e, {
					currentContent: o.Modifier.mergeBlockData(n, Object(l.b)(r), Object(s.Map)({
						_emote_modified: new Date
					}))
				})
			}
		},
		"./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s(e, t, n, s) {
				let r = e.getCharacterList();
				return r = r.withMutations(e => {
					for (let r = t; r < n; r++) e.set(r, o.CharacterMetadata.applyEntity(e.get(r), s))
				}), e.set("characterList", r)
			}
		},
		"./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function s(e, t, n, s, r) {
				const i = e.createEntity(n.getType(), n.getMutability(), n.getData()),
					a = e.getLastCreatedEntityKey();
				return [i, Object(o.a)(t, s, r, a)]
			}

			function r(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const o = new Map;
				let r = t,
					i = e;
				return t.forEach((e, t) => {
					e && t && e.findEntityRanges(e => !!e.getEntity(), (n, s) => {
						const r = e.getEntityAt(n),
							i = o.get(r) || [];
						i.push({
							start: n,
							end: s,
							blockKey: t
						}), o.set(r, i)
					})
				}), o.forEach((t, o) => {
					const a = e.getEntity(o);
					(n ? t.slice(1) : t).forEach(e => {
						let {
							start: t,
							end: n,
							blockKey: o
						} = e;
						const c = r.get(o),
							[l, d] = s(i, c, a, t, n);
						i = l, r = r.set(o, d)
					})
				}), [i, r]
			}
		},
		"./src/reddit/components/RichTextEditor/entity/entityTypes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const o = {
					COMMENT_LINK: "COMMENT_LINK",
					EMOTE: "EMOTE",
					LINK: "LINK",
					POST_LINK: "POST_LINK",
					SUBREDDIT_LINK: "SUBREDDIT_LINK",
					USER_LINK: "USER_LINK",
					USER_MENTION: "USER_MENTION"
				},
				s = new Set([o.COMMENT_LINK, o.LINK, o.POST_LINK, o.SUBREDDIT_LINK, o.USER_LINK, o.USER_MENTION]),
				r = (e, t) => {
					const n = e && t.getEntity(e);
					return !!n && (e => s.has(e))(n.getType())
				}
		},
		"./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");

			function s(e, t, n) {
				const s = [];
				return Object(o.a)(e, t, (e, o) => {
					const r = t.getStartKey() === o ? t.getStartOffset() : 0,
						i = t.getEndKey() === o ? t.getEndOffset() : e.getLength();
					e.findEntityRanges(n, (t, n) => {
						r <= n && i >= t && s.push({
							blockKey: o,
							entityKey: e.getEntityAt(t),
							start: t,
							end: n
						})
					})
				}), s
			}
		},
		"./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s(e, t) {
				const n = t.getFocusKey();
				if (n !== t.getAnchorKey()) return;
				const s = e.getBlockForKey(n),
					r = t.getStartOffset(),
					i = t.getEndOffset(),
					a = s.getEntityAt(i) || (i > 0 ? s.getEntityAt(i - 1) : null);
				if (!a) return;
				let c, l;
				if (s.findEntityRanges(e => e.getEntity() === a, (e, t) => {
						e <= r && i <= t && (c = e, l = t)
					}), "number" != typeof c || "number" != typeof l) return;
				const d = s.getText().slice(c, l);
				return {
					entitySelection: o.SelectionState.createEmpty(n).merge({
						anchorOffset: c,
						focusOffset: l
					}),
					entityKey: a,
					entityText: d
				}
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/decorator.m.less": function(e, t, n) {
			e.exports = {
				RegularLink: "_1FRfMxEAy__7c8vezYv9qP",
				regularLink: "_1FRfMxEAy__7c8vezYv9qP"
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/helpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "e", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/es6.regexp.match.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./src/lib/linkMatchers/index.ts"),
				r = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				d = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = [a.a.SUBREDDIT_LINK, a.a.USER_LINK, a.a.USER_MENTION],
				m = [...p, a.a.LINK];

			function h(e, t, n) {
				e.findEntityRanges(e => {
					const t = e.getEntity();
					return !!t && m.includes(n.getEntity(t).getType())
				}, t)
			}
			const b = e => {
					const t = s.a.match(e);
					if (t && t.length && t[0]) {
						const {
							schema: e,
							url: n
						} = t[0];
						return {
							linkPrefix: e,
							url: n
						}
					}
					return {
						linkPrefix: "",
						url: ""
					}
				},
				g = Object(i.a)((function(e) {
					const t = e.getCurrentContent(),
						n = e.getSelection();
					if (!n.isCollapsed()) return;
					if (Object(u.q)(t.getBlockForKey(n.getStartKey()).getType())) return;
					const r = n.getFocusKey(),
						i = t.getBlockForKey(r),
						a = n.getFocusOffset(),
						c = i.getText(),
						l = c.lastIndexOf(" ", a - 1) + 1,
						p = c.slice(l, a);
					if (!p) return;
					const m = s.e.match(p);
					if (!m) return;
					const h = m[m.length - 1],
						b = l + h.index,
						g = l + h.lastIndex;
					let f = -1;
					if (i.findEntityRanges(e => !!e.getEntity(), (e, t) => {
							e < a && (f = t)
						}), f >= b) return;
					return i.getCharacterList().slice(b, g).find(d.b) ? void 0 : {
						selection: o.SelectionState.createEmpty(r).merge({
							anchorOffset: b,
							focusOffset: g
						}),
						url: h.url
					}
				}));

			function f(e, t, n) {
				const s = e.getSelection();
				let r = e.getCurrentContent();
				const i = (r = r.createEntity(a.a.LINK, "MUTABLE", {
					url: n
				})).getLastCreatedEntityKey();
				return r = (r = o.Modifier.applyEntity(r, t, i)).merge({
					selectionAfter: s
				}), o.EditorState.push(e, r, "apply-entity")
			}
			const x = Object(i.a)((function(e) {
				const t = e.getCurrentContent(),
					n = Object(l.a)(t, e.getSelection());
				if (!n) return;
				const o = t.getEntity(n.entityKey);
				if (o.getType() !== a.a.LINK) return;
				const {
					url: s
				} = o.getData();
				return Object.assign({
					url: s
				}, n)
			}));
			const C = Object(i.a)((function(e) {
				const t = e.getCurrentContent(),
					n = e.getSelection(),
					o = Object(l.a)(t, n);
				if (!o) return;
				const s = n.getFocusOffset(),
					r = t.getEntity(o.entityKey),
					{
						linkPrefix: i
					} = b(o.entityText);
				if (!p.includes(r.getType()) || !o.entityText.startsWith(i) || s - o.entitySelection.getStartOffset() < i.length) return;
				const a = o.entityText.slice(i.length);
				return Object.assign({
					internalName: a
				}, o)
			}));

			function E(e, t, n, s) {
				let r = "apply-entity",
					i = e.getCurrentContent(),
					c = e;
				const d = Object(l.a)(i, t);
				if (n)
					if (d) {
						const e = i.getEntity(d.entityKey),
							{
								url: t
							} = e.getData();
						t !== n && (i = i.mergeEntityData(d.entityKey, {
							url: n
						})), void 0 !== s && d.entityText !== s && (i = o.Modifier.replaceText(i, d.entitySelection, s, void 0, d.entityKey), r = "insert-characters")
					} else {
						if (void 0 === s) throw new Error("New link display text must be provided!");
						const e = (i = i.createEntity(a.a.LINK, "MUTABLE", {
							url: n
						})).getLastCreatedEntityKey();
						i = o.Modifier.replaceText(i, t, s, void 0, e), r = "insert-characters"
					}
				else i = (i = o.Modifier.applyEntity(i, t, "")).merge({
					selectionAfter: e.getSelection()
				});
				return i === e.getCurrentContent() ? e : c = o.EditorState.push(c, i, r)
			}

			function y(e, t) {
				const n = C(e);
				if (!n) return e;
				const {
					linkPrefix: s,
					url: i
				} = b(n.entityText), a = s === r.d.mention ? r.d.profile : s, c = "".concat(a).concat(t), l = n.entitySelection.getStartOffset() + c.length;
				let d = E(e, n.entitySelection, i, c);
				return d = o.EditorState.forceSelection(d, n.entitySelection.merge({
					anchorOffset: l,
					focusOffset: l
				}))
			}

			function v(e, t) {
				if (t.getStartKey() !== t.getEndKey()) return !1;
				const n = e.getBlockForKey(t.getEndKey()).getType();
				return !Object(u.q)(n) && !Object(u.t)(n) && !Object(c.a)(e, t, t => {
					const n = t.getEntity();
					return !!n && e.getEntity(n).getType() !== a.a.LINK
				}).length
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/common.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "g", (function() {
				return h
			}));
			var o, s = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(e) {
				e.before = "before", e.after = "after"
			}(o || (o = {}));
			const a = (e, t) => new s.ContentBlock(Object.assign({
					key: e || Object(s.genKey)()
				}, t ? {
					text: t,
					characterList: Object(r.List)(Object(r.Repeat)(s.CharacterMetadata.create(), t.length))
				} : {})),
				c = e => e.props.children,
				l = e => c(e).props.block,
				d = function(e, t, n) {
					let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.after,
						c = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
						l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
					const d = [];
					let p = -1;
					if (e.getBlockMap().forEach((e, s) => {
							r === o.after && d.push(e), s === t && (d.push(...n), p = d.length - 1), r === o.before && d.push(e)
						}), p >= 0) {
						if (c) {
							const e = d[p + 1];
							e && e.getType() === i.n || d.splice(p + 1, 0, a())
						}
						if (l) {
							const e = p - n.length,
								t = d[e];
							t && t.getType() === i.n || d.splice(e + 1, 0, a())
						}
					}
					return e.merge({
						blockMap: s.BlockMapBuilder.createFromArray(d),
						selectionAfter: u(n[n.length - 1], !1, !0)
					})
				},
				u = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						o = s.SelectionState.createEmpty(e.getKey()).merge({
							hasFocus: n
						});
					return t && (o = o.merge({
						anchorOffset: e.getLength(),
						focusOffset: e.getLength()
					})), o
				},
				p = (e, t) => {
					let n = e.getBlockBefore(t),
						o = e.getBlockMap();
					return o.get(t) ? (o = o.size > 1 ? o.remove(t) : o.set(t, a(t)), n = n || o.first(), e.merge({
						blockMap: o,
						selectionAfter: u(n, !0)
					})) : e
				},
				m = (e, t) => t.querySelector('[data-block][data-offset-key="'.concat(e, '-0-0"]')),
				h = e => e.getType() === i.n && !e.getText()
		},
		"./src/reddit/components/RichTextEditor/helpers/controlsState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forEach.js"),
				s = n.n(o),
				r = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				l = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				u = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				m = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const h = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						o = {};
					s()(d.k, e => o[e] = {
						isActive: !1,
						isEnabled: !1
					});
					const i = new Set(Object.keys(o));
					if (i.delete(d.k.HIGHLIGHT), n.isCollapsed()) {
						const s = t.getBlockForKey(n.getEndKey()),
							r = s.getType();
						Object(d.q)(r) || Object(d.r)(r) || Object(d.t)(r) || i.forEach(e => o[e].isEnabled = !0), e.getCurrentInlineStyle().forEach(e => {
							e && o[e] && (o[e].isActive = !0)
						}), Object(u.i)(s) && (o[d.k.BOLD] = {
							isEnabled: !1,
							isActive: !1
						})
					} else {
						Object(m.e)(t, n).forEach(e => {
							i.delete(e), o[e] && (o[e].isActive = !0, o[e].isEnabled = !0)
						}), Object(p.a)(t, n, (e, s) => {
							if (!i.size) return !1;
							const a = n.getStartKey() === s ? n.getStartOffset() : 0,
								c = n.getEndKey() === s ? n.getEndOffset() : e.getLength(),
								l = e.getType(),
								u = e.getCharacterList();
							Object(d.q)(l) || Object(d.r)(l) || Object(d.t)(l) || Object(r.a)(u, {
								start: a,
								end: c
							}, (n, s, r, a) => {
								const c = n.getStyle(),
									l = n.getEntity(),
									d = l ? t.getEntity(l) : null;
								if (i.forEach(t => {
										const n = !o[t].isActive,
											s = Object(m.f)(c, e, d, t, n);
										s && s !== c && (o[t].isEnabled = !0, i.delete(t))
									}), !i.size) return !1
							})
						})
					}
					return o
				},
				b = e => {
					const t = {};
					return s()(d.b, n => t[n] = {
						isActive: !1,
						isEnabled: e
					}), t
				},
				g = Object(i.a)(e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						o = (e => {
							const t = e.getCurrentContent(),
								n = e.getSelection();
							let o = b(!0),
								r = null;
							if (n.isCollapsed()) r = t.getBlockForKey(n.getEndKey()).getType();
							else {
								let e = null;
								Object(p.a)(t, n, (t, n) => {
									const s = t.getType();
									return Object(d.t)(s) ? (o = b(!1), !1) : (null === e && (e = s), e !== s ? (e = null, !1) : void 0)
								}), r = e
							}
							return null !== r && ((Object(d.v)(r) || Object(d.t)(r)) && s()(o, e => {
								e.isEnabled = !1
							}), o[r].isActive = !0), o
						})(e);
					return {
						giphy: {
							isActive: !1,
							isEnabled: o[d.a].isEnabled && !Object(l.j)(t)
						},
						emote: {
							isActive: !1,
							isEnabled: Object(a.b)(t, n)
						},
						link: {
							isActive: !1,
							isEnabled: Object(c.e)(t, n)
						},
						blocks: o,
						styles: h(e)
					}
				}),
				f = e => {
					s()(e.blocks, e => {
						e.isEnabled = !1
					}), s()(e.styles, e => {
						e.isEnabled = !1
					}), e.link.isEnabled = !1
				}
		},
		"./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts": function(e, t, n) {
			"use strict";

			function o(e, t, n) {
				const o = t.getStartKey(),
					s = t.getEndKey();
				if (o === s) return void n(e.getBlockForKey(o), o);
				let r = !1;
				e.getBlockMap().forEach((e, t) => {
					if (t === o && (r = !0), !r || !e || !t) return;
					const i = n(e, t);
					return t !== s && i
				})
			}
			n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/components/RichTextEditor/helpers/modifiers.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts");

			function r(e, t) {
				const n = t.getStartKey();
				if (n !== t.getEndKey()) return;
				const o = e.getBlockForKey(n),
					r = t.getStartOffset(),
					i = t.getEndOffset(),
					a = r > 0 ? o.getEntityAt(r - 1) : null,
					c = o.getEntityAt(i);
				if (!a || !c || a !== c) return;
				const l = e.getEntity(c),
					d = o.getCharacterList().toSeq().skip(i).takeWhile(e => !!e && e.getEntity() === c).count(),
					[u, p] = Object(s.a)(e, o, l, i, i + d);
				return u.merge({
					blockMap: u.getBlockMap().set(o.getKey(), p)
				})
			}

			function i(e, t, n) {
				const s = r(e, t) || e;
				return o.Modifier.replaceWithFragment(s, t, n)
			}

			function a(e, t, n, s, i) {
				let a = e;
				return -1 !== n.indexOf("\n") && (a = r(e, t) || a), o.Modifier.replaceText(a, t, n, s, i)
			}

			function c(e, t, n, s, i) {
				let a = e;
				return -1 !== n.indexOf("\n") && (a = r(e, t) || a), o.Modifier.insertText(a, t, n, s, i)
			}

			function l(e, t) {
				const n = r(e, t) || e;
				return o.Modifier.splitBlock(n, t)
			}
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}))
		},
		"./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/forEach.js"),
				s = n.n(o);
			t.a = (e, t) => {
				const n = e.getBlocksAsArray(),
					o = t.getKey(),
					r = t.getType();
				let i = null,
					a = null,
					c = !1;
				if (s()(n, (e, t) => {
						if (c || e.getKey() !== o || (c = !0), e.getType() === r) null === i && (i = t), a = t;
						else {
							if (c) return !1;
							i = null, a = null
						}
					}), c) return a = a || 0, {
					start: i = i || 0,
					blocks: n.slice(i, a + 1)
				}
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/styles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return g
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");
			const d = Object(s.OrderedSet)([]),
				u = function(e, t, n, o) {
					let r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
					const l = t.getType();
					if (Object(a.q)(l) || Object(a.r)(l) || Object(a.t)(l)) return;
					if (o === a.k.BOLD && Object(c.i)(t)) return;
					const u = n ? n.getType() : null,
						p = u === i.a.SUBREDDIT_LINK || u === i.a.USER_LINK;
					return p && o !== a.k.SPOILER && o !== a.k.MONOSPACE || u === i.a.EMOTE ? void 0 : o === a.k.MONOSPACE || o === a.k.SPOILER ? r ? Object(s.OrderedSet)([o]) : d : (e.has(a.k.MONOSPACE) || e.has(a.k.SPOILER)) && r ? Object(s.OrderedSet)([o]) : !r || o !== a.k.SUPERSCRIPT && o !== a.k.SUBSCRIPT ? r ? e.add(o) : e.has(o) ? e.delete(o) : void 0 : e.delete(a.k.SUBSCRIPT).delete(a.k.SUPERSCRIPT).add(o)
				},
				p = (e, t) => {
					let n = null,
						o = !0;
					return Object(l.a)(e, t, (s, l) => {
						const d = s.getType(),
							u = Object(c.i)(s);
						if (u || (o = !1), Object(a.q)(d) || Object(a.r)(d) || Object(a.t)(d)) return !1;
						const p = t.getStartKey() === l ? t.getStartOffset() : 0,
							m = t.getEndKey() === l ? t.getEndOffset() : s.getLength(),
							h = s.getCharacterList();
						Object(r.a)(h, {
							start: p,
							end: m
						}, t => {
							const o = t.getEntity();
							if (o && e.getEntity(o).getType() === i.a.SUBREDDIT_LINK) return;
							let s = t.getStyle();
							return u && (s = s.add(a.k.BOLD)), null === n ? n = s.asMutable() : n.intersect(s), !(n && !n.size) && void 0
						})
					}), null === n ? [] : (o && n.delete(a.k.BOLD), n.toJS())
				},
				m = (e, t) => {
					const n = t.getCurrentContent(),
						s = t.getSelection();
					let i = n.getBlockMap();
					const c = -1 === p(n, s).indexOf(e);
					Object(l.a)(n, s, (t, l) => {
						if (!t || !l) return !1;
						const d = s.getStartKey() === l ? s.getStartOffset() : 0,
							p = s.getEndKey() === l ? s.getEndOffset() : t.getLength(),
							m = t.getCharacterList(),
							h = m.withMutations(s => {
								Object(r.a)(m, {
									start: d,
									end: p
								}, (r, i, l, d) => {
									const p = r.getStyle(),
										m = r.getEntity(),
										h = m ? n.getEntity(m) : null,
										b = u(p, t, h, e, c);
									if (b) {
										const e = ((e, t) => o.CharacterMetadata.create({
											style: t,
											entity: t.has(a.k.SPOILER) ? null : e.getEntity()
										}))(r, b);
										for (let t = l; t < d; t++) s.set(t, e)
									}
								})
							});
						if (h !== m) {
							const e = t.set("characterList", h);
							i = i.set(l, e)
						}
					});
					const d = n.merge({
						blockMap: i,
						selectionAfter: s
					});
					return o.EditorState.push(t, d, "change-inline-style")
				},
				h = (e, t) => {
					const n = t.getCurrentContent(),
						s = t.getSelection(),
						r = n.getBlockForKey(s.getStartKey()),
						i = r.getEntityAt(s.getStartOffset()),
						a = i ? n.getEntity(i) : null,
						c = t.getCurrentInlineStyle(),
						l = u(c, r, a, e, !c.has(e));
					let d = t;
					return l && (d = o.EditorState.setInlineStyleOverride(d, l)), d
				},
				b = e => o.EditorState.setInlineStyleOverride(e, d),
				g = (e, t) => {
					const n = e.getSelection(),
						o = t.getSelection();
					return n.getStartOffset() > 0 || n.getFocusKey() === o.getFocusKey() || e.getCurrentInlineStyle().isEmpty() ? e : b(e)
				}
		},
		"./src/reddit/components/RichTextEditor/index.m.less": function(e, t, n) {
			e.exports = {
				FocusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				focusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				showSubmitButton: "_3Imp2y02BMA96sEJAe9M3M",
				editorWrapper: "_2baJGEALPiEMZpWB2iWQs7",
				hasInitialHeight: "_35E-zXyMmfsLI7nv_sBvFL",
				hasInitialMinHeight: "_18GfdTZmF2EPjYSkBDE0WI",
				noBorder: "HXDWn-rmYOwqGcGtz9AKm",
				insetSubmitButton: "_3b2mbY1nb1R-z21ihISt7z",
				emptyContent: "_3cP1eCSI5AeGc6__VQ1axu",
				focusedContent: "_2O6bpyGivXLGxZ0LErKCzW"
			}
		},
		"./src/reddit/components/RichTextEditor/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = (n("./node_modules/draft-js/dist/Draft.css"), n("./node_modules/lodash/filter.js")),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/shallowequal/index.js"),
				u = n.n(d),
				p = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/fastdom/index.ts"),
				h = n("./src/lib/lessComponent.tsx"),
				b = n("./src/lib/linkMatchers/customLinks.ts"),
				g = n("./src/lib/logs/console.ts"),
				f = n("./src/telemetry/models/Media.ts"),
				x = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				C = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				E = n("./src/reddit/featureFlags/index.ts"),
				y = n("./src/reddit/helpers/trackers/postComposer.ts"),
				v = n("./src/reddit/i18n/utils.ts"),
				O = n("./src/reddit/models/PostCreationForm/index.ts"),
				j = n("./src/reddit/models/Upload/index.ts"),
				S = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const T = {
				BREAK_HEADER_ENTITY: "BREAK_HEADER_ENTITY",
				CONVERT_TO_LIST_ON_SPACE: "CONVERT_TO_LIST_ON_SPACE",
				EXEC_TABLE_ON_ENTER_HANDLER: "EXEC_TABLE_ON_ENTER_HANDLER",
				INSERT_LINE_BREAK: "INSERT_LINE_BREAK",
				LINKIFY_ON_ENTER: "LINKIFY_ON_ENTER",
				LINKIFY_ON_SPACE: "LINKIFY_ON_SPACE",
				MAKE_PLAIN_BLOCK: "MAKE_PLAIN_BLOCK",
				OPEN_LINK_TOOLTIP: "OPEN_LINK_TOOLTIP",
				REDUCE_LIST_INDENT: "REDUCE_LIST_INDENT",
				REMOVE_EXTRA_LIST_ITEM: "REMOVE_EXTRA_LIST_ITEM",
				RESET_CURRENT_AND_PREVIOUS_BLOCKS: "RESET_CURRENT_AND_PREVIOUS_BLOCKS",
				SUBMIT: "SUBMIT"
			};
			const k = e => {
					const t = e.getCurrentContent().getBlockMap();
					if (t.size > 2 || (e => !!e.reduce((function() {
							let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
								t = arguments.length > 1 ? arguments[1] : void 0;
							return e + t.getLength()
						}), 0))(t) || (e => !!e.find(e => Object(S.o)(e.getType())))(t)) return null; {
						const n = e.getSelection();
						if (n.isCollapsed() && n.getFocusKey() === t.first().getKey()) return n.getFocusKey()
					}
				},
				w = e => {
					const t = e.getCharacterList().map(e => o.CharacterMetadata.create({
						entity: e.getEntity()
					}));
					return e.set("characterList", t)
				};
			var _ = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				I = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				P = n("./node_modules/lodash/escape.js"),
				M = n.n(P),
				R = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				N = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				L = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				D = n("./node_modules/immutable/dist/immutable.js"),
				F = n("./src/reddit/helpers/dom/index.ts"),
				B = (n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/lodash/chunk.js")),
				A = n.n(B),
				K = n("./node_modules/lodash/flatten.js"),
				U = n.n(K),
				H = n("./node_modules/lodash/takeWhile.js"),
				W = n.n(H),
				V = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				z = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				q = n("./node_modules/lodash/last.js"),
				G = n.n(q),
				J = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				Z = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				Q = n("./node_modules/lodash/find.js"),
				X = n.n(Q);
			var Y = (e, t) => {
				const n = e.getSelection(),
					s = e.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[a, c] = Object(z.e)(s, r, i);
				if (!a || a !== c) return e;
				const l = Object(z.g)(r),
					d = Object(z.g)(i),
					{
						blocks: u,
						start: p
					} = a,
					{
						colCount: m
					} = d,
					h = u.length / m,
					{
						minCol: b,
						minRow: g,
						maxCol: f,
						maxRow: x
					} = Object(z.f)(l, d),
					C = u.filter(e => {
						const {
							rowIndex: n,
							colIndex: o
						} = Object(z.g)(e);
						return "rows" === t ? !(g <= n && n <= x) : !(b <= o && o <= f)
					});
				C.sort(z.b);
				const E = "rows" === t ? m : C.length / h,
					y = U()(Object(z.d)(A()(C, E))),
					v = s.getBlocksAsArray(),
					O = [...v.slice(0, p), ...y, ...v.slice(p + u.length)],
					j = s.merge({
						blockMap: o.BlockMapBuilder.createFromArray(O)
					}),
					S = {
						colIndex: b,
						rowIndex: g
					};
				let T = X()(y, e => Object(z.h)(S, Object(z.g)(e)));
				T || (T = y.length ? y[y.length - 1] : v[p > 0 ? p - 1 : 0]);
				const k = o.SelectionState.createEmpty(T.getKey()).merge({
					focusOffset: T.getLength(),
					anchorOffset: T.getLength()
				});
				let w = o.EditorState.push(e, j, J.e);
				return w = o.EditorState.forceSelection(w, k)
			};
			var $ = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const n = e.getSelection();
				if (n.isCollapsed()) return;
				if (n.getStartKey() === n.getEndKey() && !t) return;
				const s = e.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[a, c] = Object(z.e)(s, r, i);
				if (!a || a !== c) return;
				const l = {};
				let d = n;
				if (r === i) {
					const e = Object(z.n)(i, 0, n.getStartOffset()),
						t = Object(z.n)(i, n.getEndOffset());
					l[i.getKey()] = Object(z.j)(i, [e, t]), d = n
				} else {
					if (a.blocks[0].getKey() === n.getStartKey() && G()(a.blocks).getKey() === n.getEndKey()) return Y(e, "rows");
					Object(Z.a)(s, n, (e, t) => {
						l[t] = Object(z.n)(e, 0, 0)
					}), d = n.merge({
						anchorOffset: 0,
						focusOffset: 0
					})
				}
				const u = s.merge({
					blockMap: s.getBlockMap().merge(l),
					selectionAfter: d
				});
				return o.EditorState.push(e, u, J.f)
			};
			const ee = (e, t, n, o) => {
					const {
						htmlParts: s
					} = t;
					e.forEach((e, r) => {
						s.push("<".concat(n, " ").concat(o[r], " ").concat('style="margin: 0px; padding: 4px 9px; border: 1px solid rgb(229, 227, 218);"', ">")), fe(e, t), s.push("</".concat(n, ">"))
					})
				},
				te = e => {
					const t = e[0],
						n = e[e.length - 1],
						o = [...e].sort(z.b),
						{
							minCol: s,
							maxCol: r
						} = Object(z.f)(Object(z.g)(t), Object(z.g)(n)),
						i = r - s + 1;
					return Object(z.d)(A()(o, i))
				},
				ne = (e, t, n) => {
					n ? fe(e[0], t) : ((e, t) => {
						const {
							editor: n,
							htmlParts: o
						} = t, s = n.getEditorKey(), r = e[0].map(e => {
							const {
								alignment: t
							} = Object(z.g)(e);
							return t ? 'align="'.concat(z.a[t], '"') : ""
						}), [i, ...a] = e;
						o.push('\n    <table data-editor="'.concat(s, '">\n      <thead>\n        <tr>')), ee(i, t, "th", r), o.push("\n        </tr>\n      </thead>\n      <tbody>"), a.forEach(e => {
							o.push("\n        <tr>"), ee(e, t, "td", r), o.push("\n        </tr>")
						}), o.push("\n      </tbody>\n    </table>")
					})(te(e), t)
				},
				oe = (e, t, n) => {
					n ? t.textParts.push(Ee(e[0], t)) : ((e, t) => {
						const {
							textParts: n
						} = t;
						e.forEach(e => {
							n.push(e.map(e => Ee(e, t)).join(" "))
						})
					})(te(e), t)
				},
				se = e => {
					const {
						processed: t,
						remaining: n
					} = e, o = [];
					for (; n.length;) {
						const e = n[0];
						if (!Object(S.v)(e.getType())) break;
						o.push(n.shift())
					}
					const s = !n.length && !t.length,
						r = 1 === o.length && s;
					ne(o, e, r), oe(o, e, r), ((e, t, n, o) => {
						if (n)
							if (o) {
								const n = e[0].merge({
									data: Object(D.Map)(),
									type: S.n
								});
								t.blocksParts = [n]
							} else t.blocksParts = U()(te(e))
					})(o, e, s, r), t.push(...o)
				},
				re = e => $(e, !0),
				ie = (e, t, n) => {
					const s = Object(S.v)(n.first().getType()),
						r = Object(S.v)(n.last().getType()),
						i = e.getBlockForKey(t.getAnchorKey()),
						a = e.getBlockForKey(t.getFocusKey()),
						[c, l] = Object(z.e)(e, i, a);
					return c && c === l ? ((e, t, n, s) => {
						const r = Object(S.v)(s.first().getType()),
							i = e.getBlockForKey(t.getAnchorKey()),
							a = e.getBlockForKey(t.getFocusKey()),
							{
								blocks: c,
								start: l
							} = n;
						c.sort(z.b);
						const d = Object(z.g)(c[0]);
						let {
							colCount: u
						} = d;
						const p = A()(c, u);
						let m = p.length;
						const {
							minRow: h,
							minCol: b
						} = Object(z.f)(Object(z.g)(i), Object(z.g)(a)), g = s.toArray();
						if (r) {
							const n = W()(g, e => Object(S.v)(e.getType()));
							n.sort(z.b);
							const s = Object(z.g)(n[0]).colCount,
								r = A()(n, s),
								i = r.length,
								a = h + i - 1,
								d = b + s - 1;
							if (n.length !== i * s) throw new Error("Invalid table fragment!");
							if (d >= u && p.forEach(e => {
									e.push(...Object(z.l)(d - u + 1, 1))
								}), u = p[0].length, a >= m) {
								const e = A()(Object(z.l)(u, a - m + 1), u);
								p.push(...e)
							}
							m = p.length;
							for (let e = 0; e < i; e++)
								for (let t = 0; t < s; t++) {
									const n = h + e,
										o = b + t,
										s = r[e][t];
									p[n][o] = s.set("key", p[n][o].getKey())
								}
							const f = Object(z.d)(p),
								x = U()(f),
								C = e.getBlocksAsArray(),
								E = [...C.slice(0, l), ...x, ...C.slice(l + c.length)],
								y = Object(z.o)(t, p[h][b], p[a][d]);
							return e.merge({
								blockMap: o.BlockMapBuilder.createFromArray(E),
								selectionAfter: y
							})
						} {
							const n = p[h][b],
								s = Object(z.j)(n, g, " ");
							let r = t;
							return t.getStartKey() !== t.getEndKey() && (r = Object(z.o)(t, n, n)), V.c(e, r, o.BlockMapBuilder.createFromArray([s]))
						}
					})(e, t, c, n) : c || l || !s && !r ? void 0 : ((e, t, n) => {
						const s = Object(S.v)(n.first().getType()),
							r = Object(S.v)(n.last().getType()),
							i = n.toArray();
						s && i.unshift(Object(N.h)()), r && i.push(Object(N.h)());
						const a = o.BlockMapBuilder.createFromArray(i);
						return V.c(e, t, a)
					})(e, t, n)
				};
			var ae = n("./node_modules/draft-js/lib/removeEntitiesAtEdges.js"),
				ce = n.n(ae);
			var le = (e, t) => {
				const n = t.getStartKey(),
					o = t.getStartOffset(),
					s = t.getEndKey(),
					r = t.getEndOffset(),
					i = ce()(e, t).getBlockMap(),
					a = i.keySeq(),
					c = a.indexOf(n),
					l = a.indexOf(s) + 1;
				return i.slice(c, l).map((e, t) => {
					const i = e.getText(),
						a = e.getCharacterList();
					return n === s ? e.merge({
						text: i.slice(o, r),
						characterList: a.slice(o, r)
					}) : t === n ? e.merge({
						text: i.slice(o),
						characterList: a.slice(o)
					}) : t === s ? e.merge({
						text: i.slice(0, r),
						characterList: a.slice(0, r)
					}) : e
				})
			};
			const de = (e, t) => {
					const n = {
							children: [],
							parentItem: t,
							type: e.getType()
						},
						o = {
							block: e,
							parentList: n
						};
					return n.children.push(o), t && (t.childrenLists = t.childrenLists || [], t.childrenLists.push(n)), {
						list: n,
						item: o
					}
				},
				ue = (e, t) => {
					const {
						type: n,
						children: o
					} = e, {
						htmlParts: s
					} = t, r = n === S.b.ORDERED_LIST ? "ol" : "ul";
					s.push("<".concat(r, ">")), o.forEach(e => ((e, t) => {
						const {
							block: n,
							childrenLists: o
						} = e, {
							htmlParts: s
						} = t;
						s.push("<li>"), fe(n, t, !0), o && o.forEach(e => ue(e, t)), s.push("</li>")
					})(e, t)), s.push("</".concat(r, ">"))
				},
				pe = (e, t) => {
					const {
						children: n
					} = e;
					n.forEach((e, n) => me(e, n, t))
				},
				me = (e, t, n) => {
					const {
						block: o,
						childrenLists: s
					} = e, {
						textParts: r
					} = n, i = " ".repeat(o.getDepth()), a = o.getType() === S.b.ORDERED_LIST ? "".concat(t + 1, ".") : "-", c = Ee(o, n);
					r.push("".concat(i).concat(a, " ").concat(c)), s && s.forEach(e => pe(e, n))
				},
				he = e => {
					const {
						remaining: t
					} = e, n = t.shift(), o = n.getType(), s = [n];
					for (; t.length;) {
						const e = t[0],
							n = e.getType();
						if (!Object(S.s)(n)) break;
						if (e.getDepth() > 0 || n === S.b.UNORDERED_LIST) s.push(t.shift());
						else {
							if (n !== o) break;
							if (s.some(e => e.getType() !== S.b.ORDERED_LIST)) break;
							s.push(t.shift())
						}
					}
					const r = (e => {
						const t = e[0],
							n = {
								type: t.getType(),
								children: []
							};
						let o, s = n,
							r = t.getDepth();
						return e.forEach(e => {
							const t = e.getType(),
								n = e.getDepth();
							if (n > r) {
								const t = de(e, o);
								s = t.list, o = t.item, r = n
							} else {
								for (; r !== n;) s = s.parentItem ? s.parentItem.parentList : s, r--;
								if (t === s.type) o = {
									block: e,
									parentList: s
								}, s.children.push(o);
								else {
									const t = de(e, s.parentItem);
									s = t.list, o = t.item
								}
							}
						}), n
					})(s);
					ue(r, e), pe(r, e), e.processed.push(...s)
				};
			var be = (e, t) => {
				const n = e.toArray().filter(e => !Object(S.t)(e.getType()));
				if (1 === n.length) {
					n[0].getType() !== S.n && n.push(new o.ContentBlock({
						key: Object(o.genKey)(),
						type: S.n
					}))
				}
				const s = o.ContentState.createFromBlockArray(n),
					r = JSON.stringify(Object(o.convertToRaw)(s));
				return "<div ".concat("data-reddit-rtjson", '="').concat(M()(r), '">').concat(t, "</div>")
			};
			const ge = () => !!window.clipboardData,
				fe = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						htmlParts: o
					} = t, s = xe(e, t);
					s && s.forEach(e => o.push(n ? e.innerHTML : e.outerHTML))
				},
				xe = (e, t) => {
					const {
						selection: n,
						editor: o
					} = t, s = n.getStartKey(), r = n.getEndKey(), i = e.getKey(), a = o.refs.editor, c = Object(N.d)(i, a);
					return c ? i === s || i === r ? Object(F.c)(c) : [c] : null
				};
			var Ce = (e, t, n) => {
				const s = e.getCurrentContent(),
					r = e.getSelection(),
					i = Te(e) || le(s, r);
				if (!i || !i.count()) return;
				const a = i.toArray(),
					c = {
						editor: t,
						editorState: e,
						selection: r,
						remaining: a,
						processed: [],
						htmlParts: [],
						textParts: [],
						blocksParts: [...a]
					};
				for (; c.remaining.length;) {
					const e = c.remaining[0].getType();
					switch (!0) {
						case Object(S.t)(e):
							Se(c);
							break;
						case Object(S.s)(e):
							he(c);
							break;
						case Object(S.v)(e):
							se(c);
							break;
						default:
							ye(c)
					}
				}
				const l = c.textParts.join("\n"),
					d = (e => Object(D.OrderedMap)(e.map(e => {
						const t = Object(o.genKey)();
						return [t, e.set("key", t)]
					})))(c.blocksParts);
				return ((e, t) => {
					let {
						html: n,
						text: o
					} = t;
					ge() ? window.clipboardData.setData("text", o) : (n && e.clipboardData.setData("text/html", n), e.clipboardData.setData("text/plain", o))
				})(n, {
					html: be(d, c.htmlParts.join("")),
					text: l
				}), n.stopPropagation(), n.preventDefault(), t.setClipboard(d), d
			};
			const Ee = (e, t) => {
					const n = e.getText(),
						o = t.editorState.getCurrentContent(),
						s = [];
					let r = -1;
					return e.getCharacterList().forEach((e, t) => {
						const i = e && e.getEntity();
						if (i && void 0 !== t) {
							const e = o.getEntity(i);
							e.getType() === L.a.EMOTE && (s.push(n.substring(r + 1, t)), s.push(":".concat(e.getData().id, ":")), r = t)
						}
					}), s.push(n.substring(r + 1, n.length)), s.join("")
				},
				ye = e => {
					const t = e.remaining.shift();
					((e, t) => fe(e, t))(t, e), ((e, t) => {
						t.textParts.push(Ee(e, t))
					})(t, e), e.processed.push(t)
				},
				ve = (e, t) => {
					const n = e.first(),
						s = e.last();
					let r = e;
					if (Object(S.u)(n.getType()) ? r = r.set(r.keySeq().first(), n.merge({
							type: S.n
						})) : Object(S.o)(n.getType()) && (r = o.BlockMapBuilder.createFromArray([Object(N.h)(), ...r.toArray()])), Object(S.u)(s.getType()) || !Object(R.r)(t)) {
						const e = Object(N.h)();
						r = r.set(e.getKey(), e)
					} else if (Object(S.o)(s.getType())) {
						const e = Object(N.h)().merge({
							type: S.j
						});
						r = r.set(e.getKey(), e)
					}
					return r
				},
				Oe = (e, t, n) => {
					const o = e.getBlockForKey(t.getStartKey());
					if (Object(S.u)(o.getType())) {
						const o = n.first(),
							s = n.set(n.keySeq().first(), Object(N.h)(o.getKey(), o.getText()).merge({
								type: S.j
							}));
						return V.c(e, t, s)
					}
				},
				je = (e, t, n) => {
					const o = ((e, t, n) => {
						const o = t ? t.getText() : "";
						return '<span data-editor="'.concat(n, '">').concat(M()(o), "</span>")
					})(0, t, n.editor.getEditorKey());
					n.htmlParts.push(o)
				},
				Se = e => {
					const {
						remaining: t
					} = e, n = t.shift(), o = t[0] && Object(S.u)(t[0].getType()) ? t.shift() : void 0;
					je(0, o, e), ((e, t) => {
						const n = e ? Ee(e, t) : "";
						t.textParts.push(n)
					})(o, e), e.processed.push(n), o && e.processed.push(o)
				},
				Te = e => {
					const t = e.getSelection(),
						n = t.getFocusKey();
					if (n !== t.getAnchorKey()) return;
					const s = e.getCurrentContent(),
						r = s.getBlockForKey(n);
					if (Object(S.o)(r.getType())) {
						const e = [r],
							t = s.getBlockAfter(r.getKey());
						return t && Object(S.u)(t.getType()) && e.push(t), o.ContentState.createFromBlockArray(e).getBlockMap()
					}
				},
				ke = e => {
					const t = Te(e);
					if (t) return Object(R.d)(e, t.first().getKey())
				},
				we = e => {
					const t = e.getSelection();
					let n = e.getCurrentContent();
					const s = n.getBlockForKey(t.getStartKey()),
						r = n.getBlockForKey(t.getEndKey());
					if (Object(S.t)(s.getType()) || Object(S.t)(r.getType())) {
						if (t.isCollapsed())
							if (Object(S.u)(s.getType())) n = V.d(n, t), n = o.Modifier.setBlockType(n, n.getSelectionAfter(), S.n);
							else if (Object(S.o)(s.getType())) {
							let s = n.getBlockAfter(t.getStartKey());
							return s || (s = (e = Object(R.b)(e, t.getStartKey(), N.a.after)).getCurrentContent().getBlockAfter(t.getStartKey())), o.EditorState.forceSelection(e, Object(N.b)(s, !0))
						}
						return o.EditorState.push(e, n, "split-block")
					}
				},
				_e = (e, t) => {
					const n = e.getSelection(),
						s = e.getCurrentContent(),
						r = "up" === t ? n.getStartKey() : n.getEndKey(),
						i = s.getBlockForKey(r);
					if (!Object(S.o)(i.getType())) return;
					const a = "up" === t ? s.getBlockBefore(r) : s.getBlockAfter(r);
					return a ? o.EditorState.forceSelection(e, Object(N.b)(a, !0)) : Object(R.b)(e, r, "up" === t ? N.a.before : N.a.after)
				},
				Ie = (e, t) => {
					if (e.shiftKey) return;
					const n = _e(t, "up");
					return n && e.preventDefault(), n
				},
				Pe = (e, t) => {
					if (e.shiftKey) return;
					const n = _e(t, "down");
					return n && e.preventDefault(), n
				},
				Me = (e, t) => {
					const n = e.getSelection();
					return n.isCollapsed() && 0 === n.getStartOffset() && Object(S.o)(e.getCurrentContent().getBlockForKey(n.getStartKey()).getType())
				};
			var Re = (e, t) => {
					if (!Object(R.r)(t)) return e;
					const n = e.getSelection(),
						o = e.getCurrentContent(),
						s = o.getBlockForKey(n.getStartKey());
					if (Object(S.o)(s.getType())) {
						const t = o.getBlockAfter(s.getKey());
						if (!t || !Object(S.u)(t.getType())) return Object(R.d)(e, s.getKey(), !1)
					}
					return e
				},
				Ne = n("./src/reddit/actions/modal.ts"),
				Le = n("./src/reddit/actions/upload.ts"),
				De = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				Fe = e => null,
				Be = n("./src/reddit/helpers/media/index.ts"),
				Ae = n("./src/reddit/helpers/richTextEditor/index.ts"),
				Ke = n("./src/reddit/selectors/activeModalId.ts"),
				Ue = n("./src/reddit/selectors/user.ts");
			const He = "application/x-reddit-rte-block";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var We = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less"),
				Ve = n.n(We);
			const ze = h.a.img("Img", Ve.a);
			var qe = h.a.wrapped(e => {
					const {
						className: t,
						url: n
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(ze, {
						draggable: !1,
						src: n
					}))
				}, "Component", Ve.a),
				Ge = n("./src/app/strings/index.ts"),
				Je = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less"),
				Ze = n.n(Je);
			const Qe = Object(Ge.e)("postCreation.processingVideo"),
				Xe = Object(Ge.e)("postCreation.processingImage"),
				Ye = h.a.div("Message", Ze.a);
			var $e = h.a.wrapped(e => {
					const {
						className: t,
						isImage: n,
						language: o
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(Ye, null, (n ? Xe : Qe)(o)))
				}, "Component", Ze.a),
				et = n("./src/lib/formatApiError/index.ts"),
				tt = n("./src/reddit/components/ProgressBar/index.tsx"),
				nt = n("./src/reddit/controls/Button/index.tsx"),
				ot = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less"),
				st = n.n(ot);
			const rt = Object(Ge.e)("postCreation.cancel"),
				it = Object(Ge.e)("postCreation.retry"),
				at = Object(Ge.e)("postCreation.remove"),
				ct = Object(Ge.e)("postCreation.uploadStatus.uploadCanceled"),
				lt = Object(Ge.e)("postCreation.uploadStatus.uploadFailed"),
				dt = Object(Ge.e)("postCreation.uploadStatus.success"),
				ut = Object(Ge.e)("postCreation.uploadStatus.uploading"),
				pt = h.a.div("ControlRow", st.a),
				mt = h.a.wrapped(nt.n, "Button", st.a),
				ht = h.a.wrapped(nt.n, "ErrButton", st.a),
				bt = h.a.div("Status", st.a),
				gt = h.a.wrapped(tt.a, "ProgressBar", st.a),
				ft = h.a.div("ErrorLine", st.a),
				xt = e => t => {
					t.stopPropagation(), e(t)
				};
			var Ct = h.a.wrapped(e => {
					const {
						language: t,
						upload: n
					} = e, o = xt(e.onCancel), s = xt(e.onRetry), r = xt(e.onRemove), {
						status: i,
						progress: c
					} = n, l = c && c.percent || 0, d = i === j.a.FAILED || i === j.a.CANCELED, u = ((e, t) => {
						const {
							status: n,
							progress: o
						} = e;
						return n === j.a.CANCELED ? ct(t) : n === j.a.FAILED ? "".concat(lt(t), ": ").concat(Object(et.a)(t, e.error), " ") : 100 === (o && o.percent || 0) ? dt(t) : "".concat(ut(t), ': "').concat(e.file.name, '"')
					})(n, t);
					return a.a.createElement("div", {
						className: e.className
					}, d ? a.a.createElement(ft, null) : a.a.createElement(gt, {
						innerBarClassName: st.a.ProgressBarInner,
						percent: l
					}), a.a.createElement(pt, null, a.a.createElement(bt, {
						className: d ? st.a.hasError : void 0,
						title: d ? u : void 0
					}, u), a.a.createElement("div", null, d ? [a.a.createElement(ht, {
						key: "remove",
						onClick: r
					}, at(t)), a.a.createElement(ht, {
						key: "retry",
						onClick: s
					}, it(t))] : a.a.createElement(mt, {
						disabled: 100 === l,
						onClick: o
					}, rt(t)))))
				}, "Component", st.a),
				Et = n("./node_modules/react-motion/lib/react-motion.js"),
				yt = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				vt = n("./src/reddit/components/PlayButton/index.tsx"),
				Ot = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less"),
				jt = n.n(Ot);
			const St = {
					stiffness: 60,
					damping: 20
				},
				Tt = [{
					key: "video",
					style: {
						opacity: Object(Et.spring)(1, St)
					}
				}],
				kt = h.a.wrapped(e => {
					const {
						autoPlay: t = !1,
						className: n,
						showControls: o,
						shouldPause: s,
						style: r,
						dashUrl: i,
						hlsUrl: c,
						otherUrl: l
					} = e;
					return a.a.createElement("div", {
						className: n,
						style: r
					}, a.a.createElement(yt.b, {
						autoPlay: t,
						shouldIgnoreAutoplayPref: !0,
						shouldLoad: !1,
						shouldPause: s,
						isGif: !1,
						hlsSource: c,
						mpegDashSource: i,
						otherSource: l,
						showSettingsIcon: !1,
						showControlBar: o,
						playerClickPlay: !1,
						hideUntilLoaded: !0
					}))
				}, "VideoPlayer", jt.a),
				wt = h.a.img("PosterImg", jt.a),
				_t = h.a.wrapped(e => {
					const {
						className: t,
						onPlayButtonClick: n,
						url: o,
						showPlayButton: s
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(wt, {
						draggable: !1,
						src: o
					}), s && a.a.createElement(vt.a, {
						className: jt.a.playButton,
						onClick: n
					}))
				}, "Poster", jt.a);
			class It extends a.a.Component {
				constructor(e) {
					super(e), this.onPlayButtonClick = () => {
						this.setState({
							showVideo: !0
						})
					}, this.willEnter = () => ({
						opacity: 0
					}), this.willLeave = () => ({
						opacity: Object(Et.spring)(0, St)
					}), this.didLeave = () => {
						this.setState({
							showVideo: !1
						})
					}, this.state = {
						showVideo: !1
					}
				}
				renderVideo() {
					const {
						props: e
					} = this;
					return a.a.createElement("div", {
						className: e.className
					}, a.a.createElement(kt, {
						dashUrl: e.dashUrl,
						hlsUrl: e.hlsUrl,
						showControls: e.isUploaded && e.isSelected,
						shouldPause: !e.isSelected || void 0
					}))
				}
				render() {
					const {
						className: e,
						isSelected: t,
						posterUrl: n,
						dashUrl: o,
						hlsUrl: s,
						otherUrl: r
					} = this.props;
					if (!n) return this.renderVideo();
					const {
						showVideo: i
					} = this.state, c = !!(o || s || r);
					return a.a.createElement(Et.TransitionMotion, {
						defaultStyles: [],
						styles: t && i && c ? Tt : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave,
						didLeave: this.didLeave
					}, c => a.a.createElement("div", {
						className: e
					}, c.map(e => a.a.createElement(kt, {
						key: e.key,
						autoPlay: !0,
						style: e.style,
						otherUrl: r,
						dashUrl: o,
						hlsUrl: s,
						showControls: !0,
						shouldPause: !t || void 0
					})), a.a.createElement(_t, {
						url: n,
						showPlayButton: !i || !t,
						onPlayButtonClick: this.onPlayButtonClick
					})))
				}
			}
			var Pt = h.a.wrapped(It, "Component", jt.a),
				Mt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less"),
				Rt = n.n(Mt);

			function Nt() {
				return (Nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var Lt = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			var Dt = e => {
					const {
						alignCenter: t,
						isSelected: n,
						onCancel: o,
						onRetry: s,
						onRemove: r,
						language: i,
						upload: c,
						mediaAsset: l,
						thumbnail: d
					} = e, u = Lt(e, ["alignCenter", "isSelected", "onCancel", "onRetry", "onRemove", "language", "upload", "mediaAsset", "thumbnail"]);
					let m = !1;
					if (c) m = "image" === Object(Be.f)(c.metadata.mimetype);
					else {
						if (!l) return null;
						m = l.type === R.a.Image || l.type === R.a.AnimatedImage
					}
					const h = c ? c.metadata.height : l.height,
						b = !c || c.status === j.a.SUCCESS,
						g = m && !!h && h < 104,
						f = !h;
					return a.a.createElement("div", Nt({
						className: Object(p.a)(Rt.a.container, {
							[Rt.a.alignCenter]: t,
							[Rt.a.isCompact]: g,
							[Rt.a.isUploaded]: b,
							[Rt.a.isSelected]: n
						})
					}, u), f ? a.a.createElement($e, {
						className: Rt.a.placeholder,
						isImage: m,
						language: i
					}) : m ? a.a.createElement(qe, {
						className: Rt.a.imagePreview,
						url: c ? c.metadata.localUrl : l.imageUrl
					}) : a.a.createElement(Pt, {
						className: Rt.a.videoPreview,
						dashUrl: l ? l.dashUrl : void 0,
						hlsUrl: l ? l.hlsUrl : void 0,
						isSelected: n,
						isUploaded: b,
						otherUrl: c ? c.metadata.localUrl : void 0,
						posterUrl: d ? d.url : l.posterUrl
					}), c && a.a.createElement(Ct, {
						className: Rt.a.statusBar,
						language: i,
						onCancel: o,
						onRemove: r,
						onRetry: s,
						upload: c
					}))
				},
				Ft = n("./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less"),
				Bt = n.n(Ft);

			function At() {
				return (At = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var Kt = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const Ut = h.a.div("HiddenDiv", Bt.a);
			var Ht = e => {
					var {
						elementRef: t
					} = e, n = Kt(e, ["elementRef"]);
					return a.a.createElement(Ut, At({}, n, {
						innerRef: t
					}), a.a.createElement("br", null))
				},
				Wt = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				Vt = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				zt = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				qt = n("./src/reddit/layout/row/Inline/index.tsx"),
				Gt = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				Jt = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Zt = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				Qt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less"),
				Xt = n.n(Qt);
			const Yt = Object(Ge.e)("postCreation.remove"),
				$t = Object(Ge.e)("postCreation.mediaInput.chooseThumbnail"),
				en = h.a.wrapped(Jt.a, "FormatterButton", Xt.a),
				tn = Object(Zt.f)(zt.b),
				nn = Object(Zt.f)(Vt.a),
				on = h.a.wrapped(qt.a, "ToolbarContent", Xt.a);
			var sn = e => {
					const {
						alignCenter: t,
						block: n,
						editorState: o,
						language: s,
						onChange: r,
						showVideoControls: i
					} = e, c = n.getKey(), {
						makeGif: l = !1
					} = Object(R.h)(n) || {};
					return a.a.createElement("div", {
						className: Object(p.a)(Xt.a.container, {
							[Xt.a.alignCenter]: t
						})
					}, a.a.createElement(on, {
						className: Xt.a.content
					}, i && a.a.createElement(Wt.a, {
						isCompact: !0,
						key: "make-gif",
						on: l,
						onClick: () => r(Object(R.q)(o, c, {
							makeGif: !l
						}))
					}), i && e.showThumbnailButton && a.a.createElement(en, {
						Icon: nn,
						onClick: e.onThumbnailButtonClick,
						tooltip: $t(s),
						tooltipBelow: !0
					}), i && a.a.createElement(Gt.c, null), a.a.createElement(en, {
						Icon: tn,
						onClick: () => r(Object(R.d)(o, c)),
						tooltip: Yt(s),
						tooltipBelow: !0
					})))
				},
				rn = n("./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less"),
				an = n.n(rn);
			const cn = e => "RTE_VIDEO_THUMBNAIL_SELECTOR_".concat(e.getKey()),
				ln = Object(l.a)(e => e.uploads, (e, t) => {
					const n = Object(R.h)(t.block);
					return n && n.uploadInfo && n.uploadInfo.uploadKey
				}, (e, t) => t ? e[t] : void 0),
				dn = Object(c.b)((e, t) => ({
					upload: ln(e, t),
					language: Object(Ue.S)(e),
					isThumbnailSelectorOpen: Object(Ke.a)(e) === cn(t.block),
					isRteVideoPosterEnabled: E.d.rteVideoPoster(e)
				}), (e, t) => ({
					onCancelUpload: t => e(Le.i(t, !1)),
					toggleVideoThumbnailsSelector: () => e(Object(Ne.i)(cn(t.block)))
				})),
				un = h.a.div("MediaContainer", an.a),
				pn = h.a.div("Container", an.a);
			class mn extends a.a.Component {
				constructor(e) {
					super(e), this.onNativeSelectionChange = () => {
						const e = window.getSelection();
						if (0 === e.rangeCount) return;
						const t = e.getRangeAt(0),
							{
								commonAncestorContainer: n
							} = t;
						this.state.active ? this.rootContainer.contains(n) || this.setState({
							active: !1
						}) : this.rootContainer && this.rootContainer.contains(n) && this.selectBlock(), this.setState({
							isInSelection: Object(F.i)(t, this.rootContainer)
						})
					}, this.selectBlock = () => {
						const e = document.createRange();
						e.selectNodeContents(this.rootContainer);
						const t = window.getSelection();
						t.removeAllRanges(), t.addRange(e), this.setState({
							active: !0
						})
					}, this.isSelected = () => {
						const e = this.props.blockProps.getEditorState().getSelection(),
							t = this.props.block.getKey();
						return this.state.active && Object(R.n)(e, t)
					}, this.onRetryUpload = () => {
						const {
							upload: e
						} = this.props;
						e && this.props.blockProps.onRetryUpload(e.key)
					}, this.onMediaViewClickCapture = e => {
						this.state.active || this.selectBlock()
					}, this.onDragStart = e => {
						e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData(He, this.props.block.getKey())
					}, this.onRemove = () => {
						const e = this.props.blockProps.getEditorState();
						this.props.blockProps.onChange(Object(R.d)(e, this.props.block.getKey()))
					}, this.onCancelUpload = async () => {
						this.props.upload && (await this.props.onCancelUpload(this.props.upload.key), this.selectBlock())
					}, this.onToolbarStateChange = e => {
						this.props.blockProps.onChange(e)
					}, this.toggleVideoThumbnailsSelector = () => {
						this.props.toggleVideoThumbnailsSelector()
					}, this.onThumbnailSelect = e => {
						const t = this.props.blockProps.getEditorState(),
							n = this.props.block.getKey();
						let o = Object(R.q)(t, this.props.block.getKey(), {
							thumbnail: e
						});
						o = Object(R.p)(o, n), this.props.blockProps.onChange(o), this.toggleVideoThumbnailsSelector()
					}, this.state = {
						active: !1,
						isInSelection: !1
					}
				}
				shouldComponentUpdate(e, t) {
					return t.active !== this.state.active || t.isInSelection !== this.state.isInSelection || e.block !== this.props.block || e.upload !== this.props.upload || Object(R.n)(e.selection, e.block.getKey())
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange);
					const {
						selection: e
					} = this.props;
					e.getHasFocus() && Object(R.n)(e, this.props.block.getKey()) && this.selectBlock(), this.overlayContainer = Fe(!0)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillReceiveProps(e) {
					const t = e.block.getKey(),
						n = this.props.blockProps.getEditorState(),
						o = n;
					n !== o && this.props.blockProps.onChange(o), !this.state.active && e.selection !== this.props.selection && e.selection.getHasFocus() && Object(R.n)(e.selection, t) && this.selectBlock()
				}
				getToolbarOffset() {
					if (!this.props.blockProps.rteFocusableContentRef || !this.rootContainer) return 0;
					const {
						top: e
					} = this.rootContainer.getBoundingClientRect(), {
						top: t
					} = this.props.blockProps.rteFocusableContentRef.getBoundingClientRect();
					return e - t - 30 - 10
				}
				render() {
					const {
						block: e,
						blockProps: t,
						isRteVideoPosterEnabled: n,
						language: o,
						offsetKey: s,
						upload: r
					} = this.props, i = Object(R.h)(e), c = i ? i.thumbnail : void 0, l = !!r && Object(Be.l)(r.metadata.mimetype || ""), {
						active: d,
						isInSelection: u
					} = this.state, p = t.editorType === Ae.a.Comment;
					return a.a.createElement(pn, {
						innerRef: e => this.rootContainer = e
					}, d && a.a.createElement(sn, {
						block: e,
						editorState: t.getEditorState(),
						language: o,
						onChange: this.onToolbarStateChange,
						onThumbnailButtonClick: this.toggleVideoThumbnailsSelector,
						showThumbnailButton: n,
						showVideoControls: l,
						alignCenter: !p
					}), a.a.createElement(Ht, null), a.a.createElement("div", {
						contentEditable: !1,
						"data-offset-key": s
					}, a.a.createElement(un, {
						draggable: !0,
						onDragStart: this.onDragStart,
						innerRef: e => this.mediaContainer = e
					}, a.a.createElement(Dt, {
						isSelected: u || d,
						language: o,
						thumbnail: c,
						onCancel: this.onCancelUpload,
						onClickCapture: this.onMediaViewClickCapture,
						onRetry: this.onRetryUpload,
						onRemove: this.onRemove,
						upload: r,
						mediaAsset: i.mediaAsset,
						alignCenter: !p
					})), r && l && a.a.createElement(De.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleVideoThumbnailsSelector,
						videoSource: r.metadata.localUrl,
						videoDuration: r.metadata.videoDuration,
						selected: c,
						isOpen: this.props.isThumbnailSelectorOpen
					})), a.a.createElement(Ht, null))
				}
			}
			var hn = dn(mn),
				bn = n("./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less"),
				gn = n.n(bn);
			class fn extends a.a.PureComponent {
				constructor(e) {
					super(e);
					const {
						contentState: t,
						block: n
					} = Object(N.e)(e.children[0]).props;
					this.mediaBlockKey = t.getBlockBefore(n.getKey()).getKey()
				}
				render() {
					const e = this.props.children[0],
						t = Object(N.e)(e),
						{
							block: n,
							contentState: o
						} = t.props,
						s = o.getBlockForKey(this.mediaBlockKey),
						r = Object(R.h)(s);
					if (!r || !(r.mediaAsset || r.uploadInfo && r.uploadInfo.mediaType)) return null;
					const i = !n.getLength();
					return a.a.createElement("div", {
						className: gn.a.wrapper,
						style: {
							"--media-caption-placeholder-text": i ? "'".concat(Object(v.c)("Add caption"), "'") : ""
						}
					}, e)
				}
			}
			const xn = Object(D.Map)({
				[S.j]: {
					element: "div",
					wrapper: a.a.createElement(fn, null)
				}
			});
			var Cn = (e, t, n) => {
					const s = e.getSelection(),
						r = e.getCurrentContent(),
						i = r.getBlockForKey(s.getAnchorKey()),
						a = r.getBlockForKey(s.getFocusKey()),
						[c, l] = Object(z.e)(r, i, a);
					if (!c || c !== l) return e;
					const {
						blocks: d,
						start: u
					} = c, p = Object(z.g)(i), m = Object(z.g)(a), {
						colCount: h
					} = m;
					d.sort(z.b);
					const b = A()(d, h),
						{
							minCol: g,
							minRow: f,
							maxCol: x,
							maxRow: C
						} = Object(z.f)(p, m),
						E = {
							rowIndex: 0,
							colIndex: 0
						};
					if ("rows" === t) {
						const e = "before" === n ? f : C + 1,
							t = A()(Object(z.l)(h, C - f + 1), h);
						b.splice(e, 0, ...t), E.rowIndex = e
					} else {
						const e = "before" === n ? g : x + 1;
						b.forEach(t => {
							t.splice(e, 0, ...Object(z.l)(x - g + 1, 1))
						}), E.colIndex = e
					}
					const y = Object(z.d)(b),
						v = r.getBlocksAsArray(),
						O = U()(y),
						j = [...v.slice(0, u), ...O, ...v.slice(u + d.length)],
						S = r.merge({
							blockMap: o.BlockMapBuilder.createFromArray(j)
						}),
						T = X()(O, e => Object(z.h)(E, Object(z.g)(e))),
						k = Object(z.o)(s, T, T);
					let w = o.EditorState.push(e, S, J.e);
					return w = o.EditorState.forceSelection(w, k)
				},
				En = n("./node_modules/lodash/clamp.js"),
				yn = n.n(En),
				vn = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts");
			var On = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "preserve";
				const s = e.getSelection(),
					r = e.getCurrentContent(),
					i = "up" === t || "left" === t ? s.getStartKey() : s.getEndKey(),
					a = r.getBlockForKey(i);
				if (!Object(S.v)(a.getType())) return;
				const c = Object(z.g)(a),
					{
						colCount: l,
						colIndex: d,
						rowIndex: u
					} = c,
					p = r.getBlocksAsArray(),
					m = Object(vn.a)(r, a);
				if (!m) return;
				let h = u,
					b = d;
				switch (t) {
					case "up":
						h--;
						break;
					case "down":
						h++;
						break;
					case "left":
						--b < 0 && (h--, b = l - 1);
						break;
					case "right":
						++b >= l && (h++, b = 0)
				}
				const g = {
					rowIndex: h,
					colIndex: b
				};
				let f = i;
				const x = X()(m.blocks, e => Object(z.h)(Object(z.g)(e), g));
				if (x) f = x.getKey();
				else {
					const e = Object(z.c)(g, c) < 0 ? m.start - 1 : m.start + m.blocks.length;
					0 <= e && e < p.length && (f = p[e].getKey())
				}
				const C = r.getBlockForKey(f);
				let E = 0;
				"preserve" === n ? E = yn()(s.getFocusOffset(), 0, C.getLength()) : "end" === n && (E = C.getLength());
				const y = s.merge({
					anchorKey: f,
					focusKey: f,
					focusOffset: E,
					anchorOffset: E
				});
				return s !== y ? o.EditorState.forceSelection(e, y) : void 0
			};
			const jn = (e, t) => {
					const n = t.getCurrentContent(),
						o = t.getSelection(),
						s = n.getBlockForKey(o.getFocusKey()),
						[r] = Object(z.e)(n, s, s);
					if (!r) return;
					const i = Object(z.g)(s);
					let a;
					return (a = i.colIndex === i.colCount - 1 && i.rowIndex === r.blocks.length / i.colCount - 1 && !e.shiftKey && o.getFocusKey() === o.getAnchorKey() ? Cn(t, "rows", "after") : On(t, e.shiftKey ? "left" : "right", "end")) ? (e.preventDefault(), a) : void 0
				},
				Sn = (e, t) => {
					if (e.shiftKey) return;
					const n = On(t, "up");
					return n && e.preventDefault(), n
				},
				Tn = (e, t) => {
					if (e.shiftKey) return;
					const n = On(t, "down");
					return n && e.preventDefault(), n
				};
			class kn {
				constructor() {
					this.lastRowInsertionState = null
				}
				undoRowInsertion(e) {
					const t = o.EditorState.undo(e);
					return On(t, "down", "end") || t
				}
				isSelectionInLastRow(e) {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						o = t.getBlockForKey(n.getFocusKey()),
						[s] = Object(z.e)(t, o, o);
					if (!s) return !1;
					const r = Object(z.g)(s.blocks[0]).colCount,
						i = s.blocks.length / r;
					return Object(z.g)(o).rowIndex === i - 1
				}
				insertNewRow(e) {
					const t = e.getSelection();
					let n = Cn(e, "rows", "after");
					return n = o.EditorState.forceSelection(n, t), n = On(n, "down") || n, this.lastRowInsertionState = n, n
				}
				handle(e) {
					return e.getSelection().isCollapsed() ? e === this.lastRowInsertionState ? this.undoRowInsertion(e) : this.isSelectionInLastRow(e) ? this.insertNewRow(e) : On(e, "down") || e : e
				}
			}
			const wn = (e, t) => {
				const n = e.getSelection();
				if (n.isCollapsed() || n.getStartKey() === n.getEndKey()) return;
				const s = e.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[a, c] = Object(z.e)(s, r, i);
				if (a && a === c) {
					const r = Object(z.o)(n, i, i, !1),
						a = V.b(s, r, t);
					return o.EditorState.push(e, a, J.d)
				}
			};
			var _n = n("./node_modules/lodash/forEach.js"),
				In = n.n(_n);
			const Pn = (e, t) => t ? e[0] : e[e.length - 1];
			var Mn = (e, t) => {
					return e.getSelection().isCollapsed() ? ((e, t) => {
						const n = e.getSelection(),
							s = t.getSelection();
						if (!n.isCollapsed() || s.isCollapsed() || 0 !== s.getStartOffset() || s.getStartKey() !== n.getStartKey()) return e;
						const r = e.getCurrentContent(),
							i = t.getCurrentContent(),
							a = r.getBlockForKey(n.getAnchorKey());
						if (!Object(S.v)(a.getType())) return e;
						const {
							rowIndex: c,
							colIndex: l
						} = Object(z.g)(a);
						if (0 !== c || 0 !== l) return e;
						const d = r.getBlockMap(),
							u = i.getBlockMap();
						if (d.size >= u.size) return e;
						const p = r.getBlockAfter(n.getAnchorKey()),
							m = i.getBlockAfter(s.getEndKey());
						if (p && p !== m) return e;
						const h = a.merge({
								type: S.n,
								data: Object(D.Map)({})
							}),
							b = r.merge({
								blockMap: d.set(a.getKey(), h)
							});
						return o.EditorState.set(e, {
							currentContent: b
						})
					})(e, t) : ((e, t) => {
						const n = e.getSelection();
						if (n.isCollapsed()) return e;
						if (t.getSelection() === n) return e;
						if (n.getFocusKey() === n.getAnchorKey()) return e;
						const s = e.getCurrentContent(),
							r = s.getBlockForKey(n.getAnchorKey()),
							i = s.getBlockForKey(n.getFocusKey()),
							[a, c] = Object(z.e)(s, r, i);
						if (!a && !c) return e;
						let l = e;
						if (a !== c) {
							const t = n.getIsBackward(),
								s = Object(z.o)(n, a ? Pn(a.blocks, !t) : null, c ? Pn(c.blocks, t) : null, t);
							n !== s && (l = o.EditorState.forceSelection(e, s))
						} else if (a && c && a === c) {
							const t = Object(z.g)(r),
								a = Object(z.g)(i),
								d = s.getBlocksAsArray(),
								{
									start: u,
									blocks: p
								} = c,
								m = p[0],
								h = Object(z.g)(m);
							if (0 !== h.colIndex || 0 !== h.rowIndex) throw new Error("First table block must always has [0, 0] coordinate!");
							const b = Object(z.b)(i, r) < 0,
								g = Object(z.k)(t, a),
								f = [],
								x = [];
							In()(p, e => {
								const t = Object(z.g)(e);
								g(t.rowIndex, t.colIndex) ? f.push(e) : e !== m && x.push(e)
							});
							const C = f[0] === m;
							f.sort(z.b);
							const E = [...d.slice(0, u), ...C ? [] : [m], ...f, ...x, ...d.slice(u + p.length)],
								y = Pn(f, !b),
								v = Pn(f, b),
								O = Object(z.o)(n, y, v, b),
								j = s.merge({
									blockMap: o.BlockMapBuilder.createFromArray(E),
									selectionAfter: O
								});
							l = o.EditorState.set(e, {
								currentContent: j
							}), O !== n && (l = o.EditorState.forceSelection(l, O))
						}
						return l
					})(e, t)
				},
				Rn = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./src/reddit/components/RichTextEditor/table/Renderer/index.m.less")),
				Nn = n.n(Rn);
			const Ln = h.a.div("Cell", Nn.a),
				Dn = h.a.div("Row", Nn.a),
				Fn = h.a.div("Table", Nn.a),
				Bn = (e, t) => {
					if (!t || !e.contains(t)) return;
					let n = t;
					for (; n && n !== e;) {
						if (n instanceof HTMLElement && n.hasAttribute("data-row")) return n;
						n.parentElement && (n = n.parentElement)
					}
				},
				An = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
						n = e,
						o = t;
					for (; n && o > 0;) {
						if (n instanceof HTMLElement && n.dataset.table) return n;
						n.parentElement && (n = n.parentElement), o--
					}
				},
				Kn = e => {
					const {
						dataset: t
					} = e;
					if ("string" == typeof t.row && "string" == typeof t.col) return {
						rowIndex: +t.row,
						colIndex: +t.col
					}
				},
				Un = e => {
					const t = window.getSelection(),
						{
							focusNode: n,
							anchorNode: o,
							rangeCount: s
						} = t;
					if (n !== o && s && e) {
						const n = t.getRangeAt(0);
						return Object(F.i)(n, e) && !e.contains(n.commonAncestorContainer)
					}
					return !1
				},
				Hn = e => {
					const t = a.a.Children.toArray(e),
						n = Object(N.e)(t[0]),
						{
							selection: o,
							contentState: s,
							block: r
						} = n.props,
						{
							colCount: i
						} = Object(z.g)(r);
					t.sort((e, t) => Object(z.b)(Object(N.c)(e), Object(N.c)(t)));
					const c = A()(t, i);
					let l, d, u = !1;
					if (o.getAnchorKey() !== o.getFocusKey()) {
						const e = s.getBlocksAsArray(),
							n = s.getBlockForKey(o.getStartKey()),
							i = s.getBlockForKey(o.getEndKey()),
							a = e.indexOf(n),
							c = e.indexOf(i),
							p = e.indexOf(r),
							m = p + t.length - 1;
						a < p && p < c || a < m && m < c ? u = !0 : p <= a && c <= m && (d = Object(z.g)(o.getIsBackward() ? i : n), l = Object(z.g)(o.getIsBackward() ? n : i))
					}
					return {
						rows: c,
						anchorCell: d,
						focusCell: l,
						isSelectWholeTable: u
					}
				};
			class Wn extends a.a.Component {
				constructor(e) {
					super(e), this.tableElem = null, this.onMouseDown = e => {
						if (!this.tableElem || e.nativeEvent.detail < 2) return;
						const t = window.getSelection(),
							n = t.rangeCount ? t.getRangeAt(0) : null,
							o = Bn(this.tableElem, t.focusNode);
						if (n && o)
							if (2 === e.nativeEvent.detail && t.isCollapsed) {
								const s = n.cloneRange();
								s.setEndAfter(o), s.toString() || (e.preventDefault(), t.selectAllChildren(o))
							} else e.nativeEvent.detail >= 3 && (t.selectAllChildren(o), e.preventDefault())
					}, this.onNativeSelectionChange = () => {
						const e = this.tableElem;
						if (!e) return;
						const t = window.getSelection();
						if (t.anchorNode === t.focusNode) return void this.resetSelection();
						const n = Bn(e, t.anchorNode),
							o = Bn(e, t.focusNode);
						n && n === o ? this.resetSelection() : n && o ? this.setCellsRange(n, o) : n || o ? this.selectWholeTable() : Un(e) ? this.selectWholeTable() : this.resetSelection()
					}, this.resetSelection = () => {
						(this.state.anchorCell || this.state.focusCell || this.state.isSelectWholeTable) && this.setState({
							isSelectWholeTable: !1,
							focusCell: void 0,
							anchorCell: void 0
						})
					}, this.setCellsRange = (e, t) => {
						const n = Kn(t),
							o = Kn(e);
						Object(z.h)(n, this.state.focusCell) && Object(z.h)(o, this.state.anchorCell) && !this.state.isSelectWholeTable || this.setState({
							focusCell: n,
							anchorCell: o,
							isSelectWholeTable: !1
						})
					}, this.selectWholeTable = () => {
						!this.state.focusCell && this.state.isSelectWholeTable || this.setState({
							focusCell: void 0,
							isSelectWholeTable: !0
						})
					}, this.state = Hn(e.children)
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillReceiveProps(e) {
					e.children !== this.props.children && this.setState(Hn(e.children))
				}
				render() {
					const {
						rows: e,
						anchorCell: t,
						focusCell: n,
						isSelectWholeTable: o
					} = this.state;
					let s;
					o ? s = (e, t) => !0 : t && n && !Object(z.h)(t, n) && (s = Object(z.k)(t, n));
					const r = e[0].map(e => Object(z.g)(Object(N.e)(e).props.block).alignment),
						i = e.map((e, t) => a.a.createElement(Dn, {
							key: t
						}, e.map((e, n) => a.a.createElement(Ln, {
							"data-row": t,
							"data-col": n,
							"data-selected": !!s && s(t, n),
							key: n,
							style: {
								"--cell-text-alignment": r[n] ? z.a[r[n]] : void 0
							}
						}, e))));
					return a.a.createElement(Fn, {
						className: s ? Nn.a.isFakeSelectionActive : void 0,
						innerRef: e => this.tableElem = e,
						onMouseDown: this.onMouseDown,
						"data-table": !0
					}, i)
				}
			}
			const Vn = Object(D.Map)({
				[S.l]: {
					element: "div",
					wrapper: a.a.createElement(Wn, null)
				}
			});
			var zn = n("./node_modules/lodash/isEqual.js"),
				qn = n.n(zn),
				Gn = n("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				Jn = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less"),
				Zn = n.n(Jn);
			var Qn = e => a.a.createElement("svg", {
					className: Object(p.a)(Zn.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero"
				}, a.a.createElement("path", {
					d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM7.42 16h5.08c.55 0 1-.45 1-1s-.45-1-1-1H7.42c-.56 0-1 .45-1 1s.44 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
				}))),
				Xn = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less"),
				Yn = n.n(Xn);
			var $n = e => a.a.createElement("svg", {
					className: Object(p.a)(Yn.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero"
				}, a.a.createElement("path", {
					d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 16h5.4c.54 0 1-.45 1-1s-.46-1-1-1H3.5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
				}))),
				eo = n("./src/reddit/icons/svgs/FormattingAlignRight/index.m.less"),
				to = n.n(eo);
			var no = e => a.a.createElement("svg", {
					className: Object(p.a)(to.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero"
				}, a.a.createElement("path", {
					d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM11.5 16h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
				}))),
				oo = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less"),
				so = n.n(oo);
			var ro = e => a.a.createElement("svg", {
					className: Object(p.a)(so.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero",
					transform: "vertical" === e.orientation ? "rotate(90, 10, 10)" : ""
				}, a.a.createElement("path", {
					d: "M3 3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3zM2 3v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"
				}), a.a.createElement("path", {
					d: "M2 15h16v1H2M2 4h16v1H2M7.17 11.4l4.24-4.23c.4-.4 1.04-.4 1.43 0 .4.4.4 1.03 0 1.42L8.6 12.82c-.4.4-1.04.4-1.43 0-.4-.4-.4-1.03 0-1.42z"
				}), a.a.createElement("path", {
					d: "M8.6 7.17l4.23 4.24c.4.4.4 1.04 0 1.43-.4.4-1.03.4-1.42 0L7.18 8.6c-.4-.4-.4-1.04 0-1.43.4-.4 1.03-.4 1.42 0z"
				}))),
				io = n("./src/reddit/icons/svgs/FormattingInsertRow/index.m.less"),
				ao = n.n(io);
			const co = {
				up: "rotate(180 10 10)",
				down: "",
				left: "rotate(90 10 10)",
				right: "rotate(-90 10 10)"
			};
			var lo = e => a.a.createElement("svg", {
					className: Object(p.a)(ao.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero",
					transform: co[e.orientation || "down"]
				}, a.a.createElement("path", {
					d: "M17 17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14zm1 0V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"
				}), a.a.createElement("path", {
					d: "M18 6H2V5h16M13 13H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"
				}), a.a.createElement("path", {
					d: "M9 15V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1z"
				}))),
				uo = n("./src/reddit/models/RichTextJson/index.ts");
			var po = function(e) {
				arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const t = e.getSelection(),
					n = e.getCurrentContent(),
					s = n.getBlockForKey(t.getAnchorKey()),
					r = n.getBlockForKey(t.getFocusKey()),
					[i, a] = Object(z.e)(n, s, r);
				if (i && i === a) {
					const {
						blocks: n
					} = i;
					n.sort(z.b);
					const s = Object(z.o)(t, n[0], G()(n));
					return Y(o.EditorState.set(e, {
						selection: s
					}), "rows")
				}
			};
			var mo = (e, t) => {
					const n = e.getSelection(),
						s = e.getCurrentContent(),
						r = s.getBlockForKey(n.getAnchorKey()),
						i = s.getBlockForKey(n.getFocusKey()),
						[a, c] = Object(z.e)(s, r, i);
					if (!a || a !== c) return e;
					const l = Object(z.g)(r),
						d = Object(z.g)(i),
						{
							minCol: u,
							maxCol: p
						} = Object(z.f)(l, d),
						m = a.blocks.map(e => {
							const {
								colIndex: n
							} = Object(z.g)(e);
							return u <= n && n <= p ? Object(z.m)(e, {
								alignment: t
							}) : e
						}),
						h = s.getBlockMap(),
						b = s.merge({
							blockMap: h.merge(o.BlockMapBuilder.createFromArray(m)),
							selectionAfter: n,
							selectionBefore: n
						});
					return o.EditorState.push(e, b, J.b)
				},
				ho = n("./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less"),
				bo = n.n(ho);

			function go() {
				return (go = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const fo = Object(Ge.e)("postCreation.tableToolbar.alignLeft"),
				xo = Object(Ge.e)("postCreation.tableToolbar.alignCenter"),
				Co = Object(Ge.e)("postCreation.tableToolbar.alignRight"),
				Eo = Object(Ge.e)("postCreation.tableToolbar.insertColumnBefore"),
				yo = Object(Ge.e)("postCreation.tableToolbar.insertColumnAfter"),
				vo = Object(Ge.e)("postCreation.tableToolbar.deleteColumn"),
				Oo = Object(Ge.e)("postCreation.tableToolbar.insertRowAbove"),
				jo = Object(Ge.e)("postCreation.tableToolbar.insertRowBelow"),
				So = Object(Ge.e)("postCreation.tableToolbar.deleteRow"),
				To = Object(Ge.e)("postCreation.tableToolbar.deleteTable"),
				ko = (e, t) => n => a.a.createElement(e, go({}, t, n)),
				wo = Object(Zt.f)(lo),
				_o = ko(wo, {
					orientation: "up"
				}),
				Io = ko(wo, {
					orientation: "right"
				}),
				Po = ko(wo, {
					orientation: "left"
				}),
				Mo = Object(Zt.f)(ro),
				Ro = ko(Mo, {
					orientation: "vertical"
				}),
				No = Object(Zt.f)(Qn),
				Lo = Object(Zt.f)($n),
				Do = Object(Zt.f)(no),
				Fo = Object(Zt.f)(zt.b),
				Bo = h.a.wrapped(qt.a, "ToolbarContent", bo.a),
				Ao = e => a.a.createElement(Jt.a, go({}, e, {
					className: Object(p.a)(bo.a.formatterButton, e.className),
					tooltipContentClass: bo.a.tooltip
				}));
			var Ko = e => {
					const {
						editorState: t,
						language: n,
						onChange: o
					} = e;
					return a.a.createElement(Bo, null, a.a.createElement(Ao, {
						Icon: Lo,
						onClick: () => o(mo(t, uo.e)),
						tooltip: fo(n)
					}), a.a.createElement(Ao, {
						Icon: No,
						onClick: () => o(mo(t, uo.d)),
						tooltip: xo(n)
					}), a.a.createElement(Ao, {
						Icon: Do,
						onClick: () => o(mo(t, uo.f)),
						tooltip: Co(n)
					}), a.a.createElement(Gt.c, null), a.a.createElement(Ao, {
						Icon: Po,
						onClick: () => o(Cn(t, "columns", "before")),
						tooltip: Eo(n)
					}), a.a.createElement(Ao, {
						Icon: Io,
						onClick: () => o(Cn(t, "columns", "after")),
						tooltip: yo(n)
					}), a.a.createElement(Ao, {
						Icon: Ro,
						onClick: () => o(Y(t, "columns")),
						tooltip: vo(n)
					}), a.a.createElement(Gt.c, null), a.a.createElement(Ao, {
						Icon: _o,
						onClick: () => o(Cn(t, "rows", "before")),
						tooltip: Oo(n)
					}), a.a.createElement(Ao, {
						Icon: wo,
						onClick: () => o(Cn(t, "rows", "after")),
						tooltip: jo(n)
					}), a.a.createElement(Ao, {
						Icon: Mo,
						onClick: () => o(Y(t, "rows")),
						tooltip: So(n)
					}), a.a.createElement(Gt.c, null), a.a.createElement(Ao, {
						Icon: Fo,
						onClick: () => o(po(t) || t),
						tooltip: To(n)
					}))
				},
				Uo = n("./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less"),
				Ho = n.n(Uo);
			const Wo = 20,
				Vo = h.a.div("ActionButton", Ho.a),
				zo = h.a.div("ToolbarWrapper", Ho.a),
				qo = e => {
					const t = {};
					if (!e || !document.documentElement) return t;
					const n = e.left - 154.5,
						o = e.left + 154.5 - document.documentElement.clientWidth;
					return n < 0 ? t.left = -n + Wo + 2 : o > 0 && (t.left = -o + Wo - 2), t
				},
				Go = e => {
					e.preventDefault(), e.stopPropagation()
				};
			class Jo extends i.Component {
				constructor(e) {
					super(e), this.containerElem = null, this.setContainerRef = e => this.containerElem = e, this.onResize = e => {
						this.hideToolbar(), this.state.tooltipPosition && this.updateForCurrentSelection()
					}, this.onDocumentClick = e => {
						this.state.isToolbarActive && this.containerElem && (this.containerElem.contains(e.target) || this.hideToolbar())
					}, this.onNativeSelectionChange = () => {
						this.updateForCurrentSelection()
					}, this.updateForCurrentSelection = () => {
						const e = window.getSelection();
						if (!e.rangeCount) return void this.hideActionButton();
						const t = e.getRangeAt(0).commonAncestorContainer,
							{
								rteDomRef: n
							} = this.props;
						if (!n.contains(t)) return void this.hideActionButton();
						const o = An(t);
						if (!o) return void this.hideActionButton();
						const s = Bn(o, e.anchorNode);
						if (!s) return void this.hideActionButton();
						const r = Bn(o, e.focusNode);
						r ? this.updateActionButtonPosition(s, r) : this.hideActionButton()
					}, this.updateActionButtonPosition = (e, t) => {
						const n = e.getBoundingClientRect(),
							o = t.getBoundingClientRect(),
							s = {
								top: Math.min(n.top, o.top),
								left: Math.max(n.right, o.right) - Wo
							};
						qn()(this.state.tooltipPosition, s) || this.setState({
							tooltipPosition: s
						}), this.hideToolbar()
					}, this.hideActionButton = () => {
						this.hideToolbar(), this.state.tooltipPosition && this.setState({
							tooltipPosition: null
						})
					}, this.hideToolbar = () => {
						this.state.isToolbarActive && this.setState({
							isToolbarActive: !1
						})
					}, this.onActionButtonClick = e => {
						this.setState(e => ({
							isToolbarActive: !e.isToolbarActive
						})), Go(e)
					}, this.state = {
						isToolbarActive: !1,
						tooltipPosition: null
					}, this.api = {
						hideActionButton: this.hideActionButton
					}
				}
				componentDidMount() {
					const {
						onSetApi: e
					} = this.props;
					document.addEventListener("selectionchange", this.onNativeSelectionChange), document.addEventListener("click", this.onDocumentClick), window.addEventListener("resize", this.onResize), e && e(this.api)
				}
				componentWillUnmount() {
					const {
						onSetApi: e
					} = this.props;
					document.removeEventListener("selectionchange", this.onNativeSelectionChange), document.removeEventListener("click", this.onDocumentClick), window.removeEventListener("resize", this.onResize), e && e(null)
				}
				componentWillReceiveProps(e) {
					const t = e.editorState.getSelection(),
						n = this.props.editorState.getSelection();
					t.getHasFocus() && Object(S.v)(o.RichUtils.getCurrentBlockType(e.editorState)) ? t !== n && this.hideToolbar() : this.hideActionButton()
				}
				render() {
					const e = !this.props.readOnly && this.state.isToolbarActive,
						{
							tooltipPosition: t
						} = this.state;
					return a.a.createElement("div", {
						ref: this.setContainerRef
					}, a.a.createElement(Gn.b, {
						targetPosition: t
					}, a.a.createElement(Vo, {
						className: e ? Ho.a.isPressed : void 0,
						onClick: this.onActionButtonClick,
						onMouseDown: Go,
						onMouseMove: Go
					}, e ? a.a.createElement(zo, {
						style: qo(t)
					}, a.a.createElement(Ko, {
						onChange: this.props.onChange,
						editorState: this.props.editorState,
						language: this.props.language
					})) : null)))
				}
			}
			var Zo = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts");

			function Qo() {
				return (Qo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function Xo() {
				return new Map
			}
			const Yo = a.a.createContext(Xo());

			function $o(e) {
				class t extends a.a.Component {
					constructor() {
						super(...arguments), this.elementRef = null, this.updateElementRef = e => {
							const {
								registry: t
							} = this.props;
							this.elementRef = e, e ? t.set(this.props.entityKey, e) : t.delete(this.props.entityKey)
						}
					}
					componentWillReceiveProps(e) {
						const {
							registry: t
						} = this.props;
						this.props.entityKey !== e.entityKey && this.elementRef && (t.get(this.props.entityKey) === this.elementRef && t.delete(this.props.entityKey), t.set(e.entityKey, this.elementRef))
					}
					render() {
						return a.a.createElement("span", {
							ref: this.updateElementRef
						}, a.a.createElement(e, this.props))
					}
				}
				return e => a.a.createElement(Yo.Consumer, null, n => a.a.createElement(t, Qo({}, e, {
					registry: n
				})))
			}
			var es = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				ts = n("./src/reddit/components/RichTextEditor/emotes/decorator.m.less"),
				ns = n.n(ts);
			const os = {
					strategy: es.e,
					component: $o(e => {
						const {
							contentState: t
						} = e, n = Object(es.i)(t), o = t.getEntity(e.entityKey), {
							id: s,
							emoji: r,
							sticker: i
						} = o.getData(), c = n ? i : r;
						return a.a.createElement("span", {
							className: Object(p.a)(ns.a.emote, {
								[ns.a.sticker]: n
							}),
							title: ":".concat(s, ":"),
							style: {
								backgroundImage: "url(".concat(c.path, ")"),
								height: c.y,
								width: c.x
							}
						}, e.children)
					})
				},
				ss = () => os;
			var rs = n("./src/higherOrderComponents/makeAsync.tsx"),
				is = Object(rs.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("EmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/tooltip.tsx")).then(e => e.default)
				});
			const as = Object(rs.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GifTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx")).then(e => e.default)
			});
			var cs = function(e) {
				return a.a.createElement(as, e)
			};
			const ls = new Set([L.a.LINK]);
			var ds = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				us = n("./src/reddit/components/RichTextEditor/entity/link/decorator.m.less"),
				ps = n.n(us);
			const ms = h.a.a("RegularLink", ps.a),
				hs = {
					strategy: ds.a,
					component: $o(e => {
						const t = e.contentState.getEntity(e.entityKey),
							{
								url: n
							} = t.getData();
						return a.a.createElement(ms, {
							href: n
						}, e.children)
					})
				},
				bs = () => hs;
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var gs = n("./src/lib/linkMatchers/index.ts");
			const fs = (e, t) => {
					if (t.getType() === S.f) return [];
					return (e.match(t.getText()) || []).filter(e => ((e, t) => {
						let {
							index: n,
							lastIndex: o
						} = t;
						for (let s = n; s < o; s++) {
							if (e.getInlineStyleAt(s).contains(S.k.MONOSPACE)) return !1
						}
						return !0
					})(t, e))
				},
				xs = (e, t, n, s, r, i) => {
					const a = e.getBlockForKey(t),
						c = o.SelectionState.createEmpty(t),
						l = [],
						d = new Set;
					let u = e;
					const p = n === L.a.USER_MENTION ? L.a.USER_LINK : n,
						m = (e, t, o) => {
							let s = null;
							for (let r = e; r < t; r++) {
								const e = a.getEntityAt(r),
									t = e && u.getEntity(e);
								if (t) {
									if (t.getType() !== n) return;
									s || d.has(e) || (s = e)
								}
							}
							if (s) {
								u.getEntity(s).getData().url !== o && (u = u.mergeEntityData(s, {
									url: o
								}))
							}
							return s || (e => (u = u.createEntity(p, "MUTABLE", {
								url: e
							})).getLastCreatedEntityKey())(o)
						},
						h = (e, t, n) => {
							const s = c.merge({
								anchorOffset: e,
								focusOffset: t
							});
							u = o.Modifier.applyEntity(u, s, n)
						},
						g = (e, t) => h(e, t, null),
						f = u.getBlockForKey(t);
					fs(s, f).forEach((e, s) => {
						let {
							index: a,
							lastIndex: p,
							url: g
						} = e;
						const f = m(a, p, g);
						f && (n === L.a.USER_MENTION ? (((e, n, s) => {
							const a = u && u.getBlockForKey(t),
								l = a && a.getText().substr(e, n);
							if (l && l.replace(b.d.mention, "") && l.startsWith(b.d.mention) && b.c.test(l.replace(b.d.mention, ""))) {
								const t = c.merge({
										anchorOffset: e,
										focusOffset: e + b.d.mention.length
									}),
									a = c.merge({
										anchorOffset: e,
										focusOffset: n + b.d.mention.length
									}),
									l = c.merge({
										anchorOffset: n + b.d.mention.length,
										focusOffset: n + b.d.mention.length
									});
								u = Object(V.b)(u, t, b.d.profile), u = o.Modifier.applyEntity(u, a, s), r && i && i(o.EditorState.forceSelection(r, l))
							}
						})(a + s, p + s, f), l.push([a + s, p + s + 1])) : (h(a, p, f), l.push([a, p])), d.add(f))
					});
					let x = 0;
					return f.findEntityRanges(e => {
						const t = e.getEntity();
						return !!t && u.getEntity(t).getType() === n
					}, (e, t) => {
						if (x >= l.length) return void g(e, t);
						const [n, o] = l[x];
						t <= n ? g(e, t) : (e < n && g(e, n - 1), t > o && g(o, t), x++)
					}), u
				},
				Cs = (e, t) => {
					const n = e.getCurrentContent(),
						s = t.getCurrentContent();
					if (n === s) return e;
					const r = n.getBlockMap(),
						i = s.getBlockMap();
					let a = n;
					return r.forEach((t, n) => {
						if (n) {
							if (t === i.get(n)) return;
							a = xs(a, n, L.a.SUBREDDIT_LINK, gs.f), a = xs(a, n, L.a.USER_LINK, gs.i), a = xs(a, n, L.a.USER_MENTION, gs.d, e, t => e = t)
						}
					}), e.getCurrentContent() === a ? e : (a = a.merge({
						selectionAfter: e.getCurrentContent().getSelectionAfter(),
						selectionBefore: e.getCurrentContent().getSelectionBefore()
					}), o.EditorState.set(e, {
						currentContent: a
					}))
				};
			var Es = e => {
				return !!e.getCurrentContent().getBlockMap().filter(e => !!e && e.getType() === S.a).size
			};
			n("./node_modules/core-js/modules/es6.regexp.constructor.js");
			const ys = " ".repeat(4),
				vs = new RegExp("^ {1,".concat(4, "}|\\t")),
				Os = new Set([S.b.CODE_BLOCK]),
				js = (e, t) => {
					const n = t.getCurrentContent(),
						s = t.getSelection(),
						r = e.shiftKey;
					let i = n,
						a = s.getAnchorOffset(),
						c = s.getFocusOffset();
					if (Object(Z.a)(n, s, (e, t) => {
							const n = e.getType();
							if ("paragraph" === n || !Os.has(n)) return !1;
							let l = null;
							const d = e.getText(),
								u = o.SelectionState.createEmpty(t);
							if (r) {
								const e = d.match(vs);
								if (e) {
									const t = e[0].length;
									i = V.b(i, u.merge({
										focusOffset: t
									}), ""), l = -t
								}
							} else i = V.a(i, s.isCollapsed() ? s : u, ys), l = 4;
							null !== l && (t === s.getAnchorKey() && (a += l), t === s.getFocusKey() && (c += l))
						}), i !== n) return i = i.merge({
						selectionAfter: s.merge({
							anchorOffset: a,
							focusOffset: c
						})
					}), e.preventDefault(), o.EditorState.push(t, i, r ? "remove-range" : "insert-characters")
				},
				Ss = (e, t) => (e => {
					const t = e.getSelection(),
						n = e.getCurrentContent();
					if (!t.isCollapsed()) return $(e);
					if (0 === t.getStartOffset()) {
						const o = n.getBlockForKey(t.getEndKey());
						if (Object(S.v)(o.getType())) return e; {
							const t = n.getBlockBefore(o.getKey());
							if (t && Object(S.v)(t.getType())) return e
						}
					}
				})(e) || ((e, t) => {
					const n = e.getSelection(),
						s = e.getCurrentContent();
					if (n.isCollapsed() && 0 === n.getStartOffset()) {
						const r = s.getBlockForKey(n.getEndKey());
						if (Object(S.o)(r.getType())) return Object(R.d)(e, r.getKey());
						if (Object(S.u)(r.getType())) {
							const t = s.getBlockBefore(r.getKey());
							return o.EditorState.forceSelection(e, Object(N.b)(t))
						}
						if (!Object(R.r)(t) && Object(N.g)(r)) {
							const t = s.getBlockBefore(r.getKey());
							if (t && Object(S.o)(t.getType())) return e = o.EditorState.push(e, Object(N.i)(s, r.getKey()), J.f), o.EditorState.forceSelection(e, Object(N.b)(t))
						}
					}
				})(e, t),
				Ts = (e, t) => (e => {
					const t = e.getSelection(),
						n = e.getCurrentContent();
					if (!t.isCollapsed()) return $(e); {
						const o = n.getBlockForKey(t.getEndKey());
						if (t.getEndOffset() === o.getLength()) {
							if (Object(S.v)(o.getType())) return e; {
								const t = n.getBlockAfter(o.getKey());
								if (t && Object(S.v)(t.getType())) return e
							}
						}
					}
				})(e) || ((e, t) => {
					const n = e.getSelection(),
						s = e.getCurrentContent();
					if (!n.isCollapsed()) return;
					const r = s.getBlockForKey(n.getEndKey());
					if (n.getEndOffset() === r.getLength()) {
						if (Object(S.o)(r.getType())) return Object(R.d)(e, r.getKey()); {
							const i = s.getBlockAfter(n.getEndKey());
							if (i && Object(S.o)(i.getType())) {
								if (Object(R.r)(t)) return Object(R.d)(e, i.getKey());
								if (Object(N.g)(r)) return e = o.EditorState.push(e, Object(N.i)(s, r.getKey()), J.f), o.EditorState.forceSelection(e, Object(N.b)(i))
							}
						}
					}
				})(e, t),
				ks = e => {
					const t = e.getSelection();
					if (!t.isCollapsed()) return !1;
					const n = o.RichUtils.getCurrentBlockType(e);
					if (!S.c.includes(n)) return !1;
					if (t.getFocusOffset() > 0) {
						if ("\n" === e.getCurrentContent().getBlockForKey(t.getFocusKey()).getText()[t.getFocusOffset() - 1]) return !1
					}
					return !0
				};
			var ws = n("./src/lib/memoizeByReference/index.ts");
			const _s = Object(ws.a)(e => {
					const t = e.getSelection();
					if (!t.isCollapsed()) return;
					const n = t.getStartOffset(),
						o = e.getCurrentContent(),
						s = o.getBlockForKey(t.getFocusKey());
					if (s.getType() !== S.n) return;
					const r = s.getText();
					if (r.startsWith("1.") && 2 === n) return S.i.ORDERED;
					if (r.startsWith("*") && 1 === n) {
						const e = o.getBlockBefore(s.getKey());
						if (e && e.getType() === S.n && e.getText().startsWith("* ")) return;
						return S.i.UNORDERED
					}
				}),
				Is = e => {
					const t = _s(e);
					if (!t) return e;
					const n = Object(Zo.a)(e);
					let s = o.Modifier.replaceText(n.getCurrentContent(), n.getSelection().merge({
						anchorOffset: 0
					}), "");
					return s = o.Modifier.setBlockType(s, s.getSelectionAfter(), t), o.EditorState.push(n, s, J.c)
				};
			var Ps = n("./src/reddit/components/RichTextEditor/helpers/styles.ts"),
				Ms = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				Rs = n("./src/reddit/components/RichTextEditor/spoiler/decorator.m.less"),
				Ns = n.n(Rs);
			const Ls = e => a.a.createElement("span", {
					className: Ns.a.spoiler
				}, a.a.createElement("span", null), e.children, a.a.createElement("span", null)),
				Ds = () => ({
					strategy: Ms.a,
					component: Ls
				});
			var Fs = n("./src/reddit/components/FocusableContent/index.tsx"),
				Bs = n("./src/reddit/components/RichTextEditor/Blockquote/index.m.less"),
				As = n.n(Bs);
			const Ks = h.a.div("BlockQuoteWrapper", As.a),
				Us = Object(D.Map)({
					[S.e]: {
						element: "blockquote",
						wrapper: a.a.createElement(Ks, null)
					}
				});
			var Hs = n("./src/reddit/components/RichTextEditor/CodeBlock/index.m.less"),
				Ws = n.n(Hs);
			const Vs = h.a.div("CodeBlockWrapper", Ws.a),
				zs = Object(D.Map)({
					[S.f]: {
						element: "code",
						wrapper: a.a.createElement(Vs, null)
					}
				});
			var qs = n("./node_modules/bowser/src/bowser.js"),
				Gs = n.n(qs),
				Js = n("./node_modules/lodash/includes.js"),
				Zs = n.n(Js),
				Qs = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				Xs = n("./src/reddit/components/RichTextEditor/DragController/index.m.less"),
				Ys = n.n(Xs);
			const $s = h.a.div("DropLine", Ys.a),
				er = h.a.wrapped(Gn.b, "Tooltip", Ys.a);
			class tr extends i.Component {
				constructor(e) {
					super(e), this.dragCount = 0, this.setContainerRef = e => this.containerRef = e, this.preventDocumentDrop = e => {
						!! function e(t) {
							return t.draggable ? t : t.parentElement ? e(t.parentElement) : null
						}(e.target) || (e.preventDefault(), e.stopPropagation())
					}, this.onDragOver = e => {
						const t = Zs()(e.dataTransfer.types, He);
						if (!t) {
							if (!Object(Qs.c)(e.dataTransfer) || !this.props.allowMediaUploads) return
						}
						if (!t && !Object(Qs.c)(e.dataTransfer)) return;
						e.preventDefault();
						try {
							e.dataTransfer.dropEffect = t ? "move" : "copy"
						} catch (r) {}
						const {
							editorState: n
						} = this.props;
						let o = null;
						const s = Object(Qs.b)(n, e);
						if (s) {
							const e = this.containerRef.getBoundingClientRect().left;
							o = {
								top: s.clientY,
								left: e
							}
						}
						qn()(o, this.state.point) || this.setState({
							point: o
						})
					}, this.onDragEnter = e => {
						this.dragCount++
					}, this.onDragLeave = e => {
						this.dragCount--, 0 === this.dragCount && this.state.point && this.setState({
							point: null
						})
					}, this.onDrop = e => {
						const t = () => {
								this.dragCount = 0, this.setState({
									point: null
								})
							},
							n = Gs.a.msie ? null : e.dataTransfer.getData(He),
							o = Object(Qs.a)(e.dataTransfer);
						if (!(n || o.length && this.props.allowMediaUploads)) return void t();
						const {
							editorState: s
						} = this.props, r = Object(Qs.b)(s, e);
						if (!r) return void t();
						e.preventDefault(), e.stopPropagation();
						const i = r.isBefore ? N.a.before : N.a.after;
						n ? this.props.onBlockMove(n, r.blockKey, i) : setTimeout(() => {
							this.props.onFilesDrop(o, r.blockKey, i)
						}), t()
					}, this.state = {
						point: null
					}
				}
				componentDidMount() {
					document.addEventListener("drop", this.preventDocumentDrop), document.addEventListener("dragover", this.preventDocumentDrop)
				}
				componentWillUnmount() {
					document.removeEventListener("drop", this.preventDocumentDrop), document.removeEventListener("dragover", this.preventDocumentDrop)
				}
				render() {
					const {
						children: e
					} = this.props, {
						point: t
					} = this.state, n = a.a.Children.only(e);
					return a.a.createElement("div", {
						className: Object(p.a)(Ys.a.container, {
							[Ys.a.hideCaret]: !!t
						}),
						onDragEnter: this.onDragEnter,
						onDragLeave: this.onDragLeave,
						onDragOver: this.onDragOver,
						onDrop: this.onDrop,
						ref: this.setContainerRef
					}, a.a.createElement("div", null, n), a.a.createElement(er, {
						targetPosition: t
					}, a.a.createElement($s, null)))
				}
			}
			var nr = n("./node_modules/draft-js/lib/DraftPasteProcessor.js"),
				or = n.n(nr),
				sr = n("./node_modules/draft-js/lib/getEntityKeyForSelection.js"),
				rr = n.n(sr),
				ir = n("./node_modules/draft-js/lib/splitTextIntoTextBlocks.js"),
				ar = n.n(ir),
				cr = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts"),
				lr = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function dr(e, t, n) {
				const s = Object(o.convertFromHTML)(t, void 0, n);
				if (s) {
					const {
						contentBlocks: t,
						entityMap: n
					} = s;
					if (t) {
						const s = o.BlockMapBuilder.createFromArray(function(e) {
							return e.map(e => Object(S.r)(e.getType()) ? w(e) : e)
						}(t));
						return [e.set("entityMap", n), s]
					}
				}
				return [e, null]
			}

			function ur(e, t, n) {
				const s = ar()(t),
					r = n && 1 === s.length ? n : o.CharacterMetadata.create(),
					i = or.a.processText(s, r).map(e => e.merge({
						type: S.n
					}));
				return o.BlockMapBuilder.createFromArray(i)
			}
			const pr = e => {
					if (!e) return null;
					const t = document.createElement("div");
					t.innerHTML = e;
					const n = t.querySelector("[".concat("data-reddit-rtjson", "]"));
					return n && n.getAttribute("data-reddit-rtjson")
				},
				mr = e => {
					if (ge()) return {
						text: window.clipboardData.getData("text"),
						html: null
					}; {
						const t = e.clipboardData.getData("text/html");
						return {
							text: e.clipboardData.getData("text/plain"),
							html: t
						}
					}
				};

			function hr(e, t, n, s) {
				const {
					text: r,
					html: i
				} = mr(n), a = function(e, t, n, o) {
					const s = {
							text: t,
							html: n,
							rtjson: o,
							fragment: null
						},
						r = e.getClipboard();
					return r && n && function(e, t, n, o) {
						return -1 !== t.indexOf(o) || 1 === e.size && e.first().getText() === n
					}(r, n, t, e.getEditorKey()) && (s.fragment = r), s
				}(t, r, i, i && pr(i));
				t.getClipboard() && !a.fragment && t.setClipboard(null);
				const c = e.getCurrentContent(),
					l = e.getSelection(),
					d = e.getCurrentInlineStyle(),
					u = t.props.blockRenderMap;
				let p = null,
					m = c;
				if (!(p = function(e, t, n) {
						const o = e.getBlockForKey(t.getStartKey()),
							s = e.getBlockForKey(t.getEndKey());
						if (o.getType() === S.f || s.getType() === S.f) return ur(0, n).map(e => e.merge({
							type: S.f,
							depth: 0
						}))
					}(m, l, a.text)) && a.fragment && (p = a.fragment, [m, p] = Object(cr.b)(m, p), p = ve(p, s)), !p && a.rtjson && (p = function(e) {
						const t = JSON.parse(e);
						return Object(o.convertFromRaw)(t).getBlockMap()
					}(a.rtjson)), !p && a.html && ([m, p] = dr(m, a.html, u)), !p && a.text) {
					const e = function(e, t, n) {
						return o.CharacterMetadata.create({
							style: n,
							entity: rr()(e, t)
						})
					}(m, l, d);
					p = ur(0, a.text, e), [m, p] = function(e, t) {
						let n = e,
							o = t;
						return t.forEach(e => {
							const t = e.getText(),
								s = gs.e.match(t);
							if (!s) return;
							let r = e;
							s.forEach(e => {
								let {
									index: t,
									lastIndex: s,
									url: i
								} = e;
								const a = (n = n.createEntity(L.a.LINK, "MUTABLE", {
									url: i
								})).getLastCreatedEntityKey();
								r = Object(lr.a)(r, t, s, a), o = o.set(r.getKey(), r)
							})
						}), [n, o]
					}(m, p)
				}
				if (p) return m = function(e, t, n) {
					if (n.isEmpty()) return e;
					let o = ie(e, t, n) || Oe(e, t, n);
					return o || (o = V.c(e, t, n))
				}(m, l, p), o.EditorState.push(e, m, J.e)
			}
			var br = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				gr = n("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				fr = n("./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less"),
				xr = n.n(fr);
			const Cr = Object(Ge.e)("postCreation.linkDetailsPopup.changeButton"),
				Er = Object(Ge.e)("postCreation.linkDetailsPopup.removeButton"),
				yr = h.a.div("LinkDetailsBox", xr.a),
				vr = h.a.a("Link", xr.a),
				Or = h.a.a("LinkButton", xr.a);
			var jr = e => a.a.createElement("div", null, a.a.createElement(yr, {
					onMouseDown: e => e.preventDefault()
				}, a.a.createElement(vr, {
					href: e.url,
					target: "_blank"
				}, e.url), a.a.createElement("span", null, " – "), a.a.createElement(Or, {
					onClick: () => e.onStartEdit(),
					role: "button"
				}, Cr(e.language)), a.a.createElement("span", null, " | "), a.a.createElement(Or, {
					onClick: () => e.onRemove(),
					role: "button"
				}, Er(e.language)))),
				Sr = n("./src/reddit/controls/Input/index.tsx"),
				Tr = n("./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less"),
				kr = n.n(Tr);
			const wr = Object(Ge.e)("postCreation.linkEditorPopup.insertButton"),
				_r = Object(Ge.e)("postCreation.linkEditorPopup.applyButton"),
				Ir = Object(Ge.e)("postCreation.linkEditorPopup.textLabel"),
				Pr = Object(Ge.e)("postCreation.linkEditorPopup.linkLabel"),
				Mr = Object(Ge.e)("postCreation.linkEditorPopup.textInputPlaceholder"),
				Rr = Object(Ge.e)("postCreation.linkEditorPopup.linkInputPlaceholder"),
				Nr = Object(Ge.e)("postCreation.linkEditorPopup.invalidLinkHint"),
				Lr = h.a.form("EditForm", kr.a),
				Dr = h.a.wrapped(e => a.a.createElement("div", e, e.children), "LinkEditorBox", kr.a),
				Fr = h.a.wrapped(Sr.a, "Input", kr.a),
				Br = h.a.label("Label", kr.a),
				Ar = h.a.div("HintAndButtonRow", kr.a),
				Kr = h.a.span("InvalidUrlHint", kr.a),
				Ur = h.a.wrapped(nt.f, "SubmitButton", kr.a),
				Hr = e => {
					e && (e.focus(), e.select())
				},
				Wr = / /g,
				Vr = e => e.replace(Wr, "%20");
			class zr extends i.Component {
				constructor(e) {
					super(e), this.focused = !1, this.focusLostTimer = 0, this.textInputElementRef = null, this.urlInputElementRef = null, this.onEdited = () => {
						const e = this.state.url.trim(),
							t = Vr(e),
							n = Object(gs.h)(t);
						if (!n) return this.setState({
							isInvalidUrl: !0
						}), void(this.urlInputElementRef && this.urlInputElementRef.focus());
						const o = n.url;
						this.props.onEdited(o, this.state.displayText.trim() || e)
					}, this.onFocus = () => {
						this.focused = !0
					}, this.onBlur = () => {
						this.focused = !1, this.focusLostTimer = window.setTimeout(() => {
							this.focused || this.props.onFocusLost()
						}, 0)
					}, this.onClick = e => {
						e.stopPropagation()
					}, this.handleUrlChange = e => {
						const t = e.target.value;
						let {
							isInvalidUrl: n
						} = this.state;
						n && Object(gs.g)(gs.e, t) && (n = !1), this.setState({
							url: t,
							isInvalidUrl: n
						})
					}, this.handleDisplayTextChange = e => {
						this.setState({
							displayText: e.target.value
						})
					}, this.handleSubmit = e => {
						this.onEdited(), e.preventDefault()
					}, this.state = {
						url: e.url,
						displayText: e.displayText,
						isInvalidUrl: !1
					}
				}
				componentDidMount() {
					Object(gs.g)(gs.e, this.state.displayText) ? Hr(this.textInputElementRef) : Hr(this.urlInputElementRef)
				}
				componentWillUnmount() {
					this.focusLostTimer && clearTimeout(this.focusLostTimer)
				}
				render() {
					const {
						language: e,
						isInsertMode: t
					} = this.props;
					return a.a.createElement(Dr, {
						tabIndex: 0,
						onClick: this.onClick,
						onBlur: this.onBlur,
						onFocus: this.onFocus
					}, a.a.createElement(Lr, {
						onSubmit: this.handleSubmit
					}, a.a.createElement(Br, null, Ir(e), ":", a.a.createElement(Fr, {
						innerRef: e => this.textInputElementRef = e,
						type: "text",
						placeholder: Mr(e),
						value: this.state.displayText,
						onChange: this.handleDisplayTextChange
					})), a.a.createElement(Br, null, Pr(e), ":", a.a.createElement(Fr, {
						innerRef: e => this.urlInputElementRef = e,
						type: "text",
						placeholder: Rr(e),
						value: this.state.url,
						onChange: this.handleUrlChange
					})), a.a.createElement(Ar, null, a.a.createElement(Ur, {
						type: "submit",
						disabled: this.state.isInvalidUrl
					}, t ? wr(e) : _r(e)), this.state.isInvalidUrl ? a.a.createElement(Kr, null, Nr(e)) : null)))
				}
			}

			function qr(e, t, n) {
				const o = e.getCurrentContent(),
					s = {
						text: "",
						url: ""
					};
				if (t.isCollapsed()) return s;
				if (n) s.text = n.entityText, s.url = o.getEntity(n.entityKey).getData().url;
				else {
					s.text = function(e, t) {
						if (e.getStartKey() !== e.getEndKey()) throw new Error("Selection must be in a single block");
						return e.isCollapsed() ? "" : t.getBlockForKey(e.getStartKey()).getText().slice(e.getStartOffset(), e.getEndOffset())
					}(t, e.getCurrentContent());
					const n = Object(gs.g)(gs.e, s.text);
					n && (s.url = n.url)
				}
				return s
			}

			function Gr(e, t) {
				return o.EditorState.set(e, {
					currentContent: o.Modifier.removeInlineStyle(e.getCurrentContent(), t, S.k.HIGHLIGHT)
				})
			}
			class Jr extends i.Component {
				constructor(e) {
					super(e), this.api = null, this.updateTooltipPosition = null, this.lastEditorSelectionClientRect = null, this.editLinkInSelection = e => {
						const {
							editorState: t
						} = this.props;
						let n = e,
							s = t;
						const r = t.getCurrentContent();
						if (!Object(ds.e)(r, e)) return !1;
						const i = Object(br.a)(r, e);
						if (i) {
							if (r.getEntity(i.entityKey).getType() !== L.a.LINK) return !1;
							n = i.entitySelection
						} else this.isEditorFocused() && (this.lastEditorSelectionClientRect = Object(gr.a)());
						return this.state.linkSelection && (s = Gr(t, this.state.linkSelection)), s = function(e, t) {
							return o.EditorState.set(e, {
								currentContent: o.Modifier.applyInlineStyle(e.getCurrentContent(), t, S.k.HIGHLIGHT)
							})
						}(t, n), this.props.onChange(s, () => {
							this.setState({
								linkSelection: n,
								linkEntity: i
							})
						}), !0
					}, this.hidePopup = () => {
						this.interruptLinkEditing(), this.hideDetailsPopup()
					}, this.showDetailsPopup = () => {
						this.state.isDetailsPopupActive || this.setState({
							isDetailsPopupActive: !0
						})
					}, this.hideDetailsPopup = () => {
						this.state.isDetailsPopupActive && this.setState({
							isDetailsPopupActive: !1
						})
					}, this.updatePosition = () => {
						if (!this.updateTooltipPosition) return;
						const {
							editorState: e
						} = this.props, t = e.getCurrentContent();
						let n;
						if (this.state.linkSelection) {
							const e = Object(br.a)(t, this.state.linkSelection);
							if (e) {
								const t = this.props.entityElementRegistry.get(e.entityKey);
								n = t && t.getBoundingClientRect()
							} else this.lastEditorSelectionClientRect && (n = this.lastEditorSelectionClientRect)
						} else {
							const t = Object(ds.c)(e);
							if (t) {
								const e = this.props.entityElementRegistry.get(t.entityKey);
								n = e && e.getBoundingClientRect()
							}
						}
						n && (this.updateTooltipPosition({
							left: n.left,
							top: n.bottom
						}), this.lastEditorSelectionClientRect = null)
					}, this.handleLink = (e, t) => {
						const {
							linkSelection: n
						} = this.state, {
							editorState: s
						} = this.props;
						let r = s;
						n && (n.isCollapsed() || (r = Gr(s, n)), void 0 !== e && (r = Object(ds.h)(r, n, e, t)), this.setState({
							linkSelection: null,
							linkEntity: null
						}), r !== s && (r = o.EditorState.forceSelection(r, r.getSelection()), this.props.onChange(r)))
					}, this.onLinkEdited = (e, t) => {
						this.handleLink(e, t)
					}, this.interruptLinkEditing = () => this.handleLink(), this.isEditorFocused = () => this.props.editorState.getSelection().getHasFocus(), this.onStartEditFocusedLink = () => {
						const {
							editorState: e
						} = this.props, t = Object(ds.c)(e);
						t && this.editLinkInSelection(t.entitySelection)
					}, this.onRemoveFocusedLink = () => {
						const {
							editorState: e
						} = this.props, t = Object(ds.c)(e);
						t && this.props.onChange(Object(ds.h)(e, t.entitySelection, ""))
					}, this.renderEditorPopup = () => {
						const {
							linkSelection: e,
							linkEntity: t
						} = this.state, {
							editorState: n
						} = this.props;
						if (!e) return null;
						const {
							text: o,
							url: s
						} = qr(n, e, t);
						return a.a.createElement(zr, {
							url: s,
							displayText: o,
							isInsertMode: !t,
							onEdited: this.onLinkEdited,
							onFocusLost: this.interruptLinkEditing,
							language: this.props.language
						})
					}, this.renderDetailsPopup = () => {
						const e = Object(ds.c)(this.props.editorState);
						return e && this.isEditorFocused() && this.state.isDetailsPopupActive ? a.a.createElement(jr, {
							url: e.url,
							onStartEdit: this.onStartEditFocusedLink,
							onRemove: this.onRemoveFocusedLink,
							language: this.props.language
						}) : null
					}, this.state = {
						isDetailsPopupActive: !1,
						linkSelection: null,
						linkEntity: null
					}, this.api = {
						editLinkInSelection: this.editLinkInSelection,
						hidePopup: this.hidePopup
					}
				}
				componentDidMount() {
					const {
						onSetApi: e
					} = this.props;
					this.api && e && e(this.api)
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null)
				}
				componentDidUpdate(e, t) {
					t.linkSelection === this.state.linkSelection && e.editorState === this.props.editorState || (this.showDetailsPopup(), this.updatePosition())
				}
				render() {
					return a.a.createElement(Gn.b, {
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: Gn.a.Above
					}, this.renderEditorPopup() || this.renderDetailsPopup())
				}
			}
			var Zr = n("./src/reddit/components/RichTextEditor/OrderedList/index.m.less"),
				Qr = n.n(Zr);
			const Xr = h.a.ol("OrderedListWrapper", Qr.a),
				Yr = Object(D.Map)({
					[S.i.ORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: a.a.createElement(Xr, null)
					}
				});
			var $r = n("./src/reddit/components/RichTextEditor/Paragraph/index.m.less"),
				ei = n.n($r);
			const ti = h.a.div("ParagraphWrapper", ei.a),
				ni = Object(D.Map)({
					[S.n]: {
						element: "div",
						aliasedElements: ["p"],
						wrapper: a.a.createElement(ti, null)
					}
				});
			var oi = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				si = n("./src/reddit/helpers/styles/mixins/fonts.tsx"),
				ri = n("./src/reddit/components/RichTextEditor/TextRendering/index.m.less"),
				ii = n.n(ri);
			const ai = Object(ws.a)(() => ({
					[S.k.SUPERSCRIPT]: {
						position: "relative",
						top: "-0.4em",
						fontSize: "0.7em",
						lineHeight: "0.7em"
					},
					[S.k.HIGHLIGHT]: {
						backgroundColor: "#b8e0f9"
					},
					[S.k.UNDERLINE]: {
						textDecoration: "none"
					},
					[S.k.MONOSPACE]: {
						backgroundColor: "var(--newRedditTheme-field)",
						caretColor: "#000",
						color: "var(--newRedditTheme-monospaceColor)",
						fontFamily: si.c,
						padding: "0.1em 0.2em",
						fontSize: "0.8em",
						borderRadius: "3px"
					}
				})),
				ci = h.a.div("H1", ii.a),
				li = h.a.div("H2", ii.a),
				di = h.a.div("H3", ii.a),
				ui = h.a.div("H4", ii.a),
				pi = h.a.div("H5", ii.a),
				mi = h.a.div("H6", ii.a),
				hi = e => ({
					component: t => a.a.createElement(e, null, a.a.createElement(o.EditorBlock, t)),
					editable: !0
				}),
				bi = {
					[S.g.H1]: hi(ci),
					[S.g.H2]: hi(li),
					[S.g.H3]: hi(di),
					[S.g.H4]: hi(ui),
					[S.g.H5]: hi(pi),
					[S.g.H6]: hi(mi)
				},
				gi = ["italic normal 1em 'Noto Sans'", "italic bold 1em 'Noto Sans'", "normal bold 1em 'Noto Sans'"],
				fi = () => {
					const e = document.fonts;
					e && e.load && gi.forEach(t => e.load(t))
				};
			var xi = n("./src/reddit/components/RichTextEditor/UnorderedList/index.m.less"),
				Ci = n.n(xi);
			const Ei = h.a.ul("UnorderedListWrapper", Ci.a),
				yi = Object(D.Map)({
					[S.i.UNORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: a.a.createElement(Ei, null)
					}
				});
			var vi = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Oi = n("./node_modules/lodash/debounce.js"),
				ji = n.n(Oi),
				Si = n("./src/reddit/actions/subredditAutocomplete.ts"),
				Ti = n("./src/reddit/controls/SubredditDropdown/index.m.less"),
				ki = n.n(Ti);

			function wi() {
				return (wi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var _i = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const Ii = e => {
				var {
					isFocused: t
				} = e, n = _i(e, ["isFocused"]);
				return a.a.createElement("div", wi({
					className: Object(p.a)(ki.a.entry, {
						[ki.a.mIsFocused]: t
					})
				}, n))
			};
			class Pi extends i.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.onMouseUp = () => {
						this.mouseDown && (this.props.onEntrySelect(this.props.entry), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onEntryFocus(this.props.entry)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1
				}
				render() {
					return a.a.createElement(Ii, {
						isFocused: this.props.isFocused,
						onMouseDown: this.onMouseDown,
						onMouseUp: this.onMouseUp,
						onMouseOver: this.onMouseOver
					}, this.props.children)
				}
			}
			var Mi = n("./src/reddit/helpers/name/index.ts"),
				Ri = n("./src/reddit/selectors/subredditAutocomplete.ts");
			const Ni = Object(l.c)({
				subredditSuggestions: (e, t) => {
					const n = Object(Ri.d)(e, t);
					return n ? n.subreddits : []
				}
			});
			class Li extends i.Component {
				constructor(e) {
					super(e), this.api = null, this.onEntrySelect = e => {
						this.props.onSelect(this.props.subredditSuggestions[e].name)
					}, this.onEntryFocus = e => {
						this.setState({
							selectedSuggestionIndex: e
						})
					}, this.moveUp = () => {
						if (this.props.subredditSuggestions.length > 1) {
							let e = this.state.selectedSuggestionIndex - 1;
							return e = e < 0 ? this.props.subredditSuggestions.length - 1 : e, this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.props.subredditSuggestions.length > 1) {
							const e = (this.state.selectedSuggestionIndex + 1) % this.props.subredditSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.props.subredditSuggestions.length) {
							const e = this.props.subredditSuggestions[this.state.selectedSuggestionIndex];
							return e && this.props.onSelect(e.name), !0
						}
						return !1
					}, this.state = {
						selectedSuggestionIndex: 0
					}, this.requestSubredditAutocomplete = ji()(this.requestSubredditAutocomplete.bind(this), 200, {
						maxWait: 200
					}), this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.requestSubredditAutocomplete(this.props.substring), this.props.onDropdownApi(this.api)
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(e) {
					e.substring !== this.props.substring && (this.requestSubredditAutocomplete(e.substring), this.setState({
						selectedSuggestionIndex: 0
					}))
				}
				requestSubredditAutocomplete(e) {
					this.props.onGetSubredditAutocomplete(e)
				}
				render() {
					return this.props.subredditSuggestions.length ? a.a.createElement("div", {
						className: Object(p.a)(ki.a.list, this.props.className)
					}, this.props.subredditSuggestions.map((e, t) => a.a.createElement(Pi, {
						entry: t,
						isFocused: t === this.state.selectedSuggestionIndex,
						key: e.name,
						onEntrySelect: this.onEntrySelect,
						onEntryFocus: this.onEntryFocus
					}, Object(Mi.b)(e.name)))) : null
				}
			}
			var Di = Object(c.b)(Ni, (e, t) => ({
					onGetSubredditAutocomplete: t => {
						e(Si.d(t))
					}
				}))(Li),
				Fi = n("./src/reddit/selectors/comments.ts");
			const Bi = Object(l.c)({
				commentAuthors: Fi.h
			});
			class Ai extends i.Component {
				constructor(e) {
					super(e), this.api = null, this.onEntrySelect = e => {
						this.props.onSelect(this.state.userSuggestions[e])
					}, this.onEntryFocus = e => {
						this.setState({
							selectedSuggestionIndex: e
						})
					}, this.moveUp = () => {
						if (this.state.userSuggestions.length > 1) {
							let e = this.state.selectedSuggestionIndex - 1;
							return e = e < 0 ? this.state.userSuggestions.length - 1 : e, this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.state.userSuggestions.length > 1) {
							const e = (this.state.selectedSuggestionIndex + 1) % this.state.userSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.state.userSuggestions.length) {
							const e = this.state.userSuggestions[this.state.selectedSuggestionIndex];
							return e && this.props.onSelect(e), !0
						}
						return !1
					}, this.state = {
						userSuggestions: [],
						selectedSuggestionIndex: 0
					}, this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.props.onDropdownApi(this.api), this.setState({
						userSuggestions: this.filterUsers(this.props.substring)
					})
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(e) {
					e.substring !== this.props.substring && this.setState({
						selectedSuggestionIndex: 0,
						userSuggestions: this.filterUsers(e.substring)
					})
				}
				filterUsers(e) {
					const {
						commentAuthors: t
					} = this.props;
					return t.filter(t => t.toLowerCase().startsWith(e.toLowerCase()))
				}
				render() {
					return this.state.userSuggestions.length ? a.a.createElement("div", {
						className: Object(p.a)(ki.a.list, this.props.className)
					}, this.state.userSuggestions.map((e, t) => a.a.createElement(Pi, {
						key: t,
						entry: t,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						isFocused: t === this.state.selectedSuggestionIndex
					}, Object(Mi.c)(e)))) : null
				}
			}
			var Ki = Object(c.b)(Bi)(Ai),
				Ui = n("./node_modules/lodash/dropRightWhile.js"),
				Hi = n.n(Ui),
				Wi = n("./node_modules/lodash/flatMap.js"),
				Vi = n.n(Wi),
				zi = n("./node_modules/lodash/reduceRight.js"),
				qi = n.n(zi),
				Gi = n("./node_modules/lodash/trimEnd.js"),
				Ji = n.n(Gi),
				Zi = n("./node_modules/lodash/trimStart.js"),
				Qi = n.n(Zi),
				Xi = n("./src/lib/forEachGroup/index.ts");

			function Yi(e, t) {
				const n = [],
					o = e.withMutations(e => {
						for (; e.size && t(e.first());) n.push(e.first()), e.shift()
					});
				return {
					popped: n,
					stack: o
				}
			}
			var $i = n("./src/lib/unicodeUtils/index.ts"),
				ea = n("./src/reddit/helpers/richTextJson/index.ts"),
				ta = n("./src/reddit/models/RichTextJson/nodeMakers.ts");
			const na = {
				BOLD: uo.j.bold,
				ITALIC: uo.j.italic,
				MONOSPACE: uo.j.monospace,
				STRIKETHROUGH: uo.j.strikethrough,
				SUBSCRIPT: uo.j.subscript,
				SUPERSCRIPT: uo.j.superscript,
				UNDERLINE: uo.j.underline
			};
			var oa = (e, t) => sa(e.getBlockMap(), e, t);
			const sa = (e, t, n) => {
					const o = [];
					let s = e.toStack();
					for (; s.size;) {
						const e = s.first(),
							r = e.getType();
						switch (s = s.shift(), r) {
							case S.g.H1:
							case S.g.H2:
							case S.g.H3:
							case S.g.H4:
							case S.g.H5:
							case S.g.H6:
								o.push(da(e, t));
								break;
							case S.e: {
								const {
									popped: n,
									stack: r
								} = Yi(s, e => e.getType() === S.e);
								s = r, o.push(ua([e, ...n], t));
								break
							}
							case S.f: {
								const {
									popped: t,
									stack: n
								} = Yi(s, e => e.getType() === S.f);
								s = n, o.push(pa([e, ...t]));
								break
							}
							case S.i.ORDERED:
							case S.i.UNORDERED: {
								const {
									popped: n,
									stack: i
								} = Yi(s, e => e.getType() === r);
								s = i, o.push(ma([e, ...n], t));
								break
							}
							case S.l: {
								const {
									popped: n,
									stack: r
								} = Yi(s, e => Object(S.v)(e.getType()));
								s = r, o.push(ha([e, ...n], t));
								break
							}
							case S.a: {
								let t = s.first();
								t && Object(S.u)(t.getType()) ? s = s.shift() : t = void 0, o.push(ba(e, t, n));
								break
							}
							case S.n:
							default:
								o.push(ca(e, t))
						}
					}
					return o
				},
				ra = e => e.reduce((e, t) => t === S.k.UNDERLINE || t === S.k.SUBSCRIPT ? e : e | (na[t] || 0) | 0, 0),
				ia = (e, t) => {
					const n = [],
						o = Object($i.b)(e);
					return Object(Xi.a)(t, {
						keyFn: e => e.getStyle()
					}, (t, s, r, i) => {
						if (s.isEmpty()) return;
						const a = e.slice(r, i),
							c = r + (a.length - Qi()(a).length),
							l = i - (a.length - Ji()(a).length),
							d = l - c,
							u = o[c],
							p = o[l] - u;
						d > 0 && n.push([ra(s), u, p])
					}), n.length ? n : null
				},
				aa = (e, t) => {
					const n = e.getText(),
						o = e.getCharacterList(),
						s = [],
						r = S.d.includes(e.getType()),
						i = S.c.includes(e.getType());
					let a = 0;
					return Object(Xi.a)(o, {
						keyFn: (e, o) => {
							const s = e.getEntity();
							return r && e.getStyle().contains(S.k.SPOILER) ? "spoiler" : Object(L.b)(s, t) ? "link-".concat(e.getEntity()) : "\n" === n[o] ? i ? "linebreak" : "skip" : s && t.getEntity(s).getType() === L.a.EMOTE ? "emote-".concat(a++) : "text"
						}
					}, (e, r, i, a) => {
						const c = n.slice(i, a),
							l = o.slice(i, a).toList();
						if ("text" === r) {
							const e = ia(c, l);
							s.push(Object(ta.s)(c, e))
						} else if ("spoiler" === r) s.push(Object(ta.n)(c));
						else if (r.startsWith("link-")) {
							const n = t.getEntity(e.getEntity());
							s.push(((e, t, n) => {
								const o = e.getType(),
									s = [L.a.USER_LINK, L.a.USER_MENTION],
									{
										url: r
									} = e.getData(),
									i = t.startsWith("/");
								if (o === L.a.SUBREDDIT_LINK) {
									const e = t.replace(b.e, "");
									return Object(ta.o)(e, i)
								}
								if (s.includes(o)) {
									const e = t.replace(b.a, "");
									return Object(ta.t)(e, i)
								}
								const a = ia(t, n);
								return Object(ta.i)(t, r, a)
							})(n, c, l))
						} else if ("linebreak" === r) s.push(Object(ta.h)());
						else if (r.startsWith("emote-")) {
							const n = t.getEntity(e.getEntity()).getData();
							s.push(Object(ta.e)(n.fullId, n.imageType))
						}
					}), s
				},
				ca = (e, t) => Object(ta.l)(aa(e, t)),
				la = e => "text" === e.e ? Object(ta.m)(e.t) : "link" === e.e ? Object(ta.i)(e.t, e.u, null) : e.e === uo.x ? e.c.map(la) : e.e === uo.n ? Object(ta.m)("") : e,
				da = (e, t) => Object(ta.f)(S.m[e.getType()], ((e, t) => qi()(Vi()(aa(e, t), la), (e, t) => {
					let [n, ...o] = e;
					if (!n) return [t];
					const s = o.length ? o : [];
					return n && "raw" === t.e && "raw" === n.e ? [Object(ta.m)(t.t + n.t), ...s] : [t, n, ...s]
				}, []))(e, t)),
				ua = (e, t) => Object(ta.c)(Hi()(e.map(e => ((e, t) => e.getText().trim().length ? ca(e, t) : ta.a)(e, t)), e => e === ta.a)),
				pa = e => Object(ta.d)(e.map(e => Object(ta.m)(e.getText()))),
				ma = (e, t) => {
					if (!e.length) return Object(ta.k)([], !1);
					const n = e[0].getDepth();
					let o = null;
					const s = [];
					let r = [];
					const i = () => null !== o || r.length,
						a = () => {
							const e = [];
							null !== o && (e.push(o), o = null), r.length && (e.push(ma(r, t)), r = []), s.push(Object(ta.j)(e))
						};
					return e.forEach(e => {
						e.getDepth() > n ? r.push(e) : (i() && a(), o = Object(ta.l)(aa(e, t)))
					}), i() && a(), Object(ta.k)(s, e[0].getType() === S.i.ORDERED)
				},
				ha = (e, t) => {
					const n = [...e].sort(z.b),
						o = n[0],
						{
							colCount: s
						} = Object(z.g)(o),
						r = A()(n, s),
						i = r[0].map(e => {
							const {
								alignment: n
							} = Object(z.g)(e);
							return Object(ta.q)(aa(e, t), n)
						}),
						a = r.slice(1).map(e => e.map(e => Object(ta.p)(aa(e, t))));
					return Object(ta.r)(i, a)
				},
				ba = (e, t, n) => {
					const o = Object(R.h)(e);
					if (!o) throw new Error("Invalid atomic block!");
					const {
						uploadInfo: s,
						mediaAsset: r,
						makeGif: i
					} = o, a = t ? t.getText() : "";
					if (s && n) {
						const e = n[s.uploadKey],
							t = e && e.metadata.mimetype || "",
							{
								assetId: r,
								thumbnailAssetId: c
							} = Object(R.f)(o, n);
						return Object(Be.j)(t) ? Object(ta.b)(r, a) : Object(Be.k)(t) ? Object(ta.g)(r, a) : Object(ta.u)(r, a, c, i)
					} {
						const {
							assetId: e,
							type: t
						} = r;
						let n;
						switch (t) {
							case R.a.AnimatedImage:
								n = Object(ta.b)(e, a);
								break;
							case R.a.Image:
								n = Object(ta.g)(e, a);
								break;
							case R.a.Video:
								n = Object(ta.u)(e, a);
								break;
							default:
								throw new Error("Invalid media type")
						}
						return Object(ea.d)(e) ? Object(ta.l)([n]) : n
					}
				};
			var ga, fa = n("./src/reddit/constants/componentSizes.ts"),
				xa = n("./src/reddit/constants/elementIds.ts");
			! function(e) {
				e.Up = "up", e.Down = "down"
			}(ga || (ga = {}));
			var Ca = e => {
					const t = window.getSelection().focusNode;
					if (!t || !t.parentElement) return;
					const n = document.getElementById(xa.d),
						o = n || document.documentElement;
					if (!o) return;
					const s = window.innerHeight,
						{
							bottom: r,
							top: i
						} = t.parentElement.getBoundingClientRect(),
						a = n ? 0 : fa.g + fa.q;
					e === ga.Up && i < a ? o.scrollBy(0, i - a) : e === ga.Down && r > s && o.scrollBy(0, r - s)
				},
				Ea = n("./src/reddit/models/Product/index.ts"),
				ya = (e, t, n) => {
					const o = {
						url: n
					};
					return e.createEntity(t, "MUTABLE", o)
				},
				va = n("./node_modules/lodash/maxBy.js"),
				Oa = n.n(va);
			const ja = (e, t) => {
				if (!t) return (e => {
					const t = e.id;
					switch (e.e) {
						case uo.m:
							return {
								assetId: t, type: R.a.Image
							};
						case uo.a:
							return {
								assetId: t, type: R.a.AnimatedImage
							};
						case uo.D:
							return {
								assetId: t, type: R.a.Video
							}
					}
				})(e);
				const n = t.id;
				switch (t.e) {
					case uo.s: {
						const {
							s: e
						} = t;
						return {
							assetId: n,
							type: R.a.Image,
							imageUrl: e.u,
							width: e.x,
							height: e.y
						}
					}
					case uo.r: {
						const {
							s: e
						} = t;
						return {
							assetId: n,
							type: R.a.AnimatedImage,
							imageUrl: e.gif,
							posterUrl: e.p,
							dashUrl: e.mp4,
							width: e.x,
							height: e.y
						}
					}
					case uo.t: {
						const {
							isGif: e,
							dashUrl: o,
							hlsUrl: s,
							p: r,
							x: i,
							y: a
						} = t;
						let c;
						if (r) {
							c = Oa()(r, e => e.x).u
						}
						return {
							assetId: n,
							type: R.a.Video,
							isGif: e,
							dashUrl: o,
							hlsUrl: s,
							posterUrl: c,
							width: i,
							height: a
						}
					}
				}
			};

			function Sa(e, t, n) {
				const s = e.id,
					r = e.c,
					i = uo.E(t, s),
					a = ja(e, i),
					c = [new o.ContentBlock({
						key: Object(o.genKey)(),
						type: S.a,
						data: Object(D.Map)({
							mediaAsset: a
						})
					})];
				if (n) {
					const e = Object(N.h)(Object(o.genKey)(), r).merge({
						type: S.j
					});
					c.push(e)
				}
				return c
			}
			const Ta = Object.keys(na),
				ka = (e, t, n) => {
					switch (t.e) {
						case uo.u:
							return Ra(e, t.c, S.b.UNSTYLED, n);
						case uo.k:
							const o = S.h[t.l];
							return Ra(e, t.c || [], o, n);
						case uo.p:
							return Ia(e, t, n);
						case uo.b:
							return wa(e, t, n);
						case uo.c:
							return void t.c.forEach(t => Ra(e, [t], S.b.CODE_BLOCK, n));
						case uo.z:
							return _a(e, t, n);
						case uo.m:
						case uo.a:
						case uo.D:
							return void e.blocks.push(...Sa(t, n.mediaMetadataMap, Object(R.r)(n.editorType)))
					}
				},
				wa = (e, t, n) => {
					t && t.c && t.c.length && t.c.forEach(t => t.e === uo.u ? Ra(e, t.c, S.b.BLOCK_QUOTE, n) : ka(e, t, n))
				},
				_a = (e, t, n) => {
					const {
						h: o,
						c: s
					} = t, r = o.length;
					[o, ...s].forEach((t, s) => t.forEach((t, i) => {
						const {
							c: a = []
						} = t, {
							a: c
						} = o[i], l = {
							alignment: c,
							colCount: r,
							colIndex: i,
							rowIndex: s
						};
						Ra(e, a, S.b.TABLE_CELL, n, l)
					}))
				},
				Ia = function e(t, n, o) {
					let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
					const r = n.o ? S.b.ORDERED_LIST : S.b.UNORDERED_LIST;
					n.c.forEach(n => {
						const i = n.c;
						if (!i || !i.length) return;
						const [a, c] = i, l = a.e === uo.u ? a.c : [];
						Ra(t, l, r, o, void 0, s), c && c.e === uo.p && e(t, c, o, s + 1)
					})
				},
				Pa = {
					[uo.y]: ["r/", "/r/"],
					[uo.B]: ["u/", "/user/"],
					[uo.C]: ["u/", "/user/"],
					[uo.v]: ["p/", ""],
					[uo.g]: ["c/", ""]
				},
				Ma = {
					[uo.y]: L.a.SUBREDDIT_LINK,
					[uo.B]: L.a.USER_LINK,
					[uo.C]: L.a.USER_MENTION,
					[uo.v]: L.a.POST_LINK,
					[uo.g]: L.a.COMMENT_LINK
				},
				Ra = function(e, t, n, s) {
					let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
						i = arguments.length > 5 ? arguments[5] : void 0,
						a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
					const c = e.content;
					if (1 === t.length && (t[0].e === uo.m || t[0].e === uo.a)) {
						const n = t[0];
						if (Object(ea.d)(n.id)) return void e.blocks.push(...Sa(n, s.mediaMetadataMap, Object(R.r)(s.editorType)))
					}
					const {
						charList: l,
						text: d,
						updatedContent: u
					} = Na(t, c, s), p = new o.ContentBlock({
						key: Object(o.genKey)(),
						characterList: Object(D.List)(l),
						data: Object(D.fromJS)(r),
						depth: i,
						text: d,
						type: n
					});
					e.content = u || c, a ? e.blocks.unshift(p) : e.blocks.push(p)
				},
				Na = (e, t, n) => {
					let o = t,
						s = "";
					const r = [];
					if (e.forEach(e => {
							const t = La(e, o, n);
							o = t.updatedContent || o, s += t.text, r.push(...t.charList)
						}), s.length !== r.length) throw new Error("Characters length mismatch!");
					return {
						charList: r,
						text: s,
						updatedContent: o !== t ? o : void 0
					}
				},
				La = (e, t, n) => {
					switch (e.e) {
						case uo.A: {
							const {
								t,
								f: n
							} = e;
							return {
								charList: Fa(t, n),
								text: t
							}
						}
						case uo.x: {
							const {
								c: s
							} = e, r = Na(s, t, n);
							return r.charList = r.charList.map(e => (e => o.CharacterMetadata.create({
								style: e.getStyle().add(S.k.SPOILER),
								entity: e.getEntity()
							}))(e)), r
						}
						case uo.v:
						case uo.g:
						case uo.w: {
							const {
								t
							} = e;
							return {
								charList: Fa(t),
								text: t
							}
						}
						case uo.y:
						case uo.B:
						case uo.C: {
							const [n, o] = Pa[e.e], s = (e.l ? "/" : "") + n + e.t, r = o + e.t, i = ya(t, Ma[e.e], r), a = i.getLastCreatedEntityKey();
							return {
								charList: Fa(s, void 0, a),
								text: s,
								updatedContent: i
							}
						}
						case uo.o: {
							const {
								t: n,
								u: o,
								f: s
							} = e, r = ya(t, L.a.LINK, o), i = r.getLastCreatedEntityKey();
							return {
								charList: Fa(n, s, i),
								text: n,
								updatedContent: r
							}
						}
						case uo.m:
						case uo.a:
							const {
								id: s
							} = e;
							if (s.startsWith("emote|")) {
								const e = Object(Ea.b)(s),
									o = n.activeEmotes && n.activeEmotes[e];
								if (o) {
									const e = Object(es.c)(t, o),
										n = e.getLastCreatedEntityKey(),
										s = es.a;
									return {
										charList: Fa(s, void 0, n),
										text: s,
										updatedContent: e
									}
								}
								const r = ":".concat(e, ":");
								return {
									charList: Fa(r),
									text: r
								}
							}
							return {
								text: "", charList: Fa("")
							};
						default:
							return {
								text: "", charList: Fa("")
							}
					}
				},
				Da = e => {
					const t = Ta.filter(t => !!(na[t] & e));
					return Object(D.OrderedSet)(t)
				},
				Fa = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
					const s = o.CharacterMetadata.create({
							entity: n
						}),
						r = Array(e.length).fill(s),
						i = Object($i.a)(e);
					return t && t.forEach(e => {
						const [t, s, a] = e, c = Da(t), l = s + a, d = o.CharacterMetadata.create({
							entity: n,
							style: c
						});
						r.fill(d, i[s], i[l])
					}), r
				},
				Ba = (e, t) => {
					e.blocks.length && (e.blocks[0].getType() === S.b.TABLE_CELL && Ra(e, [], S.b.UNSTYLED, t, void 0, void 0, !0), e.blocks[e.blocks.length - 1].getType() === S.b.TABLE_CELL && Ra(e, [], S.b.UNSTYLED, t))
				};
			var Aa = (e, t, n, s) => {
					const r = "string" == typeof e ? JSON.parse(e) : e;
					if (!r || !r.document || !r.document.length) return null;
					const i = {
							editorType: t,
							mediaMetadataMap: n,
							activeEmotes: s ? s.reduce((e, t) => Object.assign({}, e, t.emotes), {}) : void 0
						},
						a = {
							blocks: [],
							content: o.ContentState.createFromText("")
						};
					r.document.forEach(e => {
						ka(a, e, i)
					}), 0 === a.blocks.length && Ra(a, [], S.b.UNSTYLED, i), Ba(a, i);
					const c = o.BlockMapBuilder.createFromArray(a.blocks),
						l = o.SelectionState.createEmpty(c.first().getKey());
					return a.content.merge({
						blockMap: c,
						selectionBefore: l,
						selectionAfter: l
					})
				},
				Ka = n("./src/reddit/constants/elementClassNames.ts"),
				Ua = n("./src/reddit/constants/keycodes.ts"),
				Ha = n("./src/reddit/icons/svgs/Send/index.tsx"),
				Wa = n("./src/reddit/selectors/economics.ts"),
				Va = n("./src/reddit/components/RichTextEditor/index.m.less"),
				za = n.n(Va);

			function qa() {
				return (qa = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			Object(oi.b)({
				draftToRTFJson: oa,
				getMediaCount: R.g,
				getPendingThumbnailUploads: R.i,
				isAllMediaUploaded: R.m
			});
			const Ga = "handled",
				Ja = "not-handled",
				Za = /^\s*$/,
				Qa = 20,
				Xa = h.a.wrapped(Fs.a, "FocusableContent", za.a),
				Ya = Object(c.b)(() => {
					const e = (() => Object(l.a)(e => e.uploads, (e, t) => Object(j.e)(j.b.RTE_MEDIA, t.rteState.editorKey), (e, t) => r()(e, e => e.key.startsWith(t))))();
					return Object(l.c)({
						editorUploads: e,
						emotesEnabled: E.d.spEmotes,
						giphyEnabled: E.d.spGiphy,
						activeEmotes: (e, t) => !!t.destSubreddit && t.destSubreddit.id && Object(Wa.c)(e, t.destSubreddit.id) || void 0
					})
				}, e => ({
					onFetchEditorProducts: t => e(Object(x.e)(t)),
					onTrackMediaDrop: t => e((e, n) => y.l(n(), t)),
					retryUpload: t => e(C.a(t)),
					startUploads: (t, n, o) => e(C.b(t, n, o))
				}));
			class $a extends i.Component {
				constructor(e) {
					super(e), this.blockRenderMap = o.DefaultDraftBlockRenderMap.merge(Us, zs, Vn, Yr, ni, yi, xn), this.editorHeight = null, this.editorRef = null, this.editorRootStyleMutationObserver = null, this.linksControllerApi = null, this.suggestionDropdownApi = null, this.tableToolbarControllerApi = null, this.emotesTooltipApi = null, this.gifTooltipApi = null, this.updateSuggestionDropdownPosition = null, this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1, this.needSyncScroll = null, this.transforms = {
						[T.BREAK_HEADER_ENTITY]: Zo.b,
						[T.INSERT_LINE_BREAK]: Zo.e,
						[T.REDUCE_LIST_INDENT]: Zo.f,
						[T.RESET_CURRENT_AND_PREVIOUS_BLOCKS]: Zo.g,
						[T.REMOVE_EXTRA_LIST_ITEM]: Zo.h,
						[I.d]: e => Ts(e, this.props.editorType),
						[I.b]: e => Ss(e, this.props.editorType),
						[I.f]: Zo.d,
						[I.c]: e => Object(Zo.c)(S.k.BOLD, e),
						[I.e]: e => Object(Zo.c)(S.k.ITALIC, e),
						[I.g]: e => Object(Zo.c)(S.k.UNDERLINE, e)
					}, this.setContainerRef = e => {
						const {
							domRef: t
						} = this.props;
						t && t(e), this.setState({
							containerRef: e
						})
					}, this.setFocusableContentRef = e => this.setState({
						focusableContentRef: e
					}), this.rteStateChanged = (e, t) => {
						const n = Object.assign({}, this.props.rteState, {
							isBound: !0,
							editorState: e
						});
						this.props.onChange(n, t)
					}, this.hideTooltips = () => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.tableToolbarControllerApi && this.tableToolbarControllerApi.hideActionButton(), this.linksControllerApi && this.linksControllerApi.hidePopup(), this.suppressAutocompleteForFocusedLink()
					}, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const e = this.editorRef.refs.editor,
							t = e.style.height ? Number.parseInt(e.style.height) : null;
						this.editorHeight !== t && (this.hideTooltips(), this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.insertValidatedMedia = () => {
						const {
							editorUploads: e
						} = this.props, {
							editorState: t,
							mediaToInsert: n
						} = this.state;
						if (!n) return;
						const {
							files: o,
							blockKey: s,
							insertionMode: r
						} = n, i = o.map(t => e.find(e => e.file === t)).filter(Boolean);
						this.setState({
							mediaToInsert: null
						});
						const a = i.filter(e => !!e.metadata.mimetype);
						a.length && this.onChange(Object(R.l)(t, a, s, r))
					}, this.focus = () => this.editorRef && this.editorRef.focus(), this.blur = () => this.editorRef && this.editorRef.blur(), this.isFocused = () => this.state.editorState.getSelection().getHasFocus(), this.isEmpty = () => !this.state.editorState.getCurrentContent().hasText(), this.setEditorRef = e => this.editorRef = e, this.setSuggestionDropdownApi = e => this.suggestionDropdownApi = e, this.setLinksControllerApi = e => this.linksControllerApi = e, this.setTableToolbarControllerApi = e => this.tableToolbarControllerApi = e, this.setEmotesTooltipApi = e => this.emotesTooltipApi = e, this.setGifTooltipApi = e => this.gifTooltipApi = e, this.setSuggestionDropdownPositionUpdater = e => this.updateSuggestionDropdownPosition = e, this.getEditorState = () => this.state.editorState, this.setEditorState = (e, t) => {
						const n = this.state.editorState.getCurrentContent() !== e.getCurrentContent();
						n && this.props.readOnly || (this.setState({
							editorState: e
						}, t), this.rteStateChanged(e, n))
					}, this.toolbarSetState = e => {
						const t = e.getInlineStyleOverride();
						let n = e;
						n.getSelection().getHasFocus() || (n = o.EditorState.forceSelection(n, n.getSelection()), t && (n = o.EditorState.setInlineStyleOverride(n, t))), this.onChange(n)
					}, this.onChange = (e, t) => {
						let n = e;
						n = Mn(n, this.state.editorState), n = Re(n, this.props.editorType), this.emotesTooltipApi && (n = Object(es.d)(n, this.state.editorState)), n = Cs(n, this.state.editorState), n = Object(Ps.d)(n, this.state.editorState), this.state.shouldShowFtuMessage && this.state.editorState.getCurrentContent() !== e.getCurrentContent() && this.setState({
							shouldShowFtuMessage: !1
						}), this.setEditorState(n, t);
						let {
							suppressAutocompleteForLink: o
						} = this.state;
						if (o) {
							const t = Object(ds.b)(e);
							t && t.entityKey === o || (o = null)
						}
						this.setState({
							suppressAutocompleteForLink: o
						}), this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1
					}, this.onFocus = () => {
						const {
							enableFtuMessage: e,
							onFocus: t
						} = this.props;
						e && this.setState({
							shouldShowFtuMessage: !0
						}), this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), t && t()
					}, this.handleBeforeInput = e => {
						const {
							editorState: t
						} = this.state;
						if (this.isMouseDown) return Ga;
						if (Me(t, e)) return Ga;
						let n = function(e, t) {
							const n = e.getSelection(),
								s = n.getFocusOffset();
							if (!n.isCollapsed() || 0 === s) return;
							const r = n.getFocusKey(),
								i = e.getCurrentContent(),
								a = i.getBlockForKey(r),
								c = a.getEntityAt(s - 1),
								l = a.getEntityAt(s);
							if (!(c && (!l || l !== c))) return;
							const d = i.getEntity(c),
								u = ls.has(d.getType());
							if ("MUTABLE" === d.getMutability() && u) {
								const s = o.Modifier.insertText(i, n, t, e.getCurrentInlineStyle());
								return o.EditorState.push(e, s, "insert-characters")
							}
						}(t, e) || t;
						return (n = wn(n, e) || n) !== t ? (this.onChange(n), Ga) : Ja
					}, this.keyBindingFN = e => {
						const {
							editorState: t
						} = this.state, {
							submitOnEnter: n
						} = this.props, s = t.getSelection();
						if (e.metaKey && e.keyCode === Ua.a.K) return T.OPEN_LINK_TOOLTIP;
						if (e.keyCode === Ua.a.Space) {
							if (_s(t)) return T.CONVERT_TO_LIST_ON_SPACE;
							if (Object(ds.d)(t)) return T.LINKIFY_ON_SPACE
						} else if (e.keyCode === Ua.a.Enter) {
							if (e.ctrlKey || e.metaKey || n && !e.shiftKey) return T.SUBMIT;
							if (e.shiftKey && ks(t)) return T.INSERT_LINE_BREAK; {
								const e = this.enterKeyBinding(t);
								if (e) return e
							}
						} else if (e.keyCode === Ua.a.Backspace) {
							if (this.isJustLinkified || this.isJustConvertedToList) return I.h;
							if (s.isCollapsed()) {
								const e = t.getCurrentContent(),
									n = s.getEndKey(),
									o = s.getStartOffset(),
									r = e.getBlockForKey(n),
									i = r.getType();
								if ((Object(S.s)(i) || Object(S.q)(i) || Object(S.p)(i)) && 0 === o && r.getLength() > 0) {
									const t = e.getBlockBefore(n);
									if (!t || t.getType() !== i) return T.MAKE_PLAIN_BLOCK
								}
							}
						}
						return Object(o.getDefaultKeyBinding)(e)
					}, this.handleKeyCommand = e => {
						const {
							editorState: t
						} = this.state;
						let n = e,
							s = null;
						const r = e => {
							let t = e;
							if (s) {
								const {
									selection: e,
									url: n
								} = s;
								t = Object(ds.f)(t, e, n)
							}
							return this.onChange(t), this.isJustLinkified = !!s, Ga
						};
						if (n === T.SUBMIT) this.props.onSubmit();
						else {
							if (n === T.CONVERT_TO_LIST_ON_SPACE) {
								const e = r(Is(t));
								return this.isJustConvertedToList = !0, e
							}
							if (n === T.LINKIFY_ON_SPACE) return s = Object(ds.d)(t), r(Object(Zo.a)(t));
							if (n === T.LINKIFY_ON_ENTER && (s = Object(ds.d)(t), !(n = this.enterKeyBinding(t, !1)))) return r(Object(Zo.d)(t))
						}
						if (n === T.OPEN_LINK_TOOLTIP) return this.onToolbarLinkButtonClick(), Ga;
						if (n === T.MAKE_PLAIN_BLOCK) {
							return r(Object(Zo.i)(S.n, t))
						}
						if (n === T.EXEC_TABLE_ON_ENTER_HANDLER) return r(this.tableOnEnterHandler.handle(t));
						const i = this.transforms[n];
						if (i) {
							const e = i(t);
							if (e) return r(e)
						}
						const a = o.RichUtils.handleKeyCommand(t, n);
						return a ? r(a) : Ja
					}, this.handleOnTab = e => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleTabInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent()) return void e.preventDefault();
						const {
							editorState: t
						} = this.state;
						let n = jn(e, t);
						if (n = n || js(e, t)) return void this.onChange(n);
						const s = o.RichUtils.onTab(e, t, 2);
						this.onChange(s)
					}, this.handleOnUpArrow = e => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleUpArrowInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.moveUp()) return void e.preventDefault();
						const t = Sn(e, this.state.editorState) || Ie(e, this.state.editorState);
						t && this.onChange(t), this.needSyncScroll = ga.Up
					}, this.handleOnDownArrow = e => {
						if (this.suggestionDropdownApi && this.suggestionDropdownApi.moveDown()) return void e.preventDefault();
						const t = Tn(e, this.state.editorState) || Pe(e, this.state.editorState);
						t && this.onChange(t), this.needSyncScroll = ga.Down
					}, this.handleReturn = e => {
						const t = we(this.state.editorState);
						return t ? (this.onChange(t), e.preventDefault(), Ga) : this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent() ? (e.preventDefault(), Ga) : Ja
					}, this.suppressAutocompleteForFocusedLink = () => {
						const e = Object(ds.b)(this.state.editorState);
						e && this.state.suppressAutocompleteForLink !== e.entityKey && this.setState({
							suppressAutocompleteForLink: e.entityKey
						})
					}, this.handleEscape = e => {
						this.emotesTooltipApi && this.emotesTooltipApi.handleEscapeKeyInEditor(), this.suppressAutocompleteForFocusedLink()
					}, this.handleOnCopy = e => {
						this.editorRef && Ce(this.state.editorState, this.editorRef, e)
					}, this.handleOnCut = e => {
						const {
							editorState: t
						} = this.state;
						if (!this.editorRef) return;
						if (!Ce(t, this.editorRef, e)) return;
						const n = re(t) || ke(t) || Object(R.e)(t);
						n && this.onChange(n)
					}, this.handleOnPaste = e => {
						const {
							editorState: t
						} = this.state;
						if (!this.editorRef) return;
						if (this.handleFilesPaste(e, t), e.isPropagationStopped()) return;
						const n = hr(t, this.editorRef, e, this.props.editorType);
						n && this.onChange(n)
					}, this.handleFilesPaste = (e, t) => {
						const n = e.clipboardData.files;
						if (n && n.length) {
							const o = Array.from(n),
								s = t.getSelection().getEndKey();
							this.insertMediaFiles({
								files: o,
								blockKey: s,
								insertionMode: N.a.after,
								filesSource: f.FileSource.Clipboard
							}), e.stopPropagation()
						}
					}, this.handleOnMouseDown = e => {
						this.isMouseDown = !0
					}, this.handleOnMouseUp = e => {
						this.isMouseDown = !1
					}, this.handleDroppedFiles = (e, t) => Ga, this.handleDrop = (e, t, n) => Ga, this.handleBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.handlePastedText = (e, t) => Ga, this.onInternalSuggestionSelected = e => {
						this.onChange(Object(ds.g)(this.state.editorState, e)), this.isJustAutocompleteSelected = !0
					}, this.onToolbarEmoteButtonClick = e => {
						this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.emotesTooltipApi && this.emotesTooltipApi.toggleTooltip(e)
					}, this.onToolbarGifButtonClick = e => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.toggleTooltip(e)
					}, this.onToolbarLinkButtonClick = () => {
						if (!this.linksControllerApi) return;
						const {
							editorState: e
						} = this.state;
						this.linksControllerApi.editLinkInSelection(e.getSelection()) || Object(g.b)(void 0, "Current selection cannot be edited by link editor!")
					}, this.onToolbarFtuTooltipClick = () => {
						this.setState({
							shouldShowFtuMessage: !1
						})
					}, this.handleSwitchToMarkdownMode = () => {
						const {
							editorState: e
						} = this.state, {
							onSwitchEditorMode: t
						} = this.props, n = oi.a.toRichTextJSON(Object.assign({}, this.props.rteState, {
							isBound: !0,
							editorState: Object(R.c)(e)
						}));
						t && t(O.h.MARKDOWN, n), this.state.confirmModalOpen && this.toggleConfirmModal()
					}, this.onToolbarMarkdownSwitchClick = () => {
						const {
							editorState: e
						} = this.state;
						e && Es(e) ? this.setState({
							confirmModalOpen: !0
						}) : this.handleSwitchToMarkdownMode()
					}, this.toggleConfirmModal = () => {
						this.setState({
							confirmModalOpen: !this.state.confirmModalOpen
						})
					}, this.onToolbarOverflowMenuClick = () => {
						this.setState({
							shouldShowFtuMessage: !1
						})
					}, this.insertMediaFiles = async e => {
						this.setState({
							mediaToInsert: e
						});
						const {
							files: t,
							filesSource: n
						} = e, o = t.slice(0, Qa);
						await this.props.startUploads(o, n, this.props.rteState.editorKey), this.insertValidatedMedia()
					}, this.onRetryUpload = e => {
						this.props.retryUpload(e)
					}, this.onFilesSelect = e => {
						const {
							editorState: t
						} = this.state, n = t.getSelection().getEndKey();
						this.insertMediaFiles({
							files: e,
							blockKey: n,
							insertionMode: N.a.after,
							filesSource: f.FileSource.FileSelector
						})
					}, this.onFilesDrop = (e, t, n) => {
						this.props.onTrackMediaDrop(e), this.insertMediaFiles({
							files: e,
							blockKey: t,
							insertionMode: n,
							filesSource: f.FileSource.DragAndDrop
						})
					}, this.onBlockMove = (e, t, n) => {
						const {
							editorState: o
						} = this.state, s = Object(R.o)(o, e, t, n);
						s && this.onChange(s)
					}, this.getAtomicBlocksRenderConfig = () => ({
						component: hn,
						props: {
							getEditorState: this.getEditorState,
							onChange: this.onChange,
							onRetryUpload: this.onRetryUpload,
							rteFocusableContentRef: this.state.focusableContentRef,
							editorType: this.props.editorType
						}
					}), this.blockRendererFn = e => {
						const t = e.getType();
						return t === S.a ? this.getAtomicBlocksRenderConfig() : t in bi ? bi[t] : void 0
					}, this.renderToolbar = e => a.a.createElement(Gt.b, e), this.entityElementRegistry = Xo(), this.tableOnEnterHandler = new kn;
					const {
						activeEmotes: t,
						editorType: n,
						noBorder: s,
						initialHeight: r,
						initialMinHeight: i,
						rteState: c
					} = e;
					let l;
					c.isBound ? l = c.editorState : Object(uo.F)(c.initialRTJSON) ? l = this.createInitialState(c.editorKey) : (l = o.EditorState.createWithContent(Aa(c.initialRTJSON, n, c.mediaMetadataMap, t), this.editorDecorators()), l = this.moveSelectionToEnd(l)), this.state = {
						noBorder: s,
						containerRef: null,
						confirmModalOpen: !1,
						editorState: l,
						focusableContentRef: null,
						inited: !1,
						initialHeight: r,
						initialMinHeight: i,
						mediaToInsert: null,
						shouldShowFtuMessage: !1,
						suppressAutocompleteForLink: null
					}
				}
				editorDecorators() {
					return new o.CompositeDecorator([ss(), Ds(), bs()])
				}
				moveSelectionToEnd(e) {
					const t = e.getCurrentContent().getBlockMap(),
						n = t.last().getKey(),
						s = t.last().getLength(),
						r = new o.SelectionState({
							anchorKey: n,
							anchorOffset: s,
							focusKey: n,
							focusOffset: s
						});
					return o.EditorState.acceptSelection(e, r)
				}
				createInitialState(e) {
					return o.EditorState.createWithContent(o.ContentState.createFromBlockArray([new o.ContentBlock({
						key: "".concat(e, "_initial")
					})]), this.editorDecorators())
				}
				componentDidMount() {
					if (this.props.rteRef && this.props.rteRef(this), m.a.write(fi), this.rteStateChanged(this.state.editorState, !1), this.editorRef) {
						const e = this.editorRef.refs.editor;
						e.addEventListener("scroll", this.hideTooltips), this.editorRootStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorRootStyleMutationObserver.observe(e, {
							attributes: !0,
							attributeFilter: ["style"]
						})
					}
					const {
						destSubreddit: e,
						emotesEnabled: t,
						giphyEnabled: n
					} = this.props;
					e && e.id && (t || n) && this.props.onFetchEditorProducts(e.id)
				}
				componentDidUpdate(e, t) {
					const n = this.getLinkForAutocomplete();
					if (n && this.updateSuggestionDropdownPosition) {
						const e = this.entityElementRegistry.get(n.entityKey);
						if (e) {
							const {
								left: t,
								bottom: n,
								height: o
							} = e.getBoundingClientRect();
							this.updateSuggestionDropdownPosition({
								left: t,
								top: n,
								bottom: n - o
							})
						}
					}
					this.needSyncScroll && (Ca(this.needSyncScroll), this.needSyncScroll = null)
				}
				componentWillUnmount() {
					if (this.props.rteRef && this.props.rteRef(null), this.insertValidatedMedia = () => {}, this.editorRef) {
						this.editorRef.refs.editor.removeEventListener("scroll", this.hideTooltips)
					}
					this.editorRootStyleMutationObserver && (this.editorRootStyleMutationObserver.disconnect(), this.editorRootStyleMutationObserver = null)
				}
				componentWillReceiveProps(e) {
					e.rteState !== this.props.rteState && e.rteState.isBound && e.rteState.editorState !== this.state.editorState && this.setState({
						editorState: e.rteState.editorState
					})
				}
				shouldComponentUpdate(e, t) {
					if (t !== this.state) return !0;
					if (!(e.rteState.isBound && e.rteState.editorState === this.state.editorState)) return !0;
					return !u()(e, this.props, (e, t, n) => "rteState" === n || void 0)
				}
				enterKeyBinding(e) {
					let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					const n = e.getCurrentContent(),
						o = e.getSelection(),
						s = o.getStartKey(),
						r = o.getEndKey(),
						i = o.getEndOffset(),
						a = n.getBlockForKey(s).getType(),
						c = n.getBlockForKey(r),
						l = c.getType(),
						d = i === c.getText().length;
					if (a === S.l || l === S.l) return T.EXEC_TABLE_ON_ENTER_HANDLER;
					if (o.isCollapsed()) {
						if (t && Object(ds.d)(e)) return T.LINKIFY_ON_ENTER;
						if (Object(S.r)(l) && d) return T.BREAK_HEADER_ENTITY;
						if (Object(S.s)(l)) {
							if (Za.test(c.getText())) return c.getDepth() > 0 ? T.REDUCE_LIST_INDENT : T.REMOVE_EXTRA_LIST_ITEM
						} else if (l === S.e) {
							const e = n.getBlockBefore(r);
							if (e && e.getType() === S.e && Za.test(e.getText()) && Za.test(c.getText())) return T.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						} else if (l === S.f) {
							const e = n.getBlockBefore(r),
								t = n.getBlockAfter(r);
							if (!c.getText() && e && e.getType() === S.f && !e.getText() && (!t || t.getType() !== S.f)) return T.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						}
					}
				}
				getLinkForAutocomplete() {
					const {
						editorState: e,
						suppressAutocompleteForLink: t
					} = this.state;
					if (!this.isJustAutocompleteSelected && e.getSelection().getHasFocus()) {
						const n = Object(ds.b)(e);
						if (n && n.entityKey !== t) return n
					}
				}
				renderInternalLinkSuggestionDropdown() {
					const {
						isChatPost: e
					} = this.props, t = this.getLinkForAutocomplete();
					return t ? a.a.createElement(Gn.b, {
						aboveParent: e,
						dropdown: !0,
						onSetPositionUpdater: this.setSuggestionDropdownPositionUpdater
					}, t.entityText.startsWith(b.f) && a.a.createElement(Di, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: t.internalName
					}), b.a.test(t.entityText) && a.a.createElement(Ki, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: t.internalName
					})) : null
				}
				render() {
					const {
						className: e,
						activeEmotes: t,
						userCanUseGifs: n,
						allowMediaUploads: s = !1,
						dataTestId: r,
						destSubreddit: i,
						editorType: c,
						focusableContentRTEClassName: l,
						giphyEnabled: d,
						hideToolbar: u,
						rteState: m,
						isOverlay: h,
						language: b,
						onSubmit: g,
						placeholderText: f,
						showSubmitButton: x = !1,
						submitButtonClassName: C,
						toolbarPosition: E = "top",
						renderToolbar: y = this.renderToolbar
					} = this.props, {
						editorKey: O
					} = m, {
						containerRef: j,
						editorState: S,
						mediaToInsert: T,
						shouldShowFtuMessage: w,
						confirmModalOpen: I
					} = this.state, P = this.props.readOnly || !!T, M = k(S), R = this.isEmpty(), N = !(!t || !Object.keys(t).length), L = y({
						allowMediaUploads: s,
						destSubreddit: i,
						editorKey: O,
						editorState: S,
						isOverlay: !!h,
						language: b,
						onChange: this.toolbarSetState,
						onFilesSelect: this.onFilesSelect,
						trackOnClick: this.props.trackToolbarClick,
						readOnly: P,
						onFtuTooltipClick: this.onToolbarFtuTooltipClick,
						onEmoteButtonClick: N ? this.onToolbarEmoteButtonClick : void 0,
						onGifButtonClick: d ? this.onToolbarGifButtonClick : void 0,
						onLinkButtonClick: this.onToolbarLinkButtonClick,
						onMarkdownButtonClick: this.onToolbarMarkdownSwitchClick,
						onOverflowMenuClick: this.onToolbarOverflowMenuClick,
						shouldShowFtuMessage: w,
						userCanUseGifs: !!n
					});
					return a.a.createElement("div", {
						className: e,
						ref: this.setContainerRef
					}, a.a.createElement(Xa, {
						className: Object(p.a)(l, {
							[za.a.showSubmitButton]: x
						}),
						noBorder: this.props.noBorder,
						isFocused: this.isFocused(),
						ref: this.setFocusableContentRef
					}, !u && "top" === E && L, j && a.a.createElement(Jo, {
						editorState: S,
						readOnly: P,
						language: b,
						onChange: this.onChange,
						onSetApi: this.setTableToolbarControllerApi,
						rteDomRef: j
					}), a.a.createElement("div", {
						className: Object(p.a)(za.a.editorWrapper, {
							[za.a.hasInitialHeight]: !!this.props.initialHeight,
							[za.a.hasInitialMinHeight]: !!this.props.initialMinHeight,
							[za.a.noBorder]: !!this.props.noBorder
						}),
						style: {
							"--rte-initial-height": this.props.initialHeight ? "".concat(this.props.initialHeight, "px") : void 0,
							"--rte-initial-min-height": this.props.initialMinHeight ? "".concat(this.props.initialMinHeight, "px") : void 0
						},
						"data-test-id": r,
						onCopyCapture: this.handleOnCopy,
						onCutCapture: this.handleOnCut,
						onPasteCapture: this.handleOnPaste,
						onMouseDown: this.handleOnMouseDown,
						onMouseUp: this.handleOnMouseUp
					}, a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n                .".concat(Ka.c, "[").concat(Ka.e, '="').concat(M, "-0-0\"]::after {\n                  bottom: 0;\n                  color: var(--newCommunityTheme-actionIcon);\n                  content: '").concat(f, "';\n                  cursor: text;\n                  left: 0;\n                  position: absolute;\n                  top: 0;\n                }\n              ")
						}
					}), a.a.createElement(tr, {
						allowMediaUploads: s && !P,
						onBlockMove: this.onBlockMove,
						onFilesDrop: this.onFilesDrop,
						editorState: S,
						onChange: this.onChange
					}, a.a.createElement(Yo.Provider, {
						value: this.entityElementRegistry
					}, a.a.createElement(o.Editor, {
						readOnly: P,
						ref: this.setEditorRef,
						blockRendererFn: this.blockRendererFn,
						blockRenderMap: this.blockRenderMap,
						editorKey: O,
						editorState: S,
						keyBindingFn: this.keyBindingFN,
						handleBeforeInput: this.handleBeforeInput,
						handleKeyCommand: this.handleKeyCommand,
						handlePastedText: this.handlePastedText,
						handleDroppedFiles: this.handleDroppedFiles,
						handleDrop: this.handleDrop,
						onBlur: this.handleBlur,
						onChange: this.onChange,
						onFocus: this.onFocus,
						onTab: this.handleOnTab,
						onUpArrow: this.handleOnUpArrow,
						onDownArrow: this.handleOnDownArrow,
						onEscape: this.handleEscape,
						spellCheck: !0,
						handleReturn: this.handleReturn,
						customStyleMap: ai()
					})))), !u && "bottom" === E && L, a.a.createElement(Jr, {
						editorState: S,
						entityElementRegistry: this.entityElementRegistry,
						language: b,
						onSetApi: this.setLinksControllerApi,
						onChange: this.onChange
					}), N && !!i && c === Ae.a.Comment && a.a.createElement(is, {
						editorState: S,
						onChange: this.onChange,
						onSetApi: this.setEmotesTooltipApi,
						subreddit: i
					}), d && i && a.a.createElement(cs, {
						editorState: S,
						onChange: this.onChange,
						onSetApi: this.setGifTooltipApi,
						subreddit: i,
						userCanUseGifs: !!n
					}), this.renderInternalLinkSuggestionDropdown(), x && a.a.createElement(nt.a, {
						"aria-label": Object(v.c)("submit"),
						className: Object(p.a)(C, za.a.insetSubmitButton, {
							[za.a.emptyContent]: R,
							[za.a.focusedContent]: this.isFocused()
						}),
						disabled: R,
						onClick: g,
						tabIndex: -1,
						type: "submit"
					}, a.a.createElement(Ha.a, null))), I && a.a.createElement(_.a, {
						toggleModal: this.toggleConfirmModal,
						onConfirm: this.handleSwitchToMarkdownMode,
						actionText: "continue",
						cancelActionText: "cancel",
						headerText: Object(v.c)("Switch to Markdown"),
						modalText: Object(v.c)("Switching to markdown will remove any images, gifs or videos from your post."),
						trackClick: () => {}
					}))
				}
			}
			t.a = Ya(Object(vi.b)(e => a.a.createElement($a, qa({
				key: e.rteState.editorKey
			}, e))))
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less": function(e, t, n) {
			e.exports = {
				Img: "_1gJwMe53cjYITkMu0Ve8j-",
				img: "_1gJwMe53cjYITkMu0Ve8j-",
				Component: "_3VYFd7PKhTJ-0i22YsgFPv",
				component: "_3VYFd7PKhTJ-0i22YsgFPv"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				Message: "_3cyJHYsdZdz4RWdmrzyYx-",
				message: "_3cyJHYsdZdz4RWdmrzyYx-",
				Component: "_3JSUHg1gLhxUj4PB_Pgw8a",
				component: "_3JSUHg1gLhxUj4PB_Pgw8a"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less": function(e, t, n) {
			e.exports = {
				buttonBaseStyles: "_3R1ajPuzbs2MdbXedj3YXU",
				ControlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				controlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				Button: "_2rIEdliEXr7qNb-COL-zuO",
				button: "_2rIEdliEXr7qNb-COL-zuO",
				ErrButton: "_3CUr1530H3uD-ts9tKd9RA",
				errButton: "_3CUr1530H3uD-ts9tKd9RA",
				Status: "jXuqxr-x0kyU3BSfugjwM",
				status: "jXuqxr-x0kyU3BSfugjwM",
				hasError: "_4XwI6tILia1pR9HTda4wv",
				ProgressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				progressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				ProgressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				progressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				ErrorLine: "_3M-thbkBHHvsWjDt8edbhz",
				errorLine: "_3M-thbkBHHvsWjDt8edbhz",
				Component: "_1CqupI5I-zzAInIdLwphQg",
				component: "_1CqupI5I-zzAInIdLwphQg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less": function(e, t, n) {
			e.exports = {
				VideoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				videoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				PosterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				posterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				Poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				Component: "wSihDBKVJH6iP2jdDjRQ6",
				component: "wSihDBKVJH6iP2jdDjRQ6",
				playButton: "il4HPAfKcVtq-WQY-if85"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less": function(e, t, n) {
			e.exports = {
				statusBar: "_33CSkXq7gXeXCM2zSal9BN",
				container: "_1FMEfWD94pPZ_HdEN_e7Xy",
				isCompact: "_3-T8BPflZuKw_F2VRPDbcX",
				isUploaded: "_3Lj2c902Oeb7yL_jYu9v5L",
				isSelected: "Eaps2a9y_jwhKHth8v14G",
				imagePreview: "_2nlrFrYbO0bIKFeZ3HMbn_",
				videoPreview: "_2MumquPHY8gruoy6114twC",
				placeholder: "_1-LSy7nvfNGWVhRWwwQu6A",
				alignCenter: "_3U9f0TNBM1K2bggm3KMHTk"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less": function(e, t, n) {
			e.exports = {
				HiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg",
				hiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3hDtN0e5U4EpahGe25ye-b",
				alignCenter: "Vh7FGvkGyl5SeyJP4J1GG",
				content: "_3wXzBVn-uBvRcixZwQWkNX",
				FormatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				formatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				ToolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ",
				toolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less": function(e, t, n) {
			e.exports = {
				MediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				mediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				Container: "DK9d46mm9FgC8mFWPGlG_",
				container: "DK9d46mm9FgC8mFWPGlG_"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2eZK2IABgFqGZLMYPxwoNY"
			}
		},
		"./src/reddit/components/RichTextEditor/media/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "i", (function() {
				return M
			})), n.d(t, "o", (function() {
				return R
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "f", (function() {
				return D
			}));
			var o, s = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./node_modules/lodash/flatten.js"),
				a = n.n(i),
				c = n("./node_modules/lodash/last.js"),
				l = n.n(c),
				d = n("./src/reddit/helpers/media/index.ts"),
				u = n("./src/reddit/helpers/richTextEditor/index.ts"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				m = n("./src/reddit/models/Upload/index.ts"),
				h = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				b = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				g = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(e) {
				e[e.Image = 0] = "Image", e[e.AnimatedImage = 1] = "AnimatedImage", e[e.Video = 2] = "Video"
			}(o || (o = {}));
			const f = e => e !== u.a.Comment,
				x = e => {
					if (!Object(g.o)(e.getType())) return;
					const t = e.getData(),
						n = t.get("mediaAsset"),
						o = t.get("uploadInfo");
					if (!n && !o) return;
					const s = t.get("thumbnail");
					return {
						makeGif: t.get("makeGif"),
						thumbnail: s,
						uploadInfo: o,
						mediaAsset: n
					}
				},
				C = (e, t, n) => {
					let o = e.getCurrentContent();
					const i = o.getBlockForKey(t),
						a = x(i),
						c = a && a.uploadInfo;
					if (!c) throw new Error("Block must contain `uploadInfo` data");
					if (n.makeGif === a.makeGif && n.thumbnail === a.thumbnail) return e;
					const l = Object(r.Map)(n),
						d = o.getBlockMap().toKeyedSeq().filter(e => {
							const t = x(e);
							return !!t && !!t.uploadInfo && t.uploadInfo.uploadKey === c.uploadKey
						}).map(e => e.mergeIn(["data"], l));
					return o = (o = o.mergeIn(["blockMap"], d)).merge({
						selectionAfter: e.getSelection()
					}), s.EditorState.push(e, o, h.b)
				},
				E = (e, t, n, o) => {
					let i = e.getCurrentContent();
					const c = a()(t.map(e => {
						const t = Object(d.f)(e.metadata.mimetype),
							n = (e => {
								if (e && e.metadata.videoFirstFrameUrl) {
									return {
										url: e.metadata.videoFirstFrameUrl,
										time: 0
									}
								}
							})(e);
						return [new s.ContentBlock({
							key: Object(s.genKey)(),
							type: g.a,
							data: Object(r.Map)({
								uploadInfo: {
									mediaType: t,
									uploadKey: e.key
								},
								thumbnail: n
							})
						}), new s.ContentBlock({
							key: Object(s.genKey)(),
							type: g.j
						})]
					}));
					i = Object(b.f)(i, n, c, o);
					const u = s.EditorState.push(e, i, h.e),
						p = l()(c);
					return s.EditorState.forceSelection(u, Object(b.b)(p, !0))
				},
				y = (e, t, n, i, a, c, l, d) => {
					const u = new s.ContentBlock({
							key: Object(s.genKey)(),
							type: g.a,
							data: Object(r.Map)({
								mediaAsset: {
									type: o.AnimatedImage,
									assetId: Object(p.b)(t, i),
									imageUrl: n,
									width: a,
									height: c
								}
							})
						}),
						m = Object(b.f)(e.getCurrentContent(), l, [u], d);
					let f = s.EditorState.push(e, m, h.e);
					f = s.EditorState.forceSelection(f, Object(b.b)(u, !0));
					const x = u.getKey();
					return f.getCurrentContent().getBlockAfter(x) || (f = N(f, x)), f
				};

			function v(e, t) {
				return e.isCollapsed() && e.getStartKey() === t && 0 === e.getStartOffset() && 0 === e.getEndOffset()
			}

			function O(e, t) {
				const n = e.getCurrentContent().getBlockAfter(t);
				return s.EditorState.forceSelection(e, Object(b.b)(n, !0))
			}
			const j = (e, t) => {
					const n = e.getBlockAfter(t);
					return e = Object(b.i)(e, t), n && Object(g.u)(n.getType()) && (e = Object(b.i)(e, n.getKey())), e
				},
				S = function(e, t) {
					let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
						o = e.getCurrentContent();
					o = j(o, t);
					let r = n ? s.EditorState.push(e, o, h.f) : s.EditorState.set(e, {
						currentContent: o
					});
					return r = s.EditorState.forceSelection(r, o.getSelectionAfter())
				},
				T = e => {
					let t = e.getCurrentContent();
					w(t).forEach(e => {
						t = j(t, e.getKey())
					});
					const n = s.EditorState.push(e, t, h.f);
					return s.EditorState.forceSelection(n, t.getSelectionAfter())
				},
				k = e => {
					let t = e.getCurrentContent();
					const n = e.getSelection();
					t = s.Modifier.removeRange(t, n, "forward");
					let o = s.EditorState.push(e, t, h.f);
					return o = s.EditorState.forceSelection(o, t.getSelectionAfter())
				},
				w = e => e.getBlockMap().toSeq().filter(e => !!e && !!x(e)),
				_ = (e, t) => e.getBlockMap().toSeq().filter(e => {
					const n = x(e),
						o = n && n.uploadInfo && n.uploadInfo.uploadKey;
					return !(!o || t[o] && t[o].url)
				}).isEmpty(),
				I = e => {
					const t = w(e),
						n = {
							gifvideo: 0,
							image: 0,
							video: 0,
							total: 0
						};
					return t.forEach(e => {
						const t = x(e);
						let s;
						s = t.makeGif ? "gifvideo" : t.uploadInfo && "video" === t.uploadInfo.mediaType || t.mediaAsset && t.mediaAsset.type === o.Video ? "video" : "image", n[s]++, n.total++
					}), n
				},
				P = e => !w(e).isEmpty(),
				M = (e, t) => {
					const n = w(e).map(e => {
						const n = x(e),
							{
								uploadInfo: o,
								thumbnail: s
							} = n;
						if (!o || !s) return;
						const r = L(n),
							i = t[r];
						return i && i.url ? void 0 : Object.assign({}, s, {
							uploadKey: r
						})
					}).filter(Boolean).toArray();
					return n.length ? n : void 0
				},
				R = (e, t, n, o) => {
					let r = e.getCurrentContent();
					const i = r.getBlockForKey(t),
						a = r.getBlockAfter(t),
						c = [i];
					if (a && Object(g.u)(a.getType()) && c.push(a), c.find(e => e.getKey() === n)) return;
					const d = c.reduce((e, t) => e.remove(t.getKey()), r.getBlockMap());
					r = r.set("blockMap", d), r = Object(b.f)(r, n, c, o);
					const u = s.EditorState.push(e, r, h.e);
					return s.EditorState.forceSelection(u, Object(b.b)(l()(c), !0))
				},
				N = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.a.after;
					const o = Object(b.h)(),
						r = Object(b.f)(e.getCurrentContent(), t, [o], n),
						i = s.EditorState.push(e, r, h.e);
					return s.EditorState.forceSelection(i, s.SelectionState.createEmpty(o.getKey()))
				},
				L = e => e.thumbnail && e.uploadInfo ? "".concat(e.uploadInfo.uploadKey, "-thumbnail-").concat(e.thumbnail.time) : "",
				D = (e, t) => {
					let n = "",
						o = "";
					if (e.uploadInfo) {
						const {
							uploadKey: s
						} = e.uploadInfo, r = t[s];
						r && r.url && (n = Object(m.c)(r.url));
						const i = t[L(e)];
						i && i.url && (o = Object(m.c)(i.url))
					}
					return {
						assetId: n,
						thumbnailAssetId: o
					}
				}
		},
		"./src/reddit/components/RichTextEditor/spoiler/decorator.m.less": function(e, t, n) {
			e.exports = {
				spoiler: "_1AlhnBqYYVTQbTr33YViyK"
			}
		},
		"./src/reddit/components/RichTextEditor/spoiler/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/lib/forEachGroup/index.ts"),
				s = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const r = e => e.getStyle().has(s.k.SPOILER);

			function i(e, t, n) {
				const s = e.getCharacterList();
				Object(o.a)(s, {
					keyFn: r
				}, (e, n, o, s) => {
					n && t(o, s)
				})
			}
		},
		"./src/reddit/components/RichTextEditor/table/Renderer/index.m.less": function(e, t, n) {
			e.exports = {
				Cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				Row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				Table: "_9QFGu47IyMX1ID1xQid-8",
				table: "_9QFGu47IyMX1ID1xQid-8",
				isFakeSelectionActive: "_1QXaG0_iXh-LFDkah9HqP3"
			}
		},
		"./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less": function(e, t, n) {
			e.exports = {
				formatterButton: "_1dNavKEU0lSO4mo9fYWTPm",
				ToolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				toolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				tooltip: "_3fnB5glctifL-mkYhH6aA1"
			}
		},
		"./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less": function(e, t, n) {
			e.exports = {
				ActionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				actionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				isPressed: "_2WwwYG59S_TJRq7FSdTVKK",
				ToolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9",
				toolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9"
			}
		},
		"./src/reddit/components/RichTextEditor/table/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/reddit/models/RichTextJson/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts"),
				a = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const c = {
					[r.e]: "left",
					[r.f]: "right",
					[r.d]: "center"
				},
				l = e => {
					const t = e.getData();
					return {
						colIndex: t.get("colIndex"),
						rowIndex: t.get("rowIndex"),
						colCount: t.get("colCount"),
						alignment: t.get("alignment")
					}
				},
				d = ["data"],
				u = (e, t) => e.mergeIn(d, t),
				p = (e, t, n) => e.merge({
					text: e.getText().slice(t, n),
					characterList: e.getCharacterList().slice(t, n)
				}),
				m = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
						s = arguments.length > 3 ? arguments[3] : void 0;
					const r = t.map(e => e.getText()).join(n),
						i = n ? s || o.CharacterMetadata.create() : null,
						a = [];
					return t.forEach(e => {
						a.push(...e.getCharacterList().toArray()), i && t.length > 1 && a.push(i)
					}), e.merge({
						text: r,
						characterList: a
					})
				},
				h = (e, t) => {
					const n = [];
					for (let r = 0; r < t; r++)
						for (let t = 0; t < e; t++) n.push(new o.ContentBlock({
							key: Object(o.genKey)(),
							type: a.l,
							data: Object(s.Map)({
								colCount: e,
								colIndex: t,
								rowIndex: r
							})
						}));
					return n
				},
				b = (e, t) => ({
					minCol: Math.min(e.colIndex, t.colIndex),
					minRow: Math.min(e.rowIndex, t.rowIndex),
					maxCol: Math.max(e.colIndex, t.colIndex),
					maxRow: Math.max(e.rowIndex, t.rowIndex)
				}),
				g = (e, t) => {
					const {
						minCol: n,
						minRow: o,
						maxCol: s,
						maxRow: r
					} = b(e, t);
					return (e, t) => o <= e && e <= r && n <= t && t <= s
				},
				f = (e, t) => e.rowIndex < t.rowIndex ? -1 : e.rowIndex > t.rowIndex ? 1 : e.colIndex - t.colIndex,
				x = (e, t) => e === t || !(!e || !t) && 0 === f(e, t),
				C = (e, t) => f(l(e), l(t)),
				E = e => {
					if (Object(a.v)(e.getType())) {
						return 0 === l(e).rowIndex
					}
					return !1
				},
				y = (e, t, n) => {
					const o = (t, n) => {
						if (t) {
							const o = Object(i.a)(e, t);
							return o && n && -1 !== o.blocks.indexOf(n) ? [o, o] : [o, n ? Object(i.a)(e, n) : null]
						}
						return n ? o(n, null).reverse() : [null, null]
					};
					return o(Object(a.v)(t.getType()) ? t : null, Object(a.v)(n.getType()) ? n : null)
				},
				v = function(e, t, n) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					const s = {
						isBackward: o
					};
					return t && (s.anchorKey = t.getKey(), s.anchorOffset = o ? t.getLength() : 0), n && (s.focusKey = n.getKey(), s.focusOffset = o ? 0 : n.getLength()), e.merge(s)
				},
				O = e => {
					if (!e.length) return [];
					const t = e[0].length;
					return e.map((e, n) => e.map((e, o) => u(e, {
						rowIndex: n,
						colIndex: o,
						colCount: t
					})))
				}
		},
		"./src/reddit/components/SEOTitle/index.m.less": function(e, t, n) {
			e.exports = {
				Title: "_eYtD2XCVieq6emjKBH3m",
				title: "_eYtD2XCVieq6emjKBH3m"
			}
		},
		"./src/reddit/components/SEOTitle/index.tsx": function(e, t, n) {
			"use strict";
			var o, s, r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(o || (o = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(s || (s = {}));
			var l = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/helpers/postCollection.ts");
			const u = [l.yb.COMMENTS, l.yb.COLLECTION_COMMENTS],
				p = (e, t) => {
					if (!e) return [];
					const n = u.includes(e),
						s = e === l.yb.COLLECTION_COMMENTS || t && Object(d.a)(t),
						r = l.M.has(e),
						i = l.pb.has(e),
						a = e === l.yb.SUBREDDIT,
						c = e === l.yb.TOPIC;
					let p, m, h;
					return r && !a || i ? p = o.HeaderSelector : s ? p = o.Collection : n ? p = o.PostComments : c && (p = o.TopicHeader), (r || i || s || n) && (m = o.Widget), (r || n) && (h = o.PostItem), [p, m, h]
				};
			var m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/components/SEOTitle/index.m.less"),
				g = n.n(b);
			n.d(t, "a", (function() {
				return o
			}));
			const f = e => {
					let {
						level: t,
						children: n
					} = e;
					const o = "h".concat(t);
					return i.a.createElement(o, {
						className: g.a.Title
					}, n)
				},
				x = Object(m.t)(),
				C = Object(a.b)(() => Object(c.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					return n && Object(h.n)(e, {
						page: n
					})
				}, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return n && n.meta && n.meta.name
				}, (e, t) => {
					let {
						type: n
					} = t;
					return n
				}, (e, t, n) => ({
					level: p(t, e).indexOf(n) + 1 || void 0
				})));
			class E extends i.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? i.a.createElement(f, {
						level: t
					}, e) : i.a.createElement(i.a.Fragment, null, e)
				}
			}
			t.b = x(C(E))
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/reddit/components/SidebarFooter/index.m.less"),
				c = n.n(a);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), d = r.a.a("Link", c.a);
			t.a = e => s.a.createElement(i.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, s.a.createElement("div", {
				className: c.a.LinkContainer
			}, s.a.createElement("div", {
				className: c.a.Column
			}, s.a.createElement(d, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), s.a.createElement(d, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), s.a.createElement(d, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), s.a.createElement(d, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), s.a.createElement(d, {
				href: "http://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), s.a.createElement(d, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), s.a.createElement(d, {
				href: "https://www.reddit.com/posts/a-1/"
			}, l._("Top Posts", null, {
				hk: "2NOEW2"
			})), s.a.createElement(d, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			}))), s.a.createElement("div", {
				className: c.a.Column
			}, s.a.createElement(d, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), s.a.createElement(d, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), s.a.createElement(d, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), s.a.createElement(d, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), s.a.createElement(d, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), s.a.createElement(d, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), s.a.createElement(d, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), s.a.createElement(d, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), s.a.createElement(d, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), s.a.createElement("div", {
				className: c.a.Copyright
			}, l._("Reddit Inc © {year}. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", s.a)
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, n) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/getShortenedLink.ts"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				l = n("./src/reddit/components/SourceLink/index.m.less"),
				d = n.n(l),
				u = n("./src/lib/lessComponent.tsx");
			const p = u.a.wrapped(c.a, "OutboundLinkIcon", d.a),
				m = u.a.div("SourceLinkWrapper", d.a);
			t.a = e => {
				const {
					className: t,
					post: n,
					isCommentsPage: o
				} = e, {
					source: c,
					isSponsored: l
				} = n;
				return c ? s.a.createElement(m, {
					className: Object(r.a)({
						[d.a["m-comment"]]: o
					}, t)
				}, s.a.createElement(a.a, {
					href: c.url,
					isSponsored: l,
					source: c
				}, Object(i.a)(n), s.a.createElement(p, null))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/app/strings/index.ts"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				p = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				m = n.n(p),
				h = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const x = b.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: n
					} = e, o = f(e, ["small", "shouldReverseColor"]);
					const r = n ? c.i : c.f;
					return s.a.createElement(r, g({}, o, {
						className: Object(h.a)(o.className, {
							[m.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", m.a),
				C = b.a.wrapped(e => {
					var {
						small: t,
						belongsToType: n,
						shouldReverseColor: o
					} = e, r = f(e, ["small", "belongsToType", "shouldReverseColor"]);
					const i = o ? c.f : c.i;
					return s.a.createElement(i, g({}, r, {
						className: Object(h.a)(r.className, {
							[m.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", m.a),
				E = b.a.wrapped(l.a, "Checkmark", m.a),
				y = b.a.wrapped(d.a, "Plus", m.a),
				v = b.a.div("ButtonSpacer", m.a);
			class O extends s.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: n,
							language: o,
							onSubscribe: i,
							onUnsubscribe: a,
							postId: c,
							sendEvent: l,
							small: d = !1,
							subscribeReminderTooltipId: p,
							subscribeTooltipId: b,
							userIsSubscriber: O,
							doNotHideOtherSubscribeButtons: j,
							getEventFactory: S,
							onSubscriptionsRequested: T
						} = e,
						k = f(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "subscribeReminderTooltipId", "subscribeTooltipId", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						w = this.state.isHovered;
					let _ = O ? Object(r.a)(o, "subscriptions.".concat(Object(u.a)({
						type: n.type
					}), ".subscribed")) : Object(r.a)(o, "subscriptions.".concat(Object(u.a)({
						type: n.type
					}), ".subscribe"));
					return O && w && (_ = Object(r.a)(o, "subscriptions.".concat(Object(u.a)({
						type: n.type
					}), ".unsubscribe"))), O ? this.state.hasJustSubscribed || j ? s.a.createElement(C, g({
						className: Object(h.a)(t, {
							[m.a.isLarge]: !d,
							[m.a.unsubscribeButtonHoverStyles]: !d
						}),
						onClick: this.onClick,
						small: d,
						belongsToType: n.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, k), d && s.a.createElement(E, null), !d && !w && s.a.createElement(E, null), !d && _) : d ? null : s.a.createElement(v, null) : s.a.createElement(s.a.Fragment, null, s.a.createElement(x, g({
						className: Object(h.a)(t, {
							[m.a.isLarge]: !d
						}),
						onClick: this.onClick,
						small: d
					}, k, {
						id: "subscribe-button-".concat(c),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), s.a.createElement(y, null), !d && _))
				}
			}
			t.a = Object(a.a)(Object(i.b)(O))
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, n) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/isUrl/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/icons/fonts/Gif/index.tsx"),
				d = n("./src/reddit/icons/fonts/Link/index.tsx"),
				u = n("./src/reddit/icons/fonts/Photos/index.tsx"),
				p = n("./src/reddit/icons/fonts/Text/index.tsx"),
				m = n("./src/reddit/icons/fonts/helpers.tsx"),
				h = n("./src/reddit/icons/fonts/Video/index.m.less"),
				b = n.n(h);
			var g = c.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(m.b)("video"), " ").concat(e.className)
				}), "VideoIcon", b.a),
				f = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				x = n("./src/reddit/constants/elementClassNames.ts"),
				C = n("./src/reddit/controls/ContentType/index.m.less"),
				E = n.n(C);
			const y = e => Object(i.a)(E.a.contentTypeIcon, e.className),
				v = e => r.a.createElement(d.a, {
					className: Object(i.a)(x.a, y(e))
				});
			var O = e => {
					const t = y(e);
					switch (e.type) {
						case "gifvideo":
							return r.a.createElement(l.a, {
								className: t
							});
						case "image":
							return r.a.createElement(u.a, {
								className: t
							});
						case "meta":
							return r.a.createElement(f.a, {
								className: t
							});
						case "rtjson":
						case "text":
							return r.a.createElement(p.a, {
								className: t
							});
						case "video":
							return r.a.createElement(g, {
								className: t
							});
						default:
							return r.a.createElement(v, e)
					}
				},
				j = n("./src/reddit/controls/OutboundLink/index.tsx"),
				S = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				T = n("./src/reddit/models/Media/index.ts"),
				k = n("./src/reddit/models/Theme/index.ts"),
				w = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = n("./src/reddit/components/Thumbnail/index.m.less"),
				I = n.n(_);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			n.d(t, "b", (function() {
				return H
			}));
			const M = e => e.placeholderImage || Object(w.a)(e).placeholderImage,
				R = e => e.placeholderImage ? "cover" : Object(w.a)(e).placeholderImagePosition,
				N = c.a.span("LinkText", I.a),
				L = e => {
					let {
						className: t,
						onClick: n,
						children: o
					} = e;
					return r.a.createElement("div", {
						onClick: n,
						className: Object(i.a)(I.a.linkIcon, t)
					}, o)
				},
				D = e => r.a.createElement("img", {
					alt: e.alt,
					className: Object(i.a)(I.a.hiddenImage, e.className)
				}),
				F = e => r.a.createElement("div", {
					"aria-label": e.alt,
					className: Object(i.a)(I.a.thumbnail, I.a.imageThumbnail, e.className),
					"data-click-id": "image",
					role: "img",
					style: {
						backgroundImage: "url(".concat(e.src, ")"),
						borderColor: e.isOutbound ? Object(w.a)(e).button : Object(w.a)(e).line
					}
				}, e.isOutbound && r.a.createElement(L, {
					className: e.linkIconClassName
				}, r.a.createElement(S.a, {
					className: Object(i.a)(I.a.outboundLinkIcon, e.outboundLinkIconClassName)
				}), e.text && r.a.createElement(N, {
					className: e.linkTextClassName
				}, e.text)), r.a.createElement(D, {
					alt: e.alt,
					className: "hiddenImg"
				})),
				B = e => e.isOutbound ? Object(w.a)(e).button : e.placeholderImage ? "transparent" : Object(w.a)(e).line,
				A = e => {
					const t = M(e),
						n = t && {
							background: Object(k.g)(Object(w.a)(e).placeholder, t, R(e))
						};
					return r.a.createElement("div", {
						className: Object(i.a)(I.a.thumbnail, I.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: Object.assign({}, n, {
							borderColor: B(e)
						})
					}, (!e.placeholderImage || e.showContentType) && r.a.createElement(O, {
						className: Object(i.a)(I.a.contentType, {
							[I.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta ? "meta" : e.type
					}), e.isOutbound && r.a.createElement(L, {
						className: e.linkIconClassName
					}, r.a.createElement(S.a, {
						className: Object(i.a)(I.a.outboundLinkIcon, e.outboundLinkIconClassName)
					}), e.text && r.a.createElement(N, {
						className: e.linkTextClassName
					}, e.text)))
				},
				K = e => r.a.createElement(F, P({}, e, {
					className: Object(i.a)(I.a.blurredThumbnail, e.className)
				})),
				U = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: n,
						crosspost: s,
						forceShowNSFW: a,
						isMeta: c,
						linkIconClassName: l,
						linkTextClassName: d,
						outboundLinkIconClassName: u,
						post: p,
						redditStyle: m,
						removeLink: h,
						showContentType: b,
						templatePlaceholderImage: g,
						text: f,
						theme: x,
						usePreview: C
					} = e, E = !x.subredditContext.shouldShowNSFWContent && (p.isNSFW || !(!s || !s.isNSFW)) && !a, y = M({
						placeholderImage: g,
						redditStyle: m,
						theme: x
					}), v = H(e), O = W(p, t, y, E, f, x, v, c, b, h, m, l, d, u), S = Object(T.A)(p);
					return Object(o.a)(S) && !h && S.indexOf("redditmedia") < 0 ? r.a.createElement("div", {
						className: Object(i.a)(I.a.container, C ? I.a.usePreview : "", n)
					}, r.a.createElement(j.a, {
						href: Object(T.A)(p),
						isSponsored: p.isSponsored,
						source: p.source
					}, O)) : r.a.createElement("div", {
						className: Object(i.a)(I.a.container, C ? I.a.usePreview : "", n)
					}, O)
				}),
				H = e => {
					let {
						crosspost: t,
						post: n,
						url: o,
						usePreview: s
					} = e;
					return o || (t ? s && t.preview ? t.preview.url : t.thumbnail.url : s && n.preview ? n.preview.url : n.thumbnail.url)
				},
				W = (e, t, n, s, i, a, c, l, d, u, p, m, h, b) => {
					const g = e.source && !e.isSponsored || !1;
					return Object(o.a)(c) ? s ? r.a.createElement(K, {
						"data-click-id": "image",
						src: c,
						className: t,
						isOutbound: g && !u,
						linkIconClassName: m,
						linkTextClassName: h,
						outboundLinkIconClassName: b,
						redditStyle: p,
						text: i,
						theme: a
					}) : r.a.createElement(F, {
						alt: e.title,
						className: t,
						src: c,
						isOutbound: g && !u,
						linkIconClassName: m,
						linkTextClassName: h,
						outboundLinkIconClassName: b,
						redditStyle: p,
						text: i,
						theme: a
					}) : r.a.createElement(A, {
						className: t,
						placeholderImage: n,
						isMeta: l,
						isOutbound: g && !u,
						linkIconClassName: m,
						linkTextClassName: h,
						outboundLinkIconClassName: b,
						redditStyle: p,
						showContentType: d,
						text: i,
						theme: a,
						type: e.media ? e.media.type : null
					})
				};
			t.a = U
		},
		"./src/reddit/components/ThumbnailSelector/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "uqOt5KqJAqw5pe-WNxa0a",
				component: "uqOt5KqJAqw5pe-WNxa0a",
				TitleRow: "HEiFtUR3s93dQ2jUWWnxr",
				titleRow: "HEiFtUR3s93dQ2jUWWnxr",
				Close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				CloseWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				closeWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				ThumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				thumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				Image: "_2H32szY9NZ1aKr6j4Ced7u",
				image: "_2H32szY9NZ1aKr6j4Ced7u",
				thumbnail: "_2Ks8P6YD1-8_Ju3IrYpPJf",
				isSelected: "_3oA67AGI49fKcqDP970t4U",
				ButtonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				buttonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				CancelButton: "mBq3crGX9-xOOg-b-1V85",
				cancelButton: "mBq3crGX9-xOOg-b-1V85"
			}
		},
		"./src/reddit/components/ThumbnailSelector/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/debounce.js"),
				r = n.n(s),
				i = n("./node_modules/lodash/range.js"),
				a = n.n(i),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/media/index.ts"),
				b = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				g = n("./src/reddit/icons/svgs/Close/index.tsx"),
				f = n("./src/reddit/layout/row/Inline/index.tsx"),
				x = n("./src/reddit/components/ThumbnailSelector/index.m.less"),
				C = n.n(x);
			const E = 10,
				y = Object(p.a)(u.a.div("Component", C.a)),
				v = u.a.wrapped(f.a, "TitleRow", C.a),
				O = u.a.wrapped(g.a, "Close", C.a),
				j = u.a.div("CloseWrapper", C.a),
				S = u.a.div("ThumbnailsContainer", C.a),
				T = u.a.img("Image", C.a),
				k = e => l.a.createElement("div", {
					className: Object(d.a)(C.a.thumbnail, Object(b.a)({
						isLoading: e.isLoading
					}), {
						[C.a.isSelected]: e.isSelected
					}),
					onClick: e.onClick,
					ref: e.elementRef
				}, e.thumbnail.url && l.a.createElement(T, {
					src: e.thumbnail.url
				})),
				w = u.a.wrapped(f.a, "ButtonRow", C.a),
				_ = m.f,
				I = u.a.wrapped(m.i, "CancelButton", C.a),
				P = (e, t) => {
					if (1 === e) return [0];
					const n = a()(0, t, t / (e - 1));
					return n.push(t), n.map(e => +e.toFixed(2))
				};
			class M extends l.a.Component {
				constructor(e) {
					super(e), this.isThumbnailsAreGenerating = !1, this.setSelectedElementRef = e => this.selectedElement = e, this.setThumbnails = r()(e => this.setState({
						thumbnails: e
					}), 100), this.scrollIntoView = () => {
						this.selectedElement && this.selectedElement.scrollIntoView({})
					}, this.setSelected = e => {
						this.setState({
							selectedIndex: e
						})
					}, this.onSelectButton = () => {
						const {
							selectedIndex: e
						} = this.state, t = this.state.thumbnails[e];
						this.props.onSelect({
							time: t.time,
							url: t.url
						})
					};
					const {
						thumbnailsCount: t = E,
						selected: n,
						videoDuration: o
					} = this.props, s = P(t, o).map(e => ({
						time: e,
						url: n && n.time === e ? n.url : void 0
					})), i = n ? s.findIndex(e => n.time === e.time) : -1;
					this.state = {
						thumbnails: s,
						selectedIndex: i
					}
				}
				componentDidMount() {
					this.scrollIntoView(), this.props.isOpen && this.generateVideoThumbnails()
				}
				componentDidUpdate(e) {
					this.props.isOpen && !e.isOpen && (this.scrollIntoView(), this.generateVideoThumbnails())
				}
				async generateVideoThumbnails() {
					const {
						thumbnails: e
					} = this.state;
					if (this.isThumbnailsAreGenerating || !e.find(e => !e.url)) return;
					this.isThumbnailsAreGenerating = !0;
					const t = document.createElement("video"),
						n = document.createElement("canvas");
					await Object(h.m)(t, this.props.videoSource);
					let o = 0;
					t.currentTime = e[o].time, await Object(h.d)(t, n, t => (e[o].url = t.dataUrl, o++, this.setThumbnails(e), o < e.length ? e[o].time : null)), this.setState({
						thumbnails: e
					}), this.isThumbnailsAreGenerating = !1
				}
				render() {
					if (!this.props.isOpen) return null;
					const {
						selectedIndex: e,
						thumbnails: t
					} = this.state;
					return l.a.createElement(y, {
						withOverlay: !0
					}, l.a.createElement(v, null, o.fbt._("Choose thumbnail", null, {
						hk: "XlI0H"
					}), l.a.createElement(j, {
						onClick: this.props.onToggleModal
					}, l.a.createElement(O, null))), l.a.createElement(S, null, t.map((t, n) => l.a.createElement(k, {
						key: n,
						elementRef: n === e ? this.setSelectedElementRef : void 0,
						isLoading: !t.url,
						onClick: () => this.setSelected(n),
						isSelected: n === e,
						thumbnail: t
					}))), l.a.createElement(w, null, l.a.createElement(I, {
						onClick: this.props.onToggleModal
					}, o.fbt._("Cancel", null, {
						hk: "1f5Zk8"
					})), l.a.createElement(_, {
						onClick: this.onSelectButton
					}, o.fbt._("Select", null, {
						hk: "3s53WD"
					}))))
				}
			}
			t.a = M
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "JoWBeMWu_l8J_Hn6Udz_j",
				dropdownRow: "JoWBeMWu_l8J_Hn6Udz_j"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/noop.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/postCollection/index.ts"),
				m = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/OverflowMenu/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/i18n/utils.ts"),
				f = n("./src/reddit/selectors/activeModalId.ts"),
				x = n("./src/reddit/selectors/postCollection.ts"),
				C = n("./node_modules/reselect/es/index.js"),
				E = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/helpers/trackers/postCollection.ts"),
				v = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				O = n.n(v);
			const j = l.a.wrapped(b.b, "DropdownRow", O.a);
			let S;
			const T = Object(f.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				k = Object(f.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				w = Object(C.c)({
					createPostUrl: x.d,
					isDeleteConfirmModalOpen: T,
					isEditCollectionModalOpen: k,
					shouldShowCollectionEditOptions: x.s
				}),
				_ = Object(a.b)(w, (e, t) => ({
					copyLink: () => e(Object(u.t)(t.permalink)),
					onCreatePost: n => {
						t.shouldShowCreatePost && e(Object(c.b)(n))
					},
					onRemoveCollection: () => e(Object(p.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(d.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						S || (S = await Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), n.e("editCollectionModal")]).then(n.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(d.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = _(Object(E.b)(e => {
				const {
					className: t,
					collectionId: n,
					copyLink: o,
					createPostUrl: r,
					isDeleteConfirmModalOpen: a,
					isEditCollectionModalOpen: c,
					onCreatePost: l,
					onRemoveCollection: d,
					onToggleDeleteConfirmModal: u,
					onToggleEditModal: p,
					shouldShowCollectionEditOptions: b,
					shouldShowCreatePost: f,
					targetPosition: x,
					tooltipPosition: C,
					sendEvent: E
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(h.b, {
					className: t,
					dropdownId: "collection-menu-".concat(n, "-").concat(f ? 1 : 2),
					onClick: s.a,
					targetPosition: x,
					tooltipPosition: C
				}, i.a.createElement(j, {
					onClick: o,
					displayText: Object(g.c)("Copy collection link")
				}), b && i.a.createElement(i.a.Fragment, null, i.a.createElement(j, {
					onClick: () => {
						E(Object(y.l)(n)), p()
					},
					displayText: Object(g.c)("Edit")
				}), i.a.createElement(j, {
					onClick: () => {
						E(Object(y.k)(n)), u()
					},
					displayText: Object(g.c)("Delete collection")
				}), f && i.a.createElement(j, {
					onClick: () => {
						l(r)
					},
					displayText: Object(g.c)("Create post")
				}))), c && S && i.a.createElement(S, {
					collectionId: n,
					onClose: p,
					onEditSuccess: p
				}), a && i.a.createElement(m.a, {
					actionText: Object(g.c)("Yes, Delete"),
					headerText: Object(g.c)("Delete Collection"),
					modalText: Object(g.c)("Are you sure you want to delete this collection? The posts within the collection won't be deleted."),
					onConfirm: d,
					toggleModal: u,
					trackClick: s.a
				}))
			}))
		},
		"./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_135f7-HhEMvekPzYxVBaFE",
				activeItemIndicator: "_31zbCRopTPo2NGtlgVsrBX",
				metaLine: "_1OrlyQwYIehGSk4bhP_l2R",
				title: "_2jvQA1RLlcCLU44q6eB3g0"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "_3V8ByF4idIiROiWQ9i468R",
				dropdownRow: "_3V8ByF4idIiROiWQ9i468R"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/noop.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/opener/index.ts"),
				l = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				d = n("./src/reddit/components/OverflowMenu/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/Row.tsx"),
				p = n("./src/reddit/i18n/utils.ts"),
				m = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				h = n.n(m);
			const b = a.a.wrapped(u.b, "DropdownRow", h.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: n,
					onEditStartTime: o,
					onStartEventNow: r,
					postPermalink: a,
					shouldShowAddEventStartTime: u,
					targetPosition: m,
					tooltipPosition: h
				} = e;
				return i.a.createElement(d.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: s.a,
					targetPosition: m,
					tooltipPosition: h
				}, u && n && i.a.createElement(b, {
					onClick: n,
					displayText: Object(p.c)("Add event start time")
				}), t && r && i.a.createElement(b, {
					onClick: r,
					displayText: Object(p.c)("Start event now")
				}), t && o && i.a.createElement(b, {
					onClick: o,
					displayText: Object(p.c)("Edit start time")
				}), i.a.createElement(b, {
					onClick: e.onRemoveClick,
					displayText: Object(p.c)("Remove from collection")
				}), a && i.a.createElement(l.a, {
					target: c.c.BLANK,
					rel: c.b,
					isOverlay: !1,
					to: a
				}, i.a.createElement(b, {
					displayText: Object(p.c)("View post")
				})))
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less": function(e, t, n) {
			e.exports = {
				Container: "I9mI9NePKM1BEsmfZR-6H",
				container: "I9mI9NePKM1BEsmfZR-6H",
				Content: "_6d8yyfLZcJ1OXLzEXoApB",
				content: "_6d8yyfLZcJ1OXLzEXoApB",
				Title: "_1efKScSk4JSYvERdEecZnZ",
				title: "_1efKScSk4JSYvERdEecZnZ",
				Secondary: "_3fCsv_r4CtfCTdAzBRaR9N",
				secondary: "_3fCsv_r4CtfCTdAzBRaR9N"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "ceAYEjQdznT14GrQQ52QV",
				content: "_36S4oraLw5gf--rC9-aWZs",
				overflowMenu: "MiZ0gbh9xe5Yiwt3RQf2o",
				metaLine: "_2JVAK9jCDOKkFXe1XS6gwH",
				title: "_2U-RjfXG1sY-NtByFOS-uC"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3_XzG2WCa3EYhqzE_vUcMN",
				topRow: "r_Dz4suUXbQkBdwR-eQ77",
				collectionDescription: "_3K3iJQYRdF3d2n1WlPxkpr",
				listContainer: "_2K8wDNk-kaP5gX-QEAXuMc",
				listWrapper: "VYYQfc9_vtbBaR47zbXdB",
				menuButton: "_1BX9a5jz4LWzuQohy4Cvz4"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/i18n/components.tsx"),
				a = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less"),
				p = n.n(u);
			const m = Object(l.c)({
				title: d.eb
			});
			var h = Object(c.b)(m)(e => {
					const {
						title: t
					} = e;
					return s.a.createElement("div", {
						className: p.a.container
					}, s.a.createElement("div", {
						className: p.a.activeItemIndicator
					}), t && s.a.createElement("h2", {
						className: p.a.title
					}, t), s.a.createElement("div", {
						className: p.a.metaLine
					}, s.a.createElement(i.c, null, "Editing")))
				}),
				b = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = n("./src/app/strings/index.ts"),
				f = n("./src/lib/timeAgo/index.ts"),
				x = n("./src/reddit/actions/postCollection/index.ts"),
				C = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less"),
				v = n.n(y),
				O = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				j = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				S = n("./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less"),
				T = n.n(S),
				k = e => {
					let {
						className: t,
						isLoading: n
					} = e;
					const o = Object(j.a)({
						isLoading: n
					});
					return s.a.createElement("div", {
						className: Object(r.a)(T.a.Container, t)
					}, s.a.createElement("div", {
						className: T.a.Content
					}, s.a.createElement("div", {
						className: Object(r.a)(T.a.Title, o)
					}), s.a.createElement("div", {
						className: Object(r.a)(T.a.Secondary, o)
					})))
				};
			const w = ["right", "bottom"],
				_ = ["right", "top"];
			var I = Object(c.b)(() => Object(l.c)({
					post: C.I,
					language: E.S
				}), (e, t) => ({
					onRemovePostFromCollection: () => e(Object(x.g)(t.collectionId, t.postId))
				}))(e => {
					const {
						post: t,
						language: n,
						onRemovePostFromCollection: o
					} = e;
					return t ? s.a.createElement("div", {
						className: v.a.container
					}, s.a.createElement("div", {
						className: v.a.content
					}, s.a.createElement(b.a, {
						className: v.a.title,
						target: "_blank",
						to: t.permalink
					}, t.title), s.a.createElement("div", {
						className: v.a.metaLine
					}, Object(g.a)(n, "sidebar.widgets.postCollection.postedTimeAgo", {
						timeAgo: Object(f.d)(n, t.created / 1e3)
					}))), s.a.createElement(O.a, {
						onRemoveClick: o,
						className: v.a.overflowMenu,
						dropdownId: "collection-widget-item" + t.id,
						postPermalink: t.permalink,
						targetPosition: w,
						tooltipPosition: _
					})) : s.a.createElement(k, {
						className: v.a.container,
						isLoading: !0
					})
				}),
				P = n("./src/reddit/components/Widgets/PostCollection/index.m.less"),
				M = n.n(P);
			const R = ["right", "bottom"],
				N = ["right", "top"];
			class L extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.renderItem = (e, t) => s.a.createElement(I, {
						collectionId: this.props.collection.id,
						key: e,
						postId: e
					})
				}
				render() {
					const {
						className: e,
						collection: t
					} = this.props, n = t.postIds.map(this.renderItem).reverse();
					return s.a.createElement("div", {
						className: Object(r.a)(e, M.a.container)
					}, s.a.createElement("div", {
						className: M.a.topRow
					}, s.a.createElement(i.c, null, "Collection"), s.a.createElement(a.a, {
						className: M.a.menuButton,
						collectionId: t.id,
						isSubmitPage: !0,
						permalink: t.permalink,
						targetPosition: R,
						tooltipPosition: N
					})), s.a.createElement("h4", {
						className: M.a.collectionDescription
					}, t.title), s.a.createElement("div", {
						className: M.a.listWrapper
					}, s.a.createElement("div", {
						className: M.a.listContainer
					}, n)), s.a.createElement(h, null))
				}
			}
			t.a = L
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/app/strings/index.ts"),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/reddit/connectors/connectToLanguage.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				u = n("./src/reddit/components/RichTextJson/index.tsx"),
				p = n("./src/reddit/helpers/dom/index.ts"),
				m = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				f = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				x = n.n(f);
			const C = l.a.div("RuleShortName", x.a),
				E = l.a.div("RuleIndex", x.a),
				y = l.a.div("RuleTitle", x.a),
				v = l.a.div("RuleDescription", x.a),
				O = l.a.wrapped(d.a, "RawHTMLDisplay", x.a),
				j = {};
			class S extends s.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(p.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === g.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: o
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !o(e) && !!r;
					return s.a.createElement(C, {
						className: Object(c.a)({
							[x.a.pointerCursor]: i
						}),
						onClick: o(e) || !r ? void 0 : n
					}, s.a.createElement(b.a, null, s.a.createElement(E, null, "".concat(e.humanIndex, ".")), s.a.createElement(y, null, "".concat(e.rule.shortName)), s.a.createElement("div", null, !o(e) && r && (t.isVisible ? s.a.createElement(h.a, {
						className: x.a.Chevron
					}) : s.a.createElement(m.a, {
						className: x.a.Chevron
					})))), t.isVisible && s.a.createElement(v, null, e.rule.descriptionRichText ? s.a.createElement(u.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: j
					}) : e.rule.descriptionHtml ? s.a.createElement(O, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			n.d(t, "a", (function() {
				return T
			}));
			const T = Object(a.a)(e => e.rules.length > 0 ? s.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: Object(r.a)(e.language, "structuredStyles.widgets.subreddit-rules.subredditRules", {
					subreddit: e.subredditName
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return s.a.createElement(S, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null);
			t.b = e => s.a.createElement(T, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/components/SEOTitle/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/selectors/telemetry.ts");
			const h = (e, t) => n => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(m.widget)(n, {
					subredditId: e,
					widgetKind: t
				})
			}, m.defaults);
			var b = n("./src/reddit/i18n/components.tsx"),
				g = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				f = n("./src/reddit/selectors/experiments/topPosts.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/models/Theme/index.ts"),
				y = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				O = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				j = e => {
					const t = v(e);
					return Object(E.f)(t)
				},
				S = e => {
					const t = O(e);
					return Object(E.f)(t)
				};
			var T = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = n.n(T);
			const w = Object(u.t)(),
				_ = Object(r.b)(() => Object(i.c)({
					forceRedditStyle: (e, t) => {
						const n = Object(u.m)(e, t) || void 0,
							o = t.redditStyle || Object(x.m)(e, {
								subredditId: n
							}),
							s = Object(C.U)(e);
						return o || s
					},
					nigtmode: C.U,
					subredditId: u.m,
					topPostVariant: f.d
				}));
			class I extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(h(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.borderColor = Object(g.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = j(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = O(this.props), e.color = e.fill = S(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: o,
						headerButton: r,
						onClick: i,
						title: c,
						titleClassName: d,
						truncateThreshold: u
					} = this.props, m = n ? k.a.widgetContentOnly : k.a.widgetContent, h = !o && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, f = h ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(a.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: o,
							[k.a.clickable]: !!i,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": o,
						onClick: i,
						style: g
					}, c && s.a.createElement("div", {
						className: k.a.widgetHeader,
						style: f
					}, s.a.createElement("div", {
						className: Object(a.a)(k.a.widgetTitle, d)
					}, s.a.createElement(l.b, {
						type: l.a.Widget
					}, c)), r), s.a.createElement("div", {
						className: Object(a.a)(m, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(p.n, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, s.a.createElement(b.c, null, "See More")))
				}
			}
			t.a = w(_(Object(c.a)(Object(d.b)(I))))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/selectors/activeModalId.ts"),
				a = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = Object(s.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.j,
				isBladeEditorDirty: a.i,
				isModalOpen: Object(i.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(o.b)(l, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					requestCloseBlade: () => n && e(Object(r.h)(n))
				}
			})
		},
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
				language: r.S
			});

			function a(e) {
				return Object(o.b)(i)(e)
			}
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "s", (function() {
				return b
			})), n.d(t, "t", (function() {
				return g
			})), n.d(t, "v", (function() {
				return f
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "w", (function() {
				return C
			})), n.d(t, "x", (function() {
				return E
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "q", (function() {
				return T
			}));
			const o = 284,
				s = 450,
				r = 800,
				i = 284,
				a = 48,
				c = 640,
				l = 1600,
				d = 1280,
				u = 40,
				p = 48,
				m = 24,
				h = 24,
				b = 312,
				g = 40,
				f = 270,
				x = 106,
				C = 5,
				E = 16,
				y = 40,
				v = 1250,
				O = 82,
				j = 48,
				S = 36,
				T = 37
		},
		"./src/reddit/constants/disclaimers.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
				}(o || (o = {}));
			const s = "https://www.redditinc.com/policies/beta-terms-of-service"
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			}));
			const o = "reddit",
				s = "reddit.ready",
				r = "reddit.urlChanged"
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = 480,
				s = 960,
				r = 1200
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			const o = 4,
				s = 60,
				r = 70,
				i = 90,
				a = 99,
				c = 100,
				l = 100
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, n) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				d = n.n(l);
			t.a = e => s.a.createElement(c.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(r.a)(e.className, d.a.checkboxInput, e.disabled ? d.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, s.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? s.a.createElement(a.a, {
				className: d.a.checkboxSelected
			}) : s.a.createElement(i.a, null), e.children)
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, n) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdownTriangle: "_1oxgVV3q47KbjEKqP5CHuM",
				iconStyles: "Ls9uHSAO9p2g7EMya2KXp",
				dropdown: "_2uYY-KeuYHKiwl-9aF0UiL"
			}
		},
		"./src/reddit/controls/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/domUtils/index.ts"),
				a = n("./src/reddit/constants/zIndex.ts"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				l = n.n(c);
			class d extends s.a.Component {
				componentDidMount() {
					this.props.noFocus || this.ref && this.ref.focus({
						preventScroll: this.props.isOverlay
					})
				}
				componentWillUnmount() {
					Object(i.a)(this.props.tooltipId)
				}
				render() {
					const e = this.props,
						t = {};
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? a.d + 1 : a.c)), s.a.createElement("div", {
						className: Object(r.a)(l.a.dropdown, e.className),
						ref: e => this.ref = e,
						role: "menu",
						style: Object.assign({}, t, e.style),
						tabIndex: -1
					}, e.children)
				}
			}
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/flow.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-dnd/lib/index.js"),
				c = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = n("./src/reddit/helpers/dragDropContext/index.ts");
			const d = c.NativeTypes.FILE,
				u = s()(Object(a.DropTarget)(d, {
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
			class p extends i.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(i.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(p)
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(d);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const h = i.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				g = e => {
					const {
						label: t,
						children: n,
						inputRef: o,
						className: i
					} = e, a = m(e, ["label", "children", "inputRef", "className"]), c = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, i, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, s.a.createElement(h, p({
						"aria-invalid": e.isInvalid,
						innerRef: o
					}, a)), e.label && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: o,
						className: i,
						redditStyle: a
					} = e, c = m(e, ["label", "children", "inputRef", "className", "redditStyle"]), l = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsRedditStyle]: a
						}),
						onClick: b
					}, s.a.createElement(h, p({
						innerRef: o
					}, c)), e.label && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				x = e => s.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
					className: u.a.plus
				}));
			var C;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(C || (C = {}));
			class E extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: C.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: C.REMOVE,
							value: n,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: n,
						placeholder: o,
						errors: r = []
					} = this.props;
					return e.map((e, i) => s.a.createElement(g, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!r[i],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, i),
						placeholder: o,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, s.a.createElement(l.b, {
						className: u.a.trash
					})), !!r[i] && s.a.createElement(a.b, {
						className: u.a.errorText
					}, r[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: o,
						addValueText: i,
						disabled: a
					} = this.props;
					this.focusedInput = null;
					const c = !(!!o && n.length >= o) && !a;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(x, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && c && s.a.createElement(x, {
						onClick: this.addValue,
						text: i
					}))
				}
			}
		},
		"./src/reddit/controls/GrowingOutlinedInput/index.m.less": function(e, t, n) {
			e.exports = {
				growingOutlinedInput: "PqYQ3WC15KaceZuKcFI02"
			}
		},
		"./src/reddit/controls/GrowingOutlinedInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-autosize-textarea/lib/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/GrowingOutlinedInput/index.m.less"),
				l = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			class p extends s.a.Component {
				constructor(e) {
					super(e), this.innerRef = null, this.focused = !1, this.setInnerRef = e => {
						this.innerRef = e, this.props.textareaRef && this.props.textareaRef(e)
					}, this.handleOnValueChange = () => {
						this.props.onValueChange && this.props.onValueChange(this.state.value)
					}, this.onFocus = e => {
						this.focused = !0, this.props.onFocus && this.props.onFocus(e)
					}, this.onBlur = e => {
						this.focused = !1, this.props.onBlur && this.props.onBlur(e)
					}, this.onChange = e => {
						if (this.innerRef) {
							const e = this.innerRef.value.replace(/\n/g, " ");
							this.setState(() => ({
								value: e
							}), this.handleOnValueChange)
						}
						this.props.onChange && this.props.onChange(e)
					}, this.onKeyPress = e => {
						13 === e.which && e.preventDefault(), this.props.onKeyPress && this.props.onKeyPress(e)
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.focused || this.state.value === e.value || this.setState({
						value: e.value
					})
				}
				render() {
					const {
						value: e
					} = this.state, t = this.props, {
						className: n,
						onValueChange: o,
						textareaRef: r,
						minHeight: c
					} = t, p = u(t, ["className", "onValueChange", "textareaRef", "minHeight"]);
					return s.a.createElement(i.a, d({}, p, {
						className: Object(a.a)(l.a.growingOutlinedInput, n),
						style: {
							minHeight: c
						},
						innerRef: this.setInnerRef,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						value: e
					}))
				}
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/controls/Input/index.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const e = this.props,
						{
							className: t,
							closeModal: n
						} = e,
						o = p(e, ["className", "closeModal"]);
					return s.a.createElement("input", u({
						className: Object(i.a)(d.a.input, t),
						onKeyDown: this.handleKeyDown
					}, o))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: a.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, n) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(d);
			class p extends s.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== i.b.Enter && e.key !== i.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : s.a.createElement(l.a, {
						"aria-checked": e.selected,
						className: Object(r.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? s.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : s.a.createElement(a.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = p
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/constants/keycodes.ts");
			class i extends s.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props;
						t || this.state.value !== e && (n(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return s.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props, {
							value: o
						} = this.state;
						if (t) return;
						const s = e.key === r.b.ArrowUp,
							i = e.key === r.b.ArrowDown;
						if (s || i) {
							const t = this.getValues();
							if (!t.length) return;
							const r = o ? t.indexOf(o) : 0,
								i = t[((s ? r - 1 : r + 1) + t.length) % t.length];
							n(i), this.setState({
								value: i
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return s.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, s.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), s.a.Children.map(e.children, (n, o) => {
						const r = 0 === o,
							i = n.props.value === t,
							a = null !== t ? i ? 0 : -1 : r ? 0 : -1;
						return s.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: i,
							tabIndex: a
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/helpers/dragDropContext/index.ts"),
				i = n("./node_modules/lodash/flow.js"),
				a = n.n(i),
				c = n("./node_modules/react-dnd/lib/index.js");
			class l extends s.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? a()(e.connectDropTarget, e.connectDragSource)(s.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var d = a()(Object(c.DragSource)("card", {
				beginDrag: e => ({
					id: e.id,
					index: e.index
				}),
				endDrag: (e, t) => {
					if (t && t.didDrop()) {
						const n = t.getDropResult();
						e.onDrop(e.id, n.id)
					}
				}
			}, (e, t) => ({
				connectDragSource: e.dragSource(),
				isDragging: t.isDragging()
			})), Object(c.DropTarget)("card", {
				drop: (e, t) => {
					if (!t || !t.didDrop()) return {
						id: e.id,
						index: e.index
					}
				},
				canDrop: (e, t) => {
					if (!t) return !1;
					const n = t.getItem();
					return e.id !== n.id
				}
			}, (e, t) => ({
				connectDropTarget: e.dropTarget(),
				isOver: t.isOver(),
				canDrop: t.canDrop()
			})))(l);
			class u extends s.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(n => {
							const o = n.values.slice(),
								s = o.indexOf(e),
								r = o.splice(s, 1)[0];
							let i = o.indexOf(t);
							return s <= i && (i += 1), o.splice(i, 0, r), this.props.onDrop(e, t, o), {
								values: o
							}
						})
					}, this.state = {
						values: e.values
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						values: e.values
					}))
				}
				render() {
					const {
						className: e,
						getReactKey: t,
						onClick: n,
						render: o
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, this.state.values.map((e, r) => s.a.createElement(d, {
						id: e,
						key: t && t(e),
						index: r,
						render: o,
						onDrop: this.onDrop,
						onClick: n
					})))
				}
			}
			t.a = Object(r.a)(u)
		},
		"./src/reddit/controls/SubredditDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				entry: "BR2J4z5ndMj6r3-QW2hHI",
				mIsFocused: "_2KXTnIrbZ1Fr5F4nZyXeKS",
				list: "_17g61LC45mhwjs-g79qbZK"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_1MHSX9NVr4C2QxH2dMcg4M",
				inputWrapper: "anPJr_ybRailY8NbAunl2",
				searchBar: "_3cWzf-usAKfGV1Ay7h2zM_",
				commonIconStyles: "_3UX5zf2Jh7UCwxr3e1Rrt2",
				subredditRoundIcon: "jpIFeDw811_DQwlQEqBjm",
				iconEmpty: "_3adQsrepNO01e3sMjt2z0P",
				dropdownIcon: "_15FJlGHQ_lg8wmnMsXlnes",
				subredditIcon: "_3qzq_OFvl7yMGqhmznk5lT",
				searchIcon: "_2MCEtCukiOUDUHF1PDgWwH",
				mDisabled: "I8Mbkr_v6UNBq2UjXD24r"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less": function(e, t, n) {
			e.exports = {
				entry: "_2_6Q3rlmltjQM8nEBoNJr-",
				disabled: "_1eGUunOsIyMkgTF3IiieVl"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less": function(e, t, n) {
			e.exports = {
				title: "-T-WBPEANCCRwTdAGSdj_",
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				noMatches: "kaGogHhtbK_vPZj9943oa",
				container: "_3DQXGvoE1SM3Kmz20of7Iz",
				mIsValid: "_28z84WGIIVp4uDMcA3-Kgw",
				mIsVisible: "_3009h778F7QI2qu6YmsxVV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/debounce.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/app/strings/index.ts"),
				c = n("./src/lib/classNames/index.ts");
			const l = {
				leading: !0,
				trailing: !1
			};
			var d = function(e, t, n) {
					let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l;
					const s = Object.assign({}, l, o),
						r = t > e ? 1 : -1;
					let i = e;
					if (e !== t) {
						for (s.leading || (i += r); i !== t;) n(i), i += r;
						s.trailing && n(i)
					} else(s.leading || s.trailing) && n(e)
				},
				u = n("./src/lib/forEachGroup/index.ts"),
				p = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				m = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				h = n.n(m);
			class b extends r.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.element = null, this.setRef = e => this.element = e, this.onMouseUp = () => {
						this.mouseDown && (this.props.disabled || this.props.onSelect(this.props.entryIndex), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onOver(this.props.entryIndex)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1, this.element && this.props.onUpdate(this.props.entryIndex, this.element)
				}
				render() {
					return i.a.createElement("div", {
						className: Object(c.a)(h.a.entry, this.props.disabled && h.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			n("./node_modules/core-js/modules/es6.symbol.js");
			var g = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				f = n.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
					var n = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
					}
					return n
				},
				E = e => {
					var {
						className: t,
						children: n,
						title: o
					} = e, s = C(e, ["className", "children", "title"]);
					return i.a.createElement("div", x({
						className: Object(c.a)(f.a.dropdownSection, t)
					}, s), o && i.a.createElement("div", {
						className: f.a.title
					}, o), n)
				},
				y = n("./src/reddit/helpers/name/index.ts"),
				v = n("./src/lib/lessComponent.tsx"),
				O = n("./src/reddit/components/SubredditIcon/index.tsx"),
				j = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				S = n("./src/reddit/icons/svgs/Link/index.tsx"),
				T = n("./src/reddit/icons/svgs/TextPost/index.tsx"),
				k = n("./src/reddit/icons/svgs/Video/index.tsx"),
				w = n("./src/reddit/layout/row/Inline/index.tsx"),
				_ = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				I = n.n(_);
			const P = [{
				type: "text",
				Icon: T.a
			}, {
				type: "images",
				Icon: j.a
			}, {
				type: "videos",
				Icon: k.a
			}, {
				type: "links",
				Icon: S.a
			}];
			var M = e => {
					const {
						allowedPostTypes: t,
						className: n
					} = e;
					return i.a.createElement(w.a, {
						className: Object(c.a)(I.a.rowStyle, n)
					}, P.map(e => {
						let {
							type: n,
							Icon: o
						} = e;
						return i.a.createElement("div", {
							className: Object(c.a)(I.a.iconWrapper, {
								[I.a.mDisabled]: !t[n]
							})
						}, i.a.createElement(o, null))
					}))
				},
				R = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				N = n.n(R);
			const L = v.a.wrapped(O.b, "subredditIcon", N.a);
			var D = e => {
					const {
						highlight: t,
						icon: n,
						title: o,
						secondaryText: s,
						item: r
					} = e, {
						allowedPostTypes: a
					} = r;
					return i.a.createElement("div", {
						className: Object(c.a)(N.a.container, {
							[N.a.mHighlight]: t
						})
					}, n, i.a.createElement("div", {
						className: N.a.main
					}, i.a.createElement("span", {
						className: N.a.title
					}, o), s && i.a.createElement("span", {
						className: N.a.secondary
					}, s)), t && a && i.a.createElement(M, {
						allowedPostTypes: a
					}))
				},
				F = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				B = n.n(F);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const K = Object(a.d)("listings.subscribers");
			var U = e => {
				const {
					language: t,
					item: {
						name: n,
						iconUrl: o,
						subscribers: s
					}
				} = e, r = Object(y.c)(n), a = void 0 !== s ? K(t, s) : void 0, c = i.a.createElement(L, {
					className: B.a.profileIcon,
					iconUrl: o
				});
				return i.a.createElement(D, A({
					icon: c,
					title: r,
					secondaryText: a
				}, e))
			};

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(a.d)("listings.subscribers");
			var V = e => {
					const {
						language: t,
						item: {
							primaryColor: n,
							iconUrl: o,
							name: s,
							subscribers: r
						}
					} = e, a = Object(y.b)(s), c = void 0 !== r ? W(t, r) : void 0, l = i.a.createElement(L, {
						iconUrl: o,
						primaryColor: n,
						redditStyle: !0
					});
					return i.a.createElement(D, H({
						icon: l,
						title: a,
						secondaryText: c
					}, e))
				},
				z = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				q = n.n(z);
			const G = Object(a.e)("subredditPicker.noCommunitiesFound"),
				J = {
					[p.a.OWN_PROFILE]: Object(a.e)("subredditPicker.sectionOwnProfile"),
					[p.a.SUBSCRIBED_TO_SUBREDDIT]: Object(a.e)("subredditPicker.sectionSubscriptions"),
					[p.a.OTHER_SUBREDDIT]: Object(a.e)("subredditPicker.sectionOthers"),
					[p.a.MODERATED_SUBREDDIT]: Object(a.e)("subredditPicker.sectionModeratedSubreddits")
				};
			t.a = class extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.selectedEntryElement = null, this.containerElement = null, this.ignoreEntryOverEvents = !1, this.activateEntryOverEvents = s()(() => this.ignoreEntryOverEvents = !1, 100), this.setContainerRef = e => this.containerElement = e, this.onEntryUpdate = (e, t) => {
						e === this.props.focusedIndex && (this.selectedEntryElement = t)
					}, this.onScroll = () => {
						this.ignoreEntryOverEvents && this.activateEntryOverEvents()
					}, this.onEntryOver = e => {
						this.ignoreEntryOverEvents || this.props.items[e].disabled || this.props.onEntryFocus(e), this.ignoreEntryOverEvents = !1
					}
				}
				componentDidUpdate() {
					if (this.props.focusedIndex >= 0 && this.selectedEntryElement && this.containerElement) {
						const e = this.selectedEntryElement.getBoundingClientRect(),
							t = this.containerElement.getBoundingClientRect();
						(e.top < t.top || e.bottom > t.bottom) && (this.ignoreEntryOverEvents = !0, 0 === this.props.focusedIndex ? this.containerElement.scrollTop = 0 : this.selectedEntryElement.scrollIntoView(e.top < t.top)), this.props.onEntryFocus(this.props.focusedIndex)
					}
				}
				getEntryContentComponent(e, t) {
					switch (e) {
						case p.a.OWN_PROFILE:
							return U;
						default:
							return V
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t,
						language: n
					} = this.props, o = [];
					return this.props.showNoMatchesCaption && o.push(i.a.createElement(E, {
						key: "no-matches"
					}, i.a.createElement("div", {
						className: q.a.noMatches
					}, n && G(n)))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (s, r, a, c) => {
						const l = [];
						d(a, c, o => {
							const s = t[o],
								r = o === e,
								a = this.getEntryContentComponent(s.type, s.name);
							a && l.push(i.a.createElement(b, {
								entryIndex: o,
								disabled: s.disabled,
								key: s.id || s.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, i.a.createElement(a, {
								language: n,
								highlight: r,
								item: s
							})))
						});
						const u = J[r];
						o.push(i.a.createElement(E, {
							key: r,
							title: u && u(n),
							children: l
						}))
					}), i.a.createElement("div", {
						className: Object(c.a)(q.a.container, this.props.className, {
							[q.a.mIsValid]: this.props.isValid,
							[q.a.mIsVisible]: o.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, o)
				}
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2sfaZWDVT8JLAt2J9p4IzV",
				mIsActive: "_1d_qHIhircwk0cy-gLlRQq",
				mIsInvalid: "_3sp2CpDC4eODg63Hhf8_lz"
			}
		},
		"./src/reddit/controls/SubredditPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var o = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				r = n("./src/reddit/helpers/name/index.ts"),
				i = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				a = n("./src/reddit/models/User/index.ts");
			const c = (e, t, n) => {
					if (Object(r.a)(e, t.name)) {
						const {
							id: e,
							name: i
						} = t, {
							url: a,
							color: c
						} = Object(s.a)({
							shouldHideNsfwIcon: n,
							subredditOrProfile: t
						});
						return {
							rawString: Object(r.b)(i),
							record: {
								id: e,
								name: i,
								iconUrl: a,
								primaryColor: c,
								type: o.a.SUBREDDIT
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				l = (e, t, n) => {
					const s = Object(a.f)(t);
					if (Object(r.a)(e, s)) {
						const {
							id: e,
							accountIcon: n
						} = t;
						return {
							rawString: Object(r.c)(s),
							record: {
								id: e,
								name: s,
								iconUrl: n,
								type: o.a.PROFILE
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				d = (e, t, n, o) => {
					if (t && (!n || Object(r.d)(e))) return c(e, t, o);
					if (n && (!t || Object(r.e)(e))) return l(e, n);
					if (t && n) {
						const s = c(e, t, o);
						return s.record ? s : l(e, n)
					}
					return {
						rawString: e,
						record: null
					}
				},
				u = e => {
					let t;
					return t = e.type === o.a.PROFILE ? i.a.OWN_PROFILE : i.a.OTHER_SUBREDDIT, Object.assign({}, e, {
						type: t
					})
				},
				p = new RegExp("^(r/)?[A-Za-z0-9][A-Za-z0-9_]{1,20}$", "i"),
				m = new RegExp("^u/[A-Za-z0-9_-]{2,20}$", "i"),
				h = e => p.test(e) || m.test(e) || "" === e
		},
		"./src/reddit/controls/SubredditPicker/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/lodash/isEqual.js"),
				i = n.n(r),
				a = n("./src/reddit/helpers/name/index.ts"),
				c = class extends s.a.Component {
					constructor(e) {
						super(e), this.isFocused = !1, this.onFocus = () => {
							this.isFocused = !0, this.props.onFocus && this.props.onFocus()
						}, this.onChange = (e, t) => {
							this.setState({
								value: e
							}, () => {
								t && (this.props.onSelect(e), this.isFocused = !1)
							})
						}, this.state = {
							value: e.value
						}
					}
					componentWillReceiveProps(e) {
						const {
							value: t
						} = this.state, {
							value: n
						} = e;
						if (!i()(t, n) && !this.isFocused) {
							t.record && !n.record && Object(a.a)(t.record.name, n.rawString) ? this.setState({
								value: {
									rawString: n.rawString,
									record: t.record
								}
							}) : this.setState({
								value: n
							})
						}
					}
					render() {
						return s.a.createElement(s.a.Fragment, null, this.props.renderPicker({
							onChange: this.onChange,
							onFocus: this.onFocus,
							value: this.state.value
						}))
					}
				},
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/objectSelector/index.ts"),
				p = n("./src/reddit/actions/subredditAutocomplete.ts"),
				m = n("./src/reddit/actions/subredditCrosspostable.ts"),
				h = n("./src/reddit/actions/subscription/index.ts"),
				b = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				g = n("./node_modules/lodash/debounce.js"),
				f = n.n(g),
				x = n("./src/lib/classNames/index.ts"),
				C = n("./src/reddit/constants/keycodes.ts"),
				E = n("./src/reddit/constants/posts.ts"),
				y = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				O = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/app/strings/index.ts")),
				j = n("./src/lib/lessComponent.tsx"),
				S = n("./src/reddit/components/SubredditIcon/index.tsx"),
				T = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				k = n("./src/reddit/icons/svgs/Search/index.tsx"),
				w = n("./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less"),
				_ = n.n(w);
			const I = j.a.wrapped(S.b, "subredditRoundIcon", _.a),
				P = j.a.wrapped(I, "subredditIcon", _.a),
				M = j.a.wrapped(k.a, "searchIcon", _.a),
				R = j.a.span("iconEmpty", _.a),
				N = e => {
					let {
						className: t,
						disabled: n
					} = e;
					return s.a.createElement(T.b, {
						className: Object(x.a)(_.a.dropdownIcon, t, {
							[_.a.mDisabled]: n
						})
					})
				};

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var D = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const F = Object(O.e)("subredditPicker.chooseACommunity"),
				B = Object(O.e)("subredditPicker.searchCommunities"),
				A = e => {
					e.preventDefault(), e.stopPropagation()
				};
			var K = e => {
					const {
						className: t,
						disabled: n,
						isActive: o,
						icon: r,
						language: i,
						onDropdownClick: a,
						inputRef: c,
						value: l
					} = e, d = D(e, ["className", "disabled", "isActive", "icon", "language", "onDropdownClick", "inputRef", "value"]);
					let u = s.a.createElement(R, null);
					if (o) u = s.a.createElement(M, null);
					else if (r) {
						const e = r.round ? I : P;
						u = s.a.createElement(e, {
							primaryColor: r.color,
							iconUrl: r.url
						})
					}
					return s.a.createElement("div", {
						className: Object(x.a)(_.a.searchBar, t)
					}, u, s.a.createElement("div", {
						className: _.a.inputWrapper
					}, s.a.createElement("input", L({
						className: _.a.input,
						ref: c,
						disabled: n,
						placeholder: (o ? B : F)(i),
						spellCheck: !1,
						value: l
					}, d))), s.a.createElement("div", {
						onClick: a,
						onMouseDown: A
					}, s.a.createElement(N, {
						disabled: n
					})))
				},
				U = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				H = n("./src/reddit/controls/SubredditPicker/Picker/index.m.less"),
				W = n.n(H);
			const V = Object(d.c)({
				language: v.S
			});
			class z extends s.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.inputRef = null, this.setInputRef = e => {
						this.inputRef = e, this.props.inputRef && this.props.inputRef(e)
					}, this.commitSelection = () => {
						const e = this.getPickerValue(!0);
						Object(b.c)(e.rawString) ? this.props.onChange(e, !0) : this.props.onChange({
							rawString: "",
							record: null
						}, !0), this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.callOnChange = () => this.props.onChange(this.getPickerValue()), this.requestAutocomplete = f()(e => this.props.onGetSubredditAutocomplete(e), 200, {
						maxWait: 200
					}), this.selectItem = e => {
						const t = this.props.items[e];
						if (!t) throw new Error("Invalid item index");
						let n;
						n = t.type === y.a.OWN_PROFILE ? Object(a.c)(t.name) : Object(a.b)(t.name), this.setState({
							inputValue: n,
							focusedIndex: e
						}, this.commitSelection)
					}, this.getPickerValue = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						const n = t.state.inputValue,
							o = t.state.focusedIndex,
							{
								items: s,
								value: r
							} = t.props;
						if (r && r.record && Object(a.a)(n, r.record.name)) return Object.assign({}, r, {
							rawString: n
						});
						const i = s[o] || e && s.find(e => Object(a.a)(e.name, n));
						if (!i) return {
							rawString: n,
							record: null
						};
						const {
							type: c,
							id: l,
							name: d,
							iconUrl: u,
							primaryColor: p,
							allowedPostTypes: m
						} = i;
						return {
							rawString: n,
							record: Object(a.a)(n, d) ? {
								id: l,
								name: d,
								iconUrl: u,
								primaryColor: p,
								allowedPostTypes: m,
								type: c === y.a.OWN_PROFILE ? E.a.PROFILE : E.a.SUBREDDIT
							} : null
						}
					}, this.findNextEnabledItemIndex = e => {
						const t = e ? -1 : 1;
						let n = this.state.focusedIndex + t,
							o = this.props.items[n];
						for (; o;) {
							if (!o.disabled) return n;
							n += t, o = this.props.items[n]
						}
						return n
					}, this.moveSelection = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						const {
							value: n,
							items: o
						} = t.props;
						let s = t.findNextEnabledItemIndex(e);
						s < -1 ? s = o.length - 1 : s >= o.length && (s = -1);
						const r = -1 === s ? n.rawString : o[s].name;
						r && t.setState({
							focusedIndex: s,
							inputValue: r
						})
					}, this.placeCursorAtTheEnd = () => {
						const e = this.state.inputValue.length;
						this.inputRef && this.inputRef.setSelectionRange(e, e)
					}, this.onDropdownClick = e => {
						const {
							inputRef: t
						} = this;
						this.state.isOpen ? this.setState({
							isOpen: !1
						}) : (t && t.focus(), this.setState({
							isOpen: !0
						}), this.placeCursorAtTheEnd()), e.preventDefault(), e.stopPropagation()
					}, this.onFocus = () => {
						this.props.onFocus && this.props.onFocus(), this.setState({
							isActive: !0,
							isOpen: !0
						}), this.inputRef && this.inputRef.select()
					}, this.onBlur = () => {
						this.props.selectOnBlur && this.state.isOpen ? (this.commitSelection(), this.setState({
							isActive: !1
						})) : this.setState({
							isActive: !1,
							isOpen: !1
						})
					}, this.onDropdownContainerMouseDown = e => {
						e.preventDefault()
					}, this.onEntryFocus = e => {
						this.setState({
							focusedIndex: e
						})
					}, this.onEntrySelect = e => {
						this.selectItem(e)
					}, this.onInputChange = e => {
						this.state.isOpen || this.setState({
							isOpen: !0
						});
						const t = e.target.value;
						this.requestAutocomplete(t), this.setState({
							inputValue: t
						}, this.callOnChange)
					}, this.onKeyDown = e => {
						e.which === C.a.ArrowUp ? (this.moveSelection(!0), e.preventDefault()) : e.which === C.a.ArrowDown ? (this.moveSelection(), e.preventDefault()) : e.which === C.a.Enter || e.which === C.a.Tab ? (-1 !== this.state.focusedIndex ? this.selectItem(this.state.focusedIndex) : this.commitSelection(), e.which !== C.a.Tab && e.preventDefault()) : e.which === C.a.Escape && (this.inputRef && this.inputRef.blur(), e.preventDefault())
					}, this.state = {
						isActive: !1,
						isOpen: !1,
						focusedIndex: 0,
						inputValue: e.value.rawString
					}
				}
				componentDidMount() {
					const {
						value: {
							rawString: e
						}
					} = this.props;
					e && this.requestAutocomplete(e)
				}
				componentWillReceiveProps(e) {
					this.setState({
						focusedIndex: -1,
						inputValue: e.value.rawString
					})
				}
				render() {
					const {
						className: e,
						disabled: t,
						isValid: n = !0,
						items: o,
						value: r
					} = this.props, {
						isActive: i,
						isOpen: a
					} = this.state, c = r.record;
					return s.a.createElement("div", {
						className: Object(x.a)(W.a.container, e, {
							[W.a.mIsActive]: i,
							[W.a.mIsInvalid]: !n
						})
					}, s.a.createElement(K, {
						disabled: t,
						isActive: this.state.isActive,
						value: this.state.inputValue,
						icon: c && {
							color: c.primaryColor,
							round: c.type === E.a.SUBREDDIT,
							url: c.iconUrl
						},
						inputRef: this.setInputRef,
						language: this.props.language,
						onDropdownClick: this.onDropdownClick,
						onChange: this.onInputChange,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onKeyDown: this.onKeyDown
					}), a && s.a.createElement(U.a, {
						items: o,
						isValid: n,
						focusedIndex: this.state.focusedIndex,
						language: this.props.language,
						showNoMatchesCaption: !this.props.haveSuggestions && this.props.isAllDataRetrieved,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect
					}))
				}
			}
			var q = Object(l.b)(V)(z),
				G = n("./src/reddit/selectors/subredditAutocomplete.ts");

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = Object(u.a)(Object(d.a)((e, t) => t.value, (e, t) => {
					let {
						allowCrosspostableOnly: n,
						includeUserProfile: o,
						value: s
					} = t;
					return Object(G.a)(e, {
						allowCrosspostableOnly: n,
						includeUserProfile: o,
						substring: s.rawString
					})
				}, (e, t) => {
					const {
						suggestedItems: n,
						fallbackItems: o,
						isAllDataRetrieved: s
					} = t, r = n.length ? n : e.record ? [Object(b.a)(e.record)] : [];
					return {
						items: 0 === r.length && s ? o : r,
						haveSuggestions: r.length > 0,
						isAllDataRetrieved: t.isAllDataRetrieved,
						isAutocompletePending: t.isPending
					}
				})),
				Q = {
					onGetInitialData: e => t => t(e ? m.d() : h.e()),
					onGetSubredditAutocomplete: p.d
				};
			class X extends s.a.Component {
				constructor() {
					super(...arguments), this.onGetSubredditAutocomplete = e => {
						this.props.onGetSubredditAutocomplete(e)
					}
				}
				componentDidMount() {
					this.props.onGetInitialData(!!this.props.allowCrosspostableOnly)
				}
				render() {
					return s.a.createElement(q, J({}, this.props, {
						onGetSubredditAutocomplete: this.onGetSubredditAutocomplete
					}))
				}
			}
			var Y = Object(l.b)(Z, Q)(X);
			t.a = class extends s.a.Component {
				constructor() {
					super(...arguments), this.renderPicker = e => s.a.createElement(Y, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						className: this.props.className,
						disabled: this.props.disabled || !1,
						includeUserProfile: this.props.includeUserProfile,
						inputRef: this.props.inputRef,
						isValid: this.props.isValid,
						onChange: e.onChange,
						onFocus: e.onFocus,
						value: e.value,
						selectOnBlur: this.props.selectOnBlur || !1
					})
				}
				render() {
					return s.a.createElement(c, {
						onFocus: this.props.onFocus,
						onSelect: this.props.onSelect,
						renderPicker: this.renderPicker,
						value: this.props.value
					})
				}
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, n) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/TextButton/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("button", {
				children: e.children,
				className: Object(r.a)(a.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.on,
				className: Object(r.a)(a.a.toggleSwitch, e.className, {
					[a.a.mActive]: e.on && !e.disabled,
					[a.a.mDisabled]: e.disabled
				}),
				style: e.on && !e.disabled && e.activeColorOverride ? {
					backgroundColor: e.activeColorOverride
				} : void 0,
				id: e.id,
				role: "switch",
				tabIndex: e.tabIndex,
				type: "button",
				onClick: () => !e.disabled && e.onToggle && e.onToggle()
			}, s.a.createElement("div", {
				className: a.a.toggleDisplay
			}))
		},
		"./src/reddit/controls/Typography/index.m.less": function(e, t, n) {
			e.exports = {
				heading1: "_37JeV292IJA7_x1qej_-2H",
				heading2: "p13k-tsMcatGBlVpJBZmw",
				heading3: "_1nHvvYpmn7q9eWDAGzKcce",
				heading4: "_1-rwUWsB5F8WmYI8F66dai",
				heading5: "_22RKdGqihAj6MFumW6DuRV",
				heading6: "_4xqrI_N1UdqsK9E1RSisG",
				body1: "_2HJOIn4SJm4z1NeCv_hNFu",
				body2: "_3ImIPX9rfoPmUrZ1R8KGqS",
				actionFont: "_3uShGanwyVFBaTiPMFzfAC",
				metadata: "_2nyJGeaFJbXTqTh9OGwxfu",
				metadata3: "_3BIqvjJkJKZfH4vtC11dGF"
			}
		},
		"./src/reddit/controls/Typography/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Typography/index.m.less"),
				r = n.n(s);
			o.a.h1("heading1", r.a), o.a.h2("heading2", r.a), o.a.h3("heading3", r.a), o.a.h4("heading4", r.a);
			const i = o.a.h5("heading5", r.a),
				a = o.a.h6("heading6", r.a),
				c = o.a.p("body1", r.a),
				l = o.a.p("body2", r.a),
				d = o.a.p("actionFont", r.a),
				u = o.a.p("metadata", r.a);
			o.a.p("metadata3", r.a)
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			const r = (e, t) => Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(o.a.metaUrl, "/orders"),
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						subredditId: t.subredditId
					}
				}),
				i = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: "".concat(o.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts"),
				a = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function c(e, t) {
				return Object(i.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/communities/").concat(t.subredditId, "/me"),
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function l(e) {
				return Object(i.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/users/me"),
					method: "get"
				}).then(e => e.ok ? e.body.specialMemberships ? Object.assign({}, e, {
					body: e.body.specialMemberships
				}) : Object.assign({}, e, {
					body: {}
				}) : e)
			}

			function d(e, t) {
				return Object(i.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(i.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/orders"),
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.trial ? "trial_membership" : "membership",
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: t.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: t.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: t.username
						}
					}
				})
			}

			function p(e, t) {
				return Object(i.a)(Object(s.a)(e, [r.a]), {
					endpoint: "".concat(e.apiUrl, "/api/info?id=").concat(t.join(",")),
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(a.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return Object.assign({}, e, {
							body: t
						})
					}
					return e
				})
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/merge.js"),
				s = n.n(o),
				r = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/badges.ts"),
				a = n("./src/reddit/endpoints/governance/community.ts"),
				c = n("./src/reddit/endpoints/governance/products/badges.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			async function d(e, t, n) {
				const o = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					d = function(e, t) {
						return Object(l.a)(e, {
							method: "get",
							endpoint: "".concat(r.a.metaUrl, "/product-collections/").concat(t, "?types=badge")
						})
					}(e, t),
					u = Object(a.a)(e, {
						subredditId: t
					}),
					p = Object(c.b)(e, t),
					m = Object(i.c)(e, t, n),
					[h, b, g, f] = await Promise.all([d, u, p, m]);
				if (h.ok ? o.collections = h.body : o.errors.collections = h.error, b.ok) {
					const e = b.body;
					o.subscription = e.specialMemberships, o.communityRaw = e
				}
				return g.ok ? o.products = g.body : o.errors.products = g.error, f.ok ? (s()(o.badges, f.body.badges), o.userOwnedBadges = f.body.userOwnedBadges) : o.errors.userBadges = f.error, o
			}
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			const u = (e, t) => Object(l.a)(e, {
				endpoint: "".concat(r.a.metaUrl, "/products/").concat(t, "?types=badge,membership"),
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			var o, s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
				switch (e) {
					case o.Ethereum:
						return "Ethereum Main Network";
					case o.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function a(e, t, n) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function c(e, t, n) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function l(e, t, n) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(o || (o = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			}));
			var o = n("./node_modules/lodash/get.js"),
				s = n.n(o),
				r = n("./src/config.ts"),
				i = n("./src/graphql/operations/PollVote.json"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				d = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, o) {
				return Object(d.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(o)
				})
			}
			const p = (e, t, n) => Object(a.a)(e, Object.assign({}, i, {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function m(e, t) {
				return Object(d.a)(Object(c.a)(e, [l.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: s()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: s()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: s.bb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							o = {
								[t.subredditId]: n
							};
						return Object.assign({}, e, {
							body: o
						})
					}
					return e
				})
			}

			function a(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(o.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: s.bb.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/graphql/operations/CreateScheduledPost.json"),
				s = n("./src/graphql/operations/SubredditScheduledPosts.json"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts");
			const c = (e, t) => {
					let {
						subredditId: n,
						after: o,
						first: i
					} = t;
					return Object(r.a)(e, Object.assign({}, s, {
						variables: {
							subredditId: n,
							after: o,
							first: i
						}
					}))
				},
				l = (e, t, n) => Object.assign({
					isSpoiler: e.isSpoiler,
					isNsfw: e.isNSFW,
					title: e.title,
					isOriginalContent: e.isOC,
					flair: e.flair ? {
						id: e.flair.templateId,
						text: Object(i.g)(e.flair)
					} : {},
					subredditId: n,
					isSendReplies: e.sendReplies,
					scheduling: {
						publishAt: t.submitDate,
						clientTimezone: t.timezoneName,
						frequency: t.frequencyOption,
						interval: t.recurrenceInfo ? t.recurrenceInfo.interval : void 0,
						byMonthDays: t.recurrenceInfo ? t.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: t.recurrenceInfo ? t.recurrenceInfo.byWeekDays : void 0
					}
				}, p(e)),
				d = e => {
					const t = l(e.submission, e.schedule, e.subredditId);
					return Object.assign({
						id: e.scheduledPostId
					}, t, {
						flair: Object.keys(t.flair || {}).length ? Object.assign({}, t.flair) : {
							id: "",
							text: ""
						}
					})
				},
				u = e => /^https?:\/\//i.test(e) ? e : "http://".concat(e),
				p = e => {
					switch (e.kind) {
						case a.p.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case a.p.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case a.p.LINK:
							return {
								content: {}, link: {
									url: u(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				m = (e, t) => Object(r.a)(e, Object.assign({}, o, {
					variables: {
						input: t
					}
				}))
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/graphql/operations/UpdateScheduledPost.json"),
				s = n("./src/lib/makeGqlRequest/index.ts");
			const r = (e, t) => Object(s.a)(e, Object.assign({}, o, {
				variables: {
					input: t
				}
			}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var n = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
					}
					return n
				};

			function l(e, t, n) {
				const o = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(o)(e => {
					const {
						featureEnabled: o,
						dispatch: r
					} = e, i = c(e, ["featureEnabled", "dispatch"]);
					return o ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-dnd/lib/index.js"),
				s = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				r = n.n(s);
			t.a = Object(o.DragDropContext)(r.a)
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			const o = () => new BroadcastChannel("external_account"),
				s = e => {
					const t = o();
					t.postMessage({
						type: "connected",
						provider: e
					}), t.close()
				}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = e => Object.assign({}, e, {
					subredditInfoById: {
						id: e.subredditInfoById.id,
						scheduledPosts: {
							standalonePosts: {
								pageInfo: Object.assign({}, e.subredditInfoById.scheduledPosts.standalonePosts.pageInfo),
								models: s(e.subredditInfoById.scheduledPosts.standalonePosts.edges)
							},
							standalonePostsIds: e.subredditInfoById.scheduledPosts.standalonePosts.edges.map(e => e.node.id)
						}
					}
				}),
				s = e => e.map(e => r(e.node)),
				r = e => ({
					id: e.id,
					title: e.title,
					body: e.body,
					postKind: e.postKind,
					isSpoiler: e.isSpoiler,
					isNsfw: e.isNsfw,
					isOriginalContent: e.isOriginalContent,
					isSendReplies: e.isSendReplies,
					subreddit: Object.assign({}, e.subreddit),
					owner: Object.assign({}, e.owner),
					contentType: e.contentType,
					clientTimezone: e.clientTimezone,
					publishAt: e.publishAt,
					state: e.state,
					flair: e.flair ? Object.assign({}, e.flair) : void 0,
					isSticky: "NONE" !== e.sticky && !!e.sticky,
					isModDistinguished: "MODERATOR" === e.distinguishedAs,
					url: e.url
				})
		},
		"./src/reddit/helpers/richTextEditor/index.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e[e.Post = 0] = "Post", e[e.Comment = 1] = "Comment"
				}(o || (o = {}))
		},
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = n("./src/app/strings/index.ts"),
				s = n("./src/lib/timezone/index.ts");
			const r = (e, t) => {
					const n = e.toLocaleDateString(t, {
							month: "numeric",
							day: "numeric"
						}),
						o = e.toLocaleTimeString(t, {
							hour: "numeric",
							minute: "numeric"
						});
					return "".concat(n, " @ ").concat(o.replace(" ", "").toLowerCase())
				},
				i = (e, t, n) => {
					if (e && t) {
						const i = Object(s.f)(c(e, t)),
							a = r(i, n);
						return Object(o.a)(n, "postCreation.schedulePicker.submitAtTime", {
							time: a
						})
					}
					return Object(o.a)(n, "postCreation.schedulePicker.submitAtTimeScheduleTime")
				},
				a = e => e.slice(0, 5),
				c = (e, t) => "".concat(e, "T").concat(a(t), ":00"),
				l = e => {
					const [t, n] = e.split("T");
					return [t, a(n)]
				},
				d = (e, t) => {
					const [n, o] = l(e);
					if (n && o) {
						const e = Object(s.f)(c(n, o));
						return r(e, t)
					}
					return ""
				},
				u = e => {
					const t = Object(s.d)(e);
					let n, o = e;
					if (t) {
						n = t.offset;
						const r = Object(s.e)(t.offset),
							i = e.replace("/", " - ").replace(/_/g, " ");
						o = "(GMT".concat(r, ") ").concat(i)
					}
					return {
						name: e,
						displayText: o,
						offset: n
					}
				},
				p = e => "string" == typeof e
		},
		"./src/reddit/helpers/styles/mixins/fonts.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			}));
			const o = "Arial, sans-serif",
				s = "Noto Sans, ".concat(o),
				r = "Noto Mono, ".concat("Menlo, Monaco, Consolas, monospace");
			"\n  font-family: ".concat(s, ";\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 21px;\n")
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var o = n("./src/reddit/constants/elementIds.ts");
			let s;
			const r = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(o.c);
					document.body.style.overflow = e, document.body.style.marginRight = null, t && (t.style.marginRight = null)
				},
				i = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, s || (s = a(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = "".concat(s, "px");
					const t = document.getElementById(o.c);
					t && (t.style.marginRight = "".concat(s, "px"))
				},
				a = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				}
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			}));
			var o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/helpers/flair.ts");
			const i = (e, t) => n => Object.assign({
					source: "post",
					action: "click",
					noun: "post_flair"
				}, s.defaults(n), {
					actionInfo: s.actionInfo(n),
					correlationId: Object(o.c)(o.a.SearchResults),
					post: s.post(n, e),
					search: s.postFlairClickToSearch(n, t),
					subreddit: s.subreddit(n)
				}),
				a = e => t => Object.assign({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search"
				}, s.defaults(t), {
					actionInfo: s.actionInfo(t),
					correlationId: Object(o.c)(o.a.SearchResults),
					search: s.postFlairClickToSearch(t, e),
					subreddit: s.subreddit(t)
				}),
				c = e => t => {
					const n = Object(r.g)(e);
					return Object.assign({}, s.defaults(t), {
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: s.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					})
				},
				l = () => e => Object.assign({}, s.defaults(e), {
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: s.subreddit(e)
				}),
				d = e => t => {
					const n = Object(r.g)(e);
					return Object.assign({}, s.defaults(t), {
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: s.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					})
				},
				u = e => t => {
					const n = Object(r.g)(e);
					return Object.assign({}, s.defaults(t), {
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: s.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					})
				}
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => Object.assign({}, o.defaults(t), {
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: o.subreddit(t)
				}),
				r = e => t => Object.assign({}, o.defaults(t), {
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: o.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return i
			})), n.d(t, "n", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "k", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "m", (function() {
				return E
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => Object.assign({}, o.defaults(e), {
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				r = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone
				}),
				i = () => e => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post"
				}, s(e)),
				a = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer"
				}, s(e)),
				c = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date"
				}, s(e)),
				l = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time"
				}, s(e)),
				d = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone"
				}, s(e)),
				u = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply"
				}, s(e)),
				p = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel"
				}, s(e)),
				m = e => t => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit"
				}, s(t), {
					scheduledPost: r(e)
				}),
				h = e => t => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit"
				}, s(t), {
					scheduledPost: r(e)
				}),
				b = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts"
				}, s(e)),
				g = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, s(e)),
				f = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "edit_post"
				}, s(e)),
				x = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "submit_post_now"
				}, s(e)),
				C = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "overflow_menu"
				}, s(e)),
				E = () => (e, t) => {
					const n = s(e);
					return Object.assign({
						source: "post",
						action: "view",
						noun: "error"
					}, n, {
						actionInfo: Object.assign({}, n.actionInfo, {
							reason: "failed_post"
						}),
						scheduledPost: r(t)
					})
				}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived"), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less": function(e, t, n) {
			e.exports = {
				TextMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he",
				textMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoMediaVideo"), " ").concat(e.className)
			}), "TextMediaIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Gif/index.m.less": function(e, t, n) {
			e.exports = {
				GifIcon: "_2FVMHfvH9Kj7f59LnZjdUX",
				gifIcon: "_2FVMHfvH9Kj7f59LnZjdUX"
			}
		},
		"./src/reddit/icons/fonts/Gif/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Gif/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(r.b)("gif"), " ").concat(e.className)
			}), "GifIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, n) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Info/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(r.b)("info"), " ").concat(e.className)
			}), "InfoIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Link/index.m.less": function(e, t, n) {
			e.exports = {
				LinkIcon: "_1UzGujIvFbQUgWI4gO6QeD",
				linkIcon: "_1UzGujIvFbQUgWI4gO6QeD"
			}
		},
		"./src/reddit/icons/fonts/Link/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Link/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(r.b)("link"), " ").concat(e.className)
			}), "LinkIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: "".concat(Object(r.b)("outboundLink"), " ").concat(e.className)
			})
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, n) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Photos/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Photos/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(r.b)("photos"), " ").concat(e.className)
			}), "PhotoIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("plus"), e.className)
			})
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				title: e.title,
				className: "".concat(Object(r.b)("premium"), " ").concat(e.className)
			}), "PremiumIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, n) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/fonts/Text/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Text/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(r.b)("text"), " ").concat(e.className)
			}), "TextIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Video/index.m.less": function(e, t, n) {
			e.exports = {
				VideoIcon: "_1q4uVersxe3LOuom7R34bx",
				videoIcon: "_1q4uVersxe3LOuom7R34bx"
			}
		},
		"./src/reddit/icons/fonts/helpers.m.less": function(e, t, n) {
			e.exports = {
				TooltipDesc: "_37iEJpUpWXN00_fpZKHglg",
				tooltipDesc: "_37iEJpUpWXN00_fpZKHglg"
			}
		},
		"./src/reddit/icons/fonts/helpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.m.less"),
				i = n.n(r),
				a = n("./src/lib/lessComponent.tsx");
			const c = e => "icon icon-".concat(e),
				l = a.a.wrapped(e => s.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", i.a)
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			t.a = e => {
				var {
					className: t
				} = e, n = l(e, ["className"]);
				return s.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(r.a)(a.a.checkbox, t)
				}, n), s.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);
			const c = e => s.a.createElement("svg", {
				className: Object(r.a)(e.className, a.a.dropdown, {
					[a.a.mRedditStyle]: !e.isSubreddit
				}),
				style: e.style,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1ZVHRoTDdo57082D2GcC80"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_33vXt91MK_ualpifvvw_3v"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_34rYEsgbWk8eOQx_bs7fTV"
			}
		},
		"./src/reddit/icons/svgs/FormattingBlockQuotes/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_32TQMV98QwoweVXtMHpwr2"
			}
		},
		"./src/reddit/icons/svgs/FormattingBold/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1329vPT9OSGZyEvo6Fqss"
			}
		},
		"./src/reddit/icons/svgs/FormattingBold/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingBold/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M12.44,9.72v0a3.07,3.07,0,0,0,2.67-3.22c0-2.84-2.42-3.46-5-3.46H4.51V17H10.4c2.61,0,5.09-1,5.09-3.86C15.49,10.91,14.14,10,12.44,9.72ZM7.54,5.38H9.85c1.65,0,2.31.61,2.31,1.7s-.74,1.68-2.35,1.68H7.54ZM10,14.65H7.54V10.95H9.89c1.7,0,2.59.61,2.59,1.83S11.72,14.65,10,14.65Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingCodeBlock/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "F0bObcodUF6At5SPF9bIr"
			}
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_8Y1-XP7A1OOfoU_mUqKcg"
			}
		},
		"./src/reddit/icons/svgs/FormattingHeading/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2C-VR7luDjfFqzNiJQEpk0"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2-0pxD6-cM6bWeb73TNNhJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), s.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1PNKgIKbpvIWTVU3LO0PJQ"
			}
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_32WqBD1jOzjyQPJdFZ8Rrt"
			}
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingItalics/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("polygon", {
				points: "7.24 17 10.3 17 12.1 6.85 9.05 6.85 7.24 17"
			}), s.a.createElement("polygon", {
				points: "9.7 3 9.28 5.46 12.34 5.46 12.76 3 9.7 3"
			}))
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1cI-FoGkiT7RNcT2BsWaRU"
			}
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingMonospace/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M18.8,9.4l-3-4a1,1,0,1,0-1.6,1.2L16.75,10,14.2,13.4a1,1,0,1,0,1.6,1.2l3-4A1,1,0,0,0,18.8,9.4Z"
			}), s.a.createElement("path", {
				d: "M5.6,5.2a1,1,0,0,0-1.4.2l-3,4a1,1,0,0,0,0,1.2l3,4a1,1,0,0,0,1.6-1.2L3.25,10,5.8,6.6A1,1,0,0,0,5.6,5.2Z"
			}), s.a.createElement("path", {
				d: "M12.24,1A1,1,0,0,0,11,1.76l-4,16A1,1,0,1,0,9,18.24l4-16A1,1,0,0,0,12.24,1Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1fQOXfyxB1SmgMOi7sihQV"
			}
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"
			}), s.a.createElement("path", {
				d: "M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"
			}), s.a.createElement("path", {
				d: "M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"
			}), s.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1KIFUYxvtUxuRVhS-FGTns"
			}
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingSpoiler/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M10,1.5A8.5,8.5,0,1,0,18.5,10,8.51,8.51,0,0,0,10,1.5Zm.71,13-.15.12-.18.1-.18.05a.73.73,0,0,1-.2,0,1,1,0,0,1-.71-.29,1,1,0,0,1-.21-.32A1,1,0,0,1,9,13.83a1,1,0,0,1,.08-.38,1,1,0,0,1,.21-.32,1,1,0,0,1,.91-.28l.18.06.18.09.15.13a1,1,0,0,1,.29.7A1,1,0,0,1,10.71,14.54Zm-.22-3.6a.5.5,0,0,1-1,0l-1-4.67A.5.5,0,0,1,9,5.67h2a.5.5,0,0,1,.49.6Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3C1w798INaJPgFxfklr4an"
			}
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M11.86,12a1.36,1.36,0,0,1,.7,1.19c0,1.07-1,1.59-2.42,1.59a4.12,4.12,0,0,1-3.75-2.36L4.08,13.79A6.21,6.21,0,0,0,10,17.2c3.86,0,5.55-2,5.55-4.22a4,4,0,0,0-.12-1Z"
			}), s.a.createElement("path", {
				d: "M17,9H11.61l-1.09-.31c-1.82-.51-2.85-.9-2.85-2,0-.82.71-1.39,2-1.39a4.13,4.13,0,0,1,3.41,2L15.2,5.65A6.23,6.23,0,0,0,9.69,2.8c-3,0-5,1.56-5,4.14A3.31,3.31,0,0,0,5.31,9H3a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1DvEfZosXHE4A0gHsGOjEU"
			}
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingSuperscript/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M6.94,3,2,17H4.83L5.9,13.89h4.75l1,3.11h3.11L9.86,3Zm-.28,8.67L8.29,6.92h0l1.6,4.75Z"
			}), s.a.createElement("path", {
				d: "M16.06,3H14.92L13,8.49h1.11l.42-1.22h1.86l.41,1.22H18ZM14.81,6.4l.64-1.86h0l.63,1.86Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingTable/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_12fGjUaA4qUfdUrX7rnmTK"
			}
		},
		"./src/reddit/icons/svgs/FormattingTable/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingTable/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M17,2H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V3A1,1,0,0,0,17,2ZM4,6H9V9.8H4Zm7,0h5V9.8H11ZM4,11.8H9V16H4ZM11,16V11.8h5V16Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "LfxAZX1Sm9aiJZiizUSZO"
			}
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}), s.a.createElement("path", {
				d: "M4.88,9.43a1.29,1.29,0,0,0-.13-.26,2.17,2.17,0,0,0-.19-.23,1.55,1.55,0,0,0-2.12,0,2.16,2.16,0,0,0-.19.23,2.2,2.2,0,0,0-.14.26A2.3,2.3,0,0,0,2,9.71,1.32,1.32,0,0,0,2,10a1.5,1.5,0,0,0,1.5,1.5,1.55,1.55,0,0,0,.57-.11A1.52,1.52,0,0,0,5,10a1.32,1.32,0,0,0,0-.29A1.27,1.27,0,0,0,4.88,9.43Z"
			}), s.a.createElement("path", {
				d: "M4.33,14.75l-.26-.14-.28-.08a1.42,1.42,0,0,0-.58,0l-.28.08-.26.14a2.16,2.16,0,0,0-.23.19A1.52,1.52,0,0,0,2,16a1.47,1.47,0,0,0,.44,1.06,1.52,1.52,0,0,0,.49.33,1.53,1.53,0,0,0,1.14,0,1.61,1.61,0,0,0,.49-.33A1.52,1.52,0,0,0,5,16a1.5,1.5,0,0,0-.44-1.06A2.06,2.06,0,0,0,4.33,14.75Z"
			}), s.a.createElement("path", {
				d: "M2.44,2.94A1.52,1.52,0,0,0,2,4a1.47,1.47,0,0,0,.44,1.06,1.59,1.59,0,0,0,.48.33,1.65,1.65,0,0,0,.58.11,1.55,1.55,0,0,0,.57-.11,1.5,1.5,0,0,0,.49-.33,1.5,1.5,0,0,0,0-2.12A1.55,1.55,0,0,0,2.44,2.94Z"
			}))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), s.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), s.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), s.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), s.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/icons/svgs/Grapple/index.m.less": function(e, t, n) {
			e.exports = {
				grapple: "_23XYJUJn_XitrV-LLkNyCQ",
				mIsDragging: "_1jCsYjqdUw4PYY-s3mGB47"
			}
		},
		"./src/reddit/icons/svgs/Grapple/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Grapple/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(e.className, a.a.grapple, {
					[a.a.mIsDragging]: e.isDragging
				}),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("title", {
				id: "".concat(e.title, "-title")
			}, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8,2 C8.553,2 9,2.447 9,3 L9,5 C9,5.553 8.553,6 8,6 L6,6 C5.447,6 5,5.553 5,5 L5,3 C5,2.447 5.447,2 6,2 L8,2 Z M14,2 C14.553,2 15,2.447 15,3 L15,5 C15,5.553 14.553,6 14,6 L12,6 C11.447,6 11,5.553 11,5 L11,3 C11,2.447 11.447,2 12,2 L14,2 Z M8,8 C8.553,8 9,8.447 9,9 L9,11 C9,11.553 8.553,12 8,12 L6,12 C5.447,12 5,11.553 5,11 L5,9 C5,8.447 5.447,8 6,8 L8,8 Z M14,8 C14.553,8 15,8.447 15,9 L15,11 C15,11.553 14.553,12 14,12 L12,12 C11.447,12 11,11.553 11,11 L11,9 C11,8.447 11.447,8 12,8 L14,8 Z M8,14 C8.553,14 9,14.447 9,15 L9,17 C9,17.553 8.553,18 8,18 L6,18 C5.447,18 5,17.553 5,17 L5,15 C5,14.447 5.447,14 6,14 L8,14 Z M14,14 C14.553,14 15,14.447 15,15 L15,17 C15,17.553 14.553,18 14,18 L12,18 C11.447,18 11,17.553 11,17 L11,15 C11,14.447 11.447,14 12,14 L14,14 Z"
			})))
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/Media/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"
			}))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? r.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("title", {
				id: "".concat(e.title, "-title")
			}, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Poll/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 15",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				"clip-rule": "evenodd",
				d: "M0 1.5C0 0.671573 0.671573 0 1.5 0H11.5C12.3284 0 13 0.671573 13 1.5C13 2.32843 12.3284 3 11.5 3H1.5C0.671573 3 0 2.32843 0 1.5ZM0 7.5C0 6.67157 0.671573 6 1.5 6H14.5C15.3284 6 16 6.67157 16 7.5C16 8.32843 15.3284 9 14.5 9H1.5C0.671573 9 0 8.32843 0 7.5ZM1.5 12C0.671573 12 0 12.6716 0 13.5C0 14.3284 0.671573 15 1.5 15H7.5C8.32843 15 9 14.3284 9 13.5C9 12.6716 8.32843 12 7.5 12H1.5Z",
				"fill-rule": "evenodd",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", c({}, e, {
				className: Object(r.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), s.a.createElement("g", null, s.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/TextPost/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3QNLLzw_kUPhkWkxg22tT9"
			}
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ThumbnailSelect/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("path", {
				d: "M0 0h20v20H0z"
			}), s.a.createElement("path", {
				fill: "#A5A4A4",
				d: "M6 3h8c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V5c0-1.1046.8954-2 2-2zm11 1c1.1046 0 2 .8954 2 2v8c0 1.1046-.8954 2-2 2V4zM3 4v12h-.6667C1.597 16 1 15.1734 1 14.1538V5.8462C1 4.8266 1.597 4 2.3333 4H3z"
			})))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", {
				transform: "translate(3, 4)"
			}, s.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				p = n.n(u);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var h = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const b = Object(l.t)(),
				g = Object(i.c)({
					isEditing: d.j,
					layout: (e, t) => t.forcedLayout || Object(l.M)(e, t)
				}),
				f = Object(r.b)(g),
				x = e => {
					var {
						disableFullscreen: t,
						dispatch: n,
						fitPageToContent: o,
						forcedLayout: r,
						isCollectionLayout: i,
						isEditing: a,
						layout: c,
						pageLayer: l
					} = e, d = h(e, ["disableFullscreen", "dispatch", "fitPageToContent", "forcedLayout", "isCollectionLayout", "isEditing", "layout", "pageLayer"]);
					return s.a.createElement("div", d)
				};
			t.a = b(f(e => {
				var {
					className: t
				} = e, n = h(e, ["className"]);
				return s.a.createElement(x, m({
					className: Object(a.a)(t, p.a.styledContent, {
						[p.a.mLargePostLayout]: n.layout === c.g.Large,
						[p.a.mDisableFullScreen]: n.disableFullscreen && !n.isCollectionLayout,
						[p.a.mClassicWidth]: n.isCollectionLayout,
						[p.a.mIsEditing]: !!n.isEditing,
						[p.a.mCanFlexFullWidth]: !n.fitPageToContent
					})
				}, n))
			}))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				Body: "_1vyLCp-v-tE5QvZovwrASa",
				body: "_1vyLCp-v-tE5QvZovwrASa",
				Sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh",
				backgroundContainer: "_33erTQ46yfKeF2B6B-ooMJ"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				p = n("./src/reddit/models/Theme/index.ts"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class b extends s.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return s.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var g = Object(h.a)(b),
				f = e => s.a.createElement(g, e),
				x = n("./src/reddit/layout/page/Listing/index.m.less"),
				C = n.n(x);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const v = Object(a.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: o,
						theme: r
					} = e, a = y(e, ["backgroundColor", "className", "redditStyle", "theme"]), c = Object(m.a)(e), l = {
						"--pseudo-before-background": t || Object(p.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return s.a.createElement("div", E({
						className: Object(i.a)(C.a.backgroundContainer, n),
						style: l
					}, a))
				}),
				O = c.a.div("Body", C.a),
				j = c.a.div("Sidebar", C.a);
			t.a = e => {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: "".concat(l.r, "px"),
						marginTop: t
					} : {
						marginLeft: "".concat(l.r, "px"),
						marginTop: t
					},
					o = e.sidebar && s.a.createElement(j, {
						className: e.isCollectionLayout ? C.a["m-collectionLayout"] : void 0,
						style: n
					}, e.sidebar),
					a = s.a.createElement(r.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? s.a.createElement(s.a.Fragment, null, e.sidebars[0], a, e.sidebars[1]) : e.isPageSwapped ? s.a.createElement(s.a.Fragment, null, o, a) : s.a.createElement(s.a.Fragment, null, a, o);
				const p = e.disableFullscreen ? "".concat(e.maxWidth || u.a + 2 * l.n, "px") : "100%",
					m = e.layerEmbed ? e.layerEmbed : null;
				return s.a.createElement(f, {
					subredditId: e.subredditId
				}, s.a.createElement("div", {
					className: Object(i.a)(C.a.outerContainer, d.j, e.className),
					ref: e.containerRef
				}, s.a.createElement(v, {
					className: d.i,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), s.a.createElement("div", {
					className: C.a.innerContainer
				}, s.a.createElement("div", {
					className: C.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, (e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null)(e), s.a.createElement("div", {
					style: {
						maxWidth: p
					}
				}, e.trendingUnit), m, s.a.createElement(O, {
					style: {
						maxWidth: p
					}
				}, c))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				r = n.n(s);
			t.a = o.a.div("inlineRow", r.a)
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				r = n.n(s);
			t.a = o.a.button("inlineButton", r.a)
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = n.n(s);
			t.a = o.a.div("rightAligned", r.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(a);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(a);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(i.a)(c.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var o, s, r;
			n.d(t, "c", (function() {
					return o
				})), n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "d", (function() {
					return i
				})), n.d(t, "e", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(r || (r = {}));
			const i = () => ({
					cardCVCComplete: !1,
					cardExpiryComplete: !1,
					cardNumberComplete: !1,
					name: "",
					postalCodeComplete: !1,
					saveCard: !1,
					type: s.NewStripe
				}),
				a = e => e.cardCVCComplete && e.cardExpiryComplete && e.cardNumberComplete && !!e.name && e.postalCodeComplete
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/i18n/components.tsx"),
				a = n("./src/reddit/i18n/utils.ts"),
				c = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(c);
			const d = e => {
					let {
						message: t
					} = e;
					return s.a.createElement("div", {
						className: l.a.container
					}, s.a.createElement("h3", {
						className: l.a.title
					}, t || Object(a.c)("Sorry, there doesn't seem to be anything here.")), s.a.createElement(r.h, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, s.a.createElement(i.c, null, "Go Home")))
				},
				u = e => {
					let {
						message: t
					} = e;
					return s.a.createElement("div", {
						className: l.a.container
					}, s.a.createElement("h3", {
						className: l.a.title
					}, t || Object(a.c)("Sorry, You do not have permission to view this page.")), s.a.createElement(r.h, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, s.a.createElement(i.c, null, "Go Home")))
				}
		},
		"./src/reddit/pages/PostCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/components/JumpToContent/index.tsx"),
				l = n("./node_modules/lodash/once.js"),
				d = n.n(l),
				u = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./src/lib/constants/index.ts"),
				m = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/reddit/helpers/correlationIdTracker.ts"),
				b = n("./src/reddit/i18n/utils.ts"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				f = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				x = n("./src/reddit/pages/ErrorPages/index.tsx"),
				C = n("./src/reddit/components/CrosspostBox/index.tsx"),
				E = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				y = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				O = n("./src/reddit/helpers/trackers/postComposer.ts"),
				j = n("./src/reddit/selectors/experiments/subredditDifficulty.ts"),
				S = n("./src/reddit/selectors/platform.ts"),
				T = n("./src/reddit/selectors/postCreations.ts"),
				k = n("./src/reddit/selectors/postDraft.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/selectors/subredditDifficulty.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/actions/externalAccount.ts"),
				M = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				R = n("./src/reddit/actions/postCreation/submit.ts"),
				N = n("./src/reddit/actions/postCreation/subredditChange.ts"),
				L = n("./src/reddit/actions/postDraft.ts"),
				D = n("./src/reddit/actions/subredditDifficulty/index.ts"),
				F = n("./src/reddit/actions/upload.ts"),
				B = n("./src/reddit/helpers/externalAccount/index.tsx"),
				A = n("./node_modules/history/esm/history.js"),
				K = n("./node_modules/react-router/esm/react-router.js"),
				U = n("./src/lib/matchRoute/index.ts"),
				H = n("./node_modules/fbt/lib/FbtPublic.js"),
				W = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx"),
				V = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const z = "DISCARD_POST_ON_NAVIGATION_MODAL_ID",
				q = Object(i.c)({
					isEditingScheduledPost: e => !!Object(V.j)(e),
					isScheduledPost: T.G
				});
			var G = Object(r.b)(q)(e => {
					const {
						isEditingScheduledPost: t,
						isScheduledPost: n,
						onAbort: o,
						onDiscardConfirmed: r,
						onSaveDraft: i,
						submissionType: a
					} = e;
					return p.C.has(a) && !n ? s.a.createElement(W.a, {
						bodyText: H.fbt._("Do you want to save a draft of your post?", null, {
							hk: "3EV54t"
						}),
						onClose: o,
						onPrimaryAction: i,
						onSecondaryAction: r,
						primaryButtonText: H.fbt._("Save draft", null, {
							hk: "292J1G"
						}),
						secondaryButtonText: H.fbt._("Discard post", null, {
							hk: "1RpuOL"
						}),
						titleText: H.fbt._("Save draft", null, {
							hk: "44JnYT"
						})
					}) : s.a.createElement(W.a, {
						bodyText: t ? H.fbt._("Returning to the previous page will discard your changes", null, {
							hk: "2LlXOp"
						}) : H.fbt._("Returning to the previous page will discard your post", null, {
							hk: "3fT0mW"
						}),
						onClose: o,
						onPrimaryAction: o,
						onSecondaryAction: r,
						primaryButtonText: H.fbt._("Edit post", null, {
							hk: "1e3xR0"
						}),
						secondaryButtonText: t ? H.fbt._("Discard Changes", null, {
							hk: "7JOA"
						}) : H.fbt._("Discard Post", null, {
							hk: "1CBjtn"
						}),
						titleText: t ? H.fbt._("Discard Changes", null, {
							hk: "2vyCBa"
						}) : H.fbt._("Discard Post", null, {
							hk: "2BlkSe"
						})
					})
				}),
				J = n("./src/reddit/routes/postCreation/index.ts");
			const Z = e => (e.returnValue = "", ""),
				Q = Object(i.c)({
					destSubreddit: T.g,
					hasError: T.r,
					havePostContent: T.w,
					isChanged: T.z,
					modalId: T.M,
					submitPostPending: T.cb
				}),
				X = Object(r.b)(Q, e => ({
					onToggleDiscardModal: () => e(a.y(z))
				}), (e, t, n) => Object.assign({}, e, t, n));
			class Y extends s.a.Component {
				constructor() {
					super(...arguments), this.unblockNavigation = null, this.ensureBlocked = e => {
						e.isChanged && (e.havePostContent || e.destSubreddit.name) ? this.block(e) : this.unblock()
					}, this.block = e => {
						this.unblockNavigation || (window.addEventListener("beforeunload", Z), this.unblockNavigation = e.history.block((e, t) => {
							if (!Object(U.a)(Object(A.e)(e), [J.a])) return this.props.modalId !== z && this.props.onToggleDiscardModal(), "Are you sure you want to leave?"
						}))
					}, this.unblock = () => {
						this.unblockNavigation && (this.unblockNavigation(), this.unblockNavigation = null), window.removeEventListener("beforeunload", Z)
					}
				}
				componentDidMount() {
					this.ensureBlocked(this.props)
				}
				componentWillReceiveProps(e) {
					!this.props.submitPostPending || e.submitPostPending || e.hasError ? this.ensureBlocked(e) : this.unblock()
				}
				componentWillUnmount() {
					this.unblock()
				}
				render() {
					return null
				}
			}
			var $ = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				})(X(Object(K.i)(Y))),
				ee = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				te = n("./src/telemetry/index.ts"),
				ne = n("./src/app/strings/index.ts"),
				oe = n("./src/lib/classNames/index.ts"),
				se = n("./src/lib/prettyPrintNumber/index.ts"),
				re = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx"),
				ie = n("./src/reddit/components/Governance/Token/index.tsx"),
				ae = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				ce = n("./src/higherOrderComponents/makeAsync.tsx"),
				le = n("./src/lib/loadWithRetries/index.ts"),
				de = Object(ce.a)({
					getComponent: () => Object(le.a)(() => n.e("PostSchedulePickerModal").then(n.bind(null, "./src/reddit/components/ScheduledPost/PostSchedulePickerModal/index.tsx"))).then(e => e.default),
					LoadingComponent: () => null,
					ErrorComponent: () => null
				}),
				ue = n("./src/reddit/controls/ErrorText/index.tsx"),
				pe = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				me = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				he = n("./src/reddit/icons/svgs/Clock/index.tsx"),
				be = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				ge = n("./src/reddit/layout/row/Inline/index.tsx"),
				fe = n("./src/reddit/models/Media/index.ts"),
				xe = n("./src/reddit/selectors/activeModalId.ts"),
				Ce = n("./src/reddit/selectors/gov.ts"),
				Ee = n("./src/reddit/selectors/moderatorPermissions.ts"),
				ye = n("./src/reddit/models/Duplicates/index.ts"),
				ve = n("./src/reddit/selectors/posts.ts");
			var Oe = n("./src/reddit/controls/Button/index.tsx"),
				je = n("./src/reddit/components/PostCreationForm/Button/index.m.less"),
				Se = n.n(je),
				Te = n("./src/lib/lessComponent.tsx");
			const ke = Te.a.wrapped(Oe.f, "PrimaryButton", Se.a),
				we = Te.a.wrapped(Oe.i, "SecondaryButton", Se.a);
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var _e = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ie = n("./src/lib/timezone/index.ts"),
				Pe = n("./src/lib/linkMatchers/index.ts"),
				Me = n("./src/lib/makeActionCreator/index.ts"),
				Re = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				Ne = n("./src/lib/makeApiRequest/index.ts"),
				Le = n("./src/lib/omitHeaders/index.ts"),
				De = n("./src/reddit/constants/headers.ts"),
				Fe = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			var Be = n("./src/reddit/actions/postCreation/constants.ts");
			const Ae = Object(Me.a)(Be.I),
				Ke = Object(Me.a)(Be.J),
				Ue = (e, t) => async (n, o, s) => {
					let {
						apiContext: r
					} = s;
					const i = o(),
						a = Object(Re.q)(i, {
							pageLayer: t
						});
					if (!a) return;
					const c = Object(T.p)(i, {
						field: e
					});
					if (!c) return;
					const l = Object(T.e)(i),
						d = await ((e, t, n, o, s) => Object(Ne.b)(Object(Le.a)(e, [De.a]), {
							endpoint: "".concat(e.apiUrl, "/api/validate_submission_field"),
							method: p.bb.POST,
							data: {
								sr: t,
								field: n,
								kind: o,
								title: s.title || "",
								url: s.url || null,
								text: s.selftext,
								richtext_json: s.rtjson && JSON.stringify({
									document: s.rtjson
								}),
								flair_id: s.flairId || null,
								show_error_list: !0
							}
						}).then(Fe.b))(r(), a.name, e, l, c),
						u = d.error || function(e, t) {
							if (e === p.kb.LINK && !Object(Pe.g)(Pe.e, t.url || "")) return {
								fields: [{
									field: p.kb.LINK,
									msg: H.fbt._("Link doesn't look right", null, {
										hk: "11qrsa"
									})
								}],
								type: p.D.SUBMIT_VALIDATION_ERROR
							}
						}(e, c);
					u && u.fields && u.fields.length ? n(Ae(u)) : n(Ke(e)), d.error && n(Object(R.c)(d.error))
				};
			var He = n("./src/reddit/components/Flair/index.tsx"),
				We = n("./src/reddit/controls/TextButton/index.tsx"),
				Ve = n("./src/reddit/controls/Typography/index.tsx"),
				ze = n("./src/reddit/i18n/components.tsx"),
				qe = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/OCDisclaimer/index.m.less"),
				Ge = n.n(qe);
			const Je = Te.a.wrapped(We.a, "DontShowButton", Ge.a);
			var Ze, Qe = Te.a.wrapped(e => {
					const {
						className: t,
						onDoNotShowClick: n
					} = e;
					return s.a.createElement("div", {
						className: t
					}, s.a.createElement(Ve.c, null, s.a.createElement(ze.c, null, "Use the OC tag if you want to take credit for your post as Original Content.")), s.a.createElement(Ve.c, null, s.a.createElement(Je, {
						onClick: n
					}, s.a.createElement(ze.c, null, "Cool, whatever, don't show me this again."))))
				}, "Component", Ge.a),
				Xe = n("./src/reddit/components/PostCreationForm/DivButton/index.tsx"),
				Ye = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				$e = n("./src/reddit/constants/colors.ts");
			! function(e) {
				e.CHAT = "chat", e.FLAIR = "flair", e.GOVERNANCE = "gov", e.SPOILER = "spoiler", e.NSFW = "nsfw", e.ORIGINAL_CONTENT = "originalContent", e.SCHEDULE = "schedule"
			}(Ze || (Ze = {}));
			var et = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/PostModifierButton/index.m.less"),
				tt = n.n(et);
			const nt = Te.a.div("TintOverlay", tt.a),
				ot = (e, t) => {
					switch (t) {
						case Ze.ORIGINAL_CONTENT:
							return {
								backgroundColor: $e.a.orangered, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Ze.CHAT:
							return {
								backgroundColor: $e.a.chat, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Ze.SPOILER:
							return {
								backgroundColor: $e.a.spoiler, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Ze.NSFW:
							return {
								backgroundColor: $e.a.nsfw, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Ze.FLAIR:
							return {
								backgroundColor: e.newCommunityTheme.flair, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Ze.SCHEDULE:
							return {
								backgroundColor: e.newCommunityTheme.active, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Ze.GOVERNANCE:
							return {
								backgroundColor: e.newCommunityTheme.line, textColor: e.newCommunityTheme.bodyText, iconColor: e.newCommunityTheme.bodyText
							};
						default:
							return {
								backgroundColor: "none", textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							}
					}
				},
				st = e => Object(_e.a)(t => {
					const {
						addModifierTooltip: n,
						children: o,
						className: r,
						disabled: i,
						disabledTooltip: a,
						id: c,
						onClick: l,
						removeModifierTooltip: d,
						toggled: u,
						theme: p
					} = t, m = i && a ? a : u ? d : n, h = {
						color: t.textColor || p && ot(p, e).textColor,
						fill: t.textColor || p && ot(p, e).iconColor,
						backgroundColor: t.backgroundColor || p && ot(p, e).backgroundColor
					};
					return s.a.createElement(Xe.a, {
						style: u ? h : {},
						"aria-label": m,
						className: Object(oe.a)(r, tt.a.PostModifierButton),
						disabled: i,
						id: c,
						onClick: l
					}, s.a.createElement(Ye.a, {
						text: m,
						className: tt.a.HoverTooltip,
						tooltipContentClass: t.shiftTooltipToRight ? tt.a.mShiftTooltipToTheRight : void 0
					}), s.a.createElement(nt, {
						className: Object(oe.a)(tt.a.TintOverlay, {
							[tt.a.isDisabled]: i
						})
					}, o))
				});
			var rt = n("./src/config.ts"),
				it = n("./src/reddit/constants/postCreation.ts"),
				at = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				ct = n("./src/reddit/icons/fonts/helpers.tsx");
			var lt = e => s.a.createElement("i", {
					className: Object(oe.a)(Object(ct.b)("create"), e.className)
				}),
				dt = n("./src/reddit/icons/fonts/Live/index.tsx"),
				ut = n("./src/higherOrderComponents/asTooltip.tsx"),
				pt = n("./src/reddit/components/PostCreationForm/EduTooltips/BaseEduTooltip/index.m.less"),
				mt = n.n(pt);
			const ht = Object(ne.e)("postCreation.modifiers.educationalTooltips.gotItButtonText"),
				bt = Te.a.div("Container", mt.a),
				gt = Te.a.div("OuterContainer", mt.a);
			class ft extends s.a.Component {
				constructor() {
					super(...arguments), this.tooltipRef = null, this.onGotItClick = e => {
						this.close(!0), e.stopPropagation()
					}, this.onKeyDown = e => {
						e.keyCode === m.a.Escape && this.close(!1)
					}, this.onMouseClick = e => {
						this.tooltipRef && !this.tooltipRef.contains(e.target) && this.close(!1)
					}, this.onWindowResize = () => {
						this.close(!1)
					}, this.setTooltipRef = e => {
						this.tooltipRef = e
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.onKeyDown), document.addEventListener("click", this.onMouseClick), window.addEventListener("resize", this.onWindowResize), this.tooltipRef && this.tooltipRef.scrollIntoView({
						behavior: "smooth",
						block: "end"
					})
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.onKeyDown), document.removeEventListener("click", this.onMouseClick), window.removeEventListener("resize", this.onWindowResize)
				}
				close(e) {
					this.props.onClose(e)
				}
				render() {
					const e = this.props;
					return s.a.createElement(gt, {
						className: e.className,
						innerRef: this.setTooltipRef,
						style: e.style
					}, s.a.createElement(bt, {
						className: mt.a.container
					}, s.a.createElement("img", {
						src: e.heroImagePath,
						className: mt.a.hero
					}), s.a.createElement("div", {
						className: mt.a.contentContainer
					}, s.a.createElement("div", {
						className: mt.a.title
					}, e.title), s.a.createElement("div", {
						className: mt.a.description
					}, e.description), s.a.createElement("div", {
						className: mt.a.iconsExplanations
					}, e.iconsExplanations.map((e, t) => {
						const n = e.iconComponent;
						return s.a.createElement("div", {
							className: mt.a.iconExplanation,
							key: t
						}, s.a.createElement(n, {
							className: mt.a.icon
						}), e.text)
					})), s.a.createElement(Oe.f, {
						className: mt.a.gotIt,
						onClick: this.onGotItClick
					}, ht(e.language)))))
				}
			}
			var xt = Object(ut.a)(ft),
				Ct = n("./node_modules/lodash/debounce.js"),
				Et = n.n(Ct),
				yt = n("./src/reddit/actions/modal.ts"),
				vt = n("./src/reddit/helpers/localStorage/index.ts"),
				Ot = n("./src/reddit/helpers/trackers/postCollection.ts");
			const jt = [{
					id: it.d,
					getShowTimesLeft: vt.u,
					setShowTimesLeft: vt.W,
					tooltipShown: Ot.n,
					tooltipDismissed: Ot.m
				}, {
					id: it.c,
					getShowTimesLeft: vt.t,
					setShowTimesLeft: vt.V,
					tooltipShown: Ot.f,
					tooltipDismissed: Ot.e
				}],
				St = {};
			let Tt;
			const kt = () => (void 0 === Tt && (Tt = jt.filter(e => e.getShowTimesLeft() > 0).map(e => e.id)), Tt),
				wt = e => {
					const t = kt().indexOf(e);
					t > -1 && kt().splice(t, 1)
				},
				_t = e => async (t, n) => {
					const o = jt.find(t => t.id === e);
					o && (It(o, !0), Object(te.a)(o.tooltipDismissed(n())))
				}, It = (e, t) => {
					e.setShowTimesLeft(t ? 0 : e.getShowTimesLeft() - 1)
				}, Pt = () => async (e, t) => {
					const {
						activeModalId: n
					} = t(), o = kt().find(e => !!St[e]);
					if (!o || o === n) return;
					const s = jt.find(e => e.id === o);
					s && (Object(te.a)(s.tooltipShown(t())), It(s)), e(yt.i(o))
				}, Mt = Et()(e => e(), 100);

			function Rt(e, t) {
				const n = Object(i.c)({
					isOpen: e => Object(xe.a)(e) === t,
					language: I.S
				});
				class o extends s.a.Component {
					componentDidMount() {
						St[t] = !0, Mt(this.props.onShowNextTooltip)
					}
					componentWillUnmount() {
						St[t] = !1, Mt(this.props.onShowNextTooltip)
					}
					render() {
						return this.props.isOpen ? s.a.createElement(e, {
							language: this.props.language,
							onCloseTooltip: this.props.onCloseTooltip
						}) : null
					}
				}
				return Object(r.b)(n, e => ({
					onCloseTooltip: n => {
						wt(t), n && e(_t(t)), e(yt.i(t)), e(Pt())
					},
					onShowNextTooltip: () => e(Pt())
				}))(o)
			}
			var Nt = n("./src/reddit/components/PostCreationForm/EduTooltips/EventButtonTooltip/index.m.less"),
				Lt = n.n(Nt);
			const Dt = Object(ne.e)("postCreation.modifiers.educationalTooltips.event.title"),
				Ft = Object(ne.e)("postCreation.modifiers.educationalTooltips.event.description"),
				Bt = Object(ne.e)("postCreation.modifiers.educationalTooltips.event.createIconExplanation"),
				At = Object(ne.e)("postCreation.modifiers.educationalTooltips.event.calendarIconExplanation"),
				Kt = Object(ne.e)("postCreation.modifiers.educationalTooltips.event.liveIconExplanation");
			var Ut = Rt(e => {
					const {
						onCloseTooltip: t
					} = e;
					return s.a.createElement(xt, {
						className: Lt.a.container,
						description: Ft(e.language),
						heroImagePath: "".concat(rt.a.assetPath, "/img/events-tooltip-hero@2x.png"),
						iconsExplanations: [{
							iconComponent: lt,
							text: Bt(e.language)
						}, {
							iconComponent: at.a,
							text: At(e.language)
						}, {
							iconComponent: dt.a,
							text: Kt(e.language)
						}],
						isOpen: !0,
						isOverlayOff: !0,
						language: e.language,
						onClose: t,
						title: Dt(e.language),
						tooltipId: it.a
					})
				}, it.d),
				Ht = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx"),
				Wt = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				Vt = n("./src/reddit/constants/disclaimers.ts"),
				zt = n("./src/reddit/helpers/trackers/postEvent.ts"),
				qt = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				Gt = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				Jt = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Zt = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				Qt = n("./src/reddit/icons/svgs/Tag/index.tsx"),
				Xt = n("./src/reddit/models/Subreddit/index.ts"),
				Yt = n("./src/reddit/selectors/experiments/chatPost.ts");
			const $t = e => e.creations.formState.fieldValidation;
			var en = n("./src/telemetry/models/PostComposer.ts"),
				tn = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/index.m.less"),
				nn = n.n(tn);
			const on = "PostFlair--Modal--CreationForm",
				sn = (e, t) => {
					let n = Object(Ie.f)(e.startDate).toLocaleDateString(t, {
						month: "numeric",
						day: "numeric",
						hour: "numeric",
						minute: "numeric"
					});
					return "en" === t && (n = n.replace(" ", "").replace(",", " ")), n
				},
				rn = Te.a.wrapped(Jt.b, "StyledCaretIcon", nn.a),
				an = Te.a.wrapped(at.a, "CalendarIcon", nn.a),
				cn = Te.a.wrapped(be.a, "PencilIcon", nn.a),
				ln = Te.a.wrapped(qt.a, "ChatIcon", nn.a),
				dn = Te.a.wrapped(Gt.a, "CheckmarkIcon", nn.a),
				un = Te.a.wrapped(Zt.a, "PlusIcon", nn.a),
				pn = Te.a.wrapped(He.b, "FlairComponent", nn.a),
				mn = Te.a.wrapped(Qt.a, "FlairIcon", nn.a),
				hn = Te.a.div("FlairTextWrapper", nn.a),
				bn = Te.a.wrapped(ge.a, "ModifierRow", nn.a),
				gn = st(Ze.ORIGINAL_CONTENT),
				fn = st(Ze.CHAT),
				xn = st(Ze.SPOILER),
				Cn = st(Ze.NSFW),
				En = st(Ze.FLAIR),
				yn = st(Ze.SCHEDULE),
				vn = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				}),
				On = Object(i.c)({
					activeModalId: xe.a,
					canAddPostFlair: T.c,
					canPostAsModerator: T.d,
					currentSubredditId: v.m,
					destSubreddit: T.g,
					destSubredditAboutInfo: T.f,
					eventSchedule: T.o,
					isChatPostAvailable: Yt.a,
					isChatPostSelected: T.A,
					isNsfw: T.D,
					isSpoiler: T.H,
					isOriginalContent: T.E,
					flair: T.q,
					postCreationFieldErrors: $t,
					postSchedule: T.S,
					submissionType: T.a
				}),
				jn = Object(r.b)(On, (e, t) => {
					let {
						onPostFieldValidation: n,
						pageLayer: o
					} = t;
					return {
						doNotShowOriginalContentDisclaimerClicked: () => e((e, t) => O.d(t())),
						onEventScheduleChange: t => {
							e(a.a(t))
						},
						postFlairAdded: t => {
							e(a.b(t)), n(e(Ue(p.kb.FLAIR, o)))
						},
						toggleSchedulePicker: (t, n) => {
							e(a.y(g.f)), t && e((e, t) => {
								(n ? zt.g : zt.f)(t())
							})
						},
						toggleChatPostTag: t => {
							e(a.t(!t)), e((e, n) => O.w(n(), !t, en.ToggleNoun.CHAT))
						},
						toggleFlairPicker: () => e(a.y(on)),
						toggleNsfwTag: t => {
							e(a.u(!t)), e((e, n) => O.w(n(), !t, en.ToggleNoun.NSFW))
						},
						toggleOriginalContentTag: t => {
							e(a.v(!t)), e((e, n) => O.w(n(), !t, en.ToggleNoun.ORIGINAL_CONTENT))
						},
						toggleSpoilerTag: t => {
							e(a.x(!t)), e((e, n) => O.w(n(), !t, en.ToggleNoun.SPOILER))
						},
						sendChatPostExposureEvent: (t, n) => {
							e((e, o) => {
								const s = o(),
									r = Object(Ee.g)(s, {
										subredditId: n
									});
								Object(Yt.g)(s, t, r)
							})
						}
					}
				});
			class Sn extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showOCDisclaimer: !1,
						fireHoldoutEvent: !1
					}, this.handlePostFlairSelected = e => {
						let {
							previewFlair: t
						} = e;
						this.props.flair !== t && this.props.postFlairAdded(t)
					}, this.handleOCDisclaimerDoNotShowClick = () => {
						const {
							doNotShowOriginalContentDisclaimerClicked: e
						} = this.props;
						e(), Object(vt.J)(Vt.b.ORIGINAL_CONTENT_DISCLAIMER, !0), this.setState({
							showOCDisclaimer: !1
						})
					}, this.handleOriginalContentClick = () => {
						this.props.toggleOriginalContentTag(this.props.isOriginalContent)
					}, this.handleChatPostClick = () => {
						this.props.toggleChatPostTag(this.props.isChatPostSelected)
					}, this.handleSpoilerClick = () => {
						this.props.toggleSpoilerTag(this.props.isSpoiler)
					}, this.handleNsfwClick = () => {
						this.props.toggleNsfwTag(this.props.isNsfw)
					}, this.handleToggleSchedulePicker = () => {
						const e = this.props.activeModalId !== g.f,
							t = !!this.props.eventSchedule;
						this.props.toggleSchedulePicker(e, t)
					}
				}
				componentDidMount() {
					this.setState({
						showOCDisclaimer: !Object(vt.g)(Vt.b.ORIGINAL_CONTENT_DISCLAIMER)
					}), this.sendChatPostExposureEvent()
				}
				componentDidUpdate(e) {
					let {
						currentSubredditId: t
					} = e;
					this.sendChatPostExposureEvent(t === this.props.currentSubredditId)
				}
				sendChatPostExposureEvent() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					const {
						fireHoldoutEvent: t
					} = this.state, {
						currentSubredditId: n,
						isChatPostAvailable: o,
						sendChatPostExposureEvent: s
					} = this.props;
					t || e || !n ? t && this.setState({
						fireHoldoutEvent: !1
					}) : (s(o, n), this.setState({
						fireHoldoutEvent: !0
					}))
				}
				render() {
					const {
						activeModalId: e,
						canAddPostFlair: t,
						canPostAsModerator: n,
						className: o,
						currentSubredditId: r,
						destSubreddit: i,
						destSubredditAboutInfo: a,
						eventSchedule: c,
						disabled: l,
						flair: d,
						isChatPostAvailable: u,
						isChatPostSelected: m,
						isNsfw: h,
						isSpoiler: f,
						isOriginalContent: x,
						language: C,
						postCreationFieldErrors: E,
						postSchedule: y,
						submissionType: v,
						theme: O,
						toggleFlairPicker: j
					} = this.props, {
						showOCDisclaimer: S
					} = this.state, T = !!d, {
						backgroundColor: k = null,
						textColor: w = null
					} = d || {}, {
						allOriginalContent: _ = !1,
						eventPostsEnabled: I = !1
					} = a || {}, P = i.isProfile || Object(Xt.d)(a), M = l || !P || _ || v === p.Gb.CROSSPOST;
					return s.a.createElement("div", {
						className: o
					}, s.a.createElement(bn, null, u && s.a.createElement(fn, {
						disabled: l,
						onClick: this.handleChatPostClick,
						toggled: m,
						addModifierTooltip: Object(b.c)("Use live chat instead of comments"),
						removeModifierTooltip: Object(b.c)("Use comments instead of live chat")
					}, m ? s.a.createElement(dn, null) : s.a.createElement(ln, {
						viewBox: "0 -5 20 30"
					}), Object(b.c)("Live chat")), n && I && s.a.createElement(yn, {
						disabled: l || !!y,
						id: it.a,
						onClick: this.handleToggleSchedulePicker,
						shiftTooltipToRight: !0,
						toggled: !!c,
						addModifierTooltip: Object(b.c)("Add time and date info"),
						removeModifierTooltip: Object(b.c)("Edit event data")
					}, s.a.createElement(Ut, null), s.a.createElement(an, null), c ? sn(c, C) : Object(b.c)("Event"), c && s.a.createElement(cn, null)), e === g.f && s.a.createElement(Ht.default, {
						schedule: this.props.eventSchedule,
						onClose: this.handleToggleSchedulePicker,
						onChange: this.props.onEventScheduleChange,
						shouldShowSubmitTime: !0,
						shouldShowDeleteButton: !0
					}), s.a.createElement(gn, {
						disabled: M,
						onClick: this.handleOriginalContentClick,
						shiftTooltipToRight: !0,
						toggled: P && (x || _),
						addModifierTooltip: Object(b.c)("Mark this post as Original Content [OC]"),
						removeModifierTooltip: Object(b.c)("Unmark this post as Original Content [OC]"),
						disabledTooltip: P ? "" : Object(b.c)("This community does not allow original content tag")
					}, x ? s.a.createElement(dn, null) : s.a.createElement(un, null), Object(b.c)("OC")), s.a.createElement(xn, {
						disabled: l,
						onClick: this.handleSpoilerClick,
						toggled: f,
						addModifierTooltip: Object(b.c)("Mark as a spoiler"),
						removeModifierTooltip: Object(b.c)("Unmark as a spoiler")
					}, f ? s.a.createElement(dn, null) : s.a.createElement(un, null), Object(b.c)("Spoiler")), s.a.createElement(Cn, {
						disabled: l,
						onClick: this.handleNsfwClick,
						toggled: h,
						addModifierTooltip: Object(b.c)("Mark as Not Safe For Work"),
						removeModifierTooltip: Object(b.c)("Unmark Not Safe For Work")
					}, h ? s.a.createElement(dn, null) : s.a.createElement(un, null), Object(b.c)("NSFW")), s.a.createElement(En, {
						className: Object(oe.a)(nn.a.AddFlair, {
							[nn.a.isToggled]: T,
							[nn.a.mHasError]: E[p.kb.FLAIR].length > 0
						}),
						disabled: !t || l,
						disabledTooltip: i.id ? Object(b.c)("Not available for this community") : Object(b.c)("Select a subreddit to enable flair"),
						onClick: j,
						toggled: T,
						addModifierTooltip: Object(b.c)("Add flair"),
						removeModifierTooltip: Object(b.c)("Change or remove flair"),
						backgroundColor: k,
						textColor: w
					}, s.a.createElement(mn, {
						className: nn.a.FlairIcon,
						style: {
							"--flairColor": T ? Object(He.c)(Object.assign({}, this.props, {
								backgroundColor: k,
								textColor: w
							})) : O.newCommunityTheme.actionIcon
						}
					}), d ? s.a.createElement(pn, {
						flair: d,
						forceSmallEmojis: !0
					}) : s.a.createElement(hn, null, s.a.createElement(ze.c, null, "Flair")), s.a.createElement(rn, {
						className: nn.a.CaretIcon,
						style: {
							"--flairColor": T ? Object(He.c)(Object.assign({}, this.props, {
								backgroundColor: k,
								textColor: w
							})) : O.newCommunityTheme.actionIcon
						}
					})), e === on && s.a.createElement(Wt.a, {
						flairs: d ? [d] : [],
						modalId: on,
						onFlairChanged: this.handlePostFlairSelected,
						subredditId: r || ""
					})), s.a.createElement(ue.a, {
						className: nn.a.errorMessages,
						messages: E[p.kb.FLAIR]
					}), P && x && S && s.a.createElement(Qe, {
						onDoNotShowClick: this.handleOCDisclaimerDoNotShowClick
					}))
				}
			}
			var Tn = vn(Object(_e.a)(jn(Sn)));
			var kn = e => s.a.createElement("i", {
					className: Object(oe.a)(Object(ct.b)("addCollection"), e.className)
				}),
				wn = n("./src/reddit/icons/fonts/Plus/index.tsx"),
				_n = n("./src/reddit/components/PostCreationForm/EduTooltips/CollectionButtonTooltip/index.m.less"),
				In = n.n(_n);
			const Pn = Object(ne.e)("postCreation.modifiers.educationalTooltips.collection.title"),
				Mn = Object(ne.e)("postCreation.modifiers.educationalTooltips.collection.description"),
				Rn = Object(ne.e)("postCreation.modifiers.educationalTooltips.collection.collectionIconExplanation"),
				Nn = Object(ne.e)("postCreation.modifiers.educationalTooltips.collection.createIconExplanation"),
				Ln = Object(ne.e)("postCreation.modifiers.educationalTooltips.collection.plusIconExplanation");
			var Dn = Rt(e => s.a.createElement(xt, {
					className: In.a.container,
					description: Mn(e.language),
					heroImagePath: "".concat(rt.a.assetPath, "/img/collection-tooltip-hero@2x.png"),
					iconsExplanations: [{
						iconComponent: lt,
						text: Nn(e.language)
					}, {
						iconComponent: kn,
						text: Rn(e.language)
					}, {
						iconComponent: wn.a,
						text: Ln(e.language)
					}],
					isOpen: !0,
					isOverlayOff: !0,
					language: e.language,
					onClose: e.onCloseTooltip,
					title: Pn(e.language),
					tooltipId: it.g
				}), it.c),
				Fn = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Bn = n("./src/reddit/components/PostCreationForm/ControlRow/ToggleDestCollectionButton/index.m.less"),
				An = n.n(Bn);
			const Kn = Object(ne.e)("postCreation.collections.addToCollection"),
				Un = Object(ne.e)("postCreation.collections.resetCollection"),
				Hn = Te.a.wrapped(Xe.a, "DivButton", An.a);
			class Wn extends s.a.Component {
				render() {
					const {
						disabled: e,
						isToggled: t,
						language: n
					} = this.props, o = t ? Fn.b : kn, r = t ? Un : Kn;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(Hn, {
						className: Object(oe.a)(An.a.button, e ? An.a.disabled : null),
						disabled: e,
						id: it.g,
						onClick: this.props.onClick
					}, s.a.createElement(o, {
						className: An.a.icon
					}), s.a.createElement(Ye.a, {
						text: r(n)
					})), !t && s.a.createElement(Dn, null))
				}
			}
			var Vn = Wn,
				zn = n("./src/reddit/components/TrackingHelper/index.tsx"),
				qn = n("./src/reddit/components/PostCreationForm/ControlRow/index.m.less"),
				Gn = n.n(qn);
			const Jn = Object(ne.e)("postCreation.post"),
				Zn = Object(ne.e)("postCreation.cancel"),
				Qn = Object(ne.e)("postCreation.draft.saved"),
				Xn = Object(ne.e)("postCreation.draft.saveDraft"),
				Yn = Object(ne.e)("postCreation.draft.updated"),
				$n = Object(ne.e)("postCreation.draft.updateDraft"),
				eo = Object(ne.e)("postCreation.pleaseFixRequirements"),
				to = Object(ne.e)("error.type.generic"),
				no = 10,
				oo = Te.a.wrapped(ge.a, "Container", Gn.a),
				so = [p.Gb.LINK_ONLY, p.Gb.POST],
				ro = Te.a.div("ButtonsAndErrors", Gn.a),
				io = Te.a.wrapped(ge.a, "ButtonRow", Gn.a),
				ao = Te.a.div("ButtonLayout", Gn.a),
				co = Te.a.div("SaveDraftButtonLayout", Gn.a),
				lo = Te.a.wrapped(pe.a, "PostLoadingIcon", Gn.a),
				uo = Te.a.wrapped(lo, "DraftLoadingIcon", Gn.a),
				po = Te.a.wrapped(ie.a, "Token", Gn.a),
				mo = Object(i.a)(T.V, ae.a.getMediaCount),
				ho = (e, t) => {
					const n = Object(v.m)(e, t);
					return !!n && (e.creations.formData.isPoll && Object(Ce.h)(e, {
						subredditId: n
					}))
				},
				bo = [],
				go = e => {
					const t = Object(T.V)(e),
						n = Object(T.ab)(e);
					if (!t.isBound || n !== p.Gb.POST || !Object(T.X)(e)) return bo;
					const o = (e => {
						const {
							allowedPostTypes: t,
							name: n
						} = Object(T.g)(e), o = mo(e), s = Object(I.S)(e);
						if (!o || !t) return null;
						let r = "";
						return !o.total || t.images || t.videos ? o.video && !t.videos ? r = "postCreation.mediaInput.videosAreNotAllowed" : !o.image && !o.gifvideo || t.images || (r = "postCreation.mediaInput.imagesAreNotAllowed") : r = "postCreation.mediaInput.mediaAreNotAllowed", r ? Object(ne.a)(s, r, {
							subredditName: n
						}) : null
					})(e);
					return o ? [o] : (e => {
						const t = mo(e),
							n = Object(I.S)(e);
						if (!t) return bo;
						const o = [];
						return t.image > p.R && o.push(Object(ne.a)(n, "postCreation.mediaInput.imagesLimitExceeded")), t.video + t.gifvideo > p.V && o.push(Object(ne.a)(n, "postCreation.mediaInput.videosLimitExceeded")), o
					})(e)
				},
				fo = (e, t) => {
					let {
						sourcePostId: n
					} = t;
					const o = Object(T.Z)(e, {
							sourcePostId: n
						}),
						{
							allowedPostTypes: s,
							id: r,
							isProfile: i,
							name: a
						} = Object(T.g)(e),
						c = Object(I.S)(e);
					if (!n) return Object(ne.a)(c, "postCreation.crosspostInput.sourcePostIdRequired");
					if (!r) return Object(ne.a)(c, "postCreation.crosspostInput.destinationRequired");
					const l = i ? Object(I.Y)(e, {
						userId: r
					}) : r;
					if (l) {
						if (((e, t, n) => {
								const o = Object(ye.a)(n, {
										sort: "new",
										crossposts_only: !0
									}),
									s = e.subreddits.duplicates.models[t];
								return !(s && s[o])
							})(e, l, n)) return Object(ne.a)(c, "postCreation.crosspostInput.checkingCommunity");
						if (((e, t, n) => {
								const o = ((e, t, n) => {
									const o = e.subreddits.duplicates.models[t];
									return o ? o[n] : []
								})(e, t, Object(ye.a)(n, {
									sort: "new",
									crossposts_only: !0
								}));
								return 0 !== o.length && Object(ve.B)(e, o[0])
							})(e, l, n)) return Object(ne.a)(c, "postCreation.crosspostInput.within24HoursAreNotAllowed")
					}
					if (!s || !o) return null;
					if (o.source) return !s.links && Object(ne.a)(c, "postCreation.crosspostInput.linksAreNotAllowed");
					const {
						isCrosspostableSubreddit: d
					} = Object(w.y)(e, {
						subredditName: a
					});
					if (!d) return Object(b.c)("This community does not allow for crossposting of any posts");
					switch (o.media && o.media.type) {
						case fe.n.TEXT:
						case fe.n.RTJSON:
							return !s.text && Object(ne.a)(c, "postCreation.crosspostInput.selfpostsAreNotAllowed");
						case fe.n.IMAGE:
							return !s.images && Object(ne.a)(c, "postCreation.crosspostInput.imagesAreNotAllowed");
						case fe.n.VIDEO:
						case fe.n.GIFVIDEO:
						case fe.n.EMBED:
							return !s.videos && Object(ne.a)(c, "postCreation.crosspostInput.videosAreNotAllowed")
					}
					return null
				},
				xo = (e, t) => {
					let {
						sourcePostId: n
					} = t;
					const o = Object(T.K)(e),
						s = Object(T.V)(e),
						r = Object(T.ab)(e);
					if (r === p.Gb.IMAGE_ONLY) return !1;
					if (!Object(T.g)(e).name || !Object(T.y)(e)) return !1;
					if (r === p.Gb.POST || r === p.Gb.POLL) {
						const t = go(e),
							n = !ae.a.isAllMediaUploaded(s, e.uploads);
						return !t.length && !n
					}
					return r === p.Gb.MEDIA ? !(!o || !o.url) : r === p.Gb.LINK_ONLY ? Object(T.t)(e) : r === p.Gb.CROSSPOST && !fo(e, {
						sourcePostId: n
					})
				},
				Co = Object(i.c)({
					isPoll: ho,
					activeModalId: xe.a,
					currentSubredditOrProfile: v.o,
					canPostAsModerator: T.d,
					currentCollection: v.f,
					errorMsgs: (e, t) => {
						let {
							sourcePostId: n
						} = t;
						if (Object(T.r)(e)) return Object(T.n)(e);
						if (n) {
							const t = fo(e, {
								sourcePostId: n
							});
							if (t) return [t]
						}
						return go(e)
					},
					eventSchedule: T.o,
					hasDraftError: k.f,
					hasError: T.r,
					hasSubmitValidationError: T.s,
					destSubreddit: T.g,
					destSubredditAboutInfo: T.f,
					isDraftsFeatureEnabled: (e, t) => !ho(e, t),
					isDraftPending: k.g,
					isMediaUploadPending: T.L,
					isModeratorSomewhere: Ee.h,
					isPostPending: T.cb,
					isPostSubmitEnabled: xo,
					isSaveDraftEnabled: e => {
						const t = Object(T.ab)(e);
						if (!p.C.has(t) || !Object(T.z)(e)) return !1;
						const n = Object(T.g)(e),
							o = Object(T.m)(e),
							s = t === p.Gb.LINK_ONLY && Object(T.t)(e),
							r = t === p.Gb.POST && o === g.h.RICH_TEXT && Object(T.x)(e),
							i = t === p.Gb.POST && o === g.h.MARKDOWN && Object(T.u)(e),
							a = s || r || i;
						return !!n.name || Object(T.y)(e) || a
					},
					isScheduledPost: T.G,
					language: I.S,
					postSchedule: T.S,
					isEditingScheduledPost: e => !!Object(V.j)(e),
					showContributorRequestFlow: e => Object(w.t)(e, f.e.Post),
					showScheduledPosts: T.Y,
					submissionType: T.a,
					submitMode: T.bb,
					subredditGovMeta: e => {
						const t = Object(T.g)(e);
						if (t && t.id) return e.subreddits.gov.meta[t.id]
					}
				}),
				Eo = Object(v.t)(),
				yo = Object(r.b)(Co, e => ({
					onPostScheduleChange: t => {
						e(a.e(t))
					},
					onResetDestCollection: () => e(N.c()),
					onTrackCancelButtonClick: () => {
						e((e, t) => O.a(t()))
					},
					openCollectionsListOrCreationModal: t => e(a.n(t)),
					togglePostSchedulePicker: () => e(a.y(g.o)),
					clickPostSchedule: () => {
						e((e, t) => Object(te.a)(Object(me.e)()(t())))
					}
				})),
				vo = 2e3,
				Oo = e => e ? H.fbt._("Update", null, {
					hk: "3MoYFL"
				}) : H.fbt._("Schedule", null, {
					hk: "4bXWUG"
				});
			class jo extends s.a.Component {
				constructor() {
					super(...arguments), this.isSavedTimer = null, this.state = {
						draftId: null,
						isSaved: !1
					}, this.onCancel = () => {
						this.props.onTrackCancelButtonClick(), this.props.onCancel()
					}, this.handleDestCollectionClick = () => {
						const {
							currentCollection: e,
							onResetDestCollection: t,
							currentSubredditOrProfile: n,
							openCollectionsListOrCreationModal: o,
							sendEvent: s
						} = this.props;
						if (e) return t();
						n && (o(n.id), s(Object(Ot.b)(void 0, Ot.a.collectionComposer)))
					}, this.shouldDisablePostButton = () => {
						const {
							contributorRequestPending: e,
							hasSubmitValidationError: t,
							isDraftPending: n,
							isMediaUploadPending: o,
							isPostPending: s,
							isPostSubmitEnabled: r
						} = this.props;
						return !r || n || s || o || this.state.isSaved || t || e
					}, this.shouldDisablePostScheduleButton = () => {
						const {
							submissionType: e,
							eventSchedule: t
						} = this.props;
						return this.shouldDisablePostButton() || !!t || !so.includes(e)
					}, this.openPostSchedulePickerModal = () => {
						this.props.togglePostSchedulePicker(), this.props.clickPostSchedule()
					}
				}
				componentWillReceiveProps(e) {
					!this.props.isDraftPending || e.isDraftPending || e.hasDraftError || this.setState({
						isSaved: !0,
						draftId: this.props.draftId
					}, () => {
						this.isSavedTimer = window.setTimeout(() => {
							this.isSavedTimer = null, this.setState({
								isSaved: !1,
								draftId: null
							})
						}, vo)
					})
				}
				componentWillUnmount() {
					this.isSavedTimer && (clearTimeout(this.isSavedTimer), this.isSavedTimer = null)
				}
				getSaveDraftButtonText() {
					const {
						draftId: e,
						language: t
					} = this.props, {
						isSaved: n,
						draftId: o
					} = this.state;
					return n ? o ? Yn(t) : Qn(t) : e ? $n(t) : Xn(t)
				}
				render() {
					const {
						activeModalId: e,
						canPostAsModerator: t,
						currentCollection: n,
						className: r,
						destSubreddit: i,
						destSubredditAboutInfo: a,
						hasError: c,
						hasSubmitValidationError: l,
						isEditingScheduledPost: d,
						errorMsgs: u,
						isDraftsFeatureEnabled: m,
						isDraftPending: h,
						isPoll: b,
						isMediaUploadPending: x,
						isPostPending: C,
						isSaveDraftEnabled: E,
						isScheduledPost: y,
						language: v,
						onPostFieldValidation: O,
						onSaveDraft: j,
						onSubmit: S,
						showContributorRequestFlow: T,
						showScheduledPosts: k,
						submissionType: w,
						submitMode: _,
						subredditGovMeta: I
					} = this.props, {
						isSaved: P
					} = this.state, M = h || C || x, R = _ === g.r.Post && x, N = _ === g.r.Draft && x, {
						collectionsEnabled: L = !1
					} = a || {}, D = Object(oe.a)(Gn.a.ButtonLayout, {
						[Gn.a.autoWidth]: b || T || k
					}), F = Object(oe.a)(Gn.a.postScheduleButton, {
						[Gn.a.postScheduleButtonActive]: !!this.props.postSchedule
					});
					return s.a.createElement(oo, {
						className: r
					}, s.a.createElement(Tn, {
						className: Gn.a.postModifiers,
						disabled: M,
						language: v,
						onPostFieldValidation: O
					}), s.a.createElement(ro, null, s.a.createElement(io, null, s.a.createElement("div", {
						className: D
					}, T ? s.a.createElement(re.a, {
						eventSource: f.b.PostSubmission,
						smallButton: !0
					}) : s.a.createElement(ke, {
						disabled: this.shouldDisablePostButton(),
						onClick: S,
						className: k && Gn.a.removeRightBorderRadius
					}, C || R ? s.a.createElement(lo, {
						sizePx: no
					}) : s.a.createElement(o.Fragment, null, b && I && I.polls && I.polls.price && i.id ? s.a.createElement(o.Fragment, null, Jn(v), s.a.createElement(po, {
						subredditId: i.id
					}), Object(se.a)(I.polls.price)) : y ? Oo(d) : Jn(v))), k && s.a.createElement(ke, {
						title: H.fbt._("Make a scheduled post", null, {
							hk: "3TBSMs"
						}),
						disabled: this.shouldDisablePostScheduleButton(),
						onClick: this.openPostSchedulePickerModal,
						className: F
					}, this.props.postSchedule ? s.a.createElement(be.a, {
						className: Gn.a.postScheduleIcon
					}) : s.a.createElement(he.a, {
						className: Gn.a.postScheduleIcon
					}))), e === g.o && s.a.createElement(de, {
						sendEvent: this.props.sendEvent,
						schedule: this.props.postSchedule,
						onChange: this.props.onPostScheduleChange,
						onClose: this.props.togglePostSchedulePicker
					}), m && w !== p.Gb.MEDIA && w !== p.Gb.POLL && !y ? s.a.createElement(co, null, s.a.createElement(we, {
						disabled: !E || M || P,
						onClick: j
					}, h || N ? s.a.createElement(uo, {
						sizePx: no
					}) : this.getSaveDraftButtonText())) : s.a.createElement(ao, null, s.a.createElement(we, {
						disabled: M || P,
						onClick: this.onCancel
					}, Zn(v))), L && t && s.a.createElement(Vn, {
						disabled: M,
						isToggled: !!n,
						language: v,
						onClick: this.handleDestCollectionClick
					})), !!(c || u.length || l) && s.a.createElement(ue.a, {
						className: Gn.a.errorMessages,
						messages: u,
						fallbackMessage: l ? eo(v) : to(v)
					})))
				}
			}
			var So = Eo(yo(Object(zn.b)(jo))),
				To = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				ko = n("./src/reddit/constants/posts.ts"),
				wo = n("./src/reddit/controls/SubredditPicker/index.tsx"),
				_o = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				Io = n("./src/reddit/helpers/name/index.ts"),
				Po = n("./src/reddit/components/PostCreationForm/CreationControls/index.m.less"),
				Mo = n.n(Po);
			const Ro = Te.a.wrapped(wo.a, "SubredditPicker", Mo.a),
				No = Te.a.wrapped(ge.a, "ControlRow", Mo.a),
				Lo = Object(i.a)(T.g, xe.a, T.O, I.i, v.q, I.z, (e, t, n, o, s, r) => {
					const i = n && !t ? n : e;
					if (!i || !i.name) return Object(_o.b)("", null, null, r);
					const {
						name: a,
						isProfile: c
					} = i;
					return c ? Object(_o.b)(Object(Io.c)(a), null, o, r) : Object(_o.b)(Object(Io.b)(a), s, null, r)
				}),
				Do = Object(i.c)({
					language: I.S,
					pending: T.Q,
					pickerValue: Lo
				}),
				Fo = Object(r.b)(Do, (e, t) => {
					let {
						draftId: n,
						pageLayer: o
					} = t;
					return {
						onSubredditChangeRequested: t => e(N.b(t, o)),
						onTrackSubredditPickerClick: () => e((e, t) => O.t(t()))
					}
				});
			class Bo extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.inputRef = null, this.onSelectSubreddit = e => {
						const {
							rawString: t,
							record: n
						} = e, o = {
							name: n && n.name || Object(Io.f)(t),
							isProfile: n && n.type === ko.a.PROFILE || Object(Io.e)(t),
							allowedPostTypes: n && n.allowedPostTypes
						};
						this.props.onSubredditChangeRequested(o)
					}, this.setInputRef = e => this.inputRef = e
				}
				render() {
					return s.a.createElement(No, null, s.a.createElement(Ro, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						disabled: this.props.pending,
						includeUserProfile: this.props.includeUserProfile,
						inputRef: this.setInputRef,
						onSelect: this.onSelectSubreddit,
						onFocus: this.props.onTrackSubredditPickerClick,
						selectOnBlur: !0,
						value: this.props.pickerValue
					}))
				}
			}
			var Ao = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				})(Fo(Bo)),
				Ko = n("./node_modules/lodash/range.js"),
				Uo = n.n(Ko),
				Ho = n("./src/higherOrderComponents/asModal/index.tsx"),
				Wo = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Vo = n("./src/lib/timeAgo/index.ts"),
				zo = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				qo = n("./src/reddit/models/User/index.ts"),
				Go = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx")),
				Jo = n("./src/reddit/icons/fonts/Link/index.tsx"),
				Zo = n("./src/reddit/icons/fonts/Photos/index.tsx"),
				Qo = n("./src/reddit/icons/fonts/Text/index.tsx"),
				Xo = n("./src/reddit/models/PostDraft/index.ts"),
				Yo = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Icon.m.less"),
				$o = n.n(Yo),
				es = function(e, t) {
					var n = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
					}
					return n
				};
			const ts = {
				[Xo.b.Image]: Zo.a,
				[Xo.b.Link]: Jo.a,
				[Xo.b.Markdown]: Qo.a,
				[Xo.b.RichText]: Qo.a,
				[Xo.b.Video]: Go.a
			};
			var ns = Te.a.wrapped(e => {
					const {
						draftKind: t
					} = e, n = es(e, ["draftKind"]), o = ts[t] || Jo.a;
					return s.a.createElement(o, n)
				}, "Component", $o.a),
				os = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/index.m.less"),
				ss = n.n(os);
			const rs = Te.a.div("Container", ss.a),
				is = Te.a.div("LeftBlock", ss.a),
				as = Te.a.div("Content", ss.a),
				cs = Te.a.div("RightBlock", ss.a),
				ls = Te.a.h2("PostTitle", ss.a),
				ds = Te.a.wrapped(ls, "EditingPostTitle", ss.a),
				us = Te.a.div("MetaLine", ss.a),
				ps = Te.a.span("SubredditName", ss.a),
				ms = Te.a.time("DraftSavedTime", ss.a),
				hs = Te.a.wrapped(Fn.b, "TrashIcon", ss.a),
				bs = Te.a.div("InteractiveDiv", ss.a),
				gs = Te.a.button("ConfirmDelete", ss.a),
				fs = Object(i.c)({
					isDraftDeletionPending: (e, t) => {
						let {
							draft: {
								id: n
							}
						} = t;
						return Object(k.a)(e, n)
					},
					subreddit: (e, t) => {
						let {
							draft: {
								subredditId: n
							}
						} = t;
						return n ? Object(w.S)(e, {
							subredditId: n
						}) : void 0
					},
					user: I.i
				}),
				xs = Object(r.b)(fs, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return {
						deleteDraft: t => e(L.o(t, n))
					}
				}),
				Cs = Object(v.t)({
					currentDraftId: v.u,
					pageLayer: e => e
				}),
				Es = 1e3;
			class ys extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showConfirmText: !1
					}, this.onClick = () => {
						this.props.onClick(this.props.draft.id)
					}, this.onConfirmClick = e => {
						e.stopPropagation(), this.props.deleteDraft(this.props.draft.id)
					}, this.onTrashCanClick = e => {
						e.stopPropagation(), this.setState({
							showConfirmText: !0
						})
					}
				}
				render() {
					const {
						draft: e,
						currentDraftId: t,
						isDraftDeletionPending: n,
						language: o,
						subreddit: r,
						user: i
					} = this.props, a = r && Object(Xt.e)(r) && i ? {
						displayText: Object(Io.c)(Object(qo.f)(i)),
						url: "/user/".concat(Object(qo.f)(i), "/")
					} : r;
					if (n) return null;
					const c = e.title || Object(ne.a)(o, "postCreation.draft.untitled");
					return s.a.createElement(rs, {
						onClick: this.onClick
					}, s.a.createElement(is, null, s.a.createElement(ns, {
						draftKind: e.kind
					})), s.a.createElement(as, null, t === e.id ? s.a.createElement(ds, {
						"data-redditstyle": !0
					}, s.a.createElement(ze.c, null, "EDITING:"), " ", c) : s.a.createElement(ls, {
						"data-redditstyle": !0
					}, c), s.a.createElement(us, {
						"data-redditstyle": !0
					}, a && s.a.createElement(ps, {
						"data-redditstyle": !0
					}, a.displayText), a && s.a.createElement(zo.b, null), s.a.createElement(ms, null, Object(ne.a)(o, "postCreation.draft.draftSavedTime", {
						time: Object(Vo.d)(o, (e.modified || e.created) / Es)
					})))), s.a.createElement(cs, null, this.state.showConfirmText ? s.a.createElement(gs, {
						onClick: this.onConfirmClick,
						"data-redditstyle": !0
					}, t === e.id ? Object(ne.a)(o, "postCreation.draft.confirmDeleteCurrentDraft") : Object(ne.a)(o, "postCreation.draft.confirmDelete")) : s.a.createElement(bs, {
						onClick: this.onTrashCanClick
					}, s.a.createElement(hs, {
						"data-redditstyle": !0
					}))))
				}
			}
			var vs = Cs(xs(ys)),
				Os = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				js = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Placeholder.m.less"),
				Ss = n.n(js);
			const Ts = Te.a.div("Container", Ss.a),
				ks = Te.a.div("LeftBlock", Ss.a),
				ws = Te.a.div("Content", Ss.a),
				_s = Te.a.div("MediaIcon", Ss.a),
				Is = Te.a.div("Title", Ss.a),
				Ps = Te.a.div("Secondary", Ss.a);
			var Ms = e => {
					let {
						className: t,
						isLoading: n
					} = e;
					return s.a.createElement(Ts, {
						className: t,
						"data-redditstyle": !0
					}, s.a.createElement(ks, null, s.a.createElement(_s, {
						className: Object(Os.a)({
							isLoading: n
						}),
						"data-redditstyle": !0
					})), s.a.createElement(ws, null, s.a.createElement(Is, {
						className: Object(Os.b)({
							isLoading: n
						}),
						"data-redditstyle": !0
					}), s.a.createElement(Ps, {
						className: Object(Os.b)({
							isLoading: n
						}),
						"data-redditstyle": !0
					})))
				},
				Rs = n("./src/reddit/components/PostCreationForm/DraftListModal/index.m.less"),
				Ns = n.n(Rs);

			function Ls() {
				return (Ls = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ds = Object(ne.e)("postCreation.draft.draftListEmptyText"),
				Fs = Object(ne.e)("postCreation.draft.draftListTitle"),
				Bs = Object(ne.e)("overlay.close"),
				As = "".concat(rt.a.assetPath, "/img/snoo-drafts.png"),
				Ks = 3,
				Us = Te.a.div("Wrapper", Ns.a),
				Hs = Te.a.div("TitleRow", Ns.a),
				Ws = Te.a.span("DraftsNumber", Ns.a),
				Vs = Te.a.div("DetailsContainer", Ns.a),
				zs = Te.a.wrapped(ge.a, "ButtonRow", Ns.a),
				qs = Te.a.wrapped(Oe.i, "CancelButton", Ns.a),
				Gs = Te.a.div("CloseWrapper", Ns.a),
				Js = Te.a.wrapped(Wo.a, "Close", Ns.a),
				Zs = Te.a.div("Empty", Ns.a),
				Qs = Te.a.img("EmptyImage", Ns.a),
				Xs = Te.a.p("EmptyText", Ns.a),
				Ys = Object(i.c)({
					drafts: k.c,
					isPending: k.b,
					language: I.S,
					maxDrafts: I.T
				}),
				$s = Object(r.b)(Ys);
			class er extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === m.a.Escape && this.props.onClose()
					}, this.renderItem = e => s.a.createElement(vs, {
						key: e.id,
						draft: e,
						language: this.props.language,
						onClick: () => this.props.onLoadDraft(e)
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderPlaceholder(e) {
					return s.a.createElement(Ms, {
						isLoading: !0,
						key: e
					})
				}
				renderEmpty() {
					return s.a.createElement(Zs, null, s.a.createElement(Qs, {
						src: As
					}), s.a.createElement(Xs, null, Ds(this.props.language)))
				}
				render() {
					const {
						drafts: e,
						isPending: t,
						language: n,
						maxDrafts: o
					} = this.props;
					let r;
					return r = t ? Uo()(Ks).map(this.renderPlaceholder) : 0 === e.length ? this.renderEmpty() : e.map(this.renderItem), s.a.createElement(Us, {
						"data-redditstyle": !0
					}, s.a.createElement(Hs, {
						"data-redditstyle": !0
					}, Fs(n), s.a.createElement(Ws, {
						"data-redditstyle": !0
					}, e.length, "/", o), s.a.createElement(Gs, {
						onClick: this.props.onClose
					}, s.a.createElement(Js, {
						"data-redditstyle": !0
					}))), s.a.createElement(Vs, null, r), s.a.createElement(zs, {
						"data-redditstyle": !0
					}, s.a.createElement(qs, {
						onClick: this.props.onClose,
						"data-redditstyle": !0
					}, Bs(n))))
				}
			}
			const tr = Te.a.wrapped(Object(Ho.a)($s(er)), "DraftListModal", Ns.a);
			var nr = e => s.a.createElement(tr, Ls({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e)),
				or = (n("./node_modules/core-js/modules/es6.regexp.constructor.js"), n("./node_modules/url/url.js")),
				sr = n("./src/lib/forceHttps/index.ts"),
				rr = n("./src/reddit/components/PostCreationForm/SafeHarborText/index.m.less"),
				ir = n.n(rr);
			const ar = new RegExp("\\b(".concat([...fe.v].join("|"), ")\\.com$"), "i"),
				cr = new RegExp("\\.(".concat(fe.u.join("|"), ")$")),
				lr = Te.a.div("TextContainer", ir.a);
			class dr extends s.a.Component {
				constructor() {
					super(...arguments), this.isUrlScraped = e => {
						const t = Object(or.parse)(Object(sr.a)(e));
						return !(!t.hostname || !ar.test(t.hostname)) || !(!t.pathname || !cr.test(t.pathname))
					}
				}
				render() {
					return this.props.value && this.isUrlScraped(this.props.value) ? s.a.createElement(lr, null, s.a.createElement(ze.c, null, "Posting this link saves the image or gif to Reddit")) : null
				}
			}
			var ur = n("./src/reddit/controls/GrowingOutlinedInput/index.tsx"),
				pr = n("./src/reddit/components/PostCreationForm/LinkEditor/index.m.less"),
				mr = n.n(pr);
			const hr = Object(ne.e)("postCreation.pasteUrlHere"),
				br = Object(i.c)({
					language: I.S,
					pending: T.Q,
					postCreationFieldErrors: $t,
					subreddit: v.q,
					value: T.I
				}),
				gr = Object(r.b)(br, (e, t) => {
					let {
						onChange: n,
						onPostFieldValidation: o,
						pageLayer: s
					} = t;
					return {
						onBlur: () => {
							o(e(Ue(p.kb.LINK, s)))
						},
						onChange: t => {
							e(a.r(t)), n(t)
						},
						onFocus: () => e((e, t) => O.k(t(), g.k.CLICK, g.l.URL))
					}
				});
			var fr = Object(v.t)()(gr(e => {
					const {
						language: t,
						pending: n,
						postCreationFieldErrors: o,
						subreddit: r,
						value: i
					} = e, a = o[p.kb.LINK].length > 0;
					return s.a.createElement("div", null, s.a.createElement(ur.a, {
						className: Object(oe.a)(mr.a.URLInput, {
							[mr.a.mHasError]: a
						}),
						placeholder: hr(t),
						value: i,
						onBlur: e.onBlur,
						onFocus: e.onFocus,
						onKeyDown: e.onKeyDown,
						onValueChange: e.onChange,
						readOnly: n
					}), s.a.createElement(ue.a, {
						errorModalTitle: r ? Object(Io.b)(r.name) : void 0,
						messages: o[p.kb.LINK]
					}), s.a.createElement(dr, {
						value: i
					}))
				})),
				xr = n("./src/lib/formatApiError/index.ts"),
				Cr = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				Er = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				yr = n("./src/reddit/controls/FileDrop/index.tsx"),
				vr = n("./src/reddit/models/Upload/index.ts"),
				Or = n("./src/telemetry/models/Media.ts"),
				jr = n("./node_modules/lodash/upperFirst.js"),
				Sr = n.n(jr);
			var Tr = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 53 67"
			}, s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("path", {
				fill: "#000",
				d: "M36.17 15.7877c-2.1457-.6233-4.6272.5142-5.0853 2.419-.174.7268-.5168 1.0273-1.2283 1.124-1.5643.2126-2.9247.8707-4.0924 1.901-.807.7112-1.2403 1.523-1.2154 2.6702.0477 2.1067 1.0792 3.8318 2.0054 5.608.2256.432 2.0283-.631 1.111-.082-.616-1.9145-1.1994-3.6348-1.7152-5.3744-.2127-.72.0527-1.406.7364-1.754 1.2204-.6195 2.4954-1.1375 3.7456-1.702.5923-.2676.93-.057 1.27.465.821 1.2544 1.9995 2.04 3.5757 1.8642 1.6357-.1817 2.555-1.264 3.054-2.7215.6707-1.956-.2665-3.8677-2.1616-4.4176"
			}), s.a.createElement("path", {
				fill: "#FF8717",
				d: "M32.575 18.997c-.1866-1.1486.5913-2.0766 1.949-2.3235 1.4877-.2722 2.729.4466 2.9796 1.7235.2642 1.345-.7003 2.9457-1.9175 3.1832-1.341.2627-2.7447-.9416-3.011-2.5832"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M17.0857 23.965c-2.5846-.806-4.1367.6-4.4678 3.2556-.3653 2.9378.675 6.234 3.5116 7.1787 2.9598.9843 5.8344-1.5318 6.3822-4.5023.4535-2.4616-3.5227-5.3826-5.426-5.932-3.1034-.9685 1.507.4345 0 0M39.321 24.512c-2.184-2.2814-6.028.2842-7.4777 2.256-.521.7074-.9206 1.5057-1.1896 2.3475-.35 1.0897.269.94.3743 1.8643.1922 1.6742 2.1314 3.3578 3.7206 3.5912 4.7354.694 7.7125-6.7713 4.3803-10.2603.1294.1364.259.2717.3894.408-.0658-.0692-.1315-.1384-.1973-.2066-1.9745-2.0624.696.7283 0 0M18.9308 59.6326c-.1867-.0458-.3346.0093-.443.1056-.001 0-.001-.001-.002-.001-1.5598.099-3.8566.7662-4.6848 2.1695-.8887 1.507.7358 2.5096 2.148 2.674 1.553.1813 3.8715-.3148 4.4405-1.8975.439-1.2193-.0328-2.7012-1.4587-3.0506M34.37 60.348c-.242-.0358-.5174.043-.6267.2957-1.5118 3.4664 6.185 5.586 7.6074 2.4245 1.3572-3.016-4.6648-4.4187-6.9808-2.7203"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M39.9895 37.3797c-3.8707-9.353-16.7772-11.6802-23.5762-4.7352-3.177 3.245-4.373 8.2466-4.83 9.7576-1.4357 4.748-1.561 10.198.7932 14.6874 3.987 7.605 16.61 9.4605 23.792 5.505 9.1842-5.058 6.6638-18.3606 3.437-26.1424.2377.5734.4746 1.1468.7124 1.7202-.1096-.2645-.219-.528-.3285-.7925-2.1562-5.211 1.182 2.856 0 0"
			}), s.a.createElement("path", {
				fill: "#FF8717",
				d: "M26.4406 29.6162c3.5285 0 8.4696 2.1882 10.6613 4.9576 2.5828 3.2633 3.7284 8.3103 4.3175 12.3626.4945 3.4113-.4807 8.203-2.2755 11.186-2.1327 3.5455-6.732 4.5153-10.5422 4.4935-4.6918-.026-10.162-.5288-13.2412-4.577-2.77-3.643-3.234-8.4117-2.506-12.8188.401-2.4216 1.0284-5.207 1.9967-7.4706 2.105-4.9197 5.7597-8.1334 11.5893-8.1334"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M41.5915 49.6162c.03-.6952.008-1.3605-.044-2l.044 2zM37.4186 60.1975c-1.3365-.7743-2.342-2.1664-2.536-3.716-.0665-.533-.0396-1.074-.0128-1.61.0477-.9814.1004-1.9818.458-2.8933.4095-1.0428 1.1846-1.8868 1.9427-2.7034.46-.4967.9212-.9934 1.3823-1.49.7273-.7844 1.6783-1.6223 2.688-1.475-.4125-2.465-1.0336-5.1514-2.0422-7.567-1.0493 2.024-3.0208 3.9137-5.4086 2.871-.5147-.2242-.8774-.3756-1.3395-.7027-.8615-.7398-1.9138-.9498-3.157-.6288-.2702.3008-.5265.6128-.769.9368-.5157.521-1.1567.9812-1.9347.7632-1.7777-.5007-2.97-2.9346-5.1046-1.4002-.8675.624-1.9396 1.5637-3.0953 1.5082-2.0044-.096-3.3925-1.0983-4.2153-2.752-.776 2.0393-1.2024 4.4066-1.5432 6.479-.0407.2524-.0636.5098-.0974.7652.6232-.0353 1.2462-.013 1.8206.219.6776.2727 1.2182.8037 1.74 1.3225.8435.8388 1.708 1.706 2.187 2.8033.4382 1.0014.5227 2.123.5366 3.2183.015 1.0882-.0338 2.1754-.145 3.2566-.1313 1.284-.475 2.7296-1.571 3.3606 3.1707 2.359 7.553 2.7054 11.4153 2.7266 3.2216.0182 6.9976-.6774 9.4033-3.0224-.2027-.0868-.4104-.1585-.6022-.2695"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M19.3634 62.297c-.4735.8925-1.877 1.0785-2.832 1.1074-.5274.0154-1.058-.045-1.5395-.25-.894-.3822-.2403-1.1526.2322-1.5266.884-.7018 2.083-1.0513 3.2383-1.1217.114-.0072.2012-.0478.2752-.0993.846.2655.982 1.2193.6257 1.8904M39.1353 63.7074c-.7183.2857-1.607.0788-2.318-.0972-1.225-.3028-2.4647-1.2617-2.3147-2.656.0894-.0388.1756-.0948.2438-.1942 1.16-1.6788 4.4677-.7897 5.5096.6697.7194 1.008-.38 1.984-1.1207 2.2777"
			}), s.a.createElement("path", {
				fill: "#C18D42",
				d: "M17.2218 28.842c-.2698-1.599-.862-3.239-2.209-4.0722-1.519-.9397-1.5314 2.7022-1.4284 3.646.1773 1.6212.7036 4.1546 2.031 4.9962 1.0735.6814 1.7476-.4387 1.9068-1.9332.105-.9777-.1392-1.678-.3004-2.6368-.3327-1.9776.2232 1.3268 0 0"
			}), s.a.createElement("path", {
				fill: "#FF8717",
				d: "M15.5475 24.681c1.747.664 2.8352 2.0178 3.3196 3.9672.3962 1.5937.7234 3.6126-.1366 4.959 1.6953.081 3.8534-.3464 3.6123-2.602 1.339-1.9475-4.229-7.018-6.7952-6.3243M33.6698 32.7516c-.407-.451.364.404 0 0"
			}), s.a.createElement("path", {
				fill: "#C18D42",
				d: "M35.796 29.1142c-.1635.7146-.323 1.4594-.211 2.192.178 1.1545.9577 1.6425 1.872 1.0695 1.2238-.7655 1.577-2.3845 1.9186-3.693.1864-.7164.529-3.6248-.9526-2.9716-1.4423.6354-2.308 2.0174-2.627 3.4032-.238 1.0394.3698-1.6104 0 0"
			}), s.a.createElement("path", {
				fill: "#FF8717",
				d: "M35.3533 32.5596c-1.0047-1.2304-.5965-3.2887-.0174-4.64.6404-1.496 1.6748-2.6295 3.2115-3.037-.0695-.041-.136-.083-.2138-.114-1.9296-.775-4.9295 1.584-5.8667 3.0262-.6885 1.0606-2.0135 2.6206.8063 4.2594.7018.4085 1.3024.687 2.08.5054"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M32.8514 39.097c-.577.676-1.6076.6748-2.4273.0963-1.264-.8917-1.1062-3.3024.122-4.234.7017-.532 1.6705-.4205 2.1302.1645 1.53 1.946.6833 3.3772.1752 3.973"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M30.755 38.0938c-.2703-.432-.2692-1.2056-.039-1.8203.3575-.9478 1.322-.8296 1.6942.092.213.5263.1684 1.252-.0664 1.597-.7778 1.1484-1.3505.512-1.5888.1313"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M24.71 39.009c-.6662.8048-2.161.7863-3.1096.0826-1.5367-1.1425-1.2565-2.9377-.0257-3.8424.9816-.721 1.9472-.897 2.8605-.1542 1.636 1.3315 1.2372 2.751.2748 3.914"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M21.79 38.1136c-.322-.4-.3135-1.296-.0326-1.8656.4566-.922 1.1752-.7538 1.537-.016.2884.589.359 1.1686.0612 1.7166-.5324.982-1.0995.7425-1.5656.165"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M24.5598 40.2202c.8506 1.8878 3.3605 1.9104 3.9825-.235.0587-.206-.3954-.314-.471-.3215-1.1-.0954-2.188-.0502-3.278.1646-.637.1256.158.5627.459.5024.9212-.182 1.8433-.2474 2.7733-.167-.157-.1068-.314-.2136-.471-.3216-.14.4862-.3785.834-.7293 1.098-.5525.4157-1.0443-.1445-1.3017-.716-.147-.3266-1.094-.2915-.9638-.0038"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M22.5907 41.495c1.505 1.488 4.0743 1.4078 5.0584-.571-.3263-.06-.6527-.121-.98-.182-.2436 2.3982 3.9335 2.359 4.8708.653.1018-.186-.8275-.4596-.9802-.1822-.556 1.1467-1.526 1.0504-2.9105-.2888.029-.284-.8573-.428-.98-.182-.497 1.0008-1.7188 2.179-3.194.7215-.1837-.182-1.14-.221-.8843.0315M19.5653 46.516c-.473 6.7128 8.6924 4.2055 5.1774-.548-.6672-.903-.7844.151-.5202.7218.5274 1.1447.4853 2.1653-.5644 2.844-1.2192.7874-2.6945.0107-2.9834-1.216-.112-.5384-.144-1.082-.0936-1.6312.0237-.3453-.993-.4877-1.0157-.1705M29.6923 44.8475c-1.689 1.2247-1.5924 4.6386.8496 4.7633 1.13.0575 2.2874-.3435 3.0557-1.1673.3415-.3653 1.5518-2.4732.5793-2.709-1.2043-.293-1.2043 3.92-3.9756 3.001-.9725-.3227-.5812-1.1573-.5253-1.9048.0163-.218 1.4523-3.0258.0163-1.9832"
			})));
			var kr = e => s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 53 67"
				}, s.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, s.a.createElement("path", {
					fill: "#FFF",
					d: "M9.5927 33.2517c.829 1.0475-1.9245 5.7044-2.2983 5.6247-7.91-1.6942-2.065-11.142 2.2983-5.6247z"
				}), s.a.createElement("path", {
					fill: "#000",
					d: "M7.2853 38.8738c-7.8952-1.69-2.0557-11.1393 2.297-5.625.8272 1.047-.4264.8297-.9997.3446-1.1508-.97-2.3416-1.2604-3.462-.3077-1.3005 1.107-.879 3.0184.443 3.748.585.3038 1.202.5194 1.8517.6446.4058.0876.243 1.275-.13 1.1955"
				}), s.a.createElement("path", {
					fill: "#FFF",
					d: "M50.0333 34.034c-.1167 1.5037-.772 2.978-1.8564 3.877-.4812.3997-3.1335 1.7-3.25.3792-.1457-1.6356-1.7525-4.3107-.3047-6.062 1.7012-2.06 5.6625-1.444 5.411 1.8057z"
				}), s.a.createElement("path", {
					fill: "#000",
					d: "M38.8415 2.2205c-2.7586-.8015-5.949.661-6.538 3.11-.2237.9345-.6645 1.321-1.5794 1.4452-2.011.2734-3.7602 1.1195-5.2615 2.444-1.0375.9146-1.5946 1.9584-1.5627 3.4333.0614 2.7088 1.3876 4.9268 2.5785 7.2106.29.5554 2.6078-.8114 1.4285-.1056-.7922-2.4615-1.5422-4.6733-2.2054-6.91-.2734-.9256.0677-1.8078.9468-2.2552 1.569-.7964 3.2084-1.4625 4.8157-2.188.7615-.3443 1.196-.0734 1.633.5976 1.0553 1.6128 2.5707 2.623 4.597 2.397 2.1033-.2337 3.2852-1.6254 3.9266-3.4992.8624-2.515-.3425-4.9727-2.779-5.6797"
				}), s.a.createElement("path", {
					fill: "#FF8717",
					d: "M33.9315 6.857c-.224-1.3784.7095-2.492 2.3388-2.7883 1.7852-.3266 3.275.536 3.5755 2.0682.317 1.614-.8404 3.5347-2.301 3.8197-1.6092.3153-3.2938-1.13-3.6133-3.0997"
				}), s.a.createElement("path", {
					fill: "#000",
					d: "M14.7982 12.4437c-3.36-1.0258-5.3778.7637-5.8082 4.1436-.4748 3.739.8778 7.9344 4.5652 9.1366 3.8478 1.2526 7.5847-1.9496 8.297-5.7303.5894-3.133-4.5797-6.8506-7.054-7.55-4.0343-1.2325 1.959.5532 0 0M43.3042 13.0588c-2.8393-2.6964-7.8367.3357-9.7212 2.666-.6773.836-1.1967 1.7795-1.5465 2.7743-.455 1.288.3498 1.111.4866 2.2034.25 1.9786 2.771 3.9682 4.837 4.244 6.156.8204 10.0262-8.0023 5.6943-12.1256.1683.161.3367.321.5063.482-.0855-.0817-.171-.1634-.2564-.244-2.567-2.4376.9047.8605 0 0M16.2644 58.021c-.2208-.059-.3958.012-.5237.136-.0012 0-.0012-.0012-.0024-.0012-1.8447.1275-4.5607.9865-5.54 2.7936-1.051 1.9405.87 3.2314 2.5398 3.4432 1.8366.2334 4.5785-.4055 5.2513-2.4435.519-1.57-.0387-3.478-1.725-3.928M35.8236 58.9218c-.272-.045-.582.0543-.705.3726-1.7005 4.3674 6.9575 7.0378 8.5576 3.0546 1.5267-3.7998-5.2473-5.567-7.8526-3.4272"
				}), s.a.createElement("path", {
					fill: "#000",
					d: "M43.621 29.1977c-4.9592-11.951-21.4957-14.9246-30.207-6.0505-4.0707 4.1463-5.603 10.5374-6.1882 12.468-1.8397 6.067-2.0003 13.0306 1.016 18.767 5.1085 9.718 21.2816 12.0886 30.4837 7.0343 11.767-6.463 8.538-23.4607 4.4034-33.4042.3046.7327.608 1.4654.9127 2.198-.1402-.338-.2804-.6746-.4207-1.0126-2.7626-6.6584 1.5146 3.6495 0 0"
				}), s.a.createElement("path", {
					fill: "#FF8717",
					d: "M25.8506 19.7317c4.5594 0 10.944 2.8204 13.7762 6.3902 3.3375 4.2063 4.8178 10.7118 5.579 15.935.639 4.3973-.6212 10.5736-2.9403 14.4188-2.7558 4.57-8.6988 5.8202-13.6222 5.792-6.0627-.0332-13.131-.6814-17.1098-5.8996-3.5793-4.6956-4.179-10.8425-3.2382-16.523.518-3.1216 1.329-6.7118 2.58-9.6297 2.7202-6.3415 7.4425-10.4838 14.9753-10.4838"
				}), s.a.createElement("path", {
					fill: "#FFF",
					d: "M45.9425 45c.03-.6952.008-1.3605-.044-2l.044 2zM39.8434 58.144c-1.7227-.9698-3.0188-2.7136-3.2686-4.6547-.0858-.6677-.0512-1.3455-.0166-2.017.0615-1.2292.1293-2.4824.5904-3.6243.5277-1.3063 1.5267-2.3634 2.504-3.3865.593-.622 1.1872-1.2443 1.7815-1.8665.9376-.9825 2.1633-2.032 3.4645-1.8475-.5315-3.088-1.332-6.453-2.632-9.4792-1.3524 2.5355-3.8935 4.9027-6.971 3.5964-.6636-.2807-1.131-.4704-1.7266-.88-1.1105-.927-2.467-1.19-4.069-.788-.3485.377-.679.7677-.9914 1.1736-.6647.6525-1.4908 1.2292-2.4937.956-2.2913-.6272-3.8283-3.676-6.5793-1.754-1.1182.7816-2.5 1.959-3.9896 1.8893-2.5832-.12-4.3725-1.3758-5.433-3.4472-1.0002 2.5544-1.5497 5.5198-1.989 8.116-.0525.316-.082.6386-.1255.9585.803-.0443 1.606-.0165 2.3464.2743.8734.3415 1.57 1.0066 2.2425 1.6566 1.0874 1.0508 2.2016 2.137 2.819 3.5116.5648 1.2545.6737 2.6594.6916 4.0315.0193 1.3633-.0435 2.7252-.187 4.0796-.169 1.6085-.612 3.4193-2.0248 4.2097 4.087 2.9553 9.735 3.389 14.7134 3.4156 4.1523.0226 9.0192-.8486 12.12-3.7862-.2614-.1088-.529-.1986-.7762-.3377"
				}), s.a.createElement("path", {
					fill: "#FFF",
					d: "M16.6775 61.5205c-.5682 1.19-2.2523 1.438-3.3982 1.4765-.633.0205-1.2697-.0602-1.8475-.3336-1.0727-.5094-.2883-1.5367.2787-2.0352 1.0607-.9357 2.4997-1.4018 3.886-1.4957.137-.0097.2414-.064.3303-.1325 1.015.354 1.1784 1.6258.7507 2.5205M41.3178 62.8585c-.838.2857-1.875.079-2.7043-.097-1.429-.303-2.8756-1.2618-2.7005-2.656.1043-.039.2048-.095.2843-.1944 1.3534-1.6787 5.2124-.7896 6.428.6698.8393 1.008-.4433 1.984-1.3075 2.2777"
				}), s.a.createElement("path", {
					fill: "#C18D42",
					d: "M14.4914 18.1648c-.3373-1.9542-1.0774-3.9587-2.7615-4.977-1.8987-1.1487-1.9142 3.3025-1.7855 4.4562.2217 1.9814.8796 5.0777 2.5387 6.1064 1.342.8328 2.1846-.5362 2.3836-2.363.131-1.1948-.174-2.0508-.3754-3.2226-.416-2.417.279 1.6217 0 0"
				}), s.a.createElement("path", {
					fill: "#FF8717",
					d: "M11.8985 13.079c1.9966.812 3.2402 2.4664 3.7938 4.849.4527 1.9478.8267 4.4154-.1562 6.061 1.9376.099 4.404-.4234 4.1285-3.1804 1.5303-2.38-4.8333-8.5774-7.766-7.7295M35.0207 23.1353c-.407-.451.364.404 0 0"
				}), s.a.createElement("path", {
					fill: "#C18D42",
					d: "M38.2093 19.4974c-.2045.9188-.4038 1.8764-.264 2.8182.2225 1.4844 1.197 2.112 2.34 1.3752 1.5298-.9843 1.9712-3.066 2.3983-4.748.233-.9213.6613-4.6607-1.1908-3.8208-1.803.8168-2.885 2.5937-3.2835 4.3754-.2977 1.3363.462-2.0706 0 0"
				}), s.a.createElement("path", {
					fill: "#FF8717",
					d: "M37.7916 23.9292c-1.2917-1.538-.767-4.111-.0223-5.8.8235-1.87 2.1534-3.287 4.1292-3.7963-.0894-.0513-.175-.1037-.275-.1424-2.481-.9687-6.3378 1.98-7.5428 3.7826-.8853 1.3257-2.5888 3.2757 1.0366 5.3243.9024.5106 1.6746.859 2.6743.6317"
				}), s.a.createElement("path", {
					fill: "#000",
					d: "M34.0283 31.3767c-.721.8113-2.0094.81-3.034.1158-1.58-1.07-1.383-3.963.1523-5.081.877-.6384 2.088-.5045 2.6627.1976 1.9127 2.3352.854 4.0527.219 4.7677"
				}), s.a.createElement("path", {
					fill: "#FFF",
					d: "M31.106 29.4776c-.2703-.432-.2692-1.2056-.039-1.8204.3574-.9477 1.322-.8296 1.6942.092.213.5264.1684 1.252-.0664 1.597-.7778 1.1484-1.3506.5122-1.5888.1314"
				}), s.a.createElement("path", {
					fill: "#000",
					d: "M23.8934 30.2714c-.7994.9656-2.5933.9435-3.7315.099-1.844-1.371-1.508-3.5252-.031-4.6108 1.178-.8653 2.3368-1.0765 3.4327-.185 1.9633 1.5977 1.4846 3.301.3297 4.6968"
				}), s.a.createElement("path", {
					fill: "#FFF",
					d: "M20.141 29.4974c-.322-.4-.3135-1.2962-.0326-1.8657.4566-.922 1.1752-.7537 1.537-.0158.2884.5886.359 1.1683.061 1.7164-.5322.982-1.0993.7424-1.5654.165"
				}), s.a.createElement("path", {
					fill: "#000",
					d: "M23.9138 33.604c1.0632 1.8878 4.2007 1.9104 4.9782-.235.0733-.206-.4943-.314-.5887-.3215-1.375-.0955-2.735-.0502-4.0976.1646-.796.1257.1975.5628.574.5025 1.1512-.1822 2.304-.2475 3.4664-.167-.196-.1068-.3923-.2136-.5886-.3216-.175.486-.4732.834-.9117 1.0977-.6905.4157-1.3054-.1445-1.627-.716-.184-.3266-1.3676-.2914-1.205-.0038"
				}), s.a.createElement("path", {
					fill: "#000",
					d: "M20.9512 35.318c1.8397 2.232 4.9797 2.112 6.1826-.8564-.399-.09-.798-.1816-1.198-.273-.2976 3.5973 4.8077 3.5387 5.9532.9794.1245-.279-1.0113-.6892-1.198-.273-.6794 1.72-1.8652 1.5755-3.5572-.4334.0354-.426-1.048-.642-1.198-.273-.6075 1.5012-2.1007 3.2685-3.9037 1.0823-.2244-.2732-1.393-.3318-1.0808.047M44.4978 32.213c1.7332-2.056 5.7836-1.429 5.5353 1.821-.115 1.5038-.7808 2.977-1.8867 3.8733-.4907.3984-3.198 1.692-3.3206.3704-.1534-1.6365 4.8643-1.0204 4.2203-4.8223-.2264-1.3343-1.284-.9385-2.1835-.974-.262-.0102-3.8398 1.4795-2.3647-.2684"
				}))),
				wr = n("./src/reddit/components/PostCreationForm/MediaInput/DropArea/index.m.less"),
				_r = n.n(wr);
			const Ir = Object(ne.e)("postCreation.mediaInput.dropHereToUpload"),
				Pr = Object(ne.e)("postCreation.mediaInput.dragAndDropOr"),
				Mr = Object(ne.e)("postCreation.upload"),
				Rr = [...Array.from(p.a), ...Array.from(p.b)].join(),
				Nr = Te.a.input("HiddenInput", _r.a),
				Lr = Te.a.wrapped(Oe.i, "UploadButton", _r.a),
				Dr = Te.a.wrapped(Tr, "HamsterSmall", _r.a),
				Fr = Te.a.wrapped(kr, "HamsterLarge", _r.a),
				Br = Te.a.div("Container", _r.a),
				Ar = Te.a.div("DropArea", _r.a),
				Kr = Te.a.wrapped(Ar, "DropAreaActive", _r.a),
				Ur = Te.a.wrapped(Kr, "DropAreaOver", _r.a),
				Hr = Te.a.p("Paragraph", _r.a),
				Wr = Te.a.p("ErrorMsg", _r.a),
				Vr = Te.a.div("Box", _r.a);
			var zr = class extends s.a.Component {
					constructor() {
						super(...arguments), this.hiddenInputEl = null, this.onFileInput = e => {
							this.props.onFileInput(e.currentTarget.files[0])
						}, this.clickUploadButton = () => this.hiddenInputEl && this.hiddenInputEl.click()
					}
					render() {
						const {
							language: e,
							isOver: t,
							canDrop: n,
							lastErrorMsg: o
						} = this.props;
						return s.a.createElement(Br, null, s.a.createElement(Nr, {
							innerRef: e => this.hiddenInputEl = e,
							onChange: this.onFileInput,
							type: "file",
							accept: Rr
						}), t ? s.a.createElement(Ur, null, s.a.createElement(Vr, null, s.a.createElement(Fr, null), s.a.createElement(Hr, null, Ir(e)))) : n ? s.a.createElement(Kr, null, s.a.createElement(Vr, null, s.a.createElement(Dr, null), s.a.createElement(Hr, null, Ir(e)))) : s.a.createElement(Ar, null, s.a.createElement(Hr, null, Pr(e), s.a.createElement(Lr, {
							onClick: this.clickUploadButton
						}, Mr(e))), o && s.a.createElement(Wr, null, Sr()(o))))
					}
				},
				qr = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				Gr = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				Jr = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				Zr = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/Preview/index.m.less"),
				Qr = n.n(Zr);
			const Xr = Te.a.img("Img", Qr.a),
				Yr = Te.a.img("BlurImg", Qr.a),
				$r = Te.a.wrapped(e => {
					const {
						className: t,
						url: n
					} = e;
					return s.a.createElement("div", {
						className: t
					}, s.a.createElement(Yr, {
						src: n
					}), s.a.createElement(Xr, {
						src: n
					}))
				}, "ImagePreview", Qr.a),
				ei = Te.a.wrapped(e => {
					const {
						className: t,
						url: n,
						showControls: o,
						videoBlurImgSrc: r
					} = e;
					return s.a.createElement("div", {
						className: t
					}, s.a.createElement(Jr.b, {
						shouldLoad: !1,
						shouldPause: !1,
						isGif: !1,
						otherSource: n,
						showControlBar: o,
						showSettingsIcon: !1,
						blurImageSrc: r
					}))
				}, "VideoPreview", Qr.a);
			var ti = Te.a.wrapped(e => {
					const {
						className: t,
						type: n,
						url: o,
						showControls: r,
						videoBlurImgSrc: i
					} = e;
					return s.a.createElement("div", {
						className: t
					}, "image" === n ? s.a.createElement($r, {
						url: o
					}) : s.a.createElement(ei, {
						url: o,
						videoBlurImgSrc: i,
						showControls: r
					}))
				}, "Component", Qr.a),
				ni = n("./src/reddit/components/ProgressBar/index.tsx"),
				oi = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/UploadStatusBar/index.m.less"),
				si = n.n(oi);
			const ri = Object(ne.e)("postCreation.cancel"),
				ii = Object(ne.e)("postCreation.uploadStatus.success"),
				ai = Object(ne.e)("postCreation.uploadStatus.uploading"),
				ci = Te.a.div("ControlRow", si.a),
				li = Te.a.wrapped(Oe.n, "Button", si.a),
				di = Te.a.div("Status", si.a);
			var ui = Te.a.wrapped(e => {
					const {
						language: t,
						name: n,
						progress: o,
						onCancel: r
					} = e, i = o && o.percent || 0;
					return s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(ni.a, {
						percent: i
					}), s.a.createElement(ci, null, s.a.createElement(di, null, i < 100 ? "".concat(ai(t), ' "').concat(n, '"') : ii(t)), i < 100 && s.a.createElement(li, {
						onClick: r
					}, " ", ri(t), " ")))
				}, "Component", si.a),
				pi = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				mi = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/index.m.less"),
				hi = n.n(mi);
			const bi = Object(ne.e)("postCreation.remove"),
				gi = Object(ne.e)("postCreation.mediaInput.chooseThumbnail"),
				fi = Te.a.div("Wrapper", hi.a),
				xi = Te.a.div("Controls", hi.a),
				Ci = Te.a.wrapped(Fn.b, "Trash", hi.a),
				Ei = Te.a.wrapped(Gr.a, "ThumbnailSelect", hi.a);
			var yi = e => {
					const {
						isPostSubmitPending: t,
						language: n,
						mediaType: o,
						onCancelUpload: r,
						onRemove: i,
						upload: a
					} = e, c = a.metadata, {
						localUrl: l,
						videoFirstFrameUrl: d
					} = c, u = a.status, p = u === vr.a.PENDING || u === vr.a.UPLOADING, m = u === vr.a.SUCCESS, h = !t;
					return s.a.createElement(fi, null, p ? s.a.createElement(ui, {
						className: hi.a.UploadStatusBar,
						language: n,
						name: a.file.name,
						progress: a.progress,
						onCancel: r
					}) : null, l ? s.a.createElement(ti, {
						type: o,
						url: l,
						showControls: m,
						videoBlurImgSrc: d
					}) : null, m && s.a.createElement(xi, null, "video" === o && s.a.createElement(qr.a, {
						disabled: !!e.makeGifDisableReason || !h,
						tooltip: e.makeGifDisableReason,
						on: e.isMakeGifToggleOn,
						onClick: e.onMakeGifToggle
					}), "video" === o && s.a.createElement(pi.a, {
						enabled: h,
						Icon: Ei,
						tooltip: gi(n),
						onClick: e.onShowThumbnailSelector
					}), s.a.createElement(pi.a, {
						enabled: h,
						Icon: Ci,
						tooltip: bi(n),
						onClick: i
					})))
				},
				vi = n("./src/reddit/components/PostCreationForm/MediaInput/RemovePrompt/index.m.less"),
				Oi = n.n(vi);
			const ji = "POST_CREATION_MEDIA_REMOVE_PROMPT_ID",
				Si = Object(ne.e)("postCreation.imageRemovePromptTitle"),
				Ti = Object(ne.e)("postCreation.videoRemovePromptTitle"),
				ki = Object(ne.e)("postCreation.mediaInput.imageRemovePrompt"),
				wi = Object(ne.e)("postCreation.mediaInput.videoRemovePrompt"),
				_i = Object(ne.e)("postCreation.remove"),
				Ii = Object(ne.e)("postCreation.keep"),
				Pi = Te.a.div("Wrapper", Oi.a),
				Mi = Te.a.wrapped(ge.a, "TitleRow", Oi.a),
				Ri = Te.a.div("DetailsContainer", Oi.a),
				Ni = Te.a.wrapped(ge.a, "ButtonRow", Oi.a),
				Li = Te.a.wrapped(Oe.i, "CancelButton", Oi.a),
				Di = Te.a.wrapped(Oe.f, "ConfirmButton", Oi.a);
			var Fi = Object(Ho.a)(e => {
					const {
						language: t,
						isVideo: n
					} = e;
					return s.a.createElement(Pi, null, s.a.createElement(Mi, null, n ? Ti(t) : Si(t)), s.a.createElement(Ri, null, n ? wi(t) : ki(t)), s.a.createElement(Ni, null, s.a.createElement(Li, {
						onClick: e.onCanceled
					}, Ii(t)), s.a.createElement(Di, {
						onClick: e.onConfirmed
					}, _i(t))))
				}),
				Bi = n("./src/reddit/components/PostCreationForm/MediaInput/index.m.less"),
				Ai = n.n(Bi),
				Ki = function(e, t) {
					var n = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
					}
					return n
				};
			const Ui = "MEDIA_POST_VIDEO_THUMBNAIL_SELECTOR_MODAL_ID",
				Hi = Object(i.c)({
					activeModalId: xe.a,
					isPostPending: T.Q,
					language: I.S,
					upload: e => e.uploads[g.m],
					value: T.K
				}),
				Wi = Object(r.b)(Hi, e => ({
					onChange: t => e(a.d(t)),
					uploadMedia: (t, n) => e(M.c(t, g.m, n)),
					removeUpload: () => e(F.i(g.m, !0)),
					toggleThumbnailModal: () => e(a.y(Ui)),
					toggleRemovePrompt: () => e(a.y(ji))
				})),
				Vi = Te.a.div("Container", Ai.a);
			class zi extends s.a.Component {
				constructor() {
					super(...arguments), this.onFileDrop = e => {
						const {
							upload: t
						} = this.props;
						t && t.status !== vr.a.FAILED || this.uploadMedia(e[0], Or.FileSource.DragAndDrop)
					}, this.onFileInput = e => {
						this.uploadMedia(e, Or.FileSource.FileSelector)
					}, this.uploadMedia = (e, t) => {
						this.props.uploadMedia(e, t)
					}, this.onCancelUpload = () => {
						this.props.removeUpload()
					}, this.handlePaste = e => {
						if (e.clipboardData) {
							const t = Object(Cr.a)(e.clipboardData);
							t.length && (this.onFileDrop(t), e.preventDefault(), e.stopPropagation())
						}
					}, this.onRemoveConfirmed = () => {
						this.props.toggleRemovePrompt(), this.props.removeUpload()
					}, this.onThumbnailSelect = e => {
						this.toggleThumbnailSelector();
						const t = this.props.value,
							{
								video: n
							} = t,
							o = Ki(t, ["video"]);
						this.props.onChange(Object.assign({}, o, {
							video: n && Object.assign({}, n, {
								thumbnail: e
							})
						}))
					}, this.toggleThumbnailSelector = () => {
						this.props.toggleThumbnailModal()
					}, this.onMakeGifToggle = () => {
						const e = this.props.value,
							{
								video: t
							} = e,
							n = Ki(e, ["video"]);
						this.props.onChange(Object.assign({}, n, {
							video: t && Object.assign({}, t, {
								isMakeGif: !t.isMakeGif
							})
						}))
					}, this.renderDropArea = (e, t) => {
						const {
							isPostPending: n,
							language: o,
							upload: r,
							value: i
						} = this.props, {
							isMakeGif: a = !1,
							makeGifDisableReason: c = null
						} = i && i.video || {}, l = r && r.status === vr.a.FAILED, d = r && l ? Object(xr.a)(o, r.error) : "";
						return i && i.mediaType && r && !l ? s.a.createElement(yi, {
							isPostSubmitPending: n,
							language: o,
							upload: r,
							mediaType: i.mediaType,
							onRemove: this.props.toggleRemovePrompt,
							onCancelUpload: this.onCancelUpload,
							onShowThumbnailSelector: this.toggleThumbnailSelector,
							onMakeGifToggle: this.onMakeGifToggle,
							isMakeGifToggleOn: a,
							makeGifDisableReason: c
						}) : s.a.createElement(zr, {
							language: this.props.language,
							lastErrorMsg: d,
							isOver: e,
							canDrop: t,
							onFileInput: this.onFileInput
						})
					}
				}
				componentDidMount() {
					document.addEventListener("paste", this.handlePaste)
				}
				componentWillUnmount() {
					const {
						upload: e
					} = this.props;
					e && e.status === vr.a.FAILED && this.props.removeUpload(), document.removeEventListener("paste", this.handlePaste)
				}
				render() {
					const {
						language: e,
						value: t,
						upload: n
					} = this.props, o = t && t.video && t.video.thumbnail || void 0;
					return s.a.createElement(Vi, null, s.a.createElement(yr.a, {
						render: (e, t) => this.renderDropArea(e, t),
						onDrop: this.onFileDrop
					}), n && n.metadata.videoDuration && s.a.createElement(Er.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleThumbnailSelector,
						videoSource: n.metadata.localUrl,
						videoDuration: n.metadata.videoDuration,
						selected: o,
						isOpen: this.props.activeModalId === Ui
					}), this.props.activeModalId === ji && s.a.createElement(Fi, {
						language: e,
						isVideo: !!t && "video" === t.mediaType,
						onCanceled: this.props.toggleRemovePrompt,
						onConfirmed: this.onRemoveConfirmed
					}))
				}
			}
			var qi = Wi(zi),
				Gi = n("./src/reddit/actions/post.ts"),
				Ji = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				Zi = n("./src/reddit/controls/OutboundLink/index.tsx"),
				Qi = n("./src/reddit/selectors/externalAccount.ts"),
				Xi = n("./src/reddit/icons/fonts/Info/index.tsx"),
				Yi = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/Hint/index.m.less"),
				$i = n.n(Yi);
			const ea = Te.a.wrapped(Xi.a, "Info", $i.a),
				ta = Te.a.div("TooltipContent", $i.a),
				na = Te.a.div("Hint", $i.a);
			var oa = e => s.a.createElement(na, null, s.a.createElement(Ye.a, {
					className: $i.a.HoverTooltip,
					tooltipContentClass: $i.a.tooltipContentClass,
					text: s.a.createElement(ta, null, e.text)
				}), s.a.createElement(ea, null)),
				sa = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/index.m.less"),
				ra = n.n(sa);
			const ia = Object(ne.e)("postCreation.postConnectAccounts"),
				aa = Object(ne.e)("postCreation.postConnectAccountsTooltip"),
				ca = Object(ne.e)("postCreation.postToTwitter"),
				la = Object(ne.e)("postCreation.sendReplies"),
				da = Te.a.wrapped(Ji.a, "CheckboxInput", ra.a),
				ua = Te.a.wrapped(Zi.a, "ConnectAccountLink", ra.a),
				pa = Te.a.div("Container", ra.a),
				ma = Te.a.div("ContainerLeft", ra.a),
				ha = Te.a.div("ContainerRight", ra.a),
				ba = Te.a.div("CheckboxText", ra.a),
				ga = Te.a.div("Option", ra.a),
				fa = Te.a.wrapped(We.a, "TextButton", ra.a),
				xa = Te.a.input("TextBox", ra.a),
				Ca = Te.a.div("Wrapper", ra.a),
				Ea = Object(i.c)({
					connectedTwitterAccount: Qi.a,
					currentSubredditOrProfile: v.o,
					currentUser: I.i,
					isDraftPending: k.g,
					isMediaUploadPending: T.L,
					isPostPending: T.cb,
					isPublicLink: T.F,
					language: I.S,
					postToTwitter: T.U,
					sendReplies: T.W,
					sharingLink: k.i,
					submissionType: T.a
				}),
				ya = Object(r.b)(Ea, (e, t) => ({
					togglePostToTwitter: t => {
						e(a.z(t)), e((e, n) => O.s(n(), t))
					},
					toggleSendReplies: t => {
						e(a.A(t))
					},
					toggleDraftIsPublic: n => {
						e(L.s(n)), e(Object(L.r)(t.draftId)), e((e, o) => {
							const s = Object(k.h)(o(), t.draftId);
							s && O.g(o(), s, n)
						})
					},
					copyLink: t => e(Object(Gi.t)(t)),
					trackConnectAccountsClick: () => e((e, t) => O.b(t()))
				}), (e, t, n) => Object.assign({}, e, t, n, {
					onTogglePostToTwitter: () => t.togglePostToTwitter(!e.postToTwitter),
					onToggleSendReplies: () => t.toggleSendReplies(!e.sendReplies),
					onToggleDraftIsPublic: () => {
						t.toggleDraftIsPublic(!e.isPublicLink), e.isPublicLink || t.copyLink(e.sharingLink)
					},
					onCopyLink: () => t.copyLink(e.sharingLink)
				})),
				va = Object(ne.e)("postCreation.shareDraft"),
				Oa = Object(ne.e)("postCreation.shareDraftTooltip");
			var ja = Object(v.t)()(ya(e => {
					const {
						connectedTwitterAccount: t,
						currentSubredditOrProfile: n,
						currentUser: o,
						draftId: r,
						language: i,
						submissionType: a
					} = e, c = !!n && !!n.isQuarantined, l = e.isDraftPending || e.isPostPending || e.isMediaUploadPending, d = a !== p.Gb.MEDIA && r, u = e.isPublicLink, m = o && o.hasUserProfile;
					return s.a.createElement(pa, null, s.a.createElement(ma, {
						className: e.className
					}, s.a.createElement(ge.a, null, s.a.createElement(ga, null, s.a.createElement(da, {
						disabled: l,
						name: "send-replies",
						onChange: e.onToggleSendReplies,
						value: e.sendReplies
					}, s.a.createElement(ba, null, la(i))))), m && t && s.a.createElement(ge.a, null, s.a.createElement(ga, null, s.a.createElement(da, {
						disabled: l || c,
						name: "post-to-twitter",
						onChange: e.onTogglePostToTwitter,
						value: e.postToTwitter
					}, s.a.createElement(ba, null, ca(i))))), m && !t && !c && s.a.createElement(ge.a, null, s.a.createElement(ua, {
						href: "/settings#connected-accounts",
						isSponsored: !1,
						onClick: e.trackConnectAccountsClick,
						source: null
					}, ia(i)), s.a.createElement(oa, {
						text: aa(i)
					}))), s.a.createElement(ha, {
						className: e.className
					}, d && s.a.createElement(Ca, null, s.a.createElement(ga, null, s.a.createElement(da, {
						name: "enable-public-link",
						onChange: e.onToggleDraftIsPublic,
						value: e.isPublicLink
					}, s.a.createElement(ba, null, va(i)), s.a.createElement(oa, {
						text: Oa(i)
					})))), d && u && s.a.createElement(ge.a, null, s.a.createElement(xa, {
						disabled: !0,
						value: e.sharingLink
					}), s.a.createElement(fa, {
						onClick: e.onCopyLink
					}, s.a.createElement(ze.c, null, "Copy link")))))
				})),
				Sa = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				Ta = n("./src/reddit/components/PostCreationForm/PostCreationFooter/ScheduledTimeInfo/index.m.less"),
				ka = n.n(Ta);
			const wa = Te.a.div("Container", ka.a),
				_a = Te.a.wrapped(be.a, "PencilIcon", ka.a),
				Ia = Object(i.c)({
					eventSchedule: T.o,
					language: I.S,
					postSchedule: T.S
				});
			var Pa = Object(r.b)(Ia, (e, t) => ({
					onToggleSchedulePicker: t => e(a.y(t))
				}))(e => {
					const {
						eventSchedule: t,
						language: n,
						onToggleSchedulePicker: o,
						postSchedule: r
					} = e;
					let i, a;
					if (t && t.submitTime !== g.i.Now) i = g.f, a = ((e, t) => {
						const n = Object(Ie.f)(e.startDate),
							o = n.toLocaleDateString(t, {
								month: "numeric",
								day: "numeric",
								year: "2-digit"
							}),
							r = n.toLocaleTimeString(t, {
								hour: "numeric",
								minute: "numeric"
							}).replace(" ", "");
						let i = "".concat(o, " ").concat(r);
						const a = Object(Ie.d)(e.timezoneName, +n);
						return a && (i += " ".concat(a.abbreviation)), s.a.createElement("span", null, s.a.createElement(ze.c, null, "Will automatically post at"), " ", s.a.createElement("time", {
							dateTime: e.startDate
						}, i))
					})(t, n);
					else {
						if (!r) return null;
						i = g.o, a = ((e, t) => {
							const n = Object(Ie.f)(e.submitDate),
								o = n.toLocaleDateString(t, {
									month: "numeric",
									day: "numeric"
								}),
								r = n.toLocaleTimeString(t, {
									hour: "numeric",
									minute: "numeric"
								}).replace(" ", "");
							let i = "".concat(o, " ").concat(r);
							const a = Object(Ie.d)(e.timezoneName, +n);
							a && (i += " ".concat(a.abbreviation));
							const c = e.recurrenceInfo ? s.a.createElement("span", null, s.a.createElement(Sa.a, {
								className: ka.a.replayIcon
							}), s.a.createElement(ze.c, null, "Recurring post template scheduled for")) : s.a.createElement(ze.c, null, "Post scheduled for");
							return s.a.createElement("span", null, c, " ", s.a.createElement("time", {
								dateTime: e.submitDate
							}, i))
						})(r, n)
					}
					return s.a.createElement(wa, null, a, s.a.createElement("button", {
						onClick: () => o(i)
					}, s.a.createElement(_a, {
						className: ka.a.pencilIcon
					})))
				}),
				Ma = n("./src/reddit/components/PostCreationForm/PostCreationFooter/index.m.less"),
				Ra = n.n(Ma);
			const Na = Te.a.div("Container", Ra.a);
			var La = e => s.a.createElement(Na, null, s.a.createElement(Pa, null), s.a.createElement(ja, {
					draftId: e.draftId
				})),
				Da = n("./src/reddit/featureFlags/profileCollections.ts"),
				Fa = n("./src/reddit/selectors/postCollection.ts"),
				Ba = n("./src/reddit/selectors/profile.ts"),
				Aa = n("./src/reddit/components/PostCreationForm/PostCreationHeader/index.m.less"),
				Ka = n.n(Aa);
			const Ua = Object(ne.e)("postCreation.createAPost"),
				Ha = Object(ne.e)("postCreation.createACrossPost"),
				Wa = Object(ne.e)("postCreation.editDraft"),
				Va = Object(ne.e)("postCreation.draft.entryButtonLabel"),
				za = Object(ne.e)("postCreation.collections.entryButtonLabel"),
				qa = Te.a.div("CreateLabel", Ka.a),
				Ga = Te.a.span("CountIndicator", Ka.a),
				Ja = Te.a.wrapped(Oe.i, "LinkButton", Ka.a),
				Za = Ja,
				Qa = Te.a.div("CreatePostHeader", Ka.a),
				Xa = Object(i.c)({
					canPostAsModerator: T.d,
					collectionsCount: e => {
						const t = Object(T.g)(e);
						let n = t.id;
						if (t.isProfile && Object(Da.a)(e)) {
							const o = Object(Ba.j)(e, {
								profileName: t.name
							});
							n = o && o.id
						}
						return n ? Object(Fa.u)(e, {
							subredditId: n
						}) : 0
					},
					destSubredditAboutInfo: T.f,
					draftsCount: I.j,
					isPending: T.Q,
					language: I.S
				});
			var Ya = Object(r.b)(Xa, e => ({
					showDraftsList: () => {
						e(L.p()), e(a.y(g.d))
					},
					showCollectionsList: () => {
						e(a.y(g.a))
					}
				}))(e => {
					const {
						canPostAsModerator: t,
						collectionsCount: n,
						destSubredditAboutInfo: o,
						draftsCount: r,
						isPending: i,
						language: a,
						showCollectionsList: c,
						showDraftsList: l,
						submissionType: d,
						submitMode: u
					} = e, m = d === p.Gb.CROSSPOST, h = m ? Ha(a) : Ua(a), b = t && o && o.collectionsEnabled;
					return s.a.createElement(Qa, null, s.a.createElement(qa, null, u === g.r.Draft ? Wa(a) : h), !m && s.a.createElement(s.a.Fragment, null, b && s.a.createElement(Za, {
						onClick: c
					}, za(a), s.a.createElement(Ga, null, n)), s.a.createElement(Ja, {
						disabled: i,
						onClick: l
					}, Va(a), s.a.createElement(Ga, null, r))))
				}),
				$a = n("./src/reddit/actions/polls.ts"),
				ec = n("./src/reddit/actions/postCreation/editorContent.ts"),
				tc = n("./src/reddit/components/Governance/PollHelpText/index.m.less"),
				nc = n.n(tc);
			const oc = Object(i.c)({
				language: I.S,
				subredditGovInfo: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(Ce.l)(e, {
						subredditId: n.id
					})
				},
				tokenName: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(Ce.o)(e, {
						subredditId: n.id
					})
				}
			});
			var sc = Object(r.b)(oc)((function(e) {
					const {
						language: t,
						subreddit: n,
						subredditGovInfo: r,
						tokenName: i
					} = e, a = r && r.polls ? r.polls.decisionThreshold : void 0;
					return s.a.createElement(o.Fragment, null, a && s.a.createElement(o.Fragment, null, s.a.createElement("div", {
						className: nc.a.decisionThreholdAmount
					}, s.a.createElement(ie.a, {
						className: nc.a.token,
						subredditId: n.id
					}), Object(se.b)(parseInt(a))), s.a.createElement("div", {
						className: nc.a.decisionThresholdTitle
					}, s.a.createElement(ze.c, null, "Decision Threshold"))), s.a.createElement("div", {
						className: nc.a.decisionThresholdExplanation
					}, Object(ne.a)(t, "polls.decisionThresholdExplanation", {
						tokenName: i
					})))
				})),
				rc = n("./src/reddit/actions/governance/index.ts"),
				ic = n("./src/lib/ntext/index.ts"),
				ac = n("./src/reddit/actions/tooltip.ts"),
				cc = n("./src/reddit/controls/Dropdown/index.tsx"),
				lc = n("./src/reddit/controls/Dropdown/Row.tsx"),
				dc = n("./src/reddit/controls/Sortable/index.tsx"),
				uc = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				pc = n("./src/reddit/icons/svgs/Grapple/index.tsx"),
				mc = n("./src/reddit/components/PollCreator/Option/index.m.less"),
				hc = n.n(mc);

			function bc(e) {
				return s.a.createElement("div", {
					className: Object(oe.a)(e.className, hc.a.container),
					style: {
						left: e.isDropTarget ? 16 : 0,
						opacity: gc(e),
						pointerEvents: e.isDisabled ? "none" : void 0
					}
				}, s.a.createElement(pc.a, {
					className: hc.a.grapple
				}), s.a.createElement("input", {
					className: hc.a.input,
					maxLength: 120,
					placeholder: "".concat(Object(b.c)("option"), " ").concat(e.index + 1),
					value: e.text,
					onBlur: e.onBlur,
					onChange: t => e.onTextChange(t.currentTarget.value),
					onFocus: e.onFocus
				}), e.removable && s.a.createElement(Fn.a, {
					className: hc.a.trash,
					onClick: e.onRemove
				}))
			}

			function gc(e) {
				return e.isDisabled ? .5 : e.isBeingDragged ? .25 : 1
			}
			var fc = n("./src/reddit/components/PollCreator/index.m.less"),
				xc = n.n(fc);
			const Cc = 2,
				Ec = 6,
				yc = 7,
				vc = 7,
				Oc = "poll-creation-voting-length";
			var jc;
			! function(e) {
				e.Options = "options", e.VotingLength = "votingLength"
			}(jc || (jc = {}));
			const Sc = Object(ut.a)(cc.a),
				Tc = Object(i.c)({
					isInPollsGA: uc.b,
					language: e => e.user.language,
					votingLengthDropdownIsOpen: e => e.tooltipId === Oc
				});
			class kc extends s.a.Component {
				constructor(e) {
					super(e), this.handleAddOption = e => () => {
						const {
							sendEvent: t
						} = this.props;
						e.options.length < 7 && (t(Object(O.m)()), this.props.onUpdatePoll(Object.assign({}, e, {
							options: e.options.concat(this.makeOption())
						})))
					}, this.handleBlur = () => this.inputFocused = !1, this.handleVotingLengthDropdownClick = () => {
						const {
							sendEvent: e,
							votingLengthDropdownIsOpen: t
						} = this.props;
						t || e(Object(O.n)()), this.props.onToggleVotingLengthDropdown()
					}, this.handleChangeVotingLength = e => t => {
						this.props.onUpdatePoll(Object.assign({}, e, {
							duration: t
						})), this.props.onToggleVotingLengthDropdown()
					}, this.handleFocus = () => this.inputFocused = !0, this.handleOptionTextChange = (e, t) => n => {
						const o = e.options.indexOf(t);
						this.props.onUpdatePoll(Object.assign({}, e, {
							options: e.options.slice(0, o).concat({
								text: n
							}).concat(e.options.slice(o + 1))
						}))
					}, this.handleRemoveOption = (e, t) => () => {
						this.props.onUpdatePoll(Object.assign({}, e, {
							options: e.options.filter(e => e !== t)
						}))
					}, this.makeOption = () => ({
						text: ""
					}), this.makeDefaultPoll = () => {
						const {
							isInPollsGA: e
						} = this.props;
						return {
							duration: e ? 3 * p.w : p.w,
							options: Array.from({
								length: Cc
							}).map(this.makeOption)
						}
					}, this.preventDrag = e => {
						this.inputFocused && (e.preventDefault(), e.stopPropagation())
					}, this.inputFocused = !1
				}
				componentDidMount() {
					document.addEventListener("dragstart", this.preventDrag), document.addEventListener("drop", this.preventDrag), document.addEventListener("dragover", this.preventDrag)
				}
				componentWillUnmount() {
					document.removeEventListener("dragstart", this.preventDrag), document.removeEventListener("drop", this.preventDrag), document.removeEventListener("dragover", this.preventDrag)
				}
				sectionIsDisabled(e) {
					return this.props.disabledSections && this.props.disabledSections.includes(e)
				}
				render() {
					const {
						className: e,
						poll: t = this.makeDefaultPoll()
					} = this.props;
					return s.a.createElement("div", {
						className: Object(oe.a)(e, xc.a.container)
					}, s.a.createElement("div", {
						className: xc.a.options
					}, this.renderPollCreator(t), this.renderControls(t)), s.a.createElement("div", {
						className: xc.a.help
					}, this.props.hintTextComponent))
				}
				renderPollCreator(e) {
					const {
						language: t
					} = this.props, n = this.sectionIsDisabled(jc.Options);
					return s.a.createElement(dc.a, {
						render: (o, r, i, a, c) => s.a.createElement(bc, {
							className: xc.a.option,
							index: r,
							isBeingDragged: i,
							isDisabled: n,
							isDropTarget: a && c,
							language: t,
							option: o,
							removable: r > 1,
							text: o.text,
							onBlur: this.handleBlur,
							onFocus: this.handleFocus,
							onTextChange: this.handleOptionTextChange(e, o),
							onRemove: this.handleRemoveOption(e, o)
						}),
						values: e.options,
						onDrop: (t, n, o) => this.props.onUpdatePoll(Object.assign({}, e, {
							options: o
						}))
					})
				}
				renderControls(e) {
					const {
						isInPollsGA: t,
						language: n
					} = this.props, o = e.options.length >= (t ? Ec : yc) || this.sectionIsDisabled(jc.Options), r = this.sectionIsDisabled(jc.VotingLength);
					return s.a.createElement("div", {
						className: xc.a.controls
					}, s.a.createElement(Oe.n, {
						className: xc.a.addButton,
						disabled: o,
						onClick: this.handleAddOption(e)
					}, s.a.createElement(ze.c, null, "add option")), s.a.createElement("div", {
						className: Object(oe.a)(xc.a.votingLengthSelector, {
							[xc.a.votingLengthSelector__disabled]: !!r
						})
					}, s.a.createElement("div", {
						className: xc.a.votingLengthTitleText
					}, s.a.createElement(ze.c, null, "Voting length:")), s.a.createElement("div", {
						className: xc.a.votingLengthDropdownContainer,
						id: Oc
					}, s.a.createElement("div", {
						className: xc.a.votingLengthDisplay,
						onClick: this.handleVotingLengthDropdownClick
					}, s.a.createElement("div", null, Object(ic.a)(Math.floor(e.duration / p.w), Object(ne.a)(n, "polls.votingDaysSingular"), Object(ne.a)(n, "polls.votingDaysPlural"))), s.a.createElement(Jt.a, {
						className: xc.a.votingLengthCaret
					})), this.renderVotingLengthDropdown(e))))
				}
				renderVotingLengthDropdown(e) {
					const {
						language: t,
						votingLengthDropdownIsOpen: n
					} = this.props, o = this.handleChangeVotingLength(e);
					return s.a.createElement(Sc, {
						className: xc.a.votingLengthDropdown,
						tooltipId: Oc,
						isOpen: n
					}, Array.from({
						length: vc
					}).map((n, r) => {
						const i = r + 1;
						return s.a.createElement(lc.b, {
							"data-redditstyle": !0,
							key: r,
							index: r,
							displayText: Object(ic.a)(i, Object(ne.a)(t, "polls.votingDaysSingular"), Object(ne.a)(t, "polls.votingDaysPlural")),
							isSelected: Math.floor(e.duration / p.w) === i,
							onClick: () => o(i * p.w)
						})
					}))
				}
			}
			var wc = Object(r.b)(Tc, e => ({
					onToggleVotingLengthDropdown: () => e(Object(ac.g)({
						tooltipId: Oc
					}))
				}))(Object(zn.b)(kc)),
				_c = n("./src/reddit/components/Governance/ProposalTemplates/Generic/index.m.less"),
				Ic = n.n(_c);
			const Pc = [{
				text: "Yes"
			}, {
				text: "No"
			}];

			function Mc(e) {
				const t = {
					duration: e.poll ? e.poll.duration : p.w,
					options: e.options || Pc
				};
				return s.a.createElement("div", {
					className: Object(oe.a)(Ic.a.container, e.className)
				}, s.a.createElement("div", {
					className: Ic.a.topline
				}, e.children.map(e => "string" == typeof e ? s.a.createElement("div", {
					className: Ic.a.text
				}, e) : e)), s.a.createElement(wc, {
					disabledSections: [jc.Options],
					hintTextComponent: s.a.createElement("div", {
						className: Ic.a.hintText
					}, s.a.createElement(sc, {
						subreddit: e.subreddit
					})),
					poll: t,
					onUpdatePoll: e.onUpdatePoll
				}))
			}
			var Rc = n("./src/reddit/controls/FormFields/index.tsx"),
				Nc = n("./src/reddit/models/Poll/index.ts"),
				Lc = n("./src/reddit/components/Governance/ProposalTemplates/Spinoff/index.m.less"),
				Dc = n.n(Lc);
			const Fc = 3,
				Bc = 20,
				Ac = /[^(\w|_)]/g;
			const Kc = Object(i.c)({
				newSubredditName: e => e.creations.formData.newSubreddit
			});
			var Uc = Object(r.b)(Kc, e => ({
					onSubredditNameChange: t => e(Object(rc.a)({
						subredditName: t
					}))
				}))((function(e) {
					return s.a.createElement(Mc, {
						className: e.className,
						options: Nc.f[Nc.a.Spinoff](e.newSubredditName),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, s.a.createElement(ze.c, null, "Should we spin-off to"), s.a.createElement(Rc.c, {
						redditStyle: !0,
						className: Dc.a.input,
						label: Object(b.c)("subreddit name"),
						max: Bc,
						min: Fc,
						type: "text",
						value: e.newSubredditName,
						onChange: t => {
							const n = t.currentTarget.value.replace(Ac, "");
							e.onSubredditNameChange(n)
						}
					}), s.a.createElement(ze.c, null, "?"))
				})),
				Hc = n("./src/reddit/components/Governance/ProposalTemplates/TopModReplacement/index.m.less"),
				Wc = n.n(Hc);
			const Vc = 20;
			const zc = Object(i.c)({
				topMod: e => e.creations.formData.newTopMod
			});
			var qc = Object(r.b)(zc, e => ({
					onUsernameChange: t => e(Object(rc.b)({
						username: t
					}))
				}))((function(e) {
					return s.a.createElement(Mc, {
						className: e.className,
						options: Nc.f[Nc.a.ReplaceTopMod](),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, s.a.createElement(ze.c, null, "Should"), s.a.createElement(Rc.c, {
						redditStyle: !0,
						className: Wc.a.input,
						label: Object(b.c)("username"),
						max: Vc,
						type: "text",
						value: e.topMod,
						onChange: t => e.onUsernameChange(t.currentTarget.value)
					}), s.a.createElement(ze.c, null, "become the top moderator?"))
				})),
				Gc = n("./src/reddit/icons/svgs/Info/index.tsx"),
				Jc = n("./src/reddit/components/PollCreator/DefaultHintText/index.m.less"),
				Zc = n.n(Jc);
			const Qc = [e => Object(ne.a)(e, "polls.help1"), e => Object(ne.a)(e, "polls.help2"), e => Object(ne.a)(e, "polls.help3"), e => Object(ne.a)(e, "polls.help4")];

			function Xc(e) {
				return s.a.createElement(o.Fragment, null, s.a.createElement("div", {
					className: Zc.a.helpTitle
				}, s.a.createElement(Gc.a, {
					className: Zc.a.infoIcon
				}), s.a.createElement("div", {
					className: Zc.a.helpTitleText
				}, s.a.createElement(ze.c, null, "Tips on Better Polls"))), s.a.createElement("ol", {
					className: Zc.a.helpTextList
				}, Qc.map(t => s.a.createElement("li", {
					className: Zc.a.helpTextItem
				}, t(e.language)))))
			}
			var Yc = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				$c = n("./src/reddit/components/RichTextEditor/index.tsx"),
				el = n("./src/reddit/featureFlags/component.tsx"),
				tl = n("./src/reddit/helpers/richTextEditor/index.ts"),
				nl = n("./src/reddit/models/PostRequirements/index.ts"),
				ol = n("./src/reddit/featureFlags/index.ts"),
				sl = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				rl = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				il = n("./src/reddit/components/PostCreationForm/PostEditor/GovTypeSelector/index.m.less"),
				al = n.n(il);
			const cl = Object(ut.a)(cc.a),
				ll = [{
					Icon: rl.a,
					showNewTag: !0,
					text: e => Object(ne.a)(e, "gov.types.general"),
					type: null
				}, {
					Icon: sl.a,
					showNewTag: !1,
					text: e => Object(ne.a)(e, "gov.types.gov"),
					type: Nc.a.GovGeneric
				}, {
					Icon: sl.a,
					showNewTag: !1,
					text: e => Object(ne.a)(e, "gov.types.spinoff"),
					type: Nc.a.Spinoff
				}],
				dl = "gov-type-selector-dropdown";
			const ul = Object(i.c)({
				dropdownIsOpen: e => e.tooltipId === dl,
				govType: e => e.creations.formData.govType,
				language: e => e.user.language,
				spinoffEnabled: ol.d.spSpinoffs
			});
			var pl = Object(r.b)(ul, e => ({
					onChangeGovType: (t, n) => {
						e(Object(a.k)({
							oldType: n,
							type: t
						})), e(Object(ac.h)())
					},
					onToggleDropdown: () => e(Object(ac.g)({
						tooltipId: dl
					}))
				}))((function(e) {
					const t = function(e, t) {
							return ll.filter(e => {
								let {
									type: n
								} = e;
								return !(!t.spinoffEnabled && n === Nc.a.Spinoff)
							})
						}(0, e),
						n = t.find(t => t.type === e.govType) || t[0];
					return s.a.createElement("div", {
						className: Object(oe.a)(al.a.container, e.className)
					}, s.a.createElement("div", {
						className: al.a.currentSelection,
						id: dl,
						onClick: e.onToggleDropdown
					}, s.a.createElement(n.Icon, {
						className: al.a.pollTypeIcon
					}), s.a.createElement("div", {
						className: al.a.text
					}, n.text(e.language)), s.a.createElement(Jt.a, {
						className: al.a.dropdownIcon
					}), n.showNewTag && s.a.createElement("div", {
						className: al.a.newLabel
					}, s.a.createElement(ze.c, null, "new"))), s.a.createElement(cl, {
						className: al.a.dropdown,
						tooltipId: dl,
						isOpen: e.dropdownIsOpen
					}, t.map((t, o) => s.a.createElement(lc.b, {
						"data-redditstyle": !0,
						displayText: t.text(e.language),
						isSelected: t.type === n.type,
						key: o,
						onClick: () => e.onChangeGovType(t.type, e.govType)
					}))))
				})),
				ml = n("./src/reddit/components/PostCreationForm/PostEditor/index.m.less"),
				hl = n.n(ml);
			const bl = Object(ne.e)("postCreation.rtfPlaceholderOptional"),
				gl = Object(ne.e)("postCreation.rtfPlaceholderRequired"),
				fl = Object(el.a)("spGovPolls", pl),
				xl = (e, t) => !e && t && t.bodyRestrictionPolicy === nl.a.Required,
				Cl = Object(i.c)({
					canPostAsModerator: T.d,
					destSubreddit: T.g,
					draft: k.d,
					editorMode: T.m,
					govType: e => e.creations.formData.govType,
					language: I.S,
					markdownBody: T.J,
					pending: T.Q,
					poll: e => e.creations.formData.polls || void 0,
					postCreationFieldErrors: $t,
					postRequirements: T.db,
					rteState: T.V,
					shouldAllowBodyText: T.X,
					subreddit: v.q
				}),
				El = Object(r.b)(Cl, (e, t) => {
					let {
						onChange: n,
						onPostFieldValidation: o,
						pageLayer: s
					} = t;
					return {
						onBlur: () => {
							o(e(Ue(p.kb.BODY, s)))
						},
						onFocus: () => e((e, t) => O.k(t(), g.k.CLICK, g.l.BODY)),
						onRTEStateChange: (t, o) => {
							e(a.f({
								rteState: t,
								isContentChanged: o
							})), n()
						},
						onToggleEditorMode: (t, n) => e(ec.d(g.g.POST_CREATION, t, n)),
						onTrackToolbarClick: (t, n) => e((e, o) => O.x(o(), t, n)),
						onUpdatePoll: t => e(Object($a.b)(t))
					}
				});
			class yl extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {}, this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onToggleEditorMode = async (e, t) => {
						await this.props.onToggleEditorMode(e, t), e === g.h.RICH_TEXT ? this.rteRef && this.rteRef.focus() : this.markdownEditorRef && this.markdownEditorRef.focus()
					}, this.setRteRef = e => this.rteRef = e, this.setMarkdownEditorRef = e => this.markdownEditorRef = e
				}
				renderEditor() {
					const {
						canPostAsModerator: e,
						destSubreddit: t,
						displayPollCreation: n,
						editorMode: o,
						isScheduledPost: r,
						language: i,
						markdownBody: a,
						pending: c,
						postCreationFieldErrors: l,
						postRequirements: d,
						rteState: u,
						subreddit: m
					} = this.props, h = l[p.kb.BODY].length > 0, b = !!m && m.isNSFW, f = xl(e, d) ? gl(i) : bl(i);
					return o === g.h.RICH_TEXT ? s.a.createElement($c.a, {
						allowMediaUploads: !b && !r,
						focusableContentRTEClassName: Object(oe.a)(hl.a.focusableContent, {
							[hl.a.mHasError]: h,
							[hl.a.mPollBorder]: !!n
						}),
						destSubreddit: t,
						editorType: tl.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: u,
						language: i,
						onBlur: this.props.onBlur,
						onChange: this.props.onRTEStateChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						onSubmit: this.props.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: f,
						readOnly: c,
						rteRef: this.setRteRef,
						trackToolbarClick: this.props.onTrackToolbarClick
					}) : s.a.createElement(Yc.a, {
						focusableContentMarkdownClassName: Object(oe.a)(hl.a.focusableContent, {
							[hl.a.mHasError]: h,
							[hl.a.mPollBorder]: !!n
						}),
						language: i,
						initialHeight: this.state.editorHeight,
						instanceRef: this.setMarkdownEditorRef,
						onBlur: this.props.onBlur,
						onChange: this.props.onChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						value: a,
						onSubmit: this.props.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: f
					})
				}
				render() {
					const {
						displayPollCreation: e,
						postCreationFieldErrors: t,
						shouldAllowBodyText: n,
						subreddit: o
					} = this.props;
					return s.a.createElement("div", null, n && this.renderEditor(), n && e && s.a.createElement("div", {
						className: hl.a.pollCreator
					}, s.a.createElement(fl, {
						className: hl.a.govToggle
					}), this.govType()), s.a.createElement(ue.a, {
						errorModalTitle: o ? Object(Io.b)(o.name) : void 0,
						messages: t[p.kb.BODY]
					}))
				}
				govType() {
					const {
						govType: e,
						language: t,
						poll: n,
						subreddit: o
					} = this.props;
					switch (e) {
						case Nc.a.ReplaceTopMod:
							return o ? s.a.createElement(qc, {
								poll: n,
								subreddit: o,
								onUpdatePoll: this.props.onUpdatePoll
							}) : s.a.createElement(wc, {
								hintTextComponent: s.a.createElement(Xc, {
									language: t
								}),
								poll: n,
								onUpdatePoll: this.props.onUpdatePoll
							});
						case Nc.a.GovGeneric:
							return s.a.createElement(wc, {
								hintTextComponent: o ? s.a.createElement(sc, {
									subreddit: o
								}) : s.a.createElement(Xc, {
									language: t
								}),
								poll: n,
								onUpdatePoll: this.props.onUpdatePoll
							});
						case Nc.a.Spinoff:
							return o ? s.a.createElement(Uc, {
								poll: n,
								subreddit: o,
								onUpdatePoll: this.props.onUpdatePoll
							}) : s.a.createElement(wc, {
								hintTextComponent: s.a.createElement(Xc, {
									language: t
								}),
								poll: n,
								onUpdatePoll: this.props.onUpdatePoll
							});
						case Nc.a.GA:
						case null:
							return s.a.createElement(wc, {
								hintTextComponent: s.a.createElement(Xc, {
									language: t
								}),
								poll: n,
								onUpdatePoll: this.props.onUpdatePoll
							})
					}
				}
			}
			var vl = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				})(El(yl)),
				Ol = n("./src/reddit/components/PostCreationForm/PostTitle/index.m.less"),
				jl = n.n(Ol);
			const Sl = Object(ne.e)("postCreation.giveATitle"),
				Tl = Object(i.c)({
					canPostAsModerator: T.d,
					disableTitleEdits: e => e.creations.formData.govType === Nc.a.ReplaceTopMod || e.creations.formData.govType === Nc.a.Spinoff,
					language: I.S,
					pending: T.Q,
					postCreationFieldErrors: $t,
					postRequirements: T.db,
					shouldAllowBodyText: T.X,
					submissionType: T.a,
					subreddit: v.q,
					title: T.eb
				}),
				kl = Object(r.b)(Tl, (e, t) => {
					let {
						onChange: n,
						onPostFieldValidation: o,
						pageLayer: s
					} = t;
					return {
						onBlur: () => {
							o(e(Ue(p.kb.TITLE, s)))
						},
						onChange: t => {
							e(a.i(t)), n(t)
						},
						onInputFocus: () => e((e, t) => O.k(t(), g.k.CLICK, g.l.TITLE))
					}
				});
			var wl = Object(v.t)()(kl(e => {
					const {
						canPostAsModerator: t,
						postRequirements: n,
						postCreationFieldErrors: o,
						subreddit: r
					} = e, i = e.submissionType === p.Gb.POST && !e.shouldAllowBodyText, a = o[p.kb.TITLE].length > 0, c = t ? it.f : n && n.titleTextMaxLength || it.f;
					return s.a.createElement("div", {
						className: jl.a.container
					}, s.a.createElement("div", {
						className: jl.a.inputWrapper
					}, s.a.createElement(ur.a, {
						className: Object(oe.a)(jl.a.PostTitleInput, {
							[jl.a.mHasError]: a
						}),
						disabled: e.disableTitleEdits,
						maxLength: c,
						minHeight: i ? 92 : void 0,
						onBlur: e.onBlur,
						onFocus: e.onInputFocus,
						onKeyDown: e.onKeyDown,
						onValueChange: e.onChange,
						placeholder: Sl(e.language),
						readOnly: e.pending,
						value: e.title
					}), s.a.createElement("div", {
						className: jl.a.charsCounter
					}, e.title.length, "/", c)), s.a.createElement(ue.a, {
						errorModalTitle: r ? Object(Io.b)(r.name) : void 0,
						messages: o[p.kb.TITLE]
					}))
				})),
				_l = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx");
			const Il = "g-recaptcha",
				Pl = "image",
				Ml = {
					COMPACT: "compact",
					NORMAL: "normal"
				},
				Rl = () => new Promise(e => {
					if (window.grecaptcha) return e(window.grecaptcha);
					window.grecaptchaOnLoad = () => e(window.grecaptcha);
					const t = document.createElement("script");
					t.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaOnLoad&render=explicit", document.body.appendChild(t)
				});
			class Nl extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					const {
						callback: e,
						size: t,
						type: n
					} = this.props;
					Rl().then(o => {
						o.render(Il, {
							callback: e,
							type: n,
							sitekey: rt.a.recaptchaSitekey,
							size: t || Ml.COMPACT
						})
					})
				}
				componentWillReceiveProps(e) {
					this.props.submissionPending && !e.submissionPending && Rl().then(e => {
						e.reset()
					})
				}
				render() {
					return s.a.createElement("div", {
						className: "Recaptcha",
						id: Il
					})
				}
			}
			var Ll = n("./src/reddit/components/PostCreationForm/RecaptchaOverlay/index.m.less"),
				Dl = n.n(Ll);
			const Fl = Object(ne.e)("postCreation.recaptchaRequired"),
				Bl = Te.a.div("OverlayWrapper", Dl.a),
				Al = Te.a.div("OverlayContent", Dl.a),
				Kl = Te.a.div("ExplanationText", Dl.a),
				Ul = Object(i.c)({
					language: I.S
				});
			var Hl = Object(r.b)(Ul, (e, t) => ({
				onChange: n => {
					e(a.g(n)), t.callback(n)
				}
			}))(e => s.a.createElement(Bl, null, s.a.createElement(Al, null, s.a.createElement(Kl, null, Fl(e.language)), s.a.createElement(Nl, {
				submissionPending: !0,
				callback: e.onChange,
				size: Ml.NORMAL,
				type: Pl
			}))));
			const Wl = "POST_CREATION__CONFIRM_SAVE_DRAFT_WITH_LIMITATIONS",
				Vl = "postCreation.prompt.draftsLimitations";
			var zl = e => {
				const {
					language: t,
					hasEventSchedule: n,
					hasRichPostMedia: o
				} = e;
				let r = "mediaAndSchedule";
				return o && !n ? r = "mediaOnly" : !o && n && (r = "scheduleOnly"), s.a.createElement(W.a, {
					bodyText: Object(ne.a)(t, "".concat(Vl, ".body.").concat(r)),
					onClose: e.onCancel,
					onPrimaryAction: e.onConfirm,
					onSecondaryAction: e.onCancel,
					primaryButtonText: Object(ne.a)(t, "".concat(Vl, ".confirm")),
					secondaryButtonText: Object(b.c)("Cancel"),
					titleText: Object(ne.a)(t, "".concat(Vl, ".title"))
				})
			};
			const ql = "POST_CREATION__CONFIRM_SCHEDULE_POST_WITH_LIMITATIONS";
			var Gl = e => s.a.createElement(W.a, {
					bodyText: H.fbt._("Scheduled posts do not support media, all other information will be included", null, {
						hk: "IzcGD"
					}),
					onClose: e.onCancel,
					onPrimaryAction: e.onConfirm,
					onSecondaryAction: e.onCancel,
					primaryButtonText: H.fbt._("Save", null, {
						hk: "4F4rN5"
					}),
					secondaryButtonText: H.fbt._("Cancel", null, {
						hk: "1cdFKJ"
					}),
					titleText: H.fbt._("Schedule post", null, {
						hk: "1O61PV"
					})
				}),
				Jl = n("./src/reddit/components/PostCreationForm/SubredditChangePrompt/index.m.less"),
				Zl = n.n(Jl);
			const Ql = {
				[g.q.ImageWillBeRemoved]: {
					removePromptTitle: Object(ne.e)("postCreation.imageRemovePromptTitle"),
					removeCancel: Object(ne.e)("postCreation.subredditChange.imageRemovePrompt.buttons.cancel"),
					removeConfirm: Object(ne.e)("postCreation.subredditChange.imageRemovePrompt.buttons.confirm"),
					details: (e, t) => Object(ne.a)(e, "postCreation.subredditChange.imageRemovePrompt.details", {
						subredditName: t
					})
				},
				[g.q.VideoWillBeRemovedMediaNotAllowed]: {
					removePromptTitle: Object(ne.e)("postCreation.videoRemovePromptTitle"),
					removeConfirm: Object(ne.e)("postCreation.subredditChange.videoRemovePrompt.buttons.confirm"),
					removeCancel: Object(ne.e)("postCreation.subredditChange.videoRemovePrompt.buttons.cancel"),
					details: (e, t) => Object(ne.a)(e, "postCreation.subredditChange.videoRemovePrompt.mediaNotAllowed", {
						subredditName: t
					})
				}
			};
			Ql[g.q.VideoWillBeRemovedTooLongForGif] = Object.assign({}, Ql[g.q.VideoWillBeRemovedMediaNotAllowed], {
				details: (e, t) => Object(ne.a)(e, "postCreation.subredditChange.videoRemovePrompt.tooLongVideoGif", {
					subredditName: t
				})
			});
			const Xl = Te.a.div("Wrapper", Zl.a),
				Yl = Te.a.wrapped(ge.a, "TitleRow", Zl.a),
				$l = Te.a.div("DetailsContainer", Zl.a),
				ed = Te.a.wrapped(ge.a, "ButtonRow", Zl.a),
				td = Te.a.wrapped(Oe.f, "CancelButton", Zl.a),
				nd = Te.a.wrapped(Oe.i, "ConfirmButton", Zl.a);
			var od, sd = Object(Ho.a)(e => {
					const {
						promptType: t,
						language: n,
						nextSubreddit: o
					} = e, r = Ql[t];
					return s.a.createElement(Xl, null, s.a.createElement(Yl, null, r.removePromptTitle(n)), s.a.createElement($l, null, r.details(n, o.name)), s.a.createElement(ed, null, s.a.createElement(nd, {
						onClick: e.onConfirmed
					}, r.removeConfirm(n)), s.a.createElement(td, {
						onClick: e.onCanceled
					}, r.removeCancel(n))))
				}),
				rd = n("./node_modules/lodash/times.js"),
				id = n.n(rd),
				ad = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				cd = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				ld = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				dd = n("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				ud = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx");
			! function(e) {
				e.LOW = "low", e.MEDIUM = "medium", e.HIGH = "high"
			}(od || (od = {}));
			var pd = n("./src/reddit/components/PostCreationForm/SubredditDifficultyWarning/index.m.less"),
				md = n.n(pd);
			const hd = 720,
				bd = e => {
					if (!e) return;
					return e.subreddit && e.subreddit.difficultyScore || e.difficultyScore || void 0
				},
				gd = e => e > .91 ? od.LOW : e >= .65 ? od.MEDIUM : od.HIGH,
				fd = e => {
					const {
						sub: t
					} = e, n = t.subreddit, o = t.difficultyScore ? t.difficultyScore : t.subreddit.difficultyScore, r = o ? (e => e > .91 ? "easy" : e >= .65 ? od.MEDIUM : od.HIGH)(o) : "easy", i = n.styles.icon || n.styles.legacyIcon && n.styles.legacyIcon.url;
					return s.a.createElement(ad.a, {
						onClick: () => e.onTrackSuggestedSubredditClick(r, n.id, n.name),
						to: "/r/".concat(n.name, "/submit")
					}, s.a.createElement(ud.a, {
						className: e.className
					}, s.a.createElement("div", {
						className: md.a.iconContainer
					}, i ? s.a.createElement("img", {
						alt: Object(b.c)("".concat(Object(b.b)("subName", n.name), " icon")),
						className: md.a.subredditIcon,
						src: i || ""
					}) : s.a.createElement(ld.a, {
						className: md.a.planetIcon
					})), s.a.createElement("div", {
						className: md.a.subInfoContainer
					}, Object(Io.b)(n.name), s.a.createElement("div", {
						className: md.a.rateInfoContainer
					}, Object(b.c)("".concat(Object(b.b)("numMembers", Object(se.b)(n.subscribersCount, !0)), " members"))))))
				},
				xd = e => s.a.createElement("div", {
					className: Object(oe.a)(md.a.removalRateAlert, e.className)
				}, s.a.createElement(dd.a, {
					className: Object(oe.a)(md.a.alertIcon, {
						[md.a.hardColor]: e.removalRate === od.HIGH
					})
				}), e.warningString),
				Cd = e => s.a.createElement("button", {
					className: e.className,
					onClick: e.scroll
				}, s.a.createElement(cd.a, {
					className: md.a.chevronIcon
				}), s.a.createElement(cd.a, {
					className: md.a.chevronIcon
				}));
			class Ed extends s.a.Component {
				constructor(e) {
					super(e), this.cardContainerRef = s.a.createRef(), this.setShowState = () => this.setState({
						showLeftNav: this.shouldShowLeftNav(),
						showRightNav: this.shouldShowRightNav()
					}), this.shouldShowLeftNav = () => !(!this.cardContainerRef.current || 0 === this.cardContainerRef.current.scrollLeft), this.shouldShowRightNav = () => {
						const e = this.cardContainerRef.current;
						return !!e && e.clientWidth + Math.round(e.scrollLeft) < e.scrollWidth
					}, this.scroll = e => {
						this.cardContainerRef.current && this.cardContainerRef.current.scrollBy(e, 0)
					}, this.scrollLeft = () => this.scroll(-hd), this.scrollRight = () => this.scroll(hd), this.state = {
						showLeftNav: !1,
						showRightNav: !1
					}
				}
				componentDidMount() {
					this.setShowState()
				}
				render() {
					const {
						difficultyScore: e,
						experimentVariant: t,
						relatedSubreddits: n
					} = this.props, o = gd(e), r = n ? n.filter(t => {
						const n = bd(t);
						return n && n > e
					}) : n, i = Object(j.c)(t), a = Object(j.d)(t), c = Object(j.a)(t), l = Object(j.b)(t), d = r && r.length > 0 && (c || l);
					let u;
					if (a || l) u = o === od.HIGH ? Object(b.c)("Posts in this community have very specific requirements. Make sure you read the rules before you post.") : Object(b.c)("Most posts are accepted in this community, but make sure you read the rules before you post.");
					else if (i || c) {
						const e = o === od.HIGH ? "very " : "",
							t = o === od.HIGH ? "strictly" : "regularly";
						u = Object(b.c)("This is a ".concat(Object(b.b)("hardString", e), "popular community whose rules are ").concat(Object(b.b)("strictString", t), " enforced. Please read the community rules to avoid post removal."))
					}
					return d && r ? s.a.createElement("div", {
						className: md.a.removalRateCard
					}, s.a.createElement(xd, {
						className: md.a.alertContainer,
						removalRate: o,
						warningString: u
					}), s.a.createElement("div", {
						className: md.a.similarString
					}, Object(b.c)("Similar communities to post in")), s.a.createElement("div", {
						className: md.a.cardContainer,
						ref: this.cardContainerRef,
						onScroll: this.setShowState
					}, this.state.showLeftNav && s.a.createElement(Cd, {
						className: md.a.navLeft,
						scroll: this.scrollLeft
					}), id()(Math.min(r.length, 9), e => {
						if (r[e] && r[e].subreddit) return s.a.createElement(fd, {
							className: md.a.SubredditCard,
							key: r[e].subreddit.name,
							onTrackSuggestedSubredditClick: this.props.onTrackSuggestedSubredditClick,
							sub: r[e]
						})
					}), this.state.showRightNav && s.a.createElement(Cd, {
						className: md.a.navRight,
						scroll: this.scrollRight
					}))) : s.a.createElement(xd, {
						removalRate: o,
						warningString: u
					})
				}
			}
			var yd = Ed,
				vd = n("./src/lib/filterQueryParams/index.ts"),
				Od = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				jd = n("./src/reddit/icons/svgs/Media/index.tsx"),
				Sd = n("./src/reddit/components/PostCreationForm/Tabs/index.m.less"),
				Td = n.n(Sd);
			const kd = Object(ne.e)("postCreation.imagePostTab"),
				wd = Object(ne.e)("postCreation.linkPostTab"),
				_d = Object(ne.e)("postCreation.mediaPostTab"),
				Id = Object(ne.e)("polls.createPageButton"),
				Pd = Object(ne.e)("postCreation.postTab"),
				Md = Object(ne.e)("postCreation.videoPostTab"),
				Rd = e => Te.a.wrapped(e, "Component", Td.a),
				Nd = Rd(Od.a),
				Ld = Rd(jd.a),
				Dd = Rd(rl.a),
				Fd = Rd(e => s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M15.6498441,5.62718315 L4.38195636,5.62718315 C4.0364078,5.62718315 3.75596259,5.34673795 3.75596259,5.00118939 C3.75596259,4.65564083 4.0364078,4.37519562 4.38195636,4.37519562 L15.6498441,4.37519562 C15.9953927,4.37519562 16.2758379,4.65564083 16.2758379,5.00118939 C16.2758379,5.34673795 15.9953927,5.62718315 15.6498441,5.62718315 M15.6498441,9.38314574 L4.38195636,9.38314574 C4.0364078,9.38314574 3.75596259,9.10270054 3.75596259,8.75715198 C3.75596259,8.41160342 4.0364078,8.13115821 4.38195636,8.13115821 L15.6498441,8.13115821 C15.9953927,8.13115821 16.2758379,8.41160342 16.2758379,8.75715198 C16.2758379,9.10270054 15.9953927,9.38314574 15.6498441,9.38314574 M13.1458691,13.1391083 L4.38195636,13.1391083 C4.0364078,13.1391083 3.75596259,12.8586631 3.75596259,12.5131146 C3.75596259,12.167566 4.0364078,11.8871208 4.38195636,11.8871208 L13.1458691,11.8871208 C13.4914176,11.8871208 13.7718628,12.167566 13.7718628,12.5131146 C13.7718628,12.8586631 13.4914176,13.1391083 13.1458691,13.1391083 M17.6104566,0.000751192518 L2.42134388,0.000751192518 C1.08547319,0.000751192518 0,1.08622438 0,2.42084309 L0,17.5811601 C0,18.4174878 0.423171785,19.1837041 1.13054474,19.6306637 C1.52116485,19.8748012 1.96061247,20 2.410076,20 C2.77440437,20 3.14624466,19.9173688 3.49805316,19.7470985 L7.81490616,17.5210647 L17.5278254,17.5210647 C18.8611921,17.5210647 20.0318005,16.3504563 20.0318005,15.0170896 L20.0318005,2.42084309 C20.0318005,1.08622438 18.9463273,0.000751192518 17.6104566,0.000751192518"
				})))),
				Bd = Te.a.div("Container", Td.a),
				Ad = e => s.a.createElement("button", {
					className: Object(oe.a)(Td.a.Tab, e.className, {
						[Td.a.isActive]: e.active
					}),
					disabled: e.disabled,
					onClick: e.onClick
				}, e.children),
				Kd = Object(i.a)(T.d, T.g, T.G, T.Q, v.q, (e, t, n, o, s) => {
					const {
						images: r = !0,
						links: i = !0,
						text: a = !0,
						videos: c = !0,
						polls: l = !0
					} = t.allowedPostTypes || {}, d = !!s && s.isNSFW;
					return {
						link: o || !i,
						media: !c && !r && !e || o || d || n,
						post: !a && !e || o,
						poll: !l && !e
					}
				}),
				Ud = Object(i.c)({
					canCreatePoll: (e, t) => {
						const n = Object(v.m)(e, t);
						return !!n && Object(Ce.h)(e, {
							subredditId: n
						})
					},
					canPostAsModerator: T.d,
					destSubreddit: T.g,
					govType: e => e.creations.formData.govType,
					isTabsDisabled: Kd,
					language: I.S,
					pending: T.Q,
					submissionType: T.a,
					subreddit: v.q
				}),
				Hd = Object(r.b)(Ud, (e, t) => ({
					onChange: (n, o) => {
						e(a.h({
							submissionType: n,
							extra: o
						})), e((e, t) => O.p(t(), n)), e(a.w(n === p.Gb.POLL)), ((e, t, n) => {
							if (!t) return;
							const o = Object(vd.a)(t.url, n);
							t.url !== o && e(Object(u.c)(o))
						})(e, t.pageLayer, ["url", "media", "onlyTitle", "text", "selftext"])
					}
				}));
			class Wd extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostTabClick = () => {
						this.props.isTabsDisabled.post || this.props.onChange(p.Gb.POST, {
							govType: this.props.govType
						})
					}, this.onMediaTabClick = () => {
						this.props.isTabsDisabled.media || this.props.onChange(p.Gb.MEDIA, {
							govType: this.props.govType
						})
					}, this.onLinkTabClick = () => {
						this.props.isTabsDisabled.link || this.props.onChange(p.Gb.LINK_ONLY, {
							govType: this.props.govType
						})
					}, this.onPollTabClick = () => {
						this.props.onChange(p.Gb.POLL, {
							govType: this.props.govType
						})
					}
				}
				render() {
					const {
						canCreatePoll: e,
						destSubreddit: t,
						isTabsDisabled: n,
						language: o,
						submissionType: r
					} = this.props, {
						name: i = "",
						allowedPostTypes: a
					} = t, {
						images: c = !0,
						videos: l = !0
					} = a || {};
					let d = _d(o);
					return c && !l ? d = kd(o) : l && !c && (d = Md(o)), s.a.createElement(Bd, null, s.a.createElement(ge.a, null, s.a.createElement(Ad, {
						active: r === p.Gb.POST,
						disabled: n.post,
						onClick: this.onPostTabClick
					}, s.a.createElement(Fd, null), Pd(o)), s.a.createElement(Ad, {
						active: r === p.Gb.MEDIA,
						disabled: n.media,
						onClick: this.onMediaTabClick
					}, n.media && s.a.createElement(Ye.a, {
						text: Object(ne.a)(o, "postCreation.mediaPostTabDisabledTooltip", {
							subredditName: i
						})
					}), s.a.createElement(Ld, null), d), s.a.createElement(Ad, {
						active: r === p.Gb.LINK_ONLY,
						disabled: n.link,
						onClick: this.onLinkTabClick
					}, s.a.createElement(Nd, null), wd(o)), e && s.a.createElement(Ad, {
						active: r === p.Gb.POLL,
						onClick: this.onPollTabClick
					}, s.a.createElement(Dd, null), Id(o))))
				}
			}
			var Vd = Object(v.t)()(Hd(Wd)),
				zd = n("./src/reddit/components/PostCreationForm/index.m.less"),
				qd = n.n(zd);
			const Gd = Te.a.div("FormContent", qd.a),
				Jd = Te.a.wrapped(C.a, "CrosspostBox", qd.a),
				Zd = Te.a.div("FormContainer", qd.a),
				Qd = Te.a.div("TabContent", qd.a),
				Xd = Te.a.div("PostingGuidelines", qd.a),
				Yd = Object(v.t)({
					draftId: v.u,
					isPostCreationPage: v.E,
					pageLayer: e => e,
					sourcePostId: e => Object(v.S)(e).source_id
				}),
				$d = Object(i.c)({
					submissionType: T.a,
					allowNavigationCallback: S.a,
					contributorRequestPending: e => Object(w.h)(e, f.e.Post),
					discardGoesBack: (e, t) => {
						let {
							pageLayer: n
						} = t;
						const o = Object(v.P)(e, {
							pageLayer: n
						});
						return !!o && "/" === o[0]
					},
					draft: k.d,
					draftsCount: I.j,
					editorMode: T.m,
					eventSchedule: T.o,
					includeUserProfile: I.g,
					isChanged: T.z,
					isPostSubmitEnabled: xo,
					isScheduledPost: T.G,
					flair: T.q,
					hasError: T.r,
					havePostContent: T.w,
					language: I.S,
					linkBody: T.I,
					markdownBody: T.J,
					rteBody: T.V,
					maxDrafts: I.T,
					modalId: T.M,
					needsCaptcha: T.N,
					nextSubreddit: T.O,
					pending: T.Q,
					postRequirements: T.db,
					sourcePostRoot: T.Z,
					submitMode: T.bb,
					subredditDifficulty: (e, t) => {
						const n = Object(v.o)(e, t);
						if (n) return Object(_.a)(e, {
							subredditId: n.id
						})
					},
					subredditDifficultyExperiment: (e, t) => {
						const n = Object(v.o)(e, t);
						if (!n) return;
						const o = Object(_.a)(e, {
							subredditId: n.id
						});
						return o && o.difficultyScore ? Object(j.e)(e) : void 0
					},
					subredditOrProfile: v.o,
					title: T.eb,
					uploads: e => e.uploads
				});
			class eu extends s.a.Component {
				constructor(e) {
					super(e), this.postFieldValidationPending = null, this.sendStartTypingInputBodyEvent = d()(() => this.props.onStartTypingInput(g.l.BODY)), this.sendStartTypingInputTitleEvent = d()(() => this.props.onStartTypingInput(g.l.TITLE)), this.sendStartTypingInputUrlEvent = d()(() => this.props.onStartTypingInput(g.l.URL)), this.onExternalAccountConnected = () => {
						this.props.onExternalAccountsDataRequested()
					}, this.onRecaptchaSucceeded = () => {
						this.props.onSubmit(this.props.submitMode, this.postFieldValidationPending)
					}, this.onDiscardPromptOnNavigationConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.discardGoesBack || this.props.onDiscardPromptOnNavigationConfirmed(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onDiscardPromptOnNewPostConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.onToggleModal(g.c), this.props.onDiscardPromptOnCreatePostConfirmed()
					}, this.onDiscardPromptAbort = () => {
						this.props.onToggleModal(this.props.modalId), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.onDiscardPromptSaveDraft = () => {
						this.props.onToggleModal(this.props.modalId), this.onSaveDraft()
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === m.a.Enter && this.onSubmit()
					}, this.onSubredditChangePromptConfirmed = () => {
						this.props.nextSubreddit && (this.props.onCancelAndRemoveMediaUpload(), this.props.onRedirectToSubreddit(this.props.nextSubreddit))
					}, this.onSubmit = () => {
						if (this.props.isPostSubmitEnabled) {
							if (this.hasRichPostMedia() && this.props.isScheduledPost) return void this.props.onToggleModal(ql);
							this.props.onSubmit(this.props.isScheduledPost ? g.r.ScheduledPost : g.r.Post, this.postFieldValidationPending)
						}
					}, this.onSaveDraft = async () => {
						const {
							draftId: e,
							draftsCount: t,
							eventSchedule: n,
							maxDrafts: o,
							onToggleModal: s
						} = this.props;
						!e && t >= o ? s(_l.b) : n || this.hasRichPostMedia() ? s(Wl) : this.props.onSubmit(g.r.Draft, this.postFieldValidationPending)
					}, this.tryLoadDraft = e => {
						this.props.isChanged ? (this.setState({
							draftToLoad: e
						}), this.props.onToggleModal(_l.a)) : (this.props.onToggleModal(g.d), this.onLoadDraft(e))
					}, this.onLoadDraft = e => {
						e && this.props.onLoadDraft(e)
					}, this.onSelectCollection = e => {
						this.props.onSetDestCollection(e.id)
					}, this.onPromptCancel = e => {
						this.props.onToggleModal(e)
					}, this.onToggleCurrentModal = () => {
						this.props.modalId && this.props.onToggleModal(this.props.modalId)
					}, this.onPromptConfirm = e => {
						switch (e) {
							case _l.a:
								this.props.onToggleModal(e), this.onLoadDraft(this.state.draftToLoad);
								break;
							case _l.b:
								this.props.onRequestDraftList(), this.props.onToggleModal(g.d);
								break;
							default:
								this.props.onToggleModal(e)
						}
					}, this.onConfirmSavingDraftWithLimitations = () => {
						this.onToggleCurrentModal(), this.props.onSubmit(g.r.Draft, this.postFieldValidationPending)
					}, this.onConfirmSchedulingPostWithLimitations = () => {
						this.onToggleCurrentModal(), this.props.onSubmit(this.props.isScheduledPost ? g.r.ScheduledPost : g.r.Post, this.postFieldValidationPending)
					}, this.onToggleCollectionListModal = () => {
						this.props.onToggleModal(g.a)
					}, this.onCollectionCreated = e => {
						this.onToggleCurrentModal(), this.onSelectCollection(e)
					}, this.onDraftListClose = () => {
						this.props.onToggleModal(g.d)
					}, this.onPostFieldValidation = e => {
						this.postFieldValidationPending = e
					}, this.state = {
						draftToLoad: null
					}
				}
				componentDidMount() {
					Object(h.d)(h.a.PostComposer), this.externalAccountEventsChannel = Object(B.a)(), this.externalAccountEventsChannel.addEventListener("message", this.onExternalAccountConnected), this.props.subredditOrProfile && this.props.onSubredditDifficultyRequested(this.props.subredditOrProfile.id)
				}
				componentWillUnmount() {
					Object(h.b)(h.a.PostComposer), this.externalAccountEventsChannel && this.externalAccountEventsChannel.close(), this.props.onUnmount()
				}
				hasRichPostMedia() {
					const {
						rteBody: e,
						submissionType: t
					} = this.props;
					return t === p.Gb.POST && e.isBound && Object(y.j)(e.editorState.getCurrentContent())
				}
				renderActiveForm() {
					switch (this.props.submissionType) {
						case p.Gb.POST:
						case p.Gb.POLL:
							return s.a.createElement(vl, {
								displayPollCreation: this.props.submissionType === p.Gb.POLL,
								isScheduledPost: this.props.isScheduledPost,
								onChange: this.sendStartTypingInputBodyEvent,
								onPostFieldValidation: this.onPostFieldValidation,
								onSubmit: this.onSubmit
							});
						case p.Gb.MEDIA:
							return s.a.createElement(qi, null);
						case p.Gb.LINK_ONLY:
							return s.a.createElement(fr, {
								onChange: this.sendStartTypingInputUrlEvent,
								onKeyDown: this.handleKeyDown,
								onPostFieldValidation: this.onPostFieldValidation
							});
						case p.Gb.CROSSPOST: {
							const {
								sourcePostRoot: e
							} = this.props;
							return e && s.a.createElement(Jd, {
								postId: e.id,
								mediaProps: {
									isExpando: !1,
									isListing: !1,
									isNotCardView: !0,
									post: e,
									primaryContent: !1,
									showCentered: !0,
									showFull: !0,
									shouldLoad: !0,
									shouldPause: !1
								}
							})
						}
						default:
							return "Invalid submissionType"
					}
				}
				render() {
					const {
						contributorRequestPending: e,
						draftId: t,
						includeUserProfile: n,
						language: o,
						modalId: r,
						needsCaptcha: i,
						nextSubreddit: a,
						onClickSuggestedSubreddit: c,
						postRequirements: l,
						sourcePostId: d,
						sourcePostRoot: u,
						submissionType: m,
						submitMode: h,
						subredditDifficulty: f,
						subredditDifficultyExperiment: C,
						subredditOrProfile: y
					} = this.props;
					if (m === p.Gb.CROSSPOST) {
						if (!u) return s.a.createElement(x.b, {
							message: Object(b.c)("The original post cannot be found")
						});
						if (!u.isCrosspostable || u.isSponsored) return s.a.createElement(x.a, {
							message: Object(b.c)("The original post cannot be crossposted")
						})
					}
					const v = l && l.guidelinesText && l.guidelinesText.trim() || "";
					return s.a.createElement(Zd, null, s.a.createElement(Ya, {
						submissionType: m,
						submitMode: h
					}), s.a.createElement(Ao, {
						includeUserProfile: n,
						allowCrosspostableOnly: !!d
					}), C && !!y && f && f.difficultyScore && f.difficultyScore < .91 && s.a.createElement(yd, {
						difficultyScore: f.difficultyScore,
						experimentVariant: C,
						onTrackSuggestedSubredditClick: c,
						relatedSubreddits: f.relatedSubreddits
					}), !!v && s.a.createElement(Xd, null, v), s.a.createElement(Gd, null, m !== p.Gb.CROSSPOST && s.a.createElement(Vd, null), s.a.createElement(Qd, null, s.a.createElement(wl, {
						onChange: this.sendStartTypingInputTitleEvent,
						onKeyDown: this.handleKeyDown,
						onPostFieldValidation: this.onPostFieldValidation
					}), this.renderActiveForm()), e && s.a.createElement(E.a, null), s.a.createElement(So, {
						contributorRequestPending: e,
						draftId: t,
						onCancel: this.props.onDiscardPromptOnNavigationConfirmed,
						onPostFieldValidation: this.onPostFieldValidation,
						onSaveDraft: this.onSaveDraft,
						onSubmit: this.onSubmit,
						sourcePostId: d
					}), s.a.createElement(La, {
						draftId: t
					})), i && s.a.createElement(Hl, {
						callback: this.onRecaptchaSucceeded
					}), r === z && s.a.createElement(G, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNavigationConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: m
					}), r === g.c && s.a.createElement(G, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNewPostConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: m
					}), r === g.d && s.a.createElement(nr, {
						onClose: this.onDraftListClose,
						onLoadDraft: this.tryLoadDraft
					}), r === g.a && y && s.a.createElement(ee.a, {
						onClose: this.onToggleCollectionListModal,
						onSelectCollection: this.onSelectCollection,
						subredditId: y.id
					}), r === g.b && y && s.a.createElement(To.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.onCollectionCreated,
						subredditId: y.id
					}), (r === _l.a || r === _l.b) && s.a.createElement(_l.d, {
						modalId: r,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), r === Wl && s.a.createElement(zl, {
						onCancel: this.onToggleCurrentModal,
						onConfirm: this.onConfirmSavingDraftWithLimitations,
						language: o,
						hasEventSchedule: !!this.props.eventSchedule,
						hasRichPostMedia: this.hasRichPostMedia()
					}), r === ql && s.a.createElement(Gl, {
						onCancel: this.onToggleCurrentModal,
						onConfirm: this.onConfirmSchedulingPostWithLimitations
					}), a && (r === g.q.ImageWillBeRemoved || r === g.q.VideoWillBeRemovedTooLongForGif || r === g.q.VideoWillBeRemovedMediaNotAllowed) && s.a.createElement(sd, {
						withOverlay: !0,
						language: o,
						promptType: r,
						nextSubreddit: a,
						onConfirmed: this.onSubredditChangePromptConfirmed,
						onCanceled: this.props.onCancelSubredditChange
					}), s.a.createElement($, null))
				}
			}
			var tu = Yd(Object(r.b)($d, (e, t) => {
					let {
						draftId: n,
						sourcePostId: o,
						pageLayer: s
					} = t;
					return {
						onLoadDraft: t => e(L.q(t)),
						onSubmit: (t, r) => e(R.b(t, {
							draftId: n || void 0,
							pageLayer: s,
							postFieldValidationPending: r,
							sourcePostId: o
						})),
						onDiscardPromptOnCreatePostConfirmed: () => {
							e(a.q(!1, s))
						},
						onDiscardPromptOnNavigationConfirmed: (t, n) => {
							e(t ? Object(u.a)() : n ? Object(u.b)(n.url) : Object(u.b)("/"))
						},
						onExternalAccountsDataRequested: () => e(P.o()),
						onRedirectToSubreddit: t => e(N.a(t, n)),
						onCancelSubredditChange: () => {
							e(a.y("")), e(N.e())
						},
						onCancelAndRemoveMediaUpload: () => e(F.i(g.m, !0)),
						onClearErrors: (t, n) => t && e(a.j(n)),
						onClickSuggestedSubreddit: (t, n, o) => e((e, s) => O.v(s(), t, n, o)),
						onRequestDraftList: () => e(L.p()),
						onSetDestCollection: t => e(N.d(t)),
						onStartTypingInput: t => e((e, n) => O.k(n(), g.k.TYPE, t)),
						onSubredditDifficultyRequested: t => e(Object(D.a)(t)),
						onToggleIsChanged: t => e(a.s(t)),
						onToggleModal: t => e(a.y(t)),
						onTrackDiscardButtonClick: () => e((e, t) => O.c(t())),
						onUnmount: () => e((e, t) => {
							e(F.i(g.m, !0)), e(F.i(g.n, !0))
						}),
						onUploadPendingThumbnails: t => e(M.d(t))
					}
				}, (e, t, n) => Object.assign({}, e, t, n, {
					onClearErrors: n => t.onClearErrors(e.hasError || e.hasSubmitValidationError, n),
					onDiscardPromptOnNavigationConfirmed: () => t.onDiscardPromptOnNavigationConfirmed(e.discardGoesBack, e.subreddit)
				}))(eu)),
				nu = n("./src/reddit/components/PostingSidebar/index.tsx"),
				ou = n("./src/reddit/layout/page/Listing/index.tsx"),
				su = n("./src/lib/makePostCreationPageKey/index.ts"),
				ru = n("./src/reddit/helpers/trackers/screenview.ts"),
				iu = n("./src/telemetry/models/Timer.ts");
			const au = Object(i.c)({
					destSubreddit: T.g,
					language: I.S,
					user: I.i
				}),
				cu = Object(r.b)(au, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return {
						onResetForm: () => e(a.q(!1, n))
					}
				}),
				lu = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				});
			class du extends o.Component {
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0;
					const e = this.props.pageLayer;
					if (e) {
						const t = Object(su.a)(e.urlParams);
						te.c.has(t) && this.props.sendEvent(Object(ru.h)(t, iu.TimerType.InApp, te.c.end(t)))
					}
				}
				componentWillReceiveProps(e) {
					this.props.draftId && !e.draftId && e.onResetForm()
				}
				render() {
					const {
						destSubreddit: e,
						user: t
					} = this.props;
					if (e.isProfile) {
						if (!t) return s.a.createElement(x.b, null);
						if (Object(qo.f)(t).toLowerCase() !== e.name.toLowerCase()) return s.a.createElement(x.a, null)
					}
					return s.a.createElement(ou.a, {
						redditStyle: !0,
						disableFullscreen: !0,
						navBar: s.a.createElement("div", null),
						content: s.a.createElement(s.a.Fragment, null, s.a.createElement(c.a, null), s.a.createElement(tu, null)),
						sidebar: s.a.createElement(nu.a, null)
					})
				}
			}
			t.default = lu(cu(Object(zn.b)(du)))
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			}));
			const o = (e, t) => {
					let {
						post: n
					} = t;
					const o = n.belongsTo.id;
					if (!o) return null;
					const s = e.authorFlair.models[o];
					if (!s) return null;
					const r = n.author;
					return r && s[r] || null
				},
				s = (e, t) => {
					let {
						subredditId: n
					} = t;
					const o = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!o) return null;
					if (!n) return null;
					const s = e.authorFlair.models[n];
					return s ? s[o] : null
				},
				r = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return h
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "A", (function() {
				return E
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "p", (function() {
				return w
			})), n.d(t, "r", (function() {
				return P
			})), n.d(t, "s", (function() {
				return M
			})), n.d(t, "t", (function() {
				return R
			})), n.d(t, "z", (function() {
				return N
			})), n.d(t, "v", (function() {
				return L
			})), n.d(t, "w", (function() {
				return D
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "y", (function() {
				return B
			})), n.d(t, "n", (function() {
				return A
			})), n.d(t, "c", (function() {
				return K
			})), n.d(t, "x", (function() {
				return U
			})), n.d(t, "u", (function() {
				return H
			}));
			n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/helpers/economics/sortBadges.ts"),
				r = n("./src/reddit/helpers/richTextJson/index.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				a = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Payments/index.ts"),
				l = n("./src/reddit/models/Product/index.ts"),
				d = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = n("./src/reddit/selectors/comments.ts"),
				m = function(e, t) {
					var n = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
					}
					return n
				};
			const h = (e, t) => {
					const n = e.user.account,
						o = e.economics.subredditPremium[t];
					if (n && o && o.status === u.a.Fetched) {
						const o = ((e.users.appliedBadges[n.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (o) return {
							[a.a.Loyalty]: o.find(e => e.placement === i.a.First),
							[a.a.Achievement]: o.find(e => e.placement === i.a.Second),
							[a.a.Cosmetic]: o.find(e => !e.placement)
						}
					}
					return {
						[a.a.Loyalty]: void 0,
						[a.a.Achievement]: void 0,
						[a.a.Cosmetic]: void 0
					}
				},
				b = (e, t, n) => {
					if (!o.d.spBadges(e) && !o.d.spPremium(e)) return [];
					const r = (e.users.appliedBadges[n] || {})[t] || [];
					return Object(s.a)(r.map(t => e.badges.models[t]).filter(Boolean))
				},
				g = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === u.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				},
				f = (e, t) => {
					const n = R(e, t);
					return !!n && !!n.creator
				},
				x = (e, t) => {
					let {
						subredditId: n
					} = t;
					const o = e.subreddits.gov.communityJar[n];
					return o ? o.usdr : void 0
				},
				C = (e, t) => {
					const n = e.economics.tipDetails[t.subredditId];
					if (n) {
						const e = n[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.amount) return e.amounts.usdr.amount
					}
					return "0"
				};

			function E(e, t) {
				const n = e.economics.specialMemberships.data[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function y(e, t) {
				const {
					badge: n,
					subredditId: o
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(i.c)(n) && n.userId === s) return n;
				const r = e.badges.models,
					a = e.user.ownedBadges[o] || {},
					c = Object(i.c)(n) ? n.type : n.id;
				return Object.keys(a).map(e => r[e]).find(e => e && e.type === c)
			}

			function v(e, t, n, o) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === u.a.Fetched) {
					if (n === a.a.Loyalty || n === a.a.Achievement) return s.data.collections[n];
					if (n === a.a.Cosmetic && o) return s.data.collections[n][o]
				}
				return []
			}

			function O(e, t) {
				const n = v(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function j(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.d)
				}
				return []
			}

			function S(e, t) {
				return v(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(i.d)(e) || !!e.price))
			}
			const T = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === d.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const o = e[n];
						t.push({
							display: "".concat(o.brand, " •••• ").concat(o.last4),
							id: n,
							type: c.b.SavedStripe
						})
					}
				}
				if (n.status === d.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const o = e[n];
						"PayPal" === o.brand && t.push({
							display: "PayPal",
							id: o.id,
							type: c.b.SavedPayPal
						})
					}
				}
				return t
			};
			var k;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(k || (k = {}));
			const w = e => e.economics.paymentSystems.status === d.a.NotFetched ? k.NotFetched : e.economics.paymentSystems.status === d.a.Pending ? k.Fetching : k.Fetched,
				_ = {
					allowTrial: !0,
					price: "0",
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				I = {
					t5_vsb5g: "5000000000000000000000",
					t5_37jgj: "5000000000000000000000"
				},
				P = (e, t) => {
					const n = e.economics.specialMemberships.data[t || ""],
						s = e.subreddits.gov.meta[t || ""],
						r = n && n.active && n.active.membership,
						i = s && s.extra && s.extra.nomenclature || _;
					let a = _.price;
					if (r) a = r.price;
					else {
						const n = Object.values(e.products.models).filter(e => e.type === l.a.Membership && t && e.subredditId === t)[0];
						n && n.price && (a = n.price)
					}
					return a = I[t || ""] || a, {
						allowTrial: o.d.spFreeTrialSubscriptions(e),
						price: a,
						member: i.member || _.member,
						memberPlural: i.memberPlural || _.memberPlural,
						memberAlt: i.memberAlt || _.memberAlt,
						memberAltPlural: i.memberAltPlural || _.memberAltPlural,
						membership: i.membership || _.membership,
						membershipAlt: i.membershipAlt || _.membershipAlt
					}
				},
				M = (e, t) => {
					const n = e.economics.tipDetails[t.subredditId];
					if (n) {
						const e = n[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.users) {
							const t = e.amounts.usdr.users,
								{
									anonymous: n
								} = t,
								o = m(t, ["anonymous"]),
								s = Object.keys(o),
								r = s.map(e => Object.assign({
									id: e
								}, o[e])).sort((e, t) => parseInt(t.amount) - parseInt(e.amount)),
								i = n ? parseInt(n.amount) : 0,
								a = n ? n.numUsers : 0,
								c = r.slice(5),
								l = r.slice(0, 5);
							return {
								allTippers: new Set(s),
								topTippers: {
									list: l,
									others: {
										amount: String(c.reduce((e, t) => e + parseInt(t.amount), i)),
										count: c.length + a
									},
									ranking: l.reduce((e, t, n) => (e[t.id] = n + 1, e), {})
								}
							}
						}
					}
				},
				R = (e, t) => {
					const n = e.economics.tipDetails[t.subredditId];
					if (n) {
						const e = n[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.tipsProportions) return e.amounts.usdr.tipsProportions
					}
				},
				N = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === d.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return t.status === d.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				};
			var F;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(F || (F = {}));
			const B = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = A(e, t),
							o = Date.now();
						return n && o < n ? F.Subscribed : F.NotSubscribed
					}
					return F.DontKnow
				},
				A = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const e = n.data.subscription;
						return e && e.active && e.active.membership.endsAt || null
					}
					return null
				},
				K = (e, t) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				U = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				H = (e, t, n) => {
					const s = o.d.spGiphy(e),
						i = U(e, t),
						a = "replyToPost" !== n && Object(p.n)(e, {
							commentId: n
						}),
						c = !!a && Object(r.a)(a);
					return s && (i || c)
				}
		},
		"./src/reddit/selectors/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/actions/postCreation/constants.ts");
			const s = (e, t) => e.creations.api.editor.converting.pending[t || o.l]
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = new Set(["pollstest", "whatssnoo"]),
				c = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl"]),
				l = e => a.has(e.toLowerCase()) || c.has(e.toLowerCase()),
				d = e => a.has((Object(r.e)(e) || "").toLowerCase()) || c.has((Object(r.e)(e) || "").toLowerCase()) && Object(s.c)(e, {
					experimentEligibilitySelector: i.J,
					experimentName: o.hb
				}) === o.ob.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "s", (function() {
				return j
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "r", (function() {
				return _
			}));
			var o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				a = n("./src/reddit/selectors/postCreations.ts");
			const c = [],
				l = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					const o = j(e, {
						subredditId: n
					});
					return o && o.extra && o.extra.contracts && o.extra.contracts.harberger ? o.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				p = (e, t) => {
					const n = v(e, t);
					if (n) return n.mainHeader
				},
				m = (e, t) => {
					const n = v(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				h = (e, t) => {
					const n = v(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : l
				},
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(i.b)(e)) {
						const t = Object(a.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const n = r.d.spPolls(e) || r.d.spKarmaPoints(e),
						o = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (o) {
						const e = !!o.polls && !1 === o.polls.canCreate;
						return n && !e
					}
					return n
				},
				f = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				x = (e, t) => {
					const n = Object(o.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || c
				},
				C = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || d,
				y = (e, t) => {
					const n = k(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				v = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				O = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				j = (e, t) => {
					const n = O(e, t);
					return n && n.walletProvider
				},
				S = (e, t) => {
					const n = j(e, t),
						o = O(e, t);
					return n && n.provider || o && o.provider
				},
				T = (e, t) => {
					const n = S(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby
				},
				k = (e, t) => {
					const n = j(e, t),
						o = S(e, t);
					if (n && !n.inTransition && o === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const r = n && n.extra && n.extra.contracts,
						i = r && r.unlocked;
					return i && {
						address: i.address,
						symbol: i.token || "",
						decimals: i.decimals || 18,
						image: i.image
					}
				},
				w = (e, t) => {
					let {
						subredditId: n
					} = t;
					const o = j(e, {
						subredditId: n
					});
					return o && o.extra && o.extra.contracts && o.extra.contracts.subscriptions ? o.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				_ = (e, t) => {
					const n = O(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === o.a.Badge) return n
				},
				r = (e, t) => {
					let {
						productId: n
					} = t;
					const o = e.products.models[n];
					if (o) {
						const t = o.subredditId,
							s = Object.keys(e.user.ownedBadges[t] || {}),
							r = e.badges.models,
							i = Date.now();
						let a = !1;
						return s.forEach(e => {
							const t = r[e];
							t && t.type === n && t.endsAt > i && (a = !0)
						}), a
					}
					return !1
				}
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/config.ts"),
				s = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var l = n("./src/reddit/constants/jsapiEvents.ts");
			const d = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll('meta[name="'.concat(a, '"]'));
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(r.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(l.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, "".concat(o.a.redditUrl).concat(c), e))
					} catch (n) {
						return void console.error(i, "".concat(o.a.redditUrl).concat(c), n)
					}
					this.store.then(e => {
						e.dispatch(r.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const o = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(o), this.queue.length > d && this.queue.shift(), this.active && this.fireEvent(o)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					s.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		}
	}
]);
//# sourceMappingURL=PostCreation.a3cbb1cc0b0662d0cf9f.js.map
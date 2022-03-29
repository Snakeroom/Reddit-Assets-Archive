// https://www.redditstatic.com/desktop2x/Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3.f65a807781257ccca082.js
// Retrieved at 3/29/2022, 10:20:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"], {
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
					if (!t(e[n], n, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return r(e, (function(e, r, s) {
					return n = !!t(e, r, s)
				})), n
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayEvery.js"),
				s = n("./node_modules/lodash/_baseEvery.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? r : s;
				return n && a(e, t, n) && (t = void 0), c(e, o(t, 3))
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/Media/index.ts"),
				s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n.n(s);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: s
				} = e;
				let i = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = s || Object(r.D)(e)
				} else i = Object(r.D)(e);
				const a = o.a.parse(i),
					c = a.path || "",
					l = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (a.hostname ? a.hostname.replace("www.", "") : "") + l
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/intlSupport.ts");

			function o(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: o,
					locale: i = r.D
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const a = new Date(e * r.Sb);
				return s.a ? new Intl.DateTimeFormat(i, {
					month: o ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(a) : a.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/index.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.D;
				const n = new Date(1e3 * e);
				return n.toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const o = [s.rc, s.pb, s.B, s.Q, s.kb, s.Sb],
				i = {
					[s.Sb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.kb]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.Q]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.B]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.pb]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.rc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[s.Sb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.kb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.Q]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.B]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.rc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.rc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					l = new Date(e).getTime(),
					d = {
						[s.rc]: "",
						[s.pb]: "",
						[s.B]: "",
						[s.Q]: "",
						[s.kb]: "",
						[s.Sb]: ""
					};
				let u = l - c;
				if (u <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of o) {
					const e = Math.floor(u / r);
					e && (d[r] = (t ? a : i)[r](e).toString()), u -= e * r
				}
				const m = o.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : r.fbt._("{amount of time left} left", [r.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "i", (function() {
				return u
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				s = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(r.a)(s)
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "t", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "s", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "o", (function() {
				return T
			}));
			const r = "CREATE_COLLECTION_PENDING",
				s = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				a = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				l = "UPDATE_POST_WITH_COLLECTION_ID",
				d = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				_ = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				E = "REORDER_COLLECTION_PENDING",
				h = "REORDER_COLLECTION_SUCCESS",
				O = "REORDER_COLLECTION_FAILED",
				S = "UPDATE_COLLECTION_LAYOUT_PENDING",
				C = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				T = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "l", (function() {
				return F
			})), n.d(t, "k", (function() {
				return R
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "h", (function() {
				return Y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/flair/index.ts"),
				l = n("./src/reddit/helpers/flair.ts"),
				d = n("./src/reddit/models/Flair/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				_ = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				f = Object(s.a)(b),
				E = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				h = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				O = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				S = Object(s.a)(h),
				C = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				T = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				x = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				y = Object(s.a)(T),
				j = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				g = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				I = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				N = Object(s.a)(g),
				k = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				L = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				D = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				v = Object(s.a)(L),
				A = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				P = Object(s.a)(D),
				F = (e, t) => async (n, r, s) => {
					let {
						apiContext: o
					} = s;
					const i = r(),
						a = Object(p.S)(i, {
							subredditId: e
						}).name;
					n(_());
					const l = await Object(c.k)(o(), a, t);
					if (l.ok) {
						n(f({
							subredditId: e,
							isEnabled: t
						}))
					} else n(E());
					return l.ok
				}, R = (e, t) => async (n, r, s) => {
					let {
						apiContext: o
					} = s;
					const i = r(),
						a = Object(p.S)(i, {
							subredditId: e
						}).name;
					n(O());
					const l = await Object(c.j)(o(), t, d.d.LinkFlair, a);
					if (l.ok) {
						n(S({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(C());
					return l.ok
				}, w = (e, t) => async (n, s, o) => {
					let {
						apiContext: l
					} = o;
					const m = s(),
						b = Object(p.S)(m, {
							subredditId: t
						}).name;
					n(x());
					const _ = await Object(c.f)(l(), e, b, d.d.LinkFlair);
					let f = _.ok && !(_.body && !1 === _.body.success);
					if (f) {
						const r = _.body;
						if (n(y({
								subredditId: t,
								template: r
							})), r.id) {
							const s = e.styleTemplate,
								o = m.structuredStyles.flairTemplate.models[r.id];
							s ? f = await n(Object(i.d)(t, r.id, s)) : o && (f = await n(Object(i.c)(t, r.id)))
						}
					}
					if (f) {
						const e = Object(a.e)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(j());
						const s = Object(a.e)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), w(e, t));
						n(Object(a.f)(s))
					}
					return f
				}, M = (e, t) => async (n, s, o) => {
					let {
						apiContext: i
					} = o;
					const l = s(),
						d = Object(p.S)(l, {
							subredditId: t
						}).name;
					if (n(I()), (await Object(c.b)(i(), e, d)).ok) {
						n(N({
							subredditId: t,
							templateId: e
						}));
						const s = Object(a.e)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(a.f)(s))
					} else {
						n(k());
						const s = Object(a.e)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						n(Object(a.f)(s))
					}
				}, U = (e, t) => async (n, s, o) => {
					let {
						apiContext: i
					} = o;
					const l = s(),
						b = Object(m.d)(l, {
							subredditId: t
						}).templateIds,
						_ = Object(p.S)(l, {
							subredditId: t
						}).name;
					if (n(v({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(i(), _, d.d.LinkFlair, e)).ok) {
						n(A());
						const e = Object(a.e)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(P({
							subredditId: t,
							templateIds: b
						}));
						const s = Object(a.e)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						n(Object(a.f)(s))
					}
				}, Y = e => {
					let {
						post: t,
						previewFlair: n,
						selectedTemplateId: r
					} = e;
					return async (e, s, i) => {
						let {
							apiContext: a
						} = i;
						const d = t.flair.filter(e => !Object(l.q)(e.type));
						if (n && d.unshift(n), e(Object(o.S)({
								[t.id]: {
									flair: d
								}
							})), n) {
							const e = Object(l.g)(n);
							Object(c.h)(a(), t.id, r, e)
						} else Object(c.h)(a(), t.id, "", "")
					}
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "c", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forEach.js"),
				s = n.n(r),
				o = n("./node_modules/lodash/isEqual.js"),
				i = n.n(o),
				a = n("./node_modules/lodash/values.js"),
				c = n.n(a),
				l = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/imageUploads.ts"),
				u = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				_ = n("./src/reddit/constants/headers.ts");
			var f = n("./src/reddit/helpers/trackers/blade.ts"),
				E = n("./src/reddit/models/Image/index.tsx"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/telemetry/index.ts");
			const S = e => {
					let {
						subredditId: t,
						flairId: n,
						imageKey: r,
						imageData: s
					} = e;
					return async (e, o, i) => {
						const a = o(),
							c = Object(h.S)(a, {
								subredditId: t
							});
						if (!c) return !1;
						e(Object(d.k)(s));
						const l = await (async (e, t, n, r, s, o) => Object(p.a)(Object(b.a)(e, [_.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
							method: m.jb.POST,
							data: {
								filepath: r,
								imagetype: s,
								mimetype: o
							}
						}))(i.apiContext(), c.name, n, s.file.name, r, await Object(u.h)(s.file));
						let f = !1;
						try {
							const t = await Object(d.g)(o(), l, s, E.a.FlairTemplates);
							t && e(Object(d.j)(t)), f = !0
						} catch (O) {
							if (O instanceof Error) throw O;
							e(Object(d.i)(O))
						}
						return f
					}
				},
				C = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS",
				T = Object(l.a)(C),
				x = (e, t, n) => async (r, o, a) => {
					const {
						apiContext: l
					} = a;
					let u = o();
					const {
						pendingImages: C,
						...x
					} = n;
					let y = x;
					const j = Object(h.S)(u, {
						subredditId: e
					});
					if (!j) return !1;
					const g = u.structuredStyles.flairTemplate.models[t];
					if (g && i()(g, y)) return !0;
					if (C) {
						const n = [];
						if (s()(C, (s, o) => {
								s && n.push(r(S({
									flairId: t,
									imageData: Object(E.m)(s),
									imageKey: o,
									subredditId: e
								})))
							}), !(await Promise.all(n)).every(e => e)) return !1;
						y = ((e, t, n) => {
							const r = {
								...e
							};
							return s()(t, (e, t) => {
								const s = e && n.imageUploads[e.id];
								s && s.kind === E.b.TempUploaded && (r[t] = s.url)
							}), r
						})(y, C, o())
					}
					u = o();
					let I = null,
						N = null;
					const k = [];
					try {
						(I = await Object(d.f)(u, E.a.FlairTemplates)) && (N = Object(d.m)(I)(r, o, a), k.push(...c()(I.imagesByKey)))
					} catch (A) {
						return !1
					}
					const L = await (async (e, t, n, r) => Object(p.a)(Object(b.a)(e, [_.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
							method: m.jb.PUT,
							data: r
						}))(l(), j.name, t, y),
						D = g ? "edit_post_flair_template" : "save_post_flair_template",
						v = Object(f.e)(u, D);
					if (L.ok) {
						let e;
						if (N) try {
							await N, e = ((e, t, n) => {
								const r = {
									...e
								};
								return t.forEach(e => {
									const t = n.imageUploads[e.id];
									t && t.kind === E.b.Uploaded && (e.url === r.postBackgroundImage ? r.postBackgroundImage = t.url : e.url === r.postPlaceholderImage && (r.postPlaceholderImage = t.url))
								}), r
							})(y, k, o())
						} catch (A) {
							e = null
						} else e = y;
						r(T({
							flairId: t,
							template: e || y
						}))
					} else I && I.websocket.close();
					return Object(O.a)({
						...v,
						actionInfo: {
							...v.actionInfo,
							success: L.ok
						}
					}), L.ok
				}, y = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", j = Object(l.a)(y), g = (e, t) => async (n, r, s) => {
					let {
						apiContext: o
					} = s;
					const i = r(),
						a = Object(h.S)(i, {
							subredditId: e
						});
					if (!a) return !1;
					const c = await (async (e, t, n) => Object(p.a)(Object(b.a)(e, [_.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
							method: m.jb.DELETE
						}))(o(), a.name, t),
						l = Object(f.e)(i, "delete_flair_template");
					return c.ok && n(j({
						flairId: t
					})), Object(O.a)({
						...l,
						actionInfo: {
							...l.actionInfo,
							success: c.ok
						}
					}), c.ok
				}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				l = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(i.a)(e => {
				let {
					className: t,
					...n
				} = e;
				return s.a.createElement(a.a, d({}, n, {
					className: Object(o.a)(l.a.horizontalVotes, t),
					scoreClassName: Object(o.a)(l.a.customScoreStyles, n.scoreClassName),
					downvoteClassName: Object(a.b)(n) ? l.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
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
			n.d(t, "c", (function() {
				return Y
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "b", (function() {
				return H
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				o = n.n(s),
				i = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				l = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Emoji/index.m.less"),
				_ = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = p.a.wrapped(e => {
				let {
					backgroundImage: t,
					style: n,
					...r
				} = e;
				return c.a.createElement("div", f({
					style: {
						...n || {},
						backgroundImage: `url('${t}')`
					}
				}, r))
			}, "EmojiDisplay", _.a);
			var h = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				O = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				S = n("./src/reddit/constants/colors.ts"),
				C = n("./src/reddit/constants/parameters.ts"),
				T = n("./src/reddit/controls/InternalLink/index.tsx"),
				x = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				y = n("./src/reddit/icons/svgs/Close/index.tsx"),
				j = n("./src/reddit/models/Flair/index.ts"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = n("./src/reddit/components/Flair/index.m.less"),
				N = n.n(I);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const L = Object(O.a)(h.b),
				D = p.a.div("FlairWrapper", N.a),
				v = p.a.wrapped(l.a, "CloseButton", N.a),
				A = p.a.wrapped(Object(m.a)(e => {
					let {
						forceSmallEmojis: t,
						theme: n,
						...r
					} = e;
					const s = n;
					return c.a.createElement(E, k({
						style: {
							...P(!!t, s) || {}
						}
					}, r))
				}), "FlairEmojiDisplay", N.a),
				P = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				F = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(d.a)(n, {
						[C.q]: r,
						[C.t]: t ? "1" : ""
					})
				},
				R = e => e.isFlairFilter ? c.a.createElement(T.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(T.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: F(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class w extends c.a.Component {
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
					const e = c.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[N.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(g.a)(this.props).flair,
							color: `${Y(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(v, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(y.a, {
						className: N.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(g.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(L, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(R, {
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
			const M = Object(m.a)(w),
				U = Object(m.a)(e => {
					let t = "",
						n = !1;
					const r = e.richtext.map((r, s) => {
						if (r.e === j.c.Emoji) {
							const o = r;
							return t += o.a, n = !0, c.a.createElement(A, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: o.u,
								key: s,
								title: o.a
							})
						} {
							const e = r;
							return t += e.t, c.a.createElement("span", {
								key: s
							}, e.t)
						}
					});
					let s;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (s = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const o = c.a.createElement(D, {
						className: Object(u.a)(e.className, {
							[N.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...s,
							backgroundColor: e.backgroundColor || Object(g.a)(e).flair,
							color: `${Y(e)}`
						}
					}, r, e.isSelected && c.a.createElement(v, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(y.a, {
						className: N.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(g.a)(e).flair
						}
					})));
					return c.a.createElement(R, {
						flair: o,
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
				Y = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(g.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(x.a)(Object(g.a)(e).post, S.a.black, S.a.white) : e.textColor === j.e.Dark ? S.a.black : S.a.white,
				B = p.a.wrapped(M, "TextFlair", N.a),
				V = p.a.wrapped(U, "RichTextFlair", N.a),
				W = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.i)(.1, Object(g.a)(o()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				G = p.a.wrapped(e => {
					const t = W(e),
						n = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(R, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", N.a);

			function H(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: s,
					isFlairFilter: o,
					isSelected: i,
					onClick: a,
					onCloseClick: l,
					onMouseDown: d,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: _
				} = e, f = Object(u.a)({
					[N.a.flairVariant]: o,
					[N.a.small]: o && !e.large,
					[N.a.large]: o && e.large
				}, t);
				switch (s.type) {
					case j.f.Richtext:
						return n || !s.richtext ? null : c.a.createElement(V, {
							backgroundColor: s.backgroundColor,
							className: f,
							forceSmallEmojis: b,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: l,
							onMouseDown: d,
							redditStyle: !p,
							richtext: s.richtext,
							subredditName: m,
							textColor: s.textColor,
							to: _
						});
					case j.f.Text:
						return n || !s.text ? null : c.a.createElement(B, {
							backgroundColor: s.backgroundColor,
							className: f,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: l,
							onMouseDown: d,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: _
						});
					case j.f.Meta:
						return c.a.createElement(B, {
							backgroundColor: s.backgroundColor,
							className: t,
							isFlairFilter: o,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: _
						});
					case j.f.Nsfw:
					case j.f.Spoiler:
						return c.a.createElement(G, {
							className: t,
							text: s.text,
							type: s.type
						});
					case j.f.Quarantined:
						return null;
					case j.f.Oc:
						return c.a.createElement(B, {
							backgroundColor: S.a.alienblue,
							text: s.text,
							textColor: j.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return s.text ? c.a.createElement(B, {
							backgroundColor: s.backgroundColor,
							className: f,
							isFlairFilter: o,
							onClick: a,
							onCloseClick: l,
							onMouseDown: d,
							subredditName: m,
							text: s.text,
							redditStyle: !p,
							to: _
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/noop.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				d = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.Z
				}),
				b = Object(a.b)(p),
				_ = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = b(e => {
				let {
					className: t,
					isFlairFilter: n,
					onClick: r,
					onMouseDown: o,
					disabled: a = !1,
					flair: c,
					labelNSFW: m,
					subredditName: p
				} = e;
				const b = !!c.find(e => e.type === u.f.Richtext),
					f = c.map(e => {
						if (e.type === u.f.Text && b) return null;
						if (!m && e.type === u.f.Nsfw) return null;
						const t = Object(d.j)(e),
							c = `/r/${p}/`,
							f = o ? () => o(e) : s.a;
						return i.a.createElement(l.b, {
							isFlairFilter: n,
							key: _(e),
							onClick: r,
							onMouseDown: f,
							disabled: a,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: p,
							to: Object(d.e)(c, t)
						})
					});
				return i.a.createElement("div", {
					className: t
				}, f)
			})
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
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/FlairList/index.tsx"),
				d = n("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/flair.ts"),
				b = n("./src/reddit/helpers/trackers/postFlair.ts"),
				_ = n("./src/reddit/models/Flair/index.ts"),
				f = n("./src/reddit/selectors/postFlair.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/FlairWrapper/index.m.less"),
				O = n.n(h);
			const S = Object(i.b)(() => Object(a.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(u.q)(e, {
							pageLayer: n
						})
					},
					isPostFlairEnabled: (e, t) => Object(f.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					subredditName: (e, t) => {
						let {
							post: n
						} = t;
						return Object(E.S)(e, {
							subredditId: n.belongsTo.id
						}).name
					}
				})),
				C = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: r.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: _.f.Oc
					}), e.isMeta && t.push({
						text: r.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: _.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = S(e => {
				let {
					className: t,
					disableFlair: n,
					flairPosition: r,
					isFlairFilter: s,
					isPostFlairEnabled: i,
					nowrap: a,
					post: u,
					sendEvent: f,
					subredditName: E,
					titleFlair: h
				} = e;
				const S = Object(d.a)(),
					T = r === _.b.Left,
					x = h || C(u),
					y = [];
				let j = [];
				T ? x.map(e => {
					Object(p.q)(e.type) ? y.push(e) : j.push(e)
				}) : j = x;
				const g = a ? O.a.flairNoWrap : y.length > 0 || j.length > 0 ? O.a.flairWrapper : null,
					I = e => {
						const t = {
							id: u.belongsTo.id,
							eventType: u.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(m.e)(m.a.SearchResults), f && f(Object(b.a)(u.id, t))
					},
					N = e => {
						Object(m.e)(m.a.SearchResults), f && f(Object(b.e)(e, u.id))
					},
					k = !(n || !x || !x.length);
				return k ? o.a.createElement("div", {
					className: Object(c.a)(g, t),
					"data-ignore-click": S
				}, k && y && o.a.createElement(l.a, {
					className: O.a.flairList,
					isFlairFilter: s,
					key: "leftFlair",
					onClick: I,
					onMouseDown: N,
					flair: y,
					disabled: !i,
					subredditName: E
				}), k && o.a.createElement(l.a, {
					className: O.a.flairList,
					isFlairFilter: s,
					key: "rightFlair",
					onClick: I,
					onMouseDown: N,
					flair: j,
					disabled: !i,
					subredditName: E
				})) : null
			})
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(r.a)({
				ErrorComponent: o,
				getComponent: () => Object(s.a)(() => n.e("SubredditHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return f
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/timeAgo/index.ts"),
				i = n("./src/reddit/hooks/useLocale.ts");
			var a = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const a = Object(i.a)(),
						c = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : a
						};
					return s.a.createElement(s.a.Fragment, null, Object(o.d)(t, c))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var l = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const o = Object(i.a)(),
						a = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : o
						};
					return s.a.createElement(s.a.Fragment, null, Object(c.a)(t, a))
				},
				d = n("./src/lib/constants/index.ts");
			var u = function(e) {
					let {
						seconds: t,
						locale: n
					} = e;
					const r = Object(i.a)(),
						o = null != n ? n : r;
					return s.a.createElement(s.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.D;
						const n = e * d.Sb;
						return new Date(n).toLocaleString(t, {
							weekday: "short",
							month: "short",
							year: "numeric",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							timeZoneName: "long"
						})
					}(t, o))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function b(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.D;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function _(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.D;
				const s = Object(p.e)(e, t),
					o = new Date(e * d.Sb);
				let i;
				if (s === p.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === p.a.Future ? i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(o, r) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.D;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, r) : s === p.a.Past && (i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(o, r)), `${i} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.D;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,r)}`
			}
			var f = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: r,
					locale: o
				} = e;
				const a = Object(i.a)(),
					c = null != o ? o : a;
				return s.a.createElement(s.a.Fragment, null, _(t, n, r, c))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return E
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/selectors/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(d),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = m.a.div("Text", u.a),
				_ = m.a.div("BottomText", u.a),
				f = e => s.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				E = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(_, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				h = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(l.b)(n)(e)
					}
				}),
				O = Object(c.a)(E, [a.a.Click, a.a.Keydown]),
				S = Object(c.a)(f, [a.a.Click, a.a.Keydown]),
				C = Object(o.b)(h);
			t.c = C(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(O, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(S, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e, t) {
				const n = Object(o.a)(e, t);
				class r extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(n, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(r)
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/components/HumanDate/index.tsx"),
				o = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function l(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(s.d, {
					seconds: e.poll.endsAt / r.Sb
				}))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
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
				Metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return A
			})), n.d(t, "a", (function() {
				return q
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/ads/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/OutboundLink/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				_ = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = n("./src/reddit/actions/post.ts"),
				E = n("./src/reddit/helpers/flair.ts"),
				h = n("./src/reddit/helpers/path/index.ts"),
				O = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				S = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/models/Flair/index.ts"),
				T = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				y = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = n("./src/lib/getShortenedLink.ts"),
				g = n("./src/reddit/components/FlairWrapper/index.tsx"),
				I = n("./node_modules/fbt/lib/FbtPublic.js"),
				N = n("./src/lib/prettyPrintNumber/index.ts"),
				k = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				L = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				D = n.n(L);
			const v = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var A, P = Object(i.b)(v)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, r = n ? n.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(d.a)(e.className, D.a.proposalMetaData)
					}, o.a.createElement("span", null, I.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [I.fbt._param("count", Object(N.a)(r)), I.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(k.a, {
						className: D.a.proposalExpiry,
						poll: t
					}))
				})),
				F = n("./src/reddit/components/SEOTitle/index.tsx"),
				R = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/components/PostTitle/index.m.less"),
				U = n.n(M),
				Y = n("./src/config.ts"),
				B = n("./src/reddit/hooks/useClickSourceData.ts"),
				V = n("./src/reddit/hooks/usePostContext.ts"),
				W = n("./src/reddit/hooks/useTheme.ts"),
				G = n("./src/telemetry/models/Outbound.ts");

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(A || (A = {}));
			const q = e => {
					let {
						size: t,
						titleColor: n,
						titleType: r,
						nowrap: s,
						children: i,
						className: a,
						redditStyle: c
					} = e;
					const l = Object(W.a)();
					let u = "";
					switch (t) {
						case A.ExtraLarge:
							u = U.a.ExtraLarge;
							break;
						case A.Large:
							u = U.a.Large;
							break;
						case A.Medium:
							u = U.a.Medium;
							break;
						case A.Small:
							u = U.a.Small;
							break;
						case A.ExtraSmall:
							u = U.a.ExtraSmall;
							break;
						case A.Metadata:
							u = U.a.Metadata
					}
					return o.a.createElement("div", {
						className: Object(d.a)(U.a.Title, a, u, {
							[U.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": n || Object(y.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, r ? o.a.createElement(F.b, {
						type: r
					}, i) : i)
				},
				z = e => {
					let {
						className: t,
						disableVisited: n,
						titleColor: r,
						children: s,
						...i
					} = e;
					return o.a.createElement(a.a, H({}, i, {
						className: Object(d.a)(t, U.a.styledLink, {
							[U.a.isVisitedEnabled]: !n
						})
					}), s)
				},
				$ = e => {
					let {
						disableVisited: t,
						nowrap: n,
						className: r,
						children: s
					} = e;
					return o.a.createElement("div", {
						className: Object(d.a)(U.a.titleContainer, r, {
							[U.a.isNoWrap]: n,
							[U.a.isVisitedEnabled]: !t
						})
					}, s)
				},
				Q = Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(m.q)(e, {
							pageLayer: n
						})
					},
					shouldOpenPostInNewTab: w.ib
				}),
				Z = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: r
					} = t, s = Object(i.d)(), a = Object(B.a)(), c = Object(i.e)(R.b), d = e => {
						!c || t.media && Object(T.H)(t.media) || (e.preventDefault(), s(Object(f.bb)(Object(h.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement($, {
						nowrap: e.nowrap
					}, o.a.createElement(X, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(p.b, {
						href: t.source.url,
						isSponsored: r,
						postId: t.id,
						source: t.source
					}, o.a.createElement(X, e)); {
						const s = t.media && Object(T.H)(t.media) ? Object(O.c)(t.id, n.name) : t.permalink,
							i = e.isCommentPermalink ? Object(h.b)(s) : Object(_.a)(s, void 0, a);
						return o.a.createElement($, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, r ? ((e, t) => {
							const {
								source: n
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return n ? o.a.createElement(p.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, o.a.createElement(X, t)) : o.a.createElement(X, t)
						})(t, e) : o.a.createElement(z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i,
							onClick: d
						}, o.a.createElement(X, e)))
					}
				},
				X = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: r
					} = e;
					let s = e.format ? e.format(r) : r.title;
					n && "string" == typeof s && (s = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(s));
					const i = e.isCommentsPage ? F.a.PostComments : F.a.PostItem;
					return o.a.createElement(q, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && o.a.createElement(g.a, {
						titleFlair: t,
						nowrap: !0,
						post: r,
						sendEvent: e.sendEvent
					}), s)
				},
				K = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: r
					} = n, s = e.isCommentsPage ? G.SourceElement.PostLink : G.SourceElement.ListingPostLink, i = !t && !e.isCrosspost && e.size !== A.Large && !n.isSponsored && !(n.media && Object(T.H)(n.media)) && (n.source || n.media && (n.media.type === T.o.GIFVIDEO || n.media.type === T.o.IMAGE || n.media.type === T.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return o.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(T.D)(n),
							isSponsored: r,
							postId: n.id,
							source: n.source,
							sourceElement: s
						}, Object(j.a)(n), !n.isSponsored && o.a.createElement(S.a, {
							name: "external_link",
							className: U.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== A.Large && e.size !== A.ExtraLarge) return o.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: r,
						postId: n.id,
						source: n.source,
						sourceElement: s
					}, Object(j.a)(n), !n.isSponsored && o.a.createElement(S.a, {
						name: "external_link",
						className: U.a.outboundLinkIcon
					}));
					return null
				};
			class J extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${U.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(r.c)(.45,Object(y.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(r.c)(.45,this.props.titleColor||Object(y.a)(this.props).titleText,Object(y.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: r,
						isOverlay: s,
						poll: i,
						post: a,
						showNSFWSpoilerFlairsOnly: c,
						showNSFWFlairsOnly: l
					} = this.props, u = n === C.b.Left, m = Object(g.b)(a), p = c ? m.filter(e => e.type === C.f.Nsfw || e.type === C.f.Spoiler) : u ? m.filter(e => Object(E.q)(e.type)) : [];
					let b = m;
					c ? b = [] : l ? b = m.filter(e => e.type === C.f.Nsfw) : u && (b = m.filter(e => !Object(E.q)(e.type)));
					const _ = !s && !r,
						f = !t && p && p.length > 0 && _,
						h = !t && b && b.length > 0 && _;
					return o.a.createElement("div", {
						className: Object(d.a)(U.a.Component, e, a.id),
						ref: this.props.innerRef
					}, !c && f && o.a.createElement(g.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent
					}), !Object(x.b)(a) && o.a.createElement(Z, H({}, this.props, {
						leftFlair: c ? p : void 0
					})), i && o.a.createElement(P, {
						className: U.a.pollMeta,
						pollId: i.id
					}), o.a.createElement(K, this.props), h && o.a.createElement(g.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent
					}), o.a.createElement("div", {
						className: U.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${Y.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(m.fb)(),
					n = Object(m.w)(t),
					r = Object(V.a)(),
					s = Object(i.e)(s => Q(s, {
						...r,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					a = Object(W.a)(),
					c = Object(u.b)();
				return r ? o.a.createElement(J, H({
					pageLayer: t,
					isCommentPermalink: n
				}, r, s, e, {
					theme: a,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js");
			const s = Object(r.createContext)(!1);

			function o() {
				return Object(r.useContext)(s)
			}
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, n) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
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
			n.d(t, "b", (function() {
				return D
			}));
			var r = n("./src/lib/isUrl/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				d = n("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = n("./src/reddit/controls/ContentType/index.tsx"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/models/Theme/index.ts"),
				f = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = n("./src/telemetry/models/Outbound.ts"),
				h = n("./src/reddit/components/Thumbnail/index.m.less"),
				O = n.n(h);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => e.placeholderImage || Object(f.a)(e).placeholderImage,
				T = e => e.placeholderImage ? "cover" : Object(f.a)(e).placeholderImagePosition,
				x = c.a.span("LinkText", O.a),
				y = e => {
					let {
						className: t,
						onClick: n,
						children: r
					} = e;
					return o.a.createElement("div", {
						onClick: n,
						className: Object(i.a)(O.a.linkIcon, t)
					}, r)
				},
				j = e => o.a.createElement("img", {
					alt: e.alt,
					className: Object(i.a)(O.a.hiddenImage, e.className)
				}),
				g = e => {
					const t = o.a.createRef(),
						{
							src: n,
							errorSrc: r
						} = e;
					return n && r && Object(d.a)(n).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${r})`)
					}), o.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(i.a)(O.a.thumbnail, O.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(f.a)(e).button : Object(f.a)(e).line
						}
					}, e.isOutbound && o.a.createElement(y, {
						className: e.linkIconClassName
					}, o.a.createElement(p.a, {
						className: Object(i.a)(O.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(x, {
						className: e.linkTextClassName
					}, e.text)), o.a.createElement(j, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				I = e => e.isOutbound ? Object(f.a)(e).button : e.placeholderImage ? "transparent" : Object(f.a)(e).line,
				N = e => {
					const t = C(e),
						n = t && {
							background: Object(_.g)(Object(f.a)(e).placeholder, t, T(e))
						};
					return o.a.createElement("div", {
						className: Object(i.a)(O.a.thumbnail, O.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...n,
							borderColor: I(e)
						}
					}, (!e.placeholderImage || e.showContentType) && o.a.createElement(u.a, {
						className: Object(i.a)(e.contentTypeClassName, O.a.contentType, {
							[O.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && o.a.createElement(y, {
						className: e.linkIconClassName
					}, o.a.createElement(p.a, {
						className: Object(i.a)(O.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(x, {
						className: e.linkTextClassName
					}, e.text)))
				},
				k = e => o.a.createElement(g, S({}, e, {
					className: Object(i.a)(O.a.blurredThumbnail, e.className)
				})),
				L = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: n,
						contentTypeClassName: s,
						crosspost: a,
						forceShowNSFW: c,
						isCommentsPage: l,
						isMeta: d,
						linkIconClassName: u,
						linkTextClassName: p,
						outboundLinkIconClassName: _,
						post: f,
						redditStyle: h,
						removeLink: S,
						showContentType: T,
						templatePlaceholderImage: x,
						text: y,
						theme: j,
						usePreview: g
					} = e, I = !j.subredditContext.shouldShowNSFWContent && (f.isNSFW || !(!a || !a.isNSFW)) && !c, N = C({
						placeholderImage: x,
						redditStyle: h,
						theme: j
					}), k = D(e), L = l ? E.SourceElement.PostImage : E.SourceElement.ListingPostImage, v = A(f, t, N, I, y, j, k, d, T, S, h, u, p, _, s), P = Object(b.D)(f);
					return Object(r.a)(P) && !S && P.indexOf("redditmedia") < 0 ? o.a.createElement("div", {
						className: Object(i.a)(O.a.container, g ? O.a.usePreview : "", n)
					}, o.a.createElement(m.b, {
						href: Object(b.D)(f),
						isSponsored: f.isSponsored,
						postId: f.id,
						source: f.source,
						sourceElement: L
					}, v)) : o.a.createElement("div", {
						className: Object(i.a)(O.a.container, g ? O.a.usePreview : "", n)
					}, v)
				}),
				D = e => {
					let {
						crosspost: t,
						post: n,
						url: r,
						usePreview: s
					} = e;
					if (r) return r;
					const {
						preview: o,
						media: i,
						thumbnail: a
					} = t || n;
					return s && o ? o.url : n.isSponsored && o && "default" === a.url ? o.url : v(i) ? i.scrubberThumbSource : a.url
				},
				v = e => !!e && e.type === b.o.LIVEVIDEO,
				A = (e, t, n, s, a, c, d, u, m, p, b, _, f, E, h) => {
					const C = (e => e.source && !e.isSponsored || !1)(e);
					if (Object(r.a)(d)) {
						const n = v(e.media),
							r = n ? {
								errorSrc: l.U
							} : {},
							u = Object(i.a)(t, {
								[O.a.verticallyCenterThumbnail]: n
							});
						return s ? o.a.createElement(k, S({
							"data-click-id": "image",
							src: d
						}, r, {
							className: u,
							isOutbound: C && !p,
							linkIconClassName: _,
							linkTextClassName: f,
							outboundLinkIconClassName: E,
							redditStyle: b,
							text: a,
							theme: c
						})) : o.a.createElement(g, S({
							alt: e.title,
							className: u,
							src: d
						}, r, {
							isOutbound: C && !p,
							linkIconClassName: _,
							linkTextClassName: f,
							outboundLinkIconClassName: E,
							redditStyle: b,
							text: a,
							theme: c
						}))
					}
					return o.a.createElement(N, {
						className: t,
						contentTypeClassName: h,
						placeholderImage: n,
						isMeta: u,
						isOutbound: C && !p,
						linkIconClassName: _,
						linkTextClassName: f,
						outboundLinkIconClassName: E,
						redditStyle: b,
						showContentType: m,
						text: a,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = L
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, n) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/ContentType/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/icons.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/controls/ContentType/index.m.less"),
				d = n.n(l);
			const u = e => Object(o.a)(d.a.contentTypeIcon, e.className),
				m = {
					embed: i.a.embed,
					gallery: i.a.media_gallery,
					gifvideo: i.a.gif_post,
					image: i.a.image_post,
					meta: i.a.poll_post,
					rpan: i.a.video_live,
					rtjson: i.a.text_post,
					text: i.a.text_post,
					video: i.a.video_post,
					liveaudio: i.a.audio
				};

			function p(e) {
				const t = u(e),
					n = e.type && m[e.type] || i.a.link_post;
				return s.a.createElement(a.a, {
					name: n,
					className: Object(o.a)({
						[c.a]: n === i.a.link_post
					}, t)
				})
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/constants/elementClassNames.ts"),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = n.n(i);
			t.a = r.a.wrapped(o.b, "styledOutboundLink", {
				styledOutboundLink: `${a.a.styledOutboundLink} ${s.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, n) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function s(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.I.NO_STRIPE_SUBSCRIPTION:
							case r.I.USER_DOESNT_EXIST:
							case r.I.USER_REQUIRED_ERROR:
							case r.I.VALIDATION_ERROR:
								return e;
							case r.I.NO_USER:
							case r.I.NO_TEXT:
							case r.I.NO_URL:
								return r.I.VALIDATION_ERROR;
							case r.I.CREDIT_CARD_FAILURE:
							case r.I.CREDIT_CARD_FAILURE_GENERIC:
								return r.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.I.VALIDATION_ERROR
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
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/RichTextJson/index.ts");
			const s = "giphy|",
				o = "emote|",
				i = "|downsized";

			function a(e, t) {
				return s + e + (t ? i : "")
			}

			function c(e) {
				return !!(null == e ? void 0 : e.startsWith(s))
			}

			function l(e) {
				return !!(null == e ? void 0 : e.startsWith(o))
			}

			function d(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(c)
			}

			function u(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(l)
			}

			function m(e) {
				let t = e.substring(s.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function p(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...p(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function b(e) {
				return p(e, r.F).map(e => e.id)
			}

			function _(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return p(e, e => e.e === r.o || t && e.e === r.y).map(e => e.u ? e.u : `https://reddit.com/r/${e.t}`)
			}
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				o = n("./src/reddit/selectors/experiments/serpSIIDs.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/helpers/flair.ts"),
				c = n("./src/reddit/helpers/search/searchImpressionId.ts");
			const l = (e, t) => n => {
					const a = `flair_name:'${t.postFlairName}'`;
					return {
						source: "post",
						action: "click",
						noun: "post_flair",
						...i.o(n),
						actionInfo: i.d(n),
						correlationId: Object(r.c)(r.a.SearchResults),
						post: i.I(n, e),
						search: {
							...i.M(n, t),
							query: a,
							queryId: i.bb(n, s.a.SERP),
							impressionId: Object(o.a)(n) ? c.a.get(s.a.SERP) : void 0
						},
						subreddit: i.hb(n)
					}
				},
				d = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...i.o(t),
					actionInfo: i.d(t),
					correlationId: Object(r.c)(r.a.SearchResults),
					search: i.M(t, e),
					subreddit: i.hb(t)
				}),
				u = e => t => {
					const n = Object(a.g)(e);
					return {
						...i.o(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: i.hb(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				m = () => e => ({
					...i.o(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: i.hb(e)
				}),
				p = e => t => {
					const n = Object(a.g)(e);
					return {
						...i.o(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: i.hb(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				b = (e, t) => n => {
					const r = Object(a.g)(e),
						l = i.I(n, t),
						d = `flair_name:'${r}'`;
					return {
						...i.o(n),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: i.hb(n),
						postFlair: {
							id: e.templateId,
							title: r
						},
						post: l,
						search: {
							query: d,
							subredditId: l ? l.subredditId : void 0,
							subredditName: l ? l.subredditName : void 0,
							postFlairName: r,
							originElement: "post_flair",
							queryId: i.bb(n, s.a.SERP),
							impressionId: Object(o.a)(n) ? c.a.get(s.a.SERP) : void 0,
							originPageType: n.platform.currentPage ? i.v(n.platform.currentPage) : void 0
						},
						feed: i.r(n)
					}
				}
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "y", (function() {
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "p", (function() {
				return d
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "r", (function() {
				return _
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "g", (function() {
				return T
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "x", (function() {
				return I
			})), n.d(t, "u", (function() {
				return N
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "s", (function() {
				return L
			})), n.d(t, "v", (function() {
				return D
			})), n.d(t, "w", (function() {
				return v
			}));
			var r = n("./src/reddit/models/ScheduledPost/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...s.o(e),
					screen: s.Z(e),
					subreddit: s.hb(e),
					userSubreddit: s.rb(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(r.p)(e)
				}),
				a = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...o(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...o(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...o(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...o(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...o(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...o(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				_ = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				f = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...o(e)
				}),
				E = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...o(e)
				}),
				h = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(e)
				}),
				O = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...o(e)
				}),
				S = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...o(t),
					actionInfo: s.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				C = {
					[r.d.Hourly]: "hourly_frequency",
					[r.d.Daily]: "daily_frequency",
					[r.d.Weekly]: "weekly_frequency",
					[r.d.Monthly]: "monthly_frequency",
					[r.b]: "custom_frequency"
				},
				T = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : C[e],
					...o(t)
				}),
				x = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				y = (e, t, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(r.l)(e),
					...o(i),
					actionInfo: s.d(i, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				j = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...o(e)
				}),
				g = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...o(e)
				}),
				I = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				N = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(e),
					scheduledPost: i(t)
				}),
				k = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				L = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: i(t)
				}),
				D = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				v = () => (e, t) => {
					const n = o(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/clickSourceData/index.ts");

			function i() {
				const e = Object(s.e)(e => e.platform.currentPage),
					[t, n] = Object(r.useState)({});
				return Object(r.useEffect)(() => {
					n(Object(o.b)(e))
				}, [e]), t
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/meta.ts");
			const a = "undefined" == typeof document ? function() {
				const e = Object(o.e)(i.i) || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			};
			t.a = a;
			const c = () => {
				const e = a(),
					t = Object(o.e)(i.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/sentry/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/Post/index.tsx");

			function i() {
				const e = Object(s.useContext)(o.c);
				return e || r.c.captureMessage("No post context provided"), e
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(r.useContext)(s.b)
			}
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(o.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var r, s, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const i = {
					[r.Loyalty]: o.a.First,
					[r.Achievement]: o.a.Second,
					[r.Cosmetic]: void 0
				},
				a = e => e === o.a.First ? r.Loyalty : e === o.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "p", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/reddit/models/GqlTopLevelField.ts"),
				o = n("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var a, c, l;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(a || (a = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(l || (l = {}));
			const d = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === o.c.AvailableRedditor,
				m = e => e.__typename === s.a.Subreddit;
			var p, b, _, f;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(_ || (_ = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(f || (f = {}));
			const E = e => b[f[e]],
				h = e => f[b[e]],
				O = e => _[b[e]],
				S = e => b[_[e]],
				C = e => f[_[e]];
			var T;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(T || (T = {}));
			const x = e => {
					switch (e) {
						case T.Hourly:
						case T.Daily:
						case T.Weekly:
						case T.Monthly:
							return !0
					}
					return !1
				},
				y = "custom",
				j = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(r.a)(e)
					}
				},
				g = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const o = {
				status: r.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: r.Failure
						};
					case s.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case s.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const l = {};

			function d(e) {
				return "userId" in e
			}

			function u(e, t, n, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === a.a.First ? r[c.a.Loyalty][s] : r[c.a.Achievement][s] : d(e) ? r[c.a.Cosmetic][c.c.MyBadges][s] : r[c.a.Cosmetic][c.c.Gallery][s]) && (d(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(i.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(i.b)(r, s)
				})
			}

			function b(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const r = e.collections[n],
						s = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const r = e.badges[t];
					r && n.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, r, t), u(Object.keys(e.products).map(t => e.products[t]), n, r, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: b(n),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.g
					}) === r.a.Enabled
				},
				i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.m
					}) === r.ed
				},
				a = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.n
					}) === r.ed
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3.f65a807781257ccca082.js.map